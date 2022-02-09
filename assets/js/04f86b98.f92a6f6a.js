"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[75631],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||c;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28128:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={id:"14-10-dispatching-actions-from-within-component",title:"14.10 Dispatching Actions From Within Component",date:new Date("2021-04-24T19:44:48.000Z")},u=void 0,p={unversionedId:"react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component",id:"react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component",title:"14.10 Dispatching Actions From Within Component",description:"Counter.js",source:"@site/courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component",permalink:"/hm/courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-10-dispatching-actions-from-within-component.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-10-dispatching-actions-from-within-component",title:"14.10 Dispatching Actions From Within Component",date:"2021-04-24T19:44:48.000Z"},sidebar:"Docs",previous:{title:"14.09 Connecting Store To React",permalink:"/hm/courses/react-complete-guide/14-redux/14-09-connecting-store-to-react"},next:{title:"14.11 Practice",permalink:"/hm/courses/react-complete-guide/14-redux/14-11-practice"}},s=[{value:"<code>Counter.js</code>",id:"counterjs",children:[],level:2},{value:"<code>reducer.js</code>",id:"reducerjs",children:[],level:2}],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"counterjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {42,67-72}',title:'"Counter.js"',"{42,67-72}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\n\nclass Counter extends Component {\n  state = {\n    counter: 0,\n  };\n\n  counterChangedHandler = (action, value) => {\n    switch (action) {\n      case "inc":\n        this.setState((prevState) => {\n          return { counter: prevState.counter + 1 };\n        });\n        break;\n      case "dec":\n        this.setState((prevState) => {\n          return { counter: prevState.counter - 1 };\n        });\n        break;\n      case "add":\n        this.setState((prevState) => {\n          return { counter: prevState.counter + value };\n        });\n        break;\n      case "sub":\n        this.setState((prevState) => {\n          return { counter: prevState.counter - value };\n        });\n        break;\n    }\n  };\n\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={() => this.counterChangedHandler("dec")}\n        />\n        <CounterControl\n          label="Add 5"\n          clicked={() => this.counterChangedHandler("add", 5)}\n        />\n        <CounterControl\n          label="Subtract 5"\n          clicked={() => this.counterChangedHandler("sub", 5)}\n        />\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,c.kt)("h2",{id:"reducerjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {6-10}',title:'"reducer.js"',"{6-10}":!0},'const initialState = {\n  counter: 0,\n};\n\nconst reducer = (state = initialState, action) => {\n  if (action.type === "INCREMENT") {\n    return {\n      counter: state.counter + 1,\n    };\n  }\n  return state;\n};\n\nexport default reducer;\n')))}d.isMDXComponent=!0}}]);