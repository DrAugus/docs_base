# AUGUS

## All Site

> cause netlify has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account

| site | ~~🇨🇳 ([netlify][netlify])~~ | other countries ([vercel][vercel]) | tech|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  ~~[online][site0]~~ | [online][site0] | [vuepress][vuepress] [vue3][vue]|
| variety of notes | ~~[online][site1-1]~~ | [online][site1-2] | [nuxt docus][docus] [vue3][vue] |
| coding | ~~[online][site2-1]~~ | [online][site2-2] | [nuxt docus][docus] [vue3][vue] |
| art | ~~[online][site3-1]~~ | [online][site3-2] | [nuxt docus][docus] [vue3][vue] |

> notes/code/art site are same, why?

too many records, and "code page" doesn't seem to need `components`, so code page only use markdown file. while "notes page" and "art page" may need `components`. The pages are all separated to make them clearer.

## Develop

### Prerequisites

- nodejs (version >= 16)
- npm
- yarn (`npm install -g yarn`)
- pnpm (nuxt project required `npm install -g pnpm`)

### Git clone

```git
git clone https://github.com/DrAugus/draugus.github.io.git
```

### Run

current dir, use and run vuepress, just run `yarn install && yarn src:dev`  
for others

- [art](./art/)
- [code](./code/)
- [nuxt-docus](./nuxt-docus/)

run `pnpm i && pnpm dev`

### Upgrade

#### current dir, as vuepress

make sure all vuepress plugins are up to date.

plugins

```shell
yarn add vuepress-plugin-clipboard@next @vuepress/client@next @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next && yarn install && yarn upgrade
```

vuepress and theme

```shell
yarn add vuepress@next && yarn install && yarn upgrade
```

#### others

You don't have to think about them. Just give them to the robot.

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [Snap.Genshin.Docs](https://github.com/DGP-Studio/Snap.Genshin.Docs)
- [VuePress](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
- [vuepress deploy: step by step guide](https://github.com/marketplace/actions/vuepress-deploy#step-by-step-guide)

[site0]: https://draugus.github.io/
[site1-1]: https://augus-docus.netlify.app/
[site1-2]: https://augus-docus.vercel.app/
[site2-1]: https://augus-code.netlify.app/
[site2-2]: https://augus-code.vercel.app/
[site3-1]: https://augus-art.netlify.app/
[site3-2]: https://augus-art.vercel.app/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[docus]: https://docus.dev
[vue]: https://vuejs.org
[vuepress]: https://v2.vuepress.vuejs.org
