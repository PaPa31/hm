"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[22749],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(37358),o=n(98448),l=["components"],c={id:"4-12-practice-solution",title:"4.12 Practice - Solution",date:new Date("2021-04-03T14:38:51.000Z")},u=void 0,p={unversionedId:"react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution",id:"react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution",isDocsHomePage:!1,title:"4.12 Practice - Solution",description:"Folder Structure",source:"@site/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution.md",sourceDirName:"react-complete-guide/04-lists-and-conditionals/Lessons",slug:"/react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-12-practice-solution.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"4-12-practice-solution",title:"4.12 Practice - Solution",date:"2021-04-03T14:38:51.000Z"},sidebar:"Docs",previous:{title:"4.09 Flexible Lists",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-09-flexible-lists"},next:{title:"4.13 Useful Resources",permalink:"/hm/courses/react-complete-guide/04-lists-and-conditionals/Lessons/4-13-useful-resources"}},d=[{value:"Folder Structure",id:"folder-structure",children:[]},{value:"App.js",id:"appjs",children:[]},{value:"Validation.js",id:"validationjs",children:[]},{value:"Char.js",id:"charjs",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u2502\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 App.js\n\u2502\n\u251c\u2500\u2500 Validation\n\u2502\xa0\xa0 \u2514\u2500\u2500 Validation.js\n\u2502\n\u251c\u2500\u2500 Char\n\u2502\xa0\xa0 \u2514\u2500\u2500 Char.js\n\u2502\n")),(0,i.kt)("h2",{id:"appjs"},"App.js"),(0,i.kt)(s.Z,{defaultValue:"setstate",values:[{label:"setState",value:"setstate"},{label:"useState()",value:"usestate"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"setstate",mdxType:"TabItem"},(0,i.kt)("a",{href:"https://github.com/PaPa31/react-complete-guide/commit/58521730943a1da5208c261554e75c3ae0ed155d",class:"external"},"github.com: Practice-4-1 (branch), last commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React, { Component } from "react";\nimport "./App.css";\nimport Char from "./Char/Char";\nimport Validation from "./Validation/Validation";\n\nclass App extends Component {\n  state = {\n    userInput: "",\n  };\n  inputChangeHandler = (event) => {\n    this.setState({\n      userInput: event.target.value,\n    });\n  };\n  deleteCharHandler = (charIndex) => {\n    const text = this.state.userInput.split("");\n    text.splice(charIndex, 1);\n    const updatedText = text.join("");\n    this.setState({\n      userInput: updatedText,\n    });\n  };\n  render() {\n    const userText = this.state.userInput.split("").map((ch, index) => {\n      return (\n        <Char\n          char={ch}\n          key={index}\n          clicked={() => this.deleteCharHandler(index)}\n        />\n      );\n    });\n    return (\n      <div className="App">\n        <input\n          type="text"\n          value={this.state.userInput}\n          onChange={(event) => this.inputChangeHandler(event)}\n        />\n        <p>{this.state.userInput.length}</p>\n        <Validation inputLength={this.state.userInput.length} />\n        {userText}\n      </div>\n    );\n  }\n}\n\nexport default App;\n'))),(0,i.kt)(o.Z,{value:"usestate",mdxType:"TabItem"},(0,i.kt)("a",{href:"https://github.com/PaPa31/react-complete-guide/commit/bce166b0b17ed921e944a82580a366a9b17a9ca9",class:"external"},"github.com: useState-4-1 (branch), last commit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React, { useState } from "react";\nimport "./App.css";\nimport Char from "./Char/Char";\nimport Validation from "./Validation/Validation";\n\nconst app = () => {\n  const [inputUserState, setInputUserState] = useState({\n    userInput: "",\n  });\n  const changeInputHandler = (event) => {\n    setInputUserState({\n      userInput: event.target.value,\n    });\n  };\n  const deleteCharHandler = (charIndex) => {\n    const text = inputUserState.userInput.split("");\n    text.splice(charIndex, 1);\n    const updatedText = text.join("");\n    setInputUserState({\n      userInput: updatedText,\n    });\n  };\n  const userText = inputUserState.userInput.split("").map((ch, index) => {\n    return (\n      <Char char={ch} key={index} clicked={() => deleteCharHandler(index)} />\n    );\n  });\n  return (\n    <div className="App">\n      <input\n        type="text"\n        onChange={(event) => changeInputHandler(event)}\n        value={inputUserState.userInput}\n      />\n      <p>{inputUserState.userInput.length}</p>\n      <Validation textLength={inputUserState.userInput.length} />\n      {userText}\n    </div>\n  );\n};\n\nexport default app;\n')))),(0,i.kt)("h2",{id:"validationjs"},"Validation.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Validation.js"',title:'"Validation.js"'},'import React from "react";\n\nconst validation = (props) => {\n  let validationMessage = "Text too short";\n  if (props.textLength > 5) validationMessage = "Text long enough";\n  return (\n    <div>\n      <p>{validationMessage}</p>\n    </div>\n  );\n};\n\nexport default validation;\n')),(0,i.kt)("h2",{id:"charjs"},"Char.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Char.js"',title:'"Char.js"'},'import React from "react";\n\nconst char = (props) => {\n  const style = {\n    display: "inline-block",\n    padding: "16px",\n    textAlign: "center",\n    margin: "16px",\n    border: "1px solid #ccc",\n    cursor: "pointer",\n  };\n  return (\n    <div style={style} onClick={props.clicked}>\n      {props.char}\n    </div>\n  );\n};\n\nexport default char;\n')))}h.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(22713);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),g=v.tabGroupChoices,b=v.setTabGroupChoices,x=(0,r.useState)(f),y=x[0],j=x[1],k=[];if(null!=p){var C=g[p];null!=C&&C!==y&&h.some((function(e){return e.value===C}))&&j(C)}var I=function(e){var t=e.currentTarget,n=k.indexOf(t),r=h[n].value;j(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,i,s,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,s=window,o=s.innerHeight,c=s.innerWidth,n>=0&&i<=c&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case"ArrowLeft":var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},d)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:I,onClick:I},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);