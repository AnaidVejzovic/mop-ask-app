(this["webpackJsonpreact-ask-app"]=this["webpackJsonpreact-ask-app"]||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(18),c=n.n(r),i=(n(25),n(3)),o=n.n(i),l=n(4),u=n(2),j=(n(27),n(5)),d=n(0),b=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),i=Object(u.a)(c,2),b=i[0],m=i[1],p=Object(s.useState)(!1),h=Object(u.a)(p,2),O=h[0],f=h[1],x=Object(s.useState)(""),v=Object(u.a)(x,2),g=v[0],N=v[1],y=function(){var t=Object(l.a)(o.a.mark((function t(n){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch(" http://localhost:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:a,password:b})});case 3:return s=t.sent,t.next=6,s.json();case 6:"success"!==(r=t.sent).message?N(r.message):(e.setName(r.name),f(!0),window.location.reload(!1));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return O?Object(d.jsx)(j.a,{to:"/"}):Object(d.jsx)("main",{className:"form-signin",children:Object(d.jsxs)("form",{onSubmit:y,children:[Object(d.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please sign in"}),Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("div",{className:"error-message",children:g}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Sign in"})]})})},m=n(10),p=function(e){var t,n=Object(s.useState)(0),a=Object(u.a)(n,2),r=a[0],c=a[1],i=String(e.userId),j=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8000/api/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:e.setName("");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return void 0!==i&&"undefined"!==i&&function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getnotifications",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i}),credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(String(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),t=""===e.name||void 0===e.name?Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(m.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(m.b,{to:"/register",className:"nav-link",children:"Register"})})]}):Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(m.b,{to:"/myqa",className:"nav-link",onClick:function(){r>0&&(fetch("http://localhost:8000/api/resetnotifications",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i}),credentials:"include"}),c(0))},children:[Object(d.jsx)("span",{class:"badge badge-pill x-5",style:{backgroundColor:"orange",marginRight:"0.5em"},children:r}),"My Q&A"]})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(m.b,{to:"/profile",className:"nav-link",children:"Profile"})}),Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(m.b,{to:"/login",className:"nav-link",onClick:j,children:"Logout"})})]}),Object(d.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark mb-4",style:{backgroundColor:"#00124d"},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(m.b,{to:"/",className:"navbar-brand",children:"Home"}),Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(m.b,{to:"/questions",className:"nav-link",children:"Questions"})})}),Object(d.jsx)("div",{children:t})]})})},h=(n(15),function(e){return Object(d.jsx)("div",{className:"list-group-item list-group-item-action d-flex gap-3 py-1",children:Object(d.jsx)("div",{className:"d-flex gap-2 w-100 justify-content-between",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("small",{className:"text-success",children:[e.name,": "]}),Object(d.jsxs)("small",{className:"mb-0 opacity-100",children:[e.answer,Object(d.jsx)("br",{})]})]})})})}),O=function(e){var t,n,a=Object(s.useState)(""),r=Object(u.a)(a,2),c=r[0],i=r[1],j=Object(s.useState)(e.likes),b=Object(u.a)(j,2),m=b[0],p=b[1],O=String(e.id),f=String(e.qPosterId),x=String(e.aPosterId),v=String(e.aPosterName),g=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(" http://localhost:8000/api/postanswer",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({questionId:O,qPosterId:f,answer:c,aPosterId:x,aPosterName:v})});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return""!==e.answer&&void 0!==e.answer&&"undefined"!==e.answer&&!1===e.home&&!0!==e.myanswers?t=Object(d.jsx)(h,{answer:e.answer,name:e.answerName}):!1===e.home&&!0!==e.myanswers&&void 0!==e.aPosterId&&"undefined"!==e.aPosterId&&""!==e.aPosterId?t=Object(d.jsxs)("form",{onSubmit:g,children:[Object(d.jsx)("input",{type:"text",className:"form-control py-1 d-inline",style:{width:"90%"},placeholder:"Post the answer",required:!0,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("button",{className:"py-1 btn btn-outline-primary d-inline",type:"submit",children:"Submit"})]}):!0===e.myanswers&&(t=Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{answer:e.answer,name:e.answerName}),Object(d.jsxs)("form",{onSubmit:g,className:"d-inline",children:[Object(d.jsx)("input",{type:"text",className:"form-control py-1 d-inline",style:{width:"80%"},placeholder:"Repost your answer",required:!0,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("button",{className:"py-1 btn btn-outline-primary d-inline",style:{width:"10%"},type:"submit",children:"Submit"})]}),Object(d.jsx)("button",{className:"py-1 btn btn-danger d-inline",style:{width:"10%"},onClick:function(){fetch(" http://localhost:8000/api/deleteanswer",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({questionId:O})}),window.location.reload(!1)},children:"Delete"})]})),!1===e.home&&!1===e.myqa&&void 0!==e.aPosterId&&"undefined"!==e.aPosterId&&""!==e.aPosterId&&(n=Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"w-20 py-1 btn btn-outline-success d-inline",onClick:function(){fetch(" http://localhost:8000/api/likequestion",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({questionId:O})}),p(m+1)},children:Object(d.jsx)("span",{children:"\u25b2"})}),Object(d.jsx)("button",{className:"w-20 py-1 btn btn-outline-danger d-inline",onClick:function(){fetch(" http://localhost:8000/api/dislikequestion",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({questionId:O})}),p(m-1)},children:Object(d.jsx)("span",{children:"\u25bc"})})]})),Object(d.jsx)("div",{className:"list-group-item list-group-item-action d-inline-flex gap-3 py-3",style:e.style,children:Object(d.jsxs)("div",{className:"d-flex gap-2 w-100 justify-content-between",children:[Object(d.jsxs)("div",{className:"w-100",children:[Object(d.jsxs)("h6",{className:"mb-0",children:["Q: ",e.question]}),Object(d.jsxs)("small",{className:"mb-0 opacity-75",children:["Posted by: ",e.opName]}),t]}),Object(d.jsxs)("small",{className:"d-inline opacity-70 text-nowrap text-success",children:[n," Likes: ",m]})]})})},f=function(e){return Object(d.jsx)("div",{className:"list-group-item list-group-item-action d-flex gap-3 py-3 w-50",children:Object(d.jsxs)("div",{className:"d-flex gap-2 w-100 justify-content-between",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("h6",{className:"mb-0",children:[e.firstName," ",e.lastName]})}),Object(d.jsxs)("small",{className:"opacity-70 text-nowrap text-success",children:["Answers: ",e.answers]})]})})},x=function(e){var t=Object(s.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)([]),i=Object(u.a)(c,2),j=i[0],b=i[1],m=Object(s.useState)([]),p=Object(u.a)(m,2),h=p[0],x=p[1],v=Object(s.useState)(0),g=Object(u.a)(v,2),N=g[0],y=g[1],w=Object(s.useState)(!1),S=Object(u.a)(w,2),P=S[0],q=S[1],k=Object(s.useState)("Show more"),C=Object(u.a)(k,2),I=C[0],T=C[1],J=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getquestions",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.t0=r,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/gettopquestions",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.t0=b,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getusers",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.t0=x,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===N&&(J(),L(),D(),y(1));var F,A,Q;return F=!1===P?a.slice(a.length-20,a.length).map((function(e){var t=e.id,n=e.question,s=(e.qPosterId,e.qPosterName),a=e.likes;return Object(d.jsx)(O,{question:n,opName:s,likes:a},t)})).reverse():a.slice(a.length-30,a.length).map((function(e){var t=e.id,n=e.question,s=(e.qPosterId,e.qPosterName),a=e.likes;return Object(d.jsx)(O,{question:n,opName:s,likes:a},t)})).reverse(),Q=h.map((function(e){var t=e.id,n=e.firstName,s=e.lastName,a=e.answers;return Object(d.jsx)(f,{firstName:n,lastName:s,answers:a},t)})),A=j.map((function(e){var t=e.id,n=e.question,s=(e.qPosterId,e.qPosterName),a=e.likes;return Object(d.jsx)(O,{question:n,opName:s,likes:a},t)})),Object(d.jsxs)("div",{className:"list-group",children:[Object(d.jsx)("h4",{children:"Latest Questions"}),F,Object(d.jsx)("button",{className:"w-20 btn btn-sm btn-primary",onClick:function(){T(P?"Show more":"Show less"),q(!P)},children:I}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Users with most answers"}),Q,Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Top 10 Questions"}),A]})},v=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(u.a)(r,2),i=c[0],b=c[1],m=Object(s.useState)(""),p=Object(u.a)(m,2),h=p[0],O=p[1],f=Object(s.useState)(""),x=Object(u.a)(f,2),v=x[0],g=x[1],N=Object(s.useState)(!1),y=Object(u.a)(N,2),w=y[0],S=y[1],P=Object(s.useState)(""),q=Object(u.a)(P,2),k=q[0],C=q[1],I=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),-1!==(/[^\s@]+@[^\s@]+\.[^\s@]+/.test(h)?1:-1)){e.next=5;break}C("Invalid email"),e.next=12;break;case 5:if(!(v.length<5)){e.next=9;break}C("Password must have at least 5 characters"),e.next=12;break;case 9:return e.next=11,fetch("http://localhost:8000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:n,lastName:i,email:h,password:v})});case 11:S(!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return w?Object(d.jsx)(j.a,{to:"/login"}):Object(d.jsx)("main",{className:"form-signin",children:Object(d.jsxs)("form",{onSubmit:I,children:[Object(d.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Please register"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",required:!0,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Last Name",required:!0,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"name@example.com",required:!0,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("div",{className:"error-message",children:k}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"})]})})},g=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),i=Object(u.a)(c,2),j=i[0],b=i[1],m=Object(s.useState)(""),p=Object(u.a)(m,2),h=p[0],O=p[1],f=Object(s.useState)(""),x=Object(u.a)(f,2),v=x[0],g=x[1],N=Object(s.useState)(""),y=Object(u.a)(N,2),w=y[0],S=y[1],P=Object(s.useState)(""),q=Object(u.a)(P,2),k=q[0],C=q[1],I=Object(s.useState)(""),T=Object(u.a)(I,2),J=T[0],L=T[1],D=e.email,F=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(j.length<5)){e.next=4;break}return C("Password must have at least 5 characters"),e.abrupt("return");case 4:return e.next=6,fetch(" http://localhost:8000/api/changepassword",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:D,oldPassword:a,newPassword:j})});case 6:return n=e.sent,e.next=9,n.json();case 9:"success"!==(s=e.sent).message&&L(s.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==h.length){e.next=4;break}return C("Please enter a name"),e.abrupt("return");case 4:return e.next=6,fetch(" http://localhost:8000/api/changefirstname",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({firstName:h,email:D})});case 6:return n=e.sent,e.next=9,n.json();case 9:"success"!==(s=e.sent).message&&C(s.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==v.length){e.next=4;break}return C("Please enter a name"),e.abrupt("return");case 4:return e.next=6,fetch(" http://localhost:8000/api/changelastname",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({lastName:v,email:D})});case 6:return n=e.sent,e.next=9,n.json();case 9:"success"!==(s=e.sent).message&&C(s.message);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),-1!==(/[^\s@]+@[^\s@]+\.[^\s@]+/.test(w)?1:-1)){e.next=6;break}return C("Invalid email"),e.abrupt("return");case 6:return e.next=8,fetch(" http://localhost:8000/api/changeemail",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:D,newEmail:w})});case 8:return n=e.sent,e.next=11,n.json();case 11:"success"!==(s=e.sent).message&&C(s.message);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("main",{className:"form-signin",children:[Object(d.jsxs)("div",{className:"profile-info",children:[Object(d.jsxs)("h3",{children:[e.firstName," ",e.lastName]}),Object(d.jsx)("p",{children:e.email})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"Change Password"}),Object(d.jsxs)("form",{onSubmit:F,children:[Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Old password",required:!0,onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"New password",required:!0,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Submit"}),Object(d.jsx)("div",{className:"error-message",children:J})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"Change User Info"}),Object(d.jsxs)("form",{onSubmit:A,children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",required:!0,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Change First Name"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:Q,children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Last Name",required:!0,onChange:function(e){return g(e.target.value)}}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Change Last Name"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:E,children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",required:!0,onChange:function(e){return S(e.target.value)}}),Object(d.jsx)("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:"Change Email"}),Object(d.jsx)("div",{className:"error-message",children:k})]})]})},N=function(e){var t=String(e.userId),n=e.name,a=Object(s.useState)(),r=Object(u.a)(a,2),c=r[0],i=r[1],j=Object(s.useState)([]),b=Object(u.a)(j,2),m=b[0],p=b[1],h=Object(s.useState)(0),f=Object(u.a)(h,2),x=f[0],v=f[1],g=Object(s.useState)(""),N=Object(u.a)(g,2),y=N[0],w=N[1];console.log(e.name);var S,P,q=function(){var e=Object(l.a)(o.a.mark((function e(s){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,fetch(" http://localhost:8000/api/postquestion",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:c,id:t,name:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,w(r.message);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getquestions",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.t0=p,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return S="undefined"!==t?Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:q,children:[Object(d.jsx)("input",{type:"text",className:"form-control d-inline",style:{width:"90%"},placeholder:"Ask a question",required:!0,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("button",{className:"d-inline btn  btn-primary",type:"submit",style:{width:"10%"},children:"Ask"})]}),Object(d.jsx)("div",{className:"alert-success",children:y})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Please Log in to ask or answer questions."}),Object(d.jsx)("br",{})]}),P=m.map((function(t){var n=t.id,s=t.question,a=t.qPosterId,r=t.qPosterName,c=t.likes,i=t.answer,o=(t.aPosterId,t.aPosterName);return Object(d.jsx)("div",{children:Object(d.jsx)(O,{id:n,qPosterId:a,question:s,opName:r,likes:c,answer:i,home:!1,myqa:!1,aPosterId:e.userId,aPosterName:e.name,answerName:o},n)})})).reverse(),0===x&&(k(),v(1)),Object(d.jsxs)("div",{className:"list-group",children:[S,Object(d.jsx)("br",{})," ",P,Object(d.jsx)("br",{})]})},y=function(e){var t=String(e.userId),n=Object(s.useState)([]),a=Object(u.a)(n,2),r=a[0],c=a[1],i=Object(s.useState)([]),j=Object(u.a)(i,2),b=j[0],m=j[1],p=Object(s.useState)(0),h=Object(u.a)(p,2),f=h[0],x=h[1],v=Object(s.useState)(!1),g=Object(u.a)(v,2),N=g[0],y=g[1],w=Object(s.useState)("Show more"),S=Object(u.a)(w,2),P=S[0],q=S[1];console.log(e.name);var k,C,I=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getuserquestions",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({id:t})});case 2:return n=e.sent,e.t0=c,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/getuseranswers",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({id:t})});case 2:return n=e.sent,e.t0=m,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return k=!1===N?r.slice(r.length-20,r.length).map((function(t){var n=t.id,s=t.question,a=(t.qPosterId,t.qPosterName),r=t.likes,c=t.answer,i=(t.aPosterId,t.aPosterName);return Object(d.jsx)("div",{children:Object(d.jsx)(O,{id:n,question:s,opName:a,likes:r,answer:c,home:!1,aPosterId:e.userId,aPosterName:e.name,answerName:i},n)})})).reverse():r.map((function(t){var n=t.id,s=t.question,a=(t.qPosterId,t.qPosterName),r=t.likes,c=t.answer,i=(t.aPosterId,t.aPosterName);return Object(d.jsx)("div",{children:Object(d.jsx)(O,{id:n,question:s,opName:a,likes:r,answer:c,home:!1,aPosterId:e.userId,aPosterName:e.name,answerName:i},n)})})).reverse(),C=b.map((function(t){var n=t.id,s=t.question,a=(t.qPosterId,t.qPosterName),r=t.likes,c=t.answer,i=(t.aPosterId,t.aPosterName);return Object(d.jsx)("div",{children:Object(d.jsx)(O,{id:n,question:s,opName:a,likes:r,answer:c,home:!1,myqa:!0,myanswers:!0,aPosterId:e.userId,aPosterName:e.name,answerName:i},n)})})).reverse(),0===f&&(I(),T(),x(1)),Object(d.jsxs)("div",{className:"list-group",children:[Object(d.jsx)("h4",{children:"My Latest Questions"}),Object(d.jsx)("hr",{})," ",k,Object(d.jsx)("button",{className:"w-20 btn btn-sm btn-primary",onClick:function(){q(N?"Show more":"Show less"),y(!N)},children:P}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"My Answers"}),Object(d.jsx)("hr",{})," ",C]})};var w=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(u.a)(r,2),i=c[0],h=c[1],O=Object(s.useState)(""),f=Object(u.a)(O,2),w=f[0],S=f[1],P=Object(s.useState)(""),q=Object(u.a)(P,2),k=q[0],C=q[1];return Object(s.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/user",{headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n.firstName),S(n.lastName),C(n.email),a(n.id);case 10:case"end":return e.stop()}}),e)})))()})),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(p,{name:i,setName:h,userId:n}),Object(d.jsx)(j.b,{path:"/",exact:!0,component:function(){return Object(d.jsx)(x,{name:i,userId:n})}}),Object(d.jsx)(j.b,{path:"/questions",component:function(){return Object(d.jsx)(N,{userId:n,name:i+" "+w})}}),Object(d.jsx)(j.b,{path:"/login",component:function(){return Object(d.jsx)(b,{setName:h})}}),Object(d.jsx)(j.b,{path:"/register",component:v}),Object(d.jsx)(j.b,{path:"/myqa",component:function(){return Object(d.jsx)(y,{userId:n,name:i+" "+w})}}),Object(d.jsx)(j.b,{path:"/profile",component:function(){return Object(d.jsx)(g,{firstName:i,lastName:w,email:k})}})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[34,1,2]]]);
//# sourceMappingURL=main.f90c0f66.chunk.js.map