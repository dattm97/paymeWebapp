(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[83],{55:function(e,t,n){"use strict";var a=n(0),l=n.n(a);function c(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}var o=["focus","autoFocus"],i=Object(a.forwardRef)((function(e,t){var n=e.focus,i=e.autoFocus,u=c(e,o),r=Object(a.useRef)(null),s=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(!!n);return Object(a.useImperativeHandle)(t,(function(){return{blur:function(){r.current&&r.current.blur()}}}),[t]),Object(a.useLayoutEffect)((function(){r.current&&(n&&i&&r.current.focus(),n&&i&&n!==s&&(r.current.focus(),r.current.select()))}),[i,n,s]),l.a.createElement("input",Object.assign({id:"input",ref:r},u))})),u=Object(a.memo)(i),r=["length","isNumberInput","autoFocus","disabled","onChangeOTP","inputClassName","inputStyle"],s=Object(a.forwardRef)((function(e,t){var n=e.length,o=e.isNumberInput,i=e.autoFocus,s=e.disabled,d=e.onChangeOTP,v=e.inputClassName,f=e.inputStyle,m=c(e,r),p=Object(a.useState)(0),b=p[0],y=p[1],O=Object(a.useState)(Array(n).fill("")),E=O[0],h=O[1],k=Object(a.useRef)(null);Object(a.useImperativeHandle)(t,(function(){return{clear:function(){var e=[].concat(E);h(e.fill("")),k.current&&k.current.blur()},blur:function(){k.current&&k.current.blur()}}}),[t]);var g=Object(a.useCallback)((function(e){var t=e.join("");d(t)}),[d]),j=Object(a.useCallback)((function(e){var t=e;return o?!t||/\d/.test(t)?t:"":t}),[o]),C=Object(a.useCallback)((function(e){var t=[].concat(E);t[b]=e[0]||"",h(t),g(t)}),[b,g,E]),T=Object(a.useCallback)((function(e){var t=Math.max(Math.min(n-1,e),0);y(t)}),[n]),I=Object(a.useCallback)((function(){T(b-1)}),[b,T]),A=Object(a.useCallback)((function(){T(b+1)}),[b,T]),P=Object(a.useCallback)((function(e){return function(){T(e)}}),[T]),S=Object(a.useCallback)((function(e){var t=j(e.currentTarget.value);t?(C(t),A()):e.preventDefault()}),[C,A,j]),x=Object(a.useCallback)((function(){y(-1)}),[]),M=Object(a.useCallback)((function(e){switch(e.key||e.keyCode){case"Backspace":case"Delete":case 229:case 8:e.preventDefault(),E[b]?C(""):I();break;case"ArrowLeft":case 37:e.preventDefault(),I();break;case"ArrowRight":case 39:e.preventDefault(),A();break;case" ":case 32:e.preventDefault()}}),[b,C,A,I,E]),D=Object(a.useCallback)((function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain").trim().slice(0,n-b).split("");if(t){var a=0,l=[].concat(E);l.forEach((function(e,n){if(n>=b){var c=j(t.shift()||e);c&&(l[n]=c,a=n)}})),h(l),y(Math.min(a+1,n-1)),g(l)}}),[b,j,n,E]);return l.a.createElement("div",Object.assign({},m),Array(n).fill("").map((function(e,t){return l.a.createElement(u,{ref:k,key:"SingleInput-"+t,focus:b===t,value:E&&E[t],autoFocus:i,onFocus:P(t),onChange:S,onKeyDown:M,onBlur:x,onPaste:D,onWheel:x,inputMode:o?"numeric":"text",type:o?"tel":"text",pattern:o?"[0-9]*":"^[a-zA-Z0-9]+$",autoComplete:"off",autoCorrect:"off",style:f,className:v,disabled:s})})))})),d=Object(a.memo)(s);t.a=d},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(10),l=n(0),c=n.n(l),o=function(e){var t=Object(l.useState)(0),n=Object(a.a)(t,2),o=n[0],i=n[1],u=Object(l.useState)(0),r=Object(a.a)(u,2),s=r[0],d=r[1],v=Object(l.useState)(0),f=Object(a.a)(v,2),m=f[0],p=f[1],b=Object(l.useState)(0),y=Object(a.a)(b,2),O=y[0],E=y[1],h=Object(l.useRef)(null),k=e.expired,g=e.onExpired,j=e.renderer;return Object(l.useEffect)((function(){return function(e){if(""!==e&&0!==e){var t=new Date(e).getTime();h.current=setInterval((function(){var e=(new Date).getTime(),n=t-e;if(n<0||Number.isNaN(n))clearInterval(h.current),g&&g();else{var a=Math.floor(n/864e5),l=Math.floor(n%864e5/36e5),c=Math.floor(n%36e5/6e4),o=Math.floor(n%6e4/1e3);i(a),d(l),p(c),E(o)}}),1e3)}}(k),function(){clearInterval(h.current)}}),[k]),j?j({days:o,hours:s,minutes:m,seconds:O}):c.a.createElement("p",{style:{fontSize:"16px",textAlign:"center"}},o>0?"".concat(o):null,s>0?"".concat(s,":"):null,m>0?"".concat(m,":"):"00:",O>0?"".concat(O):"0")}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),l=n.n(a),c=n(9),o=function(){var e=Object(c.d)().getState().sk.configColor.mainColor;return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 120 120"},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("path",{fill:"#000",fillOpacity:".2",fillRule:"nonzero",d:"M64.362 1.14C42.246 7.61 46.678 23.078 44.203 40.179c-3.08 21.338-16.431 10.398-31.755 21.92-26.499 19.924-7.278 63.877 25.658 57.223 17.475-3.55 21.025-16.43 28.173-30.192 9.218-17.789 24.51-12.937 38.224-24.58 27.809-23.57-8.766-72.634-40.14-63.408",opacity:".15",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#DDD",d:"M66.238 103.643H24.473c-3.79-.009-6.86-3.02-6.874-6.738v-82.97c.013-3.72 3.084-6.73 6.874-6.738h41.765c3.79.009 6.86 3.019 6.874 6.737v82.971c-.014 3.719-3.084 6.729-6.874 6.738",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#E8E8E8",d:"M73.047 16.657H17.6V13.82c0-3.657 2.965-6.622 6.623-6.622h42.194c1.758-.002 3.445.694 4.689 1.937 1.243 1.242 1.942 2.927 1.942 4.685v2.838z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#D1D1D1",d:"M49.2 13.31h-7.997c-.417.035-.818-.167-1.038-.523-.22-.356-.22-.806 0-1.162.22-.356.621-.558 1.038-.523h7.998c.416-.035.818.167 1.037.523.22.356.22.806 0 1.162-.22.356-.62.558-1.037.523M55.338 12.218c0 .442-.267.84-.676 1.01-.409.168-.879.073-1.19-.241-.312-.314-.403-.785-.232-1.192.172-.408.572-.672 1.014-.669.6.005 1.084.492 1.084 1.092",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 29.327c-9.182 0-17.46 5.531-20.972 14.013-3.513 8.482-1.57 18.245 4.924 24.735 6.493 6.491 16.257 8.43 24.739 4.915 8.481-3.515 14.01-11.794 14.006-20.974-.013-12.528-10.169-22.68-22.698-22.689m0 46.897c-13.362 0-24.194-10.831-24.194-24.192S31.957 27.84 45.319 27.84c13.362 0 24.194 10.83 24.194 24.192-.035 13.346-10.847 24.157-24.194 24.192",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 35.327c-9.218.004-16.686 7.478-16.683 16.694.003 9.216 7.476 16.685 16.693 16.684 9.217-.002 16.687-7.473 16.687-16.69-.009-9.216-7.48-16.684-16.698-16.688m0 34.881c-10.048 0-18.194-8.145-18.194-18.192 0-10.048 8.146-18.193 18.194-18.193 10.048 0 18.194 8.145 18.194 18.193-.013 10.042-8.151 18.18-18.194 18.192",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#E9E9E9",d:"M45.32 41.553c-5.78 0-10.465 4.684-10.465 10.463 0 5.778 4.685 10.463 10.464 10.463 5.779 0 10.464-4.685 10.464-10.463-.027-5.768-4.696-10.437-10.464-10.463m0 22.421c-6.604-.004-11.955-5.36-11.952-11.964.003-6.603 5.359-11.954 11.963-11.953 6.604.001 11.957 5.355 11.957 11.959-.01 6.604-5.363 11.954-11.968 11.958",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("path",{fill:"#FFF",d:"M86.859 36.732c.003 5.577-3.355 10.606-8.509 12.74-5.153 2.133-11.084.95-15.024-2.998-3.94-3.948-5.11-9.88-2.966-15.029 2.144-5.148 7.18-8.496 12.758-8.481 7.593.016 13.74 6.175 13.74 13.768",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"}),l.a.createElement("g",{fill:e},l.a.createElement("g",null,l.a.createElement("path",{fillRule:"nonzero",d:"M59.475 42.411c4.56-.002 8.936 1.808 12.161 5.032 3.226 3.224 5.039 7.598 5.039 12.158 0 9.499-7.7 17.199-17.2 17.199H17.192c-4.561 0-8.935-1.813-12.16-5.038-3.224-3.226-5.034-7.6-5.032-12.16 0-9.494 7.697-17.19 17.192-17.19h42.283zM42.122 18.03l-.286-.805c-.625-1.875-2.582-2.933-4.466-2.413-.952.303-1.743.984-2.191 1.888-.449.904-.517 1.954-.189 2.91l1.329 3.742c.073.18.07.384-.01.561-.081.178-.231.313-.415.374-.177.075-.376.072-.551-.007-.175-.08-.31-.23-.371-.414l-1.273-3.573c-.93-2.494.155-5.295 2.509-6.482 1.28-.616 2.757-.655 4.068-.108 1.31.546 2.332 1.628 2.814 2.98l.333.935c.072.184.065.391-.021.57-.087.178-.243.31-.432.365-.18.048-.373.019-.533-.08-.16-.098-.274-.259-.315-.444z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"}),l.a.createElement("path",{fillRule:"nonzero",d:"M38.254 17.911h2.17c2.19 0 3.966 1.776 3.966 3.967v6.764c0 2.19-1.776 3.967-3.967 3.967h-2.17c-2.19 0-3.967-1.776-3.967-3.967v-6.764c0-2.19 1.777-3.967 3.968-3.967z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472) translate(39.338401, 25.260008) rotate(-89.900000) translate(-39.338401, -25.260008)"}),l.a.createElement("path",{d:"M60.81 14.29l-4.796.46c-.603.027-1.07.537-1.043 1.14.027.603.537 1.07 1.14 1.043h.105l4.803-.452c.568-.098.964-.617.909-1.19-.055-.573-.543-1.006-1.119-.994M57.21 6.293c-.185-.224-.453-.365-.743-.39-.29-.027-.578.064-.8.252l-3.542 2.943c-.356.295-.488.78-.33 1.215.158.433.571.721 1.033.718.254 0 .5-.088.695-.25l3.542-2.952c.465-.384.53-1.072.146-1.536M47.758.002c-.29-.018-.575.082-.791.277-.216.194-.345.468-.357.758l-.26 5.086c-.015.29.086.573.28.789.194.215.466.344.756.36h.057c.583.004 1.065-.453 1.091-1.036l.259-5.086c.018-.29-.082-.575-.277-.791-.194-.216-.468-.345-.758-.357",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"})),l.a.createElement("path",{d:"M38.742 42.411h20.733c4.56-.002 8.936 1.808 12.161 5.032 3.226 3.224 5.039 7.598 5.039 12.158 0 9.499-7.7 17.199-17.2 17.199H17.192c-4.561 0-8.935-1.813-12.16-5.038-3.224-3.226-5.034-7.6-5.032-12.16 0-9.494 7.697-17.19 17.192-17.19h10.512",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000) translate(34.200365, 14.237472)"})),l.a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M91.545 67.322c.6 0 1.087.487 1.087 1.087v3.549l3.072-1.772c.52-.3 1.185-.122 1.485.398.28.485.144 1.097-.298 1.42l-.1.065-3.073 1.774 3.074 1.774c.485.28.673.878.452 1.38l-.054.106c-.3.52-.966.698-1.486.398l-3.072-1.774v3.55c0 .6-.487 1.087-1.087 1.087-.601 0-1.088-.487-1.088-1.088v-3.55l-3.078 1.777c-.52.3-1.185.122-1.485-.398-.3-.52-.123-1.185.398-1.486l3.076-1.776-3.076-1.776c-.52-.3-.698-.965-.398-1.485.3-.52.966-.699 1.486-.399l3.077 1.777v-3.55c0-.601.487-1.088 1.088-1.088zM72.448 67.053c.6 0 1.087.487 1.087 1.088v3.548l3.072-1.772c.52-.3 1.185-.122 1.485.398.28.486.144 1.098-.298 1.421l-.1.065-3.073 1.773 3.074 1.775c.485.28.673.878.452 1.38l-.054.105c-.3.52-.966.699-1.486.398l-3.072-1.774v3.55c0 .6-.487 1.088-1.087 1.088-.601 0-1.088-.487-1.088-1.088v-3.55l-3.078 1.777c-.52.3-1.185.122-1.485-.398-.3-.52-.123-1.186.398-1.486l3.076-1.777-3.076-1.775c-.52-.3-.698-.966-.398-1.486.3-.52.965-.698 1.486-.398l3.077 1.776v-3.55c0-.6.487-1.088 1.088-1.088zM53.53 67.322c.601 0 1.088.487 1.088 1.087v3.549l3.079-1.776c.52-.3 1.185-.122 1.485.398.28.485.144 1.097-.298 1.42l-.1.065-3.072 1.773 3.07 1.772c.485.28.673.879.452 1.38l-.054.106c-.3.52-.965.698-1.486.398l-3.077-1.776.001 3.558c0 .601-.487 1.088-1.087 1.088s-1.088-.487-1.088-1.088v-3.55l-3.071 1.773c-.52.3-1.185.122-1.486-.398-.3-.52-.122-1.185.398-1.486l3.077-1.777-3.079-1.778c-.52-.3-.698-.965-.398-1.485.3-.52.966-.699 1.486-.398l3.072 1.773.001-3.54c0-.601.487-1.088 1.088-1.088zM74.917 38.104c0-.752-.617-1.362-1.378-1.362-.761 0-1.378.61-1.378 1.362.007.422.214.816.56 1.064l-.452 3.085h2.518l-.43-3.085c.347-.247.555-.642.56-1.064z",transform:"translate(-127.000000, -224.000000) translate(-0.000000, 0.000000) translate(127.000000, 224.000000) translate(2.812500, 0.000000)"})))))))}},866:function(e,t,n){"use strict";n.r(t);var a=n(13),l=n(10),c=n(0),o=n.n(c),i=n(9),u=n(18),r=n(75),s=n(26),d=n.n(s),v=n(328),f=n(21),m=n(55),p=n(36),b=n(60),y=n(20),O=n(54),E=n(12),h=n(16),k=n(159),g=n(69),j=n(17),C=n(67),T=n(70),I="ACTIVE",A="RESEND";t.default=function(){var e,t,n=Object(r.useLocation)(),s=Object(i.b)(),P=Object(i.d)().getState().sk.configColor.mainColor,S=Object(c.useState)((new Date).getTime()+6e3),x=Object(l.a)(S,2),M=x[0],D=x[1],N=Object(c.useState)(A),w=Object(l.a)(N,2),R=w[0],F=w[1],V=Object(r.useHistory)(),z=Object(u.bindActionCreators)(p,s),B=null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.phone,W=null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.remainTime,H=Object(i.c)((function(e){var t;return null===e||void 0===e||null===(t=e.ud)||void 0===t?void 0:t.handShake})),K=Object(i.c)((function(e){var t;return null===e||void 0===e||null===(t=e.sk)||void 0===t?void 0:t.clientId})),L=Object(i.c)((function(e){var t;return null===e||void 0===e||null===(t=e.ud)||void 0===t?void 0:t.appEnv})),_=Object(i.c)((function(e){var t;return null===(t=e.sk)||void 0===t?void 0:t.partner})),X=Object(c.useRef)(null);Object(c.useEffect)((function(){D((new Date).getTime()+(W?1e3*W:6e4))}),[]);var J=function(e){z.loginByPhone({handShake:H,clientId:K,phone:B,activeCode:e},(function(e,t){var n,l,c,o;if(e)if(null===t||void 0===t||null===(n=t.OpenEWallet)||void 0===n||null===(l=n.LoginByPhone)||void 0===l?void 0:l.succeeded){var i,u,r={type:k.a.RELOGIN,data:{handShake:H,accessToken:null===t||void 0===t||null===(i=t.OpenEWallet)||void 0===i||null===(u=i.LoginByPhone)||void 0===u?void 0:u.accessToken,accountStatus:g.a.NOT_ACTIVATED,phone:B}};z.findAccount({accountPhone:B},(function(e,t){if(e){var n,l,c,o;if(f.b.next({type:"onCommunicate",actions:"onRegisterSuccess",data:{Init:Object(a.a)(Object(a.a)({},O.a.getInit().Init),{},{isAccountActived:!0})}}),"WEB"===d()(null!==(n=null===_||void 0===_?void 0:_.type)&&void 0!==n?n:"")||"EXPO"===d()(null!==(l=null===_||void 0===_?void 0:_.type)&&void 0!==l?l:"")){var i,u,v,m,p,b,k,j,C,T,I,A,P,S,x,M,D,N,w,R,F;if((null===t||void 0===t||null===(i=t.Account)||void 0===i?void 0:i.kyc)&&(null===t||void 0===t||null===(u=t.Account)||void 0===u||null===(v=u.kyc)||void 0===v?void 0:v.kycId)&&"APPROVED"===(null===t||void 0===t||null===(m=t.Account)||void 0===m||null===(p=m.kyc)||void 0===p?void 0:p.state))r.data.accountStatus=g.a.KYC_APPROVED,r.data=Object(a.a)(Object(a.a)({},r.data),{},{kyc:{kycId:null===t||void 0===t||null===(M=t.Account)||void 0===M||null===(D=M.kyc)||void 0===D?void 0:D.kycId,state:null===t||void 0===t||null===(N=t.Account)||void 0===N||null===(w=N.kyc)||void 0===w?void 0:w.state,reason:null===t||void 0===t||null===(R=t.Account)||void 0===R||null===(F=R.kyc)||void 0===F?void 0:F.reason}});else if((null===t||void 0===t||null===(b=t.Account)||void 0===b?void 0:b.kyc)&&(null===t||void 0===t||null===(k=t.Account)||void 0===k||null===(j=k.kyc)||void 0===j?void 0:j.kycId)&&"PENDING"===(null===t||void 0===t||null===(C=t.Account)||void 0===C||null===(T=C.kyc)||void 0===T?void 0:T.state)){var z,B,W,H,K,J;r.data.accountStatus=g.a.KYC_REVIEW,r.data=Object(a.a)(Object(a.a)({},r.data),{},{kyc:{kycId:null===t||void 0===t||null===(z=t.Account)||void 0===z||null===(B=z.kyc)||void 0===B?void 0:B.kycId,state:null===t||void 0===t||null===(W=t.Account)||void 0===W||null===(H=W.kyc)||void 0===H?void 0:H.state,reason:null===t||void 0===t||null===(K=t.Account)||void 0===K||null===(J=K.kyc)||void 0===J?void 0:J.reason}})}else if((null===t||void 0===t||null===(I=t.Account)||void 0===I?void 0:I.kyc)&&(null===t||void 0===t||null===(A=t.Account)||void 0===A||null===(P=A.kyc)||void 0===P?void 0:P.kycId)&&"REJECTED"===(null===t||void 0===t||null===(S=t.Account)||void 0===S||null===(x=S.kyc)||void 0===x?void 0:x.state)){var Y,G,U,Z,$,q;r.data.accountStatus=g.a.KYC_REJECTED,r.data=Object(a.a)(Object(a.a)({},r.data),{},{kyc:{kycId:null===t||void 0===t||null===(Y=t.Account)||void 0===Y||null===(G=Y.kyc)||void 0===G?void 0:G.kycId,state:null===t||void 0===t||null===(U=t.Account)||void 0===U||null===(Z=U.kyc)||void 0===Z?void 0:Z.state,reason:null===t||void 0===t||null===($=t.Account)||void 0===$||null===(q=$.kyc)||void 0===q?void 0:q.reason}})}else r.data.accountStatus=g.a.NOT_KYC;f.b.next(r)}if(null===t||void 0===t||null===(c=t.Account)||void 0===c||null===(o=c.kyc)||void 0===o?void 0:o.state)s({type:h.y,payload:!0}),X.current.blur(),setTimeout((function(){V.push("/")}),300);else{var Q=O.a.getKycMode();!function(e){var t;if(X.current.blur(),"SANDBOX"===L)return y.b.next({message:E.a.messageErrorFunctionProduction,isVisible:!0}),void setTimeout((function(){V.push("/")}),300);setTimeout((function(){V.push("/")}),300),"EXPO"!==d()(null!==(t=null===_||void 0===_?void 0:_.type)&&void 0!==t?t:"")&&f.b.next({type:"onKyc",actions:"onKyc",data:e})}({kycVideo:null===Q||void 0===Q?void 0:Q.kycVideo,kycIdentifyImg:null===Q||void 0===Q?void 0:Q.identifyImg,kycFace:null===Q||void 0===Q?void 0:Q.faceImg})}}else{var ee,te;"WEB"!==d()(null!==(ee=null===_||void 0===_?void 0:_.type)&&void 0!==ee?ee:"")&&"EXPO"!==d()(null!==(te=null===_||void 0===_?void 0:_.type)&&void 0!==te?te:"")||f.b.next(r),X.current.blur(),setTimeout((function(){V.push("/")}),300),y.b.next({message:"Find Account Error",isVisible:!0})}}))}else if("ACCOUNT_NOT_EXIST"===(null===t||void 0===t||null===(c=t.OpenEWallet)||void 0===c||null===(o=c.LoginByPhone)||void 0===o?void 0:o.state))X.current.blur(),setTimeout((function(){var e,n;V.push("/inputpayme",{phone:B,updateToken:null===t||void 0===t||null===(e=t.OpenEWallet)||void 0===e||null===(n=e.LoginByPhone)||void 0===n?void 0:n.updateToken})}),300);else{var v,m,p;X.current.clear(),y.b.next({message:null!==(v=null===t||void 0===t||null===(m=t.OpenEWallet)||void 0===m||null===(p=m.LoginByPhone)||void 0===p?void 0:p.message)&&void 0!==v?v:E.a.messageError2,isVisible:!0})}else X.current.clear()}))};return o.a.createElement("div",{className:"confirmContainer"},o.a.createElement(T.a,null),o.a.createElement("div",{className:"textConfirmContainer"},o.a.createElement("p",{className:"textConfirmOTP"},E.a.otpScreenNote),o.a.createElement("p",{className:"phoneConfirmOTP font-medium"},Object(j.h)(B))),o.a.createElement(m.a,{ref:X,autoFocus:!0,isNumberInput:!0,length:6,className:"otpContainer",inputClassName:"otpInput",onChangeOTP:function(e){6===e.length&&J(e)}}),R===A?o.a.createElement(b.a,{renderer:function(e){return o.a.createElement("p",{className:"textResend font-medium"},E.a.linkedPVCResend,"(".concat(e.minutes&&0!==e.minutes?"".concat(e.minutes,"p "):"").concat(e.seconds,"s)"))},expired:M,onExpired:function(){F(I)}}):o.a.createElement("button",{type:"button",className:"resendbtn font-medium",onClick:function(){X.current.clear(),z.sendOTP({phone:B,clientId:K,handShake:H},(function(e,t){var n,a,l,c,o,i,u,r,s,d,v;e?(D((new Date).getTime()+((null===t||void 0===t||null===(n=t.OpenEWallet)||void 0===n||null===(a=n.SendOTP)||void 0===a?void 0:a.remainTime)?1e3*(null===t||void 0===t||null===(l=t.OpenEWallet)||void 0===l||null===(c=l.SendOTP)||void 0===c?void 0:c.remainTime):6e4)),F(A),(null===t||void 0===t||null===(o=t.OpenEWallet)||void 0===o||null===(i=o.SendOTP)||void 0===i?void 0:i.succeeded)||(X.current.clear(),y.b.next({message:null!==(u=null===t||void 0===t||null===(r=t.OpenEWallet)||void 0===r||null===(s=r.SendOTP)||void 0===s?void 0:s.message)&&void 0!==u?u:"C\xf3 l\u1ed7i t\u1eeb m\xe1y ch\u1ee7 h\u1ec7 th\u1ed1ng",isVisible:!0}))):(X.current.clear(),F(I),y.b.next({message:null!==(d=null===t||void 0===t||null===(v=t[0])||void 0===v?void 0:v.message)&&void 0!==d?d:E.a.messageError3,isVisible:!0}))}))}},E.a.ResendOtp),o.a.createElement(v.PopupboxContainer,null),o.a.createElement("span",{onClick:function(){C.c.next({isVisible:!0,type:C.b.PopupNotifyBottomIframe,data:{showClose:!0,url:"https://inapp.payme.vn/web/dieu-khoan-su-dung",titleHeader:E.a.privacyPayME}})},onKeyDown:function(){C.c.next({isVisible:!0,type:C.b.PopupNotifyBottomIframe,data:{showClose:!0,url:"https://inapp.payme.vn/web/dieu-khoan-su-dung",titleHeader:E.a.privacyPayME}})},className:"font-medium text-decoration-underline",style:{marginTop:"14px",display:"flex",color:P,textDecoration:"underline",justifyContent:"center",alignItems:"center"}},E.a.privacyPayME))}}}]);