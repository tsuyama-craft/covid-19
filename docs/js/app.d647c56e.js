(function(e){function n(n){for(var r,o,i=n[0],u=n[1],s=n[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5797275a":"201cea7b","chunk-723def32":"82775452","chunk-9d54f916":"da426d8e","chunk-c6ee0de0":"a3b10ba9","chunk-34270001":"9dcd60e7","chunk-5866690a":"e2664e9d","chunk-e844c228":"705f1117"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-5797275a":1,"chunk-723def32":1,"chunk-9d54f916":1,"chunk-c6ee0de0":1,"chunk-34270001":1,"chunk-5866690a":1,"chunk-e844c228":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-5797275a":"1fb628e9","chunk-723def32":"899016dd","chunk-9d54f916":"edf6e028","chunk-c6ee0de0":"ef6e8770","chunk-34270001":"8acbaa21","chunk-5866690a":"90bb780c","chunk-e844c228":"8af1033f"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],h.parentNode.removeChild(h),t(c)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={key:0};function a(e,n,t,a,c,i){var u=Object(r["x"])("router-view");return 1==i.serviceworkerUzai?(Object(r["q"])(),Object(r["d"])("div",o,[Object(r["h"])(u)])):Object(r["e"])("",!0)}var c={name:"App",computed:{serviceworkerUzai:function(){return location.reload(!0),!0},readyToshowMainPage:function(){return this.kenDetails.length>0&&this.kenUtiwake.length>0&&this.kenPcr.length>0&&this.kenDead.length>0&&this.kenIryou.length>0&&this.Zenkoku.length>0}}};t("64be");c.render=a;var i=c,u=t("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var s=t("6c02"),l=[{path:"/",name:"Mainpage",component:function(){return Promise.all([t.e("chunk-c6ee0de0"),t.e("chunk-34270001")]).then(t.bind(null,"4edd"))}},{path:"/Detailspage",name:"detailspage",component:function(){return t.e("chunk-9d54f916").then(t.bind(null,"4811"))}},{path:"/shisetupage",name:"shisetupage",component:function(){return t.e("chunk-5797275a").then(t.bind(null,"7796"))}},{path:"/helppage",name:"helppage",component:function(){return t.e("chunk-723def32").then(t.bind(null,"681d"))}},{path:"/shisetupage/itiranpage",name:"Shisetu_itiranpage",component:function(){return Promise.all([t.e("chunk-c6ee0de0"),t.e("chunk-5866690a")]).then(t.bind(null,"a239"))},props:!0},{path:"/shisetupage/itiran/syousai",name:"Shisetu_syousaipage",component:function(){return t.e("chunk-e844c228").then(t.bind(null,"ee4b"))},props:!0}],d=Object(s["a"])({history:Object(s["b"])(""),routes:l}),h=d,f=t("5502"),p=t("0e44"),g=Object(f["a"])({state:{detaildata:[],detaildata2:[],facilityTableData:[]},mutations:{Enter:function(e,n){e.detaildata=n},Enter2:function(e,n){e.detaildata2=n},toStore:function(e,n){e.facilityTableData=n}},actions:{},modules:{},plugins:[Object(p["a"])({storage:window.sessionStorage})]}),b=Object(r["c"])(i);b.config.devtools=!0,b.use(g).use(h).mount("#app")},"64be":function(e,n,t){"use strict";t("c894")},c894:function(e,n,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ZGZiNiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNmN2UiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCJqc29ucFNjcmlwdFNyYyIsInAiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsImUiLCJwcm9taXNlcyIsImNzc0NodW5rcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImZ1bGxocmVmIiwiZXhpc3RpbmdMaW5rVGFncyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0YWciLCJkYXRhSHJlZiIsImdldEF0dHJpYnV0ZSIsInJlbCIsImV4aXN0aW5nU3R5bGVUYWdzIiwibGlua1RhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25sb2FkIiwib25lcnJvciIsImV2ZW50IiwicmVxdWVzdCIsInRhcmdldCIsInNyYyIsImVyciIsIkVycm9yIiwiY29kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRoZW4iLCJpbnN0YWxsZWRDaHVua0RhdGEiLCJwcm9taXNlIiwib25TY3JpcHRDb21wbGV0ZSIsInNjcmlwdCIsImNoYXJzZXQiLCJ0aW1lb3V0IiwibmMiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFsbCIsIm0iLCJjIiwiZCIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsIm9lIiwiY29uc29sZSIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJzZXJ2aWNld29ya2VyVXphaSIsImNvbXB1dGVkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZWFkeVRvc2hvd01haW5QYWdlIiwidGhpcyIsImtlbkRldGFpbHMiLCJrZW5VdGl3YWtlIiwia2VuUGNyIiwia2VuRGVhZCIsImtlbklyeW91IiwiWmVua29rdSIsInJlbmRlciIsInJlZ2lzdGVyIiwicHJvY2VzcyIsInJlYWR5IiwibG9nIiwicmVnaXN0ZXJlZCIsImNhY2hlZCIsInVwZGF0ZWZvdW5kIiwidXBkYXRlZCIsIm9mZmxpbmUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJoaXN0b3J5IiwiY3JlYXRlV2ViSGFzaEhpc3RvcnkiLCJjcmVhdGVTdG9yZSIsInN0YXRlIiwiZGV0YWlsZGF0YSIsImRldGFpbGRhdGEyIiwiZmFjaWxpdHlUYWJsZURhdGEiLCJtdXRhdGlvbnMiLCJFbnRlciIsIkVudGVyMiIsInRvU3RvcmUiLCJhY3Rpb25zIiwicGx1Z2lucyIsImNyZWF0ZVBlcnNpc3RlZFN0YXRlIiwic3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiYXBwIiwiY3JlYXRlQXBwIiwiQXBwIiwiY29uZmlnIiwiZGV2dG9vbHMiLCJ1c2UiLCJzdG9yZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBQ25CSyxFQUFpQkwsRUFBSyxHQUlITSxFQUFJLEVBQUdDLEVBQVcsR0FDcENELEVBQUlILEVBQVNLLE9BQVFGLElBQ3pCSixFQUFVQyxFQUFTRyxHQUNoQkcsT0FBT0MsVUFBVUMsZUFBZUMsS0FBS0MsRUFBaUJYLElBQVlXLEVBQWdCWCxJQUNwRkssRUFBU08sS0FBS0QsRUFBZ0JYLEdBQVMsSUFFeENXLEVBQWdCWCxHQUFXLEVBRTVCLElBQUlELEtBQVlHLEVBQ1pLLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtSLEVBQWFILEtBQ3BEYyxFQUFRZCxHQUFZRyxFQUFZSCxJQUcvQmUsR0FBcUJBLEVBQW9CaEIsR0FFNUMsTUFBTU8sRUFBU0MsT0FDZEQsRUFBU1UsT0FBVFYsR0FPRCxPQUhBVyxFQUFnQkosS0FBS0ssTUFBTUQsRUFBaUJiLEdBQWtCLElBR3ZEZSxJQUVSLFNBQVNBLElBRVIsSUFEQSxJQUFJQyxFQUNJZixFQUFJLEVBQUdBLEVBQUlZLEVBQWdCVixPQUFRRixJQUFLLENBRy9DLElBRkEsSUFBSWdCLEVBQWlCSixFQUFnQlosR0FDakNpQixHQUFZLEVBQ1JDLEVBQUksRUFBR0EsRUFB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TUFBTSxTLG9DQ1RqQyxXIiwiZmlsZSI6ImpzL2FwcC5kNjQ3YzU2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIENTUyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDc3NDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwianMvXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCJjaHVuay01Nzk3Mjc1YVwiOlwiMjAxY2VhN2JcIixcImNodW5rLTcyM2RlZjMyXCI6XCI4Mjc3NTQ1MlwiLFwiY2h1bmstOWQ1NGY5MTZcIjpcImRhNDI2ZDhlXCIsXCJjaHVuay1jNmVlMGRlMFwiOlwiYTNiMTBiYTlcIixcImNodW5rLTM0MjcwMDAxXCI6XCI5ZGNkNjBlN1wiLFwiY2h1bmstNTg2NjY5MGFcIjpcImUyNjY0ZTlkXCIsXCJjaHVuay1lODQ0YzIyOFwiOlwiNzA1ZjExMTdcIn1bY2h1bmtJZF0gKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1wiY2h1bmstNTc5NzI3NWFcIjoxLFwiY2h1bmstNzIzZGVmMzJcIjoxLFwiY2h1bmstOWQ1NGY5MTZcIjoxLFwiY2h1bmstYzZlZTBkZTBcIjoxLFwiY2h1bmstMzQyNzAwMDFcIjoxLFwiY2h1bmstNTg2NjY5MGFcIjoxLFwiY2h1bmstZTg0NGMyMjhcIjoxfTtcbiBcdFx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG4gXHRcdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHR2YXIgaHJlZiA9IFwiY3NzL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLlwiICsge1wiY2h1bmstNTc5NzI3NWFcIjpcIjFmYjYyOGU5XCIsXCJjaHVuay03MjNkZWYzMlwiOlwiODk5MDE2ZGRcIixcImNodW5rLTlkNTRmOTE2XCI6XCJlZGY2ZTAyOFwiLFwiY2h1bmstYzZlZTBkZTBcIjpcImVmNmU4NzcwXCIsXCJjaHVuay0zNDI3MDAwMVwiOlwiOGFjYmFhMjFcIixcImNodW5rLTU4NjY2OTBhXCI6XCI5MGJiNzgwY1wiLFwiY2h1bmstZTg0NGMyMjhcIjpcIjhhZjEwMzNmXCJ9W2NodW5rSWRdICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdXG4gXHRcdFx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJjaHVuay12ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJzZXJ2aWNld29ya2VyVXphaSA9PSB0cnVlXCI+XG4gICAgPHJvdXRlci12aWV3Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQXBwJyxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzZXJ2aWNld29ya2VyVXphaTogZnVuY3Rpb24oKSB7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgcmVhZHlUb3Nob3dNYWluUGFnZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZW5EZXRhaWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMua2VuVXRpd2FrZS5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLmtlblBjci5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLmtlbkRlYWQubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5rZW5JcnlvdS5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLlplbmtva3UubGVuZ3RoID4gMCBcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuI2FwcCB7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5cbiNuYXYgYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuI25hdiBhLnJvdXRlci1saW5rLWV4YWN0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQxNzA5YzEmYmluZGluZ3M9e1xcXCJzZXJ2aWNld29ya2VyVXphaVxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJyZWFkeVRvc2hvd01haW5QYWdlXFxcIjpcXFwib3B0aW9uc1xcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAncmVnaXN0ZXItc2VydmljZS13b3JrZXInXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHJlZ2lzdGVyKGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfXNlcnZpY2Utd29ya2VyLmpzYCwge1xuICAgIHJlYWR5ICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnQXBwIGlzIGJlaW5nIHNlcnZlZCBmcm9tIGNhY2hlIGJ5IGEgc2VydmljZSB3b3JrZXIuXFxuJyArXG4gICAgICAgICdGb3IgbW9yZSBkZXRhaWxzLCB2aXNpdCBodHRwczovL2dvby5nbC9BRnNrcUInXG4gICAgICApXG4gICAgfSxcbiAgICByZWdpc3RlcmVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkLicpXG4gICAgfSxcbiAgICBjYWNoZWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaGFzIGJlZW4gY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKVxuICAgIH0sXG4gICAgdXBkYXRlZm91bmQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGRvd25sb2FkaW5nLicpXG4gICAgfSxcbiAgICB1cGRhdGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLicpXG4gICAgfSxcbiAgICBvZmZsaW5lICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJylcbiAgICB9LFxuICAgIGVycm9yIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnJvcilcbiAgICB9XG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhhc2hIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdNYWlucGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL01haW5wYWdlLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL0RldGFpbHNwYWdlJyxcbiAgICBuYW1lOiAnZGV0YWlsc3BhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9EZXRhaWxzcGFnZS52dWUnKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9zaGlzZXR1cGFnZScsXG4gICAgbmFtZTogJ3NoaXNldHVwYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dXBhZ2UudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvaGVscHBhZ2UnLFxuICAgIG5hbWU6ICdoZWxwcGFnZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL0hlbHBwYWdlLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3NoaXNldHVwYWdlL2l0aXJhbnBhZ2UnLFxuICAgIG5hbWU6ICdTaGlzZXR1X2l0aXJhbnBhZ2UnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TaGlzZXR1X2l0aXJhbnBhZ2UudnVlJyksXG4gICAgcHJvcHM6IHRydWVcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvc2hpc2V0dXBhZ2UvaXRpcmFuL3N5b3VzYWknLFxuICAgIG5hbWU6ICdTaGlzZXR1X3N5b3VzYWlwYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU2hpc2V0dV9zeW91c2FpcGFnZS52dWUnKSxcbiAgICBwcm9wczogdHJ1ZVxuICB9LFxuXVxuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICBoaXN0b3J5OiBjcmVhdGVXZWJIYXNoSGlzdG9yeShwcm9jZXNzLmVudi5CQVNFX1VSTCksXG4gIHJvdXRlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgY3JlYXRlUGVyc2lzdGVkU3RhdGUgZnJvbSAndnVleC1wZXJzaXN0ZWRzdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIGRldGFpbGRhdGE6IFtdLFxuICAgIGRldGFpbGRhdGEyOiBbXSxcbiAgICBmYWNpbGl0eVRhYmxlRGF0YTogW10sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIEVudGVyIChzdGF0ZSwgZGF0YSkge1xuICAgICAgICBzdGF0ZS5kZXRhaWxkYXRhID0gZGF0YTtcbiAgICB9LFxuICAgIEVudGVyMiAoc3RhdGUsIGRhdGEpIHtcbiAgICAgIHN0YXRlLmRldGFpbGRhdGEyID0gZGF0YTtcbiAgICB9LFxuICAgIHRvU3RvcmUgKHN0YXRlLCBkYXRhKSB7XG4gICAgICBzdGF0ZS5mYWNpbGl0eVRhYmxlRGF0YSA9IGRhdGE7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICB9LFxuICBtb2R1bGVzOiB7XG4gIH0sXG4gIHBsdWdpbnM6IFtjcmVhdGVQZXJzaXN0ZWRTdGF0ZSh7XG4gICAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlXG4gIH0pXVxufSlcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXHJcbmltcG9ydCAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXInXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcclxuXHJcbmFwcC5jb25maWcuZGV2dG9vbHMgPSB0cnVlXHJcbmFwcC51c2Uoc3RvcmUpLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJykiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/P3JlZi0tMC0xIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiXSwic291cmNlUm9vdCI6IiJ9