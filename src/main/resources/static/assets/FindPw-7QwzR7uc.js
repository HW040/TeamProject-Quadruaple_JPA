import{r as o,u as d,m as x,j as s,l as u,B as f}from"./index-B0MRRT76.js";import"./jwt-Df6bKYtW.js";import{T as h}from"./TitleHeader-D2T7x1p9.js";import{F as a}from"./index-BACgOSd_.js";import{S as g}from"./index-Cv6KKT5a.js";import"./index-CLLbI4EO.js";import"./index-BufLJYNn.js";import"./index-B3-sjDcr.js";import"./motion-C3ndXrQk.js";import"./responsiveObserver-BKroisDd.js";import"./zoom-CJdJ6oGz.js";import"./Portal-Bx82L6C2.js";import"./index-C7M7czQ4.js";import"./index-DEcg2jMK.js";import"./index-CqV8RSPu.js";import"./useId-1HpSO0-f.js";import"./roundedArrow-xQaRV5wd.js";import"./useLocale-plFEjJLX.js";const j=()=>{const[r]=a.useForm(),l=d(),[n,i]=o.useState(!1),m=o.useCallback(async e=>{const c={email:e.email};try{const t=await x.post("/api/user/password",c);console.log(t.data),t.data&&(i(!1),l("/signin"))}catch(t){console.log("임시 비번 이메일",t),i(!1)}},[]),p=e=>{i(!0),console.log(e),m(e)};return s.jsxs("div",{children:[s.jsx(h,{title:"임시 비밀번호 발송",onClick:()=>{l("/user/signin")},icon:"back"}),s.jsxs("div",{className:`mt-[100px] flex flex-col justify-center items-start w-full\r
      px-8 gap-[20px]`,children:[s.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"이메일 인증 확인"}),s.jsx("div",{className:"w-full",children:s.jsx(g,{spinning:n,tip:"이메일을 발송중입니다.",children:s.jsxs(a,{form:r,onFinish:p,requiredMark:!1,className:"w-full",style:{position:"relative"},children:[s.jsx(a.Item,{name:"email",label:"이메일",labelCol:{span:24},rules:[{type:"email",message:"이메일 형식을 입력해주세요."},{required:!0,message:"이메일을 입력해주세요."}],className:"w-full",children:s.jsx(u,{placeholder:"이메일을 입력해주세요.",style:{height:"60px",width:"100%"}})}),s.jsx(a.Item,{children:s.jsx(f,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"임시 비밀번호 발송"})})]})})})]})]})},M=o.memo(j);export{M as default};
