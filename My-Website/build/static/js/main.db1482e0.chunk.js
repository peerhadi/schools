(this.webpackJsonpshiuwhsiwuhsiwhswui=this.webpackJsonpshiuwhsiwuhsiwhswui||[]).push([[0],{71:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(54),s=n.n(i),r=(n(71),n(26)),o=n(7),l=n(5),j=n(104),u=n(1);function d(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(o.g)().id,s="item_"+i;c.a.useEffect((function(){a(window.localStorage.getItem(s))}),[i]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{maxlength:"500",value:n,onChange:function(e){a(e.target.value)}}),Object(u.jsx)("r",{children:JSON.stringify(null!==n?500-n.length:500)+" letters"}),Object(u.jsx)(j.a,{variant:"contained",href:"/",className:"doonnee",onClick:function(){window.localStorage.setItem(s,n)},children:"Done"})]})}var h=n(106),b=n(105),O=n(108),x=n(109),f=n(61),g=n.n(f),m=n(107),v=n(110),p=n(60),w=n.n(p);function S(){return JSON.parse(window.localStorage.getItem("database")||"[]")}function N(e){var t=S();if(function(e,t){return e.find((function(e){return e.email===t}))}(t,e.email))throw Error("Email already exists");t.push(e),function(e){window.localStorage.setItem("database",JSON.stringify(e))}(t)}function y(e,t){var n=S();console.log(n);var a,c=n.find((function(t){return t.email===e}));return c&&(a=c,window.localStorage.setItem("user",JSON.stringify(a))),console.log(c),c&&c.password===t}function C(){var e=window.localStorage.getItem("user");return console.log(e),e?JSON.parse(e):null}function I(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{sx:{flexGrow:1},children:Object(u.jsx)(h.a,{position:"static",children:Object(u.jsxs)(O.a,{children:[Object(u.jsx)(x.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(u.jsx)("a",{href:"/",children:" Write "})}),C()?Object(u.jsx)(j.a,{variant:"contained",color:"inherit",onClick:function(){window.localStorage.removeItem("user"),window.location.reload()},children:"Logout"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{color:"inherit",href:"/SignUp",variant:"contained",children:"signUp"}),Object(u.jsx)(j.a,{color:"inherit",href:"/Login",variant:"contained",children:"Login"})]})]})})}),Object(u.jsx)("span",{className:"Icons",children:Array.from({length:20}).map((function(e,t){return Object(u.jsx)("div",{className:"Row",children:Array.from({length:4}).map((function(e,n){return Object(u.jsxs)(m.a,{children:[Object(u.jsx)(v.a,{href:"/P/".concat(20*t+n),children:Object(u.jsx)(w.a,{})}),Object(u.jsx)(v.a,{id:"view",href:"/View/".concat(20*t+n),children:Object(u.jsx)(g.a,{})})]},n)}))},t)}))})]})}function F(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",name:"email",value:n,onChange:function(e){a(e.target.value)}}),Object(u.jsx)(j.a,{variant:"contained",href:"Login",children:"Forgot"})]})}var L=n(102);function E(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=c.a.useState(""),s=Object(l.a)(i,2),r=s[0],d=s[1],h=c.a.useState(""),b=Object(l.a)(h,2),O=b[0],x=b[1],f=c.a.useState(""),g=Object(l.a)(f,2),m=g[0],v=(g[1],c.a.useState("")),p=Object(l.a)(v,2),w=p[0],S=p[1],N=Object(o.f)();return Object(u.jsxs)("div",{className:"Page  ",children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("input",{type:"text",name:"text",onChange:function(e){a(e.target.value)},value:n,label:"email"}),Object(u.jsx)("input",{type:"password",name:"password",onChange:function(e){d(e.target.value)},value:r,label:"password"}),Object(u.jsxs)("div",{className:"Error",children:[O?Object(u.jsx)(L.a,{severity:"error",children:O}):null,w?Object(u.jsx)(L.a,{severity:"error",children:w}):null]}),Object(u.jsx)(j.a,{className:"Login",variant:"contained",href:m,onClick:function(){var e=!1;!1===/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(n)&&(x("Not A valid Email"),setTimeout((function(){x("")}),5e3),e=!0),r.length<8&&(S("Password should be atleast 8 letters"),setTimeout((function(){S("")}),5e3),e=!0),e||(y(n,r)?N("/"):S("Invalid username or password"))},children:"Submit"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"SignUp",children:Object(u.jsx)("div",{children:"Dont have an account? SignUp"})}),Object(u.jsx)("a",{className:"a",href:"Forgot",children:"Forgot Password"})]})]})}function P(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=c.a.useState(""),s=Object(l.a)(i,2),r=s[0],d=s[1],h=c.a.useState(""),b=Object(l.a)(h,2),O=b[0],x=b[1],f=c.a.useState(""),g=Object(l.a)(f,2),m=g[0],v=(g[1],c.a.useState("")),p=Object(l.a)(v,2),w=p[0],S=p[1],y=c.a.useState(""),C=Object(l.a)(y,2),I=C[0],F=C[1],E=c.a.useState(""),P=Object(l.a)(E,2),T=P[0],k=P[1],J=c.a.useState(""),U=Object(l.a)(J,2),A=U[0],D=U[1],B=c.a.useState(""),G=Object(l.a)(B,2),V=G[0],$=G[1],_=Object(o.f)(),M=5e3;return Object(u.jsxs)("div",{className:"Pag",children:[Object(u.jsx)("h1",{children:"SignUp"}),Object(u.jsx)("input",{type:"text",name:"text",onChange:function(e){F(e.target.value)},value:I}),Object(u.jsx)("input",{type:"text",name:"text",onChange:function(e){S(e.target.value)},value:w}),Object(u.jsx)("input",{type:"email",name:"text",onChange:function(e){a(e.target.value)},value:n}),Object(u.jsx)("input",{type:"password",name:"password",onChange:function(e){d(e.target.value)},value:r}),[O,T,A,V].map((function(e,t){return Object(u.jsx)("div",{className:"Error",children:e?Object(u.jsx)(L.a,{severity:"error",children:e},t):null})})),Object(u.jsx)(j.a,{variant:"contained",href:m,onClick:function(){var e=!1;if(0==/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(n)&&(x("Not A valid Email"),setTimeout((function(){x("")}),M),e=!0),I.length<=0&&($("FirstName should be atleast 1 letter"),setTimeout((function(){$("")}),M),e=!0),w.length<=0&&(D("LastName should be atleast 1 letter"),setTimeout((function(){D("")}),M),e=!0),r.length<8&&(k("password should be atleast 8 letters"),setTimeout((function(){k("")}),M),e=!0),!e)try{N({firstName:I,lastName:w,email:n,password:r}),_("/")}catch(t){k("User already exists")}},children:"Submit"})]})}function T(){var e=Object(o.g)().id,t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s="item_"+e;return c.a.useEffect((function(){i(window.localStorage.getItem(s))}),[e]),console.log(window.localStorage.key(e)),Object(u.jsx)(m.a,{className:"text",children:a})}function k(){return Object(u.jsx)("div",{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/P/:id",element:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/Forgot",element:Object(u.jsx)(F,{})}),Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{path:"/SignUp",element:Object(u.jsx)(P,{})}),Object(u.jsx)(o.a,{path:"/View/:id",element:Object(u.jsx)(T,{})}),Object(u.jsx)(o.a,{path:"/Login",element:Object(u.jsx)(E,{})})]})})})}n(77);var J=function(){return Object(u.jsx)(k,{})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),U()}},[[78,1,2]]]);
//# sourceMappingURL=main.db1482e0.chunk.js.map