"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[77320],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(t),p=a,f=c["".concat(d,".").concat(p)]||c[p]||u[p]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},64774:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"13-09-adding-custom-form-validation",title:"13.09 Adding Custom Form Validation",date:new Date("2021-04-21T00:08:18.000Z")},d=void 0,m={unversionedId:"react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation",id:"react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation",title:"13.09 Adding Custom Form Validation",description:"ContactData.js",source:"@site/courses/react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation.md",sourceDirName:"react-complete-guide/13-forms-and-form-validation",slug:"/react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/13-forms-and-form-validation/13-09-adding-custom-form-validation.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"13-09-adding-custom-form-validation",title:"13.09 Adding Custom Form Validation",date:"2021-04-21T00:08:18.000Z"},sidebar:"Docs",previous:{title:"13.08 Handling Form Submission",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-08-handling-form-submission"},next:{title:"13.10 Fixing Common Validation Gotcha",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-10-fixing-common-validation-gotcha"}},s={},u=[{value:"<code>ContactData.js</code>",id:"contactdatajs",level:2}],c={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"contactdatajs"},(0,o.kt)("inlineCode",{parentName:"h2"},"ContactData.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ContactData.js" {18-21,30-33,42-47,56-59,68-71,112-128,137-140,142}',title:'"ContactData.js"',"{18-21,30-33,42-47,56-59,68-71,112-128,137-140,142}":!0},'import React, { Component } from "react";\nimport axios from "../../../axios-orders";\nimport Button from "../../../components/UI/Button/Button";\nimport Input from "../../../components/UI/Input/Input";\nimport Spinner from "../../../components/UI/Spinner/Spinner";\nimport classes from "./ContactData.module.css";\n\nclass ContactData extends Component {\n  state = {\n    orderForm: {\n      name: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Your Name",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n      },\n      street: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Street",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n      },\n      zipCode: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "ZIP Code",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 5,\n          maxLength: 5,\n        },\n        valid: false,\n      },\n      country: {\n        elementType: "input",\n        elementConfig: {\n          type: "text",\n          placeholder: "Country",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n      },\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Your e-mail",\n        },\n        value: "",\n        validation: {\n          required: true,\n        },\n        valid: false,\n      },\n      deliveryMethod: {\n        elementType: "select",\n        elementConfig: {\n          options: [\n            { value: "fastest", displayValue: "Fastest" },\n            { value: "cheapest", displayValue: "Cheapest" },\n          ],\n        },\n        value: "",\n      },\n    },\n    loading: false,\n  };\n\n  orderHandler = (event) => {\n    event.preventDefault();\n    this.setState({ loading: true });\n    const formData = {};\n    for (let formElementIdentifier in this.state.orderForm) {\n      formData[formElementIdentifier] = this.state.orderForm[\n        formElementIdentifier\n      ].value;\n    }\n    const order = {\n      ingredients: this.props.ingredients,\n      price: this.props.price,\n      orderData: formData,\n    };\n    axios\n      .post("/orders.json", order)\n      .then((response) => {\n        this.setState({ loading: false });\n        this.props.history.push("/");\n      })\n      .catch((error) => {\n        this.setState({ loading: false });\n      });\n  };\n\n  checkValidity(value, rules) {\n    let isValid = false;\n    if (rules.required) {\n      isValid = value.trim() !== "";\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, inputIdentifier) => {\n    const updatedOrderForm = {\n      ...this.state.orderForm,\n    };\n    const updatedFormElement = {\n      ...updatedOrderForm[inputIdentifier],\n    };\n    updatedFormElement.value = event.target.value;\n    updatedFormElement.valid = this.checkValidity(\n      updatedFormElement.value,\n      updatedFormElement.validation\n    );\n    updatedOrderForm[inputIdentifier] = updatedFormElement;\n    console.log(updatedFormElement);\n    this.setState({ orderForm: updatedOrderForm });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.orderForm) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.orderForm[key],\n      });\n    }\n    let form = (\n      <form onSubmit={this.orderHandler}>\n        {formElementsArray.map((formElement) => (\n          <Input\n            key={formElement.id}\n            elementType={formElement.config.elementType}\n            elementConfig={formElement.config.elementConfig}\n            value={formElement.config.value}\n            changed={(event) => this.inputChangedHandler(event, formElement.id)}\n          />\n        ))}\n        <Button btnType="Success">ORDER</Button>\n      </form>\n    );\n    if (this.state.loading) {\n      form = <Spinner />;\n    }\n    return (\n      <div className={classes.ContactData}>\n        <h4>Enter your Contact Data</h4>\n        {form}\n      </div>\n    );\n  }\n}\nexport default ContactData;\n')))}p.isMDXComponent=!0}}]);