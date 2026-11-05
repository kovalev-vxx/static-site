(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59083,e=>{"use strict";var t=e.i(665240),r=e.i(684442),n=e.i(658039),i=e.i(168763);let s=["/hormones_webinar","/hormones_decision","/excess_weight_webinar","/excess_weight_decision"],a=()=>{let e=(0,n.usePathname)(),[a,o]=(0,i.useState)(!1),d=(0,i.useRef)(!1),c=s.some(t=>e===t||e.startsWith(`${t}/`));return((0,i.useEffect)(()=>{let e,t;if(c){window.jivo_destroy&&(window.jivo_destroy(),d.current=!0);return}if(d.current&&window.jivo_init){window.jivo_init(),d.current=!1;return}let r=()=>{e=setTimeout(()=>{"requestIdleCallback"in window?t=window.requestIdleCallback(()=>o(!0)):o(!0)},5e3)};return"complete"===document.readyState?r():window.addEventListener("load",r,{once:!0}),()=>{window.removeEventListener("load",r),e&&clearTimeout(e),t&&window.cancelIdleCallback(t)}},[c]),a)?(0,t.jsx)(r.default,{async:!0,src:"//code.jivo.ru/widget/nnQ7Zn9xD0",id:"jivo",strategy:"lazyOnload",onReady:()=>{c&&window.jivo_destroy&&(window.jivo_destroy(),d.current=!0)}}):null},o=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{id:"roistat",strategy:"lazyOnload",children:`
(function(w, d, s, h, id) {
w.roistatProjectId = id; w.roistatHost = h;
var p = d.location.protocol == "https:" ? "https://" : "http://";
var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '178a906898734bdfd255ee350c94facb');
`}),(0,t.jsx)(r.default,{id:"vk-pixel",strategy:"lazyOnload",children:`
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3406585", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID"});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");`})]}),d=()=>(0,t.jsx)(r.default,{async:!0,src:"https://dmp.programmatic.ru/assets/ptm",id:"ptm",strategy:"lazyOnload"}),c=()=>(0,t.jsx)(r.default,{id:"varioqub",strategy:"lazyOnload",children:`
(function(e, x, pe, r, i, me, nt){
e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
ymab('metrika.98702201', 'init'/*, {clientFeatures}, {callback}*/);
`}),l=()=>{let e=(0,n.usePathname)(),t=(0,i.useRef)(!0);return(0,i.useEffect)(()=>{if(t.current){t.current=!1;return}(window._tmr||(window._tmr=[])).push({id:"3406585",type:"pageView",url:window.location.href})},[e]),null};e.s(["default",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(a,{}),(0,t.jsx)(o,{}),(0,t.jsx)(c,{}),(0,t.jsx)(l,{})]})}],59083)}]);