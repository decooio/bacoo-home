(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89,179],{37412:function(t,n,e){"use strict";e.d(n,{_:function(){return l}});var r=e(85893),o=e(26265),i=e(41559),u=e(11163),c=e(67294),a=e(28447);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l=(0,c.createContext)({});n.Z=function(t){var n=t.children,e=(0,c.useState)({loginStatus:a.x.login,loginType:a.e.login,loading:!1,userName:"",uuid:"",user:{username:"\u5c1a\u672a\u767b\u5f55",mobile:"\u6682\u65e0\u4fe1\u606f"},plan:null})[0];(0,c.useEffect)((function(){var t=(0,i.fO)("token")?a.x.login:a.x.notLogin,n=(0,i.fO)("userName")?(0,i.fO)("userName"):"",e=(0,i.fO)("uuid")?(0,i.fO)("uuid"):"";g({type:"UPDATE_UUID",payload:e}),g({type:"UPDATE_LOGIN_STATUS",payload:t}),g({type:"UPDATE_USER_NAME",payload:n}),t!==a.x.login&&-1!==u.default.pathname.indexOf("/panel")&&u.default.replace("/login")}),[]);var o=(0,c.useReducer)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,r=n||{},o=r.type,i=r.payload;switch(o){case"UPDATE_LOGIN_STATUS":return s(s({},t),{},{loginStatus:i});case"UPDATE_LOGIN_TYPE":return s(s({},t),{},{loginType:i});case"UPDATE_LOADING":return s(s({},t),{},{loading:i});case"UPDATE_UUID":return s(s({},t),{},{uuid:i});case"UPDATE_USER_NAME":return s(s({},t),{},{userName:i});case"UPDATE_USER":return s(s({},t),{},{user:i});case"UPDATE_PLAN":return s(s({},t),{},{plan:i});default:return t}}),e),f=o[0],g=o[1];return(0,r.jsx)(l.Provider,{value:{state:f,dispatch:g},children:n})}},28447:function(t,n,e){"use strict";var r,o;e.d(n,{x:function(){return r},e:function(){return o}}),function(t){t[t.notLogin=1]="notLogin",t[t.login=2]="login",t[t.firstEntry=3]="firstEntry"}(r||(r={})),function(t){t[t.login=1]="login",t[t.register=2]="register",t[t.resetPassword=3]="resetPassword"}(o||(o={}))},46819:function(t,n,e){"use strict";var r=e(26265),o=e(85893),i=e(27261),u=(e(67294),e(29163));function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(){var t=(0,i.Z)(["\n        height: 52px;\n        width: 457px;\n    "]);return a=function(){return t},t}function f(){var t=(0,i.Z)(["\n    background: #2CC8C2;\n    display: inline-flex;\n    justify-content:center;\n    align-items: center;\n    height: 36px;\n    width: 100px;\n    font-size: 16px;\n    border-radius: 8px;\n    color: #FFFFFF;\n    cursor: pointer;\n    max-width: 100%;\n    ","\n    &:hover {\n        background-color: #15C1BA;\n    }\n"]);return f=function(){return t},t}var s=u.ZP.button(f(),(function(t){return"large"===t.size&&(0,u.iv)(a())}));n.Z=function(t){return(0,o.jsx)(s,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t))}},89685:function(t,n,e){"use strict";e.d(n,{QI:function(){return o},qJ:function(){return i},P6:function(){return u},C2:function(){return c},S6:function(){return a},wA:function(){return f},bU:function(){return s},yB:function(){return l},b6:function(){return g},Vw:function(){return p},YP:function(){return d},gR:function(){return h},HR:function(){return b},H7:function(){return O},cV:function(){return m},Ch:function(){return y},SJ:function(){return v},Kg:function(){return P},kj:function(){return j},a$:function(){return w},l:function(){return Z},ZM:function(){return S},z2:function(){return E}});var r=e(7417),o="common/user",i=function(t){return(0,r.Z)(o,t)},u="common/login",c=function(t){return(0,r.Z)(u,t)},a="common/verify/svg",f=function(t){return(0,r.Z)("".concat(a,"?mobile=").concat(t),{},{method:"get",hint:!0,loading:!0})},s="common/verify/sms",l=function(t){return(0,r.Z)(s,t,{method:"post",hint:!0,loading:!0})},g=function(){return(0,r.Z)("auth/gateway/list",{},{hint:!1,method:"get",loading:!0})},p=function(t){return(0,r.Z)("".concat("auth/file/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},d=function(){return(0,r.Z)("auth/file/list/size",{},{hint:!1,method:"get",loading:!0})},h=function(t){return(0,r.Z)("psa/pins",t,{method:"post",hint:!1,loading:!1})},b=function(){return(0,r.Z)("auth/key/list",{},{loading:!0,hint:!0,method:"get"})},O=function(){return(0,r.Z)("auth/user/profile",{},{loading:!0,hint:!0,method:"get"})},m=function(t){return(0,r.Z)("auth/password/change",t)},y=function(t){return(0,r.Z)("".concat("auth/tickets/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},v=function(t){return(0,r.Z)("auth/tickets/report",t,{method:"post",hint:!0,loading:!1})},P=function(t){return(0,r.Z)("".concat("auth/tickets/info/").concat(t),{},{method:"get",hint:!0,loading:!1})},j=function(t){return(0,r.Z)("".concat("auth/mobile/change/sms"),{mobile:t},{method:"post",hint:!0,loading:!1})},w=function(t){return(0,r.Z)("".concat("auth/mobile/change"),t,{method:"post",hint:!0,loading:!1})},Z=function(t){return(0,r.Z)("".concat("auth/intention"),t,{method:"post",hint:!0,loading:!1})},S=function(t){return(0,r.Z)("".concat("auth/tickets/feedback/resolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})},E=function(t){return(0,r.Z)("".concat("auth/tickets/feedback/unresolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})}},7417:function(t,n,e){"use strict";var r=e(26265),o=e(41559),i=e(48086),u=e(9669),c=e.n(u),a=e(89685);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l="https://beta-api.baitech-ipfs.net/",g={"Content-Type":"application/json",Accept:"*/*"},p=function(){return s(s({},g),{},{Authorization:(0,o.fO)("token")})};n.Z=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"post",hint:!0,loading:!0},r=arguments.length>3?arguments[3]:void 0;t=l+t;var o=[a.QI,a.P6,a.bU,a.S6].includes(t)?g:p();return new Promise((function(u,a){c().create({baseURL:t,timeout:1e4,withCredentials:!0})({url:t,method:e.method||"post",data:n,withCredentials:!0,headers:s(s({},o),r)}).then((function(t){200!==t.status?(a(t.data),i.ZP.error(t.data.message)):u(t.data)})).catch((function(t){e.hint&&i.ZP.error(t.response.data.message),a(t.response)}))}))}},65022:function(t,n,e){"use strict";e.d(n,{AK:function(){return c},Dx:function(){return a},Pt:function(){return f},qj:function(){return s}});var r=e(27484),o=e.n(r),i=(e(81354),e(96486),e(70178)),u=e.n(i);o().extend(u());function c(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t&&t.length})).join(" ")}function a(){return"/logo_dark.png"}function f(t){try{var n=localStorage.getItem(t);if(null===n)return;return JSON.parse(n)}catch(e){return}}function s(t,n){try{var e=JSON.stringify(n);window.localStorage.setItem(t,e)}catch(r){return}}},41559:function(t,n,e){"use strict";e.d(n,{fO:function(){return r},$0:function(){return o},qN:function(){return i},x:function(){return u},bT:function(){return c}});var r=function(t){return localStorage.getItem(t)},o=function(t,n){return localStorage.setItem(t,n)},i=function(t){var n="";if(!t)return"0kb";var e=(n=t<1024?t.toFixed(2)+"B":t<1048576?(t/1024).toFixed(2)+"KB":t<1073741824?(t/1048576).toFixed(2)+"MB":t<1099511627776?(t/1073741824).toFixed(2)+"GB":(t/1099511627776).toFixed(2)+"TB")+"",r=e.indexOf(".");return"00"==e.substr(r+1,2)?e.substring(0,r)+e.substr(r+3,2):n},u=function(t){return!(0===t.length)},c=function(t){return 0!==t.length&&!!/[a-z]{1}/.test(t)}},42480:function(){},14453:function(){}}]);