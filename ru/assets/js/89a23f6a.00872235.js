"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[31699],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(a,".").concat(d)]||f[d]||l[d]||s;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=f;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<s;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41204:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),c=["components"],i={id:"7-10-using-useeffect-in-functional-components",title:"7.10 Using useEffect In Functional Components",date:new Date("2021-04-07T20:17:47.000Z")},a=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components",title:"7.10 Using useEffect In Functional Components",description:"useEffect = componentDidMount + componentDidUpdate",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-10-using-useeffect-in-functional-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"7-10-using-useeffect-in-functional-components",title:"7.10 Using useEffect In Functional Components",date:"2021-04-07T20:17:47.000Z"},sidebar:"Docs",previous:{title:"7.09 Component Update Lifecycle State Changes",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes"},next:{title:"7.11 Controlling useEffect Behavior",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-11-controlling-useeffect-behavior"}},u={},l=[],f={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"useEffect = componentDidMount + componentDidUpdate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cockpit.js" {5-8}',title:'"Cockpit.js"',"{5-8}":!0},'import React, { useEffect } from "react";\nimport classes from "./Cockpit.css";\n\nconst cockpit = (props) => {\n  useEffect(() => {\n    console.log("[Cockpit.js] useEffect");\n    // Http request...\n  });\n  const assignedClasses = [];\n  let btnClass = "";\n  if (props.showPersons) btnClass = classes.Red;\n  if (props.persons.length <= 2) {\n    assignedClasses.push(classes.red); // classes = [\'red\']\n  }\n  if (props.persons.length <= 1) {\n    assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n  }\n  return (\n    <div className={classes.Cockpit}>\n      <h1>{props.title}</h1>\n      <p className={assignedClasses.join(" ")}>This is really working!</p>\n      <button className={btnClass} onClick={props.clicked}>\n        Toggle Persons\n      </button>\n    </div>\n  );\n};\n\nexport default cockpit;\n')))}d.isMDXComponent=!0}}]);