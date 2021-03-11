---
id: regex-examples
title: Regex Examples
date: 2021-02-24 11:04:46
description: My VS Code regex examples
---

||What Did|Find|Replace
-|-|-|-
1|Wrap with Italic/Bold|`- ([^\\:]+)`|`- ***$1***`
2|From Italic/Bold to Bold|`\*{3}(.*)\*{3}`|`**$1**`
3|Add to \`\`\` jsx|`(```)(\n.)`|`$1jsx$2`
4|Remove double spaces|\`\s(\s.)|\`$1
5|Delete unnessesary `\n`| `\n(\n```\n\n)` | $1
6|Replace two empty links with one non-empty one|`\[\]\(.*\n.*[^\(]+.(.*[^\)])\)(.*)`| `$2\n\n[$2]($1`
7|See above, but replace with `<a>`|`\[\]\(.*\n.*[^\(]+.(.*[^\)])\)(.*)`|`$2\n\n$2 <a href='$2' class='external'>$1</a>`
8|Replace markdown link with html link|`\[.*\/\/([^\/]+)\/.*\]\((.*)\)`|`<a href='$2' class='external'>$1</a>`
