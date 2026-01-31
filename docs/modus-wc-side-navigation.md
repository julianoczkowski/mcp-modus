---
tag: modus-wc-side-navigation
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-side-navigation--docs
---

## Purpose

A collapsible vertical navigation component that provides contextual menu options for application navigation. The component has two states: collapsed (4rem width) and expanded (up to max-width). It automatically handles smooth transitions between states and supports dark theme variants.

> **💡 Navigation Integration:** This component is commonly used alongside `modus-wc-navbar` to provide comprehensive navigation patterns. The navbar typically contains a hamburger menu button that toggles the side navigation open/closed state.

> **⚠️ Important: Navbar Menu Slots:** When integrating with `modus-wc-navbar`, do NOT provide a `main-menu` slot to the navbar. The hamburger button should only control the side navigation, not show its own dropdown menu. This prevents duplicate menus from appearing. Use the side navigation for all primary navigation items, and reserve navbar slots for other features like `notifications`, `apps`, or `center` content.

> **📐 Layout Behavior:** The component is positioned absolutely within its container and takes full viewport height (100vh) by default. When collapsed, it maintains a 4rem (64px) width to show icons, and expands to the specified max-width when opened.

## Attributes

- **`expanded`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: controls the visibility and expanded state of the side navigation panel.
  • _Reflected as prop_: **yes**

- **`collapse-on-click-outside`** (`collapseOnClickOutside`)
  • _Type_: `boolean`
  • _Default_: `true`
  • _Notes_: automatically collapses the navigation when clicking outside of it.
  • _Reflected as prop_: **yes**

- **`max-width`** (`maxWidth`)
  • _Type_: `string`
  • _Default_: `"256px"`
  • _Notes_: maximum width of the side navigation panel in an expanded state.
  • _Reflected as prop_: **yes**

- **`custom-class`** (`customClass`)
  • _Type_: `string | undefined`
  • _Default_: `''`
  • _Notes_: custom CSS class to apply to the inner div.
  • _Reflected as prop_: **yes**

## Events

- **`expandedChange`** — emitted when the expanded state changes (payload: `CustomEvent<boolean>`).

## ⚠️ Common Mistakes

**Navigation not showing?** Make sure you're setting the `expanded` attribute correctly:

```html
<!-- ❌ WRONG: Missing expanded attribute or incorrect syntax -->
<modus-wc-side-navigation>
  <modus-wc-menu>
    <modus-wc-menu-item label="Home">Home</modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- ❌ WRONG: Using 'open' instead of 'expanded' -->
<modus-wc-side-navigation open="true">
  <modus-wc-menu>
    <modus-wc-menu-item label="Home">Home</modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- ✅ CORRECT: Use 'expanded' attribute to control visibility -->
<modus-wc-side-navigation expanded>
  <modus-wc-menu>
    <modus-wc-menu-item label="Home">Home</modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- ✅ CORRECT: Programmatic control -->
<modus-wc-side-navigation id="nav" expanded="false">
  <modus-wc-menu>
    <modus-wc-menu-item label="Home">Home</modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>
```

**Menu items not working correctly?** Ensure you're using `modus-wc-menu` and `modus-wc-menu-item` components:

```html
<!-- ❌ WRONG: Using generic nav elements -->
<modus-wc-side-navigation expanded>
  <nav-item>Home</nav-item>
  <nav-item>Settings</nav-item>
</modus-wc-side-navigation>

<!-- ✅ CORRECT: Use proper modus menu components -->
<modus-wc-side-navigation expanded>
  <modus-wc-menu>
    <modus-wc-menu-item label="Home" start-icon="home"></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Settings"
      start-icon="gears"
    ></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>
```

**Labels showing when collapsed?** The component should automatically hide labels when collapsed, but you may need additional CSS for proper styling:

```css
/* Ensure labels are hidden when navigation is collapsed */
modus-wc-side-navigation:not([expanded]) .modus-wc-menu-item-labels {
  display: none !important;
}

/* Center icons when collapsed */
modus-wc-side-navigation:not([expanded]) .modus-wc-menu-item-content {
  justify-content: center !important;
}
```

**Menu size not applying?** There may be issues with menu size inheritance within the side navigation. If `size="lg"` on `modus-wc-menu` doesn't work as expected, this is a known limitation of the component integration.

## Usage

