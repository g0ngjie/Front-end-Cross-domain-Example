import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from 'unocss'
import { resolve } from "path";

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
  build: {
    outDir: resolve(__dirname, '../project/src/main/resources/static')
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify()
      ]
    })
  ],
})
