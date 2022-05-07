"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[73178],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,f=p["".concat(u,".").concat(g)]||p[g]||l[g]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},40711:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"15-04-finishing-reducer-for-ingredients",title:"15.04 Finishing Reducer For Ingredients",date:new Date("2021-07-12T21:33:05.000Z")},u=void 0,s={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients",id:"react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients",title:"15.04 Finishing Reducer For Ingredients",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"15-04-finishing-reducer-for-ingredients",title:"15.04 Finishing Reducer For Ingredients",date:"2021-07-12T21:33:05.000Z"},sidebar:"Docs",previous:{title:"15.03 Basic Redux Setup",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-03-basic-redux-setup"},next:{title:"15.05 Connecting Burger Builder Container To Our Store",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store"}},d={},l=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",level:2},{value:"<code>reducer.js</code>",id:"reducerjs",level:2}],p={toc:l};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuilderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {13-22}',title:'"BurgerBuilder.js"',"{13-22}":!0},'  ...\n  state = {\n    ingredients: null,\n    totalPrice: 4,\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState\n\n  ...\n')),(0,o.kt)("h2",{id:"reducerjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {1,4-9,13-34}',title:'"reducer.js"',"{1,4-9,13-34}":!0},'import * as actionTypes from "./actions";\n\nconst initialState = {\n  ingredients: {\n    salad: 0,\n    bacon: 0,\n    cheese: 0,\n    meat: 0,\n  },\n  totalPrice: 4,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingrediens[action.ingredientName] + 1,\n        },\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingrediens[action.ingredientName] - 1,\n        },\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}g.isMDXComponent=!0}}]);