"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[95684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,g=l["".concat(s,".").concat(m)]||l[m]||d[m]||c;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=l;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},66863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const c={id:"14-06-dispatching-actions",title:"14.06 Dispatching Actions",date:new Date("2021-04-21T23:20:16.000Z")},i=void 0,o={unversionedId:"react-complete-guide/14-redux/14-06-dispatching-actions",id:"react-complete-guide/14-redux/14-06-dispatching-actions",title:"14.06 Dispatching Actions",description:"redux-basics.js",source:"@site/courses/react-complete-guide/14-redux/14-06-dispatching-actions.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-06-dispatching-actions",permalink:"/hm/courses/react-complete-guide/14-redux/14-06-dispatching-actions",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-06-dispatching-actions.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"14-06-dispatching-actions",title:"14.06 Dispatching Actions",date:"2021-04-21T23:20:16.000Z"},sidebar:"Courses",previous:{title:"14.05 Setting Up Reducer And Store",permalink:"/hm/courses/react-complete-guide/14-redux/14-05-setting-up-reducer-and-store"},next:{title:"14.07 Adding Subscriptions",permalink:"/hm/courses/react-complete-guide/14-redux/14-07-adding-subscriptions"}},s={},u=[{value:"<code>redux-basics.js</code>",id:"redux-basicsjs",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"redux-basicsjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"redux-basics.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="redux-basics.js" {10-21,30-32}',title:'"redux-basics.js"',"{10-21,30-32}":!0},'const redux = require("redux");\nconst createStore = redux.createStore;\n\nconst initialState = {\n  counter: 0,\n};\n\n// Reducer\nconst rootReducer = (state = initialState, action) => {\n  if (action.type === "INC_COUNTER") {\n    return {\n      ...state,\n      counter: state.counter + 1,\n    };\n  }\n  if (action.type === "ADD_COUNTER") {\n    return {\n      ...state,\n      counter: state.counter + action.value,\n    };\n  }\n  return state;\n};\n\n// Store\nconst store = createStore(rootReducer);\nconsole.log(store.getState());\n\n// Dispatching Action\nstore.dispatch({ type: "INC_COUNTER" });\nstore.dispatch({ type: "ADD_COUNTER", value: 10 });\nconsole.log(store.getState());\n// Subscription\n')))}d.isMDXComponent=!0}}]);