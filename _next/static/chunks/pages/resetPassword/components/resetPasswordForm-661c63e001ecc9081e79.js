(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{82417:function(e,n,t){"use strict";t.r(n),t.d(n,{BetweenFlexBox:function(){return y},LoginFormBox:function(){return Z}});var r=t(85893),s=t(809),a=t.n(s),c=t(92447),u=t(27261),o=t(29163),i=t(67294),l=t(48086),d=t(23912),p=t(13002),f=t(31577),h=t(82193),x=t(34498),m=t(83807),w=t(54521),C=t(8450);function v(){var e=(0,u.Z)(["\n  width: 100%;\n"]);return v=function(){return e},e}function g(){var e=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return g=function(){return e},e}var y=o.ZP.div(g()),Z=o.ZP.div(v());n.default=function(){var e=(0,i.useContext)(C._).dispatch,n=(0,i.useState)(""),t=n[0],s=n[1],u=(0,i.useState)(""),o=u[0],v=u[1],g=(0,i.useState)(""),j=g[0],k=g[1],b=(0,i.useState)(!1),_=b[0],S=b[1],I=(0,i.useState)(""),P=I[0],E=I[1],T=(0,i.useState)(""),A=T[0],N=T[1],B=(0,i.useState)(0),D=B[0],L=B[1],F=(0,i.useState)(!1),O=F[0],G=F[1],V=(0,i.useState)(!1),U=V[0],q=V[1],z=(0,i.useState)(!1),X=z[0],$=z[1],H=(0,i.useState)(""),M=H[0],Q=H[1],R=(0,i.createRef)(),J=function(){var e=(0,c.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.wA)(t);case 2:n=e.sent,E(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var n=(0,c.Z)(a().mark((function n(){var r,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.yB)({mobile:t,verifyCode:A});case 4:l.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),r=60,s=setInterval((function(){0==r?(L(0),clearInterval(s)):L(r--)}),1e3),Q(""),S(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),n.t0.data.message?Q(n.t0.data.message):Q("\u672a\u77e5\u9519\u8bef \u8bf7\u7a0d\u540e\u91cd\u8bd5");case 14:e({type:"UPDATE_LOADING",payload:!1});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),W=function(){var n=(0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:R.current.validateFields(["phone","code","password"]).then((0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.QG)({password:j,mobile:t,smsCode:o});case 4:l.ZP.success("\u5bc6\u7801\u5df2\u91cd\u7f6e"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:e({type:"UPDATE_LOADING",payload:!1});case 11:case"end":return n.stop()}}),n,null,[[0,7]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){N("")}),[_]),(0,r.jsxs)(Z,{children:[(0,r.jsxs)(d.Z,{name:"loginForm",ref:R,children:[(0,r.jsx)(d.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)(m.Z,{placeholder:"\u624b\u673a\u53f7",setValue:function(e){s(e),G((0,w.al)(e))}})}),(0,r.jsx)(d.Z.Item,{label:"",name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"},{pattern:/^\d{6}$/,message:"\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(y,{children:[(0,r.jsx)(m.Z,{placeholder:"\u9a8c\u8bc1\u7801",width:"280px",setValue:function(e){v(e),$((0,w.jz)(e))}}),D<=60&&0!==D?(0,r.jsxs)(h.CountdownBtn,{style:{width:"148px"},children:[D,"s"]}):(0,r.jsx)(h.VerifyBtn,{onClick:function(){O&&R.current.validateFields(["phone"]).then((0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(),S(!0);case 2:case"end":return e.stop()}}),e)}))))},style:O?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(d.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:16,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"},{min:6,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"}],children:(0,r.jsx)(m.Z,{setValue:function(e){k(e),q((0,w.bT)(e))},type:"password",placeholder:"\u5bc6\u7801",maxLength:16})}),(0,r.jsx)(d.Z.Item,{wrapperCol:{span:32},children:O&&U&&X?(0,r.jsx)(f.Z,{type:"button",onClick:function(){return W()},size:"large",children:"\u91cd\u7f6e\u5bc6\u7801"}):(0,r.jsx)(f.Z,{type:"button",size:"large",style:{background:"#CCCCCC"},children:"\u91cd\u7f6e\u5bc6\u7801"})})]}),(0,r.jsxs)(p.Z,{centered:!0,title:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",visible:_,onCancel:function(){return S(!1)},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",footer:null,children:[(0,r.jsx)("div",{onClick:function(){return J()},style:h.verifyCodeImgStyle,dangerouslySetInnerHTML:{__html:P}}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(d.Z.Item,{validateStatus:M?"error":"validating",help:M,children:(0,r.jsx)(m.Z,{value:A,setValue:function(e){return N(e)},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})})}),(0,r.jsxs)(h.BtnBox,{children:[(0,r.jsx)(f.Z,{style:{width:"48%",height:"40px",background:"rgba(44, 200, 194, 0.06)",border:"1px solid #2CC8C2",color:"#2CC8C2"},onClick:function(){return S(!1)},children:"\u53d6\u6d88"}),(0,r.jsx)(f.Z,{style:{width:"48%",height:"40px",background:A.length>0?"#2CC8C2":"#CCCCCC"},onClick:function(){A.length>0&&K()},children:"\u786e\u5b9a"})]})]})]})}},25533:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetPassword/components/resetPasswordForm",function(){return t(82417)}])}},function(e){e.O(0,[102,912,2,193,774,888,179],(function(){return n=25533,e(e.s=n);var n}));var n=e.O();_N_E=n}]);