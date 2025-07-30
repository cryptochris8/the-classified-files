# AI Image Integration Guide

The game now supports AI-generated images for each scene. Here's how to integrate with AI image services:

## Current Implementation

The game includes placeholder functionality that shows:
- Loading spinner while "generating" images
- AI image prompts for each scene
- Image captions and metadata

## Integration Options

### Option 1: OpenAI DALL-E API
```javascript
async function generateImage(prompt) {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: "512x512",
            response_format: "url"
        })
    });
    const data = await response.json();
    return data.data[0].url;
}
```

### Option 2: Stability AI
```javascript
async function generateImageStability(prompt) {
    const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${STABILITY_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text_prompts: [{ text: prompt }],
            cfg_scale: 7,
            height: 512,
            width: 512,
            steps: 20
        })
    });
    const data = await response.json();
    return `data:image/png;base64,${data.artifacts[0].base64}`;
}
```

### Option 3: Local Implementation with Hugging Face
```javascript
async function generateImageLocal(prompt) {
    const response = await fetch('http://localhost:7860/api/v1/txt2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompt,
            steps: 20,
            width: 512,
            height: 512
        })
    });
    const data = await response.json();
    return data.images[0];
}
```

## Implementation Steps

### 1. Update game-engine.js
Replace the setTimeout simulation in `updateDocument()` with actual API calls:

```javascript
// Replace the setTimeout in updateDocument() with:
try {
    const imageUrl = await generateImage(this.currentScene.imagePrompt);
    placeholder.innerHTML = `
        <img src="${imageUrl}" alt="${this.currentScene.image}" 
             style="max-width: 100%; max-height: 100%; object-fit: contain;" />
    `;
} catch (error) {
    placeholder.innerHTML = `
        <div class="image-error">
            <p>❌ Failed to generate image</p>
            <p class="error-details">${error.message}</p>
        </div>
    `;
}
```

### 2. Add API Configuration
Create `config.js`:
```javascript
const CONFIG = {
    OPENAI_API_KEY: 'your-api-key-here',
    STABILITY_API_KEY: 'your-api-key-here',
    IMAGE_SERVICE: 'openai', // or 'stability' or 'local'
    IMAGE_SIZE: '512x512',
    CACHE_IMAGES: true
};
```

### 3. Image Caching System
To avoid regenerating the same images:

```javascript
class ImageCache {
    constructor() {
        this.cache = new Map();
    }
    
    async getImage(sceneId, prompt) {
        if (this.cache.has(sceneId)) {
            return this.cache.get(sceneId);
        }
        
        const imageUrl = await generateImage(prompt);
        this.cache.set(sceneId, imageUrl);
        return imageUrl;
    }
}
```

## Scene Image Prompts

Each scene includes detailed prompts optimized for AI generation:

- **Professional photography style** for realistic scenes
- **Specific lighting and composition** instructions
- **Appropriate tone and mood** for investigative journalism
- **Safe content guidelines** for sensitive topics

## Content Guidelines

All image prompts are designed to:
- ✅ Focus on professional, educational contexts
- ✅ Avoid graphic or inappropriate content
- ✅ Emphasize journalism and investigation themes
- ✅ Maintain appropriate tone for serious subjects

## Cost Considerations

- **OpenAI DALL-E**: ~$0.02 per image
- **Stability AI**: ~$0.01 per image  
- **Local Generation**: Hardware costs only

For a full playthrough (10-15 scenes), expect $0.10-$0.30 in API costs.

## Testing Without API Keys

The current implementation works without any API keys, showing:
- Loading animations
- Image prompts for reference
- Placeholder content
- Full game functionality

This allows testing the complete experience before adding AI integration.

## Security Notes

- Never commit API keys to repository
- Use environment variables for production
- Implement rate limiting for public deployments
- Consider content filtering for user-generated prompts