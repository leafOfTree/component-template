import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'public/main.js',
  output: [
    { file: 'public/index.js', format: 'iife', name: 'app' },
  ],
  plugins: [
    svelte(),
    resolve({ browser: true }),
    !production && livereload('public'),
  ],
  watch: {
    clearScreen: false
  }
};
