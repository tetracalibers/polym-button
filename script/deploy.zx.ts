#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'

await $`yarn build-storybook`

await within(async () => {
  cd('storybook-static')

  // .nojekyllファイルを作成
  await $`touch .nojekyll`

  //const iframehtml = await fs.readFile('iframe.html', 'utf-8')
  //
  //await fs.writeFile(
  //  'iframe.html',
  //  iframehtml.replace(/\/assets/g, '/polym-generic-layout/assets')
  //)
  //
  //const assetjs_path = await glob('assets/*.@(map|js)')
  //
  //await assetjs_path.forEach(async (path) => {
  //  const assetjs = await fs.readFile('./' + path, 'utf-8')
  //  await fs.writeFile(
  //    './' + path,
  //    assetjs.replace(/assets\//g, 'polym-generic-layout/assets/')
  //  )
  //})
})

//await $`rm -rf node_modules/.cache/gh-pages`
await $`gh-pages -d storybook-static`
