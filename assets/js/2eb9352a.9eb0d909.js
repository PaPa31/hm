"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[84795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={id:"7-02-better-project-structure",title:"7.02 Better Project Structure",date:new Date("2021-04-06T22:01:11.000Z")},a=void 0,i={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure",title:"7.02 Better Project Structure",description:"src Folder Structure",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-02-better-project-structure.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-02-better-project-structure",title:"7.02 Better Project Structure",date:"2021-04-06T22:01:11.000Z"},sidebar:"Courses",previous:{title:"7.0 Lesson",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-0-lesson"},next:{title:"7.03 Splitting App Into Components",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-03-splitting-app-into-components"}},p={},s=[{value:"<code>src</code> Folder Structure",id:"src-folder-structure",level:2}],u={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"src-folder-structure"},(0,o.kt)("inlineCode",{parentName:"h2"},"src")," Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"src\n \u2502\n \u251c\u2500\u2500 assets\n \u2502     \u251c\u2500\u2500 image.jpg\n \u2502     \u2514\u2500\u2500 file.pdf\n \u2502\n \u251c\u2500\u2500 components\n \u2502     \u251c\u2500\u2500 Cockpit\n \u2502     \u2502      \u2514\u2500\u2500 Cockpit.js\n \u2502     \u2514\u2500\u2500 Persons\n \u2502            \u251c\u2500\u2500 Person\n \u2502            \u2502      \u2514\u2500\u2500 Person.js\n \u2502          \xa0 \u2514\u2500\u2500 Persons.js\n \u2502\n \u251c\u2500\u2500 containers\n \u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n \u2502   \u251c\u2500\u2500 App.js\n \u2502   \u2514\u2500\u2500 App.test.js\n \u2502\n")))}l.isMDXComponent=!0}}]);