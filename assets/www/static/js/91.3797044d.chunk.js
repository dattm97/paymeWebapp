(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[91],{202:function(e,a,t){"use strict";var o=t(0),n=t.n(o),c=t(12),l=t(11);a.a=function(e){var a=e.backgroundColor,t=void 0===a?"#f2f6f7":a;return n.a.createElement("div",{className:"footer",style:{background:t}},n.a.createElement("div",{className:"footerLine1"},c.a.SupportCenter),n.a.createElement("div",{className:"txtLine"},"|"),n.a.createElement("div",{className:"copyright"},"Powered by \xa0"),n.a.createElement("img",{width:36,height:12,src:l.b.iconPayME,alt:" "}))}},23:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var o=t(0),n=t.n(o),c=t(75),l=t(11),r=t(21),i=function(e){var a,t,o=e.actions,i=e.customAction,s=e.iconBackBlack,d=void 0!==s&&s,u=e.backToCloseSDK,v=Object(c.useHistory)(),m=Object(c.useLocation)(),p=u||null!==(a=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.backToCloseSDK)&&void 0!==a&&a,h=function(){var e;if(p)return localStorage.clear(),void r.b.next({type:"onClose"});i?i():(null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.goBack)&&"/linkbank"===(null===m||void 0===m?void 0:m.pathname)?v.goBack():"home"===o?v.replace("/"):"profile"===o?v.push("/profilePersonal"):v.goBack()};return n.a.createElement("div",{className:"d-block px-2 cursor-pointer",onClick:h,onKeyPress:h},n.a.createElement("img",{width:32,height:32,src:d?l.b.iconBackBlack:l.b.iconBackWhite,alt:""}))}},918:function(e,a,t){"use strict";t.r(a);var o=t(13),n=t(0),c=t.n(n),l=t(9),r=t(23),i=t(22),s=function(e){var a=e.props,t=Object(l.d)().getState().sk.configColor.bgColor,o=Object(i.b)();return c.a.createElement("div",{className:"header",id:"header",style:{paddingTop:o,background:t}},c.a.createElement("div",{className:"headerInner row"},c.a.createElement("div",{className:"headerLeft col-2 nopadding"},c.a.createElement(r.a,{actions:null===a||void 0===a?void 0:a.actionBack})),c.a.createElement("div",{className:"headerCenter col nopadding"},c.a.createElement("p",{className:"headerTitle font-semibold"},null===a||void 0===a?void 0:a.headerTitle)),c.a.createElement("div",{className:"headerRight col-2 nopadding"},null===a||void 0===a?void 0:a.customBtnRight)))},d=t(202);a.default=function(e){var a,t=e.props,n=e.component,l=e.route;return c.a.createElement("div",{className:"default-layout ".concat(null!==(a=null===t||void 0===t?void 0:t.contentClass)&&void 0!==a?a:"")},(null===t||void 0===t?void 0:t.headerHide)?null:c.a.createElement(s,{props:Object(o.a)({},t)}),c.a.createElement("div",{className:"contents-wrapper"},c.a.createElement(n,{route:l,props:Object(o.a)({},t)}),c.a.createElement("div",{className:"clearfix"})),(null===t||void 0===t?void 0:t.footerShow)?c.a.createElement(d.a,{props:Object(o.a)({},t)}):null)}}}]);