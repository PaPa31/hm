"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[30848],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,u(u({ref:t},l),{},{components:n})):r.createElement(y,u({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],s={id:"14-15-updating-arrays-immutably",title:"14.15 Updating Arrays Immutably",date:new Date("2021-04-26T20:52:32.000Z")},c=void 0,i={unversionedId:"react-complete-guide/14-redux/14-15-updating-arrays-immutably",id:"react-complete-guide/14-redux/14-15-updating-arrays-immutably",title:"14.15 Updating Arrays Immutably",description:"Two ways. The first is displayed in the reduser.js below in the commented out lines.",source:"@site/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably.md",sourceDirName:"react-complete-guide/14-redux",slug:"/react-complete-guide/14-redux/14-15-updating-arrays-immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/14-redux/14-15-updating-arrays-immutably.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"14-15-updating-arrays-immutably",title:"14.15 Updating Arrays Immutably",date:"2021-04-26T20:52:32.000Z"},sidebar:"Docs",previous:{title:"14.14 Updating State Immutably",permalink:"/hm/courses/react-complete-guide/14-redux/14-14-updating-state-immutably"},next:{title:"14.16 Immutable Update Patterns",permalink:"/hm/courses/react-complete-guide/14-redux/14-16-immutable-update-patterns"}},l={},p=[{value:"<code>Counter.js</code>",id:"counterjs",level:2},{value:"<code>reducer.js</code>",id:"reducerjs",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Two ways. The first is displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"reduser.js")," below in the commented out lines."),(0,o.kt)("h2",{id:"counterjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Counter.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js" {28-31,55}',title:'"Counter.js"',"{28-31,55}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport CounterControl from "../../components/CounterControl/CounterControl";\nimport CounterOutput from "../../components/CounterOutput/CounterOutput";\n\nclass Counter extends Component {\n  render() {\n    return (\n      <div>\n        <CounterOutput value={this.props.ctr} />\n        <CounterControl\n          label="Increment"\n          clicked={this.props.onIncrementCounter}\n        />\n        <CounterControl\n          label="Decrement"\n          clicked={this.props.onDecrementCounter}\n        />\n        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />\n        <CounterControl\n          label="Subtract 5"\n          clicked={this.props.onSubtractCounter}\n        />\n        <hr />\n        <button onClick={this.props.onStoreResult}>Store Result</button>\n        <ul>\n          {this.props.storedResults.map((strResult) => (\n            <li\n              key={strResult.id}\n              onClick={() => this.props.onDeleteResult(strResult.id)}\n            >\n              {strResult.value}\n            </li>\n          ))}\n        </ul>\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ctr: state.counter,\n    storedResults: state.results,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),\n    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),\n    onAddCounter: () => dispatch({ type: "ADD", value: 5 }),\n    onSubtractCounter: () => dispatch({ type: "SUBTRACT", value: 5 }),\n    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),\n    onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElId: id }),\n  };\n};\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter);\n')),(0,o.kt)("h2",{id:"reducerjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {34-45}',title:'"reducer.js"',"{34-45}":!0},'const initialState = {\n  counter: 0,\n  results: [],\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "INCREMENT":\n      const newState = Object.assign({}, state);\n      newState.counter = state.counter + 1;\n      return newState;\n    case "DECREMENT":\n      return {\n        ...state,\n        counter: state.counter - 1,\n      };\n\n    case "ADD":\n      return {\n        ...state,\n        counter: state.counter + action.value,\n      };\n\n    case "SUBTRACT":\n      return {\n        ...state,\n        counter: state.counter - action.value,\n      };\n    case "STORE_RESULT":\n      return {\n        ...state,\n        results: state.results.concat({ id: new Date(), value: state.counter }),\n      };\n    case "DELETE_RESULT":\n      // const id = 2;\n      // const newArray = [...state.results];\n      // newArray.splice(id, 1);\n      const updatedArray = state.results.filter(\n        (result) => result.id !== action.resultElId\n      );\n      return {\n        ...state,\n        // results: newArray,\n        results: updatedArray,\n      };\n    default:\n  }\n  return state;\n};\n\nexport default reducer;\n')))}m.isMDXComponent=!0}}]);