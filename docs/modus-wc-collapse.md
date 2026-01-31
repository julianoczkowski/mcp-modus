---
tag: modus-wc-collapse
category: Navigation & Disclosure
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-collapse--docs
---

## Purpose

Standalone hide-/-show panel that expands or collapses its content. Commonly used inside an accordion, but can also work by itself in settings pages, FAQs, or dashboards.

## Attributes

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: adds a 1 px border that follows the active theme.  
  • _Reflected as prop_: **yes**

- **`collapse-id`** (`collapseId`)  
  • _Type_: `string`  
  • _Default_: _undefined_  
  • _Notes_: unique id applied to the internal header, content and aria attributes—set when you need multiple collapses on one page.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra class on the outer wrapper for spacing or custom shadows.  
  • _Reflected as prop_: **yes**

- **`expanded`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: controls the open/closed state; toggle it programmatically or let the header click do it.  
  • _Reflected as prop_: **yes**

- **`options`**  
  • _Type_: `ICollapseOptions` object _(see below)_  
  • _Default_: _undefined_  
  • _Notes_: quick way to render a pre-made header without using the `header` slot.  
  • _Reflected as prop_: **yes**

### `ICollapseOptions`

```ts
{
  title: string;                 // required
  description?: string;
  icon?: string;                 // Modus icon name
  iconAriaLabel?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}
```

## Slots

- **`header`** — custom HTML for the clickable header (ignored if `options` is used).
- **`content`** — the collapsible body.
- **_(default)_** — equivalent to `content`; kept for backward compatibility.

## Events

- **`expandedChange`** — fires whenever the component opens or closes.
  Payload:

  ```ts
  {
    expanded: boolean;
  }
  ```

## Usage

```html
<!-- Quick header via options -->
<modus-wc-collapse
  collapse-id="item1"
  .options=${{
    title: 'Collapse Title',
    description: 'Collapse description',
    icon: 'help_outline',
    iconAriaLabel: 'Help'
  }}>
  <div slot="content">
    This is the collapsible content. It can contain any HTML.
  </div>
</modus-wc-collapse>

<!-- Initially expanded -->
<modus-wc-collapse
  collapse-id="item2"
  expanded
  .options=${{ title: 'Initially Expanded' }}>
  <div slot="content">Visible on page load.</div>
</modus-wc-collapse>

<!-- Bordered collapse -->
<modus-wc-collapse
  collapse-id="item3"
  bordered
  .options=${{ title: 'Bordered Item' }}>
  <div slot="content">This item has a border.</div>
</modus-wc-collapse>

<!-- Custom header slot -->
<style>
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-inline: 1rem;
  }
</style>
<modus-wc-collapse collapse-id="customHeader">
  <div slot="header" class="header-flex">
    <span>Custom Header</span>
    <modus-wc-button size="sm"
                     @buttonClick=${e => { e.stopPropagation(); alert('Header action'); }}>
      Action
    </modus-wc-button>
  </div>
  <div slot="content">Content for custom-header item.</div>
</modus-wc-collapse>

<!-- Handling expandedChange -->
<modus-wc-collapse id="listenCollapse"
                   .options=${{ title: 'Interactive Collapse' }}>
  <div slot="content">Toggle me!</div>
</modus-wc-collapse>
<script type="module">
  const c = document.getElementById('listenCollapse');
  c.addEventListener('expandedChange', e => {
    console.log('Is open?', e.detail.expanded);
  });
</script>
```

### Pattern notes

- **Header choice:** Use `options` for quick, consistent headers; switch to the `header` slot when you need richer layouts or interactive elements.
- **Stop propagation:** Inside a custom header, call `event.stopPropagation()` on buttons or links to keep them from toggling the collapse.
- **ARIA wiring:** The component automatically links header and content with `aria-controls` / `aria-expanded`; no extra work needed.
- **Inside accordions:** Place multiple collapses inside `<modus-wc-accordion>` to get coordinated open/close behaviour.
- **Performance:** When updating `options`, assign a _new_ object (`{ ...options }`) so the component re-renders; mutating the existing object won’t trigger updates.

```

```
