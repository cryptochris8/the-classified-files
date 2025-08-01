// Test Script - Verify API Key Works
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

async function testAPIKey() {
    console.log('🔧 Testing Stability AI API Key...\n');
    
    // Check if API key is set
    if (!CONFIG.STABILITY_API_KEY || CONFIG.STABILITY_API_KEY === 'YOUR-API-KEY-HERE') {
        console.log('❌ API key not found!\n');
        console.log('📝 Instructions:');
        console.log('1. Open config.js in a text editor');
        console.log('2. Find this line: STABILITY_API_KEY: \'YOUR-API-KEY-HERE\',');
        console.log('3. Replace YOUR-API-KEY-HERE with your actual API key');
        console.log('4. Save the file and run this test again\n');
        return;
    }
    
    console.log('✅ API key found!');
    console.log(`📏 Key length: ${CONFIG.STABILITY_API_KEY.length} characters\n`);
    
    // Test with a simple prompt
    const testPrompt = "A simple red circle on white background, minimalist design";
    const generator = new ImageGenerator(CONFIG);
    
    console.log('🎨 Generating test image...');
    console.log(`📝 Test prompt: "${testPrompt}"\n`);
    
    try {
        const result = await generator.generateImage(testPrompt, 'test-image.png');
        console.log('✅ SUCCESS! Your API key is working correctly!');
        console.log('📁 Test image saved as: test-image.png');
        console.log('💰 Cost: ~$0.01\n');
        console.log('🚀 You\'re ready to generate all game images!');
        console.log('   Run: node generate-all-images.js');
    } catch (error) {
        console.log('❌ API test failed!\n');
        console.log('Error details:', error.message);
        
        if (error.message.includes('401')) {
            console.log('\n🔑 This appears to be an authentication error.');
            console.log('   Please check that your API key is correct.');
        } else if (error.message.includes('402')) {
            console.log('\n💳 This appears to be a billing error.');
            console.log('   Please check your Stability AI account credits.');
        }
    }
}

testAPIKey().catch(console.error);