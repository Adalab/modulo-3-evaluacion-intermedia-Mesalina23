(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var s=c(1),t=c(7),a=c.n(t),l=c(6),i=c(2),o=(c(13),c(8)),r=c(0);var b=function(){var e=Object(s.useState)(o),n=Object(i.a)(e,2),c=n[0],t=n[1],a=Object(s.useState)(""),b=Object(i.a)(a,2),u=b[0],j=b[1],d=Object(s.useState)(!1),O=Object(i.a)(d,2),p=O[0],h=O[1],m=Object(s.useState)(!1),k=Object(i.a)(m,2),x=k[0],_=k[1],f=Object(s.useState)("all"),N=Object(i.a)(f,2),W=N[0],v=N[1],g=Object(s.useState)(""),C=Object(i.a)(g,2),y=C[0],w=C[1],S=function(e){w(e.target.id),console.log(y),c.splice(y,1),t(Object(l.a)(c))},A=function(e){return!0===e.openOnWeekdays?"si":!1===e.openOnWeekdays?"no":void 0},q=function(e){return!0===e.openOnWeekend?"si":!1===e.openOnWeekend?"no":void 0},T=c.filter((function(e){return"all"===W?c:"week"===W?!0===e.openOnWeekdays:!0===e.openOnWeekend})).map((function(e,n){return Object(r.jsxs)("li",{className:"section__list--li",children:[Object(r.jsx)("i",{className:"far fa-times-circle",onClick:S,id:n}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("label",{children:["#:",n]}),e.name]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{children:"Abierto entre semana:"}),A(e)]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("label",{children:"Abierto el fin de semana:"}),q(e)]})]},n)}));return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("h1",{className:"header__title",children:"Mis clubs"})}),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsxs)("section",{className:"section__search",children:[Object(r.jsx)("p",{className:"section__search__paragraph",children:"\xbfC\xfaales son los Clubs que quieres ver?"}),Object(r.jsxs)("select",{onChange:function(e){console.log(e.target.value),v(e.target.value)},className:"section__search__select",children:[Object(r.jsx)("option",{value:"all",children:"Todos"}),Object(r.jsx)("option",{value:"week",children:"Los que abren entre semana"}),Object(r.jsx)("option",{value:"weekend",children:"Los que abren el fin de semana"})]})]}),Object(r.jsx)("section",{className:"section__list",children:Object(r.jsx)("ul",{className:"section__list",children:T})}),Object(r.jsxs)("section",{className:"section__newclub",children:[Object(r.jsx)("h2",{className:"section__newclub--title",children:"A\xf1adir un nuevo Club"}),Object(r.jsxs)("form",{className:"newClub",children:[Object(r.jsx)("label",{className:"newClub__title",children:"Nombre del club:"}),Object(r.jsx)("input",{className:"newClub__input",type:"text",name:"name",id:"name",placeholder:"Escriba el nombre del grupo",onChange:function(e){j(e.currentTarget.value)},value:u}),Object(r.jsx)("label",{children:"\xbfAbre entre semana?"}),Object(r.jsx)("input",{className:"newClub__input",id:"openWeek",type:"checkbox",name:"openWeek",value:"openWeek",onChange:function(e){h(e.currentTarget.checked)},checked:p}),Object(r.jsx)("label",{children:"\xbfAbre los fines de semana?"}),Object(r.jsx)("input",{className:"newClub__input",id:"openWeend",type:"checkbox",name:"openWeekend",value:"openWeekend",onChange:function(e){_(e.currentTarget.checked)},checked:x}),Object(r.jsx)("input",{className:"newClub__input",type:"submit",value:"A\xf1adir un nuevo club",onClick:function(e){e.preventDefault();var n={name:u,openOnWeekdays:p,openOnWeekend:x};t([].concat(Object(l.a)(c),[n])),j(""),h("false"),_("false")}})]})]})]}),Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("small",{className:"footer__copy",children:"mesalina\xa92021"})})]})};a.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.35052948.chunk.js.map