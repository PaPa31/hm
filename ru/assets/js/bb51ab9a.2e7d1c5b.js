"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[95678],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(g,c(c({ref:r},l),{},{components:t})):n.createElement(g,c({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28136:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={id:"10-03-creating-firebase-project",title:"10.03 Creating Firebase Project",date:new Date("2021-04-13T20:36:54.000Z")},s=void 0,u={unversionedId:"react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project",id:"react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project",title:"10.03 Creating Firebase Project",description:"Project Configure",source:"@site/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project.md",sourceDirName:"react-complete-guide/10-burger-builder-project-accessing-server",slug:"/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-03-creating-firebase-project.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"10-03-creating-firebase-project",title:"10.03 Creating Firebase Project",date:"2021-04-13T20:36:54.000Z"},sidebar:"Docs",previous:{title:"10.02 Firebase And Right Database",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-02-firebase-and-right-database"},next:{title:"10.04 Creating Axios Instance",permalink:"/hm/ru/courses/react-complete-guide/10-burger-builder-project-accessing-server/10-04-creating-axios-instance"}},l={},p=[{value:"Project Configure",id:"project-configure",level:2}],d={toc:p};function f(e){var r=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"project-configure"},"Project Configure"),(0,o.kt)("p",null,"Google Firebase Console: ",(0,o.kt)("a",{href:"https://console.firebase.google.com/u/0/project/react-burger-bf7e8/database/react-burger-bf7e8-default-rtdb/rules",class:"external"},"console.firebase.google.com: Rules")),(0,o.kt)("p",null,"Now for this to be available, there's one thing we need to set up under rules here, on database rules you should set read and write access simply to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (and then press ",(0,o.kt)("inlineCode",{parentName:"p"},"Publish"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(63767).Z,width:"792",height:"571"})))}f.isMDXComponent=!0},63767:function(e,r,t){r.Z=t.p+"assets/images/10-03-firebase-console-rules-to-true-88434999d22cdcbf4d9b6fb588569aae.png"}}]);