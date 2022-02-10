"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[85115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34886:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"3-03-1-0-pure-react",title:"3.03.1.0 Pure React",date:new Date("2021-03-21T17:28:24.000Z")},l=void 0,s={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react",title:"3.03.1.0 Pure React",description:"Let's start by writing pure React.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-03-1-0-pure-react",title:"3.03.1.0 Pure React",date:"2021-03-21T17:28:24.000Z"},sidebar:"Docs",previous:{title:"3.03.0 Create New React App",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-0-create-new-react-app"},next:{title:"3.03.1.1 React With Jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx"}},p=[{value:"Finished File",id:"finished-file",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's start by writing pure React."),(0,i.kt)("p",null,"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file and add this code to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {11-12}',title:'"index.html"',"{11-12}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script>\n      // React code here\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"Open ",(0,i.kt)("em",{parentName:"p"},"index.html")," in your browser. You should see a line of text saying: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not rendered")),"."),(0,i.kt)("p",null,"Inside of ",(0,i.kt)("em",{parentName:"p"},"index.html"),", we have two script tags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React library"),": Interface between the file and React (just API). All methods (except one) will be via this library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React DOM"),": Rendering layer. Since we're rendering to the browser, we're using ",(0,i.kt)("strong",{parentName:"li"},"React DOM"),". There are other React libraries like ",(0,i.kt)("strong",{parentName:"li"},"React Native"),", ",(0,i.kt)("strong",{parentName:"li"},"React 360")," (formerly React VR), ",(0,i.kt)("strong",{parentName:"li"},"A-Frame React"),", ",(0,i.kt)("strong",{parentName:"li"},"React Blessed"),", and others.")),(0,i.kt)("p",null,"Add the following React code between the last ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="React code"',title:'"React','code"':!0},'const App = () => {\n  return React.createElement(\n    "div",\n    {},\n    React.createElement("h1", {}, "Hello World!")\n  );\n};\n\nReactDOM.render(React.createElement(App), document.getElementById("root"));\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that the order of all scripts tags is important. It is also important that you placed all of these scripts after ",(0,i.kt)("inlineCode",{parentName:"p"},'<div id="app">')," container. The browser first creates the DOM, then fills it with content."))),(0,i.kt)("h2",{id:"finished-file"},"Finished File"),(0,i.kt)("p",null,"You should have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script>\n      class App extends React.Component {\n        render() {\n          return React.createElement(\n            "div",\n            {},\n            React.createElement("h1", {}, "Hello World!")\n          );\n        }\n      }\n      ReactDOM.render(React.createElement(App), document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"This is about the simplest React app you can build."))}m.isMDXComponent=!0}}]);