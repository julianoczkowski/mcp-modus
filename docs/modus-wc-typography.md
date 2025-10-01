---
tag: modus-wc-typography
category: Content & Typography
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-typography--docs
---

## Purpose

Renders semantic text (`<h1>` – `<h6>`, `<p>`, or `<span>` via **body** variant) while exposing Modus design‑system sizing and weight tokens. Use it for any headings, paragraphs, or inline copy that needs to stay on theme.

## Attributes

- **`variant`**
  • _Type_: `"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "body"`
  • _Default_: `"p"`
  • _Notes_: chooses the HTML tag. `body` outputs `<span>` for inline text.
  • _Reflected_: **yes**

- **`size`**
  • _Type_: `"xs" | "sm" | "md" | "lg"`
  • _Default_: `"md"`
  • _Notes_: controls font-size **only** for `p` and `body` variants; headings follow design‑system sizes regardless.
  • _Reflected_: **yes**

- **`weight`**
  • _Type_: `"light" | "normal" | "semibold" | "bold"`
  • _Default_: `"normal"`
  • _Notes_: sets `font-weight`; applies to all variants.
  • _Reflected_: **yes**

- **`custom-class`**
  • _Type_: `string` – default `''`
  • _Notes_: extra CSS class on the rendered element—ideal for colour, margins, or text effects.
  • _Reflected_: **yes**

## Slots

- **_(default)_** — the text (or HTML) you want to render.

## Events

_None_

## Usage

```html
<!-- Default paragraph -->
<modus-wc-typography>
  The quick brown fox jumps over the lazy dog.
</modus-wc-typography>

<!-- Headings -->
<modus-wc-typography variant="h1">Heading 1</modus-wc-typography>
<modus-wc-typography variant="h3" weight="bold">Bold H3</modus-wc-typography>

<!-- Body variant as inline span -->
<p>
  <modus-wc-typography variant="body" size="lg" weight="semibold">
    Important inline text
  </modus-wc-typography>
  continues in this sentence.
</p>

<!-- Custom size / weight on paragraph -->
<modus-wc-typography size="xs" weight="bold">
  Extra‑small bold copy.
</modus-wc-typography>

<!-- Custom styling via class -->
<style>
  .purple-underline {
    color: rebeccapurple;
    text-decoration: underline;
  }
</style>
<modus-wc-typography custom-class="purple-underline">
  Branded purple text.
</modus-wc-typography>
```

### Pattern notes

- **Semantics first:** pick the correct `variant` for meaning—search engines and assistive tech rely on heading levels (`h1`‑`h6`).
- **Size overrides:** `size` is ignored for heading variants because their font‑sizes are fixed by the design system; only `body` and `p` respect `size`.
- **Inline vs block:** `body` (`<span>`) flows inline—wrap in a block container if you need margins.
- **Weight tokens:** use `light` and `semibold` sparingly to maintain hierarchy; avoid applying weight overrides to headings unless needed.
- **Custom CSS:** prefer `custom-class` instead of styling descendant selectors—this keeps future component updates non‑breaking.
