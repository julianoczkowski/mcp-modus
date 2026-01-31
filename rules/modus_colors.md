---
description: Comprehensive guide for using Modus theme colors in both React and HTML projects
globs:
alwaysApply: true
---

# Modus Web Components - Color System Guide

This comprehensive guide covers the correct way to use colors in projects using Modus Web Components, supporting both React and HTML implementations. Following these guidelines ensures all components are consistent with the application's active theme and support seamless theme switching.

## 🎯 Core Principle: Use Theme Variables

**Never hard-code hex values.** Always use the provided Modus CSS variables to maintain visual consistency and support theming (light/dark modes, modern/classic themes).

These variables are automatically updated based on the active theme (e.g., `modus-modern-light`, `modus-classic-dark`).

## 🎨 Color System Architecture

### 1. Base Color Palette

These foundational colors serve as building blocks for all themes:

```css
/* --- White / Grays / Black --- */
--modus-wc-color-white: #fff;
--modus-wc-color-gray-light: #f1f1f6;
--modus-wc-color-gray-0: #e0e1e9;
--modus-wc-color-gray-1: #cbcdd6;
--modus-wc-color-gray-2: #b7b9c3;
--modus-wc-color-gray-3: #a3a6b1;
--modus-wc-color-gray-4: #90939f;
--modus-wc-color-gray-5: #7d808d;
--modus-wc-color-gray-6: #6a6e79;
--modus-wc-color-gray-7: #585c65;
--modus-wc-color-gray-8: #464b52;
--modus-wc-color-gray-9: #353a40;
--modus-wc-color-gray-10: #171c1e;
--modus-wc-color-trimble-gray: #252a2e;
--modus-wc-color-black: #000;

/* --- Blues --- */
--modus-wc-color-blue-pale: #dcedf9;
--modus-wc-color-highlight-blue: #019aeb;
--modus-wc-color-blue-light: #217cbb;
--modus-wc-color-trimble-blue: #0063a3;
--modus-wc-color-blue-dark: #0e416c;

/* --- Yellows --- */
--modus-wc-color-yellow-pale: #fff5e4;
--modus-wc-color-yellow-light: #fec157;
--modus-wc-color-yellow: #fbad26;
--modus-wc-color-yellow-dark: #e49325;

/* --- Reds --- */
--modus-wc-color-red-pale: #fbd4d7;
--modus-wc-color-red-light: #e86363;
--modus-wc-color-red: #da212c;
--modus-wc-color-red-dark: #ab1f26;

/* --- Greens --- */
--modus-wc-color-green-pale: #e0eccf;
--modus-wc-color-green-light: #4ea646;
--modus-wc-color-green: #1e8a44;
--modus-wc-color-green-dark: #006638;

/* --- Special In-Field Colors --- */
--modus-wc-in-field-success-dark-bg: #00fe00;
--modus-wc-in-field-success-light-bg: #00d22f;
--modus-wc-in-field-warning: #ff8b00;
--modus-wc-in-field-error: #da212c;
--modus-wc-in-field-info: #019aeb;
--modus-wc-in-field-avoidance: #df4eb2;
--modus-wc-in-field-black: #000;
```

### 2. Semantic Color Categories

**Always prefer semantic colors** as they describe the _purpose_ rather than appearance:

#### Primary & Secondary Colors

- `--modus-wc-color-primary`: Primary actions and highlights
- `--modus-wc-color-primary-content`: Text/content on primary backgrounds
- `--modus-wc-color-secondary`: Secondary actions
- `--modus-wc-color-secondary-content`: Text/content on secondary backgrounds

#### Status Colors

- `--modus-wc-color-success`: Success states and positive actions
- `--modus-wc-color-warning`: Warning states and caution indicators
- `--modus-wc-color-error`: Error states and destructive actions
- `--modus-wc-color-info`: Informational states and neutral highlights

#### Base UI Colors

- `--modus-wc-color-base-page`: Main page background
- `--modus-wc-color-base-100`: Lightest UI background (cards, panels)
- `--modus-wc-color-base-200`: Light UI background (borders, dividers)
- `--modus-wc-color-base-300`: Medium UI background (disabled states)
- `--modus-wc-color-base-content`: Primary text color

## 🌈 Theme-Specific Values

### Modus Modern Light

```css
--modus-wc-color-base-page: #fff;
--modus-wc-color-base-100: #f1f1f6;
--modus-wc-color-base-200: #e0e1e9;
--modus-wc-color-base-300: #cbcdd6;
--modus-wc-color-base-content: #171c1e;
--modus-wc-color-primary: #0063a3;
--modus-wc-color-primary-content: #fff;
```

### Modus Modern Dark

```css
--modus-wc-color-base-page: #000;
--modus-wc-color-base-100: #252a2e;
--modus-wc-color-base-200: #353a40;
--modus-wc-color-base-300: #171c1e;
--modus-wc-color-base-content: #cbcdd6;
--modus-wc-color-primary: #019aeb;
--modus-wc-color-primary-content: #000;
```

