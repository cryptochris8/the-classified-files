const fs = require('fs');
const path = require('path');

// Get list of all story files
const storyFiles = fs.readdirSync('.').filter(f => f.endsWith('-story-expanded.js'));

// Get list of available images
const imageFiles = fs.readdirSync('images').filter(f => f.endsWith('.png'));

// Function to extract image references from a story file
function getImageReferences(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const images = [];
  const regex = /image:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    images.push(match[1]);
  }
  return images;
}

// Function to check if image exists
function imageExists(imageName) {
  return imageFiles.includes(imageName + '.png');
}

// Analyze each story file
const results = {};
storyFiles.forEach(file => {
  const storyName = file.replace('-story-expanded.js', '');
  const images = getImageReferences(file);
  const totalScenes = images.length;
  const missingImages = images.filter(img => !imageExists(img));
  const completeImages = totalScenes - missingImages.length;

  results[storyName] = {
    totalScenes,
    completeImages,
    missingImages,
    completionPercentage: totalScenes > 0 ? Math.round((completeImages / totalScenes) * 100) : 0
  };
});

console.log('=== INVESTIGATION COMPLETION ANALYSIS ===\n');
console.log('Story File | Scenes | Images Complete | Missing Images | Completion');
console.log('-----------|--------|-----------------|---------------|------------');

Object.entries(results).sort((a, b) => b[1].completionPercentage - a[1].completionPercentage).forEach(([story, data]) => {
  const missing = data.missingImages.length > 0 ? data.missingImages.slice(0, 3).join(', ') + (data.missingImages.length > 3 ? '...' : '') : 'None';
  console.log(`${story.padEnd(11)} | ${data.totalScenes.toString().padStart(6)} | ${data.completeImages.toString().padStart(15)} | ${missing.padEnd(13)} | ${data.completionPercentage.toString().padStart(10)}%`);
});

console.log('\n=== FULLY COMPLETE INVESTIGATIONS (100% images) ===');
Object.entries(results).filter(([_, data]) => data.completionPercentage === 100).forEach(([story, data]) => {
  console.log(`✅ ${story}: ${data.totalScenes} scenes, all images available`);
});

console.log('\n=== INVESTIGATIONS WITH MISSING IMAGES ===');
Object.entries(results).filter(([_, data]) => data.completionPercentage < 100).forEach(([story, data]) => {
  console.log(`⚠️  ${story}: ${data.missingImages.length} missing images out of ${data.totalScenes} scenes`);
});

