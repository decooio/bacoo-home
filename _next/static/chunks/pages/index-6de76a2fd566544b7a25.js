(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{95357:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var i=e(28991),r=e(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},a=e(30076),s=function(t,n){return r.createElement(a.Z,(0,i.Z)((0,i.Z)({},t),{},{ref:n,icon:o}))};s.displayName="EyeOutlined";var c=r.forwardRef(s)},37412:function(t,n,e){"use strict";e.d(n,{_:function(){return h}});var i=e(85893),r=e(26265),o=e(41559),a=e(11163),s=e(67294),c=e(28447);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h=(0,s.createContext)({});n.Z=function(t){var n=t.children,e=(0,s.useState)({loginStatus:c.x.login,loginType:c.e.login,loading:!1,userName:"",uuid:"",user:{username:"\u5c1a\u672a\u767b\u5f55",mobile:"\u6682\u65e0\u4fe1\u606f"},plan:null})[0];(0,s.useEffect)((function(){var t=(0,o.fO)("token")?c.x.login:c.x.notLogin,n=(0,o.fO)("userName")?(0,o.fO)("userName"):"",e=(0,o.fO)("uuid")?(0,o.fO)("uuid"):"";d({type:"UPDATE_UUID",payload:e}),d({type:"UPDATE_LOGIN_STATUS",payload:t}),d({type:"UPDATE_USER_NAME",payload:n}),1!=t||["/","/login","/termofuse","/privacy"].includes(a.default.pathname)||a.default.replace("/")}),[]);var r=(0,s.useReducer)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,i=n||{},r=i.type,o=i.payload;switch(r){case"UPDATE_LOGIN_STATUS":return l(l({},t),{},{loginStatus:o});case"UPDATE_LOGIN_TYPE":return l(l({},t),{},{loginType:o});case"UPDATE_LOADING":return l(l({},t),{},{loading:o});case"UPDATE_UUID":return l(l({},t),{},{uuid:o});case"UPDATE_USER_NAME":return l(l({},t),{},{userName:o});case"UPDATE_USER":return l(l({},t),{},{user:o});case"UPDATE_PLAN":return l(l({},t),{},{plan:o});default:return t}}),e),u=r[0],d=r[1];return(0,i.jsx)(h.Provider,{value:{state:u,dispatch:d},children:n})}},28447:function(t,n,e){"use strict";var i,r;e.d(n,{x:function(){return i},e:function(){return r}}),function(t){t[t.notLogin=1]="notLogin",t[t.login=2]="login",t[t.firstEntry=3]="firstEntry"}(i||(i={})),function(t){t[t.login=1]="login",t[t.register=2]="register",t[t.resetPassword=3]="resetPassword"}(r||(r={}))},46819:function(t,n,e){"use strict";var i=e(26265),r=e(85893),o=e(27261),a=(e(67294),e(29163));function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function c(){var t=(0,o.Z)(["\n        height: 52px;\n        width: 457px;\n    "]);return c=function(){return t},t}function u(){var t=(0,o.Z)(["\n    background: #2CC8C2;\n    display: inline-flex;\n    justify-content:center;\n    align-items: center;\n    height: 36px;\n    width: 100px;\n    font-size: 16px;\n    border-radius: 8px;\n    color: #FFFFFF;\n    cursor: pointer;\n    max-width: 100%;\n    ","\n    &:hover {\n        background-color: #15C1BA;\n    }\n"]);return u=function(){return t},t}var l=a.ZP.button(u(),(function(t){return"large"===t.size&&(0,a.iv)(c())}));n.Z=function(t){return(0,r.jsx)(l,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t))}},36437:function(t,n,e){"use strict";e.d(n,{X2:function(){return f},cp:function(){return p},XW:function(){return m},bH:function(){return v},rX:function(){return g}});var i=e(27261),r=e(29163),o=e(72970);function a(){var t=(0,i.Z)(["\n  ",";\n  ",";\n  flex-shrink: 0;\n"]);return a=function(){return t},t}function s(){var t=(0,i.Z)(["\n  ",";\n  ",";\n  flex-shrink: 0;\n"]);return s=function(){return t},t}function c(){var t=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n"]);return c=function(){return t},t}function u(){var t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n"]);return u=function(){return t},t}function l(){var t=(0,i.Z)(["\n  "," {\n    min-width: 900px;\n    align-items: flex-start;\n  }\n"]);return l=function(){return t},t}function h(){var t=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n"]);return h=function(){return t},t}function d(){var t=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n"]);return d=function(){return t},t}var f=r.ZP.div(d()),p=(0,r.ZP)(f)(h()),m=((0,r.ZP)(p)(l(),o.L),r.ZP.div(u())),v=((0,r.ZP)(m)(c()),r.ZP.div(s(),(function(t){var n;return"width: ".concat(null!==(n=t.width)&&void 0!==n?n:"12px")}),(function(t){var n;return"height: ".concat(null!==(n=t.height)&&void 0!==n?n:"100%")}))),g=r.ZP.div(a(),(function(t){var n;return"width: ".concat(null!==(n=t.width)&&void 0!==n?n:"100%")}),(function(t){var n;return"height: ".concat(null!==(n=t.height)&&void 0!==n?n:"12px")}))},76062:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return q}});var i=e(85893),r=e(67294),o=e(26265),a=e(809),s=e.n(a),c=e(71385),u=e(92447),l=e(27261),h=e(93047),d=e.n(h),f=e(86893),p=e(45155),m=e(47412),v=function(){};v.prototype.init=function(t,n){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new x(this,n),this};var g=function(t,n,e){this.isFocus=!1,this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=_(this.network.options.particleColors),this.radius=y(1.5,2.5),this.opacity=0,this.x=n||Math.random()*this.canvas.width,this.y=e||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};g.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},g.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var x=function(t,n){this.options={velocity:.5,density:13e3,netLineDistance:220,netLineDistanceFocus:300,netLineColor:"#999999",netLineColorFocus:"#999999",particleColors:["#888888"]},this.canvas=t.canvas,this.ctx=t.ctx,this.et=n,this.init()};x.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},x.prototype.createParticles=function(t){var n=this;this.particles=[];var e=this.canvas.width*this.canvas.height/this.options.density;if(t){var i=0;clearInterval(this.createIntervalId);for(var r=0;r<e;r++)this.particles.push(new g(this));this.createIntervalId=setInterval(function(){i<e-1?this.particles.push(new g(this)):clearInterval(n.createIntervalId),i++}.bind(this),250)}else for(var o=0;o<e;o++)this.particles.push(new g(this))},x.prototype.createInteractionParticle=function(){return this.interactionParticle=new g(this),this.interactionParticle.isFocus=!0,this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},x.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},x.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var n=this.particles[t],e=this.particles.length-1;e>t;e--){var i,r=this.particles[e],o=n.isFocus||r.isFocus,a=o?this.options.netLineDistanceFocus:this.options.netLineDistance,s=o?this.options.netLineColorFocus:this.options.netLineColor,c=Math.abs(n.x-r.x),u=Math.abs(n.y-r.y);Math.max(c,u)>a||((i=Math.sqrt(Math.pow(c,2)+Math.pow(u,2)))>a||(this.ctx.beginPath(),this.ctx.strokeStyle=s,this.ctx.globalAlpha=(a-i)/a*n.opacity*r.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(n.x,n.y),this.ctx.lineTo(r.x,r.y),this.ctx.stroke()))}for(var l=0;l<this.particles.length;l++)this.particles[l].update(),this.particles[l].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},x.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var n=0,e=this.spawnQuantity,i=setInterval(function(){if(this.mouseIsDown){1===n&&(e=1);for(var t=0;t<e;t++)this.interactionParticle&&this.particles.push(new g(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(i);n++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){setTimeout(function(){if(!this.touchIsMoving)for(var n=0;n<this.spawnQuantity;n++)this.particles.push(new g(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),console.info("---setMouseLis--\x3e",this.et),this.et.addEventListener("mousemove",this.onMouseMove),this.et.addEventListener("touchmove",this.onTouchMove),this.et.addEventListener("mouseup",this.onMouseUp),this.et.addEventListener("mouseout",this.onMouseOut),this.et.addEventListener("touchend",this.onTouchEnd)},x.prototype.unbindUiActions=function(){this.et&&(this.et.removeEventListener("mousemove",this.onMouseMove),this.et.removeEventListener("touchmove",this.onTouchMove),this.et.removeEventListener("mouseup",this.onMouseUp),this.et.removeEventListener("mouseout",this.onMouseOut),this.et.removeEventListener("touchend",this.onTouchEnd))};var y=function(t,n,e){var i=Math.random()*(n-t)+t;return e&&(i=Math.round(i)),i},_=function(t){return t[Math.floor(Math.random()*t.length)]},b=new v;function E(){var t=(0,r.useRef)(),n=(0,r.useRef)();return(0,r.useEffect)((function(){var t,e,i;return n.current&&(e=n.current,i=document.body,t=b.init(e,i),window.__bgAnim=t,console.info("---initBgAnim--\x3e")),function(){console.info("---DestroyAnim--\x3e"),function(t){t&&t.particleNetwork.unbindUiActions()}(t)}}),[n.current]),(0,r.useEffect)((function(){if(t.current&&n.current){var e=n.current.offsetWidth,i=n.current.offsetHeight,r=setInterval((function(){var n,r,o=e!==t.current.offsetWidth||i!==t.current.offsetHeight;o&&(e=t.current.offsetWidth,i=t.current.offsetHeight,n=e,r=i,b.particleNetwork.removeInteractionParticle(),b.ctx.clearRect(0,0,b.canvas.width,b.canvas.height),b.canvas.width=n,b.canvas.height=r,b.particleNetwork.createParticles(),console.info("---\x3e",o))}),1e3);return function(){clearInterval(r)}}}),[t.current,n.current]),(0,i.jsx)("div",{ref:t,style:{position:"absolute",width:"100vw",height:"100vh",zIndex:-1,background:"rgb(45,45,45)"},children:(0,i.jsx)("canvas",{ref:n})})}var w=e(29163),N=e(72970),O=e(94184),P=e.n(O),M=e(36437),T=e(46819),S=e(48086),j=e(98670),I=e(32074),U=e(81096),C=e(35635),A=e(19650),Z=e(89685),F=e(41559),D=e(9669),L=e.n(D),k=e(20640),R=e.n(k),z=e(37412),W=e(28447),H=e(11163);function K(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function G(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?K(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function B(){var t=(0,l.Z)(["\n  width: 348px;\n  background: #ffffff;\n  border-radius: 8px;\n  align-items: flex-start;\n  visibility: ",";\n\n  .title {\n    width: 100%;\n    height: 65px;\n    line-height: 65px;\n    font-size: 24px;\n    font-weight: 400;\n    color: #333333;\n    text-align: left;\n    padding-left: 20px;\n  }\n\n  .file_item {\n    width: 100%;\n    padding: 16px 24px;\n    height: 78px;\n    background: #eeeeee;\n\n    .file_name {\n      width: 100%;\n      height: 22px;\n      font-size: 16px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-weight: 500;\n      color: #333333;\n      line-height: 22px;\n      overflow: hidden;\n    }\n\n    .file_size {\n      width: 100%;\n      height: 20px;\n      font-size: 14px;\n      font-weight: 400;\n      color: #333333;\n      line-height: 20px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin-top: 4px;\n    }\n  }\n\n  "," {\n    width: calc(100% - 40px);\n    max-width: 348px;\n  }\n"]);return B=function(){return t},t}var Q="Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ",Y={showUploadList:!1,name:"file",headers:{authorization:Q}},X=(0,w.ZP)(M.XW)(B(),(function(t){return t.invisible?"invisible":"visible"}),N.L);function V(){var t,n=(0,r.useContext)(z._).state.loginStatus,e=(0,N.F)().isMobile,o=(0,r.useState)(""),a=o[0],l=o[1],h=(0,r.useState)(55)[0],v=(0,r.useState)(!1),g=v[0],x=v[1],y=(0,r.useState)([]),_=y[0],b=y[1],w=(0,r.useState)(),O=w[0],M=w[1],D=(0,r.useState)("initial"),k=D[0],K=D[1],B=(0,r.useState)([]),V=B[0],q=B[1],J=function(){R()(a),S.ZP.success("\u590d\u5236\u6210\u529f")},$=function(){var t=(0,u.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,F.$0)("token",Q),t.prev=1,t.next=4,(0,Z.b6)();case 4:n=t.sent,b((0,c.Z)(n.data)),M(n.data[0]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:localStorage.removeItem("token");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),tt=function(){var t=(0,u.Z)(s().mark((function t(){var n,e,i,r,o,a,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",V[0]),t.prev=2,K("uploading"),t.next=6,L().post("".concat(null===O||void 0===O?void 0:O.host,"/api/v0/add?pin=true"),n,{headers:{authorization:Q}});case 6:return e=t.sent,i=e.data,r=i.Hash,o=i.Name,t.prev=8,(0,F.$0)("token",Q),t.next=12,(0,Z.gR)({cid:r,name:o});case 12:a=t.sent,localStorage.removeItem("token"),K("finish"),c=a.pin.cid,l("https://099equ.".concat(null===O||void 0===O?void 0:O.host.replace("https://",""),"/ipfs/").concat(c)),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(8),S.ZP.error("\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"),K("initial");case 23:t.next=29;break;case 25:t.prev=25,t.t1=t.catch(2),S.ZP.error("\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5"),K("initial");case 29:case"end":return t.stop()}}),t,null,[[2,25],[8,19]])})));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){n!=W.x.login?$():H.default.replace("/panel/fileManager")}),[]),(0,i.jsxs)("div",{className:P()(d().main,e&&d().main_mobile),children:[(0,i.jsx)(E,{}),(0,i.jsxs)("div",{className:d().content,children:[(0,i.jsx)("div",{className:d().auto_padding}),"success"!==k&&(0,i.jsxs)("div",{className:d().input_btn,children:[(0,i.jsx)("div",{className:d().baseFile}),"initial"==k&&function(){var t="en"===m.Z.language?32:38;return e&&(t=Math.round(.7*t)),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:d().inputFile,style:{fontSize:t},onClick:function(){return x(!g)},children:[(0,i.jsx)(f.OvN,{}),(0,i.jsx)("span",{children:"\u6dfb\u52a0\u6587\u4ef6"})]}),g&&(0,i.jsx)("div",{className:d().uploadFileType,children:(0,i.jsx)(j.Z,G(G({className:d().uploadFileTypeItem,action:"".concat(null===O||void 0===O?void 0:O.host,"/api/v0/add?pin=true")},Y),{},{beforeUpload:function(){var t=(0,u.Z)(s().mark((function t(n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return K("success"),q([n]),t.abrupt("return",!1);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),children:(0,i.jsxs)("div",{className:d().box,children:[(0,i.jsx)(p.oXr,{}),(0,i.jsx)("span",{className:d().uploadFileTypeItemText,children:"\u6587\u4ef6"})]})}))})]})}(),"uploading"==k&&function(){var t=e?20:25,n=e?"0 15px":"0 20px";return(0,i.jsx)("div",{className:d().inputFile,children:(0,i.jsx)(I.Z,{strokeWidth:t,style:{margin:n},strokeColor:"#333333",showInfo:!1,percent:h})})}(),"finish"==k&&(0,i.jsxs)("div",{className:d().uploadFinish,children:[(0,i.jsxs)("div",{className:d().share_link,children:[(0,i.jsx)("i",{className:d().icon,children:(0,i.jsx)(f._rq,{})}),(0,i.jsx)("span",{children:a})]}),(0,i.jsxs)("div",{className:d().btns,children:[(0,i.jsx)("div",{className:d().btn,onClick:J,children:"\u5206\u4eab\u94fe\u63a5"}),(0,i.jsx)("div",{className:d().btn2,onClick:function(){return K("initial")},children:"\u7ee7\u7eed\u6dfb\u52a0"})]})]})]}),"success"==k&&(t=_,(0,i.jsxs)(X,{invisible:!1,children:[(0,i.jsx)("div",{className:"title",children:"\u6dfb\u52a0\u6587\u4ef6"}),V.map((function(t,n){return(0,i.jsxs)("div",{className:"file_item",children:[(0,i.jsx)("div",{className:"file_name",children:t.name}),(0,i.jsx)("div",{className:"file_size",children:(0,F.qN)(t.size)})]},n)})),(0,i.jsx)("div",{style:{padding:"10px 0 0 20px"},children:(0,i.jsx)(U.Z,{overlay:(0,i.jsx)(C.Z,{children:t.map((function(t,n){return(0,i.jsx)(C.Z.Item,{onClick:function(){return M(t)},children:t.name},n)}))}),children:(0,i.jsxs)(A.Z,{children:["\u4e0a\u4f20\u8282\u70b9: ",null===O||void 0===O?void 0:O.name," ",(0,i.jsx)(f.bTu,{})]})})}),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(T.Z,{style:{width:"calc(100% - 40px)",height:36,margin:"18px 20px"},onClick:function(){return tt()},children:"\u4e0a\u4f20"})})]})),(0,i.jsxs)("div",{className:d().homeSlog,children:[(0,i.jsx)("span",{className:d().title,children:"\u767e\u5de5\u94fe\u5b58-\u521b\u65b0\u6027\u5206\u5e03\u5f0f\u5b58\u50a8"}),(0,i.jsx)("p",{className:d().info,children:"\u767e\u5de5\u94fe\u5b58\u63a2\u7d22\u4e0e\u62d3\u5bbd\u5206\u5e03\u5f0f\u5b58\u50a8\u6280\u672f\u7684\u53d1\u5c55\u6f5c\u529b\u4e0e\u5e94\u7528\u8fb9\u754c\uff0c\u4e3a\u4f01\u4e1a\u7ea7IPFS\u5b58\u50a8\u9700\u6c42\u63d0\u4f9b\u5b8c\u6574\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848\u3002"})]}),(0,i.jsx)("div",{className:d().auto_padding})]}),(0,i.jsxs)("div",{className:"text-12 text-gray-300 bottom-1 absolute h-12 md:h-auto w-full flex flex-wrap md:flex-nowrap  justify-center gap-2.5 items-center mb-2",children:[(0,i.jsx)("div",{className:"w-full text-center md:w-auto",children:"\u767e\u5de5\u667a\u8054\uff08\u4e0a\u6d77\uff09\u5de5\u4e1a\u79d1\u6280\u6709\u9650\u516c\u53f8"}),(0,i.jsx)("a",{className:"md:hover:text-white",target:"_blank",rel:"noreferrer",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2022024704",children:"\u6caaICP\u59072022024704\u53f7"}),(0,i.jsx)("a",{className:"md:hover:text-white",target:"_blank",rel:"noreferrer",href:"https://beian.miit.gov.cn/"}),(0,i.jsx)("a",{className:"md:hover:text-white",href:"/termofuse",children:"\u7528\u6237\u534f\u8bae"}),(0,i.jsx)("a",{className:"md:hover:text-white",target:"_blank",href:"/privacy",rel:"noreferrer",children:"\u9690\u79c1\u653f\u7b56"})]})]})}function q(){return(0,i.jsx)(V,{})}},89685:function(t,n,e){"use strict";e.d(n,{QI:function(){return r},qJ:function(){return o},P6:function(){return a},C2:function(){return s},S6:function(){return c},wA:function(){return u},bU:function(){return l},yB:function(){return h},b6:function(){return d},Vw:function(){return f},YP:function(){return p},gR:function(){return m},HR:function(){return v},H7:function(){return g},cV:function(){return x},Ch:function(){return y},SJ:function(){return _},Kg:function(){return b},kj:function(){return E},a$:function(){return w},l:function(){return N},ZM:function(){return O},z2:function(){return P}});var i=e(7417),r="common/user",o=function(t){return(0,i.Z)(r,t)},a="common/login",s=function(t){return(0,i.Z)(a,t)},c="common/verify/svg",u=function(t){return(0,i.Z)("".concat(c,"?mobile=").concat(t),{},{method:"get",hint:!0,loading:!0})},l="common/verify/sms",h=function(t){return(0,i.Z)(l,t,{method:"post",hint:!0,loading:!0})},d=function(){return(0,i.Z)("auth/gateway/list",{},{hint:!1,method:"get",loading:!0})},f=function(t){return(0,i.Z)("".concat("auth/file/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},p=function(){return(0,i.Z)("auth/file/list/size",{},{hint:!1,method:"get",loading:!0})},m=function(t){return(0,i.Z)("psa/pins",t,{method:"post",hint:!1,loading:!1})},v=function(){return(0,i.Z)("auth/key/list",{},{loading:!0,hint:!0,method:"get"})},g=function(){return(0,i.Z)("auth/user/profile",{},{loading:!0,hint:!0,method:"get"})},x=function(t){return(0,i.Z)("auth/password/change",t)},y=function(t){return(0,i.Z)("".concat("auth/tickets/list","?pageSize=").concat(t.pageSize,"&pageNum=").concat(t.pageNum),{},{hint:!1,method:"get",loading:!0})},_=function(t){return(0,i.Z)("auth/tickets/report",t,{method:"post",hint:!0,loading:!1})},b=function(t){return(0,i.Z)("".concat("auth/tickets/info/").concat(t),{},{method:"get",hint:!0,loading:!1})},E=function(t){return(0,i.Z)("".concat("auth/mobile/change/sms"),{mobile:t},{method:"post",hint:!0,loading:!1})},w=function(t){return(0,i.Z)("".concat("auth/mobile/change"),t,{method:"post",hint:!0,loading:!1})},N=function(t){return(0,i.Z)("".concat("auth/intention"),t,{method:"post",hint:!0,loading:!1})},O=function(t){return(0,i.Z)("".concat("auth/tickets/feedback/resolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})},P=function(t){return(0,i.Z)("".concat("auth/tickets/feedback/unresolved","/").concat(t),{},{method:"post",hint:!0,loading:!1})}},7417:function(t,n,e){"use strict";var i=e(26265),r=e(41559),o=e(48086),a=e(9669),s=e.n(a),c=e(89685);function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var h="https://beta-api.baitech-ipfs.net/",d={"Content-Type":"application/json",Accept:"*/*"},f=function(){return l(l({},d),{},{Authorization:(0,r.fO)("token")})};n.Z=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"post",hint:!0,loading:!0},i=arguments.length>3?arguments[3]:void 0;t=h+t;var r=[c.QI,c.P6,c.bU,c.S6].includes(t)?d:f();return new Promise((function(a,c){s().create({baseURL:t,timeout:1e4,withCredentials:!0})({url:t,method:e.method||"post",data:n,withCredentials:!0,headers:l(l({},r),i)}).then((function(t){200!==t.status?(c(t.data),o.ZP.error(t.data.message)):a(t.data)})).catch((function(t){e.hint&&o.ZP.error(t.response.data.message),c(t.response)}))}))}},72970:function(t,n,e){"use strict";e.d(n,{L:function(){return r},F:function(){return o}});var i=e(67294),r="@media screen and (max-width: ".concat(960,"px)");function o(){var t=(0,i.useState)(!1),n=t[0],e=t[1];return(0,i.useEffect)((function(){e(window.innerWidth<=960)})),{isMobile:n}}},41559:function(t,n,e){"use strict";e.d(n,{fO:function(){return i},$0:function(){return r},qN:function(){return o}});var i=function(t){return localStorage.getItem(t)},r=function(t,n){return localStorage.setItem(t,n)},o=function(t){var n="";if(!t)return"0kb";var e=(n=t<102.4?t.toFixed(2)+"B":t<104857.6?(t/1024).toFixed(2)+"KB":t<107374182.4?(t/1048576).toFixed(2)+"MB":t<109951162777.6?(t/1073741824).toFixed(2)+"GB":(t/1099511627776).toFixed(2)+"TB")+"",i=e.indexOf(".");return"00"==e.substr(i+1,2)?e.substring(0,i)+e.substr(i+3,2):n}},45301:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(76062)}])},93047:function(t){t.exports={main:"main_main__EJIDe",content:"main_content__Bws_C",auto_padding:"main_auto_padding__t4Aqe",input_btn:"main_input_btn__3WLF6",toast:"main_toast__SLQTy",baseFile:"main_baseFile__1k4Zo",inputFile:"main_inputFile__iLg_9",uploadFinish:"main_uploadFinish__1Mp4i",share_link:"main_share_link__1Cmdb",icon:"main_icon__1GUZ4",btns:"main_btns__19xoO",btn:"main_btn__3vSKg",btn2:"main_btn2__2GT2P",whatTips:"main_whatTips__2TGvL",homeSlog:"main_homeSlog__1_Ujs",title:"main_title__2UUUx",info:"main_info__2fS_r",main_mobile:"main_main_mobile__uJ-b-",uploadFileType:"main_uploadFileType__22_I2",uploadFileTypeItem:"main_uploadFileTypeItem__aUtXE",uploadFileTypeItemText:"main_uploadFileTypeItemText__HYWa8",box:"main_box__XoSph"}},15105:function(t,n){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var n=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||n>=e.F1&&n<=e.F12)return!1;switch(n){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=e.ZERO&&t<=e.NINE)return!0;if(t>=e.NUM_ZERO&&t<=e.NUM_MULTIPLY)return!0;if(t>=e.A&&t<=e.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===t)return!0;switch(t){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};n.Z=e},64217:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var i=e(28991),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",a="data-";function s(t,n){return 0===t.indexOf(n)}function c(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===e?{aria:!0,data:!0,attr:!0}:!0===e?{aria:!0}:(0,i.Z)({},e);var c={};return Object.keys(t).forEach((function(e){(n.aria&&("role"===e||s(e,o))||n.data&&s(e,a)||n.attr&&r.includes(e))&&(c[e]=t[e])})),c}},14453:function(){}},function(t){t.O(0,[774,158,508,433,914,598,145,895,412],(function(){return n=45301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);