### Modus Classic Light

```css
--modus-wc-color-base-page: #fff;
--modus-wc-color-base-100: #f1f1f6;
--modus-wc-color-base-200: #cbcdd6;
--modus-wc-color-base-300: #b7b9c3;
--modus-wc-color-base-content: #171c1e;
--modus-wc-color-info: #0063a3;
--modus-wc-color-success: #1e8a44;
--modus-wc-color-error: #da212c;
--modus-wc-color-warning: #fbad26;
```

### Modus Classic Dark

```css
--modus-wc-color-base-page: #000;
--modus-wc-color-base-100: #252a2e;
--modus-wc-color-base-200: #464b52;
--modus-wc-color-base-300: #353a40;
--modus-wc-color-base-content: #cbcdd6;
--modus-wc-color-info: #0063a3;
--modus-wc-color-success: #1e8a44;
--modus-wc-color-error: #da212c;
--modus-wc-color-warning: #fbad26;
```

## 💻 Implementation Examples

### HTML/CSS Usage

#### Basic CSS Styling

```css
/* Application header */
.app-header {
  background-color: var(--modus-wc-color-base-page);
  border-bottom: 1px solid var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
}

/* Card component */
.card {
  background-color: var(--modus-wc-color-base-100);
  border: 1px solid var(--modus-wc-color-base-200);
  box-shadow: 0 1px 3px var(--modus-wc-color-base-300);
}

/* Status indicators */
.status-success {
  background-color: var(--modus-wc-color-success);
  color: var(--modus-wc-color-white);
}

.status-warning {
  background-color: var(--modus-wc-color-warning);
  color: var(--modus-wc-color-black);
}

.status-error {
  background-color: var(--modus-wc-color-error);
  color: var(--modus-wc-color-white);
}
```

#### HTML with Inline Styles (when necessary)

```html
<!-- Primary action button -->
<div
  style="background-color: var(--modus-wc-color-primary); color: var(--modus-wc-color-primary-content);"
>
  Primary Action
</div>

<!-- Status badge -->
<span
  style="background-color: var(--modus-wc-color-success); color: var(--modus-wc-color-white);"
>
  Success
</span>
```

### React/JSX Usage

#### CSS-in-JS with Styled Components

```jsx
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: var(--modus-wc-color-base-page);
  border-bottom: 1px solid var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
  padding: 1rem;
`;

const StatusCard = styled.div`
  background-color: var(--modus-wc-color-base-100);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: 8px;
  padding: 1rem;

  &.success {
    border-color: var(--modus-wc-color-success);
    background-color: var(--modus-wc-color-success);
    color: var(--modus-wc-color-white);
  }

  &.warning {
    border-color: var(--modus-wc-color-warning);
    background-color: var(--modus-wc-color-warning);
    color: var(--modus-wc-color-black);
  }
`;
```

#### React with CSS Modules

```jsx
// styles.module.css
.container {
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}

.primaryButton {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

// Component.jsx
import styles from './styles.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      <button className={styles.primaryButton}>
        Primary Action
      </button>
    </div>
  );
}
```

#### React with Inline Styles

```jsx
function StatusIndicator({ type, children }) {
  const getStatusStyles = (type) => {
    const baseStyles = {
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      fontWeight: "bold",
    };

    switch (type) {
      case "success":
        return {
          ...baseStyles,
          backgroundColor: "var(--modus-wc-color-success)",
          color: "var(--modus-wc-color-white)",
        };
      case "warning":
        return {
          ...baseStyles,
          backgroundColor: "var(--modus-wc-color-warning)",
          color: "var(--modus-wc-color-black)",
        };
      case "error":
        return {
          ...baseStyles,
          backgroundColor: "var(--modus-wc-color-error)",
          color: "var(--modus-wc-color-white)",
        };
      default:
        return {
          ...baseStyles,
          backgroundColor: "var(--modus-wc-color-base-100)",
          color: "var(--modus-wc-color-base-content)",
        };
    }
  };

  return <span style={getStatusStyles(type)}>{children}</span>;
}
```

## 🎨 Common Use Cases & Patterns

### 1. Page Layout

```css
/* Main page background */
body {
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}

/* Content containers */
.main-content {
  background-color: var(--modus-wc-color-base-100);
}

/* Sidebar or secondary content */
.sidebar {
  background-color: var(--modus-wc-color-base-200);
}
```

### 2. Interactive Elements

```css
/* Primary buttons */
.btn-primary {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
  border: none;
}

.btn-primary:hover {
  background-color: var(--modus-wc-color-primary);
  opacity: 0.9;
}

