# Next.js Tailwind Style Guide

A comprehensive design system and style guide built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS. Perfect for starting any new Next.js project with a professional design system.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Style Guide

This project includes a comprehensive style guide that showcases your design system:

- **Color palettes** (primary, secondary, semantic colors)
- **Typography scale** (headings, body text, etc.)
- **Component library** (buttons, forms, cards)
- **Spacing and layout** guidelines

### Customizing Your Brand

1. **Edit `src/app/globals.css`** to replace the color values with your brand colors
2. **Update the typography** in `TYPOGRAPHY_GUIDE.md` to match your brand fonts
3. **Customize components** in `src/components/` to match your design needs
4. **View the style guide** at http://localhost:3000 to see your changes
5. **Read `STYLE_GUIDE.md`** for detailed customization instructions

### Quick Start Customization

#### Colors
The color system is defined in `src/app/globals.css`. Replace the CSS custom properties with your brand colors:

```css
:root {
  --primary-50: #eff6ff;   /* Lightest primary */
  --primary-900: #1e3a8a;  /* Darkest primary */
  /* ... update all color values ... */
}
```

#### Typography
Update fonts in `src/app/layout.tsx`:

```tsx
import { YourFont, YourSecondFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

#### Component Styling
All components use Tailwind classes that reference your color variables, so updating the CSS variables automatically updates all components.

The style guide uses **Tailwind CSS v4**, which configures colors directly in CSS without a traditional config file.

## What's Included

This template provides:

- **🎨 Complete Design System**: Colors, typography, spacing, and components
- **🌙 Dark Mode Support**: Built-in theme switching with persistent preferences
- **♿ Accessibility**: WCAG compliant components with proper ARIA labels
- **📱 Responsive Design**: Mobile-first approach with responsive components
- **⚡ Performance**: Optimized fonts, images, and bundle size
- **🔧 Developer Experience**: TypeScript, ESLint, and hot reload
- **📚 Documentation**: Comprehensive guides for colors, typography, and components

## Project Structure

```
src/
├── app/                 # Next.js 15 App Router
│   ├── layout.tsx      # Root layout with fonts and theme
│   ├── page.tsx        # Homepage with style guide
│   └── globals.css     # Global styles and CSS variables
├── components/         # Reusable UI components
│   ├── Button/         # Button component with variants
│   ├── Link/           # Link component with styling
│   ├── DropdownButton/ # Dropdown component
│   └── StyleGuide.tsx  # Interactive style guide
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark mode theme provider
└── hooks/              # Custom React hooks
    └── useRipple.ts    # Material design ripple effect
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
