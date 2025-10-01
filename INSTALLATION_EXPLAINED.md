# What Happens During NPM Installation

This document explains in detail what happens when a user runs:
```bash
npm install -g @julianoczkowski/mcp-modus
```

## Step-by-Step Installation Process

### 1. NPM Downloads the Package

**From**: https://registry.npmjs.org/@julianoczkowski/mcp-modus

**Size**:
- Compressed (tarball): ~57.7 KB
- Unpacked: ~219.2 KB

**Format**: A `.tgz` file (compressed tarball)

### 2. Package Contents (50 files total)

The package contains:

#### Compiled JavaScript (dist/)
```
dist/
├── index.js           (11.6 KB) - Main MCP server code
├── index.js.map       (8.6 KB)  - Source map for debugging
├── index.d.ts         (66 B)    - TypeScript type definitions
└── index.d.ts.map     (104 B)   - Source map for types
```

#### Documentation Files (docs/)
```
docs/
├── modus-wc-accordion.md
├── modus-wc-alert.md
├── modus-wc-autocomplete.md
├── modus-wc-avatar.md
├── modus-wc-badge.md
├── modus-wc-breadcrumbs.md
├── modus-wc-button.md
├── modus-wc-card.md
├── modus-wc-checkbox.md
├── modus-wc-chip.md
├── modus-wc-collapse.md
├── modus-wc-date.md
├── modus-wc-divider.md
├── modus-wc-dropdown-menu.md
├── modus-wc-icon.md
├── modus-wc-input-feedback.md
├── modus-wc-input-label.md
├── modus-wc-loader.md
├── modus-wc-menu-item.md
├── modus-wc-menu.md
├── modus-wc-modal.md
├── modus-wc-navbar.md
├── modus-wc-number-input.md
├── modus-wc-pagination.md
├── modus-wc-progress.md
├── modus-wc-radio.md
├── modus-wc-rating.md
├── modus-wc-select.md
├── modus-wc-side-navigation.md
├── modus-wc-skeleton.md
├── modus-wc-slider.md
├── modus-wc-stepper.md
├── modus-wc-switch.md
├── modus-wc-table.md
├── modus-wc-tabs.md
├── modus-wc-text-input.md
├── modus-wc-textarea.md
├── modus-wc-theme-switcher.md
├── modus-wc-time-input.md
├── modus-wc-toast.md
├── modus-wc-toolbar.md
├── modus-wc-tooltip.md
└── modus-wc-typography.md

Total: 43 component documentation files (~170 KB)
```

#### Supporting Files
```
download-docs.js    (1.9 KB)  - Script to refresh docs from GitHub
package.json        (1.1 KB)  - Package metadata
README.md           (3.4 KB)  - User documentation
```

### 3. Installation Location

**Global installation** (`-g` flag) installs to:

**macOS/Linux**:
```
/usr/local/lib/node_modules/@julianoczkowski/mcp-modus/
```

**Windows**:
```
C:\Users\<username>\AppData\Roaming\npm\node_modules\@julianoczkowski\mcp-modus\
```

**Directory structure after install**:
```
node_modules/@julianoczkowski/mcp-modus/
├── dist/
│   ├── index.js          ← Main executable
│   ├── index.js.map
│   ├── index.d.ts
│   └── index.d.ts.map
├── docs/                 ← 22 markdown files
├── node_modules/         ← Dependencies
│   └── @modelcontextprotocol/
│       └── sdk/          ← MCP SDK (~1-2 MB)
├── download-docs.js
├── package.json
└── README.md
```

### 4. Binary/Command Creation

Because of this in `package.json`:
```json
"bin": {
  "mcp-modus": "dist/index.js"
}
```

NPM creates a **symlink** (shortcut) to make the command globally available:

**macOS/Linux**:
```
/usr/local/bin/mcp-modus → /usr/local/lib/node_modules/@julianoczkowski/mcp-modus/dist/index.js
```

**Windows**:
```
C:\Users\<username>\AppData\Roaming\npm\mcp-modus.cmd
```

This allows users to run:
```bash
mcp-modus
```
from anywhere in their terminal.

### 5. Dependency Installation

NPM automatically installs the dependency:

**@modelcontextprotocol/sdk** (version ^1.0.4)
- Size: ~1-2 MB
- Contains: MCP protocol implementation
- Used for: Communication with Claude/Cursor

Total with dependencies: ~2-3 MB installed

### 6. Post-Install Script Execution

After installation, NPM runs:
```bash
node download-docs.js
```

**What this does**:
- Fetches the latest component docs from GitHub
- Downloads from: `https://raw.githubusercontent.com/julianoczkowski/QAUI-Modus-Web-Components/main/components_LLM_docs/`
- Updates/refreshes the 22 `.md` files in `docs/`
- Ensures documentation is current

**Note**: The docs are already bundled in the package, so this script just refreshes them to get any updates.

