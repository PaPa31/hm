---
id: README
title: Unix "Worse is better" ☮️
date: 2022-05-26 12:27:05
---

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

## 1970s - Minicomputers era

![Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11](Ken_Thompson_sitting_and_Dennis_Ritchie_at_PDP-11.jpg 'Ken Thompson (sitting) and Dennis Ritchie working together at a PDP-11')

### Unix OS

<dl>
  <dt>Start develop</dt>
  <dd>1969</dd>
  <dt>Developer</dt>
  <dd>Ken Thompson, Dennis Ritchie, and others (Bell Labs)</dd>
  <dt>Language</dt>
  <dd>Assembler -> C</dd>
</dl>

</div>

After AT&T Bell Labs had dropped out of the Multics project, the Unix operating system was conceived and implemented by Ken Thompson and Dennis Ritchie (both of AT&T Bell Laboratories) in 1969 and first released in 1970. Later they rewrote it in a new programming language, C, to make it portable. The availability and portability of Unix caused it to be widely adopted, copied and modified by academic institutions and businesses.

The first versions of Unix were written in assembly language. But in 1973, Version 4 Unix was rewritten in <abbr title="General-purpose computer programming language">C</abbr>. C was originally developed at Bell Labs by Dennis Ritchie. The availability of a <abbr title="A programming language with a strong abstraction from computer details">high-level language</abbr> implementation of Unix made its porting to different computer platforms easier.

### Unix philosophy

- small is better
- make each program do one thing well
- everything is a file
- store data in human-readable text files

## 1980s - Open Source era

### GNU

In 1983, Richard Stallman started the <abbr title="GNU's Not Unix">GNU</abbr> project with the goal of creating a free UNIX-like operating system. As part of this work, he wrote the <abbr title="A series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software">GNU General Public License</abbr> (GPL). By the early 1990s, there was almost enough available software to create a full operating system. However, the GNU kernel, called [Hurd](https://www.gnu.org/software/hurd/hurd.html), failed to attract enough development effort, leaving GNU incomplete.

In 1983, Richard Stallman announced the <abbr title="GNU's Not Unix">GNU</abbr> project, an ambitious effort to create a free software Unix-like system. Most of the pieces of the operating system were in place and functioning, with the notable exception of a <abbr title="The program that underlies the operating system and usually controls everything on the system">kernel</abbr>.

### 32-bit CPU

In 1985, Intel released the 80386, the first x86 microprocessor with a 32-bit instruction set and a memory management unit with paging.

### Book about Unix kernel

In 1986, Maurice J. Bach, of AT&T Bell Labs, published The Design of the UNIX Operating System. This definitive description principally covered the System V Release 2 kernel, with some new features from Release 3 and BSD.

### Minix

In 1987, MINIX was created by Andrew S. Tanenbaum, a computer science professor, and released in 1987 as a minimal Unix-like operating system targeted at students and others who wanted to learn operating system principles.

MINIX was written from scratch by Andrew S. Tanenbaum in the 1980s, as a Unix-like operating system whose source code could be used freely in education.

In 1987, MINIX, a Unix-like system intended for academic use, was released by Andrew S. Tanenbaum to exemplify the principles conveyed in his textbook, Operating Systems: Design and Implementation. While source code for the system was available, modification and redistribution were restricted. In addition, MINIX's 16-bit design was not well adapted to the 32-bit features of the increasingly cheap and popular Intel 386 architecture for personal computers. In the early nineties a commercial UNIX operating system for Intel 386 PCs was too expensive for private users.

An abridged 12,000 lines of the C source code of the kernel, memory manager, and file system of MINIX 1.0 are printed in the book. Prentice-Hall also released MINIX source code and binaries on floppy disk with a reference manual. MINIX 1 was system-call compatible with Seventh Edition Unix.

MINIX was created by Andrew S. Tanenbaum, a computer science professor, and released in 1987 as a minimal Unix-like operating system targeted at students and others who wanted to learn operating system principles. Although the complete source code of MINIX was freely available, the licensing terms prevented it from being free software until the licensing changed in April 2000.

In 1991, while attending the University of Helsinki, Torvalds became curious about operating systems. Frustrated by the licensing of MINIX, which at the time limited it to educational use only, he began to work on his own operating system kernel, which eventually became the Linux kernel.

### Linux kernel

In 1991, while studying computer science at University of Helsinki, Linus Torvalds began a project that later became the Linux kernel. He wrote the program specifically for the hardware he was using and independent of an operating system because he wanted to use the functions of his new PC with an 80386 processor. Development was done on MINIX using the GNU C Compiler.

In 1991, Linus Torvalds created the <abbr title="A UNIX clone written from scratch by Linus Torvalds">Linux kernel</abbr>. Developers from around the world began to use the GNU Operating System with the Linux kernel. The combination of the two (GNU and Linux) is called GNU/Linux or a GNU/Linux [distribution](https://distrowatch.com/dwres.php?resource=glossary#distribution).

It was originally authored in 1991 by Linus Torvalds for his i386-based PC, and it was soon adopted as the kernel for the GNU operating system, which was written to be a free (libre) replacement for UNIX.

After that, despite the limited functionality of the early versions, Linux rapidly gained developers and users. Many people contributed code to the project, including some developers from the MINIX community. At the time, the GNU Project had created many of the components required for its free UNIX replacement, the GNU operating system, but its own kernel, GNU Hurd, was incomplete. For this reason it soon adopted the Linux kernel as well.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';


<DocCardList items={useCurrentSidebarCategory().items}/>
```
