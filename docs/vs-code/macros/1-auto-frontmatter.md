---
id: 1-auto-frontmatter
title: 1 Auto Frontmatter
date: 2021-03-26 15:35:47
---

I add some functionality to initial macros [Auto Frontmatter](0-auto-frontmatter).

## Auto Frontmatter 1.0.0

The old macro did:

- takes `filename`, removes the file extension and sets it as frontmatter’s `id`
- takes this `id`, replaces `hyphens` with `spaces`, capitalizes it, and sets it to `title`
- takes the current date and time and sets it as `date`

## Auto Frontmatter 1.0.1

In addition to this, the new macro does:

- if there are more than one leading digit in filename, the macro replaces `hyphens` between them with `.` (dots)

And now you don’t need to worry about the current cursor position. The macro will insert a frontmatter at the top of the markdown page wherever the cursor is.
