"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[6349],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={id:"3-24-adding-styling-with-stylesheets",title:"3.24 Adding Styling With Stylesheets",date:new Date("2021-03-14T00:30:54.000Z")},l=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets",title:"3.24 Adding Styling With Stylesheets",description:"Make a new file Person.css:",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-24-adding-styling-with-stylesheets",title:"3.24 Adding Styling With Stylesheets",date:"2021-03-14T00:30:54.000Z"},sidebar:"Docs",previous:{title:"3.23 Adding Two Way Binding",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding"},next:{title:"3.25 Working With Inline Styles",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-25-working-with-inline-styles"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Make a new file ",(0,s.kt)("inlineCode",{parentName:"p"},"Person.css"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Person.css"',title:'"Person.css"'},".Person {\n  width: 60%;\n  margin: 16px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  padding: 16px;\n  text-align: center;\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"One important thing, whichever css code I write in here (in ",(0,s.kt)("inlineCode",{parentName:"p"},"person.css"),") is not scoped to this ",(0,s.kt)("inlineCode",{parentName:"p"},"person.js")," component, it is global css code. So I will define a new css class which I named ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," with a capital P, still I could add this anywhere in my application since it is global but by using my component name, I can rule out the danger of and accidentally using it somewhere else.")),(0,s.kt)("p",null,"Add ",(0,s.kt)("inlineCode",{parentName:"p"},"import")," line to ",(0,s.kt)("inlineCode",{parentName:"p"},"Person.js")," and add styles from this file to some tag using the ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," keyword:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,6} title="Person.js"',"{2,6}":!0,title:'"Person.js"'},"import React from 'react'\nimport './Person.css'\n\nconst person = (props) => {\n  return (\n    <div className=\"Person\">\n      <p onClick={props.click}>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type=\"text\" onChange={props.changed} value={props.name} />\n    </div>\n  )\n}\n\n")),(0,s.kt)("p",null,"You can't find these style tags in the html file in the public folder. The style text are injected dynamically by the ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack")," into the final file in the head section."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="final html file"',title:'"final',html:!0,'file"':!0},'<head>\n...\n<style type="text/css">.Person {\n  width: 60%;\n  margin: 16px auto;\n  border: 1px solid #eee;\n  -webkit-box-shadow: 0 2px 3px #ccc;\n          box-shadow: 0 2px 3px #ccc;\n  padding: 16px;\n  text-align: center;\n}\n</style>\n...\n</head>\n')))}m.isMDXComponent=!0}}]);