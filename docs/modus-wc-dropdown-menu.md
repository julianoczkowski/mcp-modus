---
tag: modus-wc-dropdown-menu
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-dropdown-menu--docs
---

## Purpose

A customizable dropdown menu component that combines a trigger button with a toggleable menu. It uses `modus-wc-button` for the trigger and `modus-wc-menu` for the dropdown content. The component supports flexible positioning, custom styling, and slot-based content injection for both the button and menu areas.

## Attributes

- **`button-color`** (`buttonColor`)  
  • _Type_: `"primary" | "secondary" | "tertiary" | "warning" | "danger"`  
  • _Default_: `primary`  
  • _Notes_: controls the color variant of the trigger button.  
  • _Reflected as prop_: **yes**

- **`button-size`** (`buttonSize`)  
  • _Type_: `"xs" | "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets the size of the trigger button.  
  • _Reflected as prop_: **yes**

- **`button-variant`** (`buttonVariant`)  
  • _Type_: `"filled" | "outlined" | "borderless"`  
  • _Default_: `filled`  
  • _Notes_: determines the visual style of the trigger button.  
  • _Reflected as prop_: **yes**

- **`custom-class`** (`customClass`)  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: additional CSS class applied to the host element for custom styling.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: disables the dropdown button and prevents menu interaction.  
  • _Reflected as prop_: **yes**

- **`menu-bordered`** (`menuBordered`)  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: adds a border around the dropdown menu.  
  • _Reflected as prop_: **yes**

- **`menu-offset`** (`menuOffset`)  
  • _Type_: `number`  
  • _Default_: `10`  
  • _Notes_: distance in pixels between the button and menu when opened.  
  • _Reflected as prop_: **yes**

- **`menu-placement`** (`menuPlacement`)  
  • _Type_: `"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"`  
  • _Default_: `bottom-start`  
  • _Notes_: controls where the menu appears relative to the trigger button.  
  • _Reflected as prop_: **yes**

- **`menu-size`** (`menuSize`)  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets the size of the dropdown menu items.  
  • _Reflected as prop_: **yes**

- **`menu-visible`** (`menuVisible`)  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: controls whether the dropdown menu is currently visible.  
  • _Reflected as prop_: **yes**

## Slots

- **`button`** — content for the trigger button (text, icons, etc.)
- **`menu`** — dropdown menu content (typically `modus-wc-menu-item` components)

## Events

- **`menuVisibilityChange`** — fired when the menu opens or closes.  
  Payload: `{ isVisible: boolean }`

## Dependencies

This component internally uses:

- `modus-wc-button` — for the trigger button
- `modus-wc-menu` — for the dropdown menu container

## Usage

```html
<!-- Basic dropdown with menu items -->
<modus-wc-dropdown-menu>
  <span slot="button">Actions</span>
  <div slot="menu">
    <modus-wc-menu-item label="Edit" value="edit"></modus-wc-menu-item>
    <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
    <modus-wc-menu-item label="Share" value="share"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>

<!-- Button with icon and custom styling -->
<modus-wc-dropdown-menu
  button-variant="outlined"
  button-color="secondary"
  menu-placement="bottom-end"
>
  <span slot="button">
    <modus-wc-icon name="more_vertical"></modus-wc-icon>
    Options
  </span>
  <div slot="menu">
    <modus-wc-menu-item
      label="Settings"
      value="settings"
      start-icon="settings"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Help"
      value="help"
      start-icon="help"
    ></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>

<!-- Small borderless dropdown -->
<modus-wc-dropdown-menu
  button-size="sm"
  button-variant="borderless"
  menu-size="sm"
  menu-offset="5"
>
  <modus-wc-icon slot="button" name="filter"></modus-wc-icon>
  <div slot="menu">
    <modus-wc-menu-item
      label="All items"
      value="all"
      selected
    ></modus-wc-menu-item>
    <modus-wc-menu-item label="Active only" value="active"></modus-wc-menu-item>
    <modus-wc-menu-item label="Archived" value="archived"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>

<!-- Programmatic control -->
<modus-wc-dropdown-menu id="controlledDropdown">
  <span slot="button">Controlled Menu</span>
  <div slot="menu">
    <modus-wc-menu-item label="Option 1" value="1"></modus-wc-menu-item>
    <modus-wc-menu-item label="Option 2" value="2"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>

<script type="module">
  const dropdown = document.getElementById("controlledDropdown");

  // Listen for menu visibility changes
  dropdown.addEventListener("menuVisibilityChange", (e) => {
    console.log("Menu is now:", e.detail.isVisible ? "open" : "closed");
  });

  // Listen for item selections within the menu
  dropdown.addEventListener("itemSelect", (e) => {
    console.log("Selected:", e.detail.value);
    // Close the menu after selection
    dropdown.menuVisible = false;
  });

  // Programmatically open/close
  // dropdown.menuVisible = true;  // Opens the menu
  // dropdown.menuVisible = false; // Closes the menu
</script>

<!-- Context menu pattern -->
<modus-wc-dropdown-menu
  button-variant="borderless"
  button-color="tertiary"
  menu-placement="right-start"
  custom-class="context-menu"
>
  <modus-wc-icon slot="button" name="more_horizontal"></modus-wc-icon>
  <div slot="menu">
    <modus-wc-menu-item
      label="Copy"
      value="copy"
      start-icon="copy"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Cut"
      value="cut"
      start-icon="cut"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Paste"
      value="paste"
      start-icon="paste"
      disabled
    ></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>

<!-- Large dropdown with sub-labels -->
<modus-wc-dropdown-menu button-size="lg" menu-size="lg" menu-bordered="false">
  <span slot="button">User Profile</span>
  <div slot="menu">
    <modus-wc-menu-item
      label="Account Settings"
      sub-label="Manage your profile"
      start-icon="person"
      value="account"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Preferences"
      sub-label="App configuration"
      start-icon="settings"
      value="prefs"
    ></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Sign Out"
      start-icon="logout"
      value="logout"
    ></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
```

### Pattern notes

- **Slot content:** use the `button` slot for trigger content and `menu` slot for dropdown items—typically `modus-wc-menu-item` components.
- **Menu positioning:** `menu-placement` supports 12 positions; `bottom-start` aligns the menu's left edge with the button's left edge.
- **Auto-close behavior:** the menu typically closes when clicking outside or selecting an item; control this via the `menuVisible` property.
- **Event handling:** listen for `menuVisibilityChange` on the dropdown and `itemSelect` on individual menu items.
- **Accessibility:** the component handles ARIA attributes and keyboard navigation automatically; ensure meaningful labels on menu items.
- **Styling coordination:** button and menu sizes can be set independently; use `custom-class` for additional theming without breaking component internals.
- **Icon-only buttons:** when using only icons in the button slot, add appropriate `aria-label` attributes for screen readers.
- **Menu content flexibility:** while `modus-wc-menu-item` is recommended, you can place any content in the menu slot as long as it follows proper menu semantics.
