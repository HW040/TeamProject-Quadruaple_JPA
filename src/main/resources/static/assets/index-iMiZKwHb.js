import{aJ as W,r as f,W as P,a9 as ke,s as V,a2 as ze,z as L,x as Ve,y as ce,ab as Le,X as ie,J as fe,a3 as Ee,H as Be,aK as Me,aL as De,at as Xe,aG as He}from"./index-xgrFPZPY.js";import{T as We}from"./index-CzARxExx.js";import{u as Ye,z as qe}from"./useZIndex-BqtkZtgR.js";import{g as Fe}from"./Portal-ErLZGSak.js";import"./useId-Cx8FTpMZ.js";import{i as Ze}from"./zoom-COl-nNlw.js";function Ue(t,o){return W.reduce((r,e)=>{const n=t[`${e}1`],s=t[`${e}3`],a=t[`${e}6`],i=t[`${e}7`];return Object.assign(Object.assign({},r),o(e,{lightColor:n,lightBorderColor:s,darkColor:a,textColor:i}))},{})}function de(t){var o=t.children,r=t.prefixCls,e=t.id,n=t.overlayInnerStyle,s=t.bodyClassName,a=t.className,i=t.style;return f.createElement("div",{className:P("".concat(r,"-content"),a),style:i},f.createElement("div",{className:P("".concat(r,"-inner"),s),id:e,role:"tooltip",style:n},typeof o=="function"?o():o))}var k={shiftX:64,adjustY:1},z={adjustX:1,shiftY:!0},y=[0,0],Je={left:{points:["cr","cl"],overflow:z,offset:[-4,0],targetOffset:y},right:{points:["cl","cr"],overflow:z,offset:[4,0],targetOffset:y},top:{points:["bc","tc"],overflow:k,offset:[0,-4],targetOffset:y},bottom:{points:["tc","bc"],overflow:k,offset:[0,4],targetOffset:y},topLeft:{points:["bl","tl"],overflow:k,offset:[0,-4],targetOffset:y},leftTop:{points:["tr","tl"],overflow:z,offset:[-4,0],targetOffset:y},topRight:{points:["br","tr"],overflow:k,offset:[0,-4],targetOffset:y},rightTop:{points:["tl","tr"],overflow:z,offset:[4,0],targetOffset:y},bottomRight:{points:["tr","br"],overflow:k,offset:[0,4],targetOffset:y},rightBottom:{points:["bl","br"],overflow:z,offset:[4,0],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:k,offset:[0,4],targetOffset:y},leftBottom:{points:["br","bl"],overflow:z,offset:[-4,0],targetOffset:y}},Ge=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],Qe=function(o,r){var e=o.overlayClassName,n=o.trigger,s=n===void 0?["hover"]:n,a=o.mouseEnterDelay,i=a===void 0?0:a,l=o.mouseLeaveDelay,d=l===void 0?.1:l,b=o.overlayStyle,c=o.prefixCls,u=c===void 0?"rc-tooltip":c,h=o.children,v=o.onVisibleChange,O=o.afterVisibleChange,j=o.transitionName,C=o.animation,m=o.motion,x=o.placement,N=x===void 0?"right":x,A=o.align,Y=A===void 0?{}:A,q=o.destroyTooltipOnHide,F=q===void 0?!1:q,Z=o.defaultVisible,U=o.getTooltipContainer,J=o.overlayInnerStyle;o.arrowContent;var G=o.overlay,Q=o.id,E=o.showArrow,_=E===void 0?!0:E,w=o.classNames,$=o.styles,B=ke(o,Ge),S=f.useRef(null);f.useImperativeHandle(r,function(){return S.current});var M=V({},B);"visible"in o&&(M.popupVisible=o.visible);var D=function(){return f.createElement(de,{key:"content",prefixCls:u,id:Q,bodyClassName:w==null?void 0:w.body,overlayInnerStyle:V(V({},J),$==null?void 0:$.body)},G)};return f.createElement(We,ze({popupClassName:P(e,w==null?void 0:w.root),prefixCls:u,popup:D,action:s,builtinPlacements:Je,popupPlacement:N,ref:S,popupAlign:Y,getPopupContainer:U,onPopupVisibleChange:v,afterPopupVisibleChange:O,popupTransitionName:j,popupAnimation:C,popupMotion:m,defaultPopupVisible:Z,autoDestroy:F,mouseLeaveDelay:d,popupStyle:V(V({},b),$==null?void 0:$.root),mouseEnterDelay:i,arrow:_},M),h)};const Ke=f.forwardRef(Qe);function et(t){const{sizePopupArrow:o,borderRadiusXS:r,borderRadiusOuter:e}=t,n=o/2,s=0,a=n,i=e*1/Math.sqrt(2),l=n-e*(1-1/Math.sqrt(2)),d=n-r*(1/Math.sqrt(2)),b=e*(Math.sqrt(2)-1)+r*(1/Math.sqrt(2)),c=2*n-d,u=b,h=2*n-i,v=l,O=2*n-s,j=a,C=n*Math.sqrt(2)+e*(Math.sqrt(2)-2),m=e*(Math.sqrt(2)-1),x=`polygon(${m}px 100%, 50% ${m}px, ${2*n-m}px 100%, ${m}px 100%)`,N=`path('M ${s} ${a} A ${e} ${e} 0 0 0 ${i} ${l} L ${d} ${b} A ${r} ${r} 0 0 1 ${c} ${u} L ${h} ${v} A ${e} ${e} 0 0 0 ${O} ${j} Z')`;return{arrowShadowWidth:C,arrowPath:N,arrowPolygon:x}}const tt=(t,o,r)=>{const{sizePopupArrow:e,arrowPolygon:n,arrowPath:s,arrowShadowWidth:a,borderRadiusXS:i,calc:l}=t;return{pointerEvents:"none",width:e,height:e,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:e,height:l(e).div(2).equal(),background:o,clipPath:{_multi_value_:!0,value:[n,s]},content:'""'},"&::after":{content:'""',position:"absolute",width:a,height:a,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${L(i)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}},ue=8;function pe(t){const{contentRadius:o,limitVerticalRadius:r}=t,e=o>12?o+2:12;return{arrowOffsetHorizontal:e,arrowOffsetVertical:r?ue:e}}function H(t,o){return t?o:{}}function ot(t,o,r){const{componentCls:e,boxShadowPopoverArrow:n,arrowOffsetVertical:s,arrowOffsetHorizontal:a}=t,{arrowDistance:i=0,arrowPlacement:l={left:!0,right:!0,top:!0,bottom:!0}}=r||{};return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({[`${e}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},tt(t,o,n)),{"&:before":{background:o}})]},H(!!l.top,{[[`&-placement-top > ${e}-arrow`,`&-placement-topLeft > ${e}-arrow`,`&-placement-topRight > ${e}-arrow`].join(",")]:{bottom:i,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":a,[`> ${e}-arrow`]:{left:{_skip_check_:!0,value:a}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${L(a)})`,[`> ${e}-arrow`]:{right:{_skip_check_:!0,value:a}}}})),H(!!l.bottom,{[[`&-placement-bottom > ${e}-arrow`,`&-placement-bottomLeft > ${e}-arrow`,`&-placement-bottomRight > ${e}-arrow`].join(",")]:{top:i,transform:"translateY(-100%)"},[`&-placement-bottom > ${e}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":a,[`> ${e}-arrow`]:{left:{_skip_check_:!0,value:a}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${L(a)})`,[`> ${e}-arrow`]:{right:{_skip_check_:!0,value:a}}}})),H(!!l.left,{[[`&-placement-left > ${e}-arrow`,`&-placement-leftTop > ${e}-arrow`,`&-placement-leftBottom > ${e}-arrow`].join(",")]:{right:{_skip_check_:!0,value:i},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${e}-arrow`]:{top:s},[`&-placement-leftBottom > ${e}-arrow`]:{bottom:s}})),H(!!l.right,{[[`&-placement-right > ${e}-arrow`,`&-placement-rightTop > ${e}-arrow`,`&-placement-rightBottom > ${e}-arrow`].join(",")]:{left:{_skip_check_:!0,value:i},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${e}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${e}-arrow`]:{top:s},[`&-placement-rightBottom > ${e}-arrow`]:{bottom:s}}))}}function nt(t,o,r,e){if(e===!1)return{adjustX:!1,adjustY:!1};const n=e&&typeof e=="object"?e:{},s={};switch(t){case"top":case"bottom":s.shiftX=o.arrowOffsetHorizontal*2+r,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=o.arrowOffsetVertical*2+r,s.shiftX=!0,s.adjustX=!0;break}const a=Object.assign(Object.assign({},s),n);return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}const le={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},rt={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},at=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function st(t){const{arrowWidth:o,autoAdjustOverflow:r,arrowPointAtCenter:e,offset:n,borderRadius:s,visibleFirst:a}=t,i=o/2,l={};return Object.keys(le).forEach(d=>{const b=e&&rt[d]||le[d],c=Object.assign(Object.assign({},b),{offset:[0,0],dynamicInset:!0});switch(l[d]=c,at.has(d)&&(c.autoArrow=!1),d){case"top":case"topLeft":case"topRight":c.offset[1]=-i-n;break;case"bottom":case"bottomLeft":case"bottomRight":c.offset[1]=i+n;break;case"left":case"leftTop":case"leftBottom":c.offset[0]=-i-n;break;case"right":case"rightTop":case"rightBottom":c.offset[0]=i+n;break}const u=pe({contentRadius:s,limitVerticalRadius:!0});if(e)switch(d){case"topLeft":case"bottomLeft":c.offset[0]=-u.arrowOffsetHorizontal-i;break;case"topRight":case"bottomRight":c.offset[0]=u.arrowOffsetHorizontal+i;break;case"leftTop":case"rightTop":c.offset[1]=-u.arrowOffsetHorizontal*2+i;break;case"leftBottom":case"rightBottom":c.offset[1]=u.arrowOffsetHorizontal*2-i;break}c.overflow=nt(d,u,o,r),a&&(c.htmlRegion="visibleFirst")}),l}const it=t=>{const{calc:o,componentCls:r,tooltipMaxWidth:e,tooltipColor:n,tooltipBg:s,tooltipBorderRadius:a,zIndexPopup:i,controlHeight:l,boxShadowSecondary:d,paddingSM:b,paddingXS:c,arrowOffsetHorizontal:u,sizePopupArrow:h}=t,v=o(a).add(h).add(u).equal(),O=o(a).mul(2).add(h).equal();return[{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},Le(t)),{position:"absolute",zIndex:i,display:"block",width:"max-content",maxWidth:e,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":s,[`${r}-inner`]:{minWidth:O,minHeight:l,padding:`${L(t.calc(b).div(2).equal())} ${L(c)}`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:s,borderRadius:a,boxShadow:d,boxSizing:"border-box"},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:v},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${r}-inner`]:{borderRadius:t.min(a,ue)}},[`${r}-content`]:{position:"relative"}}),Ue(t,(j,C)=>{let{darkColor:m}=C;return{[`&${r}-${j}`]:{[`${r}-inner`]:{backgroundColor:m},[`${r}-arrow`]:{"--antd-arrow-background-color":m}}}})),{"&-rtl":{direction:"rtl"}})},ot(t,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},lt=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},pe({contentRadius:t.borderRadius,limitVerticalRadius:!0})),et(ce(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)}))),me=function(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Ve("Tooltip",e=>{const{borderRadius:n,colorTextLightSolid:s,colorBgSpotlight:a}=e,i=ce(e,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:n,tooltipBg:a});return[it(i),Ze(e,"zoom-big-fast")]},lt,{resetStyle:!1,injectStyle:o})(t)},ct=W.map(t=>`${t}-inverse`);function ft(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(ie(ct),ie(W)).includes(t):W.includes(t)}function ge(t,o){const r=ft(o),e=P({[`${t}-${o}`]:o&&r}),n={},s={};return o&&!r&&(n.background=o,s["--antd-arrow-background-color"]=o),{className:e,overlayStyle:n,arrowStyle:s}}const dt=t=>{const{prefixCls:o,className:r,placement:e="top",title:n,color:s,overlayInnerStyle:a}=t,{getPrefixCls:i}=f.useContext(fe),l=i("tooltip",o),[d,b,c]=me(l),u=ge(l,s),h=u.arrowStyle,v=Object.assign(Object.assign({},a),u.overlayStyle),O=P(b,c,l,`${l}-pure`,`${l}-placement-${e}`,r,u.className);return d(f.createElement("div",{className:O,style:h},f.createElement("div",{className:`${l}-arrow`}),f.createElement(de,Object.assign({},t,{className:b,prefixCls:l,overlayInnerStyle:v}),n)))};var ut=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const pt=f.forwardRef((t,o)=>{var r,e,n,s,a,i;const{prefixCls:l,openClassName:d,getTooltipContainer:b,color:c,overlayInnerStyle:u,children:h,afterOpenChange:v,afterVisibleChange:O,destroyTooltipOnHide:j,arrow:C=!0,title:m,overlay:x,builtinPlacements:N,arrowPointAtCenter:A=!1,autoAdjustOverflow:Y=!0,motion:q,getPopupContainer:F,placement:Z="top",mouseEnterDelay:U=.1,mouseLeaveDelay:J=.1,overlayStyle:G,rootClassName:Q,overlayClassName:E,styles:_,classNames:w}=t,$=ut(t,["prefixCls","openClassName","getTooltipContainer","color","overlayInnerStyle","children","afterOpenChange","afterVisibleChange","destroyTooltipOnHide","arrow","title","overlay","builtinPlacements","arrowPointAtCenter","autoAdjustOverflow","motion","getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName","overlayClassName","styles","classNames"]),B=!!C,[,S]=Ee(),{getPopupContainer:M,getPrefixCls:D,direction:ae,tooltip:p}=f.useContext(fe),be=He(),K=f.useRef(null),se=()=>{var g;(g=K.current)===null||g===void 0||g.forceAlign()};f.useImperativeHandle(o,()=>{var g;return{forceAlign:se,forcePopupAlign:()=>{be.deprecated(!1,"forcePopupAlign","forceAlign"),se()},nativeElement:(g=K.current)===null||g===void 0?void 0:g.nativeElement}});const[he,we]=Be(!1,{value:(r=t.open)!==null&&r!==void 0?r:t.visible,defaultValue:(e=t.defaultOpen)!==null&&e!==void 0?e:t.defaultVisible}),ee=!m&&!x&&m!==0,ye=g=>{var T,I;we(ee?!1:g),ee||((T=t.onOpenChange)===null||T===void 0||T.call(t,g),(I=t.onVisibleChange)===null||I===void 0||I.call(t,g))},ve=f.useMemo(()=>{var g,T;let I=A;return typeof C=="object"&&(I=(T=(g=C.pointAtCenter)!==null&&g!==void 0?g:C.arrowPointAtCenter)!==null&&T!==void 0?T:A),N||st({arrowPointAtCenter:I,autoAdjustOverflow:Y,arrowWidth:B?S.sizePopupArrow:0,borderRadius:S.borderRadius,offset:S.marginXXS,visibleFirst:!0})},[A,C,N,S]),te=f.useMemo(()=>m===0?m:x||m||"",[x,m]),Ce=f.createElement(Me,{space:!0},typeof te=="function"?te():te),R=D("tooltip",l),Oe=D(),$e=t["data-popover-inject"];let oe=he;!("open"in t)&&!("visible"in t)&&ee&&(oe=!1);const ne=f.isValidElement(h)&&!De(h)?h:f.createElement("span",null,h),X=ne.props,xe=!X.className||typeof X.className=="string"?P(X.className,d||`${R}-open`):X.className,[_e,Pe,je]=me(R,!$e),re=ge(R,c),Se=re.arrowStyle,Te=P(E,{[`${R}-rtl`]:ae==="rtl"},re.className,Q,Pe,je,p==null?void 0:p.className,(n=p==null?void 0:p.classNames)===null||n===void 0?void 0:n.root,w==null?void 0:w.root),Ne=P((s=p==null?void 0:p.classNames)===null||s===void 0?void 0:s.body,w==null?void 0:w.body),[Ae,Re]=Ye("Tooltip",$.zIndex),Ie=f.createElement(Ke,Object.assign({},$,{zIndex:Ae,showArrow:B,placement:Z,mouseEnterDelay:U,mouseLeaveDelay:J,prefixCls:R,classNames:{root:Te,body:Ne},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Se),(a=p==null?void 0:p.styles)===null||a===void 0?void 0:a.root),p==null?void 0:p.style),G),_==null?void 0:_.root),body:Object.assign(Object.assign(Object.assign(Object.assign({},(i=p==null?void 0:p.styles)===null||i===void 0?void 0:i.body),u),_==null?void 0:_.body),re.overlayStyle)},getTooltipContainer:F||b||M,ref:K,builtinPlacements:ve,overlay:Ce,visible:oe,onVisibleChange:ye,afterVisibleChange:v??O,arrowContent:f.createElement("span",{className:`${R}-arrow-content`}),motion:{motionName:Fe(Oe,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!j}),oe?Xe(ne,{className:xe}):ne);return _e(f.createElement(qe.Provider,{value:Re},Ie))}),mt=pt;mt._InternalPanelDoNotUseOrYouWillBeFired=dt;export{mt as T,pe as a,et as b,st as c,tt as d,ot as g};
