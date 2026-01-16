class MiniGameEngine {
    constructor(gameEngine) {
        this.parentEngine = gameEngine;
        this.activeGame = null;
        this.isGameActive = false;
        
        this.elements = {
            miniGameContainer: null,
            miniGameOverlay: null
        };
        
        this.audioElements = {
            successSound: null,
            failureSound: null,
            puzzlePieceSound: null,
            completionSound: null
        };
        
        this.initializeContainer();
        this.initializeAudio();
    }
    
    initializeContainer() {
        // Create mini-game overlay container
        this.elements.miniGameOverlay = document.createElement('div');
        this.elements.miniGameOverlay.id = 'mini-game-overlay';
        this.elements.miniGameOverlay.className = 'mini-game-overlay hidden';
        
        this.elements.miniGameContainer = document.createElement('div');
        this.elements.miniGameContainer.id = 'mini-game-container';
        this.elements.miniGameContainer.className = 'mini-game-container';
        
        this.elements.miniGameOverlay.appendChild(this.elements.miniGameContainer);
        document.body.appendChild(this.elements.miniGameOverlay);
    }
    
    initializeAudio() {
        // Initialize audio elements for future use with your audio files
        this.audioElements = {
            successSound: document.getElementById('button-click-sound'), // Reuse existing
            failureSound: null, // Will be added when you have the audio file
            puzzlePieceSound: null, // Will be added when you have the audio file
            completionSound: null // Will be added when you have the audio file
        };
    }
    
    playSound(soundType) {
        const sound = this.audioElements[soundType];
        if (sound) {
            sound.currentTime = 0;
            sound.volume = 0.4;
            sound.play().catch(e => {
                console.log(`${soundType} failed to play:`, e);
            });
        }
    }
    
    launchGame(gameType, gameData, onComplete) {
        if (this.isGameActive) {
            console.log('Mini-game already active');
            return;
        }
        
        this.isGameActive = true;
        this.showOverlay();
        
        switch(gameType) {
            case 'document_reconstruction':
                this.activeGame = new DocumentReconstructionGame(this, gameData, onComplete);
                break;
            case 'evidence_connection':
                this.activeGame = new EvidenceConnectionGame(this, gameData, onComplete);
                break;
            case 'cipher_decoder':
                this.activeGame = new CipherDecoderGame(this, gameData, onComplete);
                break;
            default:
                console.error('Unknown mini-game type:', gameType);
                this.closeGame();
                return;
        }
        
        this.activeGame.initialize();
    }
    
    showOverlay() {
        this.elements.miniGameOverlay.classList.remove('hidden');
        setTimeout(() => {
            this.elements.miniGameOverlay.classList.add('active');
        }, 10);
    }
    
    hideOverlay() {
        this.elements.miniGameOverlay.classList.remove('active');
        setTimeout(() => {
            this.elements.miniGameOverlay.classList.add('hidden');
        }, 300);
    }
    
    closeGame(result = null) {
        if (this.activeGame) {
            this.activeGame.cleanup();
            this.activeGame = null;
        }
        
        this.isGameActive = false;
        this.elements.miniGameContainer.innerHTML = '';
        this.hideOverlay();
        
        if (result) {
            // Integrate results back into main game
            if (result.evidenceGained) {
                this.parentEngine.addEvidence(result.evidenceGained);
            }
            if (result.progressIncrease) {
                this.parentEngine.updateProgress(result.progressIncrease);
            }
        }
    }
    
    addEvidence(evidenceItem) {
        // Proxy method to add evidence to main game
        this.parentEngine.gameState.evidenceCount++;
        this.parentEngine.elements.evidenceNumber.textContent = this.parentEngine.gameState.evidenceCount;
        console.log('Mini-game evidence added:', evidenceItem);
    }
    
    updateProgress(progressAmount) {
        // Proxy method to update investigation progress
        this.parentEngine.gameState.investigationProgress = Math.min(100, 
            this.parentEngine.gameState.investigationProgress + progressAmount);
        this.parentEngine.elements.progressFill.style.width = 
            this.parentEngine.gameState.investigationProgress + '%';
        console.log('Mini-game progress updated:', progressAmount);
    }
}

class DocumentReconstructionGame {
    constructor(miniGameEngine, gameData, onComplete) {
        this.engine = miniGameEngine;
        this.gameData = gameData;
        this.onComplete = onComplete;
        
        this.fragments = [];
        this.dropZones = [];
        this.correctPlacements = 0;
        this.totalFragments = 0;
        this.isComplete = false;
        
        this.draggedElement = null;
        this.ghostElement = null;
    }
    
    initialize() {
        this.createGameInterface();
        this.generateFragments();
        this.setupEventListeners();
        this.startGame();
    }
    
