"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[64442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},98691:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",date:new Date("2021-04-21T16:51:31.000Z")},o=void 0,s={unversionedId:"react-complete-guide/14-redux/14-16-immutable-update-patterns",id:"react-complete-guide/14-redux/14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",description:"Source Immutable Update Patterns",source:"@site/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-16-immutable-update-patterns",permalink:"/hm/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",date:"2021-04-21T16:51:31.000Z"},sidebar:"Courses",previous:{title:"14.15 Updating Arrays Immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably"},next:{title:"14.17 Outsourcing Action Types",permalink:"/hm/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types"}},l={},c=[{value:"Updating Nested Objects",id:"updating-nested-objects",level:2},{value:"Common Mistake #1: New variables that point to the same objects",id:"common-mistake-1-new-variables-that-point-to-the-same-objects",level:2},{value:"Common Mistake #2: Only making a shallow copy of one level",id:"common-mistake-2-only-making-a-shallow-copy-of-one-level",level:2},{value:"Correct Approach: Copying All Levels of Nested Data",id:"correct-approach-copying-all-levels-of-nested-data",level:2},{value:"Inserting and Removing Items in Arrays",id:"inserting-and-removing-items-in-arrays",level:2},{value:"Updating an Item in an Array",id:"updating-an-item-in-an-array",level:2},{value:"Immutable Update Utility Libraries",id:"immutable-update-utility-libraries",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Source:\xa0",(0,r.kt)("a",{href:"https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/",class:"external"},"redux.js.org: Immutable Update Patterns")),(0,r.kt)("h2",{id:"updating-nested-objects"},"Updating Nested Objects"),(0,r.kt)("p",null,"The key to updating nested data is\xa0",(0,r.kt)("strong",{parentName:"p"},"that\xa0",(0,r.kt)("em",{parentName:"strong"},"every"),"\xa0level of nesting must be copied and updated appropriately"),". This is often a difficult concept for those learning Redux, and there are some specific problems that frequently occur when trying to update nested objects. These lead to accidental direct mutation, and should be avoided."),(0,r.kt)("h2",{id:"common-mistake-1-new-variables-that-point-to-the-same-objects"},"Common Mistake #1: New variables that point to the same objects"),(0,r.kt)("p",null,"Defining a new variable does\xa0",(0,r.kt)("em",{parentName:"p"},"not"),"\xa0create a new actual object - it only creates another reference to the same object. An example of this error would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateNestedState(state, action) {\n    let nestedState = state.nestedState;\n    // ERROR: this directly modifies the existing object reference - don't do this!\n    nestedState.nestedField = action.data;\n\n    return {\n        ...state,\n        nestedState\n    };\n}\n")),(0,r.kt)("p",null,"This function does correctly return a shallow copy of the top-level state object, but because the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nestedState"),"\xa0variable was still pointing at the existing object, the state was directly mutated."),(0,r.kt)("h2",{id:"common-mistake-2-only-making-a-shallow-copy-of-one-level"},"Common Mistake #2: Only making a shallow copy of one level"),(0,r.kt)("p",null,"Another common version of this error looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateNestedState(state, action) {\n    // Problem: this only does a shallow copy!\n    let newState = {...state};\n\n    // ERROR: nestedState is still the same object!\n    newState.nestedState.nestedField = action.data;\n\n    return newState;\n}\n")),(0,r.kt)("p",null,"Doing a shallow copy of the top level is\xa0",(0,r.kt)("em",{parentName:"p"},"not"),"\xa0sufficient - the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nestedState"),"\xa0object should be copied as well."),(0,r.kt)("h2",{id:"correct-approach-copying-all-levels-of-nested-data"},"Correct Approach: Copying All Levels of Nested Data"),(0,r.kt)("p",null,"Unfortunately, the process of correctly applying immutable updates to deeply nested state can easily become verbose and hard to read. Here's what an example of updating\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"state.first.second[someId].fourth"),"\xa0might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateVeryNestedField(state, action) {\n    return {\n        ...state,\n        first : {\n            ...state.first,\n            second : {\n                ...state.first.second,\n                [action.someId] : {\n                    ...state.first.second[action.someId],\n                    fourth : action.someValue\n                }\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Obviously, each layer of nesting makes this harder to read, and gives more chances to make mistakes. This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible."),(0,r.kt)("h2",{id:"inserting-and-removing-items-in-arrays"},"Inserting and Removing Items in Arrays"),(0,r.kt)("p",null,"Normally, a Javascript array's contents are modified using mutative functions like\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"push"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"unshift"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"splice"),'. Since we don\'t want to mutate state directly in reducers, those should normally be avoided. Because of that, you might see "insert" or "remove" behavior written like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function insertItem(array, action) {\n    return [\n        ...array.slice(0, action.index),\n        action.item,\n        ...array.slice(action.index)\n    ]\n}\n\nfunction removeItem(array, action) {\n    return [\n        ...array.slice(0, action.index),\n        ...array.slice(action.index + 1)\n    ];\n}\n")),(0,r.kt)("p",null,"However, remember that the key is that the\xa0",(0,r.kt)("em",{parentName:"p"},"original in-memory reference"),"\xa0is not modified.\xa0",(0,r.kt)("strong",{parentName:"p"},"As long as we make a copy first, we can safely mutate the copy"),". Note that this is true for both arrays and objects, but nested values still must be updated using the same rules."),(0,r.kt)("p",null,"This means that we could also write the insert and remove functions like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function insertItem(array, action) {\n    let newArray = array.slice();\n    newArray.splice(action.index, 0, action.item);\n    return newArray;\n}\n\nfunction removeItem(array, action) {\n    let newArray = array.slice();\n    newArray.splice(action.index, 1);\n    return newArray;\n}\n")),(0,r.kt)("p",null,"The remove function could also be implemented as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function removeItem(array, action) {\n    return array.filter( (item, index) => index !== action.index);\n}\n")),(0,r.kt)("h2",{id:"updating-an-item-in-an-array"},"Updating an Item in an Array"),(0,r.kt)("p",null,"Updating one item in an array can be accomplished by using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Array.map"),", returning a new value for the item we want to update, and returning the existing values for all other items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateObjectInArray(array, action) {\n    return array.map( (item, index) => {\n        if(index !== action.index) {\n            // This isn't the item we care about - keep it as-is\n            return item;\n        }\n\n        // Otherwise, this is the one we want - return an updated value\n        return {\n            ...item,\n            ...action.item\n        };    \n    });\n}\n")),(0,r.kt)("h2",{id:"immutable-update-utility-libraries"},"Immutable Update Utility Libraries"),(0,r.kt)("p",null,"Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. Some, like\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable"),", take string paths for commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"state = dotProp.set(state, `todos.${index}.complete`, true)\n")),(0,r.kt)("p",null,"Others, like\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kolodny/immutability-helper"},"immutability-helper"),"\xa0(a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"var collection = [1, 2, {a: [12, 17, 15]}];\nvar newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});\n")),(0,r.kt)("p",null,"They can provide a useful alternative to writing manual immutable update logic."),(0,r.kt)("a",{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities",class:"external"},"github.com: Immutable Update Utilities"),"\xa0section of the\xa0",(0,r.kt)("a",{href:"https://github.com/markerikson/redux-ecosystem-links",class:"external"},"github.com: Redux Ecosystem Links"))}m.isMDXComponent=!0}}]);