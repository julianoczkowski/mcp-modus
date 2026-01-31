---
tag: modus-wc-navbar
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-navbar--docs
---

## Purpose

A full-width application bar that houses navigation menus, search, notifications, apps launcher, AI button and user profile controls. It supports condensed layouts for smaller viewports and exposes rich events so parent apps can sync menu open/close state.

## Attributes

- **`apps-menu-open`** (`appsMenuOpen`)  
  • _Type_: `boolean` – default `false`  
  • Whether the apps drawer is open.

- **`condensed`**  
  • _Type_: `boolean` – default `false`  
  • Switches to a space-saving layout that tucks icons into a three-dot menu.

- **`condensed-menu-open`** (`condensedMenuOpen`)  
  • _Type_: `boolean` – default `false`  
  • Controls visibility of the condensed (three-dot) menu.

- **`custom-class`**  
  • _Type_: `string` – default `''`  
  • Adds a custom CSS class to the host `<nav>` for bespoke styling.

- **`main-menu-open`** (`mainMenuOpen`) &nbsp;• _Type_: `boolean` – default `false`  
  • Tracks whether the left “hamburger” menu is open.

- **`notifications-menu-open`** (`notificationsMenuOpen`)  
  • _Type_: `boolean` – default `false`  
  • Tracks notification panel state.

- **`search-debounce-ms`** (`searchDebounceMs`)  
  • _Type_: `number` – default `300`  
  • Delay before `searchChange` fires as the user types.

- **`search-input-open`** (`searchInputOpen`)  
  • _Type_: `boolean` – default `false`  
  • Shows / hides the search `<input>` element.

- **`text-overrides`** (`textOverrides`)  
  • _Type_: `INavbarTextOverrides` object  
  • Replaces default labels inside the condensed menu (`apps`, `help`, `notifications`, `search`).

- **`user-card`** (`userCard`) **required**  
  • _Type_: `INavbarUserCard` object  
  • Supplies name, email and avatar info for the user profile button.

- **`user-menu-open`** (`userMenuOpen`)  
  • _Type_: `boolean` – default `false`  
  • Indicates whether the user dropdown is open.

- **`visibility`**  
  • _Type_: `INavbarVisibility` object  
  • Toggles individual buttons (`ai`, `apps`, `help`, `mainMenu`, `notifications`, `search`, `searchInput`, `user`).

## Slots

- **`main-menu`** — custom HTML shown when the hamburger menu opens.
- **`notifications`** — content for the notifications panel.
- **`apps`** — content for the apps drawer.
- **`start`** — inject items after the Trimble logo / hamburger.
- **`center`** — content centred in the bar (e.g. app name).
- **`end`** — items placed before the right-aligned icon group.

## Events

- `aiClick` • `appsClick` • `helpClick` • `notificationsClick` • `searchClick` • `signOutClick` • `myTrimbleClick` • `trimbleLogoClick`  
  → `CustomEvent<MouseEvent | KeyboardEvent>` when the respective button is activated.
- `appsMenuOpenChange` • `condensedMenuOpenChange` • `mainMenuOpenChange` • `notificationsMenuOpenChange` • `searchInputOpenChange` • `userMenuOpenChange`  
  → `CustomEvent<boolean>` reporting open/close state.
- `searchChange` → `CustomEvent<{ value:string }>` every time the debounced search input value changes.

## Usage

```html
<!-- Basic navbar with all buttons visible -->
<modus-wc-navbar
  .userCard=${{
    name: 'Sonic the Hedgehog',
    email: 'sonic@trimble.com',
    avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg'
  }}
  .visibility=${{
    ai: true, apps: true, help: true,
    mainMenu: true, notifications: true,
    search: true, searchInput: true, user: true
  }}>
  <!-- optional slots -->
  <div slot="main-menu" style="padding:1rem;">Main menu items…</div>
  <div slot="notifications" style="padding:1rem;">No new notifications.</div>
  <div slot="apps" style="padding:1rem;">App shortcuts…</div>
  <span slot="center" style="font-weight:600;">My Application</span>
</modus-wc-navbar>

<!-- Condensed layout -->
<modus-wc-navbar
  condensed
  .userCard=${{ name:'Condensed User', email:'c@ex.com' }}
  .visibility=${{ apps:true, help:true, search:true, user:true }}>
</modus-wc-navbar>

<!-- Programmatically opening a menu -->
<script type="module">
  const nav = document.querySelector('modus-wc-navbar');
  nav.mainMenuOpen = true;                // opens hamburger menu
  nav.addEventListener('searchChange', e =>
    console.log('Searching for', e.detail.value));
</script>
```

### Pattern notes

- **State sync:** keep menu open booleans (`mainMenuOpen`, etc.) in your app state if multiple components need awareness of which panel is open.
- **Debounced search:** lower `search-debounce-ms` for instant feedback or raise it for expensive queries.
- **Condensed UI:** when `condensed` is true, seldom-used icons hide behind a three-dot menu—use `visibility` to choose which ones.
- **Accessibility:** the component manages `role="navigation"` plus ARIA labels; ensure custom slot content inside menus also meets WCAG.
- **Branding:** override colours via CSS variables (`--modus-primary`, etc.) or inject custom classes using `custom-class` for advanced theming.
