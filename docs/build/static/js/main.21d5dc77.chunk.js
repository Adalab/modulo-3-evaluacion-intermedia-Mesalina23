(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(7),s=t.n(a),r=t(8),o=t(3),l=(t(13),t(6)),b=t(0);var i=function(){var e=Object(c.useState)([l]),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),d=i[0],u=i[1],j=Object(c.useState)(""),O=Object(o.a)(j,2),p=O[0],h=O[1],k=Object(c.useState)(""),m=Object(o.a)(k,2),x=m[0],W=m[1],f=function(e){return!0===e.openOnWeekdays?"si":!1===e.openOnWeekdays?"no":void 0},v=function(e){return!0===e.openOnWeekend?"si":!1===e.openOnWeekend?"no":void 0},g=l.map((function(e,n){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("p",{children:[Object(b.jsxs)("label",{children:["#:",n]}),e.name]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Abierto entre semana:"}),f(e)]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{children:"Abierto el fin de semana:"}),v(e)]})]},n)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"Mis clubs"})}),Object(b.jsxs)("main",{children:[Object(b.jsx)("ul",{className:"cardsContainer",children:g}),Object(b.jsx)("h2",{children:"A\xf1adir un nuevo Club"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"Nombre del club:"}),Object(b.jsx)("input",{className:"",type:"text",name:"name",id:"name",placeholder:"Escriba el nombre del grupo",onChange:function(e){u(e.currentTarget.value)},value:d}),Object(b.jsx)("label",{children:"\xbfAbre entre semana?"}),Object(b.jsx)("input",{id:"openWeek",type:"checkbox",name:"openWeek",value:"openWeek",onChange:function(e){console.log(e.currentTarget),h(e.currentTarget.checked)},checked:p}),Object(b.jsx)("label",{children:"\xbfAbre los fines de semana?"}),Object(b.jsx)("input",{id:"openWeend",type:"checkbox",name:"openWeekend",value:"openWeekend",onChange:function(e){console.log(e.currentTarget),W(e.currentTarget.checked)},checked:x}),Object(b.jsx)("input",{className:"",type:"submit",value:"A\xf1adir un nuevo club",onClick:function(e){e.preventDefault();var n={name:d,openOnWeekdays:p,openOnWeekend:x};a([].concat(Object(r.a)(t),[n])),u(""),h(""),W("")}})]})]})]})};s.a.render(Object(b.jsx)(i,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.21d5dc77.chunk.js.map