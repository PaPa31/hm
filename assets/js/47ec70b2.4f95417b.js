"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[98430],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50119:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={id:"9-05-rendering-fetched-data-to-screen",title:"9.05 Rendering Fetched Data To Screen",date:new Date("2021-04-13T11:40:25.000Z")},i=void 0,p={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen",title:"9.05 Rendering Fetched Data To Screen",description:"Blog.js",source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-05-rendering-fetched-data-to-screen.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"9-05-rendering-fetched-data-to-screen",title:"9.05 Rendering Fetched Data To Screen",date:"2021-04-13T11:40:25.000Z"},sidebar:"Docs",previous:{title:"9.04 Creating Http Request To Get Data",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-04-creating-http-request-to-get-data"},next:{title:"9.06 Transforming Data",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-06-transforming-data"}},l=[{value:"Blog.js",id:"blogjs",children:[],level:2},{value:"Post.js",id:"postjs",children:[],level:2},{value:"Post.css",id:"postcss",children:[],level:2}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blogjs"},"Blog.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {9-11,14-15,19-21,24}',title:'"Blog.js"',"{9-11,14-15,19-21,24}":!0},'import axios from "axios";\nimport React, { Component } from "react";\nimport FullPost from "../../components/FullPost/FullPost";\nimport NewPost from "../../components/NewPost/NewPost";\nimport Post from "../../components/Post/Post";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  state = {\n    posts: [],\n  };\n  componentDidMount() {\n    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {\n      this.setState({ posts: response.data });\n      //   console.log(response);\n    });\n  }\n  render() {\n    const posts = this.state.posts.map((post) => {\n      return <Post key={post.id} title={post.title} />;\n    });\n    return (\n      <div>\n        <section className="Posts">{posts}</section>\n        <section>\n          <FullPost />\n        </section>\n        <section>\n          <NewPost />\n        </section>\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')),(0,a.kt)("h2",{id:"postjs"},"Post.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Post.js" {6}',title:'"Post.js"',"{6}":!0},'import React from "react";\nimport "./Post.css";\n\nconst post = (props) => (\n  <article className="Post">\n    <h1>{props.title}</h1>\n    <div className="Info">\n      <div className="Author">Author</div>\n    </div>\n  </article>\n);\n\nexport default post;\n')),(0,a.kt)("h2",{id:"postcss"},"Post.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Post.css" {2}',title:'"Post.css"',"{2}":!0},".Post {\n  width: 250px;\n  padding: 16px;\n  text-align: center;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  margin: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.Post:hover,\n.Post:active {\n  background-color: #c0ddf5;\n}\n\n.Author {\n  margin: 16px 0;\n  color: #ccc;\n}\n")))}u.isMDXComponent=!0}}]);