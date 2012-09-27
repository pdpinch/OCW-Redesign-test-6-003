(function(){var l=void 0,n=!0,p=null,r=!1,s=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return t.apply(p,arguments)},ea=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var w=document,fa=window;var x=function(a,b){this.width=a;this.height=b};x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function y(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var z=function(a,b,c){a.addEventListener?a.addEventListener(b,c,r):a.attachEvent&&a.attachEvent("on"+b,c)},A=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,r):a.detachEvent&&a.detachEvent("on"+b,c)},ga=function(){var a=B;try{return!!a.location.href||""===a.location.href}catch(b){return r}};var ha=!!window.google_async_iframe_id,B=ha&&window.parent||window,C=function(){if(ha&&!ga()){for(var a="."+w.domain;2<a.split(".").length&&!ga();)w.domain=a=a.substr(a.indexOf(".")+1),B=window.parent;ga()||(B=window)}return B};var D=function(a,b){this.x=a!==l?a:0;this.y=b!==l?b:0};var E,ia,F,ja,ka=function(){return s.navigator?s.navigator.userAgent:p};ja=F=ia=E=r;var G;if(G=ka()){var la=s.navigator;E=0==G.indexOf("Opera");ia=!E&&-1!=G.indexOf("MSIE");F=!E&&-1!=G.indexOf("WebKit");ja=!E&&!F&&"Gecko"==la.product}var H=E,I=ia,L=ja,M=F,ma;
a:{var N="",O;if(H&&s.opera)var na=s.opera.version,N="function"==typeof na?na():na;else if(L?O=/rv\:([^\);]+)(\)|;)/:I?O=/MSIE\s+([^\);]+)(\)|;)/:M&&(O=/WebKit\/(\S+)/),O)var oa=O.exec(ka()),N=oa?oa[1]:"";if(I){var pa,qa=s.document;pa=qa?qa.documentMode:l;if(pa>parseFloat(N)){ma=String(pa);break a}}ma=N}
var ra=ma,sa={},ta=function(a){var b;if(!(b=sa[a])){b=0;for(var c=String(ra).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",h=e[f]||"",j=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var i=j.exec(g)||["","",""],m=k.exec(h)||["","",""];if(0==i[0].length&&0==m[0].length)break;b=((0==i[1].length?0:parseInt(i[1],10))<(0==m[1].length?0:parseInt(m[1],10))?-1:(0==i[1].length?
0:parseInt(i[1],10))>(0==m[1].length?0:parseInt(m[1],10))?1:0)||((0==i[2].length)<(0==m[2].length)?-1:(0==i[2].length)>(0==m[2].length)?1:0)||(i[2]<m[2]?-1:i[2]>m[2]?1:0)}while(0==b)}b=sa[a]=0<=b}return b},ua={},P=function(a){return ua[a]||(ua[a]=I&&!!document.documentMode&&document.documentMode>=a)};var va;!I||P(9);!L&&!I||I&&P(9)||L&&ta("1.9.1");I&&ta("9");var T=function(a){return a?new wa(S(a)):va||(va=new wa)},S=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},wa=function(a){this.p=a||s.document||document};wa.prototype.createElement=function(a){return this.p.createElement(a)};var za=function(a){var b=a.p,a=!M&&"CSS1Compat"==b.compatMode?b.documentElement:b.body,b=b.parentWindow||b.defaultView;return new D(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var U=function(a,b,c,e){this.top=a;this.right=b;this.bottom=c;this.left=e};var V=function(a,b){var c;a:{c=S(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,p))){c=c[b]||c.getPropertyValue(b)||"";break a}c=""}return c||(a.currentStyle?a.currentStyle[b]:p)||a.style&&a.style[b]},Aa=function(a){var b=a.getBoundingClientRect();I&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},Ba=function(a){if(I&&!P(8))return a.offsetParent;for(var b=S(a),c=V(a,"position"),
e="fixed"==c||"absolute"==c,a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=V(a,"position"),e=e&&"static"==c&&a!=b.documentElement&&a!=b.body,!e&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return p},Ca=function(a){var b,c=S(a),e=V(a,"position"),d=L&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==e&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),f=new D(0,0),g;b=c?S(c):document;if(g=I)if(g=!P(9))g="CSS1Compat"!=T(b).p.compatMode;
g=g?b.body:b.documentElement;if(a==g)return f;if(a.getBoundingClientRect)b=Aa(a),a=za(T(c)),f.x=b.left+a.x,f.y=b.top+a.y;else if(c.getBoxObjectFor&&!d)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),f.x=b.screenX-a.screenX,f.y=b.screenY-a.screenY;else{d=a;do{f.x+=d.offsetLeft;f.y+=d.offsetTop;d!=a&&(f.x+=d.clientLeft||0,f.y+=d.clientTop||0);if(M&&"fixed"==V(d,"position")){f.x+=c.body.scrollLeft;f.y+=c.body.scrollTop;break}d=d.offsetParent}while(d&&d!=a);if(H||M&&"absolute"==e)f.y-=c.body.offsetTop;
for(d=a;(d=Ba(d))&&d!=c.body&&d!=g;)if(f.x-=d.scrollLeft,!H||"TR"!=d.tagName)f.y-=d.scrollTop}return f},Da=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var W=function(a,b,c,e,d,f){this.i=a;this.v=(a.bottom-a.top)*(a.right-a.left);this.j=this.g=-1;this.b=[0,0,0,0,0];this.e=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.k="";this.n=r;this.u=n;this.w=c;this.h=this.a=-1;this.r=b;this.f=0;this.m=e;this.s=d||"";this.t=f||"";this.q=function(){};this.element=p;this.l=0;this.c=-1;this.z=-1!=b.indexOf("39482001");this.A=0},Ea=new U(0,0,0,0);
W.prototype.update=function(a,b,c){var e=this.i,d=a-this.w||1;this.w=a;var f=Math.max(e.top,b.top),g=Math.min(e.bottom,b.bottom),h=-1,j=-1;if(f<=g){var k=Math.max(e.left,b.left),e=Math.min(e.right,b.right);k<=e&&(f=(g-f)*(e-k)/this.v,h=1<=f?0:0.75<=f?1:0.5<=f?2:0.25<=f?3:4,0>this.g&&(this.g=a),this.j=a,0.5<=f&&(j=100*this.v/((b.bottom-b.top)*(b.right-b.left)),j=20<=j?0:10<=j?1:5<=j?2:2.5<=j?3:4))}-1!=this.a&&(this.b[this.a]+=d,2>=this.a&&-1!=this.h&&(this.zoom[this.h]+=d));for(a=this.a;0<=a&&4>=a;a++)if(this.d[a]+=
d,c||-1==h||a<h)this.d[a]>this.e[a]&&(this.e[a]=this.d[a]),this.d[a]=0;this.a=c?-1:h;this.h=j;this.q(this,b)};W.prototype.B=function(a){this.c=a()};W.prototype.o=function(a){a=a();this.l+=a-this.c;this.c=-1};var X=function(a){return a.z&&!!a.element&&!!a.element.contentWindow&&1>a.A};var Fa=function(a){var b=fa;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new x(-1,-1);else{var e=(b||window).document,d="CSS1Compat"==e.compatMode?e.documentElement:e.body;c=new x(d.clientWidth,d.clientHeight)}return c}catch(f){return new x(-12245933,-12245933)}};var Ha=function(){Ga(Y,r)},Ga=function(a,b){if(!(Ia||0==a.length)){var c=Fa(n);b||(Ja=c);if(!(-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)){var e=p;try{e=za(T((window.top||s||window).document))}catch(d){return}for(var c=new U(e.y,e.x+c.width,e.y+c.height,e.x),e=Z(),f=0;f<a.length;f++)a[f].update(e,c,b);Ka+=Z()-e;La++}}},Ma=function(){var a;a=fa.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||""]||0;Ga(Y,!(1==a||0==a))},Y=
[],Ia=r,Na=(new Date).getTime(),Qa=-1,Ja=p,Z=function(){return(new Date).getTime()-Na},Ra=0,Sa=0,Ka=0,La=0,Ta=-1,Va=function(){for(var a=12E4,b=Z(),c=0;c<Y.length;++c){var e;e=Y[c];if(X(e)){var d;d=e.b[2]+e.b[1]+e.b[0];2>=e.a&&-1!=e.a&&(d+=b-e.j);if(0<=e.c||12E4>d)e=12E4-d;else{if(X(e)){d=l;b:{if(d=e.r)if((d=d.match("eid=([^&]+)"))&&2==d.length){d=d[1];break b}d=""}d=d?d.replace("39482001","39482002"):"39482002";var f={"0":"autorefresh"};f[1]=d;try{e.element.contentWindow.postMessage(f,"*"),e.A++}catch(g){e.z=
r}}e=12E4}}else e=12E4;a=Math.min(a,e)}Ua()&&(a=Math.max(a,5E3),window.setTimeout(Va,a))},Ua=function(){for(var a=0;a<Y.length;++a)if(X(Y[a]))return n;return r};var $,Xa=function(){if(2==Wa()||Ua())return n;for(var a=Y,b=0;b<a.length;b++)if(!a[b].n)return n;return r},db=function(){try{var a=C(),b=Z();Qa=b;Ja=Fa(n);var c;var e=C().document;!e.body||!e.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance?c=r:($=Goog_AdSense_getAdAdapterInstance(),c=n);if(c){Ra=$.numBlocks();var d=[];Sa=0;$.getBlocks(function(a,c,e){Sa++;var f=a.getBoundingClientRect();try{var g=window.top,h=new D(0,0),i=S(a)?S(a).parentWindow||S(a).defaultView:window,
j=a;do{var m;if(i==g)m=Ca(j);else{var q=j,k=new D;if(1==q.nodeType){if(q.getBoundingClientRect){var u=Aa(q);k.x=u.left;k.y=u.top}else{var K=za(T(q)),Pa=Ca(q);k.x=Pa.x-K.x;k.y=Pa.y-K.y}if(L&&!ta(12)){var v=k,da;var J=l;I?J="-ms-transform":M?J="-webkit-transform":H?J="-o-transform":L&&(J="-moz-transform");var Q=l;J&&(Q=V(q,J));Q||(Q=V(q,"transform"));if(Q){var xa=Q.match(Da);da=!xa?new D(0,0):new D(parseFloat(xa[1]),parseFloat(xa[2]))}else da=new D(0,0);k=new D(v.x+da.x,v.y+da.y)}}else{var fb="function"==
aa(q.C),v=q;q.targetTouches?v=q.targetTouches[0]:fb&&q.C().targetTouches&&(v=q.C().targetTouches[0]);k.x=v.clientX;k.y=v.clientY}m=k}v=m;h.x+=v.x;h.y+=v.y}while(i&&i!=g&&(j=i.frameElement)&&(i=i.parent));var gb=new U(Math.round(h.y),Math.round(f.right-f.left+h.x),Math.round(f.bottom-f.top+h.y),Math.round(h.x)),R=new W(gb,c,b,e);R.element=a;R.q=Ya;R.k=Za($a,c);var ya=c.match(/[&\?](?:adk)=([0-9]+)/);R.f=ya&&2==ya.length?parseInt(ya[1],10):0;d.push(R)}catch(rb){d.push(new W(Ea,c,b,e))}});Y=d;var f,
g;w.mozVisibilityState?g="mozvisibilitychange":w.webkitVisibilityState&&(g="webkitvisibilitychange");(f=g)&&z(w,f,Ma);Ma();for(c=0;c<Y.length;++c)if(X(Y[c])){window.setTimeout(Va,12E4);break}if(2!=Wa()){z(a,"message",ab);c=Y;for(e=0;e<c.length;++e){var h=c[e];if(h.element&&h.element.contentWindow){f={"0":"goog_get_override"};try{h.element.contentWindow.postMessage(f,"*")}catch(j){}}}a.setTimeout(bb,500)}var k=2==$.getOseId();z(a,"scroll",Ha);z(a,"resize",Ha);if(k)for(var i,a=0;a<Y.length;++a)if(i=
Y[a],i.element){var m=t(i.B,i,Z);z(i.element,"mouseover",m);var u=t(i.o,i,Z);z(i.element,"mouseout",u)}window.setTimeout(function(){cb("t")},36E5);Ta=Z()-b}else cb("c")}catch(K){Y=[],cb("x")}},cb=function(a){var b=C(),c=b.document;$||($=Goog_AdSense_getAdAdapterInstance());if(!Ia){if(2==Wa()){var e=0<=Qa?Z()-Qa:-1;"u"==a&&-1==Ta&&(a="l",Y=[],e=Z());var d;d||(d="http");d=[[d,"://pagead2.googlesyndication.com/pagead/gen_204?id=osd"].join("")];try{var f=Y;if(0<f.length){Ga(f,n);for(c=0;c<f.length;c++)if(0<
f[c].f){0<f[c].c&&f[c].o(Z);var g=f[c],h=g.i,j=["p:",h.top,h.left,h.bottom,h.right];j.push("tos:",g.b.join(","));j.push("mtos:",g.e.join(","));j.push("rs:",g.m);5!=g.m&&(j.push("zoom:",g.zoom.join(",")),j.push("ht:",g.l));0<=g.g&&j.push("tfs:",g.g,"tls:",g.j);g.k&&j.push("fp:",g.k);5==g.m&&(g.t&&j.push("ord:",g.t),g.s&&j.push("amd:",g.s,";"));d.push("adk"+f[c].f+"="+y(j.join(",")))}g=n;h=Ja;d.push("bs="+h.width+","+h.height);var k;h=fa;g&&h.top!=h&&(h=h.top);try{var i=h.document;k=!h.scrollY&&"CSS1Compat"!=
i.compatMode?new U(0,i.body.scrollWidth,i.body.scrollHeight,0):new U(0,i.body.offsetWidth,i.body.offsetHeight,0)}catch(m){k=new U(0,-12245933,-12245933,0)}d.push("ps="+k.right+","+k.bottom);d.push("ss="+screen.width+","+screen.height);var u=Za(hb,f[0].r);if(u&&("&"==u.charAt(0)||"?"==u.charAt(0)))u=u.slice(1);d.push("fp="+y(u))}else d.push("url="+y(b.location.href)),c.referrer&&d.push("referrer="+y(c.referrer)),$&&(d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+
Wa()));d.push("tt="+e);d.push("pt="+Qa);d.push("deb="+y([1,Ra,Sa,Ka,La,Ta].join("-")));d.push("r="+a);ib&&d.push("ovr=t");if(b.top!=b){d.push("iframe_loc="+y(b.location.href));var K=Fa(r);d.push("is="+K.width+","+K.height)}}catch(pb){d.push("error")}try{var eb=d.join("&");b.google_image_requests||(b.google_image_requests=[]);var Oa=b.document.createElement("img");Oa.src=eb;b.google_image_requests.push(Oa)}catch(qb){}}Ia=n}},$a=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,hb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,
Za=function(a,b){var c=b.match(a);return c?c.join(""):""},ib=r,jb=0,kb=function(a,b){if(b){a(b);var c=b.frames;if(c){var e=c.length,d;for(d=0;d<e;++d)kb(a,c[d])}}},lb=function(a,b){try{b.postMessage(a,"*")}catch(c){}},Ya=function(a,b){if(a&&!a.n){var c=1E3<=a.e[2];if(c||a.u){var e=c?"1":"0";a.u=r;var d=$.getCorrelator(),f=a.i,g=a.element.contentWindow;kb(ea(lb,["{vi:",e,",cl:",d,",adk:",a.f,",pl:",f.left,",pr:",f.right,",pt:",f.top,",pb:",f.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",
b.bottom,"}"].join("")),g);if(c&&(a.n=n,!Xa()&&(c=2==$.getOseId(),e=C(),A(e,"scroll",Ha),A(e,"resize",Ha),c)))for(e=0;e<Y.length;++e)c=Y[e],c.element&&(d=t(c.B,c,Z),A(c.element,"mouseover",d),d=t(c.o,c,Z),A(c.element,"mouseout",d))}}},ab=function(a){a.data&&(a=a.data,"goog_provide_override"==a[0]&&(a=a[1],0<a&&(1>=a&&a>jb)&&(jb=a)))},bb=function(){if(0<jb){var a;a:{a=[2];var b=jb;if(!(1E-4>Math.random())){var c=Math.random();if(c<b){a=a[Math.floor(c/b*a.length)];break a}}a=p}2==a&&(ib=n)}},Wa=function(){return ib?
2:$?$.getOseId():0};var mb=C();z(mb,"unload",function(){cb("u")});var nb=C();if("complete"==nb.document.readyState||nb.google_onload_fired)db();else{var ob=C();z(ob,"load",function(){window.setTimeout(db,100)})};})();