---
id: exercises-101-130
title: Exercises 1.1-1.30
---

View all answers: [Harris Solutions](../pdf/harris-solutions.pdf)

And my Solutions below. Solutions marked with ![alt text][logo] symbol I must explore!

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

## Exercise 1.1 Three level of abstraction

 a) Biological abstraction at the cell level: ![alt text][logo]

- g̶e̶n̶e̶s̶
- D̶N̶K̶ m̶o̶l̶e̶c̶u̶l̶e̶s̶
- c̶e̶l̶l̶ n̶u̶c̶l̶e̶u̶s̶  

 b) Abstractions of chemistry about material:

- atom nucleus: electrons, protons, neutrons
- atom
- molecules
- crystal cell

## Exercise 1.2 Using Hierarchy, Modularity, Regularity

a) By automobile designers: Hierarchy - Split auto by an modules. Иерархия - всё разбито на системы. Системы на подсистемы. Модульность - выбор вариантов в магазине автозапчастей. Регулярность - расходники. От шин до незамерзайки с "елочкой" для запаха.

b) By businessman in daily deals: An hierarchy of report. Employee -> division manager -> general manager -> vice president -> president. Accountants add data of all departments and report to investors. Investors are compared to other companies.  Б̶и̶з̶н̶е̶с̶ д̶е̶л̶и̶т̶с̶я̶ н̶а̶ о̶п̶е̶р̶а̶т̶и̶в̶н̶у̶ю̶ д̶е̶я̶т̶е̶л̶ь̶н̶о̶с̶т̶ь̶,̶ р̶а̶з̶р̶а̶б̶о̶т̶к̶у̶ н̶а̶ б̶у̶д̶у̶щ̶е̶е̶.̶

## Exercise 1.3 Ben Bitdiddle is building a house. Save him money and time with three y's principals

My:

- Hierarchy: foundation -> walls with windows and doors -> roof. A frame house is building from modules. Hire seasonal workers. Buy modules in one go. Bring. Assemble.  

Harris' answer.

Hierarchy:

- Design: how many bedrooms, bathrooms, kitchens and other rooms he would like.
- Jump level up: house layout and dimensions of the house.
- Top level hierarchy - material he would like to use, what kind of roof etc.
- Jump level down: layout of each room with doors, windows etc.

Regularity:

- framing of the house
- scale framing to each room
- choose doors and windows (sizes, material)

Modularity:

- the dimensions of the windows are the same

And he could save by buying some items (like windows) in bulk.

## Exercise 1.4 Voltage: in 0-5V range. Measure accuracy: ±50mV. How many bits it convey?

My: 1̶0̶0̶

Harris: ±50mV is 100mV intervals. 50 intervals. log<sub>2</sub>50=5.65 bits

:::info
I think Harrises were wrong. 50<sub>10</sub> > 6 bit. This is because log function does not included the 0 power of 2. If I count that log<sub>2</sub>1=0. Is that 0 bits? Not. This is 0 power. And this is 1 bit of information. Hence, the answer is log<sub>2</sub>N+1
:::

## Exercise 1.5 Old clock without a minute hand

a) You can read the hour each 15 minutes. How many bits you can convey?

My: 60min/15min=4 12hours*4=48 log<sub>2</sub>40=5.58+1=6.68  
Harrises: 5.58 bits

b) If include am and pm, how many bits added?

My: 2̶ b̶i̶t̶s̶  
Harrises: 1 bit

## Exercise 1.6 4000 years ago Babylonian developed sexagesimal numbers (base 60)

a) How many bits they conveyed with one digit?

My: log<sub>2</sub>60+1=~7  
Harrises:~6

b) 4000<sub>10</sub> in sexagesimal?

My: 16$, $=40  
Harrises: 1 6 40<sub>60</sub>

## Exercise 1.7 How many different numbers can be represent with 16 bits?

My: 2<sup>16</sup> =  65536  
Harrises: 2<sup>16</sup> =  65536

## Exercise 1.8 What is the largest unsigned 32-bit binary number?

My: 2̶2̶<̶s̶u̶p̶>̶3̶2̶<̶/̶s̶u̶p̶>̶ =̶  4̶ 2̶9̶4̶ 9̶6̶7̶ 2̶9̶6̶  
Harrises: 22<sup>32</sup>-1 =  4 294 967 295

