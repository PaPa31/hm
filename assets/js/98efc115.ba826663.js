"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[12920],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68111:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(51048),o=n(33609),u=n(1943),i=n(72957),s=n(86010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,f=e.defaultValue,A=e.values,k=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=A?A:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),D=y.tabGroupChoices,N=y.setTabGroupChoices,E=(0,r.useState)(g),P=E[0],x=E[1],I=[],W=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=D[k];null!=O&&O!==P&&v.some((function(e){return e.value===O}))&&x(O)}var S=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==P&&(W(t),x(a),null!=k&&N(k,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return I.push(e)},onKeyDown:T,onFocus:S,onClick:S},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},41962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return A},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(5529),u=n(68111),i=["components"],s={id:"draw-in-linux-kde-plasma",title:"Drawing on the desktop in Linux KDE Plasma",date:new Date("2021-02-14T00:00:00.000Z"),description:"How to draw with mouse on the desktop in Linux KDE Plasma"},c=void 0,p={unversionedId:"workplace/linux/draw-in-linux-kde-plasma",id:"workplace/linux/draw-in-linux-kde-plasma",title:"Drawing on the desktop in Linux KDE Plasma",description:"How to draw with mouse on the desktop in Linux KDE Plasma",source:"@site/docs/workplace/linux/drawing-in-linux-kde-plasma.md",sourceDirName:"workplace/linux",slug:"/workplace/linux/draw-in-linux-kde-plasma",permalink:"/hm/docs/workplace/linux/draw-in-linux-kde-plasma",draft:!1,editUrl:"https://github.com/papa31/hm/edit/documentation/docs/workplace/linux/drawing-in-linux-kde-plasma.md",tags:[],version:"current",lastUpdatedBy:"PaPa31",lastUpdatedAt:1653653635,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"draw-in-linux-kde-plasma",title:"Drawing on the desktop in Linux KDE Plasma",date:"2021-02-14T00:00:00.000Z",description:"How to draw with mouse on the desktop in Linux KDE Plasma"},sidebar:"Docs",previous:{title:"Installed Programs",permalink:"/hm/docs/workplace/installed-programs"},next:{title:"KDE Klipper Regex",permalink:"/hm/docs/workplace/linux/kde-klipper-regex"}},d={},m=[{value:"Default Keyboard Shortcuts",id:"default-keyboard-shortcuts",level:2},{value:"Default Settings",id:"default-settings",level:2}],f={toc:m};function A(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Draw in KDE/Plasma without additional installation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Drawing in Linux KDE Plasma",src:n(26972).Z,width:"298",height:"149"})),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"mx-19",label:"MX-19",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"System Settings")," > ",(0,l.kt)("strong",{parentName:"p"},"Desktop Behavior")," > ",(0,l.kt)("strong",{parentName:"p"},"Desktop Effects")," > ",(0,l.kt)("strong",{parentName:"p"},"Mouse Mark"))),(0,l.kt)(u.Z,{value:"mx-21",label:"MX-21",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"System Settings")," > ",(0,l.kt)("strong",{parentName:"p"},"Workspace Behavior")," > ",(0,l.kt)("strong",{parentName:"p"},"Desktop Effects")," > ",(0,l.kt)("strong",{parentName:"p"},"Mouse Mark")))),(0,l.kt)("p",null,"Allow you to draw lines on the desktop. And then you can take screenshots with these simplified drawings."),(0,l.kt)("h2",{id:"default-keyboard-shortcuts"},"Default Keyboard Shortcuts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Keyboard Shortcut"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Draw"),(0,l.kt)("td",{parentName:"tr",align:null},"Meta + Shift + moving the mouse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear last mouse mark"),(0,l.kt)("td",{parentName:"tr",align:null},"Meta + Shift +F12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear mouse marks"),(0,l.kt)("td",{parentName:"tr",align:null},"Meta + Shift + F11")))),(0,l.kt)("p",null,"Meta key - is a Windows Key"),(0,l.kt)("h2",{id:"default-settings"},"Default Settings"),(0,l.kt)("p",null,"You can change color and width of the drawn lines in Settings:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"System Settings > Desktop Behavior > Desktop Effects > Mouse Mark")),(0,l.kt)("p",null,"Default appearance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"width: 3px\n\ncolor: red\n")),(0,l.kt)("p",null,"From: ",(0,l.kt)("a",{parentName:"p",href:"https://superuser.com/questions/934146/how-to-draw-an-arrow-with-kde-plasmas-mouse-tracker#:~:text=You%20can%20%22draw%22%20an%20arrow,Meta%2BCtrl%2BShift%20twice"},"superuser.com: How To Draw An Arrow With Kde Plasmas Mouse Tracker")))}A.isMDXComponent=!0},26972:function(e,t){t.Z="data:image/png;base64,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"}}]);