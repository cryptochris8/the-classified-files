const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Syncing Diddy Case to Site Repository');

// Essential files that need to be in the site repository
const essentialFiles = [
    'index.html',
    'game-config.js', 
    'game-engine.js',
    'main.js',
    'styles.css',
    'diddy-case-story-expanded.js',
    'netlify.toml'
];

async function syncToSite() {
    try {
        // Create a temporary commit with just the essential changes
        console.log('📦 Staging essential files...');
        
        for (const file of essentialFiles) {
            try {
                execSync(`git add "${file}"`, { stdio: 'inherit' });
                console.log(`✅ Added ${file}`);
            } catch (error) {
                console.log(`⚠️  Could not add ${file}: ${error.message}`);
            }
        }
        
        // Commit the essential changes
        console.log('💾 Creating commit...');
        execSync(`git commit -m "Sync Diddy case to site repository - essential files only"`, { stdio: 'inherit' });
        
        // Try to push to site repo
        console.log('🌐 Pushing to site repository...');
        execSync(`git push site-repo master`, { stdio: 'inherit' });
        
        console.log('✅ Successfully synced to site repository!');
        
    } catch (error) {
        console.error('❌ Error syncing to site:', error.message);
        
        // Alternative: Show manual steps
        console.log('\n📋 Manual sync steps:');
        console.log('1. Go to GitHub and create a new repository: cryptochris8/the-classified-files-site');
        console.log('2. Or check your Netlify deployment settings to use the main repository');
        console.log('3. Or manually copy these files to the site repository:');
        essentialFiles.forEach(file => console.log(`   - ${file}`));
    }
}

// Run the sync
syncToSite();