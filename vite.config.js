import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

const pwaManifest = {
  registerType:'prompt',
  includeAssests:['bobs-brain-box.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Bobs Brain Box",
    short_name:"BBB",
    description:"Bobs Brainbox of quizzes, expand your mind!",
    icons:[{
      src: '/bobs-brain-box.ico',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/bobs-brain-box.ico',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/bobs-brain-box.ico',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/bobs-brain-box.ico',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#1b1ead',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/quiz",
  orientation:'portrait'
  }
}

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
