"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),i=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||s;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var i=2;i<s;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var o=t(87462),r=(t(67294),t(3905));const s={id:"7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",date:new Date("2021-04-07T19:26:38.000Z")},a=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",description:"- Convert from functional to class-based components",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-1-component-update-lifecycle-in-action.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"7-08-1-component-update-lifecycle-in-action",title:"7.08.1 Component Update Lifecycle In Action",date:"2021-04-07T19:26:38.000Z"},sidebar:"Courses",previous:{title:"7.08.0 Component Update Lifecycle For Props",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-0-component-update-lifecycle-for-props"},next:{title:"7.09 Component Update Lifecycle State Changes",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-09-component-update-lifecycle-state-changes"}},c={},i=[{value:"Person.js",id:"personjs",level:2},{value:"Persons.js",id:"personsjs",level:2}],l={toc:i};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convert from functional to class-based components"),(0,r.kt)("li",{parentName:"ul"},"Add Update Lifecycle")),(0,r.kt)("h2",{id:"personjs"},"Person.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {1,4-5,9-10,12,15-16,23}',title:'"Person.js"',"{1,4-5,9-10,12,15-16,23}":!0},'import React, { Component } from "react";\nimport classes from "./Person.css";\n\nclass Person extends Component {\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <div className={classes.Person}>\n        <p onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p>{this.props.children}</p>\n        <input\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </div>\n    );\n  }\n}\n\nexport default Person;\n')),(0,r.kt)("h2",{id:"personsjs"},"Persons.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Persons.js" {}',title:'"Persons.js"',"{}":!0},'import React, { Component } from "react";\nimport Person from "./Person/Person";\n\nclass Persons extends Component {\n  // static getDerivedStateFromProps(props, state) {\n  //   console.log("[Persons.js] getDerivedStateFromProps");\n  //   return state;\n  // }\n\n  // componentWillReceiveProps(props) {\n  //   console.log("[Persons.js] componentWillReceiveProps", props);\n  // }\n  \n  shouldComponentUpdate(nextProps, nextState) {\n    console.log("[Persons.js] shouldComponentUpdate");\n    return true;\n  }\n\n  getSnapshotBeforeUpdate(prevProps, prevState) {\n    console.log("[Persons.js] getSnapshotBeforeUpdate");\n    return { message: "Snapshot!" };\n  }\n\n  // componentWillUpdate() {\n\n  // }\n\n  componentDidUpdate(prevProps, prevState, snapshot) {\n    console.log("[Persons.js] componentDidUpdate");\n    console.log(snapshot);\n  }\n  render() {\n    console.log("[Persons.js] rendering...");\n    return this.props.persons.map((person, index) => {\n      return (\n        <Person\n          click={() => this.props.clicked(index)}\n          name={person.name}\n          age={person.age}\n          key={person.id}\n          changed={(event) => this.props.changed(event, person.id)}\n        />\n      );\n    });\n  }\n}\nexport default Persons;\n')))}d.isMDXComponent=!0}}]);