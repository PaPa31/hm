"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[96181],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(5529),s=n(68111),i=["components"],c={id:"5-10-0-working-with-css-modules",title:"5.10.0 Working With CSS Modules",date:new Date("2021-04-04T18:44:21.000Z")},u=void 0,p={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",id:"react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",title:"5.10.0 Working With CSS Modules",description:"Another way to scoping styles to your components.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-0-working-with-css-modules.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-10-0-working-with-css-modules",title:"5.10.0 Working With CSS Modules",date:"2021-04-04T18:44:21.000Z"},sidebar:"Docs",previous:{title:"5.09 Styled Components And Dynamic Styles",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-09-styled-components-and-dynamic-styles"},next:{title:"5.10.1.0 CSS Modules Usage",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-10-1-0-css-modules-usage"}},d={},m=[{value:"If <code>react-script</code> version = 1",id:"if-react-script-version--1",level:2},{value:"Disassembling React Tooling",id:"disassembling-react-tooling",level:3},{value:"Configure <code>webpack.config</code> files",id:"configure-webpackconfig-files",level:2},{value:"If <code>react-script</code> version &gt; 1",id:"if-react-script-version--1-1",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Another way to scoping styles to your components."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"So of writing styles which only apply to a specific component instead of the entire application because that is an important thing.")),(0,o.kt)("p",null,"First, we need to tweak the configuration if we're using ",(0,o.kt)("inlineCode",{parentName:"p"},"react scripts"),"."),(0,o.kt)("h2",{id:"if-react-script-version--1"},"If ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-script")," version = 1"),(0,o.kt)("p",null,"For this course you need an earlier version of ",(0,o.kt)("a",{parentName:"p",href:"../03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app#script-versions"},"react-scripts"),":"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall react-scripts --save && npm install react-scripts@1.0.13 --save\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn remove react-scripts&& yarn add react-scripts@1.0.13\n")))),(0,o.kt)("h3",{id:"disassembling-react-tooling"},"Disassembling React Tooling"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We need to tweak the configuration of our project a little bit.")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run eject\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run eject\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What this will do is it will eject from this under the hood configuration where you don't really have access to the underlying web packed conflict file and so on and give you access to the conflict files so that you can tweak how your code is bundled together and so on and there is something we will need to tweak there.")),(0,o.kt)("h2",{id:"configure-webpackconfig-files"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h2"},"webpack.config")," files"),(0,o.kt)("p",null,"After successfully ejected, add two lines in these two files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/webpack.config.dev.js" {10-11}',title:'"config/webpack.config.dev.js"',"{10-11}":!0},'        ...\n156      {\n157         test: /\\.css$/,\n158         use: [\n159           require.resolve("style-loader"),\n160           {\n161             loader: require.resolve("css-loader"),\n162             options: {\n163               importLoaders: 1,\n                  modules: true,\n                  localIdentName: "[name]__[local]__[hash:base64:5]",\n164             },\n165           },\n166           {\n        ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/webpack.config.prod.js" {9-10}',title:'"config/webpack.config.prod.js"',"{9-10}":!0},'            ...\n169               use: [\n170                 {\n171                   loader: require.resolve("css-loader"),\n172                   options: {\n173                     importLoaders: 1,\n174                     minimize: true,\n175                     sourceMap: shouldUseSourceMap,\n                        modules: true,\n                        localIdentName: "[name]__[local]__[hash:base64:5]",\n176                   },\n177                 },\n178                 {\n            ...\n')),(0,o.kt)("p",null,"This feature gives unique names to CSS class names. In this manner:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="App__Button__2_NDl">Toggle Persons</button>\n')),(0,o.kt)("h2",{id:"if-react-script-version--1-1"},"If ",(0,o.kt)("inlineCode",{parentName:"h2"},"react-script")," version > 1"),(0,o.kt)("p",null,"You need to add to filename of the CSS file the word ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.css")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Person.module.css")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import classes from './Person.module.css'\n")),(0,o.kt)("p",null,"This will automatically work without ejecting."))}g.isMDXComponent=!0},68111:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),o="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(51048),l=n(33609),s=n(1943),i=n(72957),c=n(86010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),T=N.tabGroupChoices,j=N.setTabGroupChoices,O=(0,a.useState)(w),C=O[0],x=O[1],E=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=T[h];null!=_&&_!==C&&k.some((function(e){return e.value===_}))&&x(_)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==C&&(S(t),x(r),null!=h&&j(h,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:D,onClick:D},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);