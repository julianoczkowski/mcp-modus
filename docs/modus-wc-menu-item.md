---
tag: modus-wc-menu-item
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-menu-item--docs
---

## Purpose

Represents a single option inside a `modus-wc-menu`.  
Supports label / sub-label text, optional start icon, small/medium/large padding presets, and visual states for selected, focused, disabled, or bordered.

## Attributes

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: draws a 1 px top & bottom border around the item.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: additional CSS class on the `<li>` host for bespoke colours or layout.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out and blocks pointer / keyboard interaction.  
  • _Reflected as prop_: **yes**

- **`focused`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: applies focus highlight (usually managed automatically for keyboard nav).  
  • _Reflected as prop_: **yes**

- **`label`** **(required)**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: main text displayed in the item.  
  • _Reflected as prop_: **yes**

- **`selected`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: marks the item as the current choice (adds background + checkmark).  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: controls padding, font size and icon size.  
  • _Reflected as prop_: **yes**

- **`start-icon`** (`startIcon`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: Modus icon name rendered before the label.  
  • _Reflected as prop_: **yes**

- **`sub-label`** (`subLabel`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: secondary text shown below the main label (smaller font).  
  • _Reflected as prop_: **yes**

- **`value`** **(required)**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: unique identifier emitted in events and used by menus to track selection.  
  • _Reflected as prop_: **yes**

## Events

- **`itemSelect`** — fired when the item is activated (click or `Enter`/`Space`).  
  Payload: `{ value: string }`

## Usage

```html
<!-- Basic item inside a menu -->
<modus-wc-menu>
  <modus-wc-menu-item label="Dashboard" value="dash"></modus-wc-menu-item>
</modus-wc-menu>

<!-- Item with sub-label and start icon -->
<modus-wc-menu-item
  label="Settings"
  sub-label="Configure your app"
  start-icon="settings"
  value="settings"
>
</modus-wc-menu-item>

<!-- Selected, disabled & focused states -->
<modus-wc-menu-item label="Selected" value="sel" selected></modus-wc-menu-item>
<modus-wc-menu-item label="Disabled" value="dis" disabled></modus-wc-menu-item>
<modus-wc-menu-item
  label="Keyboard focus"
  value="foc"
  focused
></modus-wc-menu-item>

<!-- Size variants -->
<modus-wc-menu-item label="Small" value="sm" size="sm"></modus-wc-menu-item>
<modus-wc-menu-item label="Large" value="lg" size="lg"></modus-wc-menu-item>

<!-- Bordered item -->
<modus-wc-menu-item
  label="Bordered"
  value="border"
  bordered
></modus-wc-menu-item>

<!-- Handling selection -->
<modus-wc-menu id="fileMenu">
  <modus-wc-menu-item label="Open file" value="open"></modus-wc-menu-item>
  <modus-wc-menu-item label="Save file" value="save"></modus-wc-menu-item>
</modus-wc-menu>

<script type="module">
  document.getElementById("fileMenu").addEventListener("itemSelect", (e) => {
    console.log("Selected item value:", e.detail.value);
  });
</script>
```

### Pattern notes

- **Selection logic:** toggle `selected` on the clicked item and clear it on siblings if you need single-select behaviour.
- **Keyboard nav:** the parent `modus-wc-menu` handles arrow-key navigation and focus; avoid manually setting `focused` unless you build a custom experience.
- **Icons:** `start-icon` uses Modus icon font—make sure the icon stylesheet is loaded.
- **Accessibility:** the component outputs proper `role="menuitem"` and `tabindex` values; still supply meaningful `label` text for screen readers.
- **Styling:** use `custom-class` for width, shadows or brand colours rather than deep selectors so future updates stay safe.
