import{r as e,F as y,H as E,J as w}from"./index-Cwx4I7Vi.js";function z(r){return s=>e.createElement(y,{theme:{token:{motion:!1,zIndexPopupBase:0}}},e.createElement(r,Object.assign({},s)))}const I=(r,s,R,g,a)=>z(o=>{const{prefixCls:m,style:v}=o,i=e.useRef(null),[P,b]=e.useState(0),[h,O]=e.useState(0),[c,j]=E(!1,{value:o.open}),{getPrefixCls:x}=e.useContext(w),l=x(g||"select",m);e.useEffect(()=>{if(j(!0),typeof ResizeObserver<"u"){const f=new ResizeObserver(t=>{const n=t[0].target;b(n.offsetHeight+8),O(n.offsetWidth)}),p=setInterval(()=>{var t;const n=a?`.${a(l)}`:`.${l}-dropdown`,d=(t=i.current)===null||t===void 0?void 0:t.querySelector(n);d&&(clearInterval(p),f.observe(d))},10);return()=>{clearInterval(p),f.disconnect()}}},[]);let u=Object.assign(Object.assign({},o),{style:Object.assign(Object.assign({},v),{margin:0}),open:c,visible:c,getPopupContainer:()=>i.current});s&&Object.assign(u,{[s]:{overflow:{adjustX:!1,adjustY:!1}}});const C={paddingBottom:P,position:"relative",minWidth:h};return e.createElement("div",{ref:i,style:C},e.createElement(r,Object.assign({},u)))});export{I as g,z as w};
