# MCP Modus

<div align="left">
  <img src="assets/hero_modus_mcp.png" alt="Modus 2 MCP" width="600">
</div>

<a href="https://glama.ai/mcp/servers/@julianoczkowski/mcp-modus">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@julianoczkowski/mcp-modus/badge" alt="Modus MCP server" />
</a>

[![NPM Version](https://img.shields.io/npm/v/@julianoczkowski/mcp-modus)](https://www.npmjs.com/package/@julianoczkowski/mcp-modus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI assistant for Modus Web Components** - Get instant help with component documentation, design rules, and setup guides directly in your IDE.

## What This Does

This MCP server gives AI assistants (like Cursor, Claude, VS Code) access to complete Modus Web Components documentation. Ask questions like:

- _"How do I use a Modus button with primary color?"_
- _"What are the Modus color guidelines?"_
- _"Show me how to set up a React project with Modus components"_
- _"Which components have a disabled attribute?"_

## Setup

Choose one of the two options below:

### Option 1: NPX (Recommended - No Installation)

**For any IDE with MCP support:**

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

**Benefits:** No installation required, always uses latest version, no permission issues, secure pre-bundled documentation.

### Option 2: Global Install

1. **Install globally:**

   ```bash
   npm install -g @julianoczkowski/mcp-modus
   ```

   > **Note**: On some systems, you may need `sudo npm install -g @julianoczkowski/mcp-modus`

2. **Use this config:**
   ```json
   {
     "mcpServers": {
       "modus-docs": {
         "command": "mcp-modus"
       }
     }
   }
   ```

**Benefits:** Faster startup, works offline after installation, secure pre-bundled documentation.

## IDE-Specific Instructions

### For Cursor IDE

1. Go to `Settings → Features → MCP`
2. Click "Add New MCP Server"
3. Use one of the JSON configs above

### For VS Code (with Continue)

Add to `~/.continue/config.json` using one of the JSON configs above.

### For Claude Desktop

Add to your config file using one of the JSON configs above:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

## What You Get

### 📚 **Component Documentation** (49 components)

Complete API documentation for all Modus Web Components including attributes, events, methods, slots, and usage examples.

<details>
<summary><strong>View all 49 components</strong></summary>

| Component                  | Description                             |
| -------------------------- | --------------------------------------- |
| `modus-wc-accordion`       | Expandable/collapsible content sections |
| `modus-wc-alert`           | Contextual feedback messages            |
| `modus-wc-autocomplete`    | Text input with suggestions             |
| `modus-wc-avatar`          | User profile images                     |
| `modus-wc-badge`           | Status indicators and labels            |
| `modus-wc-breadcrumbs`     | Navigation path indicators              |
| `modus-wc-button`          | Interactive action buttons              |
| `modus-wc-button-group`    | Grouped buttons with selection modes    |
| `modus-wc-card`            | Content container with elevation        |
| `modus-wc-checkbox`        | Boolean input control                   |
| `modus-wc-chip`            | Compact interactive elements            |
| `modus-wc-collapse`        | Animated show/hide content              |
| `modus-wc-date`            | Date picker input                       |
| `modus-wc-divider`         | Visual content separator                |
| `modus-wc-dropdown-menu`   | Contextual menu with trigger            |
| `modus-wc-file-dropzone`   | Drag-and-drop file upload               |
| `modus-wc-handle`          | Resizable panel divider                 |
| `modus-wc-icon`            | Modus icon display                      |
| `modus-wc-input-feedback`  | Form validation messages                |
| `modus-wc-input-label`     | Form field labels                       |
| `modus-wc-loader`          | Loading state indicators                |
| `modus-wc-logo`            | Trimble/Viewpoint brand logos           |
| `modus-wc-menu`            | Navigation menu container               |
| `modus-wc-menu-item`       | Menu navigation items                   |
| `modus-wc-modal`           | Dialog overlays                         |
| `modus-wc-navbar`          | Top navigation bar                      |
| `modus-wc-number-input`    | Numeric input with controls             |
| `modus-wc-pagination`      | Page navigation controls                |
| `modus-wc-panel`           | Structured layout container             |
| `modus-wc-progress`        | Progress indicators                     |
| `modus-wc-radio`           | Single-select option control            |
| `modus-wc-rating`          | Star rating input                       |
| `modus-wc-select`          | Dropdown selection input                |
| `modus-wc-side-navigation` | Sidebar navigation                      |
| `modus-wc-skeleton`        | Loading placeholder                     |
| `modus-wc-slider`          | Range value selector                    |
| `modus-wc-stepper`         | Multi-step process indicator            |
| `modus-wc-switch`          | Toggle on/off control                   |
| `modus-wc-table`           | Data table display                      |
| `modus-wc-tabs`            | Tabbed content navigation               |
| `modus-wc-text-input`      | Single-line text input                  |
| `modus-wc-textarea`        | Multi-line text input                   |
| `modus-wc-theme-switcher`  | Theme selection control                 |
| `modus-wc-time-input`      | Time picker input                       |
| `modus-wc-toast`           | Notification messages                   |
| `modus-wc-toolbar`         | Action button container                 |
| `modus-wc-tooltip`         | Contextual hover information            |
| `modus-wc-typography`      | Text styling component                  |
| `modus-wc-utility-panel`   | Slide-out utility panel                 |

</details>

### 🎨 **Design System Rules** (6 guides)

Comprehensive design guidelines for building consistent Modus applications.

| Guide           | Coverage                                      |
| --------------- | --------------------------------------------- |
| `modus_colors`  | Color tokens, semantic colors, theme palettes |
| `modus_icons`   | Icon names, sizes, usage guidelines           |
| `typography`    | Font families, sizes, weights, line heights   |
| `spacing`       | Spacing scale, margins, padding values        |
| `breakpoints`   | Responsive breakpoints, media queries         |
| `radius_stroke` | Border radius values, stroke widths           |

### ⚙️ **Project Setup Guides** (5 guides)

Step-by-step instructions for integrating Modus Web Components.

| Guide             | Coverage                                                  |
| ----------------- | --------------------------------------------------------- |
| `setup_html`      | HTML project setup, CDN usage, basic integration          |
| `setup_react`     | React project setup, npm installation, component usage    |
| `theme_usage`     | Theme implementation, light/dark modes, customization     |
| `testing`         | Testing guidelines, accessibility testing, best practices |
| `universal_rules` | General development rules, coding standards               |

## Example Usage

Once configured, ask your AI assistant:

```
"Create a Modus button with warning color and medium size"
"What spacing values should I use in my Modus design?"
"How do I set up a new React project with Modus Web Components?"
"Show me all Modus form components"
"What are the available Modus color tokens?"
```

The AI will use the MCP server to fetch the latest documentation and provide accurate, up-to-date answers.

## Security & Reliability

- **🔒 Pre-bundled Documentation**: All documentation is included with the package - no runtime downloads
- **🛡️ No External Dependencies**: Runs completely offline after installation
- **✅ Verified Content**: Documentation is verified during our CI/CD process
- **🚀 Fast & Secure**: No network requests during operation
- **🔐 Secure Publishing**: Uses npm Trusted Publishers (OIDC) for secure, automated releases with automatic provenance attestation

## Troubleshooting

### Server Not Connecting

- Ensure Node.js 20+ is installed: `node --version` (required for npm 11.5.1+ which supports OIDC)
- For global install: verify with `mcp-modus --help`
- Check IDE logs for error messages

### Documentation Updates

**Documentation is pre-bundled** with each release for security and reliability. No downloads occur during installation or runtime.

### Uninstalling

If you used the **NPX option** (Option 1), no permanent installation exists. NPX downloads are temporary.

If you used the **Global Install option** (Option 2), uninstall with:

```bash
npm uninstall -g @julianoczkowski/mcp-modus
```

### Need Help?

- [GitHub Issues](https://github.com/julianoczkowski/mcp-modus/issues)
- [Modus Web Components Docs](https://modus.trimble.com/)

---

**Built for developers using Modus Web Components** | **MIT License** | **Made by Julian Oczkowski**
