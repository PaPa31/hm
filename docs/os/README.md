---
id: README
title: OS
date: 2022-05-22 20:12:20
sidebar_position: 2
sidebar_label: OS
sidebar_class_name: green
---

All you need is a USB drive and internet. In 5 minutes we will go through the history of Operation Systems, and in addition, the most modern OS in the world will be installed on your computer!

import styles from '@site/src/css/markdown.module.css'

## 1960s - Mainframe computers era

The origins of Unix date back to the mid-1960s when the Massachusetts Institute of Technology, Bell Labs, and General Electric were developing [Multics](https://en.wikipedia.org/wiki/Multics 'Multics ("Multiplexed Information and Computing Service") is an influential early time-sharing operating system based on the concept of a single-level memory. It has been said that Multics "has influenced all modern operating systems since, from microcomputers to mainframes".'), a [time-sharing](https://en.wikipedia.org/wiki/Time-sharing 'In computing, time-sharing is the sharing of a computing resource among many users at the same time by means of multiprogramming and multi-tasking.') operating system for the [GE-645](https://en.wikipedia.org/wiki/GE-600_series 'The GE 645 mainframe computer was a development of the GE 635 for use in the Multics project. This was the first computer that implemented a configurable hardware protected memory system.') mainframe computer.

![GE 645 Mainframe Computer](ge645-big.jpg)

<details>
  <summary>GE 645 (photo description) 
  </summary>

The operator console is front and center, with a [Selectric](https://multicians.org/mgs.html#Selectric 'IBM mechanism for typewriters and computer terminals. The character set was on a plastic "golf ball" that struck the paper through a typewriter ribbon. This mechanism was used in the IBM 1050 and 2741 terminals, in various third-party terminals, and in the console typewriter of the 6180. There were three grades of this mechanism OEM'd by IBM, light, medium, and heavy duty; the 6180 console had a heavy duty model.') mechanism and a little panel to the right that has the speedometer and the boot button. Front left is a [GE-645](https://multicians.org/mga.html#645 'Computer system that Multics first ran on, produced by General Electric. Derived from the GE-635, a 36-bit word machine with accumulator, quotient register, and 8 index registers like the 7094. Basic execution speed was about 435 KIPS.') CPU. Another CPU is near the back of the room by the door. To the left of the rear CPU are two x-shaped configurations of cabinets: these are [GIOCs](https://multicians.org/mgg.html#GIOC 'Generalized I/O Controller. This box did all the I/O for the 645. Some programmers pronounced this by spelling it out, but the field engineers tended to say "gee-yock."'). I guess those are memory boxes to the left of the GIOCs. The three-bay cabinets behind the front CPU, on the left side, may be [Librafile](https://multicians.org/mgl.html#Librafile "The "Firehose drum." A large, fixed-head (head per track, hence indistinguishable from a drum), disk used on 645 Multics first as simply the highest-speed secondary storage device, then as a storage device targeted for user temporary segments such as stacks, and finally as the first paging device. See page multilevel.") ("firehose") drums, with drum controllers behind them. The MIT configuration had two PRT202 printers (not four), two card readers, two punches. I have no idea what the device is on the extreme right front, that appears to have three tape reels. I also do not see the [RACE](https://multicians.org/mgr.html#RACE 'The initial 645 configuration shipped to MIT included an RCA RACE unit in GE skins. This was a datacell-like device, about 15 feet long, containing bins, each bin filled with magnetic strips about one foot wide by two feet long. In operation, the device transported a particular bin to the reading station, selected a strip using notches at the top of the strip, picked the strip out of the bin and wrapped it around a drum, and treated it as a sort of magnetic drum storage.') file which was installed in the Tech Square machine room for a while but never used. See the [detailed configuration memo](https://multicians.org/config67.html 'sites: MIT and BTL Hardware (1967)') from 1967.

</details>

The GE-600 line of computers was developed by a team led by [John Couleur](https://en.wikipedia.org/wiki/John_Couleur 'During the Korean War, he served as a lieutenant in the United States Air Force. Couleur joined the General Electric Company. In 1953, at GE's Heavy Military Electronics Department (HMED) in Syracuse, New York, he served as lead architect on the development of the MISTRAM tracking system for the Atlas Missile.') out of work they had done for the military [MISTRAM](https://en.wikipedia.org/wiki/MISTRAM 'MISTRAM (MISsile TRAjectory Measurement) was a high-resolution tracking system used by the United States Air Force (and later NASA) to provide highly detailed trajectory analysis of rocket launches. ') project in 1959. MISTRAM was a [radar](https://en.wikipedia.org/wiki/Radar 'Radar (Radio Detection And Ranging) is a detection system that uses radio waves to determine the distance (ranging), angle, and radial velocity of objects relative to the site. It can be used to detect aircraft, ships, spacecraft, guided missiles, motor vehicles, weather formations, and terrain. ') tracking system that was used on a number of projects, including [Project Apollo](https://en.wikipedia.org/wiki/Project_Apollo 'The Apollo program, also known as Project Apollo, was the third United States human spaceflight program carried out by the National Aeronautics and Space Administration (NASA), which succeeded in preparing and landing the first humans on the Moon from 1968 to 1972.').

## Multics

Initial planning and development for Multics started in 1964, in Cambridge, Massachusetts. Originally it was a cooperative project led by [MIT](https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology 'Massachusetts Institute of Technology') ([Project MAC](https://en.wikipedia.org/wiki/Project_MAC 'On July 1, 1963, Project MAC (the Project on Mathematics and Computation, later backronymed to Multiple Access Computer, Machine Aided Cognitions, or Man and Computer) was launched with a $2 million grant from the Defense Advanced Research Projects Agency (DARPA).') with Fernando Corbató, on photo below) along with General Electric and Bell Labs. It was developed on the GE 645 computer, which was specially designed for it; the first one was delivered to MIT in January, 1967.

![Fernando Corbato in MIT 1960s](fernando-corbato-in-MIT-1960s.jpg 'Fernando Corbató at MIT in the 1960s')

<div className={styles.colorRed}>

> ### Multics OS
>
> - **Start develop:** _1964_
> - **Developer:** _MIT_, _General Electric_, _Bell Labs_
> - **Language:** _Assembler_ -> _PL/I_
> - **Inspired:** _Unix_

</div>

## Birth of Unix

In 1969 Bell Labs pulled out of the Multics project; some of the people who had worked on it there went on to create the Unix system.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## IBM

GE originally had not intended to enter the commercial computer market with their own machine. However, by the early 1960s GE was the largest user of IBM mainframes,[citation needed] and producing their own machines seemed like an excellent way to lower the costs of their computing department.

In August 1964, IBM considered the GE 600 series to be "severe competition in the medium and large-scale scientific areas".
