"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[26963],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46798:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"7-27-using-refs",title:"7.27 Using Refs",date:new Date("2021-04-08T21:55:45.000Z")},c=void 0,p={unversionedId:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs",id:"react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs",isDocsHomePage:!1,title:"7.27 Using Refs",description:"Let's say when we render all our persons here, the last person should automatically receive focus.",source:"@site/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs.md",sourceDirName:"react-complete-guide/07-diving-deeper-into-components-and-react-internals",slug:"/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs",editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-27-using-refs.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"7-27-using-refs",title:"7.27 Using Refs",date:"2021-04-08T21:55:45.000Z"},sidebar:"Docs",previous:{title:"7.26 Using PropTypes",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-26-using-prop-types"},next:{title:"7.28 Refs With React Hooks",permalink:"/hm/courses/react-complete-guide/07-diving-deeper-into-components-and-react-internals/7-28-refs-with-react-hooks"}},u=[{value:"way # 1",id:"way--1",children:[]},{value:"way # 2",id:"way--2",children:[]}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's say when we render all our persons here, the last person should automatically receive focus."),(0,i.kt)("h2",{id:"way--1"},"way # 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {4-6,17-19}',title:'"Person.js"',"{4-6,17-19}":!0},'...\n\nclass Person extends Component {\n  componentDidMount() {\n    this.inputElement.focus();\n  }\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <Fragment>\n        <p key="i1" onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p key="i2">{this.props.children}</p>\n        <input\n          key="i3"\n          ref={(inputEl) => {\n            this.inputElement = inputEl;\n          }}\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </Fragment>\n    );\n  }\n}\n')),(0,i.kt)("h2",{id:"way--2"},"way # 2"),(0,i.kt)("p",null,"Since React 16.3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Person.js" {4-11,25}',title:'"Person.js"',"{4-11,25}":!0},'...\n\nclass Person extends Component {\n  constructor(props) {\n    super(props);\n    this.inputElementRef = React.createRef();\n  }\n  componentDidMount() {\n    // this.inputElement.focus();\n    this.inputElementRef.current.focus();\n  }\n  render() {\n    console.log("[Person.js] rendering...");\n    return (\n      <Fragment>\n        <p key="i1" onClick={this.props.click}>\n          I\'m {this.props.name} and I am {this.props.age} years old!\n        </p>\n        <p key="i2">{this.props.children}</p>\n        <input\n          key="i3"\n          // ref={(inputEl) => {\n          //   this.inputElement = inputEl;\n          // }}\n          ref={this.inputElementRef}\n          type="text"\n          onChange={this.props.changed}\n          value={this.props.name}\n        />\n      </Fragment>\n    );\n  }\n}\n\n...\n\nexport default withClass(Person, classes.Person);\n')),(0,i.kt)("p",null,"So you can use either approach, either with ",(0,i.kt)("inlineCode",{parentName:"p"},"React.createRef()")," which is the more modern approach or by using that function above to get direct access to the element, this is the older approach and therefore it also works in older versions of React, and it's up to you to use which version you want depending on which version, the version of React you're using, is allowing you to use."))}d.isMDXComponent=!0}}]);