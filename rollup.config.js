import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'playwright-select',
      file: 'dist/playwright-select.js',
      format: 'umd',
    },
    plugins: [commonjs()],
  },
];
