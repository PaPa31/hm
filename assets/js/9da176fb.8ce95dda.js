"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[37525],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98448:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5529:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),a=t(67294),o=t(51048),s=t(89623),l=t(86010),i="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),x=y.tabGroupChoices,w=y.setTabGroupChoices,k=(0,a.useState)(g),j=k[0],T=k[1],N=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=x[m];null!=E&&E!==j&&h.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var n=e.currentTarget,t=N.indexOf(n),r=h[t].value;r!==j&&(O(n),T(r),null!=m&&w(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function c(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},95089:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=t(5529),l=t(98448),i=["components"],u={id:"classes",title:"React Classes",date:new Date("2021-03-04T22:00:28.000Z"),description:"Two versions of React sintax in classes"},c=void 0,p={unversionedId:"javascript/next-generation/classes",id:"javascript/next-generation/classes",title:"React Classes",description:"Two versions of React sintax in classes",source:"@site/docs/javascript/next-generation/classes.mdx",sourceDirName:"javascript/next-generation",slug:"/javascript/next-generation/classes",permalink:"/hm/docs/javascript/next-generation/classes",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/javascript/next-generation/classes.mdx",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1615444882,formattedLastUpdatedAt:"3/11/2021",frontMatter:{id:"classes",title:"React Classes",date:"2021-03-04T22:00:28.000Z",description:"Two versions of React sintax in classes"},sidebar:"Docs",previous:{title:"Arrow Functions",permalink:"/hm/docs/javascript/next-generation/arrow-functions"},next:{title:"Var & Let & Const",permalink:"/hm/docs/javascript/next-generation/var-let-const"}},d=[],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{defaultValue:"es6",values:[{label:"ES6",value:"es6"},{label:"ES7",value:"es7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"es6",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Human {\n  constructor() {\n    this.gender = 'male'\n  }\n\n  printGender() {\n    console.log(this.gender)\n  }\n}\n\nclass Person extends Human {\n  constructor() {\n    super()\n    this.name = 'Max'\n    this.gender = 'female'\n  }\n  \n  printMyName() {\n    console.log(this.name)\n  }\n}\n\nconst person = new Person()\nperson.printMyName()\nperson.printGender()\n"))),(0,o.kt)(l.Z,{value:"es7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class Human {\n  gender = 'male'\n\n  printGender = () => console.log(this.gender)\n}\n\nclass Person extends Human {\n  name = 'Max'\n  gender = 'female'\n  \n  printMyName = () => console.log(this.name)\n}\n\nconst person = new Person()\nperson.printMyName()\nperson.printGender()\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ES6: ",(0,o.kt)("a",{parentName:"li",href:"https://jsbin.com/detitiv/edit?js,console"},"Try it on jsbin")),(0,o.kt)("li",{parentName:"ul"},"ES7: ",(0,o.kt)("a",{parentName:"li",href:"https://jsbin.com/wojayum/edit?js,console"},"Try it on jsbin"))),(0,o.kt)("p",null,"As you can see the Docusaurus ",(0,o.kt)("inlineCode",{parentName:"p"},"live editor")," works fine with ",(0,o.kt)("inlineCode",{parentName:"p"},"es6")," standard. About restrictions of arrow function read ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",class:"external"},"developer.mozilla.org"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class Person extends React.Component {\n  constructor(){\n    this.name = 'MAx'\n    this.gender = 'female'\n\n    printGender = () => this.gender\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>It is {this.name}</h2>\n        <h3>{printGender()}</h3>\n      </div>\n    );\n  }\n}\n")))}f.isMDXComponent=!0}}]);