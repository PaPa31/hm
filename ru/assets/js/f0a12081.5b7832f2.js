"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11505],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,s(s({ref:n},l),{},{components:t})):o.createElement(f,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73254:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],c={id:"7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",date:new Date("2021-04-07T19:26:38.000Z")},i=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",description:"- Convert from functional to class-based components",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",date:"2021-04-07T19:26:38.000Z"},sidebar:"Docs",previous:{title:"7.08.0 Component Update Lifecycle For Props",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-0-component-update-lifecycle-for-props"},next:{title:"7.09 Component Update Lifecycle State Changes",permalink:"/hm/ru/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes"}},l={},d=[{value:"Person.js",id:"personjs",level:2},{value:"Persons.js",id:"personsjs",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Convert from functional to class-based components"),(0,a.kt)("li",{parentName:"ul"},"Add Update Lifecycle")),(0,a.kt)("h2",{id:"personjs"},"Person.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {1,4-5,9-10,12,15-16,23}',title:'"Person.js"',"{1,4-5,9-10,12,15-16,23}":!0},'import React, { Component } from "react";\nimport classes from "./Person.css";\n\nclass Person extends Component {\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <div className={classes.Person}>\n        <p onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p>{this.props.children}</p>\n        <input\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </div>\n    );\n  }\n}\n\nexport default Person;\n')),(0,a.kt)("h2",{id:"personsjs"},"Persons.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Persons.js" {}',title:'"Persons.js"',"{}":!0},'import React, { Component } from "react";\nimport Person from "./Person/Person";\n\nclass Persons extends Component {\n  // static getDerivedStateFromProps(props, state) {\n  //   console.log("[Persons.js] getDerivedStateFromProps");\n  //   return state;\n  // }\n\n  // componentWillReceiveProps(props) {\n  //   console.log("[Persons.js] componentWillReceiveProps", props);\n  // }\n  \n  shouldComponentUpdate(nextProps, nextState) {\n    console.log("[Persons.js] shouldComponentUpdate");\n    return true;\n  }\n\n  getSnapshotBeforeUpdate(prevProps, prevState) {\n    console.log("[Persons.js] getSnapshotBeforeUpdate");\n    return { message: "Snapshot!" };\n  }\n\n  // componentWillUpdate() {\n\n  // }\n\n  componentDidUpdate(prevProps, prevState, snapshot) {\n    console.log("[Persons.js] componentDidUpdate");\n    console.log(snapshot);\n  }\n  render() {\n    console.log("[Persons.js] rendering...");\n    return this.props.persons.map((person, index) => {\n      return (\n        <Person\n          click={() => this.props.clicked(index)}\n          name={person.name}\n          age={person.age}\n          key={person.id}\n          changed={(event) => this.props.changed(event, person.id)}\n        />\n      );\n    });\n  }\n}\nexport default Persons;\n')))}m.isMDXComponent=!0}}]);