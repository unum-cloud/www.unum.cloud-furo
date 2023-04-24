(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function M(){}function Ae(e,t){for(const n in t)e[n]=t[n];return e}function Rn(e){return e()}function _n(){return Object.create(null)}function He(e){e.forEach(Rn)}function Nt(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function es(e){return Object.keys(e).length===0}function At(e,...t){if(e==null)return M;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(e){let t;return At(e,n=>t=n)(),t}function Oe(e,t,n){e.$$.on_destroy.push(At(t,n))}function Tt(e,t,n,s){if(e){const r=Nn(e,t,n,s);return e[0](r)}}function Nn(e,t,n,s){return e[1]&&s?Ae(n.ctx.slice(),e[1](s(t))):n.ctx}function Mt(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],a=Math.max(t.dirty.length,r.length);for(let c=0;c<a;c+=1)o[c]=t.dirty[c]|r[c];return o}return t.dirty|r}return t.dirty}function Ut(e,t,n,s,r,o){if(r){const a=Nn(t,n,s,o);e.p(a,r)}}function Bt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}function vn(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function bn(e,t){const n={};t=new Set(t);for(const s in e)!t.has(s)&&s[0]!=="$"&&(n[s]=e[s]);return n}const ts=["",!0,1,"true","contenteditable"];function u(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function ke(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function te(e){return document.createTextNode(e)}function k(){return te(" ")}function ns(){return te("")}function ss(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function gt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)t[s]==null?e.removeAttribute(s):s==="style"?e.style.cssText=t[s]:s==="__value"?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:l(e,s,t[s])}function rs(e){return Array.from(e.childNodes)}function os(e,t){t=""+t,e.data!==t&&(e.data=t)}function ls(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function is(e,t,n){~ts.indexOf(n)?ls(e,t):os(e,t)}function as(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}let Ue;function Me(e){Ue=e}function vt(){if(!Ue)throw new Error("Function called outside component initialization");return Ue}function cs(e){vt().$$.on_mount.push(e)}function us(){const e=vt();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=as(t,n,{cancelable:s});return r.slice().forEach(a=>{a.call(e,o)}),!o.defaultPrevented}return!0}}function Cn(e,t){return vt().$$.context.set(e,t),t}function be(e){return vt().$$.context.get(e)}const Re=[],kn=[];let Ne=[];const yn=[],An=Promise.resolve();let Lt=!1;function Fn(){Lt||(Lt=!0,An.then(Tn))}function fs(){return Fn(),An}function Pt(e){Ne.push(e)}const $t=new Set;let Le=0;function Tn(){if(Le!==0)return;const e=Ue;do{try{for(;Le<Re.length;){const t=Re[Le];Le++,Me(t),ds(t.$$)}}catch(t){throw Re.length=0,Le=0,t}for(Me(null),Re.length=0,Le=0;kn.length;)kn.pop()();for(let t=0;t<Ne.length;t+=1){const n=Ne[t];$t.has(n)||($t.add(n),n())}Ne.length=0}while(Re.length);for(;yn.length;)yn.pop()();Lt=!1,$t.clear(),Me(e)}function ds(e){if(e.fragment!==null){e.update(),He(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Pt)}}function hs(e){const t=[],n=[];Ne.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),Ne=t}const mt=new Set;let ms;function x(e,t){e&&e.i&&(mt.delete(e),e.i(t))}function S(e,t,n,s){if(e&&e.o){if(mt.has(e))return;mt.add(e),ms.c.push(()=>{mt.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function gs(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const f in a)f in c||(s[f]=1);for(const f in c)r[f]||(n[f]=c[f],r[f]=1);e[o]=c}else for(const f in a)r[f]=1}for(const a in s)a in n||(n[a]=void 0);return n}function T(e){e&&e.c()}function N(e,t,n,s){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),s||Pt(()=>{const a=e.$$.on_mount.map(Rn).filter(Nt);e.$$.on_destroy?e.$$.on_destroy.push(...a):He(a),e.$$.on_mount=[]}),o.forEach(Pt)}function A(e,t){const n=e.$$;n.fragment!==null&&(hs(n.after_update),He(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ps(e,t){e.$$.dirty[0]===-1&&(Re.push(e),Fn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,s,r,o,a,c=[-1]){const f=Ue;Me(e);const i=e.$$={fragment:null,ctx:[],props:o,update:M,not_equal:r,bound:_n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:_n(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};a&&a(i.root);let m=!1;if(i.ctx=n?n(e,t.props||{},(d,v,...b)=>{const y=b.length?b[0]:v;return i.ctx&&r(i.ctx[d],i.ctx[d]=y)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](y),m&&ps(e,d)),v}):[],i.update(),m=!0,He(i.before_update),i.fragment=s?s(i.ctx):!1,t.target){if(t.hydrate){const d=rs(t.target);i.fragment&&i.fragment.l(d),d.forEach(L)}else i.fragment&&i.fragment.c();t.intro&&x(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),Tn()}Me(f)}class K{$destroy(){A(this,1),this.$destroy=M}$on(t,n){if(!Nt(n))return M;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!es(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const $n=e=>typeof e>"u",Mn=e=>typeof e=="function",_s=e=>typeof e=="number";function vs(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bs(){let e=0;return()=>e++}function Cs(){return Math.random().toString(36).substring(2)}const pt=typeof window>"u";function Un(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}const Bn=(e,t)=>e?{}:{style:t},ks=e=>({"aria-hidden":"true",...Bn(e,"display:none;")}),Pe=[];function ys(e,t){return{subscribe:ve(e,t).subscribe}}function ve(e,t=M){let n;const s=new Set;function r(c){if(z(e,c)&&(e=c,n)){const f=!Pe.length;for(const i of s)i[1](),Pe.push(i,e);if(f){for(let i=0;i<Pe.length;i+=2)Pe[i][0](Pe[i+1]);Pe.length=0}}}function o(c){r(c(e))}function a(c,f=M){const i=[c,f];return s.add(i),s.size===1&&(n=t(r)||M),c(e),()=>{s.delete(i),s.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:a}}function $s(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return ys(n,a=>{let c=!1;const f=[];let i=0,m=M;const d=()=>{if(i)return;m();const b=t(s?f[0]:f,a);o?a(b):m=Nt(b)?b:M},v=r.map((b,y)=>At(b,P=>{f[y]=P,i&=~(1<<y),c&&d()},()=>{i|=1<<y}));return c=!0,d(),function(){He(v),m(),c=!1}})}const Ht=e=>`@@svnav-ctx__${e}`,Ot=Ht("LOCATION"),Be=Ht("ROUTER"),xs=Ht("ROUTE"),Hn=/^:(.+)/,Te=(e,t,n)=>e.substr(t,n),Rt=(e,t)=>Te(e,0,t.length)===t,ws=e=>e==="",Es=e=>Hn.test(e),Dn=e=>e[0]==="*",Vn=e=>e.replace(/(^\/+|\/+$)/g,"");function de(e,t=!1){const n=Vn(e).split("/");return t?n.filter(Boolean):n}const xt=(e,t)=>e+(t?`?${t}`:""),jn=e=>`/${Vn(e)}`;function Dt(...e){const t=s=>de(s,!0).join("/"),n=e.map(t).join("/");return jn(n)}const Vt=1,jt=2,Ce=3,Ss=4,zn=5,Is=6,Ls=7,Ps=8,Os=9,Gn=10,Zn=11,Rs={[Vt]:"Link",[jt]:"Route",[Ce]:"Router",[Ss]:"useFocus",[zn]:"useLocation",[Is]:"useMatch",[Ls]:"useNavigate",[Ps]:"useParams",[Os]:"useResolvable",[Gn]:"useResolve",[Zn]:"navigate"},zt=e=>Rs[e];function Ns(e,t){let n;return e===jt?n=t.path?`path="${t.path}"`:"default":e===Vt?n=`to="${t.to}"`:e===Ce&&(n=`basepath="${t.basepath||""}"`),`<${zt(e)} ${n||""} />`}function As(e,t,n,s){const r=n&&Ns(s||e,n),o=r?`

Occurred in: ${r}`:"",a=zt(e),c=Mn(t)?t(a):t;return`<${a}> ${c}${o}`}const Kn=e=>(...t)=>e(As(...t)),Yn=Kn(e=>{throw new Error(e)}),_t=Kn(console.warn),xn=4,Fs=3,Ts=2,Ms=1,Us=1;function Bs(e,t){const n=e.default?0:de(e.fullPath).reduce((s,r)=>{let o=s;return o+=xn,ws(r)?o+=Us:Es(r)?o+=Ts:Dn(r)?o-=xn+Ms:o+=Fs,o},0);return{route:e,score:n,index:t}}function Hs(e){return e.map(Bs).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function qn(e,t){let n,s;const[r]=t.split("?"),o=de(r),a=o[0]==="",c=Hs(e);for(let f=0,i=c.length;f<i;f++){const{route:m}=c[f];let d=!1;const v={},b=R=>({...m,params:v,uri:R});if(m.default){s=b(t);continue}const y=de(m.fullPath),P=Math.max(o.length,y.length);let O=0;for(;O<P;O++){const R=y[O],I=o[O];if(!$n(R)&&Dn(R)){const w=R==="*"?"*":R.slice(1);v[w]=o.slice(O).map(decodeURIComponent).join("/");break}if($n(I)){d=!0;break}const V=Hn.exec(R);if(V&&!a){const w=decodeURIComponent(I);v[V[1]]=w}else if(R!==I){d=!0;break}}if(!d){n=b(Dt(...o.slice(0,O)));break}}return n||s||null}function Ds(e,t){return qn([e],t)}function Vs(e,t){if(Rt(e,"/"))return e;const[n,s]=e.split("?"),[r]=t.split("?"),o=de(n),a=de(r);if(o[0]==="")return xt(r,s);if(!Rt(o[0],".")){const i=a.concat(o).join("/");return xt((r==="/"?"":"/")+i,s)}const c=a.concat(o),f=[];return c.forEach(i=>{i===".."?f.pop():i!=="."&&f.push(i)}),xt(`/${f.join("/")}`,s)}function wn(e,t){const{pathname:n,hash:s="",search:r="",state:o}=e,a=de(t,!0),c=de(n,!0);for(;a.length;)a[0]!==c[0]&&Yn(Ce,`Invalid state: All locations must begin with the basepath "${t}", found "${n}"`),a.shift(),c.shift();return{pathname:Dt(...c),hash:s,search:r,state:o}}const En=e=>e.length===1?"":e,Gt=e=>{const t=e.indexOf("?"),n=e.indexOf("#"),s=t!==-1,r=n!==-1,o=r?En(Te(e,n)):"",a=r?Te(e,0,n):e,c=s?En(Te(a,t)):"";return{pathname:(s?Te(a,0,t):a)||"/",search:c,hash:o}},js=e=>{const{pathname:t,search:n,hash:s}=e;return t+n+s};function zs(e,t,n){return Dt(n,Vs(e,t))}const wt="POP",Gs="PUSH",Zs="REPLACE";function Et(e){return{...e.location,pathname:encodeURI(decodeURI(e.location.pathname)),state:e.history.state,_key:e.history.state&&e.history.state._key||"initial"}}function Ks(e){let t=[],n=Et(e),s=wt;const r=(o=t)=>o.forEach(a=>a({location:n,action:s}));return{get location(){return n},listen(o){t.push(o);const a=()=>{n=Et(e),s=wt,r([o])};r([o]);const c=Un(e,"popstate",a);return()=>{c(),t=t.filter(f=>f!==o)}},navigate(o,a){const{state:c={},replace:f=!1}=a||{};if(s=f?Zs:Gs,_s(o))a&&_t(Zn,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),s=wt,e.history.go(o);else{const i={...c,_key:Cs()};try{e.history[f?"replaceState":"pushState"](i,"",o)}catch{e.location[f?"replace":"assign"](o)}}n=Et(e),r()}}}function St(e,t){return{...Gt(t),state:e}}function Ys(e="/"){let t=0,n=[St(null,e)];return{get entries(){return n},get location(){return n[t]},addEventListener(){},removeEventListener(){},history:{get state(){return n[t].state},pushState(s,r,o){t++,n=n.slice(0,t),n.push(St(s,o))},replaceState(s,r,o){n[t]=St(s,o)},go(s){const r=t+s;r<0||r>n.length-1||(t=r)}}}}const qs=!!(!pt&&window.document&&window.document.createElement),Ws=!pt&&window.location.origin==="null",Qs=Ks(qs&&!Ws?window:Ys());let ee=null,Wn=!0;function Xs(e,t){const n=document.querySelectorAll("[data-svnav-router]");for(let s=0;s<n.length;s++){const r=n[s],o=Number(r.dataset.svnavRouter);if(o===e)return!0;if(o===t)return!1}return!1}function Js(e){(!ee||e.level>ee.level||e.level===ee.level&&Xs(e.routerId,ee.routerId))&&(ee=e)}function er(){ee=null}function tr(){Wn=!1}function Sn(e){if(!e)return!1;const t="tabindex";try{if(!e.hasAttribute(t)){e.setAttribute(t,"-1");let n;n=Un(e,"blur",()=>{e.removeAttribute(t),n()})}return e.focus(),document.activeElement===e}catch{return!1}}function nr(e,t){return Number(e.dataset.svnavRouteEnd)===t}function sr(e){return/^H[1-6]$/i.test(e.tagName)}function In(e,t=document){return t.querySelector(e)}function rr(e){let n=In(`[data-svnav-route-start="${e}"]`).nextElementSibling;for(;!nr(n,e);){if(sr(n))return n;const s=In("h1,h2,h3,h4,h5,h6",n);if(s)return s;n=n.nextElementSibling}return null}function or(e){Promise.resolve(Ft(e.focusElement)).then(t=>{const n=t||rr(e.id);n||_t(Ce,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,e,jt),!Sn(n)&&Sn(document.documentElement)})}const lr=(e,t,n)=>(s,r)=>fs().then(()=>{if(!ee||Wn){tr();return}if(s&&or(ee.route),e.announcements&&r){const{path:o,fullPath:a,meta:c,params:f,uri:i}=ee.route,m=e.createAnnouncement({path:o,fullPath:a,meta:c,params:f,uri:i},Ft(n));Promise.resolve(m).then(d=>{t.set(d)})}er()}),ir="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function ar(e){let t,n,s=[{role:"status"},{"aria-atomic":"true"},{"aria-live":"polite"},{"data-svnav-announcer":""},Bn(e[6],ir)],r={};for(let o=0;o<s.length;o+=1)r=Ae(r,s[o]);return{c(){t=h("div"),n=te(e[0]),gt(t,r)},m(o,a){F(o,t,a),u(t,n)},p(o,a){a[0]&1&&is(n,o[0],r.contenteditable)},d(o){o&&L(t)}}}function cr(e){let t,n,s,r,o,a=[ks(e[6]),{"data-svnav-router":e[3]}],c={};for(let d=0;d<a.length;d+=1)c=Ae(c,a[d]);const f=e[22].default,i=Tt(f,e,e[21],null);let m=e[2]&&e[4]&&e[1].announcements&&ar(e);return{c(){t=h("div"),n=k(),i&&i.c(),s=k(),m&&m.c(),r=ns(),gt(t,c)},m(d,v){F(d,t,v),F(d,n,v),i&&i.m(d,v),F(d,s,v),m&&m.m(d,v),F(d,r,v),o=!0},p(d,v){i&&i.p&&(!o||v[0]&2097152)&&Ut(i,f,d,d[21],o?Mt(f,d[21],v,null):Bt(d[21]),null),d[2]&&d[4]&&d[1].announcements&&m.p(d,v)},i(d){o||(x(i,d),o=!0)},o(d){S(i,d),o=!1},d(d){d&&L(t),d&&L(n),i&&i.d(d),d&&L(s),m&&m.d(d),d&&L(r)}}}const ur=bs(),Ln="/";function fr(e,t,n){let s,r,o,a,c,{$$slots:f={},$$scope:i}=t,{basepath:m=Ln}=t,{url:d=null}=t,{history:v=Qs}=t,{primary:b=!0}=t,{a11y:y={}}=t,{disableInlineStyles:P=!1}=t;const O={createAnnouncement:g=>`Navigated to ${g.uri}`,announcements:!0,...y},R=m,I=jn(m),V=be(Ot),w=be(Be),U=!V,ne=ur(),_=b&&!(w&&!w.manageFocus),W=ve("");Oe(e,W,g=>n(0,c=g));const Q=w?w.disableInlineStyles:P,X=ve([]);Oe(e,X,g=>n(20,a=g));const he=ve(null);Oe(e,he,g=>n(18,r=g));let J=!1;const me=U?0:w.level+1,Y=U?ve((()=>wn(pt?Gt(d):v.location,I))()):V;Oe(e,Y,g=>n(17,s=g));const ye=ve(s);Oe(e,ye,g=>n(19,o=g));const q=lr(O,W,Y),B=g=>H=>H.filter(D=>D.id!==g);function $e(g){if(pt){if(J)return;const H=Ds(g,s.pathname);if(H)return J=!0,H}else X.update(H=>{const D=B(g.id)(H);return D.push(g),D})}function De(g){X.update(B(g))}return!U&&m!==Ln&&_t(Ce,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:m}),U&&(cs(()=>v.listen(H=>{const D=wn(H.location,I);ye.set(s),Y.set(D)})),Cn(Ot,Y)),Cn(Be,{activeRoute:he,registerRoute:$e,unregisterRoute:De,manageFocus:_,level:me,id:ne,history:U?v:w.history,basepath:U?I:w.basepath,disableInlineStyles:Q}),e.$$set=g=>{"basepath"in g&&n(11,m=g.basepath),"url"in g&&n(12,d=g.url),"history"in g&&n(13,v=g.history),"primary"in g&&n(14,b=g.primary),"a11y"in g&&n(15,y=g.a11y),"disableInlineStyles"in g&&n(16,P=g.disableInlineStyles),"$$scope"in g&&n(21,i=g.$$scope)},e.$$.update=()=>{if(e.$$.dirty[0]&2048&&m!==R&&_t(Ce,'You cannot change the "basepath" prop. It is ignored.'),e.$$.dirty[0]&1179648){const g=qn(a,s.pathname);he.set(g)}if(e.$$.dirty[0]&655360&&U){const g=!!s.hash,H=!g&&_,D=!g||s.pathname!==o.pathname;q(H,D)}e.$$.dirty[0]&262144&&_&&r&&r.primary&&Js({level:me,routerId:ne,route:r})},[c,O,U,ne,_,W,Q,X,he,Y,ye,m,d,v,b,y,P,s,r,o,a,i,f]}class dr extends K{constructor(t){super(),Z(this,t,fr,cr,z,{basepath:11,url:12,history:13,primary:14,a11y:15,disableInlineStyles:16},null,[-1,-1])}}const hr=dr;function Zt(e,t,n=Be,s=Ce){be(n)||Yn(e,o=>`You cannot use ${o} outside of a ${zt(s)}.`,t)}const mr=e=>{const{subscribe:t}=be(e);return{subscribe:t}};function gr(){return Zt(zn),mr(Ot)}function pr(){const{history:e}=be(Be);return e}function _r(){const e=be(xs);return e?$s(e,t=>t.base):ve("/")}function vr(){Zt(Gn);const e=_r(),{basepath:t}=be(Be);return s=>zs(s,Ft(e),t)}function br(e){let t,n,s,r;const o=e[13].default,a=Tt(o,e,e[12],null);let c=[{href:e[0]},e[2],e[1]],f={};for(let i=0;i<c.length;i+=1)f=Ae(f,c[i]);return{c(){t=h("a"),a&&a.c(),gt(t,f)},m(i,m){F(i,t,m),a&&a.m(t,null),n=!0,s||(r=ss(t,"click",e[4]),s=!0)},p(i,[m]){a&&a.p&&(!n||m&4096)&&Ut(a,o,i,i[12],n?Mt(o,i[12],m,null):Bt(i[12]),null),gt(t,f=gs(c,[(!n||m&1)&&{href:i[0]},m&4&&i[2],m&2&&i[1]]))},i(i){n||(x(a,i),n=!0)},o(i){S(a,i),n=!1},d(i){i&&L(t),a&&a.d(i),s=!1,r()}}}function Cr(e,t,n){let s,r,o,a,c,f;const i=["to","replace","state","getProps"];let m=bn(t,i),d,{$$slots:v={},$$scope:b}=t,{to:y}=t,{replace:P=!1}=t,{state:O={}}=t,{getProps:R=null}=t;Zt(Vt,t);const I=gr();Oe(e,I,_=>n(11,d=_));const V=us(),w=vr(),{navigate:U}=pr();function ne(_){V("click",_),vs(_)&&(_.preventDefault(),U(s,{state:O,replace:a||P}))}return e.$$set=_=>{n(19,t=Ae(Ae({},t),vn(_))),n(18,m=bn(t,i)),"to"in _&&n(5,y=_.to),"replace"in _&&n(6,P=_.replace),"state"in _&&n(7,O=_.state),"getProps"in _&&n(8,R=_.getProps),"$$scope"in _&&n(12,b=_.$$scope)},e.$$.update=()=>{e.$$.dirty&2080&&n(0,s=w(y,d)),e.$$.dirty&2049&&n(10,r=Rt(d.pathname,s)),e.$$.dirty&2049&&n(9,o=s===d.pathname),e.$$.dirty&2049&&(a=Gt(s)===js(d)),e.$$.dirty&512&&n(2,c=o?{"aria-current":"page"}:{}),n(1,f=(()=>{if(Mn(R)){const _=R({location:d,href:s,isPartiallyCurrent:r,isCurrent:o});return{...m,..._}}return m})())},t=vn(t),[s,f,c,I,ne,y,P,O,R,o,r,d,b,v]}class kr extends K{constructor(t){super(),Z(this,t,Cr,br,z,{to:5,replace:6,state:7,getProps:8})}}const It=kr;function yr(e,t){return n(e,t),{update(s){n(e,s)}};function n(s,r){for(const o in r)s.style.setProperty(`${o}`,r[o])}}function Kt(e,t,n){const s={};return $r(e,r=>{s[Xn(t,r)]=`${e[r]}${n}`}),s}function Qn(e,t){return`var(${Xn(e,t)})`}function Xn(e,t){return`--${e}-${t.toString()}`}function $r(e,t){Object.keys(e).filter(n=>isNaN(Number(n))).forEach((n,s)=>{t(n,s)})}var G=(e=>(e.white="#FFFFFF",e.dirtyWhite="#F7F9FC",e.dirtyWhite2="#F2F4FB",e.lightGrey="#CCCCCC",e.grey="#B3B3B3",e.darkGrey="#787D8E",e.darkerGrey="#545A71",e.black="#31343F",e.codeBlack="rgb(14, 17, 22)",e.pureBlack="#000000",e.currentColor="currentColor",e))(G||{});function xr(){return Kt(G,"color","")}function Pn(e){return Qn("color",Object.keys(G)[Object.values(G).indexOf(e)])}var bt=(e=>(e[e.xxs=.125]="xxs",e[e.xs=.25]="xs",e[e.s=.5]="s",e[e.m=.75]="m",e[e.l=1]="l",e[e.xl=1.25]="xl",e[e.xxl=1.5]="xxl",e[e.xxxl=2]="xxxl",e[e.xxxxl=2.5]="xxxxl",e[e.xxxxxl=3]="xxxxxl",e[e.xxxxxxl=3.25]="xxxxxxl",e[e.xxxxxxxl=3.75]="xxxxxxxl",e[e.xxxxxxxxl=5]="xxxxxxxxl",e))(bt||{});function wr(){return Kt(bt,"spacing","rem")}function On(e){return Qn("spacing",bt[e])}function Er(e){let t,n,s,r;const o=e[5].default,a=Tt(o,e,e[4],null);return{c(){t=ke("svg"),a&&a.c(),l(t,"width","100%"),l(t,"height","100%"),l(t,"viewBox",e[0]),l(t,"style",n=e[1]?`margin: ${On(e[1])}`:""),l(t,"fill",s=e[2]?Pn(e[2]):"")},m(c,f){F(c,t,f),a&&a.m(t,null),r=!0},p(c,[f]){a&&a.p&&(!r||f&16)&&Ut(a,o,c,c[4],r?Mt(o,c[4],f,null):Bt(c[4]),null),(!r||f&1)&&l(t,"viewBox",c[0]),(!r||f&2&&n!==(n=c[1]?`margin: ${On(c[1])}`:""))&&l(t,"style",n),(!r||f&4&&s!==(s=c[2]?Pn(c[2]):""))&&l(t,"fill",s)},i(c){r||(x(a,c),r=!0)},o(c){S(a,c),r=!1},d(c){c&&L(t),a&&a.d(c)}}}function Sr(e,t,n){let{$$slots:s={},$$scope:r}=t,{size:o=bt.l}=t,{viewBox:a=`0 0 ${o} ${o}`}=t,{spacing:c}=t,{fill:f=G.grey}=t;return e.$$set=i=>{"size"in i&&n(3,o=i.size),"viewBox"in i&&n(0,a=i.viewBox),"spacing"in i&&n(1,c=i.spacing),"fill"in i&&n(2,f=i.fill),"$$scope"in i&&n(4,r=i.$$scope)},[a,c,f,o,r,s]}class Fe extends K{constructor(t){super(),Z(this,t,Sr,Er,z,{size:3,viewBox:0,spacing:1,fill:2})}}function Ir(e){let t;return{c(){t=ke("path"),l(t,"d","M15.9573 0.833252H2.03926C1.37231 0.833252 0.833313 1.35932 0.833313 2.01061V15.9865C0.833313 16.6371 1.37231 17.1666 2.03926 17.1666H15.9573C16.6242 17.1666 17.1666 16.6371 17.1666 15.9892V2.01061C17.1666 1.35932 16.6242 0.833252 15.9573 0.833252ZM5.67887 14.752H3.25473V6.95485H5.67887V14.752ZM4.46748 5.8925C4.27865 5.8997 4.0903 5.86873 3.91372 5.80144C3.73714 5.73414 3.57595 5.63191 3.4398 5.50086C3.30366 5.36981 3.19535 5.21263 3.12138 5.03874C3.0474 4.86485 3.00927 4.67783 3.00927 4.48886C3.00927 4.29989 3.0474 4.11286 3.12138 3.93897C3.19535 3.76508 3.30366 3.6079 3.4398 3.47685C3.57595 3.3458 3.73714 3.24357 3.91372 3.17627C4.0903 3.10898 4.27865 3.07801 4.46748 3.08521C4.8344 3.09329 5.18357 3.24472 5.44021 3.50708C5.69685 3.76943 5.84056 4.12185 5.84056 4.48886C5.84056 4.85586 5.69685 5.20828 5.44021 5.47064C5.18357 5.73299 4.8344 5.88442 4.46748 5.8925ZM14.752 14.752H12.3306V10.9613C12.3306 10.0589 12.3143 8.89443 11.0702 8.89443C9.81052 8.89443 9.6186 9.88056 9.6186 10.898V14.752H7.20059V6.95485H9.52333V8.0206H9.55531C9.87722 7.4081 10.6687 6.76021 11.8454 6.76021C14.2988 6.76021 14.7514 8.37449 14.7514 10.474L14.752 14.752Z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Lr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 18 18",fill:e[1],spacing:e[0],$$slots:{default:[Ir]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Pr(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class Or extends K{constructor(t){super(),Z(this,t,Pr,Lr,z,{spacing:0,fill:1})}}function Rr(e){let t;return{c(){t=ke("path"),l(t,"fill-rule","evenodd"),l(t,"clip-rule","evenodd"),l(t,"d","M19.3331 4.0236L11.1686 9.39125C10.4708 9.85021 9.5294 9.85021 8.83147 9.39125L0.667068 4.0236V12.7572C0.667068 13.7657 1.56244 14.5833 2.66703 14.5833H17.3334C18.438 14.5833 19.3334 13.7657 19.3334 12.7572L19.3331 4.0236ZM0.666763 2.52374L9.61058 8.40339C9.84317 8.55611 10.1566 8.55611 10.3892 8.40339L19.333 2.52374V2.40934C19.333 1.40078 18.4376 0.583252 17.333 0.583252H2.66665C1.56206 0.583252 0.666687 1.40078 0.666687 2.40934L0.666763 2.52374Z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Nr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 20 15",fill:e[1],spacing:e[0],$$slots:{default:[Rr]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Ar(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class Fr extends K{constructor(t){super(),Z(this,t,Ar,Nr,z,{spacing:0,fill:1})}}function Tr(e){let t;return{c(){t=ke("path"),l(t,"fill-rule","evenodd"),l(t,"clip-rule","evenodd"),l(t,"d","M8 0C3.58 0 0 3.67055 0 8.20235C0 11.8319 2.29 14.8975 5.47 15.9843C5.87 16.0561 6.02 15.81 6.02 15.5947C6.02 15.3999 6.01 14.754 6.01 14.067C4 14.4464 3.48 13.5646 3.32 13.1033C3.23 12.8674 2.84 12.1395 2.5 11.9447C2.22 11.7909 1.82 11.4115 2.49 11.4013C3.12 11.391 3.57 11.9959 3.72 12.242C4.44 13.4826 5.59 13.134 6.05 12.9187C6.12 12.3855 6.33 12.0267 6.56 11.8216C4.78 11.6166 2.92 10.9091 2.92 7.77173C2.92 6.87972 3.23 6.14151 3.74 5.56735C3.66 5.36229 3.38 4.52155 3.82 3.39372C3.82 3.39372 4.49 3.17841 6.02 4.23446C6.66 4.04991 7.34 3.95763 8.02 3.95763C8.7 3.95763 9.38 4.04991 10.02 4.23446C11.55 3.16816 12.22 3.39372 12.22 3.39372C12.66 4.52155 12.38 5.36229 12.3 5.56735C12.81 6.14151 13.12 6.86947 13.12 7.77173C13.12 10.9194 11.25 11.6166 9.47 11.8216C9.76 12.078 10.01 12.5701 10.01 13.3391C10.01 14.4361 10 15.3179 10 15.5947C10 15.81 10.15 16.0664 10.55 15.9843C12.1381 15.4346 13.5182 14.3881 14.4958 12.9921C15.4735 11.5961 15.9996 9.92095 16 8.20235C16 3.67055 12.42 0 8 0Z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Mr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 16 16",fill:e[1],spacing:e[0],$$slots:{default:[Tr]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Ur(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class Br extends K{constructor(t){super(),Z(this,t,Ur,Mr,z,{spacing:0,fill:1})}}function Hr(e){let t;return{c(){t=ke("path"),l(t,"d","M6.53891 17.1657C13.5817 17.1657 17.434 10.8819 17.434 5.43395C17.434 5.25807 17.4309 5.07717 17.4231 4.90045C18.1728 4.31659 18.8197 3.59338 19.3334 2.76481C18.6349 3.09982 17.8945 3.31757 17.1354 3.41304C17.9344 2.89728 18.5327 2.08703 18.8192 1.13251C18.0674 1.61232 17.2452 1.95076 16.3879 2.13333C15.8104 1.47219 15.0467 1.03437 14.2149 0.887597C13.383 0.740827 12.5295 0.893287 11.7862 1.32139C11.043 1.7495 10.4514 2.42939 10.1031 3.25591C9.75477 4.08242 9.66906 5.0095 9.85924 5.89374C8.33717 5.81139 6.84815 5.38554 5.48871 4.64381C4.12927 3.90208 2.92975 2.86102 1.96791 1.58812C1.47922 2.49569 1.32969 3.56956 1.5497 4.59156C1.76972 5.61356 2.34278 6.50705 3.15247 7.09054C2.54463 7.06966 1.95012 6.8934 1.41802 6.57631V6.62739C1.41749 7.57979 1.72324 8.50299 2.28331 9.24012C2.84337 9.97724 3.62319 10.4828 4.49024 10.6709C3.92712 10.837 3.33606 10.8613 2.7628 10.7421C3.00777 11.5608 3.48392 12.2769 4.12485 12.7903C4.76579 13.3038 5.53955 13.589 6.33824 13.6063C5.54376 14.2789 4.63382 14.776 3.66058 15.0692C2.68735 15.3624 1.66994 15.4459 0.666687 15.3149C2.41893 16.5251 4.45718 17.167 6.53891 17.1657Z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Dr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 20 18",fill:e[1],spacing:e[0],$$slots:{default:[Hr]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Vr(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class jr extends K{constructor(t){super(),Z(this,t,Vr,Dr,z,{spacing:0,fill:1})}}function zr(e){let t;return{c(){t=ke("path"),l(t,"d","m38.8 36-2.4-2.4.2-.5c1.2-2.3 1.7-5.3 1.7-9V1.4c0-.4 0-.7-.3-1-.2-.2-.5-.3-.9-.3h-9.6l-.9.3c-.2.3-.4.6-.4 1v23c0 4.2-1 7.3-3 9.3-.4.6-1 1-1.7 1.4A15 15 0 0 0 27 35a12.5 12.5 0 0 0 1-1.8c1.2-2.3 1.8-5.3 1.8-9V2.6h5v21.8c0 4.2-1 7.3-3 9.3-1.9 2-4.6 3-7.9 3-3.4 0-6-1-8-3s-3-5-3-9.3v-23c0-.4 0-.7-.3-1-.2-.2-.5-.3-1-.3H2.2c-.4 0-.7.1-.9.3-.2.3-.3.6-.3 1v22.9c0 3.6.5 6.6 1.7 9 1.2 2.3 2.8 4 5 5.1 2.1 1.1 4.7 1.7 7.7 1.7l-.6-.3a11 11 0 0 1-4.3-4 9.4 9.4 0 0 1-3-2c-2-2-3-5.2-3-9.4V2.5h5v21.7c0 3.6.6 6.6 1.8 9 1.1 2.3 2.8 4 5 5.1 2 1.1 4.7 1.7 7.7 1.7s5.7-.6 7.8-1.7l1.3-.8 2.1 2.1a1.2 1.2 0 0 0 1.7 0l2-2a1.2 1.2 0 0 0 0-1.6z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Gr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 40 40",fill:e[1],spacing:e[0],$$slots:{default:[zr]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Zr(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class Kr extends K{constructor(t){super(),Z(this,t,Zr,Gr,z,{spacing:0,fill:1})}}function Yr(e){let t;return{c(){t=ke("path"),l(t,"d","M17.415 0H3.35313C1.86307 0 0.666687 1.16001 0.666687 2.57996V11.4201C0.666687 12.8401 1.88398 14 3.37405 14H17.4149C18.9051 14 20.1223 12.84 20.1223 11.4201L20.1225 2.57996C20.1015 1.16001 18.9051 0 17.415 0ZM13.1125 7.44009L8.85198 10.12C8.4952 10.36 7.99142 10.1001 7.99142 9.68009V4.30001C7.99142 3.87993 8.47412 3.64 8.85198 3.86L13.1125 6.56011C13.4483 6.76016 13.4483 7.22001 13.1125 7.44009Z")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function qr(e){let t,n;return t=new Fe({props:{viewBox:"0 0 21 14",fill:e[1],spacing:e[0],$$slots:{default:[Yr]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&2&&(o.fill=s[1]),r&1&&(o.spacing=s[0]),r&4&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function Wr(e,t,n){let{spacing:s=void 0}=t,{fill:r=void 0}=t;return e.$$set=o=>{"spacing"in o&&n(0,s=o.spacing),"fill"in o&&n(1,r=o.fill)},[s,r]}class Qr extends K{constructor(t){super(),Z(this,t,Wr,qr,z,{spacing:0,fill:1})}}function Xr(e){let t;return{c(){t=h("span"),t.textContent="UStore",l(t,"class","svelte-6dorfk")},m(n,s){F(n,t,s)},p:M,d(n){n&&L(t)}}}function Jr(e){let t;return{c(){t=te("About")},m(n,s){F(n,t,s)},d(n){n&&L(t)}}}function eo(e){let t;return{c(){t=te("Blog")},m(n,s){F(n,t,s)},d(n){n&&L(t)}}}function to(e){let t,n,s,r,o,a,c,f,i,m,d,v,b,y,P,O,R,I,V,w,U,ne,_,W,Q,X,he,J,me,ge,Y,ye,q,B,$e,De,g,H,D,Yt,Ve,qt,E,je,Wt,se,ze,Ge,Qt,re,Ze,Ke,Xt,oe,Ye,qe,Jt,le,We,Qe,en,ie,Xe,Je,tn,ae,et,tt,nn,ce,nt,st,sn,ue,rt,ot,rn,j,lt,on,it,pe,ln,at,_e,an,fe,cn,ct,un,xe,fn,ut,dn,we,ft,hn,Ee,Se,mn,dt,gn,Ie,pn,ht,$;return o=new Kr({props:{fill:G.white}}),m=new Br({props:{fill:G.currentColor}}),P=new Or({props:{fill:G.currentColor}}),w=new jr({props:{fill:G.currentColor}}),Q=new Qr({props:{fill:G.currentColor}}),ge=new Fr({props:{fill:G.currentColor}}),g=new It({props:{to:e[0].ustore,$$slots:{default:[Xr]},$$scope:{ctx:e}}}),pe=new It({props:{to:e[0].about,$$slots:{default:[Jr]},$$scope:{ctx:e}}}),_e=new It({props:{to:e[0].blog,$$slots:{default:[eo]},$$scope:{ctx:e}}}),{c(){t=h("nav"),n=h("section"),s=h("div"),r=h("span"),T(o.$$.fragment),a=k(),c=h("div"),f=h("a"),i=h("span"),T(m.$$.fragment),v=k(),b=h("a"),y=h("span"),T(P.$$.fragment),R=k(),I=h("a"),V=h("span"),T(w.$$.fragment),ne=k(),_=h("a"),W=h("span"),T(Q.$$.fragment),he=k(),J=h("a"),me=h("span"),T(ge.$$.fragment),ye=k(),q=h("div"),B=h("section"),$e=h("h5"),$e.textContent="Products",De=k(),T(g.$$.fragment),H=k(),D=h("span"),D.textContent="USearch",Yt=k(),Ve=h("span"),Ve.textContent="UForm",qt=k(),E=h("section"),je=h("h5"),je.textContent="Documentation",Wt=k(),se=h("a"),ze=h("span"),ze.textContent="UStore",Qt=k(),re=h("a"),Ze=h("span"),Ze.textContent="USearch",Xt=k(),oe=h("a"),Ye=h("span"),Ye.textContent="UCall",Jt=k(),le=h("a"),We=h("span"),We.textContent="UCSet",en=k(),ie=h("a"),Xe=h("span"),Xe.textContent="UDisk",tn=k(),ae=h("a"),et=h("span"),et.textContent="UForm",nn=k(),ce=h("a"),nt=h("span"),nt.textContent="UDSB",sn=k(),ue=h("a"),rt=h("span"),rt.textContent="UCSB",rn=k(),j=h("section"),lt=h("h5"),lt.textContent="Resources",on=k(),it=h("span"),T(pe.$$.fragment),ln=k(),at=h("span"),T(_e.$$.fragment),an=k(),fe=h("a"),cn=te("Careers"),un=k(),xe=h("a"),fn=te("Contact"),dn=k(),we=h("div"),ft=h("p"),ft.textContent=`2015 - ${new Date().getFullYear()}`,hn=k(),Ee=h("div"),Se=h("a"),mn=te("Terms of use"),gn=k(),Ie=h("a"),pn=te("Privacy Notice"),l(r,"class","logo icon icon-logo svelte-6dorfk"),l(i,"class","icon icon-social github svelte-6dorfk"),l(f,"href",d=e[0].github),l(f,"target","_blank"),l(f,"rel","noreferrer"),l(f,"class","svelte-6dorfk"),l(y,"class","icon icon-social svelte-6dorfk"),l(b,"href",O=e[0].linkedin),l(b,"target","_blank"),l(b,"rel","noreferrer"),l(b,"class","svelte-6dorfk"),l(V,"class","icon icon-social svelte-6dorfk"),l(I,"href",U=e[0].twitter),l(I,"target","_blank"),l(I,"rel","noreferrer"),l(I,"class","svelte-6dorfk"),l(W,"class","icon icon-social svelte-6dorfk"),l(_,"href",X=e[0].youtube),l(_,"target","_blank"),l(_,"rel","noreferrer"),l(_,"class","svelte-6dorfk"),l(me,"class","icon icon-social svelte-6dorfk"),l(J,"href",Y=e[0].mail),l(J,"class","svelte-6dorfk"),l(c,"class","icons svelte-6dorfk"),l(s,"class","social svelte-6dorfk"),l(n,"class","social-wrapper svelte-6dorfk"),l($e,"class","links-header svelte-6dorfk"),l(D,"class","svelte-6dorfk"),l(Ve,"class","svelte-6dorfk"),l(B,"class","products svelte-6dorfk"),l(je,"class","links-header svelte-6dorfk"),l(ze,"class","svelte-6dorfk"),l(se,"href",Ge=e[0].ustore),l(se,"target","_blank"),l(se,"rel","noreferrer"),l(se,"class","svelte-6dorfk"),l(Ze,"class","svelte-6dorfk"),l(re,"href",Ke=e[0].usearch),l(re,"target","_blank"),l(re,"rel","noreferrer"),l(re,"class","svelte-6dorfk"),l(Ye,"class","svelte-6dorfk"),l(oe,"href",qe=e[0].ucall),l(oe,"target","_blank"),l(oe,"rel","noreferrer"),l(oe,"class","svelte-6dorfk"),l(We,"class","svelte-6dorfk"),l(le,"href",Qe=e[0].ucset),l(le,"target","_blank"),l(le,"rel","noreferrer"),l(le,"class","svelte-6dorfk"),l(Xe,"class","svelte-6dorfk"),l(ie,"href",Je=e[0].udisk),l(ie,"target","_blank"),l(ie,"rel","noreferrer"),l(ie,"class","svelte-6dorfk"),l(et,"class","svelte-6dorfk"),l(ae,"href",tt=e[0].uform),l(ae,"target","_blank"),l(ae,"rel","noreferrer"),l(ae,"class","svelte-6dorfk"),l(nt,"class","svelte-6dorfk"),l(ce,"href",st=e[0].udsb),l(ce,"target","_blank"),l(ce,"rel","noreferrer"),l(ce,"class","svelte-6dorfk"),l(rt,"class","svelte-6dorfk"),l(ue,"href",ot=e[0].ucsb),l(ue,"target","_blank"),l(ue,"rel","noreferrer"),l(ue,"class","svelte-6dorfk"),l(E,"class","technology svelte-6dorfk"),l(lt,"class","links-header svelte-6dorfk"),l(it,"class","svelte-6dorfk"),l(at,"class","svelte-6dorfk"),l(fe,"href",ct=e[0].careers),l(fe,"target","_blank"),l(fe,"rel","noreferrer"),l(fe,"class","svelte-6dorfk"),l(xe,"href",ut=e[0].contact),l(xe,"class","svelte-6dorfk"),l(j,"class","resources svelte-6dorfk"),l(q,"class","links svelte-6dorfk"),l(ft,"class","copyright-dates svelte-6dorfk"),l(Se,"href",dt=e[0].terms),l(Se,"class","svelte-6dorfk"),l(Ie,"href",ht=e[0].privacy),l(Ie,"class","svelte-6dorfk"),l(Ee,"class","svelte-6dorfk"),l(we,"class","legal svelte-6dorfk"),l(t,"class","footer svelte-6dorfk")},m(p,C){F(p,t,C),u(t,n),u(n,s),u(s,r),N(o,r,null),u(s,a),u(s,c),u(c,f),u(f,i),N(m,i,null),u(c,v),u(c,b),u(b,y),N(P,y,null),u(c,R),u(c,I),u(I,V),N(w,V,null),u(c,ne),u(c,_),u(_,W),N(Q,W,null),u(c,he),u(c,J),u(J,me),N(ge,me,null),u(t,ye),u(t,q),u(q,B),u(B,$e),u(B,De),N(g,B,null),u(B,H),u(B,D),u(B,Yt),u(B,Ve),u(q,qt),u(q,E),u(E,je),u(E,Wt),u(E,se),u(se,ze),u(E,Qt),u(E,re),u(re,Ze),u(E,Xt),u(E,oe),u(oe,Ye),u(E,Jt),u(E,le),u(le,We),u(E,en),u(E,ie),u(ie,Xe),u(E,tn),u(E,ae),u(ae,et),u(E,nn),u(E,ce),u(ce,nt),u(E,sn),u(E,ue),u(ue,rt),u(q,rn),u(q,j),u(j,lt),u(j,on),u(j,it),N(pe,it,null),u(j,ln),u(j,at),N(_e,at,null),u(j,an),u(j,fe),u(fe,cn),u(j,un),u(j,xe),u(xe,fn),u(t,dn),u(t,we),u(we,ft),u(we,hn),u(we,Ee),u(Ee,Se),u(Se,mn),u(Ee,gn),u(Ee,Ie),u(Ie,pn),$=!0},p(p,[C]){(!$||C&1&&d!==(d=p[0].github))&&l(f,"href",d),(!$||C&1&&O!==(O=p[0].linkedin))&&l(b,"href",O),(!$||C&1&&U!==(U=p[0].twitter))&&l(I,"href",U),(!$||C&1&&X!==(X=p[0].youtube))&&l(_,"href",X),(!$||C&1&&Y!==(Y=p[0].mail))&&l(J,"href",Y);const Ct={};C&1&&(Ct.to=p[0].ustore),C&2&&(Ct.$$scope={dirty:C,ctx:p}),g.$set(Ct),(!$||C&1&&Ge!==(Ge=p[0].ustore))&&l(se,"href",Ge),(!$||C&1&&Ke!==(Ke=p[0].usearch))&&l(re,"href",Ke),(!$||C&1&&qe!==(qe=p[0].ucall))&&l(oe,"href",qe),(!$||C&1&&Qe!==(Qe=p[0].ucset))&&l(le,"href",Qe),(!$||C&1&&Je!==(Je=p[0].udisk))&&l(ie,"href",Je),(!$||C&1&&tt!==(tt=p[0].uform))&&l(ae,"href",tt),(!$||C&1&&st!==(st=p[0].udsb))&&l(ce,"href",st),(!$||C&1&&ot!==(ot=p[0].ucsb))&&l(ue,"href",ot);const kt={};C&1&&(kt.to=p[0].about),C&2&&(kt.$$scope={dirty:C,ctx:p}),pe.$set(kt);const yt={};C&1&&(yt.to=p[0].blog),C&2&&(yt.$$scope={dirty:C,ctx:p}),_e.$set(yt),(!$||C&1&&ct!==(ct=p[0].careers))&&l(fe,"href",ct),(!$||C&1&&ut!==(ut=p[0].contact))&&l(xe,"href",ut),(!$||C&1&&dt!==(dt=p[0].terms))&&l(Se,"href",dt),(!$||C&1&&ht!==(ht=p[0].privacy))&&l(Ie,"href",ht)},i(p){$||(x(o.$$.fragment,p),x(m.$$.fragment,p),x(P.$$.fragment,p),x(w.$$.fragment,p),x(Q.$$.fragment,p),x(ge.$$.fragment,p),x(g.$$.fragment,p),x(pe.$$.fragment,p),x(_e.$$.fragment,p),$=!0)},o(p){S(o.$$.fragment,p),S(m.$$.fragment,p),S(P.$$.fragment,p),S(w.$$.fragment,p),S(Q.$$.fragment,p),S(ge.$$.fragment,p),S(g.$$.fragment,p),S(pe.$$.fragment,p),S(_e.$$.fragment,p),$=!1},d(p){p&&L(t),A(o),A(m),A(P),A(w),A(Q),A(ge),A(g),A(pe),A(_e)}}}function no(e,t,n){let{links:s}=t;return e.$$set=r=>{"links"in r&&n(0,s=r.links)},[s]}class so extends K{constructor(t){super(),Z(this,t,no,to,z,{links:0})}}const ro={home:"https://unum.cloud",ustore:"https://unum.cloud/ustore",usearch:"https://unum-cloud.github.io/usearch",ucall:"https://unum-cloud.github.io/ucall",udsb:"https://unum-cloud.github.io/udsb",ucsb:"https://unum-cloud.github.io/ucsb",ucset:"https://unum-cloud.github.io/ucset",udisk:"https://github.com/unum-cloud/udisk",uform:"https://unum-cloud.github.io/uform",about:"https://unum.cloud/about",blog:"https://unum.cloud/blog",contact:"https://unum.cloud#contact",careers:"https://join.com/companies/unum",github:"https://github.com/unum-cloud",linkedin:"https://linkedin.com/company/unum-cloud",twitter:"https://twitter.com/unum_cloud",youtube:"https://youtube.com/playlist?list=PL2kcrNAeGTFxOG_RSdNeYF4x4MCyNDmMx&si=EnSIkaIECMiOmarE",mail:"mailto:info@unum.cloud",terms:"https://unum.cloud",privacy:"https://unum.cloud"};var Jn=(e=>(e[e.s=2]="s",e[e.m=4]="m",e[e.l=8]="l",e))(Jn||{});function oo(){return Kt(Jn,"radius","px")}function lo(e){let t,n,s;return n=new so({props:{links:ro}}),{c(){t=h("footer"),T(n.$$.fragment)},m(r,o){F(r,t,o),N(n,t,null),s=!0},p:M,i(r){s||(x(n.$$.fragment,r),s=!0)},o(r){S(n.$$.fragment,r),s=!1},d(r){r&&L(t),A(n)}}}function io(e){let t,n;return t=new hr({props:{$$slots:{default:[lo]},$$scope:{ctx:e}}}),{c(){T(t.$$.fragment)},m(s,r){N(t,s,r),n=!0},p(s,[r]){const o={};r&1&&(o.$$scope={dirty:r,ctx:s}),t.$set(o)},i(s){n||(x(t.$$.fragment,s),n=!0)},o(s){S(t.$$.fragment,s),n=!1},d(s){A(t,s)}}}function ao(e){if(typeof document<"u"){const t=document.querySelector(":root");t&&yr(t,{...xr(),...oo(),...wr()})}return[]}class co extends K{constructor(t){super(),Z(this,t,ao,io,z,{})}}new co({target:document.getElementById("footer")});
