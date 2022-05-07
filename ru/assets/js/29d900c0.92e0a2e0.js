"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[21704],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(m,r(r({ref:e},p),{},{components:n})):o.createElement(m,r({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65014:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Let's Run Linux"},l=void 0,u={unversionedId:"virtual-machines/multipass/lets-run-linux",id:"virtual-machines/multipass/lets-run-linux",title:"Let's Run Linux",description:"Source//btholt.github.io/complete-intro-to-linux-and-the-cli/lets-run-linux",source:"@site/docs/virtual-machines/multipass/lets-run-linux.md",sourceDirName:"virtual-machines/multipass",slug:"/virtual-machines/multipass/lets-run-linux",permalink:"/hm/ru/docs/virtual-machines/multipass/lets-run-linux",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/virtual-machines/multipass/lets-run-linux.md",tags:[],version:"current",lastUpdatedBy:"papa31",lastUpdatedAt:1608669992,formattedLastUpdatedAt:"22.12.2020",frontMatter:{title:"Let's Run Linux"},sidebar:"Docs",previous:{title:"Install and Setup Multipass",permalink:"/hm/ru/docs/virtual-machines/multipass/install-setup-multipass"},next:{title:"Local K3s Cluster with Multipass",permalink:"/hm/ru/docs/virtual-machines/multipass/local-k3s-cluster-multipass"}},p={},c=[{value:"Virtualization",id:"virtualization",level:2},{value:"For either macOS or Windows: Multipass",id:"for-either-macos-or-windows-multipass",level:2},{value:"For either macOS or Windows: VirtualBox",id:"for-either-macos-or-windows-virtualbox",level:2},{value:"For Windows Users: WSL",id:"for-windows-users-wsl",level:2},{value:"Wrap Up",id:"wrap-up",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],d={toc:c};function h(t){var e=t.components,s=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://btholt.github.io/complete-intro-to-linux-and-the-cli/lets-run-linux"},"https://btholt.github.io/complete-intro-to-linux-and-the-cli/lets-run-linux")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(41148).Z},(0,i.kt)("img",{src:n(66347).Z,width:"3301",height:"237"}))),(0,i.kt)("p",null,"You have some options, so let's go through those. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Which operating system are you using right now?")),(0,i.kt)("p",null," If you're using a desktop running Linux of some variety, you're already set and you can skip this section unless you're curious how to get up and running on ",(0,i.kt)("strong",{parentName:"p"},"macOS")," and ",(0,i.kt)("strong",{parentName:"p"},"Windows"),"."),(0,i.kt)("h2",{id:"virtualization"},"Virtualization"),(0,i.kt)("p",null,"We're going to running our Linux through a process call virtualization. We'll be running a virtual machine which is frequently abbreviated as VMs. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VMs are an operating system running within another operating system, called the host machine. The host machine will create a virtual environment with virtual acccess to its hardware to the VM.")),(0,i.kt)("p",null," The VM will have no idea that it's not actually running on real hardware; all it can see is the resources that the host is providing it."),(0,i.kt)("p",null,"So, at this point, I'll be giving you instructions on how to get a VM running on macOS and on Windows. I'll give you several options so you can do what's best fit for you."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I'll recommend most people will want to do Multipass.")),(0,i.kt)("h2",{id:"for-either-macos-or-windows-multipass"},"For either macOS or Windows: Multipass"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://multipass.run"},"Multipass")," is a great new tool from the folks at Canonical (who make Ubuntu). "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It's a super easy way to spin up and spin down little VMs to try things out. You can even spin up multiple and play with them together. ")),(0,i.kt)("p",null,"I'd recommend this for most users of macOS and Windows since it just sort of works without a lot of effort and you don't have to install everything yourself."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you are on Windows 10 Home")," you need to install VirtualBox (",(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"link here"),") too in addition to Multipass. Multipass will use VirtualBox if it can't use Microsoft Hyper-V (a feature only available in Windows 10 Pro.) If you are on macOS or Windows 10 Pro, you do not need VirtualBox."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://multipass.run/docs/installing-on-windows"},"Here are the Windows 10 instructions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://multipass.run/docs/installing-on-macos"},"Here are the macOS instructions"))),(0,i.kt)("p",null,"Once you have Multipass installed, you should be able to run it and open a new shell. For Mac users, it'll drop a little orange icon in your command bard at the top. For Windows, it's in your system tray (typically the bottom right of your screen, look for a little orange-and-white logo.)"),(0,i.kt)("p",null," ",(0,i.kt)("a",{target:"_blank",href:n(50225).Z},(0,i.kt)("img",{src:n(47855).Z,width:"800",height:"510"}))," "),(0,i.kt)("p",null,"You should be here. It has you logged in as the user \"ubuntu\" who has passwordless root privileges (if you don't know what that means, you'll find out in a bit, just means you're an admin who doesn't need a password.)"),(0,i.kt)("h2",{id:"for-either-macos-or-windows-virtualbox"},"For either macOS or Windows: VirtualBox"),(0,i.kt)("p",null,"Oracle makes a product called ",(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox"),". VirtualBox is a hosted hypervisor which is another way of saying that this is a program that allows you to run VMs. It can run Windows, Linux, macOS, and many other VMs but today all we care about is Linux. I've been using VirtualBox for years and it's a reliable product. It's not the fastest nor the most feature rich but dammit it works."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What's annoying about going down this path is that you'll need to download VirtualBox and you'll need to download the Ubuntu Server installer as well and go through the whole process. ")),(0,i.kt)("p",null,"It's possible, it just takes some time. ",(0,i.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/server"},"Here's the link to the Ubuntu installer"),"."),(0,i.kt)("p",null,"For creating the VM, just create a new Ubuntu 64 bit VM with the all default options. When you go to start it for the first time, it'll ask you to choose a boot media file. Point it at the Ubuntu 18.04 .iso file you downloaded. From here, just follow the instructions to install Ubuntu. Give it a username and password. This doesn't need to be super secure so just it a username and password you can remember. For everything else, just follow the menus and give the default responses. You don't need to connect to GitHub or anything, nor do you need any additional packages installed."),(0,i.kt)("p",null,"It will ask you to restart after you install so do that. Once done, you should be able to start your VM and log in to your new shell with the username and password you created. At this point, your screen shoud look something like this:"),(0,i.kt)("p",null," ",(0,i.kt)("a",{target:"_blank",href:n(47369).Z},(0,i.kt)("img",{src:n(49789).Z,width:"800",height:"655"}))," "),(0,i.kt)("p",null,"It bears mentioning that VirtualBox isn't the only option. ",(0,i.kt)("a",{parentName:"p",href:"https://www.vmware.com/products/fusion.html"},"VMWare Fusion")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.parallels.com/"},"Parallels")," (macOS only) are two great options too. They just aren't free."),(0,i.kt)("h2",{id:"for-windows-users-wsl"},"For Windows Users: WSL"),(0,i.kt)("p",null,"If you're a Windows 10 user, you can install and use WSL. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"That's what I do for my local development and if you plan on being a serious developer, I'd strongly recommend installing WSL2. ")),(0,i.kt)("p",null,"It allows you to run Linux natively inside of Windows. It's a bit of a burden to set up still because it's still not available in everyone's stable Windows (coming soon, you need Windows version 2004!) so I won't walk you through it but I'll leave the doc here if you're keen on going down that path:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10#update-to-wsl-2"},"Docs for installing WSL2")),(0,i.kt)("h2",{id:"wrap-up"},"Wrap Up"),(0,i.kt)("p",null,"At this point, you should have a shell prompt ready to go so we can continue with the course. This was annoying but necessary! Let's keep going."),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"working-with-multipass-instances"},"Working with Multipass instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"local-k3s-cluster-multipass"},"Local K3s Cluster Made Easy With Multipass"))))}h.isMDXComponent=!0},41148:function(t,e,n){e.Z=n.p+"assets/files/HEADER-c0e0596d1eb8a0d46a40df1d4ee7546f.jpg"},50225:function(t,e,n){e.Z=n.p+"assets/files/multipass-c7b939f919eddbfd4e6c0578a907acea.png"},47369:function(t,e,n){e.Z=n.p+"assets/files/up-and-running-5ca50550ee246b5c6bb7660640a673f4.png"},66347:function(t,e,n){e.Z=n.p+"assets/images/HEADER-c0e0596d1eb8a0d46a40df1d4ee7546f.jpg"},47855:function(t,e,n){e.Z=n.p+"assets/images/multipass-c7b939f919eddbfd4e6c0578a907acea.png"},49789:function(t,e,n){e.Z=n.p+"assets/images/up-and-running-5ca50550ee246b5c6bb7660640a673f4.png"}}]);