"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[31582],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,g=s["".concat(c,".").concat(m)]||s[m]||l[m]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},16864:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={id:"12-03-setting-up-routing-and-routes",title:"12.03 Setting Up Routing And Routes",date:new Date("2021-04-19T19:50:23.000Z")},c=void 0,p={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes",id:"react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes",title:"12.03 Setting Up Routing And Routes",description:"Installing react-router-dom",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-03-setting-up-routing-and-routes",title:"12.03 Setting Up Routing And Routes",date:"2021-04-19T19:50:23.000Z"},sidebar:"Docs",previous:{title:"12.02 Building Checkout Container",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container"},next:{title:"12.04 Navigation To Checkout Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page"}},d=[{value:"Installing <code>react-router-dom</code>",id:"installing-react-router-dom",children:[],level:2},{value:"<code>App.js</code>",id:"appjs",children:[],level:2},{value:"<code>index.js</code>",id:"indexjs",children:[],level:2}],l={toc:d};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installing-react-router-dom"},"Installing ",(0,i.kt)("inlineCode",{parentName:"h2"},"react-router-dom")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save react-router-dom\n")),(0,i.kt)("h2",{id:"appjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,12-15}',title:'"App.js"',"{2,12-15}":!0},'import React, { Component } from "react";\nimport { Route, Switch } from "react-router-dom";\nimport Layout from "./components/Layout/Layout";\nimport BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";\nimport Checkout from "./containers/Checkout/Checkout";\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <Layout>\n          <Switch>\n            <Route path="/checkout" component={Checkout} />\n            <Route path="/" exact component={BurgerBuilder} />\n          </Switch>\n        </Layout>\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,i.kt)("h2",{id:"indexjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {3,8-13}',title:'"index.js"',"{3,8-13}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { BrowserRouter } from "react-router-dom";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\n\nconst app = (\n  <BrowserRouter>\n    <App />\n  </BrowserRouter>\n);\nReactDOM.render(app, document.getElementById("root"));\nregisterServiceWorker();\n')))}s.isMDXComponent=!0}}]);