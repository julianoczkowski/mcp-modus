# React / SolidJS Modus Web Component

A comprehensive React or SolidJS project setup.

## Quick Start

### 1. Set Up Your SolidJS Project

```bash
# Install Modus Web Components
npm install @trimble-oss/moduswebcomponents @trimble-oss/modus-icons
```

### 2. Configure Modus Integration

**Install and Register Components**

```typescript
import { defineCustomElements } from "@trimble-oss/moduswebcomponents/loader";

// Register custom elements (client-side only)
defineCustomElements();
```

**Import Required Styles** (in your main app component):

```typescript
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
import "@trimble-oss/modus-icons/dist/field-systems/fonts/modus-icons.css";
```

## Styling and Theming

### CSS Custom Properties

**CRITICAL**: Always use Modus CSS custom properties for colors:

```css
/* ✅ Correct - Uses Modus color system */
.my-component {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-border);
}

/* ❌ Incorrect - Hardcoded colors break theming */
.my-component {
  background-color: #0077c8;
  color: #ffffff;
}
```

### Theme Configuration Example

Set up theming in your main app component:

```typescript
import { onMount } from "solid-js";

onMount(() => {
  document.documentElement.className = "light";
  document.documentElement.setAttribute("data-theme", "modus-classic-light");
  document.documentElement.setAttribute("data-mode", "light");
});
```

## TypeScript Integration

### Component Declarations

Add new Modus components to your TypeScript declarations:

```typescript
// In global.d.ts or similar
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "modus-wc-button": {
        color?: "primary" | "secondary" | "tertiary";
        variant?: "fill" | "outline" | "borderless";
        size?: "small" | "medium" | "large";
        disabled?: boolean;
        "aria-label"?: string;
        onClick?: (event: CustomEvent) => void;
      };
      // Add other components as needed
    }
  }
}
```

## SSR and Hydration

### Mount Guard Pattern

Prevent hydration mismatches with the mount guard pattern:

```tsx
import { createSignal, onMount, Show } from "solid-js";

export default function MyComponent() {
  const [mounted, setMounted] = createSignal(false);
  onMount(() => setMounted(true));

  return (
    <Show when={mounted()} fallback={<div>Loading...</div>}>
      <modus-wc-button>My Button</modus-wc-button>
    </Show>
  );
}
```

## Icon Usage

### Modus Icons

Use Modus icons with the `modus-icons` class:

```tsx
// ✅ Correct icon usage
<i class="modus-icons">settings</i>

// ✅ Icons in buttons
<modus-wc-button>
  <i class="modus-icons">add</i>
  <span>Add Item</span>
</modus-wc-button>

// ❌ Incorrect - component doesn't exist
<modus-wc-icon name="settings" />
```
