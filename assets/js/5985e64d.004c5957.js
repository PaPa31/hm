"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[91226],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(i,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60105:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],l={id:"render-element",title:"Render Element",date:new Date("2021-02-21T18:50:35.000Z"),description:"Rendering an React Element into the DOM"},i=void 0,p={unversionedId:"react/render-element",id:"react/render-element",title:"Render Element",description:"Rendering an React Element into the DOM",source:"@site/docs/react/render-element.md",sourceDirName:"react",slug:"/react/render-element",permalink:"/hm/docs/react/render-element",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/react/render-element.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1615444824,formattedLastUpdatedAt:"3/11/2021",frontMatter:{id:"render-element",title:"Render Element",date:"2021-02-21T18:50:35.000Z",description:"Rendering an React Element into the DOM"},sidebar:"Docs",previous:{title:"Listenable Events",permalink:"/hm/docs/react/listenable-events"},next:{title:"Updating Element",permalink:"/hm/docs/react/updating-element"}},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You need a parent DOM node for embedding React Elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div id="root"></div>\n')),(0,o.kt)("p",null,"To render, pass both an Element and a parent node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello, world</h1>;\nReactDOM.render(element, document.getElementById('root'));\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/papa31/pen/GRNMJoO"},"Try it CodePen")),(0,o.kt)("p",null,"The parent node with embedded React Elements forms the React DOM."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"updating-element"},"Updating the Rendered Element")))}m.isMDXComponent=!0}}]);