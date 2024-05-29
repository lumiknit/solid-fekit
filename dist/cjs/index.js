"use strict";var e=require("solid-js/web"),t=require("solid-js"),n=e.template("<button>");const r=t=>{const r=()=>{const e={...t};for(const t of["ref","children","class","color","outline","small","disabled"])delete e[t];return e};return o=n(),"function"==typeof(s=t.ref)?e.use(s,o):t.ref=o,e.spread(o,e.mergeProps(r,{get class(){return`no-user-select btn btn-${t.outline?"ol-":""}${t.color} ${t.class??""} ${t.small?"btn-sm":""}`}}),!1,!0),e.insert(o,(()=>t.children)),o;var o,s};var o=e.template('<svg stroke-width=0.15 viewBox="0 0 1 1">// Check shape<path d="\n\t\t\t\t\t\t\tM 0.2 0.5\n\t\t\t\t\t\t\tL 0.45 0.75\n\t\t\t\t\t\t\tL 0.9 0.25\n\t\t\t\t\t\t">'),s=e.template('<label class=checkbox><div class="wh-1 checkbox-box no-user-select cursor-pointer"></div><input type=checkbox name=checkbox>');var a=e.template("<div class=dropdown><div>");e.delegateEvents(["click"]);var l=e.template("<div>");const c=t=>{return n=l(),e.addEventListener(n,"drop",t.onDrop),e.addEventListener(n,"click",t.onClick,!0),e.insert(n,(()=>t.children)),e.effect((()=>e.className(n,`input-group ${t.class??""}`))),n;var n};e.delegateEvents(["click"]);var i=e.template("<input type=text>");const d=t=>{return n=i(),"function"==typeof(r=t.ref)?e.use(r,n):t.ref=n,e.effect((r=>{var o=`form-control ${t.class??""}`,s=t.placeholder;return o!==r.e&&e.className(n,r.e=o),s!==r.t&&e.setAttribute(n,"placeholder",r.t=s),r}),{e:void 0,t:void 0}),n;var n,r};var u=e.template("<input type=file class=d-none>");var p=e.template("<div>");var h=e.template("<span>");var m=Object.freeze({__proto__:null,Button:r,Checkbox:n=>{const[r,a]=t.createSignal(n.value),l=e=>{const t=e.target;console.log(t.checked),a(t.checked),n.onChange?.(t.checked)};return(()=>{var a=s(),c=a.firstChild,i=c.nextSibling;e.insert(c,e.createComponent(t.Show,{get when(){return r()},get children(){var t=o();return e.effect((()=>e.setAttribute(t,"class",`stroke-${n.color||"primary"}`))),t}})),i.addEventListener("change",l);var d=n.ref;return"function"==typeof d?e.use(d,i):n.ref=i,e.insert(a,(()=>n.children),null),e.effect((()=>i.checked=n.value)),a})()},DropdownButton:function(n){const[o,s]=t.createSignal(!1),l=()=>{const e={...n};return delete e.label,delete e.children,e};return c=a(),i=c.firstChild,e.insert(c,e.createComponent(r,e.mergeProps(l,{onClick:()=>s((e=>!e)),get children(){return n.label(n.labelProps)}})),i),i.$$click=()=>{s(!1)},e.insert(i,(()=>n.children)),e.effect((()=>e.className(i,"dropdown-menu shadow-2 "+(o()?"visible":"hidden")))),c;var c,i},InputFile:t=>{let n,o;const s=e=>{o=e,"function"==typeof t.ref&&t.ref(e)},a=e=>{t.onFiles&&t.onFiles(e.target.files),n.value=o.value};return e.createComponent(c,{get class(){return t.class},onDrop:e=>{e.preventDefault(),e.stopPropagation(),t.onFiles&&t.onFiles(e.dataTransfer.files)},get children(){return[e.createComponent(d,{class:"flex-1",ref(e){"function"==typeof n?n(e):n=e},get placeholder(){return t.placeholder},onClick:()=>{o?.click()}}),(l=u(),l.addEventListener("change",a),e.use(s,l),l),e.createComponent(r,{get color(){return t.color},onClick:()=>{o?.click()},children:"..."})];var l}})},InputGroup:c,InputLabel:t=>{return n=p(),e.insert(n,(()=>t.children)),e.effect((()=>e.className(n,`form-control btn-${t.outline?"ol-":""}${t.color} ${t.class??""}`))),n;var n},InputText:d,RadioButtons:function(n){const o=n.buttons.findIndex((e=>e.value===n.initialValue)),[s,a]=t.createSignal(o);return e.createComponent(c,{get class(){return n.class},get children(){return e.createComponent(t.For,{get each(){return n.buttons},children:(t,o)=>e.createComponent(r,{get color(){return t.color},get outline(){return s()!==o()},get class(){return t.class},onClick:()=>(e=>{a(e),n.onChange?.(n.buttons[e].value)})(o()),get children(){return t.label}})})}})},Spinner:t=>{return n=h(),e.spread(n,e.mergeProps(t,{get class(){return`wh-1 spinner border-${t.color||"primary"} ${t.class||""}`}}),!1,!1),n;var n}});const f=()=>navigator.clipboard;let g,v;if(void 0!==f()&&void 0!==f().readText&&void 0!==f().writeText)g=f().writeText,v=f().readText;else{let e="";g=t=>{e=t},v=async()=>e}const b=(e,t,n)=>{let r;return(n-=Math.floor(n))<.5?(r=t,n<1/6&&(r=e+6*(t-e)*n)):(r=e,n<2/3&&(r=e+(t-e)*(2/3-n)*6)),Math.round(255*r)},k=e=>Math.random().toString(36).slice(e),w=()=>k(7),C=()=>{const e=new Date;return Math.round(e.getTime()/1e3+60*e.getTimezoneOffset()).toString(36)};var S=Object.freeze({__proto__:null,HSL2RGB:(e,t,n)=>{if(0===t)return[n,n,n];const r=n<.5?n*(1+t):n+t-n*t,o=2*n-r;return[b(o,r,e+1/3),b(o,r,e),b(o,r,e-1/3)]},RGB2GRAY:(e,t,n)=>.299*e+.587*t+.114*n,RGB2HSL:(e,t,n)=>{e/=255,t/=255,n/=255;const r=Math.max(e,t,n),o=Math.min(e,t,n),s=r+o,a=r-o;if(r===o)return[0,0,r];const l=s>1?a/(2-2*s):a/s;switch(r){case e:return[((t-n)/a+(t<n?6:0))/6,l,s/2];case t:return[((n-e)/a+2)/6,l,s/2];default:return[((e-t)/a+4)/6,l,s/2]}},genID:()=>`${C()}-${w()}`,hslStyle:(e,t,n)=>`hsl(${e}, ${100*t}%, ${100*n}%)`,get loadString(){return v},longRandom:()=>k(2)+k(2),get saveString(){return g},shortRandom:w,sleep:e=>new Promise((t=>setTimeout(t,e))),timeString:C,zeroed:(e,t)=>"0".repeat(t-e.length)+e});const x=(e,t)=>{const n=e.modals().find((e=>e.id===t));if(!n)return;clearTimeout(n.timeout);const r=n.callbacks.onClose;r&&!r()||(n.setShown(!1),n.timeout=window.setTimeout((()=>{n.callbacks.onUnmount?.(),e.setModals((e=>e.filter((e=>e.id!==t))))}),e.transitionMS))};var $=e.template("<div>");e.delegateEvents(["click"]);var M=Object.freeze({__proto__:null,ModalContainer:n=>{const r=e=>{if(e.target===e.currentTarget){const e=n.state.modals();e.length>0&&x(n.state,e[e.length-1].id)}};return e.createComponent(t.Show,{get when(){return n.state.modals().length>0},get children(){var o=$();return o.$$click=r,e.insert(o,e.createComponent(t.For,{get each(){return n.state.modals()},children:t=>{return r=$(),e.insert(r,e.createComponent(e.Dynamic,e.mergeProps({get component(){return t.component},close:()=>x(n.state,t.id)},(()=>t.props)))),e.effect((()=>e.className(r,`modal-item ${t.shown()?n.state.shownClass:n.state.hiddenClass}`))),r;var r}})),e.effect((()=>e.className(o,`modal-container ${n.class}`))),o}})},closeModal:x,createModalState:(e="hidden",n="shown",r=300)=>{const[o,s]=t.createSignal([]);return{nextID:0,modals:o,setModals:s,hiddenClass:e,shownClass:n,transitionMS:r}},openModal:(e,n,r,o={})=>{const s=e.nextID.toString(36);e.nextID+=1;const[a,l]=t.createSignal(!1),c=window.setTimeout((()=>{o.onOpened?.()}),e.transitionMS),i={id:s,shown:a,setShown:l,timeout:c,component:n,props:r,callbacks:o};return e.setModals((e=>[...e,i])),setTimeout((()=>{o.onMount?.(),l(!0)})),s}});exports.block=m,exports.common=S,exports.modal=M;
//# sourceMappingURL=index.js.map
