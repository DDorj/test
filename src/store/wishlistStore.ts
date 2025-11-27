import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistStore {
  items: string[]
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  toggle: (productId: string) => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId) =>
        set((state) => ({
          items: state.items.includes(productId) ? state.items : [...state.items, productId],
        })),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((id) => id !== productId),
        })),

      isInWishlist: (productId) => {
        const state = get()
        return state.items.includes(productId)
      },

      toggle: (productId) => {
        const state = get()
        if (state.isInWishlist(productId)) {
          state.removeItem(productId)
        } else {
          state.addItem(productId)
        }
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
)