    createGameInterface() {
        const container = this.engine.elements.miniGameContainer;

        container.innerHTML = `
            <div class="mini-game-header">
                <h2 class="mini-game-title">DOCUMENT RECONSTRUCTION</h2>
                <div class="mini-game-subtitle">Piece together the classified document fragments</div>
                <button class="mini-game-close">×</button>
            </div>

            <div class="document-reconstruction-container">
                <div class="fragments-container">
                    <h3>Document Fragments</h3>
                    <div class="fragments-area" id="fragments-area"></div>
                </div>

                <div class="reconstruction-area">
                    <h3>Reconstruction Zone</h3>
                    <div class="document-template" id="document-template"></div>
                </div>
            </div>

            <div class="mini-game-progress">
                <div class="progress-text">Progress: <span id="fragments-placed">0</span>/<span id="total-fragments">0</span></div>
                <div class="progress-bar-mini">
                    <div class="progress-fill-mini" id="mini-game-progress-fill"></div>
                </div>
            </div>

            <div class="mini-game-hint">
                <p>💡 Drag document fragments to their correct positions to reveal the classified information</p>
            </div>
        `;

        // Add click handler for close button
        const closeBtn = container.querySelector('.mini-game-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.engine.closeGame());
        }
    }
    
    generateFragments() {
        const fragmentsArea = document.getElementById('fragments-area');
        const documentTemplate = document.getElementById('document-template');
        
        // Use provided game data or create default fragments
        const fragmentData = this.gameData.fragments || this.getDefaultFragments();
        this.totalFragments = fragmentData.length;
        
        document.getElementById('total-fragments').textContent = this.totalFragments;
        
        // Create document template grid
        documentTemplate.style.display = 'grid';
        documentTemplate.style.gridTemplateColumns = `repeat(${this.gameData.gridColumns || 3}, 1fr)`;
        documentTemplate.style.gridTemplateRows = `repeat(${this.gameData.gridRows || 3}, 1fr)`;
        
        // Create drop zones
        for (let i = 0; i < this.totalFragments; i++) {
            const dropZone = document.createElement('div');
            dropZone.className = 'drop-zone';
            dropZone.dataset.position = i;
            dropZone.addEventListener('dragover', this.handleDragOver.bind(this));
            dropZone.addEventListener('drop', this.handleDrop.bind(this));
            dropZone.addEventListener('dragleave', this.handleDragLeave.bind(this));
            
            this.dropZones.push(dropZone);
            documentTemplate.appendChild(dropZone);
        }
        
        // Create draggable fragments
        fragmentData.forEach((fragment, index) => {
            const fragmentElement = document.createElement('div');
            fragmentElement.className = 'document-fragment';
            fragmentElement.draggable = true;
            fragmentElement.dataset.fragmentId = index;
            fragmentElement.dataset.correctPosition = fragment.position;
            
            // Add fragment content (could be text or background image)
            if (fragment.text) {
                fragmentElement.textContent = fragment.text;
            } else if (fragment.backgroundImage) {
                fragmentElement.style.backgroundImage = `url(${fragment.backgroundImage})`;
                fragmentElement.style.backgroundSize = 'cover';
            }
            
            // Event listeners
            fragmentElement.addEventListener('dragstart', this.handleDragStart.bind(this));
            fragmentElement.addEventListener('dragend', this.handleDragEnd.bind(this));
            
            this.fragments.push(fragmentElement);
            fragmentsArea.appendChild(fragmentElement);
        });
        
        // Shuffle fragments for challenge
        this.shuffleFragments();
    }
    
    getDefaultFragments() {
        // Default fragments for testing/demo
        return [
            { position: 0, text: "CLASSIFIED", type: "header" },
            { position: 1, text: "PROJECT [REDACTED]", type: "title" },
            { position: 2, text: "1947-07-08", type: "date" },
            { position: 3, text: "SUBJECT: UFO Recovery", type: "subject" },
            { position: 4, text: "Operation conducted at", type: "body" },
            { position: 5, text: "Roswell, New Mexico", type: "location" },
            { position: 6, text: "Materials secured and", type: "body" },
            { position: 7, text: "transported to Area 51", type: "body" },
            { position: 8, text: "EYES ONLY", type: "footer" }
        ];
    }
    
    shuffleFragments() {
        const fragmentsArea = document.getElementById('fragments-area');
        const fragments = Array.from(fragmentsArea.children);
        
        // Fisher-Yates shuffle
        for (let i = fragments.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            fragmentsArea.appendChild(fragments[j]);
        }
    }
    
    setupEventListeners() {
        // Prevent default drag behavior on document
        document.addEventListener('dragover', (e) => e.preventDefault());
        document.addEventListener('drop', (e) => e.preventDefault());
    }
    
    handleDragStart(e) {
        this.draggedElement = e.target;
        e.target.classList.add('dragging');
        
        // Create ghost element for better visual feedback
        this.createGhostElement(e.target);
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.outerHTML);
        
