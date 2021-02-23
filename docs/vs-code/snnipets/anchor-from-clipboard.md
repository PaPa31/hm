---
id: anchor-from-clipboard
title: Anchor From Clipboard
date: 2021-02-22 14:34:39
description: Make anchor from clipboard with regex
---

This snippet is universal. It's useful with `markdown` files, `javascript` and `html` files, so we'll make a global snippet.

## Global Snippets

Find your global snippet file in `File > Preferences > User Snippets` and open it. If this file doesn't exist, create it using the `New Global Snippets file...` parameter. Type a file name such as `global` and press `Enter`. In this case the filename should be `global.code-snippets`.

Full path to this file in Linux `/home/papa/.config/Code/User/snippets/global.code-snippets`.

Copy/past this code into the `global.code-snippets` file, save it and use it.

```json title="global.code-snippets" {2,5}
	"anchor": {
		"scope": "javascript,typescript,html,markdown",
		"prefix": "Anchor-from-Clipboard",
		"body": [
			"<a href='$CLIPBOARD' class='external'>${CLIPBOARD/.*\\/\\/([^\\/]+)\\/.*/$1/}</a>",
		],
		"description": "Make anchor from clipboard with regex"
	},
```

### Scope

Notice this line `"scope": "javascript,typescript,html,markdown",` in the above code. It is an array of types. If you want to use this snippet in different types of files, you need to insert those types into this array.

### RegEx

The regular expression processes the CLIPBOARD variable, clearing it of redundant data:

```shell
CLIPBOARD/.*\\/\\/([^\\/]+)\\/.*/$1/
```

As result, after copying the link and executing the snippet via `Ctrl + Space` we will have:

```jsx
<a href='https://code.visualstudio.com/docs/editor/userdefinedsnippets' class='external'>code.visualstudio.com</a>
```

## Usage

Copy some `url` > type `anc` in document > press `Ctrl + Space` > Select `Anchor-from-Clipboard`

The links you see below are made using this snippet. Easy and fast.

## Source

- <a href='https://code.visualstudio.com/docs/editor/userdefinedsnippets' class='external'>code.visualstudio.com</a>
- <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>stackoverflow.com</a>
