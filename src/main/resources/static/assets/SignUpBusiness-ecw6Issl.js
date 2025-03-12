import{j as e,l as u,B as w,m as v,a7 as x,r as d,u as C,i as q,T as F}from"./index-B0MRRT76.js";import{F as o}from"./index-BACgOSd_.js";import{C as N}from"./index-XmNvswlx.js";/* empty css                    */import"./motion-C3ndXrQk.js";import"./responsiveObserver-BKroisDd.js";import"./zoom-CJdJ6oGz.js";import"./Portal-Bx82L6C2.js";import"./index-C7M7czQ4.js";import"./index-DEcg2jMK.js";import"./index-CqV8RSPu.js";import"./useId-1HpSO0-f.js";import"./roundedArrow-xQaRV5wd.js";import"./useLocale-plFEjJLX.js";import"./Checkbox-3WGeYbAX.js";const S=({businessNum:s,setBusinessNum:n,setIsDisabled:r})=>{const l=async c=>{var i,m;const h={b_no:[c.replace(/-/g,"")]};try{const t=(m=(i=(await v.post("https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=RaIG2XjONGgUSxI%2FqfvHY3uw3qWNSy252aoDwPk%2FsJoWuTauG%2BO78j2N%2B60Occc3iE8KLqAwOlpFhplf3QUV8Q%3D%3D",h,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).data)==null?void 0:i.data)==null?void 0:m[0];(t==null?void 0:t.b_stt_cd)==="01"?(r(!1),x.success("유효한 사업자 등록번호입니다.")):(r(!0),x.error("존재하지 않는 사업자입니다."))}catch{r(!0),x.error("조회 중 오류가 발생했습니다.")}};return e.jsxs(o.Item,{label:"사업자 등록번호",name:"busiNum",rules:[{required:!0,message:"Please input!"}],layout:"vertical",className:"custom-form-item !text-xs px-4",children:[e.jsx(u,{placeholder:"사업자 번호 입력",value:s,onChange:c=>n(c.target.value),className:"py-[14px] px-3"}),e.jsx(w,{type:"primary",onClick:()=>l(s),className:"text-base font-medium inline-block px-6 !h-auto",children:"조회"})]})},I=({initialEmail:s})=>e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{label:"이름",name:"name",rules:[{required:!0,message:"이름을 입력하세요"}],className:"cust om-form-input",children:e.jsx(u,{placeholder:"이름을 입력하세요",className:"py-[14px] px-3"})}),e.jsx(o.Item,{label:"전화번호",name:"tell",rules:[{pattern:/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,message:"올바른 전화번호 형식"}],className:"custom-form-input",children:e.jsx(u,{placeholder:"휴대폰 번호를 입력하세요",className:"py-[14px] px-3"})}),e.jsx(o.Item,{label:"이메일",name:"email",rules:[{type:"email",message:"이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해주세요."},{required:!0,message:"이메일은 필수 입력 항목입니다."}],className:"custom-form-input",initialValue:s,children:e.jsx(u,{placeholder:"이메일을 입력하세요",className:"py-[14px] px-3",disabled:!0})}),e.jsx(o.Item,{label:"비밀번호",name:"pw",rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],className:"custom-form-input",children:e.jsx(u.Password,{placeholder:"비밀번호를 입력하세요",className:"py-[14px] px-3"})}),e.jsx(o.Item,{label:"비밀번호 확인",name:"pwcheck",dependencies:["pw"],rules:[({getFieldValue:n})=>({validator(r,l){return l===n("pw")?Promise.resolve():Promise.reject("비밀번호 불일치")}})],className:"custom-form-input",children:e.jsx(u.Password,{placeholder:"비밀번호 다시 입력하세요",className:"py-[14px] px-3"})})]}),A=({checkedList:s,setCheckedList:n,setIsRequiredChecked:r})=>{const l=[{label:"[필수] 서비스 이용약관",value:"required-1"},{label:"[필수] 개인정보 수집 및 이용",value:"required-2"},{label:"[필수] 위치서비스 이용",value:"required-3"},{label:"[선택] 이벤트 및 할인 혜택",value:"option"}],c=l.filter(a=>a.value.startsWith("required")).map(a=>a.value),[h,i]=d.useState(!1);d.useEffect(()=>{i(s.length===l.length);const a=c.every(t=>s.includes(t));r(a)},[s,r]);const m=a=>{const t=a.target.checked;i(t),n(t?l.map(g=>g.value):[])};return e.jsxs(e.Fragment,{children:[e.jsx(N,{className:"custom-all-checkbox bg-slate-50 w-full font-medium text-base py-5 px-3 rounded-lg mt-4 text-slate-700",checked:h,onChange:m,children:"전체 동의합니다."}),e.jsx(N.Group,{options:l,value:s,onChange:n,className:"flex flex-col gap-2 w-full px-3 py-4"})]})},J=()=>{const[s,n]=d.useState(""),[r,l]=d.useState(!0),[c,h]=d.useState([]),[i,m]=d.useState(!1),[a]=o.useForm(),t=C(),g=q(),{email:j}=g.state||{},k=async p=>{if(!i)return x.error("필수 약관에 모두 동의해주세요."),{code:"error",data:0};try{const f={email:p.email,pw:p.pw,name:p.name,tell:p.tell,birth:null,busiNum:p.busiNum||s};console.log(f);const b=new FormData;b.append("p",new Blob([JSON.stringify(f)],{type:"application/json"}));const y=await v.post("/api/busi/sign-up",b,{headers:{"Content-Type":"multipart/form-data"}});return console.log("1. 원본 데이터:",f),y.data.data===1?t("/signup/complete",{state:{name:p.name}}):x.error("회원가입에 실패했습니다"),y.data}catch(f){return console.log(f),x.error("회원가입에 실패했습니다"),{code:"error",data:0}}};return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx(F,{title:"회원가입",icon:"back",onClick:()=>t(-1)}),e.jsx(S,{businessNum:s,setBusinessNum:n,setIsDisabled:l}),e.jsxs(o,{form:a,layout:"vertical",disabled:r,className:"px-4",onFinish:k,initialValues:{email:j},children:[e.jsx(I,{handleValuesChange:()=>{},initialEmail:j}),e.jsx(A,{checkedList:c,setCheckedList:h,setIsRequiredChecked:m}),e.jsx(o.Item,{children:e.jsx(w,{type:"primary",htmlType:"submit",disabled:r||!i,className:"w-full text-base py-3 !h-auto mb-12",children:"다음"})})]})]})})};export{J as default};
