import{r,af as P,X as _,a0 as se,q as b,au as _e,ag as Be,v as g,av as He,as as Je,C as Ze,aw as et}from"./index-Cwx4I7Vi.js";import{K as R}from"./Keyframes-C9Oo5sJi.js";import{i as tt}from"./Portal-SJsC_TZ1.js";const nt=new R("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),rt=new R("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),at=new R("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),it=new R("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),st=new R("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new R("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new R("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new R("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ut={"slide-up":{inKeyframes:nt,outKeyframes:rt},"slide-down":{inKeyframes:at,outKeyframes:it},"slide-left":{inKeyframes:st,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},It=(e,s)=>{const{antCls:l}=e,i=`${l}-${s}`,{inKeyframes:f,outKeyframes:a}=ut[s];return[tt(i,f,a,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function dt(e,s){var l=e.prefixCls,i=e.invalidate,f=e.item,a=e.renderItem,u=e.responsive,p=e.responsiveDisabled,m=e.registerSize,C=e.itemKey,I=e.className,q=e.style,B=e.children,H=e.display,c=e.order,$=e.component,X=$===void 0?"div":$,K=P(e,ct),v=u&&!H;function U(S){m(C,S)}r.useEffect(function(){return function(){U(null)}},[]);var J=a&&f!==x?a(f,{index:c}):B,N;i||(N={opacity:v?0:1,height:v?0:x,overflowY:v?"hidden":x,order:u?c:x,pointerEvents:v?"none":x,position:v?"absolute":x});var A={};v&&(A["aria-hidden"]=!0);var E=r.createElement(X,_({className:se(!i&&l,I),style:b(b({},N),q)},A,K,{ref:s}),J);return u&&(E=r.createElement(_e,{onResize:function(Z){var Y=Z.offsetWidth;U(Y)},disabled:p},E)),E}var W=r.forwardRef(dt);W.displayName="Item";function mt(e){if(typeof MessageChannel>"u")Be(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function vt(){var e=r.useRef(null),s=function(i){e.current||(e.current=[],mt(function(){Je.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(i)};return s}function M(e,s){var l=r.useState(s),i=g(l,2),f=i[0],a=i[1],u=He(function(p){e(function(){a(p)})});return[f,u]}var G=Ze.createContext(null),yt=["component"],gt=["className"],pt=["className"],St=function(s,l){var i=r.useContext(G);if(!i){var f=s.component,a=f===void 0?"div":f,u=P(s,yt);return r.createElement(a,_({},u,{ref:l}))}var p=i.className,m=P(i,gt),C=s.className,I=P(s,pt);return r.createElement(G.Provider,{value:null},r.createElement(W,_({ref:l,className:se(p,C)},m,I)))},Ce=r.forwardRef(St);Ce.displayName="RawItem";var Rt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Ie="responsive",Ne="invalidate";function Et(e){return"+ ".concat(e.length," ...")}function ht(e,s){var l=e.prefixCls,i=l===void 0?"rc-overflow":l,f=e.data,a=f===void 0?[]:f,u=e.renderItem,p=e.renderRawItem,m=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,q=e.ssr,B=e.style,H=e.className,c=e.maxCount,$=e.renderRest,X=e.renderRawRest,K=e.suffix,v=e.component,U=v===void 0?"div":v,J=e.itemComponent,N=e.onVisibleChange,A=P(e,Rt),E=q==="full",S=vt(),Z=M(S,null),Y=g(Z,2),F=Y[0],Oe=Y[1],h=F||0,xe=M(S,new Map),oe=g(xe,2),fe=oe[0],be=oe[1],Ke=M(S,0),le=g(Ke,2),De=le[0],ze=le[1],Me=M(S,0),ue=g(Me,2),L=ue[0],Pe=ue[1],We=M(S,0),ce=g(We,2),T=ce[0],$e=ce[1],Xe=r.useState(null),de=g(Xe,2),ee=de[0],me=de[1],Ue=r.useState(null),ve=g(Ue,2),V=ve[0],Ae=ve[1],O=r.useMemo(function(){return V===null&&E?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Ye=r.useState(!1),ye=g(Ye,2),Fe=ye[0],Le=ye[1],te="".concat(i,"-item"),ge=Math.max(De,L),ne=c===Ie,y=a.length&&ne,pe=c===Ne,Te=y||typeof c=="number"&&a.length>c,w=r.useMemo(function(){var t=a;return y?F===null&&E?t=a:t=a.slice(0,Math.min(a.length,h/I)):typeof c=="number"&&(t=a.slice(0,c)),t},[a,I,F,c,y]),re=r.useMemo(function(){return y?a.slice(O+1):a.slice(w.length)},[a,w,y,O]),k=r.useCallback(function(t,n){var o;return typeof m=="function"?m(t):(o=m&&(t==null?void 0:t[m]))!==null&&o!==void 0?o:n},[m]),Ve=r.useCallback(u||function(t){return t},[u]);function j(t,n,o){V===t&&(n===void 0||n===ee)||(Ae(t),o||(Le(t<a.length-1),N==null||N(t)),n!==void 0&&me(n))}function ke(t,n){Oe(n.clientWidth)}function Se(t,n){be(function(o){var d=new Map(o);return n===null?d.delete(t):d.set(t,n),d})}function je(t,n){Pe(n),ze(L)}function Ge(t,n){$e(n)}function ae(t){return fe.get(k(w[t],t))}et(function(){if(h&&typeof ge=="number"&&w){var t=T,n=w.length,o=n-1;if(!n){j(0,null);return}for(var d=0;d<n;d+=1){var z=ae(d);if(E&&(z=z||0),z===void 0){j(d-1,void 0,!0);break}if(t+=z,o===0&&t<=h||d===o-1&&t+ae(o)<=h){j(o,null);break}else if(t+ge>h){j(d-1,t-z-T+L);break}}K&&ae(0)+T>h&&me(null)}},[h,fe,L,T,k,w]);var Re=Fe&&!!re.length,Ee={};ee!==null&&y&&(Ee={position:"absolute",left:ee,top:0});var D={prefixCls:te,responsive:y,component:J,invalidate:pe},Qe=p?function(t,n){var o=k(t,n);return r.createElement(G.Provider,{key:o,value:b(b({},D),{},{order:n,item:t,itemKey:o,registerSize:Se,display:n<=O})},p(t,n))}:function(t,n){var o=k(t,n);return r.createElement(W,_({},D,{order:n,key:o,item:t,renderItem:Ve,itemKey:o,registerSize:Se,display:n<=O}))},he={order:Re?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:je,display:Re},ie=$||Et,qe=X?r.createElement(G.Provider,{value:b(b({},D),he)},X(re)):r.createElement(W,_({},D,he),typeof ie=="function"?ie(re):ie),we=r.createElement(U,_({className:se(!pe&&i,H),style:B,ref:s},A),w.map(Qe),Te?qe:null,K&&r.createElement(W,_({},D,{responsive:ne,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:Ge,display:!0,style:Ee}),K));return ne?r.createElement(_e,{onResize:ke,disabled:!y},we):we}var Q=r.forwardRef(ht);Q.displayName="Overflow";Q.Item=Ce;Q.RESPONSIVE=Ie;Q.INVALIDATE=Ne;export{Q as F,at as a,rt as b,it as c,It as i,nt as s};
