"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[75298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Install MongoDB Linux",authors:["papa31"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:new Date("2022-11-27T21:03:34.000Z"),description:"Installation MongoDB and mongosh",draft:!1},i=void 0,l={permalink:"/hm/blog/2022/11/27/install-mongodb-linux",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2022-11-27-install-mongodb-linux.md",source:"@site/blog/2022-11-27-install-mongodb-linux.md",title:"Install MongoDB Linux",description:"Installation MongoDB and mongosh",date:"2022-11-27T21:03:34.000Z",formattedDate:"November 27, 2022",tags:[{label:"database",permalink:"/hm/blog/tags/database"},{label:"mongodb",permalink:"/hm/blog/tags/mongodb"},{label:"mongosh",permalink:"/hm/blog/tags/mongosh"},{label:"linux",permalink:"/hm/blog/tags/linux"},{label:"debian",permalink:"/hm/blog/tags/debian"},{label:"bullseye",permalink:"/hm/blog/tags/bullseye"}],readingTime:7.25,hasTruncateMarker:!0,authors:[{name:"papa31",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],frontMatter:{title:"Install MongoDB Linux",authors:["papa31"],tags:["database","mongodb","mongosh","linux","debian","bullseye"],date:"2022-11-27T21:03:34.000Z",description:"Installation MongoDB and mongosh",draft:!1},nextItem:{title:"Install MongoDB Windows",permalink:"/hm/blog/2022/05/01/install-mongodb-windows"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Caution about this caution:")),(0,o.kt)("admonition",{title:"mongodb official caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," package provided by Debian is ",(0,o.kt)("strong",{parentName:"p"},"not")," maintained by MongoDB Inc. and conflicts with the official ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb-org")," package. If you have already installed the ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," package on your Debian system, you ",(0,o.kt)("strong",{parentName:"p"},"must")," first uninstall the ",(0,o.kt)("inlineCode",{parentName:"p"},"mongodb")," package before proceeding with these instructions.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},'Although the mongodb staff is trying to fix the situation, it only makes things worse. "Would that it were so simple!"')))}c.isMDXComponent=!0}}]);