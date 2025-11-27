export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  category: string
  brand: string
  stock: number
  rating: number
  reviewCount: number
  featured?: boolean
  onSale?: boolean
  isNew?: boolean
  variants?: ProductVariant[]
  specifications?: ProductSpec[]
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  price?: number
  stock: number
}

export interface ProductSpec {
  name: string
  value: string
  group?: string
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
}

export interface Category {
  id: string
  slug: string
  name: string
  image?: string
  productCount?: number
}

export interface Brand {
  id: string
  slug: string
  name: string
  logo?: string
}

export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  image?: string
}

export interface Address {
  id: string
  fullName: string
  phone: string
  province: string
  city: string
  district: string
  street: string
  building?: string
  isDefault: boolean
}

export interface Order {
  id: string
  orderNumber: string
  status: OrderStatus
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  createdAt: Date
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

