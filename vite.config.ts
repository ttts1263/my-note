import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://ttts1263.github.io/my-note',
  server: {
    open: true,
  },
})
