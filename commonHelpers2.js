import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),r=a.querySelector("input"),l=a.querySelector("textarea");let t=JSON.parse(localStorage.getItem("feedback-form-state"));function m({email:e,message:o}){r.value=e,l.value=o}t?m(t):t={email:"",message:""};a.addEventListener("input",e=>{const o=e.target.name,s=e.target.value;t[o]=s,localStorage.setItem("feedback-form-state",JSON.stringify(t))});a.addEventListener("submit",e=>{r.value&&l.value?(e.preventDefault(),localStorage.removeItem("feedback-form-state"),r.value="",l.value="",console.log(t)):alert("Заповніть усі поля")});
//# sourceMappingURL=commonHelpers2.js.map
