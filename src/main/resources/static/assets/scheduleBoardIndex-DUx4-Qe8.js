import{u as T,a as B,r as t,j as e,I as w,b}from"./index-Ci2k4qFh.js";import{T as L}from"./TitleHeader-BCewOsTi.js";import{B as R}from"./index-B2xZeB-i.js";import{G as $}from"./index-C0TA0qCe.js";import{P,T as C}from"./pic-Jp7D6aQ0.js";import{B as A}from"./button-wUgNsQBt.js";import"./useSize-D9liuY7G.js";const D=["popular","latest"],Q=()=>{const m=T(),S=()=>{m(-1)},h=s=>{m(`/scheduleboard/scheduleDetail?tripId=${s.tripId}&TripReviewId=${s.tripReviewId}`)};B().state;const j=t.useRef(null),[c,N]=t.useState(0),[M,g]=t.useState([]),[i,I]=t.useState([]),[x,k]=t.useState([]),[p,_]=t.useState(0),[y,v]=t.useState(!0),[r,d]=t.useState(1),[o,u]=t.useState(1);t.useEffect(()=>{console.log("popularPageNumber",r)},[r]),t.useEffect(()=>{console.log("latestPageNum",o)},[o]),t.useEffect(()=>{console.log("추천순",i)},[i]),t.useEffect(()=>{console.log("최신순",x)},[x]);const n=async(s="popular")=>{s==="popular"&&console.log(`${s} 부르는 페이지:`,r),s==="latest"&&console.log(`${s} 부르는 페이지:`,o);try{const l=await b.get(`/api/trip-review/allTripReview?orderType=${s}&pageNumber=${s==="popular"?r:o}`);console.log(`여행기 모두 불러오기 ${s}`,l.data);const a=l.data;s==="popular"&&I([...i,...a.data]),s==="latest"&&k([...x,...a.data]),a.code==="200 성공"&&(s==="popular"?d(f=>f+1):u(f=>f+1)),a.data.length===0?v(!1):v(!0)}catch(l){console.log(`여행기 모두 불러오기 ${s}`,l)}},E=async()=>{try{const s=await b.get("/api/trip-review/allTripReviewCount");console.log(s.data);const l=s.data;_(l.data)}catch(s){console.log("여행기 개수",s)}};return t.useEffect(()=>{n(),E()},[]),e.jsxs("div",{children:[e.jsx(L,{onClick:S,title:"여행기",icon:"back"}),e.jsxs("div",{className:"flex flex-col px-[32px]",children:[e.jsxs("div",{className:"flex justify-between items-center py-[30px]",children:[e.jsxs("ul",{className:"flex gap-[20px] items-center",children:[e.jsx("li",{children:e.jsx("button",{type:"button",value:0,className:`${c===0?"text-primary":"text-slate-300"}`,onClick:()=>{N(0),u(1),d(1),g([]),n("popular")},children:"• 추천순"})}),e.jsx("li",{children:e.jsx("button",{type:"button",value:1,className:`${c===1?"text-primary":"text-slate-300"}`,onClick:()=>{N(1),u(1),d(1),g([]),n("latest")},children:"• 최신순"})})]}),e.jsxs("p",{children:["총 ",p==null?void 0:p.toLocaleString(),"건"]})]}),e.jsxs("ul",{className:"flex flex-col gap-[30px]",children:[c===0&&i.map((s,l)=>{var a;return e.jsxs("li",{className:`flex flex-col gap-[20px] px-[30px] py-[30px] rounded-3xl\r
                        shadow-[0_0_10px_0_rgba(0,0,0,0.1)] cursor-pointer`,onClick:()=>h(s),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden bg-slate-100",children:e.jsx("img",{src:`${P}${s.userId}/${s.profilePic}`,alt:"유저 프로필",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"font-semibold text-[18px] text-slate-700",children:s.name})]}),e.jsxs("ul",{className:"flex gap-[10px] items-center",children:[e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(R,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:s.recentCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx($,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:s.likeCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(w,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:(a=s.scrapCount)==null?void 0:a.toLocaleString()})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsx("div",{className:"w-full h-[322px] bg-slate-200 rounded-2xl overflow-hidden",children:e.jsx("img",{src:s.tripReviewPics!==null?`${C}${s.tripReviewId}/${s.tripReviewPics[0]}`:"",alt:"여행기 사진",className:"w-full h-full object-cover",ref:j})}),e.jsx("h3",{className:"font-semibold text-[24px] text-slate-700",children:s.title}),e.jsx("p",{className:"text-[18px] text-slate-500 line-clamp-3",children:s.content})]})]},l)}),c===1&&x.map((s,l)=>{var a;return e.jsxs("li",{className:`flex flex-col gap-[20px] px-[30px] py-[30px] rounded-3xl\r
                        shadow-[0_0_10px_0_rgba(0,0,0,0.1)] cursor-pointer`,onClick:()=>h(s),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx("div",{className:"w-[50px] h-[50px] rounded-full overflow-hidden bg-slate-100",children:e.jsx("img",{src:`${P}${s.userId}/${s.profilePic}`,alt:"유저 프로필",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"font-semibold text-[18px] text-slate-700",children:s.name})]}),e.jsxs("ul",{className:"flex gap-[10px] items-center",children:[e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(R,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:s.recentCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx($,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:s.likeCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(w,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:(a=s.scrapCount)==null?void 0:a.toLocaleString()})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsx("div",{className:"w-full h-[322px] bg-slate-200 rounded-2xl overflow-hidden",children:e.jsx("img",{src:s.tripReviewPics!==null?`${C}${s.tripReviewId}/${s.tripReviewPics[0]}`:"",alt:"여행기 사진",className:"w-full h-full object-cover",ref:j})}),e.jsx("h3",{className:"font-semibold text-[24px] text-slate-700",children:s.title}),e.jsx("p",{className:"text-[18px] text-slate-500 line-clamp-3",children:s.content})]})]},l)})]}),e.jsx("div",{className:"py-[20px]  flex justify-center items-center",children:y&&e.jsx(A,{variant:"outlined",className:"w-[100px] h-[40px] rounded-3xl",onClick:()=>n(D[c]),children:"더보기"})})]})]})};export{Q as default};
