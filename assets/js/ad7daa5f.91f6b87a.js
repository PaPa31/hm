"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[31554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",date:new Date("2021-03-15T01:31:48.000Z")},s=void 0,i={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",description:"JSX Conditionals Learning Card PDF",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-02-rendering-content-conditionally.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"4-02-rendering-content-conditionally",title:"4.02 Rendering Content Conditionally",date:"2021-03-15T01:31:48.000Z"},sidebar:"Courses",previous:{title:"4.0 Lesson",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-0-lesson"},next:{title:"4.03 Handling Javascript Way",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-03-handling-javascript-way"}},l={},c=[{value:"JSX way",id:"jsx-way",level:2}],d={toc:c};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(62272).Z},"JSX Conditionals Learning Card PDF")),(0,o.kt)("h2",{id:"jsx-way"},"JSX way"),(0,o.kt)("p",null,"Checks condition with a ternary expression. And handles event using the handler method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2-5,13,16,35}',title:'"App.js"',"{2-5,13,16,35}":!0},'...\n  togglePersonsHandler = () => {\n    const doesShow = this.state.showPersons;\n    this.setState({ showPersons: !doesShow });\n  };\n\n  render() {\n...\n    return (\n      <div className="App">\n        <h1>Hi, I\'m a React app!</h1>\n        <p>This is really working!</p>\n        <button style={style} onClick={this.togglePersonsHandler}>\n          Toggle Persons\n        </button>\n        {this.state.showPersons ? (     // start ternary expression\n          <div>\n            <Person\n              name={this.state.persons[0].name}\n              age={this.state.persons[0].age}\n            />\n            <Person\n              name={this.state.persons[1].name}\n              age={this.state.persons[1].age}\n              click={this.switchNameHandler.bind(this, "Max!")}\n              changed={this.nameChangedHandler}\n            >\n              My hobbies: Racing\n            </Person>\n            <Person\n              name={this.state.persons[2].name}\n              age={this.state.persons[2].age}\n            />\n          </div>\n        ) : null}   // end ternary expression\n      </div>\n...\n')))}p.isMDXComponent=!0},62272:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/4-02-jsx-conditionals-learning-card-e09984e48e1f743aab2ccc13d8dd1ba1.pdf"}}]);