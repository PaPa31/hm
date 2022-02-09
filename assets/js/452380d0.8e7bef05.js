"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[29328],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,g=l["".concat(u,".").concat(m)]||l[m]||s[m]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},29791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={id:"12-05-navigation-back-and-to-next-page",title:"12.05 Navigation Back And To Next Page",date:new Date("2021-04-19T21:33:01.000Z")},u=void 0,d={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page",id:"react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page",title:"12.05 Navigation Back And To Next Page",description:"CheckoutSummary.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-05-navigation-back-and-to-next-page",title:"12.05 Navigation Back And To Next Page",date:"2021-04-19T21:33:01.000Z"},sidebar:"Docs",previous:{title:"12.04 Navigation To Checkout Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-04-navigation-to-checkout-page"},next:{title:"12.06 Passing Ingredients Via Query Params",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params"}},p=[{value:"<code>CheckoutSummary.js</code>",id:"checkoutsummaryjs",children:[],level:2},{value:"<code>Checkout.js</code>",id:"checkoutjs",children:[],level:2}],s={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"checkoutsummaryjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"CheckoutSummary.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CheckoutSummary.js" {13,16}',title:'"CheckoutSummary.js"',"{13,16}":!0},'import React from "react";\nimport Burger from "../../Burger/Burger";\nimport Button from "../../UI/Button/Button";\nimport classes from "./CheckoutSummary.module.css";\n\nconst checkoutSummary = (props) => {\n  return (\n    <div className={classes.CheckoutSummary}>\n      <h1>We hope it taste well!</h1>\n      <div style={{ width: "100%", margin: "auto" }}>\n        <Burger ingredients={props.ingredients} />\n      </div>\n      <Button btnType="Danger" clicked={props.checkoutCancelled}>\n        CANCEL\n      </Button>\n      <Button btnType="Success" clicked={props.checkoutContinued}>\n        CONTINUE\n      </Button>\n    </div>\n  );\n};\n\nexport default checkoutSummary;\n')),(0,a.kt)("h2",{id:"checkoutjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Checkout.js" {14-20,24-28}',title:'"Checkout.js"',"{14-20,24-28}":!0},'import React, { Component } from "react";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\n\nclass Checkout extends Component {\n  state = {\n    ingredients: {\n      salad: 1,\n      meat: 1,\n      cheese: 1,\n      bacon: 1,\n    },\n  };\n\n  checkoutCancelledHandler = () => {\n    this.props.history.goBack();\n  };\n\n  checkoutContinuedHandler = () => {\n    this.props.history.replace("/checkout/contact-data");\n  };\n  render() {\n    return (\n      <div>\n        <CheckoutSummary\n          ingredients={this.state.ingredients}\n          checkoutCancelled={this.checkoutCancelledHandler}\n          checkoutContinued={this.checkoutContinuedHandler}\n        />\n      </div>\n    );\n  }\n}\nexport default Checkout;\n')))}l.isMDXComponent=!0}}]);