#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG images to WebP format with quality optimization
 * Generates responsive image sizes
 * Creates backup of original images
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    inputDir: './images',
    outputDir: './images/optimized',
    backupDir: './images/backup',

    // WebP conversion settings
    webp: {
        quality: 85,        // 85% quality (good balance)
        effort: 6,          // Compression effort (0-6, higher = smaller file)
        alphaQuality: 100   // Preserve transparency quality
    },

    // Generate responsive sizes
    responsiveSizes: [
        { suffix: '-thumb', width: 400 },   // Thumbnails
        { suffix: '-small', width: 800 },   // Mobile
        { suffix: '-medium', width: 1200 }, // Tablet
        { suffix: '-large', width: 1920 }   // Desktop
    ],

    // Skip these patterns
    skipPatterns: [
        /optimized/,
        /backup/,
        /\.webp$/,
        /node_modules/
    ]
};

// Statistics
const stats = {
    totalFiles: 0,
    processed: 0,
    skipped: 0,
    errors: 0,
    originalSize: 0,
    optimizedSize: 0,
    startTime: Date.now()
};

/**
 * Main execution
 */
async function main() {
    console.log('\n' + '='.repeat(60));
    console.log('🖼️  IMAGE OPTIMIZATION SCRIPT');
    console.log('='.repeat(60) + '\n');

    // Create output directories
    ensureDirectoryExists(CONFIG.outputDir);
    ensureDirectoryExists(CONFIG.backupDir);

    // Find all image files
    const imageFiles = findImageFiles(CONFIG.inputDir);
    stats.totalFiles = imageFiles.length;

    console.log(`📊 Found ${imageFiles.length} images to process\n`);

    if (imageFiles.length === 0) {
        console.log('❌ No images found in', CONFIG.inputDir);
        return;
    }

    // Process each image
    for (const imagePath of imageFiles) {
        await processImage(imagePath);
    }

    // Print summary
    printSummary();
}

/**
 * Find all PNG image files recursively
 */
function findImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // Skip if matches skip patterns
        if (CONFIG.skipPatterns.some(pattern => pattern.test(filePath))) {
            return;
        }

        if (stat.isDirectory()) {
            findImageFiles(filePath, fileList);
        } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

/**
 * Process a single image file
 */
async function processImage(imagePath) {
    const filename = path.basename(imagePath, path.extname(imagePath));
    const relativeDir = path.dirname(path.relative(CONFIG.inputDir, imagePath));

    try {
        console.log(`⚙️  Processing: ${path.basename(imagePath)}`);

        // Get original file size
        const originalSize = fs.statSync(imagePath).size;
        stats.originalSize += originalSize;

        // Create backup
        const backupPath = path.join(CONFIG.backupDir, relativeDir, path.basename(imagePath));
        ensureDirectoryExists(path.dirname(backupPath));
        fs.copyFileSync(imagePath, backupPath);

        // Load image with sharp
        const image = sharp(imagePath);
        const metadata = await image.metadata();

        console.log(`   📐 Original: ${metadata.width}x${metadata.height} (${formatBytes(originalSize)})`);

        let totalOptimizedSize = 0;

        // Generate WebP version (same size as original)
        const webpPath = path.join(
            CONFIG.outputDir,
            relativeDir,
            `${filename}.webp`
        );
        ensureDirectoryExists(path.dirname(webpPath));

        await image
            .webp(CONFIG.webp)
            .toFile(webpPath);

        const webpSize = fs.statSync(webpPath).size;
        totalOptimizedSize += webpSize;
        const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

        console.log(`   ✅ WebP: ${formatBytes(webpSize)} (${savings}% smaller)`);

        // Generate responsive sizes
        for (const size of CONFIG.responsiveSizes) {
            // Only generate if original is larger
            if (metadata.width > size.width) {
                const responsivePath = path.join(
                    CONFIG.outputDir,
                    relativeDir,
                    `${filename}${size.suffix}.webp`
                );

                await sharp(imagePath)
                    .resize(size.width, null, { withoutEnlargement: true })
                    .webp(CONFIG.webp)
                    .toFile(responsivePath);

                const responsiveSize = fs.statSync(responsivePath).size;
                totalOptimizedSize += responsiveSize;

                console.log(`   📱 ${size.suffix}: ${size.width}px (${formatBytes(responsiveSize)})`);
            }
        }

        stats.optimizedSize += totalOptimizedSize;
        stats.processed++;

        console.log(`   💾 Total saved: ${formatBytes(originalSize - webpSize)}\n`);

    } catch (error) {
        console.error(`   ❌ Error processing ${imagePath}:`, error.message);
        stats.errors++;
    }
}

/**
 * Ensure directory exists, create if not
 */
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Print summary statistics
 */
function printSummary() {
    const duration = ((Date.now() - stats.startTime) / 1000).toFixed(1);
    const totalSavings = stats.originalSize - stats.optimizedSize;
    const savingsPercent = ((totalSavings / stats.originalSize) * 100).toFixed(1);

    console.log('\n' + '='.repeat(60));
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('='.repeat(60) + '\n');

    console.log(`✅ Processed:     ${stats.processed} / ${stats.totalFiles} images`);
    console.log(`⏭️  Skipped:       ${stats.skipped} images`);
    console.log(`❌ Errors:        ${stats.errors} images`);
    console.log(`⏱️  Duration:      ${duration} seconds`);
    console.log('');
    console.log(`📦 Original size: ${formatBytes(stats.originalSize)}`);
    console.log(`📦 Optimized:     ${formatBytes(stats.optimizedSize)}`);
    console.log(`💾 Saved:         ${formatBytes(totalSavings)} (${savingsPercent}%)`);
    console.log('');
    console.log(`📁 Output:        ${path.resolve(CONFIG.outputDir)}`);
    console.log(`💾 Backup:        ${path.resolve(CONFIG.backupDir)}`);
    console.log('\n' + '='.repeat(60));

    // Print next steps
    console.log('\n📋 NEXT STEPS:\n');
    console.log('1. Review optimized images in:', CONFIG.outputDir);
    console.log('2. Update story files to use .webp images');
    console.log('3. Add <picture> tags with fallbacks for older browsers');
    console.log('4. Delete backup folder after verifying quality');
    console.log('5. Run: npm run update-image-refs (if you create that script)\n');
}

// Run the script
main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
