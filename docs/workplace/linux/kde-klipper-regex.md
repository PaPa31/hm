---
id: kde-klipper-regex
title: Kde Klipper Regex
date: 2021-03-13 22:35:53
---

Right click on Klipper icon > Open Configure > Actions > + Add Action

Description:

```
remove subtitle timers
```

Command:

```
 echo %s | sed  's/^[0-9].*//' | sed ':a;N;$!ba;s/\(.\)\n\n/\1 /g' | sed ':a;N;$!ba;s/\n//g' 
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

Read more about `sed`:<a href='https://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed' class='external'>stackoverflow.com</a>

About `Klipper`: <a href='https://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Use-Klipper-Clipboard-Actions-for-Better-Productivity' class='external'>www.linux-magazine.com</a>
