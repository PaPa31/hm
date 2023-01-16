"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[12516],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(i,".").concat(m)]||l[m]||p[m]||a;return t?n.createElement(f,c(c({ref:r},s),{},{components:t})):n.createElement(f,c({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=l;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,c[1]=d;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},67828:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={id:"17-11-order-reducer",title:"17.11 Order Reducer",date:new Date("2021-07-16T23:04:24.000Z")},c=void 0,d={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer",id:"react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer",title:"17.11 Order Reducer",description:"reducers/order.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-11-order-reducer.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"17-11-order-reducer",title:"17.11 Order Reducer",date:"2021-07-16T23:04:24.000Z"},sidebar:"Courses",previous:{title:"17.10 Connecting Contact Data Container & Actions",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-10-connecting-contact-data-container-and-actions"},next:{title:"17.12 Working on Order Actions",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-12-working-on-order-actions"}},i={},u=[{value:"<code>reducers/order.js</code>",id:"reducersorderjs",level:2}],s={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"reducersorderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"reducers/order.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\order.js" {1-30}',title:'"src\\store\\reducers\\order.js"',"{1-30}":!0},'import * as actionTypes from "../actions/actionTypes";\n\nconst initialState = {\n  orders: [],\n  loading: false,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.PURCHASE_BURGER_SUCCESS:\n      const newOrder = {\n        ...action.orderData,\n        id: action.orderId,\n      };\n      return {\n        ...state,\n        loading: false,\n        orders: state.orders.concat(newOrder),\n      };\n    case actionTypes.PURCHASE_BURGER_FAIL:\n      return {\n        ...state,\n        loading: false,\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}p.isMDXComponent=!0}}]);