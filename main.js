document.addEventListener('DOMContentLoaded', function() {
    const game = new GameEngine();
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const music = document.getElementById('background-music');
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }
        }
        
        if (event.key >= '1' && event.key <= '9') {
            const choiceIndex = parseInt(event.key) - 1;
            const choices = document.querySelectorAll('.choice-button');
            if (choices[choiceIndex]) {
                choices[choiceIndex].click();
            }
        }
    });
    
    document.getElementById('background-music').addEventListener('error', function() {
        console.log('Background music file not found. Game will run without audio.');
    });
    
    window.addEventListener('beforeunload', function() {
        const music = document.getElementById('background-music');
        if (music) {
            music.pause();
        }
    });
});

document.addEventListener('click', function() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play().catch(e => console.log('Audio autoplay prevented'));
    }
}, { once: true });