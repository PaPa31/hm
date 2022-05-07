"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[5974],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(n),m=o,d=g["".concat(u,".").concat(m)]||g[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={id:"11-31-routing-and-server-deployment",title:"11.31 Routing And Server Deployment",date:new Date("2021-04-17T21:13:00.000Z")},u=void 0,l={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment",title:"11.31 Routing And Server Deployment",description:"",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-31-routing-and-server-deployment.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"11-31-routing-and-server-deployment",title:"11.31 Routing And Server Deployment",date:"2021-04-17T21:13:00.000Z"},sidebar:"Docs",previous:{title:"11.30 Lazy Loading With React Suspense",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-30-lazy-loading-with-react-suspense"},next:{title:"11.32 Practice",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-32-practice"}},c={},s=[],g={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {8}',title:'"App.js"',"{8}":!0},'import React, { Component } from "react";\nimport { BrowserRouter } from "react-router-dom";\nimport Blog from "./containers/Blog/Blog";\n\nclass App extends Component {\n  render() {\n    return (\n      // <BrowserRouter basename="/my-app">\n      <BrowserRouter>\n        <div className="App">\n          <Blog />\n        </div>\n      </BrowserRouter>\n    );\n  }\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);