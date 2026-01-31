# Release v2.0.0

## Overview

Major documentation release with complete coverage of all 49 Modus Web Components. This release brings the MCP server to full parity with the Modus Web Components library.

## What's New

### Complete Component Coverage

- **49 Modus Web Components** now fully documented (previously 43)
- **60 total documentation files** (49 components + 6 design rules + 5 setup guides)
- All component APIs, attributes, events, and usage examples included

### New Components Added

The following 6 components have been added to the documentation:

1. `modus-wc-button-group` - Grouped buttons with selection modes
2. `modus-wc-file-dropzone` - Drag-and-drop file upload
3. `modus-wc-handle` - Resizable panel divider
4. `modus-wc-logo` - Trimble/Viewpoint brand logos
5. `modus-wc-panel` - Structured layout container
6. `modus-wc-utility-panel` - Slide-out utility panel

### Documentation Quality

- Comprehensive API documentation for all components
- Updated design system rules
- Improved setup guides for HTML and React projects
- Enhanced testing guidelines

## Package Information

| Metric                    | Value                        |
| ------------------------- | ---------------------------- |
| Version                   | 2.0.0                        |
| Node.js                   | Requires 18+                 |
| Total Components          | 49 Modus Web Components      |
| Design Rules              | 6 categories                 |
| Setup Guides              | 5 guides                     |
| Total Documentation Files | 60                           |
| MCP Tools                 | 10 tools across 3 categories |

## Installation

**Option 1: NPX (Recommended - No Installation)**

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

**Option 2: Global Install**

```bash
npm install -g @julianoczkowski/mcp-modus
```

## Breaking Changes

None. This is a documentation-only update with backward compatibility.

## Tool Summary

### Component Documentation Tools (4)

- `search_components(query)` - Search across 49 components
- `get_component_docs(component)` - Get complete component documentation
- `list_all_components()` - List all 49 components by category
- `find_by_attribute(attribute)` - Find components with specific attributes

### Design Rules Tools (3)

- `get_design_rules(category)` - Get rules for colors, icons, spacing, typography, breakpoints, radius_stroke
- `search_design_rules(query)` - Search across all design rules
- `list_design_categories()` - List all 6 design rule categories

### Setup & Development Tools (3)

- `get_setup_guide(type)` - Get setup guides for HTML, React, or testing
- `get_theme_usage()` - Get theme implementation guidelines
- `get_development_rules()` - Get universal development best practices

## Security

- Pre-bundled documentation for security and reliability
- No runtime downloads
- Offline operation after installation
- OIDC-based publishing with automatic provenance attestation

## Migration from v1.x

No migration required. Simply update to v2.0.0 to access the additional component documentation.

```bash
# If using global install
npm update -g @julianoczkowski/mcp-modus

# If using npx, it will automatically use the latest version
```

---

**Full Changelog**: https://github.com/julianoczkowski/mcp-modus/compare/v1.2.7...v2.0.0
