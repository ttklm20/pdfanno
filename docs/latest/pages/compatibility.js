"use strict";"undefined"==typeof PDFJS&&(("undefined"!=typeof window?window:this).PDFJS={}),function(){if("undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(window.Float64Array=Float32Array));function e(e,t){return new n(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0);for(var n=0,r=e.length;n<r;++n,++t)this[t]=255&e[n]}function n(n){var r,i,o;if("number"==typeof n)for(r=[],i=0;i<n;++i)r[i]=0;else if("slice"in n)r=n.slice(0);else for(r=[],i=0,o=n.length;i<o;++i)r[i]=n[i];return r.subarray=e,r.buffer=r,r.byteLength=r.length,r.set=t,"object"==typeof n&&n.buffer&&(r.buffer=n.buffer),r}window.Uint8Array=n,window.Int8Array=n,window.Uint32Array=n,window.Int32Array=n,window.Uint16Array=n,window.Float32Array=n,window.Float64Array=n}(),window.URL||(window.URL=window.webkitURL),function(){if(void 0!==Object.defineProperty){var e=!0;try{Object.defineProperty(new Image,"id",{value:"test"});var t=function(){};t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,n){delete e[t],"get"in n&&e.__defineGetter__(t,n.get),"set"in n&&e.__defineSetter__(t,n.set),"value"in n&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=n.value)}}(),function(){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest;"overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),"responseType"in t||(PDFJS.disableWorker=!0,Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"==typeof VBArray?Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText;var e,t=this.responseText,n=t.length,r=new Uint8Array(n);for(e=0;e<n;++e)r[e]=255&t.charCodeAt(e);return r.buffer}}):Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}}))}(),function(){if(!("btoa"in window)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";window.btoa=function(t){var n,r,i="";for(n=0,r=t.length;n<r;n+=3){var o=255&t.charCodeAt(n),a=255&t.charCodeAt(n+1),s=255&t.charCodeAt(n+2),u=(3&o)<<4|a>>4,c=n+1<r?(15&a)<<2|s>>6:64,f=n+2<r?63&s:64;i+=e.charAt(o>>2)+e.charAt(u)+e.charAt(c)+e.charAt(f)}return i}}}(),function(){if(!("atob"in window)){window.atob=function(e){if((e=e.replace(/=+$/,"")).length%4==1)throw new Error("bad atob input");for(var t,n,r=0,i=0,o="";n=e.charAt(i++);~n&&(t=r%4?64*t+n:n,r++%4)?o+=String.fromCharCode(255&t>>(-2*r&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return o}}}(),void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.concat(Array.prototype.slice.call(arguments));return t.apply(e,r)}}),"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset;for(var e={},t=0,n=this.attributes.length;t<n;t++){var r=this.attributes[t];"data-"===r.name.substring(0,5)&&(e[r.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=r.value)}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0}),function(){if(!("classList"in document.createElement("div"))){var e={add:function(e){t(this.element,e,!0,!1)},contains:function(e){return t(this.element,e,!1,!1)},remove:function(e){t(this.element,e,!1,!0)},toggle:function(e){t(this.element,e,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;var t=Object.create(e,{element:{value:this,writable:!1,enumerable:!0}});return Object.defineProperty(this,"_classList",{value:t,writable:!1,enumerable:!1}),t},enumerable:!0})}function t(e,t,n,r){var i=(e.className||"").split(/\s+/g);""===i[0]&&i.shift();var o=i.indexOf(t);return o<0&&n&&i.push(t),o>=0&&r&&i.splice(o,1),e.className=i.join(" "),o>=0}}(),function(){var e;"console"in window?"bind"in console.log||(console.log=(e=console.log,function(t){return e(t)}),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){-1!==navigator.userAgent.indexOf("Opera")&&document.addEventListener("click",function(e){(function e(t){return t.disabled||t.parentNode&&e(t.parentNode)})(e.target)&&e.stopPropagation()},!0)}(),navigator.userAgent.indexOf("Trident")>=0&&(PDFJS.disableCreateObjectURL=!0),"language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US"),function(){var e=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,t=/Android\s[0-2][^\d]/.test(navigator.userAgent),n=/Chrome\/(39|40)\./.test(navigator.userAgent);(e||t||n)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),(!history.pushState||navigator.userAgent.indexOf("Android 2.")>=0)&&(PDFJS.disableHistory=!0),function(){if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]});else{var e,t=!1;if(navigator.userAgent.indexOf("Chrom")>=0?t=(e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(e[2])<21:navigator.userAgent.indexOf("Android")>=0?t=/Android\s[0-4][^\d]/g.test(navigator.userAgent):navigator.userAgent.indexOf("Safari")>=0&&(t=(e=navigator.userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//))&&parseInt(e[1])<6),t){var n=window.CanvasRenderingContext2D.prototype,r=n.createImageData;n.createImageData=function(e,t){var n=r.call(this,e,t);return n.data.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]},n},n=null}}}(),function(){function e(e){window.setTimeout(e,20)}/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?window.requestAnimationFrame=e:"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e)}(),function(){var e=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),t=/Android/g.test(navigator.userAgent);(e||t)&&(PDFJS.maxCanvasPixels=5242880)}(),navigator.userAgent.indexOf("Trident")>=0&&window.parent!==window&&(PDFJS.disableFullscreen=!0),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script");return e[e.length-1]},enumerable:!0,configurable:!0});
//# sourceMappingURL=compatibility.js.map
