"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[38058],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=t(5529),i=t(68111),s=["components"],u={id:"5-05-adding-and-using-radium",title:"5.05 Adding And Using Radium",date:new Date("2021-04-03T22:56:30.000Z")},c=void 0,d={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium",id:"react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium",title:"5.05 Adding And Using Radium",description:"Using radium is one way of getting the best of both worlds scoped styles and advance CSS features like pseudos selectors and media queries.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-05-adding-and-using-radium.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-05-adding-and-using-radium",title:"5.05 Adding And Using Radium",date:"2021-04-03T22:56:30.000Z"},sidebar:"Docs",previous:{title:"5.04 Setting Class Names Dynamically",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-04-setting-class-names-dynamically"},next:{title:"5.06 Using Radium For Media Queries",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries"}},p={},m=[{value:"Install Radium",id:"install-radium",level:2},{value:"Using Radium",id:"using-radium",level:2}],f={toc:m};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using radium is one way of getting the best of both worlds ",(0,o.kt)("inlineCode",{parentName:"p"},"scoped styles")," and advance CSS features like ",(0,o.kt)("inlineCode",{parentName:"p"},"pseudos selectors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"media queries"),"."),(0,o.kt)("h2",{id:"install-radium"},"Install Radium"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{href:"https://www.npmjs.com/package/radium",class:"external"},"npmjs.com: Radium")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radium\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add radium\n")))),(0,o.kt)("p",null,"If error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},' Found: react@17.0.2\nnpm ERR! node_modules/react\nnpm ERR!   react@"^17.0.1" from the root project\n...\n')),(0,o.kt)("p",null,"Then (read more: ",(0,o.kt)("a",{href:"https://stackoverflow.com/questions/64529958/error-when-trying-to-install-react-redux-dependency",class:"external"},"stackoverflow.com: Error When Trying To Install React Redux Dependency"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --legacy-peer-deps\n")),(0,o.kt)("h2",{id:"using-radium"},"Using Radium"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {1-2,15-18,41-44}',title:'"App.js"',"{1-2,15-18,41-44}":!0},'import color from "color";\nimport Radium from "radium";\nimport React, { Component } from "react";\nimport "./App.css";\nimport Person from "./Person/Person";\n    ...\n  render() {\n    const style = {\n      backgroundColor: "green",\n      color: "white",\n      font: "inherit",\n      border: "1px solid blue",\n      padding: "8px",\n      cursor: "pointer",\n      ":hover": {\n        backgroundColor: color("green").lighten(0.75),\n        color: "black",\n      },\n    };\n\n    let persons = null;\n\n    if (this.state.showPersons) {\n      persons = (\n        <div>\n          {this.state.persons.map((person, index) => {\n            return (\n              <Person\n                click={() => this.deletePersonHandler(index)}\n                name={person.name}\n                age={person.age}\n                key={person.id}\n                changed={(event) => this.nameChangedHandler(event, person.id)}\n              />\n            );\n          })}\n        </div>\n      );\n\n      style.backgroundColor = "red";\n      style[":hover"] = {\n        backgroundColor: color("red").lighten(0.5),\n        color: "black",\n      };\n    }\n\n    const classes = [];\n    if (this.state.persons.length <= 2) {\n      classes.push("red"); // classes = [\'red\']\n    }\n    if (this.state.persons.length <= 1) {\n      classes.push("bold"); // classes = [\'red\', \'bold\']\n    }\n    ...\n')),(0,o.kt)("p",null,"You have the normal CSS ",(0,o.kt)("inlineCode",{parentName:"p"},"pseudo selectors")," you can add, and you still have scoped styles which you can easily edit from within your JavaScript code."),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"Radium")," doesn't limit you to using pseudo selectors as we did, you can also add ",(0,o.kt)("inlineCode",{parentName:"p"},"media queries"),"."))}g.isMDXComponent=!0},68111:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),o="tabItem_OmH5";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5529:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),o=t(51048),l=t(33609),i=t(1943),s=t(72957),u=t(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,o,p=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(n=null!=f?f:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=y[0])?void 0:o.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),O=N.tabGroupChoices,T=N.setTabGroupChoices,x=(0,a.useState)(w),C=x[0],E=x[1],j=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=O[h];null!=R&&R!==C&&b.some((function(e){return e.value===R}))&&E(R)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),r=b[t].value;r!==C&&(P(n),E(r),null!=h&&T(h,r))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),p?(0,a.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}}}]);