"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[73585],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68111:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(51048),i=n(33609),o=n(1943),u=n(72957),d=n(86010),p="tabList_uSqn",s="tabItem_LplD";function m(e){var t,n,l,m=e.lazy,c=e.block,k=e.defaultValue,g=e.values,N=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,o.U)(),w=x.tabGroupChoices,C=x.setTabGroupChoices,O=(0,r.useState)(y),E=O[0],T=O[1],j=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var $=w[N];null!=$&&$!==E&&b.some((function(e){return e.value===$}))&&T($)}var R=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==E&&(D(t),T(a),null!=N&&C(N,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:R,onClick:R},l,{className:(0,d.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},53798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(5529),o=n(68111),u=["components"],d={id:"regex-examples",title:"Regex Examples",date:new Date("2021-02-24T11:04:46.000Z"),description:"My VS Code regex examples"},p=void 0,s={unversionedId:"vs-code/regex/regex-examples",id:"vs-code/regex/regex-examples",title:"Regex Examples",description:"My VS Code regex examples",source:"@site/docs/vs-code/regex/regex-examples.mdx",sourceDirName:"vs-code/regex",slug:"/vs-code/regex/regex-examples",permalink:"/hm/docs/vs-code/regex/regex-examples",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/regex/regex-examples.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1654348972,formattedLastUpdatedAt:"6/4/2022",frontMatter:{id:"regex-examples",title:"Regex Examples",date:"2021-02-24T11:04:46.000Z",description:"My VS Code regex examples"},sidebar:"Docs",previous:{title:"Open settings.json vscode",permalink:"/hm/docs/vs-code/open-settings-json-vscode"},next:{title:"RegEx in VS Code",permalink:"/hm/docs/vs-code/regex/regex-in-vs-code"}},m={},c=[{value:"9 Removes numbers at start of the lines",id:"9-removes-numbers-at-start-of-the-lines",level:3}],k={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"What Did"),(0,l.kt)("th",{parentName:"tr",align:null},"Find"),(0,l.kt)("th",{parentName:"tr",align:null},"Replace"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-4"),(0,l.kt)("td",{parentName:"tr",align:null},"replace ","[md]"," links with ",(0,l.kt)("inlineCode",{parentName:"td"},"<abbr>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'\\[([^+\\]]+)\\](\\([^"]+")([^"]+)"\\)')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<abbr title="$3">$1</abbr>'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-3"),(0,l.kt)("td",{parentName:"tr",align:null},"find and fix img tags without ",(0,l.kt)("inlineCode",{parentName:"td"},"/"),">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(<input[^>]+)>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1 />"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-2"),(0,l.kt)("td",{parentName:"tr",align:null},"markdown links -> text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\[([^\\]]+)\\]\\([^\\)]+\\)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"Nested tags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'<div class="history">(?:[^<\\r]*(?:<(?!/div>)[^<]*)*</div>){15}')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrap between ",(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"([^"]+)"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Wraps with Italic/Bold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- ([^\\\\:]+)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"- ***$1***"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"From Italic/Bold to Bold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\*{3}(.*)\\*{3}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"**$1**"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds to ","`","`","`"," jsx"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(```)(\\n.)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1jsx$2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes double spaces"),(0,l.kt)("td",{parentName:"tr",align:null},"`","\\s(\\s.)"),(0,l.kt)("td",{parentName:"tr",align:null},"`","$1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes unnessesary ",(0,l.kt)("inlineCode",{parentName:"td"},"\\n")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\n(\\n```\\n\\n)")),(0,l.kt)("td",{parentName:"tr",align:null},"$1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces two empty links with one non-empty one"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\[\\]\\(.*\\n.*[^\\(]+.(.*[^\\)])\\)(.*)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$2\\n\\n[$2]($1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"See above, but replace with ",(0,l.kt)("inlineCode",{parentName:"td"},"<a>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\[\\]\\(.*\\n.*[^\\(]+.(.*[^\\)])\\)(.*)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$2\\n\\n$2 <a href='$2' class='external'>$1</a>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces markdown link with html link"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\[.*\\/\\/([^\\/]+)\\/.*\\]\\((.*)\\)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<a href='$2' class='external'>$1</a>"))))),(0,l.kt)("h3",{id:"9-removes-numbers-at-start-of-the-lines"},"9 Removes numbers at start of the lines"),(0,l.kt)("p",null,"and removes commented lines; removes empty lines"),(0,l.kt)("p",null,"I did this for the poorly formatted code blocks in this tutorial ",(0,l.kt)("a",{href:"https://docs.microsoft.com/en-us/archive/blogs/uk_faculty_connection/using-react-and-building-a-web-site-on-azure",class:"external"},"docs.microsoft.com: Using React and building a web site on Azure"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"<!-.*\\n|^ *\\d[:\\.] *\\n|^.*\\d[:\\.] *|//.*//.*\\n\n")),(0,l.kt)(i.Z,{defaultValue:"was",values:[{label:"was",value:"was"},{label:"became",value:"became"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"was",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"1: // index.js //\n    2:\n    3: var React = require('react');\n    4: var ReactDOM = require('react-dom');\n    5: require('./index.css');\n"))),(0,l.kt)(o.Z,{value:"became",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"var React = require('react');\nvar ReactDOM = require('react-dom');\nrequire('./index.css');\n")))))}g.isMDXComponent=!0}}]);