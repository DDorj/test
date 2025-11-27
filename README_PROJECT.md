# Ayanga Store - Next.js E-commerce Platform

A modern, premium e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Features

- ✅ Modern UI/UX with premium design
- ✅ Light & Dark mode support
- ✅ Fully responsive (mobile-first)
- ✅ Product catalog with categories
- ✅ Product detail pages
- ✅ Shopping cart with local storage
- ✅ Wishlist functionality
- ✅ Search functionality
- ✅ State management with Zustand
- ✅ Type-safe with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Heroicons for icons

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Heroicons
- **Theme**: next-themes
- **Image Optimization**: Next/Image

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (shop)/            # Shop layout group
│   │   ├── page.tsx       # Homepage
│   │   ├── category/      # Category pages
│   │   ├── product/       # Product detail pages
│   │   ├── cart/          # Cart page
│   │   └── wishlist/      # Wishlist page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── atoms/             # Basic components
│   ├── molecules/         # Composite components
│   ├── organisms/         # Complex sections
│   └── providers/         # Context providers
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   └── data.ts           # Sample data
├── store/                 # Zustand stores
│   ├── cartStore.ts      # Cart state
│   └── wishlistStore.ts  # Wishlist state
└── types/                 # TypeScript types
    └── index.ts          # Type definitions
```

## 🎨 Design System

The project follows a complete design system with:

- **Color Palette**: Primary, Secondary, Neutral, Success, Warning, Error
- **Typography**: Inter font family with 9 size levels
- **Spacing**: 4px base unit with consistent scale
- **Components**: Atomic design methodology (Atoms → Molecules → Organisms)
- **Responsive**: Mobile-first approach with 6 breakpoints

## 🧱 Key Components

### Atoms
- Button (Primary, Secondary, Ghost variants)
- Input (Text, Search, with validation)
- Badge (Status, Discount, New, Category)
- Spinner (Loading indicator)

### Molecules
- ProductCard (Complete product display)
- SearchBar (Search with suggestions)
- PriceDisplay (Price with discount)
- RatingStars (5-star rating display)
- QuantitySelector (Quantity input)
- Breadcrumb (Navigation breadcrumb)

### Organisms
- Header (Navigation with cart, wishlist, account)
- Footer (Links, newsletter, social)
- ProductGrid (Responsive product layout)

## 📱 Pages

1. **Homepage** (`/`) - Hero banner, categories, featured products
2. **Category** (`/category/[slug]`) - Filtered products with sidebar
3. **Product Detail** (`/product/[slug]`) - Full product information
4. **Cart** (`/cart`) - Shopping cart with checkout
5. **Wishlist** (`/wishlist`) - Saved products

## 🎯 State Management

### Cart Store
- Add/remove items
- Update quantities
- Calculate totals
- Persisted to localStorage

### Wishlist Store
- Add/remove products
- Check if product is in wishlist
- Persisted to localStorage

## 🌙 Dark Mode

Dark mode is fully supported using `next-themes`. Toggle between light and dark mode using the moon/sun icon in the header.

## 📝 Sample Data

The application includes sample products, categories, and brands in `src/lib/data.ts`. Replace with your actual data or connect to an API.

## 🔧 Configuration

### Tailwind Config
Complete design system tokens are configured in `tailwind.config.ts` including:
- Custom colors
- Typography scale
- Spacing system
- Border radius
- Box shadows
- Transitions

### Next.js Config
Image optimization and build settings in `next.config.js`.

## 📖 Documentation

Detailed documentation is available in the project root:
- `DESIGN_SYSTEM.md` - Complete design system
- `COMPONENTS.md` - Component specifications
- `PAGE_STRUCTURES.md` - Page layouts
- `USER_FLOWS.md` - User journeys
- `IMPLEMENTATION_GUIDE.md` - Development guide

## 🚧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## 📄 License

This project is proprietary to Ayanga Store.

## 🤝 Contributing

This is a private project. Please contact the development team for contribution guidelines.

---

**Version**: 1.0.0  
**Last Updated**: November 24, 2025

