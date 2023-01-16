"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={id:"11-07-setting-up-and-rendering-routes",title:"11.07 Setting Up And Rendering Routes",date:new Date("2021-04-14T22:22:51.000Z")},o=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",title:"11.07 Setting Up And Rendering Routes",description:"` simply replaces itself with the content you define in the render` attribute.",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-07-setting-up-and-rendering-routes.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"11-07-setting-up-and-rendering-routes",title:"11.07 Setting Up And Rendering Routes",date:"2021-04-14T22:22:51.000Z"},sidebar:"Courses",previous:{title:"11.06 Preparing Project For Routing",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-06-preparing-project-for-routing"},next:{title:"11.08 Rendering Components For Routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-08-rendering-components-for-routes"}},l={},u=[{value:"<code>Blog.js</code>",id:"blogjs",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<Route>")," simply replaces itself with the content you define in the ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," attribute.",(0,i.kt)("br",{parentName:"p"}),"\n","First, the ",(0,i.kt)("inlineCode",{parentName:"p"},"react router")," checks: it compares the ",(0,i.kt)("inlineCode",{parentName:"p"},"path attribute")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"page path"),". If your current path starts from this path,it will be displayed:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"path attribute")," === ",(0,i.kt)("inlineCode",{parentName:"p"},"page path (without domain)")," + ..."),(0,i.kt)("p",null,"If you add the ",(0,i.kt)("inlineCode",{parentName:"p"},"exact")," attribute, then the check will compare the  entire paths:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"path attribute")," === ",(0,i.kt)("inlineCode",{parentName:"p"},"page path (without domain)")),(0,i.kt)("h2",{id:"blogjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {3,22-23}',title:'"Blog.js"',"{3,22-23}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { Route } from "react-router-dom";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <a href="/">Home</a>\n              </li>\n              <li>\n                <a href="/new-post">New Post</a>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} />\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}c.isMDXComponent=!0}}]);