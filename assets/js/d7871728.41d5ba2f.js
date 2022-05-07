"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[3131],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28911:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"7-18-how-react-update-dom",title:"7.18 How React Update DOM",date:new Date("2021-04-08T12:12:12.000Z")},p=void 0,d={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom",title:"7.18 How React Update DOM",description:"How React Update the DOM PDF",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-18-how-react-update-dom",title:"7.18 How React Update DOM",date:"2021-04-08T12:12:12.000Z"},sidebar:"Docs",previous:{title:"7.17 PureComponents Instead shouldComponentUpdate",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update"},next:{title:"7.19 Rendering Adjacent JSX Element",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element"}},l={},u=[],m={toc:u};function s(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(28707).Z},"How React Update the DOM PDF")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"render()")," is called",(0,o.kt)("br",{parentName:"p"}),"\n","to functional and class-based comps",(0,o.kt)("br",{parentName:"p"}),"\n",'doesn\'t immediately update the "real" DOM'),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate()")," passed!"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compares ",(0,o.kt)("inlineCode",{parentName:"p"},"Virtual DOMs"),":"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Old Virtual DOM"),(0,o.kt)("th",{parentName:"tr",align:null},"Re-rendered Virtual DOM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<div></div>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<div>...</div>"))))),(0,o.kt)("p",null,'Faster than "real" DOM'),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Differences?",(0,o.kt)("br",{parentName:"li"}),'Differences found => Update "real" DOM (not re-render)\nNo Differences? => Don\'t touch the "real" DOM!')))}s.isMDXComponent=!0},28707:function(e,t,n){t.Z=n.p+"assets/files/how-react-update-dom-2fe5a470882f0c500f940a39aeac4119.pdf"}}]);