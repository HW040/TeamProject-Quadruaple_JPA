import{g as F,R as P,r as s,i as V,a as H,u as M,j as e,k as O,I as U,B as z,L as W,f as w}from"./index-xgrFPZPY.js";import{t as y}from"./tripAtom-DP9rZLBE.js";import"./SearchItems-C08PfEeJ.js";import{a as Y}from"./pic-Jp7D6aQ0.js";import{a as q,b}from"./index-0zmvCWDh.js";import{F as G}from"./index-BpLsN_5h.js";import{R as I}from"./index-DgCHvtMO.js";import"./TitleHeader-BBWIhXMT.js";import"./index-BjvzURuS.js";import"./index-BSioITWW.js";import"./index-CD9WpMOj.js";import"./searchAtom-BpenQGdG.js";import"./match-B82prKJo.js";import"./index-CbAU0aDH.js";import"./Skeleton-CHBE-S_q.js";import"./Keyframes-D0aOLIVM.js";import"./KeyCode-DNlgD2sM.js";import"./index-iMiZKwHb.js";import"./index-CzARxExx.js";import"./Portal-ErLZGSak.js";import"./useId-Cx8FTpMZ.js";import"./useZIndex-BqtkZtgR.js";import"./zoom-COl-nNlw.js";const p=[{type:null,name:"전체"},{type:"TOUR",name:"관광지"},{type:"STAY",name:"숙소"},{type:"RESTAUR",name:"맛집"},{type:"FEST",name:"축제"}],ve=()=>{F("accessToken");const[d,J]=P(y);s.useEffect(()=>{console.log("trip",d)},[d]),V(y);const[C]=H(),m=parseInt(C.get("tripId"));s.useEffect(()=>{g(!0)},[]);const u=M(),$=t=>{console.log(t),u(`/contents/index?strfId=${t}`)},[E,f]=s.useState(0),[R,h]=s.useState(0);s.useState(0);const[l,x]=s.useState([]),[K,g]=s.useState(!1),[n,_]=s.useState(""),[c,k]=s.useState(""),[j,A]=s.useState(0),[o,T]=s.useState(null),[L,N]=s.useState(!1),[Q,v]=s.useState(!0);s.useEffect(()=>{console.log("searchValue",c)},[c]),s.useEffect(()=>{},[j]);const S=async()=>{try{const a=(await w.get(`/api/search/strf-list-basic?trip_id=${m}&start_idx=${E}`)).data;x([...l,...a.data.list]),a&&(N(!0),f(r=>r+10)),a.data.more===!1&&v(!1)}catch(t){console.log("결과-입력 전:",t)}},i=async(t=null)=>{try{const r=(await w.get(`/api/search/strf-list-word?trip_id=${m}&start_idx=${R}&category=${o}&search_word=${c}`)).data;x([...l,...r.data.list]),r&&(N(!0),h(B=>B+10)),r.data.more===!1&&v(!1)}catch(a){console.log("결과-입력 후:",a)}};return s.useEffect(()=>{S()},[]),s.useEffect(()=>{o!==null&&i()},[o]),l==null||l.list,e.jsx("div",{className:"w-full flex flex-col gap-[30px]",children:L?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full px-[32px] py-[30px] flex items-center gap-[40px] relative ",children:[e.jsx("div",{className:"text-[36px] cursor-pointer",onClick:()=>{u(-1)},children:e.jsx(O,{})}),e.jsx(U,{placeholder:"지금 어디로 여행을 떠나고 싶으신가요?",variant:"borderless",prefix:e.jsx(G,{className:"text-slate-400 text-2xl"}),allowClear:!0,onChange:t=>{_(t.target.value)},onPressEnter:t=>{k(n),x([]),f(0),h(0),g(!0),i()},value:n,className:`w-full h-[60px] px-[12px] ${n?"bg-white":"bg-slate-100"}`})]}),e.jsx("ul",{className:"flex gap-[10px] px-[32px] justify-between items-center",children:p.map((t,a)=>e.jsx("li",{className:`cursor-pointer font-semibold text-[16px] w-[124px] flex justify-center items-center px-[15px] py-[10px] gap-[10px] rounded-[8px] ${a===j?"bg-primary text-white":"bg-white text-slate-500"}`,onClick:()=>{A(a),i(p[a].type),T(p[a].name)},children:t.name},a))}),e.jsx("ul",{className:"px-[32px] py-[30px] flex flex-col gap-[30px]",children:(l==null?void 0:l.length)>0?l==null?void 0:l.map((t,a)=>e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>{$(t.strfId)},children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px] overflow-hidden",children:e.jsx("img",{src:`${Y}${t.strfId}/${t.picTitle}`,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:t.title})}),e.jsx("div",{className:"flex gap-[5px] items-center"}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(I,{disabled:!0,count:1,value:t.ratingIn?1:0,style:{fontSize:"16px"}}),e.jsx("p",{className:"text-[12px] text-slate-500",children:t.averageRating}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",t.ratingCnt.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:t.wishIn?e.jsx(q,{className:"text-secondary3 text-[16px]"}):e.jsx(b,{className:"text-slate-400 text-[16px]"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:t.wishCnt.toLocaleString()})]})]})]},a)):e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px]"}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:"검색 결과가 없습니다."})}),e.jsx("div",{className:"flex gap-[5px] items-center"}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(I,{disabled:!0,count:1,value:0}),e.jsx("p",{className:"text-[12px] text-slate-500"}),e.jsx("p",{className:"text-[12px] text-slate-500"})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:e.jsx(b,{className:"text-slate-400"})}),e.jsx("p",{className:"text-[12px] text-slate-500"})]})]})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(z,{onClick:()=>{c!==""?i():S()},className:"mb-[30px] w-28 rounded-2xl",children:"더보기"})})]}):e.jsx(W,{})})};export{ve as default};
