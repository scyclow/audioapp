!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){var n="$_".includes(t[1])?2:1,e=t.slice(0,n).toLowerCase(),r=x[e],o=4,i=t.slice(n);return i=g(i)&&"cdefg".includes(e[0])?Number(i)-1:g(i)?Number(i):o,r*Math.pow(2,i)}function i(t,n){t.unmute(),t.freq=n}function u(t,n,e){i(t,n),setTimeout(function(){return t.mute()},.8*e)}function c(t){t.mute()}function a(t){var n=t/60,e=1e3/n;return Math.round(e)}function f(t){var n=void 0,e=void 0;"-"===t?(e=c,n=0):j(t)?(n=E(t),e=i):(n=t,e=u);var r=O(n)?n:o(n);return function(t,n){e(t,r,n)}}function s(t,n,e){"RUNNING"===t.state?clearInterval(N[n.number]):t.start();var r=0,o=function(e){return function(){var o=n[r].split(" "),i=e/o.length;o.forEach(function(e,r){var o=f(e);setTimeout(function(){o(t,i),console.log(new Date,"("+n.number+")",e,i)},i*r)}),++r>=n.length&&(r=0)}},i=a(e),u=(0,v["default"])(o(i),i),c=u(i);N[n.number]=c,window.change=function(t){return u(a(t))},o()}var l=e(28),p=r(l),h=e(29),v=r(h),d=e(30),y=(r(d),e(16)),g=function(t){return!(0!==t&&(!t||isNaN(t)))},w=function(t,n){return t*Math.pow(2,n/12)},m=27.5,x={a_:w(m/2,11),a:m,a$:w(m,1),b_:w(m,1),b:w(m,2),c:w(m,3),c$:w(m,4),d_:w(m,4),d:w(m,5),d$:w(m,6),e_:w(m,6),e:w(m,7),f:w(m,8),f$:w(m,9),g_:w(m,9),g:w(m,10),g$:w(m,11)},b=function(t){return t.length-1},_=function(t){return t[b(t)]},E=function(t){return t.slice(0,b(t))},O=function(t){return g(t)},j=function(t){return"."===_(t)},N={};window.NOTES=x;var k=new p["default"];new p["default"];window.n=k,window.n2=k;var L=function(t,n){return[].map.call(t,n)},M=document.getElementsByClassName("track"),A=function(t){return(0,y.compact)(t.value.split("\n"))},P=L(M,function(){return new p["default"]});document.getElementById("start").onclick=function(){L(M,A).forEach(function(t,n){if(t.number=n,t.length){var e=P[n],r=120;s(e,t,r)}})}},function(t,n,e){var r=e(23)("wks"),o=e(27),i=e(3).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n,e){t.exports=!e(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(5),o=e(44),i=e(60),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(4),o=e(13);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(3),o=e(6),i=e(18),u=e(8),c="prototype",a=function(t,n,e){var f,s,l,p=t&a.F,h=t&a.G,v=t&a.S,d=t&a.P,y=t&a.B,g=t&a.W,w=h?o:o[n]||(o[n]={}),m=w[c],x=h?r:v?r[n]:(r[n]||{})[c];h&&(e=n);for(f in e)s=!p&&x&&void 0!==x[f],s&&f in w||(l=s?x[f]:e[f],w[f]=h&&"function"!=typeof x[f]?e[f]:y&&s?i(l,r):g&&x[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((w.virtual||(w.virtual={}))[f]=l,t&a.R&&m&&!m[f]&&u(m,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(23)("keys"),o=e(27);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,n,e){return e+(n-e)*t}function i(t,n){return(t-n)/(t+1)}function u(t){var n;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(t>n)){e.next=7;break}return e.next=4,n;case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}},v[0],this)}function c(t,n){return[].concat((0,l["default"])(u(t))).map(n)}function a(t,n,e){return Math.max(Math.min(t,n),e)}function f(t){return t.filter(function(t){return t||0===t})}Object.defineProperty(n,"__esModule",{value:!0});var s=e(35),l=r(s),p=e(36),h=r(p);n.betweenLinear=o,n.portion=i,n.times=c,n.between=a,n.compact=f;var v=[u].map(h["default"].mark)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(39);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(4).f,o=e(7),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(45),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){var n=t.gain,e=t.biquad,r=t.source;n.gain.value=.01,e.type="peaking",e.frequency.value=300,e.gain.value=45,r.type="sawtooth",r.detune.value=100,r.frequency.value=25}Object.defineProperty(n,"__esModule",{value:!0});var i=e(33),u=r(i),c=e(34),a=r(c),f=e(16),s={READY:"READY",RUNNING:"RUNNING",PAUSED:"PAUSED",DEAD:"DEAD"},l=function(){function t(){var n=arguments.length<=0||void 0===arguments[0]?o:arguments[0];(0,u["default"])(this,t);var e=this.ctx=new(window.AudioContext||window.webkitAudioContext),r=this.nodes={gain:e.createGain(),biquad:e.createBiquadFilter(),source:e.createOscillator()};r.source.connect(r.biquad),r.biquad.connect(r.gain),r.gain.connect(e.destination),n(r),this.state=s.READY,this.vol=r.gain.gain.value}return(0,a["default"])(t,[{key:"start",value:function(){return this.state===s.RUNNING?this:(this.nodes.source.start(0),this.state=s.RUNNING,this)}},{key:"softKill",value:function(){}},{key:"kill",value:function(){return this.state!==s.RUNNING?this:(this.nodes.source.stop(),this.state=!1,this)}},{key:"mute",value:function(){this.volume=0}},{key:"unmute",value:function(){this.volume=this.vol}},{key:"upNote",value:function(){var t=arguments.length<=0||void 0===arguments[0]?8:arguments[0];return this.freq+=this.freq/t}},{key:"downNote",value:function(){var t=arguments.length<=0||void 0===arguments[0]?8:arguments[0];return this.freq-=.5*this.freq/t}},{key:"freq",get:function(){return this.nodes.source.frequency.value},set:function(t){return this.nodes.source.frequency.value=Number(t)}},{key:"volume",get:function(){return this.nodes.gain.gain.value},set:function(t){return this.nodes.gain.gain.value=(0,f.between)(t,.05,0)}},{key:"type",get:function(){return this.nodes.source.type},set:function(t){return this.nodes.source.type=t}}]),t}();n["default"]=l},function(t,n){"use strict";function e(t,n){var e=function(n){return setInterval(t,n)},r=e(n);return function(t){return clearInterval(r),r=e(t)}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=e},function(t,n){"use strict";function e(t,n){return isNaN(n)?Math.floor(Math.random()*t):t+e(n-t)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=e},function(t,n,e){t.exports={"default":e(37),__esModule:!0}},function(t,n,e){t.exports={"default":e(38),__esModule:!0}},function(t,n){"use strict";n.__esModule=!0,n["default"]=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(32),i=r(o);n["default"]=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(31),i=r(o);n["default"]=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,i["default"])(t)}},function(t,n,e){t.exports=e(66)},function(t,n,e){e(64),e(62),t.exports=e(6).Array.from},function(t,n,e){e(63);var r=e(6).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(24),o=e(25),i=e(59);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(17),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){"use strict";var r=e(4),o=e(13);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){t.exports=e(3).document&&document.documentElement},function(t,n,e){t.exports=!e(2)&&!e(21)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(12),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var u=t["return"];throw void 0!==u&&r(u.call(t)),i}}},function(t,n,e){"use strict";var r=e(52),o=e(13),i=e(22),u={};e(8)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){"use strict";var r=e(51),o=e(10),i=e(57),u=e(8),c=e(7),a=e(12),f=e(48),s=e(22),l=e(54),p=e(1)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",y="values",g=function(){return this};t.exports=function(t,n,e,w,m,x,b){f(e,n,w);var _,E,O,j=function(t){if(!h&&t in M)return M[t];switch(t){case d:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},N=n+" Iterator",k=m==y,L=!1,M=t.prototype,A=M[p]||M[v]||m&&M[m],P=A||j(m),S=m?k?j("entries"):P:void 0,R="Array"==n?M.entries||A:A;if(R&&(O=l(R.call(new t)),O!==Object.prototype&&(s(O,N,!0),r||c(O,p)||u(O,p,g))),k&&A&&A.name!==y&&(L=!0,P=function(){return A.call(this)}),r&&!b||!h&&!L&&M[p]||u(M,p,P),a[n]=P,a[N]=g,m)if(_={values:k?P:j(y),keys:x?P:j(d),entries:S},b)for(E in _)E in M||i(M,E,_[E]);else o(o.P+o.F*(h||L),n,_);return _}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(c){}return e}},function(t,n){t.exports=!0},function(t,n,e){var r=e(5),o=e(53),i=e(20),u=e(14)("IE_PROTO"),c=function(){},a="prototype",f=function(){var t,n=e(19)("iframe"),r=i.length,o=">";for(n.style.display="none",e(43).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),f=t.F;r--;)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[a]=r(t),e=new c,c[a]=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(4),o=e(5),i=e(56);t.exports=e(2)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(7),o=e(26),i=e(14)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(7),o=e(24),i=e(40)(!1),u=e(14)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(55),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){t.exports=e(8)},function(t,n,e){var r=e(15),o=e(9);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return 0>a||a>=f?t?"":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(15),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(41),o=e(1)("iterator"),i=e(12);t.exports=e(6).getIteratorMethod=function(t){return void 0!=t?t[o]||t["@@iterator"]||i[r(t)]:void 0}},function(t,n,e){"use strict";var r=e(18),o=e(10),i=e(26),u=e(47),c=e(46),a=e(25),f=e(42),s=e(61);o(o.S+o.F*!e(50)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,w=s(p);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),void 0==w||h==Array&&c(w))for(n=a(p.length),e=new h(n);n>g;g++)f(e,g,y?d(p[g],g):p[g]);else for(l=w.call(p),e=new h;!(o=l.next()).done;g++)f(e,g,y?u(l,d,[o.value,g],!0):o.value);return e.length=g,e}})},function(t,n,e){var r=e(10);r(r.S+r.F*!e(2),"Object",{defineProperty:e(4).f})},function(t,n,e){"use strict";var r=e(58)(!0);e(49)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n){function e(){l&&f&&(l=!1,f.length?s=f.concat(s):p=-1,s.length&&r())}function r(){if(!l){var t=u(e);l=!0;for(var n=s.length;n;){for(f=s,s=[];++p<n;)f&&f[p].run();p=-1,n=s.length}f=null,l=!1,c(t)}}function o(t,n){this.fun=t,this.array=n}function i(){}var u,c,a=t.exports={};!function(){try{u=setTimeout}catch(t){u=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var f,s=[],l=!1,p=-1;a.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new o(t,n)),1!==s.length||l||u(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,n,e){(function(n){var r="object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=e(67),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(u){r.regeneratorRuntime=void 0}}).call(n,function(){return this}())},function(t,n,e){(function(n,e){!function(n){"use strict";function r(t,n,e,r){var o=Object.create((n||i).prototype),u=new v(r||[]);return o._invoke=l(t,e,u),o}function o(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function i(){}function u(){}function c(){}function a(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function f(t){this.arg=t}function s(t){function n(e,r,i,u){var c=o(t[e],t,r);if("throw"!==c.type){var a=c.arg,s=a.value;return s instanceof f?Promise.resolve(s.arg).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},u)}u(c.arg)}function r(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof e&&e.domain&&(n=e.domain.bind(n));var i;this._invoke=r}function l(t,n,e){var r=O;return function(i,u){if(r===N)throw new Error("Generator is already running");if(r===k){if("throw"===i)throw u;return y()}for(;;){var c=e.delegate;if(c){if("return"===i||"throw"===i&&c.iterator[i]===g){e.delegate=null;var a=c.iterator["return"];if(a){var f=o(a,c.iterator,u);if("throw"===f.type){i="throw",u=f.arg;continue}}if("return"===i)continue}var f=o(c.iterator[i],c.iterator,u);if("throw"===f.type){e.delegate=null,i="throw",u=f.arg;continue}i="next",u=g;var s=f.arg;if(!s.done)return r=j,s;e[c.resultName]=s.value,e.next=c.nextLoc,e.delegate=null}if("next"===i)e.sent=e._sent=u;else if("throw"===i){if(r===O)throw r=k,u;e.dispatchException(u)&&(i="next",u=g)}else"return"===i&&e.abrupt("return",u);r=N;var f=o(t,n,e);if("normal"===f.type){r=e.done?k:j;var s={value:f.arg,done:e.done};if(f.arg!==L)return s;e.delegate&&"next"===i&&(u=g)}else"throw"===f.type&&(r=k,i="throw",u=f.arg)}}}function p(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function h(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function d(t){if(t){var n=t[x];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function o(){for(;++e<t.length;)if(w.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=g,o.done=!0,o};return r.next=r}}return{next:y}}function y(){return{value:g,done:!0}}var g,w=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},x=m.iterator||"@@iterator",b=m.toStringTag||"@@toStringTag",_="object"==typeof t,E=n.regeneratorRuntime;if(E)return void(_&&(t.exports=E));E=n.regeneratorRuntime=_?t.exports:{},E.wrap=r;var O="suspendedStart",j="suspendedYield",N="executing",k="completed",L={},M=c.prototype=i.prototype;u.prototype=M.constructor=c,c.constructor=u,c[b]=u.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return n?n===u||"GeneratorFunction"===(n.displayName||n.name):!1},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(M),t},E.awrap=function(t){return new f(t)},a(s.prototype),E.async=function(t,n,e,o){var i=new s(r(t,n,e,o));return E.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(M),M[x]=function(){return this},M[b]="Generator",M.toString=function(){return"[object Generator]"},E.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},E.values=d,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.tryEntries.forEach(h),!t)for(var n in this)"t"===n.charAt(0)&&w.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,r){return i.type="throw",i.arg=t,e.next=n,!!r}if(this.done)throw t;for(var e=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=w.call(o,"catchLoc"),c=w.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&w.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?this.next=o.finallyLoc:this.complete(i),L},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),L}},"catch":function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;h(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:d(t),resultName:n,nextLoc:e},L}}}("object"==typeof n?n:"object"==typeof window?window:"object"==typeof self?self:this)}).call(n,function(){return this}(),e(65))}]);