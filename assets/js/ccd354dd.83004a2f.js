"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[7081],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(b,a(a({ref:t},m),{},{components:n})):r.createElement(b,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"ones-complement",title:"Ones' Complement"},s=void 0,u={unversionedId:"digital-design/binary-numbers/ones-complement",id:"digital-design/binary-numbers/ones-complement",title:"Ones' Complement",description:"Another system representation of negative numbers is ones' complement.",source:"@site/docs/digital-design/binary-numbers/ones-complement.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/ones-complement",permalink:"/hm/docs/digital-design/binary-numbers/ones-complement",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/ones-complement.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1612883719,formattedLastUpdatedAt:"2/9/2021",frontMatter:{id:"ones-complement",title:"Ones' Complement"},sidebar:"Docs",previous:{title:"Crash Due to Overflow",permalink:"/hm/docs/digital-design/binary-numbers/crash-due-to-overflow"},next:{title:"Range Number Systems",permalink:"/hm/docs/digital-design/binary-numbers/range-number-systems"}},m=[{value:"Limitations",id:"limitations",children:[],level:2}],c={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Another system representation of negative numbers is ",(0,o.kt)("strong",{parentName:"p"},"ones' complement"),"."),(0,o.kt)("p",null,'"Ones\' complement" because a negative number is a "complement" to its positive counterpart up to 1. That is, if you add, bit by bit, the number and its negative counterpart, you get 11..111',(0,o.kt)("sub",null,"2"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To find negative counterpart, simply invert all bits of a given positive number. ")),(0,o.kt)("p",null,"Ones' complement form of 01101100",(0,o.kt)("sub",null,"2"),"(99",(0,o.kt)("sub",null,"10"),") is 10010011",(0,o.kt)("sub",null,"2"),"(-99",(0,o.kt)("sub",null,"10"),"). If you add this two numbers, you get 1 in all bits."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," 01101100   99\n+    \n 10010011  -99\n ---------\n 11111111\n")),(0,o.kt)("p",null,'But this is just a clarification of the term "ones\' complement".'),(0,o.kt)("p",null,"To add two numbers represented in this system, you need:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find counterpart"),(0,o.kt)("li",{parentName:"ol"},"Add bit by bit (not forget about carry)"),(0,o.kt)("li",{parentName:"ol"},"If occurred do the end-around carry")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")," Add +2",(0,o.kt)("sub",null,"10")," and -1",(0,o.kt)("sub",null,"10")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:"8-bit Adding","8-bit":!0,Adding:!0},"    binary   decimal\n  00000010    +2\n+ \n  11111110    -1\n  --------    --\n1 00000000     0    incorrect\n+\n         1          add carry\n  --------    \n  00000001    +1    correct\n")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"two zeros")),(0,o.kt)("p",null,"From: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Signed_number_representations#Ones'_complement"},"Signed Number Representation (Wikipedia)")))}p.isMDXComponent=!0}}]);