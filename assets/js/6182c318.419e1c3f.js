"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[46465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"auto-anchor",title:"Auto Anchor",date:new Date("2021-03-26T14:50:35.000Z")},i=void 0,c={unversionedId:"vs-code/macros/auto-anchor",id:"vs-code/macros/auto-anchor",title:"Auto Anchor",description:"The command puts the information from the copied link into the \u201canchor tag\u201d.",source:"@site/docs/vs-code/macros/auto-anchor.md",sourceDirName:"vs-code/macros",slug:"/vs-code/macros/auto-anchor",permalink:"/hm/docs/vs-code/macros/auto-anchor",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/macros/auto-anchor.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1618996163,formattedLastUpdatedAt:"Apr 21, 2021",frontMatter:{id:"auto-anchor",title:"Auto Anchor",date:"2021-03-26T14:50:35.000Z"},sidebar:"Docs",previous:{title:"2 Auto Frontmatter",permalink:"/hm/docs/vs-code/macros/2-auto-frontmatter"},next:{title:"Find Command In Multi Command",permalink:"/hm/docs/vs-code/macros/find-command-in-multi-command"}},s={},l=[{value:"Result",id:"result",level:2},{value:"Test Page",id:"test-page",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The command puts the information from the copied link into the \u201canchor tag\u201d."),(0,o.kt)("p",null,"First, paste the highlighted code below into your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json" {6-32}',title:'"settings.json"',"{6-32}":!0},'"multiCommand.commands": [\n    {\n      "command": "multiCommand.autoFrontmatter",  // first command\n        ...\n    },\n    {\n      "command": "multiCommand.autoAnchor",   // our command\n      "label": "Anchor",\n      "description": "Auto Link",\n      "sequence": [\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "${CLIPBOARD/.*[\\\\/#]([\\\\w\\\\-_]+)\\\\/?[$\\\\.]?.*/$1/}"\n          }\n        },\n        "cursorLineStartSelect",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "${TM_SELECTED_TEXT/([^-]+)(-*)/${1:/capitalize}${2:+ }/gi}"\n          }\n        },\n        "cursorLineStartSelect",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n             "snippet": "<a href=\'${CLIPBOARD/(.*)\\\\s(.*)/$1/}\' class=\'external\'>${CLIPBOARD/.*\\\\/\\\\/(www\\\\.)?([^\\\\/]+)?(\\\\/.*|)/$2/}: ${TM_SELECTED_TEXT}</a>"\n          }\n        },\n      ]\n    }\n]\n')),(0,o.kt)("p",null,"Add a keyboard shortcut:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="keybindings.json"',title:'"keybindings.json"'},'   {\n    "key": "alt+g a",\n    "command": "extension.multiCommand.execute",\n    "args": { "command": "multiCommand.autoAnchor" }\n  },\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("p",null,"Copy any link and past it using ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt+G a"),". For example, if you copy this link:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"https://code.visualstudio.com/api/get-started/your-first-extension\n")),(0,o.kt)("p",null,"This macro will output the following:"),(0,o.kt)("a",{href:"https://code.visualstudio.com/api/get-started/your-first-extension",class:"external"},"code.visualstudio.com: Your First Extension"),(0,o.kt)("h2",{id:"test-page"},"Test Page"),(0,o.kt)("p",null,"I insert here URLs that failed to convert at first:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"test-for-auto-anchor"},"Test for auto anchor")))}u.isMDXComponent=!0}}]);