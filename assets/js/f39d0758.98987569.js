"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[38243],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"0-auto-frontmatter",title:"0 Auto Frontmatter",date:new Date("2021-03-16T09:55:20.000Z")},l=void 0,c={unversionedId:"vs-code/macros/0-auto-frontmatter",id:"vs-code/macros/0-auto-frontmatter",title:"0 Auto Frontmatter",description:"The macro does:",source:"@site/docs/vs-code/macros/0-auto-frontmatter.md",sourceDirName:"vs-code/macros",slug:"/vs-code/macros/0-auto-frontmatter",permalink:"/hm/docs/vs-code/macros/0-auto-frontmatter",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/macros/0-auto-frontmatter.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631644354,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"0-auto-frontmatter",title:"0 Auto Frontmatter",date:"2021-03-16T09:55:20.000Z"},sidebar:"Docs",previous:{title:"fira-code",permalink:"/hm/docs/vs-code/fira-code"},next:{title:"1 Auto Frontmatter",permalink:"/hm/docs/vs-code/macros/1-auto-frontmatter"}},m={},d=[{value:"Install <code>multi-command</code> extension",id:"install-multi-command-extension",level:2},{value:"Find Command",id:"find-command",level:3},{value:"Configure <code>settings.json</code>",id:"configure-settingsjson",level:2},{value:"Add keyboard shortcut",id:"add-keyboard-shortcut",level:2},{value:"Result",id:"result",level:2},{value:"To Do",id:"to-do",level:2},{value:"Source",id:"source",level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The macro does:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"takes ",(0,r.kt)("inlineCode",{parentName:"li"},"filename"),", removes the file extension and sets it as frontmatter\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},"takes this ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", replaces ",(0,r.kt)("inlineCode",{parentName:"li"},"hyphens")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"spaces"),", capitalizes it, and sets it to ",(0,r.kt)("inlineCode",{parentName:"li"},"title")),(0,r.kt)("li",{parentName:"ul"},"takes the current date and time and sets it as ",(0,r.kt)("inlineCode",{parentName:"li"},"date"))),(0,r.kt)("p",null,"This functionality has been achieved thanks to the VS-Code  ",(0,r.kt)("inlineCode",{parentName:"p"},"multi-command")," extension."),(0,r.kt)("p",null,"The rest of the methods (snippet manipulations) were unsuccessful."),(0,r.kt)("h2",{id:"install-multi-command-extension"},"Install ",(0,r.kt)("inlineCode",{parentName:"h2"},"multi-command")," extension"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command&ssr=false#overview",class:"external"},"multi-command")," extension"),(0,r.kt)("h3",{id:"find-command"},"Find Command"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"find-command-in-multi-command"},"Find")," the name of the command you want to execute."),(0,r.kt)("h2",{id:"configure-settingsjson"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h2"},"settings.json")),(0,r.kt)("p",null,"Copy/past at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="settings.json"',title:'"settings.json"'},'"multiCommand.commands": [\n  {\n    "command": "multiCommand.autoFrontmatter",\n    "label": "Markdown",\n    "description": "Auto Frontmatter",\n    "sequence": [\n      "cursorTop",\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "---\\n"\n        }\n      },\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "id: $TM_FILENAME_BASE\\n"\n        }\n      },\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}"\n        }\n      },\n      "cursorLineStartSelect",\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "${TM_SELECTED_TEXT/(\\\\d+)\\\\s(?=\\\\d)/$1./g}\\n"\n        }\n      },\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND\\n"\n        }\n      },\n      {\n        "command": "editor.action.insertSnippet",\n        "args": {\n          "snippet": "---\\n\\n"\n        }\n      }\n    ]\n  }\n],\n')),(0,r.kt)("h2",{id:"add-keyboard-shortcut"},"Add keyboard shortcut"),(0,r.kt)("p",null,"Copy/past to ",(0,r.kt)("inlineCode",{parentName:"p"},"keybindings.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="keybindings.json"',title:'"keybindings.json"'},'{\n  "key": "alt+g c",    // whatever keybinding you like\n  "command": "extension.multiCommand.execute",\n  "args": { "command": "multiCommand.autoFrontmatter" },\n},\n')),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("p",null,"Now you can type ",(0,r.kt)("inlineCode",{parentName:"p"},"Alt+G c")," and you\u2019ll automatically get a front matter with 3 fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"---\nid: auto-front-matter\ntitle: auto Front Matter\ndate: 2021-03-16 11:26:47\n---\n")),(0,r.kt)("h2",{id:"to-do"},"To Do"),(0,r.kt)("p",null,"I want this command macro to run whenever I create a new markdown file."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://stackoverflow.com/questions/64487646/nested-regex-replacement-in-vs-code-snippet",class:"external"},"stackoverflow.com: Refactor Headings")),(0,r.kt)("li",{parentName:"ul"},"or ",(0,r.kt)("a",{href:"https://stackoverflow.com/questions/59759720/vs-code-snippets-regex-multiple-operations",class:"external"},"stackoverflow.com: Replace Danish Characters"))))}p.isMDXComponent=!0}}]);