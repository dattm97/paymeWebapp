(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[44],{100:function(e,t,l){var a=l(98),n=l(101);e.exports=function(e,t){var l=[];if(!e||!e.length)return l;var i=-1,o=[],r=e.length;for(t=a(t,3);++i<r;){var u=e[i];t(u,i,e)&&(l.push(u),o.push(i))}return n(e,o),l}},101:function(e,t,l){var a=l(102),n=l(124),i=Array.prototype.splice;e.exports=function(e,t){for(var l=e?t.length:0,o=l-1;l--;){var r=t[l];if(l==o||r!==u){var u=r;n(r)?i.call(e,r,1):a(e,r)}}return e}},102:function(e,t,l){var a=l(131),n=l(24),i=l(103),o=l(117);e.exports=function(e,t){return t=a(t,e),null==(e=i(e,t))||delete e[o(n(t))]}},103:function(e,t,l){var a=l(130),n=l(133);e.exports=function(e,t){return t.length<2?e:a(e,n(t,0,-1))}},29:function(e,t,l){"use strict";l.d(t,"a",(function(){return o}));var a=l(13),n=l(0),i=l.n(n),o=function(e){return i.a.createElement("svg",{width:"100%",height:"2",style:Object(a.a)({alignItems:"center"},e.style)},i.a.createElement("line",{x1:"1",x2:"100%",y1:"1",y2:"1",stroke:"#cbcbcb",strokeWidth:"1",strokeLinecap:"round",strokeDasharray:"1, 5"}))}},49:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return o}));var a=l(12),n=l(32);function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e===n.b.WALLET?t?a.a.PayMeWalletv2:a.a.PayMeWallet:e===n.b.CREDIT_BALANCE?a.a.CreditBalance:e===n.b.BANK_CARD||e===n.b.BANK_CARD_PG?a.a.LocalATM:e===n.b.BANK_ACCOUNT||e===n.b.BANK_QR_CODE?a.a.DeBankAccount:e===n.b.CREDIT_CARD||e===n.b.CREDIT_CARD_PG?a.a.VisaMasterJCBCard:e===n.b.BANK_TRANSFER?a.a.TransferBank:e===n.b.LINKED?a.a.linkedAccount:e===n.b.BANK_QR_CODE_PG?a.a.paymentQRPay:e===n.b.VIET_QR?a.a.vietQRPay:e}function o(e){var t={};return(null===e||void 0===e?void 0:e.color)&&(t.color=e.color),(null===e||void 0===e?void 0:e.fontWeight)&&(t.fontWeight=e.fontWeight),(null===e||void 0===e?void 0:e.fontStyle)&&(t.fontStyle=e.fontStyle),(null===e||void 0===e?void 0:e.fontSize)&&(t.fontSize=e.fontSize),t}},55:function(e,t,l){"use strict";var a=l(0),n=l.n(a);function i(e,t){if(null==e)return{};var l,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}var o=["focus","autoFocus"],r=Object(a.forwardRef)((function(e,t){var l=e.focus,r=e.autoFocus,u=i(e,o),c=Object(a.useRef)(null),d=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(!!l);return Object(a.useImperativeHandle)(t,(function(){return{blur:function(){c.current&&c.current.blur()}}}),[t]),Object(a.useLayoutEffect)((function(){c.current&&(l&&r&&c.current.focus(),l&&r&&l!==d&&(c.current.focus(),c.current.select()))}),[r,l,d]),n.a.createElement("input",Object.assign({id:"input",ref:c},u))})),u=Object(a.memo)(r),c=["length","isNumberInput","autoFocus","disabled","onChangeOTP","inputClassName","inputStyle"],d=Object(a.forwardRef)((function(e,t){var l=e.length,o=e.isNumberInput,r=e.autoFocus,d=e.disabled,s=e.onChangeOTP,v=e.inputClassName,m=e.inputStyle,f=i(e,c),b=Object(a.useState)(0),E=b[0],p=b[1],y=Object(a.useState)(Array(l).fill("")),O=y[0],C=y[1],N=Object(a.useRef)(null);Object(a.useImperativeHandle)(t,(function(){return{clear:function(){var e=[].concat(O);C(e.fill("")),N.current&&N.current.blur()},blur:function(){N.current&&N.current.blur()}}}),[t]);var A=Object(a.useCallback)((function(e){var t=e.join("");s(t)}),[s]),h=Object(a.useCallback)((function(e){var t=e;return o?!t||/\d/.test(t)?t:"":t}),[o]),T=Object(a.useCallback)((function(e){var t=[].concat(O);t[E]=e[0]||"",C(t),A(t)}),[E,A,O]),I=Object(a.useCallback)((function(e){var t=Math.max(Math.min(l-1,e),0);p(t)}),[l]),g=Object(a.useCallback)((function(){I(E-1)}),[E,I]),j=Object(a.useCallback)((function(){I(E+1)}),[E,I]),P=Object(a.useCallback)((function(e){return function(){I(e)}}),[I]),R=Object(a.useCallback)((function(e){var t=h(e.currentTarget.value);t?(T(t),j()):e.preventDefault()}),[T,j,h]),_=Object(a.useCallback)((function(){p(-1)}),[]),M=Object(a.useCallback)((function(e){switch(e.key||e.keyCode){case"Backspace":case"Delete":case 229:case 8:e.preventDefault(),O[E]?T(""):g();break;case"ArrowLeft":case 37:e.preventDefault(),g();break;case"ArrowRight":case 39:e.preventDefault(),j();break;case" ":case 32:e.preventDefault()}}),[E,T,j,g,O]),k=Object(a.useCallback)((function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").trim().slice(0,l-E).split("");if(t){var a=0,n=[].concat(O);n.forEach((function(e,l){if(l>=E){var i=h(t.shift()||e);i&&(n[l]=i,a=l)}})),C(n),p(Math.min(a+1,l-1)),A(n)}}),[E,h,l,O]);return n.a.createElement("div",Object.assign({},f),Array(l).fill("").map((function(e,t){return n.a.createElement(u,{ref:N,key:"SingleInput-"+t,focus:E===t,value:O&&O[t],autoFocus:r,onFocus:P(t),onChange:R,onKeyDown:M,onBlur:_,onPaste:k,onWheel:_,inputMode:o?"numeric":"text",type:o?"tel":"text",pattern:o?"[0-9]*":"^[a-zA-Z0-9]+$",autoComplete:"off",autoCorrect:"off",style:m,className:v,disabled:d})})))})),s=Object(a.memo)(d);t.a=s},60:function(e,t,l){"use strict";l.d(t,"a",(function(){return o}));var a=l(10),n=l(0),i=l.n(n),o=function(e){var t=Object(n.useState)(0),l=Object(a.a)(t,2),o=l[0],r=l[1],u=Object(n.useState)(0),c=Object(a.a)(u,2),d=c[0],s=c[1],v=Object(n.useState)(0),m=Object(a.a)(v,2),f=m[0],b=m[1],E=Object(n.useState)(0),p=Object(a.a)(E,2),y=p[0],O=p[1],C=Object(n.useRef)(null),N=e.expired,A=e.onExpired,h=e.renderer;return Object(n.useEffect)((function(){return function(e){if(""!==e&&0!==e){var t=new Date(e).getTime();C.current=setInterval((function(){var e=(new Date).getTime(),l=t-e;if(l<0||Number.isNaN(l))clearInterval(C.current),A&&A();else{var a=Math.floor(l/864e5),n=Math.floor(l%864e5/36e5),i=Math.floor(l%36e5/6e4),o=Math.floor(l%6e4/1e3);r(a),s(n),b(i),O(o)}}),1e3)}}(N),function(){clearInterval(C.current)}}),[N]),h?h({days:o,hours:d,minutes:f,seconds:y}):i.a.createElement("p",{style:{fontSize:"16px",textAlign:"center"}},o>0?"".concat(o):null,d>0?"".concat(d,":"):null,f>0?"".concat(f,":"):"00:",y>0?"".concat(y):"0")}},70:function(e,t,l){"use strict";l.d(t,"a",(function(){return o}));var a=l(0),n=l.n(a),i=l(9),o=function(){var e=Object(i.d)().getState().sk.configColor.mainColor;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 120 120"},n.a.createElement("g",{fill:"none",fillRule:"evenodd"},n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("g",null,n.a.createElement("path",{fill:"#000",fillOpacity:".2",fillRule:"nonzero",d:"M64.362 1.14C42.246 7.61 46.678 23.078 44.203 40.179c-3.08 21.338-16.431 10.398-31.755 21.92-26.499 19.924-7.278 63.877 25.658 57.223 17.475-3.55 21.025-16.43 28.173-30.192 9.218-17.789 24.51-12.937 38.224-24.58 27.809-23.57-8.766-72.634-40.14-63.408",opacity:".15",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#DDD",d:"M66.238 103.643H24.473c-3.79-.009-6.86-3.02-6.874-6.738v-82.97c.013-3.72 3.084-6.73 6.874-6.738h41.765c3.79.009 6.86 3.019 6.874 6.737v82.971c-.014 3.719-3.084 6.729-6.874 6.738",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#E8E8E8",d:"M73.047 16.657H17.6V13.82c0-3.657 2.965-6.622 6.623-6.622h42.194c1.758-.002 3.445.694 4.689 1.937 1.243 1.242 1.942 2.927 1.942 4.685v2.838z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#D1D1D1",d:"M49.2 13.31h-7.997c-.417.035-.818-.167-1.038-.523-.22-.356-.22-.806 0-1.162.22-.356.621-.558 1.038-.523h7.998c.416-.035.818.167 1.037.523.22.356.22.806 0 1.162-.22.356-.62.558-1.037.523M55.338 12.218c0 .442-.267.84-.676 1.01-.409.168-.879.073-1.19-.241-.312-.314-.403-.785-.232-1.192.172-.408.572-.672 1.014-.669.6.005 1.084.492 1.084 1.092",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 29.327c-9.182 0-17.46 5.531-20.972 14.013-3.513 8.482-1.57 18.245 4.924 24.735 6.493 6.491 16.257 8.43 24.739 4.915 8.481-3.515 14.01-11.794 14.006-20.974-.013-12.528-10.169-22.68-22.698-22.689m0 46.897c-13.362 0-24.194-10.831-24.194-24.192S31.957 27.84 45.319 27.84c13.362 0 24.194 10.83 24.194 24.192-.035 13.346-10.847 24.157-24.194 24.192",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 35.327c-9.218.004-16.686 7.478-16.683 16.694.003 9.216 7.476 16.685 16.693 16.684 9.217-.002 16.687-7.473 16.687-16.69-.009-9.216-7.48-16.684-16.698-16.688m0 34.881c-10.048 0-18.194-8.145-18.194-18.192 0-10.048 8.146-18.193 18.194-18.193 10.048 0 18.194 8.145 18.194 18.193-.013 10.042-8.151 18.18-18.194 18.192",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 41.553c-5.78 0-10.465 4.684-10.465 10.463 0 5.778 4.685 10.463 10.464 10.463 5.779 0 10.464-4.685 10.464-10.463-.027-5.768-4.696-10.437-10.464-10.463m0 22.421c-6.604-.004-11.955-5.36-11.952-11.964.003-6.603 5.359-11.954 11.963-11.953 6.604.001 11.957 5.355 11.957 11.959-.01 6.604-5.363 11.954-11.968 11.958",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("path",{fill:"#FFF",d:"M86.859 36.732c.003 5.577-3.355 10.606-8.509 12.74-5.153 2.133-11.084.95-15.024-2.998-3.94-3.948-5.11-9.88-2.966-15.029 2.144-5.148 7.18-8.496 12.758-8.481 7.593.016 13.74 6.175 13.74 13.768",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),n.a.createElement("g",{fill:e},n.a.createElement("g",null,n.a.createElement("path",{fillRule:"nonzero",d:"M59.475 42.411c4.56-.002 8.936 1.808 12.161 5.032 3.226 3.224 5.039 7.598 5.039 12.158 0 9.499-7.7 17.199-17.2 17.199H17.192c-4.561 0-8.935-1.813-12.16-5.038-3.224-3.226-5.034-7.6-5.032-12.16 0-9.494 7.697-17.19 17.192-17.19h42.283zM42.122 18.03l-.286-.805c-.625-1.875-2.582-2.933-4.466-2.413-.952.303-1.743.984-2.191 1.888-.449.904-.517 1.954-.189 2.91l1.329 3.742c.073.18.07.384-.01.561-.081.178-.231.313-.415.374-.177.075-.376.072-.551-.007-.175-.08-.31-.23-.371-.414l-1.273-3.573c-.93-2.494.155-5.295 2.509-6.482 1.28-.616 2.757-.655 4.068-.108 1.31.546 2.332 1.628 2.814 2.98l.333.935c.072.184.065.391-.021.57-.087.178-.243.31-.432.365-.18.048-.373.019-.533-.08-.16-.098-.274-.259-.315-.444z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"}),n.a.createElement("path",{fillRule:"nonzero",d:"M38.254 17.911h2.17c2.19 0 3.966 1.776 3.966 3.967v6.764c0 2.19-1.776 3.967-3.967 3.967h-2.17c-2.19 0-3.967-1.776-3.967-3.967v-6.764c0-2.19 1.777-3.967 3.968-3.967z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472) translate(39.338401, 25.260008) rotate(-89.900000) translate(-39.338401, -25.260008)"}),n.a.createElement("path",{d:"M60.81 14.29l-4.796.46c-.603.027-1.07.537-1.043 1.14.027.603.537 1.07 1.14 1.043h.105l4.803-.452c.568-.098.964-.617.909-1.19-.055-.573-.543-1.006-1.119-.994M57.21 6.293c-.185-.224-.453-.365-.743-.39-.29-.027-.578.064-.8.252l-3.542 2.943c-.356.295-.488.78-.33 1.215.158.433.571.721 1.033.718.254 0 .5-.088.695-.25l3.542-2.952c.465-.384.53-1.072.146-1.536M47.758.002c-.29-.018-.575.082-.791.277-.216.194-.345.468-.357.758l-.26 5.086c-.015.29.086.573.28.789.194.215.466.344.756.36h.057c.583.004 1.065-.453 1.091-1.036l.259-5.086c.018-.29-.082-.575-.277-.791-.194-.216-.468-.345-.758-.357",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"})),n.a.createElement("path",{d:"M38.742 42.411h20.733c4.56-.002 8.936 1.808 12.161 5.032 3.226 3.224 5.039 7.598 5.039 12.158 0 9.499-7.7 17.199-17.2 17.199H17.192c-4.561 0-8.935-1.813-12.16-5.038-3.224-3.226-5.034-7.6-5.032-12.16 0-9.494 7.697-17.19 17.192-17.19h10.512",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"})),n.a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M91.545 67.322c.6 0 1.087.487 1.087 1.087v3.549l3.072-1.772c.52-.3 1.185-.122 1.485.398.28.485.144 1.097-.298 1.42l-.1.065-3.073 1.774 3.074 1.774c.485.28.673.878.452 1.38l-.054.106c-.3.52-.966.698-1.486.398l-3.072-1.774v3.55c0 .6-.487 1.087-1.087 1.087-.601 0-1.088-.487-1.088-1.088v-3.55l-3.078 1.777c-.52.3-1.185.122-1.485-.398-.3-.52-.123-1.185.398-1.486l3.076-1.776-3.076-1.776c-.52-.3-.698-.965-.398-1.485.3-.52.966-.699 1.486-.399l3.077 1.777v-3.55c0-.601.487-1.088 1.088-1.088zM72.448 67.053c.6 0 1.087.487 1.087 1.088v3.548l3.072-1.772c.52-.3 1.185-.122 1.485.398.28.486.144 1.098-.298 1.421l-.1.065-3.073 1.773 3.074 1.775c.485.28.673.878.452 1.38l-.054.105c-.3.52-.966.699-1.486.398l-3.072-1.774v3.55c0 .6-.487 1.088-1.087 1.088-.601 0-1.088-.487-1.088-1.088v-3.55l-3.078 1.777c-.52.3-1.185.122-1.485-.398-.3-.52-.123-1.186.398-1.486l3.076-1.777-3.076-1.775c-.52-.3-.698-.966-.398-1.486.3-.52.965-.698 1.486-.398l3.077 1.776v-3.55c0-.6.487-1.088 1.088-1.088zM53.53 67.322c.601 0 1.088.487 1.088 1.087v3.549l3.079-1.776c.52-.3 1.185-.122 1.485.398.28.485.144 1.097-.298 1.42l-.1.065-3.072 1.773 3.07 1.772c.485.28.673.879.452 1.38l-.054.106c-.3.52-.965.698-1.486.398l-3.077-1.776.001 3.558c0 .601-.487 1.088-1.087 1.088s-1.088-.487-1.088-1.088v-3.55l-3.071 1.773c-.52.3-1.185.122-1.486-.398-.3-.52-.122-1.185.398-1.486l3.077-1.777-3.079-1.778c-.52-.3-.698-.965-.398-1.485.3-.52.966-.699 1.486-.398l3.072 1.773.001-3.54c0-.601.487-1.088 1.088-1.088zM74.917 38.104c0-.752-.617-1.362-1.378-1.362-.761 0-1.378.61-1.378 1.362.007.422.214.816.56 1.064l-.452 3.085h2.518l-.43-3.085c.347-.247.555-.642.56-1.064z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"})))))))}},72:function(e,t,l){"use strict";l.d(t,"a",(function(){return a})),l.d(t,"b",(function(){return n}));var a={WITHDRAW:"WITHDRAW",DEPOSIT:"DEPOSIT",BILL:"BILL",MOBILE_CARD:"MOBILE_CARD",MOBILE_TOPUP:"MOBILE_TOPUP",GAME_CARD:"GAME_CARD",TRANSFER_MONEY:"TRANSFER_MONEY",SOCIAL_PAYMENT:"SOCIAL_PAYMENT",OPEN_EWALLET_PAYMENT:"OPEN_EWALLET_PAYMENT",ADVANCE_SALARY:"ADVANCE_SALARY",CREDIT_STATEMENT:"CREDIT_STATEMENT",ADVANCE_MONEY:"ADVANCE_MONEY",CREDIT_BALANCE:"CREDIT_BALANCE"},n={TRANSFER_MONEY_WALLET:"TRANSFER_MONEY_WALLET",TRANSFER_MONEY_BANK:"TRANSFER_MONEY_BANK",SOCIAL_PAYMENT_SEND_MONEY:"SOCIAL_PAYMENT_SEND_MONEY",SOCIAL_PAYMENT_REQUEST_MONEY:"SOCIAL_PAYMENT_REQUEST_MONEY",SOCIAL_PAYMENT_DONATE_MONEY:"SOCIAL_PAYMENT_DONATE_MONEY",SOCIAL_PAYMENT_MULTI_PAY_REQUEST_MONEY:"SOCIAL_PAYMENT_MULTI_PAY_REQUEST_MONEY"}},78:function(e,t,l){"use strict";l.d(t,"a",(function(){return f}));var a=l(10),n=l(0),i=l.n(n),o=l(55),r=l(11),u=l(60),c=l(9),d=l(17),s=l(70),v="ACTIVE",m="RESEND",f=Object(n.forwardRef)((function(e,t){var l=e.onClosePopup,f=e.onSubmit,b=e.onResend,E=e.customImage,p=e.customDescription,y=e.countDownInitialValue,O=void 0===y?2:y,C=Object(c.c)((function(e){var t,l;return null===e||void 0===e||null===(t=e.sk)||void 0===t||null===(l=t.configColor)||void 0===l?void 0:l.mainColor})),N=Object(n.useState)(m),A=Object(a.a)(N,2),h=A[0],T=A[1],I=Object(n.useState)((new Date).getTime()+6e4*O),g=Object(a.a)(I,2),j=g[0],P=g[1],R=Object(c.c)((function(e){var t;return null===e||void 0===e||null===(t=e.ud)||void 0===t?void 0:t.phone})),_=Object(n.useRef)(null);return Object(n.useImperativeHandle)(t,(function(){return{setCountDownOTP:function(e){P(e)}}})),i.a.createElement("div",{className:"PopupVerifyOTP"},i.a.createElement("div",{className:"PopupVerifyOTP-layout"},i.a.createElement("div",{className:"PopupVerifyOTP-layout-Header"},i.a.createElement("div",{className:"PopupVerifyOTP-layout-Header-left"}),i.a.createElement("p",{className:"titlePopupVerifyOTP font-semibold"},"X\xe1c th\u1ef1c OTP"),i.a.createElement("div",{className:"PopupVerifyOTP-layout-Header-right",onClick:function(){return l()},onKeyPress:function(){return l()}},i.a.createElement("img",{src:r.b.iconClose,alt:""}))),i.a.createElement("div",{className:"PopupVerifyOTP-layout-Body"},E?i.a.createElement("img",{src:E,alt:""}):i.a.createElement(s.a,null),i.a.createElement("div",{className:"TxtDescription"},i.a.createElement("p",{style:{fontSize:15,color:"#000000"}},p||"Vui l\xf2ng nh\u1eadp m\xe3 OTP \u0111\u01b0\u1ee3c g\u1eedi t\u1edbi s\u1ed1 \n ".concat(Object(d.h)(R)))),i.a.createElement(o.a,{ref:_,autoFocus:!0,isNumberInput:!0,length:6,className:"otpPinCodeContainer",inputClassName:"otpInput",onChangeOTP:function(e){6===e.length&&(setTimeout((function(){_.current.blur()}),0),f(e))}}),i.a.createElement("div",{style:{marginBottom:16}},h===m?i.a.createElement(u.a,{renderer:function(e){return i.a.createElement("p",{className:"textResendBank font-medium"},"G\u1eedi l\u1ea1i (",(null===e||void 0===e?void 0:e.days)>0?"".concat(null===e||void 0===e?void 0:e.days,":"):null,(null===e||void 0===e?void 0:e.hours)>0?"".concat(null===e||void 0===e?void 0:e.hours,":"):null,(null===e||void 0===e?void 0:e.minutes)>0?"".concat(null===e||void 0===e?void 0:e.minutes,":"):"00:",(null===e||void 0===e?void 0:e.seconds)>0?"".concat(null===e||void 0===e?void 0:e.seconds):"0",")")},expired:j,onExpired:function(){T(v)}}):i.a.createElement("button",{style:{color:C},type:"button",className:"resendbtnBank font-medium text-decoration-underline",onClick:function(){_.current.clear(),b&&b()}},"G\u1eedi l\u1ea1i OTP")))))}))},884:function(e,t,l){"use strict";l.r(t);var a=l(50),n=l(13),i=l(10),o=l(29),r=l(17),u=l(91),c=l.n(u),d=l(24),s=l.n(d),v=l(100),m=l.n(v),f=l(78),b=l(0),E=l.n(b),p=l(19),y=l(75),O=l(9),C=l(18),N=l(73),A=l(30),h=l(45),T=l(42),I=l(49),g=l(20),j=l(12),P=l(99),R=l(41),_=l(23),M=l(61),k=l(253),S=l(252),D=l(169),B=l(15),L=l(72),w=l(22),F=l(67),x=l(32);t.default=function(){var e,t,l,u,d,v,Y=Object(w.b)(),V=Object(w.a)(),W=Object(O.d)().getState().sk.configColor.bgColor,U=Object(y.useLocation)(),K=Object(y.useHistory)(),z=Object(O.b)(),H=Object(C.bindActionCreators)(N,z),Q=Object(C.bindActionCreators)(A,z),G=Object(C.bindActionCreators)(h,z),J=Object(b.useRef)(null),X=null===U||void 0===U||null===(e=U.state)||void 0===e?void 0:e.value,Z=null===U||void 0===U||null===(t=U.state)||void 0===t?void 0:t.methodSelected,$=null!==(l=null===U||void 0===U||null===(u=U.state)||void 0===u?void 0:u.totalAmount)&&void 0!==l?l:{},q=null!==(d=null===U||void 0===U||null===(v=U.state)||void 0===v?void 0:v.tuitionInfo)&&void 0!==d?d:{},ee=Object(b.useState)(!1),te=Object(i.a)(ee,2),le=te[0],ae=te[1],ne=Object(b.useState)(""),ie=Object(i.a)(ne,2),oe=ie[0],re=ie[1],ue=Object(b.useState)(!1),ce=Object(i.a)(ue,2),de=ce[0],se=ce[1],ve=Object(b.useState)(D.a.getValue()||!1),me=Object(i.a)(ve,2),fe=me[0],be=me[1],Ee=Object(b.useState)(0),pe=Object(i.a)(Ee,2),ye=pe[0],Oe=pe[1],Ce=Object(O.c)((function(e){var t;return null===e||void 0===e||null===(t=e.sk)||void 0===t?void 0:t.clientId})),Ne=U.pathname;Object(b.useEffect)((function(){var e={},t={serviceType:L.a.BILL,subType:null,amount:Object(r.n)($)};if(Z.type===T.a.BANK_CARD)e={bankCard:{cardNumber:null===X||void 0===X?void 0:X.cardNumber}},t=Object(n.a)(Object(n.a)({},t),{},{payment:e});else if(Z.type===T.a.LINKED){var l;e={linked:{linkedId:null===Z||void 0===Z||null===(l=Z.data)||void 0===l?void 0:l.linkedId}},t=Object(n.a)(Object(n.a)({},t),{},{payment:e})}else if(Z.type===T.a.WALLET)e={wallet:{active:!0}},t=Object(n.a)(Object(n.a)({},t),{},{payment:e});else if(Z.type===T.a.CREDIT_BALANCE){var a;e={creditBalance:{supplierLinkedId:null===Z||void 0===Z||null===(a=Z.data)||void 0===a?void 0:a.supplierLinkedId,active:!0,securityCode:""}},t=Object(n.a)(Object(n.a)({},t),{},{payment:e})}Q.getFee({getFeeInput:t},(function(e,t){var l,a,n,i,o,r,u,c;e&&((null===t||void 0===t||null===(l=t.Utility)||void 0===l||null===(a=l.GetFee)||void 0===a?void 0:a.succeeded)?Oe(null!==(n=null===t||void 0===t||null===(i=t.Utility)||void 0===i||null===(o=i.GetFee)||void 0===o||null===(r=o.fee)||void 0===r?void 0:r.fee)&&void 0!==n?n:0):g.b.next({isVisible:!0,message:null===t||void 0===t||null===(u=t.Utility)||void 0===u||null===(c=u.GetFee)||void 0===c?void 0:c.message}))}))}),[]);var Ae=function(e){H.payBill({payInput:e},(function(e,t){var l,a,n,i,o,r,u,c,d,s,v,m,f,b,E;if(e)if(null===t||void 0===t||null===(l=t.Bill)||void 0===l||null===(a=l.Pay)||void 0===a?void 0:a.succeeded)Te({transaction:null===t||void 0===t||null===(m=t.Bill)||void 0===m||null===(f=m.Pay)||void 0===f||null===(b=f.history)||void 0===b||null===(E=b.service)||void 0===E?void 0:E.transaction});else if("REQUIRED_OTP"===(null===t||void 0===t||null===(n=t.Bill)||void 0===n||null===(i=n.Pay)||void 0===i||null===(o=i.payment)||void 0===o?void 0:o.linkedState)){var p,y,O;ae(!0),re(null===t||void 0===t||null===(p=t.Bill)||void 0===p||null===(y=p.Pay)||void 0===y||null===(O=y.payment)||void 0===O?void 0:O.transaction)}else if("REQUIRED_VERIFY"===(null===t||void 0===t||null===(r=t.Bill)||void 0===r||null===(u=r.Pay)||void 0===u||null===(c=u.payment)||void 0===c?void 0:c.bankCardState)||"REQUIRED_VERIFY"===(null===t||void 0===t||null===(d=t.Bill)||void 0===d||null===(s=d.Pay)||void 0===s||null===(v=s.payment)||void 0===v?void 0:v.linkedState)){var C,N,A,h,T,I,P;if(null===Z||void 0===Z||null===(C=Z.data)||void 0===C?void 0:C.issuer)F.c.next({isVisible:!0,type:F.b.PopupNotifyBottomCreditWebview,data:{showClose:!0,url:null===t||void 0===t||null===(N=t.Bill)||void 0===N||null===(A=N.Pay)||void 0===A||null===(h=A.payment)||void 0===h?void 0:h.html,onGotoResult:function(e){var t,l,a,n;"FAILED"===(null===e||void 0===e||null===(t=e.CreditCard)||void 0===t?void 0:t.state)?Te({transaction:null===e||void 0===e||null===(l=e.CreditCard)||void 0===l?void 0:l.transaction,isFailed:!0,message:null===e||void 0===e||null===(a=e.CreditCard)||void 0===a?void 0:a.message}):Te({transaction:null===e||void 0===e||null===(n=e.CreditCard)||void 0===n?void 0:n.transaction})},onManualQuery:function(){var e,l,a;Te({transaction:null===t||void 0===t||null===(e=t.Bill)||void 0===e||null===(l=e.Pay)||void 0===l||null===(a=l.payment)||void 0===a?void 0:a.transaction})}}});else F.c.next({isVisible:!0,type:F.b.PopupNotifyBottomATMWebview,data:{url:null===t||void 0===t||null===(T=t.Bill)||void 0===T||null===(I=T.Pay)||void 0===I||null===(P=I.payment)||void 0===P?void 0:P.html,onManualQuery:function(e){(null===e||void 0===e?void 0:e.success)?Te({transaction:null===e||void 0===e?void 0:e.transaction}):Te({transaction:null===e||void 0===e?void 0:e.transaction,isFailed:!0,message:null===e||void 0===e?void 0:e.messageErrorNapas})},showClose:!0}})}else{var R,_,M;g.b.next({message:null!==(R=null===t||void 0===t||null===(_=t.Bill)||void 0===_||null===(M=_.Pay)||void 0===M?void 0:M.message)&&void 0!==R?R:j.a.messageError3,isVisible:!0})}}))},he=function(e){var t=null!==X&&void 0!==X?X:{},l=t.cardNumber,a=t.cardHolder,i=t.cardDate,o={isRemember:!0,supplierCode:"",payment:{},customerId:null===q||void 0===q?void 0:q.SSCId,billMonths:null===q||void 0===q?void 0:q.bills,type:"TUITION",clientId:Ce,autoPay:fe};if((null===Z||void 0===Z?void 0:Z.type)===T.a.WALLET){var r=Object(n.a)(Object(n.a)({},o),{},{payment:{wallet:{securityCode:e,active:!0}}});Ae(r)}else if((null===Z||void 0===Z?void 0:Z.type)===T.a.CREDIT_BALANCE){var u,c=Object(n.a)(Object(n.a)({},o),{},{payment:{creditBalance:{securityCode:e,active:!0,supplierLinkedId:null===Z||void 0===Z||null===(u=Z.data)||void 0===u?void 0:u.supplierLinkedId}}});Ae(c)}else if((null===Z||void 0===Z?void 0:Z.type)===T.a.BANK_CARD){var d=Object(n.a)(Object(n.a)({},o),{},{payment:{bankCard:{cardNumber:l,cardHolder:a,issuedAt:Object(R.k)(i),redirectUrl:"".concat(window.location.origin,"/result/"),securityCode:e}}});Ae(d)}else if((null===Z||void 0===Z?void 0:Z.type)===T.a.LINKED){var s,v,m,f=Object(n.a)(Object(n.a)({},o),{},{payment:{linked:{linkedId:null===Z||void 0===Z||null===(s=Z.data)||void 0===s?void 0:s.linkedId,envName:"WebApp",redirectUrl:(null===Z||void 0===Z||null===(v=Z.data)||void 0===v?void 0:v.issuer)?"".concat(window.location.origin,"/resultPaymentCredit/"):"".concat(window.location.origin,"/resultPaymentATM/"),securityCode:e}}});if(null===Z||void 0===Z||null===(m=Z.data)||void 0===m?void 0:m.issuer){var b,E={linkedId:null===Z||void 0===Z||null===(b=Z.data)||void 0===b?void 0:b.linkedId};G.authCreditCard({authCreditCardInput:E},(function(t,l){var a,i,r,u,c,d,s,v,m;t&&((null===l||void 0===l||null===(a=l.CreditCardLink)||void 0===a||null===(i=a.AuthCreditCard)||void 0===i?void 0:i.succeeded)?(null===l||void 0===l||null===(r=l.CreditCardLink)||void 0===r||null===(u=r.AuthCreditCard)||void 0===u?void 0:u.isAuth)?F.c.next({isVisible:!0,type:F.b.PopupNotifyBottomCreditWebviewHidden,data:{url:null===l||void 0===l||null===(c=l.CreditCardLink)||void 0===c||null===(d=c.AuthCreditCard)||void 0===d?void 0:d.html,onSubmitDone:function(){var t,a,i,r=Object(n.a)(Object(n.a)({},o),{},{payment:{linked:{linkedId:null===Z||void 0===Z||null===(t=Z.data)||void 0===t?void 0:t.linkedId,envName:"WebApp",redirectUrl:"".concat(window.location.origin,"/resultPaymentCredit/"),securityCode:e,referenceId:null===l||void 0===l||null===(a=l.CreditCardLink)||void 0===a||null===(i=a.AuthCreditCard)||void 0===i?void 0:i.referenceId}}});Ae(r)},onSubmitFail:function(){g.b.next({message:j.a.messageError2,isVisible:!0})}}}):Ae(f):g.b.next({message:null!==(s=null===l||void 0===l||null===(v=l.CreditCardLink)||void 0===v||null===(m=v.AuthCreditCard)||void 0===m?void 0:m.message)&&void 0!==s?s:j.a.messageError2,isVisible:!0}))}))}else Ae(f)}},Te=function(e){var t=e.transaction,l=e.isFailed,a=e.message;K.push("/ResultScreenKeyValue",{type:x.c.BILL,transaction:t,isFailed:l,message:a})},Ie=function(){var e,t,l,n,i=null!==X&&void 0!==X?X:{},o=i.cardNumber,u=i.cardHolder,c=i.cardDate,d=[];Z.type===T.a.BANK_CARD?d=d.concat([{label:j.a.Bank,value:null!==(t=null===(l=Object(P.a)(o.substring(0,6)))||void 0===l?void 0:l.shortName)&&void 0!==t?t:""},{label:j.a.ATMNumber,value:null!==(n=Object(R.i)(o,"-"))&&void 0!==n?n:""},{label:j.a.CardHolderName,value:null!==u&&void 0!==u?u:""},{label:j.a.TopupConfirmDate,value:null!==c&&void 0!==c?c:""},{label:j.a.Fee,value:null!==ye&&void 0!==ye?ye:0}]):d=Z.type===T.a.LINKED?d.concat([{label:j.a.AccountNumber,value:"".concat(Z.title," - ").concat(null===Z||void 0===Z?void 0:Z.label.slice(-4))},{label:j.a.Fee,value:null!==ye&&void 0!==ye?ye:0}]):d.concat([{label:j.a.Fee,value:null!==ye&&void 0!==ye?ye:0}]);var s={title:j.a.ConfirmPay,fee:[{label:j.a.Method,value:Object(I.a)(null===Z||void 0===Z?void 0:Z.type)}].concat(Object(a.a)(d),[{label:j.a.PayAmount,value:Object(r.n)(null!==(e=$+ye)&&void 0!==e?e:0)}])};return s.information=[{label:j.a.Service,value:j.a.TuitionBill},{label:j.a.School,value:null===q||void 0===q?void 0:q.schoolName},{label:j.a.Student,value:null===q||void 0===q?void 0:q.studentName},{label:j.a.Class,value:null===q||void 0===q?void 0:q.className},{label:j.a.TuitionTotal,value:"".concat(Object(r.v)($)," \u0111")}],m()(s.fee,(function(e){return e.label===j.a.Fee&&0===e.value})),m()(s.information,(function(e){return e.label===j.a.BillPeriod&&""===e.value})),s};return E.a.createElement("div",{className:"mobile-layout-confirm",style:{height:Object(B.a)().height}},E.a.createElement("div",{className:"header",id:"header",style:{paddingTop:Y,background:W}},E.a.createElement("div",{className:"headerInner row"},E.a.createElement("div",{className:"headerLeft col-2 nopadding"},E.a.createElement(_.a,null)),E.a.createElement("div",{className:"headerCenter col nopadding"},E.a.createElement("p",{className:"headerTitle font-semibold"},j.a.PayTuition)),E.a.createElement("div",{className:"headerRight col-2 nopadding"}))),E.a.createElement("div",{className:"confirmContentContainer"},E.a.createElement("div",{className:"confirmContent"},E.a.createElement("p",{className:"contentTitle font-medium"},j.a.Information),E.a.createElement("div",{className:"informationBox"},c()(Ie().information,(function(e,t){return E.a.createElement("div",{key:null===e||void 0===e?void 0:e.label},E.a.createElement("div",{className:"informationContent"},E.a.createElement("p",{className:"informationLabel"},null===e||void 0===e?void 0:e.label),E.a.createElement("p",{className:"informationValue font-semibold"},null===e||void 0===e?void 0:e.value)),e.label===s()(Ie().information).label?null:E.a.createElement(o.a,null))}))),E.a.createElement("div",{style:{borderRadius:15,padding:16,backgroundColor:"#ffffff",marginTop:10}},E.a.createElement("div",{className:"switchAutoPay"},E.a.createElement("p",{className:"switchAutoPayText font-regular"},j.a.AutoPay),E.a.createElement("div",{onClick:function(){return be(!fe)},onKeyPress:function(){return be(fe)}},fe?E.a.createElement(k.a,null):E.a.createElement(S.a,null)))),E.a.createElement("div",{className:"feeBox"},c()(Ie().fee,(function(e,t){var l;return E.a.createElement("div",{key:e.label},E.a.createElement("div",{className:"feeContent"},E.a.createElement("p",{className:"feeLabel"},null===e||void 0===e?void 0:e.label),E.a.createElement("p",{className:"feeValue font-semibold",style:{color:(null===e||void 0===e?void 0:e.label)===j.a.PayAmount?"#ff1900":"#1d1d1d"}},function(e){var t,l,a,n,i;return e.label===j.a.Method?null!==(l=null===e||void 0===e?void 0:e.value)&&void 0!==l?l:"--":e.label===j.a.Fee?0!==(null===e||void 0===e?void 0:e.value)?"".concat(Object(r.v)(null!==(a=null===e||void 0===e?void 0:e.value)&&void 0!==a?a:"--")," \u0111"):j.a.Free:e.label===j.a.Discount?"".concat(null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"--","%"):e.label===j.a.PayAmount?"".concat(Object(r.v)(null!==(i=null===e||void 0===e?void 0:e.value)&&void 0!==i?i:"--")," \u0111"):null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"--"}(e))),e.label===s()(null===(l=Ie())||void 0===l?void 0:l.fee).label?null:E.a.createElement(o.a,null))}))))),E.a.createElement("div",{className:"fixBottom",style:{paddingBottom:V}},E.a.createElement(p.a,{className:"btn",label:j.a.Confirm,variant:"active",onClick:function(){Z.type===T.a.BANK_CARD?he():se(!0)}})),de&&E.a.createElement(M.a,{title:j.a.TransactionAuthorization2,closeModal:function(){return se(!1)},onSubmit:function(e){return he(e)},routeActionForgotPass:Ne}),le&&E.a.createElement(f.a,{ref:J,onResend:function(){var e,t={isRemember:!0,supplierCode:"",payment:{linked:{linkedId:null===Z||void 0===Z||null===(e=Z.data)||void 0===e?void 0:e.linkedId,envName:"WebApp",redirectUrl:"".concat(window.location.origin,"/result/")}},transaction:oe,customerId:null===q||void 0===q?void 0:q.SSCId,billMonths:null===q||void 0===q?void 0:q.bills,type:"TUITION",clientId:Ce,autoPay:fe};H.payBill({payInput:t},(function(e,t){var l,a,n,i,o,r,u,c,d;if(e)if(null===t||void 0===t||null===(l=t.Bill)||void 0===l||null===(a=l.Pay)||void 0===a?void 0:a.succeeded)Te({transaction:null===t||void 0===t||null===(r=t.Bill)||void 0===r||null===(u=r.Pay)||void 0===u||null===(c=u.history)||void 0===c||null===(d=c.service)||void 0===d?void 0:d.transaction});else if("REQUIRED_OTP"===(null===t||void 0===t||null===(n=t.Bill)||void 0===n||null===(i=n.Pay)||void 0===i||null===(o=i.payment)||void 0===o?void 0:o.linkedState))J.current.setCountDownOTP((new Date).getTime()+12e4);else{var s,v,m;g.b.next({message:null!==(s=null===t||void 0===t||null===(v=t.Bill)||void 0===v||null===(m=v.Pay)||void 0===m?void 0:m.message)&&void 0!==s?s:j.a.messageError3,isVisible:!0})}}))},onClosePopup:function(){return ae(!1)},onSubmit:function(e){var t,l={isRemember:!0,supplierCode:"",payment:{linked:{linkedId:null===Z||void 0===Z||null===(t=Z.data)||void 0===t?void 0:t.linkedId,otp:e,envName:"WebApp",redirectUrl:"".concat(window.location.origin,"/result/")}},transaction:oe,customerId:null===q||void 0===q?void 0:q.SSCId,billMonths:null===q||void 0===q?void 0:q.bills,type:"TUITION",clientId:Ce,autoPay:fe};H.payBill({payInput:l},(function(e,t){var l,a,n,i,o,r,u,c,d,s,v,m,f,b,E;if(e)if(null===t||void 0===t||null===(l=t.Bill)||void 0===l||null===(a=l.Pay)||void 0===a?void 0:a.succeeded)Te({transaction:null===t||void 0===t||null===(m=t.Bill)||void 0===m||null===(f=m.Pay)||void 0===f||null===(b=f.history)||void 0===b||null===(E=b.service)||void 0===E?void 0:E.transaction});else if("OTP_RETRY_TIMES_OVER"===(null===t||void 0===t||null===(n=t.Bill)||void 0===n||null===(i=n.Pay)||void 0===i||null===(o=i.payment)||void 0===o?void 0:o.linkedState)||"FAILED"===(null===t||void 0===t||null===(r=t.Bill)||void 0===r||null===(u=r.Pay)||void 0===u||null===(c=u.payment)||void 0===c?void 0:c.linkedState)||"INVALID_OTP"===(null===t||void 0===t||null===(d=t.Bill)||void 0===d||null===(s=d.Pay)||void 0===s||null===(v=s.payment)||void 0===v?void 0:v.linkedState)){var p,y,O;Te({transaction:oe,isFailed:!0,message:null===t||void 0===t||null===(p=t.Bill)||void 0===p||null===(y=p.Pay)||void 0===y||null===(O=y.payment)||void 0===O?void 0:O.message})}else{var C,N,A;g.b.next({message:null!==(C=null===t||void 0===t||null===(N=t.Bill)||void 0===N||null===(A=N.Pay)||void 0===A?void 0:A.message)&&void 0!==C?C:j.a.messageError3,isVisible:!0})}}))}}))}}}]);