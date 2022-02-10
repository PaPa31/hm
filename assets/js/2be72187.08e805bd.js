"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[64442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",date:new Date("2021-04-21T16:51:31.000Z")},l=void 0,c={unversionedId:"react-complete-guide/14-redux/14-16-immutable-update-patterns",id:"react-complete-guide/14-redux/14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",description:"Source Immutable Update Patterns",source:"@site/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-16-immutable-update-patterns",permalink:"/hm/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-16-immutable-update-patterns",title:"14.16 Immutable Update Patterns",date:"2021-04-21T16:51:31.000Z"},sidebar:"Docs",previous:{title:"14.15 Updating Arrays Immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably"},next:{title:"14.17 Outsourcing Action Types",permalink:"/hm/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types"}},u=[{value:"Updating Nested Objects",id:"updating-nested-objects",children:[],level:2},{value:"Common Mistake #1: New variables that point to the same objects",id:"common-mistake-1-new-variables-that-point-to-the-same-objects",children:[],level:2},{value:"Common Mistake #2: Only making a shallow copy of one level",id:"common-mistake-2-only-making-a-shallow-copy-of-one-level",children:[],level:2},{value:"Correct Approach: Copying All Levels of Nested Data",id:"correct-approach-copying-all-levels-of-nested-data",children:[],level:2},{value:"Inserting and Removing Items in Arrays",id:"inserting-and-removing-items-in-arrays",children:[],level:2},{value:"Updating an Item in an Array",id:"updating-an-item-in-an-array",children:[],level:2},{value:"Immutable Update Utility Libraries",id:"immutable-update-utility-libraries",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Source:\xa0",(0,i.kt)("a",{href:"https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/",class:"external"},"redux.js.org: Immutable Update Patterns")),(0,i.kt)("h2",{id:"updating-nested-objects"},"Updating Nested Objects"),(0,i.kt)("p",null,"The key to updating nested data is\xa0",(0,i.kt)("strong",{parentName:"p"},"that\xa0",(0,i.kt)("em",{parentName:"strong"},"every"),"\xa0level of nesting must be copied and updated appropriately"),". This is often a difficult concept for those learning Redux, and there are some specific problems that frequently occur when trying to update nested objects. These lead to accidental direct mutation, and should be avoided."),(0,i.kt)("h2",{id:"common-mistake-1-new-variables-that-point-to-the-same-objects"},"Common Mistake #1: New variables that point to the same objects"),(0,i.kt)("p",null,"Defining a new variable does\xa0",(0,i.kt)("em",{parentName:"p"},"not"),"\xa0create a new actual object - it only creates another reference to the same object. An example of this error would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateNestedState(state, action) {\n    let nestedState = state.nestedState;\n    // ERROR: this directly modifies the existing object reference - don't do this!\n    nestedState.nestedField = action.data;\n\n    return {\n        ...state,\n        nestedState\n    };\n}\n")),(0,i.kt)("p",null,"This function does correctly return a shallow copy of the top-level state object, but because the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState"),"\xa0variable was still pointing at the existing object, the state was directly mutated."),(0,i.kt)("h2",{id:"common-mistake-2-only-making-a-shallow-copy-of-one-level"},"Common Mistake #2: Only making a shallow copy of one level"),(0,i.kt)("p",null,"Another common version of this error looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateNestedState(state, action) {\n    // Problem: this only does a shallow copy!\n    let newState = {...state};\n\n    // ERROR: nestedState is still the same object!\n    newState.nestedState.nestedField = action.data;\n\n    return newState;\n}\n")),(0,i.kt)("p",null,"Doing a shallow copy of the top level is\xa0",(0,i.kt)("em",{parentName:"p"},"not"),"\xa0sufficient - the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState"),"\xa0object should be copied as well."),(0,i.kt)("h2",{id:"correct-approach-copying-all-levels-of-nested-data"},"Correct Approach: Copying All Levels of Nested Data"),(0,i.kt)("p",null,"Unfortunately, the process of correctly applying immutable updates to deeply nested state can easily become verbose and hard to read. Here's what an example of updating\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"state.first.second[someId].fourth"),"\xa0might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateVeryNestedField(state, action) {\n    return {\n        ...state,\n        first : {\n            ...state.first,\n            second : {\n                ...state.first.second,\n                [action.someId] : {\n                    ...state.first.second[action.someId],\n                    fourth : action.someValue\n                }\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Obviously, each layer of nesting makes this harder to read, and gives more chances to make mistakes. This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible."),(0,i.kt)("h2",{id:"inserting-and-removing-items-in-arrays"},"Inserting and Removing Items in Arrays"),(0,i.kt)("p",null,"Normally, a Javascript array's contents are modified using mutative functions like\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"push"),",\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"unshift"),", and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"splice"),'. Since we don\'t want to mutate state directly in reducers, those should normally be avoided. Because of that, you might see "insert" or "remove" behavior written like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function insertItem(array, action) {\n    return [\n        ...array.slice(0, action.index),\n        action.item,\n        ...array.slice(action.index)\n    ]\n}\n\nfunction removeItem(array, action) {\n    return [\n        ...array.slice(0, action.index),\n        ...array.slice(action.index + 1)\n    ];\n}\n")),(0,i.kt)("p",null,"However, remember that the key is that the\xa0",(0,i.kt)("em",{parentName:"p"},"original in-memory reference"),"\xa0is not modified.\xa0",(0,i.kt)("strong",{parentName:"p"},"As long as we make a copy first, we can safely mutate the copy"),". Note that this is true for both arrays and objects, but nested values still must be updated using the same rules."),(0,i.kt)("p",null,"This means that we could also write the insert and remove functions like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function insertItem(array, action) {\n    let newArray = array.slice();\n    newArray.splice(action.index, 0, action.item);\n    return newArray;\n}\n\nfunction removeItem(array, action) {\n    let newArray = array.slice();\n    newArray.splice(action.index, 1);\n    return newArray;\n}\n")),(0,i.kt)("p",null,"The remove function could also be implemented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function removeItem(array, action) {\n    return array.filter( (item, index) => index !== action.index);\n}\n")),(0,i.kt)("h2",{id:"updating-an-item-in-an-array"},"Updating an Item in an Array"),(0,i.kt)("p",null,"Updating one item in an array can be accomplished by using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Array.map"),", returning a new value for the item we want to update, and returning the existing values for all other items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function updateObjectInArray(array, action) {\n    return array.map( (item, index) => {\n        if(index !== action.index) {\n            // This isn't the item we care about - keep it as-is\n            return item;\n        }\n\n        // Otherwise, this is the one we want - return an updated value\n        return {\n            ...item,\n            ...action.item\n        };    \n    });\n}\n")),(0,i.kt)("h2",{id:"immutable-update-utility-libraries"},"Immutable Update Utility Libraries"),(0,i.kt)("p",null,"Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. Some, like\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable"),", take string paths for commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"state = dotProp.set(state, `todos.${index}.complete`, true)\n")),(0,i.kt)("p",null,"Others, like\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kolodny/immutability-helper"},"immutability-helper"),"\xa0(a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"var collection = [1, 2, {a: [12, 17, 15]}];\nvar newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});\n")),(0,i.kt)("p",null,"They can provide a useful alternative to writing manual immutable update logic."),(0,i.kt)("a",{href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities",class:"external"},"github.com: Immutable Update Utilities"),"\xa0section of the\xa0",(0,i.kt)("a",{href:"https://github.com/markerikson/redux-ecosystem-links",class:"external"},"github.com: Redux Ecosystem Links"))}m.isMDXComponent=!0}}]);