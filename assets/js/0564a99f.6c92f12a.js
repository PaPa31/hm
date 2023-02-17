"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[43875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),l=r(34259),o=r(18679);const u={id:"15-02-installing-redux-and-react-redux",title:"15.02 Installing Redux And React Redux",date:new Date("2021-07-12T19:19:29.000Z")},c=void 0,i={unversionedId:"react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux",id:"react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux",title:"15.02 Installing Redux And React Redux",description:"Installing Redux and React Redux",source:"@site/courses/react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux.md",sourceDirName:"react-complete-guide/15-add-redux-to-our-project",slug:"/react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/15-add-redux-to-our-project/15-02-installing-redux-and-react-redux.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"15-02-installing-redux-and-react-redux",title:"15.02 Installing Redux And React Redux",date:"2021-07-12T19:19:29.000Z"},sidebar:"Courses",previous:{title:"15.0 Lesson",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-0-lesson"},next:{title:"15.03 Basic Redux Setup",permalink:"/hm/courses/react-complete-guide/15-add-redux-to-our-project/15-03-basic-redux-setup"}},d={},s=[{value:"Installing Redux and React Redux",id:"installing-redux-and-react-redux",level:2},{value:"New <code>actions.js</code>",id:"new-actionsjs",level:2},{value:"New <code>reducer.js</code>",id:"new-reducerjs",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"installing-redux-and-react-redux"},"Installing Redux and React Redux"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save redux react-redux\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add redux react-redux\n")))),(0,n.kt)("h2",{id:"new-actionsjs"},"New ",(0,n.kt)("inlineCode",{parentName:"h2"},"actions.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="actions.js" {}',title:'"actions.js"',"{}":!0},'export const ADD_INGREDIENT = "ADD_INGREDIENT";\nexport const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";\n')),(0,n.kt)("h2",{id:"new-reducerjs"},"New ",(0,n.kt)("inlineCode",{parentName:"h2"},"reducer.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="reducer.js" {}',title:'"reducer.js"',"{}":!0},"const initialState = {\n  ingredients: null,\n  totalPrice: 4,\n};\n\nconst reducer = (state = initialState, action) => {};\n\nexport default reducer;\n")))}m.isMDXComponent=!0},18679:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},34259:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),l=r(86010),o=r(51048),u=r(33609),c=r(1943),i=r(72957);const d="tabList__CuJ",s="tabItem_LNqP";function p(e){var t;const{lazy:r,block:o,defaultValue:p,values:m,groupId:f,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),x=(0,u.l)(v,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:j}=(0,c.U)(),[k,N]=(0,n.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=f){const e=y[f];null!=e&&e!==k&&v.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,r=w.indexOf(t),a=v[r].value;a!==k&&(E(t),N(a),null!=f&&j(f,String(a)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":k===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);