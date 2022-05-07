"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[31554],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40139:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",date:new Date("2021-03-15T01:31:48.000Z")},c=void 0,l={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",description:"JSX Conditionals Learning Card PDF",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",date:"2021-03-15T01:31:48.000Z"},sidebar:"Docs",previous:{title:"4.0 Lesson",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-0-lesson"},next:{title:"4.03 Handling Javascript Way",permalink:"/hm/ru/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way"}},d={},u=[{value:"JSX way",id:"jsx-way",level:2}],p={toc:u};function m(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:t(62272).Z},"JSX Conditionals Learning Card PDF")),(0,a.kt)("h2",{id:"jsx-way"},"JSX way"),(0,a.kt)("p",null,"Checks condition with a ternary expression. And handles event using the handler method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2-5,13,16,35}',title:'"App.js"',"{2-5,13,16,35}":!0},'...\n  togglePersonsHandler = () => {\n    const doesShow = this.state.showPersons;\n    this.setState({ showPersons: !doesShow });\n  };\n\n  render() {\n...\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p>This is really working!</p>\n        <button style={style} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {this.state.showPersons ? (     // start ternary expression\n          <div>\n            <Person\n              name={this.state.persons[0].name}\n              age={this.state.persons[0].age}\n            />\n            <Person\n              name={this.state.persons[1].name}\n              age={this.state.persons[1].age}\n              click={this.switchNameHandler.bind(this, "Max!")}\n              changed={this.nameChangedHandler}\n            >\n              My hobbies: Racing\n            </Person>\n            <Person\n              name={this.state.persons[2].name}\n              age={this.state.persons[2].age}\n            />\n          </div>\n        ) : null}   // end ternary expression\n      </div>\n...\n')))}m.isMDXComponent=!0},62272:function(e,n,t){n.Z=t.p+"assets/files/4-02-jsx-conditionals-learning-card-e09984e48e1f743aab2ccc13d8dd1ba1.pdf"}}]);