import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: { output: { manualChunks: { wallet: ['ethers'] } } },
  },
})
