(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712,179],{37412:function(t,n,e){"use strict";e.d(n,{_:function(){return l}});var r=e(85893),o=e(26265),i=e(41559),u=e(11163),c=e(67294),a=e(28447);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l=(0,c.createContext)({});n.Z=function(t){var n=t.children,e=(0,c.useState)({loginStatus:a.x.login,loginType:a.e.login,loading:!1,userName:"",uuid:"",user:{username:"\u5c1a\u672a\u767b\u5f55",mobile:"\u6682\u65e0\u4fe1\u606f"},plan:null})[0];(0,c.useEffect)((function(){var t=(0,i.fO)("token")?a.x.login:a.x.notLogin,n=(0,i.fO)("userName")?(0,i.fO)("userName"):"",e=(0,i.fO)("uuid")?(0,i.fO)("uuid"):"";p({type:"UPDATE_UUID",payload:e}),p({type:"UPDATE_LOGIN_STATUS",payload:t}),p({type:"UPDATE_USER_NAME",payload:n}),1!=t||["/","/login","/termofuse","/privacy"].includes(u.default.pathname)||u.default.replace("/")}),[]);var o=(0,c.useReducer)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,r=n||{},o=r.type,i=r.payload;switch(o){case"UPDATE_LOGIN_STATUS":return f(f({},t),{},{loginStatus:i});case"UPDATE_LOGIN_TYPE":return f(f({},t),{},{loginType:i});case"UPDATE_LOADING":return f(f({},t),{},{loading:i});case"UPDATE_UUID":return f(f({},t),{},{uuid:i});case"UPDATE_USER_NAME":return f(f({},t),{},{userName:i});case"UPDATE_USER":return f(f({},t),{},{user:i});case"UPDATE_PLAN":return f(f({},t),{},{plan:i});default:return t}}),e),s=o[0],p=o[1];return(0,r.jsx)(l.Provider,{value:{state:s,dispatch:p},children:n})}},28447:function(t,n,e){"use strict";var r,o;e.d(n,{x:function(){return r},e:function(){return o}}),function(t){t[t.notLogin=1]="notLogin",t[t.login=2]="login",t[t.firstEntry=3]="firstEntry"}(r||(r={})),function(t){t[t.login=1]="login",t[t.register=2]="register",t[t.resetPassword=3]="resetPassword"}(o||(o={}))},46819:function(t,n,e){"use strict";var r=e(26265),o=e(85893),i=e(27261),u=(e(67294),e(29163));function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(){var t=(0,i.Z)(["\n        height: 52px;\n        width: 457px;\n    "]);return a=function(){return t},t}function s(){var t=(0,i.Z)(["\n    background: #2CC8C2;\n    display: inline-flex;\n    justify-content:center;\n    align-items: center;\n    height: 36px;\n    width: 100px;\n    font-size: 16px;\n    border-radius: 8px;\n    color: #FFFFFF;\n    cursor: pointer;\n    max-width: 100%;\n    ","\n    &:hover {\n        background-color: #15C1BA;\n    }\n"]);return s=function(){return t},t}var f=u.ZP.button(s(),(function(t){return"large"===t.size&&(0,u.iv)(a())}));n.Z=function(t){return(0,o.jsx)(f,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t))}},89685:function(t,n,e){"use strict";e.d(n,{QI:function(){return o},qJ:function(){return i},P6:function(){return u},C2:function(){return c},S6:function(){return a},wA:function(){return s},bU:function(){return f},yB:function(){return l},b6:function(){return p},Vw:function(){return d},YP:function(){return g},gR:function(){return h},HR:function(){return b},H7:function(){return O},cV:function(){return m},Ch:function(){return y},SJ:function(){return v},Kg:function(){return P},kj:function(){return j},a$:function(){return w},l:function(){return Z},ZM:function(){return E},z2:function(){return _}});var r=e(7417),o="common/user",i=function(t){return(0,r.Z)(o,t)},u="common/login",c=function(t){return(0,r.Z)(u,t)},a="common/verify/svg",s=function(t){return(0,r.Z)("".concat(a,"?mobile=").concat(t),{},{method:"get",hint:!0,loading:!0})},f="common/verify/sms",l=function(t){return(0,r.Z)(f,t,{method:"post",hint:!0,loading:!0})},p=function(){return(0,r.Z)("auth/gateway/list",{},{hint:!1,method:"get",loading:!0})},d=function(t){return(0,r.Z)("".concat("auth/file/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},g=function(){return(0,r.Z)("auth/file/list/size",{},{hint:!1,method:"get",loading:!0})},h=function(t){return(0,r.Z)("psa/pins",t,{method:"post",hint:!1,loading:!1})},b=function(){return(0,r.Z)("auth/key/list",{},{loading:!0,hint:!0,method:"get"})},O=function(){return(0,r.Z)("auth/user/profile",{},{loading:!0,hint:!0,method:"get"})},m=function(t){return(0,r.Z)("auth/password/change",t)},y=function(t){return(0,r.Z)("".concat("auth/tickets/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},v=function(t){return(0,r.Z)("auth/tickets/report",t,{method:"post",hint:!0,loading:!1})},P=function(t){return(0,r.Z)("".concat("auth/tickets/info/").concat(t),{},{method:"get",hint:!0,loading:!1})},j=function(t){return(0,r.Z)("".concat("auth/mobile/change/sms"),{mobile:t},{method:"post",hint:!0,loading:!1})},w=function(t){return(0,r.Z)("".concat("auth/mobile/change"),t,{method:"post",hint:!0,loading:!1})},Z=function(t){return(0,r.Z)("".concat("auth/intention"),t,{method:"post",hint:!0,loading:!1})},E=function(t){return(0,r.Z)("".concat("auth/tickets/feedback/resolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})},_=function(t){return(0,r.Z)("".concat("auth/tickets/feedback/unresolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})}},7417:function(t,n,e){"use strict";var r=e(26265),o=e(41559),i=e(48086),u=e(9669),c=e.n(u),a=e(89685);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l="https://beta-api.baitech-ipfs.net/",p={"Content-Type":"application/json",Accept:"*/*"},d=function(){return f(f({},p),{},{Authorization:(0,o.fO)("token")})};n.Z=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"post",hint:!0,loading:!0},r=arguments.length>3?arguments[3]:void 0;t=l+t;var o=[a.QI,a.P6,a.bU,a.S6].includes(t)?p:d();return new Promise((function(u,a){c().create({baseURL:t,timeout:1e4,withCredentials:!0})({url:t,method:e.method||"post",data:n,withCredentials:!0,headers:f(f({},o),r)}).then((function(t){200!==t.status?(a(t.data),i.ZP.error(t.data.message)):u(t.data)})).catch((function(t){e.hint&&i.ZP.error(t.response.data.message),a(t.response)}))}))}},41559:function(t,n,e){"use strict";e.d(n,{fO:function(){return r},$0:function(){return o},qN:function(){return i}});var r=function(t){return localStorage.getItem(t)},o=function(t,n){return localStorage.setItem(t,n)},i=function(t){var n="";if(!t)return"0kb";var e=(n=t<102.4?t.toFixed(2)+"B":t<104857.6?(t/1024).toFixed(2)+"KB":t<107374182.4?(t/1048576).toFixed(2)+"MB":t<109951162777.6?(t/1073741824).toFixed(2)+"GB":(t/1099511627776).toFixed(2)+"TB")+"",r=e.indexOf(".");return"00"==e.substr(r+1,2)?e.substring(0,r)+e.substr(r+3,2):n}},69716:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup/components/registerForm",function(){return e(76864)}])},14453:function(){}},function(t){t.O(0,[774,508,433,914,598,724,382,893,864],(function(){return n=69716,t(t.s=n);var n}));var n=t.O();_N_E=n}]);