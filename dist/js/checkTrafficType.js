!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=2)}({2:function(e,t,r){e.exports=r("y+YF")},"y+YF":function(e,t){!function(e,t){t.hasOwnProperty("dataLayer")||(t.dataLayer=[]);var r=new XMLHttpRequest;r.open("GET","/towa/gdpr/checkip",!0),r.onload=function(n){if(4===r.readyState){var a="error";if(200===r.status){var o=JSON.parse(r.responseText),i=e.createElement("meta");i.setAttribute("name","traffic-type"),a=o.internal?"internal":"external",i.setAttribute("content",a);var u=document.getElementsByTagName("head")[0];u.insertBefore(i,u.childNodes[0]),t.dataLayer.push({"traffic-type":a}),t.dataLayer.push({event:"trafficTypeLoaded"})}else t.dataLayer.push({event:"trafficTypeLoaded"});var f=new CustomEvent("towa-gdpr-ipcheck-finished",{detail:{trafficType:a}});t.dispatchEvent(f)}},r.onerror=function(e){t.dataLayer.push({event:"trafficTypeLoaded"});var r=new CustomEvent("towa-gdpr-ipcheck-finished",{detail:{trafficType:"error"}});t.dispatchEvent(r)},r.send(null)}(document,window)}});