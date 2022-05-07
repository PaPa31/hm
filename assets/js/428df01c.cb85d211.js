"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[94008],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=s,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91258:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),i=["components"],a={id:"4-09-flexible-lists",title:"4.09 Flexible Lists",date:new Date("2021-03-30T01:11:12.000Z")},l=void 0,c={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists",title:"4.09 Flexible Lists",description:"github.com: 7591ac7163728d3240252289db5e1d6b772493ea",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"4-09-flexible-lists",title:"4.09 Flexible Lists",date:"2021-03-30T01:11:12.000Z"},sidebar:"Docs",previous:{title:"4.08 Lists And Keys",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-08-lists-and-keys"},next:{title:"4.12 Practice - Solution",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution"}},p={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"https://github.com/PaPa31/react-complete-guide/commit/7591ac7163728d3240252289db5e1d6b772493ea",class:"external"},"github.com: 7591ac7163728d3240252289db5e1d6b772493ea"),(0,o.kt)("p",null,"So now we get a truly flexible component here, a truly flexible application taking advantage of modern features to render this list efficiently and interact with it efficiently. Super important."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {1-4,6-8,10,12,14-15,18,40}',title:'"App.js"',"{1-4,6-8,10,12,14-15,18,40}":!0},"  nameChangedHandler = (event, id) => {\n    const personIndex = this.state.persons.findIndex((p) => {\n      return p.id === id;\n    });\n\n    const person = {\n      ...this.state.persons[personIndex],\n    };\n\n    // const person = Object.assign({}, this.state.persons[personIndex]);\n\n    person.name = event.target.value;\n\n    const persons = [...this.state.persons];\n    persons[personIndex] = person;\n\n    this.setState({\n      persons: persons,\n    });\n  };\n\n...\n\n  render() {\n\n...\n\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person, index) => {\n            return (\n              <Person\n                click={() => this.deletePersonHandler(index)}\n                name={person.name}\n                age={person.age}\n                key={person.id}\n                changed={(event) => this.nameChangedHandler(event, person.id)}\n              />\n            );\n          })}\n        </div>\n      );\n    }\n")),(0,o.kt)("p",null,"A lot of code but the best way of doing it, the most efficient way without mutating the state."))}f.isMDXComponent=!0}}]);