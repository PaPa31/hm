---
id: auto-frontmatter
title: Auto Frontmatter
date: 2021-03-16 09:55:20
---

- Install <a href='https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command&ssr=false#overview' class='external'>multi-command</a> extension
- Copy/past at the end of the `settings.json` file:

```json title="settings.json"
"multiCommand.commands": [
  {
    "command": "multiCommand.autoFrontmatter",
    "label": "Markdown",
    "description": "Auto Frontmatter",
    "sequence": [
      "cursorTop",
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "---\n"
        }
      },
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "id: $TM_FILENAME_BASE\n"
        }
      },
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}"
        }
      },
      "cursorLineStartSelect",
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "${TM_SELECTED_TEXT/(\\d+)\\s(?=\\d)/$1./g}\n"
        }
      },
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND\n"
        }
      },
      {
        "command": "editor.action.insertSnippet",
        "args": {
          "snippet": "---\n\n"
        }
      }
    ]
  }
],
```

- copy/past to `keybindings.json`:

```json title="keybindings.json"
{
  "key": "alt+g c",    // whatever keybinding you like
  "command": "extension.multiCommand.execute",
  "args": { "command": "multiCommand.autoFrontmatter" },
},
```

I took it from here:

- <a href='https://stackoverflow.com/questions/64487646/nested-regex-replacement-in-vs-code-snippet' class='external'>stackoverflow.com: Refactor Headings</a>
- or <a href='https://stackoverflow.com/questions/59759720/vs-code-snippets-regex-multiple-operations' class='external'>stackoverflow.com: Replace Danish Characters</a>

## Result

The rest of the methods (snippet manipulations) were unsuccessful.

Now you can type `Alt+G c` and you'll automatically get a front matter with 3 fields:

```md
---
id: auto-front-matter
title: auto Front Matter
date: 2021-03-16 11:26:47
---
```

## To Do

I want this command macro to run whenever I create a new markdown file.
