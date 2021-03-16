---
id: 20-usestate-hook
title: 20 Usestate Hook
date: 2021-03-13 00:52:57
---

It allows to manage the `state` in the `function component`.

## React Hooks

`useState` returns an array with exactly two elements and always two elements, that's important.

The first element (`personsState`) gives you access to the initial object. The second element (`setPersonsState`) allows us to set a new state by defining a new object.

```jsx {4-8,13-17}
...
const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [  // the initial object pointed to by personsState
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [  // new object
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    })
  }
...
```

:::danger
This will completely overwrite the old state with the new one.
:::

And this is the main difference from [setState](18-manipulating-state#setState).

## Problem

If you have some other state property (not defined in useState), you might lose it:

```jsx {9}
...
const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [  // initial object to which point personsState
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
  })

  console.log(personsState)  // after updating the state (on click), otherState will be absent

  const switchNameHandler = () => {
    setPersonsState({
      persons: [  // new object
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    })
  }
...
```

## Workaround

### Manually adding State Property

```jsx {9,21}
...
const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
  })

  console.log(personsState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
      otherState: personsState.otherState,
    })
  }

...
```

### With multiple `useState()`

```jsx {3,11}
...
const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  })

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    })
  }
...
```
