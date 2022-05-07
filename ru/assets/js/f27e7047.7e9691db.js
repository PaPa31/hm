"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[22761],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46196:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"9-14-removing-interceptors",title:"9.14 Removing Interceptors",date:new Date("2021-04-12T14:21:56.000Z")},u=void 0,p={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors",title:"9.14 Removing Interceptors",description:"You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject\xa0 with that reference as an argument, to remove it (Read more Interceptors):",source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-14-removing-interceptors.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"9-14-removing-interceptors",title:"9.14 Removing Interceptors",date:"2021-04-12T14:21:56.000Z"},sidebar:"Docs",previous:{title:"9.13 Adding Interceptors To Execute Code Globally",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-13-adding-interceptors-to-execute-code-globally"},next:{title:"9.15 Setting Default Global Configuration For Axios",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-15-setting-default-global-configuration-for-axios"}},l={},s=[],m={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You learned how to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"interceptor"),", getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call ",(0,a.kt)("inlineCode",{parentName:"p"},"eject"),"\xa0 with that reference as an argument, to remove it (Read more: ",(0,a.kt)("a",{href:"https://github.com/axios/axios#interceptors",class:"external"},"github.com: Interceptors"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"let myInterceptor = axios.interceptors.request.use(() => {\n    /*...*/\n});\naxios.interceptors.request.eject(myInterceptor);\n")))}d.isMDXComponent=!0}}]);