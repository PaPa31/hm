"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[58673],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53961:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"13-13-showing-error-messages",title:"13.13 Showing Error Messages",date:new Date("2021-04-20T16:35:53.000Z")},s=void 0,c={unversionedId:"react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages",id:"react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages",title:"13.13 Showing Error Messages",description:"The form inputs (``\xa0 component)\xa0already receives the information whether it's invalid or not. You could of course easily add some conditionally rendered element inside of that component.",source:"@site/courses/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages.md",sourceDirName:"react-complete-guide/13-forms-and-form-validation",slug:"/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/13-forms-and-form-validation/13-13-showing-error-messages.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"13-13-showing-error-messages",title:"13.13 Showing Error Messages",date:"2021-04-20T16:35:53.000Z"},sidebar:"Docs",previous:{title:"13.12 Improving Visual Feedback",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-12-improving-visual-feedback"},next:{title:"13.14 Handling Overall Form Validity",permalink:"/hm/courses/react-complete-guide/13-forms-and-form-validation/13-14-handling-overall-form-validity"}},p=[],u={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The form inputs (",(0,a.kt)("inlineCode",{parentName:"p"},"<Input />"),"\xa0 component)\xa0already receives the information whether it's invalid or not. You could of course easily add some conditionally rendered element inside of that component."),(0,a.kt)("p",null,"For example (inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<Input />"),"\xa0\xa0component function):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// all the other code from the videos\n\nlet validationError = null;\nif (props.invalid && props.touched) {\n    validationError = <p>Please enter a valid value!</p>;\n}\n\nreturn (\n     <div className={classes.Input}>\n         <label className={classes.Label}>{props.label}</label>\n         {inputElement}\n         {validationError}\n     </div>\n );\n")),(0,a.kt)("p",null,"This could of course be finetuned. You could also pass the value type (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'"email address"'),"\xa0)\xa0as a prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"validationError = <p>Please enter a valid {props.valueType}</p>;\n")),(0,a.kt)("p",null,"You could also receive the complete error message as a prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"validationError = <p>{props.errorMessage}</p>;\n")),(0,a.kt)("p",null,"And of course, also don't forget to style the messages if you want to do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;\n")),(0,a.kt)("p",null,"In your CSS\xa0file, you could have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},".ValidationError {\n    color: red;\n    margin: 5px 0;\n} \n")))}d.isMDXComponent=!0}}]);