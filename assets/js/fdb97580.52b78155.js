"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[3306],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,m=p["".concat(d,".").concat(g)]||p[g]||l[g]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},68858:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"17-07-initializing-ingredients-in-burgerbuilder",title:"17.07 Initializing Ingredients In Burgerbuilder",date:new Date("2021-07-16T14:48:14.000Z")},d=void 0,c={unversionedId:"react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder",id:"react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder",isDocsHomePage:!1,title:"17.07 Initializing Ingredients In Burgerbuilder",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder.md",sourceDirName:"react-complete-guide/17-redux-advanced-burger-project",slug:"/react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/17-redux-advanced-burger-project/17-07-initializing-ingredients-in-burgerbuilder.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"17-07-initializing-ingredients-in-burgerbuilder",title:"17.07 Initializing Ingredients In Burgerbuilder",date:"2021-07-16T14:48:14.000Z"},sidebar:"Docs",previous:{title:"17.06 Fetching Ingredients Asynchronously",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-06-fetching-ingredients-asynchronously"},next:{title:"17.08 Changing Order For Ingredients Manually",permalink:"/hm/courses/react-complete-guide/17-redux-advanced-burger-project/17-08-changing-order-for-ingredients-manually"}},u=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[]},{value:"<code>actions/index.js</code>",id:"actionsindexjs",children:[]},{value:"<code>reducers/burgerBuilder.js</code>",id:"reducersburgerbuilderjs",children:[]}],l={toc:u};function p(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"burgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\containers\\BurgerBuilder\\BurgerBuilder.js" {24,59,108,118}',title:'"src\\containers\\BurgerBuilder\\BurgerBuilder.js"',"{24,59,108,118}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as burgerBuilderActions from "../../store/actions/index";\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    purchasable: false,\n    purchasing: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    this.props.onInitIngredients();\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    return sum > 0;\n  }\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    this.props.history.push("/checkout");\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.props.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.updatePurchaseState(this.props.ings)}\n            ordered={this.purchaseHandler}\n            price={this.props.price}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.props.price}\n        />\n      );\n    }\n\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n    price: state.totalPrice,\n    error: state.error,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch(burgerBuilderActions.addIngredient(ingName)),\n    onIgredientRemoved: (ingName) =>\n      dispatch(burgerBuilderActions.removeIngredient(ingName)),\n    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,a.kt)("h2",{id:"actionsindexjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"actions/index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\actions\\index.js" {1-5}',title:'"src\\store\\actions\\index.js"',"{1-5}":!0},'export {\n  addIngredient,\n  initIngredients,\n  removeIngredient,\n} from "./burgerBuilder";\nexport {} from "./order";\n')),(0,a.kt)("h2",{id:"reducersburgerbuilderjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"reducers/burgerBuilder.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src\\store\\reducers\\burgerBuilder.js" {36-46}',title:'"src\\store\\reducers\\burgerBuilder.js"',"{36-46}":!0},'import * as actionTypes from "../actions/actionTypes";\n\nconst initialState = {\n  ingredients: null,\n  totalPrice: 4,\n  error: false,\n};\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n        },\n        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n        },\n        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],\n      };\n    case actionTypes.SET_INGREDIENTS:\n      return {\n        ...state,\n        ingredients: action.ingredients,\n        error: false,\n      };\n    case actionTypes.FETCH_INGREDIENTS_FAILD:\n      return {\n        ...state,\n        error: true,\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}p.isMDXComponent=!0}}]);