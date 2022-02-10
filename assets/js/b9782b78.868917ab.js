"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[26364],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7920:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(5529),l=t(98448),s=["components"],c={id:"10-04-creating-axios-instance",title:"10.04 Creating Axios Instance",date:new Date("2021-04-13T20:58:08.000Z")},u=void 0,p={unversionedId:"react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance",id:"react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance",title:"10.04 Creating Axios Instance",description:"Installing axios",source:"@site/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance.md",sourceDirName:"react-complete-guide/10-burger-builder-project-accessing-server",slug:"/react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"10-04-creating-axios-instance",title:"10.04 Creating Axios Instance",date:"2021-04-13T20:58:08.000Z"},sidebar:"Docs",previous:{title:"10.03 Creating Firebase Project",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project"},next:{title:"10.05 Sending Post Request",permalink:"/hm/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-05-sending-post-request"}},d=[{value:"Installing <code>axios</code>",id:"installing-axios",children:[],level:2},{value:"New axios-orders.js",id:"new-axios-ordersjs",children:[],level:2}],m={toc:d};function f(e){var r=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installing-axios"},"Installing ",(0,i.kt)("inlineCode",{parentName:"h2"},"axios")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save axios\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add axios\n")))),(0,i.kt)("h2",{id:"new-axios-ordersjs"},"New axios-orders.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="axios-orders.js" {}',title:'"axios-orders.js"',"{}":!0},'import axios from "axios";\n\nconst instance = axios.create({\n  baseURL:\n    "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/",\n});\n\nexport default instance;\n')))}f.isMDXComponent=!0},98448:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},5529:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(87462),a=t(67294),i=t(51048),o=t(89623),l=t(86010),s="tabItem_LplD";function c(e){var r,t,i,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),g=(0,o.lx)(v,(function(e,r){return e.value===r.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(r=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(i=b[0])?void 0:i.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),x=y.tabGroupChoices,j=y.setTabGroupChoices,w=(0,a.useState)(h),k=w[0],O=w[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=x[m];null!=N&&N!==k&&v.some((function(e){return e.value===N}))&&O(N)}var P=function(e){var r=e.currentTarget,t=T.indexOf(r),n=v[t].value;n!==k&&(E(r),O(n),null!=m&&j(m,n))},C=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;t=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===r?0:-1,"aria-selected":k===r,key:r,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":k===r})}),null!=t?t:r)}))),c?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==k})}))))}function u(e){var r=(0,i.Z)();return a.createElement(c,(0,n.Z)({key:String(r)},e))}}}]);