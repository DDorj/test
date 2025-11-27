# 🎨 Tech Store — UI/UX Design System
## Modern E-commerce Platform Design Documentation

**Version:** 1.0.0  
**Date:** November 24, 2025  
**Platform:** Next.js (App Router) + Tailwind CSS  
**Style:** Premium, Minimalistic, Mobile-First  

---

## 📋 Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Grid System](#spacing--grid-system)
5. [Component Library](#component-library)
6. [Page Structures](#page-structures)
7. [User Flows](#user-flows)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Animations & Transitions](#animations--transitions)
10. [Accessibility Guidelines](#accessibility-guidelines)

---

## 🎯 Design Philosophy

### Core Principles
- **Premium Tech Aesthetic**: Apple/Samsung-inspired clean design
- **Mobile-First**: 70% of users shop on mobile
- **Performance-Focused**: Fast loading, optimized images
- **Conversion-Optimized**: Clear CTAs, minimal friction
- **Trust & Credibility**: Professional, secure feeling
- **Localized UX**: Mongolian language & cultural considerations

### Brand Values
- **Modern**: Contemporary tech-forward design
- **Trustworthy**: Established, reliable
- **Accessible**: Easy for all users
- **Premium**: High-quality products and experience

---

## 🎨 Color System

### Light Mode Palette

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      // Primary - Brand Colors
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',  // Main brand color
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      
      // Secondary - Accent
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        800: '#86198f',
        900: '#701a75',
      },
      
      // Neutral - Light Mode
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      
      // Success
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
      },
      
      // Warning
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
      },
      
      // Error
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
      },
      
      // Special - Sale/Discount
      sale: {
        50: '#fff1f2',
        100: '#ffe4e6',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
      },
    }
  }
}
```

### Dark Mode Palette

```javascript
// Dark mode color overrides
colors: {
  dark: {
    // Background layers
    bg: {
      primary: '#0a0a0a',      // Main background
      secondary: '#171717',    // Cards, elevated surfaces
      tertiary: '#262626',     // Hover states, borders
      elevated: '#404040',     // Modals, dropdowns
    },
    
    // Text colors
    text: {
      primary: '#fafafa',      // Main text
      secondary: '#d4d4d4',    // Secondary text
      muted: '#a3a3a3',        // Muted text
      disabled: '#525252',     // Disabled text
    },
    
    // Border colors
    border: {
      default: '#262626',
      hover: '#404040',
      focus: '#525252',
    },
    
    // Primary colors adjusted for dark mode
    primary: {
      DEFAULT: '#38bdf8',
      hover: '#0ea5e9',
      active: '#0284c7',
    },
  }
}
```

### Semantic Color Usage

| Purpose | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Page Background | `neutral-50` | `dark-bg-primary` |
| Card Background | `white` | `dark-bg-secondary` |
| Primary CTA | `primary-600` | `primary-DEFAULT` |
| Secondary CTA | `neutral-200` | `dark-bg-tertiary` |
| Text Primary | `neutral-900` | `dark-text-primary` |
| Text Secondary | `neutral-600` | `dark-text-secondary` |
| Border Default | `neutral-200` | `dark-border-default` |
| Success State | `success-600` | `success-500` |
| Error State | `error-600` | `error-500` |
| Sale Badge | `sale-600` | `sale-500` |

---

## ✍️ Typography

### Font Stack

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
  display: ['SF Pro Display', 'Inter', 'sans-serif'],
  mono: ['SF Mono', 'Monaco', 'monospace'],
}
```

### Type Scale

```javascript
fontSize: {
  // Display (Hero sections)
  'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],  // 72px
  'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],  // 60px
  'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],     // 48px
  
  // Headings
  'h1': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],  // 36px
  'h2': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],  // 30px
  'h3': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],                             // 24px
  'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],                             // 20px
  'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],                            // 18px
  
  // Body
  'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],     // 18px
  'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],            // 16px
  'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],      // 14px
  'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],       // 12px
  
  // Labels
  'label-lg': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
  'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
  'label-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
}
```

### Typography Usage Guidelines

- **Hero Titles**: `display-lg` to `display-2xl`
- **Page Titles**: `h1`
- **Section Titles**: `h2` or `h3`
- **Card Titles**: `h4` or `h5`
- **Body Text**: `body` (default 16px)
- **Captions**: `body-sm` or `body-xs`
- **Buttons**: `label` or `label-lg`
- **Form Labels**: `label-sm`

---

## 📐 Spacing & Grid System

### Spacing Scale

