---
id: twos-complement-overflow
title: Two's Complement Overflow
---
Overflow can be very dangerous. [Crash due to overflow](crash-due-to-overflow).

When adding two N-bit negative numbers or adding two N-bit positive numbers, an overflow occurs if the result is greater than 2<sup>N-1</sup>-1 or less than -2<sup>N-1</sup>. There is no overflow when adding numbers with different sing. If, after adding two numbers with same sign, you get a result with other sign - this is overflow.

**Example:**  
Compute 4<sub>10</sub>+5<sub>10</sub> using two's complement numbers.

```sh title="4-bit Overflow"
  0100
+
  0101
  ----
  1001 = -7 -> Overflow
```

In this case [sign extension](sign-extension) will help.

$$
  f(x)=\int_{-\infty}^{\infty}
  \hat f(\xi)\,e^{2 \pi i \xi x}
  \,d\xi
$$

[Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012](../../pdf/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012.pdf)  
1.4.6 Signed Binary Numbers - 18 page

## Resources

- [Three Ideas of Signed Binary Numbers](three-ideas-signed-binary-numbers)
- [Weird Number](weird-number)
- [Crash Due to Overflow](crash-due-to-overflow)
- [Range Number Systems](range-number-systems)
- [Sign Extension](sign-extension)