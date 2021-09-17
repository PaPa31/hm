---
id: download-one-github-folder
title: Download One Github Folder
date: 2021-02-27 16:58:54
description: How to download one folder from GitHub
---

How to download one GitHub folder?

## Kinolien

It can make sub-folder/sub-directory of github repository as zip and download it.

Go to <a href='http://kinolien.github.io/gitzip/' class='external'>kinolien.github.io</a>

:::tip It can download even private repo folders :::

:::caution Need GitHub token for downloading. Here <a href='https://github.com/KinoLien/gitzip/blob/gh-pages/get-token-step.md' class='external'>github.com</a> how to get token. :::

## git

```shell
git clone <URL> --no-checkout <directory> --depth 1
```

then

```shell
cd <directory>
git sparse-checkout init --cone  # to fetch only root files
```

from: <a href='https://stackoverflow.com/questions/4114887/is-it-possible-to-do-a-sparse-checkout-without-checking-out-the-whole-repository/60729017#60729017' class='external'>stackoverflow.com</a>

## Don't work Don't work

Go to the <a href='https://downgit.github.io/' class='external'>downgit.github.io</a>

Put the folder path like:

```shell
https://github.com/grpc/grpc/tree/master/examples/python/helloworld
```

Click the `Download` button and save the zip-file with the desired GitHub folder.

Other methods: <a href='https://stackoverflow.com/questions/7106012/download-a-single-folder-or-directory-from-a-github-repo' class='external'>stackoverflow.com</a>
