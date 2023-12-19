import { Global, css } from '@emotion/react'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          background-color: white;
        }

        body.dark-mode {
          background-color: #202124;
          color: white;
        }
      `}
    />
  )
}
