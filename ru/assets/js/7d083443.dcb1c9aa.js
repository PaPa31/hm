"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[89302],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={id:"5-10-1-1-css-modules-uder-the-hood",title:"5.10.1.1 CSS Modules Uder The Hood",date:new Date("2021-04-05T11:44:51.000Z")},i=void 0,l={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood",id:"react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood",title:"5.10.1.1 CSS Modules Uder The Hood",description:"If this process simply detects this kind of import:",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-1-css-modules-uder-the-hood.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"5-10-1-1-css-modules-uder-the-hood",title:"5.10.1.1 CSS Modules Uder The Hood",date:"2021-04-05T11:44:51.000Z"},sidebar:"Docs",previous:{title:"5.10.1.0 CSS Modules Usage",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage"},next:{title:"5.10.2 Auto Generated Class Names",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-2-auto-generated-class-names"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If this process simply detects this kind of import:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import classes from './App.css'\n")),(0,a.kt)("p",null,"from a CSS file, and understands that we don't just want to add the CSS as it is, but instead it now looks into the CSS file, transforms every class name here, to a random unique one, and returns us a map of these generated unique class names, mapped to the class names we chose here as properties and as object which we import. So every class name we have in CSS file is now a property of this imported object, and the value for every property will be this randomly generated unique class name, generated by this package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'{39,42} title="Final file"',"{39,42}":!0,title:'"Final','file"':!0},'...\n<head>\n...\n\n<style type="text/css">\n.App__App__1o-Fp {\n  text-align: center;\n}\n\n.App__red__lKdi_ {\n  color: red;\n}\n\n.App__bold__1Ylab {\n  font-weight: bold;\n}\n\n.App__Button__2_NDl {\n  background-color: green;\n  color: white;\n  font: inherit;\n  border: 1px solid blue;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.App__Button__2_NDl:hover {\n  background-color: lightgreen;\n  color: #333;\n}\n</style>\n\n...\n</head>\n<body>\n...\n\n<div id="root">\n  <div class="App__App__1o-Fp">\n    <h1>Hi, I\'m a React app!</h1>\n    <p class="">This is really working!</p>\n    <button class="App__Button__2_NDl">Toggle Persons</button>\n  </div>\n</div>\n...\n</body>\n')))}m.isMDXComponent=!0}}]);