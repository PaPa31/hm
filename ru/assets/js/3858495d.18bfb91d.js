"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[3621],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,g=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9332:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"8-32-more-responsive-adjustments",title:"8.32 More Responsive Adjustments",date:new Date("2021-04-11T16:33:42.000Z")},l=void 0,c={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments",id:"react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments",title:"8.32 More Responsive Adjustments",description:"Toolbar.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-32-more-responsive-adjustments.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"8-32-more-responsive-adjustments",title:"8.32 More Responsive Adjustments",date:"2021-04-11T16:33:42.000Z"},sidebar:"Docs",previous:{title:"8.31.1 Working On Responsive Adjustments",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-31-1-working-on-responsive-adjustments"},next:{title:"8.33 Reusing Backdrop",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-33-reusing-backdrop"}},d={},m=[{value:"Toolbar.js",id:"toolbarjs",level:2},{value:"Toolbar.module.css",id:"toolbarmodulecss",level:2},{value:"NavigationItems.module.css",id:"navigationitemsmodulecss",level:2},{value:"NavigationItem.module.css",id:"navigationitemmodulecss",level:2},{value:"SideDrawer.module.css",id:"sidedrawermodulecss",level:2}],u={toc:m};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"toolbarjs"},"Toolbar.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {12}',title:'"Toolbar.js"',"{12}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <div className={classes.Logo}>\n      <Logo />\n    </div>\n    <nav className={classes.DesktopOnly}>\n      <NavigationItems />\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')),(0,a.kt)("h2",{id:"toolbarmodulecss"},"Toolbar.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Toolbar.module.css" {24-28}',title:'"Toolbar.module.css"',"{24-28}":!0},".Toolbar {\n  height: 56px;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #703b09;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  box-sizing: border-box;\n  z-index: 90;\n}\n\n.Toolbar nav {\n  height: 100%;\n}\n\n.Logo {\n  height: 80%;\n}\n\n@media (max-width: 499px) {\n  .DesktopOnly {\n    display: none;\n  }\n}\n")),(0,a.kt)("h2",{id:"navigationitemsmodulecss"},"NavigationItems.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Toolbar.module.css" {11-15}',title:'"Toolbar.module.css"',"{11-15}":!0},".NavigationItems {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  height: 100%;\n}\n\n@media (min-width: 500px) {\n  .NavigationItems {\n    flex-flow: row;\n  }\n}\n")),(0,a.kt)("h2",{id:"navigationitemmodulecss"},"NavigationItem.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="NavigationItem.module.css" {1-22,27,45}',title:'"NavigationItem.module.css"',"{1-22,27,45}":!0},".NavigationItem {\n  margin: 10px 0;\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n}\n\n.NavigationItem a {\n  color: #8f5c2c;\n  text-decoration: none;\n  width: 100%;\n  box-sizing: border-box;\n  display: block;\n}\n\n.NavigationItem a:hover,\n.NavigationItem a:active,\n.NavigationItem a.active {\n  color: #40a4c8;\n}\n\n@media (min-width: 500px) {\n  .NavigationItem {\n    margin: 0;\n    display: flex;\n    height: 100%;\n    width: auto;\n    align-items: center;\n  }\n\n  .NavigationItem a {\n    color: #fff;\n    height: 100%;\n    padding: 16px 10px;\n    border-bottom: 4px solid transparent;\n  }\n\n  .NavigationItem a:hover,\n  .NavigationItem a:active,\n  .NavigationItem a.active {\n    background-color: #8f5c2c;\n    border-bottom: 4px solid #40a4c8;\n    color: #fff;\n  }\n}\n")),(0,a.kt)("h2",{id:"sidedrawermodulecss"},"SideDrawer.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SideDrawer.module.css" {31}',title:'"SideDrawer.module.css"',"{31}":!0},".SideDrawer {\n  position: fixed;\n  width: 28px;\n  min-width: 280px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 200;\n  background-color: #fff;\n  padding: 32px 16px;\n  box-sizing: border-box;\n  transition: transform 0.3 ease-out;\n}\n\n@media (min-width: 500px) {\n  .SideDrawer {\n    display: none;\n  }\n}\n\n.Open {\n  transform: translateX(0);\n}\n\n.Close {\n  transform: translateX(-100%);\n}\n\n.Logo {\n  height: 11%;\n  margin-bottom: 32px;\n}\n")))}p.isMDXComponent=!0}}]);