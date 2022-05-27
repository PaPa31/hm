---
id: README
title: Unix
date: 2022-05-26 12:27:05
---

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

## 1970s - Minicomputers era

![Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11](Ken_Thompson_sitting_and_Dennis_Ritchie_at_PDP-11.jpg 'Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11')

> ### Unix OS
>
> - **Start develop:** _1969_
> - **Developer:** _Ken Thompson_, _Dennis Ritchie_, _and others_ (_Bell Labs_)
> - **Language:** _Assembler_ -> _C_
> - _Modular Design_

</div>

The first versions of Unix were written in assembly language. But in 1973, Version 4 Unix was rewritten in C.

C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. C was applied to re-implementing the kernel of the Unix operating system.

### Unix philosophy

- small is better
- make each program do one thing well

## 1980s - Open Source era

### GNU

GNU is a collection of software which makes up an operating system that is licensed as [free software](https://distrowatch.com/dwres.php?resource=glossary#freesoftware). GNU, which is sometimes called the GNU Operating System, was founded by Richard M Stallman and is sponsored by the [Free Software Foundation](http://www.fsf.org/).

In the 1980s, GNU formed a mostly complete [Unix](https://distrowatch.com/dwres.php?resource=glossary#unix)\-like operating system. Most of the pieces of the operating system were in place and functioning, with the notable exception of a [kernel](https://distrowatch.com/dwres.php?resource=glossary#kernel). In the early 1990s, Linus Torvalds created the [Linux](https://distrowatch.com/dwres.php?resource=glossary#linux) kernel. Developers from around the world began to use the GNU Operating System with the Linux kernel. The combination of the two (GNU and Linux) is called GNU/Linux or a GNU/Linux [distribution](https://distrowatch.com/dwres.php?resource=glossary#distribution).

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';


<DocCardList items={useCurrentSidebarCategory().items}/>
```
