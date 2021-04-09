---
id: kde-klipper-regex
title: KDE Klipper Regex
date: 2021-03-13 22:35:53
---

Right click on Klipper icon > Open Configure > Actions > + Add Action

Description:

```
remove subtitle timers
```

Command:

```
 echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\(.\)\n\n/\1 /g' | sed ':a;N;$!ba;s/\n//g' 
```

Output Handling:

```
Add to Clipboard
```

Description:

```
Remove Subtitle
```

Press Ok > Press Ok

Copy fragment with timer coding from `.src` files and press Ctrl+Alt+R > Select Remove Subtitle

## Thermonuclear Mix

I have combined two flavors of `sed`: simple and GNU. Simple  removes numbers. The GNU's variant removes the `/n`.

## Redirect output to variable

This command first clears the line, and then translates it:

```bash title="KDE Plasma Actions"
translate en ru $(echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\(.\)\n\n/\1 /g' | sed ':a;N;$!ba;s/\n//g' )
```

Read more: <a href='https://stackoverflow.com/questions/2559076/how-do-i-redirect-output-to-a-variable-in-shell' class='external'>stackoverflow.com: How Do I Redirect Output To A Variable In Shell</a>

## Sources

Read more about `sed`:<a href='https://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed' class='external'>stackoverflow.com</a>

About `Klipper`: <a href='https://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Use-Klipper-Clipboard-Actions-for-Better-Productivity' class='external'>linux-magazine.com: Use Klipper Clipboard Actions For Better Productivity</a>

`Klipper` docs:<a href='https://docs.kde.org/stable5/en/plasma-workspace/klipper/actions-page.html' class='external'>docs.kde.org: Actions Page</a>
