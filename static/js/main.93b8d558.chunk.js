(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=(n(94),n(61)),o=n(24),s=n(15),u=n.n(s),m=n(27),d=n(22),h=n(29),f=n(25),p="https://cors-anywhere-anton.herokuapp.com/",g=function(){var e=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(p+"http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/votec?loser=".concat(n,"&winner=").concat(t)).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/cuisinec/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var E=function(e){var t=e.url,n=e.height,a=e.width;return r.a.createElement("img",{style:{width:a,height:n,objectFit:"cover"},src:t,alt:t})};function b(e){return e[Math.floor(Math.random()*e.length)]}function y(e,t){return e.filter((function(e){return e!==t}))}var w=function(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)([]),s=Object(d.a)(l,2),p=s[0],w=s[1],j=Object(a.useState)([]),k=Object(d.a)(j,2),O=k[0],x=k[1],S=Object(a.useState)(0),A=Object(d.a)(S,2),I=A[0],z=A[1],B=Object(a.useState)(0),M=Object(d.a)(B,2),D=M[0],F=M[1];return Object(a.useMemo)(Object(m.a)(u.a.mark((function e(){var t,n,a,r,c,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,n=Array.from(Array(11).keys()),a=n.sort((function(){return.5-Math.random()})).slice(0,2),r=Object(d.a)(a,2),c=r[0],i=r[1],z(c),F(i),l=y(n,c),l=y(l,i),w(t),x(l);case 11:case"end":return e.stop()}}),e)}))),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{paddingTop:"6%",paddingBottom:"4%",textAlign:"center",fontSize:36}},"\u54ea\u500b\u597d\u5403"),0===p.length?r.a.createElement("div",{style:{paddingTop:"6%",paddingBottom:"4%",textAlign:"center",fontSize:20}},"Loading..."):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:"3%",display:"inline-block"}},r.a.createElement(f.b,{style:{maxWidth:"650"}},r.a.createElement(h.a,{onClick:function(){if(g(p[I].ID,p[D].ID),0!==O.length){var e=b(O),t=y(O,e);x(t),F(e)}else i(!0)}},r.a.createElement(f.d,null,"\u9078\u9805A"),r.a.createElement(E,{width:350,height:300,url:0===p.length?"https://place-hold.it/300x200":p[I].Image}),r.a.createElement(f.c,null,r.a.createElement("div",{style:{fontSize:25}},0===p.length?"":p[I].Name))))),r.a.createElement("div",{style:{padding:"3%",display:"inline-block"}},r.a.createElement(f.b,{style:{maxWidth:"500"}},r.a.createElement(h.a,{onClick:function(){if(g(p[D].ID,p[I].ID),0!==O.length){var e=b(O),t=y(O,e);x(t),z(e)}else i(!0)}},r.a.createElement(f.d,null,"\u9078\u9805B"),r.a.createElement(E,{width:350,height:300,url:0===p.length?"https://place-hold.it/300x200":p[D].Image}),r.a.createElement(f.c,null,r.a.createElement("div",{style:{fontSize:25}},0===p.length?"":p[D].Name)))))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{padding:"3%",display:"inline-block"}},c?r.a.createElement(f.a,{display:"true",onClick:function(){return e.push("/ranking")}}," ","\u770b\u7d50\u679c"," "):r.a.createElement(r.a.Fragment,null))))};var j=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useMemo)(Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,n=t.sort((function(e,t){return e.Score>t.Score?-1:1})),c(n);case 5:case"end":return e.stop()}}),e)}))),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"6%",textAlign:"center",fontSize:36}},"\u5c0f\u5403\u6392\u884c\u699c"),r.a.createElement(h.b,{fields:["\u6392\u540d","","\u540d\u7a31","\u5206\u6578","\u51fa\u8cfd"],entries:n.slice(0,10),renderEntry:function(e,t){return[t+1,r.a.createElement(E,{url:e.Image,width:200,height:120}),r.a.createElement("div",{style:{fontSize:25}}," ",e.Name," "),e.Score,e.Played]},entriesPerPage:5}))};n(171),n(172);var k=function(){return r.a.createElement(h.c,null,r.a.createElement(l.a,{basename:"/opynmonitor.xyz"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/ranking/",children:r.a.createElement(j,null)}),r.a.createElement(o.a,{path:"/",children:r.a.createElement(w,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){e.exports=n(173)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.93b8d558.chunk.js.map