import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rccui/',
  plugins: [react()],
  build: {
    outDir: 'build', // Define the output directory for your build
  },
})
