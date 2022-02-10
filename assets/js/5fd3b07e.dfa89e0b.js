"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[94121],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51945:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={id:"7-05-class-based-vs-functional-components",title:"7.05 Class Based Vs Functional Components",date:new Date("2021-04-07T11:39:41.000Z")},c=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components",title:"7.05 Class Based Vs Functional Components",description:"index.js",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-05-class-based-vs-functional-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-05-class-based-vs-functional-components",title:"7.05 Class Based Vs Functional Components",date:"2021-04-07T11:39:41.000Z"},sidebar:"Docs",previous:{title:"7.04 Comparing Stateless And Stateful Components",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-04-comparing-stateless-and-stateful-components"},next:{title:"7.06 Class Component Lifecycle Overview",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview"}},l=[{value:"index.js",id:"indexjs",children:[],level:2},{value:"App.js",id:"appjs",children:[],level:2},{value:"Cockpit.js",id:"cockpitjs",children:[],level:2}],d={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"indexjs"},"index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {8}',title:'"index.js"',"{8}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./containers/App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\n\nReactDOM.render(\n  <App appTitle="Person Manager" />,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')),(0,s.kt)("h2",{id:"appjs"},"App.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {6}',title:'"App.js"',"{6}":!0},"...\n\n    return (\n      <div className={classes.App}>\n        <Cockpit\n          title={this.props.appTitle}\n          persons={this.state.persons}\n          showPersons={this.state.showPersons}\n          clicked={this.togglePersonsHandler}\n        />\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,s.kt)("h2",{id:"cockpitjs"},"Cockpit.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Cockpit.js" {5}',title:'"Cockpit.js"',"{5}":!0},'...\n\n  return (\n    <div className={classes.Cockpit}>\n      <h1>{props.title}</h1>\n      <p className={assignedClasses.join(" ")}>This is really working!</p>\n      <button className={btnClass} onClick={props.clicked}>\n        Toggle Persons\n      </button>\n    </div>\n  );\n};\n\nexport default cockpit;\n')))}u.isMDXComponent=!0}}]);