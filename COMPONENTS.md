# 🧱 Component Library — Tech Store

Complete component specifications with Tailwind CSS classes and usage examples.

---

## 📑 Table of Contents

1. [Atoms](#atoms)
2. [Molecules](#molecules)
3. [Organisms](#organisms)
4. [Templates](#templates)

---

## ⚛️ ATOMS

### 1. Button

#### Variants

##### Primary Button
```jsx
<button className="
  inline-flex items-center justify-center gap-2
  px-6 py-3 
  bg-primary-600 hover:bg-primary-700 active:bg-primary-800
  dark:bg-primary-500 dark:hover:bg-primary-600
  text-white font-medium text-label
  rounded-lg
  shadow-sm hover:shadow-md
  transition-all duration-150
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Add to Cart
</button>
```

##### Secondary Button
```jsx
<button className="
  inline-flex items-center justify-center gap-2
  px-6 py-3
  bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300
  dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
  text-neutral-900 dark:text-dark-text-primary font-medium text-label
  rounded-lg
  border border-neutral-200 dark:border-dark-border-default
  transition-all duration-150
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  View Details
</button>
```

##### Ghost Button
```jsx
<button className="
  inline-flex items-center justify-center gap-2
  px-4 py-2
  text-neutral-700 hover:text-primary-600 dark:text-dark-text-secondary dark:hover:text-primary-500
  font-medium text-label-sm
  hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary
  rounded-md
  transition-all duration-150
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Cancel
</button>
```

##### Icon Button
```jsx
<button className="
  inline-flex items-center justify-center
  w-10 h-10
  text-neutral-700 hover:text-primary-600 dark:text-dark-text-secondary dark:hover:text-primary-500
  hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary
  rounded-lg
  transition-all duration-150
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  <ShoppingCartIcon className="w-5 h-5" />
</button>
```

#### Button Sizes
- **Small**: `px-4 py-2 text-label-sm`
- **Medium** (Default): `px-6 py-3 text-label`
- **Large**: `px-8 py-4 text-label-lg`

---

### 2. Input

#### Text Input
```jsx
<div className="w-full">
  <label htmlFor="email" className="block text-label-sm font-medium text-neutral-700 dark:text-dark-text-primary mb-1.5">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className="
      w-full px-4 py-2.5
      text-body text-neutral-900 dark:text-dark-text-primary
      bg-white dark:bg-dark-bg-secondary
      border border-neutral-300 dark:border-dark-border-default
      rounded-lg
      placeholder:text-neutral-400 dark:placeholder:text-dark-text-muted
      transition-all duration-150
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      hover:border-neutral-400 dark:hover:border-dark-border-hover
      disabled:bg-neutral-50 dark:disabled:bg-dark-bg-primary disabled:cursor-not-allowed
    "
    placeholder="example@email.com"
  />
  <p className="mt-1.5 text-body-xs text-neutral-500 dark:text-dark-text-muted">
    We'll never share your email.
  </p>
</div>
```

#### Error State
```jsx
<div className="w-full">
  <label htmlFor="password" className="block text-label-sm font-medium text-neutral-700 dark:text-dark-text-primary mb-1.5">
    Password
  </label>
  <input
    type="password"
    id="password"
    aria-invalid="true"
    aria-describedby="password-error"
    className="
      w-full px-4 py-2.5
      text-body text-neutral-900 dark:text-dark-text-primary
      bg-white dark:bg-dark-bg-secondary
      border-2 border-error-500
      rounded-lg
      transition-all duration-150
      focus:outline-none focus:ring-2 focus:ring-error-500 focus:border-transparent
    "
  />
  <p id="password-error" className="mt-1.5 text-body-xs text-error-600 dark:text-error-500 flex items-center gap-1">
    <ExclamationCircleIcon className="w-4 h-4" />
    Password must be at least 8 characters
  </p>
</div>
```

#### Search Input
```jsx
<div className="relative">
  <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
  <input
    type="search"
    placeholder="Search products..."
    className="
      w-full pl-12 pr-4 py-3
      text-body text-neutral-900 dark:text-dark-text-primary
      bg-white dark:bg-dark-bg-secondary
      border border-neutral-300 dark:border-dark-border-default
      rounded-full
      placeholder:text-neutral-400
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    "
  />
</div>
```

---

### 3. Badge

#### Variants

##### Status Badge
```jsx
<span className="
  inline-flex items-center gap-1
  px-2.5 py-1
  text-label-sm font-medium
  bg-success-50 text-success-700
  dark:bg-success-900/20 dark:text-success-400
  rounded-full
">
  <span className="w-1.5 h-1.5 rounded-full bg-success-500"></span>
  In Stock
</span>
```

##### Discount Badge
```jsx
<span className="
  inline-flex items-center
  px-2.5 py-1
  text-label-sm font-bold
  bg-sale-600 text-white
  rounded-md
">
  -30%
</span>
```

##### Category Badge
```jsx
<span className="
  inline-flex items-center
  px-3 py-1.5
  text-label-sm font-medium
  bg-neutral-100 text-neutral-700
  dark:bg-dark-bg-tertiary dark:text-dark-text-primary
  border border-neutral-200 dark:border-dark-border-default
  rounded-full
  hover:bg-neutral-200 dark:hover:bg-dark-bg-elevated
  transition-colors duration-150
  cursor-pointer
">
  Smartphones
</span>
```

##### New Badge
```jsx
<span className="
  inline-flex items-center
  px-2.5 py-1
  text-label-sm font-bold
  bg-primary-600 text-white
  rounded-md
  shadow-sm
">
  NEW
</span>
```

---

### 4. Checkbox & Radio

#### Checkbox
```jsx
<div className="flex items-center gap-3">
  <input
    type="checkbox"
    id="terms"
    className="
      w-5 h-5
      text-primary-600
      bg-white dark:bg-dark-bg-secondary
      border-neutral-300 dark:border-dark-border-default
      rounded
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      cursor-pointer
    "
  />
  <label htmlFor="terms" className="text-body text-neutral-700 dark:text-dark-text-primary cursor-pointer">
    I agree to terms and conditions
  </label>
</div>
```

#### Radio Button
```jsx
<div className="space-y-3">
  <div className="flex items-center gap-3">
    <input
      type="radio"
      id="delivery"
      name="shipping"
      className="
        w-5 h-5
        text-primary-600
        bg-white dark:bg-dark-bg-secondary
        border-neutral-300 dark:border-dark-border-default
        focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        cursor-pointer
      "
    />
    <label htmlFor="delivery" className="text-body text-neutral-700 dark:text-dark-text-primary cursor-pointer">
      Home Delivery
    </label>
  </div>
  <div className="flex items-center gap-3">
    <input
      type="radio"
      id="pickup"
      name="shipping"
      className="
        w-5 h-5
        text-primary-600
        bg-white dark:bg-dark-bg-secondary
        border-neutral-300 dark:border-dark-border-default
        focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        cursor-pointer
      "
    />
    <label htmlFor="pickup" className="text-body text-neutral-700 dark:text-dark-text-primary cursor-pointer">
      Branch Pickup
    </label>
  </div>
</div>
```

---

### 5. Loading Spinner

```jsx
<div className="inline-flex items-center justify-center">
  <svg
    className="animate-spin h-8 w-8 text-primary-600 dark:text-primary-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
</div>
```

---

## 🔬 MOLECULES

### 1. Product Card

```jsx
<div className="
  group
  relative
  bg-white dark:bg-dark-bg-secondary
  border border-neutral-200 dark:border-dark-border-default
  rounded-xl
  overflow-hidden
  hover:shadow-lg hover:-translate-y-1
  transition-all duration-200
">
  {/* Badges */}
  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
    <span className="inline-flex px-2.5 py-1 bg-sale-600 text-white text-label-sm font-bold rounded-md">
      -30%
    </span>
    <span className="inline-flex px-2.5 py-1 bg-primary-600 text-white text-label-sm font-bold rounded-md">
      NEW
    </span>
  </div>

  {/* Wishlist Button */}
  <button className="
    absolute top-3 right-3 z-10
    w-9 h-9
    flex items-center justify-center
    bg-white/90 dark:bg-dark-bg-secondary/90
    backdrop-blur-sm
    rounded-full
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
    hover:bg-white dark:hover:bg-dark-bg-secondary
  ">
    <HeartIcon className="w-5 h-5 text-neutral-600 dark:text-dark-text-secondary" />
  </button>

  {/* Image */}
  <div className="aspect-square bg-neutral-50 dark:bg-dark-bg-primary p-6">
    <img
      src="/products/iphone-15-pro.webp"
      alt="iPhone 15 Pro"
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>

  {/* Content */}
  <div className="p-4 space-y-3">
    {/* Category */}
    <p className="text-body-sm text-neutral-500 dark:text-dark-text-muted">
      Smartphones
    </p>

    {/* Title */}
    <h3 className="text-h5 font-semibold text-neutral-900 dark:text-dark-text-primary line-clamp-2">
      Apple iPhone 15 Pro Max 256GB
    </h3>

    {/* Rating */}
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 fill-warning-500 text-warning-500" />
        ))}
      </div>
      <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
        (124)
      </span>
    </div>

    {/* Price */}
    <div className="flex items-baseline gap-2">
      <span className="text-h4 font-bold text-neutral-900 dark:text-dark-text-primary">
        ₮4,499,000
      </span>
      <span className="text-body text-neutral-400 dark:text-dark-text-muted line-through">
        ₮6,499,000
      </span>
    </div>

    {/* Stock Status */}
    <div className="flex items-center gap-1.5 text-body-sm text-success-600 dark:text-success-500">
      <div className="w-2 h-2 rounded-full bg-success-500"></div>
      In Stock
    </div>

    {/* Actions */}
    <div className="flex gap-2 pt-2">
      <button className="
        flex-1
        px-4 py-2.5
        bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600
        text-white font-medium text-label-sm
        rounded-lg
        transition-colors duration-150
      ">
        Add to Cart
      </button>
      <button className="
        w-10 h-10
        flex items-center justify-center
        bg-neutral-100 hover:bg-neutral-200 dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
        text-neutral-700 dark:text-dark-text-primary
        rounded-lg
        transition-colors duration-150
      ">
        <EyeIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
```

---

### 2. Search Bar with Suggestions

```jsx
<div className="relative w-full max-w-2xl">
  {/* Search Input */}
  <div className="relative">
    <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
    <input
      type="search"
      placeholder="Search for products, brands..."
      className="
        w-full pl-12 pr-12 py-3.5
        text-body text-neutral-900 dark:text-dark-text-primary
        bg-white dark:bg-dark-bg-secondary
        border border-neutral-300 dark:border-dark-border-default
        rounded-full
        placeholder:text-neutral-400
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      "
    />
    <button className="
      absolute right-3 top-1/2 -translate-y-1/2
      w-8 h-8
      flex items-center justify-center
      text-neutral-400 hover:text-neutral-600
      dark:hover:text-dark-text-primary
      rounded-full
      hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary
      transition-colors duration-150
    ">
      <XMarkIcon className="w-5 h-5" />
    </button>
  </div>

  {/* Suggestions Dropdown */}
  <div className="
    absolute top-full mt-2 w-full
    bg-white dark:bg-dark-bg-secondary
    border border-neutral-200 dark:border-dark-border-default
    rounded-2xl
    shadow-xl
    overflow-hidden
    z-50
  ">
    {/* Popular Searches */}
    <div className="p-4 border-b border-neutral-100 dark:border-dark-border-default">
      <h4 className="text-label-sm font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
        Popular Searches
      </h4>
      <div className="flex flex-wrap gap-2">
        {['iPhone 15', 'MacBook', 'AirPods', 'Samsung S24'].map((term) => (
          <button key={term} className="
            px-3 py-1.5
            bg-neutral-100 hover:bg-neutral-200
            dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
            text-body-sm text-neutral-700 dark:text-dark-text-primary
            rounded-full
            transition-colors duration-150
          ">
            {term}
          </button>
        ))}
      </div>
    </div>

    {/* Suggested Products */}
    <div className="p-2">
      {[1, 2, 3].map((item) => (
        <button key={item} className="
          w-full flex items-center gap-3 p-3
          hover:bg-neutral-50 dark:hover:bg-dark-bg-tertiary
          rounded-lg
          transition-colors duration-150
        ">
          <div className="w-12 h-12 bg-neutral-100 dark:bg-dark-bg-primary rounded-lg flex-shrink-0">
            <img src="/products/product.webp" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-body-sm font-medium text-neutral-900 dark:text-dark-text-primary">
              iPhone 15 Pro Max
            </p>
            <p className="text-body-xs text-neutral-500 dark:text-dark-text-muted">
              From ₮4,499,000
            </p>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-neutral-400" />
        </button>
      ))}
    </div>
  </div>
</div>
```

---

### 3. Price Display with Installment

```jsx
<div className="space-y-4">
  {/* Main Price */}
  <div className="flex items-baseline gap-3">
    <span className="text-display-lg font-bold text-neutral-900 dark:text-dark-text-primary">
      ₮4,499,000
    </span>
    <span className="text-h4 text-neutral-400 dark:text-dark-text-muted line-through">
      ₮6,499,000
    </span>
    <span className="
      inline-flex items-center
      px-3 py-1
      bg-sale-600 text-white
      text-label font-bold
      rounded-md
    ">
      Save 30%
    </span>
  </div>

  {/* Installment Info */}
  <div className="
    p-4
    bg-gradient-to-r from-primary-50 to-secondary-50
    dark:from-primary-900/20 dark:to-secondary-900/20
    border border-primary-200 dark:border-primary-800
    rounded-xl
  ">
    <div className="flex items-center gap-2 mb-2">
      <CreditCardIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      <span className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary">
        Installment Available
      </span>
    </div>
    <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-3">
      Pay as low as <span className="font-bold text-primary-600 dark:text-primary-400">₮187,458/month</span> for 24 months
    </p>
    <button className="text-label-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
      Calculate Installment →
    </button>
  </div>

  {/* Stock Status */}
  <div className="flex items-center justify-between p-4 bg-success-50 dark:bg-success-900/20 rounded-lg">
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="w-5 h-5 text-success-600 dark:text-success-400" />
      <span className="text-body font-medium text-success-700 dark:text-success-400">
        In Stock
      </span>
    </div>
    <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
      12 units available
    </span>
  </div>
</div>
```

---

### 4. Rating & Reviews Summary

```jsx
<div className="
  p-6
  bg-white dark:bg-dark-bg-secondary
  border border-neutral-200 dark:border-dark-border-default
  rounded-xl
">
  <div className="flex items-start gap-6">
    {/* Overall Rating */}
    <div className="text-center">
      <div className="text-display-lg font-bold text-neutral-900 dark:text-dark-text-primary mb-1">
        4.8
      </div>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 fill-warning-500 text-warning-500" />
        ))}
      </div>
      <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
        Based on 124 reviews
      </p>
    </div>

    {/* Rating Breakdown */}
    <div className="flex-1 space-y-2">
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex items-center gap-3">
          <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary w-8">
            {star}★
          </span>
          <div className="flex-1 h-2 bg-neutral-200 dark:bg-dark-bg-tertiary rounded-full overflow-hidden">
            <div
              className="h-full bg-warning-500 rounded-full"
              style={{ width: `${star === 5 ? 80 : star === 4 ? 15 : 5}%` }}
            />
          </div>
          <span className="text-body-sm text-neutral-600 dark:text-dark-text-secondary w-8 text-right">
            {star === 5 ? 99 : star === 4 ? 18 : 7}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Write Review Button */}
  <button className="
    w-full mt-6 px-6 py-3
    bg-neutral-100 hover:bg-neutral-200
    dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
    text-neutral-900 dark:text-dark-text-primary
    font-medium text-label
    rounded-lg
    border border-neutral-200 dark:border-dark-border-default
    transition-colors duration-150
  ">
    Write a Review
  </button>
</div>
```

---

### 5. Quantity Selector

```jsx
<div className="inline-flex items-center">
  <button className="
    w-10 h-10
    flex items-center justify-center
    bg-neutral-100 hover:bg-neutral-200
    dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
    text-neutral-700 dark:text-dark-text-primary
    rounded-l-lg
    border border-r-0 border-neutral-300 dark:border-dark-border-default
    transition-colors duration-150
    disabled:opacity-50 disabled:cursor-not-allowed
  ">
    <MinusIcon className="w-5 h-5" />
  </button>
  
  <input
    type="number"
    value="1"
    min="1"
    max="12"
    className="
      w-16 h-10
      text-center text-body font-medium
      text-neutral-900 dark:text-dark-text-primary
      bg-white dark:bg-dark-bg-secondary
      border-y border-neutral-300 dark:border-dark-border-default
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10
    "
  />
  
  <button className="
    w-10 h-10
    flex items-center justify-center
    bg-neutral-100 hover:bg-neutral-200
    dark:bg-dark-bg-tertiary dark:hover:bg-dark-bg-elevated
    text-neutral-700 dark:text-dark-text-primary
    rounded-r-lg
    border border-l-0 border-neutral-300 dark:border-dark-border-default
    transition-colors duration-150
    disabled:opacity-50 disabled:cursor-not-allowed
  ">
    <PlusIcon className="w-5 h-5" />
  </button>
</div>
```

---

### 6. Breadcrumb

```jsx
<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm">
  <a href="/" className="text-neutral-600 hover:text-primary-600 dark:text-dark-text-secondary dark:hover:text-primary-400 transition-colors">
    Home
  </a>
  <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
  <a href="/category/smartphones" className="text-neutral-600 hover:text-primary-600 dark:text-dark-text-secondary dark:hover:text-primary-400 transition-colors">
    Smartphones
  </a>
  <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
  <span className="text-neutral-900 dark:text-dark-text-primary font-medium">
    iPhone 15 Pro Max
  </span>
</nav>
```

---

## 🏢 ORGANISMS

### 1. Header / Navigation

```jsx
<header className="sticky top-0 z-50 bg-white/95 dark:bg-dark-bg-secondary/95 backdrop-blur-md border-b border-neutral-200 dark:border-dark-border-default">
  {/* Top Bar */}
  <div className="bg-neutral-900 dark:bg-dark-bg-primary text-white py-2">
    <div className="container flex items-center justify-between text-body-sm">
      <div className="flex items-center gap-6">
        <a href="/branches" className="hover:text-primary-400 transition-colors flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" />
          Our Branches
        </a>
        <a href="/delivery" className="hover:text-primary-400 transition-colors flex items-center gap-1">
          <TruckIcon className="w-4 h-4" />
          Delivery Info
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="tel:+97670111111" className="hover:text-primary-400 transition-colors flex items-center gap-1">
          <PhoneIcon className="w-4 h-4" />
          7011-1111
        </a>
        <div className="flex items-center gap-2">
          <a href="#" className="hover:text-primary-400 transition-colors">
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-primary-400 transition-colors">
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Main Navigation */}
  <div className="container py-4">
    <div className="flex items-center justify-between gap-8">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-h5">A</span>
        </div>
        <span className="text-h4 font-bold text-neutral-900 dark:text-dark-text-primary">
          Tech Store
        </span>
      </a>

      {/* Search Bar - Desktop */}
      <div className="hidden lg:block flex-1 max-w-2xl">
        {/* Search Bar Component Here */}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Dark Mode Toggle */}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
          <MoonIcon className="w-5 h-5 text-neutral-700 dark:text-dark-text-primary" />
        </button>

        {/* Wishlist */}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors relative">
          <HeartIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-sale-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Cart */}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors relative">
          <ShoppingCartIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 dark:bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        {/* Account */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
          <UserCircleIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
          <span className="text-body font-medium text-neutral-700 dark:text-dark-text-primary">
            Account
          </span>
        </button>
      </div>
    </div>

    {/* Category Navigation */}
    <nav className="hidden lg:flex items-center gap-1 mt-4 border-t border-neutral-200 dark:border-dark-border-default pt-4">
      {['Smartphones', 'Tablets', 'Laptops', 'Watches', 'Accessories', 'Sale'].map((category) => (
        <a
          key={category}
          href={`/category/${category.toLowerCase()}`}
          className="px-4 py-2 text-body font-medium text-neutral-700 dark:text-dark-text-primary hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-lg transition-colors"
        >
          {category}
        </a>
      ))}
    </nav>
  </div>
</header>
```

---

### 2. Product Gallery

```jsx
<div className="grid md:grid-cols-2 gap-8">
  {/* Thumbnails - Desktop */}
  <div className="hidden md:flex flex-col gap-3 order-1">
    {[1, 2, 3, 4].map((img) => (
      <button
        key={img}
        className="
          aspect-square
          bg-neutral-100 dark:bg-dark-bg-primary
          border-2 border-transparent
          data-[active=true]:border-primary-600 dark:data-[active=true]:border-primary-500
          rounded-lg
          overflow-hidden
          hover:border-neutral-300 dark:hover:border-dark-border-hover
          transition-colors
        "
        data-active={img === 1}
      >
        <img src={`/product-${img}.webp`} alt="" className="w-full h-full object-contain p-2" />
      </button>
    ))}
  </div>

  {/* Main Image */}
  <div className="order-2 md:col-span-1">
    <div className="sticky top-24">
      <div className="
        aspect-square
        bg-neutral-50 dark:bg-dark-bg-primary
        border border-neutral-200 dark:border-dark-border-default
        rounded-2xl
        overflow-hidden
        p-8
        relative
        group
      ">
        <img
          src="/product-main.webp"
          alt="iPhone 15 Pro Max"
          className="w-full h-full object-contain"
        />
        
        {/* Zoom Button */}
        <button className="
          absolute bottom-4 right-4
          w-12 h-12
          bg-white/90 dark:bg-dark-bg-secondary/90
          backdrop-blur-sm
          rounded-full
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-opacity
          shadow-lg
        ">
          <MagnifyingGlassPlusIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
        </button>
      </div>

      {/* Mobile Thumbnails Carousel */}
      <div className="md:hidden flex gap-2 mt-4 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5].map((img) => (
          <button
            key={img}
            className="
              flex-shrink-0 w-20 h-20
              bg-neutral-100 dark:bg-dark-bg-primary
              border-2 border-transparent
              data-[active=true]:border-primary-600
              rounded-lg
              overflow-hidden
            "
            data-active={img === 1}
          >
            <img src={`/product-${img}.webp`} alt="" className="w-full h-full object-contain p-1" />
          </button>
        ))}
      </div>
    </div>
  </div>
</div>
```

---

### 3. Filter Sidebar

```jsx
<aside className="
  w-full lg:w-72
  bg-white dark:bg-dark-bg-secondary
  border border-neutral-200 dark:border-dark-border-default
  rounded-xl
  p-6
  space-y-6
">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h3 className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary">
      Filters
    </h3>
    <button className="text-body-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
      Clear All
    </button>
  </div>

  {/* Category Filter */}
  <div>
    <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
      Category
    </h4>
    <div className="space-y-2">
      {['All Products', 'Smartphones', 'Tablets', 'Laptops', 'Accessories'].map((cat) => (
        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
          />
          <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {cat}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Brand Filter */}
  <div>
    <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
      Brand
    </h4>
    <div className="space-y-2">
      {['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'OPPO'].map((brand) => (
        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
          />
          <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {brand}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Price Range */}
  <div>
    <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
      Price Range
    </h4>
    <div className="space-y-4">
      <input
        type="range"
        min="0"
        max="10000000"
        step="100000"
        className="w-full accent-primary-600 dark:accent-primary-500"
      />
      <div className="flex items-center gap-3">
        <input
          type="number"
          placeholder="Min"
          className="flex-1 px-3 py-2 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <span className="text-neutral-400">—</span>
        <input
          type="number"
          placeholder="Max"
          className="flex-1 px-3 py-2 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
    </div>
  </div>

  {/* Stock Status */}
  <div>
    <h4 className="text-label font-semibold text-neutral-900 dark:text-dark-text-primary mb-3">
      Availability
    </h4>
    <div className="space-y-2">
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
        />
        <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          In Stock Only
        </span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          className="w-5 h-5 text-primary-600 rounded border-neutral-300 dark:border-dark-border-default focus:ring-2 focus:ring-primary-500"
        />
        <span className="text-body text-neutral-700 dark:text-dark-text-primary group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          On Sale
        </span>
      </label>
    </div>
  </div>

  {/* Apply Button */}
  <button className="
    w-full px-6 py-3
    bg-primary-600 hover:bg-primary-700
    dark:bg-primary-500 dark:hover:bg-primary-600
    text-white font-medium
    rounded-lg
    transition-colors duration-150
  ">
    Apply Filters
  </button>
</aside>
```

---

### 4. Cart Sidebar

```jsx
<aside className="
  fixed top-0 right-0 bottom-0
  w-full max-w-md
  bg-white dark:bg-dark-bg-secondary
  shadow-2xl
  transform translate-x-full data-[open=true]:translate-x-0
  transition-transform duration-300
  z-50
  flex flex-col
">
  {/* Header */}
  <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-dark-border-default">
    <div>
      <h2 className="text-h3 font-semibold text-neutral-900 dark:text-dark-text-primary">
        Shopping Cart
      </h2>
      <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary">
        2 items in cart
      </p>
    </div>
    <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
      <XMarkIcon className="w-6 h-6 text-neutral-700 dark:text-dark-text-primary" />
    </button>
  </div>

  {/* Cart Items */}
  <div className="flex-1 overflow-y-auto p-6 space-y-4">
    {[1, 2].map((item) => (
      <div key={item} className="flex gap-4 p-4 bg-neutral-50 dark:bg-dark-bg-primary rounded-xl">
        {/* Image */}
        <div className="w-20 h-20 bg-white dark:bg-dark-bg-secondary rounded-lg flex-shrink-0 p-2">
          <img src="/product.webp" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-body font-medium text-neutral-900 dark:text-dark-text-primary line-clamp-2 mb-1">
            iPhone 15 Pro Max 256GB
          </h4>
          <p className="text-body-sm text-neutral-600 dark:text-dark-text-secondary mb-2">
            Natural Titanium
          </p>
          <div className="flex items-center justify-between">
            {/* Quantity */}
            <div className="inline-flex items-center border border-neutral-300 dark:border-dark-border-default rounded-lg">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
                <MinusIcon className="w-4 h-4" />
              </button>
              <span className="w-8 text-center text-body-sm font-medium">1</span>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary transition-colors">
                <PlusIcon className="w-4 h-4" />
              </button>
            </div>
            {/* Price */}
            <span className="text-h5 font-bold text-neutral-900 dark:text-dark-text-primary">
              ₮4,499,000
            </span>
          </div>
        </div>

        {/* Remove */}
        <button className="self-start w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-50 dark:hover:bg-error-900/20 text-neutral-400 hover:text-error-600 dark:hover:text-error-500 transition-colors">
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    ))}
  </div>

  {/* Footer */}
  <div className="p-6 border-t border-neutral-200 dark:border-dark-border-default space-y-4">
    {/* Promo Code */}
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Promo code"
        className="flex-1 px-4 py-2.5 text-body bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-300 dark:border-dark-border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <button className="px-6 py-2.5 bg-neutral-900 dark:bg-dark-bg-elevated text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
        Apply
      </button>
    </div>

    {/* Subtotal */}
    <div className="space-y-2">
      <div className="flex items-center justify-between text-body">
        <span className="text-neutral-600 dark:text-dark-text-secondary">Subtotal</span>
        <span className="font-medium text-neutral-900 dark:text-dark-text-primary">₮8,998,000</span>
      </div>
      <div className="flex items-center justify-between text-body">
        <span className="text-neutral-600 dark:text-dark-text-secondary">Shipping</span>
        <span className="font-medium text-success-600 dark:text-success-500">Free</span>
      </div>
      <div className="pt-2 border-t border-neutral-200 dark:border-dark-border-default">
        <div className="flex items-center justify-between">
          <span className="text-h4 font-semibold text-neutral-900 dark:text-dark-text-primary">Total</span>
          <span className="text-h3 font-bold text-neutral-900 dark:text-dark-text-primary">₮8,998,000</span>
        </div>
      </div>
    </div>

    {/* Actions */}
    <div className="space-y-2">
      <button className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-semibold text-label-lg rounded-lg transition-colors">
        Proceed to Checkout
      </button>
      <button className="w-full px-6 py-3 text-neutral-700 dark:text-dark-text-primary font-medium hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary rounded-lg transition-colors">
        Continue Shopping
      </button>
    </div>
  </div>
</aside>
```

---

## 📄 TEMPLATES

See [PAGE_STRUCTURES.md](./PAGE_STRUCTURES.md) for complete page layouts.

---

**Component Library Version**: 1.0.0  
**Last Updated**: November 24, 2025

