"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[52931],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"8-08-creating-layout-component",title:"8.08 Creating Layout Component",date:new Date("2021-04-09T20:54:22.000Z")},c=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component",id:"react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component",title:"8.08 Creating Layout Component",description:"index.css",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-08-creating-layout-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-08-creating-layout-component",title:"8.08 Creating Layout Component",date:"2021-04-09T20:54:22.000Z"},sidebar:"Docs",previous:{title:"8.07 Setting Up Project",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project"},next:{title:"8.09 Starting Implementation Burger Builder Container",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-09-starting-implementation-burger-builder-container"}},l=[{value:"index.css",id:"indexcss",children:[],level:2},{value:"App.js",id:"appjs",children:[],level:2},{value:"New Layout.js",id:"new-layoutjs",children:[],level:2}],s={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nsrc/\n\u2502\n\u251c\u2500\u2500 assets/\n\u2502\n\u251c\u2500\u2500 components/\n\u2502     \u2514\u2500\u2500 Layout/\n\u2502            \u2514\u2500\u2500 Layout.js\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,o.kt)("h2",{id:"indexcss"},"index.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="index.css" {}',title:'"index.css"',"{}":!0},'body {\n  margin: 0;\n  padding: 0;\n  font-family: "Open Sans", sans-serif;\n}\n')),(0,o.kt)("h2",{id:"appjs"},"App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {}',title:'"App.js"',"{}":!0},'import React, { Component } from "react";\nimport Layout from "./components/Layout/Layout";\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <Layout>\n          <p>Test</p>\n        </Layout>\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"new-layoutjs"},"New Layout.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Layout.js" {}',title:'"Layout.js"',"{}":!0},'import React, { Fragment } from "react";\n\nconst layout = (props) => (\n  <Fragment>\n    <div>Toolbar, SideDrawer, Backdrop</div>\n    <main>{props.children}</main>\n  </Fragment>\n);\nexport default layout;\n')))}d.isMDXComponent=!0}}]);