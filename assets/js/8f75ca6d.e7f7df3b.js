"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[78398],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=l,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"sed-remove-all-but-alnum",title:"Sed Remove All But Letters and Digits",date:new Date("2022-06-02T11:08:28.000Z")},i=void 0,c={unversionedId:"shells/commands/sed/sed-remove-all-but-alnum",id:"shells/commands/sed/sed-remove-all-but-alnum",title:"Sed Remove All But Letters and Digits",description:"] property will find all non-alphanumerical characters.",source:"@site/docs/shells/commands/sed/sed-remove-all-but-alnum.md",sourceDirName:"shells/commands/sed",slug:"/shells/commands/sed/sed-remove-all-but-alnum",permalink:"/hm/docs/shells/commands/sed/sed-remove-all-but-alnum",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/shells/commands/sed/sed-remove-all-but-alnum.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1654348972,formattedLastUpdatedAt:"6/4/2022",frontMatter:{id:"sed-remove-all-but-alnum",title:"Sed Remove All But Letters and Digits",date:"2022-06-02T11:08:28.000Z"},sidebar:"Docs",previous:{title:"sed-my-experience",permalink:"/hm/docs/shells/commands/sed/sed-my-experience"},next:{title:"rm",permalink:"/hm/docs/shells/powershell/rm"}},u={},d=[{value:"Given",id:"given",level:2},{value:"Solved Initial",id:"solved-initial",level:2},{value:"Update",id:"update",level:2},{value:"Source",id:"source",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[^[:alnum:]]")," property will find all non-alphanumerical characters."),(0,a.kt)("h2",{id:"given"},"Given"),(0,a.kt)("p",null,"'file' with this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"MytextOnly !@#!text@@32423#@$text#%$#text%#t23432ext$32342%^-_+-=-_++_;:\"'][}}{|\\/\n")),(0,a.kt)("h2",{id:"solved-initial"},"Solved Initial"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sed 's/[^[:alnum:]]\\+//g' file\nMytextOnlytext32423texttextt23432ext32342\n")),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"Check my updated answer for allowing forward slash. @Tiago: Quantifier + is used for efficiency so that less # of replacements happen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sed 's~[^[:alnum:]/]\\+~~g' file\nMytextOnlytext32423texttextt23432ext32342/\n")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://stackoverflow.com/a/28617593",class:"external"},"stackoverflow.com: 28617593"))))}p.isMDXComponent=!0}}]);