// AI Image Generation Service
// Supports Stability AI and OpenAI DALL-E

class ImageGenerator {
    constructor(config) {
        this.config = config;
        this.cache = new Map();
        this.generatedImages = new Map();
    }

    // Generate image using Stability AI
    async generateWithStability(prompt, filename) {
        const engineId = 'stable-diffusion-xl-1024-v1-0';
        
        try {
            const response = await fetch(
                `https://api.stability.ai/v1/generation/${engineId}/text-to-image`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.config.STABILITY_API_KEY}`,
                    },
                    body: JSON.stringify({
                        text_prompts: [
                            {
                                text: prompt,
                                weight: 1
                            }
                        ],
                        cfg_scale: this.config.IMAGE_CFG_SCALE,
                        height: this.config.IMAGE_HEIGHT,
                        width: this.config.IMAGE_WIDTH,
                        steps: this.config.IMAGE_STEPS,
                        samples: 1,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseJSON = await response.json();
            const image = responseJSON.artifacts[0];
            
            // Save to disk if enabled
            if (this.config.SAVE_TO_DISK && typeof require !== 'undefined') {
                const fs = require('fs');
                const path = require('path');
                const buffer = Buffer.from(image.base64, 'base64');
                const imagePath = path.join(__dirname, 'images', filename);
                fs.writeFileSync(imagePath, buffer);
                console.log(`✅ Saved: ${filename}`);
                return `images/${filename}`;
            }
            
            return `data:image/png;base64,${image.base64}`;
        } catch (error) {
            console.error(`❌ Error generating ${filename}:`, error.message);
            throw error;
        }
    }

    // Generate image using OpenAI DALL-E
    async generateWithOpenAI(prompt, filename) {
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "dall-e-3",
                    prompt: prompt,
                    n: 1,
                    size: "1024x1024",
                    quality: "standard"
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const imageUrl = data.data[0].url;
            
            // Download and save if enabled
            if (this.config.SAVE_TO_DISK && typeof require !== 'undefined') {
                const fs = require('fs');
                const path = require('path');
                const https = require('https');
                
                const imagePath = path.join(__dirname, 'images', filename);
                const file = fs.createWriteStream(imagePath);
                
                return new Promise((resolve, reject) => {
                    https.get(imageUrl, response => {
                        response.pipe(file);
                        file.on('finish', () => {
                            file.close();
                            console.log(`✅ Saved: ${filename}`);
                            resolve(`images/${filename}`);
                        });
                    }).on('error', reject);
                });
            }
            
            return imageUrl;
        } catch (error) {
            console.error(`❌ Error generating ${filename}:`, error.message);
            throw error;
        }
    }

    // Main generation method with retries
    async generateImage(prompt, filename, retries = 0) {
        // Check cache first
        if (this.cache.has(filename)) {
            console.log(`📦 Using cached: ${filename}`);
            return this.cache.get(filename);
        }

        try {
            let result;
            
            if (this.config.IMAGE_SERVICE === 'stability') {
                result = await this.generateWithStability(prompt, filename);
            } else if (this.config.IMAGE_SERVICE === 'openai') {
                result = await this.generateWithOpenAI(prompt, filename);
            } else {
                throw new Error('No image service configured');
            }
            
            this.cache.set(filename, result);
            this.generatedImages.set(filename, { prompt, url: result });
            return result;
            
        } catch (error) {
            if (retries < this.config.MAX_RETRIES) {
                console.log(`🔄 Retrying ${filename} (${retries + 1}/${this.config.MAX_RETRIES})...`);
                await this.delay(this.config.RETRY_DELAY);
                return this.generateImage(prompt, filename, retries + 1);
            }
            throw error;
        }
    }

    // Helper to add delay between requests
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Get all generated images
    getGeneratedImages() {
        return this.generatedImages;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageGenerator;
}