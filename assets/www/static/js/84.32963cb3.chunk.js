(this.webpackJsonppaymesdk=this.webpackJsonppaymesdk||[]).push([[84],{113:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function o(e,t,a){if(a||2===arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||t)}var l=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},c={k:1e3,m:1e6,b:1e9},u=function(e){var t=e.value,a=e.groupSeparator,n=void 0===a?",":a,r=e.decimalSeparator,i=void 0===r?".":r,u=e.allowDecimals,d=void 0===u||u,s=e.decimalsLimit,v=void 0===s?2:s,p=e.allowNegativeValue,m=void 0===p||p,f=e.disableAbbreviations,g=void 0!==f&&f,b=e.prefix,y=void 0===b?"":b,S=e.transformRawValue,h=(void 0===S?function(e){return e}:S)(t);if("-"===h)return h;var x=g?[]:["k","m","b"],w=new RegExp("((^|\\D)-\\d)|(-"+l(y)+")").test(h),E=RegExp("(\\d+)-?"+l(y)).exec(t)||[],O=E[0],j=E[1],C=function(e,t){var a=l(t.join("")),n=new RegExp("[^\\d"+a+"]","gi");return e.replace(n,"")}(function(e,t){void 0===t&&(t=",");var a=new RegExp(l(t),"g");return e.replace(a,"")}(y?O?h.replace(O,"").concat(j):h.replace(y,""):h,n),o([n,i],x)),N=C;if(!g){if(x.some((function(e){return e===C.toLowerCase()})))return"";var k=function(e,t){void 0===t&&(t=".");var a=new RegExp("(\\d+("+l(t)+"\\d*)?)([kmb])$","i"),n=e.match(a);if(n){var r=n[1],i=n[3],o=c[i.toLowerCase()];return Number(r.replace(t,"."))*o}}(C,i);k&&(N=String(k))}var A=w&&m?"-":"";if(i&&N.includes(i)){var R=C.split(i),F=R[0],I=R[1],D=v&&I?I.slice(0,v):I;return""+A+F+(d?""+i+D:"")}return""+A+N},d=function(e,t){var a=t.groupSeparator,n=void 0===a?",":a,r=t.decimalSeparator,i=void 0===r?".":r,o=new RegExp("\\d([^"+l(n)+l(i)+"0-9]+)"),c=e.match(o);return c?c[1]:void 0},s=function(e){var t=e.value,a=e.decimalSeparator,n=e.intlConfig,r=e.decimalScale,o=e.prefix,c=void 0===o?"":o,u=e.suffix,s=void 0===u?"":u;if(""===t||void 0===t)return"";if("-"===t)return"-";var m=new RegExp("^\\d?-"+(c?l(c)+"?":"")+"\\d").test(t),f="."!==a?v(t,a,m):t,g=(n?new Intl.NumberFormat(n.locale,n.currency?{style:"currency",currency:n.currency,minimumFractionDigits:r||0,maximumFractionDigits:20}:void 0):new Intl.NumberFormat(void 0,{minimumFractionDigits:r||0,maximumFractionDigits:20})).formatToParts(Number(f)),b=p(g,e),y=d(b,i({},e)),S=t.slice(-1)===a?a:"",h=(f.match(RegExp("\\d+\\.(\\d+)"))||[])[1];return void 0===r&&h&&a&&(b=b.includes(a)?b.replace(RegExp("(\\d+)("+l(a)+")(\\d+)","g"),"$1$2"+h):y&&!s?b.replace(y,""+a+h+y):""+b+a+h),s&&S?""+b+S+s:y&&S?b.replace(y,""+S+y):y&&s?b.replace(y,""+S+s):[b,S,s].join("")},v=function(e,t,a){var n=e;return t&&"."!==t&&(n=n.replace(RegExp(l(t),"g"),"."),a&&"-"===t&&(n="-"+n.slice(1))),n},p=function(e,t){var a=t.prefix,n=t.groupSeparator,r=t.decimalSeparator,i=t.decimalScale,l=t.disableGroupSeparators,c=void 0!==l&&l;return e.reduce((function(e,t,l){var u=t.type,d=t.value;return 0===l&&a?"minusSign"===u?[d,a]:"currency"===u?o(o([],e),[a]):[a,d]:"currency"===u?a?e:o(o([],e),[d]):"group"===u?c?e:o(o([],e),[void 0!==n?n:d]):"decimal"===u?void 0!==i&&0===i?e:o(o([],e),[void 0!==r?r:d]):o(o([],e),"fraction"===u?[void 0!==i?d.slice(0,i):d]:[d])}),[""]).join("")},m={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},f=function(e){return RegExp(/\d/,"gi").test(e)},g=Object(n.forwardRef)((function(e,t){var a=e.allowDecimals,o=void 0===a||a,l=e.allowNegativeValue,c=void 0===l||l,v=e.id,p=e.name,g=e.className,b=e.customInput,y=e.decimalsLimit,S=e.defaultValue,h=e.disabled,x=void 0!==h&&h,w=e.maxLength,E=e.value,O=e.onValueChange,j=e.fixedDecimalLength,C=e.placeholder,N=e.decimalScale,k=e.prefix,A=e.suffix,R=e.intlConfig,F=e.step,I=e.min,D=e.max,V=e.disableGroupSeparators,L=void 0!==V&&V,M=e.disableAbbreviations,B=void 0!==M&&M,$=e.decimalSeparator,K=e.groupSeparator,P=e.onChange,T=e.onFocus,z=e.onBlur,U=e.onKeyDown,G=e.onKeyUp,W=e.transformRawValue,_=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue"]);if($&&f($))throw new Error("decimalSeparator cannot be a number");if(K&&f(K))throw new Error("groupSeparator cannot be a number");var H=Object(n.useMemo)((function(){return function(e){var t=e||{},a=t.locale,n=t.currency;return(a?new Intl.NumberFormat(a,n?{currency:n,style:"currency"}:void 0):new Intl.NumberFormat).formatToParts(1000.1).reduce((function(e,t,a){return"currency"===t.type?i(i({},e),0===a?{currencySymbol:t.value,prefix:t.value}:{currencySymbol:t.value,suffix:t.value}):"group"===t.type?i(i({},e),{groupSeparator:t.value}):"decimal"===t.type?i(i({},e),{decimalSeparator:t.value}):e}),m)}(R)}),[R]),J=$||H.decimalSeparator||"",Y=K||H.groupSeparator||"";if(J&&Y&&J===Y&&!1===L)throw new Error("decimalSeparator cannot be the same as groupSeparator");var Z={decimalSeparator:J,groupSeparator:Y,disableGroupSeparators:L,intlConfig:R,prefix:k||H.prefix,suffix:A},q={decimalSeparator:J,groupSeparator:Y,allowDecimals:o,decimalsLimit:y||j||2,allowNegativeValue:c,disableAbbreviations:B,prefix:k||H.prefix,transformRawValue:W},Q=void 0!==S&&null!==S?s(i(i({},Z),{decimalScale:N,value:String(S)})):void 0!==E&&null!==E?s(i(i({},Z),{decimalScale:N,value:String(E)})):"",X=Object(n.useState)(Q),ee=X[0],te=X[1],ae=Object(n.useState)(!1),ne=ae[0],re=ae[1],ie=Object(n.useState)(0),oe=ie[0],le=ie[1],ce=Object(n.useState)(0),ue=ce[0],de=ce[1],se=Object(n.useState)(null),ve=se[0],pe=se[1],me=t||Object(n.useRef)(null),fe=function(e,t){re(!0);var a=function(e){var t=e.selectionStart,a=e.value,n=e.lastKeyStroke,r=e.stateValue,i=e.groupSeparator,o=t,l=a;if(r&&o){var c=a.split("");return"Backspace"===n&&r[o]===i&&(c.splice(o-1,1),o-=1),"Delete"===n&&r[o]===i&&(c.splice(o,1),o+=1),{modifiedValue:l=c.join(""),cursorPosition:o}}return{modifiedValue:l,cursorPosition:t}}({selectionStart:t,value:e,lastKeyStroke:ve,stateValue:ee,groupSeparator:Y}),n=a.modifiedValue,r=a.cursorPosition,o=u(i({value:n},q));if(!(w&&o.replace(/-/g,"").length>w)){if(""===o||"-"===o||o===J)return O&&O(void 0,p,{float:null,formatted:"",value:""}),void te(o);var l=parseFloat(o.replace(J,".")),c=s(i({value:o},Z));if(void 0!==r&&null!==r){var d=r+(c.length-e.length);d=d<=0?k?k.length:0:d,le(d),de(ue+1)}if(te(c),O)O(o,p,{float:l,formatted:c,value:o})}};Object(n.useEffect)((function(){ne&&"-"!==ee&&me&&"object"===typeof me&&me.current&&me.current.setSelectionRange(oe,oe)}),[ee,oe,me,ne,ue]);var ge=i({type:"text",inputMode:"decimal",id:v,name:p,className:g,onChange:function(e){var t=e.target,a=t.value,n=t.selectionStart;fe(a,n),P&&P(e)},onBlur:function(e){var t=e.target.value,a=u(i({value:t},q));if("-"===a||!a)return te(""),void(z&&z(e));var n=function(e,t,a){if(void 0===t&&(t="."),void 0===a||""===e||void 0===e)return e;if(!e.match(/\d/g))return"";var n=e.split(t),r=n[0],i=n[1];if(0===a)return r;var o=i||"";if(o.length<a)for(;o.length<a;)o+="0";else o=o.slice(0,a);return""+r+t+o}(function(e,t,a){if(a&&e.length>1){if(e.includes(t)){var n=e.split(t),r=n[0];if((i=n[1]).length>a)return""+r+t+i.slice(0,a)}var i,o=e.length>a?new RegExp("(\\d+)(\\d{"+a+"})"):new RegExp("(\\d)(\\d+)"),l=e.match(o);if(l)return""+(r=l[1])+t+(i=l[2])}return e}(a,J,j),J,void 0!==N?N:j),r=parseFloat(n.replace(J,".")),o=s(i(i({},Z),{value:n}));O&&O(n,p,{float:r,formatted:o,value:n}),te(o),z&&z(e)},onFocus:function(e){return T&&T(e),ee?ee.length:0},onKeyDown:function(e){var t=e.key;if(pe(t),F&&("ArrowUp"===t||"ArrowDown"===t)){e.preventDefault(),le(ee.length);var a=parseFloat(void 0!==E&&null!==E?String(E).replace(J,"."):u(i({value:ee},q)))||0,n="ArrowUp"===t?a+F:a-F;if(void 0!==I&&n<I)return;if(void 0!==D&&n>D)return;var r=String(F).includes(".")?Number(String(F).split(".")[1].length):void 0;fe(String(r?n.toFixed(r):n).replace(".",J))}U&&U(e)},onKeyUp:function(e){var t=e.key,a=e.currentTarget.selectionStart;if("ArrowUp"!==t&&"ArrowDown"!==t&&"-"!==ee){var n=d(ee,{groupSeparator:Y,decimalSeparator:J});if(n&&a&&a>ee.length-n.length&&me&&"object"===typeof me&&me.current){var r=ee.length-n.length;me.current.setSelectionRange(r,r)}}G&&G(e)},placeholder:C,disabled:x,value:void 0===E||null===E||"-"===ee||J&&ee===J?ee:s(i(i({},Z),{decimalScale:ne?void 0:N,value:String(E)})),ref:me},_);if(b){var be=b;return r.a.createElement(be,i({},ge))}return r.a.createElement("input",i({},ge))}));g.displayName="CurrencyInput",t.a=g},38:function(e,t,a){var n=a(74),r=0;e.exports=function(e){var t=++r;return n(e)+t}},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(13),r=a(10),i=a(0),o=a.n(i),l=a(27),c=a.n(l),u=a(24),d=a.n(u),s=a(9),v=a(38),p=a.n(v),m=a(11),f=a(113),g=Object(i.forwardRef)((function(e,t){var a=e.id,l=void 0===a?p()():a,u=e.messageError,v=e.onKeyDown,g=e.onChange,b=e.onClick,y=e.placeholder,S=e.maxLength,h=e.type,x=e.pattern,w=e.value,E=e.textTopRight,O=e.title,j=e.autoSelect,C=e.inputMode,N=void 0===C?"text":C,k=e.styles,A=e.textStyles,R=e.backgroundActive,F=void 0===R?"#ffffff":R,I=e.backgroundUnactive,D=void 0===I?"#eff2f7":I,V=e.listImageBottomRight,L=e.editable,M=void 0===L||L,B=e.inputWithCurrency,$=void 0!==B&&B,K=Object(s.d)().getState().sk.configColor.mainColor,P=Object(i.useRef)(null),T=Object(i.useState)(!1),z=Object(r.a)(T,2),U=z[0],G=z[1];Object(i.useImperativeHandle)(t,(function(){return{isFocus:function(){return U}}})),Object(i.useEffect)((function(){e.autoFocus&&P.current&&P.current.focus()}),[]);return o.a.createElement("div",{style:Object(n.a)({border:U?u?"1px solid #ec2a2a":"1px solid ".concat(K):"none",backgroundColor:U?F:D},k),className:"InputMultiFieldContainer"},o.a.createElement("div",{className:"InputMultiFieldErrorText"},u?o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},o.a.createElement("img",{src:m.b.iconWarningNotify,alt:" ",style:{marginRight:8}}),o.a.createElement("p",{className:"TxtError"},u)):O&&o.a.createElement("p",{style:{fontSize:12,color:"#a5aeb8",textAlign:"left",textTransform:"upperCase"}},O),!u&&o.a.createElement("p",{style:{fontSize:12,color:"#647081",textAlign:"right",wordBreak:"break-word"}},E)),o.a.createElement("div",{className:"InputMultiFieldBox"},M&&o.a.createElement(o.a.Fragment,null,$?o.a.createElement(f.a,{allowNegativeValue:!1,id:"input-example",className:"InputMultiField",maxLength:S,placeholder:y,value:w,suffix:" \u0111",groupSeparator:",",decimalSeparator:".",onValueChange:g}):o.a.createElement("input",{id:l,ref:P,value:w,className:"InputMultiField",style:A,type:h,pattern:null!==x&&void 0!==x?x:{number:/^$|^([0-9])$/,tel:/^$|^([0-9])$/,text:/^$|^(.)$/,password:/^$|^(.)$/}[h],maxLength:S,placeholder:y,inputMode:N,onChange:g,onClick:b,onFocus:function(e){j&&e.target.select(),G(!0)},onBlur:function(){G(!1)},onKeyDown:v,autoComplete:"off"}),c()(V)>0&&V.map((function(e){var t;return o.a.isValidElement(null===e||void 0===e?void 0:e.src)&&"function"===typeof(null===e||void 0===e||null===(t=e.src)||void 0===t?void 0:t.type)?o.a.createElement("div",{key:e.id,style:{marginRight:d()(V).id===e.id?0:16,alignItems:"center"},onClick:function(){e.onClick&&e.onClick()},onKeyPress:function(){e.onClick&&e.onClick()}},null===e||void 0===e?void 0:e.src):(null===e||void 0===e?void 0:e.src)?o.a.createElement("div",{key:e.id,style:{width:20,height:"auto",alignItems:"center",marginRight:d()(V).id===e.id?0:16}},o.a.createElement("img",{src:null===e||void 0===e?void 0:e.src,alt:" ",style:{width:20,height:"auto"}})):null}))),!M&&o.a.createElement("div",{style:{wordBreak:"break-all"}},o.a.createElement("p",{className:"font-semibold",style:Object(n.a)(Object(n.a)({},A),{},{fontSize:15,color:"#000000"})},w))))}));g.defaultProps={messageError:"",onKeyDown:function(){},onChange:function(){},placeholder:"Vui l\xf2ng nh\u1eadp",maxLength:30,type:"text",pattern:/^$|^(.)$/,autoSelect:!1,value:"",textTopRight:"",styles:{},textStyles:{},listImageBottomRight:[]}},894:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(0),i=a.n(r),o=a(62),l=a(17),c=a(12),u=a(9),d=a(11),s=a(19),v=a(75),p=a(471),m=a(18),f=a(61),g=a(32),b=a(20),y=a(54);t.default=function(){var e,t=Object(v.useHistory)(),a=Object(v.useLocation)(),S=Object(u.b)(),h=Object(r.useState)(""),x=Object(n.a)(h,2),w=x[0],E=x[1],O=Object(r.useState)(""),j=Object(n.a)(O,2),C=j[0],N=j[1],k=Object(u.c)((function(e){var t;return null===e||void 0===e||null===(t=e.cd)||void 0===t?void 0:t.aizenCreditInfo})),A=Object(m.bindActionCreators)(p,S),R=Object(r.useState)(!1),F=Object(n.a)(R,2),I=F[0],D=F[1],V=a.pathname,L=Object(u.c)((function(e){var t;return null===(t=e.sk)||void 0===t?void 0:t.closeWhenDone})),M=y.a.getSettingsByKey("paymeCredit.advance.limit"),B=Object(u.d)().getState().sk.clientId,$=function(e){var a=e.transaction,n=e.isFailed,r=e.message;e.status;L||t.push("/ResultScreenKeyValue",{type:g.c.ADVANCE_MONEY,transaction:a,isFailed:n,message:r})};return i.a.createElement("div",{className:"mobile-layout-advancePayment"},i.a.createElement("div",{className:"advanceMoneyAizenContainer"},i.a.createElement("div",{className:"lineContent"},i.a.createElement("p",{className:"line_lable font-semibold"},c.a.TitleAdvance),i.a.createElement("p",{className:"line_amount "},"(T\u1ed1i \u0111a \u1ee9ng: ".concat(Object(l.m)(null===k||void 0===k||null===(e=k.creditAdvance)||void 0===e?void 0:e.max)," \u0111)"))),i.a.createElement(o.a,{inputWithCurrency:!0,value:w,type:"tel",inputMode:"numeric",maxLength:12,placeholder:c.a.UsedCredit,messageError:C,onChange:function(e){var t,a,n,r,i=0;(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)?i=null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value:i=e;(N(""),Object(l.g)(i)<M.min&&N("".concat(c.a.NotiMinMoney," ").concat(Object(l.m)(M.min)," \u0111")),Object(l.g)(i)>(null===k||void 0===k||null===(a=k.creditAdvance)||void 0===a?void 0:a.max))?E(Object(l.g)(null===k||void 0===k||null===(r=k.creditAdvance)||void 0===r?void 0:r.max)):Object(l.g)(i)<0?E(0):E(Object(l.g)(i))},styles:{padding:"12px 16px"}}),i.a.createElement("div",{className:"warningAizen"},i.a.createElement("img",{className:"imgLogo",src:d.b.logoAizen,alt:""}),i.a.createElement("p",{className:"txtFee"},c.a.warningAizenFee))),i.a.createElement("div",{className:"fixBottom",style:{padding:"10px 10px"}},i.a.createElement(s.a,{label:c.a.confirm,variant:function(){var e;return Object(l.g)(w)<=M.min||Object(l.g)(w)>(null===k||void 0===k||null===(e=k.creditAdvance)||void 0===e?void 0:e.max)?"DISABLE":"ACTIVE"}(),onClick:function(){return D(!0)},iconInButtonLeft:d.b.iconLock})),I&&i.a.createElement(f.a,{title:c.a.TransactionAuthorization2,closeModal:function(){return D(!1)},onSubmit:function(e){return function(e){var t={clientId:B,amount:Object(l.g)(w),securityCode:e,supplierLinkedId:null===k||void 0===k?void 0:k.supplierLinkedId};A.advanceMoneyAIZEN({input:t},(function(e,t){var a,n,r,i,o,l,c,u;e&&((null===t||void 0===t||null===(a=t.CreditBalance)||void 0===a||null===(n=a.AdvanceMoney)||void 0===n?void 0:n.succeeded)?$({transaction:null===t||void 0===t||null===(r=t.CreditBalance)||void 0===r||null===(i=r.AdvanceMoney)||void 0===i?void 0:i.transaction,status:null===t||void 0===t||null===(o=t.CreditBalance)||void 0===o||null===(l=o.AdvanceMoney)||void 0===l?void 0:l.succeeded}):b.b.next({message:null===t||void 0===t||null===(c=t.CreditBalance)||void 0===c||null===(u=c.AdvanceMoney)||void 0===u?void 0:u.message,isVisible:!0}))}))}(e)},routeActionForgotPass:V}))}}}]);