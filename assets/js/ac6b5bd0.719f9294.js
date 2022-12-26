"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[84403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),g=a,m=l["".concat(o,".").concat(g)]||l[g]||p[g]||i;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=l;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},88452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"17-16-resetting-price-after-purchases",title:"17.16 Resetting Price After Purchases",date:new Date("2021-07-17T15:53:46.000Z")},c=void 0,s={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases",id:"react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases",title:"17.16 Resetting Price After Purchases",description:"reducers/burgerBuilder.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-16-resetting-price-after-purchases.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"17-16-resetting-price-after-purchases",title:"17.16 Resetting Price After Purchases",date:"2021-07-17T15:53:46.000Z"},sidebar:"Courses",previous:{title:"17.15 Handling Purchases And Updating UI",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-15-handling-purchases-and-updating-ui"},next:{title:"17.17 Fetching Orders via Redux",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-17-fetching-orders-via-redux"}},o={},u=[{value:"<code>reducers/burgerBuilder.js</code>",id:"reducersburgerbuilderjs",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reducersburgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducers/burgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {45}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{45}":!0},'import * as actionTypes from "../actions/actionTypes";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n        },\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n        },\n        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.SET_INGREDIENTS:\n      return {\n        ...state,\n        ingredients: {\n          salad: action.ingredients.salad,\n          bacon: action.ingredients.bacon,\n          cheese: action.ingredients.cheese,\n          meat: action.ingredients.meat,\n        },\n        totalPrice: 4,\n        error: false,\n      };\n    case actionTypes.FETCH_INGREDIENTS_FAILED:\n      return {\n        ...state,\n        error: true,\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}p.isMDXComponent=!0}}]);