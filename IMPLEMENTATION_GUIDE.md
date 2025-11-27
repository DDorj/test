# 🛠️ Implementation Guide — Tech Store

Step-by-step development guide with Next.js App Router & Tailwind CSS.

---

## 📑 Table of Contents

1. [Project Setup](#1-project-setup)
2. [Folder Structure](#2-folder-structure)
3. [Configuration Files](#3-configuration-files)
4. [Database Schema](#4-database-schema)
5. [API Routes](#5-api-routes)
6. [Component Implementation Order](#6-component-implementation-order)
7. [State Management](#7-state-management)
8. [Performance Optimization](#8-performance-optimization)
9. [SEO Implementation](#9-seo-implementation)
10. [Testing Strategy](#10-testing-strategy)

---

## 1. Project Setup

### Step 1: Create Next.js Project

```bash
# Create new Next.js app with TypeScript
npx create-next-app@latest Tech-store --typescript --tailwind --app --src-dir

# Navigate to project
cd Tech-store
```

### Step 2: Install Dependencies

```bash
# Core dependencies
npm install @heroicons/react
npm install clsx tailwind-merge
npm install next-themes
npm install zustand
npm install react-hook-form
npm install zod
npm install @tanstack/react-query

# Image optimization
npm install sharp

# Forms & Validation
npm install @hookform/resolvers

# Date handling
npm install date-fns

# Utilities
npm install uuid

# Development dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D prettier prettier-plugin-tailwindcss
npm install -D eslint eslint-config-next
```

### Step 3: Install Optional Packages

```bash
# Animation library
npm install framer-motion

# Carousel/Slider
npm install swiper

# Rich text editor (for admin)
npm install @tiptap/react @tiptap/starter-kit

# Payment integrations
npm install @stripe/stripe-js @stripe/react-stripe-js

# Analytics
npm install @vercel/analytics
```

---

## 2. Folder Structure

```
Tech-store/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── brands/
│   │   ├── banners/
│   │   └── placeholders/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── (shop)/                    # Shop layout group
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx               # Homepage
│   │   │   ├── category/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── product/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── search/
│   │   │   │   └── page.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   ├── wishlist/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (checkout)/                # Checkout layout group
│   │   │   ├── layout.tsx
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx
│   │   │   └── order/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (account)/                 # Account layout group
│   │   │   ├── layout.tsx
│   │   │   ├── account/
│   │   │   │   ├── page.tsx           # Dashboard
│   │   │   │   ├── orders/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── wishlist/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx
│   │   │   └── auth/
│   │   │       ├── login/
│   │   │       │   └── page.tsx
│   │   │       └── register/
│   │   │           └── page.tsx
│   │   │
│   │   ├── api/                       # API Routes
│   │   │   ├── products/
│   │   │   │   ├── route.ts
│   │   │   │   ├── [id]/
│   │   │   │   │   └── route.ts
│   │   │   │   └── search/
│   │   │   │       └── route.ts
│   │   │   ├── categories/
│   │   │   │   └── route.ts
│   │   │   ├── cart/
│   │   │   │   └── route.ts
│   │   │   ├── checkout/
│   │   │   │   └── route.ts
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   └── register/
│   │   │   │       └── route.ts
│   │   │   └── webhooks/
│   │   │       └── stripe/
│   │   │           └── route.ts
│   │   │
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Spinner.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Radio.tsx
│   │   │   └── Avatar.tsx
│   │   │
│   │   ├── molecules/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── PriceDisplay.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   ├── QuantitySelector.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── FilterChip.tsx
│   │   │
│   │   ├── organisms/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── CartSidebar.tsx
│   │   │   ├── FilterSidebar.tsx
│   │   │   ├── CategoryMenu.tsx
│   │   │   └── CheckoutForm.tsx
│   │   │
│   │   ├── templates/
│   │   │   ├── HomeTemplate.tsx
│   │   │   ├── ProductTemplate.tsx
│   │   │   ├── CategoryTemplate.tsx
│   │   │   └── CheckoutTemplate.tsx
│   │   │
│   │   └── ui/                        # Shared UI components
│   │       ├── Modal.tsx
│   │       ├── Drawer.tsx
│   │       ├── Toast.tsx
│   │       ├── Dropdown.tsx
│   │       ├── Tabs.tsx
│   │       └── Skeleton.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                   # Utility functions
│   │   ├── cn.ts                      # classnames utility
│   │   ├── api.ts                     # API client
│   │   ├── validations.ts             # Zod schemas
│   │   └── constants.ts               # App constants
│   │
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   ├── useSearch.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── store/
│   │   ├── cartStore.ts               # Zustand store for cart
│   │   ├── wishlistStore.ts
│   │   ├── authStore.ts
│   │   └── uiStore.ts                 # UI state (modals, sidebars)
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   └── styles/
│       └── globals.css
│
├── .env.local
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. Configuration Files

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
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
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        sale: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
        dark: {
          bg: {
            primary: '#0a0a0a',
            secondary: '#171717',
            tertiary: '#262626',
            elevated: '#404040',
          },
          text: {
            primary: '#fafafa',
            secondary: '#d4d4d4',
            muted: '#a3a3a3',
            disabled: '#525252',
          },
          border: {
            default: '#262626',
            hover: '#404040',
            focus: '#525252',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label-lg': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'label-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-smooth': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out-smooth': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'Techstore.mn', 'cdn.Techstore.mn'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
```

### .env.example

```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Tech Store

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/Tech_store

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Payment
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@Techstore.mn
SMTP_PASSWORD=your-password

# Storage (if using S3/CloudFlare)
AWS_S3_BUCKET=Tech-store-images
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your-pixel-id

# API Keys
GOOGLE_MAPS_API_KEY=your-maps-key
```

### .prettierrc

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## 4. Database Schema

### PostgreSQL Schema (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User & Authentication
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  phone         String?
  password      String
  emailVerified DateTime?
  image         String?
  role          Role      @default(CUSTOMER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  addresses     Address[]
  orders        Order[]
  reviews       Review[]
  wishlist      WishlistItem[]
  cart          CartItem[]
}

enum Role {
  CUSTOMER
  ADMIN
  SUPER_ADMIN
}

model Address {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  fullName     String
  phone        String
  province     String
  city         String
  district     String
  street       String
  building     String?
  postalCode   String?
  isDefault    Boolean  @default(false)
  
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  orders       Order[]
}

// Products
model Product {
  id              String   @id @default(cuid())
  slug            String   @unique
  name            String
  nameEn          String?
  description     String
  descriptionEn   String?
  
  sku             String   @unique
  barcode         String?
  
  price           Decimal  @db.Decimal(10, 2)
  compareAtPrice  Decimal? @db.Decimal(10, 2)
  costPrice       Decimal? @db.Decimal(10, 2)
  
  stock           Int      @default(0)
  lowStockAlert   Int      @default(5)
  
  categoryId      String
  category        Category @relation(fields: [categoryId], references: [id])
  
  brandId         String?
  brand           Brand?   @relation(fields: [brandId], references: [id])
  
  images          ProductImage[]
  variants        ProductVariant[]
  specifications  ProductSpec[]
  reviews         Review[]
  
  featured        Boolean  @default(false)
  onSale          Boolean  @default(false)
  isNew           Boolean  @default(false)
  status          ProductStatus @default(DRAFT)
  
  views           Int      @default(0)
  salesCount      Int      @default(0)
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  publishedAt     DateTime?

  cartItems       CartItem[]
  wishlistItems   WishlistItem[]
  orderItems      OrderItem[]
}

enum ProductStatus {
  DRAFT
  ACTIVE
  ARCHIVED
  OUT_OF_STOCK
}

model ProductImage {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  url       String
  alt       String?
  order     Int      @default(0)
  
  createdAt DateTime @default(now())
}

model ProductVariant {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  name      String   // e.g., "Color", "Storage"
  value     String   // e.g., "Black", "256GB"
  price     Decimal? @db.Decimal(10, 2)
  sku       String?  @unique
  stock     Int      @default(0)
  
  createdAt DateTime @default(now())
}

model ProductSpec {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  name      String   // e.g., "Screen Size"
  value     String   // e.g., "6.7 inches"
  group     String?  // e.g., "Display", "Performance"
  
  createdAt DateTime @default(now())
}

model Category {
  id          String     @id @default(cuid())
  slug        String     @unique
  name        String
  nameEn      String?
  description String?
  image       String?
  icon        String?
  
  parentId    String?
  parent      Category?  @relation("CategoryTree", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryTree")
  
  products    Product[]
  
  order       Int        @default(0)
  featured    Boolean    @default(false)
  
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

model Brand {
  id          String    @id @default(cuid())
  slug        String    @unique
  name        String
  logo        String?
  description String?
  
  products    Product[]
  
  order       Int       @default(0)
  featured    Boolean   @default(false)
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

// Cart & Wishlist
model CartItem {
  id        String   @id @default(cuid())
  userId    String?
  user      User?    @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  quantity  Int      @default(1)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model WishlistItem {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  
  @@unique([userId, productId])
}

// Orders
model Order {
  id              String      @id @default(cuid())
  orderNumber     String      @unique
  
  userId          String?
  user            User?       @relation(fields: [userId], references: [id])
  
  email           String
  phone           String
  
  shippingMethod  ShippingMethod
  addressId       String?
  address         Address?    @relation(fields: [addressId], references: [id])
  
  branchId        String?
  
  items           OrderItem[]
  
  subtotal        Decimal     @db.Decimal(10, 2)
  shipping        Decimal     @db.Decimal(10, 2)
  discount        Decimal     @default(0) @db.Decimal(10, 2)
  total           Decimal     @db.Decimal(10, 2)
  
  paymentMethod   PaymentMethod
  paymentStatus   PaymentStatus @default(PENDING)
  
  orderStatus     OrderStatus @default(PENDING)
  
  notes           String?
  
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  
  payments        Payment[]
}

enum ShippingMethod {
  HOME_DELIVERY
  BRANCH_PICKUP
}

enum PaymentMethod {
  CARD
  BANK_TRANSFER
  CASH_ON_DELIVERY
  INSTALLMENT
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
  REFUNDED
}

model OrderItem {
  id        String   @id @default(cuid())
  orderId   String
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  
  quantity  Int
  price     Decimal  @db.Decimal(10, 2)
  total     Decimal  @db.Decimal(10, 2)
  
  createdAt DateTime @default(now())
}

model Payment {
  id              String        @id @default(cuid())
  orderId         String
  order           Order         @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  amount          Decimal       @db.Decimal(10, 2)
  method          PaymentMethod
  status          PaymentStatus @default(PENDING)
  
  transactionId   String?
  metadata        Json?
  
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

// Reviews
model Review {
  id        String   @id @default(cuid())
  productId String
  product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  rating    Int      // 1-5
  title     String?
  comment   String
  
  verified  Boolean  @default(false)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([productId, userId])
}
```

---

## 5. API Routes

### Product API

```typescript
// src/app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const category = searchParams.get('category')
  const brand = searchParams.get('brand')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const sort = searchParams.get('sort') || 'createdAt'
  const order = searchParams.get('order') || 'desc'
  
  const skip = (page - 1) * limit
  
  const where: any = {
    status: 'ACTIVE',
  }
  
  if (category) {
    where.category = { slug: category }
  }
  
  if (brand) {
    where.brand = { slug: brand }
  }
  
  if (minPrice || maxPrice) {
    where.price = {}
    if (minPrice) where.price.gte = parseFloat(minPrice)
    if (maxPrice) where.price.lte = parseFloat(maxPrice)
  }
  
  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      include: {
        category: true,
        brand: true,
        images: {
          orderBy: { order: 'asc' },
          take: 1,
        },
      },
      skip,
      take: limit,
      orderBy: { [sort]: order },
    }),
    prisma.product.count({ where }),
  ])
  
  return NextResponse.json({
    products,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  })
}
```

### Search API

```typescript
// src/app/api/products/search/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  
  if (!query || query.length < 3) {
    return NextResponse.json({ error: 'Query too short' }, { status: 400 })
  }
  
  const products = await prisma.product.findMany({
    where: {
      AND: [
        { status: 'ACTIVE' },
        {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { nameEn: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { sku: { contains: query, mode: 'insensitive' } },
          ],
        },
      ],
    },
    include: {
      category: true,
      brand: true,
      images: { take: 1 },
    },
    take: 10,
  })
  
  return NextResponse.json({ results: products })
}
```

---

## 6. Component Implementation Order

### Week 1: Foundation

1. **Setup & Configuration**
   - ✅ Project initialization
   - ✅ Tailwind configuration
   - ✅ TypeScript types
   - ✅ Utils & helpers

2. **Atoms**
   - Button
   - Input
   - Badge
   - Spinner
   - Checkbox/Radio

### Week 2: Molecules

3. **Basic Molecules**
   - ProductCard
   - SearchBar
   - PriceDisplay
   - RatingStars
   - Breadcrumb

### Week 3: Organisms

4. **Navigation**
   - Header
   - Footer
   - CategoryMenu
   - MobileNav

5. **Product Components**
   - ProductGrid
   - ProductGallery
   - FilterSidebar

### Week 4: Pages

6. **Core Pages**
   - Homepage
   - Category page
   - Product detail
   - Cart page

### Week 5: Checkout & Polish

7. **Checkout Flow**
   - Checkout page
   - Order confirmation
   - Payment integration

8. **Account Pages**
   - Login/Register
   - Dashboard
   - Orders
   - Profile

---

## 7. State Management

### Cart Store (Zustand)

```typescript
// src/store/cartStore.ts

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === item.productId)
          
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }
          
          return { items: [...state.items, item] }
        }),
      
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),
      
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        })),
      
      clearCart: () => set({ items: [] }),
      
      total: () => {
        const state = get()
        return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
```

---

## 8. Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image component everywhere
import Image from 'next/image'

<Image
  src="/products/iphone-15.webp"
  alt="iPhone 15 Pro"
  width={600}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const ProductGallery = dynamic(() => import('@/components/organisms/ProductGallery'), {
  loading: () => <ProductGallerySkeleton />,
  ssr: false,
})
```

### Caching Strategy

```typescript
// API routes with caching
export const revalidate = 3600 // 1 hour

// Page-level caching
export const metadata = {
  // ...
}

export const revalidate = 3600
```

---

## 9. SEO Implementation

### Metadata API

```typescript
// src/app/(shop)/product/[slug]/page.tsx

import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  
  return {
    title: `${product.name} | Tech Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]?.url],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.images[0]?.url],
    },
  }
}
```

### JSON-LD Structured Data

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: product.images,
      description: product.description,
      sku: product.sku,
      brand: {
        '@type': 'Brand',
        name: product.brand.name,
      },
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'MNT',
        availability: 'https://schema.org/InStock',
      },
    }),
  }}
/>
```

---

## 10. Testing Strategy

### Unit Tests (Jest + React Testing Library)

```typescript
// __tests__/components/Button.test.tsx

import { render, screen } from '@testing-library/react'
import { Button } from '@/components/atoms/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  
  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByText('Click me').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### E2E Tests (Playwright)

```typescript
// e2e/checkout.spec.ts

import { test, expect } from '@playwright/test'

test('complete checkout flow', async ({ page }) => {
  await page.goto('/')
  
  // Add product to cart
  await page.click('text=iPhone 15 Pro')
  await page.click('text=Add to Cart')
  
  // Go to checkout
  await page.click('text=Checkout')
  
  // Fill in details
  await page.fill('[name="email"]', 'test@example.com')
  await page.fill('[name="phone"]', '99999999')
  
  // Complete order
  await page.click('text=Place Order')
  
  // Verify confirmation
  await expect(page).toHaveURL(/\/order\/.*/)
  await expect(page.locator('text=Order Confirmed')).toBeVisible()
})
```

---

**Implementation Guide Version**: 1.0.0  
**Last Updated**: November 24, 2025  

**Next Steps**: Begin with Phase 1 (Foundation) and work through each phase systematically.

