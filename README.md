# MCP Modus - Modus Web Components Documentation Server

[![CI](https://github.com/julianoczkowski/mcp-modus/actions/workflows/ci.yml/badge.svg)](https://github.com/julianoczkowski/mcp-modus/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@julianoczkowski/mcp-modus)](https://www.npmjs.com/package/@julianoczkowski/mcp-modus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An MCP (Model Context Protocol) server that provides access to Modus Web Components documentation for AI assistants.

## Features

- 🔍 **Search Components**: Find components by name or keyword across 43 components
- 📖 **Get Documentation**: Retrieve complete documentation for any component
- 📋 **List Components**: Browse all 43 available components by category
- 🔎 **Find by Attribute**: Discover components with specific attributes

## Installation

### From NPM (after publishing)

```bash
npm install -g @julianoczkowski/mcp-modus
```

### Local Development

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Download the documentation files:

```bash
node download-docs.js
```

4. Build the project:

```bash
npm run build
```

## Local Testing

### Testing with Claude Desktop

1. Build the project:

```bash
npm run build
```

2. Add to your Claude Desktop config file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-modus/dist/index.js"]
    }
  }
}
```

3. Restart Claude Desktop

4. Look for the 🔌 icon to verify the server is connected

### Testing with Cursor IDE

See **[CURSOR_SETUP.md](CURSOR_SETUP.md)** for complete Cursor-specific instructions.

**Quick Setup**:

1. Build the project: `npm run build`
2. Open Cursor → Settings → Features → MCP
3. Click "Add New MCP Server"
4. Configure:
   - **Name**: `Modus Docs`
   - **Type**: `command`
   - **Command**: `node`
   - **Args**: `/absolute/path/to/mcp-modus/dist/index.js`
5. Verify the status turns green

Then ask Cursor questions like:
- "Show me the Modus button component documentation"
- "Create a form using Modus Web Components"

### Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## Available Tools

### `search_components`
Search for components by name or keyword.

**Parameters:**
- `query` (string): Search term (e.g., "button", "input", "modal")

### `get_component_docs`
Get complete documentation for a specific component.

**Parameters:**
- `component` (string): Component name (e.g., "button", "card", "modal")

### `list_all_components`
List all available Modus Web Components organized by category.

### `find_by_attribute`
Find components that have a specific attribute.

**Parameters:**
- `attribute` (string): Attribute name (e.g., "disabled", "color", "size")

## Example Usage in Claude

Once the MCP server is connected, you can ask Claude:

- "Show me the documentation for the Modus button component"
- "Search for components related to forms"
- "List all available Modus components"
- "Which components have a 'disabled' attribute?"
- "How do I use the Modus modal component?"

## Publishing to NPM

### Automated (Recommended)

The project uses GitHub Actions for automated publishing:

1. Update version and push tag:
   ```bash
   npm version patch  # or minor/major
   git push && git push --tags
   ```

2. GitHub Actions automatically:
   - Builds and tests the package
   - Publishes to NPM
   - Creates GitHub release

See [AUTOMATION.md](AUTOMATION.md) for complete setup guide.

### Manual Publishing

1. Update version in `package.json` if needed

2. Login to NPM (one time):

```bash
npm login
```

Or use an NPM token:

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_NPM_TOKEN
```

3. Publish:

```bash
npm publish --access public
```

## Development

- `npm run build` - Build the TypeScript code
- `npm run watch` - Watch mode for development
- `npm test` - Run the server (for testing)
- `node download-docs.js` - Refresh documentation

## License

MIT
