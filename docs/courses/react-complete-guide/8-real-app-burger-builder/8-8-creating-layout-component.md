---
id: 8-8-creating-layout-component
title: 8.8 Creating Layout Component
date: 2021-04-09 20:54:22
---

## index.css

```css title="index.css" {}
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
```

## Layout.js

```jsx title="Layout.js" {}
import React, { Fragment } from "react";

const layout = (props) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Fragment>
);
export default layout;
```

## App.js

```jsx title="App.js" {}
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
```
