# Next.js Tailwind Style Guide

This style guide showcases a modern design system built with Next.js, TypeScript, and Tailwind CSS. It provides a comprehensive foundation for building consistent, accessible user interfaces.

This document explains how to customize the style guide for your project using your own color palette.

## Overview

Your project uses **Tailwind CSS v4**, which has a different configuration approach than previous versions:
- No `tailwind.config.js` file needed
- Colors are defined directly in CSS using CSS custom properties
- Configuration is done in `src/app/globals.css`

## How to Customize Colors

### 1. Replace the Color Palette

In `src/app/globals.css`, find the `:root` section and replace the color values with your own:

```css
:root {
  /* Your primary color palette */
  --primary-50: #your-lightest-color;
  --primary-100: #your-very-light-color;
  --primary-200: #your-light-color;
  --primary-300: #your-medium-light-color;
  --primary-400: #your-medium-color;
  --primary-500: #your-base-color;        /* Main brand color */
  --primary-600: #your-medium-dark-color;
  --primary-700: #your-dark-color;
  --primary-800: #your-very-dark-color;
  --primary-900: #your-darkest-color;
  --primary-950: #your-almost-black-color;
}
```

### 2. Color Scale Guidelines

For each color in your palette, create a scale from light to dark:
- **50-200**: Very light tints (backgrounds, subtle elements)
- **300-400**: Light tints (borders, muted text)
- **500-600**: Main colors (primary actions, emphasis)
- **700-800**: Dark shades (hover states, secondary text)
- **900-950**: Very dark shades (headings, high contrast)

### 3. Tools for Generating Color Scales

You can use these tools to generate a complete scale from your base colors:
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors Palette Generator](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

### 4. Example: Using Your Own Colors

Let's say your brand colors are:
- Primary: `#6366f1` (Indigo)
- Secondary: `#64748b` (Slate)

You would update the CSS like this:

```css
:root {
  /* Primary - Indigo */
  --primary-50: #eef2ff;
  --primary-100: #e0e7ff;
  --primary-200: #c7d2fe;
  --primary-300: #a5b4fc;
  --primary-400: #818cf8;
  --primary-500: #6366f1;  /* Your main brand color */
  --primary-600: #4f46e5;
  --primary-700: #4338ca;
  --primary-800: #3730a3;
  --primary-900: #312e81;
  --primary-950: #1e1b4b;
}
```

## Using Colors in Components

Once you've defined your colors, you can use them throughout your application:

```tsx
// In your React components
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</button>

<div className="bg-secondary-50 border border-secondary-200">
  Card with secondary colors
</div>
```

## Semantic Colors

Update the semantic colors to match your brand:

```css
:root {
  /* Semantic colors - customize these too */
  --success: #10b981;   /* Green for success states */
  --warning: #f59e0b;   /* Orange for warnings */
  --error: #ef4444;     /* Red for errors */
  --info: #3b82f6;      /* Blue for information */
}
```

## Dark Mode

The CSS already includes dark mode support. When you update your colors, the dark mode will automatically adjust. You can fine-tune dark mode colors in the `@media (prefers-color-scheme: dark)` section.

## Testing Your Colors

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **View your style guide**: Open http://localhost:3000 to see all your colors in action

3. **Test dark mode**: Toggle your system's dark mode to see how colors look in both themes

4. **Check accessibility**: Ensure sufficient contrast between text and background colors

## Adding More Colors

To add additional color palettes (like accent colors), follow the same pattern:

```css
:root {
  /* Accent color palette */
  --accent-50: #fff7ed;
  --accent-500: #f97316;  /* Orange accent */
  --accent-900: #9a3412;
}

@theme inline {
  --color-accent-50: var(--accent-50);
  --color-accent-500: var(--accent-500);
  --color-accent-900: var(--accent-900);
}
```

Then use them in your components:
```tsx
<div className="bg-accent-500 text-white">Accent color</div>
```

## Next Steps

1. **Replace the placeholder colors** in `globals.css` with your brand colors
2. **Update the StyleGuide component** if you want to show different color names
3. **Test thoroughly** in both light and dark modes
4. **Document your color usage** for your team

Your style guide will automatically update to reflect your new colors!
