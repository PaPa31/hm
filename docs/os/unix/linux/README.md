---
id: README
title: Linux "Everything is a file" 💾
date: 2022-05-23 00:44:13
Description: Linux kernel - a UNIX clone by Linus Torvalds
---

## GNU/Linux distribution

Linus Torvalds used and appreciated Minix, but his design deviated from the Minix architecture in significant ways, most notably by employing a monolithic kernel instead of a microkernel.

When Linus Torvalds first started writing his Linux operating system kernel (1991), he was working on a machine running MINIX, and adopted its file system layout. This soon proved problematic, since MINIX restricted filename lengths to 14 characters (30 in later versions), it limited partitions to 64 megabytes, and the file system was designed for teaching purposes, not performance. The Extended file system (ext; April 1992) was developed to replace MINIX's, but it was only with the second version of this, ext2, that Linux obtained a commercial-grade file system. As of 1994, the MINIX file system was "scarcely in use" among Linux users.

On 17 September 1991, Torvalds prepared version 0.01 of Linux and put on the "ftp.funet.fi" – FTP server of the Finnish University and Research Network (FUNET). It was not even executable since its code still needed Minix for compilation and play.

## Debian (Stable)

Community-supported Debian Project, which was established by Ian Murdock in 1993. The Debian <a href='https://en.wikipedia.org/wiki/Debian#Branches' class='external'>Stable branch</a> is the most popular edition for personal computers and servers. Debian is also the basis for many other distributions, most notably Ubuntu.

But the most popular Linux distro in the world (see <a href='https://distrowatch.com/dwres.php?resource=popularity' class='external'>distros rank</a>) is MX Linux.

## MX Linux

MX Linux, a desktop-oriented Linux distribution based on Debian's "Stable" branch, is a cooperative venture between the antiX and former MEPIS Linux communities.

import styles from '@site/src/css/markdown.module.css'

<div className={styles.colorRed}>

- **OS Type:** Linux
- **Based on:** Debian (Stable), antiX
- **Origin:** Greece
- **Architecture:** armhf, i686, x86_64
- **Desktop:** KDE Plasma, Xfce, Fluxbox
- **Category:** Desktop, From RAM, Live Medium, Raspberry Pi
- **Status:** Active
- **Popularity:** 1 (3,091 hits per day)

</div>

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';


<DocCardList items={useCurrentSidebarCategory().items}/>
```
