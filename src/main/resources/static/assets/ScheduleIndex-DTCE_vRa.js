import{r as s,g as L,R as P,u as R,a as $,b as u,j as t,I as _,L as M}from"./index-C6bOqW8w.js";import{T as B,R as D}from"./TitleHeader-1NAGEuNC.js";import{A as g}from"./index-dauweciz.js";import{S as f}from"./ScheduleDay-DqBm98zK.js";import{t as O}from"./tripAtom-KNWMMY8l.js";import{M as F}from"./MarkerClusterer-Di7cbYwp.js";import"./dayjs.min-bcHrtij3.js";/* empty css                    */import"./UserTrips-YW7oyP5L.js";import"./swiper-react-BHkTnROn.js";/* empty css               */import{D as H}from"./index-Ih8lDZf1.js";import"./index-CHrNiM1z.js";import"./match-CXPFdkLO.js";import"./pic-BhDB7TmH.js";import"./CenterModal-DgygGMr7.js";import"./index-CeB-_bz0.js";import"./index-Bdhbbfqu.js";import"./index-BpHAwgWG.js";import"./Portal-B5J00w0m.js";import"./useId-CKoVMJQW.js";import"./zoom-CUKaUUev.js";import"./Footer-BY35nOSS.js";import"./index-c3UgXTko.js";import"./index-CGJT_sHg.js";import"./collapse-BbEVqHco.js";import"./index-DuPHOk6l.js";import"./useLocale-CUvuTrqW.js";import"./EllipsisOutlined-DHF4Ow4Q.js";import"./PurePanel-Bla6wsrM.js";const q={day:1,weather:"",schedules:[]},z=()=>{L("accessToken");const[c,h]=P(O);s.useEffect(()=>{console.log("trip",c)},[c]);const[j]=R(),o=parseInt(j.get("tripId"));s.useEffect(()=>{h({...c,nowTripId:o})},[]);const p=$(),b=()=>{p(-1)},y=()=>{p(`/schedule/calculation?tripId=${o}`)},k=()=>{p(`/scheduleboard/schedulePost?tripId=${o}`)},[e,x]=s.useState({}),[C,N]=s.useState(!1),[d,v]=s.useState(e.title),[i,w]=s.useState(""),[S,m]=s.useState(!1);s.useState(!1),s.useEffect(()=>{console.log("여행 데이터",e)},[e]),s.useEffect(()=>{console.log("링크",i)},[i]),s.useEffect(()=>{console.log("title",d)},[d]);const T=s.useCallback(async()=>{try{const a=await u.get(`/api/trip/add-link?trip_id=${o}`);console.log(a.data),w(a.data.data)}catch(a){console.log("초대코드",a)}},[]),I=s.useCallback(async()=>{try{await navigator.clipboard.writeText(i),console.log("복사 성공")}catch(a){console.error("복사 실패:",a)}},[]),A=[{label:t.jsxs("div",{onClick:()=>I(),className:"flex flex-col gap-[10px] items-center justify-center",children:[t.jsx("p",{className:"bg-slate-100 px-[15px] py-[10px] rounded-lg text-slate-600",children:i}),t.jsxs("p",{className:"flex items-center gap-1 border-b border-slate-300",children:[t.jsx("i",{className:"text-slate-500",children:t.jsx(F,{})}),t.jsx("span",{className:"text-slate-500",children:"초대코드 복사하기"})]})]}),key:"0"}],r=s.useCallback(async()=>{try{const a=await u.get(`/api/trip?trip_id=${o}&signed=true`);console.log("여행확인하기",a.data);const n=a.data.data;x(n),n&&N(!0)}catch(a){console.log(a)}},[]),E=()=>{m(!1)};s.useEffect(()=>{r(),e&&v(e.title)},[]);const l=e.days;return t.jsxs("div",{children:[C?t.jsxs(t.Fragment,{children:[t.jsx(B,{icon:"back",onClick:b,rightContent:t.jsx(D,{icon1:!1,icon2:!0,icon3Click:k,icon3:!0,icon4:!0})}),t.jsxs("div",{className:"flex flex-col gap-[30px] py-[30px]",children:[t.jsxs("div",{className:"mt-[60px] flex flex-col gap-[10px] px-[32px]",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{className:"text-[18px] text-slate-700 ",children:[t.jsx("span",{children:e.startAt}),"-",t.jsx("span",{children:e.endAt})]}),t.jsx("button",{type:"button",onClick:()=>m(!0),children:t.jsx(_,{className:"text-[24px] text-slate-300 bg-white"})})]}),t.jsx("h2",{className:"text-[36px] text-slate-700 font-bold",children:e.title}),t.jsx("div",{className:"flex items-center gap-3 mt-5"})]}),t.jsxs("div",{className:"flex items-center gap-[10px] px-[32px]",children:[t.jsx(H,{menu:{items:A},trigger:["click"],overlayStyle:{marginTop:"10px"},children:t.jsxs("button",{type:"button",className:`flex items-center gap-[10px] \r
                  px-[15px] py-[10px] rounded-3xl\r
                  text-white bg-primary`,onClick:T,children:[t.jsx(g,{}),"초대 코드"]})}),t.jsxs("button",{type:"button",className:`flex items-center gap-[10px] \r
                px-[15px] py-[10px] rounded-3xl\r
                text-slate-500 bg-slate-100`,onClick:y,children:[t.jsx(g,{className:"text-slate-300"}),"가계부"]})]}),t.jsx("div",{className:"flex flex-col gap-[50px]",children:l===null?t.jsx(f,{newTrip:!0,data:q,startAt:e==null?void 0:e.startAt,tripId:o,getTrip:r,setTripData:x}):l==null?void 0:l.map((a,n)=>t.jsx(f,{newTrip:!0,data:a,startAt:e==null?void 0:e.startAt,tripId:o,getTrip:r,setTripData:x},n))})]})]}):t.jsx(M,{}),S&&t.jsx(EditTripModal,{tripData:e,handleClickCancle:E,getTrip:r})]})},yt=s.memo(z);export{yt as default};
