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
                <button class="mini-game-close" onclick="window.miniGameEngine.closeGame()">×</button>
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
                <button class="continue-btn" onclick="window.miniGameInstance.finishGame()">Continue Investigation</button>
            </div>
        `;
        
        this.engine.elements.miniGameContainer.appendChild(completionOverlay);
        
        // Store reference for the continue button
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

// Make MiniGameEngine globally available
window.MiniGameEngine = MiniGameEngine;