"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[52716],{3905:(e,r,t)=>{t.d(r,{Zo:()=>g,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},g=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(l,".").concat(d)]||s[d]||c[d]||i;return t?n.createElement(m,u(u({ref:r},g),{},{components:t})):n.createElement(m,u({ref:r},g))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=s;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var p=2;p<i;p++)u[p]=t[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},18696:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={id:"8-12-starting-burger-component",title:"8.12 Starting Burger Component",date:new Date("2021-04-09T23:45:00.000Z")},u=void 0,o={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component",id:"react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component",title:"8.12 Starting Burger Component",description:"New Burger.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-12-starting-burger-component",title:"8.12 Starting Burger Component",date:"2021-04-09T23:45:00.000Z"},sidebar:"Courses",previous:{title:"8.11 Adding PropTypes Validation",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation"},next:{title:"8.13 Outputting Burger Ingredients Dynamically",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-13-outputting-burger-ingredients-dynamically"}},l={},p=[{value:"New Burger.js",id:"new-burgerjs",level:2},{value:"New Burger.module.css",id:"new-burgermodulecss",level:2},{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2}],g={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-burgerjs"},"New Burger.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Burger.js"',title:'"Burger.js"'},'import React from "react";\nimport classes from "./Burger.module.css";\nimport BurgerIngredient from "./BurgerIngredient/BurgerIngredient";\n\nconst burger = (props) => {\n  return (\n    <div className={classes.Burger}>\n      <BurgerIngredient type="bread-top" />\n      <BurgerIngredient type="cheese" />\n      <BurgerIngredient type="meat" />\n      <BurgerIngredient type="bread-bottom" />\n    </div>\n  );\n};\n\nexport default burger;\n')),(0,a.kt)("h2",{id:"new-burgermodulecss"},"New Burger.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Burger.module.css"',title:'"Burger.module.css"'},".Burger {\n  width: 100%;\n  margin: auto;\n  height: 250px;\n  overflow: scroll;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n@media (min-width: 500px) and (min-height: 400px) {\n  .Burger {\n    width: 350px;\n    height: 300px;\n  }\n}\n\n@media (min-width: 500px) and (min-height: 401px) {\n  .Burger {\n    width: 450px;\n    height: 400px;\n  }\n}\n\n@media (min-width: 1000px) and (min-height: 700px) {\n  .Burger {\n    width: 700px;\n    height: 600px;\n  }\n}\n")),(0,a.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {2,8}',title:'"BurgerBuilder.js"',"{2,8}":!0},'import React, { Component, Fragment } from "react";\nimport Burger from "../components/Burger/Burger";\n\nclass BurgerBuilder extends Component {\n  render() {\n    return (\n      <Fragment>\n        <Burger />\n        <div>Build Control</div>\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')))}c.isMDXComponent=!0}}]);