"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[52975],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),g=a,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"8-34-adding-sidedrawer-toggle-button",title:"8.34 Adding Sidedrawer Toggle Button",date:new Date("2021-04-11T18:25:16.000Z")},l=void 0,d={unversionedId:"react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button",id:"react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button",title:"8.34 Adding Sidedrawer Toggle Button",description:"DrawerToggle.js",source:"@site/courses/react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button.md",sourceDirName:"react-complete-guide/08-real-app-burger-builder",slug:"/react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/courses/react-complete-guide/08-real-app-burger-builder/8-34-adding-sidedrawer-toggle-button.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1631602446,formattedLastUpdatedAt:"9/14/2021",frontMatter:{id:"8-34-adding-sidedrawer-toggle-button",title:"8.34 Adding Sidedrawer Toggle Button",date:"2021-04-11T18:25:16.000Z"},sidebar:"Docs",previous:{title:"8.33 Reusing Backdrop",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-33-reusing-backdrop"},next:{title:"8.35 Adding Humburger Icon",permalink:"/hm/courses/react-complete-guide/08-real-app-burger-builder/8-35-adding-humburger-icon"}},p={},u=[{value:"DrawerToggle.js",id:"drawertogglejs",level:2},{value:"Toolbar.js",id:"toolbarjs",level:2},{value:"Layout.js",id:"layoutjs",level:2}],c={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"drawertogglejs"},"DrawerToggle.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="DrawerToggle.js" {}',title:'"DrawerToggle.js"',"{}":!0},'import React from "react";\n\nconst drawerToggle = (props) => <div onClick={props.clicked}>MENU</div>;\n\nexport default drawerToggle;\n')),(0,o.kt)("h2",{id:"toolbarjs"},"Toolbar.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Toolbar.js" {4,9}',title:'"Toolbar.js"',"{4,9}":!0},'import React from "react";\nimport Logo from "../../Logo/Logo";\nimport NavigationItems from "../NavigationItems/NavigationItems";\nimport DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";\nimport classes from "./Toolbar.module.css";\n\nconst toolbar = (props) => (\n  <header className={classes.Toolbar}>\n    <DrawerToggle clicked={props.drawerToggleClicked} />\n    <div className={classes.Logo}>\n      <Logo />\n    </div>\n    <nav className={classes.DesktopOnly}>\n      <NavigationItems />\n    </nav>\n  </header>\n);\n\nexport default toolbar;\n')),(0,o.kt)("h2",{id:"layoutjs"},"Layout.js"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you plan on using the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", insert state, you shouldn't do it like this:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  sideDrawerToggleHandler = () => {\n    this.setState({ showSideDrawer: !this.state.showSideDrawer });\n  };\n")),(0,o.kt)("p",{parentName:"div"},"Due to the asynchronous nature of ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),", this may lead to unexpected outcomes."),(0,o.kt)("p",{parentName:"div"},"So instead, use the function form, expect the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," as input and in there, simply return the object:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  sideDrawerToggleHandler = () => {\n    this.setState((prevState) => {\n      return { showSideDrawer: !prevState.showSideDrawer };\n    });\n  };\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Layout.js" {8,14-18,23}',title:'"Layout.js"',"{8,14-18,23}":!0},'import React, { Component, Fragment } from "react";\nimport SideDrawer from "../Navigation/SideDrawer/SideDrawer";\nimport Toolbar from "../Navigation/Tollbar/Toolbar";\nimport classes from "./Layout.module.css";\n\nclass Layout extends Component {\n  state = {\n    showSideDrawer: false,\n  };\n  sideDrawerClosedHandler = () => {\n    this.setState({ showSideDrawer: false });\n  };\n\n  sideDrawerToggleHandler = () => {\n    this.setState((prevState) => {\n      return { showSideDrawer: !prevState.showSideDrawer };\n    });\n  };\n\n  render() {\n    return (\n      <Fragment>\n        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />\n        <SideDrawer\n          closed={this.sideDrawerClosedHandler}\n          open={this.state.showSideDrawer}\n        />\n        <main className={classes.Content}>{this.props.children}</main>\n      </Fragment>\n    );\n  }\n}\nexport default Layout;\n')))}g.isMDXComponent=!0}}]);