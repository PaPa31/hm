"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[85880],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],s={id:"3-13-children-prop",title:"3.13 Children Prop",date:new Date("2021-03-12T20:01:25.000Z")},i=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop",title:"3.13 Children Prop",description:"The special props.children property for data between the start end end tags.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-13-children-prop.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"3-13-children-prop",title:"3.13 Children Prop",date:"2021-03-12T20:01:25.000Z"},sidebar:"Docs",previous:{title:"3.12 Working With Props",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-12-working-with-props"},next:{title:"3.15 Props And State",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-15-props-and-state"}},u={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The special ",(0,o.kt)("inlineCode",{parentName:"p"},"props.children")," property for data between the start end end tags."),(0,o.kt)("p",null,"You should know that after this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},'const person = (props) => {\n  return (\n    <div>\n      <p>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n\n// With <Person name="Stephanie" age="26" />\n')),(0,o.kt)("p",null,"You got this in the browser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"{4}","{4}":!0},"...\n      <div>\n        <p>I'm Stephanie and I am 26 years old!</p>\n        <p></p>\n      </div>\n...\n")),(0,o.kt)("p",null,"If between the opening and closing tags is empty."))}m.isMDXComponent=!0}}]);