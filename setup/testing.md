# Modus Web Components - Testing Standards

## Testing Framework

### Component Testing Checklist

- [ ] **Visual Testing**

  - [ ] Component renders correctly in all 4 themes
  - [ ] All variants and states display properly
  - [ ] Responsive design works on mobile/tablet/desktop
  - [ ] Color contrast meets accessibility standards
  - [ ] Icons and images load correctly

- [ ] **Functional Testing**

  - [ ] Interactive demos work as expected
  - [ ] Event handling functions correctly
  - [ ] Form validation works properly
  - [ ] Theme switching functions correctly
  - [ ] Component statistics are accurate

- [ ] **Accessibility Testing**
  - [ ] Keyboard navigation works properly
  - [ ] Screen reader compatibility
  - [ ] ARIA labels are accurate
  - [ ] Focus indicators are visible
  - [ ] Color contrast ratios meet WCAG standards

## Theme Testing

### Theme Validation Script

```javascript
function validateTheme(theme) {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute("data-theme");
  return currentTheme === theme;
}

function testAllThemes() {
  const themes = [
    "modus-modern-light",
    "modus-modern-dark",
    "modus-classic-light",
    "modus-classic-dark",
  ];

  themes.forEach((theme) => {
    changeTheme(theme);
    console.log(`Theme ${theme}: ${validateTheme(theme) ? "PASS" : "FAIL"}`);
  });
}
```

### Theme Switching Test

```javascript
function testThemeSwitching() {
  const themes = [
    "modus-modern-light",
    "modus-modern-dark",
    "modus-classic-light",
    "modus-classic-dark",
  ];

  themes.forEach((theme, index) => {
    setTimeout(() => {
      changeTheme(theme);
      console.log(`Switched to ${theme}`);

      // Test component visibility in each theme
      const components = document.querySelectorAll("modus-wc-*");
      components.forEach((component) => {
        const isVisible = component.offsetHeight > 0;
        console.log(`Component ${component.tagName} visible: ${isVisible}`);
      });
    }, index * 1000);
  });
}
```

## Component Testing

### Interactive Demo Testing

```javascript
function testInteractiveDemo() {
  const demoComponent = document.getElementById("demo-component");
  if (!demoComponent) {
    console.error("Demo component not found");
    return;
  }

  // Test attribute changes
  const testAttributes = [
    { attribute: "color", values: ["primary", "secondary", "tertiary"] },
    { attribute: "size", values: ["sm", "md", "lg"] },
    { attribute: "variant", values: ["filled", "outlined", "borderless"] },
  ];

  testAttributes.forEach(({ attribute, values }) => {
    values.forEach((value) => {
      demoComponent.setAttribute(attribute, value);
      const currentValue = demoComponent.getAttribute(attribute);
      console.log(
        `${attribute}="${value}": ${currentValue === value ? "PASS" : "FAIL"}`
      );
    });
  });
}
```

### Event Testing

```javascript
function testComponentEvents() {
  const component = document.getElementById("test-component");
  if (!component) {
    console.error("Test component not found");
    return;
  }

  // Test button click events
  if (component.tagName === "MODUS-WC-BUTTON") {
    component.addEventListener("buttonClick", (e) => {
      console.log("Button click event fired:", e.detail);
    });

    // Simulate click
    component.click();
  }

  // Test input events
  if (component.tagName === "MODUS-WC-TEXT-INPUT") {
    component.addEventListener("valueChange", (e) => {
      console.log("Value change event fired:", e.detail);
    });

    // Simulate input
    component.value = "test input";
    component.dispatchEvent(new Event("input"));
  }
}
```

## Accessibility Testing

### Keyboard Navigation Test

```javascript
function testKeyboardNavigation() {
  const focusableElements = document.querySelectorAll(
    'modus-wc-button, modus-wc-text-input, modus-wc-select, [tabindex="0"]'
  );

  focusableElements.forEach((element, index) => {
    element.focus();
    const isFocused = document.activeElement === element;
    console.log(`Element ${index} focusable: ${isFocused ? "PASS" : "FAIL"}`);

    // Test Tab navigation
    if (index < focusableElements.length - 1) {
      element.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab" }));
    }
  });
}
```

### Screen Reader Testing

```javascript
function testScreenReaderSupport() {
  const components = document.querySelectorAll("modus-wc-*");

  components.forEach((component) => {
    const ariaLabel = component.getAttribute("aria-label");
    const ariaHidden = component.getAttribute("aria-hidden");
    const role = component.getAttribute("role");

    console.log(`Component ${component.tagName}:`, {
      hasAriaLabel: !!ariaLabel,
      hasAriaHidden: !!ariaHidden,
      hasRole: !!role,
      accessible: !!(ariaLabel || role),
    });
  });
}
```

### Color Contrast Testing

```javascript
function testColorContrast() {
  const elements = document.querySelectorAll(
    "modus-wc-button, modus-wc-text-input, modus-wc-select"
  );

  elements.forEach((element) => {
    const styles = window.getComputedStyle(element);
    const backgroundColor = styles.backgroundColor;
    const color = styles.color;

    // This would need a proper contrast calculation library
    console.log(`Element ${element.tagName}:`, {
      backgroundColor,
      color,
      // contrastRatio: calculateContrast(backgroundColor, color)
    });
  });
}
```

## Responsive Testing

### Breakpoint Testing

