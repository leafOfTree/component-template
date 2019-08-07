# component-template

## Install

    npx degit leafOfTree/component-template my-new-component
    cd my-new-component
    npm install # or yarn

Your source code lives in `src/index.svelte`. Test code lives in `src/test`.

## Write components

### Code & Test

    npm start

### Build

    npm run build

### Publish

- Update `package.json`

- Update `README.md`

- Run: `git push` or `npm publish` if everything goes well.

## Comsuming components

### Svelte compoent

The package.json has a `"svelte"` filed pointing to `src/index.svelte`.

This allows Svelte apps to import your component directly, if they are using a bundler plugin like [rollup-plugin-svelte][0](rollup) or [svelte-loader][1](webpack, whose config [resove.mainFields][2] includes `"svelte"`).

### Plain JavaScript module

The package.json also has `"module"` and `"main"` fileds. `npm run build` will bundle your compoennt's source code into a plain JavaScript module(`index.mjs`) and a UMD script(`index.js`). 

> This will happen automatically, conrtesy of `prepublishOnly` hook in package.json.

## Refs

Svelte app template [sveltejs/template][3]

Forked from [sveltejs/component-template][4]

[0]: https://github.com/rollup/rollup-plugin-svelte
[1]: https://github.com/sveltejs/svelte-loader
[2]: https://webpack.js.org/configuration/resolve/#resolve-mainfields
[3]: https://github.com/sveltejs/template
[4]: https://github.com/sveltejs/component-template
