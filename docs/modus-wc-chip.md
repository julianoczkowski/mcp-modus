---
tag: modus-wc-chip
category: Indicators & Selections
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-chip--docs
---

## Purpose

Compact visual element for tags, selections or status pills. Supports filled / outline variants, three sizes, active / error / disabled states, optional remove button and anything—icons, avatars, text—in its default slot.

## Attributes

- **`active`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: highlights the chip as selected/pressed; toggled by user or programmatically.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra CSS class on the inner `<div>` for bespoke colours, shadows, etc.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out and blocks click / keyboard interaction.  
  • _Reflected as prop_: **yes**

- **`has-error`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: displays error colours and border.  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: visible text; omit when chip shows only icons/avatars and set `aria-label`.  
  • _Reflected as prop_: **yes**

- **`show-remove`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: shows a close “×” icon on the right; fires `chipRemove` when pressed.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: controls height & font size (sm = 20 px, md = 24 px, lg = 28 px).  
  • _Reflected as prop_: **yes**

- **`variant`**  
  • _Type_: `"filled" | "outline"`  
  • _Default_: `filled`  
  • _Notes_: `filled` gives solid background, `outline` transparent background with coloured border/text.  
  • _Reflected as prop_: **yes**

## Events

- **`chipClick`** — emitted on pointer click **or** `Space`/`Enter`; payload `CustomEvent<MouseEvent | KeyboardEvent>`.
- **`chipRemove`** — emitted when the remove icon is clicked or activated from keyboard; same payload type.

## Usage

```html
<!-- Filled chip with label and remove icon -->
<modus-wc-chip
  label="Chip"
  show-remove
  aria-label="Chip remove example"
></modus-wc-chip>

<!-- Outline variant -->
<modus-wc-chip label="Outline Chip" variant="outline"></modus-wc-chip>

<!-- Active chip -->
<modus-wc-chip label="Active" active></modus-wc-chip>

<!-- Chip in error state -->
<modus-wc-chip label="Error" has-error show-remove></modus-wc-chip>

<!-- Disabled chip -->
<modus-wc-chip label="Disabled" disabled></modus-wc-chip>

<!-- Size variants -->
<modus-wc-chip label="Small" size="sm"></modus-wc-chip>
<modus-wc-chip label="Large" size="lg"></modus-wc-chip>

<!-- Chip with avatar -->
<modus-wc-chip label="Sonic" show-remove>
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="Sonic the Hedgehog"
  >
  </modus-wc-avatar>
</modus-wc-chip>

<!-- Chip with icon and text -->
<modus-wc-chip label="Checkmark" show-remove>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>

<!-- Chip with icon only -->
<modus-wc-chip aria-label="Checkmark chip" show-remove>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>

<!-- Handling events -->
<modus-wc-chip id="statusChip" label="Interactive" show-remove></modus-wc-chip>

<script type="module">
  const chip = document.getElementById("statusChip");

  chip.addEventListener("chipClick", () => {
    chip.active = !chip.active; // toggle active state
  });

  chip.addEventListener("chipRemove", () => {
    chip.remove(); // remove from DOM
  });
</script>
```

## Pattern notes

**Icon usage**: When adding icons to chips, always use `<modus-wc-icon>` component instead of `<i class="modus-icons">`. Use `size="xs"` for most chips, or `size="sm"` for large chips to maintain proper proportions and alignment.

**Any content**: everything placed inside the default slot renders inline—mix text, icons, avatars or even a spinner.

**Remove flow**: provide clear feedback when a chip disappears (e.g. update a filter count) and keep focus management in mind.

**Accessibility**: if no visible label, include an aria-label or aria-labelledby so screen readers identify the chip.

**Keyboard support**: space/enter triggers chipClick; delete/backspace triggers chipRemove when focus is inside the remove icon.

**State styling**: active, has-error, disabled each apply thematic colours—combine active + outline for pill-style toggles.

**Performance**: properties are reactive—always set primitive values (true, false, string) rather than mutating objects inside.
