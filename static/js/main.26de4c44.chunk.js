(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(9),j=c.n(n),r=c(5),s=(c(14),c(2)),l=c(0),b=c(1),a=function(){return Object(b.jsx)("h1",{children:"Home page"})},h=function(){return Object(b.jsx)("h1",{children:"Page not found"})},i=c(8),o=c(4),d=function(e){var t=e.people;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),Object(b.jsx)("td",{children:e.motherName||"-"}),Object(b.jsx)("td",{children:e.fatherName||"-"})]},e.slug)}))})},p=(c(16),function(e){var t=e.people;return Object(b.jsxs)("table",{className:"people-table",cellPadding:"10",width:"100%",children:[Object(b.jsx)("thead",{className:"people-table-head",children:Object(b.jsxs)("tr",{className:"people-table-row",children:[Object(b.jsx)("th",{children:"name"}),Object(b.jsx)("th",{children:"sex"}),Object(b.jsx)("th",{children:"born"}),Object(b.jsx)("th",{children:"died"}),Object(b.jsx)("th",{children:"mother"}),Object(b.jsx)("th",{children:"father"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(d,{people:t})})]})}),O=function(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],j=function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{father:e.find((function(e){return e.name===t.fatherName}))||null,mother:e.find((function(e){return e.name===t.motherName}))||null})}));n(t)}))};return Object(l.useEffect)((function(){j()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"People page"}),c&&Object(b.jsx)(p,{people:c})]})},x=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(r.b,{to:"/",children:"Home"})," ",Object(b.jsx)(r.b,{to:"/people",children:"People"})]})},u=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",element:Object(b.jsx)(a,{})}),Object(b.jsx)(s.b,{path:"/people",element:Object(b.jsx)(O,{})}),Object(b.jsx)(s.b,{path:"/home",element:Object(b.jsx)(s.a,{to:"/"})}),Object(b.jsx)(s.b,{path:"*",element:Object(b.jsx)(h,{})})]})]})};j.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.26de4c44.chunk.js.map