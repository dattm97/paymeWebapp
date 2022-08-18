(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[47],{15:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(10),o=t(0);function l(){var e="undefined"!==typeof window;function n(){return{width:e?window.innerWidth:null,height:e?window.innerHeight:null}}var t=Object(o.useState)(n()),l=Object(a.a)(t,2),i=l[0],r=l[1];return Object(o.useEffect)((function(){if(e){var t=function(){r(n())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[e]),i}},23:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),o=t.n(a),l=t(75),i=t(11),r=t(21),c=function(e){var n,t,a=e.actions,c=e.customAction,d=e.iconBackBlack,u=void 0!==d&&d,s=e.backToCloseSDK,v=Object(l.useHistory)(),m=Object(l.useLocation)(),b=s||null!==(n=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.backToCloseSDK)&&void 0!==n&&n,f=function(){var e;if(b)return localStorage.clear(),void r.b.next({type:"onClose"});c?c():(null===m||void 0===m||null===(e=m.state)||void 0===e?void 0:e.goBack)&&"/linkbank"===(null===m||void 0===m?void 0:m.pathname)?v.goBack():"home"===a?v.replace("/"):"profile"===a?v.push("/profilePersonal"):v.goBack()};return o.a.createElement("div",{className:"d-block px-2 cursor-pointer",onClick:f,onKeyPress:f},o.a.createElement("img",{width:32,height:32,src:u?i.b.iconBackBlack:i.b.iconBackWhite,alt:""}))}},24:function(e,n){e.exports=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0}},29:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(13),o=t(0),l=t.n(o),i=function(e){return l.a.createElement("svg",{width:"100%",height:"2",style:Object(a.a)({alignItems:"center"},e.style)},l.a.createElement("line",{x1:"1",x2:"100%",y1:"1",y2:"1",stroke:"#cbcbcb",strokeWidth:"1",strokeLinecap:"round",strokeDasharray:"1, 5"}))}},30:function(e,n,t){"use strict";t.r(n),t.d(n,"paymentWithDraw",(function(){return i})),t.d(n,"paymentDeposit",(function(){return r})),t.d(n,"getSecurityCode",(function(){return c})),t.d(n,"detectDataQRCode",(function(){return d})),t.d(n,"getFee",(function(){return u})),t.d(n,"getTransactionInfo",(function(){return s}));var a=t(13),o=t(16),l=t(25);function i(e,n){return{api:function(e){return Object(l.b)("mutation WalletMutation($withdrawInput: WalletWithdrawInput) {\n    Wallet {\n      Withdraw(input: $withdrawInput) {\n        succeeded\n        message\n        history {\n          accountId\n          service {\n            transaction\n            type\n            method\n            data {\n              ... on WithdrawObject {\n                WithdrawObjectDetails: details {\n                  state\n                  amount\n                  total\n                  fee\n                  description\n                  transaction\n                }\n              }\n            }\n          }\n          state\n          transport{\n            method\n            description\n            details {\n              description\n            }\n          }\n          title\n          amount\n          fee\n          total\n          createdAt\n          publishedAt\n        }\n      }\n    }\n  }",Object(a.a)({},e))},type:o.L.PAYMENT_WITHDRAW,showLoading:!0,payload:e,callback:n}}function r(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i="mutation DepositMutation($depositInput: WalletDepositInput) {\n      Wallet {\n        Deposit(input: $depositInput) {\n          succeeded\n          message\n          history {\n            accountId\n            payment {\n              method\n              description\n            }\n            service {\n              transaction\n              type\n              state\n            }\n            amount\n            fee\n            total\n            createdAt\n          }\n          payment {\n            ... on PaymentBankCardResponsed {\n              bankCardState: state\n              message\n              html\n            }\n            ... on PaymentLinkedResponsed {\n              linkedId\n              transaction\n              html\n              message\n              linkedState: state\n            }\n            ... on PaymentBankTransferResponsed {\n              bankTranferState: state\n              message\n              bankList {\n                bankName\n                bankCity\n                bankBranch\n                bankAccountName\n                bankAccountNumber\n                content\n                swiftCode\n                qrContent\n                vietQRAccepted\n              }\n              paymentInfo {\n                id\n                amount\n              }\n            }\n            ... on PaymentCreditCardResponsed {\n              creditCardState: state\n              message\n              transaction\n            }\n          }\n        }\n      }\n    }";return{api:function(e){return Object(l.b)(i,Object(a.a)({},e))},type:o.L.PAYMENT_DEPOSIT,showLoading:t,payload:e,callback:n}}function c(e,n){return{api:function(e){return Object(l.b)("mutation Mutation($securityCode: CreateSecurityCodeByPassword!) {\n    Account {\n      SecurityCode {\n        CreateCodeByPassword(input: $securityCode) {\n          securityCode\n          succeeded\n          message\n        }\n      }\n    }\n  }",Object(a.a)({},e))},type:o.L.GET_SECURITY_CODE,showLoading:!0,payload:e,callback:n}}function d(e,n){return{api:function(e){return Object(l.b)("mutation DetectDataQRCode($input: OpenEWalletPaymentDetectInput!) {\n    OpenEWallet {\n      Payment {\n        Detect (input: $input) {\n          succeeded\n          message\n          type\n          storeId\n          action\n          amount\n          note\n          orderId\n        }\n      }\n    }\n  }",Object(a.a)({},e))},type:o.L.DETECT_QR_CODE,showLoading:!0,payload:e,callback:n}}function u(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="mutation Mutation($getFeeInput: GetFeeInput) {\n    Utility {\n      GetFee(input: $getFeeInput) {\n        succeeded\n        message\n        state\n        fee {\n          ... on GeneralFee {\n            fee\n          }\n          ... on AdvanceMoneyFee {\n            advanceMoneyFee: fee\n            amount\n            total\n            interestFee\n            availableBalance\n          }\n        }\n        \n      }\n    }\n  }";return{api:function(e){return Object(l.b)(i,Object(a.a)({},e),t)},type:o.L.GET_FEE,showLoading:!0,payload:e,callback:n}}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r="mutation Mutation($getTransactionInfoInput: GetTransactionInfoInput!) {\n    OpenEWallet {\n      Payment {\n        GetTransactionInfo(input: $getTransactionInfoInput) {\n          succeeded\n          message\n          transaction\n          storeName\n          reason\n          amount\n          state\n          total\n          fee\n          description\n          updatedAt\n          createdAt\n          payment {\n            state\n            description\n            transaction\n            method\n            details {\n              transaction\n              methodData {\n                ... on PaymentWalletObject {\n                  paymentWalletId\n                }\n                ... on PaymentBankCardObject {\n                  paymentBankCardId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankAccountObject {\n                  paymentBankAccountId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentLinkedObject {\n                  paymentLinkedId\n                  linkedId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentCreditCardObject {\n                  paymentCreditCardId\n                  cardInfo {\n                    cardNumber\n                    expiredAt\n                    cvv\n                  }\n                }\n                ... on PaymeCreditPaymentObject {\n                  paymeCreditId\n                  credit {\n                    used\n                    remain\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentMoMoPGObject {\n                  paymentMoMoId\n                  qrContent\n                }\n                ... on PaymentZaloPayPGObject {\n                  paymentZaloPayId\n                  qrContent\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }";return{api:function(e){return Object(l.b)(r,Object(a.a)({},e),t)},type:o.L.GET_TRANSACTION_INFO,showLoading:i,payload:e,callback:n}}},37:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(13),o=t(0),l=t.n(o),i=t(11);function r(e){var n=e.title,t=e.onClose,o=e.styleTitle,r=e.styleButton,c=e.containerStyle;return l.a.createElement("div",{className:"containerHeader",style:c},l.a.createElement("div",{className:"left"}),l.a.createElement("p",{className:"textTitleHeader font-semibold",style:Object(a.a)({},o)},n),l.a.createElement("div",{className:"containerClose",style:r,onClick:t,onKeyPress:t},l.a.createElement("img",{src:i.b.btnClose,alt:"#"})))}},48:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(13),o=t(10),l=t(0),i=t.n(l),r=Object(l.forwardRef)((function(e,n){var t=e.placeholder,r=e.autoComplete,c=e.haveTitle,d=e.titleRight,u=e.title,s=e.autoFocus,v=e.isFilledCell,m=e.styleInput,b=Object(l.useState)(""),f=Object(o.a)(b,2),p=f[0],y=f[1],h=Object(l.useRef)(null);Object(l.useImperativeHandle)(n,(function(){return{password:function(){return p},clear:function(){y("")},blur:function(){document.getElementById("input").blur()},focus:function(){document.getElementById("input").focus()}}})),Object(l.useEffect)((function(){p.length>0&&(6===p.length?(document.getElementById("input").blur(),v(!0)):v(!1))}),[p]);var C=Object(a.a)(Object(a.a)({},{width:"100%"}),m);return i.a.createElement("div",{className:"passwordContainer",style:{alignItems:d?"flex-start":"center"}},c&&i.a.createElement("p",{className:"textPasswordInput",style:{marginLeft:d?16:0}},u),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.stopPropagation()},style:C,autoComplete:"new-password"},i.a.createElement("input",{placeholder:t,autoComplete:null!==r&&void 0!==r?r:"off",autoCorrect:"off",autoFocus:s,id:"input",type:"password",ref:h,className:"otpInputText",pattern:"[0-9]*",inputMode:"numeric",maxLength:"6",value:p,onChange:function(e){var n=e.target.validity.valid?e.target.value:p;y(n)}})))}))},49:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return i}));var a=t(12),o=t(32);function l(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e===o.b.WALLET?n?a.a.PayMeWalletv2:a.a.PayMeWallet:e===o.b.CREDIT_BALANCE?a.a.CreditBalance:e===o.b.BANK_CARD||e===o.b.BANK_CARD_PG?a.a.LocalATM:e===o.b.BANK_ACCOUNT||e===o.b.BANK_QR_CODE?a.a.DeBankAccount:e===o.b.CREDIT_CARD||e===o.b.CREDIT_CARD_PG?a.a.VisaMasterJCBCard:e===o.b.BANK_TRANSFER?a.a.TransferBank:e===o.b.LINKED?a.a.linkedAccount:e===o.b.BANK_QR_CODE_PG?a.a.paymentQRPay:e===o.b.VIET_QR?a.a.vietQRPay:e}function i(e){var n={};return(null===e||void 0===e?void 0:e.color)&&(n.color=e.color),(null===e||void 0===e?void 0:e.fontWeight)&&(n.fontWeight=e.fontWeight),(null===e||void 0===e?void 0:e.fontStyle)&&(n.fontStyle=e.fontStyle),(null===e||void 0===e?void 0:e.fontSize)&&(n.fontSize=e.fontSize),n}},61:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t(10),o=t(0),l=t.n(o),i=t(9),r=t(30),c=t(36),d=t(18),u=t(97),s=t.n(u),v=t(75),m=t(12),b=t(43),f=t(16),p=t(71),y=t(37),h=t(48),C=t(20),g=Object(o.forwardRef)((function(e,n){var t=e.title,u=e.closeModal,g=e.onSubmit,E=e.image,O=e.imageElement,k=e.routeActionForgotPass,w=Object(i.b)(),N=Object(v.useHistory)(),I=Object(d.bindActionCreators)(c,w),j=Object(o.useState)(!1),A=Object(a.a)(j,2),P=A[0],T=A[1],B=Object(o.useRef)(null),D=Object(d.bindActionCreators)(r,w),S=Object(i.c)((function(e){var n;return null===e||void 0===e||null===(n=e.sk)||void 0===n?void 0:n.clientId})),W=Object(i.c)((function(e){var n,t;return null===e||void 0===e||null===(n=e.sk)||void 0===n||null===(t=n.configColor)||void 0===t?void 0:t.mainColor})),R=Object(i.c)((function(e){var n;return null===e||void 0===e||null===(n=e.ud)||void 0===n?void 0:n.phone}));return Object(o.useEffect)((function(){var e;P&&function(e){var n={password:s()(e).toString(),clientId:S};D.getSecurityCode({securityCode:n},(function(e,n){var t,a,o,l,i,r,c,d,s;e?(null===n||void 0===n||null===(t=n.Account)||void 0===t||null===(a=t.SecurityCode)||void 0===a||null===(o=a.CreateCodeByPassword)||void 0===o?void 0:o.succeeded)?(u&&u(),g&&g(null===n||void 0===n||null===(l=n.Account)||void 0===l||null===(i=l.SecurityCode)||void 0===i||null===(r=i.CreateCodeByPassword)||void 0===r?void 0:r.securityCode)):(B.current.clear(),B.current.blur(),C.b.next({message:null===n||void 0===n||null===(c=n.Account)||void 0===c||null===(d=c.SecurityCode)||void 0===d||null===(s=d.CreateCodeByPassword)||void 0===s?void 0:s.message,isVisible:!0})):(B.current.clear(),B.current.blur())}))}(null===B||void 0===B||null===(e=B.current)||void 0===e?void 0:e.password())}),[P]),Object(o.useImperativeHandle)(n,(function(){return{clear:function(){return B.current.clear()},blur:function(){return B.current.blur()}}})),l.a.createElement("div",{className:"popupPasswordContainer"},l.a.createElement("div",{className:"popupPasswordInner"},l.a.createElement(y.a,{styleTitle:{textTransform:"initial"},onClose:u,title:t}),l.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"}},O||E?l.a.createElement("img",{style:{width:144,height:144},src:E,alt:"#"}):l.a.createElement(p.a,null),l.a.createElement("p",{style:{color:"#000000"},className:"textVerifyPass font-size-15 font-medium"},"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u \u0111\u1ec3 x\xe1c th\u1ef1c")),l.a.createElement(h.a,{isFilledCell:function(e){T(e)},autoFocus:!0,ref:B,haveTitle:!0,placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u"}),l.a.createElement("div",{style:{margin:"16px 0px",display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){var e={phone:R,clientId:S};I.sendOTPForgotPassword({sendOtpInput:e},(function(e,n){var t,a,o,l,i,r,c;(null===n||void 0===n||null===(t=n.Account)||void 0===t||null===(a=t.ForgotPassword)||void 0===a||null===(o=a.SendOTP)||void 0===o?void 0:o.succeeded)?(b.b.dispatch({type:f.w,payload:k}),N.push("/OTPForgotPass")):C.b.next({message:null!==(l=null===n||void 0===n||null===(i=n.Account)||void 0===i||null===(r=i.ForgotPassword)||void 0===r||null===(c=r.SendOTP)||void 0===c?void 0:c.message)&&void 0!==l?l:m.a.messageError2,isVisible:!0})}))},onKeyPress:function(){var e={phone:R,clientId:S};I.sendOTPForgotPassword({sendOtpInput:e},(function(e,n){var t,a,o,l,i,r,c;e&&((null===n||void 0===n||null===(t=n.Account)||void 0===t||null===(a=t.ForgotPassword)||void 0===a||null===(o=a.SendOTP)||void 0===o?void 0:o.succeeded)?(b.b.dispatch({type:f.w,payload:k}),N.push("/OTPForgotPass")):C.b.next({message:null!==(l=null===n||void 0===n||null===(i=n.Account)||void 0===i||null===(r=i.ForgotPassword)||void 0===r||null===(c=r.SendOTP)||void 0===c?void 0:c.message)&&void 0!==l?l:m.a.messageError2,isVisible:!0}))}))}},l.a.createElement("p",{className:"font-light text-decoration-underline",style:{fontSize:12,color:W}},"Qu\xean m\u1eadt kh\u1ea9u"))))}))},71:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),o=t.n(a),l=t(9),i=function(){var e=Object(l.d)().getState().sk.configColor.mainColor;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 120 120"},o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("g",null,o.a.createElement("g",null,o.a.createElement("g",{transform:"translate(-128.000000, -240.000000) translate(128.000000, 240.000000) translate(0.000000, 9.843750)"},o.a.createElement("path",{fill:"#000",fillOpacity:".2",fillRule:"nonzero",d:"M100.651 1.902C84.008-3.862 68.72 4.617 61.191 12.119c-7.527 7.502-17.3 13.902-31.528 9.83-14.227-4.074-27.88 4.716-29.375 17.64-1.611 13.965 2.734 41.792 33.999 54.616 19.92 8.177 40.768 7.758 56.342 3.988 15.575-3.77 26.844-9.24 28.997-18.666 2.153-9.426-5.546-12.63-8.674-14.313-3.13-1.684-10.634-7.929.882-20.745 13.716-15.252 7.404-36.105-11.183-42.567z",opacity:".15"}),o.a.createElement("rect",{width:"106.412",height:"41.109",x:"6.747",y:"32.367",fill:"#DDD",fillRule:"nonzero",rx:"13.281"}),o.a.createElement("rect",{width:"44.3",height:"44.375",x:"37.795",y:"9.094",fill:"#FFF",fillRule:"nonzero",rx:"19.864"}),o.a.createElement("g",{fill:e,fillRule:"nonzero"},o.a.createElement("path",{d:"M24.39.003c.853.051 1.51.763 1.505 1.609l-.003.088-.457 7.618c-.053.884-.811 1.558-1.694 1.505-.853-.052-1.51-.763-1.505-1.61l.003-.087.456-7.618c.052-.855.762-1.513 1.607-1.508l.088.003zM33.337 7.124c.686-.558 1.694-.454 2.252.233.538.663.46 1.626-.161 2.195l-.072.061-5.452 4.438c-.686.558-1.695.454-2.253-.234-.537-.662-.46-1.625.162-2.194l.071-.061 5.453-4.438zM39.285 16.332c.88-.096 1.67.54 1.765 1.421.092.851-.498 1.619-1.332 1.756l-.087.012-7.272.79c-.88.096-1.67-.54-1.765-1.42-.093-.851.498-1.62 1.332-1.756l.087-.012 7.272-.791zM19.136 18.865l-.829-1.427c-1.864-3.328-5.973-4.654-9.425-3.042-1.77.873-3.1 2.442-3.67 4.333-.571 1.891-.333 3.935.657 5.644l3.826 6.618c.375.651.153 1.483-.496 1.861-.65.376-1.48.154-1.858-.496l-3.695-6.37C1.043 21.56 2.176 15.882 6.28 12.799c2.261-1.612 5.097-2.194 7.81-1.603 2.712.59 5.05 2.3 6.44 4.706l.93 1.599c.187.324.234.71.128 1.07-.105.36-.354.66-.686.83-.638.309-1.406.076-1.766-.535z",transform:"translate(46.284701, 2.416175)"}),o.a.createElement("path",{d:"M28.332 29.389c0 .001 0 .003-.004.005l.675 3.79c.727 4.11-2.01 8.033-6.116 8.771l-12.689 2.266c-4.108.739-8.035-1.998-8.769-6.107 0-.002 0-.003.004-.005l-.675-3.79c-.727-4.11 2.01-8.033 6.116-8.771l12.689-2.266c4.109-.739 8.035 1.998 8.769 6.107zm-13.871-.8c-1.1-.046-2.08.688-2.349 1.757-.268 1.069.249 2.18 1.239 2.662l.193 5.29 4.159-.775-1.665-4.996c.516-.526.747-1.268.62-1.994-.18-1.088-1.098-1.9-2.197-1.944z",transform:"translate(46.284701, 2.416175)"})),o.a.createElement("path",{stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9.775",d:"M22.236 61.847L98.134 61.847"}))))))}},874:function(e,n,t){"use strict";t.r(n);var a=t(13),o=t(10),l=t(0),i=t.n(l),r=t(9),c=t(18),d=t(75),u=t(19),s=t(23),v=t(24),m=t.n(v),b=t(91),f=t.n(b),p=t(29),y=t(17),h=t(30),C=t(20),g=t(61),E=t(49),O=t(12),k=t(42),w=t(41),N=t(99),I=t(15),j=t(22),A=t(32),P=t(21);n.default=function(){var e,n,t,v,b,T,B=Object(r.d)().getState().sk,D=B.configColor.bgColor,S=B.clientId,W=Object(d.useLocation)(),R=Object(d.useHistory)(),F=Object(r.b)(),L=Object(c.bindActionCreators)(h,F),x=null===W||void 0===W||null===(e=W.state)||void 0===e?void 0:e.money,M=null===W||void 0===W||null===(n=W.state)||void 0===n?void 0:n.method,_=null===W||void 0===W||null===(t=W.state)||void 0===t?void 0:t.bankAccount,H=null===W||void 0===W||null===(v=W.state)||void 0===v?void 0:v.cardInfo,z=null===W||void 0===W||null===(b=W.state)||void 0===b?void 0:b.feeWithdraw,K=Object(r.c)((function(e){var n;return null===(n=e.sk)||void 0===n?void 0:n.closeWhenDone})),G=Object(l.useState)(!1),$=Object(o.a)(G,2),V=$[0],Q=$[1],U=Object(l.useRef)(null),q=Object(j.b)(),J=Object(j.a)(),Y=W.pathname,Z=function(e){var n,t,a,o,l;return e.label===O.a.Method?null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:"--":e.label===O.a.Fee?0!==(null===e||void 0===e?void 0:e.value)?"".concat(Object(y.v)(null!==(a=null===e||void 0===e?void 0:e.value)&&void 0!==a?a:"--")," \u0111"):O.a.Free:e.label===O.a.Discount?"".concat(null!==(o=null===e||void 0===e?void 0:e.value)&&void 0!==o?o:"--","%"):e.label===O.a.PayAmount?"".concat(Object(y.v)(null!==(l=null===e||void 0===e?void 0:e.value)&&void 0!==l?l:"--")," \u0111"):null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"--"},X=function(){var e,n,t,a,o,l,i,r=null!==(e=null===W||void 0===W||null===(n=W.state)||void 0===n?void 0:n.cardInfo)&&void 0!==e?e:{},c=r.cardNumber,d=r.cardHolder,u={title:O.a.ConfirmPay,fee:[{label:O.a.Fee,value:null!==z&&void 0!==z?z:0},{label:O.a.PayAmount,value:Object(w.f)(x)+z}]};M.type===k.a.BANK_CARD&&(u.information=[{label:O.a.Method,value:Object(E.a)(null===M||void 0===M?void 0:M.type)},{label:O.a.Bank,value:null!==(t=null===(a=Object(N.a)(c.substring(0,6)))||void 0===a?void 0:a.shortName)&&void 0!==t?t:""},{label:O.a.ATMNumber,value:null!==(o=Object(w.i)(c,"-"))&&void 0!==o?o:""},{label:O.a.CardHolderName,value:null!==d&&void 0!==d?d:""}]);if(M.type===k.a.BANK_ACCOUNT){var s,v,m,b=null!==(s=null===W||void 0===W||null===(v=W.state)||void 0===v?void 0:v.bankAccount)&&void 0!==s?s:{},f=b.bankSelected,p=b.accountNumber,h=b.bankHolder;u.information=[{label:O.a.Method,value:Object(E.a)(null===M||void 0===M?void 0:M.type)},{label:O.a.Bank,value:null!==(m=null===f||void 0===f?void 0:f.shortName)&&void 0!==m?m:""},{label:O.a.AccountNumber,value:null!==p&&void 0!==p?p:""},{label:O.a.AccountHolder,value:null!==h&&void 0!==h?h:""}]}M.type===k.a.LINKED&&(u.information=[{label:O.a.Method,value:Object(E.a)(null===M||void 0===M?void 0:M.type)},{label:O.a.Bank,value:"".concat(null===(l=Object(y.d)(null===M||void 0===M||null===(i=M.data)||void 0===i?void 0:i.swiftCode))||void 0===l?void 0:l.shortName)},{label:O.a.AccountNumber,value:null===M||void 0===M?void 0:M.label}]);return u},ee=function(e){var n,t;switch(e){case"BANK_ACCOUNT":return{bankAccount:{bankAccountNumber:null===_||void 0===_?void 0:_.accountNumber,bankAccountName:null===_||void 0===_?void 0:_.bankHolder,swiftCode:null===_||void 0===_||null===(n=_.bankSelected)||void 0===n?void 0:n.swiftCode}};case"LINKED":return{linked:{linkedId:null===M||void 0===M||null===(t=M.data)||void 0===t?void 0:t.linkedId}};case"BANK_CARD":return{bankCard:{cardNumber:null===H||void 0===H?void 0:H.cardNumber,cardHolder:null===H||void 0===H?void 0:H.cardHolder,swiftCode:null===H||void 0===H?void 0:H.swiftCode}};default:return{}}},ne=function(e){var n={clientId:S,remember:!1,amount:Object(y.g)(x),payment:{wallet:{active:!0,securityCode:e}},transport:Object(a.a)({},ee(null===M||void 0===M?void 0:M.type))};L.paymentWithDraw({withdrawInput:n},(function(e,n){var t,a,o;e?(null===n||void 0===n||null===(t=n.Wallet)||void 0===t?void 0:t.Withdraw.succeeded)?setTimeout((function(){var e,t,a,o,l,i,r;!function(e){K?P.b.next({type:"onWithDraw",data:{transaction:null===e||void 0===e?void 0:e.transaction,status:null===e||void 0===e?void 0:e.status}}):R.push("/ResultScreenKeyValue",{type:A.c.WITHDRAW,transaction:null===e||void 0===e?void 0:e.transaction})}({transaction:null===n||void 0===n||null===(e=n.Wallet)||void 0===e||null===(t=e.Withdraw)||void 0===t||null===(a=t.history)||void 0===a||null===(o=a.service)||void 0===o?void 0:o.transaction,status:null===n||void 0===n||null===(l=n.Wallet)||void 0===l||null===(i=l.Withdraw)||void 0===i||null===(r=i.history)||void 0===r?void 0:r.state})}),300):(Q(!1),C.b.next({message:null===n||void 0===n||null===(a=n.Wallet)||void 0===a||null===(o=a.Withdraw)||void 0===o?void 0:o.message,isVisible:!0})):Q(!1)}))};return i.a.createElement("div",{className:"mobile-layout-confirm",style:{height:Object(I.a)().height}},i.a.createElement("div",{className:"header",id:"header",style:{paddingTop:q,background:D}},i.a.createElement("div",{className:"headerInner row"},i.a.createElement("div",{className:"headerLeft col-2 nopadding"},i.a.createElement(s.a,null)),i.a.createElement("div",{className:"headerCenter col nopadding"},i.a.createElement("p",{className:"headerTitle font-semibold"},O.a.WithdrawConfirmation)),i.a.createElement("div",{className:"headerRight col-2 nopadding"}))),i.a.createElement("div",{className:"confirmContentContainer"},i.a.createElement("div",{className:"confirmContent"},i.a.createElement("p",{className:"contentTitle font-medium"},O.a.ConfirmTitle),i.a.createElement("div",{className:"informationBox"},f()(null===(T=X())||void 0===T?void 0:T.information,(function(e,n){var t;return i.a.createElement("div",{key:"".concat(e.label,"_").concat(n)},i.a.createElement("div",{className:"informationContent"},i.a.createElement("p",{className:"informationLabel"},null===e||void 0===e?void 0:e.label),i.a.createElement("p",{className:"informationValue font-semibold"},Z(e))),e.label===m()(null===(t=X())||void 0===t?void 0:t.information).label?null:i.a.createElement(p.a,null))}))),i.a.createElement("div",{className:"feeBox"},f()(X().fee,(function(e,n){return i.a.createElement("div",{key:e.label},i.a.createElement("div",{className:"feeContent"},i.a.createElement("p",{className:"feeLabel"},null===e||void 0===e?void 0:e.label),i.a.createElement("p",{className:"feeValue font-semibold",style:{color:(null===e||void 0===e?void 0:e.label)===O.a.PayAmountConfirm?"#ff1900":"#1d1d1d"}},Z(e))),e.label===m()(X().fee).label?null:i.a.createElement(p.a,null))}))))),i.a.createElement("div",{className:"fixBottom",style:{paddingBottom:J}},i.a.createElement(u.a,{className:"btn",label:O.a.Confirm,variant:"active",onClick:function(){Q(!0)}})),V&&i.a.createElement(g.a,{ref:U,title:O.a.TransactionAuthorization2,closeModal:function(){return Q(!1)},onSubmit:function(e){return ne(e)},routeActionForgotPass:Y}))}}}]);