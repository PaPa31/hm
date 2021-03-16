---
id: 24-adding-styling-with-stylesheets
title: 24 Adding Styling With Stylesheets
date: 2021-03-14 00:30:54
---

Thanks to webpack, we can actually import css into javascript though it will not really merge the two files or anything like that, it is just made aware of that css file and will handle that differently, will basically import it into our html file.

Make a new file `Person.css`:

```css title="Person.css"
.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}
```

Add `import` line to `Person.js`.

```jsx {2} title="Person.js"
import React from 'react'
import './Person.css'
...
```

You can't find these style tags in the html file in the public folder. The style text are injected dynamically by the `webpack` into the final file in the head section.

```html title="final html file"
<head>
...
<style type="text/css">.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  -webkit-box-shadow: 0 2px 3px #ccc;
          box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}
</style>
...
</head>
```
