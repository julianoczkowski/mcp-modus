# Automation & CI/CD Setup

This document explains the automated workflows for testing, building, and publishing the MCP Modus package.

## Overview

Two GitHub Actions workflows automate the project:

1. **CI Workflow** (`.github/workflows/ci.yml`) - Runs on every push/PR
2. **Publish Workflow** (`.github/workflows/publish.yml`) - Runs on version tags

## Prerequisites

### 1. GitHub Repository Setup

First, create and push your repository to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: MCP Modus server with 43 components"

# Create GitHub repo (via GitHub CLI or web interface)
gh repo create mcp-modus --public --source=. --remote=origin

# Or manually add remote
git remote add origin https://github.com/julianoczkowski/mcp-modus.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. NPM Token Setup

1. Log in to [npmjs.com](https://www.npmjs.com/)
2. Go to: **Account → Access Tokens**
3. Click **Generate New Token** → **Classic Token**
4. Select **Automation** type
5. Copy the token (starts with `npm_...`)

### 3. Add NPM Token to GitHub

1. Go to your GitHub repository
2. Navigate to: **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click **Add secret**

**Note**: `GITHUB_TOKEN` is automatically provided by GitHub Actions, no setup needed.

## Workflows Explained

### CI Workflow (Continuous Integration)

**Trigger**: Runs on every push to `main` or `develop` branches, and on all pull requests.

**What it does**:
1. Tests on Node.js versions 18, 20, and 22 (matrix testing)
2. Downloads and verifies documentation (checks for 40+ files)
3. Builds the TypeScript code
4. Verifies build output exists
5. Runs tests (if available)
6. Tests server startup
7. Lints TypeScript code
8. Validates package.json structure

**Purpose**: Ensures code quality and catches issues before release.

**Status Badge**: Add to README.md:
```markdown
![CI](https://github.com/julianoczkowski/mcp-modus/actions/workflows/ci.yml/badge.svg)
```

### Publish Workflow (Automated Release)

**Trigger**: Runs when you push a version tag (e.g., `v1.0.0`) or manually via workflow dispatch.

**What it does**:
1. Checks out code
2. Sets up Node.js 18
3. Installs dependencies
4. Downloads documentation
5. Verifies documentation (40+ files)
6. Builds the package
7. Runs tests
8. **Publishes to NPM** (using your `NPM_TOKEN`)
9. **Creates GitHub Release** with release notes

**Purpose**: Fully automates the release process.

## How to Release a New Version

### Step 1: Update Version

Update the version in `package.json`:

```bash
# Patch release (1.0.0 → 1.0.1)
npm version patch

# Minor release (1.0.0 → 1.1.0)
npm version minor

# Major release (1.0.0 → 2.0.0)
npm version major
```

This command:
- Updates `package.json`
- Creates a git commit
- Creates a git tag (e.g., `v1.0.1`)

### Step 2: Update CHANGELOG.md

Edit `CHANGELOG.md` to document changes:

```markdown
## [1.0.1] - 2025-10-02

### Added
- New feature X

### Fixed
- Bug fix Y

### Changed
- Updated dependency Z
```

Commit the changelog:
```bash
git add CHANGELOG.md
git commit --amend --no-edit
```

### Step 3: Push Tag to Trigger Release

```bash
# Push commits
git push origin main

# Push tag to trigger publish workflow
git push origin v1.0.1
```

### Step 4: Watch the Automation

1. Go to: `https://github.com/julianoczkowski/mcp-modus/actions`
2. Watch the **Publish to NPM** workflow run
3. It will:
   - ✅ Build and test
   - ✅ Publish to NPM
   - ✅ Create GitHub release

### Step 5: Verify

**Check NPM**:
```bash
npm view @julianoczkowski/mcp-modus
```

**Check GitHub Release**:
Visit: `https://github.com/julianoczkowski/mcp-modus/releases`

## Manual Publish (Without Automation)

If you prefer to publish manually or test first:

```bash
# Build
npm run build

# Test locally
node test-server.js

# Login to NPM
npm login

# Publish
npm publish --access public

# Create git tag
git tag v1.0.0
git push origin v1.0.0
```

## Workflow Dispatch (Manual Trigger)

You can manually trigger the publish workflow:

1. Go to: **Actions → Publish to NPM**
2. Click **Run workflow**
3. Select branch (usually `main`)
4. Click **Run workflow**

This publishes the current version without creating a new tag.

## Troubleshooting

### Publish Fails: NPM Token Invalid

**Error**: `npm ERR! code E401`

**Fix**:
1. Generate new NPM token
2. Update GitHub secret `NPM_TOKEN`
3. Re-run workflow

### Documentation Download Fails

**Error**: `Expected at least 40 documentation files`

**Fix**:
1. Check GitHub repo is accessible
2. Verify URLs in `download-docs.js`
3. Test locally: `node download-docs.js`

### TypeScript Build Fails

**Error**: `error TS...`

**Fix**:
1. Test locally: `npm run build`
2. Fix TypeScript errors
3. Commit and push

### GitHub Release Not Created

**Error**: `Error: Resource not accessible by integration`

**Fix**: The workflow uses the deprecated `actions/create-release@v1`. Consider updating to:

```yaml
- name: Create GitHub Release
  uses: softprops/action-gh-release@v1
  with:
    name: Release ${{ github.ref_name }}
    body_path: release_notes.md
    draft: false
    prerelease: false
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Best Practices

### Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.0 → 1.0.1): Bug fixes, documentation updates
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

### Before Releasing

✅ Run local tests: `npm run build && node test-server.js`
✅ Update CHANGELOG.md
✅ Update version: `npm version [patch|minor|major]`
✅ Review changes: `git diff HEAD~1`
✅ Push to main first, verify CI passes
✅ Then push tag to trigger release

### After Releasing

✅ Verify NPM package: `npm view @julianoczkowski/mcp-modus`
✅ Test installation: `npm install -g @julianoczkowski/mcp-modus`
✅ Check GitHub release page
✅ Update documentation if needed
✅ Announce release (Twitter, Discord, etc.)

## Workflow Files Location

```
.github/
└── workflows/
    ├── ci.yml       # Continuous integration
    └── publish.yml  # NPM publishing & GitHub release
```

## Security Notes

### Secrets Management

- ✅ `NPM_TOKEN`: Store as GitHub secret
- ✅ `GITHUB_TOKEN`: Auto-provided, no action needed
- ❌ Never commit tokens to git
- ❌ Never log tokens in workflows

### NPM Token Types

Use **Automation** tokens for CI/CD:
- ✅ Can publish packages
- ✅ Can't change account settings
- ✅ Can be revoked anytime
- ✅ Scoped to specific packages (optional)

## Monitoring

### View Workflow Runs

```
https://github.com/julianoczkowski/mcp-modus/actions
```

### Check Workflow Status

Add badges to README:

```markdown
![CI](https://github.com/julianoczkowski/mcp-modus/actions/workflows/ci.yml/badge.svg)
![Publish](https://github.com/julianoczkowski/mcp-modus/actions/workflows/publish.yml/badge.svg)
```

### NPM Download Stats

View at:
```
https://www.npmjs.com/package/@julianoczkowski/mcp-modus
```

Or via CLI:
```bash
npm info @julianoczkowski/mcp-modus
```

## Quick Reference

```bash
# Release patch version (bug fixes)
npm version patch && git push && git push --tags

# Release minor version (new features)
npm version minor && git push && git push --tags

# Release major version (breaking changes)
npm version major && git push && git push --tags

# Test locally before releasing
npm ci && npm run build && node test-server.js

# View all tags
git tag -l

# Delete a tag (if mistake)
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0

# Unpublish from NPM (within 72 hours)
npm unpublish @julianoczkowski/mcp-modus@1.0.0
```

## Summary

With this automation setup:

1. ✅ Every commit is tested automatically (CI workflow)
2. ✅ Version tags trigger automatic NPM publishing
3. ✅ GitHub releases are created automatically
4. ✅ Multiple Node.js versions are tested
5. ✅ Documentation is verified before release
6. ✅ No manual publish steps needed

**To release**: Just run `npm version patch && git push --tags` 🚀
