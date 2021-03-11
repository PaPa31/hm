---
id: nvm-windows
title: nvm Windows
date: 2021-03-09 00:44:57
---

Manage multiple installations of node.js on a Windows computer.

Read more: <a href='https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows' class='external'>github.com</a>

## nvm-windows Installation

:::caution
Before installing `nvm`, you need to uninstall the independent `node` versions that were installed via [nodejs](../new-disk/git-bash-node-ssh).
:::

Download the latest installer <a href='https://github.com/coreybutler/nvm/releases' class='external'>github.com</a> (for example, `nvm-setup.zip`), unzip, run `nvm-setup.exe` file with default settings.

Restart the shell. Check:

```shell
npm --version
6.14.11
```

## node Installation

Then install node (for example, node 10):

:::note
I initially install nodejs version 10.x due to compatibility issues.
:::

```shell
nvm install 10.24.0
```

:::tip
You can see the required version number in <a href='https://nodejs.org/en/download/releases/' class='external'>nodejs.org</a>
:::

Then you need activate required node version:

```shell
nvm use 10.24.0
Now using node v10.24.0 (64-bit)
```

After that you can check the versions of `node` and `npm`:

```shell
node --version
v10.24.0

npm --version
6.14.11
```

Try using `npm` with `npm start`.
