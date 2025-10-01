# Cursor IDE Usage Examples

This document shows real-world examples of how developers use the Modus MCP server in Cursor.

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                      Cursor IDE                              │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Your Code Editor                                   │    │
│  │  ┌──────────────────────────────────────────────┐  │    │
│  │  │ <modus-wc-button                             │  │    │
│  │  │   color="primary"                            │  │    │
│  │  │   size="md">                                 │  │    │
│  │  │   Click Me                                   │  │    │
│  │  │ </modus-wc-button>                           │  │    │
│  │  └──────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │  AI Chat / Composer (Cmd+K)                        │    │
│  │                                                     │    │
│  │  You: "Add a disabled state to this button"       │    │
│  │                                                     │    │
│  │  AI: [Uses get_component_docs]                    │    │
│  │      "Adding disabled attribute..."                │    │
│  └────────────────────────────────────────────────────┘    │
│                          ↕                                   │
│                    MCP Protocol                              │
│                          ↕                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │  MCP Modus Server                                   │    │
│  │  • search_components                                │    │
│  │  • get_component_docs                               │    │
│  │  • list_all_components                              │    │
│  │  • find_by_attribute                                │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Example 1: Building a Login Form

### User Action
Opens Cursor Composer (Cmd/Ctrl + K) and types:
```
Create a login form using Modus Web Components with:
- Email input
- Password input
- Remember me checkbox
- Submit button
```

### What Happens Behind the Scenes
1. Cursor AI calls `search_components` with query "input"
2. AI calls `get_component_docs` for "text-input"
3. AI calls `get_component_docs` for "checkbox"
4. AI calls `get_component_docs` for "button"

### Generated Code
```html
<form class="login-form">
  <modus-wc-text-input
    type="email"
    label="Email"
    placeholder="Enter your email"
    required>
  </modus-wc-text-input>

  <modus-wc-text-input
    type="password"
    label="Password"
    placeholder="Enter your password"
    required>
  </modus-wc-text-input>

  <modus-wc-checkbox
    label="Remember me">
  </modus-wc-checkbox>

  <modus-wc-button
    type="submit"
    color="primary"
    full-width>
    Sign In
  </modus-wc-button>
</form>
```

## Example 2: Inline Code Assistance

### User Action
Selects this code:
```html
<button>Delete</button>
```

Presses Cmd/Ctrl + K and types:
```
Replace with Modus button, danger color, with icon
```

### What Happens
1. AI calls `get_component_docs` for "button"
2. AI analyzes the button attributes and options
3. AI generates the replacement

### Result
```html
<modus-wc-button
  color="danger"
  variant="filled"
  aria-label="Delete">
  <modus-wc-icon name="delete" decorative></modus-wc-icon>
  Delete
</modus-wc-button>
```

## Example 3: Discovering Components

### User Action
In Cursor Chat, asks:
```
What Modus components can I use for displaying user notifications?
```

### What Happens
1. AI calls `search_components` with query "notification"
2. AI calls `list_all_components` to see all options
3. AI finds relevant components

### AI Response
```
For user notifications in Modus Web Components, you have several options:

1. **modus-wc-toast** - For temporary notifications
   - Auto-dismissible
   - Positioned at screen edges
   - Best for success/error messages

2. **modus-wc-alert** - For persistent notifications
   - Stays on screen until dismissed
   - Good for important warnings
   - Inline with content

3. **modus-wc-message** - For informational messages
   - Contextual messages
   - Can include actions

Would you like me to show you how to implement any of these?
```

## Example 4: Debugging Component Usage

### User Action
Has problematic code:
```html
<modus-wc-button disabled="false">
  Click Me
</modus-wc-button>
```

Asks in chat:
```
Why is this Modus button still disabled even though I set disabled to false?
```

### What Happens
1. AI calls `get_component_docs` for "button"
2. AI analyzes the disabled attribute documentation
3. AI understands it's a boolean attribute

### AI Response
```
The issue is that the `disabled` attribute is a boolean attribute in web
components. Its presence (regardless of value) makes the button disabled.

To fix this, either:

1. Remove the attribute entirely for enabled state:
<modus-wc-button>Click Me</modus-wc-button>

2. Or set it conditionally in JavaScript:
<modus-wc-button id="myBtn">Click Me</modus-wc-button>

// In JavaScript
const btn = document.getElementById('myBtn');
btn.disabled = false; // or true

Don't use disabled="false" - the presence of the attribute is what matters.
```

## Example 5: Finding Components by Feature

### User Action
Working on a form, asks:
```
Which Modus components have a size attribute?
```

### What Happens
1. AI calls `find_by_attribute` with "size"
2. Server searches all component docs
3. Returns matching components with their size attribute details

