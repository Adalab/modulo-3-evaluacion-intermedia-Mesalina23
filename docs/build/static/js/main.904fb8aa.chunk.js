(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,c){},15:function(e,n,c){"use strict";c.r(n);var s=c(1),t=c(7),a=c.n(t),l=c(6),o=c(2),r=(c(13),c(8)),i=c(0);var j=function(){var e=Object(s.useState)(r),n=Object(o.a)(e,2),c=n[0],t=n[1],a=Object(s.useState)(""),j=Object(o.a)(a,2),b=j[0],d=j[1],u=Object(s.useState)(!1),O=Object(o.a)(u,2),p=O[0],h=O[1],m=Object(s.useState)(!1),k=Object(o.a)(m,2),x=k[0],f=k[1],_=Object(s.useState)("all"),v=Object(o.a)(_,2),W=v[0],N=v[1],g=Object(s.useState)(""),y=Object(o.a)(g,2),C=y[0],w=y[1],S=function(e){w(e.target.id),console.log(C),c.splice(C,1),t(Object(l.a)(c))},A=function(e){return!0===e.openOnWeekdays?"si":!1===e.openOnWeekdays?"no":void 0},q=function(e){return!0===e.openOnWeekend?"si":!1===e.openOnWeekend?"no":void 0},T=c.filter((function(e){return"all"===W?c:"week"===W?!0===e.openOnWeekdays:"weekend"===W?!0===e.openOnWeekend:void 0})).map((function(e,n){return Object(i.jsxs)("li",{className:"section__list--ul--li",children:[Object(i.jsx)("i",{className:"far fa-times-circle",onClick:S,id:n}),Object(i.jsxs)("p",{children:[Object(i.jsxs)("label",{children:["#:",n]}),e.name]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("label",{children:"Abierto entre semana:"}),A(e)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("label",{children:"Abierto el fin de semana:"}),q(e)]})]},n)}));return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{className:"header__title",children:"Mis clubs"})}),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsxs)("section",{className:"section__search",children:[Object(i.jsx)("p",{className:"section__search__paragraph",children:"\xbfC\xfaales son los Clubs que quieres ver?"}),Object(i.jsxs)("select",{onChange:function(e){console.log(e.target.value),N(e.target.value)},className:"section__search__select",children:[Object(i.jsx)("option",{value:"all",children:"Todos"}),Object(i.jsx)("option",{value:"week",children:"Los que abren entre semana"}),Object(i.jsx)("option",{value:"weekend",children:"Los que abren el fin de semana"})]})]}),Object(i.jsx)("section",{className:"section__list",children:Object(i.jsx)("ul",{className:"section__list--ul",children:T})}),Object(i.jsxs)("section",{className:"section__newclub",children:[Object(i.jsx)("h2",{className:"section__newclub__title",children:"A\xf1adir un nuevo Club"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"Nombre del club:"}),Object(i.jsx)("input",{className:"",type:"text",name:"name",id:"name",placeholder:"Escriba el nombre del grupo",onChange:function(e){d(e.currentTarget.value)},value:b}),Object(i.jsx)("label",{children:"\xbfAbre entre semana?"}),Object(i.jsx)("input",{id:"openWeek",type:"checkbox",name:"openWeek",value:"openWeek",onChange:function(e){h(e.currentTarget.checked)},checked:p}),Object(i.jsx)("label",{children:"\xbfAbre los fines de semana?"}),Object(i.jsx)("input",{id:"openWeend",type:"checkbox",name:"openWeekend",value:"openWeekend",onChange:function(e){f(e.currentTarget.checked)},checked:x}),Object(i.jsx)("input",{className:"",type:"submit",value:"A\xf1adir un nuevo club",onClick:function(e){e.preventDefault();var n={name:b,openOnWeekdays:p,openOnWeekend:x};t([].concat(Object(l.a)(c),[n])),d(""),h("false"),f("false")}})]})]})]}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("small",{className:"footer__copy",children:"mesalina\xa92021"})})]})};a.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.904fb8aa.chunk.js.map