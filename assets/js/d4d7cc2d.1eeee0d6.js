"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[47620],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30241:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(67294),i=n(86010),a=n(83699),o=n(54715),l="cardContainer_woeA",u="cardTitle_pNjP",c="cardDescription_qC_k",s=n(2735),m=n(97325);function d(e){var t=e.href,n=e.children;return r.createElement(a.default,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",c),title:o},o))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function x(e){var t,n=e.item,i=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(x,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{key:t,item:e}))})))}},51426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return x},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(30241),l=n(54715),u=["components"],c={id:"README",title:"MX Linux",date:new Date("2022-05-22T20:26:24.000Z")},s=void 0,m={unversionedId:"os/unix/linux/debian/mx-linux/README",id:"os/unix/linux/debian/mx-linux/README",title:"MX Linux",description:"The latest MX Linux distro MX Linux Blog",source:"@site/docs/os/unix/linux/debian/mx-linux/README.md",sourceDirName:"os/unix/linux/debian/mx-linux",slug:"/os/unix/linux/debian/mx-linux/",permalink:"/hm/docs/os/unix/linux/debian/mx-linux/",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/os/unix/linux/debian/mx-linux/README.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1653633636,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"README",title:"MX Linux",date:"2022-05-22T20:26:24.000Z"},sidebar:"Docs",previous:{title:"Debian",permalink:"/hm/docs/os/unix/linux/debian/"},next:{title:"MX-21 Wildflower",permalink:"/hm/docs/os/unix/linux/debian/mx-linux/mx-21/"}},d={},p=[{value:"MX-21",id:"mx-21",level:2}],f={toc:p};function x(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The latest MX Linux distro: ",(0,a.kt)("a",{href:"https://mxlinux.org/mx-linux-blog/",class:"external"},"mxlinux.org: MX Linux Blog")),(0,a.kt)("h2",{id:"mx-21"},"MX-21"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base on"),": Debian 11 \u201cbullseye\u201d"),(0,a.kt)("li",{parentName:"ul"},"New and updated applications"),(0,a.kt)("li",{parentName:"ul"},"New installer partition selection/management area including some lvm support if lvm volume exists already and the ability to set existing data partitions to be mounted on install"),(0,a.kt)("li",{parentName:"ul"},"New UEFI live system boot menus. UEFI live users can now select your live boot options (persistence, etc\u2026) from the boot menu and submenus rather than using the previous console menus"),(0,a.kt)("li",{parentName:"ul"},"Xfce 4.16, Plasma 5.20, fluxbox 1.3.7 with mx-fluxbox 3.0 configs"),(0,a.kt)("li",{parentName:"ul"},"User password (sudo) for admin tasks by default. You can switch this in mx-tweak->Other tab"),(0,a.kt)("li",{parentName:"ul"},"MX-Tour showing an overview of each desktop environment"),(0,a.kt)("li",{parentName:"ul"},"Translation updates!"),(0,a.kt)("li",{parentName:"ul"},"MX-Comfort default theming, including dark variants and \u201cthick border\u201d Xfwm variants"),(0,a.kt)("li",{parentName:"ul"},"Mesa vulkan drivers are installed by default"),(0,a.kt)("li",{parentName:"ul"},"Better realtek wifi support"),(0,a.kt)("li",{parentName:"ul"},"A ton of customization and custom scripts in MX-Fluxbox")),(0,a.kt)("p",null,"antiX live system changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UEFI Live boot menus"),(0,a.kt)("li",{parentName:"ul"},"Extra \u201crollback\u201d boot option now exposed in menus"),(0,a.kt)("li",{parentName:"ul"},"The live system will likely not boot on systems with secure boot enabled (at least for now\u2026)")),(0,a.kt)(o.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}x.isMDXComponent=!0}}]);