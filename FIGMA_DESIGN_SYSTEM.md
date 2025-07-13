# Figma Design System Implementation

This document describes the implementation of Figma design system tokens and dark mode support for the Indian User Data Generator plugin.

## Features Added

### 1. Design System Tokens

- **Colors**: Complete color palette with light and dark theme variants
- **Typography**: Font family and size tokens
- **Spacing**: Consistent spacing scale
- **Border Radius**: Standardized border radius values
- **Shadows**: Elevation shadows for different levels

### 2. Dark Mode Support

- Automatic theme detection based on Figma environment
- System preference fallback
- Smooth transitions between themes
- CSS custom properties for easy theme switching
- **Manual theme toggle**: Switch between light and dark themes

### 3. Theme Detection

- Detects Figma vs FigJam environment
- Listens for system theme changes
- Provides theme information to UI components
- **Toggle functionality**: Manual theme switching with proper state management

## Implementation Details

### CSS Custom Properties

The design system uses CSS custom properties (CSS variables) defined in `src/ui.css`:

```css
:root {
  /* Light theme colors */
  --figma-color-bg: #ffffff;
  --figma-color-text: #000000;
  /* ... more tokens */
}

[data-theme="dark"] {
  /* Dark theme overrides */
  --figma-color-bg: #2c2c2c;
  --figma-color-text: #ffffff;
  /* ... more tokens */
}
```

### Theme Hook

The `useFigmaTheme` hook (`src/hooks/useFigmaTheme.ts`) provides:

- Current theme state
- Theme detection logic
- Automatic theme application
- **toggleTheme function**: Manual theme switching

```typescript
const { theme, isDark, toggleTheme } = useFigmaTheme();
```

### Code Integration

The main code file (`src/code.ts`) handles theme requests:

```typescript
if (msg.type === "get-theme") {
  figma.ui.postMessage({
    type: "theme-changed",
    theme: figma.editorType === "figma" ? "light" : "dark",
  });
}
```

## Usage

### Using Design System Tokens

Replace hardcoded values with design system tokens:

```css
/* Before */
.button {
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  border-radius: 4px;
}

/* After */
.button {
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  padding: var(--figma-space-sm);
  border-radius: var(--figma-radius-sm);
}
```

### Theme Detection

The theme is automatically detected and applied. Components can access theme information:

```typescript
import { useFigmaTheme } from "./hooks/useFigmaTheme";

function MyComponent() {
  const { theme, isDark, toggleTheme } = useFigmaTheme();

  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "light" : "dark"} mode
      </button>
    </div>
  );
}
```

## Design System Tokens

### Colors

- `--figma-color-bg`: Background colors
- `--figma-color-text`: Text colors
- `--figma-color-border`: Border colors
- `--figma-color-bg-brand`: Brand/primary colors

### Typography

- `--figma-font-family`: Font family (Inter)
- `--figma-font-size-*`: Font sizes (xs, sm, md, lg, xl)

### Spacing

- `--figma-space-*`: Spacing values (xs, sm, md, lg, xl, xxl)

### Border Radius

- `--figma-radius-*`: Border radius values (sm, md, lg, xl)

### Shadows

- `--figma-shadow-*`: Shadow values (small, medium, large)

## Testing

A theme toggle component is included for testing purposes. It appears in the bottom section between the disclaimer and credits.

### Theme Toggle Features:

- **Visual indicator**: Shows current theme (☀️ for light, 🌙 for dark)
- **Hover tooltip**: Displays "Switch to [opposite] theme"
- **Smooth transitions**: 0.2s ease transitions between themes
- **Proper state management**: Uses React state and callbacks for reliable toggling

## Benefits

1. **Consistency**: All UI elements use the same design tokens
2. **Maintainability**: Easy to update colors and styles globally
3. **Accessibility**: Proper contrast ratios in both themes
4. **User Experience**: Smooth transitions and familiar Figma-like appearance
5. **Future-proof**: Easy to add new themes or modify existing ones
6. **Manual Control**: Users can override automatic theme detection

## Browser Support

This implementation uses CSS custom properties, which are supported in all modern browsers. For older browsers, consider adding fallback values.
