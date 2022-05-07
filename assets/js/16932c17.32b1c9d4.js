"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[79325],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var r=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],s={id:"5-08-more-on-styled-components",title:"5.08 More On Styled Components",date:new Date("2021-04-04T17:06:52.000Z")},l=void 0,i={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components",id:"react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components",title:"5.08 More On Styled Components",description:"",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-08-more-on-styled-components",title:"5.08 More On Styled Components",date:"2021-04-04T17:06:52.000Z"},sidebar:"Docs",previous:{title:"5.07 Introducing Styled Components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components"},next:{title:"5.09 Styled Components And Dynamic Styles",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles"}},p={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,6-17,25-27}',title:'"App.js"',"{2,6-17,25-27}":!0},'import React, { Component } from "react";\nimport styled from "styled-components";\nimport "./App.css";\nimport Person from "./Person/Person";\n\nconst StyledButton = styled.button`\n      background-color: green;\n      color: white;\n      font: inherit;\n      border: 1px solid blue;\n      padding: 8px;\n      cursor: pointer;\n      &:hover {\n        background-color: lightgreen;\n        color: #333\n      },\n`;\n\n...\n\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p className={classes.join(" ")}>This is really working!</p>\n        <StyledButton onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </StyledButton>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')))}d.isMDXComponent=!0}}]);