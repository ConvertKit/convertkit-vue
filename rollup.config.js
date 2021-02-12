import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import styles from 'rollup-plugin-styles'

export default {
  external: ['vue'],
  input: 'src/index.js',
  output: [
    { file: 'bin/convertkit-vue.esm.js', format: 'es' },
    { file: 'bin/convertkit-vue.cjs.js', format: 'cjs', exports: 'default' }
  ],
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    styles({
      mode: ['extract', 'convertkit-vue.css']
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({ babelHelpers: 'runtime' }),
  ]
}
