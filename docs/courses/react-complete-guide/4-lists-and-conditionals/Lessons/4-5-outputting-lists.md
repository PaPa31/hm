---
id: 4-5-outputting-lists
title: 4.5 Outputting Lists
date: 2021-03-15 01:35:53
---

[JSX Lists Learning Card PDF](../pdf/4-5-jsx-lists-learning-card.pdf)

## map builds a new array

The `map()` method **creates a new array** (of JSX elements) populated with the results of calling a provided function on every element in the calling array. And React will then pull out these elements and render to the screen for you.

```jsx {30-32} title="App.js"
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

...

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

...

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
```
