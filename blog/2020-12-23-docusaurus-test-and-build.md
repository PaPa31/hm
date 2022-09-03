---
title: 'Docusaurus: Test & Build'
authors: [papa31]
tags: [docusaurus, settings, broken links, env]
description: Setup all 3 ways Docusaurus start
image: i.imgur.com/mErPwqL.png
draft: false
---

What if the local Docusaurus runs successfully, but the remote build fails.

<!--truncate-->

## Initial Setup

Initially I configured Docusaurus-v2 to:

1. start the development server `npm run start` and
2. upload my content to GitHub using `git push`.

The simplified test pages were fine. But when rendering many markdown files with links and images, deployment fails.

## Broken Links

This is the most common error. Best of all, you won't catch this error when you test pages through the development server with `npm run start`.

::: note Broken Links You can only catch `broken links` when you **build**. :::

I immediately got a broken link error when I uploaded quite a few raw pages on GitHub. But finding broken links on a remote server is not easy. Not enough information. You have to make **frequent commits**. And often without success.

To fix the broken links' problem `without extra commits`, you need to do a local build.

## Local Build

To make build on your local machine and run server is not too hard:

```bash npm2yarn
npm run build
npm run serve
```

But there are pitfalls — `unstable BaseUrl`. In local build — ... In remote build — ...

## Unstable BaseUrl

This is common issue for **node world** projects: for local build you need to use the one data, for remote build the other data.

### production/development issue

In first case I need:

`baseUrl = '/hm/'`

in other case:

`baseUrl = '/'`

One of the typical ways to resolve the problem is to use environment variables — `env`.

## env

The Docusaurus documentation has a section on [Environment settings](https://v2.docusaurus.io/docs/deployment/#environment-settings). But there is not enough information about utilities such as `cross-env`. This is a utility that Docusaurus itself uses.

### cross-env

Run scripts that set and use environment variables across platforms

Install:

```bash npm2yarn
npm install --save-dev cross-env
```

Three lines:

```json title="package.json" {5,8,11}
{
  "name": "notes",
  "version": "0.0.0",
  "private": true,
  "homepage": "/hm",
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "cross-env BASE_URL='/hm/' docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "cross-env BASE_URL='/hm/' GIT_USER=git USE_SSH=true docusaurus deploy",
    "serve": "docusaurus serve",
    "clear": "docusaurus clear"
  },

  ...
```

Two lines:

```js title="docusaurus.config.js" {1,7}
const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: 'hm',
  tagline: 'Human@Machine',
  url: 'https://papa31.github.io',
  baseUrl,
  onBrokenLinks: 'throw',

  ...
```

<!-- prettier-ignore-start -->
:::warning

If you get the error:

```sh
'cross-env' is not recognized
```

You can run these two commands in your `bash` (Linux) or `Git Bash` (Windows):

```sh
rm -rf node_modules package-lock.json
npm i
```

Or you can try [install cross-env globally](https://stackoverflow.com/questions/45034581/laravel-5-4-cross-env-is-not-recognized-as-an-internal-or-external-command)

:::
<!-- prettier-ignore-end -->

But how do I add an environment variable remotely?

### Set Remote `env`

You need use workflow file. Edit one line:

```yml title="/.github/workflows/documentation.yml" {7}
        ...

      - name: Release to GitHub Pages
        env:
          USE_SSH: true
          GIT_USER: git
          BASE_URL: '/hm/'
        run: |
          git config --global user.email "actions@gihub.com"
          git config --global user.name "gh-actions"
          if [ -e yarn.lock ]; then
          yarn install --frozen-lockfile
          elif [ -e package-lock.json ]; then
          npm ci
          else
          npm i
          fi
          npx docusaurus deploy
```

## todo: insert whole files as in Docusaurus site docs(?)

## Windows

If error:

```powershell title="PowerShell"
'cross-env' is not recognized as an internal or external command,
operable program or batch file.
```

Run this:

```powershell
rm -rf node_modules && npm install
```

Doesn't help? Read other tips from [stackoverflow](https://stackoverflow.com/questions/43685777/laravel-mix-sh-1-cross-env-not-found-error).
