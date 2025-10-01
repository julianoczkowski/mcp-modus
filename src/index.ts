#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ComponentDoc {
  filename: string;
  component: string;
  content: string;
}

class ModusDocsServer {
  private server: Server;
  private docs: ComponentDoc[] = [];
  private docsPath: string;

  constructor() {
    this.server = new Server(
      {
        name: 'mcp-modus',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    // Try to find docs directory - check both dev and production paths
    const possiblePaths = [
      join(__dirname, '..', 'docs'), // Development: dist/../docs
      join(__dirname, 'docs'), // Production: dist/docs
      join(process.cwd(), 'docs'), // Current working directory
    ];

    this.docsPath = possiblePaths.find(p => existsSync(p)) || possiblePaths[0];

    this.setupHandlers();
    this.loadDocs();
  }

  private loadDocs(): void {
    if (!existsSync(this.docsPath)) {
      console.error(`Documentation directory not found at: ${this.docsPath}`);
      console.error('Please run: node download-docs.js');
      return;
    }

    const files = readdirSync(this.docsPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const content = readFileSync(join(this.docsPath, file), 'utf-8');
      const component = file.replace('modus-wc-', '').replace('.md', '');

      this.docs.push({
        filename: file,
        component,
        content,
      });
    }

    console.error(`Loaded ${this.docs.length} component documentation files`);
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools: Tool[] = [
        {
          name: 'search_components',
          description: 'Search for Modus Web Components by name or keyword. Returns a list of matching components with brief descriptions.',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query (component name, keyword, or feature)',
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'get_component_docs',
          description: 'Get the complete documentation for a specific Modus Web Component including attributes, events, and usage examples.',
          inputSchema: {
            type: 'object',
            properties: {
              component: {
                type: 'string',
                description: 'The component name (e.g., "button", "card", "modal")',
              },
            },
            required: ['component'],
          },
        },
        {
          name: 'list_all_components',
          description: 'List all available Modus Web Components with their categories.',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
        {
          name: 'find_by_attribute',
          description: 'Find components that have a specific attribute or property.',
          inputSchema: {
            type: 'object',
            properties: {
              attribute: {
                type: 'string',
                description: 'The attribute name to search for (e.g., "disabled", "color", "size")',
              },
            },
            required: ['attribute'],
          },
        },
      ];

      return { tools };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'search_components':
            return await this.searchComponents((args?.query as string) || '');

          case 'get_component_docs':
            return await this.getComponentDocs((args?.component as string) || '');

          case 'list_all_components':
            return await this.listAllComponents();

          case 'find_by_attribute':
            return await this.findByAttribute((args?.attribute as string) || '');

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: 'text', text: `Error: ${errorMessage}` }],
          isError: true,
        };
      }
    });
  }

  private async searchComponents(query: string): Promise<any> {
    const normalizedQuery = query.toLowerCase();
    const results: Array<{ component: string; filename: string; relevance: string }> = [];

    for (const doc of this.docs) {
      const content = doc.content.toLowerCase();
      const componentName = doc.component.toLowerCase();

      if (componentName.includes(normalizedQuery) || content.includes(normalizedQuery)) {
        // Extract the first paragraph or description
        const lines = doc.content.split('\n');
        let description = '';

        for (const line of lines) {
          if (line.trim() && !line.startsWith('#') && !line.startsWith('Tag:')) {
            description = line.trim();
            break;
          }
        }

        results.push({
          component: doc.component,
          filename: doc.filename,
          relevance: description || 'Modus Web Component',
        });
      }
    }

    if (results.length === 0) {
      return {
        content: [
          {
            type: 'text',
            text: `No components found matching "${query}". Try searching for common UI elements like "button", "input", "modal", "card", etc.`,
          },
        ],
      };
    }

    const resultText = results
      .map(r => `**${r.component}**\n${r.relevance}\n`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `Found ${results.length} component(s) matching "${query}":\n\n${resultText}`,
        },
      ],
    };
  }

  private async getComponentDocs(component: string): Promise<any> {
    const normalizedComponent = component.toLowerCase().replace('modus-wc-', '');
    const doc = this.docs.find(d => d.component.toLowerCase() === normalizedComponent);

    if (!doc) {
      const availableComponents = this.docs.map(d => d.component).join(', ');
      return {
        content: [
          {
            type: 'text',
            text: `Component "${component}" not found.\n\nAvailable components: ${availableComponents}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: doc.content,
        },
      ],
    };
  }

  private async listAllComponents(): Promise<any> {
    const componentsByCategory: Record<string, string[]> = {};

    for (const doc of this.docs) {
      // Extract category from content
      const categoryMatch = doc.content.match(/Category:\s*([^\n]+)/i);
      const category = categoryMatch ? categoryMatch[1].trim() : 'Other';

      if (!componentsByCategory[category]) {
        componentsByCategory[category] = [];
      }
      componentsByCategory[category].push(doc.component);
    }

    let resultText = `# Modus Web Components (${this.docs.length} components)\n\n`;

    for (const [category, components] of Object.entries(componentsByCategory).sort()) {
      resultText += `## ${category}\n`;
      resultText += components.sort().map(c => `- ${c}`).join('\n');
      resultText += '\n\n';
    }

    return {
      content: [
        {
          type: 'text',
          text: resultText,
        },
      ],
    };
  }

  private async findByAttribute(attribute: string): Promise<any> {
    const normalizedAttribute = attribute.toLowerCase();
    const results: Array<{ component: string; context: string }> = [];

    for (const doc of this.docs) {
      const lines = doc.content.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lowerLine = line.toLowerCase();

        // Look for attribute definitions like: - **`disabled`**
        if (lowerLine.includes(`\`${normalizedAttribute}\``) && (line.startsWith('-') || line.startsWith('•'))) {
          // Get context - the attribute definition and its properties
          const contextStart = i;
          let contextEnd = i + 1;

          // Include lines until we hit another attribute or empty line
          while (contextEnd < lines.length &&
                 !lines[contextEnd].match(/^-\s+\*\*`/) &&
                 contextEnd < i + 10) {
            if (lines[contextEnd].trim() === '') {
              break;
            }
            contextEnd++;
          }

          const context = lines.slice(contextStart, contextEnd).join('\n');

          results.push({
            component: doc.component,
            context: context.trim(),
          });
          break;
        }
      }
    }

    if (results.length === 0) {
      return {
        content: [
          {
            type: 'text',
            text: `No components found with attribute "${attribute}".`,
          },
        ],
      };
    }

    const resultText = results
      .map(r => `**${r.component}**\n\`\`\`\n${r.context}\n\`\`\`\n`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `Found ${results.length} component(s) with attribute "${attribute}":\n\n${resultText}`,
        },
      ],
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Modus Web Components MCP Server running on stdio');
  }
}

const server = new ModusDocsServer();
server.run().catch(console.error);