## Exercise 1.9 What is the largest 16-bit binary number that can be represented with

a) unsigned numbers?

My: 2<sup>16</sup>-1 = 65535  
Harrises: 2<sup>16</sup>-1 = 65535

b) two's complement numbers?

My: 2<sup>15</sup>-1 = 32767  
Harrises: 2<sup>15</sup>-1 = 32767

c) sign/magnitude numbers?

My: 2<sup>15</sup>-1 = 32767  
Harrises: 2<sup>15</sup>-1 = 32767

## Exercise 1.10 What is the largest 32-bit binary number that can be represented with

a) unsigned numbers?

My: 2<sup>32</sup>-1 = 4 294 967 295  
Harrises: 2<sup>32</sup>-1 = 4 294 967 295

b) two's complement numbers?

My: 2<sup>31</sup>-1 = 2 147 483 647
Harrises: 2<sup>31</sup>-1 = 2 147 483 647

c) sign/magnitude numbers?

My: 2<sup>31</sup>-1 = 2 147 483 647  
Harrises: 2<sup>31</sup>-1 = 2 147 483 647

## Exercise 1.11 What is the smallest (most negative) 16-bit binary number that can be represented with

a) unsigned numbers?

My: 0  
Harrises: 0

b) two's complement numbers?

My: -2<sup>15</sup> = -32768  
Harrises: -2<sup>15</sup> = -32768

c) sign/magnitude numbers?

My: -(2<sup>15</sup>-1) = -32767
Harrises: -(2<sup>15</sup>-1) = -32767

## Exercise 1.12 What is the smallest (most negative) 32-bit binary number that can represented with

a) unsigned numbers?

My: 0  
Harrises: 0

b) two's complement numbers?

My: -2<sup>31</sup> = -2 147 483 648  
Harrises: -2<sup>31</sup> = -2 147 483 648

c) sign/magnitude numbers?

My: -(2<sup>31</sup>-1) = -2 147 483 647  
Harrises: -(2<sup>31</sup>-1) = -2 147 483 647

## Exercise 1.13 Convert unsigned numbers to decimal. Show your work

My:

a) 1010<sub>2</sub> = 1x2<sup>3</sup> + 0x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 8 + 0 + 2 + 0 = 10<sub>10</sub>

b) 110110<sub>2</sub> = 1x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 32 + 16 + 0 + 4 + 2 + 0 = 54<sub>10</sub>

c) 11110000<sub>2</sub> = 1x2<sup>7</sup> + 1x2<sup>6</sup> + 1x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 0x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>0</sup> = 128 + 64 + 32 + 16 + 0 + 0 + 0 + 0= 240<sub>10</sub>

d) 000100010100111<sub>2</sub> = 0 + 0 + 0 + 1x2<sup>11</sup> + 0x2<sup>10</sup> + 0x2<sup>9</sup> + 0x2<sup>8</sup> + 1x2<sup>7</sup> + 0x2<sup>6</sup> + 1x2<sup>5</sup> 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 1x2<sup>0</sup> = 2048 + 128 + 32 + 4 + 2 + 1 = 2215<sub>10</sub>

Harrises:

a) 10; b) 54; c) 240; d) 6̶3̶1̶1̶

## Exercise 1.14 Convert the following unsigned binary numbers to decimal. Show your work

My:

a) 1110<sub>2</sub> = 1x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 0x2<sup>0</sup> = 8 + 4 + 2 + 0 = 14<sub>10</sub>

b) 100100<sub>2</sub> = 1x2<sup>5</sup> + 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>0</sup> = 32 + 0 + 0 + 4 + 0 + 0 = 3̶8̶<sub>10</sub>

c) 11010111<sub>2</sub> =1x2<sup>7</sup> + 1x2<sup>6</sup> + 0x2<sup>5</sup> + 1x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup> + 1x2<sup>0</sup> = 128 + 64 + 0 + 16 + 0 + 4 + 2 + 1 = 215<sub>10</sub>

