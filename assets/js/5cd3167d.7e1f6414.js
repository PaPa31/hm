"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[40351],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),c=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(g,a(a({ref:e},p),{},{components:n})):o.createElement(g,a({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24548:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],l={id:"9-07-making-post-selectable",title:"9.07 Making Post Selectable",date:new Date("2021-04-13T14:07:53.000Z")},i=void 0,c={unversionedId:"react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable",id:"react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable",title:"9.07 Making Post Selectable",description:"FullPost.js",source:"@site/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable.md",sourceDirName:"react-complete-guide/09-reaching-out-web-http-ajax",slug:"/react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-07-making-post-selectable.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"9-07-making-post-selectable",title:"9.07 Making Post Selectable",date:"2021-04-13T14:07:53.000Z"},sidebar:"Docs",previous:{title:"9.06 Transforming Data",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-06-transforming-data"},next:{title:"9.08 Fetching Data On Update",permalink:"/hm/courses/react-complete-guide/09-reaching-out-web-http-ajax/9-08-fetching-data-on-update"}},p=[{value:"FullPost.js",id:"fullpostjs",children:[],level:2},{value:"Blog.js",id:"blogjs",children:[],level:2},{value:"Post.js",id:"postjs",children:[],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"fullpostjs"},"FullPost.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="FullPost.js" {6-7,17}',title:'"FullPost.js"',"{6-7,17}":!0},'import React, { Component } from "react";\nimport "./FullPost.css";\n\nclass FullPost extends Component {\n  render() {\n    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;\n    if (this.props.id) {\n      post = (\n        <div className="FullPost">\n          <h1>Title</h1>\n          <p>Content</p>\n          <div className="Edit">\n            <button className="Delete">Delete</button>\n          </div>\n        </div>\n      );\n    }\n\n    return post;\n  }\n}\n\nexport default FullPost;\n')),(0,s.kt)("h2",{id:"blogjs"},"Blog.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {11,27-29,37,45}',title:'"Blog.js"',"{11,27-29,37,45}":!0},'import axios from "axios";\nimport React, { Component } from "react";\nimport FullPost from "../../components/FullPost/FullPost";\nimport NewPost from "../../components/NewPost/NewPost";\nimport Post from "../../components/Post/Post";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  state = {\n    posts: [],\n    selectedPostId: null,\n  };\n  componentDidMount() {\n    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {\n      const posts = response.data.slice(0, 4);\n      const updatedPosts = posts.map((post) => {\n        return {\n          ...post,\n          author: "Pash",\n        };\n      });\n      this.setState({ posts: updatedPosts });\n      //   console.log(response);\n    });\n  }\n\n  postSelectedHandler = (id) => {\n    this.setState({ selectedPostId: id });\n  };\n  render() {\n    const posts = this.state.posts.map((post) => {\n      return (\n        <Post\n          key={post.id}\n          title={post.title}\n          author={post.author}\n          clicked={() => this.postSelectedHandler(post.id)}\n        />\n      );\n    });\n    return (\n      <div>\n        <section className="Posts">{posts}</section>\n        <section>\n          <FullPost id={this.state.selectedPostId} />\n        </section>\n        <section>\n          <NewPost />\n        </section>\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n\n')),(0,s.kt)("h2",{id:"postjs"},"Post.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Post.js" {5}',title:'"Post.js"',"{5}":!0},'import React from "react";\nimport "./Post.css";\n\nconst post = (props) => (\n  <article className="Post" onClick={props.clicked}>\n    <h1>{props.title}</h1>\n    <div className="Info">\n      <div className="Author">{props.author}</div>\n    </div>\n  </article>\n);\n\nexport default post;\n')))}d.isMDXComponent=!0}}]);