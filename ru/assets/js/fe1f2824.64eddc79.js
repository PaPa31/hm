"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[73622],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),u=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,g=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?i.createElement(g,l(l({ref:n},c),{},{components:t})):i.createElement(g,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86686:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],s={},a=void 0,u={unversionedId:"workplace/git/resolving-git-line-ending-issues-in-wsl",id:"workplace/git/resolving-git-line-ending-issues-in-wsl",title:"resolving-git-line-ending-issues-in-wsl",description:"Resolving Git line ending issues in WSL (resulting in many modified files)",source:"@site/docs/workplace/git/resolving-git-line-ending-issues-in-wsl.md",sourceDirName:"workplace/git",slug:"/workplace/git/resolving-git-line-ending-issues-in-wsl",permalink:"/hm/ru/docs/workplace/git/resolving-git-line-ending-issues-in-wsl",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/workplace/git/resolving-git-line-ending-issues-in-wsl.md",tags:[],version:"current",lastUpdatedBy:"papa31",lastUpdatedAt:1608497052,formattedLastUpdatedAt:"20.12.2020",frontMatter:{},sidebar:"Docs",previous:{title:".gitignore don't Hide File",permalink:"/hm/ru/docs/workplace/git/gitignore-dont-hide-file"},next:{title:"Installed Programs",permalink:"/hm/ru/docs/workplace/installed-programs"}},c={},p=[{value:"Resolving Git line ending issues in WSL (resulting in many modified files)",id:"resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resolving-git-line-ending-issues-in-wsl-resulting-in-many-modified-files"},"Resolving Git line ending issues in WSL (resulting in many modified files)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files"},"source")),(0,o.kt)("p",null,"Since Windows and Linux use different default line endings, Git may report a large number of modified files that have no differences aside from their line endings. To prevent this from happening, you can disable line-ending conversion using a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitattributes")," file or globally on the Windows side."),(0,o.kt)("p",null,"Typically adding or modifying a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitattributes")," file in your repository is the most reliable way to solve this problem. Committing this file to source control will help others and allows you to vary behaviors by repository as appropriate. For example, adding the following to ",(0,o.kt)("inlineCode",{parentName:"p"},".gitattributes")," file to the root of your repository will force everything to be LF, except for Windows batch files that require CRLF:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* text=auto eol=lf\n*.{cmd,[cC][mM][dD]}  text eol=crlf\n*.{bat,[bB][aA][tT]}  text eol=crlf\n")),(0,o.kt)("p",null,"Note that this works in ",(0,o.kt)("strong",{parentName:"p"},"Git v2.10+"),", so if you are running into problems, be sure you've got a recent Git client installed. You can add other file types in your repository that require CRLF to this same file."),(0,o.kt)("p",null,"If you would prefer to still always upload Unix-style line endings (LF), you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --global core.autocrlf input\n")),(0,o.kt)("p",null,"If you'd prefer to disable line-ending conversion entirely, run the following instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git config --global core.autocrlf false\n")),(0,o.kt)("p",null,"Finally, you may need to clone the repository again for these settings to take effect."),(0,o.kt)("p",null,"11/6/2020"))}f.isMDXComponent=!0}}]);