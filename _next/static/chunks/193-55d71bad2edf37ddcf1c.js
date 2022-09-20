(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{83807:function(e,n,t){"use strict";var r=t(26265),a=t(85893),o=t(38347),c=t(67294),u=t(22436);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e){return{width:e||"100%",height:"44px",background:" #F8F8F8",border:" 1px solid #DDDDDD",borderRadius:"8px",boxShadow:"none",padding:"10px 24px"}},d=function(e){return{width:e||"100%",height:"44px",borderRadius:"8px",boxShadow:"none",padding:"10px 24px"}};n.Z=function(e){var n,t=e.setValue,r=e.value,s=e.width,p=(0,o.Z)(e,["setValue","value","width"]),f=(0,c.useState)(""),h=f[0],v=f[1];return(0,a.jsx)(u.Z,i(i({value:r,size:"large",style:h?(n=s,{width:n||"100%",height:"44px",border:" 1px solid #DDDDDD",borderRadius:"8px",boxShadow:"none",background:" #fff",padding:"10px 24px"}):p.placeholder?l(s):d(s)},p),{},{onInput:function(e){v(e.target.value),t(e.target.value)}}))}},82193:function(e,n,t){"use strict";t.r(n),t.d(n,{BetweenFlexBox:function(){return ee},BtnBox:function(){return ce},CountdownBtn:function(){return re},ErrorBox:function(){return oe},LoginFormBox:function(){return ne},VerifyBtn:function(){return te},default:function(){return se},verifyCodeImgStyle:function(){return ae}});var r=t(85893),a=t(809),o=t.n(a),c=t(92447),u=t(27261),s=t(29163),i=t(67294),l=t(96156),d=t(22122),p=t(94184),f=t.n(p),h=t(17375),v=t(28991),x=t(6610),m=t(5991),y=t(65255),g=t(54070),b=function(e){(0,y.Z)(t,e);var n=(0,g.Z)(t);function t(e){var r;(0,x.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,v.Z)((0,v.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,m.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,a=n.style,o=n.name,c=n.id,u=n.type,s=n.disabled,p=n.readOnly,v=n.tabIndex,x=n.onClick,m=n.onFocus,y=n.onBlur,g=n.onKeyDown,b=n.onKeyPress,C=n.onKeyUp,w=n.autoFocus,Z=n.value,k=n.required,j=(0,h.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),O=Object.keys(j).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=j[n]),e}),{}),P=this.state.checked,S=f()(t,r,(e={},(0,l.Z)(e,"".concat(t,"-checked"),P),(0,l.Z)(e,"".concat(t,"-disabled"),s),e));return i.createElement("span",{className:S,style:a},i.createElement("input",(0,d.Z)({name:o,id:c,type:u,required:k,readOnly:p,disabled:s,tabIndex:v,className:"".concat(t,"-input"),checked:!!P,onClick:x,onFocus:m,onBlur:y,onKeyUp:C,onKeyDown:g,onKeyPress:b,onChange:this.handleChange,autoFocus:w,ref:this.saveInput,value:Z},O)),i.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,v.Z)((0,v.Z)({},n),{},{checked:e.checked}):null}}]),t}(i.Component);b.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var C=b,w=t(53124),Z=t(65223),k=t(42921),j=t(28481),O=t(10366),P=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},S=i.createContext(null),D=function(e,n){var t=e.defaultValue,r=e.children,a=e.options,o=void 0===a?[]:a,c=e.prefixCls,u=e.className,s=e.style,p=e.onChange,h=P(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),v=i.useContext(w.E_),x=v.getPrefixCls,m=v.direction,y=i.useState(h.value||t||[]),g=(0,j.Z)(y,2),b=g[0],C=g[1],Z=i.useState([]),D=(0,j.Z)(Z,2),E=D[0],I=D[1];i.useEffect((function(){"value"in h&&C(h.value||[])}),[h.value]);var N=function(){return o.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},_=x("checkbox",c),A="".concat(_,"-group"),F=(0,O.Z)(h,["value","disabled"]);o&&o.length>0&&(r=N().map((function(e){return i.createElement(V,{prefixCls:_,key:e.value.toString(),disabled:"disabled"in e?e.disabled:h.disabled,value:e.value,checked:-1!==b.indexOf(e.value),onChange:e.onChange,className:"".concat(A,"-item"),style:e.style},e.label)})));var B={toggleOption:function(e){var n=b.indexOf(e.value),t=(0,k.Z)(b);-1===n?t.push(e.value):t.splice(n,1),"value"in h||C(t);var r=N();null===p||void 0===p||p(t.filter((function(e){return-1!==E.indexOf(e)})).sort((function(e,n){return r.findIndex((function(n){return n.value===e}))-r.findIndex((function(e){return e.value===n}))})))},value:b,disabled:h.disabled,name:h.name,registerValue:function(e){I((function(n){return[].concat((0,k.Z)(n),[e])}))},cancelValue:function(e){I((function(n){return n.filter((function(n){return n!==e}))}))}},T=f()(A,(0,l.Z)({},"".concat(A,"-rtl"),"rtl"===m),u);return i.createElement("div",(0,d.Z)({className:T,style:s},F,{ref:n}),i.createElement(S.Provider,{value:B},r))},E=i.forwardRef(D),I=i.memo(E),N=t(98866),_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},A=function(e,n){var t,r=e.prefixCls,a=e.className,o=e.children,c=e.indeterminate,u=void 0!==c&&c,s=e.style,p=e.onMouseEnter,h=e.onMouseLeave,v=e.skipGroup,x=void 0!==v&&v,m=e.disabled,y=_(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),g=i.useContext(w.E_),b=g.getPrefixCls,k=g.direction,j=i.useContext(S),O=(0,i.useContext)(Z.aM).isFormItemInput,P=(0,i.useContext)(N.Z),D=m||(null===j||void 0===j?void 0:j.disabled)||P,E=i.useRef(y.value);i.useEffect((function(){null===j||void 0===j||j.registerValue(y.value)}),[]),i.useEffect((function(){if(!x)return y.value!==E.current&&(null===j||void 0===j||j.cancelValue(E.current),null===j||void 0===j||j.registerValue(y.value),E.current=y.value),function(){return null===j||void 0===j?void 0:j.cancelValue(y.value)}}),[y.value]);var I=b("checkbox",r),A=(0,d.Z)({},y);j&&!x&&(A.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),j.toggleOption&&j.toggleOption({label:o,value:y.value})},A.name=j.name,A.checked=-1!==j.value.indexOf(y.value));var V=f()((t={},(0,l.Z)(t,"".concat(I,"-wrapper"),!0),(0,l.Z)(t,"".concat(I,"-rtl"),"rtl"===k),(0,l.Z)(t,"".concat(I,"-wrapper-checked"),A.checked),(0,l.Z)(t,"".concat(I,"-wrapper-disabled"),D),(0,l.Z)(t,"".concat(I,"-wrapper-in-form-item"),O),t),a),F=f()((0,l.Z)({},"".concat(I,"-indeterminate"),u)),B=u?"mixed":void 0;return i.createElement("label",{className:V,style:s,onMouseEnter:p,onMouseLeave:h},i.createElement(C,(0,d.Z)({"aria-checked":B},A,{prefixCls:I,className:F,disabled:D,ref:n})),void 0!==o&&i.createElement("span",null,o))};var V=i.forwardRef(A),F=V;F.Group=I,F.__ANT_CHECKBOX=!0;var B=F,T=t(48086),U=t(23912),K=t(13002),L=t(31577),q=t(34498),G=t(12667),M=t(54521),R=t(11163),z=t(8450),$=t(83807);function H(){var e=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n"]);return H=function(){return e},e}function J(){var e=(0,u.Z)([""]);return J=function(){return e},e}function X(){var e=(0,u.Z)(["\n  background: #cccccc;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  width: 457px;\n  font-size: 16px;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  max-width: 100%;\n"]);return X=function(){return e},e}function Q(){var e=(0,u.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  width: 457px;\n  font-size: 16px;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  max-width: 100%;\n  background-color: #15c1ba;\n  &:hover {\n    background-color: #15c1ba;\n  }\n"]);return Q=function(){return e},e}function W(){var e=(0,u.Z)(["\n  width: 100%;\n  @media (max-height: 800px) {\n    transform: scale(0.9);\n  }\n"]);return W=function(){return e},e}function Y(){var e=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return Y=function(){return e},e}var ee=s.ZP.div(Y()),ne=s.ZP.div(W()),te=s.ZP.div(Q()),re=s.ZP.div(X()),ae={display:"flex",justifyContent:"center",marginBottom:"20px"},oe=s.ZP.div(J()),ce=s.ZP.div(H()),ue={color:"#2CC8C2"},se=function(){var e=(0,i.useContext)(z._).dispatch,n=(0,i.useState)(""),t=n[0],a=n[1],u=(0,i.useState)(""),s=u[0],l=u[1],d=(0,i.useState)(""),p=d[0],f=d[1],h=(0,i.useState)(""),v=h[0],x=h[1],m=(0,i.useState)(""),y=m[0],g=m[1],b=(0,i.useState)(""),C=b[0],w=b[1],Z=(0,i.useState)(!1),k=Z[0],j=Z[1],O=(0,i.useState)(!1),P=O[0],S=O[1],D=(0,i.useState)(""),E=D[0],I=D[1],N=(0,i.useState)(""),_=N[0],A=N[1],V=(0,i.useState)(0),F=V[0],H=V[1],J=(0,i.useState)(0),X=J[0],Q=J[1],W=(0,i.useState)(!1),Y=W[0],oe=W[1],se=(0,i.useState)(!1),ie=se[0],le=se[1],de=(0,i.useState)(!1),pe=de[0],fe=de[1],he=(0,i.useState)(!1),ve=he[0],xe=he[1],me=(0,i.useState)(!1),ye=me[0],ge=me[1],be=(0,i.useState)(!1),Ce=be[0],we=be[1],Ze=(0,i.useState)(!1),ke=Ze[0],je=Ze[1],Oe=(0,i.useState)(""),Pe=Oe[0],Se=Oe[1],De=(0,i.createRef)(),Ee=function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,q.wA)(v);case 2:n=e.sent,I(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var n=(0,c.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,q.yB)({mobile:v,verifyCode:_});case 4:T.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),t=60,r=setInterval((function(){0==t?(H(0),clearInterval(r)):H(t--)}),1e3),Se(""),S(!1),A(""),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),n.t0.data.message?Se(n.t0.data.message):Se("\u672a\u77e5\u9519\u8bef \u8bf7\u7a0d\u540e\u91cd\u8bd5");case 15:e({type:"UPDATE_LOADING",payload:!1});case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),Ne=function(){var n=(0,c.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:De.current.validateFields(["user","phone","code","password"]).then((0,c.Z)(o().mark((function n(){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"UPDATE_LOADING",payload:!0}),n.next=4,(0,q.qJ)({username:t,password:y,mobile:v,smsCode:C,email:s,emailCode:p});case 4:r=n.sent,a="Bearer ".concat(r.data.signature),(0,M.$0)("token",a),e({type:"UPDATE_LOGIN_STATUS",payload:G.x.login}),(0,q.H7)().then((function(n){e({type:"UPDATE_USER",payload:n.data.info}),e({type:"UPDATE_PLAN",payload:n.data.plan})})),R.default.replace("/panel/fileManager"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:e({type:"UPDATE_LOADING",payload:!1});case 16:case"end":return n.stop()}}),n,null,[[0,12]])}))));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),_e=function(){var n=(0,c.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"UPDATE_LOADING",payload:!0}),n.prev=1,n.next=4,(0,q.fO)(s);case 4:T.ZP.success("\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f"),t=60,r=setInterval((function(){0==t?(Q(0),clearInterval(r)):Q(t--)}),1e3),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:e({type:"UPDATE_LOADING",payload:!1});case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(ne,{children:[(0,r.jsxs)(U.Z,{name:"loginForm",ref:De,children:[(0,r.jsx)(U.Z.Item,{name:"user",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{min:4,message:"\u8bf7\u8f93\u51654\u81f332\u4f4d\u7528\u6237\u540d"},{max:32,message:"\u8bf7\u8f93\u51654\u81f332\u4f4d\u7528\u6237\u540d"}],children:(0,r.jsx)($.Z,{setValue:function(e){a(e),oe((0,M.x)(e))},placeholder:"\u7528\u6237\u540d"})}),(0,r.jsx)(U.Z.Item,{name:"mail",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1"}],children:(0,r.jsx)($.Z,{setValue:function(e){l(e),ge((0,M.Kf)(e))},placeholder:"\u90ae\u7bb1"})}),(0,r.jsx)(U.Z.Item,{name:"mailCode",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"},{pattern:/^\d{6}$/,message:"\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(ee,{children:[(0,r.jsx)($.Z,{setValue:function(e){f(e),we((0,M.jz)(e))},width:"280px",placeholder:"\u9a8c\u8bc1\u7801"}),X<=60&&0!==X?(0,r.jsxs)(re,{style:{width:"148px"},children:[X,"s"]}):(0,r.jsx)(te,{onClick:function(){ye&&_e()},style:ye?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(U.Z.Item,{name:"phone",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"},{pattern:/^1[3456789]\d{9}$/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"}],children:(0,r.jsx)($.Z,{setValue:function(e){x(e),le((0,M.al)(e))},placeholder:"\u624b\u673a\u53f7"})}),(0,r.jsx)(U.Z.Item,{name:"code",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"},{pattern:/^\d{6}$/,message:"\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\u9a8c\u8bc1\u7801"}],children:(0,r.jsxs)(ee,{children:[(0,r.jsx)($.Z,{setValue:function(e){w(e),xe((0,M.jz)(e))},width:"280px",placeholder:"\u9a8c\u8bc1\u7801"}),F<=60&&0!==F?(0,r.jsxs)(re,{style:{width:"148px"},children:[F,"s"]}):(0,r.jsx)(te,{onClick:function(){ie&&De.current.validateFields(["phone"]).then((0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ee(),S(!0);case 2:case"end":return e.stop()}}),e)}))))},style:ie?{width:"148px",background:"#2cc8c2"}:{width:"148px",background:"rgb(204, 204, 204)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})}),(0,r.jsx)(U.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{max:16,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"},{min:6,message:"\u5bc6\u7801\u5fc5\u987b\u57286~16\u4f4d\u4e4b\u95f4"}],children:(0,r.jsx)($.Z,{setValue:function(e){g(e),fe((0,M.bT)(e))},type:"password",placeholder:"\u5bc6\u7801",maxLength:16})}),(0,r.jsx)(U.Z.Item,{name:"agree",children:(0,r.jsxs)(B,{checked:k,onChange:function(){return j(!k)},children:["\u6211\u5df2\u540c\u610f"," ",(0,r.jsx)("a",{style:ue,href:"/termofuse",target:"_blank",rel:"noreferrer",children:"\u300a\u7528\u6237\u534f\u8bae\u300b"})," ","\u548c"," ",(0,r.jsx)("a",{style:ue,target:"_blank",href:"/privacy",rel:"noreferrer",children:"\u300a\u9690\u79c1\u534f\u8bae\u300b"})," "]})}),(0,r.jsx)(U.Z.Item,{wrapperCol:{span:32},children:Y&&ye&&Ce&&ie&&pe&&ve&&k?(0,r.jsx)(L.Z,{type:"button",onClick:function(){return Ne()},size:"large",children:"\u6ce8\u518c"}):(0,r.jsx)(L.Z,{type:"button",size:"large",style:{background:"#CCCCCC"},children:"\u6ce8\u518c"})})]}),(0,r.jsxs)(K.Z,{centered:!0,title:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",visible:P,onCancel:function(){S(!1),A("")},cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",footer:null,children:[(0,r.jsx)("div",{onClick:function(){return Ee()},style:ae,dangerouslySetInnerHTML:{__html:E}}),(0,r.jsx)(U.Z,{children:(0,r.jsx)(U.Z.Item,{validateStatus:Pe?"error":"validating",help:Pe,children:(0,r.jsx)($.Z,{value:_,setValue:function(e){A(e),je((0,M.dh)(e)),Se("")},placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})})}),(0,r.jsxs)(ce,{children:[(0,r.jsx)(L.Z,{style:{width:"48%",height:"40px",background:"rgba(44, 200, 194, 0.06)",border:"1px solid #2CC8C2",color:"#2CC8C2"},onClick:function(){return S(!1)},children:"\u53d6\u6d88"}),(0,r.jsx)(L.Z,{style:{width:"48%",height:"40px",background:ke?"#2CC8C2":"#CCCCCC"},onClick:function(){ke&&Ie()},children:"\u786e\u5b9a"})]})]})]})}}}]);