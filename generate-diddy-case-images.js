const fs = require('fs').promises;
const path = require('path');

// Import the AI image generation config
const CONFIG = require('./config.js');

// Diddy case image prompts from the story file
const DIDDY_CASE_IMAGES = [
    {
        filename: "federal_courthouse_morning.png",
        prompt: "Federal courthouse in Manhattan with journalists gathering, morning light, serious investigative atmosphere, realistic photography style"
    },
    {
        filename: "federal_plaza_dawn.png", 
        prompt: "Federal Plaza at dawn with mysterious figures meeting, HSI building in background, tense atmosphere, cinematic lighting"
    },
    {
        filename: "confidential_documents.png",
        prompt: "Secret documents spread on diner table, redacted pages, coffee cup, tense investigative atmosphere, noir photography style"
    },
    {
        filename: "fbi_cyber_division.png",
        prompt: "FBI cybersecurity office with digital forensics equipment, agent tracing phone calls on computers, high-tech investigation, modern office setting"
    },
    {
        filename: "library_secret_meeting.png",
        prompt: "Private library research room with missing person files spread on table, mysterious atmosphere, archive shelves, dramatic lighting"
    },
    {
        filename: "hsi_classified_briefing.png",
        prompt: "Classified HSI briefing room with network diagrams on screens, federal agents, high-security environment, professional government setting"
    },
    {
        filename: "financial_crimes_investigation.png",
        prompt: "Financial crimes unit with multiple computer screens showing corporate charts, money flow diagrams, detective analyzing data, high-tech investigation"
    },
    {
        filename: "federal_indictment_document.png",
        prompt: "Official federal indictment document with Department of Justice seal, legal papers spread on desk, professional legal documentation"
    },
    {
        filename: "investigation_timeline_board.png",
        prompt: "Detective-style timeline board with photos, documents, and red string connections showing chronological investigation, crime investigation setup"
    },
    {
        filename: "federal_raid_evidence.png",
        prompt: "Federal agents processing evidence boxes, official HSI badges visible, professional law enforcement operation, organized evidence collection"
    },
    {
        filename: "witness_testimony_courtroom.png",
        prompt: "Federal courtroom with witness stand, serious legal proceedings, professional judicial setting, formal court atmosphere"
    },
    {
        filename: "federal_courthouse_verdict.png",
        prompt: "Federal courthouse with media gathered outside, serious news reporting atmosphere, justice scales visible, press conference setting"
    },
    {
        filename: "rico_investigation_board.png",
        prompt: "Federal investigation board showing RICO enterprise chart with connections between associates and criminal activities, organized crime investigation"
    },
    {
        filename: "legal_education_quiz.png",
        prompt: "Law books and federal statutes open on desk, educational setting for legal knowledge, study materials and legal references"
    },
    {
        filename: "evidence_processing_lab.png",
        prompt: "Federal evidence processing facility with agents cataloging seized items, professional forensics environment, organized evidence storage"
    },
    {
        filename: "digital_forensics_lab.png",
        prompt: "High-tech FBI digital forensics laboratory with multiple computer screens showing data analysis, cyber investigation equipment"
    },
    {
        filename: "treasury_financial_investigation.png",
        prompt: "Treasury Department financial crimes unit with charts showing money flows and banking records, financial investigation workspace"
    },
    {
        filename: "federal_protection_briefing.png",
        prompt: "Federal building secure briefing room with protection options being discussed by HSI agents, security planning meeting"
    },
    {
        filename: "legal_precedents_research.png",
        prompt: "Law library with RICO case books and legal precedents being researched by investigative journalist, academic legal research"
    },
    {
        filename: "legal_expert_panel.png",
        prompt: "Panel of legal experts discussing federal criminal law in professional law school setting, academic conference atmosphere"
    },
    {
        filename: "federal_detention_facility.png",
        prompt: "Federal detention center with secure facilities, serious law enforcement atmosphere, correctional institution exterior"
    },
    {
        filename: "undercover_surveillance_nightclub.png",
        prompt: "Dark nightclub surveillance operation, undercover journalist with wire, tension and danger, VIP booth meeting, noir atmosphere"
    },
    {
        filename: "fbi_raid_nightclub_chaos.png",
        prompt: "FBI tactical raid in nightclub with chaos, broken glass, federal agents in action, emergency extraction, dramatic action scene"
    },
    {
        filename: "fbi_internal_affairs_investigation.png",
        prompt: "FBI Internal Affairs sterile investigation room with suspect photos and phone records spread on table, counter-intelligence investigation"
    },
    {
        filename: "federal_plaza_trap_meeting.png",
        prompt: "Federal Plaza at dusk with dangerous confrontation brewing, agent approaching with hidden motives, tense atmosphere, thriller cinematography"
    },
    {
        filename: "emotional_mole_confession.png",
        prompt: "Federal agent breaking down emotionally on building steps, showing photo of kidnapped daughter, dramatic confrontation, emotional scene"
    },
    {
        filename: "synchronized_federal_operation.png",
        prompt: "FBI command center with multiple operation screens, agents coordinating complex multi-location raid, high-tech command and control"
    },
    {
        filename: "journalist_kill_list_evidence.png",
        prompt: "FBI evidence table showing assassination contracts, journalist photos with red X marks, threatening documents, crime investigation evidence"
    },
    {
        filename: "live_tv_revelation_danger.png",
        prompt: "CNN studio during live broadcast with assassination documents, emergency lighting, danger approaching, dramatic news broadcast"
    },
    {
        filename: "final_report_complete.png",
        prompt: "Completed investigative report with official seals, professional journalism achievement, case files organized, successful investigation conclusion"
    }
];

