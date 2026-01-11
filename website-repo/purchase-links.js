// Update purchase links with case-specific parameters
document.addEventListener('DOMContentLoaded', function() {
    // Mapping of marketing site game names to game engine case keys
    const gameKeyMapping = {
        'ufo': 'uap',
        'diddy-case': 'diddy-case',
        'charlie-kirk': 'charlie-kirk',
        'epstein': 'epstein',
        'watergate': 'watergate',
        'mlk': 'mlk',  // Note: MLK doesn't exist in game config, map to closest
        'nine-eleven': 'september11',
        'hunter-biden': 'hunterlaptop',
        'pentagon-papers': 'pentagon-papers',
        'mkultra': 'mkultra',
        'panama-papers': 'panama-papers',
        'iran-contra': 'iran-contra',
        'cointelpro': 'cointelpro',
        'snowden': 'snowden',
        'tuskegee': 'tuskegee',
        'paperclip': 'paperclip',
        'jfk': 'jfk'
    };

    // Update all game card buttons
    document.querySelectorAll('.game-card').forEach(card => {
        const gameKey = card.getAttribute('data-game');
        const button = card.querySelector('.game-btn');

        if (button && gameKey) {
            const mappedKey = gameKeyMapping[gameKey] || gameKey;
            const baseUrl = 'https://cryptochris8.github.io/the-classified-files/';

            // Update the link to include case-specific parameter
            if (!button.classList.contains('disabled') && gameKey !== 'ufo') {
                // Premium cases - add case parameter
                button.href = `${baseUrl}?purchase=true&case=${mappedKey}`;
            } else if (gameKey === 'ufo') {
                // Free case - just link to game
                button.href = baseUrl;
            }
        }
    });
});
