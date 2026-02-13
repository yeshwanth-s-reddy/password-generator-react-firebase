import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite' // Removed incorrect import
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss(), // Removed incorrect plugin
    react()
  ],
})
