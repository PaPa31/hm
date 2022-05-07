"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[59697],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27448:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(5529),t(68111),["components"]),l={title:"nvs: One Node Version Per Terminal in Windows",authors:["papa31"],tags:["nvs","node"],date:new Date("2021-09-19T13:47:35.000Z"),decription:"Install and setup nvs to Windows for PowerShell and Git-Bash",draft:!1},u=void 0,s={permalink:"/hm/blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows",editUrl:"https://github.com/papa31/hm/edit/documentation/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",source:"@site/blog/2021-09-19-nvs-one-node-version-per-terminal-in-windows.mdx",title:"nvs: One Node Version Per Terminal in Windows",description:"I tried to configure nvm-windows to automatically change the node version based on the folder with a specific .nvmrc file. But unsuccessfully. When I used to run nvm use the node version changed globally.",date:"2021-09-19T13:47:35.000Z",formattedDate:"September 19, 2021",tags:[{label:"nvs",permalink:"/hm/blog/tags/nvs"},{label:"node",permalink:"/hm/blog/tags/node"}],readingTime:2.94,truncated:!0,authors:[{name:"papa31",title:"bibel miner",url:"https://github.com/papa31",imageURL:"https://github.com/papa31.png",key:"papa31"}],frontMatter:{title:"nvs: One Node Version Per Terminal in Windows",authors:["papa31"],tags:["nvs","node"],date:"2021-09-19T13:47:35.000Z",decription:"Install and setup nvs to Windows for PowerShell and Git-Bash",draft:!1},nextItem:{title:"Docusaurus: Test & Build",permalink:"/hm/blog/2020/12/21/docusaurus-test-and-build"}},c={authorsImageUrls:[void 0]},d=[],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I tried to configure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows")," to automatically change the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," version based on the folder with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},".nvmrc")," file. But unsuccessfully. When I used to run ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm use")," the node version changed globally."),(0,o.kt)("p",null,"I have read about ",(0,o.kt)("a",{href:"https://github.com/jasongin/nvs#automatic-switching-per-directory",class:"external"},"nvs: Automatic Switching Per Directory (github.com)")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nvs readme file")," and decided to give it a try."))}m.isMDXComponent=!0},68111:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5529:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),o=t(51048),i=t(33609),l=t(1943),u=t(72957),s=t(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,o,p=e.lazy,m=e.block,f=e.defaultValue,v=e.values,h=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),w=(0,i.l)(y,(function(e,n){return e.value===n.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=g[0])?void 0:o.props.value;if(null!==O&&!y.some((function(e){return e.value===O})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),T=k.tabGroupChoices,E=k.setTabGroupChoices,N=(0,a.useState)(O),P=N[0],j=N[1],x=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=T[h];null!=I&&I!==P&&y.some((function(e){return e.value===I}))&&j(I)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),r=y[t].value;r!==P&&(D(n),j(r),null!=h&&E(h,r))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),p?(0,a.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}}}]);