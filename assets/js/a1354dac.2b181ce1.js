"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11186],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"3-18-manipulating-state",title:"3.18 Manipulating State",date:new Date("2021-03-12T23:09:42.000Z")},l=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state",title:"3.18 Manipulating State",description:"If you do this:",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-18-manipulating-state.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-18-manipulating-state",title:"3.18 Manipulating State",date:"2021-03-12T23:09:42.000Z"},sidebar:"Docs",previous:{title:"3.17 Listenable Events",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-17-listenable-events"},next:{title:"3.19 Function Components Naming",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-19-function-components-naming"}},c=[{value:"<code>setState</code> method",id:"setstate-method",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"}," switchNameHandler = () => {\n   this.state.persons[0].name = 'Maximilian'\n  }\n\n")),(0,i.kt)("p",null,"you get the error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(property) persons: {\n    name: string;\n    age: number;\n}[]\n\nDo not mutate state directly. Use setState().eslint(react/no-direct-mutation-state)\n")),(0,i.kt)("p",null,"DON'T DO THIS!"),(0,i.kt)("p",null,"There actually only are two, changing ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," and what else? You could already see it in action, ",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,i.kt)("p",null,"You need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," method (",(0,i.kt)("inlineCode",{parentName:"p"},"this.setState"),")."),(0,i.kt)("h2",{id:"setstate-method"},(0,i.kt)("inlineCode",{parentName:"h2"},"setState")," method"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature only available in class-based components."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{9,14-20}","{9,14-20}":!0},"\nclass App extends Component {\n  state = {\n    persons: [\n      { name: 'Max', age: 28 },   // old state\n      { name: 'Manu', age: 29 },\n      { name: 'Stephanie', age: 26 },   // old state\n    ],\n    otherState: 'some other value'\n  }\n\n  switchNameHandler = () => {\n    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'\n    this.setState({\n      persons: [\n        { name: 'Maximilian', age: 28 },   // new state\n        { name: 'Manu', age: 29 },\n        { name: 'Stephanie', age: 27 },   // new state\n      ],\n    })\n  }\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It will not discard ",(0,i.kt)("inlineCode",{parentName:"p"},"otherState")," but it will simply merge the old state with the new one."))),(0,i.kt)("p",null,"And this is the main difference from ",(0,i.kt)("a",{parentName:"p",href:"3-20-usestate-hook"},"useState() hook"),"."))}u.isMDXComponent=!0}}]);