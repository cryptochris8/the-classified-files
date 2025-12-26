#!/usr/bin/env node

/**
 * Update Image References Script
 * Updates all story files to use optimized WebP images
 * Adds fallback support for older browsers
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    storyFiles: [
        'epstein-story-expanded.js',
        'jfk-story-expanded.js',
        'uap-story-expanded.js',
        'september11-commission-expanded.js',
        'hunter-biden-laptop-story-expanded.js',
        'watergate-story-expanded.js',
        'pentagon-papers-story-expanded.js',
        'mkultra-story-expanded.js',
        'panama-papers-story-expanded.js',
        'iran-contra-story-expanded.js',
        'cointelpro-story-expanded.js',
        'snowden-revelations-story-expanded.js',
        'tuskegee-experiment-story-expanded.js',
        'operation-paperclip-story-expanded.js',
        'diddy-case-story-expanded.js'
    ],

    // Image path patterns to replace
    imagePathOld: /image:\s*["']([^"']+)\.png["']/g,
    imagePathNew: (imageName) => `image: "${imageName}"`, // No extension (handled dynamically)

    // Backup directory
    backupDir: './story-backups'
};

const stats = {
    filesProcessed: 0,
    referencesUpdated: 0,
    errors: 0
};

/**
 * Main execution
 */
function main() {
    console.log('\n' + '='.repeat(60));
    console.log('🔄 IMAGE REFERENCE UPDATER');
    console.log('='.repeat(60) + '\n');

    // Create backup directory
    if (!fs.existsSync(CONFIG.backupDir)) {
        fs.mkdirSync(CONFIG.backupDir, { recursive: true });
    }

    // Process each story file
    CONFIG.storyFiles.forEach(filename => {
        const filePath = path.join(process.cwd(), filename);

        if (fs.existsSync(filePath)) {
            processStoryFile(filePath);
        } else {
            console.log(`⚠️  File not found: ${filename}`);
        }
    });

    printSummary();
}

/**
 * Process a single story file
 */
function processStoryFile(filePath) {
    const filename = path.basename(filePath);

    try {
        console.log(`📝 Processing: ${filename}`);

        // Read file content
        const content = fs.readFileSync(filePath, 'utf8');

        // Create backup
        const backupPath = path.join(CONFIG.backupDir, filename);
        fs.writeFileSync(backupPath, content);
        console.log(`   💾 Backup created: ${backupPath}`);

        // Count matches
        const matches = content.match(CONFIG.imagePathOld);
        const matchCount = matches ? matches.length : 0;

        if (matchCount === 0) {
            console.log(`   ℹ️  No PNG references found\n`);
            return;
        }

        // Update image references (remove .png extension)
        // The game engine will handle .webp with PNG fallback
        let updatedContent = content.replace(
            CONFIG.imagePathOld,
            (match, imageName) => {
                stats.referencesUpdated++;
                return `image: "${imageName}"`;
            }
        );

        // Write updated content
        fs.writeFileSync(filePath, updatedContent);

        console.log(`   ✅ Updated ${matchCount} image references\n`);
        stats.filesProcessed++;

    } catch (error) {
        console.error(`   ❌ Error processing ${filename}:`, error.message);
        stats.errors++;
    }
}

/**
 * Print summary
 */
function printSummary() {
    console.log('='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60) + '\n');

    console.log(`✅ Files processed:        ${stats.filesProcessed}`);
    console.log(`🔄 References updated:     ${stats.referencesUpdated}`);
    console.log(`❌ Errors:                 ${stats.errors}`);
    console.log(`💾 Backups location:       ${path.resolve(CONFIG.backupDir)}`);

    console.log('\n' + '='.repeat(60));
    console.log('\n📋 NEXT STEPS:\n');
    console.log('1. Update game-engine.js to use WebP images with PNG fallback');
    console.log('2. Test loading images in the game');
    console.log('3. If everything works, delete story-backups folder');
    console.log('4. Commit changes to git\n');
}

// Run
main();
