"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[45456],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?o.createElement(m,i(i({ref:r},u),{},{components:t})):o.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90012:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"8-28-using-logo",title:"8.28 Using Logo",date:new Date("2021-04-11T12:01:40.000Z")},s=void 0,c={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-28-using-logo",id:"react-complete-guide/08-real-app-burger-builder/8-28-using-logo",isDocsHomePage:!1,title:"8.28 Using Logo",description:"New Logo.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-28-using-logo",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-28-using-logo",title:"8.28 Using Logo",date:"2021-04-11T12:01:40.000Z"},sidebar:"Docs",previous:{title:"8.27 Adding Toolbar",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-27-adding-toolbar"},next:{title:"8.29 Adding Reusable Navigation Items",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items"}},u=[{value:"New Logo.js",id:"new-logojs",children:[]},{value:"New Logo.module.css",id:"new-logomodulecss",children:[]},{value:"Toolbar.js",id:"toolbarjs",children:[]}],g={toc:u};function p(e){var r=e.components,l=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(68410).Z})),(0,a.kt)("h2",{id:"new-logojs"},"New Logo.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Logo.js" {}',title:'"Logo.js"',"{}":!0},'import React from "react";\nimport burgerLogo from "../../assets/images/burger-logo.png";\nimport classes from "./Logo.module.css";\n\nconst logo = (props) => (\n  <div className={classes.Logo}>\n    <img src={burgerLogo} alt="Burger Logo" />\n  </div>\n);\n\nexport default logo;\n')),(0,a.kt)("h2",{id:"new-logomodulecss"},"New Logo.module.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Logo.module.css" {}',title:'"Logo.module.css"',"{}":!0},".Logo {\n  background-color: #fff;\n  padding: 8px;\n  height: 80%;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n\n.Logo img {\n  height: 100%;\n}\n")),(0,a.kt)("h2",{id:"toolbarjs"},"Toolbar.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {2,8}',title:'"Toolbar.js"',"{2,8}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <Logo />\n    <nav>\n      <ul>...</ul>\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')))}p.isMDXComponent=!0},68410:function(e,r,t){r.Z=t.p+"assets/images/8-28-burger-logo-ec69c7f65e6d7565759fc1b0ca8e58fd.png"}}]);