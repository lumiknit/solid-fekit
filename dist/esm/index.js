import{use as e,spread as t,mergeProps as r,insert as n,template as o,createComponent as s,effect as a,setAttribute as l,delegateEvents as c,className as i,addEventListener as u,Dynamic as d}from"solid-js/web";import{createSignal as h,createEffect as p,untrack as g,Show as f,For as m,mergeProps as v,splitProps as w}from"solid-js";import{createStore as b}from"solid-js/store";var y=o("<button>");const x=o=>{const s=()=>{const e={...o};for(const t of["ref","children","class","color","outline","small","disabled"])delete e[t];return e};return a=y(),"function"==typeof(l=o.ref)?e(l,a):o.ref=a,t(a,r(s,{get class(){return`no-user-select btn btn-${o.outline?"ol-":""}${o.color||"secondary"} ${o.small?"btn-sm":""} ${o.class??""}`}}),!1,!0),n(a,(()=>o.children)),a;var a,l};var S=o('<svg stroke-width=0.15 viewBox="0 0 1 1">// Check shape<path d="\n\t\t\t\t\t\t\tM 0.2 0.5\n\t\t\t\t\t\t\tL 0.45 0.75\n\t\t\t\t\t\t\tL 0.9 0.25\n\t\t\t\t\t\t">'),k=o('<label class=checkbox><div class="wh-1 checkbox-box no-user-select cursor-pointer"></div><input type=checkbox name=checkbox>');var C=o("<div class=dropdown><div>");c(["click"]);var I=o("<div>");const $=e=>{return t=I(),u(t,"drop",e.onDrop),u(t,"click",e.onClick,!0),n(t,(()=>e.children)),a((()=>i(t,`input-group ${e.class??""}`))),t;var t};c(["click"]);var T=o("<input type=text>");const M=t=>{return r=T(),"function"==typeof(n=t.ref)?e(n,r):t.ref=r,a((e=>{var n=`form-control ${t.class??""}`,o=t.placeholder;return n!==e.e&&i(r,e.e=n),o!==e.t&&l(r,"placeholder",e.t=o),e}),{e:void 0,t:void 0}),r;var r,n};var _=o("<input type=file class=d-none>");var D=o("<div>");var B=o("<span>");var A=Object.freeze({__proto__:null,Button:x,Checkbox:t=>{const[r,o]=h(t.value),c=e=>{const r=e.target;console.log(r.checked),o(r.checked),t.onChange?.(r.checked)};return p((()=>{const e=g(r);t.value!==e&&o(t.value)})),(()=>{var o=k(),i=o.firstChild,u=i.nextSibling;n(i,s(f,{get when(){return r()},get children(){var e=S();return a((()=>l(e,"class",`stroke-${t.color||"primary"}`))),e}})),u.addEventListener("change",c);var d=t.ref;return"function"==typeof d?e(d,u):t.ref=u,n(o,(()=>t.children),null),a((()=>u.checked=t.value)),o})()},DropdownButton:function(e){const[t,o]=h(!1),l=()=>{const t={...e};return delete t.label,delete t.children,t};return c=C(),u=c.firstChild,n(c,s(x,r(l,{onClick:()=>o((e=>!e)),get children(){return e.label(e.labelProps)}})),u),u.$$click=()=>{o(!1)},n(u,(()=>e.children)),a((()=>i(u,"dropdown-menu shadow-2 "+(t()?"visible":"hidden")))),c;var c,u},InputFile:t=>{let r,n;const o=e=>{n=e,"function"==typeof t.ref&&t.ref(e)},a=e=>{t.onFiles&&t.onFiles(e.target.files),r.value=n.value};return s($,{get class(){return t.class},onDrop:e=>{e.preventDefault(),e.stopPropagation(),t.onFiles&&t.onFiles(e.dataTransfer.files)},get children(){return[s(M,{class:"flex-1",ref(e){"function"==typeof r?r(e):r=e},get placeholder(){return t.placeholder},onClick:()=>{n?.click()}}),(l=_(),l.addEventListener("change",a),e(o,l),l),s(x,{get color(){return t.color},onClick:()=>{n?.click()},children:"..."})];var l}})},InputGroup:$,InputLabel:e=>{return t=D(),n(t,(()=>e.children)),a((()=>i(t,`form-control btn-${e.outline?"ol-":""}${e.color} ${e.class??""}`))),t;var t},InputText:M,RadioButtons:function(e){const t=e.buttons.findIndex((t=>t.value===e.initialValue)),[r,n]=h(t);return s($,{get class(){return e.class},get children(){return s(m,{get each(){return e.buttons},children:(t,o)=>s(x,{get color(){return t.color},get outline(){return r()!==o()},get class(){return t.class},onClick:()=>(t=>{n(t),e.onChange?.(e.buttons[t].value)})(o()),get children(){return t.label}})})}})},Spinner:e=>{return n=B(),t(n,r(e,{get class(){return`wh-1 spinner border-${e.color||"primary"} ${e.class||""}`}}),!1,!1),n;var n}});class j{constructor(e){this.transaction=e}getStore(e){return new R(this.transaction.objectStore(e))}}class R{constructor(e){this.store=e}async wrap(e){return new Promise(((t,r)=>{const n=e(this.store);n.onsuccess=()=>t(n.result),n.onerror=()=>r(n.error)}))}async add(e,t){return this.wrap((r=>r.add(e,t)))}async get(e){return this.wrap((t=>t.get(e)))}async getAll(){return this.wrap((e=>e.getAll()))}async getAllKeys(){return this.wrap((e=>e.getAllKeys()))}async getKey(e){return this.wrap((t=>t.getKey(e)))}async clear(){return this.wrap((e=>e.clear()))}async count(){return this.wrap((e=>e.count()))}async delete(e){return this.wrap((t=>t.delete(e)))}async put(e,t){return this.wrap((r=>r.put(e,t)))}async openCursor(e,t){return this.wrap((r=>r.openCursor(e,t)))}async openKeyCursor(e,t){return this.wrap((r=>r.openKeyCursor(e,t)))}index(e){return this.store.index(e)}createIndex(e,t,r){return this.store.createIndex(e,t,r)}deleteIndex(e){this.store.deleteIndex(e)}}const O=async(e,t)=>new Promise(((r,n)=>{let o=indexedDB.open(e);o.onsuccess=()=>r(o.result),o.onerror=()=>n(o.error),o.onupgradeneeded=e=>{t(e.target.result,e)}})),P=(e,t,r,n)=>new j(e.transaction(t,r,n));var F=Object.freeze({__proto__:null,AsyncIDBStore:R,AsyncIDBTransaction:j,createAsyncIDBTransaction:P,openIDBDatabase:O,openIDBStores:async(e,t,r,n)=>{const o=await O(e,(e=>{for(const r of t)e.createObjectStore(r)})),s=P(o,t,r,n);return t.map((e=>s.getStore(e)))}});const E=()=>navigator.clipboard;let L,z;if(void 0!==E()&&void 0!==E().readText&&void 0!==E().writeText)L=E().writeText,z=E().readText;else{let e="";L=t=>{e=t},z=async()=>e}const G=(e,t,r)=>{let n;return(r-=Math.floor(r))<.5?(n=t,r<1/6&&(n=e+6*(t-e)*r)):(n=e,r<2/3&&(n=e+(t-e)*(2/3-r)*6)),Math.round(255*n)},K=e=>Math.random().toString(36).slice(e),H=()=>K(7),N=()=>{const e=new Date;return Math.round(e.getTime()/1e3+60*e.getTimezoneOffset()).toString(36)},U=new Set([".",""]),V=(e,t)=>{const r=(t||[]).concat(e.split("/")),n=""===r[0];if(r.length<=1)return["."];const o=r.filter((e=>!U.has(e)));for(let e=0;e<o.length;e++)".."===o[e]&&(o.splice(e-1,2),e-=2);return n&&o.unshift(""),o},Y=e=>e.join("/"),q=e=>{const t=V(e);return t[t.length-1]};var J=Object.freeze({__proto__:null,CURRENT_SEGMENTS:U,HSL2RGB:(e,t,r)=>{if(0===t)return[r,r,r];const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n;return[G(o,n,e+1/3),G(o,n,e),G(o,n,e-1/3)]},PATH_SEPARATOR:"/",RGB2GRAY:(e,t,r)=>.299*e+.587*t+.114*r,RGB2HSL:(e,t,r)=>{e/=255,t/=255,r/=255;const n=Math.max(e,t,r),o=Math.min(e,t,r),s=n+o,a=n-o;if(n===o)return[0,0,n];const l=s>1?a/(2-2*s):a/s;switch(n){case e:return[((t-r)/a+(t<r?6:0))/6,l,s/2];case t:return[((r-e)/a+2)/6,l,s/2];default:return[((e-t)/a+4)/6,l,s/2]}},extractDirectory:e=>{const t=V(e);return Y(t.slice(0,-1))},extractFileExtension:e=>{const t=q(e),r=t.lastIndexOf(".");return-1===r?"":t.slice(r+1)},extractFilename:q,genID:()=>`${N()}-${H()}`,hslStyle:(e,t,r)=>`hsl(${e}, ${100*t}%, ${100*r}%)`,incIndexToFilename:e=>{const t=V(e),r=q(e);let n=r.lastIndexOf(".");n<0&&(n=r.length);const o=r.slice(0,n),s=r.slice(n),a=o.match(/([0-9]+)([^0-9]*)$/);if(!a)return e;const l=parseInt(a[1])+1,c=o.slice(0,a.index)+l+a[2]+s;return t[t.length-1]=c,Y(t)},isAbsolute:e=>""===e[0],joinPath:Y,get loadString(){return z},longRandom:()=>K(2)+K(2),parsePath:V,get saveString(){return L},shortRandom:H,sleep:e=>new Promise((t=>setTimeout(t,e))),timeString:N,zeroed:(e,t)=>"0".repeat(t-e.length)+e});const[Q,W]=b({nextID:0,modals:[],transitionMS:300}),X=e=>{const t=Q.modals.find((t=>t.id===e));if(!t)return;clearTimeout(t.timeout);const r=t.callbacks.onClose;r&&!r()||(t.setShown(!1),t.timeout=window.setTimeout((()=>{t.callbacks.onUnmount?.(),W("modals",(t=>t.filter((t=>t.id!==e))))}),Q.transitionMS))};var Z=o("<div>");var ee=Object.freeze({__proto__:null,ModalContainer:e=>{const o=v({hiddenClass:"hidden",shownClass:"shown",transitionMS:300},e),[l,c]=w(o,["class","hiddenClass","shownClass","transitionMS"]);p((()=>{(e=>{"number"==typeof e.transitionMS&&W("transitionMS",e.transitionMS)})(o)}));const u=e=>{e.target===e.currentTarget&&Q.modals.length>0&&X(Q.modals[Q.modals.length-1].id)};return s(f,{get when(){return Q.modals.length>0},get children(){var e=Z();return t(e,r(c,{get class(){return`modal-container ${l.class}`},onClick:u}),!1,!0),n(e,s(m,{get each(){return Q.modals},children:e=>{return t=Z(),n(t,s(d,r({get component(){return e.component},close:()=>X(Q.modals[Q.modals.length-1].id)},(()=>e.props)))),a((()=>i(t,`modal-item ${e.shown()?l.shownClass:l.hiddenClass}`))),t;var t}})),e}})},closeModal:X,openModal:(e,t,r={})=>{const n=(()=>{const e=Q.nextID.toString(36);return W("nextID",(e=>e+1)),e})(),[o,s]=h(!1),a=window.setTimeout((()=>{r.onOpened?.()}),Q.transitionMS),l={id:n,shown:o,setShown:s,timeout:a,component:e,props:t,callbacks:r};return W("modals",(e=>[...e,l])),setTimeout((()=>{r.onMount?.(),s(!0)})),n}});export{A as block,J as common,F as idb,ee as modal};
//# sourceMappingURL=index.js.map
