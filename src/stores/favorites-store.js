import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

const FAVORITES_KEY = 'giphy-favorites'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: LocalStorage.getItem(FAVORITES_KEY) || [],
  }),

  getters: {
    isFavorite: (state) => (gifId) => {
      return state.items.some((item) => item.id === gifId)
    },

    favoritesCount: (state) => state.items.length,
  },

  actions: {
    saveFavoritesToStorage() {
      LocalStorage.set(FAVORITES_KEY, this.items)
    },

    addToFavorites(gif) {
      if (!this.isFavorite(gif.id)) {
        this.items.push(gif)
        this.saveFavoritesToStorage()
        return true
      }
      return false
    },

    removeFromFavorites(gif) {
      const index = this.items.findIndex((item) => item.id === gif.id)
      if (index !== -1) {
        this.items.splice(index, 1)
        this.saveFavoritesToStorage()
        return true
      }
      return false
    },

    toggleFavorite(gif) {
      if (this.isFavorite(gif.id)) {
        return this.removeFromFavorites(gif)
      } else {
        return this.addToFavorites(gif)
      }
    },

    clearFavorites() {
      this.items = []
      this.saveFavoritesToStorage()
    },
  },
})
