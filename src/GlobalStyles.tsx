import { Global, css } from '@emotion/react'

export function GlobalStyles({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <Global
      styles={css`
        body {
          background-color: ${isDarkMode ? '#202124' : 'white'};
        }
      `}
    />
  )
}
