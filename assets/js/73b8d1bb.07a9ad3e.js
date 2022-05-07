"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60997],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=s(n),m=o,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61723:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={id:"11-09-switching-between-pages",title:"11.09 Switching Between Pages",date:new Date("2021-04-15T10:35:38.000Z")},c=void 0,s={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages",title:"11.09 Switching Between Pages",description:"Blog.js",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-09-switching-between-pages.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-09-switching-between-pages",title:"11.09 Switching Between Pages",date:"2021-04-15T10:35:38.000Z"},sidebar:"Docs",previous:{title:"11.08 Rendering Components For Routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-08-rendering-components-for-routes"},next:{title:"11.10 Using Links To Switch Pages",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-10-using-links-to-switch-pages"}},l={},u=[{value:"<code>Blog.js</code>",id:"blogjs",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"blogjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {5,27}',title:'"Blog.js"',"{5,27}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { Route } from "react-router-dom";\nimport "./Blog.css";\nimport NewPost from "./NewPost/NewPost";\nimport Posts from "./Posts/Posts";\n\nclass Blog extends Component {\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <a href="/">Home</a>\n              </li>\n              <li>\n                <a href="/new-post">New Post</a>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        {/* <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} /> */}\n        <Route path="/" exact component={Posts} />\n        <Route path="/new-post" component={NewPost} />\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}m.isMDXComponent=!0}}]);