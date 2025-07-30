class GameEngine {
    constructor() {
        this.currentScene = null;
        this.gameState = {
            evidenceCount: 0,
            investigationProgress: 0,
            choices: [],
            visitedScenes: new Set(),
            knowledgeScore: 0,
            correctAnswers: 0,
            totalQuestions: 0,
            badges: []
        };
        this.isTyping = false;
        this.typewriterSpeed = 50;
        
        this.elements = {
            storyText: document.getElementById('story-text'),
            choicesContainer: document.getElementById('choices-container'),
            documentImage: document.getElementById('document-image'),
            evidenceNumber: document.getElementById('evidence-number'),
            progressFill: document.getElementById('progress-fill'),
            loadingScreen: document.getElementById('loading-screen'),
            backgroundMusic: document.getElementById('background-music')
        };
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.showLoadingScreen();
        setTimeout(() => {
            this.hideLoadingScreen();
            this.playBackgroundMusic();
            this.startGame();
        }, 3000);
    }
    
    showLoadingScreen() {
        this.elements.loadingScreen.classList.remove('hidden');
    }
    
    hideLoadingScreen() {
        this.elements.loadingScreen.classList.add('hidden');
    }
    
    playBackgroundMusic() {
        this.elements.backgroundMusic.volume = 0.3;
        this.elements.backgroundMusic.play().catch(e => {
            console.log('Auto-play prevented. User interaction required for audio.');
        });
    }
    
    startGame() {
        // Prioritize expanded story for best experience
        if (typeof EpsteinStoryExpanded !== 'undefined' && EpsteinStoryExpanded.scenes) {
            this.currentStory = EpsteinStoryExpanded;
        } else if (typeof EpsteinStoryHybrid !== 'undefined' && EpsteinStoryHybrid.scenes) {
            this.currentStory = EpsteinStoryHybrid;
        } else if (typeof EpsteinStoryFactual !== 'undefined' && EpsteinStoryFactual.scenes) {
            this.currentStory = EpsteinStoryFactual;
        } else if (typeof EpsteinStory !== 'undefined' && EpsteinStory.scenes) {
            this.currentStory = EpsteinStory;
        } else {
            console.error('Story data not loaded');
            return;
        }
        this.loadScene('intro');
    }
    
    loadScene(sceneId) {
        if (!this.currentStory || !this.currentStory.scenes[sceneId]) {
            console.error('Scene not found:', sceneId);
            return;
        }
        
        this.currentScene = this.currentStory.scenes[sceneId];
        this.gameState.visitedScenes.add(sceneId);
        
        this.clearChoices();
        this.updateDocument();
        this.typewriterText(this.currentScene.text, () => {
            this.displaySources();
            this.displayEducationalNote();
            this.displayChoices();
            this.updateProgress();
            this.processSceneEffects();
        });
    }
    
    typewriterText(text, callback) {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.elements.storyText.innerHTML = '';
        
        const paragraphs = text.split('\n\n');
        let currentParagraph = 0;
        
        const typeParagraph = () => {
            if (currentParagraph >= paragraphs.length) {
                this.isTyping = false;
                if (callback) callback();
                return;
            }
            
            const paragraph = document.createElement('div');
            paragraph.className = 'story-paragraph';
            this.elements.storyText.appendChild(paragraph);
            
            const paragraphText = paragraphs[currentParagraph];
            let charIndex = 0;
            
            const typeChar = () => {
                if (charIndex < paragraphText.length) {
                    paragraph.textContent += paragraphText[charIndex];
                    charIndex++;
                    setTimeout(typeChar, this.typewriterSpeed);
                } else {
                    currentParagraph++;
                    setTimeout(typeParagraph, 500);
                }
            };
            
            typeChar();
        };
        
        typeParagraph();
    }
    
    displayChoices() {
        if (!this.currentScene.choices) return;
        
        this.currentScene.choices.forEach((choice, index) => {
            setTimeout(() => {
                const button = document.createElement('button');
                button.className = 'choice-button';
                if (choice.factual) {
                    button.classList.add('factual');
                }
                if (this.currentScene.quizMode || choice.quizAnswer !== undefined) {
                    button.setAttribute('data-quiz', 'true');
                }
                button.textContent = choice.text;
                button.onclick = () => this.makeChoice(choice);
                
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px)';
                this.elements.choicesContainer.appendChild(button);
                
                setTimeout(() => {
                    button.style.transition = 'all 0.5s ease';
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, 100);
            }, index * 200);
        });
    }
    
    makeChoice(choice) {
        this.gameState.choices.push(choice.text);
        
        // Handle quiz mechanics
        if (choice.quizAnswer !== undefined) {
            this.handleQuizAnswer(choice);
        }
        
        if (choice.evidence) {
            this.addEvidence();
        }
        
        if (choice.progressIncrease) {
            this.increaseProgress(choice.progressIncrease);
        }
        
        // Award badges for special achievements
        this.checkForBadges(choice);
        
        this.playChoiceSound();
        this.loadScene(choice.nextScene);
    }
    
    clearChoices() {
        this.elements.choicesContainer.innerHTML = '';
    }
    
    updateDocument() {
        if (this.currentScene.image) {
            // Load your AI-generated images
            const imageContainer = this.elements.documentImage;
            // Load PNG files (after renaming)
            const imagePath = `images/${this.currentScene.image}.png`;
            
            imageContainer.innerHTML = `
                <div class="scene-image-container">
                    <div class="image-placeholder" id="scene-image">
                        <div class="image-loading">
                            <div class="loading-spinner"></div>
                            <p>Loading scene image...</p>
                        </div>
                    </div>
                    <div class="image-caption">
                        <strong>Scene:</strong> ${this.currentScene.image.replace(/_/g, ' ')}
                    </div>
                </div>
            `;
            
            // Load the actual AI-generated image
            const img = new Image();
            img.onload = () => {
                const placeholder = document.getElementById('scene-image');
                placeholder.innerHTML = `
                    <img src="${imagePath}" 
                         alt="${this.currentScene.image}" 
                         class="scene-image" 
                         style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" />
                `;
            };
            
            img.onerror = () => {
                // If the .jpg.png fails, show error
                const placeholder = document.getElementById('scene-image');
                placeholder.innerHTML = `
                    <div class="image-error">
                        <p>🎨 AI Image: "${this.currentScene.image}"</p>
                        <p class="prompt-used">Prompt: ${this.currentScene.imagePrompt}</p>
                        <div class="image-note">
                            <small>Image file not found: ${imagePath}</small>
                        </div>
                    </div>
                `;
            };
            
            img.src = imagePath;
            
        } else if (this.currentScene.document) {
            this.elements.documentImage.style.backgroundImage = `url('${this.currentScene.document}')`;
            this.elements.documentImage.innerHTML = '';
        } else {
            this.elements.documentImage.style.backgroundImage = 'none';
            this.elements.documentImage.innerHTML = '<div class="no-image">No visual content for this scene</div>';
        }
    }
    
    addEvidence() {
        this.gameState.evidenceCount++;
        this.elements.evidenceNumber.textContent = this.gameState.evidenceCount;
        this.elements.evidenceNumber.parentElement.classList.add('evidence-found');
        
        setTimeout(() => {
            this.elements.evidenceNumber.parentElement.classList.remove('evidence-found');
        }, 2000);
    }
    
    increaseProgress(amount) {
        this.gameState.investigationProgress = Math.min(100, this.gameState.investigationProgress + amount);
        this.updateProgress();
    }
    
    updateProgress() {
        this.elements.progressFill.style.width = `${this.gameState.investigationProgress}%`;
        
        if (this.gameState.investigationProgress >= 100) {
            setTimeout(() => {
                this.showGameComplete();
            }, 1000);
        }
    }
    
    showGameComplete() {
        const completeText = `INVESTIGATION COMPLETE
        
Evidence Collected: ${this.gameState.evidenceCount}
Scenes Explored: ${this.gameState.visitedScenes.size}

The truth behind the Epstein case has been revealed through your investigation. The classified files have shown the depth of corruption and cover-ups that surrounded this case.

Your choices throughout this investigation have shaped the narrative and uncovered hidden connections that may never see the light of day in official reports.`;

        this.typewriterText(completeText, () => {
            const restartButton = document.createElement('button');
            restartButton.className = 'choice-button';
            restartButton.textContent = 'Restart Investigation';
            restartButton.onclick = () => location.reload();
            this.elements.choicesContainer.appendChild(restartButton);
        });
    }
    
    processSceneEffects() {
        if (this.currentScene.effects) {
            this.currentScene.effects.forEach(effect => {
                switch (effect.type) {
                    case 'suspense_pause':
                        setTimeout(() => {
                            this.addSuspenseText(effect.text);
                        }, effect.delay || 2000);
                        break;
                    case 'document_flash':
                        this.flashDocument();
                        break;
                }
            });
        }
    }
    
    addSuspenseText(text) {
        const suspenseDiv = document.createElement('div');
        suspenseDiv.className = 'story-paragraph';
        suspenseDiv.style.color = '#ff6b6b';
        suspenseDiv.style.fontStyle = 'italic';
        suspenseDiv.textContent = text;
        this.elements.storyText.appendChild(suspenseDiv);
    }
    
    flashDocument() {
        this.elements.documentImage.style.animation = 'none';
        setTimeout(() => {
            this.elements.documentImage.style.animation = 'documentFlash 0.5s ease-in-out';
        }, 10);
    }
    
    displaySources() {
        if (this.currentScene.sources && this.currentScene.sources.length > 0) {
            const sourcesDiv = document.createElement('div');
            sourcesDiv.className = 'sources-section';
            sourcesDiv.innerHTML = `
                <h4>📚 Sources:</h4>
                <ul>
                    ${this.currentScene.sources.map(source => `<li>${source}</li>`).join('')}
                </ul>
            `;
            this.elements.storyText.appendChild(sourcesDiv);
        }
    }
    
    displayEducationalNote() {
        if (this.currentScene.educationalNote) {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'educational-note';
            noteDiv.innerHTML = `
                <div class="note-header">💡 Educational Note:</div>
                <p>${this.currentScene.educationalNote}</p>
            `;
            this.elements.storyText.appendChild(noteDiv);
        }
    }
    
    playChoiceSound() {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoG');
        audio.volume = 0.1;
        audio.play().catch(e => console.log('Sound play failed'));
    }
    
    handleQuizAnswer(choice) {
        this.gameState.totalQuestions++;
        
        if (choice.quizAnswer === true) {
            this.gameState.correctAnswers++;
            this.gameState.knowledgeScore++;
            this.showQuizFeedback(true, "Correct! Excellent knowledge of the facts.");
        } else if (choice.quizAnswer === "partial") {
            this.gameState.knowledgeScore += 0.5;
            this.showQuizFeedback("partial", "Partially correct - this shows good understanding.");
        } else {
            this.showQuizFeedback(false, "Incorrect. Learning the facts will help your investigation.");
        }
        
        this.updateKnowledgeDisplay();
    }
    
    showQuizFeedback(correct, message) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `quiz-feedback ${correct === true ? 'correct' : correct === 'partial' ? 'partial' : 'incorrect'}`;
        feedbackDiv.innerHTML = `
            <div class="feedback-icon">${correct === true ? '✅' : correct === 'partial' ? '⚡' : '❌'}</div>
            <div class="feedback-message">${message}</div>
        `;
        
        this.elements.storyText.appendChild(feedbackDiv);
        
        setTimeout(() => {
            feedbackDiv.style.opacity = '0.7';
        }, 3000);
    }
    
    updateKnowledgeDisplay() {
        const knowledgeDisplay = document.getElementById('knowledge-score') || this.createKnowledgeDisplay();
        knowledgeDisplay.textContent = `Knowledge: ${this.gameState.knowledgeScore}/${this.gameState.totalQuestions}`;
    }
    
    createKnowledgeDisplay() {
        const statusBar = document.getElementById('status-bar');
        const knowledgeDiv = document.createElement('div');
        knowledgeDiv.id = 'knowledge-score';
        knowledgeDiv.className = 'knowledge-display';
        knowledgeDiv.textContent = `Knowledge: ${this.gameState.knowledgeScore}/${this.gameState.totalQuestions}`;
        statusBar.appendChild(knowledgeDiv);
        return knowledgeDiv;
    }
    
    checkForBadges(choice) {
        // Perfect Quiz Badge
        if (this.gameState.knowledgeScore >= 3 && this.gameState.correctAnswers === this.gameState.totalQuestions) {
            this.awardBadge("Perfect Knowledge", "🏆", "Answered all quiz questions correctly");
        }
        
        // Fact Finder Badge
        if (choice.factual && this.gameState.evidenceCount >= 3) {
            this.awardBadge("Fact Finder", "🔍", "Consistently chose fact-based investigation paths");
        }
        
        // Evidence Collector Badge
        if (this.gameState.evidenceCount >= 5) {
            this.awardBadge("Evidence Master", "📋", "Collected significant evidence");
        }
    }
    
    awardBadge(name, icon, description) {
        if (this.gameState.badges.find(b => b.name === name)) return; // Already awarded
        
        const badge = { name, icon, description };
        this.gameState.badges.push(badge);
        
        this.showBadgeNotification(badge);
        this.updateBadgeDisplay();
    }
    
    showBadgeNotification(badge) {
        const notification = document.createElement('div');
        notification.className = 'badge-notification';
        notification.innerHTML = `
            <div class="badge-earned">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-info">
                    <div class="badge-name">Badge Earned: ${badge.name}</div>
                    <div class="badge-desc">${badge.description}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
    
    updateBadgeDisplay() {
        const badgeContainer = document.getElementById('badge-container') || this.createBadgeContainer();
        badgeContainer.innerHTML = this.gameState.badges.map(badge => 
            `<span class="badge" title="${badge.description}">${badge.icon}</span>`
        ).join('');
    }
    
    createBadgeContainer() {
        const statusBar = document.getElementById('status-bar');
        const badgeDiv = document.createElement('div');
        badgeDiv.id = 'badge-container';
        badgeDiv.className = 'badge-display';
        statusBar.appendChild(badgeDiv);
        return badgeDiv;
    }
}

window.GameEngine = GameEngine;