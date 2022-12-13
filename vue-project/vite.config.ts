import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    strictPort: true,
    proxy: {
      '/proxy': {
        target: "http://127.0.0.1:8080",
        rewrite: (path) => path.replace(/^\/proxy/, ''),
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