```javascript
spacing: {
  '0': '0',
  'px': '1px',
  '0.5': '0.125rem',  // 2px
  '1': '0.25rem',     // 4px
  '1.5': '0.375rem',  // 6px
  '2': '0.5rem',      // 8px
  '2.5': '0.625rem',  // 10px
  '3': '0.75rem',     // 12px
  '3.5': '0.875rem',  // 14px
  '4': '1rem',        // 16px
  '5': '1.25rem',     // 20px
  '6': '1.5rem',      // 24px
  '7': '1.75rem',     // 28px
  '8': '2rem',        // 32px
  '9': '2.25rem',     // 36px
  '10': '2.5rem',     // 40px
  '11': '2.75rem',    // 44px
  '12': '3rem',       // 48px
  '14': '3.5rem',     // 56px
  '16': '4rem',       // 64px
  '20': '5rem',       // 80px
  '24': '6rem',       // 96px
  '32': '8rem',       // 128px
}
```

### Container Widths

```javascript
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',    // 16px mobile
    sm: '1.5rem',       // 24px tablet
    lg: '2rem',         // 32px desktop
    xl: '2.5rem',       // 40px large desktop
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1440px',
  },
}
```

### Grid System

- **Mobile (< 640px)**: 4 columns, 16px gutter
- **Tablet (640px - 1023px)**: 8 columns, 20px gutter
- **Desktop (≥ 1024px)**: 12 columns, 24px gutter

### Component Spacing Standards

| Component | Padding | Gap |
|-----------|---------|-----|
| Container | `px-4 lg:px-8` | - |
| Section | `py-12 lg:py-20` | - |
| Card | `p-4 lg:p-6` | - |
| Button | `px-6 py-3` | - |
| Input | `px-4 py-2.5` | - |
| Product Grid | - | `gap-4 lg:gap-6` |
| Form Fields | - | `gap-4` |

---

## 🧱 Component Library

See [COMPONENTS.md](./COMPONENTS.md) for detailed component specifications.

### Component Categories

1. **Atoms** (Basic building blocks)
   - Button
   - Input
   - Label
   - Badge
   - Icon
   - Avatar
   - Spinner

2. **Molecules** (Simple combinations)
   - SearchBar
   - ProductCard
   - PriceDisplay
   - RatingStars
   - QuantitySelector
   - FilterChip
   - Breadcrumb

3. **Organisms** (Complex components)
   - Header
   - Footer
   - ProductGrid
   - CartSidebar
   - CategoryMenu
   - ProductGallery
   - CheckoutForm

4. **Templates** (Page layouts)
   - HomeTemplate
   - ProductTemplate
   - CategoryTemplate
   - CheckoutTemplate

---

## 📄 Page Structures

See [PAGE_STRUCTURES.md](./PAGE_STRUCTURES.md) for detailed page layouts.

### Page Inventory

1. **Homepage** (`/`)
2. **Category Page** (`/category/[slug]`)
3. **Product Detail** (`/product/[slug]`)
4. **Search Results** (`/search`)
5. **Cart** (`/cart`)
6. **Checkout** (`/checkout`)
7. **Order Confirmation** (`/order/[id]`)
8. **Account Dashboard** (`/account`)
9. **Login/Register** (`/auth`)
10. **Wishlist** (`/wishlist`)
11. **About** (`/about`)
12. **Contact** (`/contact`)

---

## 🔄 User Flows

See [USER_FLOWS.md](./USER_FLOWS.md) for detailed flow diagrams.

### Critical Paths

1. **Product Discovery → Purchase**
   ```
   Homepage → Category → Product Detail → Add to Cart → Checkout → Payment → Confirmation
   ```

2. **Quick Purchase (Guest)**
   ```
   Product → Add to Cart → Guest Checkout → Delivery Info → Payment → Order Complete
   ```

3. **Account Registration**
   ```
   Any Page → Account Icon → Register → Email Verification → Profile Setup
   ```

---

## 📱 Responsive Breakpoints

```javascript
screens: {
  'xs': '375px',    // Small phones
  'sm': '640px',    // Large phones
  'md': '768px',    // Tablets
  'lg': '1024px',   // Laptops
  'xl': '1280px',   // Desktops
  '2xl': '1440px',  // Large desktops
}
```

### Responsive Design Strategy

| Breakpoint | Layout | Navigation | Product Grid | Typography |
|------------|--------|------------|--------------|------------|
| xs (375px) | Stack | Bottom Nav | 2 columns | Scale: 0.875 |
| sm (640px) | Stack | Top Nav | 2 columns | Scale: 0.925 |
| md (768px) | Flex | Top Nav | 3 columns | Scale: 1.0 |
| lg (1024px) | Grid | Top Nav + Mega | 4 columns | Scale: 1.0 |
| xl (1280px+) | Grid | Top Nav + Mega | 4-5 columns | Scale: 1.0 |

---

## ✨ Animations & Transitions

### Timing Functions