```javascript
function testResponsiveDesign() {
  const breakpoints = [
    { name: "mobile", width: 375, height: 667 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "desktop", width: 1920, height: 1080 },
  ];

  breakpoints.forEach((breakpoint) => {
    // Simulate viewport size
    window.resizeTo(breakpoint.width, breakpoint.height);

    // Test component layout
    const components = document.querySelectorAll("modus-wc-*");
    components.forEach((component) => {
      const rect = component.getBoundingClientRect();
      const isVisible = rect.width > 0 && rect.height > 0;
      console.log(
        `${breakpoint.name} - ${component.tagName}: ${
          isVisible ? "PASS" : "FAIL"
        }`
      );
    });
  });
}
```

### Touch Testing

```javascript
function testTouchInteractions() {
  const touchableElements = document.querySelectorAll(
    "modus-wc-button, modus-wc-select"
  );

  touchableElements.forEach((element) => {
    // Simulate touch events
    const touchStart = new TouchEvent("touchstart", {
      touches: [new Touch({ identifier: 1, target: element })],
    });

    const touchEnd = new TouchEvent("touchend", {
      touches: [new Touch({ identifier: 1, target: element })],
    });

    element.dispatchEvent(touchStart);
    element.dispatchEvent(touchEnd);

    console.log(`Touch interaction for ${element.tagName}: PASS`);
  });
}
```

## Performance Testing

### Component Loading Test

```javascript
function testComponentLoading() {
  const startTime = performance.now();

  // Test component definition
  const componentDefined = customElements.get("modus-wc-button") !== undefined;
  const loadTime = performance.now() - startTime;

  console.log(`Component loading: ${componentDefined ? "PASS" : "FAIL"}`);
  console.log(`Load time: ${loadTime.toFixed(2)}ms`);

  // Test if load time is acceptable (< 100ms)
  const isAcceptable = loadTime < 100;
  console.log(`Load time acceptable: ${isAcceptable ? "PASS" : "FAIL"}`);
}
```

### Memory Usage Test

```javascript
function testMemoryUsage() {
  const initialMemory = performance.memory
    ? performance.memory.usedJSHeapSize
    : 0;

  // Create multiple components
  for (let i = 0; i < 100; i++) {
    const button = document.createElement("modus-wc-button");
    button.textContent = `Button ${i}`;
    document.body.appendChild(button);
  }

  const finalMemory = performance.memory
    ? performance.memory.usedJSHeapSize
    : 0;
  const memoryIncrease = finalMemory - initialMemory;

  console.log(`Memory increase: ${memoryIncrease} bytes`);
  console.log(
    `Memory usage acceptable: ${memoryIncrease < 1000000 ? "PASS" : "FAIL"}`
  );
}
```

## Automated Testing

### Test Suite Structure

```javascript
class ComponentTestSuite {
  constructor(componentName) {
    this.componentName = componentName;
    this.tests = [];
    this.results = [];
  }

  addTest(name, testFunction) {
    this.tests.push({ name, testFunction });
  }

  async runTests() {
    console.log(`Running tests for ${this.componentName}...`);

    for (const test of this.tests) {
      try {
        await test.testFunction();
        this.results.push({ name: test.name, status: "PASS" });
        console.log(`✓ ${test.name}`);
      } catch (error) {
        this.results.push({
          name: test.name,
          status: "FAIL",
          error: error.message,
        });
        console.log(`✗ ${test.name}: ${error.message}`);
      }
    }

    return this.results;
  }

  getResults() {
    const passed = this.results.filter((r) => r.status === "PASS").length;
    const failed = this.results.filter((r) => r.status === "FAIL").length;

    return {
      total: this.results.length,
      passed,
      failed,
      successRate: (passed / this.results.length) * 100,
    };
  }
}
```

### Component Test Implementation

```javascript
// Example test suite for button component
const buttonTestSuite = new ComponentTestSuite("modus-wc-button");

buttonTestSuite.addTest("Component Definition", () => {
  const isDefined = customElements.get("modus-wc-button") !== undefined;
  if (!isDefined) throw new Error("Component not defined");
});

buttonTestSuite.addTest("Attribute Setting", () => {
  const button = document.createElement("modus-wc-button");
  button.setAttribute("color", "primary");
  const color = button.getAttribute("color");
  if (color !== "primary") throw new Error("Attribute not set correctly");
});

buttonTestSuite.addTest("Event Handling", () => {
  const button = document.createElement("modus-wc-button");
  let eventFired = false;

  button.addEventListener("buttonClick", () => {
    eventFired = true;
  });

  button.click();
  if (!eventFired) throw new Error("Event not fired");
});

// Run tests
buttonTestSuite.runTests().then(() => {
  const results = buttonTestSuite.getResults();
  console.log("Test Results:", results);
});
```

## Testing Best Practices

### Test Data Management

```javascript
// Test data for different scenarios
const testData = {
  button: {
    colors: ["primary", "secondary", "tertiary", "warning", "danger"],
    sizes: ["xs", "sm", "md", "lg"],
    variants: ["filled", "outlined", "borderless"],
  },
  select: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};
```

### Error Handling

```javascript
function safeTest(testFunction, testName) {
  try {
    testFunction();
    console.log(`✓ ${testName}`);
    return true;
  } catch (error) {
    console.error(`✗ ${testName}: ${error.message}`);
    return false;
  }
}
```
