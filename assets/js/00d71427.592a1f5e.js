"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[70148],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"15-08-adjusting-checkout-and-contact-data",title:"15.08 Adjusting Checkout And Contact Data",date:new Date("2021-07-13T16:49:21.000Z")},d=void 0,c={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data",id:"react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data",title:"15.08 Adjusting Checkout And Contact Data",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-08-adjusting-checkout-and-contact-data.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"15-08-adjusting-checkout-and-contact-data",title:"15.08 Adjusting Checkout And Contact Data",date:"2021-07-13T16:49:21.000Z"},sidebar:"Docs",previous:{title:"15.07 Redux And Ui State",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-07-redux-and-ui-state"},next:{title:"16.0 Lesson",permalink:"/hm/courses/react-complete-guide/16-redux-advanced/16-0-lesson"}},u=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[],level:2},{value:"<code>Checkout.js</code>",id:"checkoutjs",children:[],level:2},{value:"<code>ContactData.js</code>",id:"contactdatajs",children:[],level:2}],l={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuilderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {58}',title:'"BurgerBuilder.js"',"{58}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actionTypes from "../../store/actions";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),\n    onIgredientRemoved: (ingName) =>\n      dispatch({\n        type: actionTypes.REMOVE_INGREDIENT,\n        ingredientName: ingName,\n      }),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,o.kt)("h2",{id:"checkoutjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Checkout.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Checkout.js" {2,19,25,33-37,39}',title:'"Checkout.js"',"{2,19,25,33-37,39}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport { Route } from "react-router-dom";\nimport CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";\nimport ContactData from "./ContactData/ContactData";\n\nclass Checkout extends Component {\n  checkoutCancelledHandler = () => {\n    this.props.history.goBack();\n  };\n\n  checkoutContinuedHandler = () => {\n    this.props.history.replace("/checkout/contact-data");\n  };\n  render() {\n    return (\n      <div>\n        <CheckoutSummary\n          ingredients={this.props.ings}\n          checkoutCancelled={this.checkoutCancelledHandler}\n          checkoutContinued={this.checkoutContinuedHandler}\n        />\n        <Route\n          path={this.props.match.path + "/contact-data"}\n          component={ContactData}\n        />\n        )} />\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n  };\n};\n\nexport default connect(mapStateToProps)(Checkout);\n')),(0,o.kt)("h2",{id:"contactdatajs"},(0,o.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ContactData.js" {2,108,200-206}',title:'"ContactData.js"',"{2,108,200-206}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "",\n        valid: true,\n        validation: {\n          required: false,\n        },\n      },\n    },\n    formIsValid: false,\n    loading: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n    this.setState({ loading: true });\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ings,\n      price: this.props.price,\n      orderData: formData,\n    };\n    axios\n      .post("/orders.json", order)\n      .then((response) => {\n        this.setState({ loading: false });\n        this.props.history.push("/");\n      })\n      .catch((error) => {\n        this.setState({ loading: false });\n      });\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n\n    let formIsValid = true;\n    for (let inputIdentifier in updatedOrderForm) {\n      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;\n    }\n    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success" disabled={!this.state.formIsValid}>\n          ORDER\n        </Button>\n      </form>\n    );\n    if (this.state.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\nexport default connect(mapStateToProps)(ContactData);\n')))}p.isMDXComponent=!0}}]);