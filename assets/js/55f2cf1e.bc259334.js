"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[10248],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(m,".").concat(u)]||c[u]||p[u]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52731:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"mongodb-install-windows",title:"MongoDB Install Windows",date:new Date("2022-05-01T17:35:28.000Z")},m=void 0,s={unversionedId:"db/mongodb-install-windows",id:"db/mongodb-install-windows",title:"MongoDB Install Windows",description:"Install MongoDB",source:"@site/docs/db/mongodb-install-windows.md",sourceDirName:"db",slug:"/db/mongodb-install-windows",permalink:"/hm/docs/db/mongodb-install-windows",editUrl:"https://github.com/papa31/hm/edit/documentation/docs/db/mongodb-install-windows.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1651484690,formattedLastUpdatedAt:"5/2/2022",frontMatter:{id:"mongodb-install-windows",title:"MongoDB Install Windows",date:"2022-05-01T17:35:28.000Z"},sidebar:"Docs",previous:{title:"Google's Protocol Buffer",permalink:"/hm/docs/data/googles-protocol-buffers"},next:{title:"Computer Abstraction Levels",permalink:"/hm/docs/digital-design/computer-abstraction-levels"}},d=[{value:"Install MongoDB",id:"install-mongodb",children:[],level:3},{value:"Install mongosh",id:"install-mongosh",children:[],level:3},{value:"Run MongoDB",id:"run-mongodb",children:[],level:3},{value:"Resources",id:"resources",children:[],level:3}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"install-mongodb"},"Install MongoDB"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("em",{parentName:"p"},".msi")," installer: ",(0,a.kt)("a",{href:"https://www.mongodb.com/try/download/community?tck=docs_server",class:"external"},"mongodb.com: Community Edition"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the wizard by double-clicking the ",(0,a.kt)("em",{parentName:"p"},".msi")," file")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In wizard:",(0,a.kt)("br",{parentName:"p"}),"\n","a. Change location to ",(0,a.kt)("em",{parentName:"p"},"F:\\Program Files\\MongoDB\\Server\\5.0\\bin"),(0,a.kt)("br",{parentName:"p"}),"\n","b. Uncheck the ",(0,a.kt)("em",{parentName:"p"},"Install MongoDB as a Service"),(0,a.kt)("br",{parentName:"p"}),"\n","c. Uncheck the ",(0,a.kt)("em",{parentName:"p"},"Install MongoDB Compass"),(0,a.kt)("br",{parentName:"p"}),"\n","d. Click Install")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("em",{parentName:"p"},"C:\\Program Files\\MongoDB\\Server\\5.0\\bin")," to your ",(0,a.kt)("a",{parentName:"p",href:"../workplace/windows/set-environment-variable-windows"},"PATH environment variable")))),(0,a.kt)("h3",{id:"install-mongosh"},"Install mongosh"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and run the MongoDB Shell ",(0,a.kt)("em",{parentName:"li"},".msi")," installer: ",(0,a.kt)("a",{href:"https://www.mongodb.com/try/download/shell?jmp=docs",class:"external"},"mongodb.com: Shell")),(0,a.kt)("li",{parentName:"ol"},"Accept location: ",(0,a.kt)("em",{parentName:"li"},"F:\\Users\\parsh\\AppData\\Local\\Programs\\mongosh")),(0,a.kt)("li",{parentName:"ol"},"Add the mongosh binary (F:\\Users\\parsh\\AppData\\Local\\Programs\\mongosh",")"," to your ",(0,a.kt)("a",{parentName:"li",href:"../workplace/windows/set-environment-variable-windows"},"PATH environment variable"))),(0,a.kt)("h3",{id:"run-mongodb"},"Run MongoDB"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("em",{parentName:"p"},"cmd")," as admin and create the data directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'c:\nmd "\\data\\db"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start MongoDB database:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'"F:\\Program Files\\MongoDB\\Server\\5.0\\bin\\mongod.exe" --dbpath="c:\\data\\db"\n\n# or simply\n\nmongod --dbpath="c:\\data\\db"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to MongoDB:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"mongosh\n")),(0,a.kt)("p",{parentName:"li"},"After running this command, you should see information about your MongoDB shell, the local server connection, and some additional information printed to the terminal."))),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/",class:"external"},"mongodb.com: Install Mongodb On Windows"))))}c.isMDXComponent=!0}}]);