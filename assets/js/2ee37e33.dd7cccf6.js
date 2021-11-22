"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[10203],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11343:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"evolution-from-ftp-to-github-action",title:"Evolution from FTP to GitHub Action",date:new Date("2021-11-13T13:22:39.000Z")},l=void 0,u={unversionedId:"ci/evolution-from-ftp-to-github-action",id:"ci/evolution-from-ftp-to-github-action",isDocsHomePage:!1,title:"Evolution from FTP to GitHub Action",description:"I started with the FTP client built into Dreamweaver. Then I switched from Dreamweaver to VS-Code and started looking for a tool to sync local and remote servers.",source:"@site/docs/ci/evolution-from-ftp-to-github-action.md",sourceDirName:"ci",slug:"/ci/evolution-from-ftp-to-github-action",permalink:"/hm/docs/ci/evolution-from-ftp-to-github-action",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/ci/evolution-from-ftp-to-github-action.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1637552305,formattedLastUpdatedAt:"11/22/2021",frontMatter:{id:"evolution-from-ftp-to-github-action",title:"Evolution from FTP to GitHub Action",date:"2021-11-13T13:22:39.000Z"},sidebar:"Docs",previous:{title:"Recommended Resolution",permalink:"/hm/docs/capture/recommended-resolution"},next:{title:"adapters",permalink:"/hm/docs/computer/components/adapters"}},p=[{value:"<code>SFTP</code> extension",id:"sftp-extension",children:[]},{value:"<code>git-ftp</code> shell program",id:"git-ftp-shell-program",children:[]},{value:"FTP Deploy Action",id:"ftp-deploy-action",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I started with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FTP client")," built into ",(0,i.kt)("inlineCode",{parentName:"p"},"Dreamweaver"),". Then I switched from Dreamweaver to ",(0,i.kt)("inlineCode",{parentName:"p"},"VS-Code")," and started looking for a tool to sync local and remote servers."),(0,i.kt)("h2",{id:"sftp-extension"},(0,i.kt)("inlineCode",{parentName:"h2"},"SFTP")," extension"),(0,i.kt)("p",null,"At first, such a tool was the liximono ",(0,i.kt)("inlineCode",{parentName:"p"},"SFTP")," extension (I even made a small contribution to get around the annoying ",(0,i.kt)("a",{parentName:"p",href:"../vs-code/extension-api/how-to-rebuild-vsix-extension"},"upload bug"),"). But it works manually, and I kept looking."),(0,i.kt)("h2",{id:"git-ftp-shell-program"},(0,i.kt)("inlineCode",{parentName:"h2"},"git-ftp")," shell program"),(0,i.kt)("p",null,"I couple of days ago I stumbled upon (while GitHub searching) the ",(0,i.kt)("inlineCode",{parentName:"p"},"git-ftp")," shell program from SamKirkland. This program checks the difference (git diff) between local and remote content and uploads new files automatically."),(0,i.kt)("h2",{id:"ftp-deploy-action"},"FTP Deploy Action"),(0,i.kt)("p",null,"Then I found that Sam had already made the GitHub Action script ",(0,i.kt)("a",{href:"https://github.com/marketplace/actions/ftp-deploy?version=3.1.1",class:"external"},"github.com: FTP-Deploy"),", I configured it and started using it."),(0,i.kt)("h2",{id:""}))}s.isMDXComponent=!0}}]);