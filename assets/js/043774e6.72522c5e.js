"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[36597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,C=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(C,a(a({ref:t},l),{},{components:n})):r.createElement(C,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={id:"16-08-restructuring-actions",title:"16.08 Restructuring Actions",date:new Date("2021-07-14T14:58:01.000Z")},a=void 0,c={unversionedId:"react-complete-guide/16-redux-advanced/16-08-restructuring-actions",id:"react-complete-guide/16-redux-advanced/16-08-restructuring-actions",title:"16.08 Restructuring Actions",description:"Counter.js",source:"@site/courses/react-complete-guide/16-redux-advanced/16-08-restructuring-actions.md",sourceDirName:"react-complete-guide/16-redux-advanced",slug:"/react-complete-guide/16-redux-advanced/16-08-restructuring-actions",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-08-restructuring-actions",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/16-redux-advanced/16-08-restructuring-actions.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"16-08-restructuring-actions",title:"16.08 Restructuring Actions",date:"2021-07-14T14:58:01.000Z"},sidebar:"Courses",previous:{title:"16.07 Handling Asynchronous Code",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-07-handling-asynchronous-code"},next:{title:"16.09 Where To Put Data Transforming Logic",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-09-where-to-put-data-transforming-logic"}},i={},u=[{value:"<code>Counter.js</code>",id:"counterjs",level:2},{value:"New <code>actionTypes.js</code>",id:"new-actiontypesjs",level:2},{value:"New <code>counter.js</code>",id:"new-counterjs",level:2},{value:"New <code>result.js</code>",id:"new-resultjs",level:2},{value:"New <code>index.js</code>",id:"new-indexjs",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"counterjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Counter\\Counter.js" {5}',title:'"src\\containers\\Counter\\Counter.js"',"{5}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\nimport * as actionCreators from "../../store/actions/index";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>\n          Store Result\n        </button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li\n              key={strResult.id}\n              onClick={() => this.props.onDeleteResult(strResult.id)}\n            >\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.ctr.counter,\n    storedResults: state.res.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch(actionCreators.increment()),\n    onDecrementCounter: () => dispatch(actionCreators.decrement()),\n    onAddCounter: () => dispatch(actionCreators.add(5)),\n    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),\n    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),\n    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,o.kt)("h2",{id:"new-actiontypesjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"actionTypes.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\actionTypes.js" {}',title:'"src\\store\\actions\\actionTypes.js"',"{}":!0},'export const INCREMENT = "INCREMENT";\nexport const DECREMENT = "DECREMENT";\nexport const ADD = "ADD";\nexport const SUBTRACT = "SUBTRACT";\nexport const STORE_RESULT = "STORE_RESULT";\nexport const DELETE_RESULT = "DELETE_RESULT";\n')),(0,o.kt)("h2",{id:"new-counterjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"counter.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\counter.js" {}',title:'"src\\store\\actions\\counter.js"',"{}":!0},'import * as actionTypes from "./actionTypes";\nexport const increment = () => {\n  return {\n    type: actionTypes.INCREMENT,\n  };\n};\n\nexport const decrement = () => {\n  return {\n    type: actionTypes.DECREMENT,\n  };\n};\n\nexport const add = (value) => {\n  return {\n    type: actionTypes.ADD,\n    value: value,\n  };\n};\n\nexport const subtract = (value) => {\n  return {\n    type: actionTypes.SUBTRACT,\n    value: value,\n  };\n};\n')),(0,o.kt)("h2",{id:"new-resultjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"result.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\result.js" {}',title:'"src\\store\\actions\\result.js"',"{}":!0},'import * as actionTypes from "./actionTypes";\n\nexport const saveResult = (res) => {\n  return {\n    type: actionTypes.STORE_RESULT,\n    result: res,\n  };\n};\n\nexport const storeResult = (res) => {\n  return (dispatch) => {\n    setTimeout(() => {\n      dispatch(saveResult(res));\n    }, 2000);\n  };\n};\n\nexport const deleteResult = (resElId) => {\n  return {\n    type: actionTypes.DELETE_RESULT,\n    resultElId: resElId,\n  };\n};\n')),(0,o.kt)("h2",{id:"new-indexjs"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\index.js" {}',title:'"src\\store\\actions\\index.js"',"{}":!0},'export { add, decrement, increment, subtract } from "./counter";\nexport { deleteResult, storeResult } from "./result";\n')))}p.isMDXComponent=!0}}]);