async function generateStabilityImage(prompt, filename) {
    try {
        console.log(`🎨 Generating: ${filename}`);
        console.log(`📝 Prompt: ${prompt}`);
        
        const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.STABILITY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text_prompts: [
                    {
                        text: prompt,
                        weight: 1
                    },
                    {
                        text: "blurry, distorted, low quality, cartoon, anime, unrealistic",
                        weight: -1
                    }
                ],
                cfg_scale: CONFIG.IMAGE_CFG_SCALE,
                height: CONFIG.IMAGE_HEIGHT,
                width: CONFIG.IMAGE_WIDTH,
                steps: CONFIG.IMAGE_STEPS,
                samples: 1,
                style_preset: "photographic"
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Stability API error: ${response.status} - ${errorData}`);
        }

        const responseJSON = await response.json();
        
        if (responseJSON.artifacts && responseJSON.artifacts.length > 0) {
            const imageBase64 = responseJSON.artifacts[0].base64;
            const imageBuffer = Buffer.from(imageBase64, 'base64');
            
            const imagePath = path.join(__dirname, 'images', filename);
            await fs.writeFile(imagePath, imageBuffer);
            
            console.log(`✅ Generated: ${filename}`);
            return true;
        } else {
            throw new Error('No image data in response');
        }
    } catch (error) {
        console.error(`❌ Error generating ${filename}:`, error.message);
        return false;
    }
}

async function generateAllDiddyCaseImages() {
    console.log('🚀 Starting Diddy Case Image Generation');
    console.log(`📊 Total images to generate: ${DIDDY_CASE_IMAGES.length}`);
    
    const results = {
        success: 0,
        failed: 0,
        errors: []
    };
    
    // Check if images directory exists
    const imagesDir = path.join(__dirname, 'images');
    try {
        await fs.access(imagesDir);
    } catch {
        await fs.mkdir(imagesDir, { recursive: true });
        console.log('📁 Created images directory');
    }
    
    // Generate images with delays to respect rate limits
    for (let i = 0; i < DIDDY_CASE_IMAGES.length; i++) {
        const imageData = DIDDY_CASE_IMAGES[i];
        
        // Check if image already exists
        const imagePath = path.join(imagesDir, imageData.filename);
        try {
            await fs.access(imagePath);
            console.log(`⏭️  Skipping existing: ${imageData.filename}`);
            results.success++;
            continue;
        } catch {
            // Image doesn't exist, generate it
        }
        
        const success = await generateStabilityImage(imageData.prompt, imageData.filename);
        
        if (success) {
            results.success++;
        } else {
            results.failed++;
            results.errors.push(imageData.filename);
        }
        
        // Rate limiting delay (2 seconds between requests)
        if (i < DIDDY_CASE_IMAGES.length - 1) {
            console.log(`⏳ Waiting ${CONFIG.DELAY_BETWEEN_REQUESTS}ms for rate limiting...`);
            await new Promise(resolve => setTimeout(resolve, CONFIG.DELAY_BETWEEN_REQUESTS));
        }
    }
    
    // Generate report
    console.log('\n📋 DIDDY CASE IMAGE GENERATION REPORT');
    console.log('═══════════════════════════════════════');
    console.log(`✅ Successfully generated: ${results.success}`);
    console.log(`❌ Failed to generate: ${results.failed}`);
    console.log(`📊 Success rate: ${Math.round((results.success / DIDDY_CASE_IMAGES.length) * 100)}%`);
    
    if (results.errors.length > 0) {
        console.log('\n❌ Failed images:');
        results.errors.forEach(filename => console.log(`   • ${filename}`));
    }
    
    // Save report
    const reportPath = path.join(__dirname, 'diddy-case-image-generation-report.json');
    await fs.writeFile(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        totalImages: DIDDY_CASE_IMAGES.length,
        successful: results.success,
        failed: results.failed,
        errors: results.errors,
        images: DIDDY_CASE_IMAGES
    }, null, 2));
    
    console.log(`\n💾 Report saved to: ${reportPath}`);
    console.log('🎉 Diddy case image generation complete!');
}

// Run the generation
if (require.main === module) {
    generateAllDiddyCaseImages().catch(console.error);
}

module.exports = {
    generateAllDiddyCaseImages,
    DIDDY_CASE_IMAGES
};