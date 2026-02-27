# Theme Customization Guide

## Overview

This IT consultant website is built with a fully customizable theme system using SCSS variables. All design tokens (colors, spacing, typography, etc.) are centralized in `/src/styles/variables.scss`, making it easy to rebrand and customize the entire website.

## How to Customize the Theme

### 1. Color Customization

Open `/src/styles/variables.scss` and modify the color variables:

```scss
// PRIMARY COLORS - Main brand colors
$primary-color: #6366f1;      // Main brand color
$primary-dark: #4f46e5;        // Darker shade for hover states
$primary-light: #818cf8;       // Lighter shade for accents
$primary-lighter: #a5b4fc;     // Very light shade

// SECONDARY COLORS - Complementary colors
$secondary-color: #0ea5e9;     // Secondary brand color
$secondary-dark: #0284c7;      // Darker secondary
$secondary-light: #38bdf8;     // Lighter secondary

// ACCENT COLORS - For call-to-action elements
$accent-color: #f59e0b;        // Accent/CTA color
$accent-dark: #d97706;         // Darker accent
$accent-light: #fbbf24;        // Lighter accent
```

### 2. Layout & Spacing

Adjust spacing and layout constraints:

```scss
// SPACING - Consistent spacing throughout
$spacing-xs: 0.5rem;     // 8px
$spacing-sm: 1rem;       // 16px
$spacing-md: 1.5rem;     // 24px
$spacing-lg: 2rem;       // 32px
$spacing-xl: 3rem;       // 48px
$spacing-2xl: 4rem;      // 64px
$spacing-3xl: 6rem;      // 96px
$spacing-4xl: 8rem;      // 128px

// CONTAINER - Max width of content
$container-max-width: 1280px;
$container-padding: $spacing-md;
```

### 3. Typography

Customize fonts and text styles:

```scss
// FONTS
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
$font-family-heading: $font-family-base;
```

To add custom fonts:
1. Import font in `/src/styles/fonts.css`
2. Update the font variables in `variables.scss`

### 4. Border Radius

Control the roundness of elements:

```scss
$radius-sm: 0.375rem;    // Small radius
$radius-md: 0.5rem;      // Medium radius
$radius-lg: 0.75rem;     // Large radius
$radius-xl: 1rem;        // Extra large
$radius-2xl: 1.5rem;     // 2X large
$radius-full: 9999px;    // Fully rounded (pills/circles)
```

### 5. Shadows

Adjust shadow depths:

```scss
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)...;
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)...;
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)...;
$shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### 6. Transitions

Control animation speeds:

```scss
$transition-fast: 0.15s ease-in-out;    // Quick transitions
$transition-normal: 0.3s ease-in-out;   // Standard speed
$transition-slow: 0.5s ease-in-out;     // Slower animations
```

### 7. Gradients

Pre-defined gradient combinations:

```scss
$gradient-primary: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
$gradient-secondary: linear-gradient(135deg, $secondary-color 0%, $primary-color 100%);
$gradient-accent: linear-gradient(135deg, $accent-color 0%, $primary-color 100%);
$gradient-dark: linear-gradient(135deg, $dark-bg 0%, $dark-bg-secondary 100%);
```

## Quick Theme Examples

### Example 1: Blue Tech Theme (Default)
```scss
$primary-color: #6366f1;
$secondary-color: #0ea5e9;
$accent-color: #f59e0b;
```

### Example 2: Green Eco Theme
```scss
$primary-color: #10b981;
$secondary-color: #14b8a6;
$accent-color: #f59e0b;
```

### Example 3: Purple Creative Theme
```scss
$primary-color: #8b5cf6;
$secondary-color: #ec4899;
$accent-color: #f59e0b;
```

### Example 4: Corporate Dark Theme
```scss
$primary-color: #3b82f6;
$secondary-color: #06b6d4;
$accent-color: #fbbf24;
```

## Advanced Customization

### Modifying Specific Sections

All section styles are in `/src/styles/main.scss`. Each section has its own class:

- `.header` - Navigation header
- `.hero` - Hero section
- `.services` - Services section
- `.about` - About section
- `.portfolio` - Portfolio section
- `.testimonials` - Testimonials section
- `.contact` - Contact section
- `.footer` - Footer

### Responsive Breakpoints

Adjust responsive behavior:

```scss
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

Use in your styles:
```scss
@media (max-width: $breakpoint-md) {
  // Mobile styles
}
```

## Best Practices

1. **Always modify variables.scss first** - Don't hardcode values in components
2. **Test responsive design** - Check all breakpoints after changes
3. **Maintain color contrast** - Ensure accessibility with WCAG AA standards
4. **Use semantic naming** - Keep variable names meaningful
5. **Document changes** - Comment your custom modifications

## Color Palette Tools

Use these tools to generate harmonious color schemes:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Adobe Color](https://color.adobe.com) - Color wheel and harmony rules
- [Paletton](https://paletton.com) - Advanced color scheme designer

## Need Help?

If you need assistance with theme customization:
1. Check the variable definitions in `/src/styles/variables.scss`
2. Review component styles in `/src/styles/main.scss`
3. Test changes incrementally to isolate issues
