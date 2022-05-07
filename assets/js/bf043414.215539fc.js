"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[85546],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),c=r,g=p["".concat(l,".").concat(c)]||p[c]||m[c]||a;return t?i.createElement(g,o(o({ref:n},d),{},{components:t})):i.createElement(g,o({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4001:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"sign-with-magnitude",title:"Sign/Magnitude"},l=void 0,u={unversionedId:"digital-design/binary-numbers/sign-with-magnitude",id:"digital-design/binary-numbers/sign-with-magnitude",title:"Sign/Magnitude",description:"2021-02-06 1710",source:"@site/docs/digital-design/binary-numbers/sign-with-magnitude.md",sourceDirName:"digital-design/binary-numbers",slug:"/digital-design/binary-numbers/sign-with-magnitude",permalink:"/hm/docs/digital-design/binary-numbers/sign-with-magnitude",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/digital-design/binary-numbers/sign-with-magnitude.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1612883719,formattedLastUpdatedAt:"2/9/2021",frontMatter:{id:"sign-with-magnitude",title:"Sign/Magnitude"},sidebar:"Docs",previous:{title:"Sign Extension",permalink:"/hm/docs/digital-design/binary-numbers/sign-extension"},next:{title:"Three Ideas of Signed Binary Numbers",permalink:"/hm/docs/digital-design/binary-numbers/three-ideas-signed-binary-numbers"}},d={},m=[{value:"Limitations",id:"limitations",level:2}],p={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2021-02-06 17:45:10"),(0,a.kt)("p",null,"This is simplest method. The most significant bit is a sign bit: 1 - negative, 0 - positive. Others bits is a magnitude (absolute value). No need the inverting or something else. Range in N-bit numbers: ","[-2",(0,a.kt)("sup",null,"N-1"),"+1, 2",(0,a.kt)("sup",null,"N-1"),"-1]","."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="8-bit"',title:'"8-bit"'},"binary -> decimal\n1000 0001 = -1\n0000 0001 = 1\n\n8-bit min = 1111 1111 (-127)\n8-bit max = 0111 1111 (+127)\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two representation of zero: 0000 0000 (0) and 1000 0000 (-0). This needs additional verification."),(0,a.kt)("li",{parentName:"ul"},"Addition doesn't work, for example: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  1001 = -6\n+\n  0110 = 6\n  ----\n  1111 -> Wrong!\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Addition and subtraction require different behavior depending on the sign bit. (Whereas ",(0,a.kt)("a",{parentName:"p",href:"ones-complement"},"ones' complement")," can ignore sign bit and just do the end-around carry. And ",(0,a.kt)("a",{parentName:"p",href:"twos-complement"},"two's complement")," can ignore sign bit and depend on the overflow behavior.)"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comparing two numbers also requires additional sign check."),(0,a.kt)("li",{parentName:"ul"},"Minimal negative number: -127 (instead -128 in ",(0,a.kt)("em",{parentName:"li"},"two's complement"),")")),(0,a.kt)("p",null,"Some early binary computers (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IBM_7090"},"IBM 7090"),") used this representation. Perhaps because of its naturalistic."),(0,a.kt)("p",null,"From: ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Signed_number_representations#Signed_magnitude_representation"},"Signed Number Representation (Wikipedia)")))}c.isMDXComponent=!0}}]);