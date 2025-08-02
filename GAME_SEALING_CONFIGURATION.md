# Game Sealing Configuration

This system allows you to control which games are sealed (locked) in production while keeping all games open for local development.

## How It Works

The `game-config.js` file contains the configuration that determines:
1. Whether the game is running locally (development) or on a live website (production)
2. Which games should be sealed in production
3. The release dates to display for sealed games

## Configuration File: game-config.js

### Environment Detection
The system automatically detects if you're running locally by checking:
- If the hostname is `localhost` or `127.0.0.1`
- If the protocol is `file:` (opening HTML directly)
- If the hostname is empty

When running locally, ALL games will be open regardless of configuration.

### Changing Which Games Are Sealed

To change which games are sealed in production, edit the `sealedGames` object in `game-config.js`:

```javascript
sealedGames: {
    epstein: false,      // false = Open, true = Sealed
    jfk: true,          // This game will be sealed in production
    uap: true,          
    // ... etc
}
```

### Changing Release Dates

To update the release dates shown for sealed games, edit the `releaseDates` object:

```javascript
releaseDates: {
    jfk: "Coming Q1 2025",
    uap: "Coming Q2 2025",
    // ... etc
}
```

## Current Configuration

As configured, in **production** (live website):
- **Open**: Epstein Investigation only
- **Sealed**: All other 13 games

In **development** (local):
- **Open**: All 14 games

## How to Test Production Behavior Locally

If you want to test how the sealing works in production while still running locally, you can temporarily modify the `isDevelopment` function in `game-config.js`:

```javascript
isDevelopment: () => {
    return false; // Force production mode for testing
}
```

Remember to change it back to the original code when done testing!

## Technical Details

The game engine checks the configuration when building the case selection menu. Each game's sealed status is determined by:
1. First checking if `GameConfig` exists
2. If it does, using `GameConfig.isGameSealed(gameKey)`
3. If not, falling back to the story's own `sealed` property

This ensures backward compatibility if the configuration file fails to load.