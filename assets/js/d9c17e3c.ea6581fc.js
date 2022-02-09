"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[437],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?o.createElement(g,i(i({ref:n},l),{},{components:t})):o.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77683:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],d={id:"grub-correction",title:"GRUB Correction",date:new Date("2021-09-09T15:23:49.000Z")},s=void 0,u={unversionedId:"windows-and-linux/grub-correction",id:"windows-and-linux/grub-correction",title:"GRUB Correction",description:"After installing Windows (and if your GRUB failed) you need boot with LIVE CD/FLASH and run in cmd:",source:"@site/docs/windows-and-linux/grub-correction.md",sourceDirName:"windows-and-linux",slug:"/windows-and-linux/grub-correction",permalink:"/hm/docs/windows-and-linux/grub-correction",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/windows-and-linux/grub-correction.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1636195974,formattedLastUpdatedAt:"11/6/2021",frontMatter:{id:"grub-correction",title:"GRUB Correction",date:"2021-09-09T15:23:49.000Z"},sidebar:"Docs",previous:{title:"Snippet + Shortcut in VS Code",permalink:"/hm/docs/vs-code/snippets/snippet-plus-shortcut"},next:{title:"Update GRUB Not See Windows",permalink:"/hm/docs/windows-and-linux/update-grub-not-see-windows"}},l=[{value:"The Newest Way to Repair",id:"the-newest-way-to-repair",children:[],level:2},{value:"Old Way to Repair",id:"old-way-to-repair",children:[],level:2}],p={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After installing Windows (and if your GRUB failed) you need boot with ",(0,a.kt)("inlineCode",{parentName:"p"},"LIVE CD/FLASH")," and run in cmd:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I have two LIVE CD/FLASH: 4Gb (Linux iso) and 8GB (Windows iso). I need to use 8G with windows iso.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"bcdboot c:\\Windows /s c: /l en-us\n")),(0,a.kt)("p",null,"In case of error, correct it as written in this paragraph: ",(0,a.kt)("a",{parentName:"p",href:"https://papa31.github.io/hm/docs/new-disk/partitioning-new-disk/#single-windows"},"https://papa31.github.io/hm/docs/new-disk/partitioning-new-disk/#single-windows")),(0,a.kt)("p",null,"After that you need to reboot, enter into the ",(0,a.kt)("a",{parentName:"p",href:"../new-disk/partitioning-new-disk#boot-configuration"},"BIOS/UEFI and change the boot order"),"."),(0,a.kt)("h2",{id:"the-newest-way-to-repair"},"The Newest Way to Repair"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bios"}," -------- Boot (tab) -------------\n\n...\n# 1     [P0: P3-256]\n# 2     [UEFI OS (P0: P3-256)]\n...\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bios"},"HARD DRIVE BBS PRIORITIES (subsection)\n# 1     [P0 P3-256]\n# 2     [NE-512]\n...\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If after ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo update-grub")," you get ouptut with this line at the end:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"...\nWindows Recovery Environment (on /dev/nvme0n1p1)\n")),(0,a.kt)("p",{parentName:"div"},"It's ok. Your GRUB menu is setup correctly. Reboot and try starting Windows via GRUB."))),(0,a.kt)("h2",{id:"old-way-to-repair"},"Old Way to Repair"),(0,a.kt)("p",null,"Set the first UEFI option to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-uefi"},"P1:PS-256 (or P0-256 what disk first doesn`t matter)\n")),(0,a.kt)("p",null,"And set second UEFI option to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-uefi"},"OS UEFI P1:PS-256\n")),(0,a.kt)("p",null,"Here main goal is installing GRUB without detection Windows."),(0,a.kt)("p",null,"Reboot Linux, open terminal and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub\n")),(0,a.kt)("p",null,"Reboot again and change second boot option to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bios"},"P1:PS-256 (first option need to be the same: P1:PS-256)\n")),(0,a.kt)("p",null,"Reboot. You should see grub table menu. Choose linux start."),(0,a.kt)("p",null,"Then, open terminal again and repeat previous command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub\n")),(0,a.kt)("p",null,"After that command you should see detected Windows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{8}","{8}":!0},"~ $ sudo update-grub\n[sudo] password for papa:\nGenerating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.6.0-2-amd64\nFound initrd image: /boot/initrd.img-5.6.0-2-amd64\nFound memtest86+ image: /boot/memtest86+.bin\n/dev/sdc: open failed: No medium found\nFound Windows 10 on /dev/nvme0n1p1\ndone\n")))}c.isMDXComponent=!0}}]);