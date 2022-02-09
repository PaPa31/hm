"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[16608],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59930:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"5-12-more-on-css-modules",title:"5.12 More On CSS Modules",date:new Date("2021-04-03T00:24:51.000Z")},c=void 0,i={unversionedId:"react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules",id:"react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules",title:"5.12 More On CSS Modules",description:"CSS\xa0Modules are a relatively new concept (you can dive super-deep into them here//github.com/css-modules/css-modules). With CSS\xa0modules, you can write normal CSS code and make sure, that it only applies to a given component.",source:"@site/courses/react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules.md",sourceDirName:"react-complete-guide/05-styling-react-components-and-elements",slug:"/react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/05-styling-react-components-and-elements/5-12-more-on-css-modules.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"5-12-more-on-css-modules",title:"5.12 More On CSS Modules",date:"2021-04-03T00:24:51.000Z"},sidebar:"Docs",previous:{title:"5.11 CSS Modules And Media Queries",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-11-css-modules-and-media-queries"},next:{title:"5.13 Useful Resources",permalink:"/hm/courses/react-complete-guide/05-styling-react-components-and-elements/5-13-useful-resources"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CSS\xa0Modules")," are a relatively new concept (you can dive super-deep into them here:\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"https://github.com/css-modules/css-modules"),"). With CSS\xa0modules, you can write normal CSS code and make sure, that it only applies to a given component."),(0,a.kt)("p",null,"It's not using magic for that, instead it'll simply ",(0,a.kt)("strong",{parentName:"p"},"automatically generate unique CSS\xa0class names")," for you. And by importing a JS\xa0object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS\xa0object simply exposes some properties which hold the generated CSS\xa0class names as values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In Post.css File")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".Post {\n    color: red;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In Post Component File")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import classes from './Post.css';\n\nconst post = () => (\n    <div className={classes.Post}>...</div>\n);\n")),(0,a.kt)("p",null,"Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"classes.Post"),"\xa0 refers to an automatically generated ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),"\xa0 property on the imported ",(0,a.kt)("inlineCode",{parentName:"p"},"classes"),"\xa0 object. That property will in the end simply hold a value like ",(0,a.kt)("inlineCode",{parentName:"p"},"Post__Post__ah5_1"),"\xa0."),(0,a.kt)("p",null,"So your ",(0,a.kt)("inlineCode",{parentName:"p"},".Post"),"\xa0 class was automatically transformed to a different class (",(0,a.kt)("inlineCode",{parentName:"p"},"Post__Post__ah5_1"),"\xa0) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string!\xa0You can only access it through the ",(0,a.kt)("inlineCode",{parentName:"p"},"classes"),"\xa0 object. And if you import the CSS\xa0file (in the same way) in another component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"classes"),"\xa0 object there will hold a ",(0,a.kt)("inlineCode",{parentName:"p"},"Post"),"\xa0 property which yields a ",(0,a.kt)("strong",{parentName:"p"},"different")," (!) CSS\xa0class name. Hence it's scoped to a given component."),(0,a.kt)("p",null,"By the way, if you somehow also want to define a global (i.e. un-transformed)\xa0CSS\xa0class in such a ",(0,a.kt)("inlineCode",{parentName:"p"},".css"),"\xa0 file, you can prefix the selector with ",(0,a.kt)("inlineCode",{parentName:"p"},":global"),"\xa0."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":global .Post { ... }")),(0,a.kt)("p",null,"Now you can use ",(0,a.kt)("inlineCode",{parentName:"p"},'className="Post"'),"\xa0\xa0anywhere in your app and receive that styling."))}m.isMDXComponent=!0}}]);