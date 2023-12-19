import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from './GlobalStyles.tsx'

const isDarkModeMedia = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches

const isDarkModeLocalStorage =
  localStorage.getItem('dark-mode') === 'true'
    ? true
    : localStorage.getItem('dark-mode') === 'false'
    ? false
    : undefined

console.log(
  'dark-mode (storage / media):',
  isDarkModeLocalStorage,
  isDarkModeMedia
)

// eslint-disable-next-line prefer-const
let isDarkMode =
  isDarkModeLocalStorage === true
    ? true
    : isDarkModeLocalStorage === false
    ? false
    : isDarkModeMedia

export function setDarkMode(value: boolean) {
  isDarkMode = value
  localStorage.setItem('dark-mode', value ? 'true' : 'false')
}
export function getDarkMode() {
  return document.body.classList.contains('dark-mode')
}

if (isDarkMode) {
  document.body.classList.add('dark-mode')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
