# Publishing Checklist

## Before Publishing

- [x] Project builds successfully (`npm run build`)
- [x] Tests pass (`node test-server.js`)
- [x] Documentation is complete (README.md)
- [x] Package.json is configured correctly
- [x] .npmignore excludes development files
- [x] Docs are downloaded and included

## Publishing Steps

### 1. Verify Package Contents

```bash
npm pack --dry-run
```

This shows what files will be included in the package.

### 2. Login to NPM

**Option A: Interactive Login**
```bash
npm login
```

**Option B: Using Token**
```bash
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN
```

### 3. Publish

```bash
npm publish --access public
```

**Note**: The `--access public` flag is required for scoped packages (@julianoczkowski/mcp-modus).

### 4. Verify Publication

Check that the package is available:
```bash
npm view @julianoczkowski/mcp-modus
```

Or visit: https://www.npmjs.com/package/@julianoczkowski/mcp-modus

### 5. Test Installation

In a different directory:
```bash
npm install -g @julianoczkowski/mcp-modus
mcp-modus
```

## Updating the Package

1. Update the version in `package.json`:
   - Patch release (bug fixes): `1.0.0` → `1.0.1`
   - Minor release (new features): `1.0.0` → `1.1.0`
   - Major release (breaking changes): `1.0.0` → `2.0.0`

2. Rebuild and test:
```bash
npm run build
node test-server.js
```

3. Publish the update:
```bash
npm publish
```

## Useful Commands

```bash
# Check current version
npm version

# Bump patch version
npm version patch

# Bump minor version
npm version minor

# Bump major version
npm version major

# Unpublish a version (within 72 hours)
npm unpublish @julianoczkowski/mcp-modus@1.0.0

# View package info
npm view @julianoczkowski/mcp-modus

# View all versions
npm view @julianoczkowski/mcp-modus versions
```

## Post-Publishing

After publishing, users can install and use the MCP server:

### Global Installation
```bash
npm install -g @julianoczkowski/mcp-modus
```

### Claude Desktop Configuration

Using npx (recommended - always uses latest version):
```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "npx",
      "args": ["-y", "@julianoczkowski/mcp-modus"]
    }
  }
}
```

Using global installation:
```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "mcp-modus"
    }
  }
}
```

## Troubleshooting

### Authentication Errors

If you get authentication errors:
1. Run `npm logout`
2. Run `npm login` again
3. Or verify your NPM token is correct

### Version Already Exists

NPM doesn't allow republishing the same version. Increment the version number:
```bash
npm version patch
npm publish --access public
```

### Package Size Warning

If the package is too large:
1. Check `.npmignore` to ensure dev files are excluded
2. Run `npm pack --dry-run` to see what's included
3. Remove unnecessary files from the `files` array in package.json
