"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[99211],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return s}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),s=o,m=p["".concat(c,".").concat(s)]||p[s]||g[s]||a;return n?t.createElement(m,i(i({ref:r},d),{},{components:n})):t.createElement(m,i({ref:r},d))}));function s(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46257:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"8-35-adding-humburger-icon",title:"8.35 Adding Humburger Icon",date:new Date("2021-04-11T21:51:28.000Z")},c=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon",id:"react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon",title:"8.35 Adding Humburger Icon",description:"New DrawerToggle.module.css",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-35-adding-humburger-icon",title:"8.35 Adding Humburger Icon",date:"2021-04-11T21:51:28.000Z"},sidebar:"Docs",previous:{title:"8.34 Adding Sidedrawer Toggle Button",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button"},next:{title:"8.38 Improving Perfomance",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance"}},d=[{value:"New DrawerToggle.module.css",id:"new-drawertogglemodulecss",children:[],level:2},{value:"DrawerToggle.js",id:"drawertogglejs",children:[],level:2}],g={toc:d};function p(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-drawertogglemodulecss"},"New DrawerToggle.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="DrawerToggle.module.css" {}',title:'"DrawerToggle.module.css"',"{}":!0},".DrawerToggle {\n  width: 40px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.DrawerToggle div {\n  width: 90%;\n  height: 3px;\n  background-color: white;\n}\n\n@media (min-width: 500px) {\n  .DrawerToggle {\n    display: none;\n  }\n}\n")),(0,a.kt)("h2",{id:"drawertogglejs"},"DrawerToggle.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="DrawerToggle.js" {2,5-8}',title:'"DrawerToggle.js"',"{2,5-8}":!0},'import React from "react";\nimport classes from "./DrawerToggle.module.css";\n\nconst drawerToggle = (props) => (\n  <div className={classes.DrawerToggle} onClick={props.clicked}>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n);\n\nexport default drawerToggle;\n')))}p.isMDXComponent=!0}}]);