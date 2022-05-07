"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[52891],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(g,i(i({ref:n},s),{},{components:r})):t.createElement(g,i({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85937:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"8-38-improving-perfomance",title:"8.38 Improving Perfomance",date:new Date("2021-04-11T23:29:11.000Z")},c=void 0,l={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance",id:"react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance",title:"8.38 Improving Perfomance",description:"Converting from functional to class and editing",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-38-improving-perfomance.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-38-improving-perfomance",title:"8.38 Improving Perfomance",date:"2021-04-11T23:29:11.000Z"},sidebar:"Docs",previous:{title:"8.35 Adding Humburger Icon",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon"},next:{title:"8.42 Useful Resources And Links",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-42-useful-resources-and-links"}},s={},u=[{value:"Converting from functional to class and editing",id:"converting-from-functional-to-class-and-editing",level:2},{value:"Modal.js",id:"modaljs",level:3},{value:"OrderSummary.js",id:"ordersummaryjs",level:3}],m={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"converting-from-functional-to-class-and-editing"},"Converting from functional to class and editing"),(0,a.kt)("h3",{id:"modaljs"},"Modal.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Modal.js" {1,5-14,16,20-21,24,28-29,31}',title:'"Modal.js"',"{1,5-14,16,20-21,24,28-29,31}":!0},'import React, { Component, Fragment } from "react";\nimport Backdrop from "../Backdrop/Backdrop";\nimport classes from "./Modal.module.css";\n\nclass Modal extends Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextProps.show !== this.props.show;\n  }\n\n  componentWillUpdate() {\n    console.log("[Modal] WillUpdate");\n  }\n  render() {\n    return (\n      <Fragment>\n        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />\n        <div\n          className={classes.Modal}\n          style={{\n            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",\n            opacity: this.props.show ? "1" : "0",\n          }}\n        >\n          {this.props.children}\n        </div>\n      </Fragment>\n    );\n  }\n}\n\nexport default Modal;\n')),(0,a.kt)("h3",{id:"ordersummaryjs"},"OrderSummary.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="OrderSummary.js" {1,4-11,15,18-19,27,30,33,38-39,41}',title:'"OrderSummary.js"',"{1,4-11,15,18-19,27,30,33,38-39,41}":!0},'import React, { Component, Fragment } from "react";\nimport Button from "../../UI/Button/Button";\n\nclass OrderSummary extends Component {\n  // This could be a functional component, doesn\'t have to be a class\n  componentWillUpdate() {\n    console.log("[OrderSummary] WillUpdate");\n  }\n  render() {\n    const ingredientSummary = Object.keys(this.props.ingredients).map(\n      (igKey) => {\n        return (\n          <li key={igKey}>\n            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}\n            {this.props.ingredients[igKey]}\n          </li>\n        );\n      }\n    );\n\n    return (\n      <Fragment>\n        <h3>Your Order</h3>\n        <p>A delicious burger with the following ingredients:</p>\n        <ul>{ingredientSummary}</ul>\n        <p>\n          <strong>Total Price: {this.props.price.toFixed(2)}</strong>\n        </p>\n        <p>Continue to Checkout?</p>\n        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>\n          CANCEL\n        </Button>\n        <Button btnType="Success" clicked={this.props.purchaseContinued}>\n          CONTINUE\n        </Button>\n      </Fragment>\n    );\n  }\n}\n\nexport default OrderSummary;\n')))}d.isMDXComponent=!0}}]);