"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[10203],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?o.createElement(m,a(a({ref:e},p),{},{components:n})):o.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11343:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"evolution-from-ftp-to-github-action",title:"Evolution from FTP to GitHub Action",date:new Date("2021-11-13T13:22:39.000Z")},l=void 0,u={unversionedId:"ci/evolution-from-ftp-to-github-action",id:"ci/evolution-from-ftp-to-github-action",title:"Evolution from FTP to GitHub Action",description:"I started with the FTP client built into Dreamweaver. Then I switched from Dreamweaver to VS-Code and started looking for a tool to sync local and remote servers.",source:"@site/docs/ci/evolution-from-ftp-to-github-action.md",sourceDirName:"ci",slug:"/ci/evolution-from-ftp-to-github-action",permalink:"/hm/ru/docs/ci/evolution-from-ftp-to-github-action",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/ci/evolution-from-ftp-to-github-action.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1642425391,formattedLastUpdatedAt:"17.01.2022",frontMatter:{id:"evolution-from-ftp-to-github-action",title:"Evolution from FTP to GitHub Action",date:"2021-11-13T13:22:39.000Z"},sidebar:"Docs",previous:{title:"Recommended Resolution",permalink:"/hm/ru/docs/capture/recommended-resolution"},next:{title:"components",permalink:"/hm/ru/docs/computer/components/"}},p={},s=[{value:"<code>SFTP</code> extension",id:"sftp-extension",level:2},{value:"<code>git-ftp</code> shell program",id:"git-ftp-shell-program",level:2},{value:"FTP Deploy Action",id:"ftp-deploy-action",level:2}],d={toc:s};function f(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FTP client")," built into ",(0,i.kt)("inlineCode",{parentName:"p"},"Dreamweaver"),". Then I switched from Dreamweaver to ",(0,i.kt)("inlineCode",{parentName:"p"},"VS-Code")," and started looking for a tool to sync local and remote servers."),(0,i.kt)("h2",{id:"sftp-extension"},(0,i.kt)("inlineCode",{parentName:"h2"},"SFTP")," extension"),(0,i.kt)("p",null,"At first, such a tool was the liximono ",(0,i.kt)("inlineCode",{parentName:"p"},"SFTP")," extension (I even made a small contribution to get around the annoying ",(0,i.kt)("a",{parentName:"p",href:"../vs-code/extension-api/how-to-rebuild-vsix-extension"},"upload bug"),"). But it works manually, and I kept looking."),(0,i.kt)("h2",{id:"git-ftp-shell-program"},(0,i.kt)("inlineCode",{parentName:"h2"},"git-ftp")," shell program"),(0,i.kt)("p",null,"I couple of days ago I stumbled upon (while GitHub searching) the ",(0,i.kt)("a",{href:"https://github.com/git-ftp/git-ftp",class:"external"},"github.com: git-ftp")," shell program from SamKirkland. This program checks the difference (git diff) between local and remote content and uploads new files automatically."),(0,i.kt)("h2",{id:"ftp-deploy-action"},"FTP Deploy Action"),(0,i.kt)("p",null,"Then I found that Sam had already made the GitHub Action script ",(0,i.kt)("a",{href:"https://github.com/marketplace/actions/ftp-deploy?version=3.1.1",class:"external"},"github.com: FTP-Deploy"),", I configured it and started using it."),(0,i.kt)("h2",{id:""}))}f.isMDXComponent=!0}}]);