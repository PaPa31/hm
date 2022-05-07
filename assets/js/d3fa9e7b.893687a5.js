"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[9751],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"ideal-image-plugin",title:"Ideal Image Plugin",date:new Date("2021-09-15T13:10:40.000Z")},l=void 0,u={unversionedId:"site-generators/docusaurus/ideal-image-plugin",id:"site-generators/docusaurus/ideal-image-plugin",title:"Ideal Image Plugin",description:"Installation",source:"@site/docs/site-generators/docusaurus/ideal-image-plugin.md",sourceDirName:"site-generators/docusaurus",slug:"/site-generators/docusaurus/ideal-image-plugin",permalink:"/hm/docs/site-generators/docusaurus/ideal-image-plugin",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/site-generators/docusaurus/ideal-image-plugin.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631700421,formattedLastUpdatedAt:"9/15/2021",frontMatter:{id:"ideal-image-plugin",title:"Ideal Image Plugin",date:"2021-09-15T13:10:40.000Z"},sidebar:"Docs",previous:{title:"Folder Duplicate Page",permalink:"/hm/docs/site-generators/docusaurus/folder-duplicate-page"},next:{title:"Live CodeBlock Theme",permalink:"/hm/docs/site-generators/docusaurus/live-codeblock-theme"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Error",id:"error",level:2},{value:"Solved",id:"solved",level:2},{value:"Usage",id:"usage",level:2},{value:"Settings",id:"settings",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"I originally installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"ideal image plugin")," using the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @docusaurus/plugin-ideal-image\n")),(0,i.kt)("p",null,"as written in this source below:"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#installation",class:"external"},"docusaurus.io: Installation")),(0,i.kt)("h2",{id:"error"},"Error"),(0,i.kt)("p",null,"And my ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," looked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json" {4}',title:'"package.json"',"{4}":!0},'...\n  "dependencies": {\n    "@docusaurus/core": "^2.0.0-beta.6",\n    "@docusaurus/plugin-ideal-image": "*",\n    "@docusaurus/preset-classic": "^2.0.0-beta.6",\n    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",\n    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",\n    "@mdx-js/react": "^1.6.21",\n    "clsx": "^1.1.1",\n    "docusaurus-lunr-search": "^2.1.10",\n    "react": "^16.8.4",\n    "react-dom": "^16.8.4"\n  },\n...\n')),(0,i.kt)("p",null,"But after doing ",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),", I got errors when ",(0,i.kt)("inlineCode",{parentName:"p"},"Release to GitHub Pages")," in Continuous Integration."),(0,i.kt)("h2",{id:"solved"},"Solved"),(0,i.kt)("p",null,"Then I edited the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json" {3}',title:'"package.json"',"{3}":!0},'  "dependencies": {\n    "@docusaurus/core": "^2.0.0-beta.6",\n    "@docusaurus/plugin-ideal-image": "2.0.0-beta.6",\n    "@docusaurus/preset-classic": "^2.0.0-beta.6",\n    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",\n    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",\n    "@mdx-js/react": "^1.6.21",\n    "clsx": "^1.1.1",\n    "docusaurus-lunr-search": "^2.1.10",\n    "react": "^16.8.4",\n    "react-dom": "^16.8.4"\n  },\n')),(0,i.kt)("p",null,"and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,i.kt)("p",null,"The error is gone!"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"First rename your ",(0,i.kt)("inlineCode",{parentName:"p"},".md")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," file."),(0,i.kt)("p",null,"Then add lines with ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image>")," tag to the file, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import Image from '@theme/IdealImage';\n\n<Image img={require('./command-name-output.png')} />\n")),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Default settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="docusaurus.config.js" {}',title:'"docusaurus.config.js"',"{}":!0},"...\n  plugins: [\n    [\n      '@docusaurus/plugin-ideal-image',\n      {\n        quality: 70,\n        max: 1030, // max resized image's size.\n        min: 640, // min resized image's size. if original is lower, use that size.\n        steps: 2, // the max number of images generated between min and max (inclusive)\n      },\n    ],\n  ]\n...\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At first, I set ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," to 4 and ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," to 200. But then I went back to the defaults due to the ability to scale high resolution images on a smartphone."))))}m.isMDXComponent=!0}}]);