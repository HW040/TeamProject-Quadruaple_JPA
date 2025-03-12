import{j as e,h as Y,k as G,g as O,u as U,i as W,r as l,ab as F,B as H,m as f}from"./index-B0MRRT76.js";import{T as V}from"./TitleHeader-D2T7x1p9.js";import{u as J}from"./userAtom-qrt3wNag.js";import{d as K}from"./dayjs.min-Dt1KUzc3.js";import{C as I}from"./index-XmNvswlx.js";import{R as Q}from"./index-Ct98QR-N.js";import"./index-CLLbI4EO.js";import"./index-BufLJYNn.js";import"./index-B3-sjDcr.js";import"./Checkbox-3WGeYbAX.js";import"./useId-1HpSO0-f.js";const X=({setShowCouponModal:i,couponList:j,selectCoupon:g,setSelectCoupon:N})=>{const p=()=>{i(!1)},d=s=>{s.stopPropagation()},b=s=>{N(s),i(!1)};return e.jsx("div",{className:`flex items-end justify-end \r
                    max-w-3xl w-full h-full mx-auto  \r
                    bg-[rgba(0,0,0,0.5)] \r
                    fixed bottom-0 left-[50%] translate-x-[-50%] z-50`,onClick:p,children:e.jsxs("div",{className:`\r
          flex flex-col gap-[30px]\r
          px-[20px] py-[30px] w-full\r
          rounded-t-3xl\r
        bg-white`,onClick:d,children:[e.jsx("h2",{className:"text-[24px] text-slate-700 font-semibold",children:"쿠폰 선택"}),e.jsx("ul",{className:"max-h-[411px] overflow-y-scroll",children:j.map((s,h)=>e.jsxs("li",{className:`flex flex-col gap-[20px]\r
                          px-[20px] py-[20px] `,onClick:()=>b(s),children:[e.jsxs("p",{className:"text-[28px] text-primary font-bold",children:[s.discountPer,"%"]}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h4",{className:"text-[20px] text-slate-700 font-semibold",children:s.title}),e.jsx("p",{className:"text-[18px] text-slate-400",children:`${K(s.expiredAt).format("YYYY-MM-DD")} 사용 가능`})]})]},h))})]})})},Z=I.Group,m=[{label:e.jsx("p",{className:"select-none",children:"취소/이용규정 동의"}),value:"required-1"},{label:e.jsx("p",{className:"underline select-none",children:"취소 정책 안내"}),value:"required-2"},{label:e.jsx("p",{className:"underline select-none",children:"개인 정보 수집 및 이용 동의"}),value:"required-3"},{label:e.jsx("p",{className:"underline select-none",children:"개인정보 제 3자 제공"}),value:"required-4"},{label:e.jsx("p",{className:"select-none",children:"마케팅 이용 동의"}),value:"required-5"}],S=[],de=()=>{const[i,j]=Y();i.get("strfId");const[g,N]=G(J),p=O("accessToken"),d=U(),s=W().state;console.log("locationState",s);const h=()=>{d(-1)},[n,P]=l.useState({}),[L,y]=l.useState(!1),[c,A]=l.useState([]),[x,D]=l.useState({}),[_,k]=l.useState(S),[u,w]=l.useState(!1),[B,v]=l.useState(!1),[r,C]=l.useState(0),[q,$]=l.useState((s==null?void 0:s.item.menuPrice)||0);l.useEffect(()=>{console.log("userData",n)},[n]),l.useEffect(()=>{console.log("couponList",c)},[c]),l.useEffect(()=>{console.log("selectCoupon",x),x.discountPer?C(x.discountPer):C(0)},[x]),l.useEffect(()=>{$((s==null?void 0:s.item.menuPrice)-r/100*(s==null?void 0:s.item.menuPrice))},[r]);const E=async()=>{try{const a=(await f.get("/api/user/userInfo",{headers:{Authorization:`Bearer ${p}`}})).data;P(a.data)}catch(t){console.log("회원 정보:",t)}},T=async()=>{try{const t=await f.get("/api/coupon/available-coupons",{headers:{Authorization:`Bearer ${p}`}});console.log("쿠폰 불러오기",t.data);const a=t.data;A(a.data.coupons)}catch(t){console.log("쿠폰 불러오기 결과:",t)}},z=async()=>{const t={strf_id:s.contentData.strfId,check_in:s.dates[0],check_out:s.dates[1],coupon_id:isNaN(parseInt(x.couponId))?null:parseInt(x.couponId),actual_paid:q,menu_id:s.item.menuId,room_id:1};console.log("sendData",t);try{const a=await f.post("/api/booking",{...t},{headers:{Authorization:`Bearer ${g.accessToken}`}});console.log("예약하기 결과",a.data);const o=a.data;o.code==="200 성공"&&o.data?(d("/booking/waiting"),console.log("카카오페이먼트 도전"),window.open(o.data,"_blank","width=500,height=700")||alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요.")):alert("결제 요청 실패")}catch(a){console.log("예약하기 결과:",a)}},M=t=>{k(t),v(t.length>0&&t.length<m.length),w(t.length===m.length)},R=t=>{const a=t.target.checked;k(a?m.map(o=>o.value):[]),v(!1),w(a)};return l.useEffect(()=>{E(),T()},[]),e.jsxs("div",{children:[e.jsx(V,{icon:"back",onClick:h}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:(s==null?void 0:s.contentData.strfTitle)||"업체이름"}),e.jsxs("ul",{className:"flex flex-col gap-[20px]",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"객실명"}),e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700",children:(s==null?void 0:s.item.menuTitle)||"객실명"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"입실일"}),e.jsx("p",{className:"w-1/2 text-[18px] text-primary",children:s==null?void 0:s.dates[0]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"퇴실일"}),e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700",children:s==null?void 0:s.dates[1]})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"인원"}),e.jsxs("p",{className:"w-1/2 text-[18px] text-slate-700",children:[s==null?void 0:s.quantity,"명"]})]})]})]}),e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:"예약자 정보 입력"}),e.jsxs("ul",{className:"flex flex-col gap-[20px]",children:[e.jsxs("li",{className:"flex items-center gap-[50px]",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:"예약자"}),e.jsx("input",{type:"text",className:`flex-grow text-[18px] text-slate-400 \r
                          border border-slate-300 rounded-lg\r
                          px-[10px] py-[10px] outline-none bg-slate-100`,value:(n==null?void 0:n.name)||"이름입니다.",readOnly:!0})]}),e.jsxs("li",{className:"flex items-center gap-[50px]",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:"이메일"}),e.jsx("input",{type:"text",className:`flex-grow text-[18px] text-slate-400 \r
                          border border-slate-300 rounded-lg\r
                          px-[10px] py-[10px] outline-none bg-slate-100`,value:(n==null?void 0:n.email)||"이메일입니다.",readOnly:!0})]})]})]}),e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:"할인쿠폰"}),e.jsxs("button",{type:"button",onClick:()=>{c.length>0&&y(!0)},className:`px-[12px] py-[8px] h-[60px] rounded-lg
            border border-slate-300
            flex items-center justify-between
            ${c.length>0?"bg-white":"bg-slate-200"}`,children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:x.title?x.title:c.length>0?`사용 가능한 쿠폰이 ${c.length}개 있어요.`:"사용 가능한 쿠폰이 없어요."}),e.jsx(F,{className:"text-[18px] text-slate-400"})]})]}),e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:"결제정보"}),e.jsxs("ul",{className:"flex flex-col gap-[20px] w-full",children:[e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:"예약 금액"}),e.jsxs("p",{className:"text-[18px] text-slate-700",children:[((s==null?void 0:s.item.menuPrice)||0).toLocaleString(),"원"]})]}),e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:"쿠폰 할인"}),e.jsx("p",{className:"text-[18px] text-slate-700",children:r===0?"-":`${r}%`})]}),e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-[24px] text-primary font-semibold",children:"총 결제 금액"}),e.jsxs("p",{className:"text-[24px] text-primary font-semibold",children:[e.jsx("span",{children:((s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity)-r/100*((s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity))).toLocaleString()}),"원"]})]})]})]}),e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:"결제수단"}),e.jsxs("div",{className:"flex flex-col gap-[30px] w-full",children:[e.jsx(Q.Group,{name:"radiogroup",defaultValue:1,options:[{value:1,label:e.jsxs("div",{className:"flex items-center gap-[10px] pl-[20px]",children:[e.jsx("img",{src:"/images/booking/kakao.svg",alt:"kakaopay"}),e.jsx("p",{className:"text-[18px] text-slate-700",children:"카카오페이"})]})}],style:{display:"flex",alignItems:"center"}}),e.jsxs("div",{className:"flex flex-col gap-[5px] px-[20px] py-[20px] rounded-lg bg-slate-100",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 select-none",children:"결제혜택"}),e.jsx("p",{className:"text-[16px] text-slate-500 select-none",children:'본 프로모션은 카카오페이 계정 기준 "기간 내 1회, 카카오페이머니 결제"에 한해 페이포인트 적립 가능합니다.'}),e.jsxs("ul",{children:[e.jsxs("li",{className:"flex gap-[5px]",children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:"-"}),e.jsx("p",{className:"text-[16px] text-slate-500 ",children:"포인트 적립은 장바구니 합산 기준으로 최종 결제 금액 4만원 이상 시 자동 적립되며, 카카오페이 톡채널로 안내됩니다. (기간 내 누적 결제금액이 아닌 단건 결제에 한함)"})]}),e.jsxs("li",{className:"flex gap-[5px]",children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:"-"}),e.jsx("p",{className:"text-[16px] text-slate-500",children:"기간 내 선착순 3천명 대상으로 예산 소진 시 별도 고지 없이 조기 종료 될 수 있습니다."})]}),e.jsxs("li",{className:"flex gap-[5px]",children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:"-"}),e.jsx("p",{className:"text-[16px] text-slate-500",children:"예산 소진 시 페이포인트 적립 메세지가 발송되지 않습니다."})]}),e.jsxs("li",{className:"flex gap-[5px]",children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:"-"}),e.jsx("p",{className:"text-[16px] text-slate-500",children:"포인트 사용 유효기간은 적립일로부터 60개월입니다."})]}),e.jsxs("li",{className:"flex gap-[5px]",children:[e.jsx("p",{className:"text-[16px] text-slate-500",children:"-"}),e.jsx("p",{className:"text-[16px] text-slate-500",children:"적립된 포인트는 카카오페이 제휴 가맹점에서 사용 가능합니다."})]})]})]})]})]}),e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"pb-[20px] text-[24px] text-slate-700 font-semibold",children:"취소 정책 및 이용 동의"}),e.jsx(I,{indeterminate:B,onChange:R,checked:u,style:{padding:"20px 10px"},className:"bg-slate-50 px-[10px] py-[20px] rounded-lg",children:e.jsx("span",{className:"text-[18px] text-slate-600 font-semibold select-none",children:"전체 동의합니다."})}),e.jsx(Z,{options:m,value:_,onChange:M,className:"flex flex-col gap-[8px]"}),e.jsx("div",{className:`${u?"text-slate-500":"text-secondary3"}`,children:"* 필수 동의 항목들의 체크가 필요합니다."}),e.jsx(H,{type:"primary",className:"h-[60px] px-[15px] py-[10px] rounded-lg ",onClick:()=>{u&&z()},children:e.jsx("p",{className:"text-[24px] text-white font-semibold",children:"결제하기"})})]})]}),L?e.jsx(X,{setShowCouponModal:y,couponList:c,selectCoupon:x,setSelectCoupon:D}):null]})};export{de as default};
