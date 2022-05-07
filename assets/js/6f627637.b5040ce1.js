"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[71434],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80073:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"13-12-improving-visual-feedback",title:"13.12 Improving Visual Feedback",date:new Date("2021-04-21T12:06:47.000Z")},s=void 0,p={unversionedId:"react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback",id:"react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback",title:"13.12 Improving Visual Feedback",description:"Input.js",source:"@site/courses/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback.md",sourceDirName:"react-complete-guide/13-forms-and-form-validation",slug:"/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"13-12-improving-visual-feedback",title:"13.12 Improving Visual Feedback",date:"2021-04-21T12:06:47.000Z"},sidebar:"Docs",previous:{title:"13.11 Adding Validation Feedback",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-11-adding-validation-feedback"},next:{title:"13.13 Showing Error Messages",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages"}},u={},d=[{value:"<code>Input.js</code>",id:"inputjs",level:2},{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inputjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"Input.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Input.js" {8}',title:'"Input.js"',"{8}":!0},'import React from "react";\nimport classes from "./Input.module.css";\n\nconst input = (props) => {\n  let inputElement = null;\n  const inputClasses = [classes.InputElement];\n\n  if (props.invalid && props.shouldValidate && props.touched) {\n    inputClasses.push(classes.Invalid);\n  }\n\n  switch (props.elementType) {\n    case "input":\n      inputElement = (\n        <input\n          className={inputClasses.join(" ")}\n          {...props.elementConfig}\n          value={props.value}\n          onChange={props.changed}\n        />\n      );\n      break;\n    case "textarea":\n      inputElement = (\n        <textarea\n          className={inputClasses.join(" ")}\n          {...props.elementConfig}\n          value={props.value}\n          onChange={props.changed}\n        />\n      );\n      break;\n    case "select":\n      inputElement = (\n        <select\n          className={inputClasses.join(" ")}\n          value={props.value}\n          onChange={props.changed}\n        >\n          {props.elementConfig.options.map((option) => (\n            <option key={option.value} value={option.value}>\n              {option.displayValue}\n            </option>\n          ))}\n        </select>\n      );\n      break;\n    default:\n      inputElement = (\n        <input\n          className={inputClasses.join(" ")}\n          {...props.elementConfig}\n          value={props.value}\n          onChange={props.changed}\n        />\n      );\n  }\n  return (\n    <div className={classes.Input}>\n      <label className={classes.Label}>{props.label}</label>\n      {inputElement}\n    </div>\n  );\n};\n\nexport default input;\n')),(0,o.kt)("h2",{id:"contactdatajs"},(0,o.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ContactData.js" {22,35,50,63,76,87-89,149,172}',title:'"ContactData.js"',"{22,35,50,63,76,87-89,149,172}":!0},'import React, { Component } from "react";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n        touched: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "",\n        validation: {\n          required: false,\n        },\n      },\n    },\n    loading: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n    this.setState({ loading: true });\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ingredients,\n      price: this.props.price,\n      orderData: formData,\n    };\n    axios\n      .post("/orders.json", order)\n      .then((response) => {\n        this.setState({ loading: false });\n        this.props.history.push("/");\n      })\n      .catch((error) => {\n        this.setState({ loading: false });\n      });\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedFormElement.touched = true;\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n    console.log(updatedFormElement);\n    this.setState({ orderForm: updatedOrderForm });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            invalid={!formElement.config.valid}\n            shouldValidate={formElement.config.validation}\n            touched={formElement.config.touched}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success">ORDER</Button>\n      </form>\n    );\n    if (this.state.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\nexport default ContactData;\n')))}c.isMDXComponent=!0}}]);