import{j as s,f as e,B as p,b as c}from"./index-C6bOqW8w.js";import{F as o}from"./index-CGJT_sHg.js";import"./Portal-B5J00w0m.js";import"./collapse-BbEVqHco.js";import"./zoom-CUKaUUev.js";import"./index-DuPHOk6l.js";import"./index-Bdhbbfqu.js";import"./index-BpHAwgWG.js";import"./useId-CKoVMJQW.js";import"./useLocale-CUvuTrqW.js";const I=()=>{const[n]=o.useForm(),a=r=>{console.log(r),i(r)},i=async r=>{const m={pw:r.pw,newPw:r.newPw};try{const t=await c.patch<Ipw>m;console.log("비밀번호 변경",t.data)}catch(t){console.log("비밀번호 변경",t)}};return s.jsxs("div",{children:[s.jsx("h1",{children:"비밀번호 변경"}),s.jsxs(o,{form:n,requiredMark:!1,onFinish:a,children:[s.jsx(o.Item,{name:"pw",label:"비밀번호",children:s.jsx(e.Password,{})}),s.jsx(o.Item,{name:"newPw",label:"새 비밀번호",children:s.jsx(e.Password,{})}),s.jsx(o.Item,{children:s.jsx(p,{type:"primary",htmlType:"submit",children:"비밀번호 변경"})})]})]})};export{I as default};
