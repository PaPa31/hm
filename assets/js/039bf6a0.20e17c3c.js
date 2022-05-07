"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[57983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"11-27-working-with-guards",title:"11.27 Working With Guards",date:new Date("2021-04-17T16:50:46.000Z")},l=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards",title:"11.27 Working With Guards",description:"Blog.js",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-27-working-with-guards.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"11-27-working-with-guards",title:"11.27 Working With Guards",date:"2021-04-17T16:50:46.000Z"},sidebar:"Docs",previous:{title:"11.26 Using History Prop To Redirect Replace",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-26-using-history-prop-to-redirect-replace"},next:{title:"11.28 Handling 404 Case Unknown Routes",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-28-handling-404-case-unknown-routes"}},u={},c=[{value:"<code>Blog.js</code>",id:"blogjs",level:2},{value:"<code>NewPost.js</code>",id:"newpostjs",level:2}],g={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blogjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Blog.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Blog.js" {9-11,49,51}',title:'"Blog.js"',"{9-11,49,51}":!0},'// import axios from "axios";\nimport React, { Component } from "react";\nimport { NavLink, Redirect, Route, Switch } from "react-router-dom";\nimport "./Blog.css";\nimport NewPost from "./NewPost/NewPost";\nimport Posts from "./Posts/Posts";\n\nclass Blog extends Component {\n  state = {\n    auth: false,\n  };\n  render() {\n    return (\n      <div className="Blog">\n        <header>\n          <nav>\n            <ul>\n              <li>\n                <NavLink\n                  to="/posts/"\n                  exact\n                  activeClassName="my-active"\n                  activeStyle={{\n                    color: "#fa923f",\n                    textDecoration: "underline",\n                  }}\n                >\n                  Posts\n                </NavLink>\n              </li>\n              <li>\n                <NavLink\n                  to={{\n                    pathname: "/new-post",\n                    hash: "#submit",\n                    search: "?quick-submit=true",\n                  }}\n                >\n                  New Post\n                </NavLink>\n              </li>\n            </ul>\n          </nav>\n        </header>\n        {/* <Route path="/" exact render={() => <h1>Home</h1>} />\n        <Route path="/" render={() => <h1>Home2</h1>} /> */}\n\n        <Switch>\n          {this.state.auth ? (\n            <Route path="/new-post" component={NewPost} />\n          ) : null}\n\n          <Route path="/posts" component={Posts} />\n          <Redirect from="/" to="/posts" />\n          {/* <Route path="/" component={Posts} /> */}\n        </Switch>\n      </div>\n    );\n  }\n}\n\nexport default Blog;\n')),(0,a.kt)("h2",{id:"newpostjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"NewPost.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="NewPost.js" {14}',title:'"NewPost.js"',"{14}":!0},'import axios from "axios";\nimport React, { Component } from "react";\nimport { Redirect } from "react-router-dom";\nimport "./NewPost.css";\n\nclass NewPost extends Component {\n  state = {\n    title: "",\n    content: "",\n    author: "Pash",\n    submitted: false,\n  };\n  componentDidMount() {\n    // if unauth => this.props.history.replace("/posts");\n    console.log(this.props);\n  }\n  postDataHandler = () => {\n    const post = {\n      title: this.state.title,\n      body: this.state.content,\n      author: this.state.author,\n    };\n    axios.post("/posts", post).then((response) => {\n      console.log(response);\n      this.props.history.replace("/posts");\n      // this.setState({ submitted: true });\n    });\n  };\n\n  render() {\n    let redirect = null;\n    if (this.state.submitted) {\n      redirect = <Redirect to="/posts" />;\n    }\n    return (\n      <div className="NewPost">\n        {redirect}\n        <h1>Add a Post</h1>\n        <label>Title</label>\n        <input\n          type="text"\n          value={this.state.title}\n          onChange={(event) => this.setState({ title: event.target.value })}\n        />\n        <label>Content</label>\n        <textarea\n          rows="4"\n          value={this.state.content}\n          onChange={(event) => this.setState({ content: event.target.value })}\n        />\n        <label>Author</label>\n        <select\n          value={this.state.author}\n          onChange={(event) => this.setState({ author: event.target.value })}\n        >\n          <option value="Pash">Pash</option>\n          <option value="Mash">Mash</option>\n          <option value="Chel">Chel</option>\n        </select>\n        <button onClick={this.postDataHandler}>Add Post</button>\n      </div>\n    );\n  }\n}\n\nexport default NewPost;\n')))}d.isMDXComponent=!0}}]);