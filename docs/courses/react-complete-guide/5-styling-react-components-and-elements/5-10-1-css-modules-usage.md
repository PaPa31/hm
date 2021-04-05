---
id: 5-10-1-css-modules-usage
title: 5.10.1 CSS Modules Usage
date: 2021-04-04 21:35:40
---

So this is how we could implement this with C as this modules we simply add differences as classes.

```css title="App.css" {13-33}
.App {
  text-align: center;
}

.red {
  color: red;
}

.bold {
  font-weight: bold;
}

.Button {
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
}

.Button:hover {
  background-color: lightgreen;
  color: #333;
}

.Button.Red {
  background-color: red;
}

.Button.Red:hover {
  background-color: salmon;
}
```

```jsx title="App.js" {2,8,12,17,20,28}
import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

...

    let persons = null;
    let btnClass = [classes.Button];

...

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
```
