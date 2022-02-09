"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[60184],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),g=o,m=l["".concat(c,".").concat(g)]||l[g]||p[g]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},7089:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"15-05-connecting-burger-builder-container-to-our-store",title:"15.05 Connecting Burger Builder Container To Our Store",date:new Date("2021-07-12T23:23:36.000Z")},c=void 0,d={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store",id:"react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store",title:"15.05 Connecting Burger Builder Container To Our Store",description:"BurgerBuilder.js",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-05-connecting-burger-builder-container-to-our-store.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"15-05-connecting-burger-builder-container-to-our-store",title:"15.05 Connecting Burger Builder Container To Our Store",date:"2021-07-12T23:23:36.000Z"},sidebar:"Docs",previous:{title:"15.04 Finishing Reducer For Ingredients",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-04-finishing-reducer-for-ingredients"},next:{title:"15.06 Working On The Total Price Calculation",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-06-working-on-the-total-price-calculation"}},u=[{value:"<code>BurgerBuilder.js</code>",id:"burgerbuilderjs",children:[],level:2},{value:"<code>reducer.js</code>",id:"reducerjs",children:[],level:2}],p={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"burgerbuilderjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"BurgerBuilder.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerBuilder.js" {2,10,117,131,134,136-137,148,172-193}',title:'"BurgerBuilder.js"',"{2,10,117,131,134,136-137,148,172-193}":!0},'import React, { Component, Fragment } from "react";\nimport { connect } from "react-redux";\nimport axios from "../../axios-orders";\nimport BuildControls from "../../components/Burger/BuildControls/BuildControls";\nimport Burger from "../../components/Burger/Burger";\nimport OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";\nimport Modal from "../../components/UI/Modal/Modal";\nimport Spinner from "../../components/UI/Spinner/Spinner";\nimport withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";\nimport * as actionTypes from "../../store/actions";\n\nconst INGREDIENT_PRICES = {\n  salad: 0.5,\n  cheese: 0.4,\n  meat: 1.3,\n  bacon: 0.7,\n};\n\nclass BurgerBuilder extends Component {\n  // constructor(props) {\n  //     super(props);\n  //     this.state = {...}\n  // }\n  state = {\n    totalPrice: 4,\n    purchasable: false,\n    purchasing: false,\n    loading: false,\n    error: false,\n  };\n\n  componentDidMount() {\n    console.log(this.props);\n    // axios\n    //   .get(\n    //     "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/ingregients.json"\n    //   )\n    //   .then((response) => {\n    //     this.setState({ ingredients: response.data });\n    //   })\n    //   .catch((error) => {\n    //     this.setState({ error: true });\n    //   });\n  }\n\n  updatePurchaseState(ingredients) {\n    const sum = Object.keys(ingredients)\n      .map((igKey) => {\n        return ingredients[igKey];\n      })\n      .reduce((sum, el) => {\n        return sum + el;\n      }, 0);\n    this.setState({ purchasable: sum > 0 });\n  }\n\n  addIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    const updateCount = oldCount + 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceAddition = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice + priceAddition;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  removeIngredientHandler = (type) => {\n    const oldCount = this.state.ingredients[type];\n    if (oldCount <= 0) {\n      return;\n    }\n    const updateCount = oldCount - 1;\n    const updatedIngredients = {\n      ...this.state.ingredients,\n    };\n    updatedIngredients[type] = updateCount;\n    const priceDeduction = INGREDIENT_PRICES[type];\n    const oldPrice = this.state.totalPrice;\n    const newPrice = oldPrice - priceDeduction;\n    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });\n    this.updatePurchaseState(updatedIngredients);\n  };\n\n  purchaseHandler = () => {\n    this.setState({ purchasing: true });\n  };\n\n  purchaseCancelHandler = () => {\n    this.setState({ purchasing: false });\n  };\n\n  purchaseContinueHandler = () => {\n    // alert("You continue!");\n\n    const queryParams = [];\n    for (let i in this.state.ingredients) {\n      queryParams.push(\n        encodeURIComponent(i) +\n          "=" +\n          encodeURIComponent(this.state.ingredients[i])\n      );\n    }\n    queryParams.push("price=" + this.state.totalPrice);\n    const queryString = queryParams.join("&");\n\n    this.props.history.push({\n      pathname: "/checkout",\n      search: "?" + queryString,\n    });\n  };\n  render() {\n    const disabledInfo = {\n      ...this.props.ings,\n    };\n\n    for (let key in disabledInfo) {\n      disabledInfo[key] = disabledInfo[key] <= 0;\n    }\n    let orderSummary = null;\n\n    let burger = this.state.error ? (\n      <p>Ingredients can\'t be loaded!</p>\n    ) : (\n      <Spinner />\n    );\n\n    if (this.props.ings) {\n      burger = (\n        <Fragment>\n          <Burger ingredients={this.props.ings} />\n          <BuildControls\n            ingredientAdded={this.props.onIgredientAdded}\n            ingredientRemoved={this.props.onIgredientRemoved}\n            disabled={disabledInfo}\n            purchasable={this.state.purchasable}\n            ordered={this.purchaseHandler}\n            price={this.state.totalPrice}\n          />\n        </Fragment>\n      );\n\n      orderSummary = (\n        <OrderSummary\n          ingredients={this.props.ings}\n          purchaseCancelled={this.purchaseCancelHandler}\n          purchaseContinued={this.purchaseContinueHandler}\n          price={this.state.totalPrice}\n        />\n      );\n    }\n    if (this.state.loading) {\n      orderSummary = <Spinner />;\n    }\n    return (\n      <Fragment>\n        <Modal\n          show={this.state.purchasing}\n          modalClosed={this.purchaseCancelHandler}\n        >\n          {orderSummary}\n        </Modal>\n        {burger}\n      </Fragment>\n    );\n  }\n}\n\nconst mapStateToProps = (state) => {\n  return {\n    ings: state.ingredients,\n  };\n};\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    onIgredientAdded: (ingName) =>\n      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),\n    onIgredientRemoved: (ingName) =>\n      dispatch({\n        type: actionTypes.REMOVE_INGREDIENT,\n        ingredientName: ingName,\n      }),\n  };\n};\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(withErrorHandler(BurgerBuilder, axios));\n')),(0,i.kt)("h2",{id:"reducerjs"},(0,i.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {20,28}',title:'"reducer.js"',"{20,28}":!0},'import * as actionTypes from "./actions";\n\nconst initialState = {\n  ingredients: {\n    salad: 0,\n    bacon: 0,\n    cheese: 0,\n    meat: 0,\n  },\n  totalPrice: 4,\n}\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.ADD_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,\n        },\n      };\n    case actionTypes.REMOVE_INGREDIENT:\n      return {\n        ...state,\n        ingredients: {\n          ...state.ingredients,\n          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,\n        },\n      };\n    default:\n      return state;\n  }\n};\n\nexport default reducer;\n')))}l.isMDXComponent=!0}}]);