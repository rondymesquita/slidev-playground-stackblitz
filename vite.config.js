import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  slidev: {
    vue: {
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        // md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