```javascript
transitionTimingFunction: {
  'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'ease-in-smooth': 'cubic-bezier(0.4, 0, 1, 1)',
  'ease-out-smooth': 'cubic-bezier(0, 0, 0.2, 1)',
  'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
}
```

### Duration Scale

```javascript
transitionDuration: {
  '75': '75ms',     // Instant
  '100': '100ms',   // Very fast
  '150': '150ms',   // Fast (hover states)
  '200': '200ms',   // Default
  '300': '300ms',   // Medium (modals, dropdowns)
  '500': '500ms',   // Slow (page transitions)
}
```

### Animation Guidelines

| Interaction | Duration | Timing | Property |
|-------------|----------|--------|----------|
| Button Hover | 150ms | ease-smooth | background, transform |
| Card Hover | 200ms | ease-smooth | shadow, transform |
| Modal Enter | 300ms | ease-out-smooth | opacity, scale |
| Dropdown | 200ms | ease-smooth | opacity, translateY |
| Page Transition | 300ms | ease-smooth | opacity |
| Loading Spinner | 800ms | linear (infinite) | rotate |
| Skeleton Pulse | 1500ms | ease-in-out (infinite) | opacity |
| Toast Notification | 300ms | bounce-subtle | translateY, opacity |

### Micro-interactions

```css
/* Button Press */
.btn:active {
  @apply scale-95 transition-transform duration-75;
}

/* Card Hover Lift */
.card:hover {
  @apply -translate-y-1 shadow-lg transition-all duration-200;
}

/* Input Focus */
.input:focus {
  @apply ring-2 ring-primary-500 ring-offset-2 transition-shadow duration-150;
}

/* Image Load Fade */
.img-fade {
  @apply animate-[fadeIn_0.3s_ease-in];
}
```

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text (≥18px)**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 contrast with adjacent colors

#### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators (ring-2 ring-primary-500)
- Logical tab order (tabIndex management)
- Skip to main content link

#### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels for icons and interactive elements
- Alt text for all images
- Live regions for dynamic content (aria-live)

#### Forms
- Proper label associations
- Error messages with aria-invalid and aria-describedby
- Required field indicators
- Clear error states

#### Responsive & Mobile
- Touch targets minimum 44x44px
- No horizontal scrolling
- Text reflow at 200% zoom
- Orientation agnostic

---

## 🎨 Design Tokens Export

### For Developers

```javascript
// design-tokens.js
export const tokens = {
  colors: { /* as defined above */ },
  spacing: { /* as defined above */ },
  typography: { /* as defined above */ },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },
  borderRadius: {
    sm: '0.25rem',   // 4px
    DEFAULT: '0.5rem',  // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    full: '9999px',
  },
};
```

---

## 📦 Design Assets & Resources

### Required Fonts
- **Inter**: [Google Fonts](https://fonts.google.com/specimen/Inter)
- **SF Pro Display**: Apple System Font (fallback)

### Icon Library
- **Heroicons**: Primary icon set (outline & solid)
- **Custom Icons**: Brand logos (Apple, Samsung, etc.)

### Image Specifications
- **Product Images**: 
  - Thumbnail: 300x300px (WebP)
  - Card: 600x600px (WebP)
  - Detail: 1200x1200px (WebP)
  - Zoom: 2400x2400px (WebP)
- **Hero Banners**: 
  - Mobile: 375x400px (WebP)
  - Desktop: 1440x600px (WebP)
- **Category Images**: 400x400px (WebP)

### Loading States
- Skeleton screens for all content areas
- Shimmer animation effect
- Lazy loading for images (below fold)
- Progressive image loading

---

## 🚀 Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js with App Router
- [ ] Configure Tailwind with design tokens
- [ ] Install dependencies (Heroicons, next/font, etc.)
- [ ] Create base layout components
- [ ] Implement dark mode toggle
- [ ] Set up typography components

### Phase 2: Atomic Components (Week 2)
- [ ] Build all atom components
- [ ] Create Storybook stories
- [ ] Test dark/light mode
- [ ] Ensure accessibility
- [ ] Mobile responsiveness

### Phase 3: Molecules & Organisms (Week 3)
- [ ] Product card components
- [ ] Navigation components
- [ ] Form components
- [ ] Cart components
- [ ] Filter components

### Phase 4: Pages (Week 4)
- [ ] Homepage
- [ ] Category page
- [ ] Product detail page
- [ ] Cart & checkout
- [ ] Account pages

### Phase 5: Polish & Optimization (Week 5)
- [ ] Animations & transitions
- [ ] Loading states
- [ ] Error states
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Final accessibility audit

---

**Document Version**: 1.0.0  
**Last Updated**: November 24, 2025  
**Maintained By**: Tech Store Development Team

