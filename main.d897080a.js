parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("table").tBodies[0],r=document.body,n=document.querySelector(".message-win"),t=document.querySelector(".message-lose"),i=document.querySelector(".message-start"),c=document.querySelector(".start"),a=document.querySelector(".game-score"),d=300,l=0,o=!0,s=0;function f(r,t,i){var c=+r.innerText,d=+t.innerText;r.innerText="",t.classList.add("field-cell"),t.innerText=d+c,t.classList.add("field-cell--"+(d+c)),l+=d+c,a.innerText=l;for(var s=0;s<4;s++)for(var f=0;f<4;f++){"2048"===e.children[s].children[f].innerText&&(n.classList.remove("hidden"),o=!0)}}function h(e,r,n){var t=document.createElement("td");"before"===n&&e.before(t),"after"===n&&e.after(t),t.classList.add("field-cell"),r.replaceWith(e)}function u(e,r,n,t){var i=document.createElement("td");i.classList.add("field-cell"),"before"===t&&r.before(i),"after"===t&&r.after(i),n.replaceWith(e)}function v(){var r=Math.floor(4*Math.random()),n=Math.floor(4*Math.random()),t=e.children[r].children[n];t.classList.add("field-cell","field-cell--2"),t.innerText?v():(s++,t.innerText=s%10==0?"4":"2")}function m(){for(var r=0,n=0;n<3;n++)for(var t=0;t<4;t++){r=0;var i=e.children[n],c=i.children[t],a=i.children[t-1],d=i.children[t+1],l=e.children[n+1].children[t],o=+c.innerText,s=+l.innerText,h=i.firstElementChild===c;o&&!s&&h&&(u(c,d,l,"before"),r++),!o||s||h||(u(c,a,l,"after"),r++),o&&o===s&&f(c,l,"down"),r>0&&m()}}function T(){for(var r=0,n=3;n>=1;n--)for(var t=3;t>=0;t--){r=0;var i=e.children[n],c=i.children[t],a=i.children[t-1],d=i.children[t+1],l=e.children[n-1].children[t],o=+c.innerText,s=+l.innerText,h=i.firstElementChild===c;o&&!s&&h&&(u(c,d,l,"before"),r++),!o||s||h||(u(c,a,l,"after"),r++),o&&o===s&&f(c,l,"up"),r>0&&T()}}function x(){for(var r=0,n=0;n<4;n++)for(var t=1;t<4;t++){r=0;var i=e.children[n].children[t],c=e.children[n].children[t-1],a=+i.innerText,d=+c.innerText;a&&!d&&(h(i,c,"before"),r++),a&&a===d&&f(i,c,"left"),r>0&&x()}}function L(){for(var r=0,n=0;n<4;n++)for(var t=0;t<3;t++){r=0;var i=e.children[n].children[t],c=e.children[n].children[t+1],a=+i.innerText,d=+c.innerText;a&&!d&&(h(i,c,"after"),r++),a&&a===d&&f(i,c,"right"),r>0&&L()}}c.addEventListener("click",function(){c.innerText="Restart",c.classList.remove("start"),c.classList.add("restart"),o=!1,s=0,l=0,a.innerText=0,t.classList.add("hidden"),n.classList.add("hidden"),i.classList.add("hidden");for(var r=0;r<4;r++)for(var d=0;d<4;d++){var f=e.children[r].children[d];f.className="field-cell",f.innerText=""}v(),v()}),r.addEventListener("keydown",function(r){var n=1;if(!o){switch(r.key){case"ArrowDown":m(),setTimeout(function(){v()},d);break;case"ArrowUp":T(),setTimeout(function(){v()},d);break;case"ArrowLeft":x(),setTimeout(function(){v()},d);break;case"ArrowRight":L(),setTimeout(function(){v()},d)}for(var i=0;i<4;i++)for(var c=0;c<4;c++){var a=e.children[i].children[c];a.innerText?++n:a.className="field-cell"}16===n&&(t.classList.remove("hidden"),o=!0)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d897080a.js.map