/**
 * Story Migration Script
 * Converts old story format to ES module format
 */
import fs from 'fs'
import path from 'path'

const STORIES_TO_MIGRATE = [
  { source: 'epstein-story-expanded.js', id: 'epstein', title: 'Epstein Investigation' },
  { source: 'jfk-story-expanded.js', id: 'jfk', title: 'JFK Assassination' },
  { source: 'diddy-case-story-expanded.js', id: 'diddy-case', title: 'Diddy Federal Case' },
  { source: 'watergate-story-expanded.js', id: 'watergate', title: 'Watergate Files' },
  { source: 'pentagon-papers-story-expanded.js', id: 'pentagon-papers', title: 'Pentagon Papers' },
  { source: 'mkultra-story-expanded.js', id: 'mkultra', title: 'MKUltra Files' },
  { source: 'cointelpro-story-expanded.js', id: 'cointelpro', title: 'COINTELPRO' },
  { source: 'snowden-revelations-story-expanded.js', id: 'snowden', title: 'Snowden Revelations' },
  { source: 'iran-contra-story-expanded.js', id: 'iran-contra', title: 'Iran-Contra Affair' },
  { source: 'panama-papers-story-expanded.js', id: 'panama-papers', title: 'Panama Papers' },
  { source: 'tuskegee-experiment-story-expanded.js', id: 'tuskegee', title: 'Tuskegee Experiment' },
  { source: 'operation-paperclip-story-expanded.js', id: 'paperclip', title: 'Operation Paperclip' },
  { source: 'hunter-biden-laptop-story-expanded.js', id: 'hunterlaptop', title: 'Hunter Biden Laptop' },
]

function migrateStory(sourceFile, storyId, title) {
  const sourcePath = path.join('..', sourceFile)
  const destPath = path.join('src', 'stories', `${storyId}-story.js`)

  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  Source not found: ${sourceFile}`)
    return false
  }

  let content = fs.readFileSync(sourcePath, 'utf8')

  // Extract the story object name (e.g., EpsteinStoryExpanded)
  const objMatch = content.match(/const\s+(\w+)\s*=\s*\{/)
  if (!objMatch) {
    console.log(`⚠️  Could not find object in: ${sourceFile}`)
    return false
  }
  const oldObjName = objMatch[1]
  const newObjName = storyId.replace(/-/g, '').charAt(0).toUpperCase() +
                     storyId.replace(/-/g, '').slice(1) + 'Story'

  // Transform the content
  content = content
    // Replace object name
    .replace(new RegExp(`const ${oldObjName}`, 'g'), `const ${newObjName}`)
    // Remove window assignment
    .replace(/window\.\w+\s*=\s*\w+;?\s*$/m, '')
    // Add metadata
    .replace(/^const/, `/**\n * ${title} Story\n * Migrated from ${sourceFile}\n */\n\nconst`)

  // Add id and title if not present
  if (!content.includes('id:')) {
    content = content.replace(
      /const \w+ = \{/,
      `const ${newObjName} = {\n  id: '${storyId}',\n  title: '${title}',`
    )
  }

  // Add export
  content = content.trim() + `\n\nexport default ${newObjName}\n`

  fs.writeFileSync(destPath, content)
  console.log(`✅ Migrated: ${sourceFile} -> ${destPath}`)
  return true
}

// Run migrations
console.log('Starting story migrations...\n')
let migrated = 0
let failed = 0

for (const story of STORIES_TO_MIGRATE) {
  if (migrateStory(story.source, story.id, story.title)) {
    migrated++
  } else {
    failed++
  }
}

console.log(`\nMigration complete: ${migrated} success, ${failed} failed`)