### AI Response
```
Several Modus components support the `size` attribute:

1. **modus-wc-button**
   - Values: "xs" | "sm" | "md" | "lg"
   - Default: "md"

2. **modus-wc-text-input**
   - Values: "sm" | "md" | "lg"
   - Default: "md"

3. **modus-wc-badge**
   - Values: "sm" | "md"
   - Default: "md"

4. **modus-wc-chip**
   - Values: "sm" | "md"
   - Default: "md"

All of these use consistent size values to maintain visual harmony
across your UI.
```

## Example 6: Building a Data Table

### User Action
Types in Composer:
```
Create a Modus data table showing user data with sortable columns
```

### What Happens
1. AI calls `search_components` with "table"
2. AI calls `get_component_docs` for "table"
3. AI reads the table documentation including attributes and events

### Generated Code
```html
<modus-wc-table
  hover
  row-selection
  sort>
  <table>
    <thead>
      <tr>
        <th data-sort="string">Name</th>
        <th data-sort="string">Email</th>
        <th data-sort="string">Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td>
          <modus-wc-button size="sm" variant="borderless">
            Edit
          </modus-wc-button>
        </td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
</modus-wc-table>

<script>
  const table = document.querySelector('modus-wc-table');

  // Handle row selection
  table.addEventListener('rowSelection', (e) => {
    console.log('Selected rows:', e.detail);
  });

  // Handle sorting
  table.addEventListener('sort', (e) => {
    console.log('Sort column:', e.detail.column);
    console.log('Sort direction:', e.detail.direction);
  });
</script>
```

## Example 7: Multi-file Project

### User Action
Working on multiple files:

**File: components/UserCard.jsx**
```jsx
// Empty file
```

Asks in Composer:
```
Create a React component that uses Modus card and button
to display user profile information
```

### What Happens
1. AI analyzes the file is React/JSX
2. AI calls `get_component_docs` for "card" and "button"
3. AI generates React component with proper Modus syntax

### Generated Code
```jsx
import React from 'react';
import '@trimble-oss/modus-web-components';

export const UserCard = ({ user }) => {
  const handleEdit = () => {
    console.log('Edit user:', user.id);
  };

  return (
    <modus-wc-card>
      <div slot="header">
        <h3>{user.name}</h3>
      </div>

      <div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Joined:</strong> {user.joinDate}</p>
      </div>

      <div slot="footer">
        <modus-wc-button
          color="primary"
          size="sm"
          onClick={handleEdit}>
          Edit Profile
        </modus-wc-button>
        <modus-wc-button
          color="secondary"
          variant="outlined"
          size="sm">
          View Details
        </modus-wc-button>
      </div>
    </modus-wc-card>
  );
};
```

## Example 8: Accessibility Help

### User Action
```
How do I make a Modus button accessible for screen readers
when it only contains an icon?
```

### What Happens
1. AI calls `get_component_docs` for "button"
2. AI reads the documentation about accessibility
3. AI provides proper ARIA guidance

### AI Response
```
For icon-only Modus buttons, always add an `aria-label` attribute:

<modus-wc-button
  aria-label="Delete item"
  shape="circle"
  color="danger">
  <modus-wc-icon name="delete" decorative></modus-wc-icon>
</modus-wc-button>

Key points:
1. `aria-label` provides text for screen readers
2. Set icon's `decorative` attribute so screen readers skip it
3. Use descriptive labels (not just "delete" but "Delete item")
4. Consider using `aria-describedby` for additional context if needed

The button's aria-label is read by screen readers since the icon
is marked as decorative.
```

## Benefits in Cursor

### 1. **Contextual Understanding**
Cursor has access to your entire codebase, so it can:
- Match existing component patterns
- Maintain consistent styling
- Suggest components that fit your architecture

### 2. **Real-time Help**
- Get documentation while typing
- Inline suggestions with proper attributes
- Error correction with component knowledge

### 3. **Code Generation**
- Generate complete components with correct syntax
- Create forms, layouts, and complex UIs
- Apply best practices from documentation

### 4. **Learning Assistant**
- Understand component capabilities
- Learn attribute options
- Discover new components

### 5. **Refactoring Support**
- Convert plain HTML to Modus components
- Update deprecated patterns
- Modernize component usage

## Tips for Best Results

1. **Be Specific**: "Create a Modus primary button" vs "create a button"
2. **Mention Context**: "For a form submission" helps AI choose right attributes
3. **Ask for Explanations**: "Why use variant='outlined'?" gets detailed answers
4. **Request Alternatives**: "Show me other ways to display this"
5. **Combine Features**: "With disabled state and tooltip"

## Integration with Your Workflow

```
Your typical workflow:
1. Write code → 2. Search docs → 3. Copy example → 4. Modify → 5. Test

With MCP Modus in Cursor:
1. Ask AI → 2. Get working code → 3. Test

Time saved: ~70% on component integration tasks
```
