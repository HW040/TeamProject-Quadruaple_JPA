import{u as $,r as i,j as e,d as B,g as E,e as O,k as M,c as _,I as G,L as z,b as D}from"./index-Ci2k4qFh.js";import{T as F,R as H}from"./TitleHeader-BCewOsTi.js";import{B as V}from"./index-B2xZeB-i.js";import{G as P}from"./index-C0TA0qCe.js";import{S as q}from"./ScheduleDay-Di0NvxY9.js";import{d as J}from"./index-2cOcDuMQ.js";import{S as K,a as Q}from"./swiper-react-C-W1IIhb.js";import{L as U,T as W}from"./pic-Jp7D6aQ0.js";import{B as A}from"./button-wUgNsQBt.js";import"./match-CsZKVY0N.js";import"./index-DQsKIu_Q.js";import"./MarkerClusterer-BvivFUMB.js";import"./tripAtom-CNCsf3EQ.js";import"./index-D8xJHd2S.js";import"./context-n6vFpcCh.js";import"./useSize-D9liuY7G.js";import"./BaseInput-DHAS3V0s.js";import"./useId-D-Ytk-B6.js";import"./ContextIsolator-DxC-8vna.js";import"./Portal-CM-16Ier.js";import"./index-Iuc15HtX.js";import"./CenterModal-BWpKwMNs.js";import"./dayjs.min-BpaY4wBy.js";import"./index-C8XM4V8E.js";import"./index-n5wX8XHp.js";const X=({openSelectTripModal:y,setOpenSelectTripModal:p,tripLocationList:d,tripReviewId:n})=>{const m=$(),h=()=>{m("/schedule/days",{state:{selectedLocationId:d,tripReviewId:n,tripId:c.tripId,title:c.title,from:"/scheduleboard/scheduleDetail"}})},[a,u]=i.useState([]),[r,f]=i.useState(null),[c,x]=i.useState(null);i.useEffect(()=>{console.log("tripListData",a)},[a]),i.useEffect(()=>{console.log("selectedTripData",c)},[c]);const g=async()=>{try{const t=await B.get("/api/trip-list");console.log(t.data);const N=t.data.data.beforeTripList;u(N)}catch(t){console.log("여행 목록 불러오기:",t)}},j=(t,o)=>{f(o),console.log("item",t),x(t)},w=()=>{p(!1)},v=t=>{t.stopPropagation()};return i.useEffect(()=>{g()},[]),e.jsx("div",{className:`fixed top-0 left-[50%] translate-x-[-50%] z-10\r
\r
            max-w-3xl w-full mx-auto h-screen\r
            flex items-end justify-center\r
            bg-[rgba(0,0,0,0.5)]\r
            pb-[70px]\r
            `,onClick:()=>{w()},children:e.jsxs("div",{className:`bg-white w-full \r
                rounded-t-2xl px-[60px] py-[55px]\r
                flex flex-col gap-[20px]\r
                `,onClick:v,children:[e.jsx("h2",{className:"text-[28px] text-slate-700 font-bold",children:"이 일정을 담을 여행을 선택해주세요."}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h3",{className:"text-[18px] text-slate-700 font-semibold",children:"나의 다가오는 여행"}),e.jsx("ul",{className:`flex flex-col px-[10px] py-[20px] gap-[30px]\r
          max-h-[55vh] overflow-y-auto`,children:a==null?void 0:a.map((t,o)=>e.jsxs("li",{className:`flex items-center gap-[20px] px-[20px] py-[10px] rounded-[16px] ${r===o?"bg-slate-200":""}`,onClick:()=>j(t,o),children:[e.jsx("div",{className:"w-[50px] h-[50px] bg-slate-100 rounded-full overflow-hidden",children:e.jsx("img",{src:`${U}${t.locationPic}`,alt:"",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:t.title}),e.jsxs("p",{className:"text-[16px] text-slate-500",children:[e.jsx("span",{children:t.startAt}),e.jsx("span",{children:"-"}),e.jsx("span",{children:t.endAt})]})]})]},o))})]}),e.jsx(A,{type:"primary",htmlType:"button",className:"h-[50px] px-[15px] py-[20px] text-[24px] text-white font-semibold",onClick:h,children:"선택 완료"})]})})},Te=()=>{var b,T,S,k,R,I,L,C;E("accessToken");const{userId:y}=O(M),[p]=_(),d=parseInt(p.get("tripId")),n=parseInt(p.get("TripReviewId")),m=$(),h=()=>{m(-1)},[a,u]=i.useState({}),[r,f]=i.useState({}),[c,x]=i.useState(!1),[g,j]=i.useState(!1),[w,v]=i.useState(!1),t=async()=>{try{const s=await D.get(`/api/trip-review/otherTripReview?tripReviewId=${n}`);console.log("다른 사람 여행기 조회",s.data);const l=s.data;u(l.data),l&&v(!0)}catch(s){console.log("다른 사람 여행기 조회",s)}},o=async()=>{try{const s=await D.get(`/api/trip?trip_id=${d}&signed=false`);console.log("여행확인하기",s.data);const l=s.data.data;f(l),l&&j(!0)}catch(s){console.log(s)}},N=async()=>{const s={userId:y,tripReviewId:n};try{const l=await B.post("/api/trip-review/like",s);console.log("여행기 추천",l.data),l.data.code==="200 성공"&&t()}catch(l){console.log("여행기 추천",l)}};return i.useEffect(()=>{t(),o()},[]),e.jsx("div",{children:g&&w?e.jsxs(e.Fragment,{children:[e.jsx(F,{icon:"back",onClick:h,rightContent:e.jsx(H,{})}),e.jsxs("div",{className:"flex flex-col px-[32px] py-[30px] gap-[30px]",children:[e.jsx(K,{slidesPerView:1,spaceBetween:0,loop:!0,className:"mySwiper w-full h-[406px] overflow-hidden",children:a.length>0?(T=(b=a[0])==null?void 0:b.tripReviewPics)==null?void 0:T.map((s,l)=>e.jsx(Q,{className:"max-w-3xl h-[406px] bg-slate-200",children:e.jsx("img",{src:`${W}${a[0].tripReviewId}/${s}`,alt:"thum",className:"w-full h-full object-cover"})},l)):null}),e.jsx("div",{className:"flex flex-col gap-[10px]",children:e.jsxs("div",{children:[e.jsx("h2",{className:"font-bold text-[36px] text-slate-700",children:(S=a[0])==null?void 0:S.title}),e.jsxs("ul",{className:"flex gap-[10px] items-center",children:[e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(V,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:(k=a[0])==null?void 0:k.recentCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center cursor-pointer",children:[e.jsx(P,{className:"text-slate-300 text-[18px] focus:text-secondary3 transition-all duration-300"}),e.jsx("button",{type:"button",className:"text-slate-500 font-bold text-[14px]",children:(R=a[0])==null?void 0:R.likeCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(G,{className:"text-slate-300 text-[18px]"}),e.jsxs("p",{className:"text-slate-500 font-bold text-[14px]",children:[" ",(I=a[0])==null?void 0:I.scrapCount]})]})]})]})}),e.jsx("div",{children:e.jsx("p",{children:(L=a[0])==null?void 0:L.content})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",className:`w-[50px] h-[50px] flex items-center justify-center
                   bg-slate-100 rounded-full 
                   text-slate-300 text-[20px] hover:text-secondary3
                   transition-all duration-300`,onClick:()=>{N()},children:e.jsx(P,{})})})]}),e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-[50px]",children:(C=r==null?void 0:r.days)==null?void 0:C.map((s,l)=>e.jsx(q,{data:s,newTrip:!1,readOnly:!0},l))})}),e.jsx("div",{className:"px-[32px] mb-[30px]",children:e.jsxs(A,{type:"primary",variant:"filled",className:"flex gap-[10px] py-[10px] h-auto w-full",onClick:()=>x(!0),classNames:"bg-slate-100",children:[e.jsx(J,{className:"w-[30px] h-[30px] text-white"}),e.jsx("span",{className:"font-semibold text-[24px] text-white",children:"내 여행에 담기"})]})}),c&&e.jsx(X,{openSelectTripModal:c,setOpenSelectTripModal:x,tripLocationList:r==null?void 0:r.tripLocationList,tripReviewId:n})]}):e.jsx(z,{})})};export{Te as default};
