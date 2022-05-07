"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[11703],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68111:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(51048),o=n(33609),i=n(1943),s=n(72957),c=n(86010),u="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,m=e.block,h=e.defaultValue,k=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),x=N.tabGroupChoices,D=N.setTabGroupChoices,E=(0,r.useState)(y),C=E[0],S=E[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=x[v];null!=P&&P!==C&&b.some((function(e){return e.value===P}))&&S(P)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==C&&(T(t),S(a),null!=v&&D(v,a))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:I,onClick:I},l,{className:(0,c.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},25269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(5529),i=n(68111),s=["components"],c={id:"install-docker-software",title:"Install Docker Software",date:new Date("2021-03-29T12:15:43.000Z")},u=void 0,d={unversionedId:"virtual-machines/docker/install-docker-software",id:"virtual-machines/docker/install-docker-software",title:"Install Docker Software",description:"Install Docker (docs.docker.com) on your machine and add it to the system path.",source:"@site/docs/virtual-machines/docker/install-docker-software.mdx",sourceDirName:"virtual-machines/docker",slug:"/virtual-machines/docker/install-docker-software",permalink:"/hm/ru/docs/virtual-machines/docker/install-docker-software",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/virtual-machines/docker/install-docker-software.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1634228547,formattedLastUpdatedAt:"14.10.2021",frontMatter:{id:"install-docker-software",title:"Install Docker Software",date:"2021-03-29T12:15:43.000Z"},sidebar:"Docs",previous:{title:"Is it an Idiom",permalink:"/hm/ru/docs/verbs/is-it-idiom"},next:{title:"LanguageTool Linter In Docker",permalink:"/hm/ru/docs/virtual-machines/docker/language-tool-linter-in-docker"}},p={},m=[{value:"Linux",id:"linux",level:2},{value:"Windows",id:"windows",level:2},{value:"Install Virtual Box",id:"install-virtual-box",level:3},{value:"Docker Engine Setup",id:"docker-engine-setup",level:2},{value:"Install Docker Machine",id:"install-docker-machine",level:3},{value:"Install Docker Engine",id:"install-docker-engine",level:3},{value:"Set up Oracle VM VirtualBox",id:"set-up-oracle-vm-virtualbox",level:3},{value:"Set up Docker environment variables",id:"set-up-docker-environment-variables",level:2},{value:"Certificates Error",id:"certificates-error",level:3},{value:"Docker Tools Setup",id:"docker-tools-setup",level:2}],h={toc:m};function k(e){var t=e.components,c=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{href:"https://docs.docker.com/get-docker/",class:"external"},"Install Docker (docs.docker.com)")," on your machine and add it to the system path.",(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("p",null,"On Linux, you should also ",(0,l.kt)("a",{href:"https://docs.docker.com/engine/install/linux-postinstall/",class:"external"},"enable Docker CLI for the non-root user account")," that will be used to run VS Code."),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("h3",{id:"install-virtual-box"},"Install Virtual Box"),(0,l.kt)("p",null,"Run in elevated PowerShell terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="PowerShell (as admin)"',title:'"PowerShell',"(as":!0,'admin)"':!0},"C:\\ choco install virtualbox\n")),(0,l.kt)("h2",{id:"docker-engine-setup"},"Docker Engine Setup"),(0,l.kt)("h3",{id:"install-docker-machine"},"Install Docker Machine"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Docker Machine: a CLI tool for installing Docker Engine on virtual hosts")),(0,l.kt)("p",null,"Execute this command inside an elevated PowerShell terminal (alternatively, you can install ",(0,l.kt)("inlineCode",{parentName:"p"},"Docker Machine")," by following instructions on this ",(0,l.kt)("a",{href:"https://docs.docker.com/machine/install-machine/",class:"external"},"page (docs.docker.com)"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="PowerShell (as admin)"',title:'"PowerShell',"(as":!0,'admin)"':!0},"C:\\ choco install docker-machine\n")),(0,l.kt)("h3",{id:"install-docker-engine"},"Install Docker Engine"),(0,l.kt)("p",null,"Using Git Bash terminal, use Docker Machine to install ",(0,l.kt)("inlineCode",{parentName:"p"},"Docker Engine"),". This will download a Linux image containing the Docker Engine and have it run as a VM using VirtualBox. Simply execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Git-Bash"',title:'"Git-Bash"'},"docker-machine create --driver virtualbox default\n")),(0,l.kt)("h3",{id:"set-up-oracle-vm-virtualbox"},"Set up Oracle VM VirtualBox"),(0,l.kt)("p",null,"We need to allow Docker to mount volumes located on your hard drive. To add your path, open ",(0,l.kt)("inlineCode",{parentName:"p"},"Oracle VM VirtualBox"),". Select the desired VM (in my case ",(0,l.kt)("inlineCode",{parentName:"p"},"default3"),"), go to ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings > Shared Folders")," and create or edit entries:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Oracle VM Virtualbox Settings Shared Folders",src:n(63812).Z,width:"644",height:"525"})),(0,l.kt)("p",null,"If your working directory is ",(0,l.kt)("inlineCode",{parentName:"p"},"F:\\parsh\\for-Docker-Windows/"),", make ",(0,l.kt)("inlineCode",{parentName:"p"},"/f/parsh/for-Docker-Windows")," (in Unix sintax) the mount point."),(0,l.kt)("h2",{id:"set-up-docker-environment-variables"},"Set up Docker environment variables"),(0,l.kt)("p",null,"Configure Docker environment to use Docker VM:"),(0,l.kt)(o.Z,{defaultValue:"powershell",values:[{label:"PowerShell",value:"powershell"},{label:"Git-Bash",value:"gitbash"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"docker-machine env default\n")),(0,l.kt)("p",null,"and then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},'& "C:\\ProgramData\\chocolatey\\lib\\docker-machine\\bin\\docker-machine.exe" env default | Invoke-Expression\n')),(0,l.kt)("p",null,"To avoid setting environment variables every time, you start a new PowerShell terminal, run this line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"docker-machine env default\n")),(0,l.kt)("p",null,"Copy ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'\u276f docker-machine env default\n$Env:DOCKER_TLS_VERIFY = "1"\n$Env:DOCKER_HOST = "tcp://192.168.99.101:2376"\n$Env:DOCKER_CERT_PATH = "C:\\Users\\parsh\\.docker\\machine\\machines\\default"\n$Env:DOCKER_MACHINE_NAME = "default"\n$Env:COMPOSE_CONVERT_WINDOWS_PATHS = "true"\n# Run this command to configure your shell:\n# & "C:\\ProgramData\\chocolatey\\lib\\docker-machine\\bin\\docker-machine.exe" env default | Invoke-Expression\n')),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Take note that there\u2019s a chance the IP address assigned might be different from the one you saved every time you start the default VM."))),(0,l.kt)("p",null,"And insert this block into ",(0,l.kt)("inlineCode",{parentName:"p"},"Microsoft.PowerShell_profile.ps1")," (to open it run: ",(0,l.kt)("inlineCode",{parentName:"p"},"notepad $profile"),")")),(0,l.kt)(i.Z,{value:"gitbash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Git-Bash"',title:'"Git-Bash"'},"eval $(docker-machine env default --shell linux)\n")),(0,l.kt)("p",null,"To avoid setting environment variables every time, you start a new Git-Bash terminal, run this line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Git-Bash"',title:'"Git-Bash"'},"docker-machine env default\n")),(0,l.kt)("p",null,"Transform ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," output to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2-3}","{2-3}":!0},'export DOCKER_TLS_VERIFY="1"\nexport DOCKER_HOST="tcp://192.168.99.100:2376"\nexport DOCKER_CERT_PATH="C:\\Users\\[username]\\.docker\\machine\\machines\\default"\nexport DOCKER_MACHINE_NAME="default"\nexport COMPOSE_CONVERT_WINDOWS_PATHS="true"\n')),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Take note that there\u2019s a chance the IP address assigned might be different from the one you saved every time you start the default VM."))),(0,l.kt)("p",null,"And insert this block into ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,l.kt)("h3",{id:"certificates-error"},"Certificates Error"),(0,l.kt)("p",null,"If you encounter a certificate error, just re-generate the certificates with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker-machine regenerate-certs default\n")),(0,l.kt)("p",null,"And then rerun the ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," command."),(0,l.kt)("h2",{id:"docker-tools-setup"},"Docker Tools Setup"),(0,l.kt)("p",null,"These tools are packaged inside the Docker for Windows installer, we\u2019ll install these programs individually using Chocolatey. Run this in elevated PowerShell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'},"C:\\ choco install docker-cli\nC:\\ choco install docker-compose\n")),(0,l.kt)("p",null,"Then run in PowerShell or Git-Bash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Start Docker VM\ndocker-machine start default\n\n# Confirm Docker VM is running\ndocker-machine ls\n\n# Confirm Docker is connected. Should output Docker VM specs\ndocker info\n\n# Run hello-world docker image. Should output "Hello from Docker"\ndocker run hello-world\n')))}k.isMDXComponent=!0},63812:function(e,t,n){t.Z=n.p+"assets/images/oracle-virtualbox-settings-shared-folders-7b4cfb8249ae481cae97b375fcb80efe.png"}}]);