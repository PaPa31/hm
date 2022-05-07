"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[24322],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(t),m=o,f=l["".concat(d,".").concat(m)]||l[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},96996:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"18-11-accessing-protected-resources",title:"18.11 Accessing Protected Resources",date:new Date("2021-07-21T17:42:04.000Z")},d=void 0,c={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources",title:"18.11 Accessing Protected Resources",description:"Realtime Database (Firebase)",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-11-accessing-protected-resources.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"18-11-accessing-protected-resources",title:"18.11 Accessing Protected Resources",date:"2021-07-21T17:42:04.000Z"},sidebar:"Docs",previous:{title:"18.10 Logging Users Out",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-10-logging-users-out"},next:{title:"18.12 Updating the UI Depending on Auth State",permalink:"/hm/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-12-updating-the-ui-depending-on-auth-state"}},u={},p=[{value:"Realtime Database (Firebase)",id:"realtime-database-firebase",level:2},{value:"Fix <code>actions/burgerBuilder.js</code>",id:"fix-actionsburgerbuilderjs",level:2},{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2},{value:"<code>Orders.js</code>",id:"ordersjs",level:2},{value:"<code>actions/order.js</code>",id:"actionsorderjs",level:2}],l={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"realtime-database-firebase"},"Realtime Database (Firebase)"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{href:"https://console.firebase.google.com/u/0/project/react-burger-bf7e8/database/react-burger-bf7e8-default-rtdb/rules",class:"external"},"console.firebase.google.com: Rules")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": {\n      "ingredients": {\n        ".read": "true",\n        ".write": "true"\n      },\n      "orders": {\n        ".read": "auth != null",\n        ".write": "auth != null"\n      }\n  }\n}\n')),(0,a.kt)("h2",{id:"fix-actionsburgerbuilderjs"},"Fix ",(0,a.kt)("inlineCode",{parentName:"h2"},"actions/burgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\burgerBuilder.js" {25,35,41}',title:'"src\\store\\actions\\burgerBuilder.js"',"{25,35,41}":!0},'import axios from "../../axios-orders";\nimport * as actionTypes from "./actionTypes";\n\nexport const addIngredient = (name) => {\n  return {\n    type: actionTypes.ADD_INGREDIENT,\n    ingredientName: name,\n  };\n};\n\nexport const removeIngredient = (name) => {\n  return {\n    type: actionTypes.REMOVE_INGREDIENT,\n    ingredientName: name,\n  };\n};\n\nexport const setIngredients = (ingredients) => {\n  return {\n    type: actionTypes.SET_INGREDIENTS,\n    ingredients: ingredients,\n  };\n};\n\nexport const fetchIngredientsFailed = () => {\n  return {\n    type: actionTypes.FETCH_INGREDIENTS_FAILED,\n  };\n};\n\nexport const initIngredients = () => {\n  return (dispatch) => {\n    axios\n      .get(\n        "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"\n      )\n      .then((response) => {\n        dispatch(setIngredients(response.data));\n      })\n      .catch((error) => {\n        dispatch(fetchIngredientsFailed());\n      });\n  };\n};\n')),(0,a.kt)("h2",{id:"contactdatajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Checkout\\ContactData\\ContactData.js" {113,212,218-219}',title:'"src\\containers\\Checkout\\ContactData\\ContactData.js"',"{113,212,218-219}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../../store/actions/index";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "fastest",\n        valid: true,\n        validation: {\n          required: false,\n        },\n      },\n    },\n    formIsValid: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ings,\n      price: this.props.price,\n      orderData: formData,\n    };\n    this.props.onOrderBurger(order, this.props.token);\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (!rules) {\n      return true;\n    }\n\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    if (rules.isEmail) {\n      const pattern = /[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    if (rules.isNumeric) {\n      const pattern = /^\\d+$/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n\n    let formIsValid = true;\n    for (let inputIdentifier in updatedOrderForm) {\n      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;\n    }\n    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success" disabled={!this.state.formIsValid}>\n          ORDER\n        </Button>\n      </form>\n    );\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    loading: state.order.loading,\n    token: state.auth.token,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onOrderBurger: (orderData, token) =>\n      dispatch(actions.purchaseBurger(orderData, token)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(ContactData, axios));\n')),(0,a.kt)("h2",{id:"ordersjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Orders.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Orders\\Orders.js" {11,32,38}',title:'"src\\containers\\Orders\\Orders.js"',"{11,32,38}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport Order from "../../components/Order/Order";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../store/actions/index";\n\nclass Orders extends Component {\n  componentDidMount() {\n    this.props.onFetchOrders(this.props.token);\n  }\n  render() {\n    let orders = <Spinner />;\n    if (!this.props.loading) {\n      orders = this.props.orders.map((order) => (\n        <Order\n          key={order.id}\n          ingredients={order.ingredients}\n          price={order.price}\n        />\n      ));\n    }\n    return orders;\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    orders: state.order.orders,\n    loading: state.order.loading,\n    token: state.auth.token,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(Orders, axios));\n')),(0,a.kt)("h2",{id:"actionsorderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/order.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\order.js" {25,29,66-67,70}',title:'"src\\store\\actions\\order.js"',"{25,29,66-67,70}":!0},'import axios from "../../axios-orders";\nimport * as actionTypes from "./actionTypes";\n\nexport const purchaseBurgerSuccess = (id, orderData) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_SUCCESS,\n    orderId: id,\n    orderData: orderData,\n  };\n};\n\nexport const purchaseBurgerFail = (error) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_FAIL,\n    error: error,\n  };\n};\n\nexport const purchaseBurgerStart = () => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_START,\n  };\n};\n\nexport const purchaseBurger = (orderData, token) => {\n  return (dispatch) => {\n    dispatch(purchaseBurgerStart());\n    axios\n      .post("/orders.json?auth=" + token, orderData)\n      .then((response) => {\n        console.log(response.data);\n        dispatch(purchaseBurgerSuccess(response.data.name, orderData));\n      })\n      .catch((error) => {\n        dispatch(purchaseBurgerFail(error));\n      });\n  };\n};\n\nexport const purchaseInit = () => {\n  return {\n    type: actionTypes.PURCHASE_INIT,\n  };\n};\n\nexport const fetchOrdersSuccess = (orders) => {\n  return {\n    type: actionTypes.FETCH_ORDERS_SUCCESS,\n    orders: orders,\n  };\n};\n\nexport const fetchOrdersFail = (error) => {\n  return {\n    type: actionTypes.FETCH_ORDERS_FAIL,\n    error: error,\n  };\n};\n\nexport const fetchOrdersStart = () => {\n  return {\n    type: actionTypes.FETCH_ORDERS_START,\n  };\n};\n\nexport const fetchOrders = (token) => {\n  return (dispatch, getState) => {\n    dispatch(fetchOrdersStart());\n    axios\n      .get("/orders.json?auth=" + token)\n      .then((res) => {\n        const fetchedOrders = [];\n        for (let key in res.data) {\n          fetchedOrders.push({\n            ...res.data[key],\n            id: key,\n          });\n        }\n        dispatch(fetchOrdersSuccess(fetchedOrders));\n      })\n      .catch((err) => {\n        dispatch(fetchOrdersFail(err));\n      });\n  };\n};\n')))}m.isMDXComponent=!0}}]);