d) 011101010100100<sub>2</sub> = 1x2<sup>13</sup> + 1x2<sup>12</sup> + 1x2<sup>11</sup> 0x2<sup>10</sup> 1x2<sup>9</sup> + 0x2<sup>8</sup> + 1x2<sup>7</sup> + 0x2<sup>6</sup> + 1x2<sup>5</sup> + 0x2<sup>4</sup> + 0x2<sup>3</sup> + 1x2<sup>2</sup> + 0x2<sup>1</sup> + 0x2<sup>1</sup> = 8192 + 4096 + 2048 + 0 + 512 + 0 + 128 + 32 + 4 = 15012

Harrises:

a) 14; b) 36; c) 215; d) 15012

## Exercise 1.15 Repeat Exercise 1.13, but convert in hexadecimal

My:

a) 1010<sub>2</sub> = A<sub>16</sub>

b) 110110<sub>2</sub> = 36<sub>16</sub>

c) 11110000<sub>2</sub> = F0<sub>16</sub>

d) 000100010100111<sub>2</sub> = 08A7<sub>16</sub>

Harrises:

a) A; b) 36; c) F0; d) 1̶8̶A̶7̶ (Harrises were wrong again. In this number: 000100010100111 in 1.14-d exercise. Need to be: 0001100010100111)

## Exercise 1.16 Repeat exercise 1.14, but convert to hexadecimal

My:

a) 1110<sub>2</sub> = E<sub>16</sub>

b) 100100<sub>2</sub> = 24<sub>16</sub>

c) 11010111<sub>2</sub> = D7<sub>16</sub>

d) 011101010100100<sub>2</sub> = 3AA4<sub>16</sub>

Harrises:

a) E; b) 24; c) D7; d) 3AA4

## Exercise 1.17 Convert the following hexadecimal numbers to decimal. Show your work

My:

a) A5<sub>16</sub> = 10x16<sup>1</sup> + 5x16<sup>0</sup> = 160 + 5  = 165<sub>10</sub>

b) 3B<sub>16</sub> = 3x16<sup>1</sup> + 11x16<sup>0</sup> = 48 + 11 = 59<sub>10</sub>

c) FFFF<sub>16</sub> = 15x16<sup>3</sup> + 15x16<sup>2</sup> + 15x16<sup>1</sup> + 15x16<sup>0</sup> = 61440 + 3840 + 240 + 15 = 65535<sub>10</sub> (2<sup>16</sup>-1)

d) D0000000<sub>16</sub> = 13x16<sup>7</sup> = 3 489 660 928<sub>10</sub>

Harrises:

(a) 165; (b) 59; (c) 65535; (d) 3489660928

## Exercise 1.18 Convert the following hexadecimal numbers to decimal. Show your work

My:

a) 4E<sub>16</sub> = 4x16<sup>1</sup> + 14x16<sup>0</sup> = 64 + 14 = 78<sub>10</sub>

b) 7C<sub>16</sub> = 7x16<sup>1</sup> + 12x16<sup>0</sup> = 112 + 12 = 124<sub>10</sub>

c) ED3A<sub>16</sub> = 14x16<sup>3</sup> + 13x16<sup>2</sup> + 3x16<sup>1</sup> + 10x16<sup>0</sup> = 57344 + 3328 + 48 + 10 = 60730<sub>10</sub>

d) 403FB001<sub>16</sub> = 4x16<sup>7</sup> + 0x16<sup>6</sup> + 3x16<sup>5</sup> + 15x16<sup>4</sup> + 11x16<sup>3</sup> + 0x16<sup>2</sup> + 0x16<sup>1</sup> + 1x16<sup>0</sup> =
1 073 741 824 + 0 + 3 145 728 + 983 040 + 45056 + 0 + 0 + 1 = 1 077 915 649<sub>10</sub>

Harrises:

(a) 78; (b) 124; (c) 60,730; (d) 1,077,915,649

## Exercise 1.19 Repeat exercise 1.17, but convert to unsigned binary

My:

(a) A5<sub>16</sub> = 1010 0101<sub>2</sub>

(b) 3B<sub>16</sub> = 0011 1011<sub>2</sub>

(c) FFFF<sub>16</sub> = 1111 1111 1111 1111<sub>2</sub>

