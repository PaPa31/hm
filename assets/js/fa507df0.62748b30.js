"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[93957],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return n?r.createElement(b,o(o({ref:e},d),{},{components:n})):r.createElement(b,o({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71699:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"bit",title:"Bit",date:new Date("2021-02-14T20:02:51.000Z"),description:"How much information is in a bit"},c=void 0,u={unversionedId:"digital-design/binary-numbers/bit",id:"digital-design/binary-numbers/bit",title:"Bit",description:"How much information is in a bit",source:"@site/docs/digital-design/binary-numbers/bit.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/bit",permalink:"/hm/docs/digital-design/binary-numbers/bit",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/bit.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1613395895,formattedLastUpdatedAt:"2/15/2021",frontMatter:{id:"bit",title:"Bit",date:"2021-02-14T20:02:51.000Z",description:"How much information is in a bit"},sidebar:"Docs",previous:{title:"Binary Trick",permalink:"/hm/docs/digital-design/binary-numbers/binary-trick"},next:{title:"Crash Due to Overflow",permalink:"/hm/docs/digital-design/binary-numbers/crash-due-to-overflow"}},d={},l=[],p={toc:l};function m(t){var e=t.components,s=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"amount of information")," D in a discrete valued variable with N distinct states is measured in units of ",(0,a.kt)("em",{parentName:"p"},"bits")," as"),(0,a.kt)("p",null,"D = log",(0,a.kt)("sub",null,"2"),"N bits"),(0,a.kt)("p",null,"A binary ",(0,a.kt)("del",{parentName:"p"},"variable"),"(?) conveys log",(0,a.kt)("sub",null,"2"),"2 = 1 bit of information. Indeed, the word bit is short for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"b")),"inary dig",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"it")),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Bit Definition")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A bit is two discrete values of information"))),(0,a.kt)("p",null,"Not to be confused with positions in binary numbers. Or how many bits of a binary number does it take to include this value."),(0,a.kt)("p",null,"One digit - is zero information! Fine!"),(0,a.kt)("p",null,"From: ",(0,a.kt)("a",{target:"_blank",href:n(88711).Z},"Harris D. M., Harris S. L. - Digital Design and Computer Architecture, 2nd Edition - 2012"),(0,a.kt)("br",{parentName:"p"}),"\n","1.4.6 Signed Binary Numbers - 8 page"))}m.isMDXComponent=!0},88711:function(t,e,n){e.Z=n.p+"assets/files/harris-d-m-harris-s-l-digital-design-and-computer-architecture-2nd-edition-2012-278aad41bbd5750ed2461b2011414915.pdf"}}]);