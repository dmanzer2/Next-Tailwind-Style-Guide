# Button Component

A comprehensive, reusable button component that handles all button variations used throughout your design system.

## Features

- ✅ **Multiple Variants**: primary, secondary, coral, seafoam, lavender, outline, ghost, link
- ✅ **Size Options**: sm, md, lg, icon
- ✅ **Icon Support**: Left and right icon positioning
- ✅ **Loading States**: Built-in loading spinner
- ✅ **Accessibility**: Focus management and ARIA attributes
- ✅ **Material Design**: Integrated ripple effects
- ✅ **Dark Mode**: Automatic theme support
- ✅ **TypeScript**: Full type safety

## Usage

```tsx
import Button from '@/components/Button';

// Basic usage
<Button variant="primary">Click me</Button>

// With icons
<Button variant="secondary" leftIcon={<PlusIcon />}>
  Add Item
</Button>

// Loading state
<Button variant="coral" loading>
  Submitting...
</Button>

// Icon only
<Button variant="primary" size="icon" title="Settings">
  <SettingsIcon />
</Button>

// Full width
<Button variant="outline" fullWidth>
  Full Width Button
</Button>

// Link variant (great for inline text)
<Button variant="link">Learn more</Button>

// Link with icons
<Button variant="link" leftIcon={<ExternalLinkIcon />}>
  Visit website
</Button>

<Button variant="link" rightIcon={<ArrowRightIcon />}>
  Continue reading
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'coral' \| 'seafoam' \| 'lavender' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `loading` | `boolean` | `false` | Show loading spinner |
| `leftIcon` | `ReactNode` | - | Icon before text |
| `rightIcon` | `ReactNode` | - | Icon after text |
| `disabled` | `boolean` | `false` | Disable the button |
| `disableRipple` | `boolean` | `false` | Disable ripple effect |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Link Variant with Icons

The `link` variant is perfect for inline text links and supports icons:

```tsx
// In a paragraph
<p>
  Check out our <Button variant="link" rightIcon={<ExternalIcon />}>documentation</Button> 
  for more details.
</p>

// Standalone with icons
<Button variant="link" leftIcon={<DownloadIcon />}>Download file</Button>
<Button variant="link" rightIcon={<ArrowIcon />}>Learn more</Button>

// Call-to-action links
<Button variant="link" leftIcon={<PlayIcon />}>Watch demo</Button>
```

### SEO Considerations

For navigation and SEO purposes, use the `Link` component instead of `Button` variant="link":

```tsx
// ✅ Good for SEO (actual links)
<Link href="/about" variant="link">About Us</Link>

// ⚙️ Good for actions (JavaScript interactions)  
<Button variant="link" onClick={handleAction}>Show details</Button>
```

See the StyleGuide component for comprehensive examples of all button variations and use cases.

## Design System Integration

This component automatically integrates with:
- SCSS color variables and hover states
- Dark mode theme switching
- Material Design ripple effects (via useRipple hook)
- Focus management for accessibility
- Consistent spacing and typography