(d) D0000000<sub>16</sub> = 1101 0000 0000 0000 0000 0000 0000 0000<sub>2</sub>

Harrises:

(a) 1010 0101; (b) 0011 1011; (c) 1111 1111 1111 1111;
(d) 1101 0000 0000 0000 0000 0000 0000 0000

## Exercise 1.20 Repeat exercise 1.18, but convert to unsigned binary

My:

(a) 4E<sub>16</sub> = 0100 1110<sub>2</sub>

(b) 7C<sub>16</sub> = 0111 1100<sub>2</sub>

(c) ED3A<sub>16</sub> = 1110 1101 0011 1010<sub>2</sub>

(d) 403FB001<sub>16</sub> = 0100 0000 0011 1111 1011 0000 0000 0001<sub>2</sub>

Harrises:

(a) 1001110; (b) 1111100; (c) 1110 1101 0011 1010; (d) 100 0000 0011
1111 1011 0000 0000 0001

## Exercise 1.21 Convert the following two's complement binary numbers to decimal

My:

(a) 1010<sub>2</sub> = -6<sub>10</sub> s


```
1010
0101 <- invert
+  1
====
0110 = 6 (-6)
```

(b) 110110<sub>2</sub> = -10<sub>10</sub>

```
110110
001001
+    1
======
001010 = 10 (-10)
```

(c) 01110000<sub>2</sub> = 64 + 32 + 16 = 112<sub>10</sub>

(d) 10011111<sub>2</sub> = -97<sub>10</sub>

```
10011111
01100000
+      1
========
01100001 = 97 (-97)
```

Harrises:

(a) -6; (b) -10; (c) 112; (d) -97

## Exercise 1.22 Convert the following two's complement binary numbers to decimal

My:

(a) 1110<sub>2</sub> = -2<sub>10</sub>

```
1110
0001
+  1
====
0010 = 2 (-2)
```

(b) 100011<sub>2</sub> = -29<sub>10</sub>

```
100011
011100
+    1
======
011101 = 29 (-29)
```

(c) 01001110<sub>2</sub> = 78<sub>10</sub>


(d) 10110101<sub>2</sub> = -75<sub>10</sub>

```
10110101
01001010
+      1
========
01001011 = 75 (-75)
```

Harrises:

(a) -2 (-8+4+2 = -2 or magnitude = 0001+1 = 0010: thus, -2); (b) -29 (-32 + 2 + 1 = -29 or magnitude = 011100+1 = 011101: thus, -29); (c) 78; (d) -75

:::info
This is another way to convert two's complement binary numbers to decimal numbers
:::

```
1110
====

8421
```

## Exercise 1.23 Repeat exercise 1.21, assuming the binary numbers are in sigh/magnitude form rather than two's complement representation

My:

(a) 1010<sub>2</sub> = -2<sub>10</sub>

(b) 110110<sub>2</sub> = -22<sub>10</sub>

(c) 01110000<sub>2</sub> = 112<sub>10</sub>

(d) 10011111<sub>2</sub> = -31<sub>10</sub>

Harrises:

(a) -2; (b) -22; (c) 112; (d) -31

## Exercise 1.24 Repeat exercise 1.22, assuming the binary numbers are in sign/magnitude form rather than two's complement representation

My:

(a) 1110<sub>2</sub> = -6<sub>10</sub>

(b) 100011<sub>2</sub> = -3<sub>10</sub>

(c) 01001110<sub>2</sub> = 78<sub>10</sub>

(d) 10110101<sub>2</sub> = -53<sub>10</sub>

Harrises:

(a) -6; (b) -3; (c) 78; (d) -53

## Exercise 1.25 Convert the following decimal numbers to unsigned binary numbers

My:

(a) 42<sub>10</sub> = 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 101010<sub>2</sub>

(b) 63<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 111111<sub>2</sub>

(c) 229<sub>10</sub> = 1x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 11100101<sub>2</sub>

(d) 845<sub>10</sub> = 1x512(2<sup>9</sup>) + 1x256(2<sup>8</sup>) + 0x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 1101001101<sub>2</sub>

Harrises:

(a) 101010; (b) 111111; (c) 11100101; (d) 1101001101

