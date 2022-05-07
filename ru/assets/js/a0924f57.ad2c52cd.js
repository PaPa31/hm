"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[86002],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76368:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"8-31-1-working-on-responsive-adjustments",title:"8.31.1 Working On Responsive Adjustments",date:new Date("2021-04-11T15:38:37.000Z")},l=void 0,d={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments",id:"react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments",title:"8.31.1 Working On Responsive Adjustments",description:"2nd Way",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"8-31-1-working-on-responsive-adjustments",title:"8.31.1 Working On Responsive Adjustments",date:"2021-04-11T15:38:37.000Z"},sidebar:"Docs",previous:{title:"8.31.0 Working On Responsive Adjustments",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-31-0-working-on-responsive-adjustments"},next:{title:"8.32 More Responsive Adjustments",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments"}},u={},c=[{value:"2nd Way",id:"2nd-way",level:2},{value:"Toolbars.js",id:"toolbarsjs",level:3},{value:"SideDrawer.js",id:"sidedrawerjs",level:3},{value:"Toolbar.module.css",id:"toolbarmodulecss",level:3},{value:"SideDrawer.module.css",id:"sidedrawermodulecss",level:3}],p={toc:c};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"2nd-way"},"2nd Way"),(0,a.kt)("h3",{id:"toolbarsjs"},"Toolbars.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbars.js" {9-11}',title:'"Toolbars.js"',"{9-11}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <div className={classes.Logo}>\n      <Logo />\n    </div>\n    <nav>\n      <NavigationItems />\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')),(0,a.kt)("h3",{id:"sidedrawerjs"},"SideDrawer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SideDrawer.js" {10-12}',title:'"SideDrawer.js"',"{10-12}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./SideDrawer.module.css";\n\nconst sideDrawer = (props) => {\n  //...\n  return (\n    <div className={classes.SideDrawer}>\n      <div className={classes.Logo}>\n        <Logo />\n      </div>\n      <nav>\n        <NavigationItems />\n      </nav>\n    </div>\n  );\n};\n\nexport default sideDrawer;\n')),(0,a.kt)("h3",{id:"toolbarmodulecss"},"Toolbar.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Toolbar.module.css" {20-22}',title:'"Toolbar.module.css"',"{20-22}":!0},".Toolbar {\n  height: 56px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #703b09;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n}\n\n.Toolbar nav {\n  height: 100%;\n}\n\n.Logo {\n  height: 80%;\n}\n")),(0,a.kt)("h3",{id:"sidedrawermodulecss"},"SideDrawer.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SideDrawer.module.css" {29-31}',title:'"SideDrawer.module.css"',"{29-31}":!0},".SideDrawer {\n  position: fixed;\n  width: 28px;\n  min-width: 280px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 200;\n  background-color: #fff;\n  padding: 32px 16px;\n  box-sizing: border-box;\n  transition: transform 0.3 ease-out;\n}\n\n@media (min-width: 500px) {\n  .SideDrawer {\n    display: none;\n  }\n}\n\n.Open {\n  transform: translateX(0);\n}\n\n.Close {\n  transform: translateX(-100%);\n}\n\n.Logo {\n  height: 11%;\n}\n")))}m.isMDXComponent=!0}}]);