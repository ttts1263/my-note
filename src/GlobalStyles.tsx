import { Global, css } from '@emotion/react'
import { useDarkModeStore } from './zustand'

export function GlobalStyles() {
  const { isDarkMode } = useDarkModeStore()

  return (
    <Global
      styles={css`
        body {
          background-color: white;
          ${isDarkMode &&
          `
            background-color: #202124;
            color: white;
          `}
        }
      `}
    />
  )
}
