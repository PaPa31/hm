"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[64544],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,y=d["".concat(u,".").concat(m)]||d[m]||l[m]||c;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],s={id:"14-17-outsourcing-action-types",title:"14.17 Outsourcing Action Types",date:new Date("2021-04-26T21:52:57.000Z")},u=void 0,i={unversionedId:"react-complete-guide/14-redux/14-17-outsourcing-action-types",id:"react-complete-guide/14-redux/14-17-outsourcing-action-types",title:"14.17 Outsourcing Action Types",description:"New actions.js",source:"@site/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-17-outsourcing-action-types",permalink:"/hm/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-17-outsourcing-action-types.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-17-outsourcing-action-types",title:"14.17 Outsourcing Action Types",date:"2021-04-26T21:52:57.000Z"},sidebar:"Docs",previous:{title:"14.16 Immutable Update Patterns",permalink:"/hm/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns"},next:{title:"14.18 Combining Multiple Reducers",permalink:"/hm/courses/react-complete-guide/14-redux/14-18-combining-multiple-reducers"}},p=[{value:"New <code>actions.js</code>",id:"new-actionsjs",children:[],level:2},{value:"<code>Counter.js</code>",id:"counterjs",children:[],level:2},{value:"<code>reducer.js</code>",id:"reducerjs",children:[],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"new-actionsjs"},"New ",(0,c.kt)("inlineCode",{parentName:"h2"},"actions.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="actions.js" {}',title:'"actions.js"',"{}":!0},'export const INCREMENT = "INCREMENT";\nexport const DECREMENT = "DECREMENT";\nexport const ADD = "ADD";\nexport const SUBTRACT = "SUBTRACT";\nexport const STORE_RESULT = "STORE_RESULT";\nexport const DELETE_RESULT = "DELETE_RESULT";\n')),(0,c.kt)("h2",{id:"counterjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {5,51-57}',title:'"Counter.js"',"{5,51-57}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\nimport * as actionTypes from "../../store/actions";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={this.props.onStoreResult}>Store Result</button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li\n              key={strResult.id}\n              onClick={() => this.props.onDeleteResult(strResult.id)}\n            >\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n    storedResults: state.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),\n    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),\n    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),\n    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),\n    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),\n    onDeleteResult: (id) =>\n      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,c.kt)("h2",{id:"reducerjs"},(0,c.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {1,10,14,20,26,31,36}',title:'"reducer.js"',"{1,10,14,20,26,31,36}":!0},'import * as actionTypes from "./actions";\n\nconst initialState = {\n  counter: 0,\n  results: [],\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.INCREMENT:\n      const newState = Object.assign({}, state);\n      newState.counter = state.counter + 1;\n      return newState;\n    case actionTypes.DECREMENT:\n      return {\n        ...state,\n        counter: state.counter - 1,\n      };\n\n    case actionTypes.ADD:\n      return {\n        ...state,\n        counter: state.counter + action.value,\n      };\n\n    case actionTypes.SUBTRACT:\n      return {\n        ...state,\n        counter: state.counter - action.value,\n      };\n    case actionTypes.STORE_RESULT:\n      return {\n        ...state,\n        results: state.results.concat({ id: new Date(), value: state.counter }),\n      };\n    case actionTypes.DELETE_RESULT:\n      // const id = 2;\n      // const newArray = [...state.results];\n      // newArray.splice(id, 1);\n      const updatedArray = state.results.filter(\n        (result) => result.id !== action.resultElId\n      );\n      return {\n        ...state,\n        // results: newArray,\n        results: updatedArray,\n      };\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')))}d.isMDXComponent=!0}}]);