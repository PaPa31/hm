"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[45726],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85544:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(5529),i=r(68111),s=["components"],c={id:"3-03-2-1-react-script-error",title:"3.03.2.1 React Script Error",date:new Date("2021-03-03T23:15:44.000Z")},u=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error",title:"3.03.2.1 React Script Error",description:"react script is not recognized error",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-1-react-script-error.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-03-2-1-react-script-error",title:"3.03.2.1 React Script Error",date:"2021-03-03T23:15:44.000Z"},sidebar:"Docs",previous:{title:"3.03.2.0 Using Create React App",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app"},next:{title:"3.04.1 Ide Setup",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-1-ide-setup"}},d={},m=[{value:"<code>react script</code> is not recognized error",id:"react-script-is-not-recognized-error",level:2},{value:"If the Error Persist",id:"if-the-error-persist",level:2}],f={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"react-script-is-not-recognized-error"},(0,o.kt)("inlineCode",{parentName:"h2"},"react script")," is not recognized error"),(0,o.kt)("p",null,"If you installed ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," from Linux, like I did, and then try to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," from Windows (while in the same installation folder), you might get an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="PowerShell"',title:'"PowerShell"'},"\u276f npm start\n\n> react-complete-guide@0.1.0 start F:\\parsh\\static\\react\\react-complete-guide\n> react-scripts start\n\n'react-scripts' is not recognized as an internal or external command,\noperable program or batch file.\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! react-complete-guide@0.1.0 start: `react-scripts start`\nnpm ERR! Exit status 1\n...\n")),(0,o.kt)("p",null,"If so, you can help simply dependency reinstall with:"),(0,o.kt)(l.Z,{defaultValue:"shell1",values:[{label:"Bash",value:"shell1"},{label:"PowerShell",value:"shell2"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"shell1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf node_modules package-lock.json\n"))),(0,o.kt)(i.Z,{value:"shell2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm node_modules package-lock.json -r -fo\n")))),(0,o.kt)("p",null,"And then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i\n")),(0,o.kt)("h2",{id:"if-the-error-persist"},"If the Error Persist"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might run into a hidden error: spaces and other unnecessary characters in the file path name."))),(0,o.kt)("p",null,"If you still get the ",(0,o.kt)("inlineCode",{parentName:"p"},"script error"),", you may need to replace all ",(0,o.kt)("inlineCode",{parentName:"p"},"spaces")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"("),",",(0,o.kt)("inlineCode",{parentName:"p"},")")," characters with dashes ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," in the filenames and parent folders names of your project."))}h.isMDXComponent=!0},68111:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),a=r(86010),o="tabItem_OmH5";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5529:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),a=r(67294),o=r(51048),l=r(33609),i=r(1943),s=r(72957),c=r(86010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,r,o,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),E=N.tabGroupChoices,x=N.setTabGroupChoices,O=(0,a.useState)(w),T=O[0],C=O[1],j=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=E[v];null!=I&&I!==T&&y.some((function(e){return e.value===I}))&&C(I)}var L=function(e){var t=e.currentTarget,r=j.indexOf(t),n=y[r].value;n!==T&&(P(t),C(n),null!=v&&x(v,n))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;r=j[n]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;r=j[a]||j[j.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:Z,onFocus:L,onClick:L},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);