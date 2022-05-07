"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[39991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={id:"9-04-creating-http-request-to-get-data",title:"9.04 Creating Http Request To Get Data",date:new Date("2021-04-13T11:00:59.000Z")},s=void 0,u={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data",title:"9.04 Creating Http Request To Get Data",description:"Blog.js",source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"9-04-creating-http-request-to-get-data",title:"9.04 Creating Http Request To Get Data",date:"2021-04-13T11:00:59.000Z"},sidebar:"Docs",previous:{title:"9.03 Understanding Project And Intro Axios",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-03-understanding-project-and-intro-axios"},next:{title:"9.05 Rendering Fetched Data To Screen",permalink:"/hm/ru/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen"}},p={},l=[{value:"Blog.js",id:"blogjs",level:2}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blogjs"},"Blog.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {1,9-13}',title:'"Blog.js"',"{1,9-13}":!0},'import axios from "axios";\nimport React, { Component } from "react";\nimport FullPost from "../../components/FullPost/FullPost";\nimport NewPost from "../../components/NewPost/NewPost";\nimport Post from "../../components/Post/Post";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  componentDidMount() {\n    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {\n      console.log(response);\n    });\n  }\n  render() {\n    return (\n      <div>\n        <section className="Posts">\n          <Post />\n          <Post />\n          <Post />\n        </section>\n        <section>\n          <FullPost />\n        </section>\n        <section>\n          <NewPost />\n        </section>\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')))}m.isMDXComponent=!0}}]);