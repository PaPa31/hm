"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[42447],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={id:"move-c-users-to-f-users",title:"Move C:Users To F:Users",date:new Date("2021-11-03T09:04:08.000Z")},c=void 0,l={unversionedId:"new-disk/move-c-users-to-f-users",id:"new-disk/move-c-users-to-f-users",isDocsHomePage:!1,title:"Move C:\\Users To F:\\Users",description:"Source 1964 Move Users Folder Location Windows 10 A",source:"@site/docs/new-disk/move-c-users-to-f-users.md",sourceDirName:"new-disk",slug:"/new-disk/move-c-users-to-f-users",permalink:"/hm/docs/new-disk/move-c-users-to-f-users",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/new-disk/move-c-users-to-f-users.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1635960458,formattedLastUpdatedAt:"11/3/2021",frontMatter:{id:"move-c-users-to-f-users",title:"Move C:\\Users To F:\\Users",date:"2021-11-03T09:04:08.000Z"},sidebar:"Docs",previous:{title:"Install Git Bash and SSH Setup",permalink:"/hm/docs/new-disk/install-git-bash-and-ssh-setup"},next:{title:"New Windows Setup",permalink:"/hm/docs/new-disk/new-windows-setup"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{href:"https://www.tenforums.com/tutorials/1964-move-users-folder-location-windows-10-a.html",class:"external"},"tenforums.com: 1964 Move Users Folder Location Windows 10 A")),(0,s.kt)("p",null,"When installing Windows, at the step of selecting the region format (language and keboard layout), press ",(0,s.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+F3")," to reboot into ",(0,s.kt)("inlineCode",{parentName:"p"},"Audit mode"),"."),(0,s.kt)("p",null,"After a while, press ",(0,s.kt)("inlineCode",{parentName:"p"},"Cancel")," on the ",(0,s.kt)("inlineCode",{parentName:"p"},"System Preparation Tool 3.14")," popup window."),(0,s.kt)("p",null,"Then create a file ",(0,s.kt)("inlineCode",{parentName:"p"},"relocate.xml")," with following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="relocate.xml" {4,6}',title:'"relocate.xml"',"{4,6}":!0},'<?xml version="1.0" encoding="utf-8"?>\n<unattend xmlns="urn:schemas-microsoft-com:unattend">\n<settings pass="oobeSystem">\n<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n<FolderLocations>\n<ProfilesDirectory>F:\\Users</ProfilesDirectory>\n</FolderLocations>\n</component>\n</settings>\n</unattend>\n')),(0,s.kt)("p",null,"Pay attention to the property: ",(0,s.kt)("inlineCode",{parentName:"p"},'processorArchitecture="amd64"')," (if you have 32-bit Windows, it should be ",(0,s.kt)("inlineCode",{parentName:"p"},'"x86"'),")."),(0,s.kt)("p",null,"And look at the inner of the ",(0,s.kt)("inlineCode",{parentName:"p"},"<ProfileDirectory>")," tag: ",(0,s.kt)("inlineCode",{parentName:"p"},"F:\\Users"),". This is the new location of the ",(0,s.kt)("inlineCode",{parentName:"p"},"C:\\Users")," folder."))}m.isMDXComponent=!0}}]);