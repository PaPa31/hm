"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[72781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,d=p["".concat(c,".").concat(u)]||p[u]||g[u]||a;return n?i.createElement(d,o(o({ref:t},m),{},{components:n})):i.createElement(d,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={id:"12-10-implementing-navigation-links",title:"12.10 Implementing Navigation Links",date:new Date("2021-04-20T12:08:39.000Z")},o=void 0,s={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",id:"react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",title:"12.10 Implementing Navigation Links",description:"NavigationItems.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-10-implementing-navigation-links.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"12-10-implementing-navigation-links",title:"12.10 Implementing Navigation Links",date:"2021-04-20T12:08:39.000Z"},sidebar:"Courses",previous:{title:"12.09 Adding Orders Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-09-adding-orders-page"},next:{title:"12.11.0 Fetching Orders",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-11-0-fetching-orders"}},c={},l=[{value:"<code>NavigationItems.js</code>",id:"navigationitemsjs",level:2},{value:"<code>NavigationItem.js</code>",id:"navigationitemjs",level:2}],m={toc:l};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"navigationitemsjs"},(0,r.kt)("inlineCode",{parentName:"h2"},"NavigationItems.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItems.js" {7,10}',title:'"NavigationItems.js"',"{7,10}":!0},'import React from "react";\nimport NavigationItem from "./NavigationItem/NavigationItem";\nimport classes from "./NavigationItems.module.css";\n\nconst navigationItems = () => (\n  <ul className={classes.NavigationItems}>\n    <NavigationItem link="/" exact>\n      Burger Builder\n    </NavigationItem>\n    <NavigationItem link="/orders">Orders</NavigationItem>\n  </ul>\n);\n\nexport default navigationItems;\n')),(0,r.kt)("h2",{id:"navigationitemjs"},(0,r.kt)("inlineCode",{parentName:"h2"},"NavigationItem.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NavigationItem.js" {2,7-10,13}',title:'"NavigationItem.js"',"{2,7-10,13}":!0},'import React from "react";\nimport { NavLink } from "react-router-dom";\nimport classes from "./NavigationItem.module.css";\n\nconst navigationItem = (props) => (\n  <li className={classes.NavigationItem}>\n    <NavLink\n      to={props.link}\n      exact={props.exact}\n      activeClassName={classes.active}\n    >\n      {props.children}\n    </NavLink>\n  </li>\n);\n\nexport default navigationItem;\n')))}g.isMDXComponent=!0}}]);