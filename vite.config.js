import { defineConfig } from 'vite'
const rawPlugin = require('vite-raw-plugin')

export default defineConfig({
  slidev: {
    vue: {
    },
    markdown: {
      markdownItSetup(md) {
      }
    }
  },
  // plugins: [
  //   rawPlugin({
  //     // fileRegex: /\.md$/
  //     fileRegex: /sample\/.*\.ts$/
  //   })
  // ],
  // assetsInclude: ['components/code/*/*.ts']
  // optimizeDeps: {
  //   exclude: ["components/code/*"]
  // }
  // esbuild: {
  //   exclude: ["sample/*.ts"]
  // }
})
