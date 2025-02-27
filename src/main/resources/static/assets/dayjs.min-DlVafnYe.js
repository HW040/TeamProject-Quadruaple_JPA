import{M as G}from"./index-CG8vYf2y.js";var W={exports:{}},K=W.exports,E;function X(){return E||(E=1,function(V,et){(function(A,x){V.exports=x()})(K,function(){var A=1e3,x=6e4,U=36e5,I="millisecond",S="second",w="minute",_="hour",M="day",H="week",m="month",J="quarter",y="year",O="date",Z="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},F=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},R={s:F,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+F(r,2,"0")+":"+F(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),i=t-e<0,u=n.clone().add(r+(i?-1:1),m);return+(-(r+(t-e)/(i?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y,w:H,d:M,D:O,h:_,m:w,s:S,ms:I,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},k="en",D={};D[k]=Q;var q="$isDayjsObject",N=function(s){return s instanceof C||!(!s||!s[q])},T=function s(n,t,r){var e;if(!n)return k;if(typeof n=="string"){var i=n.toLowerCase();D[i]&&(e=i),t&&(D[i]=t,e=i);var u=n.split("-");if(!e&&u.length>1)return s(u[0])}else{var o=n.name;D[o]=n,e=o}return!r&&e&&(k=e),e||!r&&k},f=function(s,n){if(N(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new C(t)},a=R;a.l=T,a.i=N,a.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var C=function(){function s(t){this.$L=T(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[q]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(a.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(B);if(u){var o=u[2]-1||0,c=(u[7]||"0").substring(0,3);return i?new Date(Date.UTC(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],o,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return a},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return a.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!a.u(r)||r,u=a.p(t),o=function(p,$){var v=a.w(e.$u?Date.UTC(e.$y,$,p):new Date(e.$y,$,p),e);return i?v:v.endOf(M)},c=function(p,$){return a.w(e.toDate()[p].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),e)},h=this.$W,d=this.$M,l=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case y:return i?o(1,0):o(31,11);case m:return i?o(1,d):o(0,d+1);case H:var g=this.$locale().weekStart||0,Y=(h<g?h+7:h)-g;return o(i?l-Y:l+(6-Y),d);case M:case O:return c(b+"Hours",0);case _:return c(b+"Minutes",1);case w:return c(b+"Seconds",2);case S:return c(b+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=a.p(t),u="set"+(this.$u?"UTC":""),o=(e={},e[M]=u+"Date",e[O]=u+"Date",e[m]=u+"Month",e[y]=u+"FullYear",e[_]=u+"Hours",e[w]=u+"Minutes",e[S]=u+"Seconds",e[I]=u+"Milliseconds",e)[i],c=i===M?this.$D+(r-this.$W):r;if(i===m||i===y){var h=this.clone().set(O,1);h.$d[o](c),h.init(),this.$d=h.set(O,Math.min(this.$D,h.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[a.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var u=a.p(r),o=function(d){var l=f(i);return a.w(l.date(l.date()+Math.round(d*t)),i)};if(u===m)return this.set(m,this.$M+t);if(u===y)return this.set(y,this.$y+t);if(u===M)return o(1);if(u===H)return o(7);var c=(e={},e[w]=x,e[_]=U,e[S]=A,e)[u]||1,h=this.$d.getTime()+t*c;return a.w(h,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||Z;var i=t||"YYYY-MM-DDTHH:mm:ssZ",u=a.z(this),o=this.$H,c=this.$m,h=this.$M,d=e.weekdays,l=e.months,b=e.meridiem,g=function($,v,j,L){return $&&($[v]||$(r,i))||j[v].slice(0,L)},Y=function($){return a.s(o%12||12,$,"0")},p=b||function($,v,j){var L=$<12?"AM":"PM";return j?L.toLowerCase():L};return i.replace(P,function($,v){return v||function(j){switch(j){case"YY":return String(r.$y).slice(-2);case"YYYY":return a.s(r.$y,4,"0");case"M":return h+1;case"MM":return a.s(h+1,2,"0");case"MMM":return g(e.monthsShort,h,l,3);case"MMMM":return g(l,h);case"D":return r.$D;case"DD":return a.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return g(e.weekdaysMin,r.$W,d,2);case"ddd":return g(e.weekdaysShort,r.$W,d,3);case"dddd":return d[r.$W];case"H":return String(o);case"HH":return a.s(o,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return p(o,c,!0);case"A":return p(o,c,!1);case"m":return String(c);case"mm":return a.s(c,2,"0");case"s":return String(r.$s);case"ss":return a.s(r.$s,2,"0");case"SSS":return a.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,u=this,o=a.p(r),c=f(t),h=(c.utcOffset()-this.utcOffset())*x,d=this-c,l=function(){return a.m(u,c)};switch(o){case y:i=l()/12;break;case m:i=l();break;case J:i=l()/3;break;case H:i=(d-h)/6048e5;break;case M:i=(d-h)/864e5;break;case _:i=d/U;break;case w:i=d/x;break;case S:i=d/A;break;default:i=d}return e?i:a.a(i)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return D[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=T(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return a.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=C.prototype;return f.prototype=z,[["$ms",I],["$s",S],["$m",w],["$H",_],["$W",M],["$M",m],["$y",y],["$D",O]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,C,f),s.$i=!0),f},f.locale=T,f.isDayjs=N,f.unix=function(s){return f(1e3*s)},f.en=D[k],f.Ls=D,f.p={},f})}(W)),W.exports}var tt=X();const rt=G(tt);export{rt as d,X as r};
