"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[96484],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(t),g=o,m=l["".concat(s,".").concat(g)]||l[g]||p[g]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},23640:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],d={id:"12-12-outputting-orders",title:"12.12 Outputting Orders",date:new Date("2021-04-20T15:28:25.000Z")},s=void 0,c={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders",id:"react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders",title:"12.12 Outputting Orders",description:"Order.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-12-outputting-orders.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-12-outputting-orders",title:"12.12 Outputting Orders",date:"2021-04-20T15:28:25.000Z"},sidebar:"Docs",previous:{title:"12.11.0 Fetching Orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders"},next:{title:"13.0 Lesson",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-0-lesson"}},u={},p=[{value:"<code>Order.js</code>",id:"orderjs",level:2},{value:"<code>Orders.js</code>",id:"ordersjs",level:2}],l={toc:p};function g(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"orderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Order.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Order.js" {4-31,33-34,36,40}',title:'"Order.js"',"{4-31,33-34,36,40}":!0},'import React from "react";\nimport classes from "./Order.module.css";\n\nconst order = (props) => {\n  const ingredients = [];\n\n  for (let ingredientName in props.ingredients) {\n    ingredients.push({\n      name: ingredientName,\n      amount: props.ingredients[ingredientName],\n    });\n  }\n\n  const ingredientOutput = ingredients.map((ig) => {\n    return (\n      <span\n        key={ig.name}\n        style={{\n          textTransform: "capitalize",\n          display: "inline-block",\n          margin: "0 8px",\n          border: "1px solid #ccc",\n          padding: "5px",\n        }}\n      >\n        {ig.name}: ({ig.amount})\n      </span>\n    );\n  });\n\n  return (\n    <div className={classes.Order}>\n      <p>Ingredients: </p>\n      {ingredientOutput}\n      <p>\n        Price:<strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>\n      </p>\n    </div>\n  );\n};\n\nexport default order;\n')),(0,i.kt)("h2",{id:"ordersjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Orders.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Orders.js" {32-38}',title:'"Orders.js"',"{32-38}":!0},'import React, { Component } from "react";\nimport axios from "../../axios-orders";\nimport Order from "../../components/Order/Order";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\n\nclass Orders extends Component {\n  state = {\n    orders: [],\n    loading: true,\n  };\n  componentDidMount() {\n    axios\n      .get("/orders.json")\n      .then((res) => {\n        // console.log("res.data:", res.data);\n        const fetchedOrders = [];\n        for (let key in res.data) {\n          fetchedOrders.push({\n            ...res.data[key],\n            id: key,\n          });\n        }\n        this.setState({ loading: false, orders: fetchedOrders });\n      })\n      .catch((err) => {\n        this.setState({ loading: false });\n      });\n  }\n  render() {\n    return (\n      <div>\n        {this.state.orders.map((order) => (\n          <Order\n            key={order.id}\n            ingredients={order.ingredients}\n            price={order.price}\n          />\n        ))}\n      </div>\n    );\n  }\n}\nexport default withErrorHandler(Orders, axios);\n')))}g.isMDXComponent=!0}}]);