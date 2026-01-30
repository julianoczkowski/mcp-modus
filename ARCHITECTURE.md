# MCP Modus Architecture

Visual guide to how the MCP Modus server is structured and how it operates with the enhanced feature set.

## Package Structure

```
@julianoczkowski/mcp-modus (NPM Package)
│
├─ 📦 Compressed Size: ~80 KB
├─ 📂 Unpacked Size: ~350 KB
│
└─ Contents:
   │
   ├─ 🟦 dist/ (Compiled JavaScript)
   │  ├─ index.js ................ 15.2 KB  [Main MCP Server]
   │  ├─ index.js.map ............ 12.1 KB  [Source map]
   │  ├─ index.d.ts .............. 1.2 KB   [TypeScript types]
   │  └─ index.d.ts.map .......... 1.8 KB   [Type source map]
   │
   ├─ 📚 docs/ (Component Documentation)
   │  ├─ modus-wc-accordion.md
   │  ├─ modus-wc-alert.md
   │  ├─ modus-wc-button.md
   │  ├─ ... (46 more files)
   │  └─ [49 total files] ........ ~170 KB
   │
   ├─ 🎨 rules/ (Design Rules)
   │  ├─ breakpoints.md
   │  ├─ modus_colors.md
   │  ├─ modus_icons.md
   │  ├─ radius_stroke.md
   │  ├─ spacing.md
   │  └─ typography.md ........... ~50 KB
   │
   ├─ ⚙️ setup/ (Setup Guides)
   │  ├─ setup_html.md
   │  ├─ setup_react.md
   │  ├─ testing.md
   │  ├─ theme_usage.md
   │  └─ universal_rules.md ...... ~35 KB
   │
   ├─ 🔧 Support Files
   │  ├─ package.json ............ 1.2 KB   [Metadata]
   │  ├─ README.md ............... 4.1 KB   [Documentation]
   │  └─ download-docs.js ........ 2.8 KB   [Doc updater]
   │
   └─ 📦 Dependencies (auto-installed)
      └─ @modelcontextprotocol/sdk  ~1-2 MB  [MCP Protocol]
```

## Installation Flow

```
┌─────────────────────────────────────────────────────────────┐
│ User chooses installation method:                           │
│ Option 1: npx -y @julianoczkowski/mcp-modus (recommended)   │
│ Option 2: npm install -g @julianoczkowski/mcp-modus         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 1: NPM Downloads Package                               │
│ From: registry.npmjs.org                                    │
│ Size: ~80 KB (compressed)                                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 2: Extract & Install Dependencies                      │
│ Installing @modelcontextprotocol/sdk (~1-2 MB)              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Step 3: Run postinstall Script                              │
│ Executes: node download-docs.js                             │
│ Downloads fresh docs from 3 GitHub repositories:            │
│ - components_LLM_docs/ (49 files)                           │
│ - rules_LLM_docs/ (6 files)                                 │
│ - setup_LLM_docs/ (5 files)                                 │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ ✅ Installation Complete                                    │
│ Total disk usage: ~4 MB                                     │
│ Ready for MCP integration                                   │
└─────────────────────────────────────────────────────────────┘
```

## Runtime Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                 IDE (Cursor / VS Code / Claude Desktop)          │
│                                                                  │
│  Spawns process:  npx -y @julianoczkowski/mcp-modus              │
│                   or mcp-modus (if globally installed)           │
│                      │                                           │
│                      ├─ stdin  (sends JSON-RPC requests)         │
│                      └─ stdout (receives JSON-RPC responses)     │
└──────────────────────┼───────────────────────────────────────────┘
                       │
                       │ stdio communication
                       │
┌──────────────────────▼───────────────────────────────────────────┐
│                   MCP Modus Server Process                       │
│                   (Node.js Runtime)                              │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐      │
│  │ 1. Startup & Initialization                            │      │
│  │    - Load @modelcontextprotocol/sdk                    │      │
│  │    - Initialize Server instance                        │      │
│  │    - Setup StdioServerTransport                        │      │
│  └────────────────────────────────────────────────────────┘      │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐      │
│  │ 2. Load All Documentation                              │      │
│  │    - Read docs/ directory (49 component files)         │      │
│  │    - Read rules/ directory (6 design rule files)       │      │
│  │    - Read setup/ directory (5 setup guide files)       │      │
│  │    - Parse metadata and content                        │      │
│  │    - Memory usage: ~255 KB (all docs)                  │      │
│  └────────────────────────────────────────────────────────┘      │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐      │
│  │ 3. Register 10 MCP Tools                               │      │
│  │                                                        │      │
│  │    Component Tools (4):                                │      │
│  │    ┌──────────────────────────────────────────┐        │      │
│  │    │ search_components(query)                 │        │      │
│  │    │ get_component_docs(component)            │        │      │
│  │    │ list_all_components()                    │        │      │
│  │    │ find_by_attribute(attribute)             │        │      │
│  │    └──────────────────────────────────────────┘        │      │
│  │                                                        │      │
│  │    Design Rules Tools (3):                             │      │
│  │    ┌──────────────────────────────────────────┐        │      │
│  │    │ get_design_rules(category)               │        │      │
│  │    │ search_design_rules(query)               │        │      │
│  │    │ list_design_categories()                 │        │      │
│  │    └──────────────────────────────────────────┘        │      │
│  │                                                        │      │
│  │    Setup & Development Tools (3):                      │      │
│  │    ┌──────────────────────────────────────────┐        │      │
│  │    │ get_setup_guide(type)                    │        │      │
│  │    │ get_theme_usage()                        │        │      │
│  │    │ get_development_rules()                  │        │      │
│  │    └──────────────────────────────────────────┘        │      │
│  └────────────────────────────────────────────────────────┘      │
│                           │                                      │
│                           ▼                                      │
│  ┌────────────────────────────────────────────────────────┐      │
│  │ 4. Listen Loop                                         │      │
│  │    - Wait for JSON-RPC requests on stdin               │      │
│  │    - Parse and route to appropriate handler            │      │
│  │    - Send responses via stdout                         │      │
│  │    - Memory: ~35-60 MB total                           │      │
│  └────────────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│ GitHub Repository                                           │
│ julianoczkowski/QAUI-Modus-Web-Components                   │
│                                                             │
│ ├─ /components_LLM_docs/ (49 component files)               │
│ ├─ /rules_LLM_docs/ (6 design rule files)                   │
│ └─ /setup_LLM_docs/ (5 setup guide files)                   │
└────────────┬────────────────────────────────────────────────┘
             │
             │ download-docs.js
             │ (during postinstall)
             ▼
