"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[9022],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(5529),i=n(68111),s=["components"],c={id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:new Date("2021-03-21T20:06:52.000Z")},u=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",description:"Create index.html file with this:",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"14.09.2021",frontMatter:{id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:"2021-03-21T20:06:52.000Z"},sidebar:"Docs",previous:{title:"3.03.1.0 Pure React",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react"},next:{title:"3.03.2.0 Using Create React App",permalink:"/hm/ru/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app"}},d={},m=[{value:"Finished File",id:"finished-file",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file with this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"{11-12,13-24}","{11-12,13-24}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script>\n      class App extends React.Component {\n        render() {\n          return React.createElement(\n            "div",\n            {},\n            React.createElement("h1", {}, "Hello World!")\n          );\n        }\n      }\n      ReactDOM.render(React.createElement(App), document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"This file contains two script tags so that the browser understands the ",(0,l.kt)("inlineCode",{parentName:"p"},"React syntax"),", the third script tags contain code written in React syntax."),(0,l.kt)("p",null,"Let's convert our code from ",(0,l.kt)("inlineCode",{parentName:"p"},"React syntax")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"JSX syntax")," and compare:"),(0,l.kt)(o.Z,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"JSX",value:"jsx"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n  render() {\n    return React.createElement(\n      "div",\n      {},\n      React.createElement("h1", {}, "Hello World!")\n    );\n  }\n}\nReactDOM.render(React.createElement(App), document.getElementById("app"));\n'))),(0,l.kt)(i.Z,{value:"jsx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends React.Component {\n  render() {\n    return <div>Hello World!</div>\n}\nReactDOM.render(<App/>, document.getElementById("app"));\n')))),(0,l.kt)("p",null,"The JSX is easy to understand. And it looks like HTML markup."),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"babel")," package to the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file so that the browser understands the JSX syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n')),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," attribute to the last script tag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel">\n// JSX\n<\/script>\n')),(0,l.kt)("h2",{id:"finished-file"},"Finished File"),(0,l.kt)("p",null,"Full index.html will be looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script type="text/babel">\n      class App extends React.Component {\n        render() {\n          return <h1>Hello World!</h1>;\n        }\n      }\n      ReactDOM.render(<App />, document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("p",null,"This approach is fine for learning. However, it makes your website slow. If you install a ",(0,l.kt)("a",{href:"https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project",class:"external"},"JSX preprocessor"),", it convert all your ",(0,l.kt)("inlineCode",{parentName:"p"},"<script>")," tags automatically to the plain JavaScript code suitable for the browser."))}f.isMDXComponent=!0},68111:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),l=n(51048),o=n(33609),i=n(1943),s=n(72957),c=n(86010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,h=e.defaultValue,f=e.values,b=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===h?h:null!=(t=null!=h?h:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=y[0])?void 0:l.props.value;if(null!==x&&!g.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),j=w.tabGroupChoices,E=w.setTabGroupChoices,O=(0,a.useState)(x),T=O[0],N=O[1],C=[],R=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=j[b];null!=D&&D!==T&&g.some((function(e){return e.value===D}))&&N(D)}var A=function(e){var t=e.currentTarget,n=C.indexOf(t),r=g[n].value;r!==T&&(R(t),N(r),null!=b&&E(b,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:A,onClick:A},l,{className:(0,c.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);