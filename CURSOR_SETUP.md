# Using MCP Modus with Cursor IDE

This guide shows you how to use the Modus Web Components MCP server with Cursor IDE.

## What You Get

Once configured, you can ask Cursor's AI assistant questions about Modus Web Components directly in your code:

- "Show me how to use a Modus button with primary color"
- "What attributes does the modus-wc-modal component have?"
- "Which Modus components have a disabled attribute?"
- "List all available Modus form components"

The AI will have access to complete, up-to-date documentation and can help you:
- Write component code with correct attributes
- Understand component APIs
- Find the right component for your needs
- Debug component usage issues

## Setup Instructions

### Option 1: After Publishing to NPM (Recommended)

Once the package is published to NPM, this is the easiest setup:

1. **Open Cursor Settings**
   - Go to `Cursor → Settings → Features → MCP`
   - Or use keyboard shortcut: `Cmd/Ctrl + ,` and search for "MCP"

2. **Add New MCP Server**
   - Click "Add New MCP Server"
   - Fill in the details:
     - **Name**: `Modus Docs`
     - **Type**: `command`
     - **Command**: `npx`
     - **Args**: Click "Add Arg" twice and add:
       - `-y`
       - `@julianoczkowski/mcp-modus`

3. **Verify Connection**
   - The server status should turn green
   - You should see "Modus Docs" in your MCP servers list

### Option 2: Using Global NPM Installation

1. **Install the package globally**:
   ```bash
   npm install -g @julianoczkowski/mcp-modus
   ```

2. **Add to Cursor**:
   - Go to `Cursor → Settings → Features → MCP`
   - Click "Add New MCP Server"
   - Fill in:
     - **Name**: `Modus Docs`
     - **Type**: `command`
     - **Command**: `mcp-modus`
     - **Args**: (leave empty)

### Option 3: Local Development Version

For testing the local development version before publishing:

1. **Build the project**:
   ```bash
   cd /path/to/mcp-modus
   npm install
   npm run build
   ```

2. **Add to Cursor**:
   - Go to `Cursor → Settings → Features → MCP`
   - Click "Add New MCP Server"
   - Fill in:
     - **Name**: `Modus Docs (Dev)`
     - **Type**: `command`
     - **Command**: `node`
     - **Args**: Click "Add Arg" and add:
       - `/absolute/path/to/mcp-modus/dist/index.js`

   Replace `/absolute/path/to/mcp-modus` with your actual path.

### Option 4: Configuration File (.cursor/mcp.json)

You can also configure MCP servers using a JSON file:

**For all projects** (create `~/.cursor/mcp.json`):
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

**For a specific project** (create `.cursor/mcp.json` in project root):
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

## How to Use

### 1. In Chat (Cursor Chat Panel)

Open the Cursor chat panel and ask questions:

```
You: How do I create a Modus button with a warning color?

AI: [Uses get_component_docs tool]
Based on the Modus Web Components documentation, here's how to create
a button with warning color:

<modus-wc-button color="warning">
  Warning Action
</modus-wc-button>

The button component supports these color options: "primary", "secondary",
"tertiary", "warning", and "danger".
```

### 2. In Composer (Cmd/Ctrl + K)

Use Composer to generate code with Modus components:

```
You: Create a form with Modus components including text input, checkbox,
     and submit button

AI: [Uses search_components and get_component_docs tools]
[Generates complete form with proper Modus component syntax]
```

### 3. Inline Code Generation

Select code and press `Cmd/Ctrl + K`:

```html
<!-- Select this comment and ask: "Replace with Modus modal component" -->
```

The AI will use the MCP server to fetch the modal documentation and generate proper code.

### 4. Available Tools in Cursor

When the MCP server is connected, Cursor's AI has access to these tools:

- **search_components**: Automatically searches for relevant components
- **get_component_docs**: Fetches complete component documentation
- **list_all_components**: Shows all available components
- **find_by_attribute**: Finds components with specific attributes

**Note**: The AI decides which tools to use automatically based on your question.

## Example Queries

### Finding Components
```
"What Modus components are available for navigation?"
"Search for Modus form input components"
"List all Modus Web Components"
```

### Getting Documentation
```
"Show me the full documentation for modus-wc-table"
"What attributes does the Modus button component support?"
"How do I use the Modus autocomplete component?"
```

### Finding by Feature
```
"Which Modus components have a 'size' attribute?"
"Show me all components with a 'disabled' property"
"What components support the 'color' attribute?"
```

### Building UIs
```
"Create a card using Modus components with a header and actions"
"Build a navigation bar using Modus navbar component"
"Generate a data table with Modus table component"
```

## Verifying the Connection

To check if the MCP server is working:

1. Go to `Cursor → Settings → Features → MCP`
2. Look for "Modus Docs" in the server list
3. Status indicator should be green
4. Click on the server to see available tools

Or ask Cursor in chat:
```
"Can you access the Modus Web Components documentation?"
```

If working correctly, it should confirm it can access the tools.

## Troubleshooting

### Server Not Connecting (Red Status)

1. **Check Node.js installation**:
   ```bash
   node --version  # Should be >= 18
   ```

2. **For npx setup**: Ensure npm is working:
   ```bash
   npx --version
   ```

3. **For local dev setup**: Verify the path is absolute and correct:
   ```bash
   ls /your/path/to/mcp-modus/dist/index.js
   ```

4. **Check logs**: Look at Cursor's developer console
   - `Help → Toggle Developer Tools → Console`

### Server Connects But Tools Don't Work

1. **Verify docs are downloaded**:
   ```bash
   cd /path/to/mcp-modus
   ls docs/  # Should show .md files
   ```

2. **Rebuild the project**:
   ```bash
   npm run build
   ```

3. **Restart Cursor** completely

### AI Not Using the Tools

The AI decides when to use MCP tools. Try being more explicit:

❌ Less effective:
```
"Tell me about buttons"
```

✅ More effective:
```
"Show me the Modus button component documentation"
"How do I use the modus-wc-button component?"
```

### Permission Errors

If you see permission errors:

```bash
# For global install
sudo npm install -g @julianoczkowski/mcp-modus

# Or use npx (no installation needed)
# Update Cursor config to use npx method
```

## Tips for Best Results

1. **Be Specific**: Mention "Modus" or "Modus Web Components" in your queries
2. **Use Component Names**: Reference components by name (e.g., "modus-wc-button")
3. **Ask for Documentation**: Explicitly ask for docs when needed
4. **Combine with Code**: Ask while working in HTML/JS files for better context

## Differences from Claude Desktop

| Feature | Cursor | Claude Desktop |
|---------|--------|----------------|
| Setup Location | Settings UI or .cursor/mcp.json | claude_desktop_config.json |
| Tool Selection | Automatic by AI | Automatic by AI |
| Usage | Inline, Chat, Composer | Chat only |
| Project Context | Full project access | Limited |
| Code Generation | Integrated | Copy/paste |

## Next Steps

After setup:
1. Try the example queries above
2. Use Composer (Cmd/Ctrl + K) to generate Modus component code
3. Ask questions while coding to get real-time help
4. Explore all 22+ available Modus components

## Support

- **Cursor MCP Issues**: Check Cursor's MCP documentation
- **Package Issues**: https://github.com/julianoczkowski/mcp-modus/issues
- **Modus Components**: https://modus.trimble.com/
