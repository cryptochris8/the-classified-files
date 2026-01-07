/**
 * Build Script for Capacitor iOS App
 *
 * This script copies all necessary files to the dist/ directory
 * which Capacitor uses as the web root for the iOS app.
 *
 * Usage: npm run build
 */

const fs = require('fs');
const path = require('path');

const sourceDir = __dirname;
const distDir = path.join(__dirname, 'dist');

// Files and directories to copy
const filesToCopy = [
    // HTML files
    'index.html',
    'payment-success.html',
    'payment-cancel.html',

    // CSS files
    'styles.css',
    'game-help-styles.css',
    'speech-styles.css',
    'payment-styles.css',
    'payment-modal.css',

    // Core JavaScript
    'game-engine.js',
    'main.js',
    'mini-game-engine.js',
    'game-config.js',
    'dom-utils.js',

    // Payment system
    'payment-abstraction.js',
    'payment-system.js',
    'payment-config.js',
    'stripe-prices.js',
    'revenuecat-config.js',

    // Analytics
    'analytics.js',

    // Story files (all expanded stories)
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
    'diddy-case-story-expanded.js',
    'charlie-kirk-story-expanded.js',
];

// Directories to copy recursively
const directoriesToCopy = [
    'images',
    'audio',
    'providers',
];

/**
 * Create directory if it doesn't exist
 */
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
    }
}

/**
 * Copy a single file
 */
function copyFile(src, dest) {
    try {
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
            console.log(`Copied: ${path.basename(src)}`);
        } else {
            console.warn(`Warning: Source file not found: ${src}`);
        }
    } catch (error) {
        console.error(`Error copying ${src}: ${error.message}`);
    }
}

/**
 * Copy directory recursively
 */
function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.warn(`Warning: Source directory not found: ${src}`);
        return;
    }

    ensureDir(dest);

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    }

    console.log(`Copied directory: ${path.basename(src)}/`);
}

/**
 * Main build function
 */
function build() {
    console.log('='.repeat(50));
    console.log('Building Declassified for Capacitor');
    console.log('='.repeat(50));

    // Clean and create dist directory
    if (fs.existsSync(distDir)) {
        console.log('Cleaning existing dist directory...');
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    ensureDir(distDir);

    console.log('\nCopying files...');

    // Copy individual files
    for (const file of filesToCopy) {
        const src = path.join(sourceDir, file);
        const dest = path.join(distDir, file);
        copyFile(src, dest);
    }

    console.log('\nCopying directories...');

    // Copy directories
    for (const dir of directoriesToCopy) {
        const src = path.join(sourceDir, dir);
        const dest = path.join(distDir, dir);
        copyDir(src, dest);
    }

    // Create a build info file
    const buildInfo = {
        buildTime: new Date().toISOString(),
        version: require('./package.json').version,
        platform: 'capacitor'
    };

    fs.writeFileSync(
        path.join(distDir, 'build-info.json'),
        JSON.stringify(buildInfo, null, 2)
    );

    console.log('\n' + '='.repeat(50));
    console.log('Build complete!');
    console.log(`Output: ${distDir}`);
    console.log('='.repeat(50));

    // List files in dist
    const distFiles = fs.readdirSync(distDir);
    console.log(`\nFiles in dist: ${distFiles.length}`);
}

// Run build
build();
