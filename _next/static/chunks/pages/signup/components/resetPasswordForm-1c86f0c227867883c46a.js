(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{84765:function(e,n,t){"use strict";t.r(n),t.d(n,{BetweenFlexBox:function(){return C},LoginFormBox:function(){return Z}});var r=t(85893),s=t(809),a=t.n(s),c=t(92447),u=t(27261),o=t(29163),i=t(67294),l=t(48086),d=t(23912),p=t(13002),h=t(46819),f=t(76864),x=t(43803),m=t(22775),w=t(41559),v=t(37412);function y(){var e=(0,u.Z)(["\n  width: 100%;\n"]);return y=function(){return e},e}function g(){var e=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return g=function(){return e},e}var C=o.ZP.div(g()),Z=o.ZP.div(y());n.default=function(){var e=(0,i.useContext)(v._).dispatch,n=(0,i.useState)(""),t=n[0],s=n[1],u=(0,i.useState)(""),o=u[0],y=u[1],g=(0,i.useState)(""),j=g[0],b=g[1],k=(0,i.useState)(!1),_=k[0],D=k[1],S=(0,i.useState)(""),I=S[0],P=S[1],T=(0,i.useState)(""),A=T[0],E=T[1],F=(0,i.useState)(60),N=F[0],B=F[1],L=(0,i.useState)(!1),O=L[0],G=L[1],V=(0,i.useState)(!1),U=V[0],q=V[1],z=(0,i.useState)(!1),R=z[0],X=z[1],H=(0,i.useState)(""),M=H[0],Q=H[1],$=(0,i.createRef)(),J=function(){var e=(0,c.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.wA)(t);case 2:n=e.sent,P(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var n=(0,c.Z)(a().mark((function n(){var r,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.yB)({mobile:t,verifyCode:A});case 4:l.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),r=60,s=setInterval((function(){0==r?(B(60),clearInterval(s)):B(r--)}),1e3),Q(""),D(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),n.t0.data.message?Q(n.t0.data.message):Q("\u672a\u77e5\u9519\u8bef \u8bf7\u7a0d\u540e\u91cd\u8bd5");case 14:e({type:"UPDATE_LOADING",payload:!1});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),W=function(){var n=(0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:$.current.validateFields(["phone","code","password"]).then((0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.QG)({password:j,mobile:t,smsCode:o});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:e({type:"UPDATE_LOADING",payload:!1});case 10:case"end":return n.stop()}}),n,null,[[0,6]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(Z,{children:[(0,r.jsxs)(d.Z,{name:"loginForm",ref:$,children:[(0,r.jsx)(d.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)(m.Z,{placeholder:"\u624b\u673a\u53f7",setValue:function(e){s(e),G((0,w.al)(e))}})}),(0,r.jsx)(d.Z.Item,{label:"",name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(C,{children:[(0,r.jsx)(m.Z,{placeholder:"\u9a8c\u8bc1\u7801",style:{width:"280px",height:"50px",background:"#F8F8F8",border:" 1px solid #DDDDDD",borderRadius:"8px"},setValue:function(e){y(e),X((0,w.jz)(e))}}),N<60?(0,r.jsxs)(f.CountdownBtn,{style:{width:"148px"},children:[N,"s"]}):(0,r.jsx)(f.VerifyBtn,{onClick:function(){O&&$.current.validateFields(["phone"]).then((0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(),D(!0);case 2:case"end":return e.stop()}}),e)}))))},style:O?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(d.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:16,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"},{min:6,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"}],children:(0,r.jsx)(m.Z,{setValue:function(e){b(e),q((0,w.bT)(e))},type:"password",placeholder:"\u5bc6\u7801",maxLength:16})}),(0,r.jsx)(d.Z.Item,{wrapperCol:{span:32},children:O&&U&&R?(0,r.jsx)(h.Z,{type:"button",onClick:function(){return W()},size:"large",children:"\u91cd\u7f6e\u5bc6\u7801"}):(0,r.jsx)(h.Z,{type:"button",size:"large",style:{background:"#CCCCCC"},children:"\u91cd\u7f6e\u5bc6\u7801"})})]}),(0,r.jsxs)(p.Z,{title:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",visible:_,onCancel:function(){return D(!1)},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",footer:null,children:[(0,r.jsx)("div",{onClick:function(){return J()},style:f.verifyCodeImgStyle,dangerouslySetInnerHTML:{__html:I}}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(d.Z.Item,{validateStatus:M?"error":"validating",help:M,children:(0,r.jsx)(m.Z,{setValue:function(e){return E(e)},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})})}),(0,r.jsxs)(f.BtnBox,{children:[(0,r.jsx)(h.Z,{style:{width:"45%",height:"40px",background:"rgba(44, 200, 194, 0.06)",border:"1px solid #2CC8C2",color:"#2CC8C2"},onClick:function(){return D(!1)},children:"\u53d6\u6d88"}),(0,r.jsx)(h.Z,{style:{width:"45%",height:"40px"},onClick:function(){return K()},children:"\u786e\u5b9a"})]})]})]})}},98576:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup/components/resetPasswordForm",function(){return t(84765)}])}},function(e){e.O(0,[774,597,530,654,478,724,2,480,520,864],(function(){return n=98576,e(e.s=n);var n}));var n=e.O();_N_E=n}]);