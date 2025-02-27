import{af as mt,r as s,S as U,av as _e,W as Fe,H as x,A as F,m as Me,p as ft,l as g,a0 as pt,a1 as bt,I as Ct,Z as ht,$ as St,t as Ve,s as qe,Q as Ue,_ as X,ay as Xe,J as yt,az as se,x as J,X as vt,aA as $t,V as xt,a2 as Bt}from"./index-CG8vYf2y.js";import{i as Et,u as Je,t as Ot,o as Ht}from"./useSize-s7Cj9DSQ.js";import{c as Qe,i as It}from"./reactNode-Dx8pTwlk.js";import{a as wt,g as Ze,m as M,b as jt}from"./genStyleUtils-BNuyCX-p.js";import{g as zt,R as Rt}from"./UnstableContext-Cxtoe_qF.js";const Ye=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],Pt=e=>{const{componentCls:t,colorPrimary:o}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${o})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},Tt=wt("Wave",e=>[Pt(e)]),Ke=`${mt}-wave-target`;function ce(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function Nt(e){const{borderTopColor:t,borderColor:o,backgroundColor:r}=getComputedStyle(e);return ce(t)?t:ce(o)?o:ce(r)?r:null}function de(e){return Number.isNaN(e)?0:e}const Lt=e=>{const{className:t,target:o,component:r,registerUnmount:n}=e,a=s.useRef(null),i=s.useRef(null);s.useEffect(()=>{i.current=n()},[]);const[l,c]=s.useState(null),[d,u]=s.useState([]),[p,m]=s.useState(0),[E,z]=s.useState(0),[R,v]=s.useState(0),[H,B]=s.useState(0),[S,P]=s.useState(!1),L={left:p,top:E,width:R,height:H,borderRadius:d.map(y=>`${y}px`).join(" ")};l&&(L["--wave-color"]=l);function V(){const y=getComputedStyle(o);c(Nt(o));const b=y.position==="static",{borderLeftWidth:$,borderTopWidth:T}=y;m(b?o.offsetLeft:de(-parseFloat($))),z(b?o.offsetTop:de(-parseFloat(T))),v(o.offsetWidth),B(o.offsetHeight);const{borderTopLeftRadius:I,borderTopRightRadius:G,borderBottomLeftRadius:q,borderBottomRightRadius:N}=y;u([I,G,N,q].map(Se=>de(parseFloat(Se))))}if(s.useEffect(()=>{if(o){const y=U(()=>{V(),P(!0)});let b;return typeof ResizeObserver<"u"&&(b=new ResizeObserver(V),b.observe(o)),()=>{U.cancel(y),b==null||b.disconnect()}}},[]),!S)return null;const te=(r==="Checkbox"||r==="Radio")&&(o==null?void 0:o.classList.contains(Ke));return s.createElement(_e,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(y,b)=>{var $,T;if(b.deadline||b.propertyName==="opacity"){const I=($=a.current)===null||$===void 0?void 0:$.parentElement;(T=i.current)===null||T===void 0||T.call(i).then(()=>{I==null||I.remove()})}return!1}},(y,b)=>{let{className:$}=y;return s.createElement("div",{ref:Fe(a,b),className:x(t,$,{"wave-quick":te}),style:L})})},At=(e,t)=>{var o;const{component:r}=t;if(r==="Checkbox"&&!(!((o=e.querySelector("input"))===null||o===void 0)&&o.checked))return;const n=document.createElement("div");n.style.position="absolute",n.style.left="0px",n.style.top="0px",e==null||e.insertBefore(n,e==null?void 0:e.firstChild);const a=zt();let i=null;function l(){return i}i=a(s.createElement(Lt,Object.assign({},t,{target:e,registerUnmount:l})),n)},Gt=(e,t,o)=>{const{wave:r}=s.useContext(F),[,n,a]=Me(),i=ft(d=>{const u=e.current;if(r!=null&&r.disabled||!u)return;const p=u.querySelector(`.${Ke}`)||u,{showEffect:m}=r||{};(m||At)(p,{className:t,token:n,component:o,event:d,hashId:a})}),l=s.useRef(null);return d=>{U.cancel(l.current),l.current=U(()=>{i(d)})}},Wt=e=>{const{children:t,disabled:o,component:r}=e,{getPrefixCls:n}=s.useContext(F),a=s.useRef(null),i=n("wave"),[,l]=Tt(i),c=Gt(a,x(i,l),r);if(g.useEffect(()=>{const u=a.current;if(!u||u.nodeType!==1||o)return;const p=m=>{!Et(m.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")||u.className.includes("-leave")||c(m)};return u.addEventListener("click",p,!0),()=>{u.removeEventListener("click",p,!0)}},[o]),!g.isValidElement(t))return t??null;const d=pt(t)?Fe(bt(t),a):a;return Qe(t,{ref:d})},Dt=e=>{const{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},_t=e=>{const{componentCls:t,antCls:o}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"},[`${t}-item > ${o}-badge-not-a-wrapper:only-child`]:{display:"block"}}}},Ft=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}},Mt=Ze("Space",e=>{const t=M(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[_t(t),Ft(t),Dt(t)]},()=>({}),{resetStyle:!1});var ke=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const Q=s.createContext(null),Vt=(e,t)=>{const o=s.useContext(Q),r=s.useMemo(()=>{if(!o)return"";const{compactDirection:n,isFirstItem:a,isLastItem:i}=o,l=n==="vertical"?"-vertical-":"-";return x(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:a,[`${e}-compact${l}last-item`]:i,[`${e}-compact${l}item-rtl`]:t==="rtl"})},[e,t,o]);return{compactSize:o==null?void 0:o.compactSize,compactDirection:o==null?void 0:o.compactDirection,compactItemClassnames:r}},_o=e=>{const{children:t}=e;return s.createElement(Q.Provider,{value:null},t)},qt=e=>{const{children:t}=e,o=ke(e,["children"]);return s.createElement(Q.Provider,{value:s.useMemo(()=>o,[o])},t)},Fo=e=>{const{getPrefixCls:t,direction:o}=s.useContext(F),{size:r,direction:n,block:a,prefixCls:i,className:l,rootClassName:c,children:d}=e,u=ke(e,["size","direction","block","prefixCls","className","rootClassName","children"]),p=Je(S=>r??S),m=t("space-compact",i),[E,z]=Mt(m),R=x(m,z,{[`${m}-rtl`]:o==="rtl",[`${m}-block`]:a,[`${m}-vertical`]:n==="vertical"},l,c),v=s.useContext(Q),H=Ot(d),B=s.useMemo(()=>H.map((S,P)=>{const L=(S==null?void 0:S.key)||`${m}-item-${P}`;return s.createElement(qt,{key:L,compactSize:p,compactDirection:n,isFirstItem:P===0&&(!v||(v==null?void 0:v.isFirstItem)),isLastItem:P===H.length-1&&(!v||(v==null?void 0:v.isLastItem))},S)}),[r,H,v]);return H.length===0?null:E(s.createElement("div",Object.assign({className:R},u),B))};var Ut=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};const et=s.createContext(void 0),Xt=e=>{const{getPrefixCls:t,direction:o}=s.useContext(F),{prefixCls:r,size:n,className:a}=e,i=Ut(e,["prefixCls","size","className"]),l=t("btn-group",r),[,,c]=Me(),d=s.useMemo(()=>{switch(n){case"large":return"lg";case"small":return"sm";default:return""}},[n]),u=x(l,{[`${l}-${d}`]:d,[`${l}-rtl`]:o==="rtl"},a,c);return s.createElement(et.Provider,{value:n},s.createElement("div",Object.assign({},i,{className:u})))},Ae=/^[\u4E00-\u9FA5]{2}$/,pe=Ae.test.bind(Ae);function Mo(e){return e==="danger"?{danger:!0}:{type:e}}function Ge(e){return typeof e=="string"}function ue(e){return e==="text"||e==="link"}function Jt(e,t){if(e==null)return;const o=t?" ":"";return typeof e!="string"&&typeof e!="number"&&Ge(e.type)&&pe(e.props.children)?Qe(e,{children:e.props.children.split("").join(o)}):Ge(e)?pe(e)?g.createElement("span",null,e.split("").join(o)):g.createElement("span",null,e):It(e)?g.createElement("span",null,e):e}function Qt(e,t){let o=!1;const r=[];return g.Children.forEach(e,n=>{const a=typeof n,i=a==="string"||a==="number";if(o&&i){const l=r.length-1,c=r[l];r[l]=`${c}${n}`}else r.push(n);o=i}),g.Children.map(r,n=>Jt(n,t))}["default","primary","danger"].concat(Ct(Ye));const be=s.forwardRef((e,t)=>{const{className:o,style:r,children:n,prefixCls:a}=e,i=x(`${a}-icon`,o);return g.createElement("span",{ref:t,className:i,style:r},n)}),We=s.forwardRef((e,t)=>{const{prefixCls:o,className:r,style:n,iconClassName:a}=e,i=x(`${o}-loading-icon`,r);return g.createElement(be,{prefixCls:o,className:i,style:n,ref:t},g.createElement(Rt,{className:a}))}),ge=()=>({width:0,opacity:0,transform:"scale(0)"}),me=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),Zt=e=>{const{prefixCls:t,loading:o,existIcon:r,className:n,style:a,mount:i}=e,l=!!o;return r?g.createElement(We,{prefixCls:t,className:n,style:a}):g.createElement(_e,{visible:l,motionName:`${t}-loading-icon-motion`,motionAppear:!i,motionEnter:!i,motionLeave:!i,removeOnLeave:!0,onAppearStart:ge,onAppearActive:me,onEnterStart:ge,onEnterActive:me,onLeaveStart:me,onLeaveActive:ge},(c,d)=>{let{className:u,style:p}=c;const m=Object.assign(Object.assign({},a),p);return g.createElement(We,{prefixCls:t,className:x(n,u),style:m,ref:d})})},De=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),Yt=e=>{const{componentCls:t,fontSize:o,lineWidth:r,groupBorderColor:n,colorErrorHover:a}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(r).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:o}},De(`${t}-primary`,n),De(`${t}-danger`,a)]}};var Kt=["b"],kt=["v"],fe=function(t){return Math.round(Number(t||0))},eo=function(t){if(t instanceof Xe)return t;if(t&&yt(t)==="object"&&"h"in t&&"b"in t){var o=t,r=o.b,n=Ue(o,Kt);return X(X({},n),{},{v:r})}return typeof t=="string"&&/hsb/.test(t)?t.replace(/hsb/,"hsv"):t},_=function(e){ht(o,e);var t=St(o);function o(r){return Ve(this,o),t.call(this,eo(r))}return qe(o,[{key:"toHsbString",value:function(){var n=this.toHsb(),a=fe(n.s*100),i=fe(n.b*100),l=fe(n.h),c=n.a,d="hsb(".concat(l,", ").concat(a,"%, ").concat(i,"%)"),u="hsba(".concat(l,", ").concat(a,"%, ").concat(i,"%, ").concat(c.toFixed(c===0?0:2),")");return c===1?d:u}},{key:"toHsb",value:function(){var n=this.toHsv(),a=n.v,i=Ue(n,kt);return X(X({},i),{},{b:a,a:this.a})}}]),o}(Xe),to=function(t){return t instanceof _?t:new _(t)};to("#1677ff");const oo=(e,t)=>(e==null?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"",ro=(e,t)=>e?oo(e,t):"";let no=function(){function e(t){Ve(this,e);var o;if(this.cleared=!1,t instanceof e){this.metaColor=t.metaColor.clone(),this.colors=(o=t.colors)===null||o===void 0?void 0:o.map(n=>({color:new e(n.color),percent:n.percent})),this.cleared=t.cleared;return}const r=Array.isArray(t);r&&t.length?(this.colors=t.map(n=>{let{color:a,percent:i}=n;return{color:new e(a),percent:i}}),this.metaColor=new _(this.colors[0].color.metaColor)):this.metaColor=new _(r?"":t),(!t||r&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}return qe(e,[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return ro(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:o}=this;return o?`linear-gradient(90deg, ${o.map(n=>`${n.color.toRgbString()} ${n.percent}%`).join(", ")})`:this.metaColor.toRgbString()}},{key:"equals",value:function(o){return!o||this.isGradient()!==o.isGradient()?!1:this.isGradient()?this.colors.length===o.colors.length&&this.colors.every((r,n)=>{const a=o.colors[n];return r.percent===a.percent&&r.color.equals(a.color)}):this.toHexString()===o.toHexString()}}])}();const io=(e,t)=>{const{r:o,g:r,b:n,a}=e.toRgb(),i=new _(e.toRgbString()).onBackground(t).toHsv();return a<=.5?i.v>.5:o*.299+r*.587+n*.114>192},tt=e=>{const{paddingInline:t,onlyIconSize:o}=e;return M(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:o})},ot=e=>{var t,o,r,n,a,i;const l=(t=e.contentFontSize)!==null&&t!==void 0?t:e.fontSize,c=(o=e.contentFontSizeSM)!==null&&o!==void 0?o:e.fontSize,d=(r=e.contentFontSizeLG)!==null&&r!==void 0?r:e.fontSizeLG,u=(n=e.contentLineHeight)!==null&&n!==void 0?n:se(l),p=(a=e.contentLineHeightSM)!==null&&a!==void 0?a:se(c),m=(i=e.contentLineHeightLG)!==null&&i!==void 0?i:se(d),E=io(new no(e.colorBgSolid),"#fff")?"#000":"#fff";return{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:E,contentFontSize:l,contentFontSizeSM:c,contentFontSizeLG:d,contentLineHeight:u,contentLineHeightSM:p,contentLineHeightLG:m,paddingBlock:Math.max((e.controlHeight-l*u)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-c*p)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-d*m)/2-e.lineWidth,0)}},ao=e=>{const{componentCls:t,iconCls:o,fontWeight:r,opacityLoading:n,motionDurationSlow:a,motionEaseInOut:i,marginXS:l,calc:c}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${J(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:vt(),"> a":{color:"currentColor"},"&:not(:disabled)":$t(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${o})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"}},[`&${t}-loading`]:{opacity:n,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map(d=>`${d} ${a} ${i}`).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:c(l).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:c(l).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:c(l).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:c(l).mul(-1).equal()}}}}}},rt=(e,t,o)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":o}}),lo=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),so=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),co=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),Ce=(e,t,o,r,n,a,i,l)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:o||void 0,background:t,borderColor:r||void 0,boxShadow:"none"},rt(e,Object.assign({background:t},i),Object.assign({background:t},l))),{"&:disabled":{cursor:"not-allowed",color:n||void 0,borderColor:a||void 0}})}),uo=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},co(e))}),go=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),Z=(e,t,o,r)=>{const a=r&&["link","text"].includes(r)?go:uo;return Object.assign(Object.assign({},a(e)),rt(e.componentCls,t,o))},Y=(e,t,o,r,n)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:o},Z(e,r,n))}),K=(e,t,o,r,n)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:o},Z(e,r,n))}),k=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),ee=(e,t,o,r)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},Z(e,o,r))}),j=(e,t,o,r,n)=>({[`&${e.componentCls}-variant-${o}`]:Object.assign({color:t,boxShadow:"none"},Z(e,r,n,o))}),mo=e=>{const{componentCls:t}=e;return Ye.reduce((o,r)=>{const n=e[`${r}6`],a=e[`${r}1`],i=e[`${r}5`],l=e[`${r}2`],c=e[`${r}3`],d=e[`${r}7`],u=`0 ${J(e.controlOutlineWidth)} 0 ${e[`${r}1`]}`;return Object.assign(Object.assign({},o),{[`&${t}-color-${r}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:n,boxShadow:u},Y(e,e.colorTextLightSolid,n,{background:i},{background:d})),K(e,n,e.colorBgContainer,{color:i,borderColor:i,background:e.colorBgContainer},{color:d,borderColor:d,background:e.colorBgContainer})),k(e)),ee(e,a,{background:l},{background:c})),j(e,n,"link",{color:i},{color:d})),j(e,n,"text",{color:i,background:a},{color:d,background:c}))})},{})},fo=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},Y(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),k(e)),ee(e,e.colorFillTertiary,{background:e.colorFillSecondary},{background:e.colorFill})),j(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),Ce(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),po=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},K(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),k(e)),ee(e,e.colorPrimaryBg,{background:e.colorPrimaryBgHover},{background:e.colorPrimaryBorder})),j(e,e.colorLink,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),Ce(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),bo=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},Y(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),K(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),k(e)),ee(e,e.colorErrorBg,{background:e.colorErrorBgFilledHover},{background:e.colorErrorBgActive})),j(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),j(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),Ce(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Co=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:fo(e),[`${t}-color-primary`]:po(e),[`${t}-color-dangerous`]:bo(e)},mo(e))},ho=e=>Object.assign(Object.assign(Object.assign(Object.assign({},K(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),j(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),Y(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),j(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),he=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:o,controlHeight:r,fontSize:n,borderRadius:a,buttonPaddingHorizontal:i,iconCls:l,buttonPaddingVertical:c,buttonIconOnlyFontSize:d}=e;return[{[t]:{fontSize:n,height:r,padding:`${J(c)} ${J(i)}`,borderRadius:a,[`&${o}-icon-only`]:{width:r,[l]:{fontSize:d}}}},{[`${o}${o}-circle${t}`]:lo(e)},{[`${o}${o}-round${t}`]:so(e)}]},So=e=>{const t=M(e,{fontSize:e.contentFontSize});return he(t,e.componentCls)},yo=e=>{const t=M(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return he(t,`${e.componentCls}-sm`)},vo=e=>{const t=M(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return he(t,`${e.componentCls}-lg`)},$o=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},xo=Ze("Button",e=>{const t=tt(e);return[ao(t),So(t),yo(t),vo(t),$o(t),Co(t),ho(t),Yt(t)]},ot,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function Bo(e,t,o){const{focusElCls:r,focus:n,borderElCls:a}=o,i=a?"> *":"",l=["hover",n?"focus":null,"active"].filter(Boolean).map(c=>`&:${c} ${i}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[l]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${i}`]:{zIndex:0}})}}function Eo(e,t,o){const{borderElCls:r}=o,n=r?`> ${r}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${n}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${n}, &${e}-sm ${n}, &${e}-lg ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${n}, &${e}-sm ${n}, &${e}-lg ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Oo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:o}=e,r=`${o}-compact`;return{[r]:Object.assign(Object.assign({},Bo(e,r,t)),Eo(o,r,t))}}function Ho(e,t){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Io(e,t){return{[`&-item:not(${t}-first-item):not(${t}-last-item)`]:{borderRadius:0},[`&-item${t}-first-item:not(${t}-last-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${t}-last-item:not(${t}-first-item)`]:{[`&, &${e}-sm, &${e}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function wo(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},Ho(e,t)),Io(e.componentCls,t))}}const jo=e=>{const{componentCls:t,colorPrimaryHover:o,lineWidth:r,calc:n}=e,a=n(r).mul(-1).equal(),i=l=>{const c=`${t}-compact${l?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${c} + ${c}::before`]:{position:"absolute",top:l?a:0,insetInlineStart:l?0:a,backgroundColor:o,content:'""',width:l?"100%":r,height:l?r:"100%"}}};return Object.assign(Object.assign({},i()),i(!0))},zo=jt(["Button","compact"],e=>{const t=tt(e);return[Oo(t),wo(t),jo(t)]},ot);var Ro=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function Po(e){if(typeof e=="object"&&e){let t=e==null?void 0:e.delay;return t=!Number.isNaN(t)&&typeof t=="number"?t:0,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}const To={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["primary","link"],text:["default","text"]},No=g.forwardRef((e,t)=>{var o,r,n,a;const{loading:i=!1,prefixCls:l,color:c,variant:d,type:u,danger:p=!1,shape:m="default",size:E,styles:z,disabled:R,className:v,rootClassName:H,children:B,icon:S,iconPosition:P="start",ghost:L=!1,block:V=!1,htmlType:te="button",classNames:y,style:b={},autoInsertSpace:$,autoFocus:T}=e,I=Ro(e,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),G=u||"default",[q,N]=s.useMemo(()=>{if(c&&d)return[c,d];const h=To[G]||[];return p?["danger",h[1]]:h},[u,c,d,p]),ye=q==="danger"?"dangerous":q,{getPrefixCls:it,direction:ve,button:C}=s.useContext(F),oe=(o=$??(C==null?void 0:C.autoInsertSpace))!==null&&o!==void 0?o:!0,f=it("btn",l),[$e,at,lt]=xo(f),st=s.useContext(xt),A=R??st,ct=s.useContext(et),W=s.useMemo(()=>Po(i),[i]),[w,xe]=s.useState(W.loading),[re,Be]=s.useState(!1),D=s.useRef(null),Ee=Bt(t,D),Oe=s.Children.count(B)===1&&!S&&!ue(N),ne=s.useRef(!0);g.useEffect(()=>(ne.current=!1,()=>{ne.current=!0}),[]),s.useEffect(()=>{let h=null;W.delay>0?h=setTimeout(()=>{h=null,xe(!0)},W.delay):xe(W.loading);function O(){h&&(clearTimeout(h),h=null)}return O},[W]),s.useEffect(()=>{if(!D.current||!oe)return;const h=D.current.textContent||"";Oe&&pe(h)?re||Be(!0):re&&Be(!1)}),s.useEffect(()=>{T&&D.current&&D.current.focus()},[]);const He=g.useCallback(h=>{var O;if(w||A){h.preventDefault();return}(O=e.onClick)===null||O===void 0||O.call(e,h)},[e.onClick,w,A]),{compactSize:dt,compactItemClassnames:Ie}=Vt(f,ve),ut={large:"lg",small:"sm",middle:void 0},we=Je(h=>{var O,le;return(le=(O=E??dt)!==null&&O!==void 0?O:ct)!==null&&le!==void 0?le:h}),je=we&&(r=ut[we])!==null&&r!==void 0?r:"",gt=w?"loading":S,ie=Ht(I,["navigate"]),ze=x(f,at,lt,{[`${f}-${m}`]:m!=="default"&&m,[`${f}-${G}`]:G,[`${f}-dangerous`]:p,[`${f}-color-${ye}`]:ye,[`${f}-variant-${N}`]:N,[`${f}-${je}`]:je,[`${f}-icon-only`]:!B&&B!==0&&!!gt,[`${f}-background-ghost`]:L&&!ue(N),[`${f}-loading`]:w,[`${f}-two-chinese-chars`]:re&&oe&&!w,[`${f}-block`]:V,[`${f}-rtl`]:ve==="rtl",[`${f}-icon-end`]:P==="end"},Ie,v,H,C==null?void 0:C.className),Re=Object.assign(Object.assign({},C==null?void 0:C.style),b),Pe=x(y==null?void 0:y.icon,(n=C==null?void 0:C.classNames)===null||n===void 0?void 0:n.icon),Te=Object.assign(Object.assign({},(z==null?void 0:z.icon)||{}),((a=C==null?void 0:C.styles)===null||a===void 0?void 0:a.icon)||{}),Ne=S&&!w?g.createElement(be,{prefixCls:f,className:Pe,style:Te},S):i&&typeof i=="object"&&i.icon?g.createElement(be,{prefixCls:f,className:Pe,style:Te},i.icon):g.createElement(Zt,{existIcon:!!S,prefixCls:f,loading:w,mount:ne.current}),Le=B||B===0?Qt(B,Oe&&oe):null;if(ie.href!==void 0)return $e(g.createElement("a",Object.assign({},ie,{className:x(ze,{[`${f}-disabled`]:A}),href:A?void 0:ie.href,style:Re,onClick:He,ref:Ee,tabIndex:A?-1:0}),Ne,Le));let ae=g.createElement("button",Object.assign({},I,{type:te,className:ze,style:Re,onClick:He,disabled:A,ref:Ee}),Ne,Le,Ie&&g.createElement(zo,{prefixCls:f}));return ue(N)||(ae=g.createElement(Wt,{component:"Button",disabled:w},ae)),$e(ae)}),nt=No;nt.Group=Xt;nt.__ANT_BUTTON=!0;export{nt as B,Fo as C,_o as N,Ye as P,Ke as T,Wt as W,Vt as a,Mo as c,Oo as g,Mt as u};
