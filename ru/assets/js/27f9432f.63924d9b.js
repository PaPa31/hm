"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[33620],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),i=["components"],o={id:"4-03-handling-javascript-way",title:"4.03 Handling Javascript Way",date:new Date("2021-03-29T20:05:53.000Z")},c=void 0,l={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way",title:"4.03 Handling Javascript Way",description:"Cut out all the toggle JSX code. And assign it to the variable. With a condition. Then take that variable and output it as JSX code with single curly braces.",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"4-03-handling-javascript-way",title:"4.03 Handling Javascript Way",date:"2021-03-29T20:05:53.000Z"},sidebar:"Docs",previous:{title:"4.02 Rendering Content Conditionally",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally"},next:{title:"4.05 Outputting Lists",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-05-outputting-lists"}},u={},d=[],p={toc:d};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cut out all the toggle JSX code. And assign it to the variable. With a condition. Then take that variable and output it as JSX code with single curly braces."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {11,13-14,43}',title:'"App.js"',"{11,13-14,43}":!0},'...\n  togglePersonsHandler = () => {\n    const doesShow = this.state.showPersons;\n    this.setState({ showPersons: !doesShow });\n  };\n\n  render() {\n\n...\n\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          <Person\n            name={this.state.persons[0].name}\n            age={this.state.persons[0].age}\n          />\n          <Person\n            name={this.state.persons[1].name}\n            age={this.state.persons[1].age}\n            click={this.switchNameHandler.bind(this, "Max!")}\n            changed={this.nameChangedHandler}\n          >\n            My hobbies: Racing\n          </Person>\n          <Person\n            name={this.state.persons[2].name}\n            age={this.state.persons[2].age}\n          />\n        </div>\n      );\n    }\n\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p>This is really working!</p>\n        <button style={style} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {persons}\n      </div>\n    );\n...\n')),(0,s.kt)("p",null,"This is actually the preferred way of outputting conditional content, and it\u2019s the way I would recommend using."))}g.isMDXComponent=!0}}]);