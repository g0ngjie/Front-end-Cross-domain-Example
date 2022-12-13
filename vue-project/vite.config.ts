import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: "127.0.0.1",
    strictPort: true,
    proxy: {
      '^/cors': {
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/cors/, '')
      }
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify()
      ]
    })
  ],
})
