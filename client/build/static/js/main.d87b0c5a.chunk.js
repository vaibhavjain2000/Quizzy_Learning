(this["webpackJsonpquizzylearning-frontend"]=this["webpackJsonpquizzylearning-frontend"]||[]).push([[0],{113:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},152:function(e,t,n){},154:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),i=n.n(a),r=(n(113),n(17)),o=n.n(r),l=n(27),d=n(10),u=n(24),j=n(57);j.a.initializeApp({apiKey:"AIzaSyBfSnnZ2HglgbbhtQpPHyHGP-7viAPL1tE",authDomain:"quizzy-learning.firebaseapp.com",projectId:"quizzy-learning",storageBucket:"quizzy-learning.appspot.com",messagingSenderId:"10688054756",appId:"1:10688054756:web:88f1539f6caf21a039f3f1"}),j.a.analytics(),j.a.auth();var b=j.a,h=(n(118),n(119),n(120),n(85)),O=n(87),x=n.n(O),p=(n(152),n(3)),f=function(){return Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsxs)("h1",{className:"blue",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsx)(x.a,{color:"#29455a",width:130,height:130,type:"Circles"})]})},m=n(202),v=n(203),g=n(204),y=n(96),z=function(e){var t=e.setUser,n=Object(c.useState)(!0),s=Object(d.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)("student"),u=Object(d.a)(r,2),j=u[0],O=u[1],x={signInflow:"popup",signInOptions:[b.auth.GoogleAuthProvider.PROVIDER_ID,b.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},z=new y.a;return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get("role");case 2:if(!e.sent){e.next=4;break}O(z.get("role"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,O]),Object(c.useEffect)((function(){var e=!0;return console.log(j),b.auth().onAuthStateChanged((function(n){n&&e?(t({uid:b.auth().currentUser.uid,name:b.auth().currentUser.displayName,email:b.auth().currentUser.email,role:j}),console.log("User Logged In")):(console.log("User Signed Out"),t({})),console.log("auth change"),e&&i(!1)})),function(){return e=!1}}),[t,j]),Object(p.jsx)(m.a,{fluid:!0,children:a?Object(p.jsx)(f,{}):Object(p.jsx)(m.a,{className:"Home",children:Object(p.jsxs)(v.a,{className:"row",children:[Object(p.jsxs)(g.a,{className:"logo",lg:6,children:[Object(p.jsxs)(g.a,{className:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsxs)(g.a,{children:[Object(p.jsx)(v.a,{children:Object(p.jsxs)("div",{id:"studentid",children:[Object(p.jsx)("input",{type:"radio",name:"role",onChange:function(){return O("student"),console.log(j),void z.set("role","student")},value:"student"}),Object(p.jsx)("label",{children:"Student"})]})}),Object(p.jsx)(v.a,{children:Object(p.jsxs)("div",{id:"teacherid",children:[Object(p.jsx)("input",{type:"radio",onChange:function(){return O("teacher"),z.set("role","teacher"),void console.log(j)},name:"role",value:"teacher"}),Object(p.jsx)("label",{children:"Teacher"})]})})]})]}),Object(p.jsxs)(g.a,{className:"login-card",lg:6,children:[Object(p.jsx)("label",{className:"login-label",children:Object(p.jsx)("b",{children:"Q"})}),Object(p.jsx)(h.StyledFirebaseAuth,{borderRadius:"40px",uiConfig:x,firebaseAuth:b.auth()})]})]})})})},N=(n(154),function(e){var t=e.user,n=Object(c.useState)(""),s=Object(d.a)(n,2),a=s[0],i=s[1];return a.length>0?Object(p.jsx)(u.a,{push:!0,to:a}):(console.log(t),Object(p.jsx)(m.a,{className:"one-time-dashboard",children:Object(p.jsxs)("div",{className:"dashboard-content",children:[Object(p.jsxs)("div",{className:"dash-btns",children:[Object(p.jsxs)("h1",{className:"white",children:[Object(p.jsx)("b",{children:"Quizzy"})," Learning"]}),Object(p.jsx)("button",{className:"button one-time-button",onClick:function(){return i("/dashboard")},children:Object(p.jsx)("strong",{children:"Profile"})}),"teacher"===t.role?Object(p.jsx)("button",{className:"button one-time-button",onClick:function(){return i("/create-quiz")},children:Object(p.jsx)("strong",{children:"Create Course Quiz"})}):Object(p.jsx)("div",{}),Object(p.jsx)("button",{className:"button one-time-button",onClick:function(){return i("/join-quiz")},children:Object(p.jsx)("strong",{children:"Join Quiz"})})]}),Object(p.jsxs)("div",{className:"blob-svg",children:[Object(p.jsx)("svg",{className:"blob-1",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fill:"#D81E5B",d:"M55.6,-59.6C71.1,-53.2,82.1,-34.8,85.2,-15.3C88.2,4.2,83.3,24.7,73,41.7C62.7,58.6,46.8,72,29.8,75.4C12.7,78.9,-5.7,72.5,-21.3,64.3C-36.8,56.1,-49.6,46,-55.3,33.3C-61,20.6,-59.6,5.2,-56.6,-9.6C-53.6,-24.4,-48.8,-38.4,-39.1,-45.8C-29.4,-53.2,-14.7,-53.8,2.7,-57C20,-60.2,40.1,-65.9,55.6,-59.6Z",transform:"translate(100 100)"})}),Object(p.jsx)("svg",{className:"blob-3",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fill:"#F7C550",d:"M37.2,-46.1C50.9,-32.8,66.5,-23.6,68.1,-12.3C69.8,-0.9,57.5,12.6,48.4,27.5C39.3,42.4,33.3,58.7,22.7,62.7C12.1,66.7,-3,58.3,-21.7,54C-40.3,49.6,-62.5,49.2,-72.9,38.5C-83.4,27.8,-82.2,6.8,-75.6,-10.4C-69.1,-27.5,-57.2,-40.7,-43.7,-54C-30.2,-67.3,-15.1,-80.6,-1.7,-78.6C11.8,-76.6,23.5,-59.3,37.2,-46.1Z",transform:"translate(100 100)"})})]})]})}))}),C=n(31),S=(n(160),n(205)),k=n(172),q=n(234),w=n(210),Q=(n(161),n(209)),P=n(211),A=n(212),E=Object(S.a)((function(e){return{root:{},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:0,width:"90%",borderRadius:"10px"},buttons:{display:"flex",justifyContent:"flex-end"}}}));function I(e){var t=e.type,n=void 0===t?"add":t,a=e.title,i=void 0===a?"":a,r=e.opType,o=void 0===r?"radio":r,l=e.opArray,u=e.index,j=void 0===u?-1:u,b=e.addQuestionHandle,h=E(),O=s.a.useState(!1),x=Object(d.a)(O,2),f=x[0],m=x[1],v=Object(c.useState)("radio"),g=Object(d.a)(v,2),y=g[0],z=g[1],N=Object(c.useState)([]),S=Object(d.a)(N,2),I=S[0],T=S[1],R=Object(c.useState)(null),U=Object(d.a)(R,2),D=U[0],L=U[1],F=Object(c.useState)(-1),J=Object(d.a)(F,2),_=J[0],H=J[1],B=Object(c.useState)(""),M=Object(d.a)(B,2),G=M[0],Z=M[1],W=Object(c.useRef)(null),K=Object(c.useRef)(null);Object(c.useEffect)((function(){f?(Z(i),z(o),l&&T(l)):(Z(""),T([]),z("radio"))}),[f,i,o,l]);var V=function(){m(!0)};return Object(p.jsxs)("div",{className:h.root,children:["add"===n?Object(p.jsx)("button",{className:"button",onClick:V,children:"Add Question"}):Object(p.jsx)(k.a,{onClick:V,children:Object(p.jsx)(Q.a,{})}),Object(p.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:h.modal,open:f,disableEnforceFocus:!0,children:Object(p.jsxs)("div",{className:h.paper,children:[Object(p.jsxs)("div",{className:"questionCard",children:[Object(p.jsx)("div",{id:"title",children:"Question:"}),Object(p.jsx)("input",{type:"text",autoFocus:!0,value:G,onChange:function(e){return Z(e.target.value)},className:"input-text question",placeholder:"Type Question Here"}),Object(p.jsxs)("select",{id:"select",placeholder:"Select",onChange:function(e){return z(e.target.value)},children:[Object(p.jsx)("option",{className:"selectOp",value:"radio",children:"Single Answer"}),Object(p.jsx)("option",{className:"selectOp",value:"check",children:"Multiple Answers"})]}),Object(p.jsx)("div",{className:"option-div",children:Object(p.jsx)("div",{className:"options",id:"one-op",children:I.map((function(e,t){return Object(p.jsxs)("div",{className:"option",children:[Object(p.jsx)("input",{type:"radio"===y?"radio":"checkbox",disabled:!0,className:"radio-in",name:"option",checked:e.isCorrect}),_===t?Object(p.jsx)("input",{value:D,onChange:function(e){return L(e.target.value)}}):Object(p.jsx)("div",{className:"add-op",children:e.text}),_===t?Object(p.jsx)(w.a,{className:"save-icon",onClick:function(){return function(){var e=Object(C.a)(I);e[_].text=D,T(e),H(-1)}()},children:Object(p.jsx)(P.a,{})}):Object(p.jsx)(w.a,{className:"edit-icon",onClick:function(){return function(e){-1===_&&(H(e),L(I[e].text))}(t)},children:Object(p.jsx)(Q.a,{})}),Object(p.jsx)(w.a,{className:"delete-icon",onClick:function(){!function(e){var t=Object(C.a)(I);t.splice(e,1),T(t),H(-1)}(t)},children:Object(p.jsx)(A.a,{})})]},t)}))})}),Object(p.jsxs)("div",{className:"add-op",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio"===y?"radio":"checkbox",ref:K,className:"radio-in",name:"option"}),Object(p.jsx)("input",{type:"text",ref:W,className:"input-text op-text",placeholder:"Option ".concat(I.length+1)})]}),Object(p.jsx)("input",{type:"submit",className:"add-btn",value:"+ Add",onClick:function(){if(0!==W.current.value.length){var e=Object(C.a)(I);-1===I.findIndex((function(e){return e.text===W.current.value}))?("radio"===y&&K.current.checked&&e.forEach((function(e){return e.isCorrect=!1})),e.push({text:W.current.value,isCorrect:K.current.checked}),W.current.value="",K.current.checked=!1,T(e)):alert("Option already exists.")}}})]})]}),Object(p.jsxs)("div",{className:h.buttons,children:[Object(p.jsx)("button",{className:"add-btn",onClick:function(){m(!1)},children:"Close"}),Object(p.jsxs)("button",{className:"button",color:"secondary",variant:"contained",onClick:function(){var e=Object(C.a)(I);(0!==W.current.value.length&&("radio"===y&&K.current.checked&&e.forEach((function(e){return e.isCorrect=!1})),e.push({text:W.current.value,isCorrect:K.current.checked})),!G.length&&I.length<2)?alert("Please add Question and atleast 2 options."):G.length?I.length<2?alert("Number of Options must be greater than 1."):I.filter((function(e){return e.isCorrect})).length<1?alert("No correct option was selected."):(-1!==j?b(G,y,e,j):b(G,y,e),m(!1)):alert("Please add Question.")},children:["add"===n?"Add ":"Edit ","Question"]})]})]})})]})}var T=n(92),R=n(6),U=n(25),D=n(221),L=n(222),F=n(215),J=n(220),_=n(213),H=n(232),B=n(214),M=n(236),G=n(216),Z=n(217),W=n(219),K=n(235),V=n(218);function Y(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function X(e,t){return"desc"===e?function(e,n){return Y(e,n,t)}:function(e,n){return-Y(e,n,t)}}function $(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var c=t(e[0],n[0]);return 0!==c?c:e[1]-n[1]})),n.map((function(e){return e[0]}))}var ee=[{id:"title",numeric:!1,disablePadding:!0,label:"Question"},{id:"options",numeric:!0,disablePadding:!1,label:"Options"},{id:"choice",numeric:!0,disablePadding:!1,label:"Choice"},{id:"edit",numeric:!0,disablePadding:!1,label:"Edit"}];function te(e){var t=e.classes,n=e.onSelectAllClick,c=e.order,s=e.orderBy,a=e.numSelected,i=e.rowCount,r=e.onRequestSort;return Object(p.jsx)(_.a,{children:Object(p.jsxs)(B.a,{children:[Object(p.jsx)(F.a,{padding:"checkbox",children:Object(p.jsx)(K.a,{indeterminate:a>0&&a<i,checked:i>0&&a===i,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),ee.map((function(e){return Object(p.jsx)(F.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:s===e.id&&c,children:Object(p.jsxs)(M.a,{active:s===e.id,direction:s===e.id?c:"asc",onClick:(n=e.id,function(e){r(e,n)}),children:[e.label,s===e.id?Object(p.jsx)("span",{className:t.visuallyHidden,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})}var ne=Object(S.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(U.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),ce=function(e){var t=ne(),n=e.numSelected,c=e.selected,s=e.setSelected,a=e.questionArray,i=e.setQuestionArray;return Object(p.jsxs)(G.a,{className:Object(R.a)(t.root,Object(T.a)({},t.highlight,n>0)),children:[n>0?Object(p.jsxs)(Z.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(p.jsx)(Z.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"QUESTIONS"}),n>0?Object(p.jsx)(k.a,{onClick:function(){var e=Object(C.a)(a);c.forEach((function(t){var n=e.findIndex((function(e){return e.title===t}));e.splice(n,1)})),i(e),s([])},"aria-label":"delete",children:Object(p.jsx)(V.a,{})}):null]})},se=Object(S.a)((function(e){return{root:{width:"95%",margin:"5px"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function ae(e){var t=e.questionArray,n=e.setQuestionArray,c=t.map((function(e){return t=e.title,n=e.options,c=e.optionType,{title:t,options:n,choice:c};var t,n,c})),a=se(),i=s.a.useState("asc"),r=Object(d.a)(i,2),o=r[0],l=r[1],u=s.a.useState(""),j=Object(d.a)(u,2),b=j[0],h=j[1],O=s.a.useState([]),x=Object(d.a)(O,2),f=x[0],m=x[1],v=s.a.useState(0),g=Object(d.a)(v,2),y=g[0],z=g[1],N=function(e,c,s,a){var i=Object(C.a)(t);i[a]={title:e,optionType:c,options:s},n(i)},S=5-Math.min(5,c.length-5*y);return Object(p.jsx)("div",{className:a.root,children:Object(p.jsxs)(W.a,{className:a.paper,children:[Object(p.jsx)(ce,{numSelected:f.length,selected:f,setSelected:m,questionArray:t,setQuestionArray:n}),Object(p.jsx)(J.a,{children:Object(p.jsxs)(D.a,{className:a.table,"aria-labelledby":"tableTitle",size:"small","aria-label":"enhanced table",children:[Object(p.jsx)(te,{classes:a,numSelected:f.length,order:o,orderBy:b,onSelectAllClick:function(e){if(e.target.checked){var t=c.map((function(e){return e.title}));m(t)}else m([])},onRequestSort:function(e,t){l(b===t&&"asc"===o?"desc":"asc"),h(t)},rowCount:c.length}),Object(p.jsxs)(L.a,{children:[$(c,X(o,b)).slice(5*y,5*y+5).map((function(e,t){var n,c=(n=e.title,-1!==f.indexOf(n)),s="enhanced-table-checkbox-".concat(t);return Object(p.jsxs)(B.a,{hover:!0,role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(p.jsx)(F.a,{padding:"checkbox",children:Object(p.jsx)(K.a,{onClick:function(t){return function(e,t){var n=f.indexOf(t),c=[];-1===n?c=c.concat(f,t):0===n?c=c.concat(f.slice(1)):n===f.length-1?c=c.concat(f.slice(0,-1)):n>0&&(c=c.concat(f.slice(0,n),f.slice(n+1))),m(c)}(0,e.title)},checked:c,inputProps:{"aria-labelledby":s}})}),Object(p.jsx)(F.a,{component:"th",id:s,scope:"row",padding:"none",children:e.title}),Object(p.jsx)(F.a,{align:"right",children:e.options.length}),Object(p.jsx)(F.a,{align:"right",children:"radio"===e.choice?"Single":"Multiple"}),Object(p.jsx)(F.a,{align:"right",children:Object(p.jsx)(I,{type:"edit",title:e.title,opType:e.choice,opArray:e.options,index:t,addQuestionHandle:N},t)})]},e.title)})),S>0&&Object(p.jsx)(B.a,{style:{height:33*S},children:Object(p.jsx)(F.a,{colSpan:6})})]})]})}),Object(p.jsx)(H.a,{rowsPerPageOptions:[5],component:"div",count:c.length,rowsPerPage:5,page:y,onChangePage:function(e,t){z(t)}})]})})}var ie=n(223),re=function(e){var t=e.user,n=e.quizTitle,s=e.questions,a=e.isOpen,i=e.editQuizHandle,r=Object(c.useState)([]),j=Object(d.a)(r,2),b=j[0],h=j[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),m=x[0],v=x[1],g=Object(c.useState)(!0),y=Object(d.a)(g,2),z=y[0],N=y[1],S=Object(c.useState)("stop"),k=Object(d.a)(S,2),q=k[0],w=k[1],Q=Object(c.useState)(null),P=Object(d.a)(Q,2),A=P[0],E=P[1];Object(c.useEffect)((function(){n&&(v(n),h(s),N(a))}),[n,s,a]);var T=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m.length||b.length){e.next=5;break}return alert("Please add title and questions."),e.abrupt("return");case 5:if(m.length){e.next=10;break}return alert("Please add Quiz title."),e.abrupt("return");case 10:if(b.length){e.next=13;break}return alert("Please add any questions."),e.abrupt("return");case 13:return console.log("Quiz Creation Starts..."),w("start"),e.prev=15,e.next=18,fetch("/API/quizzes/create",{method:"POST",body:JSON.stringify({title:m,uid:t.uid,questions:b,isOpen:z}),headers:{"Content-Type":"application/json"}});case 18:return n=e.sent,console.log("Quiz posted ! "),e.next=22,n.json();case 22:c=e.sent,console.log("Quiz Code : ",c.quizId),E(c.quizId),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(15),console.log("Quiz creation error : ",e.t0),w("error");case 31:case"end":return e.stop()}}),e,null,[[15,27]])})));return function(){return e.apply(this,arguments)}}();return A?Object(p.jsx)(u.a,{push:!0,to:"/created-succesfully/".concat(A)}):"start"===q?Object(p.jsx)(f,{}):Object(p.jsxs)("div",{id:"main-body",children:[Object(p.jsxs)("div",{id:"create-quiz-body",children:[Object(p.jsx)("div",{className:"quiz-header",children:Object(p.jsx)("input",{type:"text",className:"input-text",value:m,onChange:function(e){return v(e.target.value)},id:"quiz-title",placeholder:"Course Quiz Name",autoFocus:!0,autocomplete:"off"})}),Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsx)(I,{addQuestionHandle:function(e,t,n){var c=Object(C.a)(b);c.push({title:e,optionType:t,options:n}),h(c)}}),Object(p.jsxs)("div",{className:"switch",children:[Object(p.jsx)(ie.a,{checked:z,onChange:function(e){return N(e.target.checked)},color:"secondary",name:"access"}),Object(p.jsx)("h4",{children:z?"Open":"Close"})]})]})]}),Object(p.jsx)("div",{className:"questionTable",children:Object(p.jsx)(ae,{questionArray:b,setQuestionArray:h})}),Object(p.jsxs)("div",{children:[n&&Object(p.jsx)("button",{className:"add-btn",onClick:function(){return i()},children:"Close"}),Object(p.jsxs)("button",{className:"button wd-200",onClick:function(){n?i(m,b,z):T()},children:[n?"Save ":"Create ","Quiz"]})]})]})},oe=(n(163),function(){var e=Object(c.useState)("false"),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),r=i[0],o=i[1],l=function(){r.length&&s("attempt-quiz")};return"false"!==n?Object(p.jsx)(u.a,{push:!0,to:"/".concat(n,"/").concat(r)}):Object(p.jsx)("div",{id:"join-quiz",children:Object(p.jsxs)("div",{id:"join-quiz-div",children:[Object(p.jsxs)("div",{className:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)},id:"q-code",type:"text",placeholder:"Enter Quiz Code",autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&l()}}),Object(p.jsx)("button",{className:"join-button",onClick:l,children:"Join Quiz"})]})})}),le=(n(164),n(224)),de=n(22),ue=(n(84),function(e){var t=e.title,n=e.responses,c=e.code,s=e.questions,a=e.isOpen,i=e.index,r=e.setEditQuiz,o=e.setDeleteQuiz;return Object(p.jsxs)("div",{className:"quiz-card",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"created-quiz-title",children:t}),Object(p.jsxs)("p",{className:"card-code",children:["Code : ",c]})]}),Object(p.jsx)("div",{id:"horizontal-line"}),Object(p.jsxs)("div",{id:"row",children:[Object(p.jsx)("div",{id:"responses",children:n&&Object(p.jsxs)(de.b,{to:"/responses/".concat(c),style:{fontWeight:"bold"},className:"respo",children:["Responses : ",n]})}),Object(p.jsxs)("div",{id:"questions",children:["Questions : ",s]})]}),n&&Object(p.jsxs)("div",{className:"bottom-bar",children:[a?Object(p.jsx)("div",{id:"open",children:"open"}):Object(p.jsx)("div",{id:"closed",children:"closed"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(k.a,{onClick:function(){return r([i])},color:"secondary",children:Object(p.jsx)(Q.a,{color:"secondary"})}),Object(p.jsx)(k.a,{color:"secondary",onClick:function(){return o([i])},children:Object(p.jsx)(le.a,{color:"secondary"})})]})]})]})}),je=function(e){var t=e.title,n=e.score,c=e.questions;return Object(p.jsxs)("div",{className:"quiz-card",children:[Object(p.jsx)("h1",{id:"created-quiz-title",children:t}),Object(p.jsx)("div",{id:"horizontal-line"}),Object(p.jsxs)("div",{id:"row",children:[Object(p.jsxs)("div",{id:"responses",children:["Score : ",n,"/",c]}),Object(p.jsx)("div",{id:"result",children:n/c>.6?"Passed":"Fail"}),Object(p.jsxs)("div",{id:"questions",children:["Questions : ",c]})]}),Object(p.jsx)("div",{id:"open"})]})},be=function(e){var t=e.user,n=Object(c.useState)([]),s=Object(d.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)([]),u=Object(d.a)(r,2),j=u[0],b=u[1],h=Object(c.useState)([]),O=Object(d.a)(h,2),x=O[0],m=O[1],v=Object(c.useState)(!0),g=Object(d.a)(v,2),y=g[0],z=g[1],N=Object(c.useState)([]),S=Object(d.a)(N,2),k=S[0],q=S[1],w=Object(c.useState)([]),Q=Object(d.a)(w,2),P=Q[0],A=Q[1];Object(c.useEffect)((function(){if(t.uid){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/API/quizzes/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),b(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/API/users/".concat(t.uid));case 2:return n=e.sent,e.next=5,n.json();case 5:(c=e.sent).createdQuiz&&i(c.createdQuiz),c.attemptedQuiz&&m(c.attemptedQuiz),z(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),console.log(j),t&&n()}else z(!1)}),[t,b]);var E=function(){var e=Object(l.a)(o.a.mark((function e(n,c,s){var r,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}q([]),e.next=20;break;case 4:return z(!0),console.dir({quizId:a[k]._id,uid:t.uid,title:n,questions:c,isOpen:s}),e.next=8,fetch("/API/quizzes/edit",{method:"POST",body:JSON.stringify({quizId:a[k]._id,uid:t.uid,title:n,questions:c,isOpen:s}),headers:{"Content-Type":"application/json"}});case 8:return r=e.sent,e.next=11,r.json();case 11:l=e.sent,console.dir(l),(d=Object(C.a)(a))[k[0]].title=n,d[k[0]].questions=c,d[k[0]].isOpen=s,i(d),q([]),z(!1);case 20:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();if(y)return Object(p.jsx)(f,{});var I=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,fetch("/API/quizzes/delete",{method:"DELETE",body:JSON.stringify({quizId:a[P]._id}),headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),delete(c=Object(C.a)(a))[P],i(c),A([]),z(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return P.length&&I(),k.length?Object(p.jsx)(re,{user:t,quizTitle:a[k].title,questions:a[k].questions,isOpen:a[k].isOpen,editQuizHandle:E}):Object(p.jsxs)("div",{className:"dash-body",children:[Object(p.jsxs)("div",{className:"quizzes",children:[Object(p.jsxs)("div",{className:"heading",children:[Object(p.jsx)("div",{className:"line-left"}),"teacher"===t.role?Object(p.jsx)("h2",{children:"Created "}):Object(p.jsx)("h2",{children:"Quizzes"}),Object(p.jsx)("div",{className:"line"})]}),Object(p.jsx)("div",{className:"card-holder",children:"teacher"===t.role?a.map((function(e,t){return Object(p.jsx)(ue,{index:t,setEditQuiz:q,title:e.title,code:e._id,responses:e.responses,questions:e.questions.length,isOpen:e.isOpen,setDeleteQuiz:A},t)})):j.map((function(e,t){return Object(p.jsx)(ue,{index:t,title:e.title,code:e._id,questions:e.questions.length},t)}))})]}),Object(p.jsxs)("div",{className:"quizzes",children:[Object(p.jsxs)("div",{className:"heading",children:[Object(p.jsx)("div",{className:"line-left"}),Object(p.jsx)("h2",{children:"Attempted "}),Object(p.jsx)("div",{className:"line"})]}),Object(p.jsx)("div",{className:"card-holder",children:x.map((function(e,t){return Object(p.jsx)(je,{title:e.title,score:e.responses[0].score,questions:e.totalQuestions},t)}))})]})]})},he=(n(165),n(93)),Oe=function(e){var t=e.match,n=Object(c.useState)("copy"),s=Object(d.a)(n,2),a=s[0],i=s[1];return Object(p.jsx)("div",{id:"created-quiz",children:Object(p.jsxs)("div",{id:"created-quiz-div",children:[Object(p.jsxs)("div",{id:"message",children:[Object(p.jsx)("h2",{className:"b",children:"Quiz Created Successfully!"}),Object(p.jsx)("p",{children:"Share the follwong code with your students"})]}),Object(p.jsx)("input",{type:"text",id:a,value:t.params.quizCode,disabled:!0}),Object(p.jsx)(he.CopyToClipboard,{text:t.params.quizCode,onCopy:function(){i("copied")},children:Object(p.jsx)("button",{className:"button wd-200",children:"copy"===a?"Copy Code":"Code Copied!"})}),Object(p.jsx)(de.b,{to:"/dashboard",children:Object(p.jsx)("button",{className:"button wd-200",children:"Dashboard"})})]})})},xe=function(){return Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h1",{children:"404 Page Not Found!"}),Object(p.jsxs)("div",{id:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsxs)("h3",{children:["Who told you to mess up with the URL? ",Object(p.jsx)(de.b,{to:"/",children:"Click here"})," and Go back to the Dashboard."]})]})},pe=Object(S.a)((function(e){return{root:{},modal:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(10,10),borderRadius:"20px"},buttons:{display:"flex",justifyContent:"flex-end"}}})),fe=function(e){var t=e.result,n=e.totalScore,s=e.showModal,a=pe(),i=Object(c.useState)(s),r=Object(d.a)(i,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){l(s)}),[s]),Object(p.jsx)("div",{className:a.root,children:Object(p.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:o,disableEnforceFocus:!0,children:Object(p.jsxs)("div",{className:a.paper,children:[Object(p.jsx)("h2",{children:"Quiz Attempted Successfully."}),Object(p.jsx)("h1",{className:"score_h2",children:t.error?"Not Submitted ! ":"Score: ".concat(t.score,"/").concat(n)}),Object(p.jsx)(de.b,{to:"/dashboard",children:Object(p.jsx)("button",{className:"button wd-200",children:"Dashboard"})})]})})})},me=function(e){var t=e.match.params.quizCode,n=Object(c.useState)(0),s=Object(d.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)([]),u=Object(d.a)(r,2),j=u[0],h=u[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),m=x[0],v=x[1],g=Object(c.useState)(""),y=Object(d.a)(g,2),z=y[0],N=y[1],S=Object(c.useState)(!0),k=Object(d.a)(S,2),q=k[0],w=k[1],Q=Object(c.useState)({}),P=Object(d.a)(Q,2),A=P[0],E=P[1],I=Object(c.useState)(!1),T=Object(d.a)(I,2),R=T[0],U=T[1],D=b.auth().currentUser.uid;Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/API/quizzes/join",{method:"POST",body:JSON.stringify({quizId:t,uid:D}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,w(!1),c.error?N(c.error):(N(c.title),h(c.questions),s=c.questions.map((function(e){return console.log(e),{id:e.id,title:e.title,optionType:e.optionType,selectedOptions:[],optionsLength:e.options.length}})),v(s));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,D]);var L=function(e,t,n){var c=Object(C.a)(m),s=c[n].selectedOptions;if(console.log("index:"+n),!s.includes(t)&&e.target.checked&&("radio"===m[n].optionType?s[0]=t:s.push(t)),s.includes(t)&&!e.target.checked){var a=s.indexOf(t);s.splice(a,1)}c[n].selectedOptions=s,v(c)},F=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c,s,a,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.filter((function(e){return e.selectedOptions.length>0})),console.log(m),e.prev=2,e.next=5,fetch("/API/quizzes/ques",{method:"POST",body:JSON.stringify({uid:D,quizId:t,questions:n}),headers:{"Content-Type":"application/json"}});case 5:return c=e.sent,e.next=8,c.json();case 8:for(s=e.sent,console.log(s),i(s.score),a=0;a<n.length;a++)for(r=0;r<n[a].optionsLength;r++)try{document.getElementById("".concat(a).concat(r)).disabled=!0}catch(o){}l=s.score/m.length,console.log(l+" you got passed"),l>.6&&alert("Congratulations you passed the quiz. you can now submit"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.log("Error Submitting quiz",e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/API/quizzes/submit",{method:"POST",body:JSON.stringify({uid:D,quizId:t,questions:m}),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,E(c),U(!0),console.log("res body : ",c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error Submitting quiz",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return q?Object(p.jsx)(f,{}):"ERR:QUIZ_NOT_FOUND"===z?Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h1",{children:"404 Quiz Not Found!"}),Object(p.jsxs)("div",{id:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsxs)("h3",{children:["Go back to ",Object(p.jsx)(de.b,{to:"/join-quiz",children:"Join Quiz "}),"Page."]})]}):"ERR:QUIZ_ACCESS_DENIED"===z?Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h2",{children:"Quiz Access is Not Granted by the Creator. Please contact Quiz Creator."}),Object(p.jsxs)("div",{id:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsxs)("h3",{children:["Go back to ",Object(p.jsx)(de.b,{to:"/join-quiz",children:"Join Quiz "}),"Page."]})]}):"ERR:QUIZ_ALREADY_ATTEMPTED"===z?Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsx)("h2",{children:"You have already taken the Quiz."}),Object(p.jsxs)("div",{id:"logo-name",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]}),Object(p.jsxs)("h3",{children:["Go back to ",Object(p.jsx)(de.b,{to:"/join-quiz",children:"Join Quiz "}),"Page."]})]}):Object(p.jsx)("div",{id:"main-body",children:Object(p.jsxs)("div",{id:"create-quiz-body",children:[Object(p.jsxs)("div",{className:"quiz-header",children:[Object(p.jsx)("div",{}),Object(p.jsx)("h2",{children:z}),Object(p.jsxs)("div",{id:"marksQuiz",children:["Marks: ",a,"/",m.length]})]}),j.map((function(e,t){return Object(p.jsxs)("div",{className:"attempQuestionCard",children:[Object(p.jsx)("div",{id:"title",children:e.title}),Object(p.jsx)("div",{className:"option-div",children:e.options.map((function(n,c){return Object(p.jsxs)("div",{className:"option",children:["radio"===e.optionType?Object(p.jsx)("input",{id:"".concat(t).concat(c),type:"radio",name:"option".concat(t),onChange:function(e){return L(e,n.text,t)}}):Object(p.jsx)("input",{id:"".concat(t).concat(c),type:"checkbox",name:"option",onChange:function(e){return L(e,n.text,t)}}),Object(p.jsx)("label",{className:"label",style:{padding:"0px 5px"},children:n.text})]},c)}))}),Object(p.jsx)("div",{className:"submit",children:Object(p.jsx)("button",{className:"add-bn",onClick:F,children:"Mark"})})]},t)})),Object(p.jsx)("button",{className:"button wd-200",onClick:J,children:"Submit"}),Object(p.jsx)(fe,{result:A,showModal:R,totalScore:j.length})]})})},ve=(n(169),n(225)),ge=n(226),ye=n(227),ze=n(228),Ne=n(229),Ce=n(230);var Se=function(e){var t=e.user,n=Object(c.useState)(!1),s=Object(d.a)(n,2),a=s[0],i=s[1],r=[{title:"Dashboard",path:"/dashboard",icon:Object(p.jsx)(ve.a,{}),CName:"nav-text"},{title:"Join Quiz",path:"/join-quiz",icon:Object(p.jsx)(ge.a,{}),CName:"nav-text"},{title:"Create Quiz",path:"/create-quiz",icon:Object(p.jsx)(ye.a,{}),CName:"nav-text"}];"teacher"!==t.role&&delete r[2];var o=Object(c.useState)(!1),l=Object(d.a)(o,2),j=l[0],h=l[1],O=function(){return h(!j)};return a?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{className:"menu-bars",onClick:O,children:Object(p.jsx)(ze.a,{})}),Object(p.jsx)("nav",{className:j?"nav-menu active":"nav-menu",children:Object(p.jsxs)("ul",{className:"nav-menu-items",onClick:O,children:[Object(p.jsx)("li",{className:"navbar-toggle",children:Object(p.jsx)(w.a,{children:Object(p.jsx)(Ne.a,{fontSize:"large"})})}),r.map((function(e,t){return Object(p.jsx)("li",{className:"nav-text",children:Object(p.jsxs)(de.b,{to:e.path,children:[Object(p.jsx)(w.a,{children:e.icon}),Object(p.jsx)("span",{className:"nav-item-title",children:e.title})]})},t)})),Object(p.jsx)("li",{className:"nav-text sign-out",children:Object(p.jsxs)("button",{onClick:function(){console.log("clicked"),b.auth().signOut(),i(!0)},children:[Object(p.jsx)(w.a,{children:Object(p.jsx)(Ce.a,{})}),Object(p.jsx)("span",{className:"nav-item-title",children:"SignOut"})]})})]})})]})},ke=(n(170),n(231)),qe=n(233),we=function(e){var t=e.user;e.setUser;return Object(p.jsx)(qe.a,{fixed:"top",children:Object(p.jsxs)(m.a,{className:"appbar",children:[Object(p.jsxs)(g.a,{className:"slider",children:[Object(p.jsx)(Se,{user:t}),Object(p.jsxs)(de.b,{to:"/",className:"home",children:[Object(p.jsx)("b",{children:"Quizzy"}),"Learning"]})]}),Object(p.jsxs)(g.a,{className:"appbar-user",children:[Object(p.jsx)(w.a,{className:"icon",children:Object(p.jsx)(ke.a,{})}),Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:t.name})})]})]})})},Qe=n(9),Pe=Object(Qe.a)((function(e){return{head:{backgroundColor:"#d81e5b",color:e.palette.common.white},body:{fontSize:14}}}))(F.a),Ae=Object(Qe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(B.a);var Ee=Object(S.a)({table:{minWidth:500},paper:{borderRadius:15}});function Ie(e){var t=e.responses,n=Ee(),c=t.map((function(e){return{name:(t=e).name,email:t.email,score:t.score};var t}));return Object(p.jsx)(J.a,{className:n.paper,component:W.a,children:Object(p.jsxs)(D.a,{className:n.table,"aria-label":"customized table",children:[Object(p.jsx)(_.a,{children:Object(p.jsxs)(B.a,{children:[Object(p.jsx)(Pe,{children:"Name"}),Object(p.jsx)(Pe,{align:"center",children:"Email Address"}),Object(p.jsx)(Pe,{align:"right",children:"Score"})]})}),Object(p.jsx)(L.a,{children:c.map((function(e){return Object(p.jsxs)(Ae,{children:[Object(p.jsx)(Pe,{component:"th",scope:"row",children:e.name}),Object(p.jsx)(Pe,{align:"center",children:e.email}),Object(p.jsx)(Pe,{align:"right",children:e.score})]},e.name)}))})]})})}var Te=function(e){var t=e.match.params.quizCode,n=b.auth().currentUser.uid,s=Object(c.useState)(!0),a=Object(d.a)(s,2),i=a[0],r=a[1],u=Object(c.useState)([]),j=Object(d.a)(u,2),h=j[0],O=j[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/API/quizzes/responses",{method:"POST",body:JSON.stringify({quizCode:t,uid:n}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),O(s.finalResponse),r(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),console.log(h),i?Object(p.jsx)(f,{}):Object(p.jsxs)("div",{className:"margin-top",children:[Object(p.jsx)("h2",{children:"Responses"}),Object(p.jsx)(Ie,{responses:h})]})},Re=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.uid){e.next=11;break}if(b.auth().currentUser.metadata.lastSignInTime!==b.auth().currentUser.metadata.creationTime){e.next=11;break}return e.prev=2,e.next=5,fetch("/API/users/create",{method:"POST",body:JSON.stringify({uid:n.uid,name:n.name,email:n.email,role:n.role}),headers:{"Content-Type":"application/json"}});case 5:console.log("posted"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("User Creation Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(p.jsx)("div",{className:"App",children:b.auth().currentUser?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(we,{user:n,setUser:s})}),Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/",children:Object(p.jsx)(N,{user:n})}),Object(p.jsx)(u.b,{path:"/dashboard",children:Object(p.jsx)(be,{user:n})}),Object(p.jsx)(u.b,{path:"/create-quiz",children:Object(p.jsx)(re,{user:n})}),Object(p.jsx)(u.b,{path:"/created-succesfully/:quizCode",component:Oe}),Object(p.jsx)(u.b,{path:"/join-quiz",children:Object(p.jsx)(oe,{user:n})}),Object(p.jsx)(u.b,{path:"/attempt-quiz/:quizCode",component:me}),Object(p.jsx)(u.b,{path:"/responses/:quizCode",component:Te}),Object(p.jsx)(u.b,{component:xe})]})]}):Object(p.jsx)(z,{setUser:s})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(de.a,{children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Re,{})})}),document.getElementById("root")),Ue()},84:function(e,t,n){}},[[171,1,2]]]);
//# sourceMappingURL=main.d87b0c5a.chunk.js.map