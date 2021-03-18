(this.webpackJsonppm_hw_15=this.webpackJsonppm_hw_15||[]).push([[0],{181:function(e,t,n){"use strict";n.r(t);var a,r,c,i,s,o,d,l,j,b,p,u,x,h,m,O,f,y,g,D=n(7),S=n(1),v=n.n(S),w=n(66),N=n.n(w),C=(n(79),n(15)),q=n(0),A=v.a.createContext(),F={personal:{firstName:"",lastName:"",phone:"",email:""},jobs:[{name:"",position:"",startDate:"",finishDate:""}],study:[{name:"",specialty:"",startDate:"",finishDate:""}]},X=function(e){var t=Object(S.useReducer)((function(e,t){switch(t.type){case"addPersonal":return Object(C.a)(Object(C.a)({},e),{},{personal:t.data});case"addJobs":return Object(C.a)(Object(C.a)({},e),{},{jobs:t.data});case"addStudy":return Object(C.a)(Object(C.a)({},e),{},{study:t.data});default:throw new Error}}),F),n=Object(D.a)(t,2),a=n[0],r=n[1];return Object(q.jsx)(A.Provider,{value:{formData:a,dispatch:r},children:e.children})},k=n(2),E=n(3),z=E.a.h1(a||(a=Object(k.a)(["\n  width: 100%;\n  text-align: center;\n"]))),R=Object(E.a)(z)(r||(r=Object(k.a)(["\n  font-size: 20px;\n"]))),G=E.a.div(c||(c=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #333;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 5px 0;\n  button {\n    align-self: flex-end;\n  }\n"]))),P=E.a.div(i||(i=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n"]))),V=E.a.button(s||(s=Object(k.a)(["\n  background-color: #333;\n  padding: 5px 8px;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  :focus {\n    outline: none;\n  }\n  cursor: pointer;\n"]))),I=function(){var e=new Date,t=e.getDate(),n=(e.getMonth()+1).toString(),a=e.getFullYear();return n.length<2&&(n="0"+n),t.length<2&&(t="0"+t),a+"-"+n+"-"+t},T=function(){var e=new Date,t=(e.getMonth()+1).toString(),n=e.getFullYear();return t.length<2&&(t="0"+t),n+"-"+t},B=E.a.form(o||(o=Object(k.a)(["\n  width: 500px;\n  margin: 30px auto;\n  display: flex;\n  flex-direction: column;\n  label {\n    font-size: 10px;\n    margin: 2px 0 10px 5px;\n  }\n"]))),J=function(e){var t=e.setFormStep,n=Object(S.useContext)(A),a=n.formData,r=n.dispatch,c=a.personal,i=c.firstName,s=c.lastName,o=c.phone,d=c.email,l=Object(S.useState)(i),j=Object(D.a)(l,2),b=j[0],p=j[1],u=Object(S.useState)(s),x=Object(D.a)(u,2),h=x[0],m=x[1],O=Object(S.useState)(o),f=Object(D.a)(O,2),y=f[0],g=f[1],v=Object(S.useState)(d),w=Object(D.a)(v,2),N=w[0],C=w[1],F={firstName:b,lastName:h,phone:y,email:N};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(z,{children:"Create your own resume)"}),Object(q.jsx)(R,{children:"Input your persohal data"}),Object(q.jsxs)(B,{onSubmit:function(e){e.preventDefault(),r({type:"addPersonal",data:F}),t(1)},children:[Object(q.jsx)("input",{type:"text",id:"firstName",defaultValue:b||"",required:!0,onChange:function(e){return p(e.target.value)},minLength:3,placeholder:"Input first name (min 3 characters)"}),Object(q.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(q.jsx)("input",{type:"text",id:"lastName",defaultValue:h||"",required:!0,onChange:function(e){return m(e.target.value)},minLength:3,placeholder:"Input last name (min 3 characters)"}),Object(q.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(q.jsx)("input",{type:"phone",id:"phone",defaultValue:y||"",required:!0,pattern:"\\+380+[0-9]{9}",onChange:function(e){return g(e.target.value)},placeholder:"Input number (+380XXXXXXXXX)",title:"Format requested +380XXXXXXXXX"}),Object(q.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(q.jsx)("input",{type:"email",id:"email",defaultValue:N||"",required:!0,onChange:function(e){return C(e.target.value)},placeholder:"Input email"}),Object(q.jsx)("label",{htmlFor:"email",children:"Email adress"}),Object(q.jsx)(V,{type:"submit",children:"SAVE AND GO TO NEXT PAGE"})]})]})},Y=n(4),M=n(6),_=Object(E.a)(Y.d)(d||(d=Object(k.a)(["\n  width: 500px;\n  margin: 0 auto;\n"]))),K=E.a.label(l||(l=Object(k.a)(["\n  input {\n    width: 100%;\n  }\n  p {\n    margin: 2px 0 10px 5px;\n    font-size: 10px;\n  }\n  span {\n    color: red;\n    font-size: 10px;\n  }\n"]))),L=M.c().shape({jobs:M.a().of(M.c().shape({name:M.e().min(3,"too short").required("Required"),position:M.e().min(3,"too short").required("Required"),startDate:M.b().min("01-01-1970","Scould be after 01-01-1970").max(new Date,"Scould be before today").max(M.d("finishDate"),"Start scould be before finish").required("Required"),finishDate:M.b().min("01-01-1970","Scould be after 01-01-1970").max(new Date,"Scould be before today").required("Required")}))}),U=function(e){var t=e.setFormStep,n=Object(S.useContext)(A),a=n.formData,r=n.dispatch;return Object(q.jsxs)("div",{children:[Object(q.jsx)(z,{children:"Work experience"}),Object(q.jsx)(R,{children:"Input your jobs data"}),Object(q.jsx)(Y.e,{initialValues:{jobs:a.jobs},validationSchema:L,onSubmit:function(e){e.jobs.length?(r({type:"addJobs",data:e.jobs}),t(2)):window.alert("Add at list 1 job")},render:function(e){var n=e.values;return Object(q.jsx)(_,{children:Object(q.jsx)(Y.c,{name:"jobs",render:function(e){return Object(q.jsxs)("div",{children:[n.jobs.map((function(t,n){return Object(q.jsxs)(G,{children:[Object(q.jsxs)(K,{children:[Object(q.jsx)(Y.a,{name:"jobs.".concat(n,".name"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"text",name:"jobs.".concat(n,".name")}),Object(q.jsx)("p",{children:"Company name"})]}),Object(q.jsxs)(K,{children:[Object(q.jsx)(Y.a,{name:"jobs.".concat(n,".position"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"text",name:"jobs.".concat(n,".position")}),Object(q.jsx)("p",{children:"Position"})]}),Object(q.jsxs)(K,{children:[Object(q.jsx)(Y.a,{name:"jobs.".concat(n,".startDate"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"month",name:"jobs.".concat(n,".startDate"),max:T()}),Object(q.jsx)("p",{children:"Start Date"})]}),Object(q.jsxs)(K,{children:[Object(q.jsx)(Y.a,{name:"jobs.".concat(n,".finishDate"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"month",name:"jobs.".concat(n,".finishDate"),max:T()}),Object(q.jsx)("p",{children:"Finish Date"})]}),Object(q.jsx)(V,{onClick:function(){return function(e,t){if(window.confirm("You really wont delete this JOB"))return e.remove(t)}(e,n)},children:"Remove"})]},n)})),Object(q.jsxs)(P,{children:[Object(q.jsx)(V,{onClick:function(){return t(0)},children:"GO BACK"}),Object(q.jsx)(V,{type:"button",onClick:function(){return e.push({name:"",position:"",startDate:"",finishDate:""})},children:"Add a job"}),Object(q.jsx)("div",{children:Object(q.jsx)(V,{type:"submit",children:"SAVE AND GO TO NEXT PAGE"})})]})]})}})})}})]})},W=Object(E.a)(Y.d)(j||(j=Object(k.a)(["\n  width: 500px;\n  margin: 0 auto;\n"]))),H=E.a.label(b||(b=Object(k.a)(["\n  input {\n    width: 100%;\n  }\n  p {\n    margin: 2px 0 10px 5px;\n    font-size: 10px;\n  }\n  span {\n    color: red;\n    font-size: 10px;\n  }\n"]))),Q=M.c().shape({study:M.a().of(M.c().shape({name:M.e().min(3,"too short").required("Required"),specialty:M.e().min(3,"too short").required("Required"),startDate:M.b().min("01-01-1970","Scould be after 01-01-1970").max(new Date,"Scould be before today").max(M.d("finishDate"),"Start scould be before finish").required("Required"),finishDate:M.b().min("01-01-1970","Scould be after 01-01-1970").max(new Date,"Scould be before today").required("Required")}))}),Z=function(e){var t=e.setFormStep,n=Object(S.useContext)(A),a=n.formData,r=n.dispatch;return Object(q.jsxs)("div",{children:[Object(q.jsx)(z,{children:"Form Study"}),Object(q.jsx)(R,{children:"Input your study data"}),Object(q.jsx)(Y.e,{initialValues:{study:a.study},validationSchema:Q,onSubmit:function(e){e.study.length?(r({type:"addStudy",data:e.study}),t(3)):window.alert("Add at list 1 study")},render:function(e){var n=e.values;return Object(q.jsx)(W,{children:Object(q.jsx)(Y.c,{name:"study",render:function(e){return Object(q.jsxs)("div",{children:[n.study.map((function(t,n){return Object(q.jsxs)(G,{children:[Object(q.jsxs)(H,{children:[Object(q.jsx)(Y.a,{name:"study.".concat(n,".name"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"text",name:"study.".concat(n,".name")}),Object(q.jsx)("p",{children:" Name of school"})]}),Object(q.jsxs)(H,{children:[Object(q.jsx)(Y.a,{name:"study.".concat(n,".specialty"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"text",name:"study.".concat(n,".specialty")}),Object(q.jsx)("p",{children:"Specialty"})]}),Object(q.jsxs)(H,{children:[Object(q.jsx)(Y.a,{name:"study.".concat(n,".startDate"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"date",name:"study.".concat(n,".startDate"),max:I()}),Object(q.jsx)("p",{children:"Start Date"})]}),Object(q.jsxs)(H,{children:[Object(q.jsx)(Y.a,{name:"study.".concat(n,".finishDate"),component:"span",className:"field-error"}),Object(q.jsx)(Y.b,{type:"date",name:"study.".concat(n,".finishDate"),max:I()}),Object(q.jsx)("p",{children:" Finish Date"})]}),Object(q.jsx)(V,{onClick:function(){return function(e,t){if(window.confirm("You really wont delete this STUDY"))return e.remove(t)}(e,n)},children:"Remove"})]},n)})),Object(q.jsxs)(P,{children:[Object(q.jsx)(V,{onClick:function(){return t(1)},children:"GO BACK"}),Object(q.jsx)(V,{type:"button",onClick:function(){return e.push({name:"",specialty:"",startDate:"",finishDate:""})},children:"Add a study"}),Object(q.jsx)("div",{children:Object(q.jsx)(V,{type:"submit",children:"SAVE AND GO TO NEXT PAGE"})})]})]})}})})}})]})},$=E.a.div(p||(p=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 1000px;\n  margin: 10px auto;\n  padding: 5px;\n  border: 1px solid #000;\n  border-radius: 10px;\n  background-color: #333;\n"]))),ee=E.a.div(u||(u=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  margin: 5px;\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 10px;\n  box-sizing: border-box;\n  background-color: #fff;\n"]))),te=E.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 695px;\n  margin: 5px;\n  border: 1px solid #000;\n  border-radius: 10px;\n  padding: 10px;\n  box-sizing: border-box;\n  background-color: #fff;\n"]))),ne=E.a.div(h||(h=Object(k.a)(["\n  background-color: #345456;\n  width: 200px;\n  border-radius: 50%50%;\n  margin: 10px auto;\n  font-size: 70px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 200px;\n"]))),ae=Object(E.a)(z)(m||(m=Object(k.a)(["\n  text-align: left;\n  text-transform: uppercase;\n"]))),re=E.a.a(O||(O=Object(k.a)(["\n  font-size: 20px;\n  color: #000;\n  margin: 5px 0;\n  text-decoration: none;\n  cursor: pointer;\n"]))),ce=E.a.div(f||(f=Object(k.a)(["\n  position: relative;\n  font-size: 20px;\n  border: 1px solid #333;\n  margin: 5px 0;\n  padding: 10px;\n  border-radius: 10px;\n  span {\n    font-weight: bold;\n    margin-left: 10px;\n  }\n"]))),ie=E.a.div(y||(y=Object(k.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  padding: 5px;\n  font-size: 20px;\n  font-weight: bold;\n  border: 3px solid #333;\n  text-align: center;\n  border-radius: 50%;\n"]))),se=E.a.div(g||(g=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 1000px;\n  margin: 10px auto;\n"]))),oe=function(e){var t=e.setFormStep,n=Object(S.useContext)(A).formData;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(z,{children:"RESUME"}),Object(q.jsxs)($,{children:[Object(q.jsxs)(ee,{children:[Object(q.jsx)(ne,{children:n.personal.firstName.charAt(0)}),Object(q.jsxs)(ae,{children:[n.personal.firstName,Object(q.jsx)("br",{})," ",n.personal.lastName]}),Object(q.jsx)(re,{href:"mailto:".concat(n.personal.email),children:n.personal.email}),Object(q.jsx)(re,{href:"tel:".concat(n.personal.phone),children:n.personal.phone})]}),Object(q.jsxs)(te,{children:[Object(q.jsx)(z,{children:"STUDYS"}),n.study.map((function(e,t){return Object(q.jsxs)(ce,{children:[Object(q.jsxs)("p",{children:["School: ",Object(q.jsx)("span",{children:e.name})]}),Object(q.jsxs)("p",{children:["Specialty: ",Object(q.jsx)("span",{children:e.specialty})]}),Object(q.jsxs)("p",{children:["Study period:",Object(q.jsxs)("span",{children:[e.startDate.replaceAll("-","/")," -"," ",e.finishDate.replaceAll("-","/")]})]}),Object(q.jsx)(ie,{children:t+1})]})})),Object(q.jsx)(z,{children:"JOBS"}),n.jobs.map((function(e,t){return Object(q.jsxs)(ce,{children:[Object(q.jsxs)("p",{children:["Company: ",Object(q.jsx)("span",{children:e.name})]}),Object(q.jsxs)("p",{children:["Position: ",Object(q.jsx)("span",{children:e.position})]}),Object(q.jsxs)("p",{children:["Work period:",Object(q.jsxs)("span",{children:[e.startDate.replaceAll("-","/")," -"," ",e.finishDate.replaceAll("-","/")]})]}),Object(q.jsx)(ie,{children:t+1})]})}))]})]}),Object(q.jsx)(se,{children:Object(q.jsx)(V,{onClick:function(){return t(2)},children:"GO BACK"})})]})},de=function(){var e=Object(S.useState)(0),t=Object(D.a)(e,2),n=t[0],a=t[1];return Object(q.jsx)(v.a.StrictMode,{children:Object(q.jsxs)(X,{children:[0===n&&Object(q.jsx)(J,{setFormStep:a}),1===n&&Object(q.jsx)(U,{setFormStep:a}),2===n&&Object(q.jsx)(Z,{setFormStep:a}),3===n&&Object(q.jsx)(oe,{setFormStep:a})]})})};N.a.render(Object(q.jsx)(de,{}),document.getElementById("root"))},79:function(e,t,n){}},[[181,1,2]]]);
//# sourceMappingURL=main.d163c91e.chunk.js.map