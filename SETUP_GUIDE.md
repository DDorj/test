# 🚀 Tech Store - Setup & Installation Guide

Complete setup instructions for running the project.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.17 or higher
- **npm**: v9 or higher (comes with Node.js)
- **Git**: For version control

### Check your versions:

```bash
node --version    # Should be v18.17+
npm --version     # Should be v9+
```

---

## 🛠️ Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons
- Zustand (state management)
- next-themes (dark mode)
- And more...

### 2. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure Created

```
Tech-store/
├── src/
│   ├── app/
│   │   ├── (shop)/
│   │   │   ├── layout.tsx          ✅ Created
│   │   │   ├── page.tsx            ✅ Homepage
│   │   │   ├── category/[slug]/    ✅ Category pages
│   │   │   ├── product/[slug]/     ✅ Product details
│   │   │   ├── cart/               ✅ Shopping cart
│   │   │   └── wishlist/           ✅ Wishlist
│   │   ├── layout.tsx              ✅ Root layout
│   │   └── globals.css             ✅ Global styles
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx          ✅ Button component
│   │   │   ├── Input.tsx           ✅ Input component
│   │   │   ├── Badge.tsx           ✅ Badge component
│   │   │   └── Spinner.tsx         ✅ Loading spinner
│   │   ├── molecules/
│   │   │   ├── ProductCard.tsx     ✅ Product card
│   │   │   ├── SearchBar.tsx       ✅ Search bar
│   │   │   ├── PriceDisplay.tsx    ✅ Price display
│   │   │   ├── RatingStars.tsx     ✅ Star rating
│   │   │   ├── QuantitySelector.tsx ✅ Quantity input
│   │   │   └── Breadcrumb.tsx      ✅ Breadcrumb nav
│   │   ├── organisms/
│   │   │   ├── Header.tsx          ✅ Main header
│   │   │   ├── Footer.tsx          ✅ Footer
│   │   │   └── ProductGrid.tsx     ✅ Product grid
│   │   └── providers/
│   │       └── Providers.tsx       ✅ Theme provider
│   ├── lib/
│   │   ├── utils.ts                ✅ Utility functions
│   │   └── data.ts                 ✅ Sample data
│   ├── store/
│   │   ├── cartStore.ts            ✅ Cart state
│   │   └── wishlistStore.ts        ✅ Wishlist state
│   └── types/
│       └── index.ts                ✅ TypeScript types
├── tailwind.config.ts              ✅ Tailwind config
├── next.config.js                  ✅ Next.js config
├── tsconfig.json                   ✅ TypeScript config
├── package.json                    ✅ Dependencies
├── .gitignore                      ✅ Git ignore
├── .eslintrc.json                  ✅ ESLint config
└── .prettierrc                     ✅ Prettier config
```

---

## ✅ Features Implemented

### Core Functionality
- ✅ Homepage with hero banner
- ✅ Product catalog with categories
- ✅ Product detail pages
- ✅ Shopping cart (persisted)
- ✅ Wishlist (persisted)
- ✅ Search bar
- ✅ Dark mode toggle
- ✅ Responsive design (mobile-first)

### Components Created
- ✅ 4 Atom components
- ✅ 6 Molecule components
- ✅ 3 Organism components
- ✅ All fully typed with TypeScript
- ✅ All styled with Tailwind CSS

### State Management
- ✅ Cart store with Zustand
- ✅ Wishlist store with Zustand
- ✅ LocalStorage persistence
- ✅ Type-safe operations

### Design System
- ✅ Complete color palette (light + dark)
- ✅ Typography scale (9 levels)
- ✅ Spacing system (4px base)
- ✅ Component variants
- ✅ Responsive breakpoints

---

## 🎨 Available Pages

1. **Homepage** - [http://localhost:3000](http://localhost:3000)
   - Hero banner
   - Quick categories
   - Featured products
   - Sale products
   - New arrivals
   - Brand showcase

2. **Category** - [http://localhost:3000/category/smartphones](http://localhost:3000/category/smartphones)
   - Product filtering
   - Sort options
   - Product grid

3. **Product Detail** - [http://localhost:3000/product/iphone-15-pro-max](http://localhost:3000/product/iphone-15-pro-max)
   - Image gallery
   - Price display
   - Add to cart
   - Wishlist toggle
   - Product tabs

4. **Cart** - [http://localhost:3000/cart](http://localhost:3000/cart)
   - Cart items
   - Quantity update
   - Order summary
   - Promo code input

5. **Wishlist** - [http://localhost:3000/wishlist](http://localhost:3000/wishlist)
   - Saved products
   - Quick add to cart

---

## 🎯 Testing the Application

### 1. Test Dark Mode
- Click the moon/sun icon in header
- All components should adapt to dark theme

### 2. Test Shopping Cart
- Add products from any page
- View cart with badge count
- Update quantities
- Remove items
- Cart persists on page reload

### 3. Test Wishlist
- Click heart icon on product cards
- View saved items in wishlist
- Remove items
- Wishlist persists on page reload

### 4. Test Responsive Design
- Resize browser window
- Test on mobile view (375px)
- Test on tablet view (768px)
- Test on desktop view (1280px+)

### 5. Test Navigation
- Browse categories
- View product details
- Use breadcrumb navigation
- Search products (UI only)

---

## 🔧 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#YOUR_COLOR',
    // ...
  }
}
```

### Add Sample Products
Edit `src/lib/data.ts`:
```typescript
export const sampleProducts: Product[] = [
  // Add your products here
]
```

### Modify Layout
Edit `src/app/(shop)/layout.tsx` to customize the shop layout.

---

## 📦 Dependencies Installed

```json
{
  "next": "14.1.0",
  "react": "18.2.0",
  "typescript": "5.x",
  "@heroicons/react": "2.1.1",
  "tailwindcss": "3.3.0",
  "zustand": "4.5.0",
  "next-themes": "0.2.1",
  "clsx": "2.1.0",
  "tailwind-merge": "2.2.1"
}
```

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type errors
```bash
# Regenerate types
npm run build
```

### Styling issues
```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css
```

---

## 📚 Next Steps

1. **Add More Pages**
   - Checkout page
   - Order confirmation
   - Account dashboard
   - Login/Register

2. **Connect Backend**
   - Replace sample data with API calls
   - Add authentication
   - Connect payment gateway

3. **Add Features**
   - Product search functionality
   - Product filters
   - Reviews system
   - Order tracking

4. **Optimize**
   - Add image optimization
   - Implement lazy loading
   - Add meta tags for SEO
   - Add analytics

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 💡 Tips

1. **Component Development**
   - Start with atoms, then molecules, then organisms
   - Keep components small and focused
   - Use TypeScript for type safety

2. **State Management**
   - Use Zustand for global state
   - Keep local state when possible
   - Persist important data to localStorage

3. **Styling**
   - Use Tailwind utility classes
   - Follow the design system tokens
   - Maintain consistent spacing

4. **Performance**
   - Use Next/Image for images
   - Implement code splitting
   - Lazy load components when needed

---

## ✅ Checklist

- [x] Project setup complete
- [x] All dependencies installed
- [x] Core components created
- [x] Pages implemented
- [x] State management configured
- [x] Dark mode working
- [x] Responsive design implemented
- [ ] Backend integration (future)
- [ ] Authentication (future)
- [ ] Payment gateway (future)

---

**Status**: ✅ Ready for Development  
**Version**: 1.0.0  
**Last Updated**: November 24, 2025

---

## 🎉 You're All Set!

Run `npm run dev` and start building!

For questions or issues, refer to the documentation files in the project root.

