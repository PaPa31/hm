"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[19857],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(c,".").concat(u)]||m[u]||l[u]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67839:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"7-19-rendering-adjacent-jsx-element",title:"7.19 Rendering Adjacent JSX Element",date:new Date("2021-04-06T16:58:19.000Z")},c=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element",title:"7.19 Rendering Adjacent JSX Element",description:"React Adjacent JSX PDF",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-19-rendering-adjacent-jsx-element.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-19-rendering-adjacent-jsx-element",title:"7.19 Rendering Adjacent JSX Element",date:"2021-04-06T16:58:19.000Z"},sidebar:"Docs",previous:{title:"7.18 How React Update DOM",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-18-how-react-update-dom"},next:{title:"7.20 Windows Users Must Read",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-20-windows-users-must-read"}},d={},l=[{value:"With Array",id:"with-array",level:2},{value:"With Auxiliary component",id:"with-auxiliary-component",level:2}],m={toc:l};function u(e){var n=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(1869).Z},"React Adjacent JSX PDF")),(0,i.kt)("h2",{id:"with-array"},"With Array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {6-17}',title:'"Person.js"',"{6-17}":!0},'import React, { Component } from "react";\n\nclass Person extends Component {\n  render() {\n    console.log("[Person.js] rendering...");\n    return [\n      <p key="i1" onClick={this.props.click}>\n        I\'m {this.props.name} and I am {this.props.age} years old!\n      </p>,\n      <p key="i2">{this.props.children}</p>,\n      <input\n        key="i3"\n        type="text"\n        onChange={this.props.changed}\n        value={this.props.name}\n      />,\n    ];\n  }\n}\n\nexport default Person;\n\n')),(0,i.kt)("h2",{id:"with-auxiliary-component"},"With Auxiliary component"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"And side note for Windows users, there ",(0,i.kt)("inlineCode",{parentName:"p"},"aux.js")," will not work, so on Windows you should name this ",(0,i.kt)("inlineCode",{parentName:"p"},"auxiliary.js")," simply because aux is a reserved word or name on Windows systems, on Linux and Mac, this is no problem."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/hoc/Auxiliary.js" {}',title:'"src/hoc/Auxiliary.js"',"{}":!0},"const auxillary = (props) => props.children;\n\nexport default auxillary;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {2,8,19}',title:'"Person.js"',"{2,8,19}":!0},'import React, { Component } from "react";\nimport Aux from "../../../hoc/Auxillary";\n\nclass Person extends Component {\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <Aux>\n        <p key="i1" onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p key="i2">{this.props.children}</p>\n        <input\n          key="i3"\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </Aux>\n    );\n  }\n}\n\nexport default Person;\n')))}u.isMDXComponent=!0},1869:function(e,n,t){n.Z=t.p+"assets/files/19-react-adjacent-jsx-af3b31a9fd802d1d7a85c4835a21fa91.pdf"}}]);