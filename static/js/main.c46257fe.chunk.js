(this["webpackJsonpreact-form-practice"]=this["webpackJsonpreact-form-practice"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),i=a(2),l=a(3),j=(a(10),a(16),a(0));var m=function(){var e=Object(c.useState)({firstName:"",lastName:"",email:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),m=r[0],b=r[1],u=Object(c.useState)(!1),o=Object(l.a)(u,2),O=o[0],d=o[1];return Object(j.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),a.firstName&&a.lastName&&a.email&&d(!0),b(!0)},children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsxs)("div",{className:"form-item",children:[m&&O?Object(j.jsx)("h3",{className:"success",children:"Success! Thanks for registering"}):null,Object(j.jsx)("h1",{children:"Please Register"}),Object(j.jsx)("input",{type:"text",placeholder:"First Name",value:a.firstName,name:"firstname",onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{firstName:e.target.value}))}}),Object(j.jsx)("br",{}),m&&!a.firstName?Object(j.jsx)("span",{children:"Please enter your first name"}):null]}),Object(j.jsxs)("div",{className:"form-item",children:[Object(j.jsx)("input",{type:"text",placeholder:"Last Name",value:a.lastName,name:"lastname",onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{lastName:e.target.value}))}}),Object(j.jsx)("br",{}),m&&!a.lastName?Object(j.jsx)("span",{children:"Please enter your last name"}):null]}),Object(j.jsxs)("div",{className:"form-item",children:[Object(j.jsx)("input",{type:"email",placeholder:"Email",value:a.email,name:"email",onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{email:e.target.value}))}}),Object(j.jsx)("br",{}),m&&!a.email?Object(j.jsx)("span",{children:"Please enter your email address"}):null]}),Object(j.jsx)("button",{children:"Register"}),Object(j.jsxs)("p",{children:["Have a account? ",Object(j.jsx)("a",{href:"#",children:"Login"})]})]})})};a(18);var b=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c46257fe.chunk.js.map