"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[50639],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,g=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},55568:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={id:"8-25-implementing-button-component",title:"8.25 Implementing Button Component",date:new Date("2021-04-10T23:58:24.000Z")},l=void 0,p={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component",id:"react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component",title:"8.25 Implementing Button Component",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-25-implementing-button-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"8-25-implementing-button-component",title:"8.25 Implementing Button Component",date:"2021-04-10T23:58:24.000Z"},sidebar:"Docs",previous:{title:"8.24 Adding Custom Button Component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-24-adding-custom-button-component"},next:{title:"8.26 Adding Price To Order Summary",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-26-adding-price-to-order-summary"}},c={},m=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"OrderSummary.js",id:"ordersummaryjs",level:2}],s={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {3-5,23-24}',title:'"BurgerBuilder.js"',"{3-5,23-24}":!0},'...\n\n  purchaseContinueHandler = () => {\n    alert("You continue!");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          <OrderSummary\n            ingredients={this.state.ingredients}\n            purchaseCancelled={this.purchaseCancelHandler}\n            purchaseContinued={this.purchaseContinueHandler}\n          />\n        </Modal>\n\n...\n')),(0,i.kt)("h2",{id:"ordersummaryjs"},"OrderSummary.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="OrderSummary.js" {2,20-25}',title:'"OrderSummary.js"',"{2,20-25}":!0},'import React, { Fragment } from "react";\nimport Button from "../../UI/Button/Button";\n\nconst orderSummary = (props) => {\n  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {\n    return (\n      <li key={igKey}>\n        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}\n        {props.ingredients[igKey]}\n      </li>\n    );\n  });\n\n  return (\n    <Fragment>\n      <h3>Your Order</h3>\n      <p>A delicious burger with the following ingredients:</p>\n      <ul>{ingredientSummary}</ul>\n      <p>Continue to Checkout?</p>\n      <Button btnType="Danger" clicked={props.purchaseCancelled}>\n        CANCEL\n      </Button>\n      <Button btnType="Success" clicked={props.purchaseContinued}>\n        CONTINUE\n      </Button>\n    </Fragment>\n  );\n};\n\nexport default orderSummary;\n\n')))}d.isMDXComponent=!0}}]);