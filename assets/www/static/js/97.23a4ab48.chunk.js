(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[97],{30:function(n,t,e){"use strict";e.r(t),e.d(t,"paymentWithDraw",(function(){return d})),e.d(t,"paymentDeposit",(function(){return r})),e.d(t,"getSecurityCode",(function(){return c})),e.d(t,"detectDataQRCode",(function(){return l})),e.d(t,"getFee",(function(){return s})),e.d(t,"getTransactionInfo",(function(){return u}));var a=e(13),o=e(16),i=e(25);function d(n,t){return{api:function(n){return Object(i.b)("mutation WalletMutation($withdrawInput: WalletWithdrawInput) {\n    Wallet {\n      Withdraw(input: $withdrawInput) {\n        succeeded\n        message\n        history {\n          accountId\n          service {\n            transaction\n            type\n            method\n            data {\n              ... on WithdrawObject {\n                WithdrawObjectDetails: details {\n                  state\n                  amount\n                  total\n                  fee\n                  description\n                  transaction\n                }\n              }\n            }\n          }\n          state\n          transport{\n            method\n            description\n            details {\n              description\n            }\n          }\n          title\n          amount\n          fee\n          total\n          createdAt\n          publishedAt\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.PAYMENT_WITHDRAW,showLoading:!0,payload:n,callback:t}}function r(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],d="mutation DepositMutation($depositInput: WalletDepositInput) {\n      Wallet {\n        Deposit(input: $depositInput) {\n          succeeded\n          message\n          history {\n            accountId\n            payment {\n              method\n              description\n            }\n            service {\n              transaction\n              type\n              state\n            }\n            amount\n            fee\n            total\n            createdAt\n          }\n          payment {\n            ... on PaymentBankCardResponsed {\n              bankCardState: state\n              message\n              html\n            }\n            ... on PaymentLinkedResponsed {\n              linkedId\n              transaction\n              html\n              message\n              linkedState: state\n            }\n            ... on PaymentBankTransferResponsed {\n              bankTranferState: state\n              message\n              bankList {\n                bankName\n                bankCity\n                bankBranch\n                bankAccountName\n                bankAccountNumber\n                content\n                swiftCode\n                qrContent\n                vietQRAccepted\n              }\n              paymentInfo {\n                id\n                amount\n              }\n            }\n            ... on PaymentCreditCardResponsed {\n              creditCardState: state\n              message\n              transaction\n            }\n          }\n        }\n      }\n    }";return{api:function(n){return Object(i.b)(d,Object(a.a)({},n))},type:o.L.PAYMENT_DEPOSIT,showLoading:e,payload:n,callback:t}}function c(n,t){return{api:function(n){return Object(i.b)("mutation Mutation($securityCode: CreateSecurityCodeByPassword!) {\n    Account {\n      SecurityCode {\n        CreateCodeByPassword(input: $securityCode) {\n          securityCode\n          succeeded\n          message\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.GET_SECURITY_CODE,showLoading:!0,payload:n,callback:t}}function l(n,t){return{api:function(n){return Object(i.b)("mutation DetectDataQRCode($input: OpenEWalletPaymentDetectInput!) {\n    OpenEWallet {\n      Payment {\n        Detect (input: $input) {\n          succeeded\n          message\n          type\n          storeId\n          action\n          amount\n          note\n          orderId\n        }\n      }\n    }\n  }",Object(a.a)({},n))},type:o.L.DETECT_QR_CODE,showLoading:!0,payload:n,callback:t}}function s(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d="mutation Mutation($getFeeInput: GetFeeInput) {\n    Utility {\n      GetFee(input: $getFeeInput) {\n        succeeded\n        message\n        state\n        fee {\n          ... on GeneralFee {\n            fee\n          }\n          ... on AdvanceMoneyFee {\n            advanceMoneyFee: fee\n            amount\n            total\n            interestFee\n            availableBalance\n          }\n        }\n        \n      }\n    }\n  }";return{api:function(n){return Object(i.b)(d,Object(a.a)({},n),e)},type:o.L.GET_FEE,showLoading:!0,payload:n,callback:t}}function u(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r="mutation Mutation($getTransactionInfoInput: GetTransactionInfoInput!) {\n    OpenEWallet {\n      Payment {\n        GetTransactionInfo(input: $getTransactionInfoInput) {\n          succeeded\n          message\n          transaction\n          storeName\n          reason\n          amount\n          state\n          total\n          fee\n          description\n          updatedAt\n          createdAt\n          payment {\n            state\n            description\n            transaction\n            method\n            details {\n              transaction\n              methodData {\n                ... on PaymentWalletObject {\n                  paymentWalletId\n                }\n                ... on PaymentBankCardObject {\n                  paymentBankCardId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankAccountObject {\n                  paymentBankAccountId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentLinkedObject {\n                  paymentLinkedId\n                  linkedId\n                  bankInfo {\n                    swiftCode\n                    cardNumber\n                    cardHolder\n                    bankAccountNumber\n                    bankAccountName\n                    issuedDate\n                  }\n                }\n                ... on PaymentCreditCardObject {\n                  paymentCreditCardId\n                  cardInfo {\n                    cardNumber\n                    expiredAt\n                    cvv\n                  }\n                }\n                ... on PaymeCreditPaymentObject {\n                  paymeCreditId\n                  credit {\n                    used\n                    remain\n                  }\n                }\n                ... on PaymentBankCardPGObject {\n                  paymentBankCardPGId\n                  issuedDate\n                  cardHolder\n                  cardNumber\n                }\n                ... on PaymentMoMoPGObject {\n                  paymentMoMoId\n                  qrContent\n                }\n                ... on PaymentZaloPayPGObject {\n                  paymentZaloPayId\n                  qrContent\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }";return{api:function(n){return Object(i.b)(r,Object(a.a)({},n),e)},type:o.L.GET_TRANSACTION_INFO,showLoading:d,payload:n,callback:t}}},49:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return d}));var a=e(12),o=e(32);function i(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n===o.b.WALLET?t?a.a.PayMeWalletv2:a.a.PayMeWallet:n===o.b.CREDIT_BALANCE?a.a.CreditBalance:n===o.b.BANK_CARD||n===o.b.BANK_CARD_PG?a.a.LocalATM:n===o.b.BANK_ACCOUNT||n===o.b.BANK_QR_CODE?a.a.DeBankAccount:n===o.b.CREDIT_CARD||n===o.b.CREDIT_CARD_PG?a.a.VisaMasterJCBCard:n===o.b.BANK_TRANSFER?a.a.TransferBank:n===o.b.LINKED?a.a.linkedAccount:n===o.b.BANK_QR_CODE_PG?a.a.paymentQRPay:n===o.b.VIET_QR?a.a.vietQRPay:n}function d(n){var t={};return(null===n||void 0===n?void 0:n.color)&&(t.color=n.color),(null===n||void 0===n?void 0:n.fontWeight)&&(t.fontWeight=n.fontWeight),(null===n||void 0===n?void 0:n.fontStyle)&&(t.fontStyle=n.fontStyle),(null===n||void 0===n?void 0:n.fontSize)&&(t.fontSize=n.fontSize),t}},864:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),i=e(9),d=e(75),r=e(26),c=e.n(r),l=e(92),s=e(21),u=e(32),p=e(69),v=e(12),m=e(49),b=e(120),y=e(18),f=e(30),I=e(42),g=e(17);t.default=function(){var n=Object(d.useLocation)(),t=Object(d.useHistory)(),e=Object(i.b)(),r=Object(y.bindActionCreators)(f,e),C=Object(i.c)((function(n){var t;return null===n||void 0===n||null===(t=n.sk)||void 0===t?void 0:t.partner})),k=Object(i.c)((function(n){var t;return null===n||void 0===n||null===(t=n.ow)||void 0===t?void 0:t.dataOpenEWallet})),A=function(n){var e=n.state,a=n.message,o=n.blockInfo,i=n.blockMethod,d=n.total;t.push("/resultOpenEWallet",{type:u.c.OPEN_EWALLET_PAYMENT,data:{total:Object(g.n)(d),status:e,message:a,blockInfo:o,blockMethod:i}})},O=function(n){var t;return[{label:v.a.Receiver,value:null===n||void 0===n?void 0:n.storeName},{label:v.a.OrderIdPayOpenEWallet,value:null===n||void 0===n?void 0:n.orderId},{label:v.a.Content,value:null!==(t=null===n||void 0===n?void 0:n.note)&&void 0!==t?t:v.a.EmptyNote}]},h=function(n){var t=[{label:v.a.TransactionCode,value:null===n||void 0===n?void 0:n.transaction},{label:v.a.CreatedAt,value:null===n||void 0===n?void 0:n.createdAt},{label:v.a.Method,value:Object(m.a)(I.a.LINKED)},{label:v.a.AccountNumber,value:null===n||void 0===n?void 0:n.description}];return(null===n||void 0===n?void 0:n.transaction)||Object(b.remove)(t,(function(n){return n.label===v.a.TransactionCode})),t};return Object(a.useEffect)((function(){if(null===n||void 0===n?void 0:n.search){var t=new URLSearchParams(n.search);if("WEB"===c()(null===C||void 0===C?void 0:C.type))localStorage.setItem("paymentOpenEWallet",!0),localStorage.setItem("transactionPaymentOpenEWallet",t.get("trans_id")),localStorage.setItem("successPaymentOpenEWallet","true"===t.get("success")),localStorage.setItem("messageErrorNapasPaymentOpenEWallet",decodeURIComponent(t.get("message")));else{var e=t.get("trans_id"),a="true"===t.get("success"),o=t.get("amount"),i=decodeURIComponent(t.get("message"));if(console.log("====transaction_ID",e),console.log("====success",a),console.log("====dataOpenEWallet",k),a){var d={transaction:e};r.getTransactionInfo({getTransactionInfoInput:d},(function(n,t){if(n){var a,d,r,c,l,u,m,b=null!==(a=null===t||void 0===t||null===(d=t.OpenEWallet)||void 0===d||null===(r=d.Payment)||void 0===r?void 0:r.GetTransactionInfo)&&void 0!==a?a:{};if(s.b.next({type:p.c.PAY,message:"Th\xe0nh c\xf4ng",data:{transaction:null===b||void 0===b?void 0:b.transaction,state:null===b||void 0===b?void 0:b.state}}),null===b||void 0===b?void 0:b.succeeded)A({state:null===b||void 0===b?void 0:b.state,blockInfo:O({storeName:null===b||void 0===b?void 0:b.storeName,orderId:null===b||void 0===b||null===(c=b.payment)||void 0===c?void 0:c.transaction,note:null===b||void 0===b?void 0:b.description}),blockMethod:h({transaction:null===b||void 0===b?void 0:b.transaction,createdAt:null===b||void 0===b?void 0:b.createdAt,description:null===b||void 0===b||null===(l=b.payment)||void 0===l?void 0:l.description}),total:null===b||void 0===b?void 0:b.total});else A({state:"FAILED",message:null===b||void 0===b?void 0:b.message,blockInfo:O({storeName:null===b||void 0===b?void 0:b.storeName,orderId:null===b||void 0===b||null===(u=b.payment)||void 0===u?void 0:u.transaction,note:null===b||void 0===b?void 0:b.description}),total:null===b||void 0===b?void 0:b.total,blockMethod:h({transaction:null===b||void 0===b?void 0:b.transaction,createdAt:null===b||void 0===b?void 0:b.createdAt,description:null===b||void 0===b||null===(m=b.payment)||void 0===m?void 0:m.description})})}else s.b.next({type:p.c.PAY,error:{code:p.b.SYSTEM,message:null!==i&&void 0!==i?i:v.a.messageError2}}),A({state:"FAILED",message:i,blockInfo:O(),blockMethod:h({transaction:e}),total:o})}))}else A({state:"FAILED",message:i,blockInfo:O(),blockMethod:h({transaction:e})})}}window.close()}),[]),o.a.createElement(l.a,{bgColorOption:"rgba(0,0,0,0)",showLoading:!0,text:"Giao d\u1ecbch \u0111ang \u0111\u01b0\u1ee3c x\u1eed l\xfd..."})}}}]);