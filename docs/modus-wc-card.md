---
tag: modus-wc-card
category: Containers & Layout
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-card--docs
---

## Purpose

Versatile container that groups content into a tidy block. Offers vertical or horizontal layout, optional border, image-header support, compact padding, and named slots for title, subtitle, actions, and footer.

## Attributes

- **`background-figure`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: when `true`, any `<figure>` placed in the `header` slot is stretched to cover the card background, letting you overlay text.  
  • _Reflected as prop_: **yes**

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: adds a 1 px border that respects theme colours—useful to separate cards on white backgrounds.  
  • _Reflected as prop_: **yes**

- **`layout`**  
  • _Type_: `"vertical" | "horizontal"`  
  • _Default_: `vertical`  
  • _Notes_: `horizontal` puts the `header` slot (image/figure) beside the body instead of above it.  
  • _Reflected as prop_: **yes**

- **`padding`**  
  • _Type_: `"normal" | "compact"`  
  • _Default_: `normal`  
  • _Notes_: `compact` reduces interior padding for dense dashboards or table rows.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra class(es) applied to the host element for bespoke shadows, rings, animations, etc.  
  • _Reflected as prop_: **yes**

## Slots

- **`header`** — optional image or figure at the top/side of the card.
- **`title`** — main heading (usually `<span>` or `<h3>`).
- **`subtitle`** — secondary heading below the title.
- **_(default)_** — body content (paragraphs, lists, anything).
- **`actions`** — container for buttons or links, typically aligned right.
- **`footer`** — content outside the padded body (e.g. metadata, tags).

## Events

_None_

## Usage

```html
<!-- Vertical card with title, subtitle and action button -->
<modus-wc-card aria-label="Product card">
  <span slot="title">Card Title</span>
  <span slot="subtitle">Card subtitle</span>
  <p>This is the body content of the card. It can contain any HTML.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Buy now">Buy now</modus-wc-button>
  </div>
</modus-wc-card>

<!-- Horizontal card with image header -->
<modus-wc-card aria-label="Image card" layout="horizontal">
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Pug" />
  </figure>
  <p>
    Horizontal layout places this image beside the text instead of above it.
  </p>
</modus-wc-card>

<!-- Background figure image with overlaid text -->
<modus-wc-card aria-label="Hero card" background-figure>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Scenic view" />
  </figure>
  <span slot="title" style="color:white; text-shadow:1px 1px 2px black;"
    >Hero Title</span
  >
  <p style="color:white; text-shadow:1px 1px 2px black;">
    Text is overlaid on the background image.
  </p>
</modus-wc-card>

<!-- Compact, bordered card -->
<modus-wc-card aria-label="Compact bordered card" bordered padding="compact">
  <span slot="title">Compact Card</span>
  <p>This card has less internal padding and a border.</p>
</modus-wc-card>
```

## Pattern notes

Slot order: only the header slot cares about layout (vertical vs horizontal); other slots flow naturally.
Responsive images: make header figures object-fit: cover in your CSS to keep aspect ratio when the card resizes.
Actions alignment: add modus-wc-justify-end or your own flex utility to push action buttons to the right.
Compact padding: ideal for cards inside dense grids—avoid inside narrow mobile columns to keep tap targets comfortable.
Accessibility: supply aria-label on the host or put a proper heading in the title slot so screen-reader users know what the card represents.