/* Secondary buttons */
.btn-secondary {
  background-color: transparent;
  color: var(--modus-wc-color-primary);
  border: 1px solid var(--modus-wc-color-primary);
}
```

### 3. Form Elements

```css
/* Input fields */
.form-input {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-300);
  color: var(--modus-wc-color-base-content);
}

.form-input:focus {
  border-color: var(--modus-wc-color-primary);
}

/* Validation states */
.form-input.error {
  border-color: var(--modus-wc-color-error);
}

.form-input.success {
  border-color: var(--modus-wc-color-success);
}
```

### 4. Status & Feedback

```css
/* Alert components */
.alert {
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid;
}

.alert-info {
  background-color: var(--modus-wc-color-blue-pale);
  border-color: var(--modus-wc-color-info);
  color: var(--modus-wc-color-base-content);
}

.alert-success {
  background-color: var(--modus-wc-color-green-pale);
  border-color: var(--modus-wc-color-success);
  color: var(--modus-wc-color-base-content);
}

.alert-warning {
  background-color: var(--modus-wc-color-yellow-pale);
  border-color: var(--modus-wc-color-warning);
  color: var(--modus-wc-color-base-content);
}

.alert-error {
  background-color: var(--modus-wc-color-red-pale);
  border-color: var(--modus-wc-color-error);
  color: var(--modus-wc-color-base-content);
}
```

## 🔧 Theme Integration

### Setting Theme Programmatically

#### HTML/JavaScript

```javascript
// Set theme on document load
document.addEventListener("DOMContentLoaded", function () {
  // Set default theme
  document.documentElement.setAttribute("data-theme", "modus-modern-light");
});

// Theme switching function
function switchTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("preferred-theme", themeName);
}

// Available themes
const themes = [
  "modus-modern-light",
  "modus-modern-dark",
  "modus-classic-light",
  "modus-classic-dark",
];
```

#### React

```jsx
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("modus-modern-light");

  useEffect(() => {
    // Load saved theme or use default
    const savedTheme =
      localStorage.getItem("preferred-theme") || "modus-modern-light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("preferred-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## ✅ Best Practices

### Do's ✅

- **Always use CSS variables** instead of hard-coded hex values
- **Prefer semantic colors** (`--modus-wc-color-primary`) over base colors
- **Test across all themes** to ensure proper contrast and visibility
- **Use appropriate content colors** (e.g., `--modus-wc-color-primary-content` on primary backgrounds)
- **Leverage base colors for layering** (100 for cards, 200 for borders, 300 for disabled states)

### Don'ts ❌

- **Never hard-code hex values** like `#0063a3` or `#fff`
- **Don't use base palette colors directly** in components (use semantic colors instead)
- **Avoid assuming color values** - they change between themes
- **Don't forget to test dark themes** - ensure sufficient contrast
- **Don't mix color systems** - stick to Modus variables consistently

## 🔍 Troubleshooting

### Common Issues

#### Colors Not Updating with Theme Changes

**Problem**: Colors remain static when switching themes
**Solution**: Ensure you're using CSS variables with `var()` function

```css
/* ❌ Wrong - hard-coded value */
.button {
  background-color: #0063a3;
}

/* ✅ Correct - uses theme variable */
.button {
  background-color: var(--modus-wc-color-primary);
}
```

#### Poor Contrast in Dark Themes

**Problem**: Text is hard to read in dark themes
**Solution**: Use appropriate content colors

```css
/* ❌ Wrong - assumes white text works everywhere */
.card {
  background-color: var(--modus-wc-color-primary);
  color: white;
}

/* ✅ Correct - uses theme-appropriate content color */
.card {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
```

#### Theme Not Loading

**Problem**: Default browser colors show instead of theme colors
**Solution**: Ensure theme attribute is set on HTML element

```javascript
// Ensure this runs before components render
document.documentElement.setAttribute("data-theme", "modus-modern-light");
```

## 📚 Additional Resources

- [Modus Web Components Documentation](https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/documentation-getting-started--docs)
- [Modus Design System](https://modus.trimble.com/)
- [Theme Switching Implementation Guide](../setup_LLM_docs/theme_usage.md)
- [Component Examples](../components_examples/)

## 🎯 Quick Reference

### Most Common Variables

```css
/* Backgrounds */
--modus-wc-color-base-page        /* Main page background */
--modus-wc-color-base-100         /* Card/panel backgrounds */
--modus-wc-color-base-200         /* Borders, dividers */

/* Text */
--modus-wc-color-base-content     /* Primary text color */

/* Actions */
--modus-wc-color-primary          /* Primary buttons, links */
--modus-wc-color-primary-content  /* Text on primary backgrounds */

/* Status */
--modus-wc-color-success          /* Success states */
--modus-wc-color-warning          /* Warning states */
--modus-wc-color-error            /* Error states */
--modus-wc-color-info             /* Info states */
```

This comprehensive guide ensures consistent, theme-aware color usage across both React and HTML implementations in your Modus Web Components project.
