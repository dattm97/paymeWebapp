(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[79],{15:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(10),c=n(0);function i(){var e="undefined"!==typeof window;function t(){return{width:e?window.innerWidth:null,height:e?window.innerHeight:null}}var n=Object(c.useState)(t()),i=Object(a.a)(n,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){if(e){var n=function(){o(t())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}}),[e]),l}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(54),c=n(53),i=n(26),l=n.n(i),o=n(112),r=n(95),u=n.n(r),s=n(0),d=n.n(s),m=n(9),p=n(75),v=n(11),y=n(19),b=n(20),f=n(21),h=n(15),g=function(e){var t=e.onClosePopup,n=e.type,i=void 0===n?"kycFace":n,r=e.handleOnNext,g=Object(p.useHistory)(),k=Object(s.useRef)(null),C=Object(h.a)().width,E=Object(m.d)().getState().sk,O=E.partner,j=E.configColor.mainColor,N=function(){switch(i){case"kycIdentifyImg":return Object(o.replaceColor)([0,181,26],Object(c.a)(j),v.a.kycChupGTTT);case"kycFace":return Object(o.replaceColor)([0,181,26],Object(c.a)(j),v.a.kycXacthuckhuonmat);case"kycVideo":return Object(o.replaceColor)([45,187,84],Object(c.a)(j),Object(o.replaceColor)([0,190,0],Object(c.a)(j),v.a.kycQuayVideo));default:return Object(o.replaceColor)([0,181,26],Object(c.a)(j),v.a.kycChupGTTT)}};Object(s.useEffect)((function(){u.a.loadAnimation({container:k.current,renderer:"svg",loop:!0,autoplay:!0,animationData:N()})}),[]);var w=function(){t&&t()};return i?d.a.createElement("div",{className:"modalContainer"},d.a.createElement("div",{className:"modalInner",style:{width:"100%"}},d.a.createElement("div",{className:"modalInner_header"},d.a.createElement("p",{className:"txtFirstLine font-SemiBold"},function(){switch(i){case"kycIdentifyImg":return"Ch\u1ee5p h\xecnh gi\u1ea5y t\u1edd tu\u1ef3 th\xe2n";case"kycFace":return"Ch\u1ee5p \u1ea3nh x\xe1c th\u1ef1c khu\xf4n m\u1eb7t";case"kycVideo":return"Quay video x\xe1c th\u1ef1c khu\xf4n m\u1eb7t v\xe0 gi\u1ea5y t\u1edd tu\u1ef3 th\xe2n";default:return"--"}}()),d.a.createElement("div",{onClick:w,onKeyPress:w,style:{position:"absolute",right:0}},d.a.createElement("img",{className:"iconClose",src:v.b.icSetClose16Px,alt:" "}))),"kycIdentifyImg"===i&&d.a.createElement("p",{style:{backgroundColor:Object(c.e)(j,.15)},className:"txtSecondLine font-medium"},"Theo quy \u0111\u1ecbnh c\u1ee7a NHNN, t\xe0i kho\u1ea3n V\xed \u0111i\u1ec7n t\u1eed ph\u1ea3i \u0111\u01b0\u1ee3c \u0111\u1ecbnh danh tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng. "),d.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},d.a.createElement("div",{ref:k,style:{width:(C>570?570:C)/3}})),function(){switch(i){case"kycIdentifyImg":return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"1. S\u1eed d\u1ee5ng gi\u1ea5y t\u1edd tu\u1ef3 th\xe2n h\u1ee3p l\u1ec7 c\u1ee7a ch\xednh b\u1ea1n")),d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"2. Ph\u1ea3i \u0111\u1eb7t th\u1ebb b\xean trong khung camera")),d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"3. Kh\xf4ng s\u1eed d\u1ee5ng b\u1ea3n sao c\u1ee7a gi\u1ea5y t\u1edd tu\u1ef3 th\xe2n")));case"kycFace":return d.a.createElement(d.a.Fragment,null," ",d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"1. Vui l\xf2ng gi\u1eef g\u01b0\u01a1ng m\u1eb7t \u1edf trong khung tr\xf2n")),d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"2. Gi\u1eef cho \u1ea3nh s\u1eafc n\xe9t kh\xf4ng b\u1ecb nho\xe8")));case"kycVideo":return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"1. Video s\u1ebd c\xf3 \u0111\u1ed9 d\xe0i 5 gi\xe2y")),d.a.createElement("div",{className:"bulletContent"},d.a.createElement("p",{className:"txtBulletContent font-semibold"},"2. Vui l\xf2ng gi\u1eef g\u01b0\u01a1ng m\u1eb7t v\xe0 m\u1eb7t tr\u01b0\u1edbc gi\u1ea5y t\u1edd t\xf9y th\xe2n c\u1ee7a b\u1ea1n tr\u01b0\u1edbc m\xe1y quay")));default:return null}}(),d.a.createElement("div",{className:"buttonModal"},d.a.createElement(y.a,{label:"TI\u1ebeP T\u1ee4C",variant:"active",onClick:function(){!function(){var e;r?r():(t(),a.a.getKycMode()||b.b.next({message:"",isVisible:!0}),"WEB"===l()(null!==(e=null===O||void 0===O?void 0:O.type)&&void 0!==e?e:"")?"kycIdentifyImg"===i?g.push("/kycImg"):"kycFace"===i?g.push("/kycFace"):g.push("/kycVideo"):f.b.next({type:"onKyc",kycMode:i}))}()}})))):null}},204:function(e,t,n){"use strict";n.r(t),n.d(t,"accountKyc",(function(){return l}));var a=n(13),c=n(16),i=n(25);function l(e,t){return{api:function(e){return Object(i.b)("mutation Mutation($kycInput: KYCInput!) {\n    Account {\n      KYC(input: $kycInput) {\n        succeeded\n        message\n        createdAt\n      }\n    }\n  }",Object(a.a)({},e))},type:c.L.ACCOUNT_KYC,payload:e,callback:t}}},205:function(e,t,n){"use strict";n.r(t),n.d(t,"uploadFile",(function(){return i}));var a=n(25),c=n(16);function i(e,t){return{api:function(e){return Object(a.a)(e)},type:c.K.UPLOAD_FILE,showLoading:!0,payload:e,callback:t}}},842:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(19),i=n(20),l=n(203),o=n(21),r=n(15),u=n(26),s=n.n(u),d=n(0),m=n.n(d),p=n(9),v=n(75),y=n(18),b=n(204),f=n(205),h=n(16),g=n(52),k=n(22);t.default=function(){var e,t,n=Object(v.useHistory)(),u=null!==(e=null===(t=Object(v.useLocation)().state)||void 0===t?void 0:t.imgFaceBase64)&&void 0!==e?e:"",C=Object(r.a)().height,E=Object(d.useState)(""),O=Object(a.a)(E,2),j=O[0],N=O[1],w=Object(p.c)((function(e){var t,n;return null===e||void 0===e||null===(t=e.sk)||void 0===t||null===(n=t.kyc)||void 0===n?void 0:n.kycMode})),I=(null===w||void 0===w?void 0:w.kycVideo)?"kycVideo":"",x=Object(p.c)((function(e){var t;return null===e||void 0===e||null===(t=e.sk)||void 0===t?void 0:t.kyc})),F=Object(p.c)((function(e){var t;return null===e||void 0===e||null===(t=e.sk)||void 0===t?void 0:t.partner})),B=Object(k.b)(),V=Object(p.b)(),T=Object(y.bindActionCreators)(b,V),K=Object(y.bindActionCreators)(f,V),A=Object(p.c)((function(e){var t;return null===e||void 0===e||null===(t=e.sk)||void 0===t?void 0:t.clientId}));function L(){I?N(I):function(){n.push("/processingLoading");var e,t=null!==x&&void 0!==x?x:{},a=t.identifyType,c=t.imgFront,l=t.imgBack,o=null,r=null;e=P(u),c&&(o=P(c));l&&(r=P(l));var s=new FormData;s.append("files",e,"imgFace.jpg"),c&&s.append("files",o,"imgFront.jpg");l&&s.append("files",r,"imgBack.jpg");K.uploadFile(s,(function(e,t){if(e){var c={clientId:A,face:t[0].path};a&&(c.identifyType=a,c.image={front:t[1].path},l&&(c.image={front:t[1].path,back:t[2].path})),T.accountKyc({kycInput:c},(function(e,t){var a,c;e?(V({type:h.g}),g.b.next({message:null===t||void 0===t||null===(a=t.Account)||void 0===a||null===(c=a.KYC)||void 0===c?void 0:c.message,isVisible:!0,ver:"2",title:""}),n.push("/")):n.push("/")}))}else{var o;i.b.next({message:null!==(o=null===t||void 0===t?void 0:t.message)&&void 0!==o?o:"Error uploadFile",isVisible:!0}),n.push("/")}}))}()}var P=function(e){for(var t=e.split(","),n=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),a=t[0].split(":")[1].split(";")[0],c=new Uint8Array(n.length),i=0;i<n.length;i++)c[i]=n.charCodeAt(i);return new Blob([c],{type:a})};return m.a.createElement("div",{className:"confirmKYC",style:{height:C-48-B,overflow:"auto",paddingTop:10}},m.a.createElement("div",{className:"container",style:{marginTop:0,height:C-48-B-70,overflow:"auto"}},m.a.createElement("img",{style:{marginBottom:20,width:"100%"},src:u}),m.a.createElement("label",null,"Vui l\xf2ng x\xe1c nh\u1eadn \u1ea3nh \u0111\xe3 r\xf5 n\xe9t, g\u01b0\u01a1ng m\u1eb7t c\u1ee7a b\u1ea1n \u0111\xe3 c\xf3 trong khung h\xecnh.")),m.a.createElement("div",{className:"layoutBottom"},m.a.createElement(c.a,{label:"Ch\u1ee5p l\u1ea1i",variant:"active",onClick:function(){var e;if("EXPO"===s()(null!==(e=null===F||void 0===F?void 0:F.type)&&void 0!==e?e:""))return o.b.next({type:"onKyc",kycMode:"kycFace"}),void n.goBack();n.goBack()}}),m.a.createElement(c.a,{label:I?"Ti\u1ebfp t\u1ee5c":"Ho\xe0n t\u1ea5t",variant:"active",onClick:function(){return L()}})),j&&m.a.createElement(l.a,{onClosePopup:function(){return N("")},type:j,handleOnNext:function(){var e;N(""),V({type:h.I,payload:{imgFace:u}}),"WEB"===s()(null!==(e=null===F||void 0===F?void 0:F.type)&&void 0!==e?e:"")?n.push("/kycVideo"):o.b.next({type:"onKyc",kycMode:I})}}))}}}]);