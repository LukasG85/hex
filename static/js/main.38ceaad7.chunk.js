(window.webpackJsonphex=window.webpackJsonphex||[]).push([[0],{12:function(e,n,t){e.exports=t.p+"static/media/restaurant4.3f65978f.jpg"},15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(20),t(1)),u=t(3),f=t(4);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var p=function(){var e=Object(r.useState)({name:"",preparation_time:"00:00:00",type:""}),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),c=i[0],p=i[1];return[t,function(e){a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t,Object(f.a)({},e.target.name,"number"===e.target.type?parseInt(e.target.value):e.target.value)))},function(e){e.preventDefault(),!function(){if("00:00:00"!==t.preparation_time&&t.preparation_time.length>5)return!0}()?p(!0):(fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),p(!1),a({name:"",preparation_time:"00:00:00",type:""}))},c]},s=t(2);function m(){var e=Object(c.a)(["\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  color: red;\n  font-size: 20px;\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  height: 45px;\n  width: 80%;\n  margin: 0 auto;\n  background-color: transparent;\n  border: 2px solid #ffffff;\n  font-size: 1.5rem;\n  color: #ffffff;\n  transition: 0.3s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    background-color: #ffffff;\n    color: rgb(30, 30, 30);\n  }\n"]);return d=function(){return e},e}function b(){var e=Object(c.a)(["\n  background-color: rgba(30, 30, 30, 0.95);\n"]);return b=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: block;\n  width: 80%;\n  margin: 25px auto 0;\n  background-color: transparent;\n  height: 30px;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  color: #ffffff;\n  font-size: 1.2rem;\n  &option {\n    background-color: rgba(30, 30, 30, 0.95);\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(c.a)(["\n  display: block;\n  width: 80%;\n  margin: 25px auto 0;\n  background-color: transparent;\n  height: 30px;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  color: #ffffff;\n  font-size: 1.2rem;\n  &::placeholder {\n    color: #ffffff;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(c.a)(["\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-top: 10px;\n  @media (min-width: 576px) {\n    padding-top: 100px;\n  }\n"]);return v=function(){return e},e}function y(){var e=Object(c.a)(['\n  position: relative;\n  padding-bottom: 30px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 2rem;\n  &::after {\n    content: "";\n    position: absolute;\n    height: 1px;\n    width: 50%;\n    bottom: 0;\n    right: 50%;\n    transform: translateX(50%);\n    background-color: #ffffff;\n  }\n  @media (min-width: 576px) {\n    font-size: 2.5rem;\n  }\n']);return y=function(){return e},e}function w(){var e=Object(c.a)(["\n  height: 100vh;\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 50px;\n  background-color: rgba(30, 30, 30, 0.95);\n  font-family: Roboto sans-serif;\n  @media (min-width: 576px) {\n    width: 400px;\n    margin-left: 15vw;\n  }\n  @media (min-width: 768px) {\n    margin-left: 15vw;\n  }\n"]);return w=function(){return e},e}var O=function(){var e=p(),n=Object(u.a)(e,4),t=n[0],r=n[1],o=n[2],i=n[3];return a.a.createElement(x,null,a.a.createElement(j,null,"choose your dish"),a.a.createElement(E,{onSubmit:o,method:"POST"},a.a.createElement("div",null,a.a.createElement(k,{type:"text",name:"name",placeholder:"Dish name",required:!0,value:t.name,onChange:r}),a.a.createElement(k,{type:"time",name:"preparation_time",step:"2",value:t.preparation_time,onChange:r}),a.a.createElement(z,{name:"type",value:t.type,onChange:r,required:!0},a.a.createElement(S,{value:""},"Type"),a.a.createElement(S,{value:"pizza"},"Pizza"),a.a.createElement(S,{value:"soup"},"Soup"),a.a.createElement(S,{value:"sandwich"},"Sandwich")),"pizza"===t.type?a.a.createElement("div",null,a.a.createElement(k,{type:"number",name:"no_of_slices",placeholder:"Number of slices",required:!0,onChange:r}),a.a.createElement(k,{type:"number",name:"diameter",placeholder:"Diameter",step:"0.1",required:!0,onChange:r})):null,"soup"===t.type?a.a.createElement(k,{type:"number",name:"spiciness_scale",placeholder:"Spiciness scale 1-10",min:"1",max:"10",required:!0,onChange:r}):null,"sandwich"===t.type?a.a.createElement(k,{type:"number",name:"slices_of_bread",placeholder:"Number of slices of bread",required:!0,onChange:r}):null),i&&a.a.createElement(_,null,"Enter preparation time, all three fields should be filled in (e.g. 01:15:24)"),a.a.createElement(P,{type:"submit"},"Send")))},x=s.a.div(w()),j=s.a.h1(y()),E=s.a.form(v()),k=s.a.input(g()),z=s.a.select(h()),S=s.a.option(b()),P=s.a.button(d()),_=s.a.p(m()),C=(t(26),t(12)),D=t.n(C);function q(){var e=Object(c.a)(["\n  height: 100vh;\n  background: linear-gradient(\n      0deg,\n      rgba(30, 30, 30, 0.5),\n      rgba(30, 30, 30, 0.5)\n    ),\n    url(",") no-repeat top center;\n  background-size: cover;\n"]);return q=function(){return e},e}var I=function(){return a.a.createElement(T,{bcgImage:D.a},a.a.createElement(O,null))},T=s.a.div(q(),(function(e){return e.bcgImage}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.38ceaad7.chunk.js.map