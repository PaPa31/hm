"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[33364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=i,p=d["".concat(l,".").concat(u)]||d[u]||g[u]||r;return a?n.createElement(p,o(o({ref:t},c),{},{components:a})):n.createElement(p,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={id:"8-29-adding-reusable-navigation-items",title:"8.29 Adding Reusable Navigation Items",date:new Date("2021-04-11T13:24:41.000Z")},o=void 0,s={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",id:"react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",title:"8.29 Adding Reusable Navigation Items",description:"New NavigationItems.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-29-adding-reusable-navigation-items.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"8-29-adding-reusable-navigation-items",title:"8.29 Adding Reusable Navigation Items",date:"2021-04-11T13:24:41.000Z"},sidebar:"Courses",previous:{title:"8.28 Using Logo",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-28-using-logo"},next:{title:"8.30 Creating Responsive Sidedrawer",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-30-creating-responsive-sidedrawer"}},l={},m=[{value:"New NavigationItems.js",id:"new-navigationitemsjs",level:2},{value:"New NavigationItems.module.css",id:"new-navigationitemsmodulecss",level:2},{value:"New NavigationItem.js",id:"new-navigationitemjs",level:2},{value:"New NavigationItem.module.css",id:"new-navigationitemmodulecss",level:2},{value:"Toolbar.js",id:"toolbarjs",level:2}],c={toc:m};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-navigationitemsjs"},"New NavigationItems.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItems.js" {}',title:'"NavigationItems.js"',"{}":!0},'import React from "react";\nimport NavigationItem from "./NavigationItem/NavigationItem";\nimport classes from "./NavigationItems.module.css";\n\nconst navigationItems = () => (\n  <ul className={classes.NavigationItems}>\n    <NavigationItem link="/" active>\n      Burger Builder\n    </NavigationItem>\n    <NavigationItem link="/">Checkout</NavigationItem>\n  </ul>\n);\n\nexport default navigationItems;\n')),(0,i.kt)("h2",{id:"new-navigationitemsmodulecss"},"New NavigationItems.module.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="NavigationItems.module.css" {}',title:'"NavigationItems.module.css"',"{}":!0},".NavigationItems {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n")),(0,i.kt)("h2",{id:"new-navigationitemjs"},"New NavigationItem.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItem.js" {}',title:'"NavigationItem.js"',"{}":!0},'import React from "react";\nimport classes from "./NavigationItem.module.css";\n\nconst navigationItem = (props) => (\n  <li className={classes.NavigationItem}>\n    <a href={props.link} className={props.active ? classes.active : null}>\n      {props.children}\n    </a>\n  </li>\n);\n\nexport default navigationItem;\n')),(0,i.kt)("h2",{id:"new-navigationitemmodulecss"},"New NavigationItem.module.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="NavigationItem.module.css" {}',title:'"NavigationItem.module.css"',"{}":!0},".NavigationItem {\n  margin: 0;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n\n.NavigationItem a {\n  color: #fff;\n  text-decoration: none;\n  height: 100%;\n  padding: 16px 10px;\n  border-bottom: 4px solid transparent;\n  box-sizing: border-box;\n  display: block;\n}\n\n.NavigationItem a:hover,\n.NavigationItem a:active,\n.NavigationItem a.active {\n  background-color: #8f5c2c;\n  border-bottom: 4px solid #40a4c8;\n  color: #fff;\n}\n")),(0,i.kt)("h2",{id:"toolbarjs"},"Toolbar.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {3,11}',title:'"Toolbar.js"',"{3,11}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <div>MENU</div>\n    <Logo />\n    <nav>\n      <NavigationItems />\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')))}g.isMDXComponent=!0}}]);