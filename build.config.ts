import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  alias: {
    '@': resolve(__dirname, './src')
  },
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true
  }
})
