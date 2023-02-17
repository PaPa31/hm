"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[96641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"7-06-class-component-lifecycle-overview",title:"7.06 Class Component Lifecycle Overview",date:new Date("2021-04-06T19:41:34.000Z")},i=void 0,c={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview",title:"7.06 Class Component Lifecycle Overview",description:"Lifecycle only available in class-based components.",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-06-class-component-lifecycle-overview",title:"7.06 Class Component Lifecycle Overview",date:"2021-04-06T19:41:34.000Z"},sidebar:"Courses",previous:{title:"7.05 Class Based Vs Functional Components",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components"},next:{title:"7.07 Component Creation Lifecycle In Action",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action"}},p={},l=[{value:"Component Lyfecycle",id:"component-lyfecycle",level:2},{value:"1. Component Creation",id:"1-component-creation",level:3}],s={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Lifecycle")," only available in class-based components."),(0,a.kt)("p",null,"And functional components when using React hooks have an equivalent."),(0,a.kt)("h2",{id:"component-lyfecycle"},"Component Lyfecycle"),(0,a.kt)("h3",{id:"1-component-creation"},"1. Component Creation"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(23453).Z},"Lifecycle Creation Learning Card PDF")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Lificycle hooks")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"Lifecycle goes")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Not to be confused with ",(0,a.kt)("inlineCode",{parentName:"p"},"React Hooks"),"!")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"constructor(props) executes")," (default ES6 feature)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DO"),": Set up State",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DON'T"),": Cause Side-Effects")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromProps(props, state)")," (default lifecycle hook > React 16.3)",(0,a.kt)("br",{parentName:"p"}),"\n","static method",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DO:")," Sync State",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DON'T:")," Cause Side-Effects")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"render()"),(0,a.kt)("br",{parentName:"p"}),"\n","Returns JSX.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DO:")," Prepare & Structure your JSX code",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DON'T:")," No timeouts and Side-Effects")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Render Child Components"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"componentDidMount()")," (very important ",(0,a.kt)("strong",{parentName:"p"},"Lifecycle hook"),")",(0,a.kt)("br",{parentName:"p"}),"\n","class-based comps",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DO:")," Cause Side-Effects",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"DON'T:")," Update State (triggers re-render)"))))}m.isMDXComponent=!0},23453:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/7-lifecycle-creation-learning-card-898afd034cce5e202ee28775f478d81f.pdf"}}]);