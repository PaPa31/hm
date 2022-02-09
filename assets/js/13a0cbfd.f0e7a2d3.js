"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[59697],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27448:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(5529),t(98448),["components"]),l={title:"nvs: One Node Version Per Terminal in Windows",authors:["papa31"],tags:["nvs","node"],date:new Date("2021-09-19T13:47:35.000Z"),decription:"Install and setup nvs to Windows for PowerShell and Git-Bash",draft:!1},u=void 0,s={permalink:"/hm/blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",source:"@site/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",title:"nvs: One Node Version Per Terminal in Windows",description:"I tried to configure nvm-windows to automatically change the node version based on the folder with a specific .nvmrc file. But unsuccessfully. When I used to run nvm use the node version changed globally.",date:"2021-09-19T13:47:35.000Z",formattedDate:"September 19, 2021",tags:[{label:"nvs",permalink:"/hm/blog/tags/nvs"},{label:"node",permalink:"/hm/blog/tags/node"}],readingTime:2.94,truncated:!0,authors:[{name:"papa31",title:"bibel miner",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],frontMatter:{title:"nvs: One Node Version Per Terminal in Windows",authors:["papa31"],tags:["nvs","node"],date:"2021-09-19T13:47:35.000Z",decription:"Install and setup nvs to Windows for PowerShell and Git-Bash",draft:!1},nextItem:{title:"Docusaurus: Test & Build",permalink:"/hm/blog/2020/12/21/docusaurus-test-and-build"}},c={authorsImageUrls:[void 0]},d=[],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I tried to configure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows")," to automatically change the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," version based on the folder with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},".nvmrc")," file. But unsuccessfully. When I used to run ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm use")," the node version changed globally."),(0,o.kt)("p",null,"I have read about ",(0,o.kt)("a",{href:"https://github.com/jasongin/nvs#automatic-switching-per-directory",class:"external"},"nvs: Automatic Switching Per Directory (github.com)")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nvs readme file")," and decided to give it a try."))}m.isMDXComponent=!0},98448:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5529:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),a=t(67294),o=t(51048),i=t(89623),l=t(86010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),w=y.tabGroupChoices,O=y.setTabGroupChoices,k=(0,a.useState)(g),T=k[0],E=k[1],N=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&E(j)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),r=h[t].value;r!==T&&(P(n),E(r),null!=m&&O(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}}}]);