import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DOCS_BASE_URL = 'https://raw.githubusercontent.com/julianoczkowski/QAUI-Modus-Web-Components/main/components_LLM_docs/';

const componentFiles = [
  'modus-wc-accordion.md',
  'modus-wc-alert.md',
  'modus-wc-autocomplete.md',
  'modus-wc-avatar.md',
  'modus-wc-badge.md',
  'modus-wc-breadcrumbs.md',
  'modus-wc-button.md',
  'modus-wc-card.md',
  'modus-wc-checkbox.md',
  'modus-wc-chip.md',
  'modus-wc-collapse.md',
  'modus-wc-date.md',
  'modus-wc-divider.md',
  'modus-wc-dropdown-menu.md',
  'modus-wc-icon.md',
  'modus-wc-input-feedback.md',
  'modus-wc-input-label.md',
  'modus-wc-loader.md',
  'modus-wc-menu-item.md',
  'modus-wc-menu.md',
  'modus-wc-modal.md',
  'modus-wc-navbar.md',
  'modus-wc-number-input.md',
  'modus-wc-pagination.md',
  'modus-wc-progress.md',
  'modus-wc-radio.md',
  'modus-wc-rating.md',
  'modus-wc-select.md',
  'modus-wc-side-navigation.md',
  'modus-wc-skeleton.md',
  'modus-wc-slider.md',
  'modus-wc-stepper.md',
  'modus-wc-switch.md',
  'modus-wc-table.md',
  'modus-wc-tabs.md',
  'modus-wc-text-input.md',
  'modus-wc-textarea.md',
  'modus-wc-theme-switcher.md',
  'modus-wc-time-input.md',
  'modus-wc-toast.md',
  'modus-wc-toolbar.md',
  'modus-wc-tooltip.md',
  'modus-wc-typography.md'
];

async function downloadDocs() {
  mkdirSync('docs', { recursive: true });

  console.log('Downloading Modus Web Components documentation...');

  for (const file of componentFiles) {
    try {
      const url = DOCS_BASE_URL + file;
      const response = await fetch(url);

      if (!response.ok) {
        console.log(`⚠️  Skipping ${file} (${response.status})`);
        continue;
      }

      const content = await response.text();
      const filePath = join('docs', file);
      writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Downloaded ${file}`);
    } catch (error) {
      console.error(`✗ Error downloading ${file}:`, error.message);
    }
  }

  console.log('\nDocumentation download complete!');
}

downloadDocs().catch(console.error);
