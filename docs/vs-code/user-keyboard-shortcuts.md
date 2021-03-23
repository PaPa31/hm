---
id: user-keyboard-shortcuts
title: User Keyboard Shortcuts 
date: 2021-02-15 15:02:28
description: What keyboard shortcuts do I use with VS Code 
---

## Sync Keyboard Shortcuts

How do I sync keyboard shortcuts across platforms (Linux, Windows, Mac)?

Internal settings do not support this option.

I copied `keybindings.json` when I being in Linux to Windows disk:

```shell title="keybindings.json"
cp ~/.config/Code/User/keybindings.json '/mnt/sdc1/Users/parsh/Application Data/Code/User/'
```

## Keyboard Shortcuts List

| | Keyboard Shortcut | How Did | Description | Result |
-|-|-|-|-
1 | `Ctrl+K t` | [copy/past](https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode#57654879) to keybindings.json | Insert readable Date & Time | 2021-02-05 20:22:46
2 | `Ctrl+K Shift+t` | see above| Insert unreadable Date & Time | 20210205202330
3 | Change ~~`Shift+Alt+/`~~ to `Ctrl+Shift+/` | Press `Ctrl+Shift+P`> type Emmet: Wrap with Abbreviation > press `gear` icon | Wrap with `some` HTML-tags | type log2 > select 2 > `Ctrl+Shift+/` > type sub + Enter > log<sub>2</sub>
4 | `Ctrl+E Up` | [Snippet + Shortcut](snippets/snippet-plus-shortcut) | Wrap with `<sup>` tags | 23 -> 2<sup>3</sup>
5 | `Ctrl+E Down` | see above | Wrap with `<sub>` tags | log2 -> log<sub>2</sub>
6 | `Ctrl+E t` | see above | Wrap with `<textarea>` and some text | `<textarea>Your answer:</textarea>`
7 | `Ctrl+G c` |  | add markdown admonition | `::: :::`
8 | `Ctrl+G t` |  | add markdown code block | ``````
9 | `Alt+G c`  | [Macros: Auto Frontmatter](macros/auto-frontmatter) | add markdown frontmatter | `--- ... ---`
10 | `Alt+G a` | make external link with 2 vars | 1st var -> copy some link; 2nd var highlight some text | <a href='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode' class='external'>Prettier</a>