## Exercise 1.26 Convert the following decimal numbers to unsigned binary numbers

My:

(a) 14<sub>10</sub> = 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 1110<sub>2</sub>

(b) 52<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 110100<sub>2</sub>

(c) 339<sub>10</sub> = 1x256(2<sup>8</sup>) + 0x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 101010011<sub>2</sub>

(d) 711<sub>10</sub> = 1x512(2<sup>9</sup>) + 0x256(2<sup>8</sup>) + 1x128(2<sup>7</sup>) + 1x64(2<sup>6</sup>) + 0x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 0x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 1011000111<sub>2</sub>

Harrises:

(a) 1110; (b) 110100; (c) 101010011; (d) 1011000111

## Exercise 1.27 Repeat exercise 1.25, but convert to hexadecimal

My:

(a) 42<sub>10</sub> = 2x16(16<sup>1</sup>) + 10x16(16<sup>0</sup>) = 2A<sub>16</sub>

(b) 63<sub>10</sub> = 3x16(16<sup>1</sup>) + 15x16(16<sup>0</sup>) = 3F<sub>16</sub>

(c) 229<sub>10</sub> = 14x16(16<sup>1</sup>) + 5x16(16<sup>0</sup>) = E5<sub>16</sub>

(d) 845<sub>10</sub> = 3x16(16<sup>2</sup>) + 4x16(16<sup>1</sup>) + 13x16(16<sup>0</sup>) = 34D<sub>16</sub>

Harrises:

(a) 2A; (b) 3F; (c) E5; (d) 34D

## Exercise 1.28 Repeat exercise 1.26, but convert to hexadecimal

My:

(a) 14<sub>10</sub> = 14x16(16<sup>0</sup>) = E<sub>16</sub>

(b) 52<sub>10</sub> = 3x16(16<sup>1</sup>) + 4x16(16<sup>0</sup>) = 34<sub>16</sub>

(c) 339<sub>10</sub> = 1x16(16<sup>2</sup>) + 5x16(16<sup>1</sup>) + 3x16(16<sup>0</sup>) = 153<sub>16</sub>

(d) 711<sub>10</sub> = 2x16(16<sup>2</sup>) + 12x16(16<sup>1</sup>) + 7x16(16<sup>0</sup>) = 2C7<sub>16</sub>

:::info 
Or you can take the binary results from exercise 1.26 and convert them to hexadecimal more easily
:::

Harrises:

(a) E; (b) 34; (c) 153; (d) 2C7;

## Exercise 1.29 Convert the following decimal numbers to 8-bit two's complement numbers or indicate that the decimal number would overflow the range

My:

(a) 42<sub>10</sub> = 1x32(2<sup>5</sup>) + 0x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 0x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 0010 1010<sub>2</sub>

(b) −63<sub>10</sub> = 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 1x2(2<sup>1</sup>) + 1x1(2<sup>0</sup>) = 00111111 = 11000000 + 1 = 1100 0001<sub>2</sub>

(c) 124<sub>10</sub> = 1x64(2<sup>6</sup>) + 1x32(2<sup>5</sup>) + 1x16(2<sup>4</sup>) + 1x8(2<sup>3</sup>) + 1x4(2<sup>2</sup>) + 0x2(2<sup>1</sup>) + 0x1(2<sup>0</sup>) = 0111 1100<sub>2</sub>

(d) −128<sub>10</sub> = 1000 0000<sub>2</sub>

(e) 133<sub>10</sub> = overflow

Harrises:

(a) 0010 1010; (b) 1100 0001; (c) 0111 1100; (d) 1000 0000; (e) overflow

## Exercise 1.30 Convert the following decimal numbers to 8-bit two's complement numbers or indicate that the decimal number would overflow the range

My:

(a) 24<sub>10</sub> = 0001 1000<sub>2</sub>

(b) −59<sub>10</sub> = 0011 1011 = 1100 0101<sub>2</sub>

(c) 128<sub>10</sub> = overflow

(d) −150<sub>10</sub> = overflow

(e) 127<sub>10</sub> = 0111 1111<sub>2</sub>

Harrises:

(a) 0001 1000; (b) 1100 0101; (c) overflow; (d) overflow; (e) 0111 1111
