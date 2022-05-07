"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[82102],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"5-03-setting-styles-dynamically",title:"5.03 Setting Styles Dynamically",date:new Date("2021-04-03T19:21:14.000Z")},l=void 0,c={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically",id:"react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically",title:"5.03 Setting Styles Dynamically",description:"You can manipulate the style object with any JavaScript code you want and in the end when you then bind it here, it will simply apply this no matter how you edited it.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-03-setting-styles-dynamically.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"5-03-setting-styles-dynamically",title:"5.03 Setting Styles Dynamically",date:"2021-04-03T19:21:14.000Z"},sidebar:"Docs",previous:{title:"5.0 Lesson",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-0-lesson"},next:{title:"5.04 Setting Class Names Dynamically",permalink:"/hm/ru/courses/react-complete-guide/05-styling-react-components-and-elements/5-04-setting-class-names-dynamically"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can manipulate the style object with any JavaScript code you want and in the end when you then bind it here, it will simply apply this no matter how you edited it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {21}',title:'"App.js"',"{21}":!0},'    ...\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person, index) => {\n            return (\n              <Person\n                click={() => this.deletePersonHandler(index)}\n                name={person.name}\n                age={person.age}\n                key={person.id}\n                changed={(event) => this.nameChangedHandler(event, person.id)}\n              />\n            );\n          })}\n        </div>\n      );\n\n      style.backgroundColor = "red";\n    }\n\n    return (\n      <div className="App">\n    ...\n')))}d.isMDXComponent=!0}}]);