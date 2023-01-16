"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[78055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),g=r,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",date:new Date("2021-04-14T18:24:06.000Z")},i=void 0,p={unversionedId:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",id:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",description:"You learned how to extract route parameters (=>\xa0:id\xa0 etc).",source:"@site/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment.md",sourceDirName:"react-complete-guide/11-multi-page-feeling-in-single-page-app-routing",slug:"/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-18-parsing-query-parameters-and-fragment.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"11-18-parsing-query-parameters-and-fragment",title:"11.18 Parsing Query Parameters And Fragment",date:"2021-04-14T18:24:06.000Z"},sidebar:"Courses",previous:{title:"11.17 Extracting Route Parameters",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-17-extracting-route-parameters"},next:{title:"11.19 Using Switch To Load Single Route",permalink:"/hm/courses/react-complete-guide/11-multi-page-feeling-in-single-page-app-routing/11-19-using-switch-to-load-single-route"}},s={},l=[{value:"<strong>Query Params:</strong>",id:"query-params",level:2},{value:"<strong>Fragment:</strong>",id:"fragment",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You learned how to extract route parameters (=>\xa0",(0,r.kt)("inlineCode",{parentName:"p"},":id"),"\xa0 etc)."),(0,r.kt)("p",null,"But how do you extract ",(0,r.kt)("strong",{parentName:"p"},"search"),'\xa0(also referred to as "',(0,r.kt)("strong",{parentName:"p"},"query"),'") ',(0,r.kt)("strong",{parentName:"p"},"parameters")," (=> ",(0,r.kt)("inlineCode",{parentName:"p"},"?something=somevalue"),"\xa0 at the end of the URL)? How do you extract the ",(0,r.kt)("strong",{parentName:"p"},"fragment")," (=>\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#something"),"\xa0 at the end of the URL)?"),(0,r.kt)("h2",{id:"query-params"},(0,r.kt)("strong",{parentName:"h2"},"Query Params:")),(0,r.kt)("p",null,"You can pass them easily like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/my-path?start=5">Go to Start</Link>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link \n    to={{\n        pathname: '/my-path',\n        search: '?start=5'\n    }}\n    >Go to Start</Link>\n")),(0,r.kt)("p",null,"React router makes it easy to get access to the search string: ",(0,r.kt)("inlineCode",{parentName:"p"},"props.location.search"),"."),(0,r.kt)("p",null,"But that will only give you something like ",(0,r.kt)("inlineCode",{parentName:"p"},"?start=5")),(0,r.kt)("p",null,"You probably want to get the key-value pair, without the ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"\xa0\xa0and the ",(0,r.kt)("inlineCode",{parentName:"p"},"="),"\xa0. Here's a snippet which allows you to easily extract that information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n    const query = new URLSearchParams(this.props.location.search);\n    for (let param of query.entries()) {\n        console.log(param); // yields \\['start', '5'\\]\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),"\xa0 is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"entries()"),"\xa0\xa0method. ",(0,r.kt)("inlineCode",{parentName:"p"},"entries()"),"\xa0 returns an Iterator - basically a construct which can be used in a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of..."),"\xa0 loop (as shown above)."),(0,r.kt)("p",null,"When looping through ",(0,r.kt)("inlineCode",{parentName:"p"},"query.entries()"),"\xa0, you get ",(0,r.kt)("strong",{parentName:"p"},"arrays")," where the first element is the ",(0,r.kt)("strong",{parentName:"p"},"key name")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"\xa0) and the second element is the assigned ",(0,r.kt)("strong",{parentName:"p"},"value")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\xa0)."),(0,r.kt)("h2",{id:"fragment"},(0,r.kt)("strong",{parentName:"h2"},"Fragment:")),(0,r.kt)("p",null,"You can pass it easily like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="/my-path#start-position">Go to Start</Link>\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link \n    to={{\n        pathname: '/my-path',\n        hash: 'start-position'\n    }}\n    >Go to Start</Link>\n")),(0,r.kt)("p",null,"React router makes it easy to extract the fragment. You can simply access ",(0,r.kt)("inlineCode",{parentName:"p"},"props.location.hash"),"."))}m.isMDXComponent=!0}}]);