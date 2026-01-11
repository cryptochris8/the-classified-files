const fs = require('fs');
const path = require('path');

const storyFiles = [
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
    'charlie-kirk-story-expanded.js'
];

console.log('=' .repeat(60));
console.log('SCENE VERIFICATION REPORT');
console.log('=' .repeat(60));
console.log('');

let totalIssues = 0;
const results = [];

for (const file of storyFiles) {
    const filePath = path.join(__dirname, file);

    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${file}`);
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract all nextScene references
    const nextSceneMatches = content.match(/nextScene:\s*['"]([^'"]+)['"]/g) || [];
    const referencedScenes = new Set(nextSceneMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1]));

    // Extract all defined scenes (look for scene keys in the scenes object)
    const sceneMatches = content.match(/^\s{4,8}(\w+):\s*\{/gm) || [];
    const definedScenes = new Set(sceneMatches.map(m => m.trim().replace(/:\s*\{$/, '')));

    // Find missing scenes
    const missing = [...referencedScenes].filter(s => !definedScenes.has(s));

    const caseName = file.replace('-story-expanded.js', '').replace('-expanded.js', '').replace(/-/g, ' ').toUpperCase();

    results.push({
        file,
        caseName,
        defined: definedScenes.size,
        referenced: referencedScenes.size,
        missing
    });

    if (missing.length > 0) {
        totalIssues += missing.length;
    }
}

// Print results
for (const result of results) {
    if (result.missing.length === 0) {
        console.log(`✅ ${result.caseName}`);
        console.log(`   Scenes: ${result.defined} defined, ${result.referenced} referenced`);
    } else {
        console.log(`❌ ${result.caseName}`);
        console.log(`   Scenes: ${result.defined} defined, ${result.referenced} referenced`);
        console.log(`   MISSING ${result.missing.length} scenes:`);
        result.missing.forEach(s => console.log(`      - ${s}`));
    }
    console.log('');
}

console.log('=' .repeat(60));
if (totalIssues === 0) {
    console.log('✅ ALL CASES VERIFIED - No missing scenes found!');
} else {
    console.log(`❌ ISSUES FOUND: ${totalIssues} missing scenes across all cases`);
}
console.log('=' .repeat(60));
