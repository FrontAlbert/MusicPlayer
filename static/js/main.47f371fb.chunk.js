(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=a(6),l=a.n(i),s=a(7),u=a(2),m=a(4),p=(a(17),a(5)),d=a(3),f=function(e,t){if(e){var a=t.current.play();void 0!==a&&a.then((function(e){t.current.play()})).catch((function(e){return console.log(e)}))}},v=function(e){var t=e.isPlaying,a=e.setIsPlaying,c=e.audioRef,o=e.songInfo,i=e.setSongInfo,v=e.currentSong,h=e.songs,g=e.setCurrentSong,b=e.setSongs,y=Object(n.useState)(!1),E=Object(m.a)(y,2),j=E[0],S=E[1],O=function(e){var t=h.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));b(t)},k={transform:"translateX(".concat(o.animationPercentage,"%)")};function w(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var x=function(){var e=Object(s.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=h.findIndex((function(e){return e.id===v.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,g(h[(n+1)%h.length]);case 4:O(h[(n+1)%h.length]);case 5:if("skip-back"!==a){e.next=15;break}if((n-1)%h.length!==-1){e.next=12;break}return e.next=9,g(h[h.length-1]);case 9:return O(h[h.length-1]),f(t,c),e.abrupt("return");case 12:return e.next=14,g(h[(n-1)%h.length]);case 14:O(h[(n-1)%h.length]);case 15:t&&c.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"time-control"},r.a.createElement("p",null,w(o.currentTime)),r.a.createElement("div",{style:{background:"linear-gradient(to right, ".concat(v.color[0],",").concat(v.color[1],")")},className:"track"},r.a.createElement("input",{value:o.currentTime,type:"range",max:o.duration||0,min:0,onChange:function(e){c.current.currentTime=e.target.value,i(Object(u.a)(Object(u.a)({},o),{},{currentTime:e.target.value}))}}),r.a.createElement("div",{style:k,className:"animate-track"})),r.a.createElement("p",null,o.duration?w(o.duration):"0:00")),r.a.createElement("div",{className:"play-control"},r.a.createElement(p.a,{onClick:function(){return x("skip-back")},className:"skip-back",size:"2x",icon:d.a}),r.a.createElement(p.a,{onClick:function(){t?(c.current.pause(),a(!t)):(c.current.play(),a(!t))},className:"play",size:"2x",icon:t?d.d:d.e}),r.a.createElement(p.a,{className:"skip-forward",size:"2x",icon:d.b,onClick:function(){return x("skip-forward")}}),r.a.createElement(p.a,{onClick:function(){return S(!j)},icon:d.f}),j&&r.a.createElement("input",{onChange:function(e){var t=e.target.value;c.current.volume=t,i(Object(u.a)(Object(u.a)({},o),{},{volume:t}))},value:o.volume,max:"1",min:"0",step:"0.01",type:"range"})))},h=function(e){var t=e.currentSong,a=e.isPlaying;return r.a.createElement("div",{className:"song-container"},r.a.createElement("img",{className:a?"rotateSong":"",src:t.cover,alt:""}),r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.artist))},g=function(e){var t=e.name,a=e.artist,n=e.cover,c=e.id,o=e.setCurrentSong,i=e.songs,l=e.audioRef,s=e.isPlaying,m=e.setSongs,p=e.active;return r.a.createElement("div",{onClick:function(){var e=i.filter((function(e){return e.id===c}));o(Object(u.a)({},e[0]));var t=i.map((function(e){return e.id===c?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})}));m(t),f(s,l)},className:"library-song ".concat(p?"selected":"")},r.a.createElement("img",{src:n,alt:""}),r.a.createElement("div",{className:"song-description"},r.a.createElement("h3",null,t),r.a.createElement("h4",null,a)))},b=function(e){var t=e.songs,a=e.setCurrentSong,n=e.audioRef,c=e.isPlaying,o=e.setSongs,i=e.libraryStatus;return r.a.createElement("div",{className:"library ".concat(i?"active-library":" ")},r.a.createElement("h2",null,"Library"),r.a.createElement("div",{className:"library-songs"},t.map((function(e){return r.a.createElement(g,{songs:t,cover:e.cover,name:e.name,artist:e.artist,active:e.active,key:e.id,id:e.id,setCurrentSong:a,audioRef:n,isPlaying:c,setSongs:o})}))))},y=function(e){var t=e.setLibraryStatus,a=e.libraryStatus;return r.a.createElement("nav",null,r.a.createElement("h1",null,"Waves"),r.a.createElement("button",{className:a?"library-active":"",onClick:function(){t(!a)}},"Library",r.a.createElement(p.a,{icon:d.c})))},E=a(25);var j=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(E.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(E.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(E.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(E.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(E.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(E.a)(),active:!1}]};var S=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(j()),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(c[0]),p=Object(m.a)(i,2),d=p[0],g=p[1],E=Object(n.useState)(!1),S=Object(m.a)(E,2),O=S[0],k=S[1],w=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0,volume:0}),x=Object(m.a)(w,2),C=x[0],N=x[1],P=Object(n.useState)(!1),A=Object(m.a)(P,2),I=A[0],M=A[1],R=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),r=Math.round(a),c=Math.round(n/r*100);N(Object(u.a)(Object(u.a)({},C),{},{currentTime:t,duration:a,animationPercentage:c,volume:e.target.volume}))},T=function(){var t=Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.findIndex((function(e){return e.id===d.id})),t.next=3,g(c[(a+1)%c.length]);case 3:return f(O,e),t.abrupt("return");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App ".concat(I?"library-active":"")},r.a.createElement(y,{libraryStatus:I,setLibraryStatus:M}),r.a.createElement(h,{isPlaying:O,currentSong:d}),r.a.createElement(v,{audioRef:e,setIsPlaying:k,currentSong:d,isPlaying:O,songInfo:C,setSongInfo:N,songs:c,setSongs:o,setCurrentSong:g}),r.a.createElement(b,{songs:c,setCurrentSong:g,audioRef:e,isPlaying:O,setSongs:o,libraryStatus:I}),r.a.createElement("audio",{onLoadedMetadata:R,onTimeUpdate:R,ref:e,src:d.audio,onEnded:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.47f371fb.chunk.js.map