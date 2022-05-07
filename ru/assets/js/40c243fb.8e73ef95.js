"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[40418],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=s,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60309:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var r=t(87462),s=t(63366),o=(t(67294),t(3905)),a=["components"],c={id:"5-10-1-0-css-modules-usage",title:"5.10.1.0 CSS Modules Usage",date:new Date("2021-04-04T21:35:40.000Z")},l=void 0,i={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage",id:"react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage",title:"5.10.1.0 CSS Modules Usage",description:"After adding the configuration (see the previous page) you'll get an object and properties to access the CSS rules.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"5-10-1-0-css-modules-usage",title:"5.10.1.0 CSS Modules Usage",date:"2021-04-04T21:35:40.000Z"},sidebar:"Docs",previous:{title:"5.10.0 Working With CSS Modules",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules"},next:{title:"5.10.1.1 CSS Modules Uder The Hood",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After adding the configuration (see the previous page) you'll get an ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," to access the CSS rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="App.css" {13-25}',title:'"App.css"',"{13-25}":!0},".App {\n  text-align: center;\n}\n\n.red {\n  color: red;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.Button {\n  background-color: green;\n  color: white;\n  font: inherit;\n  border: 1px solid blue;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.Button:hover {\n  background-color: lightgreen;\n  color: #333;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,7,9,12,16,19}',title:'"App.js"',"{2,7,9,12,16,19}":!0},'import React, { Component } from "react";\nimport classes from "./App.css";\nimport Person from "./Person/Person";\n\n...\n\n    const assignedClasses = [];\n    if (this.state.persons.length <= 2) {\n      assignedClasses.push(classes.red); // classes = [\'red]\n    }\n    if (this.state.persons.length <= 1) {\n      assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n    }\n\n    return (\n      <div className={classes.App}>\n        <h1>Hi, I\'m a React app!</h1>\n        <p className={assignedClasses.join(" ")}>This is really working!</p>\n        <button className={classes.Button} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);