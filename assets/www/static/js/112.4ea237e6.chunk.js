(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[112],{835:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11);t.default=function(e){var t=e.data,a=e.onClosePopupRoot,l=function(){a&&a()};return Object(n.useEffect)((function(){var e=function(e){l(),t.onManualQuery&&t.onManualQuery(null===e||void 0===e?void 0:e.data)};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[]),o.a.createElement("div",{className:"PopupNotifyBottom__container"},o.a.createElement("div",{className:"PopupNotifyBottom"},o.a.createElement("div",{className:"PopupNotifyBottom__inner",style:{paddingBottom:30,height:"90%"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",marginBottom:8}},o.a.createElement("div",{style:{flex:1}}),o.a.createElement("div",{style:{flex:2,alignItems:"center"}},t.titleHeader&&o.a.createElement("p",{className:"font-semibold",style:{fontSize:17,color:"#000000",textAlign:"center"}},t.titleHeader)),o.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"flex-end",marginRight:15},onClick:l,onKeyPress:l},t.showClose&&o.a.createElement("img",{className:"iconClose",src:i.b.icSetClose16Px,alt:""}))),o.a.createElement("iframe",{title:"WebView",id:"frame",srcDoc:"<html><body>".concat(t.url,"</body></html>"),width:"100%",height:"100%",frameBorder:"0",allowFullScreen:!0}))))}}}]);