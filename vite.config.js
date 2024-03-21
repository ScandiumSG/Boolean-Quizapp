import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { pwaManifest } from 'pwa.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaManifest)],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src')
    }
  }
})
