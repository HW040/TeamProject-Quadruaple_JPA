import{r as a,I as V,n as sn,l as p,a2 as cn,H as N,_ as I,J as Ce,K as U,o as ce,av as Re,aH as be,ag as dn,p as un,aE as fn,aI as Te,x as E,T as mn,aA as gn,A as oe,a5 as Cn,C as je,m as bn,ak as pn,z as yn}from"./index-CG8vYf2y.js";import{g as vn}from"./UnstableContext-Cxtoe_qF.js";import{a as xn,R as hn}from"./ExclamationCircleFilled-B_QXJoCI.js";import{R as $n}from"./CloseCircleFilled-BQjJuuZg.js";import{R as Sn}from"./InfoCircleFilled-DdebdxrH.js";import{u as On,z as En,C as wn}from"./useZIndex-DHIAsWu5.js";import{P as Pn,g as te}from"./Portal-CztClCTi.js";import{B as de,c as Me}from"./button-Qumjrz4E.js";import{R as ue}from"./CloseOutlined-72i2lCdW.js";import{u as Nn}from"./useId-D1G52zAA.js";import{K as pe}from"./KeyCode-DNlgD2sM.js";import{p as fe}from"./pickAttrs-KpDTT5l5.js";import{C as In}from"./ContextIsolator-BLCcxi2B.js";import{u as Be}from"./useCSSVarCls-DVyv07Mk.js";import{S as Rn}from"./Skeleton-CQ8GiPWg.js";import{u as me}from"./useLocale-DGpfybmt.js";import{g as Tn}from"./index-Dgnr2uwk.js";import{i as jn}from"./fade-DL5WuKh7.js";import{i as Mn}from"./zoom-Dx8PYXKT.js";import{g as Bn,m as zn,b as Hn}from"./genStyleUtils-BNuyCX-p.js";import{w as Fn}from"./PurePanel-DL_M_EeW.js";function An(){const[e,n]=a.useState([]),o=a.useCallback(t=>(n(r=>[].concat(V(r),[t])),()=>{n(r=>r.filter(i=>i!==t))}),[]);return[e,o]}function ie(e){return!!(e!=null&&e.then)}const ze=e=>{const{type:n,children:o,prefixCls:t,buttonProps:r,close:i,autoFocus:d,emitEvent:c,isSilent:s,quitOnNullishReturnValue:g,actionFn:l}=e,u=a.useRef(!1),f=a.useRef(null),[y,x]=sn(!1),C=function(){i==null||i.apply(void 0,arguments)};a.useEffect(()=>{let m=null;return d&&(m=setTimeout(()=>{var h;(h=f.current)===null||h===void 0||h.focus({preventScroll:!0})})),()=>{m&&clearTimeout(m)}},[]);const b=m=>{ie(m)&&(x(!0),m.then(function(){x(!1,!0),C.apply(void 0,arguments),u.current=!1},h=>{if(x(!1,!0),u.current=!1,!(s!=null&&s()))return Promise.reject(h)}))},v=m=>{if(u.current)return;if(u.current=!0,!l){C();return}let h;if(c){if(h=l(m),g&&!ie(h)){u.current=!1,C(m);return}}else if(l.length)h=l(i),u.current=!1;else if(h=l(),!ie(h)){C();return}b(h)};return a.createElement(de,Object.assign({},Me(n),{onClick:v,loading:y,prefixCls:t},r,{ref:f}),o)},ee=p.createContext({}),{Provider:He}=ee,ye=()=>{const{autoFocusButton:e,cancelButtonProps:n,cancelTextLocale:o,isSilent:t,mergedOkCancel:r,rootPrefixCls:i,close:d,onCancel:c,onConfirm:s}=a.useContext(ee);return r?p.createElement(ze,{isSilent:t,actionFn:c,close:function(){d==null||d.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:n,prefixCls:`${i}-btn`},o):null},ve=()=>{const{autoFocusButton:e,close:n,isSilent:o,okButtonProps:t,rootPrefixCls:r,okTextLocale:i,okType:d,onConfirm:c,onOk:s}=a.useContext(ee);return p.createElement(ze,{isSilent:o,type:d||"primary",actionFn:s,close:function(){n==null||n.apply(void 0,arguments),c==null||c(!0)},autoFocus:e==="ok",buttonProps:t,prefixCls:`${r}-btn`},i)};var Fe=a.createContext({});function xe(e,n,o){var t=n;return!t&&o&&(t="".concat(e,"-").concat(o)),t}function he(e,n){var o=e["page".concat(n?"Y":"X","Offset")],t="scroll".concat(n?"Top":"Left");if(typeof o!="number"){var r=e.document;o=r.documentElement[t],typeof o!="number"&&(o=r.body[t])}return o}function Ln(e){var n=e.getBoundingClientRect(),o={left:n.left,top:n.top},t=e.ownerDocument,r=t.defaultView||t.parentWindow;return o.left+=he(r),o.top+=he(r,!0),o}const Dn=a.memo(function(e){var n=e.children;return n},function(e,n){var o=n.shouldUpdate;return!o});var Wn={width:0,height:0,overflow:"hidden",outline:"none"},_n={outline:"none"},Ae=p.forwardRef(function(e,n){var o=e.prefixCls,t=e.className,r=e.style,i=e.title,d=e.ariaId,c=e.footer,s=e.closable,g=e.closeIcon,l=e.onClose,u=e.children,f=e.bodyStyle,y=e.bodyProps,x=e.modalRender,C=e.onMouseDown,b=e.onMouseUp,v=e.holderRef,m=e.visible,h=e.forceRender,S=e.width,w=e.height,$=e.classNames,O=e.styles,j=p.useContext(Fe),R=j.panel,Y=cn(v,R),A=a.useRef(),X=a.useRef();p.useImperativeHandle(n,function(){return{focus:function(){var M;(M=A.current)===null||M===void 0||M.focus({preventScroll:!0})},changeActive:function(M){var k=document,W=k.activeElement;M&&W===X.current?A.current.focus({preventScroll:!0}):!M&&W===A.current&&X.current.focus({preventScroll:!0})}}});var q={};S!==void 0&&(q.width=S),w!==void 0&&(q.height=w);var B=c?p.createElement("div",{className:N("".concat(o,"-footer"),$==null?void 0:$.footer),style:I({},O==null?void 0:O.footer)},c):null,z=i?p.createElement("div",{className:N("".concat(o,"-header"),$==null?void 0:$.header),style:I({},O==null?void 0:O.header)},p.createElement("div",{className:"".concat(o,"-title"),id:d},i)):null,L=a.useMemo(function(){return Ce(s)==="object"&&s!==null?s:s?{closeIcon:g??p.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,g,o]),D=fe(L,!0),G=Ce(s)==="object"&&s.disabled,J=s?p.createElement("button",U({type:"button",onClick:l,"aria-label":"Close"},D,{className:"".concat(o,"-close"),disabled:G}),L.closeIcon):null,K=p.createElement("div",{className:N("".concat(o,"-content"),$==null?void 0:$.content),style:O==null?void 0:O.content},J,z,p.createElement("div",U({className:N("".concat(o,"-body"),$==null?void 0:$.body),style:I(I({},f),O==null?void 0:O.body)},y),u),B);return p.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?d:null,"aria-modal":"true",ref:Y,style:I(I({},r),q),className:N(o,t),onMouseDown:C,onMouseUp:b},p.createElement("div",{ref:A,tabIndex:0,style:_n},p.createElement(Dn,{shouldUpdate:m||h},x?x(K):K)),p.createElement("div",{tabIndex:0,ref:X,style:Wn}))}),Le=a.forwardRef(function(e,n){var o=e.prefixCls,t=e.title,r=e.style,i=e.className,d=e.visible,c=e.forceRender,s=e.destroyOnClose,g=e.motionName,l=e.ariaId,u=e.onVisibleChanged,f=e.mousePosition,y=a.useRef(),x=a.useState(),C=ce(x,2),b=C[0],v=C[1],m={};b&&(m.transformOrigin=b);function h(){var S=Ln(y.current);v(f&&(f.x||f.y)?"".concat(f.x-S.left,"px ").concat(f.y-S.top,"px"):"")}return a.createElement(Re,{visible:d,onVisibleChanged:u,onAppearPrepare:h,onEnterPrepare:h,forceRender:c,motionName:g,removeOnLeave:s,ref:y},function(S,w){var $=S.className,O=S.style;return a.createElement(Ae,U({},e,{ref:n,title:t,ariaId:l,prefixCls:o,holderRef:w,style:I(I(I({},O),r),m),className:N(i,$)}))})});Le.displayName="Content";var Vn=function(n){var o=n.prefixCls,t=n.style,r=n.visible,i=n.maskProps,d=n.motionName,c=n.className;return a.createElement(Re,{key:"mask",visible:r,motionName:d,leavedClassName:"".concat(o,"-mask-hidden")},function(s,g){var l=s.className,u=s.style;return a.createElement("div",U({ref:g,style:I(I({},u),t),className:N("".concat(o,"-mask"),l,c)},i))})},qn=function(n){var o=n.prefixCls,t=o===void 0?"rc-dialog":o,r=n.zIndex,i=n.visible,d=i===void 0?!1:i,c=n.keyboard,s=c===void 0?!0:c,g=n.focusTriggerAfterClose,l=g===void 0?!0:g,u=n.wrapStyle,f=n.wrapClassName,y=n.wrapProps,x=n.onClose,C=n.afterOpenChange,b=n.afterClose,v=n.transitionName,m=n.animation,h=n.closable,S=h===void 0?!0:h,w=n.mask,$=w===void 0?!0:w,O=n.maskTransitionName,j=n.maskAnimation,R=n.maskClosable,Y=R===void 0?!0:R,A=n.maskStyle,X=n.maskProps,q=n.rootClassName,B=n.classNames,z=n.styles,L=a.useRef(),D=a.useRef(),G=a.useRef(),J=a.useState(d),K=ce(J,2),Q=K[0],M=K[1],k=Nn();function W(){be(D.current,document.activeElement)||(L.current=document.activeElement)}function re(){if(!be(D.current,document.activeElement)){var P;(P=G.current)===null||P===void 0||P.focus()}}function H(P){if(P)re();else{if(M(!1),$&&L.current&&l){try{L.current.focus({preventScroll:!0})}catch{}L.current=null}Q&&(b==null||b())}C==null||C(P)}function T(P){x==null||x(P)}var _=a.useRef(!1),ae=a.useRef(),on=function(){clearTimeout(ae.current),_.current=!0},rn=function(){ae.current=setTimeout(function(){_.current=!1})},ge=null;Y&&(ge=function(le){_.current?_.current=!1:D.current===le.target&&T(le)});function an(P){if(s&&P.keyCode===pe.ESC){P.stopPropagation(),T(P);return}d&&P.keyCode===pe.TAB&&G.current.changeActive(!P.shiftKey)}a.useEffect(function(){d&&(M(!0),W())},[d]),a.useEffect(function(){return function(){clearTimeout(ae.current)}},[]);var ln=I(I(I({zIndex:r},u),z==null?void 0:z.wrapper),{},{display:Q?null:"none"});return a.createElement("div",U({className:N("".concat(t,"-root"),q)},fe(n,{data:!0})),a.createElement(Vn,{prefixCls:t,visible:$&&d,motionName:xe(t,O,j),style:I(I({zIndex:r},A),z==null?void 0:z.mask),maskProps:X,className:B==null?void 0:B.mask}),a.createElement("div",U({tabIndex:-1,onKeyDown:an,className:N("".concat(t,"-wrap"),f,B==null?void 0:B.wrapper),ref:D,onClick:ge,style:ln},y),a.createElement(Le,U({},n,{onMouseDown:on,onMouseUp:rn,ref:G,closable:S,ariaId:k,prefixCls:t,visible:d&&Q,onClose:T,onVisibleChanged:H,motionName:xe(t,v,m)}))))},De=function(n){var o=n.visible,t=n.getContainer,r=n.forceRender,i=n.destroyOnClose,d=i===void 0?!1:i,c=n.afterClose,s=n.panelRef,g=a.useState(o),l=ce(g,2),u=l[0],f=l[1],y=a.useMemo(function(){return{panel:s}},[s]);return a.useEffect(function(){o&&f(!0)},[o]),!r&&d&&!u?null:a.createElement(Fe.Provider,{value:y},a.createElement(Pn,{open:o||r||u,autoDestroy:!1,getContainer:t,autoLock:o||u},a.createElement(qn,U({},n,{destroyOnClose:d,afterClose:function(){c==null||c(),f(!1)}}))))};De.displayName="Dialog";function $e(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function Se(e){const{closable:n,closeIcon:o}=e||{};return p.useMemo(()=>{if(!n&&(n===!1||o===!1||o===null))return!1;if(n===void 0&&o===void 0)return null;let t={closeIcon:typeof o!="boolean"&&o!==null?o:void 0};return n&&typeof n=="object"&&(t=Object.assign(Object.assign({},t),n)),t},[n,o])}function Oe(){const e={};for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return o.forEach(r=>{r&&Object.keys(r).forEach(i=>{r[i]!==void 0&&(e[i]=r[i])})}),e}const Gn={};function Un(e,n){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gn;const t=Se(e),r=Se(n),i=typeof t!="boolean"?!!(t!=null&&t.disabled):!1,d=p.useMemo(()=>Object.assign({closeIcon:p.createElement(ue,null)},o),[o]),c=p.useMemo(()=>t===!1?!1:t?Oe(d,r,t):r===!1?!1:r?Oe(d,r):d.closable?d:!1,[t,r,d]);return p.useMemo(()=>{if(c===!1)return[!1,null,i];const{closeIconRender:s}=d,{closeIcon:g}=c;let l=g;if(l!=null){s&&(l=s(g));const u=fe(c,!0);Object.keys(u).length&&(l=p.isValidElement(l)?p.cloneElement(l,u):p.createElement("span",Object.assign({},u),l))}return[!0,l,i]},[c,d])}const Xn=()=>dn()&&window.document.documentElement;function Ee(){}const Kn=a.createContext({add:Ee,remove:Ee});function Qn(e){const n=a.useContext(Kn),o=a.useRef(null);return un(r=>{if(r){const i=e?r.querySelector(e):r;n.add(i),o.current=i}else n.remove(o.current)})}const we=()=>{const{cancelButtonProps:e,cancelTextLocale:n,onCancel:o}=a.useContext(ee);return p.createElement(de,Object.assign({onClick:o},e),n)},Pe=()=>{const{confirmLoading:e,okButtonProps:n,okType:o,okTextLocale:t,onOk:r}=a.useContext(ee);return p.createElement(de,Object.assign({},Me(o),{loading:e,onClick:r},n),t)};function We(e,n){return p.createElement("span",{className:`${e}-close-x`},n||p.createElement(ue,{className:`${e}-close-icon`}))}const _e=e=>{const{okText:n,okType:o="primary",cancelText:t,confirmLoading:r,onOk:i,onCancel:d,okButtonProps:c,cancelButtonProps:s,footer:g}=e,[l]=me("Modal",Te()),u=n||(l==null?void 0:l.okText),f=t||(l==null?void 0:l.cancelText),y={confirmLoading:r,okButtonProps:c,cancelButtonProps:s,okTextLocale:u,cancelTextLocale:f,okType:o,onOk:i,onCancel:d},x=p.useMemo(()=>y,V(Object.values(y)));let C;return typeof g=="function"||typeof g>"u"?(C=p.createElement(p.Fragment,null,p.createElement(we,null),p.createElement(Pe,null)),typeof g=="function"&&(C=g(C,{OkBtn:Pe,CancelBtn:we})),C=p.createElement(He,{value:x},C)):C=g,p.createElement(fn,{disabled:!1},C)};function Ne(e){return{position:e,inset:0}}const Zn=e=>{const{componentCls:n,antCls:o}=e;return[{[`${n}-root`]:{[`${n}${o}-zoom-enter, ${n}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${n}${o}-zoom-leave ${n}-content`]:{pointerEvents:"none"},[`${n}-mask`]:Object.assign(Object.assign({},Ne("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${n}-hidden`]:{display:"none"}}),[`${n}-wrap`]:Object.assign(Object.assign({},Ne("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${n}-root`]:jn(e)}]},Yn=e=>{const{componentCls:n}=e;return[{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl"},[`${n}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[n]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[n]:{maxWidth:"calc(100vw - 16px)",margin:`${E(e.marginXS)} auto`},[`${n}-centered`]:{[n]:{flex:1}}}}},{[n]:Object.assign(Object.assign({},mn(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${E(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${n}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${n}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${n}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:E(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:disabled":{pointerEvents:"none"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},gn(e)),[`${n}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${E(e.borderRadiusLG)} ${E(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${n}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${E(e.margin)} auto`}},[`${n}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${n}-open`]:{overflow:"hidden"}})},{[`${n}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${n}-content,
          ${n}-body,
          ${n}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${n}-confirm-body`]:{marginBottom:"auto"}}}]},Jn=e=>{const{componentCls:n}=e;return{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl",[`${n}-confirm-body`]:{direction:"rtl"}}}}},kn=e=>{const{componentCls:n}=e,o=Tn(e);delete o.xs;const t=Object.keys(o).map(r=>({[`@media (min-width: ${E(o[r])})`]:{width:`var(--${n.replace(".","")}-${r}-width)`}}));return{[`${n}-root`]:{[n]:[{width:`var(--${n.replace(".","")}-xs-width)`}].concat(V(t))}}},Ve=e=>{const n=e.padding,o=e.fontSizeHeading5,t=e.lineHeightHeading5;return zn(e,{modalHeaderHeight:e.calc(e.calc(t).mul(o).equal()).add(e.calc(n).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},qe=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${E(e.paddingMD)} ${E(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${E(e.padding)} ${E(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${E(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${E(e.paddingXS)} ${E(e.padding)}`:0,footerBorderTop:e.wireframe?`${E(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${E(e.borderRadiusLG)} ${E(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${E(e.padding*2)} ${E(e.padding*2)} ${E(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),Ge=Bn("Modal",e=>{const n=Ve(e);return[Yn(n),Jn(n),Zn(n),Mn(n,"zoom"),kn(n)]},qe,{unitless:{titleLineHeight:!0}});var et=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};let se;const nt=e=>{se={x:e.pageX,y:e.pageY},setTimeout(()=>{se=null},100)};Xn()&&document.documentElement.addEventListener("click",nt,!0);const Ue=e=>{var n;const{getPopupContainer:o,getPrefixCls:t,direction:r,modal:i}=a.useContext(oe),d=H=>{const{onCancel:T}=e;T==null||T(H)},c=H=>{const{onOk:T}=e;T==null||T(H)},{prefixCls:s,className:g,rootClassName:l,open:u,wrapClassName:f,centered:y,getContainer:x,focusTriggerAfterClose:C=!0,style:b,visible:v,width:m=520,footer:h,classNames:S,styles:w,children:$,loading:O}=e,j=et(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),R=t("modal",s),Y=t(),A=Be(R),[X,q,B]=Ge(R,A),z=N(f,{[`${R}-centered`]:!!y,[`${R}-wrap-rtl`]:r==="rtl"}),L=h!==null&&!O?a.createElement(_e,Object.assign({},e,{onOk:c,onCancel:d})):null,[D,G,J]=Un($e(e),$e(i),{closable:!0,closeIcon:a.createElement(ue,{className:`${R}-close-icon`}),closeIconRender:H=>We(R,H)}),K=Qn(`.${R}-content`),[Q,M]=On("Modal",j.zIndex),[k,W]=a.useMemo(()=>m&&typeof m=="object"?[void 0,m]:[m,void 0],[m]),re=a.useMemo(()=>{const H={};return W&&Object.keys(W).forEach(T=>{const _=W[T];_!==void 0&&(H[`--${R}-${T}-width`]=typeof _=="number"?`${_}px`:_)}),H},[W]);return X(a.createElement(In,{form:!0,space:!0},a.createElement(En.Provider,{value:M},a.createElement(De,Object.assign({width:k},j,{zIndex:Q,getContainer:x===void 0?o:x,prefixCls:R,rootClassName:N(q,l,B,A),footer:L,visible:u??v,mousePosition:(n=j.mousePosition)!==null&&n!==void 0?n:se,onClose:d,closable:D&&{disabled:J,closeIcon:G},closeIcon:G,focusTriggerAfterClose:C,transitionName:te(Y,"zoom",e.transitionName),maskTransitionName:te(Y,"fade",e.maskTransitionName),className:N(q,g,i==null?void 0:i.className),style:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.style),b),re),classNames:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.classNames),S),{wrapper:N(z,S==null?void 0:S.wrapper)}),styles:Object.assign(Object.assign({},i==null?void 0:i.styles),w),panelRef:K}),O?a.createElement(Rn,{active:!0,title:!1,paragraph:{rows:4},className:`${R}-body-skeleton`}):$))))},tt=e=>{const{componentCls:n,titleFontSize:o,titleLineHeight:t,modalConfirmIconSize:r,fontSize:i,lineHeight:d,modalTitleHeight:c,fontHeight:s,confirmBodyPadding:g}=e,l=`${n}-confirm`;return{[l]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${l}-body-wrapper`]:Object.assign({},Cn()),[`&${n} ${n}-body`]:{padding:g},[`${l}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(c).sub(r).equal()).div(2).equal()}},[`${l}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${E(e.marginSM)})`},[`${e.iconCls} + ${l}-paragraph`]:{maxWidth:`calc(100% - ${E(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${l}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:t},[`${l}-content`]:{color:e.colorText,fontSize:i,lineHeight:d},[`${l}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${l}-error ${l}-body > ${e.iconCls}`]:{color:e.colorError},[`${l}-warning ${l}-body > ${e.iconCls},
        ${l}-confirm ${l}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${l}-info ${l}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${l}-success ${l}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},ot=Hn(["Modal","confirm"],e=>{const n=Ve(e);return[tt(n)]},qe,{order:-1e3});var rt=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};function Xe(e){const{prefixCls:n,icon:o,okText:t,cancelText:r,confirmPrefixCls:i,type:d,okCancel:c,footer:s,locale:g}=e,l=rt(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let u=o;if(!o&&o!==null)switch(d){case"info":u=a.createElement(Sn,null);break;case"success":u=a.createElement(hn,null);break;case"error":u=a.createElement($n,null);break;default:u=a.createElement(xn,null)}const f=c??d==="confirm",y=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[x]=me("Modal"),C=g||x,b=t||(f?C==null?void 0:C.okText:C==null?void 0:C.justOkText),v=r||(C==null?void 0:C.cancelText),m=Object.assign({autoFocusButton:y,cancelTextLocale:v,okTextLocale:b,mergedOkCancel:f},l),h=a.useMemo(()=>m,V(Object.values(m))),S=a.createElement(a.Fragment,null,a.createElement(ye,null),a.createElement(ve,null)),w=e.title!==void 0&&e.title!==null,$=`${i}-body`;return a.createElement("div",{className:`${i}-body-wrapper`},a.createElement("div",{className:N($,{[`${$}-has-title`]:w})},u,a.createElement("div",{className:`${i}-paragraph`},w&&a.createElement("span",{className:`${i}-title`},e.title),a.createElement("div",{className:`${i}-content`},e.content))),s===void 0||typeof s=="function"?a.createElement(He,{value:h},a.createElement("div",{className:`${i}-btns`},typeof s=="function"?s(S,{OkBtn:ve,CancelBtn:ye}):S)):s,a.createElement(ot,{prefixCls:n}))}const at=e=>{const{close:n,zIndex:o,maskStyle:t,direction:r,prefixCls:i,wrapClassName:d,rootPrefixCls:c,bodyStyle:s,closable:g=!1,onConfirm:l,styles:u}=e,f=`${i}-confirm`,y=e.width||416,x=e.style||{},C=e.mask===void 0?!0:e.mask,b=e.maskClosable===void 0?!1:e.maskClosable,v=N(f,`${f}-${e.type}`,{[`${f}-rtl`]:r==="rtl"},e.className),[,m]=bn(),h=a.useMemo(()=>o!==void 0?o:m.zIndexPopupBase+wn,[o,m]);return a.createElement(Ue,Object.assign({},e,{className:v,wrapClassName:N({[`${f}-centered`]:!!e.centered},d),onCancel:()=>{n==null||n({triggerCancel:!0}),l==null||l(!1)},title:"",footer:null,transitionName:te(c||"","zoom",e.transitionName),maskTransitionName:te(c||"","fade",e.maskTransitionName),mask:C,maskClosable:b,style:x,styles:Object.assign({body:s,mask:t},u),width:y,zIndex:h,closable:g}),a.createElement(Xe,Object.assign({},e,{confirmPrefixCls:f})))},Ke=e=>{const{rootPrefixCls:n,iconPrefixCls:o,direction:t,theme:r}=e;return a.createElement(je,{prefixCls:n,iconPrefixCls:o,direction:t,theme:r},a.createElement(at,Object.assign({},e)))},Z=[];let Qe="";function Ze(){return Qe}const lt=e=>{var n,o;const{prefixCls:t,getContainer:r,direction:i}=e,d=Te(),c=a.useContext(oe),s=Ze()||c.getPrefixCls(),g=t||`${s}-modal`;let l=r;return l===!1&&(l=void 0),p.createElement(Ke,Object.assign({},e,{rootPrefixCls:s,prefixCls:g,iconPrefixCls:c.iconPrefixCls,theme:c.theme,direction:i??c.direction,locale:(o=(n=c.locale)===null||n===void 0?void 0:n.Modal)!==null&&o!==void 0?o:d,getContainer:l}))};function ne(e){const n=pn(),o=document.createDocumentFragment();let t=Object.assign(Object.assign({},e),{close:s,open:!0}),r,i;function d(){for(var l,u=arguments.length,f=new Array(u),y=0;y<u;y++)f[y]=arguments[y];if(f.some(b=>b==null?void 0:b.triggerCancel)){var C;(l=e.onCancel)===null||l===void 0||(C=l).call.apply(C,[e,()=>{}].concat(V(f.slice(1))))}for(let b=0;b<Z.length;b++)if(Z[b]===s){Z.splice(b,1);break}i()}function c(l){clearTimeout(r),r=setTimeout(()=>{const u=n.getPrefixCls(void 0,Ze()),f=n.getIconPrefixCls(),y=n.getTheme(),x=p.createElement(lt,Object.assign({},l));i=vn()(p.createElement(je,{prefixCls:u,iconPrefixCls:f,theme:y},n.holderRender?n.holderRender(x):x),o)})}function s(){for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];t=Object.assign(Object.assign({},t),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),d.apply(this,u)}}),t.visible&&delete t.visible,c(t)}function g(l){typeof l=="function"?t=l(t):t=Object.assign(Object.assign({},t),l),c(t)}return c(t),Z.push(s),{destroy:s,update:g}}function Ye(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Je(e){return Object.assign(Object.assign({},e),{type:"info"})}function ke(e){return Object.assign(Object.assign({},e),{type:"success"})}function en(e){return Object.assign(Object.assign({},e),{type:"error"})}function nn(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function it(e){let{rootPrefixCls:n}=e;Qe=n}var st=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const ct=(e,n)=>{var o,{afterClose:t,config:r}=e,i=st(e,["afterClose","config"]);const[d,c]=a.useState(!0),[s,g]=a.useState(r),{direction:l,getPrefixCls:u}=a.useContext(oe),f=u("modal"),y=u(),x=()=>{var m;t(),(m=s.afterClose)===null||m===void 0||m.call(s)},C=function(){var m;c(!1);for(var h=arguments.length,S=new Array(h),w=0;w<h;w++)S[w]=arguments[w];if(S.some(j=>j==null?void 0:j.triggerCancel)){var O;(m=s.onCancel)===null||m===void 0||(O=m).call.apply(O,[s,()=>{}].concat(V(S.slice(1))))}};a.useImperativeHandle(n,()=>({destroy:C,update:m=>{g(h=>Object.assign(Object.assign({},h),m))}}));const b=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[v]=me("Modal",yn.Modal);return a.createElement(Ke,Object.assign({prefixCls:f,rootPrefixCls:y},s,{close:C,open:d,afterClose:x,okText:s.okText||(b?v==null?void 0:v.okText:v==null?void 0:v.justOkText),direction:s.direction||l,cancelText:s.cancelText||(v==null?void 0:v.cancelText)},i))},dt=a.forwardRef(ct);let Ie=0;const ut=a.memo(a.forwardRef((e,n)=>{const[o,t]=An();return a.useImperativeHandle(n,()=>({patchElement:t}),[]),a.createElement(a.Fragment,null,o)}));function ft(){const e=a.useRef(null),[n,o]=a.useState([]);a.useEffect(()=>{n.length&&(V(n).forEach(d=>{d()}),o([]))},[n]);const t=a.useCallback(i=>function(c){var s;Ie+=1;const g=a.createRef();let l;const u=new Promise(b=>{l=b});let f=!1,y;const x=a.createElement(dt,{key:`modal-${Ie}`,config:i(c),ref:g,afterClose:()=>{y==null||y()},isSilent:()=>f,onConfirm:b=>{l(b)}});return y=(s=e.current)===null||s===void 0?void 0:s.patchElement(x),y&&Z.push(y),{destroy:()=>{function b(){var v;(v=g.current)===null||v===void 0||v.destroy()}g.current?b():o(v=>[].concat(V(v),[b]))},update:b=>{function v(){var m;(m=g.current)===null||m===void 0||m.update(b)}g.current?v():o(m=>[].concat(V(m),[v]))},then:b=>(f=!0,u.then(b))}},[]);return[a.useMemo(()=>({info:t(Je),success:t(ke),error:t(en),warning:t(Ye),confirm:t(nn)}),[]),a.createElement(ut,{key:"modal-holder",ref:e})]}var mt=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const gt=e=>{const{prefixCls:n,className:o,closeIcon:t,closable:r,type:i,title:d,children:c,footer:s}=e,g=mt(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:l}=a.useContext(oe),u=l(),f=n||l("modal"),y=Be(u),[x,C,b]=Ge(f,y),v=`${f}-confirm`;let m={};return i?m={closable:r??!1,title:"",footer:"",children:a.createElement(Xe,Object.assign({},e,{prefixCls:f,confirmPrefixCls:v,rootPrefixCls:u,content:c}))}:m={closable:r??!0,title:d,footer:s!==null&&a.createElement(_e,Object.assign({},e)),children:c},x(a.createElement(Ae,Object.assign({prefixCls:f,className:N(C,`${f}-pure-panel`,i&&v,i&&`${v}-${i}`,o,b,y)},g,{closeIcon:We(f,t),closable:r},m)))},Ct=Fn(gt);function tn(e){return ne(Ye(e))}const F=Ue;F.useModal=ft;F.info=function(n){return ne(Je(n))};F.success=function(n){return ne(ke(n))};F.error=function(n){return ne(en(n))};F.warning=tn;F.warn=tn;F.confirm=function(n){return ne(nn(n))};F.destroyAll=function(){for(;Z.length;){const n=Z.pop();n&&n()}};F.config=it;F._InternalPanelDoNotUseOrYouWillBeFired=Ct;export{F as M};
