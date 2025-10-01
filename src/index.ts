#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ComponentDoc {
  filename: string;
  component: string;
  content: string;
}

interface RuleDoc {
  filename: string;
  category: string;
  content: string;
}

interface SetupDoc {
  filename: string;
  setupType: string;
  content: string;
}

class ModusDocsServer {
  private server: Server;
  private docs: ComponentDoc[] = [];
  private rules: RuleDoc[] = [];
  private setup: SetupDoc[] = [];
  private docsPath: string;
  private rulesPath: string;
  private setupPath: string;

  constructor() {
    this.server = new Server(
      {
        name: "mcp-modus",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    // Try to find docs directory - check both dev and production paths
    const possibleDocsPaths = [
      join(__dirname, "..", "docs"), // Development: dist/../docs
      join(__dirname, "docs"), // Production: dist/docs
      join(process.cwd(), "docs"), // Current working directory
    ];

    const possibleRulesPaths = [
      join(__dirname, "..", "rules"), // Development: dist/../rules
      join(__dirname, "rules"), // Production: dist/rules
      join(process.cwd(), "rules"), // Current working directory
    ];

    const possibleSetupPaths = [
      join(__dirname, "..", "setup"), // Development: dist/../setup
      join(__dirname, "setup"), // Production: dist/setup
      join(process.cwd(), "setup"), // Current working directory
    ];

    this.docsPath =
      possibleDocsPaths.find((p) => existsSync(p)) || possibleDocsPaths[0];
    this.rulesPath =
      possibleRulesPaths.find((p) => existsSync(p)) || possibleRulesPaths[0];
    this.setupPath =
      possibleSetupPaths.find((p) => existsSync(p)) || possibleSetupPaths[0];

    this.setupHandlers();
    this.loadDocs();
    this.loadRules();
    this.loadSetup();
  }

  private loadDocs(): void {
    if (!existsSync(this.docsPath)) {
      console.error(`Documentation directory not found at: ${this.docsPath}`);
      console.error("Please run: node download-docs.js");
      return;
    }

    const files = readdirSync(this.docsPath).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const content = readFileSync(join(this.docsPath, file), "utf-8");
      const component = file.replace("modus-wc-", "").replace(".md", "");

      this.docs.push({
        filename: file,
        component,
        content,
      });
    }

    console.error(`Loaded ${this.docs.length} component documentation files`);
  }

  private loadRules(): void {
    if (!existsSync(this.rulesPath)) {
      console.error(`Rules directory not found at: ${this.rulesPath}`);
      console.error("Please run: node download-docs.js");
      return;
    }

    const files = readdirSync(this.rulesPath).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const content = readFileSync(join(this.rulesPath, file), "utf-8");
      const category = file.replace(".md", "").replace("modus_", "");

      this.rules.push({
        filename: file,
        category,
        content,
      });
    }

    console.error(`Loaded ${this.rules.length} design rules files`);
  }

