(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(7),r=n.n(i),a=(n(13),n(4)),o=n(8),l=n(0);function u(t){var e=t.inputText,n=t.setText,c=t.textArr,s=t.setArr,i=t.setCondition;return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:"inputTextArea",value:e,type:"text",onInput:function(t){n(t.target.value)}}),Object(l.jsx)("button",{className:"submit-btn",type:"submit",onClick:function(t){t.preventDefault(),""!==e&&s((function(t){return[].concat(Object(o.a)(c),[{userString:e,status:!1,id:1e3*Math.random()}])})),n("")},children:"Submit"})]}),Object(l.jsxs)("select",{className:"selectBox",onChange:function(t){i(t.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"ALL"}),Object(l.jsx)("option",{value:"completed",children:"Completed"}),Object(l.jsx)("option",{value:"remaining",children:"Remaining"})]})]})}var j=n(6);function d(t){var e=t.listVal,n=t.textArr,c=t.setArr,s=t.currenti;return Object(l.jsxs)("div",{className:"SingleList ".concat(s.status?"paintIt":""),children:[Object(l.jsx)("input",{"aria-label":"List",className:"inputList ".concat(s.status?"completed paintIt":""),readOnly:!0,value:e}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"done-btn",onClick:function(){c(n.map((function(t){return s.id===t.id?Object(j.a)(Object(j.a)({},t),{},{status:!s.status}):t})))},children:"-"}),Object(l.jsx)("button",{className:"remove-btn",onClick:function(){c(n.filter((function(t){return t.id!==s.id})))},children:"x"})]})]})}function b(t){var e=t.condition,n=t.textArr,c=t.setArr,s=function(t){return Object(l.jsx)(d,{listVal:t.userString,textArr:n,currenti:t,setArr:c,condition:e},t.id)};return Object(l.jsx)("div",{className:"ListBox",children:Object(l.jsx)("div",{className:"ListContainer",children:n.map((function(t){return"all"===e||"completed"===e&&t.status?s(t):"remaining"!==e||t.status?null:s(t)}))})})}function O(t){var e=t.setArr;return Object(l.jsx)("div",{className:"clear-btn-set",children:Object(l.jsx)("button",{onClick:function(){localStorage.setItem("todoList",JSON.stringify([])),e([])},className:"clear-btn",type:"button",children:"Clear Catch"})})}var x=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)([]),r=Object(a.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)("all"),x=Object(a.a)(d,2),m=x[0],f=x[1];Object(c.useEffect)((function(){p()}),[]);var p=function(){if(null===localStorage.getItem("todoList"))localStorage.setItem("todoList",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todoList"));j(t)}};return Object(c.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(o))}),[o]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{setArr:j}),Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"TODO LIST"})}),Object(l.jsx)(u,{inputText:n,setText:s,textArr:o,setArr:j,setCondition:f}),Object(l.jsx)(b,{textArr:o,condition:m,setArr:j})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.20749a90.chunk.js.map