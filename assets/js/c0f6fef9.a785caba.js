"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[16261],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78777:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={id:"3-23-adding-two-way-binding",title:"3.23 Adding Two Way Binding",date:new Date("2021-03-13T20:50:36.000Z")},c=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding",isDocsHomePage:!1,title:"3.23 Adding Two Way Binding",description:"Dynamically Updating & Handle Inputs",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-23-adding-two-way-binding.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-23-adding-two-way-binding",title:"3.23 Adding Two Way Binding",date:"2021-03-13T20:50:36.000Z"},sidebar:"Docs",previous:{title:"3.22 Passing Methods Between Components",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-22-passing-methods-between-components"},next:{title:"3.24 Adding Styling With Stylesheets",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-24-adding-styling-with-stylesheets"}},d=[{value:"Dynamically Updating &amp; Handle Inputs",id:"dynamically-updating--handle-inputs",children:[]}],l={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dynamically-updating--handle-inputs"},"Dynamically Updating & Handle Inputs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{5,27} title="App.js"',"{5,27}":!0,title:'"App.js"'},"  nameChangedHandler = (event) => {\n    this.setState({\n      persons: [\n        { name: 'Max', age: 28 },\n        { name: event.target.value, age: 29 },\n        { name: 'Stephanie', age: 26 },\n      ],\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"App\">\n        <h1>Hi, I'm a React app!</h1>\n        <p>This is really working!</p>\n        <button onClick={() => this.switchNameHandler('MAx')}>\n          Switch Name\n        </button>\n        <Person\n          name={this.state.persons[0].name}\n          age={this.state.persons[0].age}\n        />\n        <Person\n          name={this.state.persons[1].name}\n          age={this.state.persons[1].age}\n          click={this.switchNameHandler.bind(this, 'Max!')}\n          changed={this.nameChangedHandler}\n        >\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{8} title="Person.js"',"{8}":!0,title:'"Person.js"'},'const person = (props) => {\n  return (\n    <div>\n      <p onClick={props.click}>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type="text" onChange={props.changed} value={props.name} />\n    </div>\n  )\n}\n')))}u.isMDXComponent=!0}}]);