  private loadSetup(): void {
    if (!existsSync(this.setupPath)) {
      console.error(`Setup directory not found at: ${this.setupPath}`);
      console.error("Please run: node download-docs.js");
      return;
    }

    const files = readdirSync(this.setupPath).filter((f) => f.endsWith(".md"));

    for (const file of files) {
      const content = readFileSync(join(this.setupPath, file), "utf-8");
      let setupType = file.replace(".md", "").replace("setup_", "");

      // Map filenames to more user-friendly types
      if (setupType === "universal_rules") setupType = "universal";
      if (setupType === "theme_usage") setupType = "theme";

      this.setup.push({
        filename: file,
        setupType,
        content,
      });
    }

    console.error(`Loaded ${this.setup.length} setup guide files`);
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools: Tool[] = [
        {
          name: "search_components",
          description:
            "Search for Modus Web Components by name or keyword. Returns a list of matching components with brief descriptions.",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description:
                  "Search query (component name, keyword, or feature)",
              },
            },
            required: ["query"],
          },
        },
        {
          name: "get_component_docs",
          description:
            "Get the complete documentation for a specific Modus Web Component including attributes, events, and usage examples.",
          inputSchema: {
            type: "object",
            properties: {
              component: {
                type: "string",
                description:
                  'The component name (e.g., "button", "card", "modal")',
              },
            },
            required: ["component"],
          },
        },
        {
          name: "list_all_components",
          description:
            "List all available Modus Web Components with their categories.",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        {
          name: "find_by_attribute",
          description:
            "Find components that have a specific attribute or property.",
          inputSchema: {
            type: "object",
            properties: {
              attribute: {
                type: "string",
                description:
                  'The attribute name to search for (e.g., "disabled", "color", "size")',
              },
            },
            required: ["attribute"],
          },
        },
        {
          name: "get_design_rules",
          description:
            "Get specific design rules for Modus Web Components (colors, icons, spacing, typography, etc.).",
          inputSchema: {
            type: "object",
            properties: {
              category: {
                type: "string",
                description:
                  'The design rule category (e.g., "colors", "icons", "spacing", "typography", "breakpoints", "radius_stroke")',
              },
            },
            required: ["category"],
          },
        },
        {
          name: "search_design_rules",
          description: "Search across all design rules by keyword or term.",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description:
                  'Search query for design rules (e.g., "primary color", "icon size", "spacing scale")',
              },
            },
            required: ["query"],
          },
        },
        {
          name: "list_design_categories",
          description: "List all available design rule categories.",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        {
          name: "get_setup_guide",
          description:
            "Get setup instructions for HTML or React projects using Modus Web Components.",
          inputSchema: {
            type: "object",
            properties: {
              type: {
                type: "string",
                description: 'The setup type ("html", "react", "testing")',
              },
            },
            required: ["type"],
          },
        },
        {
          name: "get_theme_usage",
          description:
            "Get theme implementation guidelines and usage instructions.",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        {
          name: "get_development_rules",
          description:
            "Get universal development rules and best practices for Modus Web Components.",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
      ];

      return { tools };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_components":
            return await this.searchComponents((args?.query as string) || "");

          case "get_component_docs":
            return await this.getComponentDocs(
              (args?.component as string) || ""
            );

          case "list_all_components":
            return await this.listAllComponents();

          case "find_by_attribute":
            return await this.findByAttribute(
              (args?.attribute as string) || ""
            );

          case "get_design_rules":
            return await this.getDesignRules((args?.category as string) || "");

          case "search_design_rules":
            return await this.searchDesignRules((args?.query as string) || "");

          case "list_design_categories":
            return await this.listDesignCategories();

          case "get_setup_guide":
            return await this.getSetupGuide((args?.type as string) || "");

          case "get_theme_usage":
            return await this.getThemeUsage();

          case "get_development_rules":
            return await this.getDevelopmentRules();

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Error: ${errorMessage}` }],
          isError: true,
        };
      }
    });
  }

  private async searchComponents(query: string): Promise<any> {
    const normalizedQuery = query.toLowerCase();
    const results: Array<{
      component: string;
      filename: string;
      relevance: string;
    }> = [];

    for (const doc of this.docs) {
      const content = doc.content.toLowerCase();
      const componentName = doc.component.toLowerCase();

      if (
        componentName.includes(normalizedQuery) ||
        content.includes(normalizedQuery)
      ) {
        // Extract the first paragraph or description
        const lines = doc.content.split("\n");
        let description = "";

        for (const line of lines) {
          if (
            line.trim() &&
            !line.startsWith("#") &&
            !line.startsWith("Tag:")
          ) {
            description = line.trim();
            break;
          }
        }

        results.push({
          component: doc.component,
          filename: doc.filename,
          relevance: description || "Modus Web Component",
        });
      }
    }

    if (results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No components found matching "${query}". Try searching for common UI elements like "button", "input", "modal", "card", etc.`,
          },
        ],
      };
    }

    const resultText = results
      .map((r) => `**${r.component}**\n${r.relevance}\n`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} component(s) matching "${query}":\n\n${resultText}`,
        },
      ],
    };
  }

  private async getComponentDocs(component: string): Promise<any> {
    const normalizedComponent = component
      .toLowerCase()
      .replace("modus-wc-", "");
    const doc = this.docs.find(
      (d) => d.component.toLowerCase() === normalizedComponent
    );

    if (!doc) {
      const availableComponents = this.docs.map((d) => d.component).join(", ");
      return {
        content: [
          {
            type: "text",
            text: `Component "${component}" not found.\n\nAvailable components: ${availableComponents}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
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
      const category = categoryMatch ? categoryMatch[1].trim() : "Other";

      if (!componentsByCategory[category]) {
        componentsByCategory[category] = [];
      }
      componentsByCategory[category].push(doc.component);
    }

    let resultText = `# Modus Web Components (${this.docs.length} components)\n\n`;

    for (const [category, components] of Object.entries(
      componentsByCategory
    ).sort()) {
      resultText += `## ${category}\n`;
      resultText += components
        .sort()
        .map((c) => `- ${c}`)
        .join("\n");
      resultText += "\n\n";
    }

    return {
      content: [
        {
          type: "text",
          text: resultText,
        },
      ],
    };
  }

  private async findByAttribute(attribute: string): Promise<any> {
    const normalizedAttribute = attribute.toLowerCase();
    const results: Array<{ component: string; context: string }> = [];

    for (const doc of this.docs) {
      const lines = doc.content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lowerLine = line.toLowerCase();

        // Look for attribute definitions like: - **`disabled`**
        if (
          lowerLine.includes(`\`${normalizedAttribute}\``) &&
          (line.startsWith("-") || line.startsWith("•"))
        ) {
          // Get context - the attribute definition and its properties
          const contextStart = i;
          let contextEnd = i + 1;

          // Include lines until we hit another attribute or empty line
          while (
            contextEnd < lines.length &&
            !lines[contextEnd].match(/^-\s+\*\*`/) &&
            contextEnd < i + 10
          ) {
            if (lines[contextEnd].trim() === "") {
              break;
            }
            contextEnd++;
          }

          const context = lines.slice(contextStart, contextEnd).join("\n");

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
            type: "text",
            text: `No components found with attribute "${attribute}".`,
          },
        ],
      };
    }

    const resultText = results
      .map((r) => `**${r.component}**\n\`\`\`\n${r.context}\n\`\`\`\n`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} component(s) with attribute "${attribute}":\n\n${resultText}`,
        },
      ],
    };
  }

  private async getDesignRules(category: string): Promise<any> {
    const normalizedCategory = category.toLowerCase();
    const rule = this.rules.find(
      (r) =>
        r.category.toLowerCase() === normalizedCategory ||
        r.filename.toLowerCase().includes(normalizedCategory)
    );

    if (!rule) {
      const availableCategories = this.rules.map((r) => r.category).join(", ");
      return {
        content: [
          {
            type: "text",
            text: `Design rule category "${category}" not found.\n\nAvailable categories: ${availableCategories}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: rule.content,
        },
      ],
    };
  }

  private async searchDesignRules(query: string): Promise<any> {
    const normalizedQuery = query.toLowerCase();
    const results: Array<{
      category: string;
      filename: string;
      relevance: string;
    }> = [];

    for (const rule of this.rules) {
      const content = rule.content.toLowerCase();
      const categoryName = rule.category.toLowerCase();

      if (
        categoryName.includes(normalizedQuery) ||
        content.includes(normalizedQuery)
      ) {
        // Extract the first meaningful line as description
        const lines = rule.content.split("\n");
        let description = "";

        for (const line of lines) {
          if (line.trim() && !line.startsWith("#") && !line.startsWith("---")) {
            description = line.trim();
            break;
          }
        }

        results.push({
          category: rule.category,
          filename: rule.filename,
          relevance: description || "Design rule documentation",
        });
      }
    }

    if (results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No design rules found matching "${query}". Try searching for terms like "color", "icon", "spacing", "typography", etc.`,
          },
        ],
      };
    }

    const resultText = results
      .map((r) => `**${r.category}**\n${r.relevance}\n`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} design rule(s) matching "${query}":\n\n${resultText}`,
        },
      ],
    };
  }

  private async listDesignCategories(): Promise<any> {
    let resultText = `# Modus Design Rules (${this.rules.length} categories)\n\n`;

    for (const rule of this.rules.sort((a, b) =>
      a.category.localeCompare(b.category)
    )) {
      // Extract brief description from content
      const lines = rule.content.split("\n");
      let description = "Design guidelines and specifications";

      for (const line of lines) {
        if (
          line.trim() &&
          !line.startsWith("#") &&
          !line.startsWith("---") &&
          line.length > 10
        ) {
          description =
            line.trim().substring(0, 100) + (line.length > 100 ? "..." : "");
          break;
        }
      }

      resultText += `## ${rule.category}\n${description}\n\n`;
    }

    return {
      content: [
        {
          type: "text",
          text: resultText,
        },
      ],
    };
  }

  private async getSetupGuide(type: string): Promise<any> {
    const normalizedType = type.toLowerCase();
    const guide = this.setup.find(
      (s) =>
        s.setupType.toLowerCase() === normalizedType ||
        s.filename.toLowerCase().includes(normalizedType)
    );

    if (!guide) {
      const availableTypes = this.setup.map((s) => s.setupType).join(", ");
      return {
        content: [
          {
            type: "text",
            text: `Setup guide type "${type}" not found.\n\nAvailable types: ${availableTypes}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: guide.content,
        },
      ],
    };
  }

  private async getThemeUsage(): Promise<any> {
    const themeGuide = this.setup.find(
      (s) => s.setupType === "theme" || s.filename.includes("theme")
    );

    if (!themeGuide) {
      return {
        content: [
          {
            type: "text",
            text: "Theme usage guide not found. Please run: node download-docs.js",
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: themeGuide.content,
        },
      ],
    };
  }

  private async getDevelopmentRules(): Promise<any> {
    const universalGuide = this.setup.find(
      (s) => s.setupType === "universal" || s.filename.includes("universal")
    );

    if (!universalGuide) {
      return {
        content: [
          {
            type: "text",
            text: "Universal development rules not found. Please run: node download-docs.js",
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: universalGuide.content,
        },
      ],
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Modus Web Components MCP Server running on stdio");
  }
}

const server = new ModusDocsServer();
server.run().catch(console.error);
