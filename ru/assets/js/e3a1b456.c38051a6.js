"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[85192],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,C=p["".concat(u,".").concat(m)]||p[m]||l[m]||c;return n?r.createElement(C,a(a({ref:t},d),{},{components:n})):r.createElement(C,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],s={id:"16-06-action-creators-and-async-code",title:"16.06 Action Creators And Async Code",date:new Date("2021-07-14T12:06:14.000Z")},u=void 0,i={unversionedId:"react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code",id:"react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code",title:"16.06 Action Creators And Async Code",description:"actions.js",source:"@site/courses/react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code.md",sourceDirName:"react-complete-guide/16-redux-advanced",slug:"/react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/16-redux-advanced/16-06-action-creators-and-async-code.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"16-06-action-creators-and-async-code",title:"16.06 Action Creators And Async Code",date:"2021-07-14T12:06:14.000Z"},sidebar:"Docs",previous:{title:"16.05 Introducing Action Creators",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-05-Introducing-action-creators"},next:{title:"16.07 Handling Asynchronous Code",permalink:"/hm/ru/courses/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code"}},d={},l=[{value:"<code>actions.js</code>",id:"actionsjs",level:2},{value:"<code>Counter.js</code>",id:"counterjs",level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"actionsjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"actions.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="actions.js" {14-46}',title:'"actions.js"',"{14-46}":!0},'export const INCREMENT = "INCREMENT";\nexport const DECREMENT = "DECREMENT";\nexport const ADD = "ADD";\nexport const SUBTRACT = "SUBTRACT";\nexport const STORE_RESULT = "STORE_RESULT";\nexport const DELETE_RESULT = "DELETE_RESULT";\n\nexport const increment = () => {\n  return {\n    type: INCREMENT,\n  };\n};\n\nexport const decrement = () => {\n  return {\n    type: DECREMENT,\n  };\n};\n\nexport const add = (value) => {\n  return {\n    type: ADD,\n    value: value,\n  };\n};\n\nexport const subtract = (value) => {\n  return {\n    type: SUBTRACT,\n    value: value,\n  };\n};\n\nexport const storeResult = (res) => {\n  return {\n    type: STORE_RESULT,\n    result: res,\n  };\n};\n\nexport const deleteResult = (resElId) => {\n  return {\n    type: DELETE_RESULT,\n    resultElId: resElId,\n  };\n};\n')),(0,c.kt)("h2",{id:"counterjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {5,53-58}',title:'"Counter.js"',"{5,53-58}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\nimport * as actionCreators from "../../store/actions/actions";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>\n          Store Result\n        </button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li\n              key={strResult.id}\n              onClick={() => this.props.onDeleteResult(strResult.id)}\n            >\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.ctr.counter,\n    storedResults: state.res.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch(actionCreators.increment()),\n    onDecrementCounter: () => dispatch(actionCreators.decrement()),\n    onAddCounter: () => dispatch(actionCreators.add(5)),\n    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),\n    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),\n    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')))}m.isMDXComponent=!0}}]);