(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9589],{61319:function(e,n,t){"use strict";t.r(n),t.d(n,{BetweenFlexBox:function(){return C},LoginFormBox:function(){return j}});var r=t(85893),s=t(809),a=t.n(s),c=t(92447),u=t(27261),o=t(29163),i=t(67294),l=t(48086),d=t(23912),p=t(13002),h=t(46819),f=t(36050),x=t(43803),w=t(22775),m=t(41559),v=t(37412),y=t(11163);function g(){var e=(0,u.Z)(["\n  width: 100%;\n"]);return g=function(){return e},e}function Z(){var e=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return Z=function(){return e},e}var C=o.ZP.div(Z()),j=o.ZP.div(g());n.default=function(){var e=(0,i.useContext)(v._).dispatch,n=(0,i.useState)(""),t=n[0],s=n[1],u=(0,i.useState)(""),o=u[0],g=u[1],Z=(0,i.useState)(""),b=Z[0],k=Z[1],_=(0,i.useState)(!1),D=_[0],S=_[1],I=(0,i.useState)(""),P=I[0],T=I[1],A=(0,i.useState)(""),E=A[0],F=A[1],N=(0,i.useState)(60),B=N[0],L=N[1],O=(0,i.useState)(!1),G=O[0],V=O[1],U=(0,i.useState)(!1),q=U[0],z=U[1],R=(0,i.useState)(!1),X=R[0],H=R[1],M=(0,i.useState)(""),Q=M[0],$=M[1],J=(0,i.createRef)(),K=function(){var e=(0,c.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.wA)(t);case 2:n=e.sent,T(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var n=(0,c.Z)(a().mark((function n(){var r,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.yB)({mobile:t,verifyCode:E});case 4:l.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),r=60,s=setInterval((function(){0==r?(L(60),clearInterval(s)):L(r--)}),1e3),$(""),S(!1),l.ZP.success("\u5bc6\u7801\u4fee\u6539\u6210\u529f"),y.default.replace("/login"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),n.t0.data.message?$(n.t0.data.message):$("\u672a\u77e5\u9519\u8bef \u8bf7\u7a0d\u540e\u91cd\u8bd5");case 16:e({type:"UPDATE_LOADING",payload:!1});case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}(),Y=function(){var n=(0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:J.current.validateFields(["phone","code","password"]).then((0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.QG)({password:b,mobile:t,smsCode:o});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:e({type:"UPDATE_LOADING",payload:!1});case 10:case"end":return n.stop()}}),n,null,[[0,6]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(j,{children:[(0,r.jsxs)(d.Z,{name:"loginForm",ref:J,children:[(0,r.jsx)(d.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)(w.Z,{placeholder:"\u624b\u673a\u53f7",setValue:function(e){s(e),V((0,m.al)(e))}})}),(0,r.jsx)(d.Z.Item,{label:"",name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(C,{children:[(0,r.jsx)(w.Z,{placeholder:"\u9a8c\u8bc1\u7801",style:{width:"280px",height:"50px",background:"#F8F8F8",border:" 1px solid #DDDDDD",borderRadius:"8px"},setValue:function(e){g(e),H((0,m.jz)(e))}}),B<60?(0,r.jsxs)(f.CountdownBtn,{style:{width:"148px"},children:[B,"s"]}):(0,r.jsx)(f.VerifyBtn,{onClick:function(){G&&J.current.validateFields(["phone"]).then((0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K(),S(!0);case 2:case"end":return e.stop()}}),e)}))))},style:G?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(d.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:16,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"},{min:6,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"}],children:(0,r.jsx)(w.Z,{setValue:function(e){k(e),z((0,m.bT)(e))},type:"password",placeholder:"\u5bc6\u7801",maxLength:16})}),(0,r.jsx)(d.Z.Item,{wrapperCol:{span:32},children:G&&q&&X?(0,r.jsx)(h.Z,{type:"button",onClick:function(){return Y()},size:"large",children:"\u91cd\u7f6e\u5bc6\u7801"}):(0,r.jsx)(h.Z,{type:"button",size:"large",style:{background:"#CCCCCC"},children:"\u91cd\u7f6e\u5bc6\u7801"})})]}),(0,r.jsxs)(p.Z,{title:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",visible:D,onCancel:function(){return S(!1)},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",footer:null,children:[(0,r.jsx)("div",{onClick:function(){return K()},style:f.verifyCodeImgStyle,dangerouslySetInnerHTML:{__html:P}}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(d.Z.Item,{validateStatus:Q?"error":"validating",help:Q,children:(0,r.jsx)(w.Z,{setValue:function(e){return F(e)},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})})}),(0,r.jsxs)(f.BtnBox,{children:[(0,r.jsx)(h.Z,{style:{width:"45%",height:"40px",background:"rgba(44, 200, 194, 0.06)",border:"1px solid #2CC8C2",color:"#2CC8C2"},onClick:function(){return S(!1)},children:"\u53d6\u6d88"}),(0,r.jsx)(h.Z,{style:{width:"45%",height:"40px"},onClick:function(){return W()},children:"\u786e\u5b9a"})]})]})]})}},25533:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resetPassword/components/resetPasswordForm",function(){return t(61319)}])}},function(e){e.O(0,[9774,4597,2530,3654,3102,724,3912,3002,3520,6050],(function(){return n=25533,e(e.s=n);var n}));var n=e.O();_N_E=n}]);