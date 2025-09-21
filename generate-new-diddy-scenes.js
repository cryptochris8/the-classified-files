// Generate AI images for new Diddy case scenes (the 78 scenes we just added)

const fs = require('fs').promises;
const path = require('path');
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

// Mock window object for Node.js execution
global.window = {
    gameState: { evidenceCount: 'Multiple' }
};

// Import the updated Diddy case story
const DiddyCaseStoryExpanded = require('./diddy-case-story-expanded.js');

// Get the new scenes we just created (scenes that were referenced but not in the original 30)
const newSceneIds = [
    'agency_question', 'agent_chen_leak_investigation', 'assassination_network_investigation',
    'asset_forfeiture_analysis', 'audio_video_evidence', 'bahamas_financial_trail',
    'bail_denial_analysis', 'business_documents_analysis', 'business_empire_investigation',
    'celebrity_status_legal_analysis', 'civil_lawsuit_analysis', 'classified_files_access',
    'co_conspirator_payments', 'cayman_islands_investigation', 'cover_preservation_gambit',
    'detention_conditions_analysis', 'double_agent_evidence_gathering', 'double_agent_gambit',
    'double_agent_rescue_plan', 'emergency_evacuation_protection', 'encrypted_communications_analysis',
    'enhanced_security_investigation', 'enterprise_proof_requirements', 'enterprise_structure_analysis',
    'entertainment_services_investigation', 'evidence_legal_analysis', 'fake_elimination_gambit',
    'family_reunion_aftermath', 'federal_agency_coordination', 'flight_risk_analysis',
    'high_speed_pursuit', 'independent_investigation_continues', 'industry_executive_investigation',
    'industry_impact_analysis', 'interstate_commerce_analysis', 'journalist_bait_operation',
    'journalist_protection_operation', 'location_data_analysis', 'mann_act_question',
    'media_security_counterattack', 'missing_investigators_families', 'mole_arrest_operation',
    'money_laundering_analysis', 'office_break_in_investigation', 'offshore_banking_investigation',
    'operation_debriefing', 'phone_trace_rescue_operation', 'political_connections_investigation',
    'predicate_acts_analysis', 'private_jet_evidence_analysis', 'property_network_investigation',
    'prosecution_burden_analysis', 'prosecutor_office_investigation', 'protection_racket_investigation',
    'r_kelly_case_comparison', 'rico_elements_question', 'rico_failure_analysis',
    'sentencing_analysis', 'stolen_evidence_recovery', 'studio_negotiation_attempt',
    'surveillance_evidence_analysis', 'trial_preparation_investigation', 'turning_the_mole',
    'verdict_legal_analysis', 'webb_interrogation_deeper_network', 'witness_protection_analysis',
    'witness_protection_program', 'studio_siege_broadcast', 'surveillance_bluff_attempt',
    'custom_protection_deal', 'defense_strategy_analysis', 'defense_witness_challenge',
    'deleted_data_recovery', 'corroborating_evidence'
];

async function generateNewDiddySceneImages() {
    console.log('🎨 Starting New Diddy Case Scene Image Generation...');
    console.log(`📊 Found ${newSceneIds.length} new scenes to generate`);
    
    const generator = new ImageGenerator(CONFIG);
    const results = [];
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < newSceneIds.length; i++) {
        const sceneId = newSceneIds[i];
        const scene = DiddyCaseStoryExpanded.scenes[sceneId];
        
        if (!scene) {
            console.log(`❌ Scene ${sceneId} not found`);
            errorCount++;
            continue;
        }

        if (!scene.image || !scene.imagePrompt) {
            console.log(`⚠️  Scene ${sceneId} missing image or imagePrompt`);
            errorCount++;
            continue;
        }

        const filename = scene.image.endsWith('.png') ? scene.image : `${scene.image}.png`;
        const imagePath = path.join(__dirname, 'images', filename);
        
        // Check if image already exists
        try {
            await fs.access(imagePath);
            console.log(`⏭️  Skipping existing: ${filename}`);
            continue;
        } catch {
            // File doesn't exist, proceed with generation
        }

        console.log(`🎨 [${i + 1}/${newSceneIds.length}] Generating: ${filename}`);
        console.log(`📝 Prompt: ${scene.imagePrompt.substring(0, 100)}...`);
        
        try {
            const result = await generator.generateImage(scene.imagePrompt, {
                filename: filename,
                model: 'sd3-large-turbo'
            });
            
            if (result.success) {
                console.log(`✅ Successfully generated: ${filename}`);
                successCount++;
                results.push({
                    sceneId: sceneId,
                    filename: filename,
                    prompt: scene.imagePrompt,
                    status: 'success'
                });
            } else {
                console.log(`❌ Failed to generate: ${filename} - ${result.error}`);
                errorCount++;
                results.push({
                    sceneId: sceneId,
                    filename: filename,
                    prompt: scene.imagePrompt,
                    status: 'error',
                    error: result.error
                });
            }
        } catch (error) {
            console.log(`❌ Error generating ${filename}:`, error.message);
            errorCount++;
            results.push({
                sceneId: sceneId,
                filename: filename,
                prompt: scene.imagePrompt,
                status: 'error',
                error: error.message
            });
        }

        // Add delay between requests to avoid rate limiting
        if (i < newSceneIds.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    console.log(`\n📋 NEW DIDDY SCENES IMAGE GENERATION REPORT`);
    console.log(`═══════════════════════════════════════════════════`);
    console.log(`✅ Successfully generated: ${successCount}`);
    console.log(`❌ Failed to generate: ${errorCount}`);
    console.log(`📊 Success rate: ${((successCount / newSceneIds.length) * 100).toFixed(1)}%`);
    console.log(`💰 Estimated cost: $${(successCount * 0.01).toFixed(2)}`);

    // Save detailed report
    const reportPath = path.join(__dirname, 'new-diddy-scenes-generation-report.json');
    await fs.writeFile(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        totalScenes: newSceneIds.length,
        successCount,
        errorCount,
        successRate: ((successCount / newSceneIds.length) * 100).toFixed(1) + '%',
        estimatedCost: (successCount * 0.01).toFixed(2),
        results
    }, null, 2));

    console.log(`💾 Report saved to: ${reportPath}`);
    console.log(`🎉 New Diddy case scenes image generation complete!`);
}

// Run the generator
generateNewDiddySceneImages().catch(console.error);