import{r as n,g as p,a as f,j as e,B as w,e as u,b as v}from"./index-C6bOqW8w.js";import{A as j}from"./index-dauweciz.js";import{c as h}from"./index-CHrNiM1z.js";import{T as b}from"./TitleHeader-1NAGEuNC.js";import{R as N}from"./pic-BhDB7TmH.js";/* empty css                    */import{R as y}from"./index-CeB-_bz0.js";import"./index-Bdhbbfqu.js";import"./index-BpHAwgWG.js";import"./Portal-B5J00w0m.js";import"./useId-CKoVMJQW.js";import"./zoom-CUKaUUev.js";const R=({images:i})=>{const o=i.length,l={1:"grid-cols-1 grid-rows-1",2:"grid-cols-2 grid-rows-1",3:"grid-cols-2 grid-rows-2",4:"grid-cols-2 grid-rows-2",5:"grid-cols-4 grid-rows-2"}[o]||"grid-cols-3 grid-rows-2";return e.jsx("div",{className:`grid gap-2 ${l} w-full h-[400px] rounded-lg overflow-hidden`,children:i.map((c,t)=>{let r="";return o===3&&t===0&&(r="row-span-2"),o===5&&t===0&&(r="row-span-2 col-span-2"),e.jsx("img",{src:c,alt:`image-${t}`,className:`w-full h-full overflow-hidden object-cover ${r}`},t)})})},S=()=>{const[i,o]=n.useState([]),[l,c]=n.useState(0),t=p("accessToken"),r=async()=>{try{const s=await u.get(`/api/review/my?last_index=${l}`,{headers:{Authorization:`Bearer ${t}`}});o(s.data),console.log("✅  getUserReview  res.data.data:",s.data)}catch(s){console.log("✅  getUserReview  error:",s)}},x=async s=>{console.log(s);try{const a=await v.delete(`/api/review/del?review_id=${s.reviewId}`);console.log("리뷰 삭제:",a.data),a.data&&r()}catch(a){console.log("리뷰 삭제:",a)}};n.useEffect(()=>{r()},[l]);const d=f();return e.jsxs("div",{children:[e.jsx(b,{icon:"back",title:"리뷰",onClick:()=>d(-1)}),e.jsxs("div",{className:"px-8",children:[i.map((s,a)=>{const m=s.myReviewPic.map(g=>`${N}${s.reviewId}/${g.pic}`);return e.jsxs("div",{className:"py-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("h1",{className:"flex items-center gap-5 h text-3xl font-bold text-slate-700 mb-3 cursor-pointer",onClick:()=>d(`/contents/index?strfId=${s.strfId}`),children:[s.strfTitle,e.jsx(h,{})]})}),e.jsx("button",{type:"button",className:"px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-[16px]",onClick:()=>x(s),children:"삭제"})]}),e.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[e.jsx(y,{className:"custom-rate flex items-center gap-1",disabled:!0,allowHalf:!0,defaultValue:s.rating}),e.jsx("p",{className:"text-slate-500 text-xl",children:s.reviewWriteDate.split(" ")[0]})]}),e.jsx("p",{className:"text-2xl text-slate-700 mb-10 font-normal",children:s.content}),e.jsx(R,{images:m})]},a)}),e.jsx("div",{className:"flex justify-center mb-14",children:e.jsxs(w,{onClick:()=>c(s=>s+10),children:[e.jsx(j,{}),"더보기"]})})]})]})};export{S as default};
