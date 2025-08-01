// Fix image extensions - add .png to all generated images without extensions
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const files = fs.readdirSync(imagesDir);

let renamed = 0;
let skipped = 0;

files.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    
    // Skip directories and files that already have extensions
    if (stats.isDirectory() || file.includes('.')) {
        skipped++;
        return;
    }
    
    // Add .png extension
    const newPath = path.join(imagesDir, `${file}.png`);
    fs.renameSync(filePath, newPath);
    console.log(`✅ Renamed: ${file} → ${file}.png`);
    renamed++;
});

console.log(`\n📊 Summary:`);
console.log(`✅ Renamed: ${renamed} files`);
console.log(`⏭️  Skipped: ${skipped} files (already have extensions or are directories)`);