import{J as h,r,l as V,m as G,K as W,n as D,q as k,M as X}from"./index-Ci2k4qFh.js";import{o as M}from"./useSize-D9liuY7G.js";const N=e=>{const{prefixCls:t,className:s,style:n,size:a,shape:o}=e,c=h({[`${t}-lg`]:a==="large",[`${t}-sm`]:a==="small"}),l=h({[`${t}-circle`]:o==="circle",[`${t}-square`]:o==="square",[`${t}-round`]:o==="round"}),i=r.useMemo(()=>typeof a=="number"?{width:a,height:a,lineHeight:`${a}px`}:{},[a]);return r.createElement("span",{className:h(t,c,l,s),style:Object.assign(Object.assign({},i),n)})},K=new W("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),E=e=>({height:e,lineHeight:D(e)}),f=e=>Object.assign({width:e},E(e)),_=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:K,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),I=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},E(e)),J=e=>{const{skeletonAvatarCls:t,gradientFromColor:s,controlHeight:n,controlHeightLG:a,controlHeightSM:o}=e;return{[t]:Object.assign({display:"inline-block",verticalAlign:"top",background:s},f(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(a)),[`${t}${t}-sm`]:Object.assign({},f(o))}},Q=e=>{const{controlHeight:t,borderRadiusSM:s,skeletonInputCls:n,controlHeightLG:a,controlHeightSM:o,gradientFromColor:c,calc:l}=e;return{[n]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:s},I(t,l)),[`${n}-lg`]:Object.assign({},I(a,l)),[`${n}-sm`]:Object.assign({},I(o,l))}},T=e=>Object.assign({width:e},E(e)),U=e=>{const{skeletonImageCls:t,imageSizeBase:s,gradientFromColor:n,borderRadiusSM:a,calc:o}=e;return{[t]:Object.assign(Object.assign({display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",background:n,borderRadius:a},T(o(s).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},T(s)),{maxWidth:o(s).mul(4).equal(),maxHeight:o(s).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},q=(e,t,s)=>{const{skeletonButtonCls:n}=e;return{[`${s}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${s}${n}-round`]:{borderRadius:t}}},B=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},E(e)),Y=e=>{const{borderRadiusSM:t,skeletonButtonCls:s,controlHeight:n,controlHeightLG:a,controlHeightSM:o,gradientFromColor:c,calc:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[s]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:l(n).mul(2).equal(),minWidth:l(n).mul(2).equal()},B(n,l))},q(e,n,s)),{[`${s}-lg`]:Object.assign({},B(a,l))}),q(e,a,`${s}-lg`)),{[`${s}-sm`]:Object.assign({},B(o,l))}),q(e,o,`${s}-sm`))},Z=e=>{const{componentCls:t,skeletonAvatarCls:s,skeletonTitleCls:n,skeletonParagraphCls:a,skeletonButtonCls:o,skeletonInputCls:c,skeletonImageCls:l,controlHeight:i,controlHeightLG:d,controlHeightSM:m,gradientFromColor:g,padding:p,marginSM:C,borderRadius:b,titleHeight:u,blockRadius:j,paragraphLiHeight:y,controlHeightXS:P,paragraphMarginTop:$}=e;return{[t]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:p,verticalAlign:"top",[s]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},f(i)),[`${s}-circle`]:{borderRadius:"50%"},[`${s}-lg`]:Object.assign({},f(d)),[`${s}-sm`]:Object.assign({},f(m))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[n]:{width:"100%",height:u,background:g,borderRadius:j,[`+ ${a}`]:{marginBlockStart:m}},[a]:{padding:0,"> li":{width:"100%",height:y,listStyle:"none",background:g,borderRadius:j,"+ li":{marginBlockStart:P}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${a} > li`]:{borderRadius:b}}},[`${t}-with-avatar ${t}-content`]:{[n]:{marginBlockStart:C,[`+ ${a}`]:{marginBlockStart:$}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Y(e)),J(e)),Q(e)),U(e)),[`${t}${t}-block`]:{width:"100%",[o]:{width:"100%"},[c]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${a} > li,
        ${s},
        ${o},
        ${c},
        ${l}
      `]:Object.assign({},_(e))}}},ee=e=>{const{colorFillContent:t,colorFill:s}=e,n=t,a=s;return{color:n,colorGradientEnd:a,gradientFromColor:n,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},S=V("Skeleton",e=>{const{componentCls:t,calc:s}=e,n=G(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:s(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Z(n)]},ee,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),te=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,shape:o="circle",size:c="default"}=e,{getPrefixCls:l}=r.useContext(k),i=l("skeleton",t),[d,m,g]=S(i),p=M(e,["prefixCls","className"]),C=h(i,`${i}-element`,{[`${i}-active`]:a},s,n,m,g);return d(r.createElement("div",{className:C},r.createElement(N,Object.assign({prefixCls:`${i}-avatar`,shape:o,size:c},p))))},se=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:o=!1,size:c="default"}=e,{getPrefixCls:l}=r.useContext(k),i=l("skeleton",t),[d,m,g]=S(i),p=M(e,["prefixCls"]),C=h(i,`${i}-element`,{[`${i}-active`]:a,[`${i}-block`]:o},s,n,m,g);return d(r.createElement("div",{className:C},r.createElement(N,Object.assign({prefixCls:`${i}-button`,size:c},p))))},ne="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",ae=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:o}=e,{getPrefixCls:c}=r.useContext(k),l=c("skeleton",t),[i,d,m]=S(l),g=h(l,`${l}-element`,{[`${l}-active`]:o},s,n,d,m);return i(r.createElement("div",{className:g},r.createElement("div",{className:h(`${l}-image`,s),style:a},r.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${l}-image-svg`},r.createElement("title",null,"Image placeholder"),r.createElement("path",{d:ne,className:`${l}-image-path`})))))},le=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:o,size:c="default"}=e,{getPrefixCls:l}=r.useContext(k),i=l("skeleton",t),[d,m,g]=S(i),p=M(e,["prefixCls"]),C=h(i,`${i}-element`,{[`${i}-active`]:a,[`${i}-block`]:o},s,n,m,g);return d(r.createElement("div",{className:C},r.createElement(N,Object.assign({prefixCls:`${i}-input`,size:c},p))))},ie=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:o,children:c}=e,{getPrefixCls:l}=r.useContext(k),i=l("skeleton",t),[d,m,g]=S(i),p=h(i,`${i}-element`,{[`${i}-active`]:o},m,s,n,g);return d(r.createElement("div",{className:p},r.createElement("div",{className:h(`${i}-image`,s),style:a},c)))},oe=(e,t)=>{const{width:s,rows:n=2}=t;if(Array.isArray(s))return s[e];if(n-1===e)return s},re=e=>{const{prefixCls:t,className:s,style:n,rows:a}=e,o=X(new Array(a)).map((c,l)=>r.createElement("li",{key:l,style:{width:oe(l,e)}}));return r.createElement("ul",{className:h(t,s),style:n},o)},ce=e=>{let{prefixCls:t,className:s,width:n,style:a}=e;return r.createElement("h3",{className:h(t,s),style:Object.assign({width:n},a)})};function z(e){return e&&typeof e=="object"?e:{}}function ge(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function de(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function me(e,t){const s={};return(!e||!t)&&(s.width="61%"),!e&&t?s.rows=3:s.rows=2,s}const v=e=>{const{prefixCls:t,loading:s,className:n,rootClassName:a,style:o,children:c,avatar:l=!1,title:i=!0,paragraph:d=!0,active:m,round:g}=e,{getPrefixCls:p,direction:C,skeleton:b}=r.useContext(k),u=p("skeleton",t),[j,y,P]=S(u);if(s||!("loading"in e)){const $=!!l,x=!!i,O=!!d;let R;if($){const w=Object.assign(Object.assign({prefixCls:`${u}-avatar`},ge(x,O)),z(l));R=r.createElement("div",{className:`${u}-header`},r.createElement(N,Object.assign({},w)))}let A;if(x||O){let w;if(x){const H=Object.assign(Object.assign({prefixCls:`${u}-title`},de($,O)),z(i));w=r.createElement(ce,Object.assign({},H))}let L;if(O){const H=Object.assign(Object.assign({prefixCls:`${u}-paragraph`},me($,x)),z(d));L=r.createElement(re,Object.assign({},H))}A=r.createElement("div",{className:`${u}-content`},w,L)}const F=h(u,{[`${u}-with-avatar`]:$,[`${u}-active`]:m,[`${u}-rtl`]:C==="rtl",[`${u}-round`]:g},b==null?void 0:b.className,n,a,y,P);return j(r.createElement("div",{className:F,style:Object.assign(Object.assign({},b==null?void 0:b.style),o)},R,A))}return c??null};v.Button=se;v.Avatar=te;v.Input=le;v.Image=ae;v.Node=ie;export{v as S};
