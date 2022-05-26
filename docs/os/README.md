---
id: README
title: OS
date: 2022-05-22 20:12:20
sidebar_position: 2
sidebar_label: OS
sidebar_class_name: green
---

All You need is a USB drive and internet. In 5 minutes we will go through the history of Operation Systems, and in addition, the most modern OS in the world will be installed on your computer!

Proprietary era

## Multics

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

- **Developer:** _MIT_, _General Electric_, _Bell Labs_
-

- Multics, initially written on Assembler, inspired Unix
- Unix, implemented in C language, inspired other

</div>

## Unix

Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, whose development started in 1969 at the Bell Labs research center by Ken Thompson, Dennis Ritchie, and others.

The name Unix refers both to a multi-user, multi-tasking [operating system](https://distrowatch.com/dwres.php?resource=glossary#unix#os) developed by AT&T's Bell Labs _and_ to the family of operating systems which are derived from that original Unix operating system. Over the years, the original Unix inspired the rise of many operating systems which were either based off the code developed by Bell Labs or inspired by the Unix design.

- **Predsessor**: Multics (Assembler -> PL/I)
- _Single-tasking_ -> _Multi-tasking_
- **Start develop:** 1969
- **Language:** _Assembler_ 1969 -> _B_ -> _C_ 1973
- **Filesystem:** Unix file system (inode based)
- **Shell:** Unix-shell (shell scripting & command launguage)
- **"Pipes"** inter-procces communication
-

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
