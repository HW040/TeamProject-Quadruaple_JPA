import{u as n,j as t,e as c}from"./index-CG8vYf2y.js";import{T as d}from"./TitleHeader-HJveUMRb.js";import{F as r}from"./index-BDzwUFU-.js";import{I as i}from"./index-DmNkHtiY.js";import{B as x}from"./button-Qumjrz4E.js";import"./index-CkZhrZUZ.js";import"./iconBase-BliIWTH0.js";import"./index-BK2APq6_.js";import"./index-zbYbnkux.js";import"./index-CWOPntzi.js";import"./context-PnQlGr6A.js";import"./UnstableContext-Cxtoe_qF.js";import"./useSize-s7Cj9DSQ.js";import"./Portal-CztClCTi.js";import"./useCSSVarCls-DVyv07Mk.js";import"./collapse-BbEVqHco.js";import"./zoom-Dx8PYXKT.js";import"./Keyframes-DQFvTPSf.js";import"./genStyleUtils-BNuyCX-p.js";import"./reactNode-Dx8pTwlk.js";import"./index-Dgnr2uwk.js";import"./index-DrSQ8jn4.js";import"./index-E9bkYm6o.js";import"./index-N7vMWSMs.js";import"./useId-D1G52zAA.js";import"./useMergedState-DU3z-VtB.js";import"./ContextIsolator-BLCcxi2B.js";import"./useZIndex-DHIAsWu5.js";import"./useLocale-DGpfybmt.js";import"./ExclamationCircleFilled-B_QXJoCI.js";import"./CloseCircleFilled-BQjJuuZg.js";import"./index-Bo0Apytk.js";import"./BaseInput-CpL4Y_YZ.js";import"./pickAttrs-KpDTT5l5.js";const U=()=>{const o=n(),[a]=r.useForm(),p=e=>{console.log(e),l(e)},l=async e=>{const m={pw:e.pw,newPw:e.newPw};try{const s=await c.patch("/api/user/password",m);console.log("비밀번호 변경",s.data),s.data.code==="200 성공"&&o("/signin")}catch(s){console.log("비밀번호 변경",s)}};return t.jsxs("div",{children:[t.jsx(d,{title:"비밀번호 변경",onClick:()=>{o(-1)},icon:"back"}),t.jsxs("div",{className:"mt-[100px] flex flex-col justify-center items-start w-full px-8 gap-[20px]",children:[t.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"비밀번호 변경"}),t.jsx("div",{className:"w-full",children:t.jsxs(r,{form:a,requiredMark:!1,onFinish:p,className:"w-full flex flex-col gap-[20px]",children:[t.jsx(r.Item,{name:"pw",label:"비밀번호",labelCol:{span:24},rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:t.jsx(i.Password,{placeholder:"현재 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),t.jsx(r.Item,{name:"newPw",label:"새 비밀번호",labelCol:{span:24},rules:[{required:!0,message:"새로운 비밀번호를 입력해주세요."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:t.jsx(i.Password,{placeholder:"새로운 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),t.jsx(r.Item,{children:t.jsx(x,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"비밀번호 변경"})})]})})]})]})};export{U as default};
