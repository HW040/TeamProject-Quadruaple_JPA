import{u as m,f as x,i as g,t as h,r as c,s as l,g as j,q as p,e as k,j as e}from"./index-C92yST0r.js";import{S as v}from"./index-D0x00QdK.js";const A=()=>{const t=m(),[i]=x(),s=i.get("access_token"),a=i.get("user_id"),r=i.get("email"),n=i.get("nick_name"),o=i.get("pic"),[,d]=g(h),[u]=c.useState(!1);return c.useEffect(()=>{if(s&&l("accessToken",s),a&&r){const f=j("user");l("user",{...f,userId:a,email:r,isSaveLogin:!1,isSaveEmail:!1,providerType:p.KAKAO})}a&&r&&n&&o&&s&&d({userId:Number(a),name:n,email:r,profilePic:o,role:[k.USER],accessToken:s,providerType:p.KAKAO}),t(s===null?"/signin":"/")},[]),e.jsx("div",{children:e.jsxs(v,{spinning:u,tip:"카카오 로그인 진행 중...",size:"large",children:[e.jsx("h1",{children:"카카오 로그인 준비 중(도흠쌤 버전 아님)"}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("p",{children:["토큰: ",s]}),e.jsxs("p",{children:["userId: ",a]}),e.jsxs("p",{children:["이메일: ",r]}),e.jsxs("p",{children:["이름: ",n]}),e.jsxs("p",{children:["이미지: ",o]})]})]})})};export{A as default};
