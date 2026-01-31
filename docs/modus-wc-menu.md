---
tag: modus-wc-menu
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-menu--docs
---

## Purpose

Container that lays out a list of `modus-wc-menu-item` components (or custom `<li>` elements) vertically or horizontally. Use it for side-navs, app toolbars, context menus, or action lists. The component supports a <slot> for injecting custom li elements inside the ul.

## Attributes

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: draws a 1 px border around the menu.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the internal `<ul>`—handy for fixed width, shadows, etc.  
  • _Reflected as prop_: **yes**

- **`orientation`**  
  • _Type_: `"vertical" | "horizontal"`  
  • _Default_: `vertical`  
  • _Notes_: vertical stacks items; horizontal lays them out in a row (good for toolbars).  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"xs" "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: tweaks padding and font on menu items; overridable per-item.  
  • _Reflected as prop_: **yes**

## Slots

- **_(default)_** — place `modus-wc-menu-item` components or custom `<li>` elements here.

## Events

_None_

## Usage

```html
<!-- Default vertical menu -->
<modus-wc-menu aria-label="Main navigation">
  <modus-wc-menu-item label="Profile" value="profile"></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Settings"
    value="settings"
    selected
  ></modus-wc-menu-item>
  <modus-wc-menu-item
    label="Logout"
    value="logout"
    disabled
  ></modus-wc-menu-item>
</modus-wc-menu>

<!-- Horizontal toolbar menu -->
<modus-wc-menu aria-label="Toolbar menu" orientation="horizontal">
  <modus-wc-menu-item label="File" value="file"></modus-wc-menu-item>
  <modus-wc-menu-item label="Edit" value="edit"></modus-wc-menu-item>
  <modus-wc-menu-item label="View" value="view"></modus-wc-menu-item>
</modus-wc-menu>

<!-- Size variants -->
<modus-wc-menu aria-label="Small menu" size="sm">
  <modus-wc-menu-item label="Option 1" value="1"></modus-wc-menu-item>
  <modus-wc-menu-item label="Option 2" value="2"></modus-wc-menu-item>
</modus-wc-menu>

<modus-wc-menu aria-label="Large menu" size="lg">
  <modus-wc-menu-item label="Action A" value="A"></modus-wc-menu-item>
  <modus-wc-menu-item label="Action B" value="B"></modus-wc-menu-item>
</modus-wc-menu>

<!-- Bordered menu -->
<modus-wc-menu aria-label="Bordered navigation" bordered>
  <modus-wc-menu-item label="Dashboard" value="dash"></modus-wc-menu-item>
  <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
</modus-wc-menu>

<!-- Custom list items -->
<style>
  .custom-menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .custom-menu-item:hover {
    background: #f0f0f0;
  }
</style>

<modus-wc-menu aria-label="Custom content menu">
  <li role="menuitem" tabindex="0" class="custom-menu-item">
    <span>Parent</span>
    <modus-wc-button size="sm" shape="circle" variant="borderless">
      <modus-wc-icon name="more_vertical"></modus-wc-icon>
    </modus-wc-button>
  </li>
  <li
    role="menuitem"
    tabindex="0"
    class="custom-menu-item"
    style="padding-left:2rem;"
  >
    <span>Child Item</span>
  </li>
</modus-wc-menu>
```

### Pattern notes

- **Item selection:** each `modus-wc-menu-item` manages its own `selected` state; toggle it there, not on the menu.
- **Orientation CSS:** horizontal menus use `display:flex` internally—no extra CSS needed to align items.
- **Mixing custom items:** when you drop raw `<li>` elements in the slot you must add `role="menuitem"` and keyboard handlers for accessibility.
- **Sizing strategy:** set a `size` on the menu for global padding, then override individual items if needed.
- **Borders & width:** add a fixed `width` or `max-width` via `custom-class` to keep vertical menus from stretching in wide layouts.
