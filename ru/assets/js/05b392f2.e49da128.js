"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[3341],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],o={id:"3-25-working-with-inline-styles",title:"3.25 Working With Inline Styles",date:new Date("2021-03-14T01:10:28.000Z")},l=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles",title:"3.25 Working With Inline Styles",description:"There is nothing wrong with using css files and classes, and it might even be the preferred way, but what you also often see in react apps is that you actually design your styles in JavaScript.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"3-25-working-with-inline-styles",title:"3.25 Working With Inline Styles",date:"2021-03-14T01:10:28.000Z"},sidebar:"Docs",previous:{title:"3.24 Adding Styling With Stylesheets",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets"},next:{title:"3.26 Practice - Task",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-26-practice-task"}},p={},u=[{value:"CSS-in-JS",id:"css-in-js",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"There is nothing wrong with using ",(0,s.kt)("inlineCode",{parentName:"p"},"css files")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"classes"),", and it might even be the preferred way, but what you also often see in ",(0,s.kt)("inlineCode",{parentName:"p"},"react apps")," is that you actually design your styles in ",(0,s.kt)("inlineCode",{parentName:"p"},"JavaScript"),"."),(0,s.kt)("h2",{id:"css-in-js"},"CSS-in-JS"),(0,s.kt)("p",null,"Let's make a variable ",(0,s.kt)("inlineCode",{parentName:"p"},"style"),", to be precise the constant:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3,15} title="App.js"',"{3,15}":!0,title:'"App.js"'},"...\n  render() {\n    const style = {  // object \n      backgroundColor: 'white',\n      font: 'inherit',\n      border: '1px solid blue',\n      padding: '8px',\n      cursor: 'pointer',\n    }\n\n    return (\n      <div className=\"App\">\n        <h1>Hi, I'm a React app!</h1>\n        <p>This is really working!</p>\n        <button style={style} onClick={() => this.switchNameHandler('MAx')}>\n          Switch Name\n        </button>\n...\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("em",{parentName:"p"},"style")," constant it's not a ",(0,s.kt)("inlineCode",{parentName:"p"},"css class property")," is an object. ",(0,s.kt)("inlineCode",{parentName:"p"},"Label -> value"),". Value is a string. Is always. Because it's JavaScript. As you can see, the ",(0,s.kt)("em",{parentName:"p"},"css")," style properties have JavaScript representations. In ",(0,s.kt)("em",{parentName:"p"},"camelCase"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"background-color -> backgroundColor\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In JavaScript, ",(0,s.kt)("em",{parentName:"p"},"kebab-case")," doesn't fit because of syntax rule. ",(0,s.kt)("inlineCode",{parentName:"p"},"-")," is not allowed in identifier so ",(0,s.kt)("inlineCode",{parentName:"p"},"padding-top")," is not valid for variable or property name. ",(0,s.kt)("a",{href:"https://stackoverflow.com/questions/55433344/why-does-vanilla-html-js-and-react-use-camelcase-for-stylings-while-css-does",class:"external"},"stackoverflow.com")))),(0,s.kt)("p",null,"You can't wrap ",(0,s.kt)("em",{parentName:"p"},"kebab-case")," form in quotes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"'background-color': 'white' // error\n")),(0,s.kt)("p",null,"Read more about React structure ",(0,s.kt)("a",{href:"https://stackoverflow.com/questions/55221433/is-there-an-official-style-guide-or-naming-convention-for-react-based-projects",class:"external"},"stackoverflow.com")),(0,s.kt)("p",null,"See docs on styling here ",(0,s.kt)("a",{href:"https://reactjs.org/docs/dom-elements.html#style",class:"external"},"reactjs.org")," and see FAQ: Styling and CSS ",(0,s.kt)("a",{href:"https://reactjs.org/docs/faq-styling.html",class:"external"},"reactjs.org")))}m.isMDXComponent=!0}}]);