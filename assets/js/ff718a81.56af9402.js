"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[3414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),s=n(51048),o=n(33609),i=n(1943),c=n(72957);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,i.U)(),[k,N]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=T[b];null!=e&&e!==k&&h.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==k&&(O(t),N(a),null!=b&&w(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},h.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:I,onClick:I},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},45687:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",o="buttons_uHc7",i="browserWindowAddressBar_Pd8y",c="dot_giz1",p="browserWindowMenuIcon_Vhuh",u="bar_rrRL",d="browserWindowBody_Idgs";function m(e){let{children:t,minHeight:n,url:m="http://localhost:3000",style:b}=e;return a.createElement("div",{className:l,style:{minHeight:n+"px"}},a.createElement("div",{className:s},a.createElement("div",{className:o},a.createElement("span",{className:c,style:{background:"#f25f58"}}),a.createElement("span",{className:c,style:{background:"#fbbe3c"}}),a.createElement("span",{className:c,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(i,"text--truncate")},m),a.createElement("div",{className:p},a.createElement("div",null,a.createElement("span",{className:u}),a.createElement("span",{className:u}),a.createElement("span",{className:u})))),a.createElement("div",{className:d,style:b},t))}},844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(45687),s=n(34259),o=n(18679);const i={id:"tabs-snippet",title:"Tabs Snippet",date:new Date("2022-05-27T16:41:06.000Z")},c=void 0,p={unversionedId:"vs-code/snippets/tabs-snippet",id:"vs-code/snippets/tabs-snippet",title:"Tabs Snippet",description:"Usage",source:"@site/docs/vs-code/snippets/tabs-snippet.md",sourceDirName:"vs-code/snippets",slug:"/vs-code/snippets/tabs-snippet",permalink:"/hm/docs/vs-code/snippets/tabs-snippet",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/snippets/tabs-snippet.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1653653635,formattedLastUpdatedAt:"May 27, 2022",frontMatter:{id:"tabs-snippet",title:"Tabs Snippet",date:"2022-05-27T16:41:06.000Z"},sidebar:"Docs",previous:{title:"Snippet + Shortcut in VS Code",permalink:"/hm/docs/vs-code/snippets/snippet-plus-shortcut"},next:{title:"Spell Checking",permalink:"/hm/docs/vs-code/spell-checking"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"View",id:"view",level:2},{value:"Snippet Code",id:"snippet-code",level:2}],m={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type two keywords with one space between them: ",(0,r.kt)("inlineCode",{parentName:"li"},"JSX React")),(0,r.kt)("li",{parentName:"ul"},"cut this text"),(0,r.kt)("li",{parentName:"ul"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl + Space")),(0,r.kt)("li",{parentName:"ul"},"type ",(0,r.kt)("inlineCode",{parentName:"li"},"Tab")," (look for: Tabs-from-Clipboard)")),(0,r.kt)("p",null,"You should see a ready form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\'\nimport TabItem from \'@theme/TabItem\'\n\n<Tabs>\n  <TabItem value="jsx" label="JSX" default>\n\n```\n\n```\n\n  </TabItem>\n  <TabItem value="react" label="React">\n\n```\n\n```\n\n  </TabItem>\n</Tabs>\n')),(0,r.kt)("h2",{id:"view"},"View"),(0,r.kt)(l.Z,{mdxType:"BrowserWindow"},(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"jsx",label:"JSX",default:!0,mdxType:"TabItem"},"``` ```"),(0,r.kt)(o.Z,{value:"react",label:"React",mdxType:"TabItem"},"``` ```"))),(0,r.kt)("h2",{id:"snippet-code"},"Snippet Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="global.code-snippets"',title:'"global.code-snippets"'},'"Tabs": {\n        "scope": "javascript,typescript,html,markdown",\n        "prefix": "Tabs-from-Clipboard",\n        "body": [\n            "import Tabs from \'@theme/Tabs\'",\n            "import TabItem from \'@theme/TabItem\'",\n            "",\n            "<Tabs>",\n            "  <TabItem value=\\"${CLIPBOARD/(.*)\\\\s.*/${1:/downcase}/}\\" label=\\"${CLIPBOARD/(.*)\\\\s.*/$1/}\\" default>",\n            "",\n            "```",\n            "",\n            "```",\n            "",\n            "  </TabItem>",\n            "  <TabItem value=\\"${CLIPBOARD/.*\\\\s(.*)/${1:/downcase}/}\\" label=\\"${CLIPBOARD/.*\\\\s(.*)/$1/}\\">",\n            "",\n            "```",\n            "",\n            "```",\n            "",\n            "  </TabItem>",\n            "</Tabs>"\n        ],\n        "description": "Make anchor from clipboard"\n    },\n')))}b.isMDXComponent=!0}}]);