```html
<!-- Basic side navigation -->
<modus-wc-side-navigation expanded>
  <modus-wc-menu>
    <modus-wc-menu-item
      label="Dashboard"
      start-icon="dashboard"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Projects"
      start-icon="folder"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Settings"
      start-icon="gears"
    ></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- Navigation with auto-collapse on outside click -->
<modus-wc-side-navigation expanded collapse-on-click-outside>
  <modus-wc-menu size="lg">
    <modus-wc-menu-item
      label="Home"
      start-icon="home"
      selected
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Profile"
      start-icon="person"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Settings"
      start-icon="gears"
    ></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- Custom width navigation -->
<modus-wc-side-navigation max-width="320px" expanded>
  <modus-wc-menu>
    <modus-wc-menu-item label="Wide Navigation Item"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<!-- Complete layout example with navbar integration -->
<style>
  .layout-with-navbar {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .main-content-row {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .side-navigation {
    position: relative;
    align-self: flex-start;
  }
  .panel-content {
    flex: 1;
    padding: 1rem;
    overflow: auto;
  }
</style>

<div class="layout-with-navbar">
  <modus-wc-navbar
    app-title="My Application"
    user-name="John Doe"
    user-avatar="/assets/avatar.png"
  >
  </modus-wc-navbar>

  <div class="main-content-row">
    <modus-wc-side-navigation
      class="side-navigation"
      collapse-on-click-outside
      expanded="false"
      max-width="256px"
    >
      <modus-wc-menu size="lg">
        <modus-wc-menu-item
          label="Dashboard"
          start-icon="dashboard"
          selected
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Projects"
          start-icon="folder"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Reports"
          start-icon="chart"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Settings"
          start-icon="gears"
        ></modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-side-navigation>

    <div class="panel-content">
      <h1>Main Content Area</h1>
      <p>Your application content goes here...</p>
    </div>
  </div>
</div>

<!-- Programmatic control with menu item selection -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("modus-wc-menu-item");
    const sideNav = document.querySelector("modus-wc-side-navigation");

    // Handle menu item selection
    menuItems.forEach((item) => {
      item.addEventListener("itemSelect", () => {
        // Remove selection from all items
        menuItems.forEach((i) => i.removeAttribute("selected"));
        // Select clicked item
        item.setAttribute("selected", "");
        // Collapse navigation after selection
        if (sideNav) {
          sideNav.expanded = false;
        }
      });
    });
  });

  // Toggle navigation from navbar
  document.addEventListener("mainMenuOpenChange", () => {
    const sideNav = document.querySelector("modus-wc-side-navigation");
    if (sideNav) {
      sideNav.toggleAttribute("expanded");
    }
  });
</script>

<!-- Responsive behavior -->
<modus-wc-side-navigation
  class="responsive-nav"
  collapse-on-click-outside
  max-width="280px"
>
  <modus-wc-menu>
    <modus-wc-menu-item label="Home" start-icon="home"></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Settings"
      start-icon="gears"
    ></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-side-navigation>

<style>
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .responsive-nav {
      max-width: 100% !important;
    }
  }
</style>
```

### Slot support

The component supports default slot content for navigation menus. Use `modus-wc-menu` and `modus-wc-menu-item` components within the side navigation for proper styling and functionality.

### Pattern notes

- **Collapsed vs Expanded States:** The component never fully hides - it collapses to 4rem width (showing icons) and expands to max-width (showing full menu items with labels).
- **Menu structure:** Always use `modus-wc-menu` as the container for `modus-wc-menu-item` components within the side navigation for proper styling and behavior.
- **Selection handling:** Use the `selected` attribute on menu items to indicate the current page/section. Handle `itemSelect` events to update selection state programmatically.
- **Auto-collapse:** The component defaults to `collapse-on-click-outside="true"` for better UX where the navigation collapses when users click outside the panel.
- **Positioning:** The component uses absolute positioning and takes full viewport height (100vh). Ensure parent container has proper positioning context.
- **Dark theme support:** Automatically adapts to dark themes when `data-theme="modus-classic-dark"` or `data-theme="modus-modern-dark"` is set on parent elements.
- **Integration with navbar:** Listen for `mainMenuOpenChange` events from `modus-wc-navbar` to toggle the side navigation's expanded state.
- **Layout considerations:** The component has a fixed z-index of 999 and uses absolute positioning, so plan your layout accordingly.
- **Accessibility:** The component manages focus and keyboard navigation. Ensure menu items have descriptive labels and appropriate icons.
- **State management:** Use the `expanded` attribute to control visibility and listen to state changes for integration with your application's routing system.
- **Performance:** The component uses optimized CSS transitions (0.2s ease-out) for smooth width animations. Avoid rapid state changes to maintain smooth performance.

### CSS Custom Properties and Styling

The component uses several CSS custom properties and has specific styling behavior:

```css
/* Key CSS custom properties used by the component */
modus-wc-side-navigation {
  /* Colors */
  --modus-wc-color-white: #ffffff;
  --modus-wc-color-trimble-gray: #464b52;
  --modus-wc-color-gray-10: #171c1e; /* Dark theme background */

  /* Layout properties */
  display: block;
  height: 100vh;
  position: relative;
}

/* Internal structure styling */
.modus-wc-side-navigation {
  background: var(--modus-wc-color-white);
  box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
  color: var(--modus-wc-color-trimble-gray);
  transition: width 0.2s ease-out;
  width: 4rem; /* Collapsed width */
  z-index: 999;

  /* When expanded */
  &.expanded {
    width: 256px; /* Default expanded width */
  }
}

/* Dark theme support */
[data-theme="modus-classic-dark"] modus-wc-side-navigation,
[data-theme="modus-modern-dark"] modus-wc-side-navigation {
  .side-navigation-content {
    background: var(--modus-wc-color-gray-10);
    color: var(--modus-wc-color-white);
  }
}

/* Custom max-width override */
modus-wc-side-navigation[max-width="320px"] .modus-wc-side-navigation.expanded {
  width: 320px;
}
```

### Key Styling Notes

- **Collapsed State**: Always maintains 4rem (64px) width to show menu item icons
- **Expanded State**: Uses max-width attribute value (default 256px)
- **Transitions**: Smooth 0.2s ease-out transition for width changes
- **Z-Index**: Fixed at 999 to ensure proper layering
- **Box Shadow**: Consistent shadow `rgba(36, 35, 45, 0.3) 1px 0 4px` for depth
- **Dark Theme**: Automatic color switching based on `data-theme` attribute on parent elements
