(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{143:function(e,t,c){},149:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var s=c(4),n=c(1),i=c(15),a=c(3),l=c(13),r=c(95),o=c.n(r),j=c(84),d=c(86),b=(c(143),c(0)),h=o()("http://localhost:8797",{transport:["websocket"]});function u(){var e,t,c,r,o,u,O,x,v,m,f=Object(a.h)(),p=Object(a.f)(),g=Object(i.c)((function(e){return e.getUserReducer})),k=Object(n.useState)({}),w=Object(s.a)(k,2),y=w[0],C=w[1],S=Object(n.useState)({}),_=Object(s.a)(S,2),T=_[0],E=_[1],N=Object(n.useState)(),L=Object(s.a)(N,2),D=L[0],P=L[1],U=Object(n.useState)(),A=Object(s.a)(U,2),B=A[0],F=A[1],V=Object(n.useState)("alo"),I=Object(s.a)(V,2),M=I[0],q=I[1],J=Object(n.useState)([]),H=Object(s.a)(J,2),R=H[0],W=H[1],z=Object(n.useState)(),G=Object(s.a)(z,2),K=G[0],Q=G[1],X=Object(n.useState)(),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=Object(n.useState)(!1),te=Object(s.a)(ee,2),ce=te[0],se=te[1],ne=Object(n.useState)(""),ie=Object(s.a)(ne,2),ae=ie[0],le=ie[1],re=Object(n.useState)(""),oe=Object(s.a)(re,2),je=oe[0],de=oe[1],be=Object(n.useState)([]),he=Object(s.a)(be,2),ue=he[0],Oe=he[1];console.log(g.User),Object(n.useEffect)((function(){Object(l.n)(g.User._id).then((function(e){C(e.data),console.log(e.data)}))}),[]),Object(n.useEffect)((function(){F(""),P(""),Q(""),$(""),console.log("done")}),[T]),Object(n.useEffect)((function(){h.on("like",(function(e){P(e)})),h.on("unLikePost",(function(e){F(e)})),h.on("addComment",(function(e){Q(e)})),h.on("delComment",(function(e){$(e)})),h.on("delete",(function(e){console.log(e),q(e)}))}),[]),Object(n.useEffect)((function(){M==f.id&&(p.push("/main"),alert("Bai viet da bi xoa"))}),[M]),Object(n.useEffect)((function(){Object(l.h)(f.id).then((function(e){if(e.data.data.comment){E(e.data.data),console.log(e.data.data),le(e.data.pages),de(e.data.current);for(var t=[],c=1;c<=3&&c<=e.data.pages;c++)console.log(c),t.push(c);Oe(t)}}))}),[D,B,K,Z]);var xe=null===T||void 0===T||null===(e=T.like)||void 0===e?void 0:e.filter((function(e){return e._id.includes(y._id)})).length;console.log(xe);var ve=function(e){Object(l.g)(f.id,e).then((function(t){if(E(t.data.data),de(t.data.current),Number(e)==ue[2]&&Number(e)!=t.data.pages){for(var c=Number(e),s=c+2,n=[];c<=s&&c<=t.data.pages;c++)n.push(c);Oe(n)}}))};return Object(b.jsxs)("div",{class:"container",children:[Object(b.jsx)(d.a,{}),Object(b.jsx)("main",{children:Object(b.jsxs)("div",{class:"main-container-post",children:[Object(b.jsx)("div",{class:"space"}),Object(b.jsx)("div",{class:"navigate",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("a",{href:"/main",children:"TIE - Forums"})," >> ",Object(b.jsx)("a",{href:T.space?"/main/spaces/"+T.space[0]._id:"",children:T.space?T.space[0].name:""})," >> ",Object(b.jsx)("a",{href:"#",children:null===T||void 0===T?void 0:T.title})]})}),Object(b.jsxs)("div",{class:"topic-container",children:[Object(b.jsxs)("div",{class:"head",children:[Object(b.jsx)("div",{class:"authors",children:"T\xe1c gi\u1ea3 ?"}),Object(b.jsxs)("div",{class:"content",children:["Ch\u1ee7 \u0111\u1ec1: ",null===T||void 0===T?void 0:T.title]})]}),Object(b.jsxs)("div",{class:"body",children:[Object(b.jsxs)("div",{class:"authors",children:[Object(b.jsx)("div",{class:"username",children:Object(b.jsx)("a",{href:"#",children:null===T||void 0===T||null===(t=T.author)||void 0===t?void 0:t.name})}),Object(b.jsx)("div",{children:"user"==(null===(c=T.author)||void 0===c?void 0:c.role)?"Member":"Admin"}),Object(b.jsx)("img",{src:"http://localhost:8797/"+(null===T||void 0===T||null===(r=T.author)||void 0===r?void 0:r.avatar),alt:"user avatar"}),Object(b.jsxs)("div",{children:["Posts: ",Object(b.jsx)("u",{children:null===T||void 0===T||null===(o=T.author)||void 0===o?void 0:o.userPost.length})]}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{class:"content",children:[null===T||void 0===T?void 0:T.described,Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),function(e){var t,c,s;return e.imgVideo?"png"==(null===(t=e.imgVideo)||void 0===t?void 0:t.split(".").pop())||"jpg"==(null===(c=e.imgVideo)||void 0===c?void 0:c.split(".").pop())||"jpeg"==(null===(s=e.imgVideo)||void 0===s?void 0:s.split(".").pop())?Object(b.jsx)("img",{src:"http://localhost:8797/"+e.imgVideo,height:"200px",width:"200px"}):void 0:null}(T),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),"Created ",new Date(T.created).toDateString()," at ",new Date(T.created).toLocaleTimeString()," By ",null===(u=T.author)||void 0===u?void 0:u.name,Object(b.jsxs)("div",{class:"like",style:{marginTop:"10px"},children:[Object(b.jsxs)("div",{class:"like-number",children:[Object(b.jsx)("i",{class:"far fa-thumbs-up"})," Likes: ",Object(b.jsx)("u",{children:null===T||void 0===T||null===(O=T.like)||void 0===O?void 0:O.length})]}),g.User._id==(null===(x=T.author)||void 0===x?void 0:x._id)||"admin"===g.User.role?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("button",{onClick:function(){var e=f.id;console.log(e),h.emit("deletePost",e),Object(l.c)(e).then((function(e){p.push("/main")}))},children:[Object(b.jsx)("i",{class:"far fa-trash-alt"})," Delete"]})}):null,Object(b.jsxs)("button",{onClick:xe?function(){var e={_id:y._id};Object(l.u)(f.id,e).then((function(){h.emit("unLike",e._id)})).catch((function(e){e&&alert(e)}))}:function(){var e={_id:y._id};Object(l.o)(f.id,e).then((function(){h.emit("likePost",e._id)})).catch((function(e){e&&alert(e)}))},id:xe?"cl-red":"",children:[Object(b.jsx)("i",{class:xe?"far fa-thumbs-up cl-red":"far fa-thumbs-up"}),"  Like"]})]}),Object(b.jsx)("div",{class:"comment",children:Object(b.jsxs)("button",{style:ce?{color:"red"}:{color:"white"},onClick:function(){se(!ce)},children:[Object(b.jsx)("i",{class:"far fa-comment-alt"})," Comment"]})})]})]})]}),Object(b.jsxs)("div",{class:ce?"comment-area v-block":"comment-area hide v-non",id:"comment-area",children:[Object(b.jsx)("textarea",{value:R,name:"comment",id:"",placeholder:"Comment ...",onChange:function(e){W(e.target.value)}}),Object(b.jsx)("input",{type:"submit",name:"",id:"",value:"submit",onClick:function(){console.log(y._id);var e={content:R,author:y._id};Object(l.a)(f.id,e).then(W("")),h.emit("addComment",e),se(!1)}})]}),Object(b.jsxs)("div",{class:"comments-container",children:[Object(b.jsxs)("div",{class:"head",children:[Object(b.jsx)("div",{class:"authors",children:"T\xe1c gi\u1ea3 ?"}),Object(b.jsx)("div",{class:"content",children:"Comment: "})]}),0!=(null===(v=T.comment)||void 0===v?void 0:v.length)?null===(m=T.comment)||void 0===m?void 0:m.map((function(e,t){var c,s,n,i;return console.log(e),Object(b.jsxs)("div",{class:"body",children:[Object(b.jsxs)("div",{class:"authors",children:[Object(b.jsx)("div",{class:"username-comment",children:Object(b.jsx)("a",{href:"#",children:null===(c=e.author)||void 0===c?void 0:c.name})}),Object(b.jsx)("div",{children:"user"===e.author.role?"Member":"Admin"}),Object(b.jsx)("img",{src:"http://localhost:8797/"+(null===(s=e.author)||void 0===s?void 0:s.avatar),alt:"user avatar"}),Object(b.jsxs)("div",{children:["Posts: ",Object(b.jsx)("u",{children:null===(n=e.author)||void 0===n?void 0:n.userPost.length})]}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{class:"content",children:["Created ",new Date(e.created).toDateString()," at ",new Date(e.created).toLocaleTimeString(),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{style:{marginTop:"10px"},children:e.content}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{class:"like",style:{marginTop:"30px"},children:g.User._id==(null===(i=e.author)||void 0===i?void 0:i._id)||"admin"===g.User.role?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("button",{onClick:function(){!function(e){Object(l.b)(e._id).then((function(){console.log("xoa")})).catch((function(e){e&&alert(e)})),h.emit("delComment",e._id)}(e)},children:[Object(b.jsx)("i",{class:"far fa-trash-alt"})," Delete"]})}):null})]})]})})):Object(b.jsx)("div",{class:"body",children:"B\xecnh lu\u1eadn g\xec cho t\xe1c gi\u1ea3 vui \u0111i :))"})]}),Object(b.jsxs)("div",{class:Number(ae)>0?"pagination:container":"disableOff",children:[Object(b.jsxs)("div",{class:1!=je&&je>2?"pagination:number arrow":"pagination:number arrow disableOff",onClick:function(){var e;e=Number(je)-1,Object(l.g)(f.id,e).then((function(t){if(E(t.data.data),de(t.data.current),Number(e)==ue[0]||Number(e)<ue[0]){for(var c=ue[0]-2,s=ue[0],n=[];c<=s&&c<=t.data.pages;c++)n.push(c);Oe(n)}}))},children:[Object(b.jsx)("svg",{width:"18",height:"18",children:Object(b.jsx)("use",{href:"#left"})}),Object(b.jsx)("span",{class:"arrow:text",children:"First"})]}),Object(b.jsx)("div",{class:je>2?"pagination:number":"pagination:number disableOff",children:"..."}),ue.map((function(e,t){return Object(b.jsx)("div",{class:je==e?"pagination:number isPages":"pagination:number",onClick:function(){ve(e)},children:e})})),Object(b.jsx)("div",{class:je<ae-2?"pagination:number":"pagination:number disableOff",children:"..."}),Object(b.jsxs)("div",{class:je!=ae&&ae>3?"pagination:number arrow":"pagination:number arrow disableOff",onClick:function(){ve(Number(je)+1)},children:[Object(b.jsx)("span",{class:"arrow:text",children:"Last"}),Object(b.jsx)("svg",{width:"18",height:"18",children:Object(b.jsx)("use",{href:"#right"})})]})]}),Object(b.jsxs)("svg",{class:"hide",children:[Object(b.jsx)("symbol",{id:"left",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})}),Object(b.jsx)("symbol",{id:"right",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})})]}),Object(b.jsxs)("div",{class:"comment-area hide",id:"reply-area",children:[Object(b.jsx)("textarea",{name:"reply",id:"",placeholder:"reply ..."}),Object(b.jsx)("input",{type:"submit",name:"",id:"",value:"submit"})]})]})}),Object(b.jsx)(j.a,{})]})}},84:function(e,t,c){"use strict";var s=c(26),n=c(27),i=c(29),a=c(28),l=c(1),r=c.n(l),o=(c(85),c(0)),j=function(e){Object(i.a)(c,e);var t=Object(a.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("div",{class:"main-content",id:"section@",children:[Object(o.jsxs)("div",{class:"left box-home",children:[Object(o.jsx)("h2",{children:"What is TIE?"}),Object(o.jsxs)("div",{class:"content",children:[Object(o.jsx)("p",{children:"TIE - Tech It Easy is forum which was created for technicians, tech-lovers and answers for every technical problems, questions in real life. "}),Object(o.jsxs)("div",{class:"social",children:[Object(o.jsx)("a",{href:"",children:Object(o.jsx)("span",{class:"fab fa-facebook-f"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("span",{class:"fab fa-twitter"})}),Object(o.jsx)("a",{href:"",children:Object(o.jsx)("span",{class:"fab fa-instagram"})})]})]})]}),Object(o.jsxs)("div",{class:"center box-home",children:[Object(o.jsx)("h2",{children:"Address"}),Object(o.jsxs)("div",{class:"content",children:[Object(o.jsxs)("div",{class:"place",children:[Object(o.jsx)("span",{class:"fas fa-map-marker-alt"}),Object(o.jsx)("span",{class:"text",children:"22 Th\xe0nh C\xf4ng, H\xe0 N\u1ed9i, Vi\u1ec7t Nam"})]}),Object(o.jsxs)("div",{class:"phone",children:[Object(o.jsx)("span",{class:"fas fa-phone-alt"}),Object(o.jsx)("span",{class:"text",children:"+84-918802002"})]}),Object(o.jsxs)("div",{class:"email",children:[Object(o.jsx)("span",{class:"fas fa-envelope"}),Object(o.jsx)("span",{class:"text",children:"techiteasy.mindx@gmail.com"})]})]})]}),Object(o.jsxs)("div",{class:"right box-home",children:[Object(o.jsx)("h2",{children:"Feedback"}),Object(o.jsx)("div",{class:"content",children:Object(o.jsxs)("form",{action:"#",children:[Object(o.jsxs)("div",{class:"email",children:[Object(o.jsx)("div",{class:"text",children:"Email *"}),Object(o.jsx)("input",{type:"email",required:!0})]}),Object(o.jsxs)("div",{class:"msg",children:[Object(o.jsx)("div",{class:"text",children:"Message *"}),Object(o.jsx)("textarea",{cols:"25",rows:"2.5",required:!0})]}),Object(o.jsx)("div",{class:"btn-home",children:Object(o.jsx)("button",{type:"submit",children:"Send"})})]})})]})]}),Object(o.jsx)("div",{class:"bottom",children:Object(o.jsxs)("center",{children:[Object(o.jsxs)("span",{class:"credit",children:["Created By ",Object(o.jsx)("a",{href:"../index.html",children:"Tech It Easy"})," | "]}),Object(o.jsx)("span",{class:"far fa-copyright"}),Object(o.jsx)("span",{children:" 2021 All rights reserved."})]})})]})}}]),c}(r.a.Component);t.a=j},85:function(e,t,c){},86:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(1);var s=c(3),n=c(0);function i(){Object(s.f)();return Object(n.jsxs)("header",{children:[Object(n.jsx)("a",{href:"/main",children:Object(n.jsx)("img",{src:"/assets/images/Logo.png",class:"logo",alt:"Logo"})}),Object(n.jsxs)("div",{class:"menu",children:[Object(n.jsx)("input",{type:"checkbox",id:"check"}),Object(n.jsx)("label",{for:"check",class:"check-btn",children:Object(n.jsx)("i",{class:"fa fa-bars"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"./admin",children:"Admin"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/userprofile",children:"Account"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#section@",children:"Feedback"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{onClick:function(){localStorage.clear(),window.location.reload()},children:"Sign Out"})})]})]})]})}}}]);
//# sourceMappingURL=7.96fc35fa.chunk.js.map