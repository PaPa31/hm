"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46680],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(t),d=o,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},35638:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"5-06-using-radium-for-media-queries",title:"5.06 Using Radium For Media Queries",date:new Date("2021-04-03T23:35:45.000Z")},p=void 0,c={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries",id:"react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries",title:"5.06 Using Radium For Media Queries",description:"This is a component made available by Radium and whilst wrapping the export with Radium is enough for its pseudo selectors, for basically transforming selectors like media queries or other animations with keyframes, we need to wrap the entire application in a special component provided by Radium.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-06-using-radium-for-media-queries",title:"5.06 Using Radium For Media Queries",date:"2021-04-03T23:35:45.000Z"},sidebar:"Docs",previous:{title:"5.05 Adding And Using Radium",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium"},next:{title:"5.07 Introducing Styled Components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components"}},m={},u=[],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {1,6-9,12,22}',title:'"Person.js"',"{1,6-9,12,22}":!0},'import Radium from "radium";\nimport React from "react";\nimport "./Person.css";\n\nconst person = (props) => {\n  const style = {\n    "@media (min-width: 500px)": {\n      width: "450px",\n    },\n  };\n  return (\n    <div className="Person" style={style}>\n      <p onClick={props.click}>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type="text" onChange={props.changed} value={props.name} />\n    </div>\n  );\n};\n\nexport default Radium(person);\n')),(0,i.kt)("p",null,"This is a component made available by ",(0,i.kt)("inlineCode",{parentName:"p"},"Radium")," and whilst wrapping the export with Radium is enough for its pseudo selectors, for basically transforming selectors like ",(0,i.kt)("inlineCode",{parentName:"p"},"media queries")," or other ",(0,i.kt)("inlineCode",{parentName:"p"},"animations")," with keyframes, we need to ",(0,i.kt)("strong",{parentName:"p"},"wrap the entire application in a special component")," provided by Radium."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,10,19}',title:'"App.js"',"{2,10,19}":!0},'import color from "color";\nimport Radium, { StyleRoot } from "radium";\nimport React, { Component } from "react";\nimport "./App.css";\nimport Person from "./Person/Person";\n\n    ...\n\n    return (\n      <StyleRoot>\n        <div className="App">\n          <h1>Hi, I\'m a React app!</h1>\n          <p className={classes.join(" ")}>This is really working!</p>\n          <button style={style} onClick={this.togglePersonsHandler}>\n            Toggle Persons\n          </button>\n          {persons}\n        </div>\n      </StyleRoot>\n    );\n  }\n}\n\nexport default Radium(App);\n')))}d.isMDXComponent=!0}}]);