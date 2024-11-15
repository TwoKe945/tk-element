import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// dts声明插件
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs'
import { filter, map } from 'lodash-es'

function getDirectorSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true })
  return map(
    filter(entries, entry => entry.isDirectory()),
    (entry) => entry.name
  )
}

const COMP_NAMES = getDirectorSync(path.resolve(__dirname, '../components'))

export default defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: '../../tsconfig.build.json',
    outDir: "dist/types"
  })],
  build: {
    outDir: 'dist/esm',
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'TkElement',
      fileName: "index",
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === 'style.css')  return 'index.css'
          return chunkInfo.name as string  
        },
        // 分包
        manualChunks(id) {
          // console.log(id)
          if (id.includes("node_modules")) {
            return "vendor"
          } 
          if (id.includes("/packages/hooks")) {
            return "hooks"
          }
          if (id.includes("/packages/utils")) {
            return "utils"
          }
          for (const name of COMP_NAMES) {
            if (id.includes(`/packages/components/${name}`)) {
              return name
            }
          }
        }
     }
    }
  }
})
