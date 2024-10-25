#!/bin/bash

# test-chromatic.sh
echo "🚀 Starting Chromatic test process..."

# Check if token is set
if [ -z "$CHROMATIC_PROJECT_TOKEN" ]; then
    if [ -f .env ]; then
        export $(cat .env | grep -v '^#' | xargs)
    else
        echo "❌ Error: CHROMATIC_PROJECT_TOKEN not set and no .env file found"
        exit 1
    fi
fi

# Build Storybook first
echo "📚 Building Storybook..."
npm run build-storybook

# Run Chromatic with progress indicator
echo "🎨 Running Chromatic..."
npm run chromatic

# Check the result
if [ $? -eq 0 ]; then
    echo "✅ Chromatic test completed successfully!"
else
    echo "⚠️  Chromatic detected changes. Check the URL above for review."
fi