"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[77022],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?o.createElement(d,s(s({ref:t},c),{},{components:n})):o.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"11-03-setting-up-links",title:"11.03 Setting Up Links",date:new Date("2021-04-14T20:13:03.000Z")},l=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links",title:"11.03 Setting Up Links",description:"Blog.js",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-03-setting-up-links",title:"11.03 Setting Up Links",date:"2021-04-14T20:13:03.000Z"},sidebar:"Docs",previous:{title:"11.02 Routing And Spas",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-02-routing-and-spas"},next:{title:"11.04 Setting Up Router Package",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package"}},c={},u=[{value:"Blog.js",id:"blogjs",level:2},{value:"Blog.css",id:"blogcss",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"blogjs"},"Blog.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {53-65}',title:'"Blog.js"',"{53-65}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport axios from "../../axios";\nimport FullPost from "../../components/FullPost/FullPost";\nimport NewPost from "../../components/NewPost/NewPost";\nimport Post from "../../components/Post/Post";\nimport "./Blog.css";\n\nclass Blog extends Component {\n  state = {\n    posts: [],\n    selectedPostId: null,\n    error: false,\n  };\n  componentDidMount() {\n    axios\n      .get("/posts")\n      .then((response) => {\n        const posts = response.data.slice(0, 4);\n        const updatedPosts = posts.map((post) => {\n          return {\n            ...post,\n            author: "Pash",\n          };\n        });\n        this.setState({ posts: updatedPosts });\n        //   console.log(response);\n      })\n      .catch((error) => {\n        // console.log(error);\n        this.setState({ error: true });\n      });\n  }\n\n  postSelectedHandler = (id) => {\n    this.setState({ selectedPostId: id });\n  };\n  render() {\n    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;\n    if (!this.state.error) {\n      posts = this.state.posts.map((post) => {\n        return (\n          <Post\n            key={post.id}\n            title={post.title}\n            author={post.author}\n            clicked={() => this.postSelectedHandler(post.id)}\n          />\n        );\n      });\n    }\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <a href="/">Home</a>\n              </li>\n              <li>\n                <a href="/new-post">New Post</a>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        <section className="Posts">{posts}</section>\n        <section>\n          <FullPost id={this.state.selectedPostId} />\n        </section>\n        <section>\n          <NewPost />\n        </section>\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')),(0,i.kt)("h2",{id:"blogcss"},"Blog.css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.css" {9-30}',title:'"Blog.css"',"{9-30}":!0},".Posts {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  width: 80%;\n  margin: auto;\n}\n\n.Blog ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.Blog li {\n  display: inline-block;\n  margin: 20px;\n}\n\n.Blog a {\n  text-decoration: none;\n  color: #000;\n}\n\n.Blog a:hover,\n.Blog a:active {\n  color: #fa923f;\n}\n")))}m.isMDXComponent=!0}}]);