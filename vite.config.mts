import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    host: '0.0.0.0', // This makes it accessible from other devices
    proxy: {
      // Add any proxy configuration if needed
    },
    allowedHosts: [
      'd90e-85-247-179-135.ngrok-free.app', // Your current ngrok domain
      '.ngrok-free.app', // Wildcard for all ngrok-free.app subdomains
    ],
  },
  plugins: [react()],
})
