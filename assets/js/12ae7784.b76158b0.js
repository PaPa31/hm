"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[8731],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"regex-in-vs-code",title:"RegEx in VS Code",date:new Date("2021-02-17T12:44:29.000Z"),description:"What flavor of Regex does Visual Studio Code use?"},s=void 0,p={unversionedId:"vs-code/regex/regex-in-vs-code",id:"vs-code/regex/regex-in-vs-code",isDocsHomePage:!1,title:"RegEx in VS Code",description:"What flavor of Regex does Visual Studio Code use?",source:"@site/docs/vs-code/regex/regex-in-vs-code.md",sourceDirName:"vs-code/regex",slug:"/vs-code/regex/regex-in-vs-code",permalink:"/hm/docs/vs-code/regex/regex-in-vs-code",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/regex/regex-in-vs-code.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1614328040,formattedLastUpdatedAt:"2/26/2021",frontMatter:{id:"regex-in-vs-code",title:"RegEx in VS Code",date:"2021-02-17T12:44:29.000Z",description:"What flavor of Regex does Visual Studio Code use?"},sidebar:"Docs",previous:{title:"Regex Examples",permalink:"/hm/docs/vs-code/regex/regex-examples"},next:{title:"All vscode Snippets",permalink:"/hm/docs/vs-code/snippets/all-vscode-snippets"}},d=[{value:"More Examples",id:"more-examples",children:[]}],u={toc:d};function c(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I was faced with the need of massively change ",(0,o.kt)("inlineCode",{parentName:"p"},"(a)")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"a)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"(b)")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"b)")," and so on. After I changed ",(0,o.kt)("inlineCode",{parentName:"p"},"(a)")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"a)")," using Fined/Replace, instead of continuing the tedious manual replacement letter by letter, I remembered about ",(0,o.kt)("inlineCode",{parentName:"p"},"regular expressions"),"."),(0,o.kt)("p",null,"I had some experience with ",(0,o.kt)("a",{parentName:"p",href:"../../shells/bash/regex-in-bash"},"regular expressions in bash")," and I was able to make the required expression pretty soon."),(0,o.kt)("p",null,"There are some differences in how ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"regex")),"(regular expressions) work in VS Code though."),(0,o.kt)("p",null,"As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/42179046/what-flavor-of-regex-does-visual-studio-code-use#42184299"},"Regarding Find/Replace with Groups")," the grouping is done a little differently:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"instead ",(0,o.kt)("inlineCode",{parentName:"li"},"\\( \\)")," you need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"( )")),(0,o.kt)("li",{parentName:"ul"},"and instead ",(0,o.kt)("inlineCode",{parentName:"li"},"\\1")," you need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"$1"))),(0,o.kt)("p",null,"And my finished regex was like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find: ",(0,o.kt)("inlineCode",{parentName:"li"},"\\((.)\\)")),(0,o.kt)("li",{parentName:"ul"},"Replace: ",(0,o.kt)("inlineCode",{parentName:"li"},"$1)"))),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(38154).Z},(0,o.kt)("img",{alt:"Regex in VS Code",src:n(36622).Z}))),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Find"),(0,o.kt)("th",{parentName:"tr",align:null},"Replace"),(0,o.kt)("th",{parentName:"tr",align:null},"Was"),(0,o.kt)("th",{parentName:"tr",align:null},"Is"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"b>(..</su)b")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"p>$1p")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<sub>10</sub>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<sup>10</sup>"))))))}c.isMDXComponent=!0},38154:function(e,t,n){t.Z=n.p+"assets/files/regex-in-vs-code-99e6c897269a5a689463b2d6219dec03.png"},36622:function(e,t,n){t.Z=n.p+"assets/images/regex-in-vs-code-99e6c897269a5a689463b2d6219dec03.png"}}]);