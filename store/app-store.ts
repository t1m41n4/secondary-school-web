import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FailedImage {
  id: number
  src: string
  timestamp: number
}

interface AppState {
  // Image loading state
  failedImages: Map<number, FailedImage>
  addFailedImage: (id: number, src: string) => void
  resetFailedImages: () => void

  // Theme state
  isDarkMode: boolean
  toggleDarkMode: () => void

  // Navigation state
  lastVisitedPage: string | null
  setLastVisitedPage: (page: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Image loading state
      failedImages: new Map(),
      addFailedImage: (id, src) => set((state) => {
        const newMap = new Map(state.failedImages)
        newMap.set(id, { id, src, timestamp: Date.now() })
        return { failedImages: newMap }
      }),
      resetFailedImages: () => set({ failedImages: new Map() }),

      // Theme state
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      // Navigation state
      lastVisitedPage: null,
      setLastVisitedPage: (page) => set({ lastVisitedPage: page }),
    }),
    {
      name: 'keriko-app-storage',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        lastVisitedPage: state.lastVisitedPage,
      }),
    }
  )
)
