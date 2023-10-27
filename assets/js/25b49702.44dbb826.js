"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[9022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),s=n(18679);const o={id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:new Date("2021-03-21T20:06:52.000Z")},i=void 0,c={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",description:"Create index.html file with this:",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-1-react-with-jsx.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"3-03-1-1-react-with-jsx",title:"3.03.1.1 React With Jsx",date:"2021-03-21T20:06:52.000Z"},sidebar:"Courses",previous:{title:"3.03.1.0 Pure React",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-1-0-pure-react"},next:{title:"3.03.2.0 Using Create React App",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app"}},p={},u=[{value:"Finished File",id:"finished-file",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file with this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{11-12,13-24}","{11-12,13-24}":!0},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script>\n      class App extends React.Component {\n        render() {\n          return React.createElement(\n            "div",\n            {},\n            React.createElement("h1", {}, "Hello World!")\n          );\n        }\n      }\n      ReactDOM.render(React.createElement(App), document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"This file contains two script tags so that the browser understands the ",(0,r.kt)("inlineCode",{parentName:"p"},"React syntax"),", the third script tags contain code written in React syntax."),(0,r.kt)("p",null,"Let's convert our code from ",(0,r.kt)("inlineCode",{parentName:"p"},"React syntax")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX syntax")," and compare:"),(0,r.kt)(l.Z,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"JSX",value:"jsx"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n  render() {\n    return React.createElement(\n      "div",\n      {},\n      React.createElement("h1", {}, "Hello World!")\n    );\n  }\n}\nReactDOM.render(React.createElement(App), document.getElementById("app"));\n'))),(0,r.kt)(s.Z,{value:"jsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends React.Component {\n  render() {\n    return <div>Hello World!</div>\n}\nReactDOM.render(<App/>, document.getElementById("app"));\n')))),(0,r.kt)("p",null,"The JSX is easy to understand. And it looks like HTML markup."),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," package to the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file so that the browser understands the JSX syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n')),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute to the last script tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/babel">\n// JSX\n<\/script>\n')),(0,r.kt)("h2",{id:"finished-file"},"Finished File"),(0,r.kt)("p",null,"Full index.html will be looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hello World</title>\n  </head>\n  <body>\n    <div id="app">not rendered</div>\n    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script type="text/babel">\n      class App extends React.Component {\n        render() {\n          return <h1>Hello World!</h1>;\n        }\n      }\n      ReactDOM.render(<App />, document.getElementById("app"));\n    <\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"This approach is fine for learning. However, it makes your website slow. If you install a ",(0,r.kt)("a",{href:"https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project",class:"external"},"JSX preprocessor"),", it convert all your ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tags automatically to the plain JavaScript code suitable for the browser."))}m.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),s=n(51048),o=n(33609),i=n(1943),c=n(72957);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[w,j]=(0,r.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==w&&(O(t),j(a),null!=h&&x(h,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:T,onClick:T},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);