"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[19796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,g=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,u(u({ref:t},c),{},{components:r})):n.createElement(g,u({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const o={id:"8-16-outputting-multiple-build-controls",title:"8.16 Outputting Multiple Build Controls",date:new Date("2021-04-10T17:29:48.000Z")},u=void 0,i={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls",id:"react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls",title:"8.16 Outputting Multiple Build Controls",description:"New BuildControls.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-16-outputting-multiple-build-controls.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-16-outputting-multiple-build-controls",title:"8.16 Outputting Multiple Build Controls",date:"2021-04-10T17:29:48.000Z"},sidebar:"Courses",previous:{title:"8.15 Adding Build Control Component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-15-adding-build-control-component"},next:{title:"8.17 Connecting State To Build Controls",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-17-connecting-state-to-build-controls"}},a={},s=[{value:"New BuildControls.js",id:"new-buildcontrolsjs",level:2},{value:"New BuildControls.module.css",id:"new-buildcontrolsmodulecss",level:2},{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"new-buildcontrolsjs"},"New BuildControls.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BuildControls.js" {}',title:'"BuildControls.js"',"{}":!0},'import React from "react";\nimport BuildControl from "./BuildControl/BuildControl";\nimport classes from "./BuildControls.module.css";\nconst controls = [\n  { label: "Salad", type: "salad" },\n  { label: "Bacon", type: "bacon" },\n  { label: "Cheese", type: "cheese" },\n  { label: "Meat", type: "meat" },\n];\n\nconst buildControls = (props) => (\n  <div className={classes.BuildControls}>\n    {controls.map((ctrl) => (\n      <BuildControl key={ctrl.label} label={ctrl.label} />\n    ))}\n  </div>\n);\n\nexport default buildControls;\n')),(0,l.kt)("h2",{id:"new-buildcontrolsmodulecss"},"New BuildControls.module.css"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="BuildControls.module.css" {}',title:'"BuildControls.module.css"',"{}":!0},".BuildControls {\n  width: 100%;\n  background-color: #cf8f2e;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-shadow: 0 2px 1px #ccc;\n  margin: auto;\n  padding: 10px 0;\n}\n")),(0,l.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {2,22}',title:'"BurgerBuilder.js"',"{2,22}":!0},'import React, { Component, Fragment } from "react";\nimport BuildControls from "../components/Burger/BuildControls/BuildControls";\nimport Burger from "../components/Burger/Burger";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: {\n      salad: 0,\n      bacon: 0,\n      cheese: 0,\n      meat: 0,\n    },\n  };\n  render() {\n    return (\n      <Fragment>\n        <Burger ingredients={this.state.ingredients} />\n        <BuildControls />\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')))}p.isMDXComponent=!0}}]);