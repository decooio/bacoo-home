(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3669],{93669:function(t,e,i){"use strict";i.d(e,{F:function(){return G},Z:function(){return K}});var n=i(85893),s=i(26265),a=i(809),r=i.n(a),o=i(71385),c=i(92447),h=i(27261),l=i(93047),u=i.n(l),p=i(86893),d=i(45155),f=i(67294),v=i(47412),m=function(){};m.prototype.init=function(t,e){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new _(this,e),this};var x=function(t,e,i){this.isFocus=!1,this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=y(this.network.options.particleColors),this.radius=b(1.5,2.5),this.opacity=0,this.x=e||Math.random()*this.canvas.width,this.y=i||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};x.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},x.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var _=function(t,e){this.options={velocity:.5,density:13e3,netLineDistance:220,netLineDistanceFocus:300,netLineColor:"#999999",netLineColorFocus:"#999999",particleColors:["#888888"]},this.canvas=t.canvas,this.ctx=t.ctx,this.et=e,this.init()};_.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},_.prototype.createParticles=function(t){var e=this;this.particles=[];var i=this.canvas.width*this.canvas.height/this.options.density;if(t){var n=0;clearInterval(this.createIntervalId);for(var s=0;s<i;s++)this.particles.push(new x(this));this.createIntervalId=setInterval(function(){n<i-1?this.particles.push(new x(this)):clearInterval(e.createIntervalId),n++}.bind(this),250)}else for(var a=0;a<i;a++)this.particles.push(new x(this))},_.prototype.createInteractionParticle=function(){return this.interactionParticle=new x(this),this.interactionParticle.isFocus=!0,this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},_.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},_.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var e=this.particles[t],i=this.particles.length-1;i>t;i--){var n,s=this.particles[i],a=e.isFocus||s.isFocus,r=a?this.options.netLineDistanceFocus:this.options.netLineDistance,o=a?this.options.netLineColorFocus:this.options.netLineColor,c=Math.abs(e.x-s.x),h=Math.abs(e.y-s.y);Math.max(c,h)>r||((n=Math.sqrt(Math.pow(c,2)+Math.pow(h,2)))>r||(this.ctx.beginPath(),this.ctx.strokeStyle=o,this.ctx.globalAlpha=(r-n)/r*e.opacity*s.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()))}for(var l=0;l<this.particles.length;l++)this.particles[l].update(),this.particles[l].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},_.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var e=0,i=this.spawnQuantity,n=setInterval(function(){if(this.mouseIsDown){1===e&&(i=1);for(var t=0;t<i;t++)this.interactionParticle&&this.particles.push(new x(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(n);e++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){setTimeout(function(){if(!this.touchIsMoving)for(var e=0;e<this.spawnQuantity;e++)this.particles.push(new x(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),console.info("---setMouseLis--\x3e",this.et),this.et.addEventListener("mousemove",this.onMouseMove),this.et.addEventListener("touchmove",this.onTouchMove),this.et.addEventListener("mouseup",this.onMouseUp),this.et.addEventListener("mouseout",this.onMouseOut),this.et.addEventListener("touchend",this.onTouchEnd)},_.prototype.unbindUiActions=function(){this.et&&(this.et.removeEventListener("mousemove",this.onMouseMove),this.et.removeEventListener("touchmove",this.onTouchMove),this.et.removeEventListener("mouseup",this.onMouseUp),this.et.removeEventListener("mouseout",this.onMouseOut),this.et.removeEventListener("touchend",this.onTouchEnd))};var b=function(t,e,i){var n=Math.random()*(e-t)+t;return i&&(n=Math.round(n)),n},y=function(t){return t[Math.floor(Math.random()*t.length)]},g=new m;function w(){var t=(0,f.useRef)(),e=(0,f.useRef)();return(0,f.useEffect)((function(){var t,i,n;return e.current&&(i=e.current,n=document.body,t=g.init(i,n),window.__bgAnim=t,console.info("---initBgAnim--\x3e")),function(){console.info("---DestroyAnim--\x3e"),function(t){t&&t.particleNetwork.unbindUiActions()}(t)}}),[e.current]),(0,f.useEffect)((function(){if(t.current&&e.current){var i=e.current.offsetWidth,n=e.current.offsetHeight,s=setInterval((function(){var e,s,a=i!==t.current.offsetWidth||n!==t.current.offsetHeight;a&&(i=t.current.offsetWidth,n=t.current.offsetHeight,e=i,s=n,g.particleNetwork.removeInteractionParticle(),g.ctx.clearRect(0,0,g.canvas.width,g.canvas.height),g.canvas.width=e,g.canvas.height=s,g.particleNetwork.createParticles(),console.info("---\x3e",a))}),1e3);return function(){clearInterval(s)}}}),[t.current,e.current]),(0,n.jsx)("div",{ref:t,style:{position:"absolute",width:"100vw",height:"100vh",zIndex:-1,background:"rgb(45,45,45)"},children:(0,n.jsx)("canvas",{ref:e})})}var j=i(29163),N=i(72970),M=i(94184),I=i.n(M),k=i(36437),P=i(46819),T=i(48086),F=i(59713),S=i(54458),Z=i(56378),E=i(31268),O=i(19650),z=i(43803),L=i(41559),U=i(9669),D=i.n(U),C=i(20640),A=i.n(C),R=i(37412),W=i(28447),Y=i(11163);function X(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function J(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?X(Object(i),!0).forEach((function(e){(0,s.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function Q(){var t=(0,h.Z)(["\n  position: absolute;\n  width: 100%;\n  top: -55px;\n  text-align: center;\n  left: 50%;\n  transform: translateX(-53%);\n  color: #fff;\n  font-size: 24px;\n"]);return Q=function(){return t},t}function q(){var t=(0,h.Z)(["\n  width: 348px;\n  background: #ffffff;\n  border-radius: 8px;\n  align-items: flex-start;\n  visibility: ",";\n\n  .title {\n    width: 100%;\n    height: 65px;\n    line-height: 65px;\n    font-size: 24px;\n    font-weight: 400;\n    color: #333333;\n    text-align: left;\n    padding-left: 20px;\n  }\n\n  .file_item {\n    width: 100%;\n    padding: 16px 24px;\n    height: 78px;\n    background: #eeeeee;\n\n    .file_name {\n      width: 100%;\n      height: 22px;\n      font-size: 16px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-weight: 500;\n      color: #333333;\n      line-height: 22px;\n      overflow: hidden;\n    }\n\n    .file_size {\n      width: 100%;\n      height: 20px;\n      font-size: 14px;\n      font-weight: 400;\n      color: #333333;\n      line-height: 20px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin-top: 4px;\n    }\n  }\n\n  "," {\n    width: calc(100% - 40px);\n    max-width: 348px;\n  }\n"]);return q=function(){return t},t}var G=104857600,H="Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ",V={showUploadList:!1,name:"file",headers:{authorization:H}},B=(0,j.ZP)(k.XW)(q(),(function(t){return t.invisible?"invisible":"visible"}),N.L),$=j.ZP.span(Q());function K(){var t,e=(0,f.useContext)(R._).state.loginStatus,i=(0,N.F)().isMobile,s=(0,f.useState)(""),a=s[0],h=s[1],l=(0,f.useState)(!1),m=l[0],x=l[1],_=(0,f.useState)([]),b=_[0],y=_[1],g=(0,f.useState)(),j=g[0],M=g[1],k=(0,f.useState)("initial"),U=k[0],C=k[1],X=(0,f.useState)([]),Q=X[0],q=X[1],K=(0,f.useState)(""),tt=K[0],et=K[1],it=(0,f.useState)(0),nt=it[0],st=it[1],at=(0,f.useState)(!1),rt=at[0],ot=at[1],ct=(0,f.useState)(0),ht=ct[0],lt=ct[1],ut=function(){q([]),et(""),st(0),x(!1)},pt=function(){A()(a),ot(!0),setTimeout((function(){ot(!1)}),1500)},dt=function(){var t=(0,c.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,L.$0)("token",H),t.prev=1,t.next=4,(0,z.b6)();case 4:e=t.sent,y((0,o.Z)(e.data)),M(e.data[0]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:localStorage.removeItem("token");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),ft=function(){var t=(0,c.Z)(r().mark((function t(){var e,i,n,s,a,o,c,l,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(nt>G)){t.next=3;break}return T.ZP.error("\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7100M"),t.abrupt("return");case 3:return e=new FormData,Q.forEach((function(t){e.append("file",t)})),t.prev=5,C("uploading"),t.next=9,D().post("".concat(null===j||void 0===j?void 0:j.host,"/api/v0/add?pin=true"),e,{headers:{authorization:H},onUploadProgress:function(t){if(t.lengthComputable){var e=t.loaded/t.total*100|0;lt(e)}}});case 9:return i=t.sent,n="",s="","string"==typeof i.data?(a=i.data.replace("}\n{","},{"),o=JSON.parse("[".concat(a,"]")),c=o[o.length-1],n=c.Hash,s=c.Name):(n=i.data.Hash,s=i.data.Name),t.prev=13,(0,L.$0)("token",H),t.next=17,(0,z.gR)({cid:n,name:s});case 17:l=t.sent,localStorage.removeItem("token"),C("finish"),u=l.pin.cid,h("https://099equ.".concat(null===j||void 0===j?void 0:j.host.replace("https://",""),"/ipfs/").concat(u)),t.next=30;break;case 24:t.prev=24,t.t0=t.catch(13),ut(),T.ZP.error("\u670d\u52a1\u5668\u5f02\u5e38,\u8bf7\u7a0d\u540e\u518d\u8bd5"),C("initial"),lt(0);case 30:t.next=38;break;case 32:t.prev=32,t.t1=t.catch(5),ut(),T.ZP.error("\u670d\u52a1\u5668\u5f02\u5e38,\u8bf7\u7a0d\u540e\u518d\u8bd5"),C("initial"),lt(0);case 38:case"end":return t.stop()}}),t,null,[[5,32],[13,24]])})));return function(){return t.apply(this,arguments)}}();return(0,f.useEffect)((function(){e!=W.x.login?dt():Y.default.replace("/panel/fileManager")}),[]),(0,f.useEffect)((function(){var t=Q.map((function(t){return t.size})).reduce((function(t,e){return t+e}),0);st(t)}),[Q]),(0,n.jsxs)("div",{className:I()(u().main,i&&u().main_mobile),children:[(0,n.jsx)(w,{}),(0,n.jsxs)("div",{className:u().content,children:[(0,n.jsx)("div",{className:u().auto_padding}),"success"!==U&&(0,n.jsxs)("div",{className:u().input_btn,children:[(0,n.jsx)("div",{className:u().baseFile}),"initial"==U&&function(){var t="en"===v.Z.language?32:38;return i&&(t=Math.round(.7*t)),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:u().inputFile,style:{fontSize:t},onClick:function(){return x(!m)},children:[(0,n.jsx)(p.OvN,{}),(0,n.jsx)("span",{style:{fontSize:"32px"},children:"\u6dfb\u52a0\u6587\u4ef6"})]}),m&&(0,n.jsxs)("div",{className:u().uploadFileType,children:[(0,n.jsx)(F.Z,J(J({className:u().uploadFileTypeItem,action:"".concat(null===j||void 0===j?void 0:j.host,"/api/v0/add?pin=true")},V),{},{beforeUpload:function(){var t=(0,c.Z)(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C("success"),q([e]),t.abrupt("return",!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:(0,n.jsxs)("div",{className:u().box,children:[(0,n.jsx)(d.oXr,{}),(0,n.jsx)("span",{className:u().uploadFileTypeItemText,children:"\u6587\u4ef6"})]})})),(0,n.jsx)(F.Z,J(J({className:u().uploadFileTypeItem,directory:!0},V),{},{beforeUpload:function(){var t=(0,c.Z)(r().mark((function t(e){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return et(e.webkitRelativePath.substring(0,e.webkitRelativePath.indexOf("/"))),(i=Q).push(e),q((0,o.Z)(i)),C("success"),t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:(0,n.jsxs)("div",{className:u().box,children:[(0,n.jsx)(d.DId,{}),(0,n.jsx)("span",{className:u().uploadFileTypeItemText,children:"\u6587\u4ef6\u5939"})]})}))]})]})}(),"uploading"==U&&function(){var t=i?20:25,e=i?"0 15px":"0 20px";return(0,n.jsx)("div",{className:u().inputFile,children:(0,n.jsx)(S.Z,{strokeWidth:t,style:{margin:e},strokeColor:"#333333",showInfo:!1,percent:ht})})}(),"finish"==U&&(0,n.jsxs)("div",{children:[rt&&(0,n.jsx)($,{children:"\u5df2\u590d\u5236\u94fe\u63a5"}),(0,n.jsxs)("div",{className:u().uploadFinish,children:[(0,n.jsxs)("div",{className:u().share_link,children:[(0,n.jsx)("i",{className:u().icon,children:(0,n.jsx)(p._rq,{})}),(0,n.jsx)("span",{children:a})]}),(0,n.jsxs)("div",{className:u().btns,children:[(0,n.jsx)("div",{className:u().btn,onClick:pt,children:"\u5206\u4eab\u94fe\u63a5"}),(0,n.jsx)("div",{className:u().btn2,onClick:function(){ut(),lt(0),C("initial")},children:"\u7ee7\u7eed\u6dfb\u52a0"})]})]})]})]}),"success"==U&&(t=b,(0,n.jsxs)(B,{invisible:!1,children:[(0,n.jsx)("div",{className:"title",children:tt&&nt?"\u6dfb\u52a0\u6587\u4ef6\u5939":"\u6dfb\u52a0\u6587\u4ef6"}),tt&&nt?(0,n.jsxs)("div",{className:"file_item",children:[(0,n.jsxs)("div",{className:"file_name",children:[tt," \uff08",Q.length,"\u4e2a\u6587\u4ef6\uff09"]}),(0,n.jsx)("div",{className:"file_size",children:(0,L.qN)(nt)})]}):(0,n.jsx)("div",{style:{width:" 100%"},children:Q.map((function(t,e){return(0,n.jsxs)("div",{className:"file_item",children:[(0,n.jsx)("div",{className:"file_name",children:t.name}),(0,n.jsx)("div",{className:"file_size",children:(0,L.qN)(t.size)})]},e)}))}),(0,n.jsx)("div",{style:{padding:"10px 0 0 20px"},children:(0,n.jsx)(Z.Z,{overlay:(0,n.jsx)(E.Z,{children:t.map((function(t,e){return(0,n.jsx)(E.Z.Item,{onClick:function(){return M(t)},children:t.name},e)}))}),children:(0,n.jsxs)(O.Z,{children:["\u4e0a\u4f20\u8282\u70b9: ",null===j||void 0===j?void 0:j.name," ",(0,n.jsx)(p.bTu,{})]})})}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(P.Z,{style:{width:"calc(100% - 40px)",height:36,margin:"18px 20px"},onClick:function(){ft()},children:"\u4e0a\u4f20"})})]})),(0,n.jsxs)("div",{className:u().homeSlog,children:[(0,n.jsx)("span",{className:u().title,children:"\u767e\u5de5\u94fe\u5b58-\u521b\u65b0\u6027\u5206\u5e03\u5f0f\u5b58\u50a8"}),(0,n.jsx)("p",{className:u().info,children:"\u767e\u5de5\u94fe\u5b58\u63a2\u7d22\u4e0e\u62d3\u5bbd\u5206\u5e03\u5f0f\u5b58\u50a8\u6280\u672f\u7684\u53d1\u5c55\u6f5c\u529b\u4e0e\u5e94\u7528\u8fb9\u754c\uff0c\u4e3a\u4f01\u4e1a\u7ea7IPFS\u5b58\u50a8\u9700\u6c42\u63d0\u4f9b\u5b8c\u6574\u53ef\u7528\u7684\u89e3\u51b3\u65b9\u6848\u3002"})]}),(0,n.jsx)("div",{className:u().auto_padding})]}),(0,n.jsxs)("div",{className:"text-12 text-gray-300 bottom-1 absolute h-12 md:h-auto w-full flex flex-wrap md:flex-nowrap  justify-center gap-2.5 items-center mb-2",style:{fontSize:"14px",color:"#999999"},children:[(0,n.jsx)("div",{className:"w-full text-center md:w-auto",children:"\u767e\u5de5\u667a\u8054\uff08\u4e0a\u6d77\uff09\u5de5\u4e1a\u79d1\u6280\u6709\u9650\u516c\u53f8"}),(0,n.jsx)("a",{className:"md:hover:text-white",style:{fontSize:"14px"},target:"_blank",rel:"noreferrer",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2022024704",children:"\u6caaICP\u59072022024704\u53f7"}),(0,n.jsx)("a",{className:"md:hover:text-white",target:"_blank",rel:"noreferrer",href:"https://beian.miit.gov.cn/"}),(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",className:"md:hover:text-white",href:"/termofuse",children:"\u7528\u6237\u534f\u8bae"}),(0,n.jsx)("a",{className:"md:hover:text-white",target:"_blank",href:"/privacy",rel:"noreferrer",children:"\u9690\u79c1\u653f\u7b56"})]})]})}},93047:function(t){t.exports={main:"main_main__EJIDe",content:"main_content__Bws_C",auto_padding:"main_auto_padding__t4Aqe",input_btn:"main_input_btn__3WLF6",toast:"main_toast__SLQTy",baseFile:"main_baseFile__1k4Zo",inputFile:"main_inputFile__iLg_9",uploadFinish:"main_uploadFinish__1Mp4i",share_link:"main_share_link__1Cmdb",icon:"main_icon__1GUZ4",btns:"main_btns__19xoO",btn:"main_btn__3vSKg",btn2:"main_btn2__2GT2P",whatTips:"main_whatTips__2TGvL",homeSlog:"main_homeSlog__1_Ujs",title:"main_title__2UUUx",info:"main_info__2fS_r",main_mobile:"main_main_mobile__uJ-b-",uploadFileType:"main_uploadFileType__22_I2",uploadFileTypeItem:"main_uploadFileTypeItem__aUtXE",uploadFileTypeItemText:"main_uploadFileTypeItemText__HYWa8",box:"main_box__XoSph"}}}]);