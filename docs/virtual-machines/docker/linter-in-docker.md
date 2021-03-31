---
id: linter-in-docker
title: Linter In Docker
date: 2021-03-28 22:31:35
---

First, install the VS Code `LanguageTool` extension (Grammar, Style and Spell Checking in VS Code via <a href='https://www.languagetool.org/' class='external'>LanguageTool (languagetool.org)</a>. Support Markdown, MDX, HTML, and plain text files.):

<a href='https://marketplace.visualstudio.com/items?itemName=davidlday.languagetool-linter' class='external'>marketplace.visualstudio.com: Languagetool Linter</a>

## Install Docker software

Then you need to [install `Docker` software](install-docker-software) on your system.

## Run Container in Shell

Pull the `Dockerfile` (to get the languagetools running on a system without `java`):

```shell
docker pull silviof/docker-languagetool
```

Run it:

```shell
docker run --rm -p 8010:8010 silviof/docker-languagetool
```

## Run Container in VS-Code

Install the `Docker` extension.

> To install the extension, open the Extensions view, search for ***docker*** to filter results and select Docker extension authored by Microsoft.

> The extension recognizes workspaces that use most popular development languages (C#, Node.js, Python, Ruby, Go, and Java) and customizes generated Docker files accordingly.

Open the Docker view. Click on `languagetool` image. Right-click on `latest`. Select `Run`.

Source:

- <a href='https://github.com/davidlday/vscode-languagetool-linter' class='external'>GitHub.com: VS Code Languagetool Linter</a>
- <a href='https://github.com/silvio/docker-languagetool' class='external'>GitHub.com: Docker Languagetool</a>
- <a href='https://gnulinux.ch/languagetool-in-vs-code' class='external'>gnulinux.ch: Languagetool In VS Code</a>
