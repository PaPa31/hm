---
id: love-project
title: Love Project
date: 2021-02-25 11:08:29
description: Natalia Evteeva's project
---

Love is

## Abstraction Levels

- front-end and back-end: site with login database (WordPress)
- API which can embed:
  - generator
  - data blocks
- Interface for embedding (like CodePen)

```jsx live
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

```
