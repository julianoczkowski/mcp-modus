---

tag: modus-wc-theme-switcher
category: Themes & Appearance
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-themeswitcher--docs

---

## Purpose

Tiny toggle that flips the application between **light** and **dark** (or any two) Modus themes. It pairs with `modus-wc-theme-provider`, updates the central theme store and emits a single `themeChange` event so your app can persist the user’s preference.

## Attributes

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: applies an extra class to the host button—use to tweak size or add borders.
  • _Reflected_: **yes**

_(The component exposes no other public attributes; all behaviour is managed internally by the Modus theme store.)_

## Events

- **`themeChange`** — fires whenever the switch toggles the theme.
  Payload:

  ```ts
  interface IThemeConfig {
    mode: "light" | "dark"; // current mode
    name: string; // full theme token, e.g. 'modus-modern-dark'
  }
  ```

## Usage

```html
<!-- Basic switcher inside a theme provider -->
<modus-wc-theme-provider>
  <header style="display:flex;justify-content:space-between;align-items:center;padding:1rem;">
    <h1>My App</h1>
    <modus-wc-theme-switcher aria-label="Toggle light and dark theme"></modus-wc-theme-switcher>
  </header>
  <main>
    <p>Content changes background colour when theme toggles.</p>
  </main>
</modus-wc-theme-provider>

<script type="module">
  const ts = document.querySelector('modus-wc-theme-switcher');
  ts.addEventListener('themeChange', e => {
    console.log('Theme changed to', e.detail.name);
    // Save preference to localStorage if you like
    localStorage.setItem('theme', e.detail.name);
  });
</script>

<!-- Provider with initial theme -->
<modus-wc-theme-provider .initialTheme=${{ mode:'dark', name:'modus-classic-dark' }}>
  <modus-wc-theme-switcher aria-label="Theme" ></modus-wc-theme-switcher>
</modus-wc-theme-provider>

<!-- Custom styling via class -->
<style>
  .switch-ring {
    padding: .25rem;
    border: 1px solid var(--modus-primary, #0076FF);
    border-radius: 999px;
  }
</style>
<modus-wc-theme-switcher custom-class="switch-ring" aria-label="Styled theme switcher"></modus-wc-theme-switcher>
```

### Pattern notes

- **Provider pairing:** the switcher only toggles the theme; the visual change happens when a `modus-wc-theme-provider` (or your own handler) listens to the same store and updates the `data-theme` attribute.
- **Persisting preference:** read the saved theme from `localStorage` on boot and set `.initialTheme` on the provider so the UI doesn’t flicker.
- **Accessibility:** include an `aria-label` (e.g. “Toggle dark mode”) so screen‑readers announce the control’s purpose.
- **Custom modes:** you can extend the theme store with other modes (e.g. `high-contrast`)—the switcher just toggles between the first two registered modes.
- **Styling:** because the core visual follows brand colours, keep custom CSS subtle (rings, shadows) so contrast ratios remain WCAG‑compliant.
