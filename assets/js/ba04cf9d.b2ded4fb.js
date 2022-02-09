"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[93864],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(5529),s=n(98448),u=["components"],i={id:"3-06-0-jsx",title:"3.06.0 Jsx",date:new Date("2021-03-11T22:19:07.000Z")},c=void 0,p={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",title:"3.06.0 Jsx",description:"JSX - is syntax lightweight to understand.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"3-06-0-jsx",title:"3.06.0 Jsx",date:"2021-03-11T22:19:07.000Z"},sidebar:"Docs",previous:{title:"3.04.2 Initial Deploy",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-2-initial-deploy"},next:{title:"3.06.1 My Thoughts About Jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-1-my-thoughts-about-jsx"}},m=[],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSX - is syntax lightweight to understand."),(0,l.kt)("p",null,"JSX design has two main goals: be the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"HTML")," for human eyes, and so that machines don't confuse it with HTML. Because HTML is compiled from JSX."),(0,l.kt)("p",null,"Check out what the same code looks in ",(0,l.kt)("inlineCode",{parentName:"p"},"JSX")," and in ",(0,l.kt)("inlineCode",{parentName:"p"},"pure React"),":"),(0,l.kt)(o.Z,{defaultValue:"jsx",values:[{label:"JSX",value:"jsx"},{label:"React",value:"react"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"jsx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends Component {\n  render() {\n    return (\n      <div className="shopping-list">\n        <h1>Shopping List for {this.props.name}</h1>\n        <ul>\n          <li>Instagram</li>\n          <li>WhatsApp</li>\n          <li>Oculus</li>\n        </ul>\n      </div>\n    )\n  }\n}\n'))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component {\n  render() {\n    React.createElement(\n      'div',\n      {\n        className: 'shopping-list',\n      },\n      React.createElement('h1', null, 'Shopping List for ', this.props.name),\n      React.createElement(\n        'ul',\n        null,\n        React.createElement('li', null, 'Instagram'),\n        React.createElement('li', null, 'WhatsApp'),\n        React.createElement('li', null, 'Oculus')\n      )\n    )\n  }\n}\n")))),(0,l.kt)("p",null,"Both Pure React and JSX are Javascript. But JSX was desinged to be more like HTML. To facilitate the layout process."),(0,l.kt)("p",null,"JSX looks like HTML. Pure React looks like Javascript. But this is it. And JSX is Javascript too."),(0,l.kt)("p",null,"This conversion from JSX to React make ",(0,l.kt)("a",{href:"https://babeljs.io/",class:"external"},"Babel"),"."))}f.isMDXComponent=!0},98448:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(51048),o=n(89623),s=n(86010),u="tabItem_LplD";function i(e){var t,n,l,i=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),x=g.tabGroupChoices,k=g.setTabGroupChoices,T=(0,r.useState)(y),w=T[0],j=T[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var N=x[d];null!=N&&N!==w&&h.some((function(e){return e.value===N}))&&j(N)}var L=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==w&&(E(t),j(a),null!=d&&k(d,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:L,onClick:L},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return r.createElement(i,(0,a.Z)({key:String(t)},e))}}}]);