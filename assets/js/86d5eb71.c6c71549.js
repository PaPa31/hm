"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[14800],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,m=s["".concat(l,".").concat(d)]||s[d]||g[d]||u;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var u=t.length,a=new Array(u);a[0]=s;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<u;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},68395:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=t(87462),i=t(63366),u=(t(67294),t(3905)),a=["components"],o={id:"8-13-outputting-burger-ingredients-dynamically",title:"8.13 Outputting Burger Ingredients Dynamically",date:new Date("2021-04-10T12:06:01.000Z")},l=void 0,c={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically",id:"react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically",title:"8.13 Outputting Burger Ingredients Dynamically",description:"Burger.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-13-outputting-burger-ingredients-dynamically",title:"8.13 Outputting Burger Ingredients Dynamically",date:"2021-04-10T12:06:01.000Z"},sidebar:"Docs",previous:{title:"8.12 Starting Burger Component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component"},next:{title:"8.14 Calculating Ingredient Sum Dynamically",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-14-calculating-ingredient-sum-dynamically"}},p=[{value:"Burger.js",id:"burgerjs",children:[],level:2},{value:"BurgerBuilder.js",id:"burgerbuilderjs",children:[],level:2}],g={toc:p};function s(e){var r=e.components,t=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"burgerjs"},"Burger.js"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Burger.js" {6-10,14}',title:'"Burger.js"',"{6-10,14}":!0},'import React from "react";\nimport classes from "./Burger.module.css";\nimport BurgerIngredient from "./BurgerIngredient/BurgerIngredient";\n\nconst burger = (props) => {\n  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {\n    return [...Array(props.ingredients[igKey])].map((_, i) => {\n      return <BurgerIngredient key={igKey + i} type={igKey} />;\n    });\n  });\n  return (\n    <div className={classes.Burger}>\n      <BurgerIngredient type="bread-top" />\n      {transformedIngredients}\n      <BurgerIngredient type="bread-bottom" />\n    </div>\n  );\n};\n\nexport default burger;\n')),(0,u.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {5-16,20}',title:'"BurgerBuilder.js"',"{5-16,20}":!0},'import React, { Component, Fragment } from "react";\nimport Burger from "../components/Burger/Burger";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: {\n      salad: 1,\n      bacon: 1,\n      cheese: 2,\n      meat: 2,\n    },\n  };\n  render() {\n    return (\n      <Fragment>\n        <Burger ingredients={this.state.ingredients} />\n        <div>Build Control</div>\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n\n')))}s.isMDXComponent=!0}}]);