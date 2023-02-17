"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[79735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"7-28-refs-with-react-hooks",title:"7.28 Refs With React Hooks",date:new Date("2021-04-08T23:01:12.000Z")},i=void 0,c={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks",title:"7.28 Refs With React Hooks",description:"I automatically want to click this button here whenever this entire page loads.",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-28-refs-with-react-hooks",title:"7.28 Refs With React Hooks",date:"2021-04-08T23:01:12.000Z"},sidebar:"Courses",previous:{title:"7.27 Using Refs",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs"},next:{title:"7.29 Understanding Prop Chain Problems",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-29-understanding-prop-chain-problems"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I automatically want to click this button here whenever this entire page loads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cockpit.js" {1,5,13,25}',title:'"Cockpit.js"',"{1,5,13,25}":!0},'import React, { useEffect, useRef } from "react";\nimport classes from "./Cockpit.css";\n\nconst cockpit = (props) => {\n  const toggleBtnRef = useRef(null);\n\n  useEffect(() => {\n    console.log("[Cockpit.js] useEffect");\n    // Http request...\n    // setTimeout(() => {\n    //   alert("Saved data to cloud!");\n    // }, 1000);\n    toggleBtnRef.current.click();\n    return () => {\n      console.log("[Cockpit.js] cleanup work in useEffect");\n    };\n  }, []);\n\n  ...\n\n  return (\n    <div className={classes.Cockpit}>\n      <h1>{props.title}</h1>\n      <p className={assignedClasses.join(" ")}>This is really working!</p>\n      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>\n        Toggle Persons\n      </button>\n    </div>\n  );\n};\n\nexport default React.memo(cockpit);\n')),(0,o.kt)("p",null,"So that is how you can set references with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useRef()")," hook, here when using React hooks in functional components and that also hopefully served as an example of how ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," works and how it actually executes this function only after this JSX code was passed and rendered for the first time, so that React did have a chance of connecting your reference here."))}u.isMDXComponent=!0}}]);