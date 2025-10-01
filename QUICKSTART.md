# Quick Start Guide

## Local Testing (Before Publishing)

### Step 1: Build the Project

```bash
npm install
npm run build
```

The docs will be downloaded automatically during `npm install`.

### Step 2: Test with Claude Desktop

1. Find your Claude Desktop config file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

2. Add the MCP server configuration:

```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "node",
      "args": [
        "/Users/julianoczkowski/Desktop/Development/mcp-modus/dist/index.js"
      ]
    }
  }
}
```

Replace the path with your actual absolute path to the `dist/index.js` file.

3. Restart Claude Desktop

4. Look for the 🔌 icon in Claude Desktop to verify the MCP server is connected

### Step 3: Try It Out

Ask Claude questions like:

- "Show me the documentation for the Modus button component"
- "Search for form-related Modus components"
- "List all available Modus Web Components"
- "Which components have a 'size' attribute?"

## Publishing to NPM

### Option 1: Using NPM Login

```bash
npm login
npm publish --access public
```

### Option 2: Using NPM Token

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN
npm publish --access public
```

### After Publishing

Users can install globally:

```bash
npm install -g @julianoczkowski/mcp-modus
```

And configure Claude Desktop with:

```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "npx",
      "args": [
        "-y",
        "@julianoczkowski/mcp-modus"
      ]
    }
  }
}
```

Or use the installed binary directly:

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

### Server Not Connecting

1. Check that the path in the config is absolute and correct
2. Verify that `dist/index.js` exists (run `npm run build` if missing)
3. Check Claude Desktop logs for errors

### No Documentation Found

Run the download script manually:

```bash
node download-docs.js
```

This should download all component documentation files to the `docs/` directory.

### Testing the Server

Run the test suite:

```bash
node test-server.js
```

Or test with MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```
