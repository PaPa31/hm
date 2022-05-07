"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[73549],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24084:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"18-20-displaying-user-specific-orders",title:"18.20 Displaying User Specific Orders",date:new Date("2021-07-22T17:00:03.000Z")},d=void 0,c={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders",title:"18.20 Displaying User Specific Orders",description:"Realtime Database (Firebase)",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders",permalink:"/hm/ru/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-20-displaying-user-specific-orders.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"18-20-displaying-user-specific-orders",title:"18.20 Displaying User Specific Orders",date:"2021-07-22T17:00:03.000Z"},sidebar:"Docs",previous:{title:"18.19 Guarding Routes",permalink:"/hm/ru/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-19-guarding-routes"},next:{title:"19.0 Lesson",permalink:"/hm/ru/courses/react-complete-guide/19-improving-our-burger-project/19-0-lesson"}},u={},l=[{value:"Realtime Database (Firebase)",id:"realtime-database-firebase",level:2},{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2},{value:"<code>Orders.js</code>",id:"ordersjs",level:2},{value:"<code>order.js</code>",id:"orderjs",level:2}],p={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"realtime-database-firebase"},"Realtime Database (Firebase)"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{href:"https://console.firebase.google.com/u/0/project/react-burger-bf7e8/database/react-burger-bf7e8-default-rtdb/rules",class:"external"},"console.firebase.google.com: Rules")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": {\n      "ingredients": {\n        ".read": "true",\n        ".write": "true"\n      },\n      "orders": {\n        ".read": "auth != null",\n        ".write": "auth != null",\n        ".indexOn": ["userId"]\n      }\n  }\n}\n')),(0,o.kt)("h2",{id:"contactdatajs"},(0,o.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Checkout\\ContactData\\ContactData.js" {112,214}',title:'"src\\containers\\Checkout\\ContactData\\ContactData.js"',"{112,214}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../../store/actions/index";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "fastest",\n        valid: true,\n        validation: {\n          required: false,\n        },\n      },\n    },\n    formIsValid: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ings,\n      price: this.props.price,\n      orderData: formData,\n      userId: this.props.userId,\n    };\n    this.props.onOrderBurger(order, this.props.token);\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (!rules) {\n      return true;\n    }\n\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    if (rules.isEmail) {\n      const pattern = /[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    if (rules.isNumeric) {\n      const pattern = /^\\d+$/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n\n    let formIsValid = true;\n    for (let inputIdentifier in updatedOrderForm) {\n      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;\n    }\n    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success" disabled={!this.state.formIsValid}>\n          ORDER\n        </Button>\n      </form>\n    );\n    if (this.props.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.burgerBuilder.ingredients,\n    price: state.burgerBuilder.totalPrice,\n    loading: state.order.loading,\n    token: state.auth.token,\n    userId: state.auth.userId,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onOrderBurger: (orderData, token) =>\n      dispatch(actions.purchaseBurger(orderData, token)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(ContactData, axios));\n')),(0,o.kt)("h2",{id:"ordersjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Orders.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Orders\\Orders.js" {11,33,39-40}',title:'"src\\containers\\Orders\\Orders.js"',"{11,33,39-40}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport Order from "../../components/Order/Order";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actions from "../../store/actions/index";\n\nclass Orders extends Component {\n  componentDidMount() {\n    this.props.onFetchOrders(this.props.token, this.props.userId);\n  }\n  render() {\n    let orders = <Spinner />;\n    if (!this.props.loading) {\n      orders = this.props.orders.map((order) => (\n        <Order\n          key={order.id}\n          ingredients={order.ingredients}\n          price={order.price}\n        />\n      ));\n    }\n    return orders;\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    orders: state.order.orders,\n    loading: state.order.loading,\n    token: state.auth.token,\n    userId: state.auth.userId,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onFetchOrders: (token, userId) =>\n      dispatch(actions.fetchOrders(token, userId)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(Orders, axios));\n')),(0,o.kt)("h2",{id:"orderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"order.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\order.js" {66,69-70,72}',title:'"src\\store\\actions\\order.js"',"{66,69-70,72}":!0},'import axios from "../../axios-orders";\nimport * as actionTypes from "./actionTypes";\n\nexport const purchaseBurgerSuccess = (id, orderData) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_SUCCESS,\n    orderId: id,\n    orderData: orderData,\n  };\n};\n\nexport const purchaseBurgerFail = (error) => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_FAIL,\n    error: error,\n  };\n};\n\nexport const purchaseBurgerStart = () => {\n  return {\n    type: actionTypes.PURCHASE_BURGER_START,\n  };\n};\n\nexport const purchaseBurger = (orderData, token) => {\n  return (dispatch) => {\n    dispatch(purchaseBurgerStart());\n    axios\n      .post("/orders.json?auth=" + token, orderData)\n      .then((response) => {\n        console.log(response.data);\n        dispatch(purchaseBurgerSuccess(response.data.name, orderData));\n      })\n      .catch((error) => {\n        dispatch(purchaseBurgerFail(error));\n      });\n  };\n};\n\nexport const purchaseInit = () => {\n  return {\n    type: actionTypes.PURCHASE_INIT,\n  };\n};\n\nexport const fetchOrdersSuccess = (orders) => {\n  return {\n    type: actionTypes.FETCH_ORDERS_SUCCESS,\n    orders: orders,\n  };\n};\n\nexport const fetchOrdersFail = (error) => {\n  return {\n    type: actionTypes.FETCH_ORDERS_FAIL,\n    error: error,\n  };\n};\n\nexport const fetchOrdersStart = () => {\n  return {\n    type: actionTypes.FETCH_ORDERS_START,\n  };\n};\n\nexport const fetchOrders = (token, userId) => {\n  return (dispatch, getState) => {\n    dispatch(fetchOrdersStart());\n    const queryParams =\n      "?auth=" + token + \'&orderBy="userId"&equalTo="\' + userId + \'"\';\n    axios\n      .get("/orders.json" + queryParams)\n      .then((res) => {\n        const fetchedOrders = [];\n        for (let key in res.data) {\n          fetchedOrders.push({\n            ...res.data[key],\n            id: key,\n          });\n        }\n        dispatch(fetchOrdersSuccess(fetchedOrders));\n      })\n      .catch((err) => {\n        dispatch(fetchOrdersFail(err));\n      });\n  };\n};\n')))}m.isMDXComponent=!0}}]);