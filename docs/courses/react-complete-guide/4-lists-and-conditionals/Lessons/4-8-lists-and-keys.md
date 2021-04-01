---
id: 4-8-lists-and-keys
title: 4.8 Lists And Keys
date: 2021-03-30 00:35:48
---

We haven't specified a key property in person it's actually a default property react expects to find on an element no matter if it's a custom component or a default HTML element which you render through a list, so basically by mapping an array into JSX elements. This key property helps react update the list efficiently.

But basically what it does is it has something called a virtual DOM where it compares what it would render now if it were to call the render method now or if it did actually adjust the real DOM with the result of the render method to the previous DOM it rendered. It does this compression of the future with the past basically.

Typically, you probably have some ID on your elements if you get them from a database or something like that, chances are high you do have an ID or any other unique identifier and your name would be unique but that's not necessarily guaranteed.

```jsx title="App.js" {5-7,20}
...
class App extends Component {
  state = {
    persons: [
      { id: "20210330005200", name: "Max", age: 28 },
      { id: "20210330005205", name: "Manu", age: 29 },
      { id: "20210330005209", name: "Stephanie", age: 26 },
    ],
  };
...
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
...
```

So we should really try to have a unique identifier and again, since this is just dummy data, here I'll simply add an ID. In real data, chances are high you do have such an ID. ID doesn't have to be a number, it can be anything unique, so here I'm just hammering on my keyboard to get some unique IDs.

But behind the scenes it's now able to do that in a more efficient way which of course is super important.
