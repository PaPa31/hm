"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[76452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"3-04-1-ide-setup",title:"3.04.1 Ide Setup",date:new Date("2021-03-11T11:21:52.000Z")},l=void 0,u={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup",title:"3.04.1 Ide Setup",description:"Whichever toolchain you choose, you need to customize it. This process is broken down into a build process, code formatting, linting, testing, and type checking.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup.md",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631687333,formattedLastUpdatedAt:"9/15/2021",frontMatter:{id:"3-04-1-ide-setup",title:"3.04.1 Ide Setup",date:"2021-03-11T11:21:52.000Z"},sidebar:"Docs",previous:{title:"3.03.2.1 React Script Error",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error"},next:{title:"3.04.2 Initial Deploy",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-2-initial-deploy"}},c=[{value:"Displaying Lint Output in the Editor",id:"displaying-lint-output-in-the-editor",children:[],level:2},{value:"Debugging in the Editor",id:"debugging-in-the-editor",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:3}],level:2},{value:"Formatting Code Automatically",id:"formatting-code-automatically",children:[],level:2},{value:"Formatting at Project Start",id:"formatting-at-project-start",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whichever toolchain you choose, you need to customize it. This process is broken down into a build process, code formatting, linting, testing, and type checking."),(0,i.kt)("p",null,"Editors Syntax Highlighting ",(0,i.kt)("a",{href:"https://babeljs.io/docs/en/editors/",class:"external"},"babeljs.io")," with plugins"),(0,i.kt)("h2",{id:"displaying-lint-output-in-the-editor"},"Displaying Lint Output in the Editor"),(0,i.kt)("p",null,"Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": "react-app"\n}\n')),(0,i.kt)("p",null,"I created this file, but I don't know why?"),(0,i.kt)("h2",{id:"debugging-in-the-editor"},"Debugging in the Editor"),(0,i.kt)("p",null,"Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don\u2019t have to switch between tools."),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"You would need to have the latest version of VS Code and VS Code ",(0,i.kt)("a",{href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",class:"external"},"Chrome Debugger Extension (marketplace.visualstudio.com)"),"."),(0,i.kt)("p",null,"Then add the block below to your ",(0,i.kt)("inlineCode",{parentName:"p"},"launch.json")," file and put it inside the ",(0,i.kt)("inlineCode",{parentName:"p"},".vscode")," folder in your app\u2019s root directory."),(0,i.kt)("p",null,"I took ",(0,i.kt)("inlineCode",{parentName:"p"},"launch.json")," from here: ",(0,i.kt)("a",{href:"https://medium.com/@JSantaCL/how-to-debug-an-angular-app-using-vs-code-and-chromium-7eb60b0b0cee",class:"external"},"medium.com")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "chrome",\n      "request": "launch",\n      "name": "Launch Chromium against localhost",\n      "url": "http://localhost:3001",\n      "webRoot": "${workspaceFolder}",\n      "runtimeExecutable": "/usr/bin/chromium",\n      "runtimeArgs": [\n        "--new-window",\n        "-user-data-dir=/${workspaceFolder}/DevProfile",\n        "--remote-debugging-port=9222",\n        "--disable-background-networking"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Extension seems to work, but I don't know the best practices. Read more about configure ",(0,i.kt)("a",{href:"https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting",class:"external"},"Troubleshooting (github.com)"),"."),(0,i.kt)("h2",{id:"formatting-code-automatically"},"Formatting Code Automatically"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"I don't know if it's necessary. I think the VS Code ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," extension is working fine and the setup below is not required."))),(0,i.kt)("p",null,"To format our code whenever we make a commit in git, we need to install the following dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save husky lint-staged prettier\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"husky")," makes it easy to use githooks as if they are npm scripts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lint-staged")," allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prettier")," is the JavaScript formatter we will run before commits.")),(0,i.kt)("p",null,"Now we can make sure every file is formatted correctly by adding a few lines to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the project root."),(0,i.kt)("p",null,"Add the following line to ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2}","{2}":!0},'  "scripts": {\n    "precommit": "lint-staged",\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n')),(0,i.kt)("p",null,"Next we add a 'lint-staged' field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{4-9}","{4-9}":!0},' "dependencies": {\n    // ...\n  },\n  "lint-staged": {\n    "src/**/*.{js,jsx,json,css}": [\n      "prettier --single-quote --write",\n      "git add"\n    ]\n  },\n  "scripts": {\n')),(0,i.kt)("p",null,"Now, whenever you make a commit, Prettier will format the changed files automatically."),(0,i.kt)("h2",{id:"formatting-at-project-start"},"Formatting at Project Start"),(0,i.kt)("p",null,"You can also run (from your project root):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"\n')),(0,i.kt)("p",null,"to format your entire project for the first time."),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"Read more: ",(0,i.kt)("a",{href:"https://github.com/PaPa31/react-complete-guide",class:"external"},"github.com: React Complete Guide")))}p.isMDXComponent=!0}}]);