(this["webpackJsonpredux-learning"]=this["webpackJsonpredux-learning"]||[]).push([[0],{92:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a(18),o=a.n(r),s=a(10),i=a(32),l=a.n(i);function j(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}var u=function(e){return function(t){setTimeout((function(){t(j())}),1e3*e)}},d=function(e,t,a,n){return function(c){c({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEc7pjEtmDLHIXxdB2xDlnILm-EvmSXgU";n&&(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEc7pjEtmDLHIXxdB2xDlnILm-EvmSXgU"),l.a.post(o,r).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);c(function(e){return{type:"AUTH_SUCCESS",payload:e}}(e.data)),localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),c(u(e.data.expiresIn)),a.push("/")})).catch((function(e){console.log(e),c(function(e){return{type:"AUTH_FAILURE",payload:e}}(e.response.data.error.message))}))}},b=a(95),O=a(25),p=a.n(O),h=a(33),x=a(103),m=a(102),f=a(99),g=a(94),v=a(7),S=a(15);function T(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(s.c)((function(e){return e.authReducer.error})),r=Object(s.b)(),o=Object(v.g)(),i=function(){var a=Object(h.a)(p.a.mark((function a(n){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,r(d(e.current.value,t.current.value,o,true));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(x.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign In"}),a&&Object(n.jsx)(m.a,{variant:"danger",children:a}),Object(n.jsxs)(f.a,{onSubmit:i,children:[Object(n.jsxs)(f.a.Group,{id:"email",children:[Object(n.jsx)(f.a.Label,{children:"Email"}),Object(n.jsx)(f.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(f.a.Group,{id:"password",children:[Object(n.jsx)(f.a.Label,{children:"Password"}),Object(n.jsx)(f.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsx)(g.a,{className:"w-100 mt-3",type:"submit",children:"Log In"}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(S.b,{to:"/forgot-password",children:"Forgot Password"})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-4",children:["Need an account?",Object(n.jsx)(S.b,{to:"/signup",children:"Sign Up"})]})]})]})})})}var y=a(101),C=a(100),w=a(96),I=a(56),E=a(97),k=a(98),D=a(6),R=l.a.create({baseURL:"https://auth-development-690fe-default-rtdb.firebaseio.com/"});var A=function(){return function(e){e({type:"POST_FETCH_START"}),R.get("/posts.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(D.a)(Object(D.a)({},t.data[n]),{},{id:n}));e({type:"POST_FETCH_SUCCESS",payload:a})})).catch((function(t){console.log(t),e(function(e){return{type:"POST_FETCH_FAILURE",payload:e}}(t))}))}};function _(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.postReducer.postData}));Object(c.useEffect)((function(){e(A())}),[e]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)(y.a,{sticky:"top",bg:"primary",variant:"dark",children:[Object(n.jsx)(y.a.Brand,{href:"#home",children:"KattaPost!"}),Object(n.jsx)(y.a.Toggle,{}),Object(n.jsxs)(y.a.Collapse,{className:"justify-content-end",children:[Object(n.jsx)(C.a,{className:"mr-auto"}),Object(n.jsx)(C.a,{children:Object(n.jsx)(C.a.Link,{onClick:function(){e((function(e){e(j())}))},children:Object(n.jsx)(S.b,{to:"/login",style:{color:"#fff"},children:"Logout"})})})]})]}),Object(n.jsx)(b.a,{fluid:!0,children:Object(n.jsxs)(w.a,{className:"mt-3",children:[Object(n.jsx)(I.a,{sm:8,children:Object(n.jsxs)(E.a,{children:[Object(n.jsx)("h1",{children:"Hello, world!"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(n.jsx)("p",{children:Object(n.jsx)(g.a,{variant:"primary",children:"Learn more"})})]})}),Object(n.jsx)(I.a,{sm:4,children:Object(n.jsxs)(f.a,{onSubmit:function(t){t.preventDefault();var a=t.target.name.value,n=t.target.note.value;e(function(e,t){return console.log(e,t),function(a){a({type:"POST_CREATION_START"});var n={name:e,note:t};console.log(n),R.post("/posts.json",n).then((function(e){console.log(e.data),a({type:"POST_CREATION_SUCCESS",postId:e.data,postData:n}),a(A())})).catch((function(e){console.log(e),a(function(e){return{type:"POST_CREATION_FAILURE",payload:e}}(e))}))}}(a,n))},children:[Object(n.jsxs)(f.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(n.jsx)(f.a.Label,{children:"Name"}),Object(n.jsx)(f.a.Control,{name:"name",type:"text",placeholder:"John Doe"})]}),Object(n.jsxs)(f.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(f.a.Label,{children:"Your Post"}),Object(n.jsx)(f.a.Control,{name:"note",as:"textarea",rows:3,placeholder:"Type something..."})]}),Object(n.jsx)(g.a,{className:"w-100 mt-3 mb-5",type:"submit",children:"Create Post"})]})})]})}),Object(n.jsx)(b.a,{fluid:!0,children:Object(n.jsx)(k.a,{children:t.map((function(e){return Object(n.jsx)(x.a,{border:"success",className:"p-3",children:Object(n.jsxs)("blockquote",{className:"blockquote mb-0 card-body",children:[Object(n.jsx)("p",{children:e.note}),Object(n.jsx)("footer",{className:"blockquote-footer",children:Object(n.jsxs)("small",{className:"text-muted",children:["Someone famous in"," ",Object(n.jsx)("cite",{title:"Source Title",children:e.name})]})})]})},e.id)}))})})]})}var U=a(59);function L(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(s.c)((function(e){return e.authReducer.error})),o=Object(c.useState)(""),i=Object(U.a)(o,2),l=i[0],j=i[1],u=Object(v.g)(),b=Object(s.b)(),O=function(){var n=Object(h.a)(p.a.mark((function n(c){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",j("Password do not match!"));case 3:return n.prev=3,j(""),n.next=7,b(d(e.current.value,t.current.value,u,false));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),j("Fail to create account");case 12:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(x.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),l&&Object(n.jsx)(m.a,{variant:"danger",children:l}),r&&Object(n.jsx)(m.a,{variant:"danger",children:r}),Object(n.jsxs)(f.a,{onSubmit:O,children:[Object(n.jsxs)(f.a.Group,{id:"email",children:[Object(n.jsx)(f.a.Label,{children:"Email"}),Object(n.jsx)(f.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(f.a.Group,{id:"password",children:[Object(n.jsx)(f.a.Label,{children:"Password"}),Object(n.jsx)(f.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsxs)(f.a.Group,{id:"password-confirm",children:[Object(n.jsx)(f.a.Label,{children:"Password Confirmation"}),Object(n.jsx)(f.a.Control,{type:"password",ref:a,required:!0})]}),Object(n.jsx)(g.a,{className:"w-100 mt-3",type:"submit",children:"Sign Up"}),Object(n.jsxs)("div",{className:"w-100 text-center mt-4",children:["Already have an account?",Object(n.jsx)(S.b,{to:"/login",children:"Sign In"})]})]})]})})})}function N(){return Object(n.jsx)("div",{children:"About page"})}function P(){return Object(n.jsx)("div",{children:Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(f.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(n.jsx)(f.a.Label,{children:"Name"}),Object(n.jsx)(f.a.Control,{type:"text",placeholder:"John Doe"})]}),Object(n.jsxs)(f.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(f.a.Label,{children:"Your Post"}),Object(n.jsx)(f.a.Control,{as:"textarea",rows:3,placeholder:"Type something..."})]}),Object(n.jsx)(g.a,{className:"w-100 mt-3",type:"submit",children:"Create Post"})]})})}function F(){return Object(n.jsx)("div",{children:"Forgot Password"})}var H=a(60);function G(e){var t=e.component,a=Object(H.a)(e,["component"]),c=Object(s.c)((function(e){return e.authReducer.authData}));console.log({authData:c});var r=localStorage.getItem("token");return Object(n.jsx)(v.b,Object(D.a)(Object(D.a)({},a),{},{render:function(e){return r?Object(n.jsx)(t,Object(D.a)({},e)):Object(n.jsx)(v.a,{to:"/login"})}}))}var q=function(){var e=Object(s.b)();return Object(c.useEffect)((function(){e((function(e){if(localStorage.getItem("token")){var t=new Date(localStorage.getItem("expirationDate"));t<=new Date?e(j()):e(u((t.getTime()-(new Date).getTime())/1e3))}else e(j())}))}),[e]),Object(n.jsx)(S.a,{basename:"/React-Redux-Learning",children:Object(n.jsxs)(v.d,{children:[Object(n.jsx)(G,{exact:!0,path:"/",component:_}),Object(n.jsx)(G,{exact:!0,path:"/about",component:N}),Object(n.jsx)(G,{exact:!0,path:"/post",component:P}),Object(n.jsx)(b.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(v.b,{path:"/login",component:T}),Object(n.jsx)(v.b,{path:"/signup",component:L}),Object(n.jsx)(v.b,{path:"/forgot-password",component:F})]})})]})})},B=a(24),J=a(57),X=a.n(J),z={loading:!1,authData:{},error:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":e=Object(D.a)(Object(D.a)({},e),{},{loading:!0});break;case"AUTH_SUCCESS":e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,authData:t.payload,error:null});break;case"AUTH_FAILURE":e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,authData:{},error:t.payload});break;case"AUTH_LOGOUT":e=Object(D.a)(Object(D.a)({},e),{},{authData:{}});break;default:return e}return e},Y={loading:!1,postData:[],error:null},K={loading:!1,postData:[],error:null},M=a(58),Q=Object(B.d)(Object(B.c)({authReducer:W,postCreationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_CREATION_START":e=Object(D.a)(Object(D.a)({},e),{},{loading:!0});break;case"POST_CREATION_SUCCESS":var a=Object(D.a)(Object(D.a)({},t.postData),{},{id:t.postId});e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,postData:e.postData.concat(a),error:null});break;case"POST_CREATION_FAILURE":e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,postData:[],error:t.payload});break;default:return e}return e},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_FETCH_START":e=Object(D.a)(Object(D.a)({},e),{},{loading:!0});break;case"POST_FETCH_SUCCESS":e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,postData:t.payload,error:null});break;case"POST_FETCH_FAILURE":e=Object(D.a)(Object(D.a)({},e),{},{loading:!1,postData:[],error:t.payload});break;default:return e}return e}}),{},Object(B.a)(M.a,X.a));a(91);o.a.render(Object(n.jsx)(s.a,{store:Q,children:Object(n.jsx)(q,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.03a3d772.chunk.js.map