"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[7011],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?t.createElement(m,s(s({ref:r},u),{},{components:n})):t.createElement(m,s({ref:r},u))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2770:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=n(87462),o=(n(67294),n(3905));const a={id:"6-5-using-error-boundaries",title:"6.5 Using Error Boundaries",date:new Date("2021-04-06T11:40:16.000Z")},s=void 0,i={unversionedId:"react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries",id:"react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries",title:"6.5 Using Error Boundaries",description:"Wrap code which might fail at runtime, which you can't prevent, and then show a custom error message or some fallbacks page or content.",source:"@site/courses/react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries.md",sourceDirName:"react-complete-guide/06-debugging-react-apps",slug:"/react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries",permalink:"/hm/courses/react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/06-debugging-react-apps/6-5-using-error-boundaries.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"6-5-using-error-boundaries",title:"6.5 Using Error Boundaries",date:"2021-04-06T11:40:16.000Z"},sidebar:"Courses",previous:{title:"6.0 Lesson",permalink:"/hm/courses/react-complete-guide/06-debugging-react-apps/6-0-lesson"},next:{title:"6.7 Useful Resources",permalink:"/hm/courses/react-complete-guide/06-debugging-react-apps/6-7-useful-resources"}},p={},l=[{value:"ErrorBoundary.js",id:"errorboundaryjs",level:2},{value:"App.js",id:"appjs",level:2},{value:"Where to Place Error Boundaries",id:"where-to-place-error-boundaries",level:2}],u={toc:l};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Wrap code which might fail at runtime, which you can't prevent, and then show a custom error message or some fallbacks page or content.")),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{href:"https://codepen.io/gaearon/pen/wqvxGa?editors=0010",class:"external"},"codepen.io: WqvxGa")),(0,o.kt)("h2",{id:"errorboundaryjs"},"ErrorBoundary.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ErrorBoundary/ErrorBoundary.js" {}',title:'"ErrorBoundary/ErrorBoundary.js"',"{}":!0},'import React, { Component } from "react";\n\nclass ErrorBoundary extends Component {\n  state = {\n    hasError: false,\n    errorMessage: "",\n  };\n\n  componentDidCatch = (error, info) => {\n    this.setState({\n      hasError: true,\n      errorMessage: error,\n    });\n  };\n  render() {\n    if (this.state.hasError) {\n      return (\n        <h1>{this.state.errorMessage && this.state.errorMessage.toString()}</h1>\n      );  // If you try to display {this.state.errorMessage}, you will catch a blank screen\n    } else {\n      return this.props.children;\n    }\n  }\n}\n\nexport default ErrorBoundary;\n')),(0,o.kt)("h2",{id:"appjs"},"App.js"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note, that the ",(0,o.kt)("inlineCode",{parentName:"p"},"key={person.id}")," attribute is moved up one level: from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," tag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," tag.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {3,17,24}',title:'"App.js"',"{3,17,24}":!0},'import React, { Component } from "react";\nimport classes from "./App.css";\nimport ErrorBoundary from "./ErrorBoundary/ErrorBoundary";\nimport Person from "./Person/Person";\n\n    ...\n\n  render() {\n    let persons = null;\n    let btnClass = "";\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person, index) => {\n            return (\n              <ErrorBoundary key={person.id}>\n                <Person\n                  click={() => this.deletePersonHandler(index)}\n                  name={person.name}\n                  age={person.age}\n                  changed={(event) => this.nameChangedHandler(event, person.id)}\n                />\n              </ErrorBoundary>\n            );\n          })}\n        </div>\n      );\n\n      btnClass = classes.Red;\n    }\n\n    const assignedClasses = [];\n    if (this.state.persons.length <= 2) {\n      assignedClasses.push(classes.red); // classes = [\'red\']\n    }\n    if (this.state.persons.length <= 1) {\n      assignedClasses.push(classes.bold); // classes = [\'red\', \'bold\']\n    }\n\n    return (\n      <div className={classes.App}>\n        <h1>Hi, I\'m a React app!</h1>\n        <p className={assignedClasses.join(" ")}>This is really working!</p>\n        <button className={btnClass} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"where-to-place-error-boundaries"},"Where to Place Error Boundaries"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{href:"https://reactjs.org/docs/error-boundaries.html#where-to-place-error-boundaries",class:"external"},"reactjs.org: Where To Place Error Boundaries")),(0,o.kt)("p",null,"The granularity of error boundaries is up to you. You may wrap top-level route components to display a \u201cSomething went wrong\u201d message to the user, just like how server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application."))}c.isMDXComponent=!0}}]);