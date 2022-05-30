"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[30350],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30241:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),i=n(86010),a=n(83699),o=n(54715),s="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",c=n(2735),d=n(97325);function p(e){var t=e.href,n=e.children;return r.createElement(a.default,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function m(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function f(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t,n=e.item,i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function b(e){var t=e.item;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{key:t,item:e}))})))}},18039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(92115),s=n(30241),l=n(54715),u=["components"],c={id:"README",title:'Linux "Everything is a file" \ud83d\udcbe',date:new Date("2022-05-23T00:44:13.000Z"),Description:"Linux kernel - a UNIX clone by Linus Torvalds"},d=void 0,p={unversionedId:"os/unix/linux/README",id:"os/unix/linux/README",title:'Linux "Everything is a file" \ud83d\udcbe',description:"GNU/Linux distribution",source:"@site/docs/os/unix/linux/README.md",sourceDirName:"os/unix/linux",slug:"/os/unix/linux/",permalink:"/hm/docs/os/unix/linux/",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/os/unix/linux/README.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1653924769,formattedLastUpdatedAt:"5/30/2022",frontMatter:{id:"README",title:'Linux "Everything is a file" \ud83d\udcbe',date:"2022-05-23T00:44:13.000Z",Description:"Linux kernel - a UNIX clone by Linus Torvalds"},sidebar:"Docs",previous:{title:'Unix "Worse is better" \u262e\ufe0f',permalink:"/hm/docs/os/unix/"},next:{title:"Debian",permalink:"/hm/docs/os/unix/linux/debian/"}},m={},f=[{value:"GNU/Linux distribution",id:"gnulinux-distribution",level:2},{value:"Debian (Stable)",id:"debian-stable",level:2},{value:"MX Linux",id:"mx-linux",level:2}],h={toc:f};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gnulinux-distribution"},"GNU/Linux distribution"),(0,a.kt)("p",null,"Linus Torvalds used and appreciated Minix, but his design deviated from the Minix architecture in significant ways, most notably by employing a monolithic kernel instead of a microkernel."),(0,a.kt)("p",null,'When Linus Torvalds first started writing his Linux operating system kernel (1991), he was working on a machine running MINIX, and adopted its file system layout. This soon proved problematic, since MINIX restricted filename lengths to 14 characters (30 in later versions), it limited partitions to 64 megabytes, and the file system was designed for teaching purposes, not performance. The Extended file system (ext; April 1992) was developed to replace MINIX\'s, but it was only with the second version of this, ext2, that Linux obtained a commercial-grade file system. As of 1994, the MINIX file system was "scarcely in use" among Linux users.'),(0,a.kt)("p",null,'On 17 September 1991, Torvalds prepared version 0.01 of Linux and put on the "ftp.funet.fi" \u2013 FTP server of the Finnish University and Research Network (FUNET). It was not even executable since its code still needed Minix for compilation and play.'),(0,a.kt)("h2",{id:"debian-stable"},"Debian (Stable)"),(0,a.kt)("p",null,"Community-supported Debian Project, which was established by Ian Murdock in 1993. The Debian ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Debian#Branches",class:"external"},"Stable branch")," is the most popular edition for personal computers and servers. Debian is also the basis for many other distributions, most notably Ubuntu."),(0,a.kt)("p",null,"But the most popular Linux distro in the world (see ",(0,a.kt)("a",{href:"https://distrowatch.com/dwres.php?resource=popularity",class:"external"},"distros rank"),") is MX Linux."),(0,a.kt)("h2",{id:"mx-linux"},"MX Linux"),(0,a.kt)("p",null,'MX Linux, a desktop-oriented Linux distribution based on Debian\'s "Stable" branch, is a cooperative venture between the antiX and former MEPIS Linux communities.'),(0,a.kt)("div",{className:o.Z.colorRed},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OS Type:")," Linux"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Based on:")," Debian (Stable), antiX"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Origin:")," Greece"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Architecture:")," armhf, i686, x86_64"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Desktop:")," KDE Plasma, Xfce, Fluxbox"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Category:")," Desktop, From RAM, Live Medium, Raspberry Pi"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status:")," Active"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Popularity:")," 1 (3,091 hits per day)"))),(0,a.kt)(s.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0},92115:function(e,t){t.Z={colorRed:"colorRed_pYHX",maxwidth:"maxwidth_Cyd0",wrap:"wrap_bYCR"}}}]);