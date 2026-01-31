# Modus Theme System - Development Guidelines

## Theme Implementation

### Available Themes

- `modus-modern-light` - Clean, contemporary light theme
- `modus-modern-dark` - Modern dark theme for low-light environments
- `modus-classic-light` - Traditional Trimble light theme
- `modus-classic-dark` - Classic dark theme

### Theme Application

```html
<html lang="en" data-theme="modus-modern-light"></html>
```

### Theme Switching Implementation

```javascript
function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred-theme", theme);

  // Update iframe theme if component is loaded
  const iframe = document.getElementById("component-iframe");
  if (iframe && iframe.contentWindow) {
    try {
      iframe.contentWindow.document.documentElement.setAttribute(
        "data-theme",
        theme
      );
    } catch (e) {
      console.log(
        "Cannot update iframe theme due to cross-origin restrictions"
      );
    }
  }
}
```

### Theme Selector HTML

```html
<div class="theme-switcher">
  <label for="theme-select">Theme:</label>
  <select id="theme-select" onchange="changeTheme(this.value)">
    <option value="modus-modern-light">Modern Light</option>
    <option value="modus-modern-dark">Modern Dark</option>
    <option value="modus-classic-light">Classic Light</option>
    <option value="modus-classic-dark">Classic Dark</option>
  </select>
</div>
```

## Color System

### Base Color Palette

```css
/* Base colors - use these for consistent theming */
--modus-wc-color-base-page: /* Page background */
--modus-wc-color-base-100: /* Light background */
--modus-wc-color-base-200: /* Medium background */
--modus-wc-color-base-300: /* Border color */
--modus-wc-color-base-content: /* Text color */
--modus-wc-color-primary: /* Primary brand color */
--modus-wc-color-primary-content: /* Text on primary */
```

### Semantic Color Usage

```css
/* Use semantic colors for consistent theming */
background-color: var(--modus-wc-color-base-page);
color: var(--modus-wc-color-base-content);
border: 1px solid var(--modus-wc-color-base-300);
```

### Theme-Specific Color Values

#### Modern Light Theme

```css
--modus-wc-color-base-page: #fff;
--modus-wc-color-base-100: #f1f1f6;
--modus-wc-color-base-200: #e0e1e9;
--modus-wc-color-base-300: #cbcdd6;
--modus-wc-color-base-content: #171c1e;
--modus-wc-color-primary: #0063a3;
--modus-wc-color-primary-content: #fff;
```

#### Modern Dark Theme

```css
--modus-wc-color-base-page: #000;
--modus-wc-color-base-100: #252a2e;
--modus-wc-color-base-200: #353a40;
--modus-wc-color-base-300: #171c1e;
--modus-wc-color-base-content: #cbcdd6;
--modus-wc-color-primary: #019aeb;
--modus-wc-color-primary-content: #000;
```

## Component Theming

### Component Color Attributes

```html
<!-- Use semantic color attributes -->
<modus-wc-button color="primary">Primary Button</modus-wc-button>
<modus-wc-button color="secondary">Secondary Button</modus-wc-button>
<modus-wc-button color="tertiary">Tertiary Button</modus-wc-button>
<modus-wc-button color="warning">Warning Button</modus-wc-button>
<modus-wc-button color="danger">Danger Button</modus-wc-button>
```

### Custom CSS with Theme Support

```css
/* Always use CSS custom properties for theming */
.my-component {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-base-content);
  border: 1px solid var(--modus-wc-color-base-300);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Theme Testing

### Testing Checklist

- [ ] Test all components in all 4 themes
- [ ] Verify color contrast meets accessibility standards
- [ ] Test theme switching functionality
- [ ] Validate theme persistence in localStorage
- [ ] Test iframe theme synchronization
- [ ] Verify responsive behavior across themes

### Theme Validation

```javascript
// Validate theme is applied correctly
function validateTheme(theme) {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  return currentTheme === theme;
}

// Test theme switching
function testThemeSwitching() {
  const themes = [
    "modus-modern-light",
    "modus-modern-dark",
    "modus-classic-light",
    "modus-classic-dark",
  ];

  themes.forEach((theme) => {
    changeTheme(theme);
    console.log(`Theme ${theme}: ${validateTheme(theme) ? "PASS" : "FAIL"}`);
  });
}
```

## Accessibility Considerations

### Color Contrast

- Ensure sufficient contrast ratios (WCAG AA: 4.5:1 for normal text)
- Test all color combinations in both light and dark themes
- Use semantic color names for better maintainability

### Theme Persistence

```javascript
// Load saved theme on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme =
    localStorage.getItem("preferred-theme") || "modus-modern-light";
  changeTheme(savedTheme);
});
```

### High Contrast Support

```css
/* Support for high contrast mode */
@media (prefers-contrast: high) {
  .component {
    border: 2px solid;
  }
}
```

## Common Theme Issues

### Cross-Origin Iframe Theming

```javascript
// Handle iframe theme updates with error handling
function updateIframeTheme(iframe, theme) {
  try {
    iframe.contentWindow.document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  } catch (e) {
    console.log("Cannot update iframe theme due to cross-origin restrictions");
  }
}
```

### Theme Loading Order

1. Load base CSS first
2. Apply theme attribute to HTML element
3. Initialize components after theme is set
4. Update iframe themes if needed

### Fallback Colors

```css
/* Provide fallback colors for older browsers */
@supports not (color: oklch(0% 0 0)) {
  :root {
    --fallback-primary: #0063a3;
    --fallback-background: #fff;
  }
}
```
