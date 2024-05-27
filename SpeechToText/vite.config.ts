import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/transcriptMaker/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Adjust the limit as needed, e.g., to 1000 kB
  }
})
