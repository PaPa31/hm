"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[93864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(34259),l=n(18679);const o={id:"3-06-0-jsx",title:"3.06.0 Jsx",date:new Date("2021-03-11T22:19:07.000Z")},i=void 0,u={unversionedId:"react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",id:"react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",title:"3.06.0 Jsx",description:"JSX - is syntax lightweight to understand.",source:"@site/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx.mdx",sourceDirName:"react-complete-guide/03-base-feature-syntax/Lessons",slug:"/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx.mdx",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"3-06-0-jsx",title:"3.06.0 Jsx",date:"2021-03-11T22:19:07.000Z"},sidebar:"Courses",previous:{title:"3.04.2 Initial Deploy",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-04-2-initial-deploy"},next:{title:"3.06.1 My Thoughts About Jsx",permalink:"/hm/courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-1-my-thoughts-about-jsx"}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JSX - is syntax lightweight to understand."),(0,r.kt)("p",null,"JSX design has two main goals: be the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML")," for human eyes, and so that machines don't confuse it with HTML. Because HTML is compiled from JSX."),(0,r.kt)("p",null,"Check out what the same code looks in ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," and in ",(0,r.kt)("inlineCode",{parentName:"p"},"pure React"),":"),(0,r.kt)(s.Z,{defaultValue:"jsx",values:[{label:"JSX",value:"jsx"},{label:"React",value:"react"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"jsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class App extends Component {\n  render() {\n    return (\n      <div className="shopping-list">\n        <h1>Shopping List for {this.props.name}</h1>\n        <ul>\n          <li>Instagram</li>\n          <li>WhatsApp</li>\n          <li>Oculus</li>\n        </ul>\n      </div>\n    )\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component {\n  render() {\n    React.createElement(\n      'div',\n      {\n        className: 'shopping-list',\n      },\n      React.createElement('h1', null, 'Shopping List for ', this.props.name),\n      React.createElement(\n        'ul',\n        null,\n        React.createElement('li', null, 'Instagram'),\n        React.createElement('li', null, 'WhatsApp'),\n        React.createElement('li', null, 'Oculus')\n      )\n    )\n  }\n}\n")))),(0,r.kt)("p",null,"Both Pure React and JSX are Javascript. But JSX was desinged to be more like HTML. To facilitate the layout process."),(0,r.kt)("p",null,"JSX looks like HTML. Pure React looks like Javascript. But this is it. And JSX is Javascript too."),(0,r.kt)("p",null,"This conversion from JSX to React make ",(0,r.kt)("a",{href:"https://babeljs.io/",class:"external"},"Babel"),"."))}d.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),s=n(86010),l=n(51048),o=n(33609),i=n(1943),u=n(72957);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,i.U)(),[T,w]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=x[f];null!=e&&e!==T&&v.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==T&&(O(t),w(a),null!=f&&k(f,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:N,onFocus:E,onClick:E},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);