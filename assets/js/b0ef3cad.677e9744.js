"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[21367],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(5529),i=n(68111),s=["components"],c={id:"5-07-introducing-styled-components",title:"5.07 Introducing Styled Components",date:new Date("2021-04-04T11:50:39.000Z")},u=void 0,p={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components",id:"react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components",title:"5.07 Introducing Styled Components",description:"Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress - github.com: Styled Components",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-07-introducing-styled-components.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-07-introducing-styled-components",title:"5.07 Introducing Styled Components",date:"2021-04-04T11:50:39.000Z"},sidebar:"Docs",previous:{title:"5.06 Using Radium For Media Queries",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-06-using-radium-for-media-queries"},next:{title:"5.08 More On Styled Components",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-08-more-on-styled-components"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],f={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress - ",(0,o.kt)("a",{href:"https://github.com/styled-components/styled-components",class:"external"},"github.com: Styled Components"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{href:"https://styled-components.com/",class:"external"},"styled-components.com")),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save styled-components\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add styled-components\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This is ",(0,o.kt)("inlineCode",{parentName:"p"},"regular JavaScript")," though it's a feature called ",(0,o.kt)("inlineCode",{parentName:"p"},"tacked templates")," and ",(0,o.kt)("a",{parentName:"p",href:"5-13-useful-resources"},"attached")," you find a link where you can learn more about it."),(0,o.kt)("p",null,"It has nothing to do with ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," that is available in ",(0,o.kt)("inlineCode",{parentName:"p"},"vanilla JavaScript")," as well."),(0,o.kt)("p",null,"This method creates backticks in general can be used in JavaScript to create a so-called ",(0,o.kt)("inlineCode",{parentName:"p"},"template literal"),"."),(0,o.kt)("p",null,"This is a React component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const StyleDiv = styled.div`\n  width: 60%;\n  margin: 16px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  padding: 16px;\n  text-align: center;\n\n  @media (min-width: 500px) {\n    width: 450px;\n  }\n`\n")),(0,o.kt)("p",null,"Every method provided by this styled object no matter if that's ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," or whatever it is returns a React component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {2,4-15,19,25}',title:'"Person.js"',"{2,4-15,19,25}":!0},'import React from "react";\nimport styled from "styled-components";\n\nconst StyleDiv = styled.div`\n  width: 60%;\n  margin: 16px auto;\n  border: 1px solid #eee;\n  box-shadow: 0 2px 3px #ccc;\n  padding: 16px;\n  text-align: center;\n\n  @media (min-width: 500px) {\n    width: 450px;\n  }\n`;\n\nconst person = (props) => {\n  return (\n    <StyleDiv>\n      <p onClick={props.click}>\n        I\'m {props.name} and I am {props.age} years old!\n      </p>\n      <p>{props.children}</p>\n      <input type="text" onChange={props.changed} value={props.name} />\n    </StyleDiv>\n  );\n};\n\nexport default person;\n\n')),(0,o.kt)("p",null,"We have a nice mixture of JSX and JavaScript all in one file with help of ",(0,o.kt)("inlineCode",{parentName:"p"},"styled components"),"."))}y.isMDXComponent=!0},68111:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),o="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(51048),l=n(33609),i=n(1943),s=n(72957),c=n(86010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,y=e.values,v=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=y?y:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),N=x.tabGroupChoices,O=x.setTabGroupChoices,T=(0,a.useState)(w),S=T[0],C=T[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=N[v];null!=D&&D!==S&&b.some((function(e){return e.value===D}))&&C(D)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==S&&(j(t),C(r),null!=v&&O(v,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);