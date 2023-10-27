"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[86546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,g=d["".concat(i,".").concat(p)]||d[p]||l[p]||u;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<u;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const u={id:"12-02-building-checkout-container",title:"12.02 Building Checkout Container",date:new Date("2021-04-19T19:00:05.000Z")},a=void 0,c={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container",id:"react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container",title:"12.02 Building Checkout Container",description:"App.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-02-building-checkout-container.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"12-02-building-checkout-container",title:"12.02 Building Checkout Container",date:"2021-04-19T19:00:05.000Z"},sidebar:"Courses",previous:{title:"12.0 Lesson",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-0-lesson"},next:{title:"12.03 Setting Up Routing And Routes",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-03-setting-up-routing-and-routes"}},i={},s=[{value:"<code>App.js</code>",id:"appjs",level:2},{value:"New <code>CheckoutSummary.js</code>",id:"new-checkoutsummaryjs",level:2},{value:"New <code>CheckoutSummary.module.css</code>",id:"new-checkoutsummarymodulecss",level:2},{value:"New <code>Checkout.js</code>",id:"new-checkoutjs",level:2}],m={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"appjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {4,12}',title:'"App.js"',"{4,12}":!0},'import React, { Component } from "react";\nimport Layout from "./components/Layout/Layout";\nimport BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";\nimport Checkout from "./containers/Checkout/Checkout";\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <Layout>\n          <BurgerBuilder />\n          <Checkout />\n        </Layout>\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"new-checkoutsummaryjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"CheckoutSummary.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CheckoutSummary.js" {}',title:'"CheckoutSummary.js"',"{}":!0},'import React from "react";\nimport Burger from "../../Burger/Burger";\nimport Button from "../../UI/Button/Button";\nimport classes from "./CheckoutSummary.module.css";\n\nconst checkoutSummary = (props) => {\n  return (\n    <div className={classes.CheckoutSummary}>\n      <h1>We hope it taste well!</h1>\n      <div style={{ width: "100%", margin: "auto" }}>\n        <Burger ingredients={props.ingredients} />\n      </div>\n      <Button btnType="Danger" clicked>\n        CANCEL\n      </Button>\n      <Button btnType="Success" clicked>\n        CONTINUE\n      </Button>\n    </div>\n  );\n};\n\nexport default checkoutSummary;\n')),(0,o.kt)("h2",{id:"new-checkoutsummarymodulecss"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"CheckoutSummary.module.css")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CheckoutSummary.module.css" {}',title:'"CheckoutSummary.module.css"',"{}":!0},".CheckoutSummary {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n}\n\n@media (min-width: 600px) {\n  .CheckoutSummary {\n    width: 500px;\n  }\n}\n")),(0,o.kt)("h2",{id:"new-checkoutjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Checkout.js" {}',title:'"Checkout.js"',"{}":!0},'import React, { Component } from "react";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\n\nclass Checkout extends Component {\n  state = {\n    ingredients: {\n      salad: 1,\n      meat: 1,\n      cheese: 1,\n      bacon: 1,\n    },\n  };\n  render() {\n    return (\n      <div>\n        <CheckoutSummary ingredients={this.state.ingredients} />\n      </div>\n    );\n  }\n}\nexport default Checkout;\n')))}l.isMDXComponent=!0}}]);