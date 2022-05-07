"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[76140],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,g=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"sign-extension",title:"Sign Extension"},u=void 0,l={unversionedId:"digital-design/binary-numbers/sign-extension",id:"digital-design/binary-numbers/sign-extension",title:"Sign Extension",description:"When you do sign extension, you take the higher bit (sign digit) from small-bit-number and fill the rest of the most significant bits in the larger-bit-number with that sign digit.",source:"@site/docs/digital-design/binary-numbers/sign-extension.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/sign-extension",permalink:"/hm/ru/docs/digital-design/binary-numbers/sign-extension",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/sign-extension.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1612883719,formattedLastUpdatedAt:"09.02.2021",frontMatter:{id:"sign-extension",title:"Sign Extension"},sidebar:"Docs",previous:{title:"Range Number Systems",permalink:"/hm/ru/docs/digital-design/binary-numbers/range-number-systems"},next:{title:"Sign/Magnitude",permalink:"/hm/ru/docs/digital-design/binary-numbers/sign-with-magnitude"}},c={},m=[{value:"Resources",id:"resources",level:2}],d={toc:m};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you do ",(0,a.kt)("em",{parentName:"p"},"sign extension"),", you take the higher bit (sign digit) from small-bit-number and fill the rest of the most significant bits in the larger-bit-number with that sign digit."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Sign extension"',title:'"Sign','extension"':!0},"4-bit to 8-bit\n1000 -> 11111000\n0101 -> 00000101\n")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(88711).Z},"Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012"),(0,a.kt)("br",{parentName:"p"}),"\n","1.4.6 Signed Binary Numbers - 18 page"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"three-ideas-signed-binary-numbers"},"Three Ideas of Signed Binary Numbers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"weird-number"},"Weird Number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"crash-due-to-overflow"},"Crash Due to Overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"twos-complement-overflow"},"Twos Complement Overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"range-number-systems"},"Range Number Systems"))))}p.isMDXComponent=!0},88711:function(e,t,n){t.Z=n.p+"assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"}}]);