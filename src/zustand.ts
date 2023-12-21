import { create } from 'zustand'

export const useDarkModeStore = create<
  {
    isDarkMode: boolean
    toggleDarkMode: () => void
  },
  []
>((set) => ({
  isDarkMode: initDarkMode(),
  toggleDarkMode: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),
}))

export function initDarkMode() {
  const isDarkModeMedia = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const isDarkModeLocalStorage =
    localStorage.getItem('dark-mode') === 'true'
      ? true
      : localStorage.getItem('dark-mode') === 'false'
      ? false
      : undefined

  const isDarkMode =
    isDarkModeLocalStorage === true
      ? true
      : isDarkModeLocalStorage === false
      ? false
      : isDarkModeMedia

  console.log(
    'dark-mode (storage / media):',
    isDarkModeLocalStorage,
    isDarkModeMedia
  )
  return isDarkMode
}
