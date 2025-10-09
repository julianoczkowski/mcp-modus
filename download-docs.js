/**
 * Documentation Downloader for MCP Modus
 *
 * Downloads the latest documentation from QAUI-Modus-Web-Components repository.
 * Used during development and CI/CD to bundle docs with the NPM package.
 *
 * Usage: npm run update-docs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const DOCS_BASE_URL =
  "https://raw.githubusercontent.com/julianoczkowski/QAUI-Modus-Web-Components/main/components_LLM_docs/";
const RULES_BASE_URL =
  "https://raw.githubusercontent.com/julianoczkowski/QAUI-Modus-Web-Components/main/rules_LLM_docs/";
const SETUP_BASE_URL =
  "https://raw.githubusercontent.com/julianoczkowski/QAUI-Modus-Web-Components/main/setup_LLM_docs/";

const componentFiles = [
  "modus-wc-accordion.md",
  "modus-wc-alert.md",
  "modus-wc-autocomplete.md",
  "modus-wc-avatar.md",
  "modus-wc-badge.md",
  "modus-wc-breadcrumbs.md",
  "modus-wc-button.md",
  "modus-wc-card.md",
  "modus-wc-checkbox.md",
  "modus-wc-chip.md",
  "modus-wc-collapse.md",
  "modus-wc-date.md",
  "modus-wc-divider.md",
  "modus-wc-dropdown-menu.md",
  "modus-wc-icon.md",
  "modus-wc-input-feedback.md",
  "modus-wc-input-label.md",
  "modus-wc-loader.md",
  "modus-wc-menu-item.md",
  "modus-wc-menu.md",
  "modus-wc-modal.md",
  "modus-wc-navbar.md",
  "modus-wc-number-input.md",
  "modus-wc-pagination.md",
  "modus-wc-progress.md",
  "modus-wc-radio.md",
  "modus-wc-rating.md",
  "modus-wc-select.md",
  "modus-wc-side-navigation.md",
  "modus-wc-skeleton.md",
  "modus-wc-slider.md",
  "modus-wc-stepper.md",
  "modus-wc-switch.md",
  "modus-wc-table.md",
  "modus-wc-tabs.md",
  "modus-wc-text-input.md",
  "modus-wc-textarea.md",
  "modus-wc-theme-switcher.md",
  "modus-wc-time-input.md",
  "modus-wc-toast.md",
  "modus-wc-toolbar.md",
  "modus-wc-tooltip.md",
  "modus-wc-typography.md",
  "modus-wc-utility-panel.md",
];

const rulesFiles = [
  "breakpoints.md",
  "modus_colors.md",
  "modus_icons.md",
  "radius_stroke.md",
  "spacing.md",
  "typography.md",
];

const setupFiles = [
  "setup_html.md",
  "setup_react.md",
  "testing.md",
  "theme_usage.md",
  "universal_rules.md",
];

async function downloadFiles(files, baseUrl, directory, description) {
  mkdirSync(directory, { recursive: true });
  console.log(`\nDownloading ${description}...`);

  for (const file of files) {
    try {
      const url = baseUrl + file;
      const response = await fetch(url);

      if (!response.ok) {
        console.log(`⚠️  Skipping ${file} (${response.status})`);
        continue;
      }

      const content = await response.text();
      const filePath = join(directory, file);
      writeFileSync(filePath, content, "utf-8");
      console.log(`✓ Downloaded ${file}`);
    } catch (error) {
      console.error(`✗ Error downloading ${file}:`, error.message);
    }
  }
}

async function downloadDocs() {
  console.log("Downloading Modus Web Components documentation and guides...");

  // Download component documentation
  await downloadFiles(
    componentFiles,
    DOCS_BASE_URL,
    "docs",
    "component documentation"
  );

  // Download design rules
  await downloadFiles(rulesFiles, RULES_BASE_URL, "rules", "design rules");

  // Download setup guides
  await downloadFiles(setupFiles, SETUP_BASE_URL, "setup", "setup guides");

  console.log("\n🎉 All documentation download complete!");
}

downloadDocs().catch(console.error);
