---
id: auto-front-matter
title: Auto Front Matter in VS Code
date: 2021-02-21 18:52:09
description: How to make a snippet in VS Code that will take data from the file name and fill the front-matter with it
---

You are creating a new markdown file in VS Code. You open it. And the first thing you need to do is fill out the boring front matter!

Let's make a VS Code snippet that automates almost all of the work!

This is an example:

```json title="markdown.json"

	"Id": {
		"prefix": "Docusaurus-id",
		"body": [
			"---",
			"id: $TM_FILENAME_BASE",
			"title:${TM_FILENAME_BASE/^(.)|-(.)/ ${1:/upcase}${2:/upcase}/g}",
			"date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
			"description: $1",
			"---",
			"",
			"$2"
		],
		"description": "Print out Docusaurus markdown title"
	},

```

from: <https://code.visualstudio.com/docs/editor/userdefinedsnippets>
