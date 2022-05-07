"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[27305],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],s={id:"3-03-create-nested-components",title:"3.03 Create Nested Components",date:new Date("2021-03-19T22:29:03.000Z")},u=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components",id:"react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components",title:"3.03 Create Nested Components",description:"",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Practice",slug:"/react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Practice/3-03-create-nested-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"3-03-create-nested-components",title:"3.03 Create Nested Components",date:"2021-03-19T22:29:03.000Z"},sidebar:"Docs",previous:{title:"3.02 Create Elements",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Practice/3-02-create-elements"},next:{title:"3.04 Passing Data Through Props",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Practice/3-04-passing-data-through-props"}},i={},l=[],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {9-11}',title:'"App.js"',"{9-11}":!0},"import React, { Component } from 'react';\nimport './App.css';\nimport UserOutput from './UserOutput/UserOutput'\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <UserOutput />\n        <UserOutput />\n        <UserOutput />\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserInput.js"',title:'"UserInput.js"'},"import React from 'react'\n\nconst userInput = () => {\n  return <input type=\"text\"></input>\n}\n\nexport default userInput\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserOutput.js"',title:'"UserOutput.js"'},"import React from 'react'\n\nconst userOutput = () => {return ()}\n\nexport default userOutput\n")))}d.isMDXComponent=!0}}]);