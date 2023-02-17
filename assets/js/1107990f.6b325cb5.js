"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[85860],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return t?o.createElement(h,p(p({ref:n},d),{},{components:t})):o.createElement(h,p({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={id:"7-17-pure-components-instead-should-Component-update",title:"7.17 PureComponents Instead shouldComponentUpdate",date:new Date("2021-04-08T11:51:25.000Z")},p=void 0,s={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update",title:"7.17 PureComponents Instead shouldComponentUpdate",description:"If you implemented shouldComponentUpdate with a check like this:",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-17-pure-components-instead-should-Component-update.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-17-pure-components-instead-should-Component-update",title:"7.17 PureComponents Instead shouldComponentUpdate",date:"2021-04-08T11:51:25.000Z"},sidebar:"Courses",previous:{title:"7.16 When Should You Optimize",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-16-when-should-you-optimize"},next:{title:"7.18 How React Update DOM",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom"}},i={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," with a check like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Persons.js" {6-8}',title:'"Persons.js"',"{6-8}":!0},'...\n\n  shouldComponentUpdate(nextProps, nextState) {\n    console.log("[Persons.js] shouldComponentUpdate");\n    if (\n      nextProps.persons !== this.props.persons ||\n      nextProps.changed !== this.props.changed ||\n      nextProps.clicked !== this.props.clicked\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n...\n')),(0,r.kt)("p",null,"You can do instead this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Persons.js" {2,4}',title:'"Persons.js"',"{2,4}":!0},'import React, { PureComponent } from "react";\nimport Person from "./Person/Person";\n\nclass Persons extends PureComponent {\n\n...\n\n  // shouldComponentUpdate(nextProps, nextState) {\n  //   console.log("[Persons.js] shouldComponentUpdate");\n  //   if (\n  //     nextProps.persons !== this.props.persons ||\n  //     nextProps.changed !== this.props.changed ||\n  //     nextProps.clicked !== this.props.clicked\n  //   ) {\n  //     return true;\n  //   } else {\n  //     return false;\n  //   }\n  //   // return true;\n  // }\n\n...\n')),(0,r.kt)("p",null,"The result will be the same."),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"PureComponent")," in the end is just a normal component that already implements ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," with a complete ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," check, so that checks for any changes in any prop of that component."))}l.isMDXComponent=!0}}]);