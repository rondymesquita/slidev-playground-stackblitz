import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
    },
    markdown: {
      markdownItSetup(md) {
      }
    }
  },
  esbuild: {
    exclude: ["public/code/*.ts"]
  }
})