        this.engine.playSound('puzzlePieceSound');
    }
    
    handleDragEnd(e) {
        e.target.classList.remove('dragging');
        this.removeGhostElement();
        
        // Clean up any drag-over effects
        this.dropZones.forEach(zone => zone.classList.remove('drag-over'));
    }
    
    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        e.target.classList.add('drag-over');
    }
    
    handleDragLeave(e) {
        e.target.classList.remove('drag-over');
    }
    
    handleDrop(e) {
        e.preventDefault();
        e.target.classList.remove('drag-over');
        
        if (!this.draggedElement) return;
        
        const dropZone = e.target;
        const correctPosition = parseInt(this.draggedElement.dataset.correctPosition);
        const dropPosition = parseInt(dropZone.dataset.position);
        
        // Check if this is the correct position
        if (correctPosition === dropPosition) {
            this.placeFragmentCorrectly(this.draggedElement, dropZone);
            this.engine.playSound('successSound');
        } else {
            // Wrong position - return fragment to original area
            this.returnFragmentToArea(this.draggedElement);
            this.engine.playSound('failureSound');
            this.showFeedback('Incorrect position. Try again!', 'error');
        }
        
        this.draggedElement = null;
    }
    
    placeFragmentCorrectly(fragment, dropZone) {
        // Move fragment to drop zone
        dropZone.appendChild(fragment);
        fragment.classList.add('placed-correctly');
        fragment.draggable = false;
        
        this.correctPlacements++;
        this.updateProgress();
        
        // Check if game is complete
        if (this.correctPlacements === this.totalFragments) {
            this.completeGame();
        } else {
            this.showFeedback('Correct! Keep going!', 'success');
        }
    }
    
    returnFragmentToArea(fragment) {
        const fragmentsArea = document.getElementById('fragments-area');
        fragmentsArea.appendChild(fragment);
        
        // Add shake animation for feedback
        fragment.classList.add('shake');
        setTimeout(() => fragment.classList.remove('shake'), 500);
    }
    
    createGhostElement(element) {
        this.ghostElement = element.cloneNode(true);
        this.ghostElement.classList.add('ghost-fragment');
        document.body.appendChild(this.ghostElement);
    }
    
    removeGhostElement() {
        if (this.ghostElement) {
            this.ghostElement.remove();
            this.ghostElement = null;
        }
    }
    
    updateProgress() {
        document.getElementById('fragments-placed').textContent = this.correctPlacements;
        const progressPercent = (this.correctPlacements / this.totalFragments) * 100;
        document.getElementById('mini-game-progress-fill').style.width = progressPercent + '%';
    }
    
    showFeedback(message, type) {
        const existingFeedback = document.querySelector('.feedback-message');
        if (existingFeedback) existingFeedback.remove();
        
        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${type}`;
        feedback.textContent = message;
        
        this.engine.elements.miniGameContainer.appendChild(feedback);
        
        setTimeout(() => feedback.remove(), 2000);
    }
    
    completeGame() {
        this.isComplete = true;
        this.engine.playSound('completionSound');
        
        // Show completion message
        setTimeout(() => {
            this.showCompletionScreen();
        }, 1000);
    }
    
    showCompletionScreen() {
        const completionOverlay = document.createElement('div');
        completionOverlay.className = 'completion-overlay';
        completionOverlay.innerHTML = `
            <div class="completion-content">
                <h2>🎉 DOCUMENT RECONSTRUCTED!</h2>
                <p>You have successfully pieced together the classified document.</p>
                <div class="rewards">
                    <div class="reward-item">
                        <span class="reward-icon">📄</span>
                        <span class="reward-text">Evidence Found: ${this.gameData.evidenceReward || 'Classified Document'}</span>
                    </div>
                    <div class="reward-item">
                        <span class="reward-icon">📊</span>
                        <span class="reward-text">Investigation Progress: +${this.gameData.progressReward || 15}%</span>
                    </div>
                </div>
                <button class="continue-btn">Continue Investigation</button>
            </div>
        `;

        this.engine.elements.miniGameContainer.appendChild(completionOverlay);

        // Add click handler directly to button
        const continueBtn = completionOverlay.querySelector('.continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.finishGame());
        }

        // Store reference for backwards compatibility
        window.miniGameInstance = this;
    }
    
    finishGame() {
        const result = {
            success: true,
            evidenceGained: this.gameData.evidenceReward || 'Reconstructed Document',
            progressIncrease: this.gameData.progressReward || 15,
            completionTime: Date.now() - this.startTime
        };
        
        // Call completion callback
        if (this.onComplete) {
            this.onComplete(result);
        }
        
        // Close mini-game and return to main investigation
        this.engine.closeGame(result);
        
        // Clean up global reference
        delete window.miniGameInstance;
    }
    
    startGame() {
        this.startTime = Date.now();
        this.showFeedback('Drag document fragments to reconstruct the classified file', 'info');
    }
    
    cleanup() {
        // Clean up event listeners and elements
        this.removeGhostElement();
        
        // Remove global references
        if (window.miniGameInstance === this) {
            delete window.miniGameInstance;
        }
    }
}

class CipherDecoderGame {
    constructor(miniGameEngine, gameData, onComplete) {
        this.engine = miniGameEngine;
        this.gameData = gameData;
        this.onComplete = onComplete;

        this.cipherText = (gameData.cipherText || '').toUpperCase();
        this.solution = (gameData.solution || '').toUpperCase();
        this.playerMapping = {};  // encrypted letter -> decoded letter
        this.reverseMapping = {}; // decoded letter -> encrypted letter (to prevent duplicates)
        this.selectedLetter = null;
        this.hintsUsed = 0;
        this.maxHints = gameData.maxHints || 3;
        this.isComplete = false;
        this.startTime = null;

        // Build the cipher mapping from solution
        this.cipherKey = {};
        for (let i = 0; i < this.cipherText.length; i++) {
            const encrypted = this.cipherText[i];
            const decoded = this.solution[i];
            if (/[A-Z]/.test(encrypted) && /[A-Z]/.test(decoded)) {
                this.cipherKey[encrypted] = decoded;
            }
        }

        // Track unique letters for progress
        this.uniqueLetters = new Set(this.cipherText.match(/[A-Z]/g) || []);
        this.totalLetters = this.uniqueLetters.size;

        // Bound event handlers for cleanup
        this.boundKeyHandler = this.handleKeyPress.bind(this);
    }

    initialize() {
        this.createGameInterface();
        this.generateCipherDisplay();
        this.setupEventListeners();
        this.startGame();
    }

    createGameInterface() {
        const container = this.engine.elements.miniGameContainer;

        container.innerHTML = `
            <div class="mini-game-header">
                <h2 class="mini-game-title">CIPHER DECODER</h2>
                <div class="mini-game-subtitle">${this.gameData.context || 'Decrypt the classified message'}</div>
                <button class="mini-game-close">×</button>
            </div>

            <div class="cipher-container">
                <div class="cipher-message-box" id="cipher-display">
                    <!-- Generated cipher display -->
                </div>

                <div class="cipher-input-section" id="cipher-input-section">
                    <div class="selected-letter-display" id="selected-display">
                        Click a letter above to decode it
                    </div>
                </div>

                <div class="cipher-controls">
                    <button class="cipher-hint-btn" id="hint-btn">
                        Use Hint (<span id="hints-remaining">${this.maxHints}</span> left)
                    </button>
                    <button class="cipher-clear-btn" id="clear-btn">Clear All</button>
                </div>
            </div>

            <div class="mini-game-progress">
                <div class="progress-text">Letters Decoded: <span id="letters-decoded">0</span>/<span id="total-letters">${this.totalLetters}</span></div>
                <div class="progress-bar-mini">
                    <div class="progress-fill-mini" id="mini-game-progress-fill"></div>
                </div>
            </div>

            <div class="mini-game-hint">
                <p id="cipher-tip">Click an encrypted letter, then type what you think it decodes to</p>
            </div>
        `;

        // Add click handler for close button
        const closeBtn = container.querySelector('.mini-game-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.engine.closeGame());
        }

        // Hint button handler
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.useHint());
        }

        // Clear button handler
        const clearBtn = document.getElementById('clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearAllMappings());
        }
    }

    generateCipherDisplay() {
        const display = document.getElementById('cipher-display');
        if (!display) return;

        let html = '<div class="cipher-words">';
        const words = this.cipherText.split(' ');

        words.forEach((word, wordIndex) => {
            html += '<div class="cipher-word">';

            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                const isLetter = /[A-Z]/.test(char);

                if (isLetter) {
                    const decoded = this.playerMapping[char] || '_';
                    const isCorrect = this.playerMapping[char] === this.cipherKey[char];
                    const isSelected = this.selectedLetter === char;

                    html += `
                        <div class="cipher-letter-pair ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''}"
                             data-letter="${char}">
                            <div class="cipher-encrypted">${char}</div>
                            <div class="cipher-arrow">↓</div>
                            <div class="cipher-decoded ${decoded !== '_' ? 'filled' : ''}">${decoded}</div>
                        </div>
                    `;
                } else {
                    html += `<div class="cipher-letter-pair punctuation"><div class="cipher-char">${char}</div></div>`;
                }
            }

            html += '</div>';

            // Add line break after every few words for readability
            if ((wordIndex + 1) % 5 === 0) {
                html += '<div class="cipher-line-break"></div>';
            }
        });

        html += '</div>';
        display.innerHTML = html;

        // Add click handlers to letter pairs
        const letterPairs = display.querySelectorAll('.cipher-letter-pair[data-letter]');
        letterPairs.forEach(pair => {
            pair.addEventListener('click', () => {
                const letter = pair.dataset.letter;
                this.handleLetterClick(letter);
            });
        });
    }

    setupEventListeners() {
        document.addEventListener('keydown', this.boundKeyHandler);
    }

    handleLetterClick(letter) {
        // Deselect if clicking same letter
        if (this.selectedLetter === letter) {
            this.selectedLetter = null;
        } else {
            this.selectedLetter = letter;
        }

        this.updateDisplay();
        this.updateInputSection();
        this.engine.playSound('puzzlePieceSound');
    }

    handleKeyPress(event) {
        if (!this.selectedLetter) return;
        if (this.isComplete) return;

        const key = event.key.toUpperCase();

        // Handle backspace/delete to clear mapping
        if (event.key === 'Backspace' || event.key === 'Delete') {
            this.clearMapping(this.selectedLetter);
            return;
        }

        // Only accept A-Z
        if (!/^[A-Z]$/.test(key)) return;

        // Check if this decoded letter is already used
        if (this.reverseMapping[key] && this.reverseMapping[key] !== this.selectedLetter) {
            this.showFeedback(`'${key}' is already assigned to '${this.reverseMapping[key]}'`, 'error');
            return;
        }

        // Set the mapping
        this.setMapping(this.selectedLetter, key);
    }

    setMapping(encrypted, decoded) {
        // Clear old reverse mapping if this encrypted letter was already mapped
        if (this.playerMapping[encrypted]) {
            delete this.reverseMapping[this.playerMapping[encrypted]];
        }

        // Set new mapping
        this.playerMapping[encrypted] = decoded;
        this.reverseMapping[decoded] = encrypted;

        // Check if correct
        const isCorrect = decoded === this.cipherKey[encrypted];
        if (isCorrect) {
            this.engine.playSound('successSound');
            this.showFeedback('Correct!', 'success');
        } else {
            this.engine.playSound('puzzlePieceSound');
        }

        this.updateDisplay();
        this.updateProgress();
        this.checkSolution();

        // Move to next unmapped letter
        this.selectNextUnmappedLetter();
    }

    clearMapping(encrypted) {
        if (this.playerMapping[encrypted]) {
            const decoded = this.playerMapping[encrypted];
            delete this.reverseMapping[decoded];
            delete this.playerMapping[encrypted];

            this.updateDisplay();
            this.updateProgress();
            this.showFeedback('Letter cleared', 'info');
        }
    }

    clearAllMappings() {
        this.playerMapping = {};
        this.reverseMapping = {};
        this.selectedLetter = null;

        this.updateDisplay();
        this.updateProgress();
        this.updateInputSection();
        this.showFeedback('All mappings cleared', 'info');
    }

    selectNextUnmappedLetter() {
        // Find next unmapped letter in the cipher text
        for (const char of this.cipherText) {
            if (/[A-Z]/.test(char) && !this.playerMapping[char]) {
                this.selectedLetter = char;
                this.updateDisplay();
                this.updateInputSection();
                return;
            }
        }
        // All mapped
        this.selectedLetter = null;
        this.updateInputSection();
    }

    updateDisplay() {
        this.generateCipherDisplay();
    }

    updateInputSection() {
        const display = document.getElementById('selected-display');
        if (!display) return;

        if (this.selectedLetter) {
            const currentMapping = this.playerMapping[this.selectedLetter] || '?';
            display.innerHTML = `
                <span class="input-prompt">Selected: </span>
                <span class="input-encrypted">${this.selectedLetter}</span>
                <span class="input-arrow"> → </span>
                <span class="input-decoded">${currentMapping}</span>
                <span class="input-hint"> (Type a letter or Backspace to clear)</span>
            `;
        } else {
            display.innerHTML = 'Click a letter above to decode it';
        }
    }

    updateProgress() {
        // Count correctly decoded letters
        let correctCount = 0;
        for (const letter of this.uniqueLetters) {
            if (this.playerMapping[letter] === this.cipherKey[letter]) {
                correctCount++;
            }
        }

        const decoded = document.getElementById('letters-decoded');
        if (decoded) decoded.textContent = correctCount;

        const progressFill = document.getElementById('mini-game-progress-fill');
        if (progressFill) {
            const percent = (correctCount / this.totalLetters) * 100;
            progressFill.style.width = percent + '%';
        }
    }

    useHint() {
        if (this.hintsUsed >= this.maxHints) {
            this.showFeedback('No hints remaining!', 'error');
            return;
        }

        // Find an unmapped or incorrectly mapped letter
        for (const encrypted of this.uniqueLetters) {
            if (this.playerMapping[encrypted] !== this.cipherKey[encrypted]) {
                // Clear any existing wrong mapping
                if (this.playerMapping[encrypted]) {
                    delete this.reverseMapping[this.playerMapping[encrypted]];
                }

                // Set correct mapping
                const decoded = this.cipherKey[encrypted];
                this.playerMapping[encrypted] = decoded;
                this.reverseMapping[decoded] = encrypted;

                this.hintsUsed++;
                document.getElementById('hints-remaining').textContent = this.maxHints - this.hintsUsed;

                this.showFeedback(`Hint: ${encrypted} = ${decoded}`, 'info');
                this.engine.playSound('successSound');

                this.updateDisplay();
                this.updateProgress();
                this.checkSolution();
                break;
            }
        }
    }

    checkSolution() {
        // Check if all letters are correctly mapped
        for (const letter of this.uniqueLetters) {
            if (this.playerMapping[letter] !== this.cipherKey[letter]) {
                return false;
            }
        }

        // All correct!
        this.completeGame();
        return true;
    }

    showFeedback(message, type) {
        const existingFeedback = document.querySelector('.feedback-message');
        if (existingFeedback) existingFeedback.remove();

        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${type}`;
        feedback.textContent = message;

        this.engine.elements.miniGameContainer.appendChild(feedback);

        setTimeout(() => feedback.remove(), 2000);
    }

    completeGame() {
        if (this.isComplete) return;

        this.isComplete = true;
        this.engine.playSound('completionSound');

        setTimeout(() => {
            this.showCompletionScreen();
        }, 500);
    }

    showCompletionScreen() {
        // Build the decoded message
        let decodedMessage = '';
        for (const char of this.cipherText) {
            if (/[A-Z]/.test(char)) {
                decodedMessage += this.playerMapping[char] || char;
            } else {
                decodedMessage += char;
            }
        }

        const completionOverlay = document.createElement('div');
        completionOverlay.className = 'completion-overlay';
        completionOverlay.innerHTML = `
            <div class="completion-content">
                <h2>CIPHER CRACKED!</h2>
                <div class="decoded-message-box">
                    <p class="decoded-label">Decoded Message:</p>
                    <p class="decoded-text">"${decodedMessage}"</p>
                </div>
                <div class="rewards">
                    <div class="reward-item">
                        <span class="reward-icon">📄</span>
                        <span class="reward-text">Evidence Found: ${this.gameData.evidenceReward || 'Decoded Message'}</span>
                    </div>
                    <div class="reward-item">
                        <span class="reward-icon">📊</span>
                        <span class="reward-text">Investigation Progress: +${this.gameData.progressReward || 15}%</span>
                    </div>
                    ${this.hintsUsed === 0 ? `
                    <div class="reward-item bonus">
                        <span class="reward-icon">⭐</span>
                        <span class="reward-text">No Hints Used - Perfect Decode!</span>
                    </div>
                    ` : ''}
                </div>
                <button class="continue-btn">Continue Investigation</button>
            </div>
        `;

        this.engine.elements.miniGameContainer.appendChild(completionOverlay);

        const continueBtn = completionOverlay.querySelector('.continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.finishGame());
        }
    }

    finishGame() {
        const result = {
            success: true,
            evidenceGained: this.gameData.evidenceReward || 'Decoded Message',
            progressIncrease: this.gameData.progressReward || 15,
            completionTime: Date.now() - this.startTime,
            hintsUsed: this.hintsUsed
        };

        if (this.onComplete) {
            this.onComplete(result);
        }

        this.engine.closeGame(result);
    }

    startGame() {
        this.startTime = Date.now();
        this.showFeedback('Click letters to decode the secret message!', 'info');

        // Auto-select first letter
        if (this.cipherText.length > 0) {
            for (const char of this.cipherText) {
                if (/[A-Z]/.test(char)) {
                    this.selectedLetter = char;
                    this.updateDisplay();
                    this.updateInputSection();
                    break;
                }
            }
        }
    }

    cleanup() {
        document.removeEventListener('keydown', this.boundKeyHandler);
    }
}

