(this.webpackJsonpboard_gaming=this.webpackJsonpboard_gaming||[]).push([[0],{14:function(e,n,t){e.exports=t(26)},19:function(e,n,t){},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a,r,c,i,l,u,o,m=t(0),s=t.n(m),f=t(9),g=t.n(f),p=(t(19),t(20),t(4)),d=t.n(p),b=t(10),E=t(3),v=t(1),h=t(2),j=h.a.div(a||(a=Object(v.a)(["\n  background: ",";\n  padding: 0.5em;\n  margin: 0.5em;\n  width: 20em;\n  flex-grow: 1;\n  border-radius: 25px;\n"])),(function(e){return e.isExpansion?"#119DA4":"#157F1F"})),x=h.a.div(r||(r=Object(v.a)(["\n  display: flex;\n  padding: 0.5em;\n  margin 0.5em;\n"]))),y=h.a.div(c||(c=Object(v.a)(["\n  padding-left: 2em;\n  display: inline-block;\n "]))),O=h.a.img(i||(i=Object(v.a)(["\n  object-fit: contain;\n "]))),w=h.a.h3(l||(l=Object(v.a)(["\n text-align: center;"]))),k=h.a.a(u||(u=Object(v.a)(["\n  text-decoration: none; \n  color: White; \n "]))),F=function(e){var n=e.game;return s.a.createElement(j,null,s.a.createElement(k,{href:"https://boardgamegeek.com/boardgame/".concat(n.gameId)},s.a.createElement(w,null,n.name)),s.a.createElement(x,null,s.a.createElement(O,{src:n.thumbnail,alt:"image of ".concat(n.name)}),s.a.createElement(y,null,s.a.createElement("p",null,"Players - Min: ",n.minPlayers," Max: ",n.maxPlayers),s.a.createElement("p",null,"Playing Time: ",n.playingTime," mins"),s.a.createElement("p",null,"Avg Rating: ",n.averageRating.toFixed(2)))))},S=h.a.div(o||(o=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly\n"]))),P=function(e){var n=e.games;if(!n)return"waiting...";if(0===n.length)return"no games found";var t=n.map((function(e){return s.a.createElement(F,{key:e.gameId,game:e})}));return s.a.createElement(S,null,t)},C=function(e){var n=e.handleUserSubmit,t=Object(m.useState)("earthchild316"),a=Object(E.a)(t,2),r=a[0],c=a[1];return s.a.createElement("form",null,s.a.createElement("label",{htmlFor:"player-name-input"}),s.a.createElement("input",{id:"player-name-input",type:"text",value:r,onChange:function(e){c(e.target.value)}}),s.a.createElement("input",{type:"submit",onClick:function(e){e.preventDefault(),n(r),c("")},value:"user submit"}))},I=function(){var e=Object(m.useState)(null),n=Object(E.a)(e,2),t=n[0],a=n[1],r=Object(m.useState)(null),c=Object(E.a)(r,2),i=c[0],l=c[1];Object(m.useEffect)((function(){u()}),[i]);var u=function(){var e=Object(b.a)(d.a.mark((function e(){var n,t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=10;break}return e.next=3,fetch("https://bgg-json.azurewebsites.net/collection/".concat(i));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,r=t.filter((function(e){return e.owned&&!e.isExpansion})),t.filter((function(e){return e.owned&&e.expansions})),a(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{handleUserSubmit:function(e){l(e)}}),s.a.createElement(P,{games:t}))};var T=function(){return s.a.createElement(I,null)},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};g.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root")),D()}},[[14,1,2]]]);
//# sourceMappingURL=main.9ec9a8d1.chunk.js.map