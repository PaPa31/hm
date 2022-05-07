"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[12613],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,g=p["".concat(i,".").concat(d)]||p[d]||h[d]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34149:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],c={id:"lunr-search-plugin",title:"Lunr Search Plugin",date:new Date("2021-03-31T13:15:37.000Z")},i=void 0,s={unversionedId:"site-generators/docusaurus/lunr-search-plugin",id:"site-generators/docusaurus/lunr-search-plugin",title:"Lunr Search Plugin",description:"Offline Search for Docusaurus V2",source:"@site/docs/site-generators/docusaurus/lunr-search-plugin.md",sourceDirName:"site-generators/docusaurus",slug:"/site-generators/docusaurus/lunr-search-plugin",permalink:"/hm/docs/site-generators/docusaurus/lunr-search-plugin",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/site-generators/docusaurus/lunr-search-plugin.md",tags:[],version:"current",lastUpdatedBy:"papa",lastUpdatedAt:1617282576,formattedLastUpdatedAt:"4/1/2021",frontMatter:{id:"lunr-search-plugin",title:"Lunr Search Plugin",date:"2021-03-31T13:15:37.000Z"},sidebar:"Docs",previous:{title:"Live CodeBlock Theme",permalink:"/hm/docs/site-generators/docusaurus/live-codeblock-theme"},next:{title:"npm2yarn",permalink:"/hm/docs/site-generators/docusaurus/npm-to-yarn"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"<code>&#39;forEach&#39; of undefined</code>",id:"foreach-of-undefined",level:2},{value:"<code>e.handleSearchBarToggle is not a function</code>",id:"ehandlesearchbartoggle-is-not-a-function",level:2},{value:"<code>algolia.css URI malformed</code>",id:"algoliacss-uri-malformed",level:2},{value:"Converting URI to Image and Back to URI",id:"converting-uri-to-image-and-back-to-uri",level:2},{value:"Another search plugins",id:"another-search-plugins",level:2}],p={toc:h};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Offline Search for Docusaurus V2"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Since the plugin is in development, see the development page:"),(0,l.kt)("a",{href:"https://github.com/lelouch77/docusaurus-lunr-search",class:"external"},"GitHub.com: Docusaurus Lunr Search"),(0,l.kt)("p",null,"Below are some errors and how to fix them."),(0,l.kt)("h2",{id:"foreach-of-undefined"},(0,l.kt)("inlineCode",{parentName:"h2"},"'forEach' of undefined")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"I don't try to search, I was only moving or hovering with the mouse over the field throws the error. \u2014 ",(0,l.kt)("a",{href:"https://github.com/lelouch77/docusaurus-lunr-search/issues/33",class:"external"},"GitHub.com: #33"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Browser\'s Console"',title:"\"Browser's",'Console"':!0},"Uncaught (in promise) TypeError: Cannot read property 'forEach' of undefined            lunr.js?2f21:575 \n    at Function.lunr.Pipeline.load (lunr.js?2f21:575)\n")),(0,l.kt)("p",null,"Since empty array & object are causing problems, insert the highlighted code below before ",(0,l.kt)("inlineCode",{parentName:"p"},"initAlgolia(searchDocs, searchIndex, DocSearch);"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/theme/SearchBar/index.js" {4-6}',title:'"/src/theme/SearchBar/index.js"',"{4-6}":!0},"    ...\n\n      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {\n        if(searchDocs.length === 0) {\n          return;\n        }\n        initAlgolia(searchDocs, searchIndex, DocSearch);\n      });\n      initialized.current = true;\n\n    ...\n")),(0,l.kt)("h2",{id:"ehandlesearchbartoggle-is-not-a-function"},(0,l.kt)("inlineCode",{parentName:"h2"},"e.handleSearchBarToggle is not a function")),(0,l.kt)("a",{href:"https://github.com/lelouch77/docusaurus-lunr-search/issues/42",class:"external"},"GitHub.com: #42"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Console error each time I click the search bar")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Browser\'s Console"',title:"\"Browser's",'Console"':!0},"TypeError: e.handleSearchBarToggle is not a function\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"I simply modified ",(0,l.kt)("inlineCode",{parentName:"p"},"src/theme/SearchBar/index.js")," at line 69 with the following:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'},"props.handleSearchBarToggle && props.handleSearchBarToggle(!props.isSearchBarExpanded);\n")),(0,l.kt)("h2",{id:"algoliacss-uri-malformed"},(0,l.kt)("inlineCode",{parentName:"h2"},"algolia.css URI malformed")),(0,l.kt)("a",{href:"https://github.com/lelouch77/docusaurus-lunr-search/issues/45",class:"external"},"GitHub.com: #45"),(0,l.kt)("p",null,"When I run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build"),", I get an error like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"algolia.css\n\nURI malformed at decodeURI (<anonymous>)\n")),(0,l.kt)("p",null,"I temporarily fixed this by replacing the ",(0,l.kt)("inlineCode",{parentName:"p"},"background-image")," property in the last declaration block ",(0,l.kt)("inlineCode",{parentName:"p"},".algolia-autocomplete .algolia-docsearch-footer--logo")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"algolia.css")," file with this line (see ",(0,l.kt)("a",{parentName:"p",href:"#converting-uri-to-image-and-back-to-uri"},"Converting URI")," below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="algolia.css" {4}',title:'"algolia.css"',"{4}":!0},"    ...\n\n.algolia-autocomplete .algolia-docsearch-footer--logo {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAGCAYAAAClzULKAAAABHNCSVQICAgIfAhkiAAAACtJREFUSEtjZBgFAxYCjANm86jFDKOBP4CJYDTwRwN/AENgAK0eTfkDGPgAKC8ABxS+xFUAAAAASUVORK5CYII=');\n    ...\n")),(0,l.kt)("p",null,"While it works fine, but I wonder what the cause of the problem? And how to fix this error permanently?"),(0,l.kt)("h2",{id:"converting-uri-to-image-and-back-to-uri"},"Converting URI to Image and Back to URI"),(0,l.kt)("p",null,"Insert the ",(0,l.kt)("inlineCode",{parentName:"p"},"url"),":"),(0,l.kt)("a",{href:"https://www.site24x7.com/tools/datauri-to-image.html",class:"external"},"www.site24x7.com: URI to Image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='95' height='6' viewBox='0 0 95 6'%3E%3Ctitle%3Escale mod%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='buttonbase'%3E%3Cg id='scale_mod' data-name='scale mod'%3E%3Cpath d='M95,6H0V5H95Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M94.953,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M86.4,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M77.853,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M69.3,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M60.753,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M52.2,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M43.653,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M35.1,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M26.553,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M18,5h-.9V3H18Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M9.452,5h-.9V3h.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M.9,5H0V3H.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M89.11,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M80.56,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M72.01,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M63.46,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M54.91,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M46.36,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M37.81,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M29.26,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M20.71,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M12.16,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3Cpath d='M3.61,0h.9V5h-.9Z' style='fill:%23c8c8c8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\n")),(0,l.kt)("p",null,"Save the image to your computer."),(0,l.kt)("p",null,"Insert the saved image:"),(0,l.kt)("a",{href:"https://www.site24x7.com/tools/image-to-datauri.html",class:"external"},"www.site24x7.com: Image To URI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAGCAYAAAClzULKAAAABHNCSVQICAgIfAhkiAAAACtJREFUSEtjZBgFAxYCjANm86jFDKOBP4CJYDTwRwN/AENgAK0eTfkDGPgAKC8ABxS+xFUAAAAASUVORK5CYII=\n")),(0,l.kt)("p",null,"Now replace the initial URI with this one."),(0,l.kt)("h2",{id:"another-search-plugins"},"Another search plugins"),(0,l.kt)("a",{href:"https://github.com/easyops-cn/docusaurus-search-local",class:"external"},"GitHub.com: Docusaurus Search Local"),(0,l.kt)("p",null,"An offline/local search plugin for Docusaurus v2, which supports multiple languages, especially optimized for language of ZH."))}d.isMDXComponent=!0}}]);