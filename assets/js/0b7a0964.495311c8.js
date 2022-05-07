"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[98333],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),c=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9092:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"conventional-commits",hide_title:!0,sidebar_label:"Conventional Commits"},m="How to generate meaningful commits. We apply Conventional Commits standart.",c={unversionedId:"workplace/git/conventional-commits",id:"workplace/git/conventional-commits",title:"How to generate meaningful commits. We apply Conventional Commits standart.",description:"Recommendations from docuzaurus team",source:"@site/docs/workplace/git/conventional-commits.md",sourceDirName:"workplace/git",slug:"/workplace/git/conventional-commits",permalink:"/hm/docs/workplace/git/conventional-commits",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/workplace/git/conventional-commits.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1608540868,formattedLastUpdatedAt:"12/21/2020",frontMatter:{id:"conventional-commits",hide_title:!0,sidebar_label:"Conventional Commits"},sidebar:"Docs",previous:{title:"Update GRUB Not See Windows",permalink:"/hm/docs/windows-and-linux/update-grub-not-see-windows"},next:{title:"Delete Closed Pull Request",permalink:"/hm/docs/workplace/git/delete-closed-pull-request"}},s={},u=[{value:"Recommendations from docuzaurus team",id:"recommendations-from-docuzaurus-team",level:2},{value:"Semantic commit messages",id:"semantic-commit-messages",level:3},{value:"Code conventions",id:"code-conventions",level:2},{value:"Style guide",id:"style-guide",level:3},{value:"General",id:"general",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Recommendations from yandex team member",id:"recommendations-from-yandex-team-member",level:2}],p={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-generate-meaningful-commits-we-apply-conventional-commits-standart"},"How to generate meaningful commits. We apply Conventional Commits standart."),(0,o.kt)("h2",{id:"recommendations-from-docuzaurus-team"},(0,o.kt)("a",{parentName:"h2",href:"https://v2.docusaurus.io/docs/contributing#semantic-commit-messages"},"Recommendations from docuzaurus team")),(0,o.kt)("h3",{id:"semantic-commit-messages"},"Semantic commit messages"),(0,o.kt)("p",null,"See how a minor change to your commit message style can make you a better programmer."),(0,o.kt)("p",null,"Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<scope>")," is optional"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"The various types of commits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feat"),": (new feature for the user, not a new feature for build script)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fix"),": (bug fix for the user, not a fix to a build script)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs"),": (changes to the documentation)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"style"),": (formatting, missing semi colons, etc; no production code change)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refactor"),": (refactoring production code, eg. renaming a variable)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test"),": (adding missing tests, refactoring tests; no production code change)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chore"),": (updating grunt tasks etc; no production code change)")),(0,o.kt)("p",null,"Use lower case not title case!"),(0,o.kt)("h2",{id:"code-conventions"},"Code conventions"),(0,o.kt)("h3",{id:"style-guide"},"Style guide"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run prettier"),"."),(0,o.kt)("p",null,"However, there are still some styles that Prettier cannot pick up."),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Most important: Look around.")," Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation."),(0,o.kt)("li",{parentName:"ul"},'"Attractive"')),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.")),(0,o.kt)("h2",{id:"recommendations-from-yandex-team-member"},(0,o.kt)("a",{parentName:"h2",href:"https://habr.com/ru/company/yandex/blog/431432/"},"Recommendations from yandex team member")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We write in the body of the commit ",(0,o.kt)("em",{parentName:"li"},"what")," has  changed and ",(0,o.kt)("em",{parentName:"li"},"why"),"."),(0,o.kt)("li",{parentName:"ul"},"We use the following types of commits.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"build")),(0,o.kt)("td",{parentName:"tr",align:null},"\u0421\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ci")),(0,o.kt)("td",{parentName:"tr",align:null},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 CI \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u043c\u0438")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"docs")),(0,o.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"feat")),(0,o.kt)("td",{parentName:"tr",align:null},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fix")),(0,o.kt)("td",{parentName:"tr",align:null},"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"perf")),(0,o.kt)("td",{parentName:"tr",align:null},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"refactor")),(0,o.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u043a\u0438 \u043a\u043e\u0434\u0430 \u0431\u0435\u0437 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u0438\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"revert")),(0,o.kt)("td",{parentName:"tr",align:null},"\u041e\u0442\u043a\u0430\u0442 \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043a\u043e\u043c\u043c\u0438\u0442\u044b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"style")),(0,o.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0430\u0432\u043a\u0438 \u043f\u043e \u043a\u043e\u0434\u0441\u0442\u0430\u0439\u043b\u0443 (\u0442\u0430\u0431\u044b, \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0442\u043e\u0447\u043a\u0438, \u0437\u0430\u043f\u044f\u0442\u044b\u0435 \u0438 \u0442.\u0434.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"test")),(0,o.kt)("td",{parentName:"tr",align:null},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We write the description in an imperative mood like git itself")))}d.isMDXComponent=!0}}]);