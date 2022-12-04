"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[28465],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(g,l(l({ref:r},s),{},{components:t})):n.createElement(g,l({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97757:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={id:"8-23-implementing-backdrop-component",title:"8.23 Implementing Backdrop Component",date:new Date("2021-04-10T23:01:26.000Z")},l=void 0,i={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component",id:"react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component",title:"8.23 Implementing Backdrop Component",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-23-implementing-backdrop-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-23-implementing-backdrop-component",title:"8.23 Implementing Backdrop Component",date:"2021-04-10T23:01:26.000Z"},sidebar:"Courses",previous:{title:"8.22 Showing And Hiding Modal With Animation",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-22-showing-and-hiding-modal-with-animation"},next:{title:"8.24 Adding Custom Button Component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-24-adding-custom-button-component"}},p={},c=[{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"New Backdrop.js",id:"new-backdropjs",level:2},{value:"Backdrop.module.css",id:"backdropmodulecss",level:2},{value:"Modal.js",id:"modaljs",level:2}],s={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {3-5,19}',title:'"BurgerBuilder.js"',"{3-5,19}":!0},"...\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          <OrderSummary ingredients={this.state.ingredients} />\n")),(0,a.kt)("h2",{id:"new-backdropjs"},"New Backdrop.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Backdrop.js" {}',title:'"Backdrop.js"',"{}":!0},'import React from "react";\nimport classes from "./Backdrop.module.css";\n\nconst backdrop = (props) =>\n  props.show ? (\n    <div className={classes.Backdrop} onClick={props.clicked}></div>\n  ) : null;\n\nexport default backdrop;\n')),(0,a.kt)("h2",{id:"backdropmodulecss"},"Backdrop.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Backdrop.module.css" {}',title:'"Backdrop.module.css"',"{}":!0},".Backdrop {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n")),(0,a.kt)("h2",{id:"modaljs"},"Modal.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Modal.js" {1-2,6-7,17}',title:'"Modal.js"',"{1-2,6-7,17}":!0},'import React, { Fragment } from "react";\nimport Backdrop from "../Backdrop/Backdrop";\nimport classes from "./Modal.module.css";\n\nconst modal = (props) => (\n  <Fragment>\n    <Backdrop show={props.show} clicked={props.modalClosed} />\n    <div\n      className={classes.Modal}\n      style={{\n        transform: props.show ? "translateY(0)" : "translateY(-100vh)",\n        opacity: props.show ? "1" : "0",\n      }}\n    >\n      {props.children}\n    </div>\n  </Fragment>\n);\n\nexport default modal;\n')))}d.isMDXComponent=!0}}]);