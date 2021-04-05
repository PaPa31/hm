---
id: 5-10-working-with-css-modules
title: 5.10 Working With CSS Modules
date: 2021-04-04 18:44:21
---

## `npm run eject`

```bash npm2yarn
npm run eject
```

After successfully ejected, add two lines in these two files:

```js title="config/webpack.config.dev.js" {8-9}
        ...
158         use: [
159           require.resolve("style-loader"),
160           {
161             loader: require.resolve("css-loader"),
162             options: {
163               importLoaders: 1,
                  modules: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]",
164             },
165           },
166           {
        ...
```

```js title="config/webpack.config.prod.js" {9-10}
            ...
169               use: [
170                 {
171                   loader: require.resolve("css-loader"),
172                   options: {
173                     importLoaders: 1,
174                     minimize: true,
175                     sourceMap: shouldUseSourceMap,
                        modules: true,
                        localIdentName: "[name]__[local]__[hash:base64:5]",
176                   },
177                 },
178                 {
            ...
```

## CSS Modules Feature

This feature gives unique names to CSS class names. In this manner:

```html
<button class="App__Button__2_NDl">Toggle Persons</button>
```
