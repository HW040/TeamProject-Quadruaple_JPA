var se=Object.defineProperty;var ie=(a,e,t)=>e in a?se(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var k=(a,e,t)=>ie(a,typeof e!="symbol"?e+"":e,t);import{r as h,S as w,j as E}from"./index-C92yST0r.js";const m=typeof window<"u"&&typeof document<"u"?h.useLayoutEffect:h.useEffect,o=(a,e,t)=>{m(()=>{if(!a||!t)return;const r=function(){for(var l=arguments.length,u=new Array(l),i=0;i<l;i++)u[i]=arguments[i];return u===void 0?t(a):t(a,...u)};return kakao.maps.event.addListener(a,e,r),()=>{kakao.maps.event.removeListener(a,e,r)}},[a,e,t])},R="__react-kakao-maps-sdk__";let g=function(a){return a[a.INITIALIZED=0]="INITIALIZED",a[a.LOADING=1]="LOADING",a[a.SUCCESS=2]="SUCCESS",a[a.FAILURE=3]="FAILURE",a}({});const re=`${R}_Loader`,s=class s{constructor(e){k(this,"callbacks",[]);k(this,"done",!1);k(this,"loading",!1);k(this,"errors",[]);let{appkey:t,id:r=re,libraries:l=[],nonce:u,retries:i=3,url:b="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=r,this.appkey=t,this.libraries=l,this.nonce=u,this.retries=i,this.url=b,s.instance&&!s.equalOptions(this.options,s.instance.options)&&!s.equalOptions(this.options,s.instance.options))switch(s.instance.status){case g.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(s.instance.options,null,2)}`);default:s.instance.reset(),s.instance=this;break}return s.instance||(s.instance=this),s.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),s.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return s.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r):e(window.kakao)})})}get status(){return this.onEvent?g.FAILURE:this.done?g.SUCCESS:this.loading?g.LOADING:g.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],s.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{s.instance.done=!0,s.instance.loading=!1,s.instance.callbacks.forEach(e=>{e(s.instance.onEvent)}),s.instance.callbacks=[],s.loadEventCallback.forEach(e=>{e(s.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let r=0;r<e.libraries.length;++r)if(e.libraries[r]!==t.libraries[r])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};k(s,"loadEventCallback",new Set);let C=s;const p=function(a,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),l=2;l<t;l++)r[l-2]=arguments[l];m(()=>{!a||r.every(u=>typeof u>"u")||a[e].call(a,...r)},[a,e,...r])},U=w.createContext(void 0),ce=w.forwardRef(function(e,t){let{id:r,as:l,children:u,center:i,isPanto:b=!1,padding:j=32,disableDoubleClick:L,disableDoubleClickZoom:y,draggable:M,zoomable:F,keyboardShortcuts:x,level:S,maxLevel:K,minLevel:N,mapTypeId:f,projectionId:A,scrollwheel:O,tileAnimation:D,onBoundsChanged:$,onCenterChanged:Z,onClick:q,onDoubleClick:P,onDrag:G,onDragEnd:z,onDragStart:B,onIdle:H,onMaptypeidChanged:J,onMouseMove:Q,onRightClick:V,onTileLoaded:W,onZoomChanged:X,onZoomStart:Y,onCreate:v,..._}=e;const ee=l||"div",[I,te]=h.useState(!1),[n,ne]=h.useState(),T=h.useRef(null);return m(()=>{const c=C.addLoadEventLisnter(d=>te(!d));return()=>{C.removeLoadEventLisnter(c)}},[]),m(()=>{if(!I)return;const c=T.current;if(!c)return;const d="lat"in i?new kakao.maps.LatLng(i.lat,i.lng):new kakao.maps.Coords(i.x,i.y),ae=new kakao.maps.Map(c,{center:d,disableDoubleClick:L,disableDoubleClickZoom:y,draggable:M,keyboardShortcuts:x,level:S,mapTypeId:typeof f=="string"?kakao.maps.MapTypeId[f]:f,projectionId:A,scrollwheel:O,tileAnimation:D});return ne(ae),()=>{c.innerHTML=""}},[I,L,y,D]),h.useImperativeHandle(t,()=>n,[n]),m(()=>{!n||!v||v(n)},[n,v]),m(()=>{if(!n)return;let c=n.getCenter();c instanceof kakao.maps.Coords&&(c=c.toLatLng());const d="lat"in i?new kakao.maps.LatLng(i.lat,i.lng):new kakao.maps.Coords(i.x,i.y);d instanceof kakao.maps.LatLng&&d.equals(c)||d instanceof kakao.maps.Coords&&d.toLatLng().equals(c)||(b?n.panTo(d,j):n.setCenter(d))},[n,i.lat,i.lng,i.x,i.y]),p(n,"setDraggable",M),p(n,"setZoomable",F),p(n,"setKeyboardShortcuts",x),p(n,"setLevel",S),p(n,"setMapTypeId",I?typeof f=="string"?kakao.maps.MapTypeId[f]:f:void 0),p(n,"setProjectionId",A),p(n,"setMinLevel",K),p(n,"setMaxLevel",N),o(n,"bounds_changed",$),o(n,"center_changed",Z),o(n,"click",q),o(n,"dblclick",P),o(n,"drag",G),o(n,"dragstart",B),o(n,"dragend",z),o(n,"idle",H),o(n,"maptypeid_changed",J),o(n,"mousemove",Q),o(n,"rightclick",V),o(n,"tilesloaded",W),o(n,"zoom_changed",X),o(n,"zoom_start",Y),E.jsxs(E.Fragment,{children:[E.jsx(ee,{id:r||`${R}_Map`,..._,ref:T}),n&&E.jsx(U.Provider,{value:n,children:u})]})}),de=a=>{const e=h.useContext(U);if(!e)throw new Error(`${a?a+" Component":"useMap"} must exist inside Map Component!`);return e},ue=w.createContext(void 0);export{ue as K,ce as M,p as a,o as b,de as u};
