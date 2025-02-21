import{u as m,c as p,j as e}from"./index-Ci2k4qFh.js";import{T as f}from"./TitleHeader-BCewOsTi.js";import{r as u,d as c}from"./dayjs.min-BpaY4wBy.js";import"./index-B2xZeB-i.js";var x={exports:{}},_=x.exports,o;function h(){return o||(o=1,function(n,i){(function(s,l){n.exports=l(u())})(_,function(s){function l(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var a=l(s),r={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(t){return t+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(t){return t<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return a.default.locale(r,null,!0),r})}(x)),x.exports}h();c.locale("ko");const y=()=>{const n=m(),i=()=>{n("/")},[s]=p(),l=s.get("user_name"),a=s.get("check_in");console.log(a);const r=s.get("check_out"),t=s.get("personnel"),d=s.get("title");return e.jsxs("div",{children:[e.jsx(f,{icon:"close",title:"결제완료",onClick:i}),e.jsxs("div",{className:"mt-[91px] px-[32px] flex flex-col gap-[31px] items-center mb-[30px]",children:[e.jsx("div",{children:e.jsx("img",{src:"/images/booking/complete.svg",alt:""})}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("p",{className:"text-[36px] text-slate-700 font-semibold",children:[e.jsx("span",{className:"text-primary",children:l}),"님"]}),e.jsx("p",{className:"text-[36px] font-semibold text-slate-700",children:"결제가 완료되었습니다."})]}),e.jsxs("ul",{className:`w-full px-[32px] py-[30px] rounded-2xl\r
                        flex flex-col gap-[20px]\r
                        bg-slate-50`,children:[e.jsxs("li",{className:"flex items-center justify-start",children:[e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"객실명"}),e.jsx("p",{className:"text-[18px] text-slate-700",children:d})]}),e.jsxs("li",{className:"flex items-center justify-start",children:[e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"입실일"}),e.jsx("p",{className:"text-[18px] text-primary",children:c(a).format("YYYY-MM-DD (dd)")})]}),e.jsxs("li",{className:"flex items-center justify-start",children:[e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"퇴실일"}),e.jsx("p",{className:"text-[18px] text-slate-700",children:c(r).format("YYYY-MM-DD (dd)")})]}),e.jsxs("li",{className:"flex items-center justify-start",children:[e.jsx("p",{className:"w-1/2 text-[18px] text-slate-700 font-semibold",children:"인원"}),e.jsxs("p",{className:"text-[18px] text-slate-700",children:["인원 ",t,"명"]})]})]}),e.jsxs("ul",{className:"flex w-full",children:[e.jsxs("li",{className:`border border-slate-100 py-[30px]\r
                        flex flex-col gap-[10px] w-full items-center justify-center`,children:[e.jsx("p",{className:"text-[24px] text-slate-400 font-bold",children:"체크인"}),e.jsx("p",{className:"text-[24px] text-slate-700",children:a})]}),e.jsxs("li",{className:`border border-slate-100 py-[30px]\r
                        flex flex-col gap-[10px] w-full items-center justify-center`,children:[e.jsx("p",{className:"text-[24px] text-slate-400 font-bold",children:"체크아웃"}),e.jsx("p",{className:"text-[24px] text-slate-700",children:r})]})]}),e.jsx("div",{className:"w-full",children:e.jsxs("button",{type:"button",className:`px-[15px] py-[30px] rounded-lg border border-slate-300\r
            text-[24px] font-semibold text-slate-700 w-full`,onClick:()=>{window.close()},children:[" ","결제 완료"," "]})})]})]})};export{y as default};
