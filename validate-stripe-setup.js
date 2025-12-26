// Stripe Setup Validation Script
// Run this to check if all your Stripe price IDs are configured
// Usage: node validate-stripe-setup.js

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Stripe Configuration...\n');

// Read the stripe-prices.js file
const stripePricesPath = path.join(__dirname, 'stripe-prices.js');
const stripePricesContent = fs.readFileSync(stripePricesPath, 'utf8');

// Extract price IDs using regex
const priceIdMatches = stripePricesContent.match(/'([^']+)':\s*'(price_[^']+)'/g);

if (!priceIdMatches) {
    console.log('❌ Could not parse stripe-prices.js file');
    process.exit(1);
}

const cases = [
    'epstein',
    'jfk',
    'september11',
    'watergate',
    'pentagon-papers',
    'mkultra',
    'panama-papers',
    'iran-contra',
    'cointelpro',
    'snowden',
    'tuskegee',
    'paperclip',
    'diddy-case'
];

let configured = 0;
let missing = 0;
const missingCases = [];

console.log('📋 Checking Price IDs:\n');

cases.forEach(caseKey => {
    const regex = new RegExp(`'${caseKey}':\\s*'(price_[^']+)'`);
    const match = stripePricesContent.match(regex);

    if (match && match[1]) {
        const priceId = match[1];

        // Check if it's a placeholder
        if (priceId.includes('your_') || priceId.includes('price_id_here')) {
            console.log(`  ⚠️  ${caseKey.padEnd(20)} - PLACEHOLDER: ${priceId}`);
            missing++;
            missingCases.push(caseKey);
        } else {
            console.log(`  ✅ ${caseKey.padEnd(20)} - ${priceId}`);
            configured++;
        }
    } else {
        console.log(`  ❌ ${caseKey.padEnd(20)} - NOT FOUND`);
        missing++;
        missingCases.push(caseKey);
    }
});

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Summary:`);
console.log(`   Configured: ${configured}/${cases.length}`);
console.log(`   Missing:    ${missing}/${cases.length}`);

if (missing > 0) {
    console.log(`\n⚠️  Missing Configuration for:`);
    missingCases.forEach(caseKey => {
        console.log(`   - ${caseKey}`);
    });
    console.log('\n📖 Follow the steps in STRIPE_SETUP_GUIDE.md to configure these cases.');
    console.log('\n❌ Stripe setup is INCOMPLETE');
    process.exit(1);
} else {
    console.log('\n✅ All price IDs are configured!');
    console.log('\n🎉 Stripe setup is COMPLETE - you can now accept payments!');
    process.exit(0);
}
