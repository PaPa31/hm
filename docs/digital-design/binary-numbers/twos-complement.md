---
id: twos-complement
title: Two's Complement
---

Good for binary Subtraction.

## Subtraction

Subtraction is performed by *taking the two’s complement* of the second number, then adding.

Briefly formula:
```  
A - B = A + not B + 1
```
**Example:** 3<sub>10</sub> - 5<sub>10</sub>

First, you need to *take the two's complement* of 5<sub>10</sub>: 

```sh title="Taking the two's complement"
      5 = 0101
invert -> 1010
        +    1
         -----
          1011 = -5
```
and now do the addition: 3<sub>10</sub> + (- 5<sub>10</sub>)

```sh title="3+(-5)"
  0011 =  3
+
  1011 = -5
  ----
  1110 = -2
```
To check result, you can take two's complement again:

```
  1110 = -2
  0001 <- invert
+    1
  ----
  0010 = 2     
```
## Overflow

Adding two negatives or two positive numbers may cause [overflow](twos-complement-overflow). 

From: [Signed Number Representation (Wikipedia)](https://en.wikipedia.org/wiki/Signed_number_representations#Two's_complement)

