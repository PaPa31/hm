"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[30815],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),m=o,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},26782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={id:"7-14-using-shouldcomponentupdate-for-optimization",title:"7.14 Using shouldComponentUpdate For Optimization",date:new Date("2021-04-07T23:13:54.000Z")},c=void 0,s={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization",title:"7.14 Using shouldComponentUpdate For Optimization",description:"",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-using-shouldcomponentupdate-for-optimization.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-14-using-shouldcomponentupdate-for-optimization",title:"7.14 Using shouldComponentUpdate For Optimization",date:"2021-04-07T23:13:54.000Z"},sidebar:"Docs",previous:{title:"7.14.1 Reference vs Primitive Types",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-14-1-reference-vs-primitive-types"},next:{title:"7.15 Optimization Functional Components With React.memo",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-15-optimization-functional-components-with-react-memo"}},u=[],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Persons.js" {}',title:'"Persons.js"',"{}":!0},'  shouldComponentUpdate(nextProps, nextState) {\n    console.log("[Persons.js] shouldComponentUpdate");\n    if (nextProps.persons === this.props.persons) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n')))}l.isMDXComponent=!0}}]);