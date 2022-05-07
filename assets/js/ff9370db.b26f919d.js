"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[81388],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"8-06-must-read-enabling-css-module",title:"8.06 Must Read Enabling Css Module",date:new Date("2021-04-09T15:13:36.000Z")},s=void 0,u={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module",id:"react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module",title:"8.06 Must Read Enabling Css Module",description:"MUST\xa0READ (at least the first few paragraphs ... ;-))",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-06-must-read-enabling-css-module.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-06-must-read-enabling-css-module",title:"8.06 Must Read Enabling Css Module",date:"2021-04-09T15:13:36.000Z"},sidebar:"Docs",previous:{title:"8.05 Planing State",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-05-planing-state"},next:{title:"8.07 Setting Up Project",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-07-setting-up-project"}},c={},p=[{value:"Built-in support CSS Modules",id:"built-in-support-css-modules",level:2},{value:"Optional",id:"optional",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MUST\xa0READ (at least the first few paragraphs ... ;-))")),(0,o.kt)("p",null,'In the next lecture, we\'ll use a styling solution named "CSS\xa0modules". We already had a look at that in the "Styling"\xa0section earlier in the course.'),(0,o.kt)("p",null,"In the next lecture, we'll enable CSS\xa0modules and depending on the project setup you're using, the exact steps shown there might not work for you."),(0,o.kt)("p",null,"At least if you're not using the starting project you also find ",(0,o.kt)("strong",{parentName:"p"},"attached to the next lecture"),". If you DO\xa0use that, you should be able to continue without issues (and you can skip the rest of this text lecture here)."),(0,o.kt)("h2",{id:"built-in-support-css-modules"},"Built-in support CSS Modules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In more recent project versions created by CRA, support for CSS\xa0modules is already built-in and you can use that feature without ejecting, please see:")," ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet"},(0,o.kt)("strong",{parentName:"a"},"https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet"))),(0,o.kt)("p",null,'I also showed this built-in support in the "Styling"\xa0section earlier in the course.'),(0,o.kt)("p",null,"If you use this approach, you DON'T need to eject. But please ",(0,o.kt)("strong",{parentName:"p"},"don't skip the next videos though"),", I\xa0do explain what CSS\xa0modules are and why + how we use them there!"),(0,o.kt)("h2",{id:"optional"},"Optional"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Better see ",(0,o.kt)("a",{parentName:"p",href:"../05-styling-react-components-and-elements/5-10-0-working-with-css-modules#configure-webpackconfig-files"},"this"),"."))),(0,o.kt)("p",null,"If you still want to eject and manually adjust the Webpack config (as we do it in the new videos - which you don't need to do if you follow the approach described in the link above), you should take the below comments into account in case your webpack config (after ejecting)\xa0doesn't look the same as it does in my videos:"),(0,o.kt)("p",null,"After ejecting, we edit a Webpack config file that's made available by ejecting. This file might look slightly different for you."),(0,o.kt)("p",null,"In the video, I'll look for an entry that starts like this (in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  test: /\\\\.css$/,\n  ...\n}\n")),(0,o.kt)("p",null,"and I\xa0then edit this entry."),(0,o.kt)("p",null,"This entry now looks slightly different. You'll have to find the following part in your ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  test: cssRegex,\n  exclude: cssModuleRegex,\n  ...\n}\n")),(0,o.kt)("p",null,"and then edit that entry."),(0,o.kt)("p",null,"Finally, it should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  test: cssRegex,\n  exclude: cssModuleRegex,\n  use: getStyleLoaders({\n      importLoaders: 1,\n      modules: true,\n      localIdentName: '\\[name\\]\\_\\_\\[local\\]\\_\\_\\[hash:base64:5\\]'\n  }),\n}\n")),(0,o.kt)("p",null,"You can ignore me editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.prod.js")," file - with the latest version of create-react-app, ejecting only gives you ",(0,o.kt)("strong",{parentName:"p"},"ONE"),"\xa0webpack config file (which you edit as described above)."))}m.isMDXComponent=!0}}]);