"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[90735],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},54758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],u={id:"3-06-add-event-handler-method",title:"3.06 Add Event Handler Method",date:new Date("2021-03-19T23:30:12.000Z")},c=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method",id:"react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method",title:"3.06 Add Event Handler Method",description:"",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Practice",slug:"/react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Practice/3-06-add-event-handler-method.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-06-add-event-handler-method",title:"3.06 Add Event Handler Method",date:"2021-03-19T23:30:12.000Z"},sidebar:"Docs",previous:{title:"3.05 Add State To Class",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-05-add-state-to-class"},next:{title:"3.07 Pass Method Reference",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Practice/3-07-pass-method-reference"}},i={},d=[],l={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {14-22}',title:'"App.js"',"{14-22}":!0},"import React, { Component } from 'react';\nimport './App.css';\nimport UserOutput from './UserOutput/UserOutput'\n\nclass App extends Component {\n    state = {\n    persons: [\n      { name: 'Pasha', age: 47 },\n      { name: 'Masha', age: 37 },\n      { name: 'Chelsea', age: 1 },\n    ],\n  }\n\n  onChangeHandler = (event) => {\n    this.setState({\n      persons: [\n        { name: event.target.value, age: 47 },\n        { name: 'Masha', age: 37 },\n        { name: 'Chelsea', age: 1 },\n      ],\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <UserOutput\n          name={this.state.persons[0].name}\n          age={this.state.persons[0].age}\n        >\n          Git!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[1].name}\n          age={this.state.persons[1].age}\n        >\n          Queen!\n        </UserOutput>\n        <UserOutput\n          name={this.state.persons[2].name}\n          age={this.state.persons[2].age}\n        >\n          Meow!\n        </UserOutput>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserInput.js"',title:'"UserInput.js"'},"import React from 'react'\n\nconst userInput = () => {\n  return <input type=\"text\"></input>\n}\n\nexport default userInput\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="UserOutput.js"',title:'"UserOutput.js"'},"import React from 'react'\n\nconst userOutput = (props) => {\n  return (\n    <div>\n      <p>\n        I'm {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n    </div>\n  )\n}\n\nexport default userOutput\n")))}m.isMDXComponent=!0}}]);