---
title: 'Docusaurus: Test & Build'
author: papa31
author_title: babel miner
author_url: https://github.com/papa31
author_image_url: https://graph.facebook.com/611217057/picture/?height=200&width=200
tags: [docusaurus, settings]
description: Setup all 3 ways Docusaurus start
image: https://i.imgur.com/mErPwqL.png
draft: true
---

To test your Docusaurus pages in a browser, you need to do [this setup](#) and run: `npm run start`.
To see your pages on your website, you need to [configure remote](#) and execute: `git push`.

But what if the local test succeeds but the remote build fails. 🤔
<!--truncate-->

## Initial Setup

Initially I configured Docusaurus-v2 to:  
    1) start the development server `npm run start` and  
    2) upload my content to GitHub using `git push`.

The symplified test pages were fine. But when rendering a large number of markdown files with links and images, deployment fails.

## Broken Links

This is the most common error. Best of all, you won't catch this error when you test pages through the development server with `npm run start`.

:::note Broken Links
You can only catch `broken links` when you **build**.
:::

I immediately got a broken link error when I uploaded quite a few raw pages on GitHub. But finding broken links on a remote server is not easy. Not enough information. You have to make **frequent commits**. And often without success.

To fix the broken links problem `without extra commits`, you need to do a local build.

## Local Build

To make build on your local machine and run server is not too hard:

```bash npm2yarn
npm run build
npm run serve
```

But there are pitfalls - `unstable BaseUrl`. In local build - ... In remote build - ...

## Unstable BaseUrl

This is common issue for **node world** projects: for local build you need to use the one data, for remote build the other data. 

### production/development issue

In first case I need:

`baseUrl = '/hm/'`

in other case:

`baseUrl = '/'`

One of the typical ways to resolve the problem is to use environment variables - `env`.

## env

The Docusaurus documentation has a section on [Environment settings](https://v2.docusaurus.io/docs/deployment/#environment-settings). But there is not enough information about utilites such as `cross-env`. This is the a utility that Docusaurus itself uses.

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
But how do I add an environment variable remotely?

### Set Remote `env`

You need use workflow file. 
Edit one line:

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

```bash title="PowerShell"
'cross-env' is not recognized as an internal or external command,
operable program or batch file.
```
Run this:

```bash
rm -rf node_modules && npm install
```

Doesn't help? Read other tips from [stackoverflow](https://stackoverflow.com/questions/43685777/laravel-mix-sh-1-cross-env-not-found-error).