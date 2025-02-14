import{R as u,f as g,h as j,g as N,a as b,r as a,b as v,c as C,j as e,F as k}from"./index-vPyaWLeP.js";import{I as y}from"./index-Bq2mCWz2.js";import{s as S}from"./searchAtom-ByNdpfBe.js";import{a as w}from"./pic-Bp3CpqNF.js";import{c as R}from"./match-C6wYgUSM.js";import{R as I}from"./index-DeUtZg3u.js";import{I as P}from"./index-D6yxsJgh.js";import"./context-UlFNglpC.js";import"./useSize-40MQQq3L.js";import"./BaseInput-CdGcV17f.js";import"./button-DbuczX__.js";import"./useMergedState-BlXbDCcH.js";import"./ContextIsolator-CJOux_3c.js";import"./index-CZJbkbXl.js";const z=()=>{u(S);const{userId:o}=g(j),x=N("accessToken"),r=b(),[n,_]=a.useState(!1),[l,i]=a.useState([]),[c,p]=a.useState([]);a.useState();const d=a.useCallback(async()=>{const s="/api/search/popular";try{const t=await v.get(s);i(t.data.data)}catch(t){console.log("인기 검색어",t)}},[]),m=a.useCallback(async()=>{try{const t=(await C.get(`/api/search/basic?user_id=${o}`)).data;p(t.data)}catch(s){console.log("최근 본 검색 결과",s)}},[]),f=s=>{},h=a.useCallback(s=>{console.log("클릭한 인기 검색어:",s),setSearchValue(s.strfName),r(`/contents/index?strfId=${s.strfId}`)},[]);return a.useEffect(()=>{d(),x&&m()},[]),e.jsxs("div",{className:"w-full flex flex-col gap-[30px]",children:[e.jsxs("div",{className:"w-full px-[32px] py-[30px] flex items-center gap-[40px] relative",children:[e.jsx("div",{className:"text-[36px] cursor-pointer",onClick:()=>{r(-1)},children:e.jsx(y,{})}),e.jsx(P,{className:"h-[60px] text-lg rounded-lg gap-[5px]",placeholder:"관광지, 장소, 숙소,맛집을 검색해 보세요",allowClear:!0,prefix:e.jsx(k,{className:"text-slate-400 text-2xl"}),onChange:s=>f(),onClick:()=>HandleSearchPage(),variant:"filled"})]}),n?e.jsx(e.Fragment,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"인기 검색어"}),e.jsx("ul",{className:"flex gap-[20px] flex-wrap",children:l?l==null?void 0:l.map((s,t)=>e.jsx("li",{className:"cursor-pointer text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",onClick:()=>h(s),children:s.strfName},t)):e.jsx("li",{className:"text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",children:"데이터 없음"})})]}),e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"최근 본 목록"}),e.jsx("button",{type:"button",className:"text-slate-400 text-[18px]",onClick:()=>patchRecentListAll(),children:"모두 삭제"})]}),e.jsx("ul",{className:"flex flex-col gap-[20px]",children:c?c==null?void 0:c.map((s,t)=>e.jsxs("li",{className:"flex cursor-pointer items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[15px]",onClick:()=>handleClickList(s),children:[e.jsx("div",{className:"w-[80px] h-[80px] rounded-2xl overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:s.strfPic?`${w}${s.strfId}/${s.strfPic}`:"/images/logo_icon_4.png",alt:s.strfName})}),e.jsxs("div",{className:"flex flex-col gap-[5px] justify-center",children:[e.jsx("div",{className:"text-[18px] text-slate-700 font-semibold",children:s.strfName}),e.jsxs("div",{className:"flex gap-[5px]",children:[e.jsx("span",{className:"text-slate-500 text-[14px]",children:R(s.category)}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:"•"}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:s.locationTitle})]})]})]}),e.jsx("button",{type:"button",className:"text-slate-400 text-[20px]",onClick:()=>patchRecentList(s),children:e.jsx(I,{})})]},t)):null})]})]})]})};export{z as default};
