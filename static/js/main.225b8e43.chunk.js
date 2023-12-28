(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{11:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(12),a=(n(22),n(23),n(24),n(13)),o=n(3),r=n(9),i=n(5),l=n.n(i),s=n(8),u=n(2),d=n(1),f=n(4),p=n.n(f),j=n(0),b="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(b+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var O,v=function(e){return m(e)},x=function(e,t){return m(e,"POST",t)},g=function(e,t){return m(e,"PATCH",t)},_=function(e){return m(e,"DELETE")},k=function(e){return _("/todos/".concat(e))},N=function(e){return g("/todos/".concat(e.id),e)},y=(n(11),function(e){var t=e.todo,n=e.handleDelete,c=e.changeStatus,a=e.changeTitle,r=e.isTempTodo,i=t.completed,l=t.title,s=Object(d.useState)(!1),f=Object(u.a)(s,2),b=f[0],h=f[1],m=Object(d.useState)(l),O=Object(u.a)(m,2),v=O[0],x=O[1],g=Object(d.useState)(t),_=Object(u.a)(g,2),y=_[0],T=_[1],C=function(e,t){e.preventDefault(),b&&(v&&""!==v||(n(y.id),k(y.id)),v!==y.title&&N(Object(o.a)(Object(o.a)({},y),{},{title:t})),h(!1),a(y,t))};return Object(j.jsxs)("div",{className:p()("todo",{completed:i}),onDoubleClick:function(){return T(t),void h(!0)},children:[Object(j.jsx)("label",{className:"todo__status-label",htmlFor:"checkbox_status",children:Object(j.jsx)("input",{id:"checkbox_status",type:"checkbox",className:"todo__status",checked:i,onClick:function(){return c(t)},onKeyUp:function(e){"Escape"===e.key&&(e.preventDefault(),h(!1))}})}),b?Object(j.jsx)("form",{onSubmit:function(e){return C(e,v)},children:Object(j.jsx)("input",{className:"todo__title-field",type:"text",id:"fname",name:"todo",value:v,onChange:function(e){e.preventDefault(),x(e.target.value)},onBlur:function(e){return C(e,v)}})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"todo__title",children:t.title}),Object(j.jsxs)("div",{className:p()("modal overlay",{"is-active":r}),children:[Object(j.jsx)("div",{className:"modal-background has-background-white-ter"}),Object(j.jsx)("div",{className:"loader"})]}),Object(j.jsx)("button",{type:"button",className:"todo__remove",onClick:function(){return n(t.id)},children:"\xd7"})]})]},t.id)}),T=function(e){var t=e.todos,n=e.handleDelete,c=e.changeStatus,a=e.changeTitle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(y,{todo:e,handleDelete:n,changeStatus:c,changeTitle:function(e,t){return a(e,t)},isTempTodo:!1},e.id)}))})};!function(e){e.Active="active",e.Completed="completed",e.All="all"}(O||(O={}));var C,S=function(e){var t=e.setFilterValue,n=e.filterValue;return Object(j.jsxs)("nav",{className:"filter",children:[Object(j.jsx)("a",{href:"#/",className:p()("filter__link",{selected:n===O.All}),onClick:function(){return t(O.All)},children:"All"}),Object(j.jsx)("a",{href:"#/active",className:p()("filter__link",{selected:n===O.Active}),onClick:function(){return t(O.Active)},children:"Active"}),Object(j.jsx)("a",{href:"#/completed",className:p()("filter__link",{selected:n===O.Completed}),onClick:function(){return t(O.Completed)},children:"Completed"})]})},w=function(e){var t=e.setFilterValue,n=e.filterValue,c=e.todos,a=e.clearCompletedTodos,o=e.completedTodos,r=c.filter((function(e){return!e.completed}));return Object(j.jsxs)("footer",{className:"todoapp__footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[r.length," ","items left"]}),Object(j.jsx)(S,{setFilterValue:t,filterValue:n}),0!==o.length&&Object(j.jsx)("button",{type:"button",className:"todoapp__clear-completed",onClick:a,children:"Clear completed"})]})},A=function(e){var t=e.errorMessage,n=e.showNotification,c=e.setShowNotification;return Object(d.useEffect)((function(){if(n){var e=setTimeout((function(){c(!1)}),3e3);return function(){return clearTimeout(e)}}}),[n]),n?Object(j.jsxs)("div",{className:"notification is-danger is-light has-text-weight-normal",children:[Object(j.jsx)("button",{type:"button",className:"delete","aria-label":"Mute volume",onClick:function(){return c(!1)}}),t]}):Object(j.jsx)(j.Fragment,{})};!function(e){e.NoError="",e.Adding="Unable to add a todo",e.Deleting="Unable to delete a todo",e.Updating="Unable to update a todo",e.Loading="Unable to load todos",e.EmptyTitle="Title can't be empty"}(C||(C={}));var D=6752,E=function(){var e=Object(d.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(d.useState)(O.All),f=Object(u.a)(i,2),b=f[0],h=f[1],m=Object(d.useState)(C.NoError),g=Object(u.a)(m,2),_=g[0],S=g[1],E=Object(d.useState)(""),U=Object(u.a)(E,2),F=U[0],V=U[1],L=Object(d.useState)(!1),I=Object(u.a)(L,2),J=I[0],M=I[1],P=Object(d.useState)(null),B=Object(u.a)(P,2),G=B[0],H=B[1],K=Object(d.useState)(!1),R=Object(u.a)(K,2),W=R[0],q=R[1],z=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,v("/todos?userId=".concat(D));case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(C.Loading);case 11:return e.prev=11,q(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){z()}),[]);var Q=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={userId:D,title:F.trim(),completed:!1},V(""),H(Object(o.a)(Object(o.a)({},n),{},{id:0})),F){e.next=8;break}return S(C.EmptyTitle),M(!0),e.abrupt("return");case 8:if(!F.trim()){e.next=25;break}return e.prev=9,q(!0),e.next=13,x("/todos",n);case 13:a=e.sent,c((function(e){return[].concat(Object(r.a)(e),[a])})),H(null),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(9),S(C.Adding),M(!0);case 22:return e.prev=22,q(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[9,18,22,25]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,k(t);case 4:c((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),S(C.Deleting);case 10:return e.prev=10,q(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),Y=n.filter((function(e){return e.completed})),Z=function(e){try{q(!0),console.log(e),c((function(t){return t.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}))})),N(e)}catch(t){S(C.Loading),S(C.Updating)}finally{q(!1)}},$=function(e,t){try{q(!0),c((function(n){return n.map((function(n){return n.id===e.id?Object(o.a)(Object(o.a)({},n),{},{title:t}):n}))})),N(e)}catch(n){S(C.Loading),S(C.Updating)}finally{q(!1)}};return Object(j.jsxs)("div",{className:"todoapp",children:[Object(j.jsx)("h1",{className:"todoapp__title",children:"todos"}),Object(j.jsxs)("div",{className:"todoapp__content",children:[Object(j.jsxs)("header",{className:"todoapp__header",children:[n&&Object(j.jsx)("button",{type:"button",className:p()("todoapp__toggle-all",{active:!function(e){var t,n=Object(a.a)(e);try{for(n.s();!(t=n.n()).done;){if(!t.value.completed)return!1}}catch(c){n.e(c)}finally{n.f()}return!0}}),onClick:function(){return function(){try{q(!0),c((function(e){return e.map((function(e){return e.completed?e:Object(o.a)(Object(o.a)({},e),{},{completed:!0})}))}))}catch(e){S(C.Loading),S(C.Updating)}finally{q(!1)}}()}}),Object(j.jsx)("form",{onSubmit:Q,children:Object(j.jsx)("input",{type:"text",className:"todoapp__new-todo",placeholder:"What needs to be done?",value:F,onChange:function(e){V(e.target.value)},disabled:W})})]}),Object(j.jsxs)("section",{className:"todoapp__main",children:[Object(j.jsx)(T,{todos:function(){var e=Object(r.a)(n);switch(b){case O.Active:e=e.filter((function(e){return!e.completed}));break;case O.Completed:e=e.filter((function(e){return e.completed}))}return e}(),handleDelete:X,changeStatus:Z,changeTitle:$}),G&&Object(j.jsx)(y,{todo:G,handleDelete:X,changeStatus:Z,changeTitle:$,isTempTodo:!0})]}),0!==n.length&&Object(j.jsx)(w,{setFilterValue:h,filterValue:b,todos:n,clearCompletedTodos:function(){n.filter((function(e){return e.completed&&(k(e.id),X(e.id)),e})),c(n)},completedTodos:Y})]}),_&&Object(j.jsx)(A,{errorMessage:_,showNotification:J,setShowNotification:M})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(E,{}))}},[[27,1,2]]]);
//# sourceMappingURL=main.225b8e43.chunk.js.map