(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8829],{68829:function(e,n,t){"use strict";t.r(n),t.d(n,{BetweenFlexBox:function(){return I},LoginFormBox:function(){return _},VerifyBtn:function(){return A},CountdownBtn:function(){return P},verifyCodeImgStyle:function(){return D},ErrorBox:function(){return T},BtnBox:function(){return E}});var r=t(85893),a=t(809),s=t.n(a),c=t(92447),i=t(27261),u=t(29163),o=t(67294),l=t(48086),d=t(23912),p=t(90371),f=t(13002),h=t(46819),x=t(43803),m=t(28447),g=t(41559),v=t(11163),y=t(37412),w=t(22775);function Z(){var e=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n"]);return Z=function(){return e},e}function C(){var e=(0,i.Z)([""]);return C=function(){return e},e}function j(){var e=(0,i.Z)(["\n  background: #cccccc;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 52px;\n  width: 457px;\n  font-size: 16px;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  max-width: 100%;\n"]);return j=function(){return e},e}function k(){var e=(0,i.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 52px;\n  width: 457px;\n  font-size: 16px;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  max-width: 100%;\n  background-color: #15c1ba;\n  &:hover {\n    background-color: #15c1ba;\n  }\n"]);return k=function(){return e},e}function b(){var e=(0,i.Z)(["\n  width: 100%;\n"]);return b=function(){return e},e}function S(){var e=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return S=function(){return e},e}var I=u.ZP.div(S()),_=u.ZP.div(b()),A=u.ZP.div(k()),P=u.ZP.div(j()),D={display:"flex",justifyContent:"center",marginBottom:"20px"},T=u.ZP.div(C()),E=u.ZP.div(Z()),B={color:"#2CC8C2"};n.default=function(){var e=(0,o.useContext)(y._).dispatch,n=(0,o.useState)(""),t=n[0],a=n[1],i=(0,o.useState)(""),u=i[0],Z=i[1],C=(0,o.useState)(""),j=C[0],k=C[1],b=(0,o.useState)(""),S=b[0],T=b[1],N=(0,o.useState)(""),L=N[0],U=N[1],O=(0,o.useState)(""),V=O[0],q=O[1],G=(0,o.useState)(!1),z=G[0],F=G[1],$=(0,o.useState)(!1),M=$[0],R=$[1],H=(0,o.useState)(""),J=H[0],K=H[1],Q=(0,o.useState)(""),W=Q[0],X=Q[1],Y=(0,o.useState)(60),ee=Y[0],ne=Y[1],te=(0,o.useState)(60),re=te[0],ae=te[1],se=(0,o.useState)(!1),ce=se[0],ie=se[1],ue=(0,o.useState)(!1),oe=ue[0],le=ue[1],de=(0,o.useState)(!1),pe=de[0],fe=de[1],he=(0,o.useState)(!1),xe=he[0],me=he[1],ge=(0,o.useState)(!1),ve=ge[0],ye=ge[1],we=(0,o.useState)(!1),Ze=we[0],Ce=we[1],je=(0,o.useState)(!1),ke=je[0],be=je[1],Se=(0,o.useState)(""),Ie=Se[0],_e=Se[1],Ae=(0,o.createRef)(),Pe=function(){var e=(0,c.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.wA)(S);case 2:n=e.sent,K(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=function(){var n=(0,c.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.yB)({mobile:S,verifyCode:W});case 4:l.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),t=60,r=setInterval((function(){0==t?(ne(60),clearInterval(r)):ne(t--)}),1e3),_e(""),R(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),n.t0.data.message?_e(n.t0.data.message):_e("\u672a\u77e5\u9519\u8bef \u8bf7\u7a0d\u540e\u91cd\u8bd5");case 14:e({type:"UPDATE_LOADING",payload:!1});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),Te=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:Ae.current.validateFields(["user","phone","code","password"]).then((0,c.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,x.qJ)({username:t,password:L,mobile:S,smsCode:V,email:u,emailCode:j});case 4:r=n.sent,a="Bearer ".concat(r.data.signature),(0,g.$0)("token",a),e({type:"UPDATE_LOGIN_STATUS",payload:m.x.login}),e({type:"UPDATE_USER_NAME",payload:t}),(0,g.$0)("userName",t),v.default.replace("/panel/fileManager"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:e({type:"UPDATE_LOADING",payload:!1});case 17:case"end":return n.stop()}}),n,null,[[0,13]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Ee=function(){var n=(0,c.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"UPDATE_LOADING",payload:!0}),n.prev=1,n.next=4,(0,x.fO)(u);case 4:l.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),t=60,r=setInterval((function(){0==t?(ae(60),clearInterval(r)):ae(t--)}),1e3),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:e({type:"UPDATE_LOADING",payload:!1});case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(_,{children:[(0,r.jsxs)(d.Z,{name:"loginForm",ref:Ae,children:[(0,r.jsx)(d.Z.Item,{name:"user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{min:4,message:"\u8bf7\u81f3\u5c11\u8f93\u51654\u4f4d\u7528\u6237\u540d"}],children:(0,r.jsx)(w.Z,{setValue:function(e){a(e),ie((0,g.x)(e))},placeholder:"\u7528\u6237\u540d"})}),(0,r.jsx)(d.Z.Item,{name:"mail",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1"}],children:(0,r.jsx)(w.Z,{setValue:function(e){Z(e),ye((0,g.Kf)(e))},placeholder:"\u90ae\u7bb1"})}),(0,r.jsx)(d.Z.Item,{name:"mailCode",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(I,{children:[(0,r.jsx)(w.Z,{setValue:function(e){k(e),Ce((0,g.jz)(e))},width:"280px",placeholder:"\u9a8c\u8bc1\u7801"}),re<60?(0,r.jsxs)(P,{style:{width:"148px"},children:[re,"s"]}):(0,r.jsx)(A,{onClick:function(){ve&&Ee()},style:ve?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(d.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)(w.Z,{setValue:function(e){T(e),le((0,g.al)(e))},placeholder:"\u624b\u673a\u53f7"})}),(0,r.jsx)(d.Z.Item,{name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(I,{children:[(0,r.jsx)(w.Z,{setValue:function(e){q(e),me((0,g.jz)(e))},width:"280px",placeholder:"\u9a8c\u8bc1\u7801"}),ee<60?(0,r.jsxs)(P,{style:{width:"148px"},children:[ee,"s"]}):(0,r.jsx)(A,{onClick:function(){oe&&Ae.current.validateFields(["user","phone"]).then((0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Pe(),R(!0);case 2:case"end":return e.stop()}}),e)}))))},style:oe?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(d.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:16,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"},{min:6,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"}],children:(0,r.jsx)(w.Z,{setValue:function(e){U(e),fe((0,g.bT)(e))},type:"password",placeholder:"\u5bc6\u7801",maxLength:16})}),(0,r.jsx)(d.Z.Item,{name:"agree",children:(0,r.jsxs)(p.Z,{checked:z,onChange:function(){return F(!z)},children:["\u6211\u5df2\u540c\u610f"," ",(0,r.jsx)("a",{style:B,href:"/termofuse",target:"_blank",rel:"noreferrer",children:"\u300a\u7528\u6237\u534f\u8bae\u300b"})," ","\u548c"," ",(0,r.jsx)("a",{style:B,target:"_blank",href:"/privacy",rel:"noreferrer",children:"\u300a\u9690\u79c1\u534f\u8bae\u300b"})," "]})}),(0,r.jsx)(d.Z.Item,{wrapperCol:{span:32},children:ce&&ve&&Ze&&oe&&pe&&xe&&z?(0,r.jsx)(h.Z,{type:"button",onClick:function(){return Te()},size:"large",children:"\u6ce8\u518c"}):(0,r.jsx)(h.Z,{type:"button",size:"large",style:{background:"#CCCCCC"},children:"\u6ce8\u518c"})})]}),(0,r.jsxs)(f.Z,{centered:!0,title:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",visible:M,onCancel:function(){R(!1),X("")},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",footer:null,children:[(0,r.jsx)("div",{onClick:function(){return Pe()},style:D,dangerouslySetInnerHTML:{__html:J}}),(0,r.jsx)(d.Z,{children:(0,r.jsx)(d.Z.Item,{validateStatus:Ie?"error":"validating",help:Ie,children:(0,r.jsx)(w.Z,{value:W,setValue:function(e){X(e),be((0,g.dh)(e)),_e("")},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})})}),(0,r.jsxs)(E,{children:[(0,r.jsx)(h.Z,{style:{width:"48%",height:"40px",background:"rgba(44, 200, 194, 0.06)",border:"1px solid #2CC8C2",color:"#2CC8C2"},onClick:function(){return R(!1)},children:"\u53d6\u6d88"}),(0,r.jsx)(h.Z,{style:{width:"48%",height:"40px",background:ke?"#2CC8C2":"#CCCCCC"},onClick:function(){ke&&De()},children:"\u786e\u5b9a"})]})]})]})}}}]);