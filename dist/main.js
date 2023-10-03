(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"body{\n    background-color: lightgray;\n    display: grid;\n    width: 60%;\n    margin: 0 auto;\n}\n\nheader{\n    background-color: #3498db;\n}\nh1{\n    padding: 0.5em 2em;\n}\n\nmain{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n}\nnav{\n    background-color: #333333;\n}\nli{\n    list-style: none;\n}\na{\n    color: white;\n    text-decoration: none;\n}\n.project{\n    font-size: larger;\n}\n.home, .notes{\n    text-decoration: underline;\n}\n\n.content{\n    background-color: #f5f5f5;\n}\n\n.project-item{\n    display: grid;\n    grid-template-columns: 2fr 3fr 2fr 1fr;\n}\n\nfooter>p{\n    background-color: #ffffff;\n    margin:0 ;\n    text-align: center;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r={};(()=>{t.d(r,{H:()=>S});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),c=t(569),i=t.n(c),s=t(565),d=t.n(s),u=t(216),l=t.n(u),p=t(589),f=t.n(p),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(e){this.name=e}}const g=document.querySelector("ul");class y{constructor(e,n,t,r,o){this.name=e,this.description=n,this.dueDate=t,this.priority=r,this.project=o}}const x=document.querySelector(".content"),b=()=>{x.innerHTML=""},E=e=>{const n=document.createElement("div");x.appendChild(n),n.classList.add("project-item");const t=document.createElement("div");t.innerText=`${e.name}`,n.appendChild(t);const r=document.createElement("div");r.innerText=`${e.description}`,n.appendChild(r);const o=document.createElement("div");o.innerText=`${e.dueDate}`,n.appendChild(o);const a=document.createElement("div");a.innerText=`${e.priority}`,n.appendChild(a)},C=[],T=new v("Makeover");C.push(T);const w=new v("Hunting");C.push(w);const L=new v("Housework");C.push(L),(()=>{g.innerHTML="";const e=document.createElement("li");g.appendChild(e);const n=document.createElement("a");e.appendChild(n),n.innerText="Home",n.classList.add("project"),n.classList.add("home"),n.addEventListener("click",(function(){S("home")}))})(),C.forEach((e=>{(e=>{const n=document.createElement("li");g.appendChild(n);const t=document.createElement("a");n.appendChild(t),t.innerText=`${e.name}`,t.classList.add("project"),t.addEventListener("click",(function(){S(`${e.name}`)}))})(e)})),(()=>{const e=document.createElement("li");g.appendChild(e);const n=document.createElement("a");e.appendChild(n),n.innerText="Notes",n.classList.add("project"),n.classList.add("notes")})();const M=[],j=new y("Berreta","Buy a Berreta from Steve","22.4.2024","High","Hunting");M.push(j);const H=new y("Dog","Train the dog","12.5.2024","Medium","Hunting");M.push(H);const k=new y("Paint","Paint the room","12.4.2024","Medium","Housework");function S(e){b(),"home"===e?M.forEach((e=>{E(e)})):"home"!==e&&M.filter((function(n){return n.project==e})).forEach((e=>{E(e)}))}M.push(k),S("home")})()})();