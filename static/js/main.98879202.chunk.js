(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=function(e){var t=e.title,n=e.component;return r.a.createElement("div",{className:"card mx-auto mt-3 text-center"},r.a.createElement("div",{className:"card-header secondary"},r.a.createElement("h5",null,t)),r.a.createElement("div",{className:"card-body row"},n))},u=n(4),s=n(1),m=function(e){var t=e.handleChange,n=e.addTodo,a=e.todoInput;return r.a.createElement("form",{className:"container m-0 p-3",onSubmit:function(e){return n(e)}},r.a.createElement("input",{className:"form-control ",type:"text",value:a,onChange:function(e){return t(e)},placeholder:"Input a task and press enter..."}))},i=function(e){var t=e.todos,n=e.removeTodo;return r.a.createElement("ul",{className:"list-group col mx-auto p-3"},t.map(function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t,index:t},e,r.a.createElement("button",{className:"btn btn-outline-danger float-right",onClick:function(){return n(t)}},r.a.createElement("i",{className:"fas fa-ban"})),r.a.createElement("button",{className:"btn btn-outline-success float-right mr-2"},r.a.createElement("i",{className:"fas fa-check"})))}))},d=function(){var e=Object(a.useState)(["Try out hooks","Do another thing","This is a test"]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(s.a)(l,2),d=o[0],f=o[1];return r.a.createElement(a.Fragment,null,r.a.createElement(m,{handleChange:function(e){f(e.target.value)},addTodo:function(e){e.preventDefault(),c(n.concat(d)),f("")},todoInput:d}),r.a.createElement(i,{todos:n,removeTodo:function(e){var t=Object(u.a)(n);t.splice(e,1),c(t)}}))};var f=function(e){var t=e.timer,n=Object(a.useState)(t),c=Object(s.a)(n,2),l=c[0],o=c[1],u=Object(a.useState)(!1),m=Object(s.a)(u,2),i=m[0],d=m[1],f=Object(a.useState)(!1),b=Object(s.a)(f,2),E=b[0],p=b[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e},[e]),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){var e=l.split(":"),t=e[0],n=e[1];e=0==n?--t+":"+(n=59):n<11?t+":0"+--n:t+":"+--n,0==n&&0==t&&d(!1),o(e)},i?1e3:null);var v=l.split(":"),h=Object(s.a)(v,2),N=h[0],g=h[1];return 0==N&&0==g&&p(!0),r.a.createElement("div",{className:"container col"},r.a.createElement("h1",{className:"display-4"},l),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"button",className:E?"btn btn-outline-danger col ml-4 mr-1":i?"btn btn-outline-warning col ml-4 mr-1":"btn btn-outline-success col ml-4 mr-1",onClick:function(){return d(!i)}},E?"Restart":i?"Pause":"Start")))},b=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(f,{timer:"25:00"}),r.a.createElement(f,{timer:"5:00"}),r.a.createElement(f,{timer:"15:00"}))},E=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(o,{title:"Brad's Timers",component:r.a.createElement(b,null)}),r.a.createElement(o,{title:"Main Task",component:r.a.createElement(d,null)}))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.98879202.chunk.js.map