#!/bin/bash

# Setup script for GitHub repository and automation
# This script helps you set up the GitHub repo and CI/CD automation

set -e

echo "🚀 MCP Modus - GitHub Setup"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository"
    echo "Run: git init"
    exit 1
fi

echo "Step 1: Checking current git status..."
git status --short

echo ""
echo "Step 2: Creating initial commit (if needed)..."
if ! git rev-parse HEAD >/dev/null 2>&1; then
    git add .
    git commit -m "Initial commit: MCP Modus server with 43 components"
    echo "✅ Initial commit created"
else
    echo "✅ Repository already has commits"
fi

echo ""
echo "Step 3: GitHub repository setup"
echo ""
echo "Choose an option:"
echo "  1) Create new GitHub repo using GitHub CLI (gh)"
echo "  2) Add existing GitHub repo as remote"
echo "  3) Skip (already configured)"
echo ""
read -p "Enter choice [1-3]: " choice

case $choice in
    1)
        if ! command -v gh &> /dev/null; then
            echo "❌ GitHub CLI not found. Install from: https://cli.github.com/"
            exit 1
        fi

        echo "Creating GitHub repository..."
        gh repo create mcp-modus --public --source=. --remote=origin --push
        echo "✅ Repository created and pushed"
        ;;
    2)
        read -p "Enter GitHub repo URL (e.g., https://github.com/julianoczkowski/mcp-modus.git): " repo_url
        git remote add origin "$repo_url" || echo "Remote 'origin' already exists"
        git branch -M main
        git push -u origin main
        echo "✅ Repository connected and pushed"
        ;;
    3)
        echo "⏭️  Skipped"
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "Step 4: NPM Token setup"
echo ""
echo "You need to add your NPM_TOKEN to GitHub Secrets:"
echo ""
echo "1. Get your NPM token:"
echo "   - Go to: https://www.npmjs.com/settings/YOUR_USERNAME/tokens"
echo "   - Click 'Generate New Token' → 'Automation'"
echo "   - Copy the token (starts with npm_...)"
echo ""
echo "2. Add to GitHub:"
echo "   - Go to: https://github.com/julianoczkowski/mcp-modus/settings/secrets/actions"
echo "   - Click 'New repository secret'"
echo "   - Name: NPM_TOKEN"
echo "   - Value: [paste your token]"
echo ""
read -p "Have you added NPM_TOKEN to GitHub Secrets? [y/N]: " confirm

if [[ $confirm == [yY] ]]; then
    echo "✅ NPM token configured"
else
    echo "⚠️  Remember to add NPM_TOKEN before releasing!"
fi

echo ""
echo "Step 5: Verify GitHub Actions"
echo ""
echo "GitHub Actions workflows are in: .github/workflows/"
ls -la .github/workflows/

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Verify workflows on GitHub:"
echo "   https://github.com/julianoczkowski/mcp-modus/actions"
echo ""
echo "2. To release v1.0.0:"
echo "   npm version 1.0.0"
echo "   git push && git push --tags"
echo ""
echo "3. Watch the automation:"
echo "   https://github.com/julianoczkowski/mcp-modus/actions"
echo ""
echo "For more details, see: AUTOMATION.md"
