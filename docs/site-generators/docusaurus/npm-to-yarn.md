---
id: npm-to-yarn
title: npm2yarn
---

If you want this Tabs behavier:

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

without annoying coding, you need to install npm2yarn plugin. It transforms npm bash command code blocks to Docusaurus tabs.

:::note
It only works when used with Docusaurus themes that have the Tabs and TabItems components.
:::

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

And add following three lines to your `docusaurus.config.js`:


```js {8,12,16} title="docusaurus.config.js"
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        blog: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        pages: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        // ...
      },
    ],
  ],
  // ...
};
```

Then you need clear cache:

```bash npm2yarn
npm run clear
```

and then run dev server again:

```bash npm2yarn
npm run start
```

to check if the plugin is working.

