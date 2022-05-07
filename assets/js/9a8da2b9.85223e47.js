"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[62426],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),c=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(a,".").concat(u)]||m[u]||d[u]||s;return t?o.createElement(f,p(p({ref:n},l),{},{components:t})):o.createElement(f,p({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<s;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93994:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var o=t(87462),r=t(63366),s=(t(67294),t(3905)),p=["components"],i={id:"7-07-component-creation-lifecycle-in-action",title:"7.07 Component Creation Lifecycle In Action",date:new Date("2021-04-07T19:07:10.000Z")},a=void 0,c={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action",title:"7.07 Component Creation Lifecycle In Action",description:"App.js",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-07-component-creation-lifecycle-in-action.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-07-component-creation-lifecycle-in-action",title:"7.07 Component Creation Lifecycle In Action",date:"2021-04-07T19:07:10.000Z"},sidebar:"Docs",previous:{title:"7.06 Class Component Lifecycle Overview",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-06-class-component-lifecycle-overview"},next:{title:"7.08.0 Component Update Lifecycle For Props",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-08-0-component-update-lifecycle-for-props"}},l={},d=[{value:"App.js",id:"appjs",level:2},{value:"Person.js",id:"personjs",level:2},{value:"Persons.js",id:"personsjs",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"appjs"},"App.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {6-9,18-28,63}',title:'"App.js"',"{6-9,18-28,63}":!0},'import React, { Component } from "react";\nimport Cockpit from "../components/Cockpit/Cockpit";\nimport Persons from "../components/Persons/Persons";\nimport classes from "./App.css";\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    console.log("[App.js] constructor");\n  }\n  state = {\n    persons: [\n      { id: "20210330005200", name: "Max", age: 28 },\n      { id: "20210330005205", name: "Manu", age: 29 },\n      { id: "20210330005209", name: "Stephanie", age: 26 },\n    ],\n  };\n\n  static getDerivedStateFromProps(props, state) {\n    console.log("[App.js] getDerivedStateFromProps", props);\n    return state;\n  }\n\n//   componentWillMount() {\n//     console.log("[App.js] componentWillMount");\n//   }\n  componentDidMount() {\n    console.log("[App.js] componentDidMount");\n  }\n  nameChangedHandler = (event, id) => {\n    const personIndex = this.state.persons.findIndex((p) => {\n      return p.id === id;\n    });\n\n    const person = {\n      ...this.state.persons[personIndex],\n    };\n\n    // const person = Object.assign({}, this.state.persons[personIndex]);\n\n    person.name = event.target.value;\n\n    const persons = [...this.state.persons];\n    persons[personIndex] = person;\n\n    this.setState({\n      persons: persons,\n    });\n  };\n\n  deletePersonHandler = (personIndex) => {\n    // const persons = this.state.persons.slice();\n    const persons = [...this.state.persons];\n    persons.splice(personIndex, 1);\n    this.setState({ persons: persons });\n  };\n\n  togglePersonsHandler = () => {\n    const doesShow = this.state.showPersons;\n    this.setState({ showPersons: !doesShow });\n  };\n\n  render() {\n    console.log("[App.js] render");\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <Persons\n          persons={this.state.persons}\n          clicked={this.deletePersonHandler}\n          changed={this.nameChangedHandler}\n        />\n      );\n    }\n\n    return (\n      <div className={classes.App}>\n        <Cockpit\n          title={this.props.appTitle}\n          persons={this.state.persons}\n          showPersons={this.state.showPersons}\n          clicked={this.togglePersonsHandler}\n        />\n        {persons}\n      </div>\n    );\n  }\n}\n\nexport default App;\n')),(0,s.kt)("h2",{id:"personjs"},"Person.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {5}',title:'"Person.js"',"{5}":!0},'import React from "react";\nimport classes from "./Person.css";\n\nconst person = (props) => {\n  console.log("[Person.js] rendering...");\n  return (\n    <div className={classes.Person}>\n      <p onClick={props.click}>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type="text" onChange={props.changed} value={props.name} />\n    </div>\n  );\n};\n\nexport default person;\n')),(0,s.kt)("h2",{id:"personsjs"},"Persons.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {5}',title:'"App.js"',"{5}":!0},'import React from "react";\nimport Person from "./Person/Person";\n\nconst persons = (props) => {\n  console.log("[Persons.js] rendering...");\n  return props.persons.map((person, index) => {\n    return (\n      <Person\n        click={() => props.clicked(index)}\n        name={person.name}\n        age={person.age}\n        key={person.id}\n        changed={(event) => props.changed(event, person.id)}\n      />\n    );\n  });\n};\nexport default persons;\n\n')))}u.isMDXComponent=!0}}]);