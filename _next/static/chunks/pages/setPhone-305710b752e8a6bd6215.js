(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{79480:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),s=t(67294),a=t(809),c=t.n(a),i=t(92447),l=t(27261),u=t(73322),o=t(82193),p=t(34498),d=t(54521),f=t(23912),h=t(11187),x=t(11163),v=t(31577),m=t(83807),w=t(8450),j=t(85832),y=t(29163),g=t(60155);function k(){var e=(0,l.Z)(["\n  position: absolute;\n  top: 84px;\n  left: 36px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #666666;\n  display: flex;\n  align-items: center;\n  z-index: 99999;\n  cursor: pointer;\n"]);return k=function(){return e},e}var _=y.ZP.div(k()),C=function(){var e=(0,s.useContext)(w._).dispatch,n=(0,s.useState)(""),t=n[0],a=n[1],l=(0,s.useState)(""),y=l[0],k=l[1],C=(0,s.useState)(0),b=C[0],Z=C[1],N=(0,s.useState)(!1),A=N[0],D=N[1],E=(0,s.useState)(!1),I=E[0],P=E[1],T=(0,s.createRef)(),L=function(){var n=(0,i.Z)(c().mark((function n(){var r,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,p.kj)(t);case 4:h.default.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),r=60,s=setInterval((function(){0==r?(Z(0),clearInterval(s)):Z(r--)}),1e3),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h.default.error(n.t0);case 12:e({type:"UPDATE_LOADING",payload:!1});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=(0,i.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:T.current.validateFields(["user","phone","code","password"]).then((0,i.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,p.a$)({mobile:t,smsCode:y});case 4:e({type:"UPDATE_LOADING",payload:!1}),x.default.replace("panel/profile"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),h.default.error(n.t0),e({type:"UPDATE_LOADING",payload:!1});case 12:case"end":return n.stop()}}),n,null,[[0,8]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{style:{height:"100%"},children:[(0,r.jsxs)(_,{onClick:function(){return x.default.back()},children:[(0,r.jsx)(g.dUf,{}),(0,r.jsx)("span",{style:{marginLeft:"10px"},children:"\u8fd4\u56de"})]}),(0,r.jsx)("div",{className:"w-full h-full flex relative items-center justify-center",children:(0,r.jsxs)(u.FormWrapper,{className:"relative flex  flex-col\titems-center w-full px-8 md:px-0",children:[(0,r.jsx)(j.LoginTitle,{children:"\u66f4\u6539\u624b\u673a\u53f7"}),(0,r.jsxs)(f.Z,{name:"loginForm",ref:T,style:{width:"457px"},children:[(0,r.jsx)(f.Z.Item,{label:"",name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)(m.Z,{setValue:function(e){a(e),D((0,d.al)(e))},placeholder:"\u624b\u673a\u53f7"})}),(0,r.jsx)(f.Z.Item,{label:"",name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"},{pattern:/^\d{6}$/,message:"\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(o.BetweenFlexBox,{children:[(0,r.jsx)(m.Z,{setValue:function(e){k(e),P((0,d.jz)(e))},width:"280px",placeholder:"\u9a8c\u8bc1\u7801",size:"large"}),b<=60&&0!=b?(0,r.jsxs)(o.CountdownBtn,{style:{width:"148px",height:"44px"},children:[b,"s"]}):(0,r.jsx)(o.VerifyBtn,{onClick:function(){A&&T.current.validateFields(["phone"]).then((0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L();case 1:case"end":return e.stop()}}),e)}))))},style:A?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(f.Z.Item,{wrapperCol:{span:32},children:A&&I?(0,r.jsx)(v.Z,{onClick:function(){return O()},size:"large",children:"\u63d0\u4ea4"}):(0,r.jsx)(v.Z,{disabled:!0,size:"large",style:{background:"#CCCCCC"},children:"\u63d0\u4ea4"})})]})]})})]})};function b(){return(0,r.jsx)(C,{})}},27252:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setPhone",function(){return t(79480)}])}},function(e){e.O(0,[260,102,912,2,929,193,832,774,888,179],(function(){return n=27252,e(e.s=n);var n}));var n=e.O();_N_E=n}]);