# Typography Guide

This guide demonstrates the typography scale and font choices for your design system. The current setup uses two complementary fonts that can be easily replaced with your brand fonts.

## Font Pairing: Inter + Space Grotesk

Our typography system uses a modern pairing of **Inter** and **Space Grotesk** that creates a perfect balance between exceptional readability and distinctive character.

### Primary Fonts

#### Inter (Sans-serif)
- **Use for**: Body text, UI elements, navigation, subheadings, captions
- **Characteristics**: Optimized for legibility, neutral, highly readable
- **Font weight range**: 100 (Thin) to 900 (Black)
- **Special features**: Designed specifically for computer screens, excellent readability at small sizes

#### Space Grotesk (Display/Heading)
- **Use for**: Headlines, hero text, brand elements, attention-grabbing text
- **Characteristics**: Proportional, distinctive, modern geometric with character
- **Font weight range**: 300 (Light) to 700 (Bold)
- **Special features**: Based on Space Mono, optimized for display use, unique personality

## Typography Classes

### Heading Styles
```css
.font-heading {
  font-family: var(--font-space-grotesk);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

### Subheading Styles
```css
.font-subheading {
  font-family: var(--font-inter);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
}
```

### Body Text
```css
.font-body {
  font-family: var(--font-inter);
  font-weight: 400;
  line-height: 1.6;
}
```

### Caption/Labels
```css
.font-caption {
  font-family: var(--font-inter);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
}
```

## Typography Scale

| Size | Tailwind Class | Use Case |
|------|----------------|----------|
| 48px | `text-5xl` | Hero headlines |
| 36px | `text-4xl` | Page titles |
| 30px | `text-3xl` | Section headers |
| 24px | `text-2xl` | Subsection headers |
| 20px | `text-xl` | Card titles |
| 18px | `text-lg` | Large body text |
| 16px | `text-base` | Default body text |
| 14px | `text-sm` | Small text, captions |
| 12px | `text-xs` | Labels, metadata |

## Usage Examples

### Hero Section
```tsx
<section className="text-center py-20">
  <h1 className="font-heading text-6xl font-bold text-primary-900 mb-4">
    Your Brand Name
  </h1>
  <p className="font-body text-xl text-secondary-600 max-w-2xl mx-auto">
    Create beautiful digital experiences with our modern design system
  </p>
</section>
```

### Article Layout
```tsx
<article className="max-w-prose mx-auto">
  <h1 className="font-heading text-4xl font-bold text-primary-900 mb-6">
    Modern Article Title
  </h1>
  <p className="font-body text-lg text-foreground leading-relaxed mb-6">
    Opening paragraph with larger text using Outfit&apos;s excellent readability...
  </p>
  <h2 className="font-subheading text-2xl font-semibold text-primary-800 mb-4">
    Section Heading
  </h2>
  <p className="font-body text-base text-foreground mb-4">
    Regular paragraph text with Outfit&apos;s clean, geometric design...
  </p>
</article>
```

### Card Component
```tsx
<div className="card">
  <p className="font-caption text-coral-600 mb-2">Featured</p>
  <h3 className="font-subheading text-xl font-semibold text-foreground mb-3">
    Card Title
  </h3>
  <p className="font-body text-secondary-600 mb-4">
    Description text that explains the content using Outfit...
  </p>
  <button className="btn-primary">Learn More</button>
</div>
```

## Color Combinations

### Headlines with Colors
- **Primary headlines**: `text-primary-900` (Navy)
- **Secondary headlines**: `text-primary-800` 
- **Accent headlines**: `text-coral-600` (Coral)

### Body Text Colors
- **Primary text**: `text-foreground` (Dark)
- **Secondary text**: `text-secondary-600` (Muted)
- **Caption text**: `text-secondary-500`

## Responsive Typography

### Mobile-First Approach
```tsx
<h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold">
  Responsive Headline
</h1>

<p className="font-body text-base lg:text-lg leading-relaxed">
  Body text that scales appropriately
</p>
```

## Accessibility Guidelines

### Line Height
- **Headlines**: 1.1 for tight, impactful spacing
- **Body text**: 1.6 for optimal readability
- **UI text**: 1.3-1.4 for compact interfaces

### Font Weights
- **Regular (400)**: Default body text
- **Medium (500)**: Emphasis, captions
- **Semibold (600)**: Subheadings, important UI text
- **Bold (700)**: Headlines, strong emphasis
- **Black (900)**: Maximum impact headlines

### Character Spacing
- **Headlines**: Slightly tightened (-0.02em) for better visual cohesion
- **Subheadings**: Minimal tightening (-0.015em)
- **Body text**: Default spacing
- **Captions**: Slightly expanded (0.05em) for better readability at small sizes

### Contrast Requirements
All text meets WCAG AA standards:
- Dark text on light backgrounds: ✅ 7.8:1
- Coral text on white: ✅ 4.9:1
- Secondary text: ✅ 4.5:1

## Best Practices

1. **Hierarchy**: Use MuseoModerno for headlines, Outfit for everything else
2. **Contrast**: Pair distinctive display headlines with clean body text
3. **Spacing**: Maintain consistent line-height and letter-spacing
4. **Performance**: Fonts are loaded with `display: swap` for fast rendering
5. **Consistency**: Use defined classes rather than inline styles
6. **Modern Feel**: Leverage the geometric nature of both fonts for contemporary designs

This typography system creates a modern, distinctive, and highly readable foundation that perfectly complements your navy, coral, and sea foam color palette while maintaining a contemporary, professional aesthetic.