### 7. First Line of dist/index.js

The compiled JavaScript starts with:
```javascript
#!/usr/bin/env node
```

This is a **shebang** that tells the system to run this file with Node.js.

It's what allows you to run:
```bash
mcp-modus
```
instead of:
```bash
node /path/to/dist/index.js
```

## What the User Gets

After `npm install -g @julianoczkowski/mcp-modus`, the user has:

### 1. A Runnable Command
```bash
mcp-modus
# Starts the MCP server
```

### 2. Complete MCP Server
- Listens on stdio (standard input/output)
- Implements MCP protocol
- Provides 4 tools for querying documentation

### 3. 22 Component Documentation Files
- Complete Modus Web Components documentation
- Searchable and parseable
- Always available offline

### 4. All Dependencies
- MCP SDK installed automatically
- Ready to communicate with Claude/Cursor
- No additional setup needed

## How It's Used

### Option 1: Direct Command (Global Install)

**Claude Desktop config**:
```json
{
  "mcpServers": {
    "modus-docs": {
      "command": "mcp-modus"
    }
  }
}
```

Claude runs: `mcp-modus` → Starts the server

### Option 2: Via NPX (No Install)

**Claude Desktop config**:
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

Claude runs: `npx -y @julianoczkowski/mcp-modus`
- NPX downloads package to cache (~/.npm/_npx/)
- Runs it temporarily
- Caches for next use

### Option 3: Cursor IDE

**Cursor Settings → MCP**:
- Command: `mcp-modus` (if globally installed)
- Or: `npx -y @julianoczkowski/mcp-modus`

Cursor spawns the process and communicates via stdio.

## Under the Hood: Runtime Behavior

When the MCP server starts (`mcp-modus` is executed):

### 1. Node.js Loads dist/index.js
```javascript
// Simplified version of what happens
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
```

### 2. Server Loads Documentation
```javascript
// Reads from docs/ directory
const docs = readdirSync('./docs')
  .filter(f => f.endsWith('.md'))
  .map(f => ({
    component: f.replace('modus-wc-', '').replace('.md', ''),
    content: readFileSync(`./docs/${f}`, 'utf-8')
  }));
```

Loads all 43 markdown files into memory (~170 KB).

### 3. Server Registers Tools
```javascript
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    { name: 'search_components', ... },
    { name: 'get_component_docs', ... },
    { name: 'list_all_components', ... },
    { name: 'find_by_attribute', ... }
  ]
}));
```

### 4. Server Listens on stdio
```javascript
const transport = new StdioServerTransport();
await server.connect(transport);
// Now communicating via stdin/stdout
```

### 5. Communication Flow
```
Claude/Cursor → stdin → MCP Server → processes request → stdout → Claude/Cursor
```

Example:
```json
// Claude sends via stdin:
{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_component_docs","arguments":{"component":"button"}}}

// Server responds via stdout:
{"jsonrpc":"2.0","result":{"content":[{"type":"text","text":"... button docs ..."}]}}
```

## Memory and Performance

### At Rest (installed)
- Disk space: ~3 MB (including dependencies)
- No processes running
- Zero memory usage

### When Running
- Memory: ~30-50 MB
- CPU: Minimal (event-driven)
- One Node.js process per MCP connection

### Per Request
- Read doc from memory: <1ms
- Search all docs: ~5-10ms
- Return results: <1ms

Very lightweight and fast!

## What's NOT Included

The package does NOT include:
- ❌ TypeScript source code (src/)
- ❌ Development dependencies (typescript, @types/node)
- ❌ Test files
- ❌ Git files (.git/)
- ❌ Node modules from dev (excluded by .npmignore)

Only production files are included (see `files` array in package.json).

## Security

### No External API Calls at Runtime
- All documentation is bundled
- No network requests during tool calls
- Works completely offline

### Optional: Refresh Docs
The postinstall script fetches from GitHub, but:
- Only runs during install
- Uses HTTPS
- Can be disabled if needed
- Not required for functionality (docs already bundled)

## Uninstallation

```bash
npm uninstall -g @julianoczkowski/mcp-modus
```

Removes:
- The package directory
- The `mcp-modus` command
- All dependencies
- Symlinks/shortcuts

Complete cleanup.

## Summary

When a user runs `npm install -g @julianoczkowski/mcp-modus`:

1. ✅ Downloads ~58 KB compressed package
2. ✅ Unpacks to ~219 KB (code + docs)
3. ✅ Installs MCP SDK dependency (~1-2 MB)
4. ✅ Creates global `mcp-modus` command
5. ✅ Refreshes documentation from GitHub
6. ✅ Ready to use with Claude/Cursor

**Total size**: ~3 MB
**Total time**: ~10-30 seconds
**Result**: A fully functional MCP server with 43 component docs, accessible globally via `mcp-modus` command
