(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{55:function(e,t,a){e.exports=a(79)},60:function(e,t,a){},61:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(13),r=a.n(c),l=(a(60),a(49)),i=a(26),d=a(99),u=a(107),p=a(102),s=a(103),m=a(104),f=a(105),b=a(110),E=(a(61),a(35)),h=a.n(E),v=h.a.initializeApp({apiKey:"AIzaSyDMzFy9s6OxUOJ-ikef8Kx-ofyPf13jRvg",authDomain:"todo-app-cp-8cccd.firebaseapp.com",databaseURL:"https://todo-app-cp-8cccd.firebaseio.com",projectId:"todo-app-cp-8cccd",storageBucket:"todo-app-cp-8cccd.appspot.com",messagingSenderId:"54172869151",appId:"1:54172869151:web:f3d93870ef8958fa0feb2a",measurementId:"G-LSD02W0MZG"}).firestore(),g=a(48),y=a.n(g),j=Object(d.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var O=function(e){var t=j(),a=Object(o.useState)(!1),c=Object(i.a)(a,2),r=c[0],l=c[1],d=Object(o.useState)(),E=Object(i.a)(d,2),h=E[0],g=E[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{open:r,onClose:function(e){return l(!1)}},n.a.createElement("div",{className:t.paper},n.a.createElement("form",null,n.a.createElement("input",{placeholder:e.todo.todo,value:h,onChange:function(e){return g(e.target.value)}}),n.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){v.collection("todos").doc(e.todo.id).set({todo:h},{merge:!0}),l(!1)},type:"submit"},"Update Todo")))),n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(f.a,null),n.a.createElement(b.a,{primary:e.todo.todo,secondary:"Dummy headline >:("})),n.a.createElement("button",{onClick:function(e){return l(!0)}},"Edit"),n.a.createElement(y.a,{onClick:function(t){return v.collection("todos").doc(e.todo.id).delete()}})))},k=a(106),w=a(109),S=a(108);a(78);var C=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)(""),d=Object(i.a)(r,2),u=d[0],s=d[1];return Object(o.useEffect)((function(){v.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Hello World"),n.a.createElement("form",null,n.a.createElement(k.a,null,n.a.createElement(w.a,null,"Write a todo"),n.a.createElement(S.a,{value:u,onChange:function(e){return s(e.target.value)}})),n.a.createElement(p.a,{disabled:!u,type:"submit",onClick:function(e){e.preventDefault(),v.collection("todos").add({todo:u,timestamp:h.a.firestore.FieldValue.serverTimestamp()}),c([].concat(Object(l.a)(a),[u])),s("")},variant:"contained",color:"primary"},"Add Todo")),n.a.createElement("ul",null," ",a.map((function(e){return n.a.createElement(O,{todo:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.9fe7cdfd.chunk.js.map