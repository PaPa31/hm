"use strict";(self.webpackChunkhuman_and_machine=self.webpackChunkhuman_and_machine||[]).push([[31263],{85003:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var s=n(94578),r=n(67294),l="Toggler_pa2N",o="red_GTuG",a="bold_GcTT",u="Red_V2hM",c=n(74165),i=n(15861),m=(n(9669),{Bus:"Bus_plMy"}),d="BusRoutes_p9Xz",p=function(e){function t(e){var t=e.p;return r.createElement("tr",null,r.createElement("td",null,t))}return r.createElement("div",{className:d},e.polReisa>0&&"tuda"===e.dir?r.createElement("p",null,e.name,":"):r.createElement("p",null,"\u0421\u0430\u0434\u044b:"),r.createElement("table",null,r.createElement("tbody",null,e.polReisa>0&&"tuda"===e.dir?e.tudaObratno.map((function(n,s){return s<e.polReisa/2?r.createElement(t,{key:s,p:n}):null})):e.tudaObratno.map((function(n,s){return s>=e.polReisa/2?r.createElement(t,{key:s,p:n}):null})))))},h=r.memo(p),g=n(79524),f=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).state={buses:[],selectedBus:null,normUrl:"./_rasp"},t.busSelectedHandler=function(e){t.setState({selectedBus:e})},t.busNormUrl=function(e){t.setState({normUrl:(0,g.Z)(e)})},t}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;function t(){return(t=(0,i.Z)((0,c.Z)().mark((function e(t){var n,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url = "+t),n=document.createElement("div"),e.next=4,fetch(t);case 4:return e.next=6,e.sent.text();case 6:return n.innerHTML=e.sent,s=Array.from(n.querySelectorAll("p")).map((function(e){return e.innerText})),console.log("p = "+s),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}this.props.num&&(!this.state.selectedBus||this.state.selectedBus&&this.state.selectedBus.id!==this.props.num)&&(console.log("this.state.normUrl = "+this.state.normUrl),function(e){return t.apply(this,arguments)}(this.state.normUrl+""+this.props.num+".html").then((function(t){return console.log("p = "+t),e.setState({selectedBus:t})})))},n.render=function(){var e=r.createElement("p",{style:{textAlign:"center"}},"Please select a Post!");if(this.props.num&&(e=r.createElement("p",{style:{textAlign:"center"}},"Loading...!")),this.state.selectedBus){var t=this.state.selectedBus.length;console.log("length = "+t);for(var n=0,s=[],l=0;l<t;l++)/^\d/.test(this.state.selectedBus[l])&&(s[n]=this.state.selectedBus[l],n++);console.log("polReisa "+n),console.log("tudaObratno "+s);e=r.createElement("div",null,n>0?r.createElement("div",null,r.createElement("div",null,console.log("[Bus.js] REturning..."+this.state.selectedBus)),r.createElement("h1",null,this.props.num),r.createElement("div",null,r.createElement("div",{className:m.BusRoutes},r.createElement(h,{polReisa:n,dir:"tuda",name:this.props.name,tudaObratno:s}),r.createElement(h,{polReisa:n,dir:"obratno",name:this.props.name,tudaObratno:s})))):null)}return e},t}(r.Component),b=f,v=function(e){return console.log("[Buses.js] rendering..."),e.buses.map((function(e,t){return console.log(e.num),r.createElement(b,{key:t,num:e.num,name:e.name})}))},E={buses:[{id:"20210330005200",name:"\u0420\u0422\u0418",num:296},{id:"20220611183712",name:"\u0420\u0422\u0418",num:297},{id:"20210330005205",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:100},{id:"20210330005209",name:"\u041a\u043b\u0438\u0444\u0444\u043e\u0440\u0434",num:110}]},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={buses:[],showBuses:!1,changeCounter:0},n.onlyBusesHandler=function(e){console.log("Hi");var t=[];E.buses.map((function(n,s){console.log("id = "+e),console.log("bus.id = "+n.id),e===n.id&&(console.log("Sovpalo"),t[s]=n,console.log(t))})),n.setState({buses:t});n.setState({showBuses:!0})},console.log("[Toggler/index.js] constructor"),n}(0,s.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return console.log("[Toggler/index.js] getDerivedStateFromProps",e),t};var n=t.prototype;return n.componentDidMount=function(){console.log("[Toggler/index.js] componentDidMount")},n.render=function(){var e=this;console.log("[Toggler/index.js] render");var t=null,n="";this.state.showBuses&&(t=r.createElement(v,{buses:this.state.buses}),n=u);var s=[];return this.state.buses.length<=2&&s.push(o),this.state.buses.length<=1&&s.push(a),r.createElement("div",{className:l},r.createElement("h1",null,"Hi, I'm a React app!"),r.createElement("p",{className:s.join(" ")},"This is really working!"),E.buses.map((function(t,s){return r.createElement("button",{key:s,className:n,onClick:function(){e.onlyBusesHandler(t.id)}},t.num)})),t)},t}(r.Component),y=B}}]);