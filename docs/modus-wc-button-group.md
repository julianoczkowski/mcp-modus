---
tag: modus-wc-button-group
category: Inputs & Actions
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-button-group--docs
---

## Purpose

A customizable button group component that groups multiple Modus buttons together with support for single or multiple selection modes.

## Attributes

- **`variant`**  
  • _Type_: `"borderless" | "filled" | "outlined"`  
  • _Default_: `outlined`  
  • _Notes_: Style variant applied to all buttons within the group.  
  • _Reflected as prop_: **yes**

- **`color`**  
  • _Type_: `"primary" | "secondary" | "tertiary" | "warning" | "danger"`  
  • _Default_: `undefined`  
  • _Notes_: Color applied to all buttons within the group.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: Disables all buttons within the button group.  
  • _Reflected as prop_: **yes**

- **`orientation`**  
  • _Type_: `"horizontal" | "vertical"`  
  • _Default_: `horizontal`  
  • _Notes_: Controls layout direction of the button group.  
  • _Reflected as prop_: **yes**

- **`selection-type`**  
  • _Type_: `"default" | "single" | "multiple"`  
  • _Default_: `default`  
  • _Notes_: Selection behavior - `default` (no selection state), `single` (radio-like), or `multiple` (checkbox-like).  
  • _Reflected as prop_: **yes**

## Events

- **`buttonGroupClick`** — Fires a `CustomEvent<{ button: HTMLElement; isSelected: boolean }>` when any button in the group is clicked.

- **`buttonSelectionChange`** — Fires a `CustomEvent<{ selectedButtons: HTMLElement[] }>` when button selection changes (only relevant for `single` or `multiple` selection types).

## Slots

- **default slot** — Place `<modus-wc-button>` elements inside the button group.

## Usage

```html
<!-- Basic horizontal button group -->
<modus-wc-button-group variant="outlined" color="primary">
  <modus-wc-button>Button 1</modus-wc-button>
  <modus-wc-button>Button 2</modus-wc-button>
  <modus-wc-button>Button 3</modus-wc-button>
</modus-wc-button-group>

<!-- Vertical button group -->
<modus-wc-button-group orientation="vertical" variant="outlined">
  <modus-wc-button>Option 1</modus-wc-button>
  <modus-wc-button>Option 2</modus-wc-button>
  <modus-wc-button>Option 3</modus-wc-button>
</modus-wc-button-group>

<!-- Single selection (radio-like behavior) -->
<modus-wc-button-group selection-type="single" variant="outlined">
  <modus-wc-button>Option 1</modus-wc-button>
  <modus-wc-button pressed>Option 2</modus-wc-button>
  <modus-wc-button>Option 3</modus-wc-button>
</modus-wc-button-group>

<!-- Multiple selection (checkbox-like behavior) -->
<modus-wc-button-group selection-type="multiple" variant="outlined">
  <modus-wc-button pressed>Bold</modus-wc-button>
  <modus-wc-button>Italic</modus-wc-button>
  <modus-wc-button pressed>Underline</modus-wc-button>
</modus-wc-button-group>

<!-- Icon-only button group with multiple selection -->
<modus-wc-button-group
  selection-type="multiple"
  variant="outlined"
  color="primary"
>
  <modus-wc-button pressed icon-only aria-label="Align left">
    <modus-wc-icon name="align_left" size="16"></modus-wc-icon>
  </modus-wc-button>
  <modus-wc-button icon-only aria-label="Align center">
    <modus-wc-icon name="align_top" size="16"></modus-wc-icon>
  </modus-wc-button>
  <modus-wc-button icon-only aria-label="Align right">
    <modus-wc-icon name="align_right" size="16"></modus-wc-icon>
  </modus-wc-button>
</modus-wc-button-group>

<!-- Split button pattern with dropdown -->
<modus-wc-button-group variant="outlined">
  <modus-wc-button>Save Document</modus-wc-button>
  <modus-wc-dropdown-menu menu-placement="bottom-end">
    <div slot="button">
      <modus-wc-icon name="expand_more" size="16"></modus-wc-icon>
    </div>
    <div slot="menu">
      <modus-wc-menu-item
        label="Save as Draft"
        value="draft"
      ></modus-wc-menu-item>
      <modus-wc-menu-item
        label="Save as Template"
        value="template"
      ></modus-wc-menu-item>
    </div>
  </modus-wc-dropdown-menu>
</modus-wc-button-group>
```

## Event Handling

```html
<script>
  const buttonGroup = document.querySelector("modus-wc-button-group");

  // Listen for selection changes
  buttonGroup.addEventListener("buttonSelectionChange", (event) => {
    const selectedButtons = event.detail.selectedButtons;
    const buttonTexts = selectedButtons.map((btn) => btn.textContent.trim());
    console.log("Selected:", buttonTexts);
  });

  // Listen for individual button clicks
  buttonGroup.addEventListener("buttonGroupClick", (event) => {
    const { button, isSelected } = event.detail;
    console.log("Clicked:", button.textContent, "Selected:", isSelected);
  });
</script>
```
