# Link Component

A SEO-friendly link component that renders as an `<a>` tag while maintaining the same styling system as the Button component. Perfect for navigation and URL-based actions.

## Features

- ✅ **SEO Optimized**: Renders as `<a>` tag for search engine crawling
- ✅ **Multiple Variants**: primary, secondary, coral, seafoam, lavender, outline, ghost, link  
- ✅ **Size Options**: sm, md, lg
- ✅ **Icon Support**: Left and right icon positioning
- ✅ **External Links**: Built-in handling for external URLs
- ✅ **Accessibility**: Proper semantic HTML and ARIA attributes
- ✅ **Dark Mode**: Automatic theme support
- ✅ **TypeScript**: Full type safety

## Usage

```tsx
import Link from '@/components/Link';

// Basic navigation
<Link href="/about">About Us</Link>

// External link
<Link href="https://example.com" external>Visit Partner</Link>

// Button-styled links
<Link href="/signup" variant="primary">Sign Up</Link>

// With icons
<Link href="/docs" leftIcon={<BookIcon />}>Documentation</Link>
<Link href="/download" rightIcon={<DownloadIcon />}>Download</Link>

// In paragraphs
<p>
  Read more in our <Link href="/guide">complete guide</Link>.
</p>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'coral' \| 'seafoam' \| 'lavender' \| 'outline' \| 'ghost' \| 'link'` | `'link'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Link size |
| `href` | `string` | - | URL destination |
| `external` | `boolean` | `false` | Opens in new tab with security attributes |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `leftIcon` | `ReactNode` | - | Icon before text |
| `rightIcon` | `ReactNode` | - | Icon after text |
| `className` | `string` | `''` | Additional CSS classes |

## When to Use

### ✅ Use Link Component:
- Navigation between pages
- External website links  
- SEO-important links
- URL-based actions
- Call-to-action buttons that navigate

### ⚙️ Use Button Component:
- Form submissions
- Modal triggers
- JavaScript-only actions
- Interactive elements without URLs

## Examples

### Navigation Links
```tsx
<Link href="/products">Shop Now</Link>
<Link href="/contact" variant="outline">Contact Us</Link>
```

### In Content
```tsx
<p>
  Learn more about our <Link href="/services">services</Link> or 
  <Link href="/contact">get in touch</Link>.
</p>
```

### Call-to-Action
```tsx
<Link href="/signup" variant="primary" rightIcon={<ArrowIcon />}>
  Get Started
</Link>
```

## Design System Integration

This component automatically integrates with:
- SCSS color variables and hover states
- Dark mode theme switching  
- Consistent spacing and typography
- Same visual design as Button component
- Proper semantic HTML for accessibility and SEO
