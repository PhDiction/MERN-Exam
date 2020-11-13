(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(19),l=c.n(r),i=(c(26),c(5)),o=c(4),j=c.n(o),d=c(2),h=function(e){var t=Object(s.useState)(),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets").then((function(e){return r(e.data.pets)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)("div",{className:"container text-center",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2"}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)("h4",{children:"These pets are looking for a good home"}),Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Actions"})]})}),Object(n.jsx)("tbody",{children:a?a.map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name},t),Object(n.jsx)("td",{children:e.type},t),Object(n.jsxs)("td",{children:[Object(n.jsx)(d.a,{to:"/detail/".concat(e._id),children:"Detail"})," | ",Object(n.jsx)(d.a,{to:"/update/".concat(e._id),children:"Edit"})]},t)]},t)})})):""})]})]}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)(d.a,{to:"/create",children:"add a pet to the shelter"})})]})})},b=c(6),O=c(8),m=function(e){return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2"}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("form",{className:"border p-5",onSubmit:e.onSubmitHandler,children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("div",{className:"form-group",children:["Pet Name: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"name",className:"form-control",value:e.form.name}),e.error.name?Object(n.jsx)("span",{className:"text-danger",children:e.error.name.message}):""]}),Object(n.jsxs)("div",{className:"form-group",children:["Pet Type: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"type",className:"form-control",value:e.form.type}),e.error.type?Object(n.jsx)("span",{className:"text-danger",children:e.error.type.message}):""]}),Object(n.jsxs)("div",{className:"form-group",children:["Pet Description: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"description",className:"form-control",value:e.form.description}),e.error.description?Object(n.jsx)("span",{className:"text-danger",children:e.error.description.message}):""]})]}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("p",{children:"Skills (optional)"}),Object(n.jsxs)("div",{className:"form-group",children:["Skill 1: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"skill_1",className:"form-control",value:e.form.skill_1})]}),Object(n.jsxs)("div",{className:"form-group",children:["Skill 2: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"skill_2",className:"form-control",value:e.form.skill_2})]}),Object(n.jsxs)("div",{className:"form-group",children:["Skill 3: ",Object(n.jsx)("input",{onChange:e.onChangeHandler,type:"text",name:"skill_3",className:"form-control",value:e.form.skill_3})]})]})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary text-light",children:"Add Pet"})]})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)(d.a,{to:"/",children:"back to home"})})]})},u=function(e){var t=Object(s.useState)({name:"",type:"",description:"",skill_1:"",skill_2:"",skill_3:""}),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)({}),o=Object(i.a)(l,2),h=o[0],u=o[1];return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsx)("h4",{children:"Know a pet needing a home?"}),Object(n.jsx)(m,{onSubmitHandler:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pets/new",a).then((function(e){e.data.error?u(e.data.error.errors):Object(d.c)("/")})).catch((function(e){return console.log(e)}))},onChangeHandler:function(e){r(Object(O.a)(Object(O.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))},form:a,error:h})]})},x=function(e){var t=Object(s.useState)({name:"",type:"",description:"",skill_1:"",skill_2:"",skill_3:""}),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)({}),o=Object(i.a)(l,2),h=o[0],u=o[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){return r(e.data.pet)})).catch((function(e){return console.log(e)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsxs)("h4",{children:["Edit: ",a.name]}),Object(n.jsx)(m,{onSubmitHandler:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pets/edit/".concat(e.id),a).then((function(e){e.data.error?u(e.data.error.errors):Object(d.c)("/")})).catch((function(e){return console.log(e)}))},onChangeHandler:function(e){r(Object(O.a)(Object(O.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))},form:a,error:h})]})},p=function(e){return Object(n.jsxs)("button",{onClick:function(){j.a.delete("http://localhost:8000/api/pets/delete/".concat(e.id)).then((function(e){return Object(d.c)("/")})).then((function(e){return window.location.reload()})).catch((function(e){return console.log(e)}))},className:"btn-sm btn-danger",children:["Adopt ",e.name]})},f=function(e){var t=Object(s.useState)({_id:"",name:"",type:"",description:"",skill_1:"",skill_2:"",skill_3:""}),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){return r(e.data.pet)})).then((function(e){return console.log(a)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h1",{children:"Pet Shelter"}),Object(n.jsxs)("h4",{children:["Details about: ",a.name]})]}),Object(n.jsx)("div",{className:"col-3"}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)(d.a,{className:"d-block",to:"/",children:"back to home"}),Object(n.jsx)(p,{className:"d-block",id:a._id,name:a.name})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2"}),Object(n.jsxs)("div",{className:"col border p-5",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Pet type: "}),a.type]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Description: "}),a.description]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Skills: "}),a.skill_1?a.skill_1+",":""," ",a.skill_2?a.skill_2+",":""," ",a.skill_3]})]}),Object(n.jsx)("div",{className:"col-2"})]})]})};var g=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(d.b,{children:[Object(n.jsx)(h,{path:"/"}),Object(n.jsx)(u,{path:"/create"}),Object(n.jsx)(x,{path:"/update/:id"}),Object(n.jsx)(f,{path:"/detail/:id"})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[50,1,2]]]);
//# sourceMappingURL=main.b19af32f.chunk.js.map