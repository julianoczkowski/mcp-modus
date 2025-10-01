---
tag: modus-wc-tooltip
category: Feedback & Messaging
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-tooltip--docs
---

## Purpose

Displays short helper text when the user hovers, focuses, or touches an element. The component **wraps** the trigger element in its default slot and handles positioning, show/hide timing, and accessibility attributes automatically.

## Attributes

- **`content`**
  • _Type_: `string` **(required)**
  • _Default_: `''`
  • _Notes_: the plain‑text message shown in the tooltip bubble.
  • _Reflected_: **yes**

- **`position`**
  • _Type_: `"auto" | "top" | "bottom" | "left" | "right"`
  • _Default_: `"auto"`
  • _Notes_: preferred placement relative to the trigger; `auto` flips if space is tight.
  • _Reflected_: **yes**

- **`disabled`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: blocks tooltip from appearing on hover/focus.
  • _Reflected_: **yes**

- **`force-open`** (`forceOpen`)
  • _Type_: `boolean` – default **`false`**
  • _Notes_: keeps the tooltip visible at all times—handy for demos and tests.
  • _Reflected_: **yes**

- **`tooltip-id`** (`tooltipId`)
  • _Type_: `string`
  • _Notes_: assigns an `id` to the tooltip so external elements can reference it via `aria-describedby`.
  • _Reflected_: **yes**

- **`custom-class`**
  • _Type_: `string` – default `''`
  • _Notes_: extra CSS class on the tooltip bubble for colours, shadows, or advanced theming.
  • _Reflected_: **yes**

## Slots

- **_(default)_** — the element that triggers the tooltip (button, icon, text, etc.). Only _one_ direct child is allowed.

## Events

_None_

## Usage

```html
<!-- Basic tooltip on a badge -->
<modus-wc-tooltip content="Helpful info here.">
  <modus-wc-badge>Hover me</modus-wc-badge>
</modus-wc-tooltip>

<!-- Forced top position -->
<modus-wc-tooltip content="Always above" position="top">
  <modus-wc-button>Top tooltip</modus-wc-button>
</modus-wc-tooltip>

<!-- Disabled tooltip -->
<modus-wc-tooltip content="Won't show" disabled>
  <modus-wc-icon name="info"></modus-wc-icon>
</modus-wc-tooltip>

<!-- Force open for demo -->
<modus-wc-tooltip content="Debug mode" force-open position="bottom">
  <modus-wc-button variant="borderless">Forced open</modus-wc-button>
</modus-wc-tooltip>

<!-- Accessible description via tooltip-id -->
<modus-wc-button aria-describedby="saveTip">Save</modus-wc-button>
<modus-wc-tooltip
  content="Save changes to the server"
  tooltip-id="saveTip"
></modus-wc-tooltip>

<!-- Custom styling -->
<style>
  .brand-tooltip {
    --modus-tooltip-bg: #003366; /* dark blue */
    --modus-tooltip-fg: #ffffff;
  }
</style>
<modus-wc-tooltip content="Branded" custom-class="brand-tooltip">
  <modus-wc-icon name="star"></modus-wc-icon>
</modus-wc-tooltip>
```

### Pattern notes

- **One child rule:** the tooltip clones/unhooks events on its _first_ slotted child—wrap multiple elements in a `<span>` if needed.
- **Keyboard focus:** tooltips appear on `focusin` and hide on `focusout`, matching hover behaviour for mouse users.
- **ARIA wiring:** the component sets `role="tooltip"` and links `aria-describedby` for you unless you supply `tooltip-id`/external referencing.
- **Custom theming:** override CSS vars (`--modus-tooltip-bg`, `--modus-tooltip-fg`, `--modus-tooltip-arrow`) in `custom-class` to match brand colours.
- **Responsive flip:** `position="auto"` flips the bubble if the preferred side lacks room—avoid hard‑coding sides unless vital.
- **Testing / demos:** use `force-open` in Storybook docs or Cypress tests; remember to remove it in production.
