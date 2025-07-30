# The Classified Files

A text-based investigative game exploring fictional classified document cases, starting with the Epstein Files investigation.

## Overview

This interactive narrative game puts you in the role of an investigative journalist who receives mysterious classified documents. Your choices determine how the investigation unfolds and what truth you uncover.

## Features

- **Text-based storytelling** with branching narratives
- **Suspenseful atmosphere** with dark styling and animations
- **Evidence collection** system to track your investigation progress
- **Multiple story paths** based on your choices
- **Document viewer** to examine classified materials
- **Background music** and sound effects (optional)
- **Responsive design** for various screen sizes

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for audio support)

### Installation

1. Clone or download this repository
2. Open terminal/command prompt in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The game will open in your browser at `http://localhost:8080`

### Manual Setup (No Node.js)
If you don't have Node.js, you can run the game by:
1. Opening `index.html` directly in your browser
2. Note: Audio files may not work without a web server

## Adding Content

### Audio Files
Place audio files in the `audio/` directory:
- `suspense.mp3` - Background music
- Add other sound effects as needed

### Document Images
Place document images in the `images/` directory:
- Use 400x600 pixel images for best fit
- Create realistic-looking classified documents
- See `images/README.md` for detailed guidelines

### New Story Cases
To add new cases (Hunter Biden, JFK, etc.):
1. Create a new story file (e.g., `hunter-biden-story.js`)
2. Follow the structure in `epstein-story.js`
3. Update `index.html` to include the new script
4. Modify the main menu to allow case selection

## Game Controls

- **Mouse**: Click choices to progress
- **Keyboard**: Use number keys (1-9) to select choices
- **ESC**: Toggle background music on/off

## File Structure

```
The-Classified-Files/
├── index.html          # Main game interface
├── styles.css          # Game styling and animations
├── game-engine.js      # Core game mechanics
├── epstein-story.js    # Epstein case story content
├── main.js            # Game initialization
├── package.json       # Project dependencies
├── audio/             # Audio files directory
├── images/            # Document images directory
└── README.md          # This file
```

## Technical Features

- **Modular story system** for easy expansion
- **Typewriter text animation** for dramatic effect
- **Progress tracking** with evidence counter
- **Save state functionality** (can be added)
- **Mobile-responsive design**

## Expanding the Game

### Adding New Cases
1. Create story data following the existing pattern
2. Each scene needs: text, choices, optional effects
3. Choices lead to other scenes creating branching paths
4. Include evidence collection and progress tracking

### Future Cases to Implement
- Hunter Biden laptop investigation
- JFK assassination files
- UFO/UAP disclosure documents
- Watergate deep dive
- MLK Jr. assassination files

## Content Notice

This game deals with serious and controversial topics. All story content is fictional and created for entertainment purposes. The game is designed to explore themes of government transparency, investigative journalism, and the importance of truth in democracy.

## Technical Requirements

- Modern JavaScript (ES6+)
- CSS3 animations and grid layout
- HTML5 audio (optional)
- No external dependencies beyond development server

## Contributing

To add new story content or improve the game engine:
1. Follow the existing code structure
2. Test thoroughly across different browsers
3. Ensure all story paths have proper endings
4. Maintain the suspenseful, investigative atmosphere

## License

MIT License - See LICENSE file for details