"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[48420],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return l}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=d(n),l=a,f=m["".concat(s,".").concat(l)]||m[l]||p[l]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function l(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14499:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"2-auto-frontmatter",title:"2 Auto Frontmatter",date:new Date("2021-02-21T18:52:09.000Z"),description:"A snippet that takes the old frontmatter and updates the id and title, but doesn't change the old file creation date"},s=void 0,d={unversionedId:"vs-code/macros/2-auto-frontmatter",id:"vs-code/macros/2-auto-frontmatter",title:"2 Auto Frontmatter",description:"A snippet that takes the old frontmatter and updates the id and title, but doesn't change the old file creation date",source:"@site/docs/vs-code/macros/2-auto-frontmatter.md",sourceDirName:"vs-code/macros",slug:"/vs-code/macros/2-auto-frontmatter",permalink:"/hm/docs/vs-code/macros/2-auto-frontmatter",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/vs-code/macros/2-auto-frontmatter.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631693306,formattedLastUpdatedAt:"9/15/2021",frontMatter:{id:"2-auto-frontmatter",title:"2 Auto Frontmatter",date:"2021-02-21T18:52:09.000Z",description:"A snippet that takes the old frontmatter and updates the id and title, but doesn't change the old file creation date"},sidebar:"Docs",previous:{title:"1 Auto Frontmatter",permalink:"/hm/docs/vs-code/macros/1-auto-frontmatter"},next:{title:"Auto Anchor",permalink:"/hm/docs/vs-code/macros/auto-anchor"}},u={},p=[{value:"Snippet",id:"snippet",level:2},{value:"Macro: createAutoFrontmatter",id:"macro-createautofrontmatter",level:2},{value:"Macro: updateAutoFrontmatter",id:"macro-updateautofrontmatter",level:2},{value:"Add a Shortcut",id:"add-a-shortcut",level:2}],m={toc:p};function l(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I have a couple of solutions to automatically create a frontmatter."),(0,o.kt)("h2",{id:"snippet"},"Snippet"),(0,o.kt)("p",null,"I started from snippet..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="markdown.json"',title:'"markdown.json"'},'\n "Id": {\n    "prefix": "Docusaurus-id",\n    "body": [\n      "---",\n      "id: $TM_FILENAME_BASE",\n      "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}",\n      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",\n      "---",\n      "",\n      "$1"\n    ],\n    "description": "Print out Docusaurus markdown title"\n  },\n')),(0,o.kt)("p",null,"To run the snippet, start a new file, press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + Space"),", type ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus-id"),"."),(0,o.kt)("h2",{id:"macro-createautofrontmatter"},"Macro: createAutoFrontmatter"),(0,o.kt)("p",null,"Then I created the ",(0,o.kt)("a",{parentName:"p",href:"1-auto-frontmatter"},"createAutoFrontmatter")," macro using a ",(0,o.kt)("a",{parentName:"p",href:"../extensions/multi-command-extension"},"multi-command extension"),". This macro is more convenient."),(0,o.kt)("p",null,"To use it, just press ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt+G c"),"."),(0,o.kt)("h2",{id:"macro-updateautofrontmatter"},"Macro: updateAutoFrontmatter"),(0,o.kt)("p",null,"If you've changed the name of markdown file and want to update its ",(0,o.kt)("inlineCode",{parentName:"p"},"frontmatter"),", just press ",(0,o.kt)("inlineCode",{parentName:"p"},"Alt+G u"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently, this macro not only ",(0,o.kt)("inlineCode",{parentName:"p"},"changes the frontmatter")," of the file, but also ",(0,o.kt)("inlineCode",{parentName:"p"},"saves the edited file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"returns focus to the sidebar")," to continue working with the files."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="settings.json" {}',title:'"settings.json"',"{}":!0},'    {\n      "command": "multiCommand.updateAutoFrontmatter",\n      "label": "Markdown",\n      "description": "Update Auto Frontmatter",\n      "sequence": [\n        "workbench.action.focusFirstEditorGroup",\n        "cursorTop",\n        "cursorDown",\n        "cut",\n        "cut",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "id: $TM_FILENAME_BASE\\n"\n          }\n        },\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}"\n          }\n        },\n        "cursorLineStartSelect",\n        {\n          "command": "editor.action.insertSnippet",\n          "args": {\n            "snippet": "${TM_SELECTED_TEXT/(\\\\d+)\\\\s(?=\\\\d)/$1./g}\\n"\n          }\n        },\n        "type",\n        "workbench.action.files.save",\n        "workbench.action.focusSideBar"\n      ]\n    },\n')),(0,o.kt)("h2",{id:"add-a-shortcut"},"Add a Shortcut"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="keybindings.json" {}',title:'"keybindings.json"',"{}":!0},'  {\n    "key": "alt+g u",\n    "command": "extension.multiCommand.execute",\n    "args": { "command": "multiCommand.updateAutoFrontmatter" },\n  },\n')))}l.isMDXComponent=!0}}]);