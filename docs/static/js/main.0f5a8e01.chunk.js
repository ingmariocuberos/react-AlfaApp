(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{15:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(19),s=c.n(n),r=c(8),i=c(10),l=c(3),o=(c(15),Object(a.createContext)(null)),j=c(0),b=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useContext)(o),i=s.validate,l=s.setValidate,b=Object(a.useState)(""),d=Object(r.a)(b,2),u=d[0],m=d[1];Object(a.useEffect)((function(){fetch("/info.JSON").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]);var O=Object(a.useState)(""),x=Object(r.a)(O,2),h=x[0],f=x[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"mt-4 text-center",children:"Bienvenido al Sistema de Valoraci\xf3n Alfa"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row flex",children:Object(j.jsxs)("div",{className:"col-10",children:[Object(j.jsx)("h4",{children:"Accede para dar una calificaci\xf3n"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{children:["Ingresa el c\xf3digo asignado a tu \xe1rea. ",Object(j.jsx)("b",{children:"Para demo ingrese: 1234"})]})}),Object(j.jsxs)("form",{className:"row",children:[Object(j.jsx)("input",{type:"password",className:"access-input",value:h,onChange:function(e){var t=e.target;f(t.value)},required:!0}),c>0&&Object(j.jsx)("small",{children:"Est\xe1 ingresando un c\xf3digo de \xe1rea incorrecto"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-warning access-button mt-1",onClick:function(e){for(var t in e.preventDefault(),u){if(u[t]===h){l(!0);break}l(!1)}!1===i&&n((function(e){return e+1})),f("")},children:"INGRESAR"})]})]})})})]})},d=c(2),u=function(){var e=Object(a.useContext)(o),t=e.infoUser,c=e.setInfoUser;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"text-center mt-5",children:"\xc1rea a Valorar"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("select",{id:"exampleInputEmail1",className:"form-select mt-5","aria-label":"Default select example",value:t.answers.q1,onChange:function(e){var a=e.target;0!==a.value&&c(Object(d.a)(Object(d.a)({},t),{},{answers:Object(d.a)(Object(d.a)({},t.answers),{},{q1:a.value})}))},required:!0,children:[Object(j.jsx)("option",{value:"0",children:"-Selecciona un \xe1rea-"}),Object(j.jsx)("option",{value:"Mantenimiento",children:"Mantenimiento"}),Object(j.jsx)("option",{value:"Almac\xe9n",children:"Almac\xe9n"}),Object(j.jsx)("option",{value:"Calidad",children:"Calidad"}),Object(j.jsx)("option",{value:"Gesti\xf3n Humana",children:"Gesti\xf3n Humana"})]})]})},m=c(12),O=function(e){var t=e.id,c=e.p,a=e.checks,n=e.setChecks;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:!0===a[t]?"flex-item form-check checker-2 check-item selected-check":"flex-item form-check checker-2 check-item",children:[Object(j.jsx)("input",{className:"form-check-input checker-form",type:"checkbox",name:t,value:c,id:"flexCheckChecked".concat(t),onClick:function(e){var t,c=e.target;n(Object(d.a)(Object(d.a)({},a),{},(t={},Object(m.a)(t,c.name,!a[c.name]),Object(m.a)(t,"a"+c.name,a[c.name]?"":c.value),t)))}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked".concat(t),children:c})]})})})},x=function(e){var t=e.checks,c=e.setChecks,n=Object(a.useContext)(o),s=n.infoUser,r=n.setInfoUser;return Object(a.useEffect)((function(){for(var e in t){if(!0===t[e]){r(Object(d.a)(Object(d.a)({},s),{},{answers:Object(d.a)(Object(d.a)({},s.answers),{},{q3:"1"})}));break}r(Object(d.a)(Object(d.a)({},s),{},{answers:Object(d.a)(Object(d.a)({},s.answers),{},{q3:"0"})}))}}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-items-to-be-evaluated",children:["1Atenci\xf3n cort\xe9s y diligente","2Confiabilidad en el resultado","3Calidad en el servicio","4Trabajo en equipo","5Liderazgo","6Tiempos de respuesta","7Proactividad","8Otro"].map((function(e){return Object(j.jsx)(O,{id:e[0],p:e.substr(1),checks:t,setChecks:c},e[0])}))})})},h=function(){var e=Object(a.useContext)(o),t=e.infoUser,c=e.setInfoUser,n=function(e){var a=e.target;c(Object(d.a)(Object(d.a)({},t),{},{answers:Object(d.a)(Object(d.a)({},t.answers),{},{q2:a.value})}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"mt-4 text-center mt-5",children:"Tipo de Valoraci\xf3n"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"container-sm mt-1",children:Object(j.jsx)("div",{className:"row general-opinion-container mt-1",children:[["Positiva","opCont1","inlineRadio1","./img/Estrella.png","estrella evaluacion","1111"],["Negativa","opCont2","inlineRadio2","./img/bad-recomendation.png","mala calificacion","2222"]].map((function(e){return Object(j.jsxs)("div",{className:t.answers.q2===e[0]?"form-check form-check-inline opinion-container col-4 selected-option":"form-check form-check-inline opinion-container col-4",name:e[1],children:[Object(j.jsx)("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:e[2],value:e[0],onClick:n}),Object(j.jsxs)("label",{className:"form-check-label new-form-label",htmlFor:e[2],children:[Object(j.jsx)("img",{src:e[3],alt:e[4],className:"imagen-form"}),e[0]]})]},e[5])}))})})]})},f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"text-center mt-5",children:"Observaciones adicionales"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Observaciones"}),Object(j.jsx)("input",{type:"text",className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",defaultValue:"Ninguna"})]})]})},v=function(){var e=Object(a.useState)({1:!1,a1:"",2:!1,a2:"",3:!1,a3:"",4:!1,a4:"",5:!1,a5:"",6:!1,a6:"",7:!1,a7:"",8:!1,a8:""}),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useContext)(o),i=s.infoUser,l=s.setInfoUser;return Object(a.useEffect)((function(){l(Object(d.a)(Object(d.a)({},i),{},{currentPage:1}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{id:"sending-form",className:"container-sm mt-5 form-user",children:Object(j.jsxs)("div",{className:"mb-3",children:[1===i.currentPage&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{})}),2===i.currentPage&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{})}),3===i.currentPage&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"title text-center",children:"Funci\xf3n sobre la que hace la valoraci\xf3n"}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{checks:c,setChecks:n}),Object(j.jsx)("div",{className:"form-text",children:"Puede escoger una funci\xf3n o varias seg\xfan considere "})]}),4===i.currentPage&&Object(j.jsx)(f,{})]})})})},p=function(){var e=Object(a.useContext)(o).validate;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container-sm",children:[!e&&Object(j.jsx)(b,{}),e&&Object(j.jsx)(v,{})]})})},g=function(){var e=Object(a.useContext)(o),t=e.infoUser,c=e.setInfoUser,n=e.setValidate,s=function(){c(Object(d.a)(Object(d.a)({},t),{},{currentPage:0})),n(!1)};return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{id:"navbar",className:"navbar navbar-expand-md bg-dark navbar-dark",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"navbar-brand",to:"./",onClick:s,children:"Inicio"})}),0!==t.currentPage?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"./",onClick:s,children:"Cerrar sesi\xf3n"})}):Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"./Resultados",children:"Ver Resultados"})})]})})})},N=function(){var e=Object(a.useContext)(o),t=e.infoUser,c=e.setInfoUser;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"bottom-container",children:[0!==t.currentPage&&1!==t.currentPage?Object(j.jsx)("button",{className:"bottom-button col-6",onClick:function(){c(Object(d.a)(Object(d.a)({},t),{},{currentPage:t.currentPage-1}))},children:0!==t.currentPage&&1!==t.currentPage?Object(j.jsxs)("p",{className:"text-animation-1",children:[Object(j.jsx)("i",{className:"fas fa-arrow-circle-left"}),"\xa0\xa0 ATR\xc1S"]}):Object(j.jsx)("p",{})}):Object(j.jsx)("button",{className:"bottom-button col-6",disabled:!0,children:"\xa0"}),0!==t.currentPage?Object(j.jsx)("button",{className:"bottom-button col-6",form:5===t.currentPage?"sending-form":"",onClick:"0"!==t.answers["q".concat(t.currentPage)]?function(){c(Object(d.a)(Object(d.a)({},t),{},{currentPage:t.currentPage+1}))}:void 0,children:0!==t.currentPage?Object(j.jsx)(j.Fragment,{children:4!==t.currentPage?Object(j.jsxs)("p",{className:"text-animation-2",children:["SEGUIR \xa0\xa0",Object(j.jsx)("i",{className:"fas fa-arrow-circle-right "})]}):Object(j.jsxs)("p",{className:"text-animation-2",children:["ENVIAR \xa0\xa0",Object(j.jsx)("i",{className:"far fa-paper-plane"})]})}):Object(j.jsx)("p",{})}):Object(j.jsx)("button",{className:"bottom-button col-6",disabled:!0,children:"\xa0"})]})})},k=function(){return Object(j.jsxs)("div",{className:"contenedor-resultados",children:[Object(j.jsx)("h4",{className:"mt-3 text-center",children:"Resultados Corte Marzo 2021"}),Object(j.jsx)("img",{src:"./img/ranking-valoraciones.png",alt:"ranking valoraci\xf3n \xe1reas alfacer",className:"imagen-resultados position-absolute top-50 start-50 translate-middle"})]})},C=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/resultados",component:k}),Object(j.jsx)(l.a,{exact:!0,path:"/cerrar",component:b}),Object(j.jsx)(l.a,{exact:!0,path:"/",component:p})]}),Object(j.jsx)(N,{})]})})},P=function(){var e=Object(a.useState)({user:"",currentPage:0,answers:{q1:"0",q2:"0",q3:"0",q4:"1"}}),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),l=i[0],b=i[1];return Object(j.jsxs)("div",{className:"container-aplication",children:[Object(j.jsx)("img",{src:"./img/logo-alfa.png",alt:"logo de pisos alfa cer\xe1mica",className:"logo-alfa"}),Object(j.jsx)("div",{className:"first-container position-absolute top-50 start-50 translate-middle",children:Object(j.jsx)(o.Provider,{value:{infoUser:c,setInfoUser:n,validate:l,setValidate:b},children:Object(j.jsx)(C,{})})}),Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("small",{children:"Author: Mario Cuberos Hern\xe1ndez"}),Object(j.jsx)("br",{}),Object(j.jsx)("small",{className:"only-desktop",children:"Todos los derechos reservados \xa9 2021"})]})]})};s.a.render(Object(j.jsx)(P,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0f5a8e01.chunk.js.map