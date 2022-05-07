"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60537],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=c(t),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,o(o({ref:e},l),{},{components:t})):r.createElement(h,o({ref:e},l))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56489:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"18-07-adding-sign-in",title:"18.07 Adding Sign In",date:new Date("2021-07-21T11:46:47.000Z")},u=void 0,c={unversionedId:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in",id:"react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in",title:"18.07 Adding Sign In",description:"Fix Burger.module.css",source:"@site/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in.md",sourceDirName:"react-complete-guide/18-adding-authentication-to-our-burger-project",slug:"/react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in",permalink:"/hm/ru/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-07-adding-sign-in.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"18-07-adding-sign-in",title:"18.07 Adding Sign In",date:"2021-07-21T11:46:47.000Z"},sidebar:"Docs",previous:{title:"18.06 Getting A Token From Backend",permalink:"/hm/ru/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-06-getting-a-token-from-backend"},next:{title:"18.08 Storing The Token",permalink:"/hm/ru/courses/react-complete-guide/18-adding-authentication-to-our-burger-project/18-08-storing-the-token"}},l={},d=[{value:"Fix <code>Burger.module.css</code>",id:"fix-burgermodulecss",level:2},{value:"Fix <code>Auth.module.css</code>",id:"fix-authmodulecss",level:2},{value:"<code>Auth.js</code>",id:"authjs",level:2},{value:"<code>auth.js</code>",id:"authjs-1",level:2}],p={toc:d};function m(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fix-burgermodulecss"},"Fix ",(0,a.kt)("inlineCode",{parentName:"h2"},"Burger.module.css")),(0,a.kt)("p",null,"Remove the horisontal scroll."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src\\components\\Burger\\Burger.module.css" {5}',title:'"src\\components\\Burger\\Burger.module.css"',"{5}":!0},".Burger {\n  width: 100%;\n  margin: auto;\n  height: 250px;\n  overflow: auto;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n@media (min-width: 500px) and (min-height: 400px) {\n  .Burger {\n    width: 350px;\n    height: 300px;\n  }\n}\n\n@media (min-width: 500px) and (min-height: 401px) {\n  .Burger {\n    width: 450px;\n    height: 400px;\n  }\n}\n\n@media (min-width: 1000px) and (min-height: 700px) {\n  .Burger {\n    width: 700px;\n    height: 600px;\n  }\n}\n")),(0,a.kt)("h2",{id:"fix-authmodulecss"},"Fix ",(0,a.kt)("inlineCode",{parentName:"h2"},"Auth.module.css")),(0,a.kt)("p",null,"Make two buttons vertical."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src\\containers\\Auth\\Auth.module.css" {10-13}',title:'"src\\containers\\Auth\\Auth.module.css"',"{10-13}":!0},".Auth {\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #ccc;\n  border: 1px solid #eee;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.Auth Button {\n  display: block;\n  margin: 0 auto !important;\n}\n@media (min-width: 600px) {\n  .Auth {\n    width: 500px;\n  }\n}\n")),(0,a.kt)("h2",{id:"authjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"Auth.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\Auth\\Auth.js" {40,94-95,99-103,130-132,141-142}',title:'"src\\containers\\Auth\\Auth.js"',"{40,94-95,99-103,130-132,141-142}":!0},'import React, { Component } from "react";\nimport { connect } from "react-redux";\nimport Button from "../../components/UI/Button/Button";\nimport Input from "../../components/UI/Input/Input";\nimport * as actions from "../../store/actions/index";\nimport classes from "./Auth.module.css";\n\nclass Auth extends Component {\n  state = {\n    controls: {\n      email: {\n        elementType: "input",\n        elementConfig: {\n          type: "email",\n          placeholder: "Mail Address",\n        },\n        value: "",\n        validation: {\n          required: true,\n          isEmail: true,\n        },\n        valid: false,\n        touched: false,\n      },\n      password: {\n        elementType: "input",\n        elementConfig: {\n          type: "password",\n          placeholder: "Password",\n        },\n        value: "",\n        validation: {\n          required: true,\n          minLength: 6,\n        },\n        valid: false,\n        touched: false,\n      },\n    },\n    isSignup: true,\n  };\n\n  checkValidity(value, rules) {\n    let isValid = true;\n    if (!rules) {\n      return true;\n    }\n\n    if (rules.required) {\n      isValid = value.trim() !== "" && isValid;\n    }\n\n    if (rules.minLength) {\n      isValid = value.length >= rules.minLength && isValid;\n    }\n\n    if (rules.maxLength) {\n      isValid = value.length <= rules.maxLength && isValid;\n    }\n\n    if (rules.isEmail) {\n      const pattern = /[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    if (rules.isNumeric) {\n      const pattern = /^\\d+$/;\n      isValid = pattern.test(value) && isValid;\n    }\n\n    return isValid;\n  }\n\n  inputChangedHandler = (event, controlName) => {\n    const updatedControls = {\n      ...this.state.controls,\n      [controlName]: {\n        ...this.state.controls[controlName],\n        value: event.target.value,\n        valid: this.checkValidity(\n          event.target.value,\n          this.state.controls[controlName].validation\n        ),\n        touched: true,\n      },\n    };\n    this.setState({ controls: updatedControls });\n  };\n\n  submitHandler = (event) => {\n    event.preventDefault();\n    this.props.onAuth(\n      this.state.controls.email.value,\n      this.state.controls.password.value,\n      this.state.isSignup\n    );\n  };\n\n  switchAuthModeHandler = () => {\n    this.setState((prevState) => {\n      return { isSignup: !prevState.isSignup };\n    });\n  };\n  render() {\n    const formElementsArray = [];\n    for (let key in this.state.controls) {\n      formElementsArray.push({\n        id: key,\n        config: this.state.controls[key],\n      });\n    }\n\n    const form = formElementsArray.map((formElement) => (\n      <Input\n        key={formElement.id}\n        elementType={formElement.config.elementType}\n        elementConfig={formElement.config.elementConfig}\n        value={formElement.config.value}\n        invalid={!formElement.config.valid}\n        shouldValidate={formElement.config.validation}\n        touched={formElement.config.touched}\n        changed={(event) => this.inputChangedHandler(event, formElement.id)}\n      />\n    ));\n    return (\n      <div className={classes.Auth}>\n        <form onSubmit={this.submitHandler}>\n          {form}\n          <Button btnType="Success">Submit</Button>\n          <Button clicked={this.switchAuthModeHandler} btnType="Danger">\n            SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}\n          </Button>\n        </form>\n      </div>\n    );\n  }\n}\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onAuth: (email, password, isSignup) =>\n      dispatch(actions.auth(email, password, isSignup)),\n  };\n};\nexport default connect(null, mapDispatchToProps)(Auth);\n')),(0,a.kt)("h2",{id:"authjs-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"auth.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\auth.js" {24,32-37,39}',title:'"src\\store\\actions\\auth.js"',"{24,32-37,39}":!0},'import axios from "axios";\nimport * as actionTypes from "./actionTypes";\n\nexport const authStart = () => {\n  return {\n    type: actionTypes.AUTH_START,\n  };\n};\n\nexport const authSuccess = (authData) => {\n  return {\n    type: actionTypes.AUTH_SUCCESS,\n    authData: authData,\n  };\n};\n\nexport const authFail = (error) => {\n  return {\n    type: actionTypes.AUTH_FAIL,\n    error: error,\n  };\n};\n\nexport const auth = (email, password, isSignup) => {\n  return (dispatch) => {\n    dispatch(authStart());\n    const authData = {\n      email: email,\n      password: password,\n      returnSecureToken: true,\n    };\n    let url =\n      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    if (!isSignup) {\n      url =\n        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo";\n    }\n    axios\n      .post(url, authData)\n      .then((response) => {\n        console.log(response);\n        dispatch(authSuccess(response.data));\n      })\n      .catch((err) => {\n        console.log(err);\n        dispatch(authFail(err));\n      });\n  };\n};\n')))}m.isMDXComponent=!0}}]);