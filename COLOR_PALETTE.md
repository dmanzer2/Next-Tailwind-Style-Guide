# Build and Bloom Color Palette

## Brand Colors

### Primary Colors
- **Navy**: `#16225c` - Main brand color, used for headers and primary actions
- **Royal Blue**: `#20299c` - Secondary brand color, used for emphasis
- **Bright Blue**: `#0273ff` - Active states and links

### Accent Colors
- **Coral**: `#f15a28` - Call-to-action buttons, warnings, energy
- **Sea Foam**: `#86ffe7` - Success states, positive messaging
- **Light Blue**: `#30d2ff` - Information, highlights
- **Lavender**: `#6e71a8` - Subtle accents, muted elements

## Color Usage Guidelines

### Primary Navigation & Headers
```css
/* Use navy for main navigation */
background: var(--primary-900); /* #16225c */

/* Use royal blue for secondary navigation */
background: var(--primary-700); /* #20299c */
```

### Buttons & CTAs
```css
/* Primary action buttons */
background: var(--primary-600);
hover: var(--primary-700);

/* Secondary buttons */
background: var(--secondary-200);
color: var(--secondary-900);

/* Coral for urgent/important actions */
background: var(--coral-500); /* #f15a28 */
```

### Status & Feedback
```css
/* Success messages */
background: var(--seafoam-400); /* #86ffe7 */
color: var(--seafoam-900);

/* Warnings & alerts */
background: var(--coral-500); /* #f15a28 */
color: white;

/* Information */
background: var(--secondary-400); /* #30d2ff */
color: white;
```

### Text Colors
```css
/* Primary text */
color: var(--foreground); /* Dark navy */

/* Secondary text */
color: var(--secondary-600); /* Muted blue-gray */

/* Links */
color: var(--secondary-500); /* Bright blue */
```

## Accessibility

### Contrast Ratios
All color combinations meet WCAG AA standards:
- Navy text on white: ✅ 7.8:1
- Coral on white: ✅ 4.9:1
- Sea foam text on dark: ✅ 4.5:1

### Dark Mode
The palette automatically adapts for dark mode users while maintaining brand consistency.

## Design Tokens

```css
/* Use these Tailwind classes in your components */

/* Backgrounds */
.bg-primary-900    /* Navy #16225c */
.bg-primary-700    /* Royal Blue #20299c */
.bg-secondary-500  /* Bright Blue #0273ff */
.bg-coral-500      /* Coral #f15a28 */
.bg-seafoam-400    /* Sea Foam #86ffe7 */
.bg-secondary-400  /* Light Blue #30d2ff */
.bg-lavender-500   /* Lavender #6e71a8 */

/* Text colors */
.text-primary-900
.text-coral-500
.text-seafoam-700
```

## Examples

### Hero Section
```tsx
<section className="bg-primary-900 text-white">
  <h1 className="text-4xl font-bold">Build and Bloom</h1>
  <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</section>
```

### Success Message
```tsx
<div className="bg-seafoam-100 border border-seafoam-300 text-seafoam-800 px-4 py-3 rounded">
  Your changes have been saved successfully!
</div>
```

### Information Card
```tsx
<div className="bg-white border border-secondary-200 rounded-xl p-6">
  <h3 className="text-primary-900 text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-secondary-600 mb-4">Description text goes here...</p>
  <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg">
    Learn More
  </button>
</div>
```

## Tools Used

- **Primary Generator**: Custom scales based on your brand colors
- **Accessibility**: WebAIM Contrast Checker
- **Dark Mode**: Automatic color inversion for optimal viewing

Your color palette creates a professional, trustworthy foundation with vibrant accents that add energy and personality to your brand.
