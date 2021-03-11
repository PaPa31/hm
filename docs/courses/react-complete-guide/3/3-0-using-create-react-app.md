---
id: using-create-react-app
title: Using create-react-app
date: 2021-03-09 15:56:53
description: Create React apps with no build configuration.
---

Read more: <a href='https://github.com/facebook/create-react-app' class='external'>github.com</a>

## nvm, node.js, и npm Installation

First, install nvm <a href='https://github.com/nvm-sh/nvm#installation' class='external'>github.com</a> (macOS/Linux) or [nvm-windows](../../../node/nvm-windows) to switch Node versions between different projects.

```shell
npx create-react-app react-complete-guide
```

:::warning
If you run something like this:

```shell
npx create-react-app react-complete-guide --scripts-version 1.1.5
```

You'll get more simplified folder structure, but `--scripts-version 1.1.5` may result in a error `Something is already running on port 3000` when you run `npm start`. Especially on Windows [nvm](../../../node/nvm-windows). See solution below.
:::

### Solution `port 3000` error

You need to install a more recent version of `react-script`. If you've already installed it, you need to uninstall the react-script first:

```shell
npm uninstall react-scripts --save && npm install react-scripts@3.2.0 --save
```

Read more: <a href='https://stackoverflow.com/questions/59271634/react-npm-start-windows-cannot-find-localhost' class='external'>stackoverflow.com</a>
