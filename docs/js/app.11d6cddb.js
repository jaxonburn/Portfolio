(function(e){function t(t){for(var n,o,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},a={1:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"0edfe25d",3:"9ce3b26b",4:"80ccb136",5:"08539ec1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"97767af4",3:"c02f98ea",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;c.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"034f":function(e,t,r){"use strict";r("ed82")},"2f39":function(e,t,r){"use strict";r.r(t);r("5319"),r("573e"),r("7d6e"),r("e54f"),r("195c"),r("3cec"),r("0ca9"),r("5b0d");var n=r("2b0e"),o=r("1f91"),a=r("42d2"),c=r("b05d");n["a"].use(c["a"],{config:{brand:{primary:"#6987C9",secondary:"#2D3142",accent:"#FF9FB2"}},lang:o["a"],iconSet:a["a"]});var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},i=[],l={name:"App"},s=l,f=(r("034f"),r("2877")),p=Object(f["a"])(s,u,i,!1,null,null,null),d=p.exports,h=r("2f62");n["a"].use(h["a"]);var m=function(){const e=new h["a"].Store({modules:{},strict:!1});return e},v=r("8c4f");r("ddb0");const b=[{path:"/",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))},{path:"/projects",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"c28f"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"e51e"))}];var y=b;n["a"].use(v["a"]);var g=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},w=async function(){const e="function"===typeof m?await m({Vue:n["a"]}):m,t="function"===typeof g?await g({Vue:n["a"],store:e}):g;e.$router=t;const r={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:r,store:e,router:t}},P=r("bc3a"),j=r.n(P);n["a"].prototype.$axios=j.a;const O="";async function x(){const{app:e,store:t,router:r}=await w();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),u=[void 0];for(let l=0;!1===o&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:r,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:c,publicPath:O})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&new n["a"](e)}x()},"5b0d":function(e,t,r){},ed82:function(e,t,r){}});