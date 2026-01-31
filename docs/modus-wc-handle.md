---
tag: modus-wc-handle
category: Layout
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-handle--docs
---

## Purpose

A draggable handle component for resizing adjacent elements. Supports both bar and button styles, horizontal and vertical orientations, and keyboard navigation.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `""`  
  • _Notes_: Custom CSS class to apply to the handle element.  
  • _Reflected as prop_: **yes**

- **`default-split`**  
  • _Type_: `number`  
  • _Default_: `50`  
  • _Notes_: Initial split percentage (1-100) for the left/top panel. Right/bottom panel gets the remaining percentage.  
  • _Reflected as prop_: **yes**

- **`density`**  
  • _Type_: `"compact" | "comfortable" | "relaxed"`  
  • _Default_: `comfortable`  
  • _Notes_: Spacing/density of the handle container (compact: 8px, comfortable: 12px, relaxed: 16px).  
  • _Reflected as prop_: **yes**

- **`left-target`**  
  • _Type_: `string | HTMLElement`  
  • _Default_: `undefined`  
  • _Notes_: CSS selector or HTMLElement reference for the left/top panel to resize.  
  • _Reflected as prop_: **yes**

- **`orientation`**  
  • _Type_: `"horizontal" | "vertical"`  
  • _Default_: `horizontal`  
  • _Notes_: Orientation of the handle (horizontal resizes left/right, vertical resizes top/bottom).  
  • _Reflected as prop_: **yes**

- **`right-target`**  
  • _Type_: `string | HTMLElement`  
  • _Default_: `undefined`  
  • _Notes_: CSS selector or HTMLElement reference for the right/bottom panel to resize.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"default" | "lg" | "xl" | "2xl"`  
  • _Default_: `default`  
  • _Notes_: Size of the handle bar.  
  • _Reflected as prop_: **yes**

- **`type`**  
  • _Type_: `"bar" | "button"`  
  • _Default_: `bar`  
  • _Notes_: Type of handle to display - simple bar or button with drag icon.  
  • _Reflected as prop_: **yes**

- **`button-color`**  
  • _Type_: `"primary" | "secondary" | "tertiary" | "warning" | "danger"`  
  • _Default_: `tertiary`  
  • _Notes_: Color of the button (only applies when `type="button"`).  
  • _Reflected as prop_: **yes**

- **`button-size`**  
  • _Type_: `"xs" | "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: Size of the button (only applies when `type="button"`).  
  • _Reflected as prop_: **yes**

- **`button-variant`**  
  • _Type_: `"borderless" | "filled" | "outlined"`  
  • _Default_: `filled`  
  • _Notes_: Variant of the button (only applies when `type="button"`).  
  • _Reflected as prop_: **yes**

## Dependencies

- Uses `modus-wc-button` internally when `type="button"`
- Uses `modus-wc-icon` for the drag icon

## Usage

```html
<!-- Basic horizontal handle (bar type) -->
<div style="display: flex; height: 300px;">
  <div
    id="left-panel"
    style="width: 200px; background: var(--modus-wc-color-base-100);"
  >
    <h3>Left Panel</h3>
    <p>Drag the handle to resize.</p>
  </div>

  <modus-wc-handle
    orientation="horizontal"
    left-target="#left-panel"
    right-target="#right-panel"
  ></modus-wc-handle>

  <div
    id="right-panel"
    style="flex: 1; background: var(--modus-wc-color-base-100);"
  >
    <h3>Right Panel</h3>
    <p>This panel resizes automatically.</p>
  </div>
</div>

<!-- Vertical handle -->
<div style="display: flex; flex-direction: column; height: 500px;">
  <div
    id="top-panel"
    style="height: 200px; background: var(--modus-wc-color-base-100);"
  >
    <h3>Top Panel</h3>
  </div>

  <modus-wc-handle
    orientation="vertical"
    left-target="#top-panel"
    right-target="#bottom-panel"
  ></modus-wc-handle>

  <div
    id="bottom-panel"
    style="flex: 1; background: var(--modus-wc-color-base-100);"
  >
    <h3>Bottom Panel</h3>
  </div>
</div>

<!-- Button type handle -->
<div style="display: flex; height: 300px;">
  <div id="panel-a" style="width: 200px;">Panel A</div>

  <modus-wc-handle
    type="button"
    orientation="horizontal"
    button-color="primary"
    button-size="md"
    button-variant="outlined"
    left-target="#panel-a"
    right-target="#panel-b"
  ></modus-wc-handle>

  <div id="panel-b" style="flex: 1;">Panel B</div>
</div>

<!-- With default split percentage -->
<div style="display: flex; height: 300px;">
  <div id="panel-left" style="background: var(--modus-wc-color-base-100);">
    Left
  </div>

  <modus-wc-handle
    orientation="horizontal"
    default-split="30"
    left-target="#panel-left"
    right-target="#panel-right"
  ></modus-wc-handle>

  <div id="panel-right" style="background: var(--modus-wc-color-base-200);">
    Right
  </div>
</div>

<!-- Nested handles for complex layouts -->
<div style="display: flex; height: 600px;">
  <div id="panel-one" style="width: 400px;">Large left panel</div>

  <modus-wc-handle
    orientation="horizontal"
    left-target="#panel-one"
    right-target="#right-container"
  ></modus-wc-handle>

  <div
    id="right-container"
    style="flex: 1; display: flex; flex-direction: column;"
  >
    <div id="panel-two" style="height: 200px;">Top right</div>

    <modus-wc-handle
      orientation="vertical"
      left-target="#panel-two"
      right-target="#panel-three"
    ></modus-wc-handle>

    <div id="panel-three" style="flex: 1;">Bottom right</div>
  </div>
</div>
```

## Keyboard Navigation

The handle supports full keyboard navigation:

- **Arrow Keys**: Move the handle 5px per press
  - Horizontal: Left/Right arrows
  - Vertical: Up/Down arrows
- **Shift + Arrow Keys**: Move 15px per press for faster resizing
- **Tab**: Focus the handle element

## Accessibility

- The bar type handle has `role="separator"` and `aria-orientation`
- The button type handle uses a proper button element with `role="separator"`
- All handles are focusable with `tabindex="0"`
