// see https://github.com/rozek/build-configuration-study

import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/localforage.js',
  output: [
    {
      file:     './dist/localforage.esm.js',
      format:   'esm',
      sourcemap:true,
    }
  ],
};