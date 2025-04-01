import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Or any port you like
  }
})
