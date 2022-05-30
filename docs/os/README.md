---
id: README
title: Multics
date: 2022-05-22 20:12:20
sidebar_position: 2
sidebar_label: OS
sidebar_class_name: green
---

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

<dl>
  <dt>Start develop</dt><dd>1964</dd>
  <dt>Developer</dt><dd>MIT, General Electric, Bell Labs</dd>
  <dt>Language</dt><dd>Assembler -> <abbr title="Programming Language One">PL/I</abbr></dd>
</dl>

</div>

## 1960s - Mainframe computers era

In the late 1960s, Bell Labs was involved in a project with MIT and General Electric to develop a multitasking operating system called <abbr title="Multiplexed Information and Computing Service">Multics</abbr> for the <abbr title="General Electric 645 mainframe computer">GE-645</abbr>, allowing multiple users to access the mainframe at the same time.

![GE 645 Mainframe Computer](ge645-big.jpg)

## Birth of Unix

Bell Labs, frustrated by the size and complexity of Multics but not its aims, slowly pulled out of the project. Their last researchers who left Multics decided to redo the work, but on a much smaller scale.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