class EvidenceConnectionGame {
    constructor(miniGameEngine, gameData, onComplete) {
        this.engine = miniGameEngine;
        this.gameData = gameData;
        this.onComplete = onComplete;

        this.evidenceItems = gameData.evidence || [];
        this.correctConnections = gameData.connections || [];
        this.playerConnections = [];  // [{from, to}, ...]
        this.selectedItem = null;
        this.hintsUsed = 0;
        this.maxHints = gameData.maxHints || 3;
        this.isComplete = false;
        this.startTime = null;

        // Create a set of correct connection keys for easy lookup
        this.correctConnectionKeys = new Set();
        this.correctConnections.forEach(conn => {
            // Store both directions since connections are bidirectional
            this.correctConnectionKeys.add(`${conn.from}-${conn.to}`);
            this.correctConnectionKeys.add(`${conn.to}-${conn.from}`);
        });

        this.totalConnections = this.correctConnections.length;
    }

    initialize() {
        this.createGameInterface();
        this.renderEvidenceBoard();
        this.startGame();
    }

    createGameInterface() {
        const container = this.engine.elements.miniGameContainer;

        container.innerHTML = `
            <div class="mini-game-header">
                <h2 class="mini-game-title">EVIDENCE CONNECTION BOARD</h2>
                <div class="mini-game-subtitle">${this.gameData.context || 'Connect the related pieces of evidence'}</div>
                <button class="mini-game-close">×</button>
            </div>

            <div class="evidence-board-container">
                <div class="evidence-board" id="evidence-board">
                    <svg class="connection-svg" id="connection-svg"></svg>
                    <div class="evidence-items" id="evidence-items"></div>
                </div>
            </div>

            <div class="evidence-controls">
                <button class="evidence-hint-btn" id="hint-btn">
                    Use Hint (<span id="hints-remaining">${this.maxHints}</span> left)
                </button>
                <button class="evidence-clear-btn" id="clear-btn">Clear All</button>
            </div>

            <div class="mini-game-progress">
                <div class="progress-text">Connections: <span id="connections-made">0</span>/<span id="total-connections">${this.totalConnections}</span></div>
                <div class="progress-bar-mini">
                    <div class="progress-fill-mini" id="mini-game-progress-fill"></div>
                </div>
            </div>

            <div class="mini-game-hint">
                <p id="evidence-tip">Click an evidence item to select it, then click another to connect them</p>
            </div>
        `;

        // Close button handler
        const closeBtn = container.querySelector('.mini-game-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.engine.closeGame());
        }

        // Hint button handler
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.useHint());
        }

        // Clear button handler
        const clearBtn = document.getElementById('clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearAllConnections());
        }
    }

    renderEvidenceBoard() {
        const itemsContainer = document.getElementById('evidence-items');
        const svg = document.getElementById('connection-svg');

        if (!itemsContainer || !svg) return;

        // Clear existing content
        itemsContainer.innerHTML = '';

        // Render evidence items
        this.evidenceItems.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'evidence-item';
            itemEl.id = `evidence-${item.id}`;
            itemEl.dataset.id = item.id;
            itemEl.style.left = `${item.x}%`;
            itemEl.style.top = `${item.y}%`;

            itemEl.innerHTML = `
                <div class="evidence-icon">${item.icon || '📄'}</div>
                <div class="evidence-label">${item.label}</div>
            `;

            itemEl.addEventListener('click', () => this.handleEvidenceClick(item.id));

            itemsContainer.appendChild(itemEl);
        });

        // Redraw any existing connections
        this.redrawConnections();
    }

    handleEvidenceClick(itemId) {
        const itemEl = document.getElementById(`evidence-${itemId}`);

        if (this.selectedItem === null) {
            // First selection
            this.selectedItem = itemId;
            itemEl.classList.add('selected');
            this.engine.playSound('puzzlePieceSound');
            this.updateTip(`Selected: ${this.getItemLabel(itemId)}. Click another piece of evidence to connect.`);
        } else if (this.selectedItem === itemId) {
            // Deselect
            this.selectedItem = null;
            itemEl.classList.remove('selected');
            this.updateTip('Click an evidence item to select it, then click another to connect them');
        } else {
            // Second selection - try to make connection
            const fromId = this.selectedItem;
            const toId = itemId;

            // Clear selection
            document.getElementById(`evidence-${fromId}`).classList.remove('selected');
            this.selectedItem = null;

            // Check if connection already exists
            if (this.connectionExists(fromId, toId)) {
                this.removeConnection(fromId, toId);
                this.showFeedback('Connection removed', 'info');
            } else {
                // Try to make the connection
                this.makeConnection(fromId, toId);
            }
        }
    }

    makeConnection(fromId, toId) {
        const connectionKey = `${fromId}-${toId}`;
        const isCorrect = this.correctConnectionKeys.has(connectionKey);

        if (isCorrect) {
            // Correct connection
            this.playerConnections.push({ from: fromId, to: toId });
            this.drawConnection(fromId, toId, true);
            this.engine.playSound('successSound');
            this.showFeedback('Correct connection!', 'success');
            this.updateProgress();
            this.checkCompletion();
        } else {
            // Wrong connection - show briefly then remove
            this.drawConnection(fromId, toId, false);
            this.engine.playSound('failureSound');
            this.showFeedback('These pieces of evidence are not directly connected', 'error');

            // Remove the wrong connection after a delay
            setTimeout(() => {
                this.removeConnectionLine(fromId, toId);
            }, 1000);
        }

        this.updateTip('Click an evidence item to select it, then click another to connect them');
    }

    connectionExists(fromId, toId) {
        return this.playerConnections.some(conn =>
            (conn.from === fromId && conn.to === toId) ||
            (conn.from === toId && conn.to === fromId)
        );
    }

    drawConnection(fromId, toId, isCorrect) {
        const svg = document.getElementById('connection-svg');
        const board = document.getElementById('evidence-board');
        const fromEl = document.getElementById(`evidence-${fromId}`);
        const toEl = document.getElementById(`evidence-${toId}`);

        if (!svg || !board || !fromEl || !toEl) return;

        const boardRect = board.getBoundingClientRect();
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        // Calculate center points relative to the board
        const fromX = (fromRect.left + fromRect.width / 2) - boardRect.left;
        const fromY = (fromRect.top + fromRect.height / 2) - boardRect.top;
        const toX = (toRect.left + toRect.width / 2) - boardRect.left;
        const toY = (toRect.top + toRect.height / 2) - boardRect.top;

        // Create line element
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', fromX);
        line.setAttribute('y1', fromY);
        line.setAttribute('x2', toX);
        line.setAttribute('y2', toY);
        line.setAttribute('class', `connection-line ${isCorrect ? 'correct' : 'wrong'}`);
        line.setAttribute('data-from', fromId);
        line.setAttribute('data-to', toId);

        svg.appendChild(line);

        // Mark evidence items as connected if correct
        if (isCorrect) {
            fromEl.classList.add('connected');
            toEl.classList.add('connected');
        }
    }

    removeConnection(fromId, toId) {
        // Remove from player connections
        this.playerConnections = this.playerConnections.filter(conn =>
            !((conn.from === fromId && conn.to === toId) ||
              (conn.from === toId && conn.to === fromId))
        );

        this.removeConnectionLine(fromId, toId);
        this.updateProgress();

        // Update connected state on evidence items
        this.updateConnectedStates();
    }

    removeConnectionLine(fromId, toId) {
        const svg = document.getElementById('connection-svg');
        if (!svg) return;

        const lines = svg.querySelectorAll('.connection-line');
        lines.forEach(line => {
            const lineFrom = line.getAttribute('data-from');
            const lineTo = line.getAttribute('data-to');
            if ((lineFrom === fromId && lineTo === toId) ||
                (lineFrom === toId && lineTo === fromId)) {
                line.remove();
            }
        });
    }

    redrawConnections() {
        const svg = document.getElementById('connection-svg');
        if (svg) {
            svg.innerHTML = '';
        }

        this.playerConnections.forEach(conn => {
            this.drawConnection(conn.from, conn.to, true);
        });
    }

    updateConnectedStates() {
        // Reset all to unconnected
        this.evidenceItems.forEach(item => {
            const el = document.getElementById(`evidence-${item.id}`);
            if (el) el.classList.remove('connected');
        });

        // Mark connected items
        this.playerConnections.forEach(conn => {
            const fromEl = document.getElementById(`evidence-${conn.from}`);
            const toEl = document.getElementById(`evidence-${conn.to}`);
            if (fromEl) fromEl.classList.add('connected');
            if (toEl) toEl.classList.add('connected');
        });
    }

    clearAllConnections() {
        this.playerConnections = [];
        this.selectedItem = null;

        const svg = document.getElementById('connection-svg');
        if (svg) svg.innerHTML = '';

        this.evidenceItems.forEach(item => {
            const el = document.getElementById(`evidence-${item.id}`);
            if (el) {
                el.classList.remove('connected', 'selected');
            }
        });

        this.updateProgress();
        this.showFeedback('All connections cleared', 'info');
    }

    useHint() {
        if (this.hintsUsed >= this.maxHints) {
            this.showFeedback('No hints remaining!', 'error');
            return;
        }

        // Find a correct connection that hasn't been made yet
        for (const conn of this.correctConnections) {
            if (!this.connectionExists(conn.from, conn.to)) {
                // Make this connection
                this.playerConnections.push({ from: conn.from, to: conn.to });
                this.drawConnection(conn.from, conn.to, true);

                this.hintsUsed++;
                document.getElementById('hints-remaining').textContent = this.maxHints - this.hintsUsed;

                const fromLabel = this.getItemLabel(conn.from);
                const toLabel = this.getItemLabel(conn.to);
                this.showFeedback(`Hint: ${fromLabel} connects to ${toLabel}`, 'info');
                this.engine.playSound('successSound');

                this.updateProgress();
                this.checkCompletion();
                return;
            }
        }

        this.showFeedback('All connections already found!', 'info');
    }

    getItemLabel(itemId) {
        const item = this.evidenceItems.find(i => i.id === itemId);
        return item ? item.label : itemId;
    }

    updateTip(message) {
        const tip = document.getElementById('evidence-tip');
        if (tip) tip.textContent = message;
    }

    updateProgress() {
        const made = this.playerConnections.length;
        document.getElementById('connections-made').textContent = made;

        const progressFill = document.getElementById('mini-game-progress-fill');
        if (progressFill) {
            const percent = (made / this.totalConnections) * 100;
            progressFill.style.width = percent + '%';
        }
    }

    checkCompletion() {
        if (this.playerConnections.length >= this.totalConnections) {
            // Verify all correct connections are made
            const allCorrect = this.correctConnections.every(conn =>
                this.connectionExists(conn.from, conn.to)
            );

            if (allCorrect) {
                this.completeGame();
            }
        }
    }

    showFeedback(message, type) {
        const existingFeedback = document.querySelector('.feedback-message');
        if (existingFeedback) existingFeedback.remove();

        const feedback = document.createElement('div');
        feedback.className = `feedback-message ${type}`;
        feedback.textContent = message;

        this.engine.elements.miniGameContainer.appendChild(feedback);

        setTimeout(() => feedback.remove(), 2000);
    }

    completeGame() {
        if (this.isComplete) return;

        this.isComplete = true;
        this.engine.playSound('completionSound');

        setTimeout(() => {
            this.showCompletionScreen();
        }, 500);
    }

    showCompletionScreen() {
        const completionOverlay = document.createElement('div');
        completionOverlay.className = 'completion-overlay';
        completionOverlay.innerHTML = `
            <div class="completion-content">
                <h2>EVIDENCE CONNECTED!</h2>
                <p>You have successfully mapped the connections between all pieces of evidence.</p>
                <div class="rewards">
                    <div class="reward-item">
                        <span class="reward-icon">🔗</span>
                        <span class="reward-text">Evidence Found: ${this.gameData.evidenceReward || 'Evidence Map'}</span>
                    </div>
                    <div class="reward-item">
                        <span class="reward-icon">📊</span>
                        <span class="reward-text">Investigation Progress: +${this.gameData.progressReward || 20}%</span>
                    </div>
                    ${this.hintsUsed === 0 ? `
                    <div class="reward-item bonus">
                        <span class="reward-icon">⭐</span>
                        <span class="reward-text">No Hints Used - Master Detective!</span>
                    </div>
                    ` : ''}
                </div>
                <button class="continue-btn">Continue Investigation</button>
            </div>
        `;

        this.engine.elements.miniGameContainer.appendChild(completionOverlay);

        const continueBtn = completionOverlay.querySelector('.continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.finishGame());
        }
    }

    finishGame() {
        const result = {
            success: true,
            evidenceGained: this.gameData.evidenceReward || 'Evidence Map',
            progressIncrease: this.gameData.progressReward || 20,
            completionTime: Date.now() - this.startTime,
            hintsUsed: this.hintsUsed
        };

        if (this.onComplete) {
            this.onComplete(result);
        }

        this.engine.closeGame(result);
    }

    startGame() {
        this.startTime = Date.now();
        this.showFeedback('Connect the related pieces of evidence!', 'info');
    }

    cleanup() {
        // Clear selection state
        this.selectedItem = null;
    }
}

// Make MiniGameEngine globally available
window.MiniGameEngine = MiniGameEngine;