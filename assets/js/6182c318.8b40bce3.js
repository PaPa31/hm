"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46465],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46959:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"auto-anchor",title:"Auto Anchor",date:new Date("2021-03-26T14:50:35.000Z")},s=void 0,l={unversionedId:"vs-code/macros/auto-anchor",id:"vs-code/macros/auto-anchor",title:"Auto Anchor",description:"The command puts the information from the copied link into the \u201canchor tag\u201d.",source:"@site/docs/vs-code/macros/auto-anchor.md",sourceDirName:"vs-code/macros",slug:"/vs-code/macros/auto-anchor",permalink:"/hm/docs/vs-code/macros/auto-anchor",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/macros/auto-anchor.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1618996163,formattedLastUpdatedAt:"4/21/2021",frontMatter:{id:"auto-anchor",title:"Auto Anchor",date:"2021-03-26T14:50:35.000Z"},sidebar:"Docs",previous:{title:"2 Auto Frontmatter",permalink:"/hm/docs/vs-code/macros/2-auto-frontmatter"},next:{title:"Find Command In Multi Command",permalink:"/hm/docs/vs-code/macros/find-command-in-multi-command"}},u=[{value:"Result",id:"result",children:[],level:2},{value:"Test Page",id:"test-page",children:[],level:2}],m={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The command puts the information from the copied link into the \u201canchor tag\u201d."),(0,a.kt)("p",null,"First, paste the highlighted code below into your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json" {6-32}',title:'"settings.json"',"{6-32}":!0},'"multiCommand.commands": [\n    {\n      "command": "multiCommand.autoFrontmatter",  // first command\n        ...\n    },\n    {\n      "command": "multiCommand.autoAnchor",   // our command\n      "label": "Anchor",\n      "description": "Auto Link",\n      "sequence": [\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "${CLIPBOARD/.*[\\\\/#]([\\\\w\\\\-_]+)\\\\/?[$\\\\.]?.*/$1/}"\n          }\n        },\n        "cursorLineStartSelect",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "${TM_SELECTED_TEXT/([^-]+)(-*)/${1:/capitalize}${2:+ }/gi}"\n          }\n        },\n        "cursorLineStartSelect",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n             "snippet": "<a href=\'${CLIPBOARD/(.*)\\\\s(.*)/$1/}\' class=\'external\'>${CLIPBOARD/.*\\\\/\\\\/(www\\\\.)?([^\\\\/]+)?(\\\\/.*|)/$2/}: ${TM_SELECTED_TEXT}</a>"\n          }\n        },\n      ]\n    }\n]\n')),(0,a.kt)("p",null,"Add a keyboard shortcut:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="keybindings.json"',title:'"keybindings.json"'},'   {\n    "key": "alt+g a",\n    "command": "extension.multiCommand.execute",\n    "args": { "command": "multiCommand.autoAnchor" }\n  },\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"Copy any link and past it using ",(0,a.kt)("inlineCode",{parentName:"p"},"Alt+G a"),". For example, if you copy this link:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"https://code.visualstudio.com/api/get-started/your-first-extension\n")),(0,a.kt)("p",null,"This macro will output the following:"),(0,a.kt)("a",{href:"https://code.visualstudio.com/api/get-started/your-first-extension",class:"external"},"code.visualstudio.com: Your First Extension"),(0,a.kt)("h2",{id:"test-page"},"Test Page"),(0,a.kt)("p",null,"I insert here URLs that failed to convert at first:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"test-for-auto-anchor"},"Test for auto anchor")))}p.isMDXComponent=!0}}]);