"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[71494],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5761:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={id:"8-09-starting-implementation-burger-builder-container",title:"8.09 Starting Implementation Burger Builder Container",date:new Date("2021-04-09T21:46:17.000Z")},l=void 0,s={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container",id:"react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container",title:"8.09 Starting Implementation Burger Builder Container",description:"Wrong Folder Structure",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"8-09-starting-implementation-burger-builder-container",title:"8.09 Starting Implementation Burger Builder Container",date:"2021-04-09T21:46:17.000Z"},sidebar:"Docs",previous:{title:"8.08 Creating Layout Component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component"},next:{title:"8.10 Adding Dynamic Ingredient Component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-10-adding-dynamic-ingredient-component"}},p={},c=[{value:"Wrong Folder Structure",id:"wrong-folder-structure",level:2},{value:"New BurgerBuilder.js",id:"new-burgerbuilderjs",level:2},{value:"Layout.js",id:"layoutjs",level:2},{value:"New Layout.module.css",id:"new-layoutmodulecss",level:2},{value:"App.js",id:"appjs",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wrong-folder-structure"},"Wrong Folder Structure"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"I made a mistake! And organized the folders incorrectly.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"BurgerBuilder")," folder must be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"containers")," folder.\nBut despite this, everything works fine! I fixed it in ",(0,i.kt)("a",{parentName:"p",href:"8-27-adding-toolbar"},"lesson 8.27"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"src/\n\u2502\n\u251c\u2500\u2500 assets/\n\u2502\n\u251c\u2500\u2500 BurgerBuilder\n\u2502     \u2514\u2500\u2500 BurgerBuilder.js\n\u2502\n\u251c\u2500\u2500 components/\n\u2502     \u2514\u2500\u2500 Layout/\n\u2502            \u251c\u2500\u2500 Layout.js\n\u2502            \u2514\u2500\u2500 Layout.module.css\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,i.kt)("h2",{id:"new-burgerbuilderjs"},"New BurgerBuilder.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {}',title:'"BurgerBuilder.js"',"{}":!0},'import React, { Component, Fragment } from "react";\n\nclass BurgerBuilder extends Component {\n  render() {\n    return (\n      <Fragment>\n        <div>Burger</div>\n        <div>Build Control</div>\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')),(0,i.kt)("h2",{id:"layoutjs"},"Layout.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Layout.js" {2,7}',title:'"Layout.js"',"{2,7}":!0},'import React, { Fragment } from "react";\nimport classes from "./Layout.module.css";\n\nconst layout = (props) => (\n  <Fragment>\n    <div>Toolbar, SideDrawer, Backdrop</div>\n    <main className={classes.Content}>{props.children}</main>\n  </Fragment>\n);\nexport default layout;\n')),(0,i.kt)("h2",{id:"new-layoutmodulecss"},"New Layout.module.css"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This project supports CSS Modules alongside regular stylesheets using the ","[name]",".module.css file naming convention.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Layout.module.css" {}',title:'"Layout.module.css"',"{}":!0},".Content {\n  margin-top: 16px;\n}\n")),(0,i.kt)("h2",{id:"appjs"},"App.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,10}',title:'"App.js"',"{2,10}":!0},'import React, { Component } from "react";\nimport BurgerBuilder from "./BurgerBuilder/BurgerBuilder";\nimport Layout from "./components/Layout/Layout";\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <Layout>\n          <BurgerBuilder />\n        </Layout>\n      </div>\n    );\n  }\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);