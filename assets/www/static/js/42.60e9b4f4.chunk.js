(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[42],{15:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var a=t(10),o=t(0);function l(){var n="undefined"!==typeof window;function e(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}}var t=Object(o.useState)(e()),l=Object(a.a)(t,2),i=l[0],r=l[1];return Object(o.useEffect)((function(){if(n){var t=function(){r(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n]),i}},211:function(n,e,t){"use strict";t.r(e),t.d(e,"transferMoney",(function(){return r})),t.d(e,"getRecentTransferPaymeList",(function(){return c})),t.d(e,"getRecentTransferBankAccount",(function(){return u})),t.d(e,"getRecentTransferATM",(function(){return d})),t.d(e,"deleteRecentTransfer",(function(){return s})),t.d(e,"checkAccountPayme",(function(){return v}));var a=t(13),o=t(16),l=t(25),i="query GetTransferRecents($transferMoneyClientId: String, $transferMoneyTransferMoneyType: [TransportMethodEnum], $transferMoneyPaging: PagingInput) {\n  Recent {\n    transferMoney(clientId: $transferMoneyClientId, transferMoneyType: $transferMoneyTransferMoneyType, paging: $transferMoneyPaging) {\n      ... on RecentBank {\n        recentId\n        bankName\n        swiftCode\n        cardNumber\n        cardHolder\n        issuedAt\n        shortName\n      }\n      ... on RecentAccount {\n        recentId\n        accountId\n        fullname\n        details {\n          alias\n          kyc {\n            state\n          }\n        }\n      }\n    }\n  }\n}";function r(n,e){return{api:function(n){return Object(l.b)("mutation Mutation($transferInput: WalletTransferInput) {\n    Wallet {\n      Transfer(input: $transferInput) {\n        succeeded\n        message\n        history {\n          state\n          total\n          amount\n          createdAt\n          publishedAt\n          service {\n            transaction\n          }\n        }\n        \n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.TRANSFER_MONEY,showLoading:!0,payload:n,callback:e}}var c=function(n,e){return{api:function(n){return Object(l.b)("query Query($transferMoneyTransferMoneyType: [TransportMethodEnum], $transferMoneyPaging: PagingInput, $transferMoneyClientId: String) {\n  Recent {\n    transferMoney(transferMoneyType: $transferMoneyTransferMoneyType, paging: $transferMoneyPaging, clientId: $transferMoneyClientId) {\n      ... on RecentAccount {\n        recentId\n        accountId\n        fullname\n        details {\n          alias\n          avatar\n          phone\n          gender\n          kyc {\n            kycId\n            state\n          }\n        }\n      }\n    }\n  }\n}",Object(a.a)({},n))},type:o.L.GET_RECENT_TRANSFER_PAYME_LIST,showLoading:!0,payload:n,callback:e}},u=function(n,e){return{api:function(n){return Object(l.b)(i,Object(a.a)({},n))},type:o.L.GET_RECENT_TRANSFER_BANK_ACCOUNT,showLoading:!0,payload:n,callback:e}},d=function(n,e){return{api:function(n){return Object(l.b)(i,Object(a.a)({},n))},type:o.L.GET_RECENT_TRANSFER_ATM,showLoading:!0,payload:n,callback:e}},s=function(n,e){return{api:function(n){return Object(l.b)("mutation Mutation($input: RemoveRecentInput!) {\n  Recent {\n    RemoveRecent(input: $input) {\n      succeeded\n      message\n    }\n  }\n}\n",Object(a.a)({},n))},type:o.L.DELETE_RECENT_TRANSFER,showLoading:!0,payload:n,callback:e}},v=function(n,e){return{api:function(n){return Object(l.b)("mutation Mutation($checkAccountsInput: CheckAccountInput) {\n  Utility {\n    CheckAccounts(input: $checkAccountsInput) {\n      succeeded\n      message\n      listResult {\n        phone\n        isExistAccount\n        isKYC\n        alias\n        fullname\n        accountId\n      }\n    }\n  }\n}",Object(a.a)({},n))},type:o.L.CHECK_ACCOUNT_PAYME,showLoading:!0,payload:n,callback:e}}},23:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(0),o=t.n(a),l=t(75),i=t(11),r=t(21),c=function(n){var e,t,a=n.actions,c=n.customAction,u=n.iconBackBlack,d=void 0!==u&&u,s=n.backToCloseSDK,v=Object(l.useHistory)(),m=Object(l.useLocation)(),f=s||null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.backToCloseSDK)&&void 0!==e&&e,b=function(){var n;if(f)return localStorage.clear(),void r.b.next({type:"onClose"});c?c():(null===m||void 0===m||null===(n=m.state)||void 0===n?void 0:n.goBack)&&"/linkbank"===(null===m||void 0===m?void 0:m.pathname)?v.goBack():"home"===a?v.replace("/"):"profile"===a?v.push("/profilePersonal"):v.goBack()};return o.a.createElement("div",{className:"d-block px-2 cursor-pointer",onClick:b,onKeyPress:b},o.a.createElement("img",{width:32,height:32,src:d?i.b.iconBackBlack:i.b.iconBackWhite,alt:""}))}},24:function(n,e){n.exports=function(n){var e=null==n?0:n.length;return e?n[e-1]:void 0}},29:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t(13),o=t(0),l=t.n(o),i=function(n){return l.a.createElement("svg",{width:"100%",height:"2",style:Object(a.a)({alignItems:"center"},n.style)},l.a.createElement("line",{x1:"1",x2:"100%",y1:"1",y2:"1",stroke:"#cbcbcb",strokeWidth:"1",strokeLinecap:"round",strokeDasharray:"1, 5"}))}},30:function(n,e,t){"use strict";t.r(e),t.d(e,"paymentWithDraw",(function(){return i})),t.d(e,"paymentDeposit",(function(){return r})),t.d(e,"getSecurityCode",(function(){return c})),t.d(e,"detectDataQRCode",(function(){return u})),t.d(e,"getFee",(function(){return d})),t.d(e,"getTransactionInfo",(function(){return s}));var a=t(13),o=t(16),l=t(25);function i(n,e){return{api:function(n){return Object(l.b)("mutation WalletMutation($withdrawInput: WalletWithdrawInput) {\n    Wallet {\n      Withdraw(input: $withdrawInput) {\n        succeeded\n        message\n        history {\n          accountId\n          service {\n            transaction\n            type\n            method\n            data {\n              ... on WithdrawObject {\n                WithdrawObjectDetails: details {\n                  state\n                  amount\n                  total\n                  fee\n                  description\n                  transaction\n                }\n              }\n            }\n          }\n          state\n          transport{\n            method\n            description\n            details {\n              description\n            }\n          }\n          title\n          amount\n          fee\n          total\n          createdAt\n          publishedAt\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.PAYMENT_WITHDRAW,showLoading:!0,payload:n,callback:e}}function r(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i="mutation DepositMutation($depositInput: WalletDepositInput) {\n      Wallet {\n        Deposit(input: $depositInput) {\n          succeeded\n          message\n          history {\n            accountId\n            payment {\n              method\n              description\n            }\n            service {\n              transaction\n              type\n              state\n            }\n            amount\n            fee\n            total\n            createdAt\n          }\n          payment {\n            ... on PaymentBankCardResponsed {\n              bankCardState: state\n              message\n              html\n            }\n            ... on PaymentLinkedResponsed {\n              linkedId\n              transaction\n              html\n              message\n              linkedState: state\n            }\n            ... on PaymentBankTransferResponsed {\n              bankTranferState: state\n              message\n              bankList {\n                bankName\n                bankCity\n                bankBranch\n                bankAccountName\n                bankAccountNumber\n                content\n                swiftCode\n                qrContent\n                vietQRAccepted\n              }\n              paymentInfo {\n                id\n                amount\n              }\n            }\n            ... on PaymentCreditCardResponsed {\n              creditCardState: state\n              message\n              transaction\n            }\n          }\n        }\n      }\n    }";return{api:function(n){return Object(l.b)(i,Object(a.a)({},n))},type:o.L.PAYMENT_DEPOSIT,showLoading:t,payload:n,callback:e}}function c(n,e){return{api:function(n){return Object(l.b)("mutation Mutation($securityCode: CreateSecurityCodeByPassword!) {\n    Account {\n      SecurityCode {\n        CreateCodeByPassword(input: $securityCode) {\n          securityCode\n          succeeded\n          message\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.GET_SECURITY_CODE,showLoading:!0,payload:n,callback:e}}function u(n,e){return{api:function(n){return Object(l.b)("mutation DetectDataQRCode($input: OpenEWalletPaymentDetectInput!) {\n    OpenEWallet {\n      Payment {\n        Detect (input: $input) {\n          succeeded\n          message\n          type\n          storeId\n          action\n          amount\n          note\n          orderId\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.DETECT_QR_CODE,showLoading:!0,payload:n,callback:e}}function d(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="mutation Mutation($getFeeInput: GetFeeInput) {\n    Utility {\n      GetFee(input: $getFeeInput) {\n        succeeded\n        message\n        state\n        fee {\n          ... on GeneralFee {\n            fee\n          }\n          ... on AdvanceMoneyFee {\n            advanceMoneyFee: fee\n            amount\n            total\n            interestFee\n            availableBalance\n          }\n        }\n        \n      }\n    }\n  }";return{api:function(n){return Object(l.b)(i,Object(a.a)({},n),t)},type:o.L.GET_FEE,showLoading:!0,payload:n,callback:e}}function s(n,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r="mutation Mutation($getTransactionInfoInput: GetTransactionInfoInput!) {\n    OpenEWallet {\n      Payment {\n        GetTransactionInfo(input: $getTransactionInfoInput) {\n          succeeded\n          message\n          transaction\n          storeName\n          reason\n          amount\n          state\n          total\n          fee\n          description\n          updatedAt\n          createdAt\n          payment {\n            state\n            description\n            transaction\n            method\n            details {\n              transaction\n              methodData {\n                ... on PaymentWalletObject {\n                  paymentWalletId\n                }\n                ... on PaymentBankCardObject {\n                  paymentBankCardId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankAccountObject {\n                  paymentBankAccountId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentLinkedObject {\n                  paymentLinkedId\n                  linkedId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentCreditCardObject {\n                  paymentCreditCardId\n                  cardInfo {\n                    cardNumber\n                    expiredAt\n                    cvv\n                  }\n                }\n                ... on PaymeCreditPaymentObject {\n                  paymeCreditId\n                  credit {\n                    used\n                    remain\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentMoMoPGObject {\n                  paymentMoMoId\n                  qrContent\n                }\n                ... on PaymentZaloPayPGObject {\n                  paymentZaloPayId\n                  qrContent\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }";return{api:function(n){return Object(l.b)(r,Object(a.a)({},n),t)},type:o.L.GET_TRANSACTION_INFO,showLoading:i,payload:n,callback:e}}},37:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(13),o=t(0),l=t.n(o),i=t(11);function r(n){var e=n.title,t=n.onClose,o=n.styleTitle,r=n.styleButton,c=n.containerStyle;return l.a.createElement("div",{className:"containerHeader",style:c},l.a.createElement("div",{className:"left"}),l.a.createElement("p",{className:"textTitleHeader font-semibold",style:Object(a.a)({},o)},e),l.a.createElement("div",{className:"containerClose",style:r,onClick:t,onKeyPress:t},l.a.createElement("img",{src:i.b.btnClose,alt:"#"})))}},48:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(13),o=t(10),l=t(0),i=t.n(l),r=Object(l.forwardRef)((function(n,e){var t=n.placeholder,r=n.autoComplete,c=n.haveTitle,u=n.titleRight,d=n.title,s=n.autoFocus,v=n.isFilledCell,m=n.styleInput,f=Object(l.useState)(""),b=Object(o.a)(f,2),p=b[0],y=b[1],g=Object(l.useRef)(null);Object(l.useImperativeHandle)(e,(function(){return{password:function(){return p},clear:function(){y("")},blur:function(){document.getElementById("input").blur()},focus:function(){document.getElementById("input").focus()}}})),Object(l.useEffect)((function(){p.length>0&&(6===p.length?(document.getElementById("input").blur(),v(!0)):v(!1))}),[p]);var C=Object(a.a)(Object(a.a)({},{width:"100%"}),m);return i.a.createElement("div",{className:"passwordContainer",style:{alignItems:u?"flex-start":"center"}},c&&i.a.createElement("p",{className:"textPasswordInput",style:{marginLeft:u?16:0}},d),i.a.createElement("form",{onSubmit:function(n){n.preventDefault(),n.stopPropagation()},style:C,autoComplete:"new-password"},i.a.createElement("input",{placeholder:t,autoComplete:null!==r&&void 0!==r?r:"off",autoCorrect:"off",autoFocus:s,id:"input",type:"password",ref:g,className:"otpInputText",pattern:"[0-9]*",inputMode:"numeric",maxLength:"6",value:p,onChange:function(n){var e=n.target.validity.valid?n.target.value:p;y(e)}})))}))},49:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return i}));var a=t(12),o=t(32);function l(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n===o.b.WALLET?e?a.a.PayMeWalletv2:a.a.PayMeWallet:n===o.b.CREDIT_BALANCE?a.a.CreditBalance:n===o.b.BANK_CARD||n===o.b.BANK_CARD_PG?a.a.LocalATM:n===o.b.BANK_ACCOUNT||n===o.b.BANK_QR_CODE?a.a.DeBankAccount:n===o.b.CREDIT_CARD||n===o.b.CREDIT_CARD_PG?a.a.VisaMasterJCBCard:n===o.b.BANK_TRANSFER?a.a.TransferBank:n===o.b.LINKED?a.a.linkedAccount:n===o.b.BANK_QR_CODE_PG?a.a.paymentQRPay:n===o.b.VIET_QR?a.a.vietQRPay:n}function i(n){var e={};return(null===n||void 0===n?void 0:n.color)&&(e.color=n.color),(null===n||void 0===n?void 0:n.fontWeight)&&(e.fontWeight=n.fontWeight),(null===n||void 0===n?void 0:n.fontStyle)&&(e.fontStyle=n.fontStyle),(null===n||void 0===n?void 0:n.fontSize)&&(e.fontSize=n.fontSize),e}},61:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var a=t(10),o=t(0),l=t.n(o),i=t(9),r=t(30),c=t(36),u=t(18),d=t(97),s=t.n(d),v=t(75),m=t(12),f=t(43),b=t(16),p=t(71),y=t(37),g=t(48),C=t(20),h=Object(o.forwardRef)((function(n,e){var t=n.title,d=n.closeModal,h=n.onSubmit,E=n.image,O=n.imageElement,k=n.routeActionForgotPass,N=Object(i.b)(),A=Object(v.useHistory)(),I=Object(u.bindActionCreators)(c,N),T=Object(o.useState)(!1),j=Object(a.a)(T,2),w=j[0],P=j[1],R=Object(o.useRef)(null),M=Object(u.bindActionCreators)(r,N),L=Object(i.c)((function(n){var e;return null===n||void 0===n||null===(e=n.sk)||void 0===e?void 0:e.clientId})),B=Object(i.c)((function(n){var e,t;return null===n||void 0===n||null===(e=n.sk)||void 0===e||null===(t=e.configColor)||void 0===t?void 0:t.mainColor})),S=Object(i.c)((function(n){var e;return null===n||void 0===n||null===(e=n.ud)||void 0===e?void 0:e.phone}));return Object(o.useEffect)((function(){var n;w&&function(n){var e={password:s()(n).toString(),clientId:L};M.getSecurityCode({securityCode:e},(function(n,e){var t,a,o,l,i,r,c,u,s;n?(null===e||void 0===e||null===(t=e.Account)||void 0===t||null===(a=t.SecurityCode)||void 0===a||null===(o=a.CreateCodeByPassword)||void 0===o?void 0:o.succeeded)?(d&&d(),h&&h(null===e||void 0===e||null===(l=e.Account)||void 0===l||null===(i=l.SecurityCode)||void 0===i||null===(r=i.CreateCodeByPassword)||void 0===r?void 0:r.securityCode)):(R.current.clear(),R.current.blur(),C.b.next({message:null===e||void 0===e||null===(c=e.Account)||void 0===c||null===(u=c.SecurityCode)||void 0===u||null===(s=u.CreateCodeByPassword)||void 0===s?void 0:s.message,isVisible:!0})):(R.current.clear(),R.current.blur())}))}(null===R||void 0===R||null===(n=R.current)||void 0===n?void 0:n.password())}),[w]),Object(o.useImperativeHandle)(e,(function(){return{clear:function(){return R.current.clear()},blur:function(){return R.current.blur()}}})),l.a.createElement("div",{className:"popupPasswordContainer"},l.a.createElement("div",{className:"popupPasswordInner"},l.a.createElement(y.a,{styleTitle:{textTransform:"initial"},onClose:d,title:t}),l.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column"}},O||E?l.a.createElement("img",{style:{width:144,height:144},src:E,alt:"#"}):l.a.createElement(p.a,null),l.a.createElement("p",{style:{color:"#000000"},className:"textVerifyPass font-size-15 font-medium"},"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u \u0111\u1ec3 x\xe1c th\u1ef1c")),l.a.createElement(g.a,{isFilledCell:function(n){P(n)},autoFocus:!0,ref:R,haveTitle:!0,placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u"}),l.a.createElement("div",{style:{margin:"16px 0px",display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){var n={phone:S,clientId:L};I.sendOTPForgotPassword({sendOtpInput:n},(function(n,e){var t,a,o,l,i,r,c;(null===e||void 0===e||null===(t=e.Account)||void 0===t||null===(a=t.ForgotPassword)||void 0===a||null===(o=a.SendOTP)||void 0===o?void 0:o.succeeded)?(f.b.dispatch({type:b.w,payload:k}),A.push("/OTPForgotPass")):C.b.next({message:null!==(l=null===e||void 0===e||null===(i=e.Account)||void 0===i||null===(r=i.ForgotPassword)||void 0===r||null===(c=r.SendOTP)||void 0===c?void 0:c.message)&&void 0!==l?l:m.a.messageError2,isVisible:!0})}))},onKeyPress:function(){var n={phone:S,clientId:L};I.sendOTPForgotPassword({sendOtpInput:n},(function(n,e){var t,a,o,l,i,r,c;n&&((null===e||void 0===e||null===(t=e.Account)||void 0===t||null===(a=t.ForgotPassword)||void 0===a||null===(o=a.SendOTP)||void 0===o?void 0:o.succeeded)?(f.b.dispatch({type:b.w,payload:k}),A.push("/OTPForgotPass")):C.b.next({message:null!==(l=null===e||void 0===e||null===(i=e.Account)||void 0===i||null===(r=i.ForgotPassword)||void 0===r||null===(c=r.SendOTP)||void 0===c?void 0:c.message)&&void 0!==l?l:m.a.messageError2,isVisible:!0}))}))}},l.a.createElement("p",{className:"font-light text-decoration-underline",style:{fontSize:12,color:B}},"Qu\xean m\u1eadt kh\u1ea9u"))))}))},71:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t(0),o=t.n(a),l=t(9),i=function(){var n=Object(l.d)().getState().sk.configColor.mainColor;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 120 120"},o.a.createElement("g",{fill:"none",fillRule:"evenodd"},o.a.createElement("g",null,o.a.createElement("g",null,o.a.createElement("g",{transform:"translate(-128.000000, -240.000000) translate(128.000000, 240.000000) translate(0.000000, 9.843750)"},o.a.createElement("path",{fill:"#000",fillOpacity:".2",fillRule:"nonzero",d:"M100.651 1.902C84.008-3.862 68.72 4.617 61.191 12.119c-7.527 7.502-17.3 13.902-31.528 9.83-14.227-4.074-27.88 4.716-29.375 17.64-1.611 13.965 2.734 41.792 33.999 54.616 19.92 8.177 40.768 7.758 56.342 3.988 15.575-3.77 26.844-9.24 28.997-18.666 2.153-9.426-5.546-12.63-8.674-14.313-3.13-1.684-10.634-7.929.882-20.745 13.716-15.252 7.404-36.105-11.183-42.567z",opacity:".15"}),o.a.createElement("rect",{width:"106.412",height:"41.109",x:"6.747",y:"32.367",fill:"#DDD",fillRule:"nonzero",rx:"13.281"}),o.a.createElement("rect",{width:"44.3",height:"44.375",x:"37.795",y:"9.094",fill:"#FFF",fillRule:"nonzero",rx:"19.864"}),o.a.createElement("g",{fill:n,fillRule:"nonzero"},o.a.createElement("path",{d:"M24.39.003c.853.051 1.51.763 1.505 1.609l-.003.088-.457 7.618c-.053.884-.811 1.558-1.694 1.505-.853-.052-1.51-.763-1.505-1.61l.003-.087.456-7.618c.052-.855.762-1.513 1.607-1.508l.088.003zM33.337 7.124c.686-.558 1.694-.454 2.252.233.538.663.46 1.626-.161 2.195l-.072.061-5.452 4.438c-.686.558-1.695.454-2.253-.234-.537-.662-.46-1.625.162-2.194l.071-.061 5.453-4.438zM39.285 16.332c.88-.096 1.67.54 1.765 1.421.092.851-.498 1.619-1.332 1.756l-.087.012-7.272.79c-.88.096-1.67-.54-1.765-1.42-.093-.851.498-1.62 1.332-1.756l.087-.012 7.272-.791zM19.136 18.865l-.829-1.427c-1.864-3.328-5.973-4.654-9.425-3.042-1.77.873-3.1 2.442-3.67 4.333-.571 1.891-.333 3.935.657 5.644l3.826 6.618c.375.651.153 1.483-.496 1.861-.65.376-1.48.154-1.858-.496l-3.695-6.37C1.043 21.56 2.176 15.882 6.28 12.799c2.261-1.612 5.097-2.194 7.81-1.603 2.712.59 5.05 2.3 6.44 4.706l.93 1.599c.187.324.234.71.128 1.07-.105.36-.354.66-.686.83-.638.309-1.406.076-1.766-.535z",transform:"translate(46.284701, 2.416175)"}),o.a.createElement("path",{d:"M28.332 29.389c0 .001 0 .003-.004.005l.675 3.79c.727 4.11-2.01 8.033-6.116 8.771l-12.689 2.266c-4.108.739-8.035-1.998-8.769-6.107 0-.002 0-.003.004-.005l-.675-3.79c-.727-4.11 2.01-8.033 6.116-8.771l12.689-2.266c4.109-.739 8.035 1.998 8.769 6.107zm-13.871-.8c-1.1-.046-2.08.688-2.349 1.757-.268 1.069.249 2.18 1.239 2.662l.193 5.29 4.159-.775-1.665-4.996c.516-.526.747-1.268.62-1.994-.18-1.088-1.098-1.9-2.197-1.944z",transform:"translate(46.284701, 2.416175)"})),o.a.createElement("path",{stroke:"#FFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"9.775",d:"M22.236 61.847L98.134 61.847"}))))))}},877:function(n,e,t){"use strict";t.r(e);var a=t(10),o=t(0),l=t.n(o),i=t(9),r=t(18),c=t(75),u=t(19),d=t(23),s=t(24),v=t.n(s),m=t(91),f=t.n(m),b=t(29),p=t(17),y=t(211),g=t(41),C=t(20),h=t(49),E=t(42),O=t(12),k=t(99),N=t(61),A=t(15),I=t(22),T=t(32),j=t(21);e.default=function(){var n,e,t,s,m=Object(I.b)(),w=Object(I.a)(),P=Object(i.d)().getState().sk,R=P.configColor.bgColor,M=P.clientId,L=Object(c.useLocation)(),B=Object(c.useHistory)(),S=Object(i.b)(),D=Object(r.bindActionCreators)(y,S),_=null===L||void 0===L||null===(n=L.state)||void 0===n?void 0:n.method,F=null===L||void 0===L||null===(e=L.state)||void 0===e?void 0:e.money,W=null!==(t=null===L||void 0===L||null===(s=L.state)||void 0===s?void 0:s.feeTransfer)&&void 0!==t?t:0,x=Object(i.c)((function(n){var e;return null===(e=n.sk)||void 0===e?void 0:e.closeWhenDone})),$=Object(o.useState)(!1),H=Object(a.a)($,2),K=H[0],G=H[1],z=Object(o.useRef)(null),Q=L.pathname;var V=function(n){var e,t,a,o,l;return n.label===O.a.Method?null!==(t=null===n||void 0===n?void 0:n.value)&&void 0!==t?t:"--":n.label===O.a.Fee?0!==(null===n||void 0===n?void 0:n.value)?"".concat(Object(p.v)(null!==(a=null===n||void 0===n?void 0:n.value)&&void 0!==a?a:"--")," \u0111"):O.a.Free:n.label===O.a.Discount?"".concat(null!==(o=null===n||void 0===n?void 0:n.value)&&void 0!==o?o:"--","%"):n.label===O.a.PayAmount?"".concat(Object(p.v)(null!==(l=null===n||void 0===n?void 0:n.value)&&void 0!==l?l:"--")," \u0111"):null!==(e=null===n||void 0===n?void 0:n.value)&&void 0!==e?e:"--"},U=function(){var n,e,t,a,o,l,i,r,c,u=null!==(n=null===L||void 0===L||null===(e=L.state)||void 0===e?void 0:e.cardInfo)&&void 0!==n?n:{},d=u.cardNumber,s=u.cardHolder,v=null!==(t=null===L||void 0===L||null===(a=L.state)||void 0===a?void 0:a.description)&&void 0!==t?t:"",m={title:O.a.ConfirmPay,fee:[{label:O.a.Fee,value:null!==W&&void 0!==W?W:0},{label:O.a.PayAmount,value:Object(g.f)(F)+W}]};(null===_||void 0===_?void 0:_.type)===E.a.BANK_CARD&&(m.information=[{label:O.a.Method,value:Object(h.a)(null===_||void 0===_?void 0:_.type)},{label:O.a.Bank,value:null!==(o=null===(l=Object(k.a)(d.substring(0,6)))||void 0===l?void 0:l.shortName)&&void 0!==o?o:""},{label:O.a.ATMNumber,value:null!==(i=Object(g.i)(d,"-"))&&void 0!==i?i:""},{label:O.a.CardHolderName,value:null!==s&&void 0!==s?s:""},{label:O.a.Note,value:v}]);(null===_||void 0===_?void 0:_.type)===E.a.LINKED&&(m.information=[{label:O.a.Method,value:Object(h.a)(null===_||void 0===_?void 0:_.type)},{label:O.a.AccountNumber,value:"".concat(null===(r=Object(p.d)(null===_||void 0===_||null===(c=_.data)||void 0===c?void 0:c.swiftCode))||void 0===r?void 0:r.shortName," - ").concat(null===_||void 0===_?void 0:_.label.slice(-4))},{label:O.a.Note,value:v}]);if((null===_||void 0===_?void 0:_.type)===E.a.WALLET){var f,b=null===L||void 0===L||null===(f=L.state)||void 0===f?void 0:f.infoAccount;m.information=[{label:"Ph\u01b0\u01a1ng th\u1ee9c",value:Object(h.a)(null===_||void 0===_?void 0:_.type)},{label:O.a.AccountFullName,value:null===b||void 0===b?void 0:b.fullname},{label:O.a.Account,value:"@".concat(null===b||void 0===b?void 0:b.alias)},{label:O.a.Note,value:v}]}if(_.type===E.a.BANK_ACCOUNT){var y,C,N,A=null!==(y=null===L||void 0===L||null===(C=L.state)||void 0===C?void 0:C.bankAccount)&&void 0!==y?y:{},I=A.bankSelected,T=A.accountNumber,j=A.bankHolder;m.information=[{label:O.a.Method,value:Object(h.a)(null===_||void 0===_?void 0:_.type)},{label:O.a.Bank,value:null!==(N=null===I||void 0===I?void 0:I.shortName)&&void 0!==N?N:""},{label:O.a.AccountNumber,value:null!==T&&void 0!==T?T:""},{label:O.a.AccountHolder,value:null!==j&&void 0!==j?j:""},{label:O.a.Note,value:v}]}return m};function Y(n){var e,t,a,o,l=null===L||void 0===L||null===(e=L.state)||void 0===e?void 0:e.infoAccount,i=null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.bankAccount,r=null===L||void 0===L||null===(a=L.state)||void 0===a?void 0:a.description,c={};if((null===_||void 0===_?void 0:_.type)===E.a.WALLET)c={wallet:{accountId:l.accountId}};else if((null===_||void 0===_?void 0:_.type)===E.a.BANK_CARD){var u,d,s,v,m,f;c={bankCard:{cardNumber:null===_||void 0===_||null===(u=_.data)||void 0===u||null===(d=u.cardInfo)||void 0===d?void 0:d.cardNumber,cardHolder:null===_||void 0===_||null===(s=_.data)||void 0===s||null===(v=s.cardInfo)||void 0===v?void 0:v.cardHolder,swiftCode:null===_||void 0===_||null===(m=_.data)||void 0===m||null===(f=m.cardInfo)||void 0===f?void 0:f.swiftCode}}}else if((null===_||void 0===_?void 0:_.type)===E.a.LINKED){var b;c={linked:{linkedId:null===_||void 0===_||null===(b=_.data)||void 0===b?void 0:b.linkedId}}}else if((null===_||void 0===_?void 0:_.type)===E.a.BANK_ACCOUNT){var y;c={bankAccount:{bankAccountNumber:null===i||void 0===i?void 0:i.accountNumber,bankAccountName:null===i||void 0===i?void 0:i.bankHolder,swiftCode:null===i||void 0===i||null===(y=i.bankSelected)||void 0===y?void 0:y.swiftCode}}}var g={payment:{wallet:{active:!0,securityCode:n}},clientId:M,amount:Object(p.g)(null===L||void 0===L||null===(o=L.state)||void 0===o?void 0:o.money),note:r,transport:c};D.transferMoney({transferInput:g},(function(n,e){var t,a,o,l,i,r,c,u,d,s;n&&((null===e||void 0===e||null===(t=e.Wallet)||void 0===t||null===(a=t.Transfer)||void 0===a?void 0:a.succeeded)?function(n){x?j.b.next({type:"onTransfer",data:{transaction:null===n||void 0===n?void 0:n.transaction,status:null===n||void 0===n?void 0:n.status}}):B.push("/ResultScreenKeyValue",{type:T.c.TRANSFER_MONEY,transaction:null===n||void 0===n?void 0:n.transaction})}({transaction:null===e||void 0===e||null===(o=e.Wallet)||void 0===o||null===(l=o.Transfer)||void 0===l||null===(i=l.history)||void 0===i||null===(r=i.service)||void 0===r?void 0:r.transaction,status:null===e||void 0===e||null===(c=e.Wallet)||void 0===c||null===(u=c.Transfer)||void 0===u||null===(d=u.history)||void 0===d?void 0:d.state}):C.b.next({message:null===e||void 0===e||null===(s=e.Wallet)||void 0===s?void 0:s.Transfer.message,isVisible:!0}))}))}return l.a.createElement("div",{className:"mobile-layout-confirm",style:{height:Object(A.a)().height}},l.a.createElement("div",{className:"header",id:"header",style:{paddingTop:m,background:R}},l.a.createElement("div",{className:"headerInner row"},l.a.createElement("div",{className:"headerLeft col-2 nopadding"},l.a.createElement(d.a,null)),l.a.createElement("div",{className:"headerCenter col nopadding"},l.a.createElement("p",{className:"headerTitle font-semibold"},O.a.ConfirmTitleTransfer)),l.a.createElement("div",{className:"headerRight col-2 nopadding"}))),l.a.createElement("div",{className:"confirmContentContainer"},l.a.createElement("div",{className:"confirmContent"},l.a.createElement("p",{className:"contentTitle font-medium"},O.a.WithdrawConfirmation),l.a.createElement("div",{className:"informationBox"},f()(U().information,(function(n,e){return l.a.createElement("div",{key:n.label},l.a.createElement("div",{className:"informationContent"},l.a.createElement("p",{className:"informationLabel"},null===n||void 0===n?void 0:n.label),l.a.createElement("p",{className:"informationValue font-semibold",style:{color:(null===n||void 0===n?void 0:n.label)===O.a.PayAmountConfirm?"#ff1900":"#1d1d1d"}},V(n))),n.label===v()(U().information).label?null:l.a.createElement(b.a,null))}))),l.a.createElement("div",{className:"feeBox"},f()(U().fee,(function(n,e){return l.a.createElement("div",{key:n.label},l.a.createElement("div",{className:"feeContent"},l.a.createElement("p",{className:"feeLabel"},null===n||void 0===n?void 0:n.label),l.a.createElement("p",{className:"feeValue font-semibold",style:{color:(null===n||void 0===n?void 0:n.label)===O.a.PayAmountConfirm?"#ff1900":"#1d1d1d"}},V(n))),n.label===v()(U().fee).label?null:l.a.createElement(b.a,null))}))))),l.a.createElement("div",{className:"fixBottom",style:{paddingBottom:w}},l.a.createElement(u.a,{className:"btn",label:O.a.Confirm,variant:"active",onClick:function(){G(!0)}})),K&&l.a.createElement(N.a,{ref:z,title:O.a.TransactionAuthorization2,closeModal:function(){return G(!1)},onSubmit:function(n){return Y(n)},routeActionForgotPass:Q}))}}}]);