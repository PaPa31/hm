"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[48720],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75489:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=n(37358),i=n(98448),u=["components"],l={id:"14-09-connecting-store-to-react",title:"14.09 Connecting Store To React",date:new Date("2021-04-22T00:18:54.000Z")},s=void 0,d={unversionedId:"react-complete-guide/14-redux/14-09-connecting-store-to-react",id:"react-complete-guide/14-redux/14-09-connecting-store-to-react",isDocsHomePage:!1,title:"14.09 Connecting Store To React",description:"Installing react-redux",source:"@site/courses/react-complete-guide/14-redux/14-09-connecting-store-to-react.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-09-connecting-store-to-react",permalink:"/hm/courses/react-complete-guide/14-redux/14-09-connecting-store-to-react",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-09-connecting-store-to-react.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-09-connecting-store-to-react",title:"14.09 Connecting Store To React",date:"2021-04-22T00:18:54.000Z"},sidebar:"Docs",previous:{title:"14.08 Connecting React To Redux",permalink:"/hm/courses/react-complete-guide/14-redux/14-08-connecting-react-to-redux"},next:{title:"14.10 Dispatching Actions From Within Component",permalink:"/hm/courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component"}},p=[{value:"Installing <code>react-redux</code>",id:"installing-react-redux",children:[]},{value:"<code>index.js</code>",id:"indexjs",children:[]},{value:"<code>Counter.js</code>",id:"counterjs",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-react-redux"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"react-redux")),(0,a.kt)(c.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-redux\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-redux\n")))),(0,a.kt)("h2",{id:"indexjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js" {3,13,15}',title:'"index.js"',"{3,13,15}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { Provider } from "react-redux";\nimport { createStore } from "redux";\nimport App from "./App";\nimport "./index.css";\nimport registerServiceWorker from "./registerServiceWorker";\nimport reducer from "./store/reducer";\n\nconst store = createStore(reducer);\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\nregisterServiceWorker();\n')),(0,a.kt)("h2",{id:"counterjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {2,39,61-65,67}',title:'"Counter.js"',"{2,39,61-65,67}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\n\nclass Counter extends Component {\n  state = {\n    counter: 0,\n  };\n\n  counterChangedHandler = (action, value) => {\n    switch (action) {\n      case "inc":\n        this.setState((prevState) => {\n          return { counter: prevState.counter + 1 };\n        });\n        break;\n      case "dec":\n        this.setState((prevState) => {\n          return { counter: prevState.counter - 1 };\n        });\n        break;\n      case "add":\n        this.setState((prevState) => {\n          return { counter: prevState.counter + value };\n        });\n        break;\n      case "sub":\n        this.setState((prevState) => {\n          return { counter: prevState.counter - value };\n        });\n        break;\n    }\n  };\n\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={() => this.counterChangedHandler("inc")}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={() => this.counterChangedHandler("dec")}\n        />\n        <CounterControl\n          label="Add 5"\n          clicked={() => this.counterChangedHandler("add", 5)}\n        />\n        <CounterControl\n          label="Subtract 5"\n          clicked={() => this.counterChangedHandler("sub", 5)}\n        />\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n  };\n};\n\nexport default connect(mapStateToProps)(Counter);\n')))}f.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),o=n(22713);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(86010),i="tabItem_1uMI",u="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,o=e.block,l=e.defaultValue,s=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=a(),h=g.tabGroupChoices,b=g.setTabGroupChoices,C=(0,r.useState)(v),x=C[0],y=C[1],k=[];if(null!=d){var O=h[d];null!=O&&O!==x&&f.some((function(e){return e.value===O}))&&y(O)}var j=function(e){var t=e.currentTarget,n=k.indexOf(t),r=f[n].value;y(r),null!=d&&(b(d,r),setTimeout((function(){var e,n,r,o,a,c,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,c=window,i=c.innerHeight,l=c.innerWidth,n>=0&&a<=l&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":x===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:S,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);