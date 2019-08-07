import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import buildConfig from '../rollup.config';

const production = !process.env.ROLLUP_WATCH;


const publicConfig = Object.assign({}, buildConfig, {
  input: 'public/main.js',
  output: [
    { file: 'public/index.js', format: 'iife', name: 'app' },
  ],
  plugins: [
    ...buildConfig.plugins,
    resolve({ browser: true }),
    !production && livereload('public'),
  ],
})

export default publicConfig;
