"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[75616],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2390:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(5529),l=t(68111),u=["components"],s={id:"8-11-adding-prop-type-validation",title:"8.11 Adding PropTypes Validation",date:new Date("2021-04-09T23:08:59.000Z")},c=void 0,p={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation",id:"react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation",title:"8.11 Adding PropTypes Validation",description:"Installing prop-types",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-11-adding-prop-type-validation.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"8-11-adding-prop-type-validation",title:"8.11 Adding PropTypes Validation",date:"2021-04-09T23:08:59.000Z"},sidebar:"Docs",previous:{title:"8.10 Adding Dynamic Ingredient Component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-10-adding-dynamic-ingredient-component"},next:{title:"8.12 Starting Burger Component",permalink:"/hm/ru/courses/react-complete-guide/08-real-app-burger-builder/8-12-starting-burger-component"}},d={},m=[{value:"Installing <code>prop-types</code>",id:"installing-prop-types",level:2},{value:"Converting a functional component to a class-based",id:"converting-a-functional-component-to-a-class-based",level:2}],v={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-prop-types"},"Installing ",(0,o.kt)("inlineCode",{parentName:"h2"},"prop-types")),(0,o.kt)("p",null,"I'll cancel the development server and then:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save prop-types\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add prop-types\n")))),(0,o.kt)("h2",{id:"converting-a-functional-component-to-a-class-based"},"Converting a functional component to a class-based"),(0,o.kt)("p",null,"Now you don't need to transform into a class-based component actually, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"PropTypes")," on functional components as well, I want to practice this conversion to a class-based component once again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BurgerIngredient.js" {1-2,5-6,9,38-41,44}',title:'"BurgerIngredient.js"',"{1-2,5-6,9,38-41,44}":!0},'import PropTypes from "prop-types";\nimport React, { Component } from "react";\nimport classes from "./BurgerIngredient.module.css";\n\nclass BurgerIngredient extends Component {\n  render() {\n    let ingredient = null;\n\n    switch (this.props.type) {\n      case "bread-bottom":\n        ingredient = <div className={classes.BreadBottom}></div>;\n        break;\n      case "bread-top":\n        ingredient = (\n          <div className={classes.BreadTop}>\n            <div className={classes.Seeds1}></div>\n            <div className={classes.Seeds2}></div>\n          </div>\n        );\n        break;\n      case "meat":\n        ingredient = <div className={classes.Meat}></div>;\n        break;\n      case "cheese":\n        ingredient = <div className={classes.Cheese}></div>;\n        break;\n      case "salad":\n        ingredient = <div className={classes.Salad}></div>;\n        break;\n      case "bacon":\n        ingredient = <div className={classes.Bacon}></div>;\n        break;\n      default:\n        ingredient = null;\n    }\n\n    return ingredient;\n  }\n}\nBurgerIngredient.propTypes = {\n  type: PropTypes.string.isRequired,\n};\n\nexport default BurgerIngredient;\n')))}f.isMDXComponent=!0},68111:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5529:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),o=t(51048),i=t(33609),l=t(1943),u=t(72957),s=t(86010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,o,d=e.lazy,m=e.block,v=e.defaultValue,f=e.values,g=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===v?v:null!=(n=null!=v?v:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=y[0])?void 0:o.props.value;if(null!==T&&!h.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,O=w.setTabGroupChoices,E=(0,a.useState)(T),I=E[0],P=E[1],j=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var C=N[g];null!=C&&C!==I&&h.some((function(e){return e.value===C}))&&P(C)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),r=h[t].value;r!==I&&(x(n),P(r),null!=g&&O(g,r))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(y.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}}}]);