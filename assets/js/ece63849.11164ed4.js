"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[69499],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=d(r),g=i,m=l["".concat(c,".").concat(g)]||l[g]||p[g]||o;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=l;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},37984:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={id:"17-06-fetching-ingredients-asynchronously",title:"17.06 Fetching Ingredients Asynchronously",date:new Date("2021-07-16T13:52:37.000Z")},c=void 0,d={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously",id:"react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously",title:"17.06 Fetching Ingredients Asynchronously",description:"BurgerBuider.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-06-fetching-ingredients-asynchronously",title:"17.06 Fetching Ingredients Asynchronously",date:"2021-07-16T13:52:37.000Z"},sidebar:"Docs",previous:{title:"17.05 Executing Synchronous Code",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-05-executing-synchronous-code"},next:{title:"17.07 Initializing Ingredients In Burgerbuilder",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder"}},u=[{value:"<code>BurgerBuider.js</code>",id:"burgerbuiderjs",children:[],level:2},{value:"<code>actionTypes.js</code>",id:"actiontypesjs",children:[],level:2},{value:"<code>actions/burgerBulder.js</code>",id:"actionsburgerbulderjs",children:[],level:2},{value:"<code>reducers/burgerBuilder.js</code>",id:"reducersburgerbuilderjs",children:[],level:2}],p={toc:u};function l(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"burgerbuiderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"BurgerBuider.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as burgerBuilderActions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch(burgerBuilderActions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(burgerBuilderActions.removeIngredient(ingName)),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,o.kt)("h2",{id:"actiontypesjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"actionTypes.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\actionTypes.js" {3-4}',title:'"src\\store\\actions\\actionTypes.js"',"{3-4}":!0},'export const ADD_INGREDIENT = "ADD_INGREDIENT";\nexport const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";\nexport const SET_INGREDIENTS = "SET_INGREDIENTS";\nexport const FETCH_INGREDIENTS_FAILD = "FETCH_INGREDIENTS_FAILD";\n')),(0,o.kt)("h2",{id:"actionsburgerbulderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"actions/burgerBulder.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\burgerBuilder.js" {18-44}',title:'"src\\store\\actions\\burgerBuilder.js"',"{18-44}":!0},'import axios from "../../axios-orders";\nimport * as actionTypes from "./actionTypes";\n\nexport const addIngredient = (name) => {\n  return {\n    type: actionTypes.ADD_INGREDIENT,\n    ingredientName: name,\n  };\n};\n\nexport const removeIngredient = (name) => {\n  return {\n    type: actionTypes.REMOVE_INGREDIENT,\n    ingredientName: name,\n  };\n};\n\nexport const setIngredients = (ingredients) => {\n  return {\n    type: actionTypes.SET_INGREDIENTS,\n    ingredients: ingredients,\n  };\n};\n\nexport const fetchIngredientsFaild = () => {\n  return {\n    type: actionTypes.FETCH_INGREDIENTS_FAILD,\n  };\n};\n\nexport const initIngredients = () => {\n  return (dispatch) => {\n    axios\n      .get(\n        "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n      )\n      .then((response) => {\n        dispatch(setIngredients(response.data));\n      })\n      .catch((error) => {\n        dispatch(fetchIngredientsFaild());\n      });\n  };\n};\n')),(0,o.kt)("h2",{id:"reducersburgerbuilderjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"reducers/burgerBuilder.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {4,6}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{4,6}":!0},'import * as actionTypes from "../actions/actionTypes";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n        },\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n        },\n        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}l.isMDXComponent=!0}}]);