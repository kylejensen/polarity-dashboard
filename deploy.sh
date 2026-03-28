#!/bin/bash
# Polarity Dashboard Quick Deploy Script

set -e

echo "🚀 Polarity Labs Dashboard - Quick Deploy"
echo "=========================================="
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from /data/.openclaw/workspace/polarity-dashboard/"
    exit 1
fi

# Check for vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "✅ Vercel CLI ready"
echo ""

# Ensure dependencies are installed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "   Installing dependencies..."
    npm install
fi

echo "✅ Dependencies ready"
echo ""

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Build complete"
echo ""

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
echo ""
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📸 Pro tip: Take a screenshot of your dashboard for LinkedIn/Twitter!"
echo "   Ideal crop: 1200x630 for social media posts"
echo ""
