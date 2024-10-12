import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver, ElementPlusResolver, NaiveUiResolver, PrimeVueResolver, TDesignResolver } from 'unplugin-vue-components/resolvers';
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    UnoCSS(),
    Components({
      dirs: ['src/components'],
      deep: true,
      resolvers: [
        PrimeVueResolver({
          importIcons: true,
        }),
        ElementPlusResolver(),
        TDesignResolver({
          library: 'vue-next',
        }),
        ArcoResolver(),
        NaiveUiResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
