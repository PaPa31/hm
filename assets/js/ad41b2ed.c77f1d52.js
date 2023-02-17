"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[28893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"twos-complement-overflow",title:"Two's Complement Overflow"},i=void 0,l={unversionedId:"digital-design/binary-numbers/twos-complement-overflow",id:"digital-design/binary-numbers/twos-complement-overflow",title:"Two's Complement Overflow",description:"Unlike unsigned numbers, a carry out of the most significant column",source:"@site/docs/digital-design/binary-numbers/twos-complement-overflow.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/twos-complement-overflow",permalink:"/hm/docs/digital-design/binary-numbers/twos-complement-overflow",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/twos-complement-overflow.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1613205122,formattedLastUpdatedAt:"Feb 13, 2021",frontMatter:{id:"twos-complement-overflow",title:"Two's Complement Overflow"},sidebar:"Docs",previous:{title:"Three Ideas of Signed Binary Numbers",permalink:"/hm/docs/digital-design/binary-numbers/three-ideas-signed-binary-numbers"},next:{title:"Two's Complement",permalink:"/hm/docs/digital-design/binary-numbers/twos-complement"}},s={},u=[{value:"Resources",id:"resources",level:2}],m={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlike unsigned numbers, a carry out of the most significant column\ndoes not indicate overflow. "),(0,a.kt)("p",null,"When adding N-bit numbers, the carry out the Nth bit (i.e. the N + 1th bit) is discarded."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," Compute 1101",(0,a.kt)("sub",null,"2")," + 1001",(0,a.kt)("sub",null,"2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   1101 = (-8+4+1) = -3\n+  1011 = (-8+2+1) = -5\n   ====\n 1 1000 = -8 (no overflow)\n")),(0,a.kt)("p",null,"There is no overflow when adding numbers with different sing. "),(0,a.kt)("p",null,"If, after adding two numbers with same sign, you get a result with other sign - this is overflow."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nCompute 4",(0,a.kt)("sub",null,"10"),"+5",(0,a.kt)("sub",null,"10")," using two's complement numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="4-bit Overflow"',title:'"4-bit','Overflow"':!0},"  0100 = 4\n+\n  0101 = 5\n  ----\n  1001 = -7 -> Overflow\n")),(0,a.kt)("p",null,"In this case ",(0,a.kt)("a",{parentName:"p",href:"sign-extension"},"sign extension")," will help."),(0,a.kt)("p",null,"Overflow can be very dangerous. ",(0,a.kt)("a",{parentName:"p",href:"crash-due-to-overflow"},"Crash due to overflow"),"."),(0,a.kt)("p",null,"From: ",(0,a.kt)("a",{target:"_blank",href:n(88711).Z},"Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012"),(0,a.kt)("br",{parentName:"p"}),"\n","1.4.6 Signed Binary Numbers - 18 page"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"three-ideas-signed-binary-numbers"},"Three Ideas of Signed Binary Numbers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"weird-number"},"Weird Number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"crash-due-to-overflow"},"Crash Due to Overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"range-number-systems"},"Range Number Systems")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"sign-extension"},"Sign Extension"))))}p.isMDXComponent=!0},88711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"}}]);