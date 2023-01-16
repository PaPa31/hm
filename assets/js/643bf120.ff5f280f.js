"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[6046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(34259),l=r(18679);const i={id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:new Date("2021-04-14T20:24:07.000Z")},u=void 0,s={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",description:"Installing react-router and react-router-dom",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-04-setting-up-router-package.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"11-04-setting-up-router-package",title:"11.04 Setting Up Router Package",date:"2021-04-14T20:24:07.000Z"},sidebar:"Courses",previous:{title:"11.03 Setting Up Links",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-03-setting-up-links"},next:{title:"11.05 React Router Vs React Router Dom",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-05-react-router-vs-react-router-dom"}},p={},c=[{value:"Installing <code>react-router</code> and <code>react-router-dom</code>",id:"installing-react-router-and-react-router-dom",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>App.js</code>",id:"appjs",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-react-router-and-react-router-dom"},"Installing ",(0,a.kt)("inlineCode",{parentName:"h2"},"react-router")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"react-router-dom")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-router react-router-dom\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-router react-router-dom\n")))),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nsrc/\n\u2502\n\u251c\u2500\u2500 components/\n\u2502       \u2514\u2500\u2500 Post/\n\u2502             \u251c\u2500\u2500 Post.css\n\u2502             \u2514\u2500\u2500 Post.js\n\u2502\n\u251c\u2500\u2500 containers/\n\u2502        \u2514\u2500\u2500 Blog/\n\u2502              \u251c\u2500\u2500 FullPost\n\u2502              \u2502      \u251c\u2500\u2500 FullPost.css\n\u2502              \u2502      \u2514\u2500\u2500 FullPost.js\n\u2502              \u251c\u2500\u2500 NewPost\n\u2502              \u2502      \u251c\u2500\u2500 NewPost.css\n\u2502              \u2502      \u2514\u2500\u2500 NewPost.js\n\u2502              \u251c\u2500\u2500 Posts\n\u2502              \u2502     \u2514\u2500\u2500 Post.js\n\u2502              \u251c\u2500\u2500 Blog.css\n\u2502              \u2514\u2500\u2500 Blog.js\n\u2502\n\u251c\u2500\u2500 axios.js\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 index.css\n\u2502\n")),(0,a.kt)("h2",{id:"appjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"First of all need to enable routing in our react app, we do this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," file. There you now need to wrap the part which should be able to render routes and to read routes, you need to wrap it with a component you import from the react-router-dom package.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js" {2,8,12}',title:'"App.js"',"{2,8,12}":!0},'import React, { Component } from "react";\nimport { BrowserRouter } from "react-router-dom";\nimport Blog from "./containers/Blog/Blog";\n\nclass App extends Component {\n  render() {\n    return (\n      <BrowserRouter>\n        <div className="App">\n          <Blog />\n        </div>\n      </BrowserRouter>\n    );\n  }\n}\n\nexport default App;\n')))}m.isMDXComponent=!0},18679:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},34259:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(51048),i=r(33609),u=r(1943),s=r(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:g,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,u.U)(),[j,N]=(0,a.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=g){const e=k[g];null!=e&&e!==j&&v.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,r=P.indexOf(t),n=v[r].value;n!==j&&(O(t),N(n),null!=g&&w(g,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;r=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=P[t]??P[P.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>P.push(e),onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":j===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);