"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[6046],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(5529),u=n(68111),l=["components"],s={id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:new Date("2021-04-14T20:24:07.000Z")},c=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",description:"Installing react-router and react-router-dom",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:"2021-04-14T20:24:07.000Z"},sidebar:"Docs",previous:{title:"11.03 Setting Up Links",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links"},next:{title:"11.05 React Router Vs React Router Dom",permalink:"/hm/ru/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-05-react-router-vs-react-router-dom"}},d={},m=[{value:"Installing <code>react-router</code> and <code>react-router-dom</code>",id:"installing-react-router-and-react-router-dom",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>App.js</code>",id:"appjs",level:2}],g={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-react-router-and-react-router-dom"},"Installing ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-router")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-router-dom")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-router react-router-dom\n"))),(0,o.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-router react-router-dom\n")))),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nsrc/\n\u2502\n\u251c\u2500\u2500 components/\n\u2502       \u2514\u2500\u2500 Post/\n\u2502             \u251c\u2500\u2500 Post.css\n\u2502             \u2514\u2500\u2500 Post.js\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502        \u2514\u2500\u2500 Blog/\n\u2502              \u251c\u2500\u2500 FullPost\n\u2502              \u2502      \u251c\u2500\u2500 FullPost.css\n\u2502              \u2502      \u2514\u2500\u2500 FullPost.js\n\u2502              \u251c\u2500\u2500 NewPost\n\u2502              \u2502      \u251c\u2500\u2500 NewPost.css\n\u2502              \u2502      \u2514\u2500\u2500 NewPost.js\n\u2502              \u251c\u2500\u2500 Posts\n\u2502              \u2502     \u2514\u2500\u2500 Post.js\n\u2502              \u251c\u2500\u2500 Blog.css\n\u2502              \u2514\u2500\u2500 Blog.js\n\u2502\n\u251c\u2500\u2500 axios.js\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,o.kt)("h2",{id:"appjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"First of all need to enable routing in our react app, we do this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," file. There you now need to wrap the part which should be able to render routes and to read routes, you need to wrap it with a component you import from the react-router-dom package."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,8,12}',title:'"App.js"',"{2,8,12}":!0},'import React, { Component } from "react";\nimport { BrowserRouter } from "react-router-dom";\nimport Blog from "./containers/Blog/Blog";\n\nclass App extends Component {\n  render() {\n    return (\n      <BrowserRouter>\n        <div className="App">\n          <Blog />\n        </div>\n      </BrowserRouter>\n    );\n  }\n}\n\nexport default App;\n')))}f.isMDXComponent=!0},68111:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(51048),i=n(33609),u=n(1943),l=n(72957),s=n(86010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,g=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===g?g:null!=(t=null!=g?g:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),j=N.tabGroupChoices,O=N.setTabGroupChoices,P=(0,a.useState)(w),T=P[0],x=P[1],E=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=j[v];null!=D&&D!==T&&k.some((function(e){return e.value===D}))&&x(D)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==T&&(C(t),x(r),null!=v&&O(v,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);