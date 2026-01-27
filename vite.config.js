import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Adjust warning limit - icons vendor chunk is large by nature
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Lucide icons - separate chunk for icons
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})


