"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[97208],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(t),g=a,m=l["".concat(u,".").concat(g)]||l[g]||p[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},12289:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"12-06-passing-ingredients-via-query-params",title:"12.06 Passing Ingredients Via Query Params",date:new Date("2021-04-19T22:41:16.000Z")},u=void 0,s={unversionedId:"react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params",id:"react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params",title:"12.06 Passing Ingredients Via Query Params",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params.md",sourceDirName:"react-complete-guide/12-adding-routing-to-burger-project",slug:"/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/12-adding-routing-to-burger-project/12-06-passing-ingredients-via-query-params.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"12-06-passing-ingredients-via-query-params",title:"12.06 Passing Ingredients Via Query Params",date:"2021-04-19T22:41:16.000Z"},sidebar:"Docs",previous:{title:"12.05 Navigation Back And To Next Page",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-05-navigation-back-and-to-next-page"},next:{title:"12.07 Navigating To Contact Data Component",permalink:"/hm/courses/react-complete-guide/12-adding-routing-to-burger-project/12-07-navigating-to-contact-data-component"}},d={},p=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",level:2},{value:"<code>Checkout.js</code>",id:"checkoutjs",level:2}],l={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"burgerbuilderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {8-21}',title:'"BurgerBuilder.js"',"{8-21}":!0},'\n...\n\n  purchaseContinueHandler = () => {\n\n...\n\n    const queryParams = [];\n    for (let i in this.state.ingredients) {\n      queryParams.push(\n        encodeURIComponent(i) +\n          "=" +\n          encodeURIComponent(this.state.ingredients[i])\n      );\n    }\n    const queryString = queryParams.join("&");\n\n    this.props.history.push({\n      pathname: "/checkout",\n      search: "?" + queryString,\n    });\n  };\n  render() {\n\n...\n\n')),(0,i.kt)("h2",{id:"checkoutjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Checkout.js" {14-21}',title:'"Checkout.js"',"{14-21}":!0},'import React, { Component } from "react";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\n\nclass Checkout extends Component {\n  state = {\n    ingredients: {\n      salad: 1,\n      meat: 1,\n      cheese: 1,\n      bacon: 1,\n    },\n  };\n\n  componentDidMount() {\n    const query = new URLSearchParams(this.props.location.search);\n    const ingredients = {};\n    for (let param of query.entries()) {\n      ingredients[param[0]] = +param[1];\n    }\n    this.setState({ ingredients: ingredients });\n  }\n\n  checkoutCancelledHandler = () => {\n    this.props.history.goBack();\n  };\n\n  checkoutContinuedHandler = () => {\n    this.props.history.replace("/checkout/contact-data");\n  };\n  render() {\n    return (\n      <div>\n        <CheckoutSummary\n          ingredients={this.state.ingredients}\n          checkoutCancelled={this.checkoutCancelledHandler}\n          checkoutContinued={this.checkoutContinuedHandler}\n        />\n      </div>\n    );\n  }\n}\nexport default Checkout;\n')))}g.isMDXComponent=!0}}]);