┌─────────────────────────────────────────────────────────────┐
│ NPM Package Local Storage                                   │
│ @julianoczkowski/mcp-modus                                  │
│                                                             │
│ ├─ /docs/ (49 component files)                              │
│ ├─ /rules/ (6 design rule files)                            │
│ └─ /setup/ (5 setup guide files)                            │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              │ readFileSync() at startup
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ Server Memory (3 Arrays)                                    │
│                                                             │
│ this.docs = [ /* 49 ComponentDoc objects */ ]               │
│ this.rules = [ /* 6 RuleDoc objects */ ]                    │
│ this.setup = [ /* 5 SetupDoc objects */ ]                   │
│                                                             │
│ Total: 60 documentation objects in memory                   │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              │ Tool calls (10 different tools)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ MCP Response                                                │
│ → IDE/Claude → User sees formatted answer                   │
└─────────────────────────────────────────────────────────────┘
```

## Tool Categories & Capabilities

### 📚 Component Documentation Tools (4)

- `search_components(query)` - Searches across 49 components by name/keyword
- `get_component_docs(component)` - Returns complete docs for specific component
- `list_all_components()` - Lists all 49 components organized by category
- `find_by_attribute(attribute)` - Finds components with specific attributes

### 🎨 Design Rules Tools (3)

- `get_design_rules(category)` - Returns rules for colors, icons, spacing, typography, breakpoints, radius_stroke
- `search_design_rules(query)` - Searches across all design rules by keyword
- `list_design_categories()` - Lists all 6 design rule categories

### ⚙️ Setup & Development Tools (3)

- `get_setup_guide(type)` - Returns setup guides for html, react, testing
- `get_theme_usage()` - Returns theme implementation guidelines
- `get_development_rules()` - Returns universal development best practices

## Performance Characteristics

| Operation              | Time    | Memory     |
| ---------------------- | ------- | ---------- |
| Server startup         | ~150ms  | 0 → 35 MB  |
| Load all documentation | ~80ms   | +255 KB    |
| Tool registration      | <1ms    | Negligible |
| Search components      | 5-15ms  | Negligible |
| Get component docs     | <1ms    | Negligible |
| Search design rules    | 8-20ms  | Negligible |
| Get setup guides       | <1ms    | Negligible |
| List operations        | 10-25ms | Negligible |
| Idle (waiting)         | 0% CPU  | 35-60 MB   |

**Lightweight and efficient** - suitable for continuous background operation

## File System Footprint

**After Installation:**

- Package: ~350 KB (uncompressed)
- Dependencies: ~2 MB
- Downloaded docs: ~255 KB
- **Total: ~4 MB**

**When Running:**

- Disk: Same (no temp files)
- Memory: 35-60 MB
- Network: 0 (offline after install)

## Security Model

**MCP Server Process:**

- **Reads:** docs/, rules/, setup/ directories (bundled files only)
- **Writes:** None
- **Network:** None (at runtime)
- **File system:** Read-only access

**Communication:**

- **Transport:** stdio only (stdin/stdout)
- **Protocol:** JSON-RPC over stdio
- **Control:** IDE/Claude controls tool execution

**Security Features:**

- ✅ No external network calls at runtime
- ✅ No file writes
- ✅ No system modifications
- ✅ Pure read-only documentation server

## Summary

**What gets installed**: A comprehensive Node.js application (~4 MB total) containing:

- Enhanced MCP server implementation (15.2 KB JavaScript)
- 49 component documentation files (~170 KB)
- 6 design rule files (~50 KB)
- 5 setup guide files (~35 KB)
- MCP SDK dependency (~1-2 MB)
- Available as: `mcp-modus` command or `npx @julianoczkowski/mcp-modus`

**How it works**: Runs as a background process, communicates via stdin/stdout using JSON-RPC, serves comprehensive Modus documentation from bundled files in memory.

**Performance**: Minimal footprint, sub-25ms response times, works completely offline, supports 10 different tools across 3 categories.

**Coverage**: Complete Modus Web Components ecosystem including component APIs, design system guidelines, and project setup instructions.
