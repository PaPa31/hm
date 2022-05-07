"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[89133],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={id:"10-06-displaying-spinner-while-sending-request",title:"10.06 Displaying Spinner While Sending Request",date:new Date("2021-04-13T22:28:50.000Z")},d=void 0,l={unversionedId:"react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request",id:"react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request",title:"10.06 Displaying Spinner While Sending Request",description:"Grab the Spinner",source:"@site/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request.md",sourceDirName:"react-complete-guide/10-burger-builder-project-accessing-server",slug:"/react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-06-displaying-spinner-while-sending-request.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"10-06-displaying-spinner-while-sending-request",title:"10.06 Displaying Spinner While Sending Request",date:"2021-04-13T22:28:50.000Z"},sidebar:"Docs",previous:{title:"10.05 Sending Post Request",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-05-sending-post-request"},next:{title:"10.07 Handling Errors",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-07-handling-errors"}},c={},p=[{value:"Grab the Spinner",id:"grab-the-spinner",level:2},{value:"New Spinner.js",id:"new-spinnerjs",level:2},{value:"New Spinner.module.css",id:"new-spinnermodulecss",level:2},{value:"BurgerBuilder.js",id:"burgerbuilderjs",level:2},{value:"Modal.js",id:"modaljs",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"grab-the-spinner"},"Grab the Spinner"),(0,a.kt)("a",{href:"https://projects.lukehaas.me/css-loaders/",class:"external"},"projects.lukehaas.me: CSS Loaders"),(0,a.kt)("h2",{id:"new-spinnerjs"},"New Spinner.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Spinner.js" {}',title:'"Spinner.js"',"{}":!0},'import React from "react";\nimport classes from "./Spinner.module.css";\n\nconst spinner = () => <div className={classes.Loader}>Loading...</div>;\n\nexport default spinner;\n')),(0,a.kt)("h2",{id:"new-spinnermodulecss"},"New Spinner.module.css"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Change all ",(0,a.kt)("inlineCode",{parentName:"p"},".loader"),"s to ",(0,a.kt)("inlineCode",{parentName:"p"},".Loader"),"s. And don't forget to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," keyword to the filename."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Spinner.module.css" {}',title:'"Spinner.module.css"',"{}":!0},'.Loader,\n.Loader:before,\n.Loader:after {\n  border-radius: 50%;\n}\n.Loader {\n  color: #521751;\n  font-size: 11px;\n  text-indent: -99999em;\n  margin: 55px auto;\n  position: relative;\n  width: 10em;\n  height: 10em;\n  box-shadow: inset 0 0 0 1em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.Loader:before,\n.Loader:after {\n  position: absolute;\n  content: "";\n}\n.Loader:before {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 10.2em 0 0 10.2em;\n  top: -0.1em;\n  left: -0.1em;\n  -webkit-transform-origin: 5.1em 5.1em;\n  transform-origin: 5.1em 5.1em;\n  -webkit-animation: load2 2s infinite ease 1.5s;\n  animation: load2 2s infinite ease 1.5s;\n}\n.Loader:after {\n  width: 5.2em;\n  height: 10.2em;\n  background: #fff;\n  border-radius: 0 10.2em 10.2em 0;\n  top: -0.1em;\n  left: 4.9em;\n  -webkit-transform-origin: 0.1em 5.1em;\n  transform-origin: 0.1em 5.1em;\n  -webkit-animation: load2 2s infinite ease;\n  animation: load2 2s infinite ease;\n}\n@-webkit-keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load2 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n')),(0,a.kt)("h2",{id:"burgerbuilderjs"},"BurgerBuilder.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {7,31,86,103-108,119-130,138}',title:'"BurgerBuilder.js"',"{7,31,86,103-108,119-130,138}":!0},'import React, { Component, Fragment } from "react";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    ingredients: {\n      salad: 0,\n      bacon: 0,\n      cheese: 0,\n      meat: 0,\n    },\n    totalPrice: 4,\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n  };\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    this.setState({ purchasable: sum > 0 });\n  }\n\n  addIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    const updateCount = oldCount + 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceAddition = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice + priceAddition;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  removeIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    if (oldCount <= 0) {\n      return;\n    }\n    const updateCount = oldCount - 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceDeduction = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice - priceDeduction;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    // alert("You continue!");\n    this.setState({ loading: true });\n    const order = {\n      ingredients: this.state.ingredients,\n      price: this.state.totalPrice,\n      customer: {\n        name: "Pash Pa",\n        address: {\n          street: "Teststreet 1",\n          zipCode: "34234",\n          country: "Russia",\n        },\n        email: "test@test.com",\n      },\n      deliveryMethod: "fastest",\n    };\n    axios\n      .post("/orders.json", order)\n      .then((response) => {\n        this.setState({ loading: false, purchasing: false });\n      })\n      .catch((error) => {\n        this.setState({ loading: false, purchasing: false });\n      });\n  };\n  render() {\n    const disabledInfo = {\n      ...this.state.ingredients,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n\n    let orderSummary = (\n      <OrderSummary\n        ingredients={this.state.ingredients}\n        purchaseCancelled={this.purchaseCancelHandler}\n        purchaseContinued={this.purchaseContinueHandler}\n        price={this.state.totalPrice}\n      />\n    );\n\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n\n        <Burger ingredients={this.state.ingredients} />\n        <BuildControls\n          ingredientAdded={this.addIngredientHandler}\n          ingredientRemoved={this.removeIngredientHandler}\n          disabled={disabledInfo}\n          purchasable={this.state.purchasable}\n          ordered={this.purchaseHandler}\n          price={this.state.totalPrice}\n        />\n      </Fragment>\n    );\n  }\n}\nexport default BurgerBuilder;\n')),(0,a.kt)("h2",{id:"modaljs"},"Modal.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Modal.js" {7-10}',title:'"Modal.js"',"{7-10}":!0},'import React, { Component, Fragment } from "react";\nimport Backdrop from "../Backdrop/Backdrop";\nimport classes from "./Modal.module.css";\n\nclass Modal extends Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    return (\n      nextProps.show !== this.props.show ||\n      nextProps.children !== this.props.children\n    );\n  }\n\n  componentWillUpdate() {\n    console.log("[Modal] WillUpdate");\n  }\n  render() {\n    return (\n      <Fragment>\n        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />\n        <div\n          className={classes.Modal}\n          style={{\n            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",\n            opacity: this.props.show ? "1" : "0",\n          }}\n        >\n          {this.props.children}\n        </div>\n      </Fragment>\n    );\n  }\n}\n\nexport default Modal;\n')))}m.isMDXComponent=!0}}]);