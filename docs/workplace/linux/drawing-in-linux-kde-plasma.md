---
id: draw-in-linux-kde-plasma
title: Drawing on the desktop in Linux KDE Plasma
date: 2021-02-14
description: How to draw with mouse on the desktop in Linux KDE Plasma
---

Draw in KDE/Plasma without additional installation.

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
```

<Tabs defaultValue="mx-19" values={[ { label: "MX-19", value: "mx-19" }, { label: "MX-21", value: "mx-21" } ]}> <TabItem value="mx-19">

```shell
System Settings > Desktop Behavior > Desktop Effects > Mouse Mark
```

</TabItem>

<TabItem value="mx-21">

```shell
System Settings > Workspace Behavior > Desktop Effects > Mouse Mark
```

</TabItem>
</Tabs>

Allow you to draw lines on the desktop. And then you can take screenshots with these simplified drawings.

## Default Keyboard Shortcuts

|     | Action                | Keyboard Shortcut                 |
| --- | --------------------- | --------------------------------- |
| 1   | Draw                  | Meta\* + Shift + moving the mouse |
| 2   | Clear last mouse mark | Meta + Shift +F12                 |
| 3   | Clear mouse marks     | Meta + Shift + F11                |

Meta key - is a Windows Key

## Default Settings

You can change color and width of the drawn lines in Settings:

`System Settings > Desktop Behavior > Desktop Effects > Mouse Mark`

Default appearance:

```
width: 3px

color: red
```

Example of drawing:

[![Drawing in Linux KDE Plasma](drawing-in-linux-kde-plasma.png)](drawing-in-linux-kde-plasma.png)

From: https://superuser.com/questions/934146/how-to-draw-an-arrow-with-kde-plasmas-mouse-tracker#:~:text=You%20can%20%22draw%22%20an%20arrow,Meta%2BCtrl%2BShift%20twice
