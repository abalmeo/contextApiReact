(window.webpackJsonpreact_hooks=window.webpackJsonpreact_hooks||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),l=(n(29),n(5)),i=function(e){var t=e.name,n=e.price;return r.a.createElement("div",null,r.a.createElement("h3",null,t),r.a.createElement("p",null,n))},u=Object(a.createContext)(),m=function(e){var t=e.children,n=Object(a.useState)([{name:"Harry Potter",price:"$10",id:23124},{name:"Game of Thrones",price:"$10",id:2566124},{name:"Inception",price:"$10",id:23524}]),c=Object(l.a)(n,2),o=c[0],i=c[1];return r.a.createElement(u.Provider,{value:[o,i]},t)},s=function(){var e=Object(a.useContext)(u),t=Object(l.a)(e,2),n=t[0];t[1];return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(i,{name:e.name,price:e.price,key:e.id})})))},p=n(23),v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],s=i[1],v=Object(a.useContext)(u),d=Object(l.a)(v,2),E=(d[0],d[1]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E((function(e){return[].concat(Object(p.a)(e),[{name:n,price:m}])}))}},r.a.createElement("input",{type:"text",name:"name",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{type:"text",name:"price",value:m,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",null,"Submit"))},d=n(45),E=n(46),b=function(){var e=Object(a.useContext)(u),t=Object(l.a)(e,2),n=t[0];t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{bg:"dark",variant:"dark"},r.a.createElement(d.a.Brand,{href:"/"},"Movies and Prices"),r.a.createElement(E.a,{className:"ml-auto"},r.a.createElement(E.a.Link,null,"Total Movies: ",n.length))))};n(41);var f=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.851bf372.chunk.js.map