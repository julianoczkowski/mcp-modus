---
tag: modus-wc-rating
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-rating--docs
---

## Purpose

Lets users express a qualitative score—stars, hearts, smileys, or thumbs—by clicking or tapping a row of icons. Supports half-steps, custom counts, four size tokens, disabled mode and a single `ratingChange` event to keep your app state in sync.

## Attributes

- **`variant`**  
  • _Type_: `"star" | "heart" | "smiley" | "thumb"`  
  • _Default_: `smiley`  
  • _Notes_: picks the icon set. _Thumb_ always shows two items (up / down).  
  • _Reflected_: **yes**

- **`count`**  
  • _Type_: `number`  
  • _Default_: `5`  
  • _Notes_: number of items for `star` & `heart` (any positive int) or `smiley` (clamped 2-5). Ignored by `thumb`.  
  • _Reflected_: **yes**

- **`value`**  
  • _Type_: `number`  
  • _Default_: `0`  
  • _Notes_: current rating; fractions allowed only when `allow-half="true"`.  
  • _Reflected_: **yes**

- **`allow-half`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: enables half-ratings for `star` & `heart` variants (e.g. 3.5).  
  • _Reflected_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: scales icon font-size (sm ≈ 20 px, md ≈ 24 px, lg ≈ 32 px).  
  • _Reflected_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: shows selected value but blocks interaction.  
  • _Reflected_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the host element for colour or animation tweaks.  
  • _Reflected_: **yes**

- **`get-aria-label-text`** (`getAriaLabelText`)  
   • _Type_: `(ratingValue: number) => string`  
   • _Default_: `ratingValue => \`Rating item ${ratingValue}\`` 
• *Notes*: returns the per-item`aria-label` string—override for localisation.  
   • _Reflected_: **no**

## Events

- **`ratingChange`** — emitted on click / keypress.  
   Payload:
  ```ts
  interface IRatingChange {
    newRating: number;
  }
  ``;
  ```

## Usage

```html
<!-- Default (smileys) -->
<modus-wc-rating aria-label="Rate your experience"></modus-wc-rating>

<!-- Star and heart variants -->
<modus-wc-rating variant="star" aria-label="Star rating"></modus-wc-rating>
<modus-wc-rating variant="heart" aria-label="Heart rating"></modus-wc-rating>

<!-- Half-ratings -->
<modus-wc-rating
  variant="star"
  allow-half
  value="2.5"
  aria-label="Star rating with halves"
>
</modus-wc-rating>

<!-- Custom count -->
<modus-wc-rating
  variant="star"
  count="10"
  aria-label="Ten-star scale"
></modus-wc-rating>

<!-- Sizes -->
<modus-wc-rating variant="heart" size="sm"></modus-wc-rating>
<modus-wc-rating variant="star" size="lg"></modus-wc-rating>

<!-- Disabled -->
<modus-wc-rating
  variant="smiley"
  value="3"
  disabled
  aria-label="Disabled rating"
></modus-wc-rating>

<!-- Custom aria labels -->
<modus-wc-rating
  id="i18nRating"
  variant="star"
  count="3"
  aria-label="Localised rating"
>
</modus-wc-rating>
<script type="module">
  const r = document.getElementById("i18nRating");
  r.getAriaLabelText = (v) => `Évaluez ${v} sur 3`;
</script>

<!-- Handling change -->
<modus-wc-rating id="rateMe" variant="star"></modus-wc-rating>
<p>Selected: <span id="out">0</span></p>
<script type="module">
  const rating = document.getElementById("rateMe");
  const out = document.getElementById("out");
  rating.addEventListener("ratingChange", (e) => {
    out.textContent = e.detail.newRating;
    rating.value = e.detail.newRating; // keep component in sync
  });
</script>
```

### Pattern notes

- **Variant quirks:** `thumb` uses two icons (up / down), returns `1` or `2`; half-values are ignored.
- **Count limits:** `smiley` enforces 2-5 items to map to standard moods; `star`/`heart` can be any integer.
- **Half-steps:** users click the left or right side of an icon to choose `.0` or `.5`; keyboard ↑/→ increments by `0.5` when allowed.
- **Accessibility:** every item is a hidden radio; the component manages `role="radiogroup"` and announces `"selected"` state.
- **Colour customisation:** icons respect `currentColor`; style via `color` in `.custom-class` or a parent element.
- **Resetting:** an invisible radio with value `0` lets users clear the rating via keyboard _or_ programmatically set `value = 0`.
