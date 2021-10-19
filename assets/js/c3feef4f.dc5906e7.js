"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[96181],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34714:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(37358),i=n(98448),s=["components"],c={id:"5-10-0-working-with-css-modules",title:"5.10.0 Working With CSS Modules",date:new Date("2021-04-04T18:44:21.000Z")},u=void 0,p={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",id:"react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",isDocsHomePage:!1,title:"5.10.0 Working With CSS Modules",description:"Another way to scoping styles to your components.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-10-0-working-with-css-modules",title:"5.10.0 Working With CSS Modules",date:"2021-04-04T18:44:21.000Z"},sidebar:"Docs",previous:{title:"5.09 Styled Components And Dynamic Styles",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles"},next:{title:"5.10.1.0 CSS Modules Usage",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage"}},m=[{value:"If <code>react-script</code> version = 1",id:"if-react-script-version--1",children:[{value:"Disassembling React Tooling",id:"disassembling-react-tooling",children:[]}]},{value:"Configure <code>webpack.config</code> files",id:"configure-webpackconfig-files",children:[]},{value:"If <code>react-script</code> version &gt; 1",id:"if-react-script-version--1-1",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Another way to scoping styles to your components."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"So of writing styles which only apply to a specific component instead of the entire application because that is an important thing.")),(0,o.kt)("p",null,"First, we need to tweak the configuration if we're using ",(0,o.kt)("inlineCode",{parentName:"p"},"react scripts"),"."),(0,o.kt)("h2",{id:"if-react-script-version--1"},"If ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-script")," version = 1"),(0,o.kt)("p",null,"For this course you need an earlier version of ",(0,o.kt)("a",{parentName:"p",href:"../03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app#script-versions"},"react-scripts"),":"),(0,o.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall react-scripts --save && npm install react-scripts@1.0.13 --save\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn remove react-scripts&& yarn add react-scripts@1.0.13\n")))),(0,o.kt)("h3",{id:"disassembling-react-tooling"},"Disassembling React Tooling"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We need to tweak the configuration of our project a little bit.")),(0,o.kt)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run eject\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run eject\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What this will do is it will eject from this under the hood configuration where you don't really have access to the underlying web packed conflict file and so on and give you access to the conflict files so that you can tweak how your code is bundled together and so on and there is something we will need to tweak there.")),(0,o.kt)("h2",{id:"configure-webpackconfig-files"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h2"},"webpack.config")," files"),(0,o.kt)("p",null,"After successfully ejected, add two lines in these two files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/webpack.config.dev.js" {10-11}',title:'"config/webpack.config.dev.js"',"{10-11}":!0},'        ...\n156      {\n157         test: /\\.css$/,\n158         use: [\n159           require.resolve("style-loader"),\n160           {\n161             loader: require.resolve("css-loader"),\n162             options: {\n163               importLoaders: 1,\n                  modules: true,\n                  localIdentName: "[name]__[local]__[hash:base64:5]",\n164             },\n165           },\n166           {\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/webpack.config.prod.js" {9-10}',title:'"config/webpack.config.prod.js"',"{9-10}":!0},'            ...\n169               use: [\n170                 {\n171                   loader: require.resolve("css-loader"),\n172                   options: {\n173                     importLoaders: 1,\n174                     minimize: true,\n175                     sourceMap: shouldUseSourceMap,\n                        modules: true,\n                        localIdentName: "[name]__[local]__[hash:base64:5]",\n176                   },\n177                 },\n178                 {\n            ...\n')),(0,o.kt)("p",null,"This feature gives unique names to CSS class names. In this manner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="App__Button__2_NDl">Toggle Persons</button>\n')),(0,o.kt)("h2",{id:"if-react-script-version--1-1"},"If ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-script")," version > 1"),(0,o.kt)("p",null,"You need to add to filename of the CSS file the word ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.css")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.module.css")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import classes from './Person.module.css'\n")),(0,o.kt)("p",null,"This will automatically work without ejecting."))}f.isMDXComponent=!0},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(22713);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),v=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,r.useState)(g),y=b[0],w=b[1],N=[];if(null!=p){var T=v[p];null!=T&&T!==y&&f.some((function(e){return e.value===T}))&&w(T)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=f[n].value;w(r),null!=p&&(k(p,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r}}]);