import{c as y,r as o,g as I,u as R,j as s,B as d,f as r}from"./index-Cwx4I7Vi.js";import{c as C,d as T}from"./index-DYAbll7n.js";import{u as A}from"./userAtom-BRi4glr0.js";import{a as $}from"./pic-Jp7D6aQ0.js";import{L as B}from"./index-BZHZZTiv.js";import{F as E}from"./Footer-DPaJSkdn.js";/* empty css                    */import{T as M}from"./TitleHeader-B_AiqjDt.js";import{R as O}from"./index-Dbth3xtv.js";import{M as P}from"./index-9DgeRKRk.js";import"./index-CWBfKhhN.js";import"./DockBar-D_7N17-K.js";import"./index-DdsTMqX7.js";import"./searchAtom-BmdxqLfA.js";import"./searchSelector-C_BwjCtz.js";import"./index-CMDg4DXb.js";import"./ExclamationCircleFilled-Dk5DvsjU.js";import"./InfoCircleFilled-BC-KKWD9.js";import"./KeyCode-DNlgD2sM.js";import"./Keyframes-C9Oo5sJi.js";import"./useZIndex-0xqzHicI.js";import"./CloseOutlined-GwKmxF7X.js";import"./index-zy4pIAEY.js";import"./index-C1nPTQe_.js";import"./index-G7OR39Gq.js";import"./index-B7BtatMF.js";import"./Portal-SJsC_TZ1.js";import"./useId-cPQzkJ8H.js";import"./zoom-D6z5ctYs.js";import"./Skeleton-BcDikAYK.js";import"./useLocale-Dwzm1w12.js";import"./index-BBJIY0lA.js";import"./fade-DpeTCdmG.js";import"./PurePanel-I9Hrkew6.js";const ge=()=>{const[f,S]=y(A),[U,h]=o.useState([]),[t,u]=o.useState([]),[j,l]=o.useState(!1),a=I("accessToken"),g=async()=>{try{const e=await r.get("/api/user/userInfo",{headers:{Authorization:`Bearer ${a}`}});h(e.data.data)}catch(e){console.log(e)}};console.log("isRecents",t);const c=async()=>{try{const e=await r.get("/api/recent/list",{headers:{Authorization:`Bearer ${a}`}});u(e.data.data),console.log("✅  isRecents:",e.data.data)}catch(e){console.log("✅  error:",e)}},N=async()=>{try{const e=await r.patch("/api/recent/hide/all",{},{headers:{Authorization:`Bearer ${a}`}});c()}catch(e){console.log("✅  error:",e)}},w=async e=>{console.log("isRecents.strfId",e.strfId,a);const n={strf_id:e.strfId};try{const i=await r.patch(`/api/recent/hide?strf_id=${e.strfId}`,{...n},{headers:{Authorization:`Bearer ${a}`}});console.log("숨기기 결과",i.data),c()}catch(i){console.log("✅  error:",i)}};o.useEffect(()=>{f.accessToken&&g()},[]),o.useEffect(()=>{c()},[]);const b=e=>{console.log("클릭된 아이템",e),p(`/contents/index?strfId=${e.strfId}`)},v={STAY:"숙소",RESTAUR:"맛집",TOUR:"관광지",FEST:"축제"},k=()=>l(!0),m=()=>{N(),l(!1)},x=()=>l(!1),p=R();return s.jsxs("div",{children:[s.jsx(M,{icon:"back",title:"최근 본 목록",onClick:()=>{p(-1)}}),t.length===0?s.jsxs("div",{className:"flex flex-col items-center justify-center h-[calc(100vh-60px)]",children:[s.jsx(B,{className:"w-full text-slate-300 text-8xl mb-5 "}),s.jsx("p",{className:"text-2xl text-slate-400 font-semibold",children:"최근에 본 목록이 없습니다."})]}):s.jsxs("div",{className:"relative flex flex-col gap-5 px-8 my-10",children:[s.jsxs("div",{className:"flex items-center justify-between w-full h-16",children:[s.jsx("span",{className:" text-slate-500 mr-auto ",children:"최근 본 상품은 최대 10개 까지 출력됩니다."}),s.jsx(d,{onClick:k,className:"px-4 h-8",children:"전체 삭제"})]}),t==null?void 0:t.map(e=>s.jsxs("div",{onClick:()=>b(e),className:"relative w-full flex gap-5 cursor-pointer",children:[s.jsx("p",{className:" w-32 h-32 overflow-hidden rounded-lg bg-slate-200",children:s.jsx("img",{src:`${$}${e.strfId}/${e.strfPic}`,alt:e.strfTitle,className:"w-full h-full object-cover"})}),s.jsxs("div",{className:"h-28 mt-2",children:[s.jsx("p",{className:"text-slate-700 text-xl font-semibold",children:e.strfTitle}),s.jsxs("p",{className:"text-sm text-slate-500 mb-3",children:[v[e.category]," ⋅ ",e.locationName]}),s.jsxs("div",{children:[s.jsxs("p",{className:"flex items-center text-slate-400 text-sm gap-1 mb-2",children:[s.jsx(O,{disabled:!0,allowHalf:!0,defaultValue:e.ratingAvg,className:"custom-rate"}),s.jsxs("span",{children:["(",e.reviewCnt,")"]})]}),s.jsxs("p",{className:"flex items-center text-slate-400 text-sm gap-1",children:[e.wishIn?s.jsx(C,{className:"text-secondary3 text-xl"}):s.jsx(T,{className:"text-slate-400 text-xl"}),e.wishCnt]})]})]}),s.jsx("p",{className:"absolute top-3 right-3 text-slate-400",onClick:n=>{n.stopPropagation(),w(e)},children:"삭제"})]},e.strfId))]}),s.jsx(E,{}),s.jsx(P,{open:j,onOk:m,onCancel:x,closable:!1,footer:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(d,{onClick:x,className:"w-full h-14 border-0 rounded-none shadow-none",children:"취소"},"back"),s.jsx("span",{className:"text-slate-300 font-thin",children:"|"}),s.jsx(d,{onClick:m,className:"w-full h-14 border-none shadow-none",children:"확인"},"submit")]})],children:s.jsx("p",{className:"text-lg text-slate-700 font-semibold text-center py-6",children:"최근 본 목록을 전체 삭제하시겠습니까 ?"})})]})};export{ge as default};
