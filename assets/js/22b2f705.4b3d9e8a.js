"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[45774],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31438:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"kde-klipper-regex",title:"KDE Klipper Regex",date:new Date("2021-03-13T22:35:53.000Z")},p=void 0,c={unversionedId:"workplace/linux/kde-klipper-regex",id:"workplace/linux/kde-klipper-regex",title:"KDE Klipper Regex",description:"Right click on Klipper icon > Open Configure > Actions > + Add Action",source:"@site/docs/workplace/linux/kde-klipper-regex.md",sourceDirName:"workplace/linux",slug:"/workplace/linux/kde-klipper-regex",permalink:"/hm/docs/workplace/linux/kde-klipper-regex",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/workplace/linux/kde-klipper-regex.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1617961152,formattedLastUpdatedAt:"4/9/2021",frontMatter:{id:"kde-klipper-regex",title:"KDE Klipper Regex",date:"2021-03-13T22:35:53.000Z"},sidebar:"Docs",previous:{title:"Drawing on the desktop in Linux KDE Plasma",permalink:"/hm/docs/workplace/linux/draw-in-linux-kde-plasma"},next:{title:"Linux Render Video To mp4",permalink:"/hm/docs/workplace/linux/linux-render-video-to-mp4"}},u={},s=[{value:"Thermonuclear Mix",id:"thermonuclear-mix",level:2},{value:"Redirect output to variable",id:"redirect-output-to-variable",level:2},{value:"Sources",id:"sources",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Right click on Klipper icon > Open Configure > Actions > + Add Action"),(0,a.kt)("p",null,"Description:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"remove subtitle timers\n")),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\\(.\\)\\n\\n/\\1 /g' | sed ':a;N;$!ba;s/\\n//g' \n")),(0,a.kt)("p",null,"Output Handling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Add to Clipboard\n")),(0,a.kt)("p",null,"Description:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Remove Subtitle\n")),(0,a.kt)("p",null,"Press Ok > Press Ok"),(0,a.kt)("p",null,"Copy fragment with timer coding from ",(0,a.kt)("inlineCode",{parentName:"p"},".src")," files and press Ctrl+Alt+R > Select Remove Subtitle"),(0,a.kt)("h2",{id:"thermonuclear-mix"},"Thermonuclear Mix"),(0,a.kt)("p",null,"I have combined two flavors of ",(0,a.kt)("inlineCode",{parentName:"p"},"sed"),": simple and GNU. Simple  removes numbers. The GNU's variant removes the ",(0,a.kt)("inlineCode",{parentName:"p"},"/n"),"."),(0,a.kt)("h2",{id:"redirect-output-to-variable"},"Redirect output to variable"),(0,a.kt)("p",null,"This command first clears the line, and then translates it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="KDE Plasma Actions"',title:'"KDE',Plasma:!0,'Actions"':!0},"translate en ru $(echo %s | sed  's/^[0-9][^A-Za-z]*$//' | sed ':a;N;$!ba;s/\\(.\\)\\n\\n/\\1 /g' | sed ':a;N;$!ba;s/\\n//g' )\n")),(0,a.kt)("p",null,"Read more: ",(0,a.kt)("a",{href:"https://stackoverflow.com/questions/2559076/how-do-i-redirect-output-to-a-variable-in-shell",class:"external"},"stackoverflow.com: How Do I Redirect Output To A Variable In Shell")),(0,a.kt)("h2",{id:"sources"},"Sources"),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("inlineCode",{parentName:"p"},"sed"),":",(0,a.kt)("a",{href:"https://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed",class:"external"},"stackoverflow.com")),(0,a.kt)("p",null,"About ",(0,a.kt)("inlineCode",{parentName:"p"},"Klipper"),": ",(0,a.kt)("a",{href:"https://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Use-Klipper-Clipboard-Actions-for-Better-Productivity",class:"external"},"linux-magazine.com: Use Klipper Clipboard Actions For Better Productivity")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Klipper")," docs:",(0,a.kt)("a",{href:"https://docs.kde.org/stable5/en/plasma-workspace/klipper/actions-page.html",class:"external"},"docs.kde.org: Actions Page")))}m.isMDXComponent=!0}}]);