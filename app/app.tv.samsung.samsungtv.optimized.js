/**
 * almond 0.0.3 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 *//*jslint strict: false, plusplus: false *//*global setTimeout: false */var requirejs,require,define;(function(a){function g(a,b){if(a&&a.charAt(0)==="."&&b){b=b.split("/"),b=b.slice(0,b.length-1),a=b.concat(a.split("/"));var c,d;for(c=0;d=a[c];c++)if(d===".")a.splice(c,1),c-=1;else if(d===".."){if(c===1&&(a[2]===".."||a[0]===".."))break;c>0&&(a.splice(c-1,2),c-=2)}a=a.join("/")}return a}function h(b,c){return function(){return f.apply(a,d.call(arguments,0).concat([b,c]))}}function i(a){return function(b){return g(b,a)}}function j(a){return function(c){b[a]=c}}function k(d){if(c.hasOwnProperty(d)){var f=c[d];delete c[d],e.apply(a,f)}return b[d]}function l(a,b){var c,d,e=a.indexOf("!");return e!==-1?(c=g(a.slice(0,e),b),a=a.slice(e+1),d=k(c),d&&d.normalize?a=d.normalize(a,i(b)):a=g(a,b)):a=g(a,b),{f:c?c+"!"+a:a,n:a,p:d}}var b={},c={},d=[].slice,e,f;if(typeof define=="function")return;e=function(d,e,f,g){var i=[],m,n,o,p,q,r;g||(g=d);if(typeof f=="function"){!e.length&&f.length&&(e=["require","exports","module"]);for(p=0;p<e.length;p++){r=l(e[p],g),o=r.f;if(o==="require")i[p]=h(d);else if(o==="exports")i[p]=b[d]={},m=!0;else if(o==="module")n=i[p]={id:d,uri:"",exports:b[d]};else if(b.hasOwnProperty(o)||c.hasOwnProperty(o))i[p]=k(o);else{if(!r.p)throw d+" missing "+o;r.p.load(r.n,h(g,!0),j(o),{}),i[p]=b[o]}}q=f.apply(b[d],i),d&&(n&&n.exports!==a?b[d]=n.exports:m||(b[d]=q))}else d&&(b[d]=f)},requirejs=f=function(b,c,d,g){return typeof b=="string"?k(l(b,c).f):(b.splice||(c.splice?(b=c,c=arguments[2]):b=[]),g?e(a,b,c,d):setTimeout(function(){e(a,b,c,d)},15),f)},f.config=function(){return f},require||(require=f),define=function(a,b,d){b.splice||(d=b,b=[]),define.unordered?c[a]=[a,b,d]:e(a,b,d)},define.amd={jQuery:!0}})();
/*! Woodman - v0.1.9 - 2013-05-02 - https://github.com/joshfire/woodman
Copyright 2013 Joshfire; MIT license
Based on log4j v2.0: http://logging.apache.org/log4j/2.x/
Portions adapted from log4javascript: http://log4javascript.org/ (copyright Tim Down, Apache License, Version 2.0) */

/* Browser distribution, AMD module */


define('lang/config',[],
function() {
	return {
		"DEFAULT": "en",
		"AVAILABLE": [
			"en",
			"fr"
		]
	};
});
/**
  * Klass.js - copyright @dedfat
  * version 1.0
  * https://github.com/ded/klass
  * Follow our software http://twitter.com/dedfat :)
  * MIT License
  */
!function(a,b){function j(a,b){function c(){}c[e]=this[e];var d=this,g=new c,h=f(a),j=h?a:this,k=h?{}:a,l=function(){this.initialize?this.initialize.apply(this,arguments):(b||h&&d.apply(this,arguments),j.apply(this,arguments))};l.methods=function(a){i(g,a,d),l[e]=g;return this},l.methods.call(l,k).prototype.constructor=l,l.extend=arguments.callee,l[e].implement=l.statics=function(a,b){a=typeof a=="string"?function(){var c={};c[a]=b;return c}():a,i(this,a,d);return this};return l}function i(a,b,d){for(var g in b)b.hasOwnProperty(g)&&(a[g]=f(b[g])&&f(d[e][g])&&c.test(b[g])?h(g,b[g],d):b[g])}function h(a,b,c){return function(){var d=this.supr;this.supr=c[e][a];var f=b.apply(this,arguments);this.supr=d;return f}}function g(a){return j.call(f(a)?a:d,a,1)}var c=/xyz/.test(function(){xyz})?/\bsupr\b/:/.*/,d=function(){},e="prototype",f=function(a){return typeof a===b};if(typeof module!="undefined"&&module.exports)module.exports=g;else{var k=a.klass;g.noConflict=function(){a.klass=k;return this},a.klass=g}}(this,"function")
;
define("vendor/klass", function(){});

// ==========
// JOSHFIRE: the library below is not a pure vanilla library.
// Photoswipe reacts on clicks listening to the "touchstart" event by default.
// but that triggers problems on Android where the "click" event is triggered
// afterwards regardless of whether "preventDefault" is called.
// To avoid running into problems where clicking on the "close" button actually
// also selects the first tab in the app, the code of the "touchstart" event
// handler has been replaced by a short comment that starts with "JOSHFIRE"
// Removed code is:
// b.preventDefault();
// a.Events.remove(this.toolbarEl,"click",this.clickHandler);
// this.handleTap(b)
// ==========
// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) 2011 by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: 3.0.4
(function(e){if(!Function.prototype.bind)Function.prototype.bind=function(c){var a=[].slice,b=a.call(arguments,1),d=this,f=function(){},g=function(){return d.apply(this instanceof f?this:c||{},b.concat(a.call(arguments)))};f.prototype=d.prototype;g.prototype=new f;return g};if(typeof e.Code==="undefined")e.Code={};e.Code.Util={registerNamespace:function(){var c=arguments,a=null,b,d,f,g,h;b=0;for(g=c.length;b<g;b++){f=c[b];f=f.split(".");a=f[0];typeof e[a]==="undefined"&&(e[a]={});a=e[a];d=1;for(h=
f.length;d<h;++d)a[f[d]]=a[f[d]]||{},a=a[f[d]]}},coalesce:function(){var c,a;c=0;for(a=arguments.length;c<a;c++)if(!this.isNothing(arguments[c]))return arguments[c];return null},extend:function(c,a,b){var d;this.isNothing(b)&&(b=!0);if(c&&a&&this.isObject(a))for(d in a)this.objectHasProperty(a,d)&&(b?c[d]=a[d]:typeof c[d]==="undefined"&&(c[d]=a[d]))},clone:function(c){var a={};this.extend(a,c);return a},isObject:function(c){return c instanceof Object},isFunction:function(c){return{}.toString.call(c)===
"[object Function]"},isArray:function(c){return c instanceof Array},isLikeArray:function(c){return typeof c.length==="number"},isNumber:function(c){return typeof c==="number"},isString:function(c){return typeof c==="string"},isNothing:function(c){if(typeof c==="undefined"||c===null)return!0;return!1},swapArrayElements:function(c,a,b){var d=c[a];c[a]=c[b];c[b]=d},trim:function(c){return c.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},toCamelCase:function(c){return c.replace(/(\-[a-z])/g,function(a){return a.toUpperCase().replace("-",
"")})},toDashedCase:function(c){return c.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})},arrayIndexOf:function(c,a,b){var d,f,g,e;g=-1;d=0;for(f=a.length;d<f;d++)if(e=a[d],this.isNothing(b)){if(e===c){g=d;break}}else if(this.objectHasProperty(e,b)&&e[b]===c){g=d;break}return g},objectHasProperty:function(c,a){return c.hasOwnProperty?c.hasOwnProperty(a):"undefined"!==typeof c[a]}}})(window);
(function(e,c){c.Browser={ua:null,version:null,safari:null,webkit:null,opera:null,msie:null,chrome:null,mozilla:null,android:null,blackberry:null,iPad:null,iPhone:null,iPod:null,iOS:null,is3dSupported:null,isCSSTransformSupported:null,isTouchSupported:null,isGestureSupported:null,_detect:function(){this.ua=e.navigator.userAgent;this.version=this.ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[];this.safari=/Safari/gi.test(e.navigator.appVersion);this.webkit=/webkit/i.test(this.ua);this.opera=/opera/i.test(this.ua);
this.msie=/msie/i.test(this.ua)&&!this.opera;this.chrome=/Chrome/i.test(this.ua);this.firefox=/Firefox/i.test(this.ua);this.fennec=/Fennec/i.test(this.ua);this.mozilla=/mozilla/i.test(this.ua)&&!/(compatible|webkit)/.test(this.ua);this.android=/android/i.test(this.ua);this.blackberry=/blackberry/i.test(this.ua);this.iOS=/iphone|ipod|ipad/gi.test(e.navigator.platform);this.iPad=/ipad/gi.test(e.navigator.platform);this.iPhone=/iphone/gi.test(e.navigator.platform);this.iPod=/ipod/gi.test(e.navigator.platform);
var a=document.createElement("div");this.is3dSupported=!c.isNothing(a.style.WebkitPerspective);this.isCSSTransformSupported=!c.isNothing(a.style.WebkitTransform)||!c.isNothing(a.style.MozTransform)||!c.isNothing(a.style.transformProperty);this.isTouchSupported=this.isEventSupported("touchstart");this.isGestureSupported=this.isEventSupported("gesturestart")},_eventTagNames:{select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},isEventSupported:function(a){var b=
document.createElement(this._eventTagNames[a]||"div"),d,a="on"+a;d=c.objectHasProperty(b,a);d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d},isLandscape:function(){return c.DOM.windowWidth()>c.DOM.windowHeight()}};c.Browser._detect()})(window,window.Code.Util);
(function(e,c){c.extend(c,{Events:{add:function(a,b,d){this._checkHandlersProperty(a);b==="mousewheel"&&(b=this._normaliseMouseWheelType());typeof a.__eventHandlers[b]==="undefined"&&(a.__eventHandlers[b]=[]);a.__eventHandlers[b].push(d);this._isBrowserObject(a)&&a.addEventListener(b,d,!1)},remove:function(a,b,d){this._checkHandlersProperty(a);b==="mousewheel"&&(b=this._normaliseMouseWheelType());if(a.__eventHandlers[b]instanceof Array){var f,g,e=a.__eventHandlers[b];if(c.isNothing(d)){if(this._isBrowserObject(a)){f=
0;for(g=e.length;f<g;f++)a.removeEventListener(b,e[f],!1)}a.__eventHandlers[b]=[]}else{f=0;for(g=e.length;f<g;f++)if(e[f]===d){e.splice(f,1);break}this._isBrowserObject(a)&&a.removeEventListener(b,d,!1)}}},fire:function(a,b){var d,f,g,h,j=Array.prototype.slice.call(arguments).splice(2);b==="mousewheel"&&(b=this._normaliseMouseWheelType());if(this._isBrowserObject(a)){if(typeof b!=="string")throw"type must be a string for DOM elements";g=this._NATIVE_EVENTS[b];d=document.createEvent(g?"HTMLEvents":
"UIEvents");d[g?"initEvent":"initUIEvent"](b,!0,!0,e,1);if(j.length<1){a.dispatchEvent(d);return}}this._checkHandlersProperty(a);d=typeof b==="string"?{type:b}:b;if(!d.target)d.target=a;if(!d.type)throw Error("Event object missing 'type' property.");if(a.__eventHandlers[d.type]instanceof Array){g=a.__eventHandlers[d.type];j.unshift(d);d=0;for(f=g.length;d<f;d++)h=g[d],c.isNothing(h)||h.apply(a,j)}},getMousePosition:function(a){var b={x:0,y:0};if(a.pageX)b.x=a.pageX;else if(a.clientX)b.x=a.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft);if(a.pageY)b.y=a.pageY;else if(a.clientY)b.y=a.clientY+(document.documentElement.scrollTop||document.body.scrollTop);return b},getTouchEvent:function(a){return a},getWheelDelta:function(a){var b=0;c.isNothing(a.wheelDelta)?c.isNothing(a.detail)||(b=-a.detail/3):b=a.wheelDelta/120;return b},domReady:function(a){document.addEventListener("DOMContentLoaded",a,!1)},_checkHandlersProperty:function(a){c.isNothing(a.__eventHandlers)&&c.extend(a,
{__eventHandlers:{}})},_isBrowserObject:function(a){if(a===e||a===e.document)return!0;return this._isElement(a)||this._isNode(a)},_isElement:function(a){return typeof e.HTMLElement==="object"?a instanceof e.HTMLElement:typeof a==="object"&&a.nodeType===1&&typeof a.nodeName==="string"},_isNode:function(a){return typeof e.Node==="object"?a instanceof e.Node:typeof a==="object"&&typeof a.nodeType==="number"&&typeof a.nodeName==="string"},_normaliseMouseWheelType:function(){if(c.Browser.isEventSupported("mousewheel"))return"mousewheel";
return"DOMMouseScroll"},_NATIVE_EVENTS:{click:1,dblclick:1,mouseup:1,mousedown:1,contextmenu:1,mousewheel:1,DOMMouseScroll:1,mouseover:1,mouseout:1,mousemove:1,selectstart:1,selectend:1,keydown:1,keypress:1,keyup:1,orientationchange:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1,focus:1,blur:1,change:1,reset:1,select:1,submit:1,load:1,unload:1,beforeunload:1,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1}}})})(window,
window.Code.Util);
(function(e,c){c.extend(c,{DOM:{setData:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setData(a[f],b,d)}else c.DOM._setData(a,b,d)},_setData:function(a,b,d){c.DOM.setAttribute(a,"data-"+b,d)},getData:function(a,b,d){return c.DOM.getAttribute(a,"data-"+b,d)},removeData:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeData(a[d],b)}else c.DOM._removeData(a,b)},_removeData:function(a,b){c.DOM.removeAttribute(a,"data-"+b)},isChildOf:function(a,
b){if(b===a)return!1;for(;a&&a!==b;)a=a.parentNode;return a===b},find:function(a,b){if(c.isNothing(b))b=e.document;var d=b.querySelectorAll(a),f=[],g,h;g=0;for(h=d.length;g<h;g++)f.push(d[g]);return f},createElement:function(a,b,d){var f,a=document.createElement(a);for(f in b)c.objectHasProperty(b,f)&&a.setAttribute(f,b[f]);a.innerHTML=d||"";return a},appendChild:function(a,b){b.appendChild(a)},insertBefore:function(a,b,d){d.insertBefore(a,b)},appendText:function(a,b){c.DOM.appendChild(document.createTextNode(a),
b)},appendToBody:function(a){this.appendChild(a,document.body)},removeChild:function(a,b){b.removeChild(a)},removeChildren:function(a){if(a.hasChildNodes())for(;a.childNodes.length>=1;)a.removeChild(a.childNodes[a.childNodes.length-1])},hasAttribute:function(a,b){return!c.isNothing(a.getAttribute(b))},getAttribute:function(a,b,d){a=a.getAttribute(b);c.isNothing(a)&&!c.isNothing(d)&&(a=d);return a},setAttribute:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setAttribute(a[f],
b,d)}else c.DOM._setAttribute(a,b,d)},_setAttribute:function(a,b,d){a.setAttribute(b,d)},removeAttribute:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeAttribute(a[d],b)}else c.DOM._removeAttribute(a,b)},_removeAttribute:function(a,b){this.hasAttribute(a,b)&&a.removeAttribute(b)},addClass:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._addClass(a[d],b)}else c.DOM._addClass(a,b)},_addClass:function(a,b){var d=c.DOM.getAttribute(a,"class",
"");RegExp("(?:^|\\s+)"+b+"(?:\\s+|$)").test(d)||(d!==""&&(d+=" "),d+=b,c.DOM.setAttribute(a,"class",d))},removeClass:function(a,b){if(c.isLikeArray(a)){var d,f;d=0;for(f=a.length;d<f;d++)c.DOM._removeClass(a[d],b)}else c.DOM._removeClass(a,b)},_removeClass:function(a,b){var d=c.DOM.getAttribute(a,"class",""),d=c.trim(d).split(" "),f="",g,e;g=0;for(e=d.length;g<e;g++)d[g]!==b&&(f!==""&&(f+=" "),f+=d[g]);f===""?c.DOM.removeAttribute(a,"class"):c.DOM.setAttribute(a,"class",f)},hasClass:function(a,b){return RegExp("(?:^|\\s+)"+
b+"(?:\\s+|$)").test(c.DOM.getAttribute(a,"class",""))},setStyle:function(a,b,d){if(c.isLikeArray(a)){var f,g;f=0;for(g=a.length;f<g;f++)c.DOM._setStyle(a[f],b,d)}else c.DOM._setStyle(a,b,d)},_setStyle:function(a,b,d){var f;if(c.isObject(b))for(f in b)c.objectHasProperty(b,f)&&(f==="width"?c.DOM.width(a,b[f]):f==="height"?c.DOM.height(a,b[f]):a.style[f]=b[f]);else a.style[b]=d},getStyle:function(a,b){var d=e.getComputedStyle(a,"").getPropertyValue(b);d===""&&(d=a.style[b]);return d},hide:function(a){if(c.isLikeArray(a)){var b,
d;b=0;for(d=a.length;b<d;b++)c.DOM._hide(a[b])}else c.DOM._hide(a)},_hide:function(a){c.DOM.setData(a,"ccl-disp",c.DOM.getStyle(a,"display"));c.DOM.setStyle(a,"display","none")},show:function(a){if(c.isLikeArray(a)){var b,d;b=0;for(d=a.length;b<d;b++)c.DOM._show(a[b])}else c.DOM._show(a)},_show:function(a){if(c.DOM.getStyle(a,"display")==="none"){var b=c.DOM.getData(a,"ccl-disp","block");if(b==="none"||b==="")b="block";c.DOM.setStyle(a,"display",b)}},width:function(a,b){if(!c.isNothing(b))c.isNumber(b)&&
(b+="px"),a.style.width=b;return this._getDimension(a,"width")},outerWidth:function(a){var b=c.DOM.width(a);b+=parseInt(c.DOM.getStyle(a,"padding-left"),10)+parseInt(c.DOM.getStyle(a,"padding-right"),10);b+=parseInt(c.DOM.getStyle(a,"margin-left"),10)+parseInt(c.DOM.getStyle(a,"margin-right"),10);b+=parseInt(c.DOM.getStyle(a,"border-left-width"),10)+parseInt(c.DOM.getStyle(a,"border-right-width"),10);return b},height:function(a,b){if(!c.isNothing(b))c.isNumber(b)&&(b+="px"),a.style.height=b;return this._getDimension(a,
"height")},_getDimension:function(a,b){var d=e.parseInt(e.getComputedStyle(a,"").getPropertyValue(b)),f;if(isNaN(d))f={display:a.style.display,left:a.style.left},a.style.display="block",a.style.left="-1000000px",d=e.parseInt(e.getComputedStyle(a,"").getPropertyValue(b)),a.style.display=f.display,a.style.left=f.left;return d},outerHeight:function(a){var b=c.DOM.height(a);b+=parseInt(c.DOM.getStyle(a,"padding-top"),10)+parseInt(c.DOM.getStyle(a,"padding-bottom"),10);b+=parseInt(c.DOM.getStyle(a,"margin-top"),
10)+parseInt(c.DOM.getStyle(a,"margin-bottom"),10);b+=parseInt(c.DOM.getStyle(a,"border-top-width"),10)+parseInt(c.DOM.getStyle(a,"border-bottom-width"),10);return b},documentWidth:function(){return c.DOM.width(document.documentElement)},documentHeight:function(){return c.DOM.height(document.documentElement)},documentOuterWidth:function(){return c.DOM.width(document.documentElement)},documentOuterHeight:function(){return c.DOM.outerHeight(document.documentElement)},bodyWidth:function(){return c.DOM.width(document.body)},
bodyHeight:function(){return c.DOM.height(document.body)},bodyOuterWidth:function(){return c.DOM.outerWidth(document.body)},bodyOuterHeight:function(){return c.DOM.outerHeight(document.body)},windowWidth:function(){return e.innerWidth},windowHeight:function(){return e.innerHeight},windowScrollLeft:function(){return e.pageXOffset},windowScrollTop:function(){return e.pageYOffset}}})})(window,window.Code.Util);
(function(e,c){c.extend(c,{Animation:{_applyTransitionDelay:50,_transitionEndLabel:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransitionEnd":"transitionend",_transitionEndHandler:null,_transitionPrefix:e.document.documentElement.style.webkitTransition!==void 0?"webkitTransition":e.document.documentElement.style.MozTransition!==void 0?"MozTransition":"transition",_transformLabel:e.document.documentElement.style.webkitTransform!==void 0?"webkitTransform":e.document.documentElement.style.MozTransition!==
void 0?"MozTransform":"transform",_getTransitionEndHandler:function(){if(c.isNothing(this._transitionEndHandler))this._transitionEndHandler=this._onTransitionEnd.bind(this);return this._transitionEndHandler},stop:function(a){if(c.Browser.isCSSTransformSupported){var b={};c.Events.remove(a,this._transitionEndLabel,this._getTransitionEndHandler());c.isNothing(a.callbackLabel)&&delete a.callbackLabel;b[this._transitionPrefix+"Property"]="";b[this._transitionPrefix+"Duration"]="";b[this._transitionPrefix+
"TimingFunction"]="";b[this._transitionPrefix+"Delay"]="";b[this._transformLabel]="";c.DOM.setStyle(a,b)}else c.isNothing(e.jQuery)||e.jQuery(a).stop(!0,!0)},fadeIn:function(a,b,d,f,g){g=c.coalesce(g,1);g<=0&&(g=1);if(b<=0&&(c.DOM.setStyle(a,"opacity",g),!c.isNothing(d))){d(a);return}c.DOM.getStyle(a,"opacity")>=1&&c.DOM.setStyle(a,"opacity",0);c.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",g,b,d,f):c.isNothing(e.jQuery)||e.jQuery(a).fadeTo(b,g,d)},fadeTo:function(a,b,d,f,c){this.fadeIn(a,
d,f,c,b)},fadeOut:function(a,b,d,f){if(b<=0&&(c.DOM.setStyle(a,"opacity",0),!c.isNothing(d))){d(a);return}c.Browser.isCSSTransformSupported?this._applyTransition(a,"opacity",0,b,d,f):e.jQuery(a).fadeTo(b,0,d)},slideBy:function(a,b,d,f,g,h){var j={},b=c.coalesce(b,0),d=c.coalesce(d,0),h=c.coalesce(h,"ease-out");j[this._transitionPrefix+"Property"]="all";j[this._transitionPrefix+"Delay"]="0";f===0?(j[this._transitionPrefix+"Duration"]="",j[this._transitionPrefix+"TimingFunction"]=""):(j[this._transitionPrefix+
"Duration"]=f+"ms",j[this._transitionPrefix+"TimingFunction"]=c.coalesce(h,"ease-out"),c.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler()));j[this._transformLabel]=c.Browser.is3dSupported?"translate3d("+b+"px, "+d+"px, 0px)":"translate("+b+"px, "+d+"px)";if(!c.isNothing(g))a.cclallcallback=g;c.DOM.setStyle(a,j);f===0&&e.setTimeout(function(){this._leaveTransforms(a)}.bind(this),this._applyTransitionDelay)},resetTranslate:function(a){var b={};b[this._transformLabel]=b[this._transformLabel]=
c.Browser.is3dSupported?"translate3d(0px, 0px, 0px)":"translate(0px, 0px)";c.DOM.setStyle(a,b)},_applyTransition:function(a,b,d,f,g,h){var j={},h=c.coalesce(h,"ease-in");j[this._transitionPrefix+"Property"]=b;j[this._transitionPrefix+"Duration"]=f+"ms";j[this._transitionPrefix+"TimingFunction"]=h;j[this._transitionPrefix+"Delay"]="0";c.Events.add(a,this._transitionEndLabel,this._getTransitionEndHandler());c.DOM.setStyle(a,j);c.isNothing(g)||(a["ccl"+b+"callback"]=g);e.setTimeout(function(){c.DOM.setStyle(a,
b,d)},this._applyTransitionDelay)},_onTransitionEnd:function(a){c.Events.remove(a.currentTarget,this._transitionEndLabel,this._getTransitionEndHandler());this._leaveTransforms(a.currentTarget)},_leaveTransforms:function(a){var b=a.style[this._transitionPrefix+"Property"],d=b!==""?"ccl"+b+"callback":"cclallcallback",f,b=c.coalesce(a.style.webkitTransform,a.style.MozTransform,a.style.transform),g,h=e.parseInt(c.DOM.getStyle(a,"left"),0),j=e.parseInt(c.DOM.getStyle(a,"top"),0),i,l,k={};b!==""&&(b=c.Browser.is3dSupported?
b.match(/translate3d\((.*?)\)/):b.match(/translate\((.*?)\)/),c.isNothing(b)||(g=b[1].split(", "),i=e.parseInt(g[0],0),l=e.parseInt(g[1],0)));k[this._transitionPrefix+"Property"]="";k[this._transitionPrefix+"Duration"]="";k[this._transitionPrefix+"TimingFunction"]="";k[this._transitionPrefix+"Delay"]="";c.DOM.setStyle(a,k);e.setTimeout(function(){if(!c.isNothing(g))k={},k[this._transformLabel]="",k.left=h+i+"px",k.top=j+l+"px",c.DOM.setStyle(a,k);c.isNothing(a[d])||(f=a[d],delete a[d],f(a))}.bind(this),
this._applyTransitionDelay)}}})})(window,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.EventTypes={onTouch:"CodeUtilTouchElementOnTouch"};a.TouchElement.ActionTypes={touchStart:"touchStart",touchMove:"touchMove",touchEnd:"touchEnd",touchMoveEnd:"touchMoveEnd",tap:"tap",doubleTap:"doubleTap",swipeLeft:"swipeLeft",swipeRight:"swipeRight",swipeUp:"swipeUp",swipeDown:"swipeDown",gestureStart:"gestureStart",gestureChange:"gestureChange",gestureEnd:"gestureEnd"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.Util.TouchElement");a.TouchElement.TouchElementClass=c({el:null,captureSettings:null,touchStartPoint:null,touchEndPoint:null,touchStartTime:null,doubleTapTimeout:null,touchStartHandler:null,touchMoveHandler:null,touchEndHandler:null,mouseDownHandler:null,mouseMoveHandler:null,mouseUpHandler:null,mouseOutHandler:null,gestureStartHandler:null,gestureChangeHandler:null,gestureEndHandler:null,swipeThreshold:null,swipeTimeThreshold:null,doubleTapSpeed:null,dispose:function(){var b;
this.removeEventHandlers();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(b,d){this.el=b;this.captureSettings={swipe:!1,move:!1,gesture:!1,doubleTap:!1,preventDefaultTouchEvents:!0};a.extend(this.captureSettings,d);this.swipeThreshold=50;this.doubleTapSpeed=this.swipeTimeThreshold=250;this.touchStartPoint={x:0,y:0};this.touchEndPoint={x:0,y:0}},addEventHandlers:function(){if(a.isNothing(this.touchStartHandler))this.touchStartHandler=this.onTouchStart.bind(this),this.touchMoveHandler=
this.onTouchMove.bind(this),this.touchEndHandler=this.onTouchEnd.bind(this),this.mouseDownHandler=this.onMouseDown.bind(this),this.mouseMoveHandler=this.onMouseMove.bind(this),this.mouseUpHandler=this.onMouseUp.bind(this),this.mouseOutHandler=this.onMouseOut.bind(this),this.gestureStartHandler=this.onGestureStart.bind(this),this.gestureChangeHandler=this.onGestureChange.bind(this),this.gestureEndHandler=this.onGestureEnd.bind(this);a.Events.add(this.el,"touchstart",this.touchStartHandler);this.captureSettings.move&&
a.Events.add(this.el,"touchmove",this.touchMoveHandler);a.Events.add(this.el,"touchend",this.touchEndHandler);a.Events.add(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.add(this.el,"gesturestart",this.gestureStartHandler),a.Events.add(this.el,"gesturechange",this.gestureChangeHandler),a.Events.add(this.el,"gestureend",this.gestureEndHandler))},removeEventHandlers:function(){a.Events.remove(this.el,"touchstart",this.touchStartHandler);
this.captureSettings.move&&a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);a.Events.remove(this.el,"mousedown",this.mouseDownHandler);a.Browser.isGestureSupported&&this.captureSettings.gesture&&(a.Events.remove(this.el,"gesturestart",this.gestureStartHandler),a.Events.remove(this.el,"gesturechange",this.gestureChangeHandler),a.Events.remove(this.el,"gestureend",this.gestureEndHandler))},getTouchPoint:function(a){return{x:a[0].pageX,
y:a[0].pageY}},fireTouchEvent:function(b){var d=0,f=0,c=0,h,d=this.touchEndPoint.x-this.touchStartPoint.x,f=this.touchEndPoint.y-this.touchStartPoint.y,c=Math.sqrt(d*d+f*f);if(this.captureSettings.swipe&&(h=new Date,h-=this.touchStartTime,h<=this.swipeTimeThreshold)){if(e.Math.abs(d)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:d<0?a.TouchElement.ActionTypes.swipeLeft:a.TouchElement.ActionTypes.swipeRight,targetEl:b.target,
currentTargetEl:b.currentTarget});return}if(e.Math.abs(f)>=this.swipeThreshold){a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:f<0?a.TouchElement.ActionTypes.swipeUp:a.TouchElement.ActionTypes.swipeDown,targetEl:b.target,currentTargetEl:b.currentTarget});return}}c>1?a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMoveEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}):
this.captureSettings.doubleTap?a.isNothing(this.doubleTapTimeout)?this.doubleTapTimeout=e.setTimeout(function(){this.doubleTapTimeout=null;a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})}.bind(this),this.doubleTapSpeed):(e.clearTimeout(this.doubleTapTimeout),this.doubleTapTimeout=null,a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,
action:a.TouchElement.ActionTypes.doubleTap,targetEl:b.target,currentTargetEl:b.currentTarget})):a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,point:this.touchEndPoint,action:a.TouchElement.ActionTypes.tap,targetEl:b.target,currentTargetEl:b.currentTarget})},onTouchStart:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();a.Events.remove(this.el,"mousedown",this.mouseDownHandler);var d=a.Events.getTouchEvent(b).touches;d.length>1&&this.captureSettings.gesture?
this.isGesture=!0:(this.touchStartTime=new Date,this.isGesture=!1,this.touchStartPoint=this.getTouchPoint(d),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget}))},onTouchMove:function(b){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();if(!this.isGesture||!this.captureSettings.gesture){var d=a.Events.getTouchEvent(b).touches;a.Events.fire(this,
{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,point:this.getTouchPoint(d),targetEl:b.target,currentTargetEl:b.currentTarget})}},onTouchEnd:function(b){if(!this.isGesture||!this.captureSettings.gesture){this.captureSettings.preventDefaultTouchEvents&&b.preventDefault();var d=a.Events.getTouchEvent(b);this.touchEndPoint=this.getTouchPoint(!a.isNothing(d.changedTouches)?d.changedTouches:d.touches);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,
target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)}},onMouseDown:function(b){b.preventDefault();a.Events.remove(this.el,"touchstart",this.mouseDownHandler);a.Events.remove(this.el,"touchmove",this.touchMoveHandler);a.Events.remove(this.el,"touchend",this.touchEndHandler);this.captureSettings.move&&a.Events.add(this.el,"mousemove",this.mouseMoveHandler);a.Events.add(this.el,"mouseup",this.mouseUpHandler);
a.Events.add(this.el,"mouseout",this.mouseOutHandler);this.touchStartTime=new Date;this.isGesture=!1;this.touchStartPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchStart,point:this.touchStartPoint,targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseMove:function(b){b.preventDefault();a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchMove,
point:a.Events.getMousePosition(b),targetEl:b.target,currentTargetEl:b.currentTarget})},onMouseUp:function(b){b.preventDefault();this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler);a.Events.remove(this.el,"mouseup",this.mouseUpHandler);a.Events.remove(this.el,"mouseout",this.mouseOutHandler);this.touchEndPoint=a.Events.getMousePosition(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,
targetEl:b.target,currentTargetEl:b.currentTarget});this.fireTouchEvent(b)},onMouseOut:function(b){var d=b.relatedTarget;if(!(this.el===d||a.DOM.isChildOf(d,this.el)))b.preventDefault(),this.captureSettings.move&&a.Events.remove(this.el,"mousemove",this.mouseMoveHandler),a.Events.remove(this.el,"mouseup",this.mouseUpHandler),a.Events.remove(this.el,"mouseout",this.mouseOutHandler),this.touchEndPoint=a.Events.getMousePosition(b),a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,
action:a.TouchElement.ActionTypes.touchEnd,point:this.touchEndPoint,targetEl:b.target,currentTargetEl:b.currentTarget}),this.fireTouchEvent(b)},onGestureStart:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureStart,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureChange:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);
a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureChange,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})},onGestureEnd:function(b){b.preventDefault();var d=a.Events.getTouchEvent(b);a.Events.fire(this,{type:a.TouchElement.EventTypes.onTouch,target:this,action:a.TouchElement.ActionTypes.gestureEnd,scale:d.scale,rotation:d.rotation,targetEl:b.target,currentTargetEl:b.currentTarget})}})})(window,window.klass,
window.Code.Util);(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Image");e.Code.PhotoSwipe.Image.EventTypes={onLoad:"onLoad",onError:"onError"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Image");var b=e.Code.PhotoSwipe;b.Image.ImageClass=c({refObj:null,imageEl:null,src:null,caption:null,metaData:null,imageLoadHandler:null,imageErrorHandler:null,dispose:function(){var d;this.shrinkImage();for(d in this)a.objectHasProperty(this,d)&&(this[d]=null)},initialize:function(a,b,c,h){this.refObj=a;this.src=this.originalSrc=b;this.caption=c;this.metaData=h;this.imageEl=new e.Image;this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=
this.onImageError.bind(this)},load:function(){this.imageEl.originalSrc=a.coalesce(this.imageEl.originalSrc,"");this.imageEl.originalSrc===this.src?this.imageEl.isError?a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this}):a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this}):(this.imageEl.isError=!1,this.imageEl.isLoading=!0,this.imageEl.naturalWidth=null,this.imageEl.naturalHeight=null,this.imageEl.isLandscape=!1,this.imageEl.onload=this.imageLoadHandler,this.imageEl.onerror=
this.imageErrorHandler,this.imageEl.onabort=this.imageErrorHandler,this.imageEl.originalSrc=this.src,this.imageEl.src=this.src)},shrinkImage:function(){if(!a.isNothing(this.imageEl)&&this.imageEl.src.indexOf(this.src)>-1)this.imageEl.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",a.isNothing(this.imageEl.parentNode)||a.DOM.removeChild(this.imageEl,this.imageEl.parentNode)},onImageLoad:function(){this.imageEl.onload=null;this.imageEl.naturalWidth=a.coalesce(this.imageEl.naturalWidth,
this.imageEl.width);this.imageEl.naturalHeight=a.coalesce(this.imageEl.naturalHeight,this.imageEl.height);this.imageEl.isLandscape=this.imageEl.naturalWidth>this.imageEl.naturalHeight;this.imageEl.isLoading=!1;a.Events.fire(this,{type:b.Image.EventTypes.onLoad,target:this})},onImageError:function(){this.imageEl.onload=null;this.imageEl.onerror=null;this.imageEl.onabort=null;this.imageEl.isLoading=!1;this.imageEl.isError=!0;a.Events.fire(this,{type:b.Image.EventTypes.onError,target:this})}})})(window,
window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Cache");e=e.Code.PhotoSwipe;e.Cache.Mode={normal:"normal",aggressive:"aggressive"};e.Cache.Functions={getImageSource:function(a){return a.href},getImageCaption:function(b){if(b.nodeName==="IMG")return a.DOM.getAttribute(b,"alt");var d,f,c;d=0;for(f=b.childNodes.length;d<f;d++)if(c=b.childNodes[d],b.childNodes[d].nodeName==="IMG")return a.DOM.getAttribute(c,"alt")},getImageMetaData:function(){return{}}}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Cache");var b=e.Code.PhotoSwipe;b.Cache.CacheClass=c({images:null,settings:null,dispose:function(){var b,f,c;if(!a.isNothing(this.images)){f=0;for(c=this.images.length;f<c;f++)this.images[f].dispose();this.images.length=0}for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(a,f){var c,e,j,i,l,k;this.settings=f;this.images=[];c=0;for(e=a.length;c<e;c++)j=a[c],i=this.settings.getImageSource(j),l=this.settings.getImageCaption(j),
k=this.settings.getImageMetaData(j),this.images.push(new b.Image.ImageClass(j,i,l,k))},getImages:function(d){var f,c,e=[],j;f=0;for(c=d.length;f<c;f++){j=this.images[d[f]];if(this.settings.cacheMode===b.Cache.Mode.aggressive)j.cacheDoNotShrink=!0;e.push(j)}if(this.settings.cacheMode===b.Cache.Mode.aggressive){f=0;for(c=this.images.length;f<c;f++)j=this.images[f],a.objectHasProperty(j,"cacheDoNotShrink")?delete j.cacheDoNotShrink:j.shrinkImage()}return e}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Image);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");e.Code.PhotoSwipe.DocumentOverlay.CssClasses={documentOverlay:"ps-document-overlay"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.DocumentOverlay");var b=e.Code.PhotoSwipe;b.DocumentOverlay.DocumentOverlayClass=c({el:null,settings:null,initialBodyHeight:null,dispose:function(){var b;a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d){this.settings=d;this.el=a.DOM.createElement("div",{"class":b.DocumentOverlay.CssClasses.documentOverlay},"");a.DOM.setStyle(this.el,{display:"block",
position:"absolute",left:0,top:0,zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);a.Animation.resetTranslate(this.el);this.initialBodyHeight=a.DOM.bodyOuterHeight()},resetPosition:function(){var b,f,c;if(this.settings.target===e){b=a.DOM.windowWidth();f=a.DOM.bodyOuterHeight()*2;c=this.settings.jQueryMobile?a.DOM.windowScrollTop()+"px":"0px";if(f<1)f=this.initialBodyHeight;a.DOM.windowHeight()>f&&
(f=a.DOM.windowHeight())}else b=a.DOM.width(this.settings.target),f=a.DOM.height(this.settings.target),c="0px";a.DOM.setStyle(this.el,{width:b,height:f,top:c})},fadeIn:function(b,f){this.resetPosition();a.DOM.setStyle(this.el,"opacity",0);a.DOM.show(this.el);a.Animation.fadeIn(this.el,b,f)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");e=e.Code.PhotoSwipe;e.Carousel.EventTypes={onSlideByEnd:"PhotoSwipeCarouselOnSlideByEnd",onSlideshowStart:"PhotoSwipeCarouselOnSlideshowStart",onSlideshowStop:"PhotoSwipeCarouselOnSlideshowStop"};e.Carousel.CssClasses={carousel:"ps-carousel",content:"ps-carousel-content",item:"ps-carousel-item",itemLoading:"ps-carousel-item-loading",itemError:"ps-carousel-item-error"};e.Carousel.SlideByAction={previous:"previous",current:"current",next:"next"}})(window,
window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");var b=e.Code.PhotoSwipe;b.Carousel.CarouselClass=c({el:null,contentEl:null,settings:null,cache:null,slideByEndHandler:null,currentCacheIndex:null,isSliding:null,isSlideshowActive:null,lastSlideByAction:null,touchStartPoint:null,touchStartPosition:null,imageLoadHandler:null,imageErrorHandler:null,slideshowTimeout:null,dispose:function(){var d,f,c;f=0;for(c=this.cache.images.length;f<c;f++)a.Events.remove(this.cache.images[f],b.Image.EventTypes.onLoad,
this.imageLoadHandler),a.Events.remove(this.cache.images[f],b.Image.EventTypes.onError,this.imageErrorHandler);this.stopSlideshow();a.Animation.stop(this.el);a.DOM.removeChild(this.el,this.el.parentNode);for(d in this)a.objectHasProperty(this,d)&&(this[d]=null)},initialize:function(d,f){var c,h,j;this.cache=d;this.settings=f;this.slideByEndHandler=this.onSlideByEnd.bind(this);this.imageLoadHandler=this.onImageLoad.bind(this);this.imageErrorHandler=this.onImageError.bind(this);this.currentCacheIndex=
0;this.isSlideshowActive=this.isSliding=!1;if(this.cache.images.length<3)this.settings.loop=!1;this.el=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.carousel},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex});a.DOM.hide(this.el);this.contentEl=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.content},"");a.DOM.setStyle(this.contentEl,{display:"block",position:"absolute",left:0,top:0});a.DOM.appendChild(this.contentEl,
this.el);h=d.images.length<3?d.images.length:3;for(c=0;c<h;c++)j=a.DOM.createElement("div",{"class":b.Carousel.CssClasses.item+" "+b.Carousel.CssClasses.item+"-"+c},""),a.DOM.setAttribute(j,"style","float: left;"),a.DOM.setStyle(j,{display:"block",position:"relative",left:0,top:0,overflow:"hidden"}),this.settings.margin>0&&a.DOM.setStyle(j,{marginRight:this.settings.margin+"px"}),a.DOM.appendChild(j,this.contentEl);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target)},
resetPosition:function(){var d,f,c,h,j,i;this.settings.target===e?(d=a.DOM.windowWidth(),f=a.DOM.windowHeight(),c=a.DOM.windowScrollTop()+"px"):(d=a.DOM.width(this.settings.target),f=a.DOM.height(this.settings.target),c="0px");h=this.settings.margin>0?d+this.settings.margin:d;j=a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl);h*=j.length;a.DOM.setStyle(this.el,{top:c,width:d,height:f});a.DOM.setStyle(this.contentEl,{width:h,height:f});c=0;for(h=j.length;c<h;c++)i=j[c],a.DOM.setStyle(i,{width:d,
height:f}),i=a.DOM.find("img",i)[0],a.isNothing(i)||this.resetImagePosition(i);this.setContentLeftPosition()},resetImagePosition:function(b){if(!a.isNothing(b)){a.DOM.getAttribute(b,"src");var c,e,h,j=a.DOM.width(this.el),i=a.DOM.height(this.el);this.settings.imageScaleMethod==="fitNoUpscale"?(e=b.naturalWidth,h=b.naturalHeight,e>j&&(c=j/e,e=Math.round(e*c),h=Math.round(h*c)),h>i&&(c=i/h,h=Math.round(h*c),e=Math.round(e*c))):(c=b.isLandscape?j/b.naturalWidth:i/b.naturalHeight,e=Math.round(b.naturalWidth*
c),h=Math.round(b.naturalHeight*c),this.settings.imageScaleMethod==="zoom"?(c=1,h<i?c=i/h:e<j&&(c=j/e),c!==1&&(e=Math.round(e*c),h=Math.round(h*c))):this.settings.imageScaleMethod==="fit"&&(c=1,e>j?c=j/e:h>i&&(c=i/h),c!==1&&(e=Math.round(e*c),h=Math.round(h*c))));a.DOM.setStyle(b,{position:"absolute",width:e,height:h,top:Math.round((i-h)/2)+"px",left:Math.round((j-e)/2)+"px",display:"block"})}},setContentLeftPosition:function(){var b,c,g;b=this.settings.target===e?a.DOM.windowWidth():a.DOM.width(this.settings.target);
c=this.getItemEls();g=0;this.settings.loop?g=(b+this.settings.margin)*-1:this.currentCacheIndex===this.cache.images.length-1?g=(c.length-1)*(b+this.settings.margin)*-1:this.currentCacheIndex>0&&(g=(b+this.settings.margin)*-1);a.DOM.setStyle(this.contentEl,{left:g+"px"})},show:function(d){this.currentCacheIndex=d;this.resetPosition();this.setImages(!1);a.DOM.show(this.el);a.Animation.resetTranslate(this.contentEl);var d=this.getItemEls(),c,e;c=0;for(e=d.length;c<e;c++)a.Animation.resetTranslate(d[c]);
a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:b.Carousel.SlideByAction.current,cacheIndex:this.currentCacheIndex})},setImages:function(a){var b,c=this.getItemEls();b=this.currentCacheIndex+1;var e=this.currentCacheIndex-1;this.settings.loop?(b>this.cache.images.length-1&&(b=0),e<0&&(e=this.cache.images.length-1),b=this.cache.getImages([e,this.currentCacheIndex,b]),a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2]),this.addCacheImageToItemEl(b[0],
c[0])):c.length===1?a||(b=this.cache.getImages([this.currentCacheIndex]),this.addCacheImageToItemEl(b[0],c[0])):c.length===2?this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,this.currentCacheIndex+1]),a||this.addCacheImageToItemEl(b[0],c[0]),this.addCacheImageToItemEl(b[1],c[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[0],c[0])):this.currentCacheIndex===0?(b=this.cache.getImages([this.currentCacheIndex,
this.currentCacheIndex+1,this.currentCacheIndex+2]),a||this.addCacheImageToItemEl(b[0],c[0]),this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2])):(this.currentCacheIndex===this.cache.images.length-1?(b=this.cache.getImages([this.currentCacheIndex-2,this.currentCacheIndex-1,this.currentCacheIndex]),a||this.addCacheImageToItemEl(b[2],c[2]),this.addCacheImageToItemEl(b[1],c[1])):(b=this.cache.getImages([this.currentCacheIndex-1,this.currentCacheIndex,this.currentCacheIndex+1]),
a||this.addCacheImageToItemEl(b[1],c[1]),this.addCacheImageToItemEl(b[2],c[2])),this.addCacheImageToItemEl(b[0],c[0]))},addCacheImageToItemEl:function(d,c){a.DOM.removeClass(c,b.Carousel.CssClasses.itemError);a.DOM.addClass(c,b.Carousel.CssClasses.itemLoading);a.DOM.removeChildren(c);a.DOM.setStyle(d.imageEl,{display:"none"});a.DOM.appendChild(d.imageEl,c);a.Animation.resetTranslate(d.imageEl);a.Events.add(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.add(d,b.Image.EventTypes.onError,
this.imageErrorHandler);d.load()},slideCarousel:function(d,c,g){if(!this.isSliding){var h,j;h=this.settings.target===e?a.DOM.windowWidth()+this.settings.margin:a.DOM.width(this.settings.target)+this.settings.margin;g=a.coalesce(g,this.settings.slideSpeed);if(!(e.Math.abs(j)<1)){switch(c){case a.TouchElement.ActionTypes.swipeLeft:d=h*-1;break;case a.TouchElement.ActionTypes.swipeRight:d=h;break;default:j=d.x-this.touchStartPoint.x,d=e.Math.abs(j)>h/2?j>0?h:h*-1:0}this.lastSlideByAction=d<0?b.Carousel.SlideByAction.next:
d>0?b.Carousel.SlideByAction.previous:b.Carousel.SlideByAction.current;if(!this.settings.loop&&(this.lastSlideByAction===b.Carousel.SlideByAction.previous&&this.currentCacheIndex===0||this.lastSlideByAction===b.Carousel.SlideByAction.next&&this.currentCacheIndex===this.cache.images.length-1))d=0,this.lastSlideByAction=b.Carousel.SlideByAction.current;this.isSliding=!0;this.doSlideCarousel(d,g)}}},moveCarousel:function(a){this.isSliding||this.settings.enableDrag&&this.doMoveCarousel(a.x-this.touchStartPoint.x)},
getItemEls:function(){return a.DOM.find("."+b.Carousel.CssClasses.item,this.contentEl)},previous:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeRight,this.settings.nextPreviousSlideSpeed)},next:function(){this.stopSlideshow();this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft,this.settings.nextPreviousSlideSpeed)},slideshowNext:function(){this.slideCarousel({x:0,y:0},a.TouchElement.ActionTypes.swipeLeft)},startSlideshow:function(){this.stopSlideshow();
this.isSlideshowActive=!0;this.slideshowTimeout=e.setTimeout(this.slideshowNext.bind(this),this.settings.slideshowDelay);a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStart,target:this})},stopSlideshow:function(){if(!a.isNothing(this.slideshowTimeout))e.clearTimeout(this.slideshowTimeout),this.slideshowTimeout=null,this.isSlideshowActive=!1,a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideshowStop,target:this})},onSlideByEnd:function(){if(!a.isNothing(this.isSliding)){var d=this.getItemEls();
this.isSliding=!1;this.lastSlideByAction===b.Carousel.SlideByAction.next?this.currentCacheIndex+=1:this.lastSlideByAction===b.Carousel.SlideByAction.previous&&(this.currentCacheIndex-=1);if(this.settings.loop)if(this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(d[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl),this.currentCacheIndex<0)this.currentCacheIndex=this.cache.images.length-1;else{if(this.currentCacheIndex===
this.cache.images.length)this.currentCacheIndex=0}else this.cache.images.length>3&&(this.currentCacheIndex>1&&this.currentCacheIndex<this.cache.images.length-2?this.lastSlideByAction===b.Carousel.SlideByAction.next?a.DOM.appendChild(d[0],this.contentEl):this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl):this.currentCacheIndex===1?this.lastSlideByAction===b.Carousel.SlideByAction.previous&&a.DOM.insertBefore(d[d.length-1],d[0],this.contentEl):
this.currentCacheIndex===this.cache.images.length-2&&this.lastSlideByAction===b.Carousel.SlideByAction.next&&a.DOM.appendChild(d[0],this.contentEl));this.lastSlideByAction!==b.Carousel.SlideByAction.current&&(this.setContentLeftPosition(),this.setImages(!0));a.Events.fire(this,{type:b.Carousel.EventTypes.onSlideByEnd,target:this,action:this.lastSlideByAction,cacheIndex:this.currentCacheIndex});this.isSlideshowActive&&(this.lastSlideByAction!==b.Carousel.SlideByAction.current?this.startSlideshow():
this.stopSlideshow())}},onTouch:function(b,c){this.stopSlideshow();switch(b){case a.TouchElement.ActionTypes.touchStart:this.touchStartPoint=c;this.touchStartPosition={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)};break;case a.TouchElement.ActionTypes.touchMove:this.moveCarousel(c);break;case a.TouchElement.ActionTypes.touchMoveEnd:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.slideCarousel(c,
b)}},onImageLoad:function(d){d=d.target;a.isNothing(d.imageEl.parentNode)||(a.DOM.removeClass(d.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),this.resetImagePosition(d.imageEl));a.Events.remove(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(d,b.Image.EventTypes.onError,this.imageErrorHandler)},onImageError:function(d){d=d.target;a.isNothing(d.imageEl.parentNode)||(a.DOM.removeClass(d.imageEl.parentNode,b.Carousel.CssClasses.itemLoading),a.DOM.addClass(d.imageEl.parentNode,
b.Carousel.CssClasses.itemError));a.Events.remove(d,b.Image.EventTypes.onLoad,this.imageLoadHandler);a.Events.remove(d,b.Image.EventTypes.onError,this.imageErrorHandler)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Carousel");c=e.Code.PhotoSwipe;c.Carousel.CarouselClass=c.Carousel.CarouselClass.extend({getStartingPos:function(){var b=this.touchStartPosition;a.isNothing(b)&&(b={x:e.parseInt(a.DOM.getStyle(this.contentEl,"left"),0),y:e.parseInt(a.DOM.getStyle(this.contentEl,"top"),0)});return b},doMoveCarousel:function(b){var d;a.Browser.isCSSTransformSupported?(d={},d[a.Animation._transitionPrefix+"Property"]="all",d[a.Animation._transitionPrefix+"Duration"]=
"",d[a.Animation._transitionPrefix+"TimingFunction"]="",d[a.Animation._transitionPrefix+"Delay"]="0",d[a.Animation._transformLabel]=a.Browser.is3dSupported?"translate3d("+b+"px, 0px, 0px)":"translate("+b+"px, 0px)",a.DOM.setStyle(this.contentEl,d)):a.isNothing(e.jQuery)||e.jQuery(this.contentEl).stop().css("left",this.getStartingPos().x+b+"px")},doSlideCarousel:function(b,d){var c;if(d<=0)this.slideByEndHandler();else if(a.Browser.isCSSTransformSupported)c=a.coalesce(this.contentEl.style.webkitTransform,
this.contentEl.style.MozTransform,this.contentEl.style.transform,""),c.indexOf("translate3d("+b)===0?this.slideByEndHandler():c.indexOf("translate("+b)===0?this.slideByEndHandler():a.Animation.slideBy(this.contentEl,b,0,d,this.slideByEndHandler,this.settings.slideTimingFunction);else if(!a.isNothing(e.jQuery)){c={left:this.getStartingPos().x+b+"px"};if(this.settings.animationTimingFunction==="ease-out")this.settings.animationTimingFunction="easeOutQuad";if(a.isNothing(e.jQuery.easing[this.settings.animationTimingFunction]))this.settings.animationTimingFunction=
"linear";e.jQuery(this.contentEl).animate(c,this.settings.slideSpeed,this.settings.animationTimingFunction,this.slideByEndHandler)}}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.TouchElement);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.CssClasses={toolbar:"ps-toolbar",toolbarContent:"ps-toolbar-content",toolbarTop:"ps-toolbar-top",caption:"ps-caption",captionBottom:"ps-caption-bottom",captionContent:"ps-caption-content",close:"ps-toolbar-close",play:"ps-toolbar-play",previous:"ps-toolbar-previous",previousDisabled:"ps-toolbar-previous-disabled",next:"ps-toolbar-next",nextDisabled:"ps-toolbar-next-disabled"};b.Toolbar.ToolbarAction=
{close:"close",play:"play",next:"next",previous:"previous",none:"none"};b.Toolbar.EventTypes={onTap:"PhotoSwipeToolbarOnClick",onBeforeShow:"PhotoSwipeToolbarOnBeforeShow",onShow:"PhotoSwipeToolbarOnShow",onBeforeHide:"PhotoSwipeToolbarOnBeforeHide",onHide:"PhotoSwipeToolbarOnHide"};b.Toolbar.getToolbar=function(){return'<div class="'+b.Toolbar.CssClasses.close+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.play+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+
'"></div></div><div class="'+b.Toolbar.CssClasses.previous+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div><div class="'+b.Toolbar.CssClasses.next+'"><div class="'+b.Toolbar.CssClasses.toolbarContent+'"></div></div>'}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.Toolbar");var b=e.Code.PhotoSwipe;b.Toolbar.ToolbarClass=c({toolbarEl:null,closeEl:null,playEl:null,previousEl:null,nextEl:null,captionEl:null,captionContentEl:null,currentCaption:null,settings:null,cache:null,timeout:null,isVisible:null,fadeOutHandler:null,touchStartHandler:null,touchMoveHandler:null,clickHandler:null,dispose:function(){var b;this.clearTimeout();this.removeEventHandlers();a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);
a.DOM.removeChild(this.toolbarEl,this.toolbarEl.parentNode);a.DOM.removeChild(this.captionEl,this.captionEl.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d,c){var g;this.settings=c;this.cache=d;this.isVisible=!1;this.fadeOutHandler=this.onFadeOut.bind(this);this.touchStartHandler=this.onTouchStart.bind(this);this.touchMoveHandler=this.onTouchMove.bind(this);this.clickHandler=this.onClick.bind(this);g=b.Toolbar.CssClasses.toolbar;this.settings.captionAndToolbarFlipPosition&&
(g=g+" "+b.Toolbar.CssClasses.toolbarTop);this.toolbarEl=a.DOM.createElement("div",{"class":g},this.settings.getToolbar());a.DOM.setStyle(this.toolbarEl,{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.toolbarEl):a.DOM.appendChild(this.toolbarEl,this.settings.target);a.DOM.hide(this.toolbarEl);this.closeEl=a.DOM.find("."+b.Toolbar.CssClasses.close,this.toolbarEl)[0];this.settings.preventHide&&!a.isNothing(this.closeEl)&&a.DOM.hide(this.closeEl);
this.playEl=a.DOM.find("."+b.Toolbar.CssClasses.play,this.toolbarEl)[0];this.settings.preventSlideshow&&!a.isNothing(this.playEl)&&a.DOM.hide(this.playEl);this.nextEl=a.DOM.find("."+b.Toolbar.CssClasses.next,this.toolbarEl)[0];this.previousEl=a.DOM.find("."+b.Toolbar.CssClasses.previous,this.toolbarEl)[0];g=b.Toolbar.CssClasses.caption;this.settings.captionAndToolbarFlipPosition&&(g=g+" "+b.Toolbar.CssClasses.captionBottom);this.captionEl=a.DOM.createElement("div",{"class":g},"");a.DOM.setStyle(this.captionEl,
{left:0,position:"absolute",overflow:"hidden",zIndex:this.settings.zIndex});this.settings.target===e?a.DOM.appendToBody(this.captionEl):a.DOM.appendChild(this.captionEl,this.settings.target);a.DOM.hide(this.captionEl);this.captionContentEl=a.DOM.createElement("div",{"class":b.Toolbar.CssClasses.captionContent},"");a.DOM.appendChild(this.captionContentEl,this.captionEl);this.addEventHandlers()},resetPosition:function(){var b,c,g;this.settings.target===e?(this.settings.captionAndToolbarFlipPosition?
(c=a.DOM.windowScrollTop(),g=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.captionEl)):(c=a.DOM.windowScrollTop()+a.DOM.windowHeight()-a.DOM.height(this.toolbarEl),g=a.DOM.windowScrollTop()),b=a.DOM.windowWidth()):(this.settings.captionAndToolbarFlipPosition?(c="0",g=a.DOM.height(this.settings.target)-a.DOM.height(this.captionEl)):(c=a.DOM.height(this.settings.target)-a.DOM.height(this.toolbarEl),g=0),b=a.DOM.width(this.settings.target));a.DOM.setStyle(this.toolbarEl,{top:c+"px",
width:b});a.DOM.setStyle(this.captionEl,{top:g+"px",width:b})},toggleVisibility:function(a){this.isVisible?this.fadeOut():this.show(a)},show:function(d){a.Animation.stop(this.toolbarEl);a.Animation.stop(this.captionEl);this.resetPosition();this.setToolbarStatus(d);a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeShow,target:this});this.showToolbar();this.setCaption(d);this.showCaption();this.isVisible=!0;this.setTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onShow,target:this})},setTimeout:function(){if(this.settings.captionAndToolbarAutoHideDelay>
0)this.clearTimeout(),this.timeout=e.setTimeout(this.fadeOut.bind(this),this.settings.captionAndToolbarAutoHideDelay)},clearTimeout:function(){if(!a.isNothing(this.timeout))e.clearTimeout(this.timeout),this.timeout=null},fadeOut:function(){this.clearTimeout();a.Events.fire(this,{type:b.Toolbar.EventTypes.onBeforeHide,target:this});a.Animation.fadeOut(this.toolbarEl,this.settings.fadeOutSpeed);a.Animation.fadeOut(this.captionEl,this.settings.fadeOutSpeed,this.fadeOutHandler);this.isVisible=!1},addEventHandlers:function(){a.Browser.isTouchSupported&&
(a.Browser.blackberry||a.Events.add(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.add(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.add(this.captionEl,"touchmove",this.touchMoveHandler));a.Events.add(this.toolbarEl,"click",this.clickHandler)},removeEventHandlers:function(){a.Browser.isTouchSupported&&(a.Browser.blackberry||a.Events.remove(this.toolbarEl,"touchstart",this.touchStartHandler),a.Events.remove(this.toolbarEl,"touchmove",this.touchMoveHandler),a.Events.remove(this.captionEl,
"touchmove",this.touchMoveHandler));a.Events.remove(this.toolbarEl,"click",this.clickHandler)},handleTap:function(d){this.clearTimeout();var c;if(d.target===this.nextEl||a.DOM.isChildOf(d.target,this.nextEl))c=b.Toolbar.ToolbarAction.next;else if(d.target===this.previousEl||a.DOM.isChildOf(d.target,this.previousEl))c=b.Toolbar.ToolbarAction.previous;else if(d.target===this.closeEl||a.DOM.isChildOf(d.target,this.closeEl))c=b.Toolbar.ToolbarAction.close;else if(d.target===this.playEl||a.DOM.isChildOf(d.target,
this.playEl))c=b.Toolbar.ToolbarAction.play;this.setTimeout();if(a.isNothing(c))c=b.Toolbar.ToolbarAction.none;a.Events.fire(this,{type:b.Toolbar.EventTypes.onTap,target:this,action:c,tapTarget:d.target})},setCaption:function(b){a.DOM.removeChildren(this.captionContentEl);this.currentCaption=a.coalesce(this.cache.images[b].caption,"\u00a0");if(a.isObject(this.currentCaption))a.DOM.appendChild(this.currentCaption,this.captionContentEl);else{if(this.currentCaption==="")this.currentCaption="\u00a0";
a.DOM.appendText(this.currentCaption,this.captionContentEl)}this.currentCaption=this.currentCaption==="\u00a0"?"":this.currentCaption;this.resetPosition()},showToolbar:function(){a.DOM.setStyle(this.toolbarEl,{opacity:this.settings.captionAndToolbarOpacity});a.DOM.show(this.toolbarEl)},showCaption:function(){(this.currentCaption===""||this.captionContentEl.childNodes.length<1)&&!this.settings.captionAndToolbarShowEmptyCaptions?a.DOM.hide(this.captionEl):(a.DOM.setStyle(this.captionEl,{opacity:this.settings.captionAndToolbarOpacity}),
a.DOM.show(this.captionEl))},setToolbarStatus:function(d){this.settings.loop||(a.DOM.removeClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled),a.DOM.removeClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled),d>0&&d<this.cache.images.length-1||(d===0&&(a.isNothing(this.previousEl)||a.DOM.addClass(this.previousEl,b.Toolbar.CssClasses.previousDisabled)),d===this.cache.images.length-1&&(a.isNothing(this.nextEl)||a.DOM.addClass(this.nextEl,b.Toolbar.CssClasses.nextDisabled))))},onFadeOut:function(){a.DOM.hide(this.toolbarEl);
a.DOM.hide(this.captionEl);a.Events.fire(this,{type:b.Toolbar.EventTypes.onHide,target:this})},onTouchStart:function(b){// JOSHFIRE: code removed, see top comment
},onTouchMove:function(a){a.preventDefault()},onClick:function(a){a.preventDefault();this.handleTap(a)}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.UILayer");e.Code.PhotoSwipe.UILayer.CssClasses={uiLayer:"ps-uilayer"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.UILayer");var b=e.Code.PhotoSwipe;b.UILayer.UILayerClass=a.TouchElement.TouchElementClass.extend({el:null,settings:null,dispose:function(){var b;this.removeEventHandlers();a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(d){this.settings=d;this.el=a.DOM.createElement("div",{"class":b.UILayer.CssClasses.uiLayer},"");a.DOM.setStyle(this.el,{display:"block",position:"absolute",
left:0,top:0,overflow:"hidden",zIndex:this.settings.zIndex,opacity:0});a.DOM.hide(this.el);this.settings.target===e?a.DOM.appendToBody(this.el):a.DOM.appendChild(this.el,this.settings.target);this.supr(this.el,{swipe:!0,move:!0,gesture:a.Browser.iOS,doubleTap:!0,preventDefaultTouchEvents:this.settings.preventDefaultTouchEvents})},resetPosition:function(){this.settings.target===e?a.DOM.setStyle(this.el,{top:a.DOM.windowScrollTop()+"px",width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}):a.DOM.setStyle(this.el,
{top:"0px",width:a.DOM.width(this.settings.target),height:a.DOM.height(this.settings.target)})},show:function(){this.resetPosition();a.DOM.show(this.el);this.addEventHandlers()},addEventHandlers:function(){this.supr()},removeEventHandlers:function(){this.supr()}})})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");e=e.Code.PhotoSwipe;e.ZoomPanRotate.CssClasses={zoomPanRotate:"ps-zoom-pan-rotate"};e.ZoomPanRotate.EventTypes={onTransform:"PhotoSwipeZoomPanRotateOnTransform"}})(window,window.klass,window.Code.Util);
(function(e,c,a){a.registerNamespace("Code.PhotoSwipe.ZoomPanRotate");var b=e.Code.PhotoSwipe;b.ZoomPanRotate.ZoomPanRotateClass=c({el:null,settings:null,containerEl:null,imageEl:null,transformSettings:null,panStartingPoint:null,transformEl:null,dispose:function(){var b;a.DOM.removeChild(this.el,this.el.parentNode);for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,f,g){var h,j,i;this.settings=c;this.settings.target===e?(c=document.body,h=a.DOM.windowWidth(),j=a.DOM.windowHeight(),
i=a.DOM.windowScrollTop()+"px"):(c=this.settings.target,h=a.DOM.width(c),j=a.DOM.height(c),i="0px");this.imageEl=f.imageEl.cloneNode(!1);a.DOM.setStyle(this.imageEl,{zIndex:1});this.transformSettings={startingScale:1,scale:1,startingRotation:0,rotation:0,startingTranslateX:0,startingTranslateY:0,translateX:0,translateY:0};this.el=a.DOM.createElement("div",{"class":b.ZoomPanRotate.CssClasses.zoomPanRotate},"");a.DOM.setStyle(this.el,{left:0,top:i,position:"absolute",width:h,height:j,zIndex:this.settings.zIndex,
display:"block"});a.DOM.insertBefore(this.el,g.el,c);a.Browser.iOS?(this.containerEl=a.DOM.createElement("div"),a.DOM.setStyle(this.containerEl,{left:0,top:0,width:h,height:j,position:"absolute",zIndex:1}),a.DOM.appendChild(this.imageEl,this.containerEl),a.DOM.appendChild(this.containerEl,this.el),a.Animation.resetTranslate(this.containerEl),a.Animation.resetTranslate(this.imageEl),this.transformEl=this.containerEl):(a.DOM.appendChild(this.imageEl,this.el),this.transformEl=this.imageEl)},setStartingTranslateFromCurrentTransform:function(){var b=
a.coalesce(this.transformEl.style.webkitTransform,this.transformEl.style.MozTransform,this.transformEl.style.transform);if(!a.isNothing(b)&&(b=b.match(/translate\((.*?)\)/),!a.isNothing(b)))b=b[1].split(", "),this.transformSettings.startingTranslateX=e.parseInt(b[0],10),this.transformSettings.startingTranslateY=e.parseInt(b[1],10)},getScale:function(a){a*=this.transformSettings.startingScale;if(this.settings.minUserZoom!==0&&a<this.settings.minUserZoom)a=this.settings.minUserZoom;else if(this.settings.maxUserZoom!==
0&&a>this.settings.maxUserZoom)a=this.settings.maxUserZoom;return a},setStartingScaleAndRotation:function(a,b){this.transformSettings.startingScale=this.getScale(a);this.transformSettings.startingRotation=(this.transformSettings.startingRotation+b)%360},zoomRotate:function(a,b){this.transformSettings.scale=this.getScale(a);this.transformSettings.rotation=this.transformSettings.startingRotation+b;this.applyTransform()},panStart:function(a){this.setStartingTranslateFromCurrentTransform();this.panStartingPoint=
{x:a.x,y:a.y}},pan:function(a){var b=(a.y-this.panStartingPoint.y)/this.transformSettings.scale;this.transformSettings.translateX=this.transformSettings.startingTranslateX+(a.x-this.panStartingPoint.x)/this.transformSettings.scale;this.transformSettings.translateY=this.transformSettings.startingTranslateY+b;this.applyTransform()},zoomAndPanToPoint:function(b,c){if(this.settings.target===e){this.panStart({x:a.DOM.windowWidth()/2,y:a.DOM.windowHeight()/2});var g=(c.y-this.panStartingPoint.y)/this.transformSettings.scale;
this.transformSettings.translateX=(this.transformSettings.startingTranslateX+(c.x-this.panStartingPoint.x)/this.transformSettings.scale)*-1;this.transformSettings.translateY=(this.transformSettings.startingTranslateY+g)*-1}this.setStartingScaleAndRotation(b,0);this.transformSettings.scale=this.transformSettings.startingScale;this.transformSettings.rotation=0;this.applyTransform()},applyTransform:function(){var c=this.transformSettings.rotation%360,f=e.parseInt(this.transformSettings.translateX,10),
g=e.parseInt(this.transformSettings.translateY,10),h="scale("+this.transformSettings.scale+") rotate("+c+"deg) translate("+f+"px, "+g+"px)";a.DOM.setStyle(this.transformEl,{webkitTransform:h,MozTransform:h,msTransform:h,transform:h});a.Events.fire(this,{target:this,type:b.ZoomPanRotate.EventTypes.onTransform,scale:this.transformSettings.scale,rotation:this.transformSettings.rotation,rotationDegs:c,translateX:f,translateY:g})}})})(window,window.klass,window.Code.Util);
(function(e,c){c.registerNamespace("Code.PhotoSwipe");var a=e.Code.PhotoSwipe;a.CssClasses={buildingBody:"ps-building",activeBody:"ps-active"};a.EventTypes={onBeforeShow:"PhotoSwipeOnBeforeShow",onShow:"PhotoSwipeOnShow",onBeforeHide:"PhotoSwipeOnBeforeHide",onHide:"PhotoSwipeOnHide",onDisplayImage:"PhotoSwipeOnDisplayImage",onResetPosition:"PhotoSwipeOnResetPosition",onSlideshowStart:"PhotoSwipeOnSlideshowStart",onSlideshowStop:"PhotoSwipeOnSlideshowStop",onTouch:"PhotoSwipeOnTouch",onBeforeCaptionAndToolbarShow:"PhotoSwipeOnBeforeCaptionAndToolbarShow",
onCaptionAndToolbarShow:"PhotoSwipeOnCaptionAndToolbarShow",onBeforeCaptionAndToolbarHide:"PhotoSwipeOnBeforeCaptionAndToolbarHide",onCaptionAndToolbarHide:"PhotoSwipeOnCaptionAndToolbarHide",onToolbarTap:"PhotoSwipeOnToolbarTap",onBeforeZoomPanRotateShow:"PhotoSwipeOnBeforeZoomPanRotateShow",onZoomPanRotateShow:"PhotoSwipeOnZoomPanRotateShow",onBeforeZoomPanRotateHide:"PhotoSwipeOnBeforeZoomPanRotateHide",onZoomPanRotateHide:"PhotoSwipeOnZoomPanRotateHide",onZoomPanRotateTransform:"PhotoSwipeOnZoomPanRotateTransform"};
a.instances=[];a.activeInstances=[];a.setActivateInstance=function(b){if(c.arrayIndexOf(b.settings.target,a.activeInstances,"target")>-1)throw"Code.PhotoSwipe.activateInstance: Unable to active instance as another instance is already active for this target";a.activeInstances.push({target:b.settings.target,instance:b})};a.unsetActivateInstance=function(b){b=c.arrayIndexOf(b,a.activeInstances,"instance");a.activeInstances.splice(b,1)};a.attach=function(b,d,e){var g,h;g=a.createInstance(b,d,e);d=0;for(e=
b.length;d<e;d++)if(h=b[d],!c.isNothing(h.nodeType)&&h.nodeType===1)h.__photoSwipeClickHandler=a.onTriggerElementClick.bind(g),c.Events.remove(h,"click",h.__photoSwipeClickHandler),c.Events.add(h,"click",h.__photoSwipeClickHandler);return g};if(e.jQuery)e.jQuery.fn.photoSwipe=function(b,c){return a.attach(this,b,c)};a.detatch=function(b){var d,e,g;d=0;for(e=b.originalImages.length;d<e;d++)g=b.originalImages[d],!c.isNothing(g.nodeType)&&g.nodeType===1&&(c.Events.remove(g,"click",g.__photoSwipeClickHandler),
delete g.__photoSwipeClickHandler);a.disposeInstance(b)};a.createInstance=function(b,d,e){var g;if(c.isNothing(b))throw"Code.PhotoSwipe.attach: No images passed.";if(!c.isLikeArray(b))throw"Code.PhotoSwipe.createInstance: Images must be an array of elements or image urls.";if(b.length<1)throw"Code.PhotoSwipe.createInstance: No images to passed.";d=c.coalesce(d,{});g=a.getInstance(e);if(c.isNothing(g))g=new a.PhotoSwipeClass(b,d,e),a.instances.push(g);else throw'Code.PhotoSwipe.createInstance: Instance with id "'+
e+' already exists."';return g};a.disposeInstance=function(b){var c=a.getInstanceIndex(b);if(c<0)throw"Code.PhotoSwipe.disposeInstance: Unable to find instance to dispose.";b.dispose();a.instances.splice(c,1)};a.onTriggerElementClick=function(a){a.preventDefault();this.show(a.currentTarget)};a.getInstance=function(b){var c,e,g;c=0;for(e=a.instances.length;c<e;c++)if(g=a.instances[c],g.id===b)return g;return null};a.getInstanceIndex=function(b){var c,e,g=-1;c=0;for(e=a.instances.length;c<e;c++)if(a.instances[c]===
b){g=c;break}return g}})(window,window.Code.Util);
(function(e,c,a,b,d,f,g,h,j){a.registerNamespace("Code.PhotoSwipe");var i=e.Code.PhotoSwipe;i.PhotoSwipeClass=c({id:null,settings:null,isBackEventSupported:null,backButtonClicked:null,currentIndex:null,originalImages:null,mouseWheelStartTime:null,windowDimensions:null,cache:null,documentOverlay:null,carousel:null,uiLayer:null,toolbar:null,zoomPanRotate:null,windowOrientationChangeHandler:null,windowScrollHandler:null,windowHashChangeHandler:null,keyDownHandler:null,windowOrientationEventName:null,
uiLayerTouchHandler:null,carouselSlideByEndHandler:null,carouselSlideshowStartHandler:null,carouselSlideshowStopHandler:null,toolbarTapHandler:null,toolbarBeforeShowHandler:null,toolbarShowHandler:null,toolbarBeforeHideHandler:null,toolbarHideHandler:null,mouseWheelHandler:null,zoomPanRotateTransformHandler:null,_isResettingPosition:null,_uiWebViewResetPositionTimeout:null,dispose:function(){var b;a.Events.remove(this,i.EventTypes.onBeforeShow);a.Events.remove(this,i.EventTypes.onShow);a.Events.remove(this,
i.EventTypes.onBeforeHide);a.Events.remove(this,i.EventTypes.onHide);a.Events.remove(this,i.EventTypes.onDisplayImage);a.Events.remove(this,i.EventTypes.onResetPosition);a.Events.remove(this,i.EventTypes.onSlideshowStart);a.Events.remove(this,i.EventTypes.onSlideshowStop);a.Events.remove(this,i.EventTypes.onTouch);a.Events.remove(this,i.EventTypes.onBeforeCaptionAndToolbarShow);a.Events.remove(this,i.EventTypes.onCaptionAndToolbarShow);a.Events.remove(this,i.EventTypes.onBeforeCaptionAndToolbarHide);
a.Events.remove(this,i.EventTypes.onCaptionAndToolbarHide);a.Events.remove(this,i.EventTypes.onZoomPanRotateTransform);this.removeEventHandlers();a.isNothing(this.documentOverlay)||this.documentOverlay.dispose();a.isNothing(this.carousel)||this.carousel.dispose();a.isNothing(this.uiLayer)||this.uiLayer.dispose();a.isNothing(this.toolbar)||this.toolbar.dispose();this.destroyZoomPanRotate();a.isNothing(this.cache)||this.cache.dispose();for(b in this)a.objectHasProperty(this,b)&&(this[b]=null)},initialize:function(c,
d,f){this.id=a.isNothing(f)?"PhotoSwipe"+(new Date).getTime().toString():f;this.originalImages=c;if(a.Browser.android&&e.navigator.userAgent.match(/Android (\d+.\d+)/).toString().replace(/^.*\,/,"")>=2.1)this.isBackEventSupported=!0;if(!this.isBackEventSupported)this.isBackEventSupported=a.objectHasProperty(e,"onhashchange");this.settings={fadeInSpeed:250,fadeOutSpeed:250,preventHide:!1,preventSlideshow:!1,zIndex:1E3,backButtonHideEnabled:!0,enableKeyboard:!0,enableMouseWheel:!0,mouseWheelSpeed:350,
autoStartSlideshow:!1,jQueryMobile:!a.isNothing(e.jQuery)&&!a.isNothing(e.jQuery.mobile),jQueryMobileDialogHash:"&ui-state=dialog",enableUIWebViewRepositionTimeout:!1,uiWebViewResetPositionDelay:500,target:e,preventDefaultTouchEvents:!0,loop:!0,slideSpeed:250,nextPreviousSlideSpeed:0,enableDrag:!0,swipeThreshold:50,swipeTimeThreshold:250,slideTimingFunction:"ease-out",slideshowDelay:3E3,doubleTapSpeed:250,margin:20,imageScaleMethod:"fit",captionAndToolbarHide:!1,captionAndToolbarFlipPosition:!1,captionAndToolbarAutoHideDelay:5E3,
captionAndToolbarOpacity:0.8,captionAndToolbarShowEmptyCaptions:!0,getToolbar:i.Toolbar.getToolbar,allowUserZoom:!0,allowRotationOnUserZoom:!1,maxUserZoom:5,minUserZoom:0.5,doubleTapZoomLevel:2.5,getImageSource:i.Cache.Functions.getImageSource,getImageCaption:i.Cache.Functions.getImageCaption,getImageMetaData:i.Cache.Functions.getImageMetaData,cacheMode:i.Cache.Mode.normal};a.extend(this.settings,d);this.settings.target!==e&&(d=a.DOM.getStyle(this.settings.target,"position"),(d!=="relative"||d!==
"absolute")&&a.DOM.setStyle(this.settings.target,"position","relative"));if(this.settings.target!==e)this.isBackEventSupported=!1,this.settings.backButtonHideEnabled=!1;else if(this.settings.preventHide)this.settings.backButtonHideEnabled=!1;this.cache=new b.CacheClass(c,this.settings)},show:function(b){var c,d;this.backButtonClicked=this._isResettingPosition=!1;if(a.isNumber(b))this.currentIndex=b;else{this.currentIndex=-1;c=0;for(d=this.originalImages.length;c<d;c++)if(this.originalImages[c]===
b){this.currentIndex=c;break}}if(this.currentIndex<0||this.currentIndex>this.originalImages.length-1)throw"Code.PhotoSwipe.PhotoSwipeClass.show: Starting index out of range";this.isAlreadyGettingPage=this.getWindowDimensions();i.setActivateInstance(this);this.windowDimensions=this.getWindowDimensions();this.settings.target===e?a.DOM.addClass(e.document.body,i.CssClasses.buildingBody):a.DOM.addClass(this.settings.target,i.CssClasses.buildingBody);this.createComponents();a.Events.fire(this,{type:i.EventTypes.onBeforeShow,
target:this});this.documentOverlay.fadeIn(this.settings.fadeInSpeed,this.onDocumentOverlayFadeIn.bind(this))},getWindowDimensions:function(){return{width:a.DOM.windowWidth(),height:a.DOM.windowHeight()}},createComponents:function(){this.documentOverlay=new d.DocumentOverlayClass(this.settings);this.carousel=new f.CarouselClass(this.cache,this.settings);this.uiLayer=new h.UILayerClass(this.settings);if(!this.settings.captionAndToolbarHide)this.toolbar=new g.ToolbarClass(this.cache,this.settings)},
resetPosition:function(){if(!this._isResettingPosition){var b=this.getWindowDimensions();if(a.isNothing(this.windowDimensions)||!(b.width===this.windowDimensions.width&&b.height===this.windowDimensions.height))this._isResettingPosition=!0,this.windowDimensions=b,this.destroyZoomPanRotate(),this.documentOverlay.resetPosition(),this.carousel.resetPosition(),a.isNothing(this.toolbar)||this.toolbar.resetPosition(),this.uiLayer.resetPosition(),this._isResettingPosition=!1,a.Events.fire(this,{type:i.EventTypes.onResetPosition,
target:this})}},addEventHandler:function(b,c){a.Events.add(this,b,c)},addEventHandlers:function(){if(a.isNothing(this.windowOrientationChangeHandler))this.windowOrientationChangeHandler=this.onWindowOrientationChange.bind(this),this.windowScrollHandler=this.onWindowScroll.bind(this),this.keyDownHandler=this.onKeyDown.bind(this),this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.uiLayerTouchHandler=this.onUILayerTouch.bind(this),this.carouselSlideByEndHandler=this.onCarouselSlideByEnd.bind(this),
this.carouselSlideshowStartHandler=this.onCarouselSlideshowStart.bind(this),this.carouselSlideshowStopHandler=this.onCarouselSlideshowStop.bind(this),this.toolbarTapHandler=this.onToolbarTap.bind(this),this.toolbarBeforeShowHandler=this.onToolbarBeforeShow.bind(this),this.toolbarShowHandler=this.onToolbarShow.bind(this),this.toolbarBeforeHideHandler=this.onToolbarBeforeHide.bind(this),this.toolbarHideHandler=this.onToolbarHide.bind(this),this.mouseWheelHandler=this.onMouseWheel.bind(this),this.zoomPanRotateTransformHandler=
this.onZoomPanRotateTransform.bind(this);a.Browser.android?this.orientationEventName="resize":a.Browser.iOS&&!a.Browser.safari?a.Events.add(e.document.body,"orientationchange",this.windowOrientationChangeHandler):this.orientationEventName=!a.isNothing(e.onorientationchange)?"orientationchange":"resize";a.isNothing(this.orientationEventName)||a.Events.add(e,this.orientationEventName,this.windowOrientationChangeHandler);this.settings.target===e&&a.Events.add(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&
a.Events.add(e.document,"keydown",this.keyDownHandler);if(this.isBackEventSupported&&this.settings.backButtonHideEnabled)this.windowHashChangeHandler=this.onWindowHashChange.bind(this),this.settings.jQueryMobile?e.location.hash=this.settings.jQueryMobileDialogHash:(this.currentHistoryHashValue="PhotoSwipe"+(new Date).getTime().toString(),e.location.hash=this.currentHistoryHashValue),a.Events.add(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.add(e,"mousewheel",
this.mouseWheelHandler);a.Events.add(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);a.Events.add(this.carousel,f.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler);a.Events.add(this.carousel,f.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler);a.Events.add(this.carousel,f.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler);a.isNothing(this.toolbar)||(a.Events.add(this.toolbar,g.EventTypes.onTap,this.toolbarTapHandler),a.Events.add(this.toolbar,
g.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.add(this.toolbar,g.EventTypes.onShow,this.toolbarShowHandler),a.Events.add(this.toolbar,g.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.add(this.toolbar,g.EventTypes.onHide,this.toolbarHideHandler))},removeEventHandlers:function(){a.Browser.iOS&&!a.Browser.safari&&a.Events.remove(e.document.body,"orientationchange",this.windowOrientationChangeHandler);a.isNothing(this.orientationEventName)||a.Events.remove(e,this.orientationEventName,
this.windowOrientationChangeHandler);a.Events.remove(e,"scroll",this.windowScrollHandler);this.settings.enableKeyboard&&a.Events.remove(e.document,"keydown",this.keyDownHandler);this.isBackEventSupported&&this.settings.backButtonHideEnabled&&a.Events.remove(e,"hashchange",this.windowHashChangeHandler);this.settings.enableMouseWheel&&a.Events.remove(e,"mousewheel",this.mouseWheelHandler);a.isNothing(this.uiLayer)||a.Events.remove(this.uiLayer,a.TouchElement.EventTypes.onTouch,this.uiLayerTouchHandler);
a.isNothing(this.toolbar)||(a.Events.remove(this.carousel,f.EventTypes.onSlideByEnd,this.carouselSlideByEndHandler),a.Events.remove(this.carousel,f.EventTypes.onSlideshowStart,this.carouselSlideshowStartHandler),a.Events.remove(this.carousel,f.EventTypes.onSlideshowStop,this.carouselSlideshowStopHandler));a.isNothing(this.toolbar)||(a.Events.remove(this.toolbar,g.EventTypes.onTap,this.toolbarTapHandler),a.Events.remove(this.toolbar,g.EventTypes.onBeforeShow,this.toolbarBeforeShowHandler),a.Events.remove(this.toolbar,
g.EventTypes.onShow,this.toolbarShowHandler),a.Events.remove(this.toolbar,g.EventTypes.onBeforeHide,this.toolbarBeforeHideHandler),a.Events.remove(this.toolbar,g.EventTypes.onHide,this.toolbarHideHandler))},hide:function(){if(!this.settings.preventHide){if(a.isNothing(this.documentOverlay))throw"Code.PhotoSwipe.PhotoSwipeClass.hide: PhotoSwipe instance is already hidden";if(a.isNothing(this.hiding)){this.clearUIWebViewResetPositionTimeout();this.destroyZoomPanRotate();this.removeEventHandlers();a.Events.fire(this,
{type:i.EventTypes.onBeforeHide,target:this});this.uiLayer.dispose();this.uiLayer=null;if(!a.isNothing(this.toolbar))this.toolbar.dispose(),this.toolbar=null;this.carousel.dispose();this.carousel=null;a.DOM.removeClass(e.document.body,i.CssClasses.activeBody);this.documentOverlay.dispose();this.documentOverlay=null;this._isResettingPosition=!1;i.unsetActivateInstance(this);a.Events.fire(this,{type:i.EventTypes.onHide,target:this});this.goBackInHistory()}}},goBackInHistory:function(){this.isBackEventSupported&&
this.settings.backButtonHideEnabled&&(this.backButtonClicked||e.history.back())},play:function(){!this.isZoomActive()&&!this.settings.preventSlideshow&&!a.isNothing(this.carousel)&&(!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut(),this.carousel.startSlideshow())},stop:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.stopSlideshow()},previous:function(){this.isZoomActive()||a.isNothing(this.carousel)||this.carousel.previous()},next:function(){this.isZoomActive()||
a.isNothing(this.carousel)||this.carousel.next()},toggleToolbar:function(){this.isZoomActive()||a.isNothing(this.toolbar)||this.toolbar.toggleVisibility(this.currentIndex)},fadeOutToolbarIfVisible:function(){!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.settings.captionAndToolbarAutoHideDelay>0&&this.toolbar.fadeOut()},createZoomPanRotate:function(){this.stop();if(this.canUserZoom()&&!this.isZoomActive())a.Events.fire(this,i.EventTypes.onBeforeZoomPanRotateShow),this.zoomPanRotate=new j.ZoomPanRotateClass(this.settings,
this.cache.images[this.currentIndex],this.uiLayer),this.uiLayer.captureSettings.preventDefaultTouchEvents=!0,a.Events.add(this.zoomPanRotate,i.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),a.Events.fire(this,i.EventTypes.onZoomPanRotateShow),!a.isNothing(this.toolbar)&&this.toolbar.isVisible&&this.toolbar.fadeOut()},destroyZoomPanRotate:function(){if(!a.isNothing(this.zoomPanRotate))a.Events.fire(this,i.EventTypes.onBeforeZoomPanRotateHide),a.Events.remove(this.zoomPanRotate,
i.ZoomPanRotate.EventTypes.onTransform,this.zoomPanRotateTransformHandler),this.zoomPanRotate.dispose(),this.zoomPanRotate=null,this.uiLayer.captureSettings.preventDefaultTouchEvents=this.settings.preventDefaultTouchEvents,a.Events.fire(this,i.EventTypes.onZoomPanRotateHide)},canUserZoom:function(){var b;if(a.Browser.msie){if(b=document.createElement("div"),a.isNothing(b.style.msTransform))return!1}else if(!a.Browser.isCSSTransformSupported)return!1;if(!this.settings.allowUserZoom)return!1;if(this.carousel.isSliding)return!1;
b=this.cache.images[this.currentIndex];if(a.isNothing(b))return!1;if(b.isLoading)return!1;return!0},isZoomActive:function(){return!a.isNothing(this.zoomPanRotate)},getCurrentImage:function(){return this.cache.images[this.currentIndex]},onDocumentOverlayFadeIn:function(){e.setTimeout(function(){var b=this.settings.target===e?e.document.body:this.settings.target;a.DOM.removeClass(b,i.CssClasses.buildingBody);a.DOM.addClass(b,i.CssClasses.activeBody);this.addEventHandlers();this.carousel.show(this.currentIndex);
this.uiLayer.show();this.settings.autoStartSlideshow?this.play():a.isNothing(this.toolbar)||this.toolbar.show(this.currentIndex);a.Events.fire(this,{type:i.EventTypes.onShow,target:this});this.setUIWebViewResetPositionTimeout()}.bind(this),250)},setUIWebViewResetPositionTimeout:function(){if(this.settings.enableUIWebViewRepositionTimeout&&a.Browser.iOS&&!a.Browser.safari)a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout),this._uiWebViewResetPositionTimeout=
e.setTimeout(function(){this.resetPosition();this.setUIWebViewResetPositionTimeout()}.bind(this),this.settings.uiWebViewResetPositionDelay)},clearUIWebViewResetPositionTimeout:function(){a.isNothing(this._uiWebViewResetPositionTimeout)||e.clearTimeout(this._uiWebViewResetPositionTimeout)},onWindowScroll:function(){this.resetPosition()},onWindowOrientationChange:function(){this.resetPosition()},onWindowHashChange:function(){if(e.location.hash!=="#"+(this.settings.jQueryMobile?this.settings.jQueryMobileDialogHash:
this.currentHistoryHashValue))this.backButtonClicked=!0,this.hide()},onKeyDown:function(a){a.keyCode===37?(a.preventDefault(),this.previous()):a.keyCode===39?(a.preventDefault(),this.next()):a.keyCode===38||a.keyCode===40?a.preventDefault():a.keyCode===27?(a.preventDefault(),this.hide()):a.keyCode===32?(this.settings.hideToolbar?this.hide():this.toggleToolbar(),a.preventDefault()):a.keyCode===13&&(a.preventDefault(),this.play())},onUILayerTouch:function(b){if(this.isZoomActive())switch(b.action){case a.TouchElement.ActionTypes.gestureChange:this.zoomPanRotate.zoomRotate(b.scale,
this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.gestureEnd:this.zoomPanRotate.setStartingScaleAndRotation(b.scale,this.settings.allowRotationOnUserZoom?b.rotation:0);break;case a.TouchElement.ActionTypes.touchStart:this.zoomPanRotate.panStart(b.point);break;case a.TouchElement.ActionTypes.touchMove:this.zoomPanRotate.pan(b.point);break;case a.TouchElement.ActionTypes.doubleTap:this.destroyZoomPanRotate();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeLeft:this.destroyZoomPanRotate();
this.next();this.toggleToolbar();break;case a.TouchElement.ActionTypes.swipeRight:this.destroyZoomPanRotate(),this.previous(),this.toggleToolbar()}else switch(b.action){case a.TouchElement.ActionTypes.touchMove:case a.TouchElement.ActionTypes.swipeLeft:case a.TouchElement.ActionTypes.swipeRight:this.fadeOutToolbarIfVisible();this.carousel.onTouch(b.action,b.point);break;case a.TouchElement.ActionTypes.touchStart:case a.TouchElement.ActionTypes.touchMoveEnd:this.carousel.onTouch(b.action,b.point);
break;case a.TouchElement.ActionTypes.tap:this.toggleToolbar();break;case a.TouchElement.ActionTypes.doubleTap:this.settings.target===e&&(b.point.x-=a.DOM.windowScrollLeft(),b.point.y-=a.DOM.windowScrollTop());var c=this.cache.images[this.currentIndex].imageEl,d=e.parseInt(a.DOM.getStyle(c,"top"),10),f=e.parseInt(a.DOM.getStyle(c,"left"),10),g=f+a.DOM.width(c),c=d+a.DOM.height(c);if(b.point.x<f)b.point.x=f;else if(b.point.x>g)b.point.x=g;if(b.point.y<d)b.point.y=d;else if(b.point.y>c)b.point.y=c;
this.createZoomPanRotate();this.isZoomActive()&&this.zoomPanRotate.zoomAndPanToPoint(this.settings.doubleTapZoomLevel,b.point);break;case a.TouchElement.ActionTypes.gestureStart:this.createZoomPanRotate()}a.Events.fire(this,{type:i.EventTypes.onTouch,target:this,point:b.point,action:b.action})},onCarouselSlideByEnd:function(b){this.currentIndex=b.cacheIndex;a.isNothing(this.toolbar)||(this.toolbar.setCaption(this.currentIndex),this.toolbar.setToolbarStatus(this.currentIndex));a.Events.fire(this,{type:i.EventTypes.onDisplayImage,
target:this,action:b.action,index:b.cacheIndex})},onToolbarTap:function(b){switch(b.action){case g.ToolbarAction.next:this.next();break;case g.ToolbarAction.previous:this.previous();break;case g.ToolbarAction.close:this.hide();break;case g.ToolbarAction.play:this.play()}a.Events.fire(this,{type:i.EventTypes.onToolbarTap,target:this,toolbarAction:b.action,tapTarget:b.tapTarget})},onMouseWheel:function(b){var c=a.Events.getWheelDelta(b);if(!(b.timeStamp-(this.mouseWheelStartTime||0)<this.settings.mouseWheelSpeed))this.mouseWheelStartTime=
b.timeStamp,this.settings.invertMouseWheel&&(c*=-1),c<0?this.next():c>0&&this.previous()},onCarouselSlideshowStart:function(){a.Events.fire(this,{type:i.EventTypes.onSlideshowStart,target:this})},onCarouselSlideshowStop:function(){a.Events.fire(this,{type:i.EventTypes.onSlideshowStop,target:this})},onToolbarBeforeShow:function(){a.Events.fire(this,{type:i.EventTypes.onBeforeCaptionAndToolbarShow,target:this})},onToolbarShow:function(){a.Events.fire(this,{type:i.EventTypes.onCaptionAndToolbarShow,
target:this})},onToolbarBeforeHide:function(){a.Events.fire(this,{type:i.EventTypes.onBeforeCaptionAndToolbarHide,target:this})},onToolbarHide:function(){a.Events.fire(this,{type:i.EventTypes.onCaptionAndToolbarHide,target:this})},onZoomPanRotateTransform:function(b){a.Events.fire(this,{target:this,type:i.EventTypes.onZoomPanRotateTransform,scale:b.scale,rotation:b.rotation,rotationDegs:b.rotationDegs,translateX:b.translateX,translateY:b.translateY})}})})(window,window.klass,window.Code.Util,window.Code.PhotoSwipe.Cache,
window.Code.PhotoSwipe.DocumentOverlay,window.Code.PhotoSwipe.Carousel,window.Code.PhotoSwipe.Toolbar,window.Code.PhotoSwipe.UILayer,window.Code.PhotoSwipe.ZoomPanRotate);

define("vendor/photoswipe", function(){});

1;/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jul 20 20:23:43 2011
 */
/**
 * @fileOverview Defines the global Joshfire.framework object exported by the
 * Joshfire framework.
 *
 * The file is a template file that cannot be used directly. It serves as basis
 * for the bootstrap file of each adapter in the framework.
 *
 * To generate the bootstrap files of the different adapters, run the command:
 *  node scripts/bootstraps.js
 *
 * On top of describing the selected adapter, its ancestors and the list of
 * adapted modules that these adapters define, the Joshfire.framework object
 * also sets the base path of the framework used to resolve dependencies in
 * "define" calls. When run client-side, that base path is determined from the
 * script tag that references the bootstrap script in the DOM.
 *
 * Please note that the main script set in the "data-main" attribute cannot be
 * everywhere. In particular:
 * - it must be targeted with a relative path
 * - it must not contain any "../" subpath.
 * These constraints are needed because the location of that script sets the
 * base path of the application for require.js, meaning the real base path used
 * to resolve dependencies. The constraints guarantee that this code can express
 * the path of the framework relative to the location of that main script.
 */

/*global Joshfire:true, module*/

(function() {
  // Create the Joshfire namespace object if it does not already exist
  if (typeof Joshfire === 'undefined') {
    Joshfire = {};
  }

  var JF = {
    /**
     * @lends Joshfire
     */

    /**
     * The version of Joshfire
     * @type {Array}
     */
    version: [0, 9, 3],

    /**
     * DOM Ready util
     * @function
     * @param {Function} callback when finished.
     */
    onReady: function (callback) {
      if (callback) { callback(); }
    },

    /**
     * The current adapter.
     *
     * The <code>bootstraps</code> and <code>optimize</code>
     * <a href="/doc/develop/buildtools">build commands</a> set the property
     * to the appropriate value for each adapter.
     * @type {String}
     */
    adapter: "samsungtv",

    /**
     * The list of adapters the current adapter depends on.
     *
     * The first item in the array is the parent adapter, the second the great
     * parent, and so on. The <a href="/doc/develop/buildtools">build commands</a>
     * use the "dependencies.json" file in each adapter's folder as value for
     * this property.
     * @type {Array}
     */
    adapterDeps: [
  "tv"
],

    /**
     * List of modules supported by the current adapter and its dependencies.
     *
     * The <a href="/doc/develop/buildtools">build commands</a> compute that
     * value automatically from the list of JavaScript modules defined in each
     * adapter's folder.
     * @type {Object}
     */
    adapterModules: {
  "android": [
    "dependencies.json",
    "vendor/iscroll"
  ],
  "android-old": [
    "app",
    "dependencies.json",
    "inputs/touch",
    "ui/toolbar",
    "uielements/list",
    "uielements/panel",
    "uielements/video.mediaelement",
    "vendor/iscroll"
  ],
  "browser": [
    "app",
    "inputs/http",
    "inputs/keyboard",
    "inputs/mouse",
    "uielement",
    "uielements/list",
    "uielements/mediacontrols",
    "uielements/page",
    "uielements/panel",
    "uielements/panel.manager",
    "uielements/video.mediaelement",
    "uielements/video.popup",
    "uielements/video.youtube.swf",
    "utils/activitymonitor",
    "utils/datasource",
    "utils/dollar",
    "utils/localstorage",
    "utils/navigation",
    "utils/onready",
    "utils/stresstest"
  ],
  "googletv": [
    "dependencies.json",
    "inputs/keyboard",
    "ui/videoplayer",
    "uielement"
  ],
  "ios": [
    "dependencies.json"
  ],
  "lgtv": [
    "dependencies.json",
    "ui/videoplayer",
    "uielement",
    "utils/dollar"
  ],
  "node": [
    "app.factory",
    "app",
    "class",
    "global.exec",
    "inputs/http",
    "uielements/page",
    "uielements/panel",
    "uielements/panel.manager",
    "uielements/video.mediaelement",
    "utils/datasource",
    "utils/dollar",
    "utils/eventsocket",
    "utils/templatecompiler.cli",
    "utils/templatecompiler",
    "vendor/json2",
    "view"
  ],
  "none": [],
  "philips": [
    "dependencies.json",
    "inputs/remote",
    "ui/videoplayer",
    "uielement",
    "uielements/list",
    "uielements/video.mediaelement",
    "utils/dollar",
    "utils/stresstest"
  ],
  "phone": [
    "collection",
    "ui/toolbar",
    "uielement",
    "utils/dollar",
    "utils/onready"
  ],
  "qt4": [],
  "samsungtv": [
    "dependencies.json",
    "inputs/remote",
    "ui/fadeinpanel",
    "ui/slidepanel",
    "ui/videoplayer",
    "uielement",
    "utils/dollar",
    "utils/onready",
    "utils/widgetapi"
  ],
  "tv": [
    "inputs/remote",
    "ui/cardpanel",
    "ui/grid",
    "ui/horizontallayout",
    "ui/toolbar",
    "ui/verticallist",
    "ui/videoplayer",
    "uielement",
    "utils/dollar",
    "utils/onready"
  ]
},

    /**
     * Debug mode. Will console.log all events
     * @type {boolean}
     */
     debug: false,

    /**
     * Base framework path.
     *
     * The base path is automatically determined from the script tag that
     * references the framework in an HTML file. The code uses the value
     * that may have been set prior to running this code. The optimizer sets
     * the path to the right path beforehand in particular.
     */
    path: (Joshfire.framework || {}).path || ''
  };

  // Try to find the path we were included from.
  // If this fails author will have to set it manually.
  var reAdapter = new RegExp('^(.*)/adapters/' +
    JF.adapter + '/bootstrap\\.js$');
  var scripts = null;
  var match = null;
  var main = '';
  var depth = 0;
  var i = 0;
  var k = 0;
  var prefix = '';
  if (!JF.path && (typeof document !== 'undefined')) {
    scripts = document.getElementsByTagName('script');
    for (i = scripts.length - 1; i >= 0; i--) {
      match = reAdapter.exec(scripts[i].getAttribute('src'));
      if (match) {
        JF.path = match[1];
        if ((JF.path[0] !== '/') && (JF.path.indexOf('//') === -1)) {
          // Relative path. The base folder in require.js is determined
          // by the folder of the main script, which may be different
          // (see above for constraints on the location of data-main script)
          main = scripts[i].getAttribute('data-main');
          if (main) {
            depth = main.split('/').length - 1;
          }
          for (k = 0; k < depth; k++) {
            prefix += '../';
          }
          JF.path = prefix + JF.path;
        }
      }
    }
  }

  if (typeof require !== 'undefined' && require.config) {
    require.config({
      paths: {
        'joshfire-framework': JF.path
      },
      urlArgs: (Joshfire.debug? 'bust=' + (new Date()).getTime() : '')
    });
  }

  // Create the global Joshfire.framework object
  Joshfire.framework = JF;

  // Attach the namespace to the global scope in node.js applications
  if ((typeof module !== 'undefined') && module.exports) {
    module.exports.JoshfireFramework = JF;
  }
}).call(this);
(function(J) {

  //todo !joshfire
  J.onReady = function(f) {
    J.require(['joshfire/vendor/zepto'], function($) {
      //      $(f);
      f.call();
    });
  };


})(Joshfire);
/**
 * @fileOverview Defines the require.js plugin used to reference modules of
 * the Joshfire framework.
 *
 * This plugin responds to dependencies paths such as "joshlib![module]".
 *
 * It cannot be used directly without first setting the right parameters on the
 * global Joshfire.framework object. In particular, the code needs to access:
 * - Joshfire.framework.adapter: the selected adapter
 * - Joshfire.framework.adapterDeps: the list of adapters the selected adapter
 * directly depends on (note the order in the array creates the hierarchy, the
 * first adapter in the array being the direct parent of the selected adapter,
 * the second its great parent and so on)
 * - Joshfire.framework.adapterModules: a table indexed by adapter name that
 * lists the modules defined by each adapter.
 *
 * Given a module name [name], the plugin returns:
 * 1. "joshfire-framework/[xxx]" if [name] is of the form "adapters/none/[xxx]".
 * This use case lets modules depend on their base module without entering an
 * infinite loop where this plugin gets called indefinitely
 *
 * 2. "joshfire-framework/[name]" if [name] starts with "adapters/". This lets
 * modules references other adapters directly.
 *
 * 3. "joshfire-framework/adapters/[xxx]/[name]" if [name] is found in the list
 * of modules of the selected adapter or of one of its direct dependencies.
 *
 * 4. "joshfire-framework/[name]" otherwise, which typically happens for modules
 * that are not overridden in any adapter.
 *
 * For an explanation of require.js plugin functions, see:
 * http://requirejs.org/docs/plugins.html#api
 */
/*global define, Joshfire*/

define('joshlib', {
  normalize: function (name) {
    var path = 'joshfire-framework/';
    var adapters = [Joshfire.framework.adapter].concat(
      Joshfire.framework.adapterDeps);
    var modules = Joshfire.framework.adapterModules;

    if (name.substring(0,14) === 'adapters/none/') {
      // The name targets a base module (through the specific "none" adapter),
      // return the base class
      return path + name.substring(14);
    } else if (name.substring(0,9) === 'adapters/') {
      // The name targets another adapted module
      return path + name;
    }

    // Move up through the hierarchy of adapters created by the selected adapter
    // (starting with the selected adapter itself) and check whether there's an
    // adapted module that matches the requested name each time
    for (var i = 0; i < adapters.length; i++) {
      for (var y = 0; y < modules[adapters[i]].length; y++) {
        if (name === modules[adapters[i]][y]) {
          return path + 'adapters/' + adapters[i] + '/' + name;
        }
      }
    }

    // No adapted module available for this module, use the default one
    return path + name;
  },

  load: function (name, req, load) {
    req([name], function (value) {
      load(value);
    });
  }
});
define('joshfire-framework/adapters/samsungtv/utils/onready',[],function() {
  return function(callback) {
    if (/complete|loaded|interactive/.test(document.readyState)) callback();
    document.addEventListener('DOMContentLoaded', callback, false);
  };
});

/*
MediaPlayerLib
Copyright ©2012 Joshfire.
Library may be freely distributed under the MIT license.
For all details and documentation:
 http://github.com/joshfire/mediaplayerlib/
*/

(function(exports) {
  /**
   * Play media on all devices!
   *
   * Example:
   *
   *   mediaFactory.resolve(myVideoObject).toHtml(function(err, html, metadata) {
   *     // Do something with the returned HTML
   *     // Beware, the returned HTML may contain <script> tags that
   *     // are necessary for the player to work correctly. Such <script>
   *     // tags won't be run when using 'innerHTML' or 'document.write'.
   *     // Use the 'insertFragment' method or a JavaScript framework such
   *     // as jQuery to handle script tags correctly.
   *     mediaFactory.insertFragment(html, 'myplayerid');
   *   });
   *
   *   mediaFactory.insert(myVideoObject, null, 'myplayerid', function (err) {
   *     // Check error
   *   });
   */
  /*global document, window, require, define, Joshfire, module*/


  /**
   * Copies properties from an object to another.
   *
   * @param {Object} the object where properties get copied to
   * @param {Object} the object where properties get copied from
   * @returns {Object} the object where properties get copied to
   */
  var extend = function(to, from) {
    for(var p in from) {
      if(from.hasOwnProperty(p)) {
        to[p] = from[p];
      }
    }

    return to;
  };

  //--------------------------------------------------------------------------

  /**
   * Gets the relevant media from the given object.
   *
   * @param {Object} the media object
   * @returns {Object} the media
   */
  var getMedia = function(mediaObject) {
    if(mediaObject['@type'] === 'VideoObject' ||
       mediaObject['@type'] === 'AudioObject') {
      return mediaObject;
    } else {
      var types = null;

      switch(mediaObject['@type']) {
        case 'MusicRecording':
        types = ['audio', 'associatedMedia', 'video'];
        break;
        default:
        types = ['video', 'associatedMedia', 'audio'];
      }

      for(var i = 0, max = types.length; i < max; i++) {
        var type = types[i];

        if(typeof mediaObject[type] !== 'undefined') {
          return mediaObject[type];
        }
      }
    }
  };


  /**
   * Returns the size of the media element to generate,
   * computed from the requested width and height and
   * from the video's intrinsic ratio if defined and if
   * requested through the "adjustSize" flag.
   *
   * @param {Object} mediaObject the media object to render
   * @param {Object} options Media options
   * @returns {Object} An object with a "width" and "height"
   *  properties set to the size to use
   */
  var getMediaSize = function(mediaObject, options) {
    options = options || {};
    mediaObject = mediaObject || {};

    // Compute "requested" size, using default values
    // if size is not given.
    var requested = {
      width: options.width || 500,
      height: options.height || 281
    };
    if (mediaObject['@type'] === 'AudioObject') {
      requested.height = options.height || 40;
    }

    // Adjust the size to match the video's aspect ratio provided we know the
    // video's aspect ratio and have been told to adjust the size accordingly.
    //
    // Note size adjustment is not needed in theory, since browsers should
    // handle it automatically. A few mobile browsers fail to adjust the size
    // though.
    if (options.adjustSize) {
      // Compute aspect ratio and:
      // - the width the video should have if requested height is respected
      // - the height the video should have if requested width is respected
      // Default aspect ratio is 4/3 unless we know any better
      var ratio = 4/3;
      if (mediaObject.width && mediaObject.height) {
        ratio = mediaObject.width / mediaObject.height;
      }
      else if (mediaObject['yt:aspectRatio'] === 'widescreen') {
        ratio = 16/9;
      }
      var expected = {
        width: Math.round(requested.height * ratio),
        height: Math.round(requested.width / ratio)
      };

      // Check whether we need to adjust the final dimensions
      // (note the '1s' are meant for rounding purpose)
      if (expected.width > requested.width + 1) {
        // Screen is not large enough to render the video
        // at the requested height, let's reduce the height
        // to the maximum height that fits the requested width.
        requested.height = expected.height;
      }
      else if (expected.width < requested.width - 1) {
        // Box is too wide to render the video at that height,
        // let's reduce its width to the maximum width that fits
        // the requested height
        requested.width = expected.width;
      }
    }

    return requested;
  };


  //--------------------------------------------------------------------------

  /**
   * A builder produces HTML from a hash of options.
   * @class
   */

  /**
   * @constructor
   * @param {Object} options needed to render HTML
   */
  var Builder = function(options) {
    if(typeof this.initialize === 'function') {
      this.initialize(options);
    } else {
      Builder.prototype.initialize.call(this, options);
    }
  };

  /**
   * Creates a new class that extends Builder.
   *
   * @static
   * @param {Object} class properties
   * @returns {Function} the new class
   */
  Builder.extend = function(properties) {
    var Class = function(options) {
      Builder.call(this, options);
    };

    extend(Class.prototype, properties);
    return Class;
  };

  extend(Builder.prototype, {
    /**
     * Initilizes the builder.
     *
     * @param {Object} a hash of options
     */
    initialize: function(options) {

    },
    /**
     * Renders HTML.
     *
     * @param {Function} a callback of the form cb(err, html)
     */
    toHtml: function(cb) {
      if(typeof cb === 'function') cb(null, '', {});
    }
  });

  //--------------------------------------------------------------------------

  /**
   * Guesses the type of a url by looking at the files extension.
   *
   * @param {String} the url to inspect
   * @returns {String} the file type
   */
  var guessType = function(url) {
    if(url.match(/soundcloud/g)) return 'audio/mp3';

    var ext = url.split('.').pop();

    // Remove additional fragments after extensions, if there are any
    ext = ext.indexOf('?') > -1 ? ext.split('?')[0] : ext;
    ext = ext.indexOf('#') > -1 ? ext.split('#')[0] : ext;

    switch(ext) {
      case 'webm': return 'video/webm'; break;
      case 'ogv':  return 'video/ogg';  break;
      case 'mp4':  return 'video/mp4';  break;
      case 'm4v':  return 'video/mp4';  break;
      case 'ogg':  return 'audio/ogg';  break;
      case 'mp3':  return 'audio/mp3';  break;
      case 'm4a':  return 'audio/mp4';  break;
      default:     return '';
    }
  };

  //--------------------------------------------------------------------------

  /**
   * A builder that produces an HTML5 video.
   *
   * @extends Builder
   */
  var Html5VideoBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - sources: an array of videos sources
     *   - [poster]: a placeholder image
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.sources = options.sources;
      this.poster = options.poster;
      this.width = options.width || 500;
      this.height = options.height || 281;
      this.autoPlay = options.autoPlay || false;
    },
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var poster = this.poster ? ' poster="' + this.poster + '"': '';
      var autoplay = this.autoPlay ? ' autoplay': '';

      var html = '<video width="' + this.width + '" height="' + this.height +
                 '" ' + poster + autoplay + ' controls ' +
                 'class="video-js vjs-default-skin" data-setup="{}">';

      for(var i = 0; i < this.sources.length; i++) {
        var url = this.sources[i];

        html += '<source src="' + url + '"  type="' +
                guessType(url) + '"></source>';
      }

      html += '</video>';

      if(typeof cb === 'function') cb(null, html, {
        width: this.width,
        height: this.height
      });
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A builder that produces an HTML5 video with a Flash fallback.
   *
   * @extends Builder
   */
  var VideoJSBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - sources: an array of videos sources
     *   - [poster]: a placeholder image
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.sources = options.sources;
      this.poster = options.poster || '';
      this.width = options.width || 500;
      this.height = options.height || 281;
      this.autoPlay = options.autoPlay || false;
    },
    /**
     * Loads a polyfill for HTML5 videos from <http://videojs.com/>.
     *
     * @function
     */
    addPolyFill: function() {
      var _body = document.getElementsByTagName('body')[0];
      var _link = document.createElement('link');
      var _script = document.createElement('script');

      _link.setAttribute('href', 'http://vjs.zencdn.net/c/video-js.css');
      _link.setAttribute('rel', 'stylesheet');
      _script.setAttribute('src', 'http://vjs.zencdn.net/c/video.js');

      _body.appendChild(_link);
      _body.appendChild(_script);
    },
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var poster = this.poster ? ' poster="' + this.poster + '"': '';
      var autoplay = this.autoPlay ? ' autoplay': '';

      var html = '<video width="' + this.width + '" height="' + this.height +
                '" ' + poster + autoplay + ' controls' +
                ' class="video-js vjs-default-skin" data-setup="{}">';

      for(var i = 0; i < this.sources.length; i++) {
        var url = this.sources[i];

        html += '<source src="' + url + '"  type="' +
                guessType(url) + '"></source>';
      }

      html += '</video>';

      // Load polyfill if needed.
      if(typeof window !== 'undefined' &&
         typeof window.VideoJS === 'undefined') {
        this.addPolyFill();
      }

      if(typeof cb === 'function') cb(null, html, {
        width: this.width,
        height: this.height
      });
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A builder that produces an HTML5 audio tag.
   *
   * @extends Builder
   */
  var Html5AudioBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - sources: an array of videos sources
     *   - [poster]: a placeholder image
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.sources = options.sources;
      this.width = options.width || 500;
      this.height = options.height || 40;
      this.autoPlay = options.autoPlay || false;
    },
    /**
     * @returns wether an audio tag can be used.
     */
    iCanHazAudioTag: function(url) {
      if(!document) return false;
      var audio = document.createElement('audio');
      return audio.canPlayType; // && audio.canPlayType(guessType(url));
    },
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var html = '';

      if(this.sources && this.sources.length) {
        for(var i = 0; i < this.sources.length; i++) {
          if(this.iCanHazAudioTag(this.sources[i])) {
            var autoplay = this.autoPlay ? ' autoplay': '';
            html = '<audio controls src="' + this.sources[i] + '"' +
                   autoplay + '></audio>';
            break;
          }
        }

        if (!html) {
          html = '<a href="' + this.sources[0] +
            '" target="_blank">Play</a>';
        }
      }

      if(typeof cb === 'function') cb(null, html, {});
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A builder uses MediaElement.js for video.
   *
   * @extends Builder
   */
  var MediaElementVideoBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - sources: an array of videos sources
     *   - [poster]: a placeholder image
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.sources = options.sources;
      this.width = options.width || 500;
      this.height = options.height || 281;
      this.autoPlay = options.autoPlay || false;
    },
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var id = 'mediaplayerlib-mediaelement-video-' +
               MediaElementVideoBuilder.nextId++;
      var poster = this.poster ? ' poster="' + this.poster + '"': '';
      var autoplay = this.autoPlay ? ' autoplay': '';

      var html = '<video width="' + this.width + '" height="' + this.height +
                '" ' + poster + autoplay + ' controls' +
                ' id="' + id + '">';
      for(var i = 0; i < this.sources.length; i++) {
        var url = this.sources[i];

        html += '<source src="' + url + '"></source>';
      }

      html += '</video>';

      html += '<script>';
      html += '$("#' + id + '").mediaelementplayer({';
      html += 'playerWidth: ' + this.width + ',';
      html += 'playerHeight: ' + this.height;
      html += '});';
      html += '</script>';

      if(typeof cb === 'function') cb(null, html, {
        width: this.width,
        height: this.height
      });
    }
  });

  MediaElementVideoBuilder.nextId = 0;

  /**
   * A builder that produces html using oEmbed.
   *
   * Currently supported:
   *
   *   - Vimeo
   *   - SoundCloud
   *   - SlideShare
   *
   * @extends Builder
   */
  var OEmbedBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - width: the width of the media
     *   - height: the height of the media
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.options = options;
    },
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var endPoint = null;

      for(var i = 0; i < OEmbedBuilder.endPoints.length; i++) {
        if(this.options.url.match(OEmbedBuilder.endPoints[i].regexp)) {
          endPoint = OEmbedBuilder.endPoints[i];
        }
      }

      if(!endPoint) {
        if(typeof cb === 'function') cb(null, null);
        return;
      }

      if(typeof module !== 'undefined') {
        // Use node.js
        var _url = endPoint.url(null, this.options);
        var http = require('http');
        var url = require('url');

        var urlObj = url.parse(_url);

        var reqOptions = {
          host: urlObj.hostname,
          path: urlObj.pathname + urlObj.search,
          port: 80,
          method: 'GET'
        };

        var req = http.request(reqOptions, function(res) {
          var data = '';

          res.on('data', function(chunk) {
            data += chunk;
          });
          res.on('end', function() {
            if(typeof cb !== 'undefined') {
              cb(null, JSON.parse(data).html);
            }
          });
          res.on('close', function(err) {
            if(typeof cb !== 'undefined') {
              cb(err);
            }
          });
        });

        req.on('error', function(err) {
          if(typeof cb !== 'undefined') {
            cb(err);
          }
        });

        req.end();
      } else {
        // Use jsonp
        var cbName = OEmbedBuilder.cbName();
        var url = endPoint.url(cbName, this.options);
        var _body = document.getElementsByTagName('body')[0];
        var _script = document.createElement('script');

        exports[cbName] = function(data) {
          _body.removeChild(_script);
          delete exports[cbName];
          if(typeof cb === 'function') cb(null, data.html);
        };

        _script.setAttribute('src', url);
        _body.appendChild(_script);
      }
    }
  });

  /**
   * List of endpoints
   *
   * @static
   */
  OEmbedBuilder.endPoints = [{
    regexp: /soundcloud\.com/i,
    url: function(cbName, options) {
      var url = null;
      if(cbName) {
        url = 'http://soundcloud.com/oembed?format=js&callback=' +
          cbName + '&url=' + encodeURIComponent(options.url);
      } else {
        url = 'http://soundcloud.com/oembed?format=json&url=' +
              encodeURIComponent(options.url);
      }
      if(options.width) url += '&maxwidth=' + options.width;
      if(options.height) url += '&maxheight=' + options.height;
      return url;
    }
  },
  {
    regexp: /vimeo\.com/i,
    url: function(cbName, options) {
      var url = null;
      if(cbName) {
        url = 'http://vimeo.com/api/oembed.json?callback=' +
          cbName + '&url=' + encodeURIComponent(options.url);
      } else {
        url = 'http://vimeo.com/api/oembed.json?url=' +
              encodeURIComponent(options.url);
      }
      if(options.width) url += '&width=' + options.width;
      if(options.height) url += '&height=' + options.height;
      return url;
    }
  },
  {
    regexp: /slideshare\.net/i,
    url: function(cbName, options) {
      var url = null;
      if(cbName) {
        url =
          'http://www.slideshare.net/api/oembed/2?format=jsonp&callback=' + cbName +
          '&url=' + encodeURIComponent(options.url);
      } else {
        url = 'http://www.slideshare.net/api/oembed/2?url=' +
              encodeURIComponent(options.url);
      }
      if(options.width) url += '&maxwidth=' + options.width;
      if(options.height) url += '&maxheight=' + options.height;
      return url;
    }
  }];

  OEmbedBuilder.numCbName = 0;

  /**
   * Generates a callback name.
   *
   * @static
   * @returns a callback name
   */
  OEmbedBuilder.cbName = function() {
    return 'OEmbedCallBack' + (OEmbedBuilder.numCbName++);
  };

  //--------------------------------------------------------------------------

  /**
   * A builder that produces embeds a player in an iframe.
   *
   * @extends Builder
   */
  var IFrameBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - url: the url of the embedded content
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.url = options.url;
      this.width = options.width || 500;
      this.height = options.height || 281;

      var youtube = this.url.match(/youtube/gi);
      var vimeo = this.url.match(/vimeo/gi);

      // This should really be specific to Youtube
      if(options.html5) {
        if(youtube) {
          if(this.url.indexOf('?') === -1) {
            this.url += '?html5=1';
          } else {
            this.url += '&html5=1';
          }
        }
      }

      if(options.autoPlay) {
        if(youtube || vimeo) {
          if(this.url.indexOf('?') === -1) {
            this.url += '?autoplay=1';
          } else {
            this.url += '&autoplay=1';
          }
        }
      }

      if (options.customPlayer && youtube) {
        if (this.url.indexOf('?') === -1) {
          this.url += '?controls=0';
        } else {
          this.url += '&controls=0';
        }
        this.callCustomPlayerBuilder = true;
        this.options = options;
      }

      if (options.playerAPI && youtube) {
        this.callScriptBuilder = true;
        this.options = options;
      }

    },
    toHtml: function(cb) {

      // Helper function to generate a "GUID"
      // (that's not a real GUID, but should be enough for our purpose)
      var computeGUID = function () {
        var S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return 'mediaplayerlib-' + S4() + S4() + S4();
      };

      if (this.callScriptBuilder || this.callCustomPlayerBuilder) {

        this.options.guid = computeGUID();

        var htmlTmp = "",
            metadataTmp = {};

        var onDone = _.bind(function (err, html, metadata) {
          if (err && typeof cb === "function") cb(err, null, null);

          htmlTmp += html;

          htmlTmp += '<iframe id="' + this.options.guid + '" src="' + this.url + '" width="' + this.width +
                   '" height="' + this.height + '" frameborder="0"></iframe>';

          _(metadataTmp).extend(metadata, {
            width: this.width,
            height: this.height
          });

          if (typeof cb === "function") cb(null, htmlTmp, metadataTmp);
        }, this);

        var callScriptBuilder = _.bind(function(cb) {
          var scriptBuilder = new ScriptBuilder(this.options);
          scriptBuilder.toHtml(cb);
        }, this);

        var callCustomPlayerBuilder = _.bind(function(cb) {
          var customBuilder = new CustomPlayerBuilder(this.options);
          customBuilder.toHtml(onDone);
        }, this);

        if (this.callScriptBuilder && this.callCustomPlayerBuilder) {
          callScriptBuilder(function(err, html, metadata) {
            htmlTmp = html;
            metadataTmp = metadata;
            callCustomPlayerBuilder(onDone);
          });
        } else if (this.callScriptBuilder) {
          callScriptBuilder(onDone);
        } else if (this.callCustomPlayerBuilder) {
          callCustomPlayerBuilder(onDone);
        }

      } else {

        var html = '<iframe src="' + this.url + '" width="' + this.width +
                   '" height="' + this.height + '" frameborder="0"></iframe>';

        if(typeof cb === 'function') cb(null, html, {
          width: this.width,
          height: this.height
        });

      }
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A builder that produces an script tag.
   *
   * @extends Builder
   */
  var ScriptBuilder = Builder.extend({
    /**
     * Options:
     *
     *   - sources: an array of videos sources
     *   - [poster]: a placeholder image
     *   - width: the width of the video player
     *   - height: the height of the video player
     *
     * @inherits Builder
     */
    initialize: function(options) {
      this.url = options.url;
      this.publisher = options.publisher;
      this.width = options.width || 500;
      this.height = options.height || 281;
      this.guid = options.guid;

      this.onYouTubeIframeAPIReady = options.onYouTubeIframeAPIReady;
    },

    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      var url = this.url || '';
      var html = '';
      var guid = '';

      // Helper function to generate a "GUID"
      // (that's not a real GUID, but should be enough for our purpose)
      var computeGUID = function () {
        var S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return 'mediaplayerlib-' + S4() + S4() + S4();
      };
      guid = this.guid || computeGUID();

      // Specific to Ooyala
      // -----
      // Ooyala returns a script that takes for granted that it is being run
      // while the page is loaded and that the rest of the page hasn't been
      // loaded yet. In particular, it expects the Ooyala <script> tag that
      // inserts the video to be the last one in the DOM. That's typically
      // not the case when calling mediaplayerlib as the page is likely already
      // fully loaded (and the last <script> tag can be anything).
      // The position of the player cannot be specified as a parameter. It must
      // rather be set in 'window.ooyalaActiveScript' (and it must link to a
      // <script> tag). Thus the solution is to return:
      // - a <div> with a GUID: the final video player.
      // - a script that injects a <script> tag in the above <div> and sets it
      // as the value of 'window.ooyalaActiveScript'. Note that the <script>
      // tag is not returned directly because libraries such as jQuery (that
      // may be used to inject the resulting HTML in the DOM) actually drop
      // injected <script> tags from the DOM once they have evaluated the content.
      // - the script returned by Ooyala.
      //
      // In short, the code is specific to Ooyala, leaks an element with an ID
      // and the 'window.ooyalaActiveScript' global variable (sigh!).
      //
      // IMPORTANT: only one Ooyala video may be added to the page at a time
      // since window.ooyalaActiveScript is overwritten each time. The right
      // solution would be to pass the element as a parameter to the Ooyala's
      // script but that's not under our control.
      // a time.
      if (this.publisher === 'Ooyala') {
        url += ((url.indexOf('?') === -1) ? '?' : '&amp;') +
          'width=' + encodeURIComponent(this.width) +
          '&amp;height=' + encodeURIComponent(this.height);
        html = '<div id="' + guid + '"></div>' +
          '<script type="text/javascript">' +
            'document.getElementById("' + guid + '").appendChild(document.createElement("script"));' +
            'window.ooyalaActiveScript = document.getElementById("' + guid + '").firstChild;' +
          '</script>' +
          '<script type="text/javascript" src="' + url + '"></script>';
      } else if (this.publisher === 'Youtube') {
        // This will insert the youtube API
        html = '<script type="text/javascript">' +
          'var tag = document.createElement("script");' +
          'tag.src = "https://www.youtube.com/iframe_api";' +
          'document.getElementById("' + guid + '").parentNode.appendChild(tag);' +
        '</script>';

        if (this.onYouTubeIframeAPIReady) {
          window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady(guid);
        }
      }
      else {
        html = '<script type="text/javascript" src="' + url + '"></script>';
      }

      if(typeof cb === 'function') cb(null, html, {
        width: this.width,
        height: this.height
      });
    }
  });

  /**
   * A builder that puts a div over the video player so that we cannot lose focus
   *
   * It has been developped with youtube in mind, but should work with all players
   * (as long as you can remove the controls, or it will look funny).
   *
   * N.B.: THIS DOES NOT PROVIDE ANY WAY TO CONTROL THE PLAYER. YOU NEED TO USE THE
   * PLAYER API FOR THAT.
   *
   * This builder will provide three methods in the metadata.customPlayer object to
   * interact with the timeline, bind, and unbind the events.
   *
   * It is the responsibility to the dev using this to call init _and_ exit at the right
   * time (when showing/hiding the player). Otherwise, event handlers will stay on forever
   */
  var CustomPlayerBuilder = Builder.extend({

    /**
     * You can specify two functions to react to different events:
     * onAction: the user hit the enter key;
     * onControlClick: the user click on the controls;
     *
     * TODO: add more events
     */
    initialize: function(options) {
      this.width = options.width || 500;
      this.height = options.height || 281;

      this.onKeydownCB = options.onKeydown;
      // this.onMouseOverCB = options.onMouseOver;
      // this.onMouseOutCB = options.onMouseOut;

      // this.onClickControlCB = options.onClickControl;
      // this.onMouseOverControlCB = options.onMouseOverControl;
      // this.onMouseOutControlCB = options.onMouseOutControl;

      this.maskEvents = options.maskEvents;
      this.controlEvents = options.controlEvents;

      this.guid = options.guid;
      this.initDone = false;

      console.log(this);
    },

    toHtml: function(cb) {
      var html = '<div id="' + this.guid + '-events" class="video-mask js-video-mask" style="position:absolute; width:100%; height:100%">' +
          '<div class="video-controls js-video-controls">' +
          '</div>' +
          '<div class="video-spinner js-video-spinner">' +
          '</div>' +
          '<div class="video-timeline js-video-timeline" >' +
            '<div class="video-done js-video-done"></div>' +
            '<div class="video-undone"></div>' +
          '</div>' +
        '</div>';

      if (typeof cb === "function") cb(null, html, {
        width: this.width,
        height: this.height,
        customPlayer: {
          init: _.bind(this.init, this),
          exit: _.bind(this.exit, this),
          setPlaying: _.bind(this.setPlaying, this),
          hideControls: _.bind(this.hideControls, this),
          showControls: _.bind(this.showControls, this),
          hideSpinner: _.bind(this.hideSpinner, this),
          showSpinner: _.bind(this.showSpinner, this),
          hideTimeline: _.bind(this.hideTimeline, this),
          showTimeline: _.bind(this.showTimeline, this),
          onVideoSeek: _.bind(this.onVideoSeek, this),
          guid: this.guid
        }
      });
    },

    /**
     * Bind the events
     */
    init: function() {
      if (this.initDone) return this;
      this.initDone = true;

      var bindCustomEvents = function(eventsContainer, elem) {
        var bind = function(event, handler) {
          $('body').on(event, elem, handler);
        };

        for (var event in eventsContainer) {
          bind(event, eventsContainer[event]);
        }
      };

      bindCustomEvents(this.maskEvents, '#' + this.guid + '-events');
      bindCustomEvents(this.controlEvents, '#' + this.guid + '-events .js-video-controls');

      if (this.onKeydownCB) {
        this.onKeydown = _.bind(function (event) {
          return this.onKeydownCB(event);
        }, this);

        $('body').on('keydown', this.onKeydown);
      }

      return this;
    },

    /**
     * Unbind the events
     */
    exit: function() {
      var unbindCustomEvents = function(eventsContainer, elem) {
        var unbind = function(event, handler) {
          $('body').off(event, elem, handler);
        };

        for (var event in eventsContainer) {
          unbind(event, eventsContainer[event]);
        }
      };

      if (this.initDone) {

        unbindCustomEvents(this.maskEvents, '#' + this.guid + '-events');
        unbindCustomEvents(this.controlEvents, '#' + this.guid + '-events .js-video-controls');

        if (this.onKeydown) $("body").off("keydown", this.onKeydown);
      }
    },

    setPlaying: function (playing) {
      if (playing)
        $('#' + this.guid + '-events').removeClass('js-video-paused');
      else
        $('#' + this.guid + '-events').addClass('js-video-paused');
    },

    hideControls: function (method) {
      method('#' + this.guid + '-events .js-video-controls');
      return this;
    },

    showControls: function (method) {
      method('#' + this.guid + '-events .js-video-controls');
      return this;
    },

    hideSpinner: function (method) {
      method('#' + this.guid + '-events .js-video-spinner');
      return this;
    },

    showSpinner: function (method) {
      method('#' + this.guid + '-events .js-video-spinner');
      return this;
    },

    hideTimeline: function (method) {
      method('#' + this.guid + '-events .js-video-timeline');
      return this;
    },

    showTimeline: function (method) {
      method('#' + this.guid + '-events .js-video-timeline');
      return this;
    },

    /**
     * Update the timeline
     */
    onVideoSeek: function(guid, percent) {
      if (percent > 100) percent = 100;
      if (percent < 0) percent = 0;
      $('#' + this.guid + '-events .js-video-done').css('width',percent+'%');
      return this;
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A builder that builds... nothing!
   *
   * @extends Builder
   */
  var VoidBuilder = Builder.extend({
    /**
     * @inherits Builder
     */
    toHtml: function(cb) {
      if(typeof cb === 'function') {
        cb(new Error('Unknown media type.'), 'Unknown media type.');
      }
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A stategy that decides which builder to load.
   *
   * @class
   */
  var Strategy = function() {

  };

  extend(Strategy.prototype, {
    /**
     * Returns the best builder, or null.
     *
     * @param {Object} a media object
     * @param {Object} a hash of options
     * @returns {Builder} a builder
     */
    execute: function(mediaObject, options) {
      return new VoidBuilder(options);
    }
  });


  /**
   * Creates a new class that extends Strategy.
   *
   * @static
   * @param {Object} class properties
   * @returns {Function} the new class
   */
  Strategy.extend = function(properties) {
    var Class = function(options) {
      Strategy.call(this, options);
    };

    extend(Class.prototype, properties);
    return Class;
  };

  //--------------------------------------------------------------------------

  /**
   * The default strategy.
   *
   * @extends Strategy
   */
  var DefaultStrategy = Strategy.extend({
    /**
     * @inherits Builder
     */
    execute: function(mediaObject, options) {
      var builder;
      var media = getMedia(mediaObject) || {};
      var size = getMediaSize(media, options);
      extend(options, size);

      if(media['@type'] === 'VideoObject') {

        if(media.playerType === 'iframe') {
          extend(options, {
            url: media.embedURL,
            publisher: (media.publisher ? media.publisher.name : null)
          });

          builder = new IFrameBuilder(options);
        } else if (media.playerType === 'script') {
          extend(options, {
            url: media.embedURL,
            publisher: (media.publisher ? media.publisher.name : null)
          });

          builder = new ScriptBuilder(options);
        } else if (media.contentURL) {
          var poster = null;

          if(media.image && media.image.contentURL) {
            poster = media.image.contentURL;
          }

          extend(options, {
            poster: poster,
            sources: [media.contentURL]
          });

          builder = new VideoJSBuilder(options);
        }
      }

      return builder || new VoidBuilder();
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A stragegy for HTML5 friendly browsers.
   *
   * @extends Strategy
   */
  var Html5Strategy = Strategy.extend({
    /**
     * @inherits Builder
     */
    execute: function(mediaObject, options) {
      var builder;
      var media = getMedia(mediaObject) || {};
      var size = getMediaSize(media, options);
      extend(options, size);

      if(media.playerType === 'iframe') {
        extend(options, {
          url: media.embedURL,
          html5: true
        });

        builder = new IFrameBuilder(options);
      } else if (media.playerType === 'script') {
        extend(options, {
          url: media.embedURL,
          html5: true,
          publisher: (media.publisher ? media.publisher.name : null)
        });

        builder = new ScriptBuilder(options);
      } else if(media['@type'] === 'VideoObject') {
        if(media.contentURL) {
          var poster = null;

          if(media.image) {
            poster = media.image.contentURL;
          }

          extend(options, {
            poster: poster,
            sources: [media.contentURL]
          });

          builder = new Html5VideoBuilder(options);
        }
      } else if(media['@type'] === 'AudioObject') {
        if(media.contentURL) {
          extend(options, {
            sources: [media.contentURL]
          });

          builder = new Html5AudioBuilder(options);
        }
      }

      return builder;
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A stragegy for MediaElement.js.
   *
   * Note: the MediaElement.js lib is not included! The developer has to
   * include it his/her application?
   *
   * @extends Strategy
   */
  var MediaElementStrategy = Strategy.extend({
    /**
     * @inherits Builder
     */
    execute: function(mediaObject, options) {
      var media = getMedia(mediaObject) || {};
      var size = getMediaSize(media, options);
      extend(options, size);

      var builder;

      if(mediaObject['@type'] === 'VideoObject') {
        if(typeof mediaObject.contentURL !== 'undefined') {
          var poster = null;

          if(media.image) {
            poster = media.image.contentURL;
          }

          extend(options, {
            poster: poster,
            sources: [mediaObject.contentURL]
          });

          builder = new MediaElementVideoBuilder(options);
        }
      } else if(mediaObject['@type'] === 'AudioObject') {
        if(typeof mediaObject.contentURL !== 'undefined') {
          extend(options, {
            sources: [mediaObject.contentURL]
          });
        }
      }

      return builder;
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A stragegy for oEmbed.
   *
   * @extends Strategy
   */
  var OEmbedStrategy = Strategy.extend({
    /**
     * @inherits Builder
     */
    execute: function(mediaObject, options) {
      var builder;

      if(typeof mediaObject.url !== 'undefined') {
        extend(options, {
          url: mediaObject.url
        });

        builder = new OEmbedBuilder(options);
      }

      return builder;
    }
  });

  //--------------------------------------------------------------------------

  /**
   * A factory that returns media builders from a media object.
   *
   * @class
   */
  var MediaFactory = function() {
    this.strategies = {
      def: new DefaultStrategy(),
      html5: new Html5Strategy(),
      mediaElement: new MediaElementStrategy(),
      oembed: new OEmbedStrategy()
    };
  };

  // TODO: add strategies

  extend(MediaFactory.prototype, {
    /**
     * Returns a media builder from a media object and a hash of options.
     *
     * @param {Object} a media object
     * @param {Object} a hash of options
     * @returns {Builder} a builder
     */
    resolve: function(mediaObject, options) {
      options = options || {};

      var builder;

      if(typeof options.strategy !== 'undefined' &&
         typeof this.strategies[options.strategy] !== 'undefined') {
        var strategy = this.strategies[options.strategy];
        builder = strategy.execute(mediaObject, options);
      }

      return builder || this.strategies.def.execute(mediaObject, options);
    },


    /**
     * Inserts the video player returned by resolve.toHtml in the DOM.
     *
     * The function takes care of running scripts when necessary. It is
     * a simple version of the jQuery's "append" method and a more complete
     * version of Zepto's similar method (Zepto only handles inline scripts
     * but not tags that target an external script).
     *
     * TODO: clean the 'script' tag inserted once script is done loading
     *
     * @function
     * @param {String} html The HTML fragment to insert in the DOM
     * @param {String|Element} el ID of the DOM element that is to contain
     *  the player or element itself
     */
    insertFragment: function (html, el) {
      var container = null;
      if (Object.prototype.toString.call(el) === '[object String]') {
        container = document.getElementById(el);
      }
      else {
        container = el;
      }
      container.innerHTML = ('' + html).trim();

      function traverseNode (node, fun) {
        fun(node);
        for (var key in node.childNodes) {
          traverseNode(node.childNodes[key], fun);
        }
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
      }
      function evalScript(elem) {
        var data = ( elem.text || elem.textContent || elem.innerHTML || "" );
        var src = elem.getAttribute('src');

        var head = document.getElementsByTagName("head")[0] ||
          document.documentElement;
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (src) script.setAttribute('src', src);
        if (data) script.appendChild(document.createTextNode(data));
        head.insertBefore(script, head.firstChild);
        if (elem.parentNode) {
          // Remove the script from its initial position
          elem.parentNode.removeChild(elem);
        }
      }

      var scripts = [];
      var script = null;

      traverseNode(container, function (node) {
        if (node.nodeName &&
          (node.nodeName.toUpperCase() === 'SCRIPT') &&
          (!node.type || node.type === 'text/javascript')) {
          scripts.push(node);
        }
      });

      for (script in scripts) {
        evalScript(scripts[script]);
      }
    },


    /**
     * Inserts a video player for the given media object in the DOM tree.
     *
     * @function
     * @param {Object} mediaObject a MediaObject schema.org object
     * @param {Object} options a hash of options
     * @param {String|Element} el ID of the DOM element that is to contain
     *  the player or element itself
     * @param {function} cb Callback function called with potential error
     */
    insert: function (mediaObject, options, el, cb) {
      var self = this;
      var html = this.resolve(mediaObject, options).toHtml(function (err, html) {
        self.insertFragment(html, el);
        if(typeof cb === 'function') cb(null);
      });
    }
  });

  //--------------------------------------------------------------------------

  if(typeof Joshfire !== 'undefined' &&
     typeof Joshfire.define !== 'undefined') {
    Joshfire.define([], function() { return new MediaFactory(); });
  } else if(typeof define !== 'undefined') {
    define('joshfire-framework/utils/mediaplayerlib',[], function() { return new MediaFactory(); });
  } else {
    exports.mediaFactory = new MediaFactory();
  }

})(typeof module !== 'undefined' ? module.exports : window);

/**
 * JOSHFIRE: library wrapped in "define" AMD call, code between
 * "Start vanilla" and "End vanilla" is a vanilla copy of Underscore.
 *
 * NB: the library exports itself to a global '_' property.
 */
define('joshfire-framework/vendor/underscore',[], function () {
// Start vanilla Underscore
// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------
(function() {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
// End vanilla Underscore

  // Return global Underscore object
  // (see line 64 and following)
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      return exports;
    }
    return exports._;
  } else {
    return this._;
  }
});

/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context ? context.ownerDocument || context : document );

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.7.1",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.add( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.fireWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).off( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery.Callbacks( "once memory" );

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array, i ) {
		var len;

		if ( array ) {
			if ( indexOf ) {
				return indexOf.call( array, elem, i );
			}

			len = array.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in array && array[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


// String to Object flags format cache
var flagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
function createFlags( flags ) {
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!memory;
			}
		};

	return self;
};




var // Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({

	Deferred: function( func ) {
		var doneList = jQuery.Callbacks( "once memory" ),
			failList = jQuery.Callbacks( "once memory" ),
			progressList = jQuery.Callbacks( "memory" ),
			state = "pending",
			lists = {
				resolve: doneList,
				reject: failList,
				notify: progressList
			},
			promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,

				state: function() {
					return state;
				},

				// Deprecated
				isResolved: doneList.fired,
				isRejected: failList.fired,

				then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
					deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
					return this;
				},
				always: function() {
					deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
					return this;
				},
				pipe: function( fnDone, fnFail, fnProgress ) {
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( {
							done: [ fnDone, "resolve" ],
							fail: [ fnFail, "reject" ],
							progress: [ fnProgress, "notify" ]
						}, function( handler, data ) {
							var fn = data[ 0 ],
								action = data[ 1 ],
								returned;
							if ( jQuery.isFunction( fn ) ) {
								deferred[ handler ](function() {
									returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								});
							} else {
								deferred[ handler ]( newDefer[ action ] );
							}
						});
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					if ( obj == null ) {
						obj = promise;
					} else {
						for ( var key in promise ) {
							obj[ key ] = promise[ key ];
						}
					}
					return obj;
				}
			},
			deferred = promise.promise({}),
			key;

		for ( key in lists ) {
			deferred[ key ] = lists[ key ].fire;
			deferred[ key + "With" ] = lists[ key ].fireWith;
		}

		// Handle state
		deferred.done( function() {
			state = "resolved";
		}, failList.disable, progressList.lock ).fail( function() {
			state = "rejected";
		}, doneList.disable, progressList.lock );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = sliceDeferred.call( arguments, 0 ),
			i = 0,
			length = args.length,
			pValues = new Array( length ),
			count = length,
			pCount = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred(),
			promise = deferred.promise();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					deferred.resolveWith( deferred, args );
				}
			};
		}
		function progressFunc( i ) {
			return function( value ) {
				pValues[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				deferred.notifyWith( promise, pValues );
			};
		}
		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				if ( args[ i ] && args[ i ].promise && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject, progressFunc(i) );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return promise;
	}
});




jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		fragment,
		tds,
		events,
		eventName,
		i,
		isSupported,
		div = document.createElement( "div" ),
		documentElement = document.documentElement;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( window.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.style.width = "2px";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( window.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	fragment.removeChild( div );

	// Null elements to avoid leaks in IE
	fragment = select = opt = marginDiv = div = input = null;

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, outer, inner, table, td, offsetSupport,
			conMarginTop, ptlm, vb, style, html,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		conMarginTop = 1;
		ptlm = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
		vb = "visibility:hidden;border:0;";
		style = "style='" + ptlm + "border:5px solid #000;padding:0;'";
		html = "<div " + style + "><div></div></div>" +
			"<table " + style + " cellpadding='0' cellspacing='0'>" +
			"<tr><td></td></tr></table>";

		container = document.createElement("div");
		container.style.cssText = vb + "width:0;height:0;position:static;top:0;margin-top:" + conMarginTop + "px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName( "td" );
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Figure out if the W3C box model works as expected
		div.innerHTML = "";
		div.style.width = div.style.paddingLeft = "1px";
		jQuery.boxModel = support.boxModel = div.offsetWidth === 2;

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.style.display = "inline";
			div.style.zoom = 1;
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "";
			div.innerHTML = "<div style='width:4px;'></div>";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
		}

		div.style.cssText = ptlm + vb;
		div.innerHTML = html;

		outer = div.firstChild;
		inner = outer.firstChild;
		td = outer.nextSibling.firstChild.firstChild;

		offsetSupport = {
			doesNotAddBorder: ( inner.offsetTop !== 5 ),
			doesAddBorderForTableAndCells: ( td.offsetTop === 5 )
		};

		inner.style.position = "fixed";
		inner.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		offsetSupport.fixedPosition = ( inner.offsetTop === 20 || inner.offsetTop === 15 );
		inner.style.position = inner.style.top = "";

		outer.style.overflow = "hidden";
		outer.style.position = "relative";

		offsetSupport.subtractsBorderForOverflowNotVisible = ( inner.offsetTop === -5 );
		offsetSupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== conMarginTop );

		body.removeChild( container );
		div  = container = null;

		jQuery.extend( support, offsetSupport );
	});

	return support;
})();




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var privateCache, thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey,
			isEvents = name === "events";

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!isEvents && !pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = ++jQuery.uuid;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		privateCache = thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Users should not attempt to inspect the internal events object using jQuery.data,
		// it is undocumented and subject to change. But does anyone listen? No.
		if ( isEvents && !thisCache[ name ] ) {
			return privateCache.events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ internalKey ] : internalKey;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the cache and need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ internalKey ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( internalKey );
			} else {
				elem[ internalKey ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, attr, name,
			data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 && !jQuery._data( this[0], "parsedAttrs" ) ) {
					attr = this[0].attributes;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
					jQuery._data( this[0], "parsedAttrs", true );
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var self = jQuery( this ),
					args = [ parts[0], value ];

				self.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				jQuery.isNumeric( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery._data( elem, deferDataKey );
	if ( defer &&
		( src === "queue" || !jQuery._data(elem, queueDataKey) ) &&
		( src === "mark" || !jQuery._data(elem, markDataKey) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery._data( elem, queueDataKey ) &&
				!jQuery._data( elem, markDataKey ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.fire();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = ( type || "fx" ) + "mark";
			jQuery._data( elem, type, (jQuery._data( elem, type ) || 0) + 1 );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery._data( elem, key ) || 1) - 1 );
			if ( count ) {
				jQuery._data( elem, key, count );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		var q;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			q = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			hooks = {};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			jQuery._data( elem, type + ".run", hooks );
			fn.call( elem, function() {
				jQuery.dequeue( elem, type );
			}, hooks );
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue " + type + ".run", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery.Callbacks( "once memory" ), true ) )) {
				count++;
				tmp.add( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	nodeHook, boolHook, fixSpecified;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = ( value || "" ).split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, l,
			i = 0;

		if ( value && elem.nodeType === 1 ) {
			attrNames = value.toLowerCase().split( rspace );
			l = attrNames.length;

			for ( ; i < l; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;

					// See #9699 for explanation of this approach (setting first, then removal)
					jQuery.attr( elem, name, "" );
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( rboolean.test( name ) && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
jQuery.attrHooks.tabindex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.nodeValue !== "" : ret.specified ) ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.nodeValue = value + "" );
		}
	};

	// Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set = nodeHook.set;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = "" + value );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});




var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
	rhoverHack = /\bhover(\.\S+)?\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	quickParse = function( selector ) {
		var quick = rquickIs.exec( selector );
		if ( quick ) {
			//   0  1    2   3
			// [ _, tag, id, class ]
			quick[1] = ( quick[1] || "" ).toLowerCase();
			quick[3] = quick[3] && new RegExp( "(?:^|\\s)" + quick[3] + "(?:\\s|$)" );
		}
		return quick;
	},
	quickIs = function( elem, m ) {
		var attrs = elem.attributes || {};
		return (
			(!m[1] || elem.nodeName.toLowerCase() === m[1]) &&
			(!m[2] || (attrs.id || {}).value === m[2]) &&
			(!m[3] || m[3].test( (attrs[ "class" ] || {}).value ))
		);
	},
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, quick, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				quick: quickParse( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			t, tns, type, origType, namespaces, origCount,
			j, events, special, handle, eventType, handleObj;

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, [ "events", "handle" ], true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType;

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			old = null;
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old && old === elem.ownerDocument ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = [].slice.call( arguments, 0 ),
			run_all = !event.exclusive && !event.namespace,
			handlerQueue = [],
			i, j, cur, jqcur, ret, selMatch, matched, matches, handleObj, sel, related;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Determine handlers that should run if there are delegated events
		// Avoid disabled elements in IE (#6911) and non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !event.target.disabled && !(event.button && event.type === "click") ) {

			// Pregenerate a single jQuery object for reuse with .is()
			jqcur = jQuery(this);
			jqcur.context = this.ownerDocument || this;

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {
				selMatch = {};
				matches = [];
				jqcur[0] = cur;
				for ( i = 0; i < delegateCount; i++ ) {
					handleObj = handlers[ i ];
					sel = handleObj.selector;

					if ( selMatch[ sel ] === undefined ) {
						selMatch[ sel ] = (
							handleObj.quick ? quickIs( cur, handleObj.quick ) : jqcur.is( sel )
						);
					}
					if ( selMatch[ sel ] ) {
						matches.push( handleObj );
					}
				}
				if ( matches.length ) {
					handlerQueue.push({ elem: cur, matches: matches });
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
		if ( event.metaKey === undefined ) {
			event.metaKey = event.ctrlKey;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady
		},

		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector,
				ret;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !form._submit_attached ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						// If form was submitted by the user, bubble the event up the tree
						if ( this.parentNode && !event.isTrigger ) {
							jQuery.event.simulate( "submit", this.parentNode, event, true );
						}
					});
					form._submit_attached = true;
				}
			});
			// return undefined since we don't need an event listener
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
							jQuery.event.simulate( "change", this, event, true );
						}
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !elem._change_attached ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					elem._change_attached = true;
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on.call( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			var handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace? handleObj.type + "." + handleObj.namespace : handleObj.type,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( var type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length == 1? this.off( selector, "**" ) : this.off( types, selector, fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc) 
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					if ( type === "first" ) { 
						return true; 
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					doneName = match[0];
					parent = elem.parentNode;
	
					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 

						parent[ expando ] = doneName;
					}
					
					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try { 
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833) 
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
Sizzle.selectors.attrMap = {};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && ( 
			typeof selector === "string" ?
				// If this is a positional selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				POS.test( selector ) ? 
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];
		
		// Array (deprecated as of jQuery 1.7)
		if ( jQuery.isArray( selectors ) ) {
			var level = 1;

			while ( cur && cur.ownerDocument && cur !== context ) {
				for ( i = 0; i < selectors.length; i++ ) {

					if ( jQuery( cur ).is( selectors[ i ] ) ) {
						ret.push({ selector: selectors[ i ], elem: cur, level: level });
					}
				}

				cur = cur.parentNode;
				level++;
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}




function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")", "i"),
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery( this );

				self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.text( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery.clean(arguments) );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			value = value.replace(rxhtmlTag, "<$1></$2>");

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery( this );

				self.html( value.call(this, i, self.html()) );
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || ( l > 1 && i < lastIndex ) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type + ( events[ type ][ i ].namespace ? "." : "" ) + events[ type ][ i ].namespace, events[ type ][ i ], events[ type ][ i ].data );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc,
	first = args[ 0 ];

	// nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if ( nodes && nodes[0] ) {
		doc = nodes[0].ownerDocument || nodes[0];
	}

	// Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && doc === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ first ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ first ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	var nodeName = ( elem.nodeName || "" ).toLowerCase();
	if ( nodeName === "input" ) {
		fixDefaultChecked( elem );
	// Skip scripts, get other children
	} else if ( nodeName !== "script" && typeof elem.getElementsByTagName !== "undefined" ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function shimCloneNode( elem ) {
	var div = document.createElement( "div" );
	safeFragment.appendChild( div );

	div.innerHTML = elem.outerHTML;
	return div.firstChild;
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			// IE<=8 does not properly clone detached, unknown element nodes
			clone = jQuery.support.html5Clone || !rnoshimcache.test( "<" + elem.nodeName ) ?
				elem.cloneNode( true ) :
				shimCloneNode( elem );

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType;

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [], j;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

					// Append wrapper element to unknown element safe doc fragment
					if ( context === document ) {
						// Use the fragment we've already created for this document
						safeFragment.appendChild( div );
					} else {
						// Use a fragment created with the owner document
						createSafeFragment( context ).appendChild( div );
					}

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );

				} else {
					if ( ret[i].nodeType === 1 ) {
						var jsTags = jQuery.grep( ret[i].getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id,
			cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^([\-+])=([\-+.\de]+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	// Setting 'undefined' is a no-op
	if ( arguments.length === 2 && value === undefined ) {
		return this;
	}

	return jQuery.access( this, name, value, true, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	});
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity", "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

// DEPRECATED, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

jQuery.each(["height", "width"], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			var val;

			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWH( elem, name, extra );
				} else {
					jQuery.swap( elem, cssShow, function() {
						val = getWH( elem, name, extra );
					});
				}

				return val;
			}
		},

		set: function( elem, value ) {
			if ( rnumpx.test( value ) ) {
				// ignore negative width and height values #1599
				value = parseFloat( value );

				if ( value >= 0 ) {
					return value + "px";
				}

			} else {
				return value;
			}
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				var ret;
				jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						ret = curCSS( elem, "margin-right", "marginRight" );
					} else {
						ret = elem.style.marginRight;
					}
				});
				return ret;
			}
		};
	}
});

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( (defaultView = elem.ownerDocument.defaultView) &&
				(computedStyle = defaultView.getComputedStyle( elem, null )) ) {
			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left, rsLeft, uncomputed,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret === null && style && (uncomputed = style[ name ]) ) {
			ret = uncomputed;
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ( ret || 0 );
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWH( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight,
		i = 0,
		len = which.length;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			for ( ; i < len; i++ ) {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
				}
			}
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ] || 0;
	}
	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		for ( ; i < len; i++ ) {
			val += parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
			}
		}
	}

	return val + "px";
}

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return ( width === 0 && height === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefiler, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && obj != null && typeof obj === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for ( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for ( key in s.converters ) {
				if ( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if ( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for ( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		( typeof s.data === "string" );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}
									responses.text = xhr.responseText;

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback );

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( display === "" && jQuery.css(elem, "display") === "none" ) {
						jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data( elem, "olddisplay" ) || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			var elem, display,
				i = 0,
				j = this.length;

			for ( ; i < j; i++ ) {
				elem = this[i];
				if ( elem.style ) {
					display = jQuery.css( elem, "display" );

					if ( display !== "none" && !jQuery._data( elem, "olddisplay" ) ) {
						jQuery._data( elem, "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed( speed, easing, callback );

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		function doAnimation() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p, e,
				parts, start, end, unit,
				method;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			for ( p in prop ) {

				// property name normalization
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				val = prop[ name ];

				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if ( !jQuery.support.inlineBlockNeedsLayout || defaultDisplay( this.nodeName ) === "inline" ) {
							this.style.display = "inline-block";

						} else {
							this.style.zoom = 1;
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test( val ) ) {

					// Tracks whether to show or hide based on private
					// data attached to the element
					method = jQuery._data( this, "toggle" + p ) || ( val === "toggle" ? hidden ? "show" : "hide" : 0 );
					if ( method ) {
						jQuery._data( this, "toggle" + p, method === "show" ? "hide" : "show" );
						e[ method ]();
					} else {
						e[ val ]();
					}

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ( (end || 1) / e.cur() ) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		}

		return optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},

	stop: function( type, clearQueue, gotoEnd ) {
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var index,
				hadTimers = false,
				timers = jQuery.timers,
				data = jQuery._data( this );

			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}

			function stopQueue( elem, data, index ) {
				var hooks = data[ index ];
				jQuery.removeData( elem, index, true );
				hooks.stop( gotoEnd );
			}

			if ( type == null ) {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && index.indexOf(".run") === index.length - 4 ) {
						stopQueue( this, data, index );
					}
				}
			} else if ( data[ index = type + ".run" ] && data[ index ].stop ){
				stopQueue( this, data, index );
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					if ( gotoEnd ) {

						// force the next step to be the last
						timers[ index ]( true );
					} else {
						timers[ index ].saveState();
					}
					hadTimers = true;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( !( gotoEnd && hadTimers ) ) {
				jQuery.dequeue( this, type );
			}
		});
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice( 0, num )), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx( "show", 1 ),
	slideUp: genFx( "hide", 1 ),
	slideToggle: genFx( "toggle", 1 ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ( ( -Math.cos( p*Math.PI ) / 2 ) + 0.5 ) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		( jQuery.fx.step[ this.prop ] || jQuery.fx.step._default )( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[ this.prop ] != null && (!this.elem.style || this.elem.style[ this.prop ] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.end = to;
		this.now = this.start = from;
		this.pos = this.state = 0;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );

		function t( gotoEnd ) {
			return self.step( gotoEnd );
		}

		t.queue = this.options.queue;
		t.elem = this.elem;
		t.saveState = function() {
			if ( self.options.hide && jQuery._data( self.elem, "fxshow" + self.prop ) === undefined ) {
				jQuery._data( self.elem, "fxshow" + self.prop, self.start );
			}
		};

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		var dataShow = jQuery._data( this.elem, "fxshow" + this.prop );

		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = dataShow || jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any flash of content
		if ( dataShow !== undefined ) {
			// This show is picking up where a previous hide or show left off
			this.custom( this.cur(), dataShow );
		} else {
			this.custom( this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() );
		}

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = jQuery._data( this.elem, "fxshow" + this.prop ) || jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom( this.cur(), 0 );
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var p, n, complete,
			t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( p in options.animatedProperties ) {
				if ( options.animatedProperties[ p ] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function( index, value ) {
						elem.style[ "overflow" + value ] = options.overflow[ index ];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery( elem ).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[ p ] );
						jQuery.removeData( elem, "fxshow" + p, true );
						// Toggle data is no longer needed
						jQuery.removeData( elem, "toggle" + p, true );
					}
				}

				// Execute the complete function
				// in the event that the complete function throws an exception
				// we must ensure it won't be called twice. #5684

				complete = options.complete;
				if ( complete ) {

					options.complete = false;
					complete.call( elem );
				}
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[this.prop] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ( (this.end - this.start) * this.pos );
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

// Adds width/height step functions
// Do not set anything below 0
jQuery.each([ "width", "height" ], function( i, prop ) {
	jQuery.fx.step[ prop ] = function( fx ) {
		jQuery.style( fx.elem, prop, Math.max(0, fx.now) + fx.unit );
	};
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( document.compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );
			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0], box;

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		var doc = elem.ownerDocument,
			docElem = doc.documentElement;

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow(doc),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.support.doesNotAddBorder && !(jQuery.support.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function( val ) {
		var elem, win;

		if ( val === undefined ) {
			elem = this[ 0 ];

			if ( !elem ) {
				return null;
			}

			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}

		// Set the scroll offset
		return this.each(function() {
			win = getWindow( this );

			if ( win ) {
				win.scrollTo(
					!i ? val : jQuery( win ).scrollLeft(),
					 i ? val : jQuery( win ).scrollTop()
				);

			} else {
				this[ method ] = val;
			}
		});
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			this[ type ]() :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			this[ type ]() :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}

		if ( jQuery.isWindow( elem ) ) {
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
			var docElemProp = elem.document.documentElement[ "client" + name ],
				body = elem.document.body;
			return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				body && body[ "client" + name ] || docElemProp;

		// Get document width or height
		} else if ( elem.nodeType === 9 ) {
			// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
			return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

		// Get or set width or height on the element
		} else if ( size === undefined ) {
			var orig = jQuery.css( elem, type ),
				ret = parseFloat( orig );

			return jQuery.isNumeric( ret ) ? ret : orig;

		// Set the width or height on the element (default to pixels if value is unitless)
		} else {
			return this.css( type, typeof size === "string" ? size : size + "px" );
		}
	};

});




// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define('joshfire-framework/vendor/jquery',[], function () { return jQuery; } );
}



})( window );
define('joshfire-framework/adapters/samsungtv/utils/dollar',['joshlib!vendor/jquery'], function(dollar) {
  if($) {
    return $;
  }

  return dollar;
});

define('joshfire-framework/utils/closest_descendant',['joshlib!utils/dollar'], function ($) {
  /**
   * Returns the closest descendant of a jQuery set which matches a selector
   *
   * Use this instead of jQuery.find().first() when you don't want to match
   * a nested element
   *
   * The closest element is the one whose depth & position are the lowest
   * Example:
   * <div>
   *   <div>
   *     <span> 1 </span>
   *     <span> 2 </span>
   *   </div>
   *   <span> 3 </span>
   *   <span> 4 </span>
   * </div>
   *
   * closest_descendant(el, 'span') will return the 3rd span
   *
   * @function
   * @param {element|string|jQuery object} A DOM element, a jQuery set or a selector
   * @param {string} The selector used to filter the descendants
   * @return {jQuery object} the closest descendant (may be an empty jQuery object)
   */

  var closest_descendant = function($set, selector) {
    $set = $($set); // ensures we deal with a jQuery set
    var $found = $(); // empty set
    while ($set.length) {
      // search the current set
      $found = $set.filter(selector);
      // stop if one is found
      if ($found.length) break;
      // replace the current set by the children of all item in the set
      $set = $set.children();
    }
    return $found.first();
  };

  return closest_descendant;
});

/*! Joshfire Framework module - Copyright 2013 Joshfire, MIT license */
/**
 * @fileOverview Exposes the Woodman library to the external world.
 *
 * The Woodman library cannot be used directly because we want Woodman calls
 * that appear throughout the modules of the Joshfire framework not to log
 * anything by default, even when Woodman is used within an app that references
 * the framework.
 *
 * This module wraps the Woodman library to silence all loggers of the
 * Joshfire framework library. Applications that want to re-enable these traces
 * simply need to override this setting within the "loggers" property of their
 * Woodman library with a logger that applies to the "joshfire.framework"
 * namespace, e.g.:
 *   {
 *     name: 'joshfire.framework',
 *     level: 'all'
 *   }
 *
 * References to this module are automatically removed by the framework
 * optimizer to save space in the generated code.
 */


/**
 * JOSHFIRE: library wrapped in "define" AMD call.
 *
 * The rest of the code is a verbatim copy of the backbone.js
 * library but for a few lines of code commented out in this
 * version. The few lines of code commented out are flagged
 * with "JOSHFIRE". In a non-AMD version of Backbone, they are
 * used to import Underscore and jQuery/Zepto. Both libraries
 * are directly imported by the call to "define".
 */
define('joshfire-framework/vendor/backbone',[
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar'
], function (_, $) {
// Start almost vanilla Backbone.js lib (check lines flagged with JOSHFIRE)
//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both the browser and the server.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.0.0';

  /* JOSHFIRE: commented out as this would conflict with "define" call
     JOSHFIRE: provide our own $
  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;
  */
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    _.extend(this, _.pick(options, modelOptions));
    if (options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // A list of options to be attached directly to the model, if provided.
  var modelOptions = ['url', 'urlRoot', 'collection'];

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
      if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

      options = _.extend({validate: true}, options);

      // Do not persist invalid models.
      if (!this._validate(attrs, options)) return false;

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.url) this.url = options.url;
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, merge: false, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.defaults(options || {}, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults(options || {}, setOptions);
      if (options.parse) models = this.parse(models, options);
      if (!_.isArray(models)) models = models ? [models] : [];
      var i, l, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(models[i], options))) continue;

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(model)) {
          if (options.remove) modelMap[existing.cid] = true;
          if (options.merge) {
            existing.set(model.attributes, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }

        // This is a new model, push it to the `toAdd` list.
        } else if (options.add) {
          toAdd.push(model);

          // Listen to added models' events, and index models for lookup by
          // `id` and by `cid`.
          model.on('all', this._onModelEvent, this);
          this._byId[model.cid] = model;
          if (model.id != null) this._byId[model.id] = model;
        }
      }

      // Remove nonexistent models if appropriate.
      if (options.remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(toAdd));
        } else {
          push.apply(this.models, toAdd);
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      if (options.silent) return this;

      // Trigger `add` events.
      for (i = 0, l = toAdd.length; i < l; i++) {
        (model = toAdd[i]).trigger('add', model, this, options);
      }

      // Trigger `sort` if the collection was sorted.
      if (sort) this.trigger('sort', this, options);
      return this;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models;
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function(begin, end) {
      return this.models.slice(begin, end);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj.id != null ? obj.id : obj.cid || obj];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Figure out the smallest index at which a model should be inserted so as
    // to maintain order.
    sortedIndex: function(model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) {
        this.trigger('invalid', this, attrs, options);
        return false;
      }
      return model;
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
    'isEmpty', 'chain'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(e.g. model, collection, id, className)* are
    // attached directly to the view.  See `viewOptions` for an exhaustive
    // list.
    _configure: function(options) {
      if (this.options) options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && window.ActiveXObject &&
          !(window.external && window.external.msActiveXFilteringEnabled)) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        callback && callback.apply(router, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional){
                     return optional ? match : '([^\/]+)';
                   })
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param) {
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment) return;
      this.fragment = fragment;
      var url = this.root + fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function (model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

}).call(this);
// End almost vanilla Backbone.js lib

  // Return global Backbone object
  return this.Backbone;
});

/**
 * @fileoverview Base class for Joshfire schema.io datasource collections.
 *
 * This base class wraps a Joshfire Factory datasource in a Backbone
 * collection, ensuring that the "sync" method of the Backbone collection
 * calls the "find" method of the Factory datasource.
 *
 * The class maintains an "hasMore" flag, set when the collection "may" have
 * more items. The flag is set initially and reset when the collection receives
 * fewer items than the number of items requested (the "limit" parameter). This
 * flag could be used by callers e.g. to display/hide a "load more" icon.
 *
 * Note this flag is more a "likely valid" information than an assertion: there
 * may be no more items to fetch when the flag is set, and this mechanism cannot
 * account for collections that receive more items from time to time.
 *
 * The class also maintains a "fetched" flag, set when the collection has been
 * fetched at least one. Note that initializing the collection with a non empty
 * set of item counts as a fetch.
 *
 * The collection triggers a series of events when it is fetched, in order:
 * - "load:start" when fetch starts
 * - "load:first" when first fetch completes, provided it returned at least one
 * item.
 * - "load:more" when a subsequent fetch completes, provided at least one new
 * item got added to the list
 * - "load:last" when fetch completes with no new items or with fewer items
 * than the requested number.
 * - "load" when fetch completes, regardless of whether new items got added to
 * the collection.
 * - "load:error" when an error occurred.
 *
 * Said differently, given a call to "fetch", the collection triggers
 * "load:start". It then triggers one of "load:first" or "load:more" if new
 * items got added to the collection, followed by a "load:last" if no items got
 * added or if fewer items than requested got added. The "load" event completes
 * the series. If an error occurs, the chain of events gets interrupted and a
 * "load:error" event is triggered.
 *
 * The "syncstarted", "syncerror" and "syncsuccess" events are deprecated.
 * They are synonymous to "load:start", "load:error", and "load" for when
 * the collection is fetched. New "update" events should be created when the
 * collection gets updated to support "save" operations.
 */

define('joshfire-framework/collection',[
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore'
], function (Backbone, _) {

  /**
   * Base wrapper around a Backbone collection that handles Joshfire schema.io
   * datasource collections.
   */
  var newCol = Backbone.Collection.extend({
    /**
     * Has the collection ever been fetched?
     */
    fetched: false,

    /**
     * Is it likely that there are more items to fetch?
     */
    hasMore: true,

    /**
     * Number of items to skip to fetch more items.
     *
     * This parameter is managed automatically based on the number of items
     * in the list.
     */
    skip: 0,

    /**
     * Number of items to request per "fetch more".
     *
     * This parameter is initialized to the number of items returned by the
     * first call to "fetch".
     */
    limit: 20,

    /**
     * Initializes the collection.
     *
     * Note that the collection is not built from a list of models but rather
     * from a datasource, given as parameter in the "options" hash.
     *
     * @function
     * @param {Object} models Defined to ensure compatibility with BackBone,
     *   but unused in practice.
     * @param {Object} options Options hash. The function sets the underlying
     *   datasource if it finds a "dataSource" property, and sets base query
     *   options if it finds a "dataSourceQuery" property.
     */
    initialize: function (models, options) {
      this.ds = null;
      this.dsq = {};
      this.hasMore = true;

      options = options || {};
      if (options.dataSource) {
        this.setDataSource(options.dataSource);
      }
      if (options.dataSourceQuery) {
        this.setDataSourceQuery(options.dataSourceQuery);
      }

      // Set the "fetched" flag the first time something gets added to
      // the collection.
      this.listenTo(this, 'add', function () {
        this.fetched = true;
      });
      this.listenTo(this, 'reset', function () {
        this.fetched = true;
      });
    },

    /**
     * Fetches more items from the source provider.
     *
     * The function requests the same number of items as was originally
     * received. For instance, if the first "fetch" request returned 20 items,
     * this function requests 20 additional items from the source provider.
     * This guarantees a consistent page size. Default page size is 20.
     *
     * The function runs asynchronously. The caller should listen to the "load"
     * events triggered by the collection to detect when fetch is over.
     *
     * @function
     */
    fetchMore: function () {
      this.fetch({
        dataSourceQuery: {
          skip: this.skip,
          limit: this.limit
        },
        update: true,
        add: true,
        remove: false
      });
    },


    /**
     * Sets the datasource that the collection wraps.
     *
     * @function
     * @param {Object} ds Factory datasource object, as returned by
     *   a call to Joshfire.factory.getDataSource in the Joshfire Factory.
     */
    setDataSource: function (ds) {
      this.ds = ds;
    },

    /**
     * Sets base datasource query options.
     *
     * @function
     * @param {Object} dsq Datsource query options. These options
     *   may be extended with additional options in calls to "sync"
     */
    setDataSourceQuery: function (dsq) {
      this.dsq = dsq;
    },

    /**
     * Fetches the underlying datasource.
     *
     * Fetch is asynchronous. The function calls "options.success"
     * or "options.error" when it's done.
     *
     * @function
     * @param {String} method The CRUD method ("create", "read", "update",
     *   or "delete"). Only "read" is supported for the time being.
     * @param {Object} model The model to be saved (or the collection to
     *   be read). Unused in practice.
     * @param {Object} options Success and error callbacks, and all other
     *   request options
     */
    sync: function (method, model, options) {
      options = options || {};
      var success = options.success || function () {};
      var error = options.error || function () {};
      var first = (this.length === 0);

      // Sanity checks to avoid running into troubles
      if (!this.ds) {
        this.trigger('load:error', {
          err: 'init failed, ds is null'
        });
        this.trigger('syncerror', {
          method: method,
          err: 'init failed, ds is null'
        });
        return error('init failed, ds is null');
      }

      // Prepare query options
      var queryOptions = {};
      if (this.dsq) {
        queryOptions = _.extend(queryOptions, this.dsq);
      }
      if (options.dataSourceQuery) {
        queryOptions = _.extend(queryOptions, options.dataSourceQuery);
      }

      // Collection is read-only (meaning it can just receive items from
      // the origin server, but cannot be modified and saved back to the
      // server afterwards), discard other types of updates.
      // Note this may be amended in the future
      if (method !== 'read') {
        this.trigger('load:error', {
          err: 'collection is read-only'
        });
        this.trigger('syncerror', {
          method: method,
          err: 'collection is read-only'
        });
        return error('Collection is read-only');
      }

      // Synchronization has started, trigger the appropriate event
      this.trigger('load:start');
      this.trigger('syncstarted', {
        method: method
      });

      this.ds.find(queryOptions, _.bind(function (err, data) {
        if (err) {
          this.trigger('load:error', {
            err: err
          });
          this.trigger('syncerror', {
            method: method,
            err: err
          });
          return error(err);
        }

        var entries = [];
        if (this.ds.children) {
          // Datasource is a multiple datasource,
          // concatenate individual lists of items.
          entries = data.entries.map(function (entry) {
            return entry.entries;
          });
        } else {
          // Datasource is an atomic datasource
          entries = data.entries || [];
        }

        // Run the success callback that sets the items in the collection
        success(entries);

        // Update the "skip", "limit" and "hasMore" flags
        if (entries.length > 0) {
          this.skip += entries.length;
          if (this.limit === 0) {
            this.limit = entries.length;
          }
        }
        if ((entries.length === 0) || (entries.length < this.limit)) {
          // We received fewer items than the number of items that were
          // initially requested. The collection is most likely full.
          this.hasMore = false;
        }

        if (entries.length > 0) {
          if (first) {
            this.trigger('load:first');
          }
          else {
            this.trigger('load:more');
          }
        }
        if (!this.hasMore) {
          this.trigger('load:last');
        }
        this.trigger('load');
        this.trigger('syncsuccess', {
          method: method
        });
      }, this));
    }

  });

  return newCol;

});
/**
 * @fileoverview Base class for Joshfire datasource collections.
 *
 * This base class wraps a Joshfire Factory datasource in a Backbone
 * collection, ensuring that the "sync" method of the Backbone collection
 * calls the "find" method of the Factory datasource.
 */

define('collections/samsungImageObjects',[
  'joshlib!collection',
  'joshlib!vendor/underscore'
], function (Collection, _) {
  var filteredCollection = Collection.extend({
    /**
     * Overrides base sync method to filter out entries whose images are
     * too large, because such images often result in a crash when the app
     * attempts to render them on a Samsung TV (model 2011 at least).
     */
    /*
    sync: function (method, model, options) {
      debugger;
      options = options || {};
      var success = options.success || function () {};
      options.success = function (entries) {
        // The goal of the following code is to update the "entries" array
        // in place to filter out images that are too large ("in place" as
        // in no call to concat, slice or other array methods that would
        // create a copy of the array)
        var copy = _.filter(entries, function (item) {
          return (item.width <= 1024);
        });
        entries.splice(0, entries.length);
        _.each(copy, function (item) {
          entries.push(item);
        });
        console.error(model, entries);
        success(model, entries, options);
      };
      Collection.prototype.sync.call(this, method, model, options);
    }
    */
  });
  return filteredCollection;
});
/**
 * @fileOverview Base View class for the Joshfire Framework.
 *
 * The base view derives from Backbone's view to add:
 *
 * 1. a three-step rendering logic on top of Backbone's "render" logic. The
 * view exposes a "rendered" flag so that applications and derived classes may
 * tell when the the view is rendered and when it's not. See below for details.
 *
 * 2. "show"/"hide" functions to display or hide the view after rendering. The
 * view exposes a "hidden" flag used internally not to update the DOM uselessly
 * when the code calls show/hide more than once.
 *
 * 3. a "remove" function on top of Backbone's "remove" logic that sets a
 * "removed" flag, meant as a gatekeeper to detect and prevent actions attempted
 * on a view that should be up for garbage collection.
 *
 * 4. an images loader that extracts and fetches the images in the background
 * right after the view has been rendered and flags the view as loading in the
 * meantime.
 *
 * 5. a "load" event triggered when the view is done rendering (directly for
 * views that do not use the images loader)
 *
 * 6. a "scrollTop" function that attempts to scroll the view back to the top
 * of the page if possible.
 *
 * The typical life cycle of a view is:
 * - the view is created, initialization options help set its specificities
 * - the view gets rendered with a call to "render" or by its parent view
 * if the view happens to be the child of a container view.
 * - the view listens to events on models, collections, views, whatever and
 * updates itself as needed.
 * - the view gets removed from the DOM through a call to "remove", either
 * directly or by its parent view.
 * - that's it, the view should be garbage collected after that.
 *
 * The framework defines various views that derive from this base class,
 * in particular to add "container" logic for views that are to contain
 * other views.
 *
 * The rendering mechanism of a view is a three-step process:
 *
 * a) generate: Computes the HTML content to render as a string. This step
 * may be asynchronous, meaning it can be deported server-side or in a worker
 * as needed. The generate method either returns the inner HTML content to
 * put in the wrapping element associated with the view, or the outer HTML
 * content (wrapping element included), depending on the value of its first
 * parameter.
 *
 * b) setContent: Sets the HTML content prepared by generate as inner HTML
 * of the wrapping element.
 *
 * c) enhance: Completes the code with additional logic (e.g. event handlers)
 *
 * Unless absolutely needed, the "render" function should never have to be
 * overridden in derivated classes. Note that function sets the "rendered"
 * flag at the end of the rendering process.
 *
 * All views used in the framework must derive from this base class and must
 * respect those three steps (in particular, the HTML content must be prepared
 * as a string before it is applied to the underlying DOM element).
 *
 * Actually, all views used in the framework should rather derive from the
 * UIElement class (that class is a synonymous to View in the generic case but
 * is overridden in device-specific and capability-specific adapters)
 *
 * IMPORTANT: unless you have a good reason not to, you should always call
 * the "initialize" function of the parent's class from within the "initialize"
 * function of a derived class, using something such as:
 *  initialize: function (options) {
 *   View.prototype.initialize.call(this, options);
 *  }
 * ... replacing "View" with the appropriate parent's class name in your code.
 */

/*global define*/

define('joshfire-framework/view',[
  'joshlib!utils/dollar',
  'require',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore'
], function ($, woodman, Backbone, _) {
  

  /**
   * Base View class.
   *
   * All views in the framework extend this base class.
   *
   * The base view itself is an extension to Backbone views that introduces:
   * - a three-step asynchronous rendering logic on top of Backbone's "render"
   * logic, with "generate", "setContent" and "enhance"
   * - a "rendered" flag set when the view has already been rendered. This flag
   * may be used to detect cases when updating the view is not needed since it
   * has simply not yet been rendered.
   * - show/hide functions
   * - an images loader mechanism that renders a loading spinner while images
   * get loaded in the background. The "imageLoad" event is triggered whenever
   * a new image has been loaded. The "imagesLoad" event is triggered when all
   * images have been loaded.
   * - a "load" event triggered when the view is rendered and fully loaded,
   * unless the "customLoadEvent" option was set when the view was created.
   */
  var newView = Backbone.View.extend({

    /**
     * Shortcut to underscore's templating function
     */
    compileTemplate: _.template,


    /**
     * The rendered flag is set when the view is rendered for the first time.
     *
     * The flag is maintained internally but not used. Derived classes may use
     * that flag to detect whether the view needs to be updated or rendered.
     *
     * The only way to reset the flag once set is to call the "remove" function
     * which also removes all events that the view listened to and, in derived
     * classes, possible models and collections that were bound to the view.
     *
     * The rendered flag and the removed flag are mutually exclusive.
     *
     * @type {boolean}
     */
    rendered: false,


    /**
     * The removed flag is set when the view is removed from the DOM through a
     * call to the "remove" function.
     *
     * The flag is maintained internally. It is mostly intended as a gatekeeper
     * to ensure that nothing runs once the view has been removed. It is used
     * by the "callIfNotRemoved" function.
     *
     * Once removed, the only way to put a view back into the DOM is to render
     * the view again.
     *
     * The rendered flag and the removed flag are mutually exclusive.
     *
     * @type {boolean}
     */
    removed: false,


    /**
     * The hidden flag is set when the view is hidden from the DOM tree.
     *
     * Note the flag may be set when the view has not yet been rendered,
     * typically when the view is created. When that happens, the root element
     * of the view receives a "display: none" style attribute when the view is
     * rendered.
     *
     * @type {boolean}
     */
    hidden: false,


    /**
     * Initializes the log ID used to trace the events of the view.
     *
     * The function sets "this.logid" to a unique ID that identifies the view.
     * That value is computed from the provided parameters, falling back to
     * Backbone's "this.cid" when no better ID could be found.
     *
     * The function should be called at the beginning of the initialize
     * method, typically before the first call to "logger.log".
     *
     * The function can be called multiple times. It will only set the
     * log ID the first time it is called.
     *
     * @function
     * @param {Object} options The options object passed to "initialize"
     */
    initializeLogId: function (options) {
      if (this.logid) return;
      options = options || {};
      this.logid = options.logid ||
        this.cid + (options.name ? '-' + options.name : '');
    },


    /**
     * Initialization code that gets executed when the view is created
     *
     * @function
     * @param {Object} options View options
     *  (options.data is kept in the view's data property)
     */
    initialize: function (options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      

      // Should the view be rendered hidden?
      this.hidden = !!options.hidden;

      this.data = options.data || {};
      this.loadImagesSmoothly = options.loadImagesSmoothly || false;
      this.imageClass = options.imageClass;
      this.processImageEl = options.processImageEl;

      // Set the image extractor if defined, or use default one
      this.getImages = options.getImages || _.bind(function () {
        // BEWARE: $.map('img', blah) is different from $('img').map(blah)
        // in Zepto 1.0rc1 (the order of parameters is not the same).
        // Use $.map for a consistent behavior between Zepto and jQuery
        var images = $.map(this.$('img'), function (el) {
          if (this.imageClass) {
            $(el).addClass(this.imageClass);
          }
          return {
            el: el,
            url: $(el).attr('src')
          };
        });
        return images;
      }, this);

      this.customLoadEvent = options.customLoadEvent || false;
      this.loadingClass = options.loadingClass || null;
      if (this.loadingClass) {
        if (!_.isString(this.loadingClass)) {
          this.loadingClass = 'loading';
        }
      }
      this.onScroll = options.onScroll || this.onScroll || null;
      this.onScrollHandler = _.bind(this.onScrollHandler, this);
    },

    /**
     * Renders the view.
     *
     * This function should never need to be overwritten in derivated classes:
     * it implements the three-step generate / setContent / enhance logic.
     *
     * Rendering may be asynchronous, so there is no guarantee that rendering
     * is done when this function returns (although most views are rendered
     * synchronously in practice).
     *
     * @function
     * @return {newView} A reference to the current object for chaining purpose
     */
    render: function (cb) {
      
      this.generate(_.bind(function (err, html) {
        // TODO: react on error!
        if (html !== false) {
          this.setContent(html);
        }
        this.enhance();
        if (typeof cb === 'function') cb();
      }, this));
    },

    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * The HTML content of the view is typically that returned by generate.
     *
     * Note the HTML content is set with "$.append" to ensure <script> tags are
     * correctly handled.
     *
     * IMPORTANT: Container views should override that function to update the
     * root element of the view(s) they contain. They should still call this
     * base function (if not, remember to set the "rendered" flag and to take
     * the "hidden" flag into account).
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function (html) {
      // Ensure the view is hidden if so requested, or shown otherwise.
      // Note we don't call the view's "hide" and "show" methods not to trigger
      // events that are only triggered when the view's "hidden" state changes.
      if (this.hidden) {
        this.$el.hide();
      }
      else {
        this.$el.show();
      }
      this.$el.html('');
      this.$el.append(html);
      this.removed = false;
      this.rendered = true;
    },

    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * Default implementation returns an empty string. Override this function
     * in derivated classes to return meaningful HTML content.
     *
     * Generation may be asynchronous. The callback function receives the
     * error or the generated HTML content.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function (cb) {
      
      cb(null, '');
    },


    /**
     * Returns the HTML content wrapped in the view's DOM element.
     *
     * The function returns the HTML content that would be returned by
     * a serialization of the DOM element associated DOM element
     * after a call to render.
     *
     * This function is useful for container views: such views should call
     * the wrapContent function of their children with the HTML content
     * returned by their generate function to compute the appropriate outerHTML
     * content for the child view without having to convert the HTML to
     * a DOM element and back to an HTML string.
     *
     *
     * Notes:
     * - the function does not alter the underlying DOM element in any way
     * since it could be rendered with other data when the function is called.
     * - the function would perhaps better be integrated as a flag parameter
     * of the generate function that container views must set when calling
     * their children's generate method. All views that override "generate"
     * would need to be updated, and that would not bring much difference
     * in the end (container views would need to remember to set the flag as
     * they need to remember to call wrapContent with this implementation),
     * so leaving it as is for now to reduce the amount of changes made to
     * the framework.
     *
     * @function
     * @param {string} innerHTML Inner HTML that is to be rendered.
     * @return {string} Wrapped content.
     */
    wrapContent: function (innerHTML, childName) {
      
      innerHTML = innerHTML || '';

      // Helper function that escapes a string for inclusion in an HTML snippet
      var escapeHtml = function (str) {
        if (!str) return '';
        return str.replace(/&/g,'&amp;')
          .replace(/>/g,'&gt;')
          .replace(/</g,'&lt;')
          .replace(/"/g,'&quot;');
      };
      // Note Backbone normally guarantees that this.el is set, so the
      // following check should be useless in practice.
      if (!this.el) return '<div>' + innerHTML + '</div>';

      // Generate the wrapped content, using the DOM element's name and
      // attributes values.
      var outerHTML = '<' + this.el.nodeName.toLowerCase();

      // Important note:
      //
      // On Samsung SmartTV 2011 (Maple browser), you cannot use _.each or a
      // 'for in' loop to iterate DOM attributes. You must use a regular loop.

      /*_.each(this.el.attributes, function (attr) {
        // TODO: escape attributes values properly
        if (attr.value) {
          outerHTML += ' ' + attr.name + '="' + escapeHtml(attr.value) + '"';
        }
        else {
          outerHTML += ' ' + attr.name;
        }
      });*/
      for(var i = 0; i < this.el.attributes.length; i++) {
        var attr = this.el.attributes[i];

        if (attr.value) {
          outerHTML += ' ' + attr.name + '="' + escapeHtml(attr.value) + '"';
        }
        else {
          outerHTML += ' ' + attr.name;
        }
      }

      if (this.hidden) {
        outerHTML += ' style="display:none"';
      }

      if (childName) {
        outerHTML += ' data-joshfire-child="'+escapeHtml(childName)+'"';
      }

      outerHTML += '>' + innerHTML +
        '</' + this.el.nodeName.toLowerCase() + '>';
      return outerHTML;
    },

    /**
     * Hides the view's DOM element
     *
     * @function
     */
    hide: function() {
      if (this.hidden) {
        
        return;
      }
      
      this.$el.hide();
      this.hidden = true;
      this.trigger('hidden');
      this.trigger('hide');
    },

    /**
     * Shows the view's DOM element
     *
     * @function
     */
    show: function() {
      if (!this.hidden) {
        
        return;
      }
      
      this.$el.show();
      this.hidden = false;
      this.trigger('shown');
      this.trigger('show');
    },


    /**
     * Loads all the images extracted from the DOM in the background and flags
     * the image containers with a "loading" class name.
     *
     * The function runs asynchronously. It triggers an "imageload" event each
     * time a new image gets loaded and an "imagesload" event when all images
     * have been loaded.
     *
     * @function
     */
    runImageLoader: function () {
      if (!this.getImages) {
        this.trigger('load');
        return;
      }

      // Extract the images to load
      var images = this.getImages();
      if (!images || (images.length === 0)) {
        // No image to load, we're done
        
        this.trigger('imagesLoad');
        if (!this.customLoadEvent) this.trigger('load');
        return;
      }

      // Load the images in the background and trigger the 'load'
      // event in the background.
      
      var imagesLoaded = 0;
      var imageLoaded = _.bind(function (err, imageEl) {
        if (imageEl) $(imageEl).removeClass('loading');
        this.trigger('imageLoad', err, imageEl);
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          // All images have been loaded
          
          this.trigger('imagesLoad');
          if (!this.customLoadEvent) this.trigger('load');
        }
      }, this);
      _.each(images, _.bind(function (image) {
        if (!image.el || !image.url) {
          return imageLoaded(image.el);
        }
        var imageEl = image.el;
        if (this.processImageEl) {
          imageEl = this.processImageEl(image.el);
        }
        $(imageEl).addClass('loading');
        var imageObject = new Image();
        imageObject.onload = function () {
          imageLoaded(null, imageEl);
          imageObject = null;
        };
        imageObject.onerror = function () {
          var err = 'Error';//TODO new BaseError();
          imageLoaded(err, imageEl);
          imageObject = null;
        };
        imageObject.src = image.url;
      }, this));
    },

    /**
     * Enhances the view with additional logic.
     *
     * Default implementation does not do anything other than triggering
     * the "load" event unless the view asserts that it will handle the
     * event itself.
     *
     * Override this function in derivated classes as needed.
     * Set the "customLoadEvent" view flag to handle the "load" event in
     * derivated classes (e.g. an image loader would typically trigger the
     * event when it's done loading the image).
     *
     * @function
     */
    enhance: function() {
      

      // If view is not done loading, add a "loading" class to the view's
      // element if needed and remove it when loading is over.
      if (this.isLoadingNeeded() && this.$el) {
        this.showLoader();
        this.off('load', this.hideLoader, this);
        this.on('load', this.hideLoader, this);
      }

      if (this.isImageLoadingNeeded() && this.$el) {
        this.runImageLoader();
      }

      if (this.onScroll) {
        this.$el.off('scroll', this.onScrollHandler);
        this.$el.on('scroll', this.onScrollHandler);
      }

      if (!this.customLoadEvent && !this.isImageLoadingNeeded()) {
        
        this.trigger('load');
      }
    },

    /**
     * Change the view's element ("this.el" property), including event
     * re-delegation.
     *
     * The function sets the "rendered" flag when the view's element is changed
     * (as opposed to set) to indicate that the view has just been associated
     * with a DOM subtree and is thus "likely" to have been rendered. There is
     * unfortunately no better way for the time being to tell whether the view
     * has been rendered or not. It should work well if framework views are
     * used "normally".
     *
     * TODO: use a "data-joshfire-rendered" attribute on the view's element to
     * be able to tell whether the view has been really rendered or not?
     *
     * @function
     * @param {Element} element The DOM element to use as root for the view
     * @param {boolean} delegate True to delegate events to the new element
     */
    setElement: function (element, delegate) {
      var changed = !!this.el;
      Backbone.View.prototype.setElement.call(this, element, delegate);
      if (changed) {
        this.removed = false;
        this.rendered = true;
      }
      return this;
    },

    /**
     * Overrides default "remove" function for logging purpose
     *
     * @function
     */
    remove: function () {
      this.removed = true;
      this.rendered = false;
      
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Returns a callback function that only gets called provided
     * the view has not yet been removed.
     *
     * That function is useful to wrap event handlers of a view as an event
     * handler may still be called "shortly after" the view has been removed,
     * typically when the call to "remove" was made by a previous event handler
     * in the list of event handlers attached to an event.
     *
     * @function
     * @param {function} callback Callback function
     */
    callIfNotRemoved: function (callback) {
      var self = this;

      return function () {
        if (self.removed) return;
        var args = Array.prototype.slice.call(arguments);
        callback.apply(self, args);
      };
    },

    onScrollHandler: function(e) {
      var el = $(e.target);
      this.onScroll.call(el[0], e, el[0].scrollHeight, el.scrollTop(), el.scrollLeft());
    },

    /**
    * The scrollTo function tries its best to scroll where you want.
    */
    scrollTop: function() {
      this.$el.animate({
        scrollTop: 0,
        scrollLeft: 0
      }, 500);
    },

    isLoadingNeeded: function() {
      return (this.loadingClass);
    },

    isImageLoadingNeeded: function() {
      return (this.loadImagesSmoothly);
    },

    showLoader: function() {
      this.$el.addClass(this.loadingClass);
    },
    hideLoader: function() {
      this.$el.removeClass(this.loadingClass);
    }
  });

  return newView;

});

/**
 * @fileoverview Real base View class for the Joshfire Framework.
 *
 * The UIElement class is the base view class that all views in the
 * Framework must extend.
 *
 * In the generic case, the UIElement class is synonymous to View.
 *
 * The framework automatically replaces this empty shell by a
 * device-specific or capability-specific adapter class depending
 * on the context under which the underlying application is run.
 *
 * For instance, the "phone" adapter adds scrolling capabilities
 * as many mobile browsers do not support scrolling content within
 * a fixed sized section of a page.
 */

/*global define*/


define('joshfire-framework/uielement',[
	'joshlib!view'
], function(View) {
  var UIElement = View.extend({});
  return UIElement;
});
define('joshfire-framework/adapters/tv/uielement',[
  'joshlib!adapters/none/uielement',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'require'
], function (UIElement, _, $, woodman) {
  

  var UIElementTV = UIElement.extend({

    translateY: 0,

    initialize: function (options) {
      options = options || {};

      UIElement.prototype.initialize.call(this, options);

      _.bindAll(this, 'navFocus', 'navBlur', 'processKey');

      this.focused = false;

      /* Keeps track of user defined nav functions */
      this.boundNav = [];
      var bindings = ['navUp', 'navRight', 'navDown', 'navLeft', 'navAction','navFocus','navBlur'];
      for (var index in bindings) {
        if (options[bindings[index]]) {
          this.boundNav[bindings[index]] = true;
          this[bindings[index]] = options[bindings[index]];
        }
      }

      this.scroller = options.scroller || false;
      this.offsetTop = options.offsetTop || 0;
      this.offsetBottom = options.offsetBottom || 0;
      this.focusSubElements = options.focusSubElements || false;
      this.scrollStep = options.scrollStep || 100;

      // Translate 3D for scrolling: defaults to true
      this.translate3d = (options.translate3d !== undefined) ?
        options.translate3d :
        true;
    },

    enhance: function() {
      if(this.scroller) {
        var $el = $(this.el);
        var $content = $el.children().first();

        var theNavDown = function() {
          var height = $el.height();
          var contentHeight = $content.height();
          var subElement;

          if(contentHeight < height - this.offsetBottom - this.offsetTop) {
            subElement = this.guessNextFocusableSubElement('down');
            if(subElement) this.focusSubElement(subElement);
            return;
          }

          if(this.focusSubElements) {
            subElement = this.guessNextFocusableSubElement('down');
            if(subElement)
              this.focusSubElement(subElement);
            else
              this.translateY = Math.max(height - contentHeight - this.offsetBottom - this.offsetTop, this.translateY - this.scrollStep);
          }
          else {
            this.translateY = Math.max(height - contentHeight - this.offsetBottom - this.offsetTop, this.translateY - this.scrollStep);
          }

          var translate  = 'translate3d(0,' + this.translateY + 'px,0)';
          if (this.translate3d) {
            $content.css({
              '-webkit-transform': translate,
              '-moz-transform': translate,
              '-ms-transform': translate,
              '-o-transform': translate,
              'transform': translate
            });
          }
          else {
            $content.css({
              'position': 'absolute',
              'top': this.translateY
            });
          }
        };
        /*
        * If the user chose to bind a function himself,
        * this one is set in the prototype. Else, we use it
        * as the default one.
        */
        if(this.boundNav.navDown)
          UIElementTV.prototype.navDown = theNavDown;
        else
          this.navDown = theNavDown;


        var theNavUp = function() {
          var height = $el.height();
          var contentHeight = $content.height();
          var subElement;

          if(contentHeight < height - this.offsetBottom - this.offsetTop) {
            subElement = this.guessNextFocusableSubElement('up');
            if(subElement) {
              this.focusSubElement(subElement);
            }
            return;
          }

          if(this.focusSubElements) {
            subElement = this.guessNextFocusableSubElement('up');
            if(subElement) {
              this.focusSubElement(subElement);
            }
            else {
              this.translateY = Math.min(0, this.translateY + this.scrollStep);
            }
          }
          else {
            this.translateY = Math.min(0, this.translateY + this.scrollStep);
          }

          var translate  = 'translate3d(0,' + this.translateY + 'px,0)';
          if (this.translate3d) {
            $content.css({
              '-webkit-transform': translate,
              '-moz-transform': translate,
              '-ms-transform': translate,
              '-o-transform': translate,
              'transform': translate
            });
          }
          else {
            $content.css({
              'position': 'absolute',
              'top': this.translateY
            });
          }
        };

        if (this.boundNav.navUp) {
          UIElementTV.prototype.navUp = theNavUp;
        }
        else {
          this.navUp = theNavUp;
        }
      }

      UIElement.prototype.enhance.call(this);
    },

    /**
     * Gives focus to the element.
     */
    navFocus: function(origin) {
      if (this.isFocusedElement()) {
        
        return;
      }

      
      var $el = $(this.el);

      $el.addClass('nav-focused');
      $(document).keydown(this.processKey);
      $el.click(this.processClick);
      if(origin) {
        this.origin = origin;
      }
      this.focused = true;

      $('.nav-focused-ancestor').removeClass('nav-focused-ancestor');
      $el.parents().addClass('nav-focused-ancestor');

      if (UIElementTV.focusedElement) {
        UIElementTV.focusedElement.navBlur();
      }

      if (this.focusSubElements) {
        this.getFocusableSubElements();
        var el = this.guessNextFocusableSubElement('down');
        if(el && this.isSubElementOnScreen(el))
          this.focusSubElement(el);
      }

      UIElementTV.focusedElement = this;
    },

    /**
     * Removes focus from the element.
     */
    navBlur: function() {
      
      $(this.el).removeClass('nav-focused');
      $(document).unbind('keydown', this.processKey);
      $(this.el).unbind('click', this.processClick);
      if(this.$('.sub-nav-focused').length)
        this.$('.sub-nav-focused')[0].blur();
      this.focused = false;
    },

    /**
     * Returns true if this TV view is the focused element
     *
     * @function
     * @return {boolean} True if the the element is focused, false otherwise
     */
    isFocusedElement: function () {
      return UIElementTV.focusedElement === this;
    },

    processClick: function(event) {
      if (this.navClick) {
        return this.navClick(event);
      }
      if (this.origin) {
        this.origin.processClick(event);
      }
      return true;
    },

    /**
     * Processes a key event.
     *
     * The action is propagated to the view that gave the focus to this view
     * if it cannot be performed on this view.
     *
     * @function
     * @param {Event} event The key event to handle
     */
    processKey: function(event) {
      var code = event.keyCode;

      var runOrPropagate = _.bind(function (fn) {
        if (fn) {
          
          return fn.call(this, event);
        }
        else if (this.origin) {
          
          return this.origin.processKey(event);
        }
      }, this);

      if ((code === 38) || (code === window.VK_UP)) {
        return runOrPropagate(this.navUp);
      }
      else if ((code === 39) || (code === window.VK_RIGHT)) {
        return runOrPropagate(this.navRight);
      }
      else if ((code === 40) || (code === window.VK_DOWN)) {
        return runOrPropagate(this.navDown);
      }
      else if ((code === 37) || (code === window.VK_LEFT)) {
        return runOrPropagate(this.navLeft);
      }
      else if ((code === 13) || (code === 32) || (code === window.VK_ENTER)) {
        return runOrPropagate(this.navAction);
      }

      
      return true;
    },

    /*
    * Look for links or buttons in the content. If there are, they will
    * be taken into account when scrolling up or down and will be focused.
    */
    getFocusableSubElements: function() {
      var elements = this.$('a[href*=h], input, button, select, textarea, command');

      this.focusableElements = [];
      for(var o = 0; o < elements.length; o++) {
        if(elements.hasOwnProperty(o) && typeof elements[o] === 'object') {
          this.focusableElements.push({
            $el: $(elements[o]),
            x: $(elements[o]).offset().left,
            y: $(elements[o]).offset().top
          });
        }
      }
    },

    focusSubElement: function(focusableElement) {
      /**
      * Remove the focus on every focusable element.
      **/
      _.each(this.focusableElements, function(num) { num.focused = false; });
      /**
      * Note : using focus() may not be our safest option.
      * This is mostly untested. (samsung, phillips, etc.)
      **/
      focusableElement.$el[0].focus();
      focusableElement.focused = true;
      $('.sub-nav-focused').removeClass('sub-nav-focused');
      focusableElement.$el.addClass('sub-nav-focused');
    },

    scrollToSubElement: function(focusableElement, direction) {
      var Y = 0;

      if(direction === 'down') {
        Y = this.translateY - focusableElement.$el.height() - this.scrollStep;
      }
      else {
        Y = this.translateY + focusableElement.$el.height() + this.scrollStep;
      }
      return Y;
    },

    guessNextFocusableSubElement: function(direction) {
      // matches contains the subelements which are currently visible on-screen
      var matches = [];
      for(var k in this.focusableElements) {
        this.focusableElements[k].index = k;
        if(this.isSubElementOnScreen(this.focusableElements[k])) {
          matches.push(this.focusableElements[k]);
        }
      }
      // Return the best match according to direction.
      if(matches.length) {
        for(var l in matches) {
          if(matches[l].focused) {
            // If we're going up, we want the previous <a>
            // We also want to fail if there's no match.
            if(direction === 'up') {
              return matches[(parseInt(l, 10) - 1)] || false;
            }
            // Else, next <a>.
            else if (direction === 'down') {
              return matches[(parseInt(l, 10) + 1)] || false;
            }
          }
        }
        return matches[0];
      }
      else {
        return false;
      }
    },

    isSubElementOnScreen: function(focusableElement) {
      if( focusableElement.y > this.translateY * -1 &&
          focusableElement.y < this.translateY * -1 + $(this.el).outerHeight()) {
        return true;
      }
      return false;
    }

  });

  return UIElementTV;
});

/**
 * @fileOverview Implementation of a base UI element view for Samsung TVs.
 *
 * In practice, the only difference is the support for 3D transforms.
 */
define('joshfire-framework/adapters/samsungtv/uielement',[
  'joshlib!adapters/tv/uielement'
], function (UIElement) {
  var view = UIElement.extend({
    initialize: function (options) {
      options = options || {};
      options.translate3d = false;
      UIElement.prototype.initialize.call(this, options);
    }
  });
  return view;
});
/**
 * A list item.
 *
 * The ListItem class is mostly intended for internal use within a List.
 *
 * The ListItem class wraps a view that provides the content of the item.
 *
 * As implemented, the ListItem class is useless. It should provide
 * the wrapper markup that converts a view into a proper list item. Typically,
 * for an <ol> or <ul> list, the ListItem class should provide the <li> tag
 * and delegates the inner HTML of the item to the wrapped view.
 *
 * Right now, the wrapped view must include the <li> tag in its template
 * which makes it impossible to reuse the wrapped view in other contexts
 * (and makes this ListItem view totally useless for the time being as
 * already stated)
 */

define('joshfire-framework/ui/listitem',[
  'joshlib!uielement',
  'require'
], function (UIElement, woodman) {
  

  var UIListItem = UIElement.extend({

    tagName: 'li',

    initialize: function(options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      

      this.view = options.view;
      this.view.data = this.view.data || {};
      this.offset  = options.offset;

      // We'll trigger the "load" event when the underlying view is loaded
      this.customLoadEvent = true;
      if (this.view) {
        this.listenTo(this.view, 'load', function () {
          this.trigger('load');
        });
      }

      UIElement.prototype.initialize.call(this, options);
    },

    generate: function(cb) {
      
      var self = this;
      this.view.data.offset = this.offset;
      this.view.generate(function(err, html) {
        html = self.wrapContent(html, self.offset+'');
        cb(null, html);
      });
    },

    enhance: function() {
      
      if (this.view) {
        this.view.enhance();
      }
      UIElement.prototype.enhance.call(this);
    },

    setElement: function(el, delegate) {
      if (this.view) {
        this.view.setElement(el, delegate);
      }
      UIElement.prototype.setElement.call(this, el, delegate);
    },

    /**
     * Overrides base "remove" function to propagate the request to its child.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      
      UIElement.prototype.remove.call(this);
      if (this.view) {
        this.view.remove();
        this.view = null;
      }
    }
  });

  return UIListItem;
});
define('joshfire-framework/adapters/samsungtv/inputs/remote',[
  'joshlib!vendor/backbone',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
],
function(Backbone, $, _) {

  if(typeof Common !== 'undefined') {
    var keyValues = new Common.API.TVKeyValue();

    /**
     * Set up key codes if needed.
     */
    window.VK_ENTER = keyValues.KEY_ENTER;
    window.VK_PAUSE = keyValues.KEY_PAUSE;
    //window.VK_PAGE_UP = keyValues
    //window.VK_PAGE_DOWN = keyValues
    window.VK_LEFT = keyValues.KEY_LEFT;
    window.VK_UP = keyValues.KEY_UP;
    window.VK_RIGHT = keyValues.KEY_RIGHT;
    window.VK_DOWN = keyValues.KEY_DOWN;
    window.VK_0 = keyValues.KEY_PAD_0;
    window.VK_1 = keyValues.KEY_PAD_1;
    window.VK_2 = keyValues.KEY_PAD_2;
    window.VK_3 = keyValues.KEY_PAD_3;
    window.VK_4 = keyValues.KEY_PAD_4;
    window.VK_5 = keyValues.KEY_PAD_5;
    window.VK_6 = keyValues.KEY_PAD_6;
    window.VK_7 = keyValues.KEY_PAD_7;
    window.VK_8 = keyValues.KEY_PAD_8;
    window.VK_9 = keyValues.KEY_PAD_9;
    window.VK_RED = keyValues.KEY_RED;
    window.VK_GREEN = keyValues.KEY_GREEN;
    window.VK_YELLOW = keyValues.KEY_YELLOW;
    window.VK_BLUE = keyValues.KEY_BLUE;
    window.VK_REWIND = keyValues.KEY_RW;
    window.VK_STOP = keyValues.KEY_STOP;
    window.VK_PLAY = keyValues.KEY_PLAY;
    window.VK_FAST_FWD = keyValues.KEY_FF;
    window.VK_BACK = keyValues.KEY_RETURN;
    window.VK_VOL_UP = keyValues.KEY_VOL_UP;
    window.VK_VOL_DOWN = keyValues.KEY_VOL_DOWN;
    window.VK_MUTE = keyValues.KEY_MUTE;
    window.VK_EXIT = keyValues.KEY_EXIT;
  }

  /**
   * @private
   */
  var keyCodeToName = {};

  keyCodeToName[window.VK_ENTER] = 'enter';
  keyCodeToName[window.VK_PAUSE] = 'pause';
  keyCodeToName[window.VK_PAGE_UP] = 'page_up';
  keyCodeToName[window.VK_PAGE_DOWN] = 'page_down';
  keyCodeToName[window.VK_LEFT] = 'left';
  keyCodeToName[window.VK_UP] = 'up';
  keyCodeToName[window.VK_RIGHT] = 'right';
  keyCodeToName[window.VK_DOWN] = 'down';
  keyCodeToName[window.VK_0] = '0';
  keyCodeToName[window.VK_1] = '1';
  keyCodeToName[window.VK_2] = '2';
  keyCodeToName[window.VK_3] = '3';
  keyCodeToName[window.VK_4] = '4';
  keyCodeToName[window.VK_5] = '5';
  keyCodeToName[window.VK_6] = '6';
  keyCodeToName[window.VK_7] = '7';
  keyCodeToName[window.VK_8] = '8';
  keyCodeToName[window.VK_9] = '9';
  keyCodeToName[window.VK_RED] = 'red';
  keyCodeToName[window.VK_GREEN] = 'green';
  keyCodeToName[window.VK_YELLOW] = 'yellow';
  keyCodeToName[window.VK_BLUE] = 'blue';
  keyCodeToName[window.VK_REWIND] = 'rewind';
  keyCodeToName[window.VK_STOP] = 'stop';
  keyCodeToName[window.VK_PLAY] = 'play';
  keyCodeToName[window.VK_FAST_FWD] = 'fast_fwd';
  keyCodeToName[window.VK_INFO] = 'info';
  keyCodeToName[window.VK_BACK] = 'back';
  keyCodeToName[window.VK_VOL_UP] = 'vol_up';
  keyCodeToName[window.VK_VOL_DOWN] = 'vol_down';
  keyCodeToName[window.VK_MUTE] = 'mute';
  keyCodeToName[window.VK_EXIT] = 'exit';

  /**
   * Remote input.
   *
   * Ex:
   *
   * var remote = new Remote();
   * remote.bind('press:back', function(event) {}, this);
   * remote.bind('release:0', function(event) {}, this);
   *
   * @class
   */
  var Remote = function() {
    _.bindAll(this, 'onKeyDown', 'onKeyUp');

    var $window = $(window);

    $window.on('keydown', this.onKeyDown);
    $window.on('keyup', this.onKeyUp);
  };

  _.extend(Remote.prototype, Backbone.Events, {

    /**
     * Removes event listeners.
     *
     * @function
     */
    destroy: function() {
      var $window = $(window);

      $window.off('keydown', this.onKeyDown);
      $window.off('keyup', this.onKeyUp);
    },

    /**
     * @private
     */
    onKeyDown: function(event) {
      var name = keyCodeToName[event.keyCode];

      if(typeof name !== 'undefined') {
        this.trigger('press:' + name, event);
      }
    },

    /**
     * @private
     */
    onKeyUp: function(event) {
      var name = keyCodeToName[event.keyCode];

      if(typeof name !== 'undefined') {
        this.trigger('release:' + name, event);
      }
    }
  });

  return Remote;
});

define('joshfire-framework/router',["joshlib!vendor/backbone","joshlib!vendor/underscore"], function(Backbone, _) {
	
	var Router = function(obj) {

		_.extend(obj,{
			historyStart:function(options) {
				Backbone.history.start(options);
			}
		});

		var router = Backbone.Router.extend(obj);
		return new router();
	};

	return Router;

});
/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jul 20 20:23:43 2011
 */

/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*/
// Inspired by base2 and Prototype
//Adapted for Joshlib
define('joshfire-framework/class',['joshlib!vendor/underscore'], function(_) {

  var initializing = false,
      fnTest = /xyz/.test(function() {
            xyz;
      }) ? (/\b__super\b/) : /.*/;

  var Class = function() {};


  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == 'function' && typeof _super[name] == 'function' && fnTest.test(prop[name]) ? (function(name, fn) {
        return function() {
          var tmp = this.__super;

          // Add a new ._super() method that is the same method
          // but on the super-class
          this.__super = _super[name];

          // The method only need to be bound temporarily, so we
          // remove it when we're done executing
          var ret = fn.apply(this, arguments);
          this.__super = tmp;

          return ret;
        };
      })(name, prop[name]) : prop[name];
    }


    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.__constructor) this.__constructor.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };

  return function() {
    if (_.isFunction(arguments[0])) {
      return arguments[0].extend(arguments[1]);
    } else {
      return Class.extend(arguments[0]);
    }
  };
});

/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Thu Jun 07 12:38:42 2012
 */
define('joshfire-framework/utils/i18n',['joshlib!class', 'joshlib!vendor/underscore', 'joshlib!utils/dollar'], function(Class, _, $) {
  
  var i18nClass = Class(
    {

      // Current Dict.
      terms: null,

      // Sets the locale property and loads the json file.
      setLocale: function(opt, cb) {
        var self = this;
        
        self.opt = _.defaults(opt, {
          'url': './lang/dictionaries',
          'locale': self._detectLocale(),
          'format': 'json'
        });
        _.extend(this, opt);

        if(self.locale.toLowerCase() === 'auto')
          self.locale = self._detectLocale();

        if (opt.availableLocales && _(opt.availableLocales).indexOf(self.locale) === -1) {
          self.locale = opt.defaultLocale || "en";
        }

        var fileUrl = self.url+'/'+self.locale+'.'+self.format;

        if(document.location.toString().indexOf('file://') == -1) {
          $.ajax({
            url: fileUrl,
            dataType: 'json',
            success: function(data, status, jqxhr) {
              if(data && data.terms)
                self.terms = data.terms;
              else
                console.warn('JSi18n : No dictionary was loaded.');

              if(typeof cb === 'function')
                cb();
            }
          });
        }
        else {
          self.terms = {};
          if(typeof cb === 'function')
            cb();
        }
      },

      getLocale: function() {
        return this.locale;
      },

      /**
      * Returns the first occurence of the key in the terms.
      * If there is none, return the key itself.
      **/
      getText: function(key) {
        var self = this;
        for(var k in self.terms) {
          if(self.terms.hasOwnProperty(k)) {
            if(key.toLowerCase() == k.toLowerCase()) {
              return self.terms[k];
            }
          }
        }
        return key;
      },

      /**
      * Search for tags with the data-translate attribute
      * and translate their content. The data-translate
      * attribute is removed, making it easier to call
      * it again should new content be added.
      **/
      translateStaticContent: function() {
        var self = this;
        $('*[data-translate]').each(function() {
          $(this).removeAttr('data-translate');
          $(this).html(self.T($(this).html()));
        });
      },

      /**
      * Returns only the first
      **/
      _detectLocale: function() {
        var lan = (navigator.language) ? navigator.language : navigator.userLanguage;
        return (lan.split('-').length>1)?lan.split('-')[0]:lan;
      }
    }
  );

  var i18n = new i18nClass();
  
  return {
    getText:    _.bind(i18n.getText, i18n),
    setLocale:  _.bind(i18n.setLocale, i18n),
    getLocale:  _.bind(i18n.getLocale, i18n)
  };
  
});

/**
 * @fileoverview The Layout UI element wraps multiple children views, and is
 * not directly tied to a model or collection.
 *
 * The class should be the base class of all container views.
 * The class propagates events and function calls to its children so that
 * derivated classes do not have to worry about that.
 *
 * Usage example:
 *  var layout = new Layout({
 *    children: {
 *      card1: myFirstView,
 *      card2: mySecondView
 *    }
 *  });
 *  layout.render();
 */

/*global define*/


define('joshfire-framework/ui/layout',[
  'joshlib!uielement',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/i18n'
], function(UIElement, _, $, i18n) {
  /**
   * Definition of the Layout class.
   *
   * The class extends UIItem.
   *
   * @class
   */
  var Layout = UIElement.extend({
    /**
     * Flag set when the view is rendering
     */
    rendering: false,

    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "children" property
     */
    initialize: function(options) {
      // Initialize template.
      if(options.template) {
        this.template = this.compileTemplate(options.template);
      } else if(options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if(options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // Containers must wait for all of their children to be "loaded".
      // The following flag prevents the base View class from triggering
      // the "load" event at the end of the "enhance" function.
      this.customLoadEvent = true;

      this.setChildren(options.children);

      // Propagate "shown", "hidden" events to the view's children
      this.on('shown', function () {
        _.each(this.children, function (child) {
          child.trigger('shown');
        });
      }, this);
      this.on('hidden', function () {
        _.each(this.children, function (child) {
          child.trigger('hidden');
        });
      }, this);

      UIElement.prototype.initialize.call(this, options);
    },

    /**
     * Sets the children views.
     *
     * @function
     * @param {Object} an object containing the children views
     */
    setChildren: function(children) {
      if (this.children) {
        _.each(this.children, function (child) {
          this.stopListening(child);
          child.remove();
        }, this);
        this.children = null;
      }
      this.children = children;
      this.numChildren = 0;
      this.numChildrenLoaded = 0;

      if (children) {
        _.each(children, function (child) {
          ++this.numChildren;

          // Make "load" event from children "bubble".
          // Rules are:
          // - when the view is rendered, the "load" event is triggered once
          // all of its children have triggered the "load" event
          // - when the view is not rendered, the "load" event is triggered
          // whenever a child triggers a "load" event (the view cannot tell
          // whether more than one children are rendered, so it bubbles events
          // individually)
          this.listenTo(child, 'load', function () {
            if (this.rendering) {
              ++this.numChildrenLoaded;
              if (this.numChildrenLoaded === this.numChildren) {
                // All children have been loaded
                this.rendering = false;
                if(!this.wantsCustomLoadEvent) this.trigger('load');
              }
            }
            else {
              if (!this.wantsCustomLoadEvent) this.trigger('load');
            }
          });
        }, this);
      }
    },

    /**
     * Get a child view, better access than myLayout.children.myChild
     *
     * @function
     * @param {Object} the string name of the child view requested
     */
    getChild: function(child) {
      if (child) {
        return this.children[child];
      }
    },

    /**
     * Generates the HTML code to render.
     *
     * It calls the `generate` function of the underlying children.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function(cb) {
      if(!this.children) return cb(null, '');

      this.childrenOffsets = {};
      this.numChildrenLoaded = 0;
      var accumulator = 0;
      var childrenOuterHTML = '';
      var children = {};

      _.each(this.children, function (child, name) {
        child.generate(_.bind(function (err, innerHTML) {
          var outerHTML = child.wrapContent(innerHTML, name);
          outerHTML = outerHTML.replace(/<([^\/][^ >\/]+)/, '<$1 data-joshfire-child="' + name + '"');
          this.childrenOffsets[name] = accumulator;
          children[name] = outerHTML;
          childrenOuterHTML += outerHTML;

          if(++accumulator === this.numChildren) {
            var html = null;
            if (this.template) {
              var context = {
                children: children,
                T: i18n.getText
              };
              _.extend(context, this.data);
              html = this.template(context);
            }
            else {
              html = childrenOuterHTML;
            }

            cb(null, html);
          }
        }, this));
      }, this);
    },


    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function(html) {
      UIElement.prototype.setContent.call(this, html);

      if (this.children && this.el) {
        this.setChildrenElements(true);
      }
    },

    setElement: function(element, delegate) {
      UIElement.prototype.setElement.call(this, element, delegate);
      this.setChildrenElements(delegate);
    },

    setChildrenElements: function () {
      _.each(this.children, function(child, name) {
        var el = $(this.el).find('*[data-joshfire-child='+name+']')[0];
        child.setElement(el, true);
      }, this);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * children.
     *
     * @function
     */
    enhance: function() {
      this.rendering = true;
      UIElement.prototype.enhance.call(this);

      if (this.children && this.el) {
        _.each(this.children, function (child) {
          child.enhance();
        }, this);
      }

      if (!this.children || (this.children.length === 0) && !this.wantsCustomLoadEvent) {
        // No children to render? That means the container is loaded.
        this.rendering = false;
        this.trigger('load');
      }
    },

    /**
     * Overrides base "remove" function to propagate the request to the
     * view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      UIElement.prototype.remove.call(this);
      _.each(this.children, function (child) {
        this.stopListening(child);
        child.remove();
      }, this);
      this.children = null;
    },

    /**
     * Scrolls to top and asks its children to do the same
     */
    scrollTop: function() {
      UIElement.prototype.scrollTop.call(this);
      this.scrollTopChildren();
    },

    scrollTopChildren: function() {
      if (this.children) {
        _.each(this.children, function(child) {
          child.scrollTop();
        });
      }
    }
  });

  return Layout;
});

/**
 * @fileoverview The CardPanel UI element wraps multipe chidren views, and
 * make one of them visibile via `showChild`.
 *
 * Usage example:
 *  var cardPanel = new CardPanel({
 *    children: {
 *      card1: myFirstView,
 *      card2: mySecondView
 *    }
 *  });
 *  cardPanel.showChild('card1');
 *  cardPanel.render(); // Render only needs to be called once
 *  ...
 *  cardPanel.showChild('card1'); // No render needed afterwards
 */

/*global define*/

define('joshfire-framework/ui/cardpanel',[
  'joshlib!ui/layout',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n',
  'joshlib!utils/dollar',
  'require'
], function(UILayout, _, i18n, $, woodman) {
  

  /**
   * Definition of the CardPanel class.
   *
   * The class extends UIItem and automatically renders the underlying model
   * when it is updated.
   *
   * @class
   */
  var CardPanel = UILayout.extend({
    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "children" property and optionally a  "currentChild" property
     */
    initialize: function(options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      

      // Set the current active child. 'defaultChildren' is for legacy
      // support.
      this.showChild(options.currentChild || options.defaultChildren);

      UILayout.prototype.initialize.call(this, options);
    },

    /**
     * Sets the visibile child.
     *
     * @function
     * @param {String} the name of the child
     */
    showChild: function(name) {
      if (this.currentChild === name) {
        
        return;
      }

      // Only do this after render has been called, since it might depend on
      // the DOM.
      if (!this.rendered) {
        
        this.currentChild = name;
        return;
      }

      
      this.transition(this.currentChild, name);
      this.currentChild = name;
    },

    /**
     * Alias for `showChild` (legacy support).
     */
    showChildren: function(name) {
      this.showChild(name);
    },

    /**
     * Hides the current child, shows a new one. Override this function to
     * create transition effects.
     *
     * @function
     * @param {String} fromChild the name of old child
     * @param {String} toChild the name of new child
     */
    transition: function (fromChild, toChild) {
      

      _.each(this.children, function (child, name) {
        if (name !== toChild) {
          child.hide();
        }
      });

      if (toChild) {
        this.children[toChild].show();
      }
    },

    setChildrenElements: function () {
      _.each(this.children, function(child, name) {
        var wrapper = this.$el.find('.joshfire-wrapper').get(0);
        var el = wrapper.childNodes[this.childrenOffsets[name]];
        child.setElement(el, true);
      }, this);
    },

    /**
     * Adds a view to the cardpanel and renders it.
     * This should be called whenever a developer needs to insert
     * a new child in the panel and also needs said panel to look
     * stable, meaning he cannot render the whole pannel to insert it
     * (which would/could create a undesirable visual effect).
     * This function hence generates the new child's content and appends
     * it to the existing html of the panel ; thus achieving some kind
     * of partial rendering.
     */
    addChild: function(name, view) {

      var self = this,
          newChildren = this.children || {};

      if(!this.el.parentNode) return;

      this.children = this.children || {};
      this.children[name] = view;
      this.numChildren += 1;

      // Make "load" event from child "bubble".
      // Rules are:
      // - when the view is rendered, the "load" event is triggered once
      // all of its children have triggered the "load" event
      // - when the view is not rendered, the "load" event is triggered
      // whenever a child triggers a "load" event (the view cannot tell
      // whether more than one children are rendered, so it bubbles events
      // individually)
      this.listenTo(view, 'load', function () {
        if (this.rendering) {
          ++this.numChildrenLoaded;
          if (this.numChildrenLoaded === this.numChildren) {
            // All children have been loaded
            this.rendering = false;
            if(!this.wantsCustomLoadEvent) this.trigger('load');
          }
        }
        else {
          if (!this.wantsCustomLoadEvent) this.trigger('load');
        }
      });

      if (!this.rendered) return;

      this.childrenOffsets = this.childrenOffsets || {};
      this.childrenOffsets[name] = this.childrenOffsets ? _.size(this.childrenOffsets) : 0;
      view.hide();
      view.generate(_.bind(function (err, innerHTML) {
        var outerHTML = view.wrapContent(innerHTML);
        // Adds a data-joshfire-child attribute to the first node of the outerHTML.
        // The regexp is a light matching of the start of an html tag.

        outerHTML = outerHTML.replace(/<([^\/][^ >\/]+)/, '<$1 data-joshfire-child="' + name + '"');
        self.$('.joshfire-wrapper').append(outerHTML);

        // Set child view element
        var wrapper = this.$el.find('.joshfire-wrapper').get(0);
        var el = wrapper.childNodes[this.childrenOffsets[name]];
        view.setElement(el, true);

        // Enhance the view element
        view.enhance();
      }, this));
    },

    removeChild: function(name) {
      var rc = this.children[name];
      if(rc) {
        delete this.children[name];
        rc.el.parentNode.removeChild(rc.el);
        this.setChildrenOffset();
      }
    },

    setChildrenOffset: function() {
      var wrapper = this.$el.find('.joshfire-wrapper').get(0);
      var els = wrapper.childNodes;
      var childrenNames = _.keys(this.children);

      this.childrenOffsets = {};
      for(var k in els) {
        if(els.hasOwnProperty(k)) {
          var childName = $(els[k]).data('joshfire-child');
          if(_.contains(childrenNames, childName)) {
            this.childrenOffsets[childName] = k;
          }
        }
      }
    },

    /**
     * Generates the HTML code to render.
     *
     * It calls the `generate` function of the underlying children.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function (cb) {
      
      var self = this;

      this.childrenOffsets = {};
      this.numChildrenLoaded = 0;
      var accumulator = 0;
      var childrenOuterHTML = '';
      var childrenHTML = {};
      var getFinalHTML = function(coh) {
        coh = coh || '';
        var childrenOuterHTML = '<div class="joshfire-wrapper">' + coh + '</div>',
            html = null;

        if (self.template) {
          var context = {
            childrenOuterHTML: childrenOuterHTML,
            childrenHTML: childrenHTML,
            T: i18n.getText
          };
          _.extend(context, self.data);
          html = self.template(context);
        }
        else {
          html = childrenOuterHTML;
        }

        return html;
      };

      if(!this.children || _.size(this.children) === 0) {
        var html = getFinalHTML(childrenOuterHTML);
        cb(null, html);
      }

      _.each(this.children, function (child, name) {
        child.generate(_.bind(function (err, innerHTML) {
          var outerHTML = child.wrapContent(innerHTML);
          this.childrenOffsets[name] = accumulator;
          childrenHTML[name] = outerHTML;
          childrenOuterHTML += outerHTML;

          if(++accumulator === this.numChildren) {
            var html = getFinalHTML(childrenOuterHTML);
            cb(null, html);
          }
        }, this));
      }, this);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * children.
     *
     * @function
     */
    enhance: function() {
      

      UILayout.prototype.enhance.call(this);

      // Set the wrapper's height to 100% so that it fills its
      // parent and remains transparent from an layout perspective.
      this.$('.joshfire-wrapper').first().css({
        height: '100%'
      });

      if(this.currentChild) {
        this.transition(null, this.currentChild);
      }
    },

    scrollTopChildren: function() {
      
      if (this.currentChild) {
        this.children[this.currentChild].scrollTop();
      }
    }
  });

  return CardPanel;
});

define('joshfire-framework/adapters/tv/ui/cardpanel',[
  'joshlib!adapters/none/ui/cardpanel'
], function (CardPanel) {

  var TVCardPanel = CardPanel.extend({
    /**
     * Gives the focus to the active child
     */
    navFocus: function (origin, event) {
      CardPanel.prototype.navFocus.call(this, origin, event);
      this.children[this.currentChild].navFocus(this);
    }
  });

  return TVCardPanel;
});

/**
 * @fileOverview Implementation of a "slide" panel for Samsung TVs.
 *
 * In theory, a slide panel is a card panel that animates the transition
 * between the child view that is currently displayed and the the child
 * view that the caller wants to display.
 *
 * In practice, CSS animations are barely supported on Samsung TV and do not
 * perform well enough when supported. There is thus no real way to animate
 * the transition on a Samsung TV. This adapter thus merely exposes the TV
 * version of the CardPanel view.
 */
define('joshfire-framework/adapters/samsungtv/ui/slidepanel',[
  'joshlib!adapters/tv/ui/cardpanel'
], function (CardPanel) {
  return CardPanel;
});
/**
 * @fileOverview Implementation of a "fade in" panel for Samsung TVs.
 *
 * In practice, CSS animations are barely supported on Samsung TV and do not
 * perform well enough when supported. There is thus no real way to animate
 * the transition on a Samsung TV. This adapter thus merely exposes the TV
 * version of the CardPanel view.
 */
define('joshfire-framework/adapters/samsungtv/ui/fadeinpanel',[
  'joshlib!adapters/tv/ui/cardpanel'
], function (CardPanel) {
  return CardPanel;
});
/**
 * @fileoverview Atomic view bound to a data model.
 *
 * The UIItem class is a basic view that is associated with a
 * Backbone model. The view is automatically refreshed when the
 * model changes (in other words, the view is rendered each time
 * a "change" event is triggered on the underlying model).
 *
 * There are two ways to bind the view to a model:
 * 1. when the view is created, passing a "model" property in the options:
 *  new UIItem({ model: foo });
 * 2. after the view has been created, through calls to the setModel function:
 *  view.setModel(foo);
 *
 * A UIItem class may also be given an HTML template (compatible with
 * Underscore's "template" function) or an element selector that targets
 * the HTML template in the DOM, e.g.:
 *  new UIItem({ template: "<h2><%= item.name %></h2>" });
 *  new UIItem({ templateEl: "#template-h2" });
 * ... provided #template-h2 is defined in the DOM for the second case,
 * typically in a "script" template:
 *  <script type="text/template" id="template-h2">
 *   <h2><%= item.name %></h2>
 *  </script>
 *
 * The variables exposed to the HTML context are:
 *  - model: the model associated with the view
 *  - item: a JSON representation of the Backbone model (in other words,
 *      the result of a call to model.toJSON())
 *  - all properties passed at creation step in a "data" property, e.g.:
 *      var view = new UIItem({
 *        templateEl: "#template-h2",
 *        data: { foo: "bar" }
 *      });
 *    would expose a "foo" variable to the HTML template whose value is "bar".
 *
 * Whenever possible, you should use the "data" mechanism to expose additional
 * properties to an HTML template in derivated views, as opposed to overwriting
 * the UIItem's "generate" function.
 */

/*global define*/

define('joshfire-framework/ui/item',[
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'require',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n'
], function (UIElement, $, woodman, _, i18n) {
  

  /**
   * UIItem extends UIElement as all other views in the Framework.
   */
  var UIItem = UIElement.extend({
    /**
     * Initialization code that gets executed when the view is created.
     *
     * If set, the code initializes the HTML template and the model associated
     * with the view (as well as options taken care of by UIElement)
     *
     * @function
     * @param {Object} options View options. Properties understood on top
     *  of those of UIElement: "template" or "templateEl", "model".
     */
    initialize: function(options) {

      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      

      if (typeof options.template === 'string') {
        this.template = this.compileTemplate(options.template);
      } else if (typeof options.template === 'function') {
        this.template = options.template;
      } else if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      this.setModel(options.model);

      UIElement.prototype.initialize.call(this, options);
    },


    /**
     * Binds the view to the given model.
     *
     * Once bound to a model, the view will be automatically updated whenever
     * the model changes. By default, the update takes the form of a
     * re-rendering of the view but derived classes may override the "update"
     * function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given model. In particular, if the view is
     * already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new model, it should be automatically
     * updated. Note that update would likely affect running code that uses the
     * framework, so beware.
     *
     * @function
     * @param {Model} model Backbone model to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setModel: function (model, update) {
      if (this.model) {
        this.stopListening(this.model);
      }

      this.model = model;

      if (this.model) {
        
        this.listenTo(this.model, 'change', this.callIfNotRemoved(this.update));
      }
      if (update) {
        this.update();
      }
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * The function runs the HTML template if one is defined, exposing
     * the underlying model and data options.
     *
     * If no HTML template is defined, the function returns an empty string.
     * If no model is set, the function returns an empty string as well. This
     * last behavior allows to make certain assumptions in the HTML template,
     * not to clutter the code with ugly "<%= (foo ? foo.name : '') %>".
     *
     * @function
     * @param {function} cb Callback function called with an error or
     *  the HTML markup to render. The function never sets the error but note
     *  the HTML template may crash if it's invalid or if it makes wrong
     *  assumptions about the model.
     */
    generate: function(cb) {
      if (!this.template) {
        
        return cb(null, '');
      }

      if (!this.model) {
        
        return cb(null, '');
      }

      var context = {
        model:  this.model,
        obj: this.model,
        item: this.model ? this.model.toJSON() : {},
        T: i18n.getText
      };
      _.extend(context, this.data);

      
      cb(null, this.template(context));
    },


    /**
     * Overrides base "remove" function to forget about the underlying model.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      
      UIElement.prototype.remove.call(this);
      this.model = null;
    }
  });

  return UIItem;
});

/**
 * @fileoverview Simple images loader view.
 *
 * Use this view to render a spinner while images of an item are loaded in the
 * background. The view simply adds a "loading" class name to identified images
 * within the element, delegating possible transitions and spinners to CSS.
 *
 * Typically, to display a spinner and transition the image into view
 * with a fade-in effect:
 *
 * 1. the view's template should include something like:
 *  <figure>
 *    <div class="image" style="background-image:url('<%= imageUrl %>')"></div>
 *    <div class="spinner"></div>
 *  </figure>
 *
 * 2. and the CSS should be something like:
 *  // Anchor spinner position in <figure>
 *  figure {
 *   position: relative;
 *   width: 100%;   // Adjust to suit your needs
 *   height: 100%;  // Adjust to suit your needs
 *  }
 *
 *  // Define image box and display transition
 *  figure > .img {
 *   background-size: cover;
 *   background-position: center center;
 *   .transition(.7s ease-in-out all);
 *   -webkit-backface-visibility: hidden; // To avoid flickering on iOS
 *  }
 *
 *  // Center spinner in image box, not rendered by default
 *  // (adjust background color and image to suit your needs)
 *  .loader {
 *   background: rgba(0,0,0,.9) url(images/spinner.gif) no-repeat center center;
 *   margin: 0;
 *   position: absolute;
 *   top: 0;
 *   left: 0;
 *   width: 100%;
 *   height: 100%;
 *   z-index: 2;
 *   display: none;
 *  }
 *
 *  // When "loading" is there, image is transparent and spinner is displayed
 *  figure.loading .img {
 *   opacity: 0;        // Also add prefixed versions
 *   transition: none;  // Also add prefixed versions
 *  }
 *  figure.loading .loader {
 *   display: block;
 *  }
 *
 * By default, the images loader extracts <img> tags from the HTML content
 * of the view to use as the list of images to load. You may override that
 * behavior by specifyig a "getImages" function. That function must return
 * an array of objects, each object having the properties:
 *  - el: the DOM element of the image (or the image container) that will
 *  receive the "loading" class while the image is being loaded
 *  - url: the URL of the image to load
 *
 * Pass an "imageClass" property if you're using the default images extractor
 * and would like extracted images to be flagged with a class.
 *
 * Pass a "processImageEl" function if you would like to process extracted
 * images somehow, e.g. to reproduce the image loader markup mentioned above.
 * The function must return the resulting DOM element.
 */
/*global Joshfire*/

define('ui/imagesloader',[
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
], function (UIItem, $, _) {

  var UIImagesLoader = UIItem.extend({

    initialize: function (options) {
      // Class added to all images during extraction when default
      // extractor is used.
      this.imageClass = options.imageClass;

      this.imageSchema = options.imageSchema;


      this.imageContainer = options.imageContainer;

      // Process image function
      this.processImageEl = options.processImageEl;

      // Set the image extractor if defined, or use default one
      var self = this;

      // getImages__, not getImages, otherwise View replace the function
      this.getImages__ = options.getImages || function () {


        // BEWARE: $.map('img', blah) is different from $('img').map(blah)
        // in Zepto 1.0rc1 (the order of parameters is not the same).
        // Use $.map for a consistent behavior between Zepto and jQuery
        var images = $.map(self.$el.find('img, .img, .image, .thumbnail'), function (el) {
          var e = $(el),
              url;

          if (self.imageClass) e.addClass(self.imageClass);

          // If autothumb flag is true, detect width and ask for the right thumbnail size
          if (self.imageSchema &&
              e.data('joshfire-autothumb') &&
              (parseInt(e.width, 10) || parseInt(e.height(), 10))) {
            url = Joshfire.schemaio.utils.getThumbnailUrl(
              self.imageSchema,
              parseInt(e.width(), 10),
              parseInt(e.height(), 10));
          } else if (!e.attr('src')) {
            url = self.imageSchema.contentURL ||
              (self.imageSchema.image && self.imageSchema.image.contentURL);
          }

          if (url) {

            if (el.tagName === 'IMG') {
              e.attr('src', url);
            } else {
              e.css('backgroundImage', 'url(' + url + ')');
            }
          }

          var $cnt;
          if (self.imageContainer) $cnt = self.$(self.imageContainer).get(0);
          if (!$cnt) $cnt = self.$el.get(0);

          return {
            el: $cnt,
            url: url
          };
        });

        return images;
      };

      // We'll trigger the load event once all images are loaded
      this.customLoadEvent = true;

      // Call the base class constructor
      UIItem.prototype.initialize.call(this, options);
    },

    generate: function(cb) {
      if (!this.model) {
        cb(null, '');
        return;
      }

      var self = this;
      var context = {
        model: this.model,
        obj: this.model,
        item: this.model ? this.model.toJSON() : {},
        imageUrl: Joshfire.schemaio.utils.getThumbnailUrl(self.imageSchema, 100, 100),
        thumbnail: function(w, h) {
          return Joshfire.schemaio.utils.getThumbnailUrl(self.imageSchema,w||100,h||100);
        }
      };

      _.extend(context, this.data);

      cb(null, this.template(context));
    },

    /**
     * Override the base "enhance" function to extract the images
     * that need to be loaded and start loading in the background.
     *
     * @function
     */
    enhance: function() {
      var self = this;

      // We should be able to enhance here even if !imageSchema... But iScroll fails to initialize correctly then
      if (!self.imageSchema || !this.getImages__) {
        UIItem.prototype.enhance.call(this);
        console.warn('no images to load');
        this.trigger('load');
        return;
      }

      // Extract the images to load
      var images = this.getImages__();

      if (!images || (images.length === 0)) {
        // No image to load, we're done
        UIItem.prototype.enhance.call(this);
        console.warn('no images to load');
        this.trigger('load');
        return;
      }

      // Load the images in the background and trigger the 'load'
      // event in the background.
      var imagesLoaded = 0;
      var imageLoaded = function (imageEl) {
        if (imageEl) $(imageEl).removeClass('loading');
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          // All images have been loaded
          self.trigger('load');
        }
      };
      _.each(images, function (image) {
        if (!image.el || !image.url) {
          return imageLoaded(image.el);
        }
        var imageEl = image.el;
        if (self.processImageEl) {
          imageEl = self.processImageEl(image.el);
        }
        $(imageEl).addClass('loading');
        var imageObject = new Image();
        imageObject.onload = function () {
          imageLoaded(imageEl);
          imageObject = null;
        };
        imageObject.onerror = function () {
          imageLoaded(imageEl);
          imageObject = null;
        };
        imageObject.src = image.url;
      });

      UIItem.prototype.enhance.call(this);

      this.trigger('enhanced');
    }

  });

  return UIImagesLoader;
});
define('ui/itemTvMention',[
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'require'
], function (UIItem, $, _, woodman) {

  var UIItemTvMention = UIItem.extend({

    initialize: function (options) {

      this.videoDetail = options.videoDetail;
      this.mentions = options.mentions;

      // Call the base class constructor
      options.navUp = this.navUp;
      options.navDown = this.navDown;
      
      UIItem.prototype.initialize.call(this, options);

      this.realNavLeft = this.navLeft;
      this.navLeft = function() {
        if(this.watchingVideo) {
          this.hideVideo();
        } else {
          this.realNavLeft.call(this);
        }
      };

    },


    /**
     * Override the base "enhance" function to extract the images
     * that need to be loaded and start loading in the background.
     *
     * @function
     */
    enhance: function() {

      UIItem.prototype.enhance.call(this);
      this.trigger('enhanced');
    },

    navAction: function(e) {
      var videoImage = $(e.target).find("img.videoThumbnail");
      var cid = $(e.target).data("cid");

      if (this.watchingVideo) {
        this.hideVideo();
      } else {
        if (videoImage.length > 0) {
          var mention = _.find(this.mentions,function(mention){
            return mention.cid === cid;
          });
          this.videoDetail.setModel(mention.model);
          this.videoDetail.render();
          this.videoDetail.show();
          this.watchingVideo = true;
          this.navFocus();
        }
      }
    },
    navUp: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      } else {
        UIItem.prototype.navUp.call(this);
      }
    },
    navDown: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      } else {
        UIItem.prototype.navDown.call(this);
      }
    },
    navRight: function() {
      if(this.watchingVideo) {
        this.hideVideo();
      }
    },
    hideVideo: function() {
      this.videoDetail.hide();
      this.watchingVideo = false;
    },

    getFocusableSubElements: function() {
      var elements = this.$('a[href*=h], input, button, select, textarea, command, .mentionFocus');

      this.focusableElements = [];
      for(var o = 0; o < elements.length; o++) {
        if(elements.hasOwnProperty(o) && typeof elements[o] === 'object') {
          this.focusableElements.push({
            $el: $(elements[o]),
            x: $(elements[o]).offset().left,
            y: $(elements[o]).offset().top
          });
        }
      }

    }


  });

  return UIItemTvMention;
});
/**
 * @fileOverview Describes a possibly dynamic list.
 *
 * A list is bound to a collection. Each item in the collection gets wrapped
 * in a ListItem view before it is rendered. From a DOM perspective, this
 * creates a structure that is similar to "ul/li/[content]" although you may
 * choose to follow a more complex structure if needed.
 *
 * Items may be added to the collection using the "addChild" method.
 * The view adjusts accordingly.
 *
 * The list also implements a "load more" features that tries to load more items
 * from the collection in the background while the user scrolls the list. The
 * "load more" action gets triggered when the user has scrolled more than about
 * 75% of the list. The functionality only really works for "joshlib!collection"
 * datasource collections as the view needs to know how to request pages 2, 3...
 * of the collection.
 *
 * Options that change the behavior of the list need to be set when the list is
 * created:
 *
 * - templateEl: the DOM element or CSS selector to use to initialize the HTML
 * template for the list. The "templateEl" option is used to set the value of
 * the "template" option so both options should not be used at once.
 *
 * - template: the HTML template of the view. Value can be a string or a
 * template function. The value is first computed based on the "templateEl"
 * option. If that option is not set, the value provided is used if set. The
 * view creates a "<ul>" list otherwise.
 *
 * - collection: the Backbone collection that contains or will contain the
 * actual list of models to display within the collection.
 *
 * - itemOptions.templateEl: same as "templateEl" for an item in the list.
 * - itemOptions.template: same as "template" for an item in the list.
 * - itemOptions.*: all other options will be passed to the constructor of the
 * view created to display an item in the list.
 * - itemOptions.factory or itemFactory: the class constructor to use to create
 * the view that displays an item in the list. The function receives the
 * Backbone model to display as first parameter and the position offset as
 * second parameter. It must return a View.
 *
 * - maxLength: maximum number of items that the list may render. If the list
 * contains more items, they are ignored.
 *
 * - autoLoadMore: enables the "load more" mechanism when set.
 * - loadMore: function to use to fetch more items in the list. The function
 * receives the underlying Backbone collection as first parameter and a callback
 * function as second parameter. The callback function must be called once the
 * fetch is over.
 * - dataLoadingMoreClass: the class to use to flag the view when the load more
 * is in progress. If not given, the dataLoadingClass name is used. If value is
 * "false", the view is never flagged as loading more items.
 *
 * - customLoadEvent: when not set, the view triggers the "load" event on its
 * own once all of its children have triggered the "load" event. The view does
 * not trigger the "load" event otherwise.
 *
 * - dataLoadingClass: the name of the class used to flag the view as loading.
 * Defaults to "loading". If value is "false", the view is never flagged as
 * loading.
 *
 * Options from the Element and View base classes complete the list of options
 * available. See the description of these classes for details. Options include
 * "scroller", "scrollerSelector", "onScroll", "loadImagesSmoothly",
 * "imageClass", "getImages", "loadingClass", "processImageEl", "data".
 *
 * TODO:
 * - the list does not manage the suppression of models from the underlying
 * collection.
 * - as in most other views, data errors are not really handled
 */

define('joshfire-framework/ui/list',[
  'joshlib!uielement',
  'joshlib!ui/listitem',
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n',
  'require',
  'joshlib!utils/closest_descendant'
], function(
  UIElement,
  UIListItem,
  UIItem,
  $,
  _,
  i18n,
  woodman,
  closest_descendant
) {
  

  /**
   * Defines a list as a view bound to a Backbone collection of models.
   *
   * The list is dynamically updated as new items get added to the collection.
   * See the above description for more details about available options.
   */
  var UIList = UIElement.extend({
    /**
     * Height of the list that is currently rendered
     */
    listHeight: 0,


    /**
     * Initializes all list options at instantiation phase.
     */
    initialize: function (options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      

      // Initialize the HTML template of the view
      if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }
      else if (options.template) {
        if (_.isFunction(options.template)) {
          this.template = options.template;
        }
        else {
          this.template = this.compileTemplate(options.template);
        }
      } else {
        this.template = this.compileTemplate('<ul><%= children %></ul>');
      }

      this.itemOptions = options.itemOptions || {scroller: false};
      this.listItemOptions = options.listItemOptions || {};
      this.itemTemplateEl = options.itemTemplateEl;
      this.itemOptions.templateEl = this.itemOptions.templateEl || this.itemTemplateEl;
      this.itemOptions.template = this.itemOptions.template || options.itemTemplate;
      this.maxLength = options.maxLength || null;
      this.data = options.data || {};
      this.items = [];

      // Default item factory
      this.itemFactory = options.itemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset
          };
          _.extend(params, this.itemOptions);
          return new UIItem(params);
        };
      this.itemFactory = _.bind(this.itemFactory, this);

      // TODO: deprecate this. The "list item" level is useless provided we
      // have a generic "wrapper" class that can be used to wrap items.
      this.listItemFactory = options.listItemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset,
            view: this.itemFactory(model, offset)
          };

          _.extend(params, this.listItemOptions);

          return new UIListItem(params);
        };

      this.listItemFactory = _.bind(this.listItemFactory, this);

      // The loadMore function fetches more items from the collection.
      // Note the collection should trigger "load:start", "load" and
      // "load:error" events for the autoLoadMore feature to work properly
      this.autoLoadMore = options.autoLoadMore;
      this.loadMore = function () {
        if (this.isLoadingMore) {
          
          return;
        }

        if (!this.collection || !this.collection.hasMore) {
          
          return;
        }

        
        this.isLoadingMore = true;

        if (options.loadMore) {
          options.loadMore(this.collection);
        }
        else if (_.isFunction(this.collection.fetchMore)) {
          this.collection.fetchMore();
        }
        else {
          // No way to load more items in this collection
          
          this.collection.hasMore = false;
          this.isLoadingMore = false;
        }
      };

      if (this.autoLoadMore) {
        options.onScroll = options.onScroll ||
          _.bind(function (e, scrollHeight, scrollTop) {
            // If we currently are doing a load more, do nothing
            if (this.isLoadingMore) return;
            if (!this.collection.hasMore) return;
            if ((scrollHeight - this.getLoadMoreDistance()) <=
                (scrollTop + this.$el.innerHeight())) {
              
              this.loadMore();
            }
          }, this);
      } else {
        options.onScroll = options.onScroll || false;
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if (options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // The list must wait for all of its children to be "loaded"
      // before it may trigger the "load" event.
      this.customLoadEvent = true;

      // Data loading class that gets added to the view's element
      // while data synchro is on. "loading" is used if not overridden
      // Set the option to false or null (and not undefined) to cancel
      // the addition of the class.
      this.dataLoadingClass = 'loading';
      if (typeof options.dataLoadingClass !== 'undefined') {
        this.dataLoadingClass = options.dataLoadingClass;
      }
      if (options.dataLoadingClass === false) {
        this.dataLoadingClass = '';
      }

      if (typeof options.dataLoadingMoreClass !== 'undefined') {
        this.dataLoadingMoreClass = options.dataLoadingMoreClass;
      }
      else {
        this.dataLoadingMoreClass = this.dataLoadingClass;
      }
      if (options.dataLoadingMoreClass === false) {
        this.dataLoadingMoreClass = '';
      }

      // Propagate "shown", "hidden" events to the view's children
      this.listenTo(this, 'shown', function () {
        _.each(this.items, function (child) {
          child.trigger('shown');
        });
      });
      this.listenTo(this, 'hidden', function () {
        _.each(this.items, function (child) {
          child.trigger('hidden');
        });
      });

      UIElement.prototype.initialize.call(this, options);

      if (options.collection) {
        this.setCollection(options.collection);
      }
    },


    /**
     * Returns the DOM element that serves as container for the list of items
     * within the view.
     *
     * The item container is defined as, in order:
     * - the element that has a "data-container" attribute
     * - the first "ul" element
     * - the first "ol" element
     * - the view's root element otherwise
     *
     * @function
     * @return {Element} The item container
     */
    getItemContainer: function () {
      var itemContainerSelector = '*[data-container], ul, ol';
      var container = closest_descendant(this.$el, itemContainerSelector);

      if (container.length === 0) {
        container = this.$el.first();
      }
      return container;
    },


    /**
     * Sets the collection associated with the view
     *
     * Once bound to a collection, the view will be automatically updated
     * whenever the collection changes. By default, the update takes the form
     * of a re-rendering of the view but derived classes may override the
     * "update" function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given collection. In particular, if the view
     * is already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new collection, it should be
     * automatically updated. Note that update would likely affect running
     * code that uses the framework, so beware.
     *
     * @function
     * @param {Collection} collection Backbone collection to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setCollection: function (collection, update) {
      if (this.collection) {
        this.stopListening(this.collection);
      }

      this.collection = collection;
      this.collectionChanged = true;
      this.newChildren = [];

      if (this.collection) {
        
        this.listenTo(this.collection, 'add',
          this.callIfNotRemoved(this.addChild));
        this.listenTo(this.collection, 'remove',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'reset',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'sort',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'load:start',
          this.callIfNotRemoved(this.syncStartedHandler));
        this.listenTo(this.collection, 'load',
          this.callIfNotRemoved(this.syncSuccessHandler));
        this.listenTo(this.collection, 'load:error',
          this.callIfNotRemoved(this.syncErrorHandler));
      }

      if (update) {
        this.update();
      }
    },


    /**
     * Return the real height of the list, not the one of the container.
     */
    getListHeight: function() {
      return this.$el.find('.first').outerHeight();
    },


    /**
     * The load more distance is the distance from the bottom of the list which,
     * when reached through scrolling, triggers a "load more".
     *
     * The distance needs to be computed after each "load more" as there are no
     * guarantees that the height of the new items is the same as the height of
     * the items that are already rendered.
     *
     * Except if overridden, the distance is 75% of the height of the list
     *
     * @function
     * @param {integer} nbAdded Number of items added since last call
     **/
    updateLoadMoreDistance: function () {
      var listHeight = this.getListHeight() || 200;
      this.loadMoreDistance = 25 / 100 * listHeight;
      
    },

    /**
     * Returns the "load more" distance.
     */
    getLoadMoreDistance: function () {
      return this.loadMoreDistance;
    },

    /**
     * Adds a new item to the view.
     *
     * The function should never be called manually. It is called automatically
     * as new items get added to the underlying collection.
     *
     * The function ensures the new child may be added to the view and creates
     * the appropriate child view provided the view has already been rendered.
     *
     * @function
     * @private
     * @param {Model} model The item's model to add to the view
     **/
    addChild: function (model) {
      var offset = this.items.length;
      
      var item = this.listItemFactory(model, offset);
      if(!this.maxLength || (this.maxLength && offset < this.maxLength)) {
        this.items.push(item);
        if (this.rendered) {
          this.newChildren.push(item);
          this.renderChildren();
        }
      }
    },


    /**
     * Renders children that have been added by addChild and that have not yet
     * been rendered.
     *
     * Note the use of _.debounce so that the renderChildren function is
     * called only once all children have been added via "addChild" in this
     * tick.
     *
     * The function triggers a "render:children" event when rendering is over
     * to let callers perform further actions as needed.
     *
     * @function
     * @private
     */
    renderChildren: _.debounce(function () {
      var itemContainer = this.getItemContainer();
      // TODO: lastOffset may be null if list had 0 children!
      var lastOffset = itemContainer.children().last().data('joshfire-child');
      var htmlToAdd = '';

      

      // TODO: in theory, "generate" may be async but this code assumes
      // that the function runs synchronously!
      _(this.newChildren).each(_.bind(function (item) {
        item.generate(_.bind(function (err, html) {
          htmlToAdd += html;
        }, this));
      }, this));
      itemContainer.append(htmlToAdd);

      this.setChildrenElements(lastOffset + 1);
      this.newChildren = [];
      this.childrenLeftToAdd = 0;

      // If we use iScroll, we need to wait for the refresh before
      // calling the callback
      if (this.hasScroller && this.iScroller) {
        this.iScroller.options.onRefresh = _.once(_.bind(function () {
          this.updateLoadMoreDistance();
          this.isLoadingMore = false;
          this.trigger('render:children');
        }, this));
        _.defer(_.bind(function () {
          this.iScroller.refresh();
        }, this));
      } else {
        this.updateLoadMoreDistance();
        this.isLoadingMore = false;
        this.trigger('render:children');
      }
    }),


    /**
     * Reacts to a change made to the collection bound to the view.
     *
     * Note this handler serves no purpose whatsoever on top of "update" now
     * that update has been re-written. It is merely kept for backward
     * compatibility purpose. Derived classes that want to override the default
     * behavior should rather override the "update" function.
     *
     * TODO: deprecate and remove this function.
     *
     * @function
     */
    colChangedHandler: function () {
      
      this.update();
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      

      // Mark the collection as changed so that children views get re-created
      this.collectionChanged = true;
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Builds the list of children views associated with each model in the
     * collection bound to the list.
     *
     * Possible former children views are garbage collected.
     *
     * @function
     */
    createChildrenViews: function () {
      

      // Compute the size of the new list
      var size = this.maxLength ?
        Math.min(this.collection.length, this.maxLength) :
        this.collection.length;

      // Mark existing items as "ready to be garbage collected". Garbage
      // collection should take place after rendering of the new items to
      // avoid possible flickering effects if we collected them right away.
      _.each(this.items, function (item) {
        this.garbageCollect(item);
      }, this);

      this.collectionChanged = false;
      this.items = new Array(size);

      // Sets the view loaded counter. The list will trigger a "load" event
      // once all of its children views have triggered theirs.
      this.itemsLoaded = 0;
      var itemLoaded = function () {
        ++this.itemsLoaded;
        if ((this.itemsLoaded === size) && !this.wantsCustomLoadEvent) {
          // All children have been loaded
          this.trigger('load');
        }
      };

      // Create item elements
      this.collection.some(function (model, i) {
        if (i >= size) {
          // break
          return true;
        }

        this.items[i] = this.listItemFactory(model, i);

        // React to the "load" event of the child view,
        // triggering the "load" event of the container once
        // all children have been loaded.
        this.listenTo(this.items[i], 'load', _.bind(itemLoaded, this));
      }, this);
    },


    /**
     * Updates the DOM root element of all children views.
     *
     * @function
     * @param {integer} startForm Index of the child to start from,
     *   defaults to 0.
     */
    setChildrenElements: function (startFrom) {
      var container = this.getItemContainer();
      _.each(this.items, function (item, offset) {
        if (offset < startFrom) return;
        var tagName = item.tagName || '*';
        var el = container.find('> ' + tagName + '[data-joshfire-child=' + offset + ']')[0];
        //var el = closest_descendant(this.$el, '*[data-joshfire-child=' + offset + ']')[0];
        item.setElement(el, true);
        item.enhance();
      }, this);
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * Despite the presence of a callback function, note generation is
     * synchronous.
     *
     * The generate function is called as first step of the rendering process.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function (cb) {
      cb = cb || function () {};
      var processed = 0;
      var template = this.template;
      var self = this;

      // (Re-)create children views if needed
      if (!this.items || this.collectionChanged) {
        this.createChildrenViews();
      }
      var items = this.items;

      // Render an empty view if there are no items to render
      if (!items || !items.length) {
        
        var context = {
          children: '',
          collection: this.collection,
          T: i18n.getText
        };
        context = _.extend(context, this.data);
        var str = template(context);

        return cb(null, str);
      }

      var contents = new Array(items.length);

      // Get the HTML of all children
      
      for (var i = 0; i < items.length; i++) {
        // Create a scope for the current item
        (function (item, num) {
          item.generate(function (err, content) {
            contents[num] = content;
            // If last item was processed, fire callback
            if (++processed === items.length) {
              var context = {
                children: contents.join(''),
                collection: self.collection,
                T: i18n.getText
              };
              context = _.extend(context, self.data);
              var str = template(context);
              cb(null, str);
            }
          });
        }).call(this, items[i], i);
      }
    },

    /**
     * Set view events handler as needed.
     *
     * The enhance function is called as last part of the rendering process.
     */
    enhance: function () {
      

      // The HTML of the view has changed, we need to update the root element
      // of each child view
      this.setChildrenElements();

      // Bind click event to specific "Joshfire" links
      this.$('.joshfire-link').off('click').on('click', function (e) {
        e.preventDefault();
        var location = $(e.currentTarget).attr('data-joshfire-link-url');
        window.location = location;
        return false;
      });

      // Garbage collect previous children views if needed
      this.garbageCollect();

      // Call base class for more logic
      UIElement.prototype.enhance.call(this);

      // Compute the "load more" distance (even if the feature is not enabled)
      this.updateLoadMoreDistance(this.items.length);

      // Trigger the "load" event if there are no children to render,
      // unless the creator of the view wants to handle the event on his own
      if ((this.items.length === 0) && !this.wantsCustomLoadEvent) {
        this.trigger('load');
      }
    },


    /**
     * Marks the given view up for garbage collection, or garbage collects all
     * views that got marked up this way.
     *
     * Note that garbage collection effectively occurs when the new
     * encapsulated view has been fully rendered to avoid any flickering
     * effect.
     *
     * @function
     * @param {View} view The view to flag for garbage collection.
     *  If no view is given, the function actually performs the collection.
     */
    garbageCollect: function (view) {
      this.garbage = this.garbage || [];
      if (view) {
        this.stopListening(view);
        view.stopListening();
        this.garbage.push(view);
      }
      else {
        _.each(this.garbage, function (view) {
          view.remove();
        });
        this.garbage = [];
      }
    },


    /**
     * Overrides base "remove" function to forget about the underlying
     * collection and to propagate the request to the view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      
      UIElement.prototype.remove.call(this);
      _.each(this.items, function (item) {
        item.remove();
      });
      this.collection = null;
      this.items = [];
      this.newChildren = [];
      this.itemFactory = null;
      this.listItemFactory = null;
      this.loadMore = null;
    },

    /**
     * Flags the view as "loading" when the underlying collection is being
     * fetched.
     *
     * Note the fetch may be the result of rendering the view, triggering a
     * "load more", or some other view fetching the collection elsewhere in
     * the application.
     */
    syncStartedHandler: function() {
      var loadingClass = null;
      if (this.isLoadingMore) {
        loadingClass = this.dataLoadingMoreClass;
      }
      else {
        loadingClass = this.dataLoadingClass;
      }
      
      this.$el.addClass(loadingClass);
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Success handler for a fetch operation on the collection.
     */
    syncSuccessHandler: function() {
      
      if (!this.newChildren || (this.newChildren.length === 0)) {
        // All new children have been added to the DOM,
        // consider we're done with loading
        this.isLoadingMore = false;
      }
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Error handler for a fetch operation on the collection
     */
    syncErrorHandler: function (res) {
      
      this.isLoadingMore = false;
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    }
  });

  return UIList;
});

/*global Code*/
define('ui/imagegallery',[
  'joshlib!ui/list',
  'vendor/klass',
  'vendor/photoswipe',
  'joshlib!vendor/underscore'
], function (UIList, Klass, Photoswipe, _) {

  var UIImageGallery = UIList.extend({
    /**
     * View short name
     */
    name: 'imagegallery',

    initialize: function(options) {

      this.photoswipe = {
        getImageCaption: function(obj){
					return obj.title;
				},
				minUserZoom: 1,
        cacheMode: Code.PhotoSwipe.Cache.Mode.normal
      };

      if(options.photoswipe) _.extend(this.photoswipe, options.photoswipe);

      this.linkSelector = options.linkSelector || 'a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".gif"]';

      UIList.prototype.initialize.call(this, options);
    },

    // When adding a child, we need to attach it to photoswipe
    addChild: function(model) {
      UIList.prototype.addChild.call(this,model);
      this.updatePhotoSwipe();
    },

    // Use _.debounce so it's only called once when all children have been added.
    // It otherwise fails sometimes.
    updatePhotoSwipe: _.debounce(function() {
      var $links = this.$(this.linkSelector);
      if($links.length) Code.PhotoSwipe.attach($links, this.photoswipe);
    }),

    enhance: function() {
      var $links = this.$(this.linkSelector);
      if($links.length) Code.PhotoSwipe.attach($links, this.photoswipe);

      UIList.prototype.enhance.call(this);
    }
  });

  return UIImageGallery;
});
define('joshfire-framework/adapters/tv/ui/toolbar',["joshlib!ui/list","joshlib!utils/dollar","joshlib!vendor/underscore"], function(UIList,$,_) {

  var UIToolbar = UIList.extend({

    initialize: function(options) {
      UIList.prototype.initialize.call(this, options);

      this.minLengthToShow = options.minLengthToShow;

      this.active = -1;
    },

    generate: function(cb) {
      if (this.collection &&
          (this.minLengthToShow > 0) &&
          (this.collection.length < this.minLengthToShow)) {
        // TODO: NO! A view MUST NOT touch DOM content that it did not create
        $('body').addClass('no-toolbar');
      }
      UIList.prototype.generate.call(this,cb);
    },

    navFocus: function(origin, event) {
      UIList.prototype.navFocus.call(this, origin, event);

      if(!event && this.active === -1 && this.collection.length) {
        this.activate(0);
      }
    },

    navDown: function() {
      if(this.collection.length) {
        this.activate(Math.min(this.active + 1, this.collection.length - 1));
      }
    },

    navUp: function() {
      if(this.collection.length) {
        this.activate(Math.max(this.active - 1, 0));
      }
    },

    navAction: function() {
      if(this.origin && this.origin.navRight) {
        this.origin.navRight();
      }
    },

    activate: function(num) {
      if(num !== this.active) {
        this.$('.nav-active').removeClass('nav-active');

        var $item = $(this.items[num].$el);

        $item.addClass('nav-active');

        var $link = $item.find('a');

        if($link.length) {
          window.location = $link.attr('href');
        }

        this.active = num;
      }
    }

  });

  return UIToolbar;
});
define('joshfire-framework/adapters/tv/ui/verticallist',[
  'joshlib!ui/list',
  'joshlib!utils/dollar',
  'require',
  'joshlib!vendor/underscore'
], function (UIList, $, woodman, _) {
  

  var UIVerticalList = UIList.extend({
    initialize: function(options) {
      options = options || {};

      this.initializeLogId(options);
      

      // Save the "autoLoadMore" setting but disable base List behavior
      // as this view handles user moves using "discrete scroll" actions.
      var autoLoadMore = options.autoLoadMore;
      options.autoLoadMore = false;

      UIList.prototype.initialize.call(this, options);

      this.autoLoadMore = autoLoadMore;
      this.active = -1;
      this.offsetTop = options.offsetTop || 0;
      this.offsetBottom = options.offsetBottom || 0;

      // Translate 3D : defaults to true
      this.translate3d = (options.translate3d !== undefined) ?
        options.translate3d :
        true;

      $(window).resize(_.bind(function () {
        
        if (this.active !== -1) {
          this.calculateTransform(this.active);
        }
      }, this));

      this.listenTo(this, 'render:children', function () {
        
        if (this.active !== -1) {
          this.calculateTransform(this.active);
        }
      });
    },

    navFocus: function(origin) {
      if (this.isFocusedElement()) {
        
        return;
      }

      
      UIList.prototype.navFocus.call(this, origin);

      if (this.collection.length) {
        if (this.active === -1) {
          this.activate(0);
        } else {
          this.activate(this.active);
        }
      }
    },

    navBlur: function() {
      
      UIList.prototype.navBlur.call(this);

      this.$('.nav-active').removeClass('nav-active');
    },

    navDown: function() {
      
      if(this.collection.length) {
        this.activate(Math.min(this.active + 1, this.collection.length - 1));
        if (this.autoLoadMore && this.active > this.collection.length - 5) {
          this.loadMore();
        }
      }
    },

    navUp: function() {
      
      if(this.collection.length) {
        this.activate(Math.max(this.active - 1, 0));
      }
    },

    navAction: function() {
      
      if(this.items.length) {
        var $item = $(this.items[this.active].$el);
        var $link = $item.find('a');

        if($link.length) {
          window.location = $link.attr('href');
        }
      }
    },

    navRight: function() {
      
      this.navAction();
    },
    navLeft:function(){
      
      this.origin.navFocus();
    },

    activate: function(num) {
      
      this.$('.nav-active').removeClass('nav-active');

      if (!this.items || !this.items.length || !this.items[num]){
        //invalid param
        return false;
      }
      var $item = this.items[num].$el;
      $item.addClass('nav-active');

      this.active = num;
      this.calculateTransform(num);
    },

    calculateTransform: function(num) {
      var $ul = this.$('ul'),
          $lastChild = $(this.items[this.items.length - 1].$el);

      var ulHeight = $ul.height();
      var height = this.$el.height();
      var translateY = 0;
      if (ulHeight > height) {
        translateY = -num * (ulHeight - height + $lastChild.height()) / this.items.length;
      }
      

      var translate  = 'translate3d(0,' + translateY + 'px,0)';
      if (this.translate3d) {
        $ul.stop().css({
          '-webkit-transform': translate,
          '-moz-transform': translate,
          '-ms-transform': translate,
          '-o-transform': translate,
          'transform': translate
        });
      }
      else {
        $ul.css({
          'top': translateY
        });
      }

      /* Position list indicator over the active element */
      if (ulHeight > height) {
        $(this.el).find('.list-indicator').stop().css({
          top: this.offsetTop + (height - this.offsetTop - this.offsetBottom -$lastChild.height()) * num / this.items.length
        });
      } else {
        $(this.el).find('.list-indicator').stop().css({
          top: this.offsetTop + (ulHeight - this.offsetTop - this.offsetBottom) * num / this.items.length
        });
      }
    }
  });

  return UIVerticalList;
});

/**
 * @fileOverview The grid view automates keyboard navigation by selecting
 * neighboor cells in the most natural way possible.
 */

define('joshfire-framework/adapters/tv/ui/grid',[
  'joshlib!ui/list',
  'joshlib!utils/dollar',
  'require',
  'joshlib!vendor/underscore'
], function (UIList, $, woodman, _) {
  

  /**
   * A TV grid is a two-dimensional list that lets the user navigate with a
   * keyboard.
   *
   * The grid maintains the index of the active item within the list and
   * automatically computes the indexes of the items that the user should
   * navigate to if he wants to go left, right, up or down.
   *
   * @class
   */
  var UIGrid = UIList.extend({

    initialize: function (options) {
      options = options || {};

      this.initializeLogId(options);
      

      // Save the "autoLoadMore" setting but disable base List behavior
      // as the list scrolling does not quite match the way grids work.
      var autoLoadMore = options.autoLoadMore;
      options.autoLoadMore = false;

      UIList.prototype.initialize.call(this, options);

      this.autoLoadMore = autoLoadMore;
      this.active = -1;
      this.translateY = 0;
      this.tolerance = options.tolerance || 20;

      // Translate 3D for scrolling: defaults to true
      this.translate3d = (options.translate3d !== undefined) ?
        options.translate3d :
        true;

      this.listenTo(this, 'render:children', function () {
        
        this.$lis = this.$('li');
        this.resize();
      });
    },

    enhance: function () {
      this.$lis = this.$('li');
      $(window).resize(_.bind(this.resize, this));
      this.resize();
      UIList.prototype.enhance.call(this);
    },

    /**
     * Computes the positions of the corners of all items in the list as well
     * as the positions of their center.
     *
     * The function does not compute the boundings if the elements are not
     * visible. This would lead to a loss of focus inside the grid since the
     * boundings would be wrong (this happens in Sleek if a user selects and
     * changes the tab really fast). The boundings will get computed on focus
     * in that case.
     *
     * @function
     */
    resize: function () {
      

      this.boundingsComputed = false;
      this.bottom = 0;
      this.maxItemHeight = 0;

      if (!this.$lis || !this.$lis.is(':visible')) {
        
        return;
      }

      
      this.boundingRects = this.$lis.map(_.bind(function (i, el) {
        this.maxItemHeight = Math.max(
          $(el).height(), this.maxItemHeight);
        return el.getBoundingClientRect();
      }, this));

      this.leftBounds = this.boundingRects.map(function (i, rect) {
        return rect.left;
      });

      this.rightBounds = this.boundingRects.map(function (i, rect) {
        return rect.right;
      });

      this.topBounds = this.boundingRects.map(_.bind(function (i, rect) {
        return rect.top - this.translateY;
      }, this));

      this.bottomBounds = this.boundingRects.map(_.bind(function (i, rect) {
        var bottom = rect.bottom - this.translateY;
        this.bottom = Math.max(this.bottom, bottom);
        return bottom;
      }, this));

      this.centers = this.boundingRects.map(function (i, rect) {
        return {
          x: rect.left + rect.width * 0.5,
          y: rect.top + rect.height * 0.5
        };
      });

      this.boundingsComputed = true;

      
    },

    /**
     * Activates the item in the list
     *
     * @function
     * @param {integer} num The index of the item to activate in the list
     */
    activate: function (num) {
      

      // The code below does the same thing as:
      // this.$('.nav-active').removeClass('nav-active');
      // Problem is, calling "removeClass" may not work on a SamsungTV for some
      // reason and from time to time.
      // TODO (tidoust): Investigate the bug with traces. If the call to
      // "removeClass" does not succeed here, it will likely not succeed either
      // in other places. In other words, if the bug is confirmed, we should
      // probably never use "removeClass" on Samsung TV.
      this.$('.nav-active').each(function () {
        var classes = $(this).attr('class');
        classes = classes.replace('nav-active', '');
        $(this).attr('class', classes);
      });

      var $item = this.items[num].$el;

      $item.addClass('nav-active');
      var $ul = this.$('ul');

      this.active = num;

      var top = this.topBounds[num];
      var bottom = this.bottomBounds[num];
      var height = $(this.el).height();

      if (bottom + this.translateY > this.el.getBoundingClientRect().bottom) {
        this.translateY = Math.max(
          height - bottom - 100,
          height - $ul.height());
        
      } else if (top + this.translateY <= this.el.getBoundingClientRect().top) {
        this.translateY = -top;
        
      }

      // Check if we are in the last two rows
      // Add 10 so the row above the two last one
      // don't trigger the load more
      if (this.autoLoadMore &&
          ((bottom + 2 * (this.maxItemHeight)) > this.bottom + 10)) {
        this.loadMore();
      }

      // Scroll the view to the computed translation value
      if (this.translateY) {
        if (this.translate3d) {
          var translate  = 'translate3d(0,' + this.translateY + 'px,0)';
          $ul.css({
            '-webkit-transform': translate,
            '-moz-transform': translate,
            '-ms-transform': translate,
            '-o-transform': translate,
            'transform': translate
          });
        }
        else {
          $ul.css({
            'top': this.translateY
          });
        }
      }
    },

    navFocus: function (origin) {
      
      UIList.prototype.navFocus.call(this, origin);

      if (!this.boundingsComputed) {
        this.resize();
      }

      if (this.collection.length) {
        if(this.active === -1) {
          this.activate(0);
        } else {
          this.activate(this.active);
        }
      }
    },

    navBlur: function () {
      
      UIList.prototype.navBlur.call(this);

      this.$('.nav-active').removeClass('nav-active');
    },

    navRight: function (event) {
      
      var activeRight = this.rightBounds[this.active];
      var activeCenter = this.centers[this.active];

      var min = 30000;
      var best = -1;
      var center = 0;
      var dist = 0;

      for (var i = this.leftBounds.length - 1; i >= 0; i--) {
        if (this.isRight(i)) {
          center = this.centers[i];
          dist = Math.sqrt(
            Math.pow(activeRight - this.leftBounds[i], 2) +
            Math.pow(activeCenter.y - center.y, 2));

          if ((dist < min) || (best === -1) ||
              (Math.abs(dist - min) < this.tolerance) &&
              (this.centers[i].y < this.centers[best].y)) {
            best = i;
            min = dist;
          }
        }
      }

      if ((best !== -1) && (this.collection.length > 1)) {
        
        this.activate(best);
      }
      else if (this.origin && this.origin.navFocus) {
        
        this.origin.navFocus(null, event);
      }
    },

    navLeft: function(event) {
      
      var activeLeft = this.leftBounds[this.active];
      var activeCenter = this.centers[this.active];

      var min = 30000;
      var best = -1;
      var center = 0;
      var dist = 0;

      for (var i = this.rightBounds.length - 1; i >= 0; i--) {
        if (this.isLeft(i)) {
          center = this.centers[i];
          dist = Math.sqrt(
            Math.pow(activeLeft - this.rightBounds[i], 2) +
            Math.pow(activeCenter.y - center.y, 2));

          if ((dist < min) || (best === -1) ||
              (Math.abs(dist - min) < this.tolerance) &&
              (this.centers[i].y < this.centers[best].y)) {
            best = i;
            min = dist;
          }
        }
      }

      if ((best !== -1) && (this.collection.length > 1)) {
        
        this.activate(best);
      }
      else if (this.origin && this.origin.navFocus) {
        
        this.origin.navFocus(null, event);
      }
    },

    navDown: function(event) {
      
      var activeBottom = this.bottomBounds[this.active];
      var activeCenter = this.centers[this.active];

      var min = 30000;
      var best = -1;
      var center = 0;
      var dist = 0;

      for (var i = this.topBounds.length - 1; i >= 0; i--) {
        if (this.isDown(i)) {
          center = this.centers[i];
          dist = Math.sqrt(
            Math.pow(activeCenter.x - center.x, 2) +
            Math.pow(activeBottom - this.topBounds[i], 2));

          if ((dist < min) || (best === -1) ||
              (Math.abs(dist - min) < this.tolerance) &&
              (this.centers[i].x < this.centers[best].x)) {
            best = i;
            min = dist;
          }
        }
      }

      if ((best !== -1) && (this.collection.length > 1)) {
        
        this.activate(best);
      }
      else if (this.origin && this.origin.navFocus) {
        
        this.origin.navFocus(null, event);
      }
    },

    navUp: function(event) {
      
      var activeTop = this.topBounds[this.active];
      var activeCenter = this.centers[this.active];

      var min = 30000;
      var best = -1;
      var center = 0;
      var dist = 0;

      for (var i = this.bottomBounds.length - 1; i >= 0; i--) {
        if (this.isUp(i)) {
          center = this.centers[i];
          dist = Math.sqrt(
            Math.pow(activeCenter.x - center.x, 2) +
            Math.pow(activeTop - this.bottomBounds[i], 2));

          if ((dist < min) || (best === -1) ||
              (Math.abs(dist - min) < this.tolerance) &&
              (this.centers[i].x < this.centers[best].x)) {
            best = i;
            min = dist;
          }
        }
      }

      if ((best !== -1) && (this.collection.length > 1)) {
        
        this.activate(best);
      }
      else if (this.origin && this.origin.navFocus) {
        
        this.origin.navFocus(null, event);
      }
    },

    navAction: function() {
      
      if (this.items.length) {
        var $item = $(this.items[this.active].$el);
        var $link = $item.find('a');

        if($link.length) {
          window.location = $link.attr('href');
        }
      }
    },

    navClick: function() {
      
      if (this.items.length) {
        var $item = $(this.items[this.active].$el);
        var $link = $item.find('a');

        if ($link.length) {
          window.location = $link.attr('href');
        }
      }
    },

    isLeft: function(i) {
      return (
        this.rightBounds[i] <= this.leftBounds[this.active] + this.tolerance
      );
    },

    isRight: function(i) {
      return (
        this.leftBounds[i] >= this.rightBounds[this.active] - this.tolerance
      );
    },

    isUp: function(i) {
      return (
        this.bottomBounds[i] <= this.topBounds[this.active] + this.tolerance
      );
    },

    isDown: function(i) {
      return (
        this.topBounds[i] >= this.bottomBounds[this.active] - this.tolerance
      );
    }

  });

  return UIGrid;
});
/**
 * @fileoverview The FactoryMedia view wraps the mediaplayerlib library,
 * allowing to produce views that include an audio/video element.
 *
 * The actual markup used to produce the audio/video element depends
 * on the model to render and gets returned by mediaplayerlib.
 *
 * To work properly, the view needs to know the dimensions of the media
 * element to render. These dimensions need to be provided as parameters.
 * There are different ways to do so:
 *
 * 1. If the mediaOptions property contains a "width" and a "height"
 * properties set to numbers, the view will simply use that.
 *
 * 2. If the mediaOptions property contains a "width" and a "height"
 * properties set to percentages, the view will compute the actual dimensions
 * from the dimensions of the view element, known from:
 *  a) the "width" and "height" properties of the options object
 *  b) or the dimensions of the DOM element associated with the view,
 *     but note this only works provided that the dimensions of this element
 *     are already set, which usually only occurs when the element is inserted
 *     in the DOM for real
 *     (typically not the case when the view is rendered for the first time)
 *
 * Whatever the method, if the mediaOptions property also contains an
 * "adjustSize" property, the view tells the mediaplayerlib to adjust the
 * dimensions of the video element within the given dimensions to preserve
 * the aspect ratio (you would think that all Web browsers would take care
 * of preserving the aspect ratio, wouldn't you? Well, the default Android
 * browser doesn't quite do that and may not be the only one).
 *
 * An example:
 *  var view = new FactoryMedia({
 *    width: 500,         // Total width available for the view
 *    height: 281,        // Total height available for the view
 *    mediaOptions: {
 *      strategy: "html5",// Mediaplayerlib strategy for the element
 *      width: "100%",    // Video may take up the whole available width
 *      height: "80%"     // Video may take up to 80% of the available height
 *      adjustSize: true  // Adjust video element size to preserve ratio
 *    }
 *  });
 *
 * The view exposes the options and the actual dimensions of the media element
 * in the template's context when rendering the view, allowing to adjust
 * section's heights accordingly. On top of the usual "model" and "item", the
 * HTML template will receive the following structure (some of these properties
 * may not be set):
 *  "media": {
 *    "html": [the HTML markup of the media element],
 *    "metadata": {
 *      "width": [actual media width],
 *      "height": [actual media height]
 *    }
 *  },
 *  "width": [view width, same as initial value],
 *  "height": [view height, same as initial value
 */

/*global define*/

define('joshfire-framework/ui/factorymedia',[
  'joshlib!ui/item',
  'joshlib!utils/mediaplayerlib',
  'require',
  'joshlib!vendor/underscore'
], function (UIItem, mediaFactory, woodman, _) {
  

  /**
   * FactoryMedia extends UIItem, meaning it may be associated with a model
   * and and HTML template.
   *
   * @class
   */
  var UIFactoryMedia = UIItem.extend({
    /**
     * Initializes the view from given options.
     *
     * Overrides base class to keep a pointer on media options
     * @function
     */
    initialize: function(options) {
      this.initializeLogId(options);
      

      this.mediaOptions = options.mediaOptions || {};
      UIItem.prototype.initialize.call(this, options);
    },


    /**
     * Generates the view's HTML content that matches the underlying model.
     *
     * Overrides base implementation to:
     * 1. compute the dimensions of the video element to generate
     * 2. call mediaplayerlib to generate the HTML markup of the media element.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function(cb) {
      var rePercentage = /^([0-9]{1,3})%$/;
      var match = null;
      var percentage = 0;
      var mediaOptions = _.clone(this.mediaOptions);

      // No associated model? Nothing to render!
      if (!this.model) {
        
        return cb(null, '');
      }

      // Compute the requested media element width
      
      if (mediaOptions.width && _.isString(mediaOptions.width)) {
        match = mediaOptions.width.match(rePercentage);
        if (match) {
          percentage = parseInt(match[1], 10);
          if (this.options.width) {
            mediaOptions.width = this.options.width * percentage / 100;
            
          }
          else {
            
            mediaOptions.width = this.$el.width() * percentage / 100;
          }

          mediaOptions.width = Math.floor(mediaOptions.width);
          
        }
      }
      if (mediaOptions.height && _.isString(mediaOptions.height)) {
        match = mediaOptions.height.match(rePercentage);
        if (match) {
          percentage = parseInt(match[1], 10);
          if (this.options.height) {
            mediaOptions.height = this.options.height * percentage / 100;
          }
          else {
            mediaOptions.height = this.$el.height() * percentage / 100;
          }
          mediaOptions.height = Math.floor(mediaOptions.height);
          
        }
      }

      // Generate the HTML for the media element
      
      var builder = mediaFactory.resolve(this.model.toJSON(), mediaOptions);
      builder.toHtml(_.bind(function (err, html, metadata) {
        if (this.template) {
          // Note properties put in "data" are exposed to the HTML template
          _.extend(this.data, {
            media: {
              html: html,
              metadata: metadata
            },
            width: this.options.width,
            height: this.options.height
          });

          // Let the base class handle the actual generation
          UIItem.prototype.generate.call(this, cb);
        }
        else {
          // No HTML template? Let's return the HTML of the media element
          return cb(null, html);
        }
      }, this));
    }
  });

  return UIFactoryMedia;
});

/**
 * @fileoverview Simple images loader view.
 *
 * Use this view to render a spinner while images of an item are loaded in the
 * background. The view simply adds a "loading" class name to identified images
 * within the element, delegating possible transitions and spinners to CSS.
 *
 * Typically, to display a spinner and transition the image into view
 * with a fade-in effect:
 *
 * 1. the view's template should include something like:
 *  <figure>
 *    <div class="image" style="background-image:url('<%= imageUrl %>')"></div>
 *    <div class="spinner"></div>
 *  </figure>
 *
 * 2. and the CSS should be something like:
 *  // Anchor spinner position in <figure>
 *  figure {
 *   position: relative;
 *   width: 100%;   // Adjust to suit your needs
 *   height: 100%;  // Adjust to suit your needs
 *  }
 *
 *  // Define image box and display transition
 *  figure > .img {
 *   background-size: cover;
 *   background-position: center center;
 *   .transition(.7s ease-in-out all);
 *   -webkit-backface-visibility: hidden; // To avoid flickering on iOS
 *  }
 *
 *  // Center spinner in image box, not rendered by default
 *  // (adjust background color and image to suit your needs)
 *  .loader {
 *   background: rgba(0,0,0,.9) url(images/spinner.gif) no-repeat center center;
 *   margin: 0;
 *   position: absolute;
 *   top: 0;
 *   left: 0;
 *   width: 100%;
 *   height: 100%;
 *   z-index: 2;
 *   display: none;
 *  }
 *
 *  // When "loading" is there, image is transparent and spinner is displayed
 *  figure.loading .img {
 *   opacity: 0;        // Also add prefixed versions
 *   transition: none;  // Also add prefixed versions
 *  }
 *  figure.loading .loader {
 *   display: block;
 *  }
 *
 * By default, the images loader extracts <img> tags from the HTML content
 * of the view to use as the list of images to load. You may override that
 * behavior by specifyig a "getImages" function. That function must return
 * an array of objects, each object having the properties:
 *  - el: the DOM element of the image (or the image container) that will
 *  receive the "loading" class while the image is being loaded
 *  - url: the URL of the image to load
 *
 * Pass an "imageClass" property if you're using the default images extractor
 * and would like extracted images to be flagged with a class.
 *
 * Pass a "processImageEl" function if you would like to process extracted
 * images somehow, e.g. to reproduce the image loader markup mentioned above.
 * The function must return the resulting DOM element.
 */

define('joshfire-framework/ui/imagesloader',[
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore'
], function (UIItem, $, _) {

  var UIImagesLoader = UIItem.extend({

    initialize: function (options) {
      // Class added to all images during extraction when default
      // extractor is used.
      this.imageClass = options.imageClass;

      // Process image function
      this.processImageEl = options.processImageEl;

      // Set the image extractor if defined, or use default one
      var self = this;
      this.getImages = options.getImages || function () {
        // BEWARE: $.map('img', blah) is different from $('img').map(blah)
        // in Zepto 1.0rc1 (the order of parameters is not the same).
        // Use $.map for a consistent behavior between Zepto and jQuery
        var images = $.map(this.$('img'), function (el) {
          if (self.imageClass) $(el).addClass(self.imageClass);
          return {
            el: el,
            url: $(el).attr('src')
          };
        });
        return images;
      };

      // We'll trigger the load event once all images are loaded
      this.customLoadEvent = true;

      // Call the base class constructor
      UIItem.prototype.initialize.call(this, options);
    },

    /**
     * Override the base "enhance" function to extract the images
     * that need to be loaded and start loading in the background.
     *
     * @function
     */
    enhance: function() {
      var self = this;

      if (!this.getImages) {
        UIItem.prototype.enhance.call(this);
        this.trigger('load');
        return;
      }

      // Extract the images to load
      var images = this.getImages();
      if (!images || (images.length === 0)) {
        // No image to load, we're done
        UIItem.prototype.enhance.call(this);
        this.trigger('load');
        return;
      }

      // Load the images in the background and trigger the 'load'
      // event in the background.
      var imagesLoaded = 0;
      var imageLoaded = function (imageEl) {
        if (imageEl) $(imageEl).removeClass('loading');
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          // All images have been loaded
          self.trigger('load');
        }
      };
      _.each(images, function (image) {
        if (!image.el || !image.url) {
          return imageLoaded(image.el);
        }
        var imageEl = image.el;
        if (self.processImageEl) {
          imageEl = self.processImageEl(image.el);
        }
        $(imageEl).addClass('loading');
        var imageObject = new Image();
        imageObject.onload = function () {
          imageLoaded(imageEl);
          imageObject = null;
        };
        imageObject.onerror = function () {
          imageLoaded(imageEl);
          imageObject = null;
        };
        imageObject.src = image.url;
      });

      UIItem.prototype.enhance.call(this);
    }
  });

  return UIImagesLoader;
});
/**
 * @fileoverview The DynamicContainer UI element is a wrapper around a UI
 * element whose type depends on the property values of the model and/or the
 * collection to render.
 * This element is typically useful for rendering content when the nature of
 * the data to be displayed is not known until the collection/model is
 * fetched.
 *
 * The type of element that will be used to render the model needs to be
 * returned by an "itemFactory" function, given as creation parameter.
 * The function must take an "options" object as parameter and must return
 * the UIElement to use for rendering purpose. The "options" parameter
 * contains at least a "model" property that references the model to render.
 * Other properties may appear, taken from the container's "itemOptions"
 * initialization option.
 *
 * Usage example:
 *  var container = new DynamicContainer({
 *    viewFactory: function (options) {
 *      if (options.model['foo'] === 'bar') {
 *        // Create a special UI element when model is foo/bar
 *        return new BazElement(options);
 *      }
 *      else {
 *        // Default UI element otherwise
 *        return new UIItem(options);
 *      }
 *    });
 *  });
 *  container.setModel(youpiModel);
 *  container.render();
 *
 * The code is a mix between that of UIItem and that of List: it is a
 * UIItem in the sense that it follows changes on an underlying model
 * and a List in the sense that it encapsulates one UI element).
 *
 * The dynamic container class uses an "update" mechanism to detect whether
 * it needs to render itself again when the underlying model or collection
 * changes. By default, given a collection, that mechanism re-renders the view
 * when the view moves between one of the following cases:
 * - no known model associated with the container
 * - exactly 1 known model associated with the container
 * - more than one models associated with the container
 *
 * If the dynamic container is not associated with a collection, the update
 * mechanism re-renders the view whenever the associated model changes.
 *
 * The default update mechanism may be overridden provided a "needsUpdate"
 * function that takes a model and a collection as parameters gets passed as
 * option when the view is created. That function must return "true" to force
 * a re-render of the view.
 *
 * TODO: the class should derive from Layout or from a potential Wrapper
 * base class that provides common functionalities to all wrapper views.
 */

/*global define*/

define('joshfire-framework/ui/dynamiccontainer',[
  'joshlib!uielement',
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'require',
  'joshlib!vendor/underscore'
], function (UIElement, UIItem, $, woodman, _) {
  

  /**
   * Definition of the DynamicContainer class.
   *
   * The class extends UIItem and automatically renders the underlying model
   * when it is updated.
   *
   * @class
   */
  var DynamicContainer = UIElement.extend({
    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "model" property and an "itemFactory" property
     */
    initialize: function (options) {
      options = options || {};

      this.initializeLogId(options);
      

      // No model rendered to start with
      this.modelsRendered = 0;

      // Initialize model.
      this.setModel(options.model);

      // Initialize collection.
      this.setCollection(options.collection);

      // Parse options.
      this.viewTemplateEl = options.viewTemplateEl || options.itemTemplateEl;
      this.viewOptions = options.viewOptions || options.itemOptions || {};
      this.viewOptions.templateEl = this.viewOptions.templateEl || this.viewTemplateEl;
      this.viewOptions.template = this.viewOptions.template || options.viewTemplate || options.itemTemplate;

      // Initialize the HTML template of the view
      if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }
      else if (options.template) {
        if (_.isFunction(options.template)) {
          this.template = options.template;
        }
        else {
          this.template = this.compileTemplate(options.template);
        }
      }

      this.viewFactory = _.bind(function () {
        
        var params = {
          model: this.model,
          collection: this.collection
        };
        _.extend(params, this.viewOptions);
        var factory = options.viewFactory || options.itemFactory;
        if (factory) {
          return factory(params);
        }
        else {
          return new UIItem(params);
        }
      }, this);

      // Function that returns "true" when the encapsulated view needs to be
      // updated. This function gets called by "update" whenever a change gets
      // detected on the model/collection associated with the view.
      // The caller should provide a "needsUpdate" function that receives the
      // model and collection as parameters to implement its own update logic.
      this.needsUpdate = _.bind(function () {
        var nbModels = 0;
        var updateNeeded = false;

        if (options.needsUpdate) {
          // The caller provided a "needsUpdate" function,
          // delegate the decision to that function.
          updateNeeded = options.needsUpdate(this.model, this.collection);
          
        }
        else if (!this.collection) {
          // Only one model associated with the view (or nothing), consider
          // that any change is a valid cause to change the encapsulated view.
          
          updateNeeded = true;
        }
        else {
          // Detect changes between the different cases:
          // - no model rendered and >=1 models now associated with the view
          // - 1 model rendered and <>1 model now associated with the view
          // - >1 models rendered and <=1 model now associated with the view
          nbModels = this.getNumberOfModels();
          updateNeeded = ((this.modelsRendered === 0) && (nbModels !== 0)) ||
            ((this.modelsRendered === 1) && (nbModels !== 1)) ||
            ((this.modelsRendered > 1) && (nbModels <= 1));
          
        }
        return updateNeeded;
      }, this);

      // We'll trigger the "load" event when the underlying view is loaded
      this.customLoadEvent = true;

      // Propagate "shown", "hidden" events to the view's children
      this.listenTo(this, 'shown', function () {
        if (this.view) this.view.trigger('shown');
      });
      this.listenTo(this, 'hidden', function () {
        if (this.view) this.view.trigger('hidden');
      });

      UIElement.prototype.initialize.call(this, options);
    },


    /**
     * Returns the number of models associated with the view, summing up
     * the model set by a call to "setModel" and the models of the collection
     * set by a call to "setCollection" as needed.
     *
     * This number is typically useful for "simple" update rules where the
     * view encapsulated by the dynamic container needs to be changed based
     * on the number of models associated with the view.
     *
     * @function
     * @return {integer} The number of models associated with the view
     */
    getNumberOfModels: function () {
      return (this.model ? 1 : 0) +
        (this.collection ? this.collection.length : 0);
    },


    /**
     * Binds the view to the given model.
     *
     * Once bound to a model, the view will be automatically updated whenever
     * the model changes. By default, the update takes the form of a
     * re-rendering of the view but derived classes may override the "update"
     * function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given model. In particular, if the view is
     * already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new model, it should be automatically
     * updated. Note that update would likely affect running code that uses the
     * framework, so beware.
     *
     * @function
     * @param {Model} model Backbone model to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setModel: function (model, update) {
      if (this.model) {
        this.stopListening(this.model);
      }

      this.model = model;
      this.modelsUpdated = true;

      if (model) {
        
        this.listenTo(model, 'change', this.callIfNotRemoved(this.update));
      }

      if (update) {
        this.update();
      }
    },


    /**
     * Sets the collection associated with the view
     *
     * Once bound to a collection, the view will be automatically updated
     * whenever the collection changes. By default, the update takes the form
     * of a re-rendering of the view but derived classes may override the
     * "update" function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given collection. In particular, if the view
     * is already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new collection, it should be
     * automatically updated. Note that update would likely affect running
     * code that uses the framework, so beware.
     *
     * @function
     * @param {Collection} collection Backbone collection to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setCollection: function (collection, update) {
      if (this.collection) {
        this.stopListening(this.collection);
      }

      this.collection = collection;
      this.modelsUpdated = true;

      if (collection) {
        
        this.listenTo(collection, 'change', this.callIfNotRemoved(this.update));
        this.listenTo(collection, 'add', this.callIfNotRemoved(this.update));
        this.listenTo(collection, 'remove', this.callIfNotRemoved(this.update));
        this.listenTo(collection, 'reset', this.callIfNotRemoved(this.update));
      }

      if (update) {
        this.update();
      }
    },


    /**
     * Updates the contents of the dynamic container if needed.
     *
     * The contents of the dynamic container need to be updated if changes
     * made to the underlying model and/or collection require the contained
     * view to change. Note no update takes place if the view has not yet been
     * rendered.
     *
     * That decision is typically up to the creator of the view who should
     * provide a "needsUpdate" function when the view is created. In the
     * absence of such a function, the dynamic container simply counts the
     * number of models associated with the view and distinguishes between the
     * following cases:
     * - no model associated with the view
     * - only one model associated with the view
     * - more than one models associated with the view
     *
     * It triggers a "render" whenever the view moves from one case to another
     * between two calls to "render/update". In particular, note the view does
     * not re-render the view when the information of a model changes or when
     * more items get added to a collection that already contained more than
     * one items. The underlying view is responsible for that.
     *
     * @function
     */
    update: function () {
      if (!this.rendered) {
        
        return;
      }

      if (this.needsUpdate()) {
        
        this.render();
      }
      else if (this.modelsUpdated) {
        
        this.modelsUpdated = false;
        if (this.view.setModel) {
          this.view.setModel(this.model, true);
        }
        if (this.view.setCollection) {
          this.view.setCollection(this.collection, true);
        }
      }
      else {
        
      }
    },


    /**
     * Generates the HTML code to render.
     *
     * The function is called automatically when the element is rendered.
     * It calls the "generate" function of the underlying element created
     * by viewFactory for the model/collection's values.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function (cb) {
      

      // Save the number of models associated with the view at this time,
      // so that "update" may detect changes that would require another
      // rendering later on.
      this.modelsRendered = this.getNumberOfModels();
      this.modelsUpdated = false;

      // Create the appropriate view to encapsulate and remove the
      // previous one if it existed (note that, to avoid any flickering
      // issue, garbage collection will actually take place once the new
      // view has been rendered)
      var view = this.viewFactory();
      if (this.view && (this.view !== view)) {
        this.garbageCollect(this.view);
      }
      this.view = view;

      if (!this.view) {
        return cb(null, '');
      }
      this.listenTo(this.view, 'load', this.triggerLoad);

      // Generate the inner view from the model or collection
      if (!this.view.model && this.view.setModel) {
        this.view.setModel(this.model);
      }
      if (!this.view.collection && this.view.setCollection) {
        this.view.setCollection(this.collection);
      }

      this.view.generate(_.bind(function (err, innerHTML) {
        // The "generate" method returns the innerHTML, but we need the
        // outerHTML since that's what the inner view would generate if
        // was used on its own.
        var outerHTML = this.view.wrapContent(innerHTML);
        var html = null;
        if (outerHTML && this.template) {
          html = this.template({ child: outerHTML });
        }
        else {
          html = outerHTML ? outerHTML : '';
        }
        return cb(err, html);
      }, this));
    },


    /**
     * Marks the given view up for garbage collection, or garbage collects all
     * views that got marked up this way.
     *
     * Note that garbage collection effectively occurs when the new
     * encapsulated view has been fully rendered to avoid any flickering
     * effect.
     *
     * @function
     * @param {View} view The view to flag for garbage collection.
     *  If no view is given, the function actually performs the collection.
     */
    garbageCollect: function (view) {
      this.garbage = this.garbage || [];
      if (view) {
        this.stopListening(view);
        view.stopListening();
        this.garbage.push(view);
      }
      else {
        _.each(this.garbage, function (view) {
          view.remove();
        });
        this.garbage = [];
      }
    },


    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function(html) {
      UIElement.prototype.setContent.call(this, html);

      // Update the inner view's DOM element to point to the element that has
      // just been inserted in the DOM (and re-bind potential event handlers)
      if (this.view && this.el) {
        this.setViewElement(true);
      }

      // Time to garbage collect previous view when a new view replaces
      // the previous one.
      this.garbageCollect();
    },

    setElement: function(element, delegate) {
      UIElement.prototype.setElement.call(this, element, delegate);
      this.setViewElement(delegate);
    },

    setViewElement: function(delegate) {
      if (this.view) this.view.setElement(this.el.firstChild, delegate);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * element created by itemFactory for the model's values.
     *
     * @function
     */
    enhance: function() {
      var self = this;

      this.view.enhance();

      // Expose inner bindings to the view that encapsulate this container
      // (TODO: the bindings are TV specific for now, should probably go
      // into a TV adapter of this container)
      var bindings = [
        'navUp', 'navRight', 'navDown', 'navLeft',
        'navAction', 'navFocus', 'navBlur'
      ];
      _.each(bindings, function (binding) {
        self[binding] = self.view[binding];
      });

      UIElement.prototype.enhance.call(this);
    },

    /**
     * Triggers the "load" event. That event handler is called by the
     * underlying view when it is loaded.
     *
     * @function
     */
    triggerLoad: function () {
      
      this.trigger('load');
    },

    /**
     * Overrides base "remove" function to forget about the underlying
     * model and collection and to propagate the request to the encapsulated
     * view.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      
      UIElement.prototype.remove.call(this);
      this.model = null;
      this.collection = null;
      this.viewFactory = null;
      this.needsUpdate = null;
      if (this.view) {
        this.view.remove();
        this.view = null;
      }
    },

    scrollTop: function() {
      this.view.scrollTop();
    }
  });


  // Expose the element to the caller
  return DynamicContainer;
});

/**
 * @fileoverview Main template logic, code shared by all platforms supported
 * by the template.
 *
 * The code is extended in sleek.[platform].js to add platform-specific logic.
 * To ease maintenance, the goal is to share as much code as possible between
 * versions.
 */

/*global define, Joshfire, document, moment, console, woodmanConfig*/

define('sleek',[
  'joshlib!collection',
  'joshlib!ui/dynamiccontainer',
  'joshlib!ui/item',
  'joshlib!ui/list',
  'joshlib!ui/listitem',
  'joshlib!ui/fadeinpanel',
  'joshlib!ui/factorymedia',
  'ui/imagesloader',
  'joshlib!router',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/i18n',
  'require',
  'lang/config',
  'ui/imagegallery'
], function (
  Collection,
  DynamicContainer,
  Item,
  List,
  ListItem,
  FadeInPanel,
  FactoryMedia,
  ImagesLoader,
  Router,
  Backbone,
  _,
  $,
  Localizer,
  woodman,
  LocaleConfig,
  ImageGallery) {

  

  // The "empty" template is used to display an "Empty feed" empty view when
  // the underlying feed does not contain any item or has not yet been fetched.
  // The template should really not be different from one version to another.
  // TODO: when refactoring templates using "text!" or "tpl!" require.js
  // plugins, move the template to a separate file along with the other
  // templates.
  var templateEmpty = '<div class="single"><div>' +
    '<div class="nodata"><%= T("empty") %></div>' +
    '<div class="loader large">&nbsp;</div>' +
    '</div></div>';

  var Sleek = function () {
    _.bindAll(this, 'initialize',  'setColor', 'slugify');
  };

  Sleek.extend = Backbone.View.extend;
  _.extend(Sleek.prototype, Backbone.Events);
  _.extend(Sleek.prototype, {
    /**
     * Device family that identifies the platform handled by a more specific class.
     * Override this property in derivated class as appropriate. For instance, set
     * the property to 'phone' in sleek.phone.js.
     *
     * The property is typically used to target platform-specific CSS files and
     * properties.
     */
    deviceFamily: 'all',

    /**
     * Client width available in CSS pixels
     *
     * Note the value is merely used as an indication to pick up a thumbnail
     * image for listing views. It is not correct in that it does not follow
     * orientation changes, but that's normally not a big deal.
     *
     * IMPORTANT: that value used to be computed in getThumbnail but, on iPad
     * at least, accessing document.body.clientWidth forces a refresh of the
     * screen which, in turn, means the screen will flicker for half a second,
     * hence the need to store it once and for all here.
     */
    clientWidth: document.body.clientWidth,

    /**
     * Initialization flag. The flag is set once the application is ready
     * to process its first route.
     */
    initialized: false,

    /**
     * The following flag is used to determine whether the router needs to
     * trigger the "loaded" hook when the main view is done rendering or
     * not.
     *
     * The flag is set once the hook has been triggered. Once set, this
     * flag is never reset while the application is running.
     */
    loadedHookTriggered: false,


    /**
     * Selector where fastNavigate() will be activated
     * False to disable
     */
    fastNavigateSelector: false,

    /**
     * Converts a schema.org type into an internal type of items
     */
    convertItemType: function(type) {
      var outputType = null;
      switch (type) {
      case 'Article/Status':
        outputType = 'status';
        break;
      case 'NewsArticle':
      case 'BlogPosting':
      case 'Article':
      case 'CreativeWork':
        outputType = 'news';
        break;
      case 'Event':
        outputType = 'event';
        break;
      case 'ImageObject':
        outputType = 'photo';
        break;
      case 'VideoObject':
        outputType = 'video';
        break;
      case 'MusicRecording':
        outputType = 'sound';
        break;
      case 'Product':
        outputType = 'product';
        break;
      default:
        
        outputType = 'other';
        break;
      }
      return outputType;
    },


    /**
     * Initialization of the application.
     * The function is automatically called by the framework when the application
     * is loaded.
     *
     * @function
     */
    initialize: function (opt, callback) {

      var self = this;
      this.localizer = Localizer;
      this.title = Joshfire.factory.config.app.name;
      this.tabs = Joshfire.factory.config.template.options.tabs || [];
      this.tabicons = Joshfire.factory.config.template.options.tabicons || [];
      this.backgroundURL = Joshfire.factory.config.template.options.backgroundimage ? Joshfire.factory.config.template.options.backgroundimage.url : Joshfire.factory.config.template.options.backgroundurl;
      this.logoURL = Joshfire.factory.config.app.logo ?
                  Joshfire.factory.config.app.logo.contentURL : null;

      if (opt && opt.templates) {
        this.templates = opt.templates;
      } else {
        console.error('No templates were loaded.');
        throw new Error();
      }
      // Set the document's title to the application title
      document.title = this.title;

      
      if (typeof woodmanConfig !== 'undefined') {
        
      }

      (_.bind(function (err) {

        if (err) {
          console.error(err);
        }

        // Open external link in another window
        // Not necessary anymore since we now have the in-app browser.
        // Leaving the code here temporarily. (famous last words - 07/13)
        /*
        $('body').on('click', 'a', function () {
          if ($(this).is('.img, .image')) return true;
          var url = $(this).attr('href');
          if (url && url.indexOf('http://') > -1) {
            window.open(url, '_system');
            return false;
          }
        });
        */

        // Sets the locale and loads the corresponding dictionnary.
        // It is then defined in the html templates's scope.
        this.localizer.setLocale({
          locale: Joshfire.factory.config.template.options.language || 'auto',
          availableLocales: LocaleConfig.AVAILABLE,
          defaultLocale: LocaleConfig.DEFAULT
        }, function() {
          // Includes the correct dictionnary which is required by
          // moment.js's i18n native solution.
          self.setMomentLanguage();
          // Set the template color based on the option selected by the user
          // (this loads the CSS)
          self.setColor(Joshfire.factory.config.template.options.color || 'gray', function () {
            //
            // Sections: one section per datasource
            //
            // (The way the list of datasources is retrieved actually depends
            // on whether the code is used in Sleek or in Spot)
            var datasources = self.getDatasources();
            var sections = new Array(datasources.length);
            var loaded = 0;

            // Prepare sections
            _.forEach(datasources, _.bind(function(datasource, index) {
              var name = this.tabs[index] || datasource.name || '';
              var icon = this.tabicons[index];
              var slug = index + '--' + this.slugify(name.toLowerCase());
              var collection = this.createCollection(datasource);
              // Main section type depends on the type of content returned by the
              // datasource. Datasources that return mixed content typically fall
              // in the "other" category.
              var outputType = datasource.getOutputType();
              sections[index] = {
                name: name,
                slug: slug,
                icon: icon || self.convertItemType(outputType),
                outputType: self.convertItemType(outputType),
                collection: collection,
                index: index
              };
            }, self));


            // Create the views once all sections have been initialized
            var views = self.createViews(sections);

            // Initialize the router and start the application
            var controllers = self.createRoutes(sections, views);
            self.router = Router(controllers);

            self.setupFastNavigate();
            self.init();
            self.initialized = true;
            // The "loaded" hook is triggered once when the router handles
            // the first route and when the view is rendered. The hook will
            // typically hide a possibly installed splashscreen
            loaded = function() {
              if (!self.loadedHookTriggered && self.initialized) {
                
                self.loadedHookTriggered = true;
                Joshfire.factory.getAddOns('loaded').run();
              }
              if (navigator && navigator.splashscreen) {
                setTimeout(navigator.splashscreen.hide, 500);
              }
            };

            views.bind('load', loaded);

            //failsafe if first tab fails to load for some reason
            setTimeout(loaded, 20*1000);

            self.toolbarView.render();
            views.render();

            if (callback) callback();
            self.router.historyStart();
          });
        });
      }, this))();
    },

    createCollection: function(datasource) {
      
      return new Collection([], {
        dataSource: datasource,
        dataSourceQuery: {}
      });
    },

    setupFastNavigate:function() {
      if (!this.fastNavigateSelector) return;
      var self = this;

      var fastNavigate = function(evt) {
        var href = $(evt.currentTarget).attr('href');

        if (href && (href.substring(0,1) === '#')) {
          self.router.navigate(href.substring(1),true);
          evt.preventDefault();
          evt.stopPropagation();

          return false;
        }
      };

      $(this.fastNavigateSelector).live('touchstart mousedown', fastNavigate);
    },

    /**
     * Overload this to get custom initializations for devices
     */
    init:function() {},


    /**
     * Returns the list of datasources entered by the user, in the
     * right order.
     *
     * @function
     * @return {Array(Object)} The list of datasources, an empty
     *   array when no datasources are defined.
     */
    getDatasources: function() {
      var mainDatasource = Joshfire.factory.getDataSource('main');
      var datasources = [];

      if (mainDatasource && mainDatasource.children &&
        (mainDatasource.children.length > 0)) {
        datasources = datasources.concat(mainDatasource.children);
      }
      return datasources;
    },


    /**
     * Sets the template color
     *
     * @function
     * @param {string} color The color to set (value must be one of the supported
     *  colors, e.g. "gray", "blue", etc.)
     * @param {function} callback Callback function run when CSS is done loading
     */
    setColor: function(color, callback) {
      $('#color').remove();
      window.Sid.css('css/' + this.deviceFamily + '.' + color + '.css', callback, 'afterfirststyle');
    },


    /**
     * Sets the main title
     *
     * @function
     * @param {string} value The title to set.
     *  The string is interpreted as HTML markup.
     */
    setTitle: function(value) {
      $('#title').html(value);
    },


    /**
     * Retrieves the classname(s) to use to flag an item in a list
     * or the detail element that represents the item.
     *
     * Override this method in derivated classes as needed.
     *
     * @function
     * @param {string} itemType itemType The section's output type
     */
    getClassName: function (itemType, context) {
      if (context === 'list') {
        switch (itemType) {
        case 'status':
        case 'event':
          return 'content hashed-list';
        case 'photo':
          return 'content mosaic-list';
        default:
          return 'content simple-list';
        }
      }
      else if(context === 'single') {
        return 'single content detail';
      }
      else {
        return 'content detail';
      }
    },


    /**
     * Initializes and renders the application toolbar
     *
     * @function
     * @param {Array(Object)} sections The list of sections to include
     *  in the toolbar
     * @return {UIElement} The created toolbar element
     */
    createToolbar: function(sections) {
      
      var sectionCollection = new Backbone.Collection();
      var section = null;

      for(var i = 0; i < sections.length; i++) {
        section = sections[i];
        sectionCollection.add({
          name: section.name,
          icon: section.icon,
          linkURL: '#' + section.slug,
          outputType: section.outputType,
          slug: section.slug
        });
      }

      var toolbar = this.createToolbarElement();
      toolbar.setCollection(sectionCollection, true);
      return toolbar;
    },


    /**
     * Initializes views created from the given list of sections.
     *
     * @function
     * @param {Array(Object)} sections The list of sections
     *  (see "initialize" for format)
     * @return {Object} Views created identified by their ID
     */
    createViews: function(sections) {
      
      var views = {};
      var sectionsView = null;

      // Create additional views and overlays
      // (hook for derivated classes to add more logic)
      this.createAdditionalViews(views);

      if (!sections || (sections.length === 0)) {
        sectionsView = new Item({
          el: '#cards',
          model: new Backbone.Model(),
          template: '#template-nodata'
        });
        return sectionsView;
      }

      // Create the toolbar
      // (not very clean to set it in "this", but TV version needs
      // to put the toolbar in a horizontal layout)
      this.toolbarView = this.createToolbar(sections);

      // Parse sections and build corresponding views
      _.forEach(sections, _.bind(function(section) {
        var sectionView = this.createSectionView(section);
        views[section.slug] = sectionView;
      }, this));

      sectionsView = new FadeInPanel({
        el: '#cards',
        children: views
      });

      return sectionsView;
    },


    /**
     * Creates additional views.
     *
     * This function is an empty hook that derivated classes may use to add
     * additional views logic.
     *
     * @function
     * @param {Object} views Views of the application, to complete with
     *   additional views created by the function (keys are views IDs)
     */
    createAdditionalViews: function(views) {
    },


    /**
     * Creates the toolbar UI element. Default implementation is a Toolbar,
     * but you may want to override this in derivated classes.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      
      var Toolbar = List.extend({
        generate: function (cb) {
          if (this.collection && (this.collection.length < 2)) {
            
            $('body').addClass('no-toolbar');
          }
          List.prototype.generate.call(this, cb);
        }
      });
      return new Toolbar({
        name: 'toolbar',
        el: '#toolbar',
        template: this.templates.toolbar,
        itemOptions: {
          template: this.templates.toolbarItem
        }
      });
    },

    /**
     * Section is a dynamic container so that we can automatically
     * switch to detail view when the collection contains only one
     * item
     */
    createSectionView: function (section) {
      

      var view = new DynamicContainer({
        name: section.slug + '-list',
        collection: section.collection,
        viewFactory: this.viewFactory(section),
        hidden: true
      });

      section.view = view;

      return view;
    },

    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection;

        if (!collection || collection.length === 0) {
          
          return this.createEmptyElement(section, collection);
        }

        if (section.outputType === 'photo') {
          
          return this.createListElement(section);
        }

        if (collection.length === 1) {
          
          return this.createDetailContainer(section, true);
        }

        

        var list = this.createListElement(section);
        var detail = this.createDetailContainer(section);

        var view = this.createListAndDetailView(list, detail);

        return view;
      }, this);
    },

    createListAndDetailView: function(list, detail) {
    },

    /**
     * Refreshes a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    refreshList: function(section, container) {
      
      section.collection.fetch({
        dataSourceQuery: {
          nocache: true
        },
        success: _.bind(function() {
          this.showList(section, container);
        }, this),
        error: function (err) {
          
        }
      });
    },

    /**
     * Updates a section list.
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    updateList: function(section, container) {
      
      section.collection.fetch({
        success: _.bind(function() {
          this.showList(section, container);
        }, this),
        error: function (err) {
          
        }
      });
    },

    /**
     * Displays a section list
     * (assuming the section is already active).
     *
     * @function
     * @param {Object} the list section
     * @parma {Backbone.View} the section container
     */
    showList: function(section, container) {
      if (container.view.children && container.view.children.list) {
        
        container.view.showChild('list', 'left');
      }
      else if (section.collection.length) {
        
        container.setModel(section.collection.at(0), true);
      }
    },

    /**
     * Moves focus to the list view
     * (for views that have separate list and a detail sub-views)
     *
     * @function
     * @param {Backbone.View} the section container
     */
    moveToList: function(container) {
      if (container.view.children && container.view.children.list) {
        
        container.view.showChild('list', 'left');
      }
    },

    /**
     * Updates a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    updateDetail: function(section, container, offset) {
      
      section.collection.fetch({
        success: _.bind(function() {
          this.showDetail(section, container, offset);
        }, this),
        error: function (err) {
          
        }
      });
    },

    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      if(container.view.children && container.view.children.detail) {
        var detail = container.view.children.detail;

        if(section.collection.length > offset) {

          detail.setModel(section.collection.at(offset), true);

        }

        container.view.showChild('detail', 'right');
      }
    },


    /**
     * Creates the element to use to represent an empty collection for
     * the given section. The collection may be empty because items have
     * not yet been fetched or because it is empty.
     *
     * The collection should be given as parameter to let the view render
     * a spinner while the collection is being fetched.
     */
    createEmptyElement: function (section, collection) {
      section = section || {};
      

      var viewOptions = {
        name: section.slug + '-empty',
        model: new Backbone.Model(),
        template: templateEmpty
      };

      if (collection && !collection.fetched) {
        viewOptions.className = 'loading';
      }

      var emptyView = new Item(viewOptions);

      if (collection && !collection.fetched) {
        emptyView.listenTo(collection, 'load', function () {
          emptyView.$el.removeClass('loading');
        });
      }

      return emptyView;
    },


    /**
     * Creates the element to use to represent a list of items
     * for the given section.
     *
     * Default implement creates a List linked to the
     * template-list-view template.
     *
     * Override this function in derivated classes to add
     * specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createListElement: function(section) {
      section = section || {};

      if (section.outputType === 'photo') {
        
        var isSingle = (section.collection.length > 1) ? '' : 'single';
        var t = isSingle ? this.templates.singlePhoto : this.templates.listView;
        return new ImageGallery({
          name: section.slug + '-list',
          template: t,
          scroller: true,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: isSingle + ' ' + section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          dataLoadingClass: 'dataloading',
          dataLoadingMoreClass: 'dataloadingmore',
          loadingClass: 'loading',
          autoLoadMore: true
        });
      }
      else {
        
        return new List({
          name: section.slug + '-list',
          template: this.templates.listView,
          scroller: true,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' +
            this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingClass: 'dataloading',
          dataLoadingMoreClass: 'dataloadingmore'
        });
      }
    },


    /**
     * Creates the container element for the detail view of the given section.
     *
     * Default implementation creates a DynamicContainer that uses
     * createDetailElement to select the right UI element to create
     * for the item to render. No detail view for 'photo' streams.
     *
     * Override this function in derivated class as necessary.
     *
     * @function
     * @param {Object} section Section to render
     * @param {bool} whether this is a detail view for a single page
     * @return {UIElement} The container element to use.
     *  Null when section does not have any associated detail view
     *  (or when the detail view is managed by dedicated code)
     */
    createDetailContainer: function(section, isSingle) {
      var self = this;
      section = section || {};

      
      return new DynamicContainer({
        name: section.slug + '-detail',
        viewFactory: function (options) {
          // Delegate the creation to createDetailElement
          _.extend(options, { slug: section.slug });
          return self.createDetailElement(options, isSingle);
        },
        className: self.getClassName(section, isSingle ? 'single' : 'detail')
      });
    },


    /**
     * Creates the element to use to represent an item for the given section.
     *
     * Default implement creates a List linked to the
     * template-list-view template.
     *
     * Override this function in derivated classes to add
     * specific logic.
     *
     * @function
     * @param {Object} options Rendering options
     * @return {UIElement} The element to use.
     */
    createDetailElement: function(options) {


      options = options || {};
      if (!options.model) {
        
        return new Item({});
      }

      var itemType = this.convertItemType(options.model.get('@type'));
      var self = this;

      
      switch (itemType) {
      case 'video':
        return new FactoryMedia({
          name: 'item-' + itemType,
          template: this.templates.video,
          scroller: true,
          scrollerSelector: '.wrapper',
          width: self.getContentWidth(),
          height: self.getContentHeight(),
          mediaOptions: {
            strategy: 'html5',
            width: '100%',
            height: '80%',
            adjustSize: true
          }
        });
      case 'sound':
        return new FactoryMedia({
          name: 'item-' + itemType,
          template: this.templates.sound,
          mediaOptions: {
            strategy: 'html5'
          }
        });
      case 'status':

        var statusView = new ImagesLoader({
          name: 'item-' + itemType,
          scrollerSelector: '.joshfire-wrapper',
          template: this.templates.status,
          scroller: true,
          imageSchema: self.getAuthorImageSchema(options.model.toJSON())
        });

        mentionsView = [];

        var sectionSlug = options.slug.search('twitter');

        if(options.model.get('mentions') && sectionSlug === -1) {
          _.each(options.model.get('mentions'),function(mention) {
            var mentionView = self.createMentionView(mention);
            if(mentionView){
              mentionsView.push(mentionView);
            }
          });

          statusView.on('enhanced', function() {
            _.each( mentionsView , function(mentionView) {
              mentionView.el.className = 'attached-media';
              mentionView.render();
              mentionView.on('load', function() {
                statusView.iScroller.refresh();
              });
              statusView.$('.attached-medias').append(mentionView.el);
              statusView.iScroller.refresh();
            });

          });
        }


        return statusView;

      case 'photo':
      case 'product':
      case 'other':
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates[itemType],
          scroller: true,
          imageSchema: options.model.toJSON()
        });

      case 'news':
        if (options.model.get('articleBody')) {
          var body = options.model.get('articleBody').replace(/\n|\r\n/g,'<br>');
          options.model.set('articleBody', body, {silent: true});
        }
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates.news,
          scroller: true,
          imageClass: 'fadein',
          imageSchema: options.model.toJSON()
        });
      default:
        return new ImagesLoader({
          name: 'item-' + itemType,
          template: this.templates[itemType],
          scroller: true,
          imageClass: 'fadein',
          imageSchema: options.model.toJSON(),
          processImageEl: function (el) {
            // Prepare image container and spinner
            var loader = document.createElement('div');
            loader.setAttribute('class', 'loader inv');
            var container = document.createElement('div');
            container.setAttribute('class', 'figure');
            container.appendChild(loader);

            // Constrain container width to the width of the image if known
            // so that the loader appears correctly centered on screen.
            // (it would always appear at the center of the screen otherwise)
            if (el.getAttribute('width')) {
              container.setAttribute('style',
                'width:' + el.getAttribute('width') + 'px;max-width:100%');
            }
            else {
              container.setAttribute('style',
                'width:' + el.getAttribute('width') + 'px;max-width:100%');
            }

            // Wrap the image in its container and return the container
            el.parentNode.replaceChild(container, el);
            container.appendChild(el);
            return container;
          }
        });
      }
    },

    createMentionView: function(mention) {

      var self = this;
      var model = new Backbone.Model(mention);

      switch ( mention['@type'] ) {
        case 'ImageObject':
          

          return new ImagesLoader( {
            model: model,
            template: this.templates.mentionItem,
            imageSchema: model.toJSON()
          } );

        case 'VideoObject':
          
          return new FactoryMedia({
            model: model,
            scroller: true,
            template: this.templates.video,
            width: self.getContentWidth(),
            height: self.getContentHeight(),
            mediaOptions: {
              strategy: 'html5',
              width: '100%',
              height: '80%',
              adjustSize: true
            }
          } );

        default:
          if (mention.name && mention.description) {
            return new ImagesLoader( {
              model: model,
              template: this.templates.mentionItem,
              imageSchema: model.toJSON()
            } );
          } else {
            return false;
          }
      }

    },

    listItemFactory: function (section) {
      var self = this;

      return function (model, offset) {
        
        var item = model.toJSON(),
          type = section.outputType || self.convertItemType(item['@type']),
          className = type + '-item';
        var params = {
          name: 'itemwrapper-' + type,
          model: model,
          offset: offset,
          view: this.itemFactory(model, offset),
          className: className
        };

        return new ListItem(params);
      };
    },

    //
    // Creates a list item view based on the type of the item.
    //
    itemFactory: function (section) {
      section = section || {};
      

      var self = this;

      return function (model, offset) {
        var item = model.toJSON();
        var type = section.outputType || self.convertItemType(item['@type']);
        var template = self.templates[type + 'Item'];

        var options = {
          name: section.slug + '-item-' + offset + '-' + type,
          data: { section: section },
          model: model,
          offset: offset,
          template: template
        };

        

        switch(type) {
        case 'photo':
        case 'video':
        case 'product':
        case 'news':
          options.imageSchema = options.model.toJSON();
          options.imageContainer = '.figure';
          return new ImagesLoader(options);

        case 'status':
          options.imageSchema = self.getAuthorImageSchema(item);
          options.imageContainer = '.figure';
          return new ImagesLoader(options);

        default:
          return new Item(options);
        }
      };
    },


    /**
     * Create routes for all created views.
     *
     * Function stub that only handles the home page.
     * Override this function in derivated classes.
     *
     * @function
     * @param {Array(Object)} sections The list of sections that compose the app
     * @param {Object} Created views identified by their ID
     * @return {Object} Route controllers
     */
    createRoutes: function(sections, views) {
      
      return {
        routes: {
          '': 'home'
        },

        home: function() {
          if (sections.length) {
            window.location = '#' + sections[0].slug;
          }
          else {
            $('#title').html('No data');
            document.body.id = 'nodata';
            $('#refresh').hide();
          }
        }
      };
    },


    /**
     * Returns the width that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The width available in CSS pixels
     */
    getContentWidth: function() {
      return Math.floor($('#cards').width());
    },


    /**
     * Returns the height that is available for detailed views.
     *
     * The function is used in particular to tell the media factory the
     * maximum width it may use.
     *
     * @function
     * @return {integer} The height available in CSS pixels
     */
    getContentHeight: function() {
      return Math.floor($('#cards').height());
    },

    /**
     * Sets the global language of the app.
     *
     * @function
     * @param {string} locale || auto ; should be sent by the factory
     * @return {null}
     */
    setMomentLanguage: function() {
      // en is the default lang here, move along
      if(this.localizer.getLocale() === 'en') return;
      window.Sid.js('lang/moment/' + this.localizer.getLocale() + '.js',
        _.bind(function() {
          moment.lang(this.localizer.getLocale());
        }, this)
      );
    },


    /**
     * Returns a data schema with the image of the item's author.
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best matches the viewport size
     */
    getAuthorImageSchema: function(item) {
      if (item && item.author && item.author[0]) {
        console.warn(item.author[0]);
        return item.author[0];
      }
      return item;
    },

    /**
     * Returns a data schema with the mention of the item's author.
     *
     * @function
     * @param {object} item schema.org friendly object to parse
     * @return {string} Thumbnail URL that best matches the viewport size
     */
    getAuthorMentionSchema: function(item) {
      if (item && item.mentions && item.mentions[0]) {
        return item.mentions;
      }
      return item;
    },


    slugify: function(text) {
      text = text.replace(/[^\-a-zA-Z0-9,&\s]+/ig, '');
      text = text.replace(/-/gi, '_');
      text = text.replace(/\s/gi, '-');
      text = text.replace(/&/gi, '-');
      return text;
    }
  });

  return Sleek;
});

/**
 * @fileoverview Custom Sleek implementation that extends the base
 * Sleek class with additional functionality.
 *
 * Use this file in templates that derivate from Sleek to store
 * specific code for the template.
 */

/*global define*/

define('sleek.custom',['sleek'], function (Sleek) {
  return Sleek;
});

/*global define, Joshfire, document, window, Backbone*/

define('sleek.tv',[
  'sleek.custom',
  'joshlib!uielement',
  'joshlib!ui/list',
  'joshlib!ui/toolbar',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'joshlib!ui/verticallist',
  'joshlib!ui/grid',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'ui/imagesloader',
  'ui/itemTvMention',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'require'
], function (
  Sleek,
  UIElement,
  UIList,
  Toolbar,
  CardPanel,
  SlidePanel,
  VerticalList,
  Grid,
  Item,
  FactoryMedia,
  ImagesLoader,
  ItemTvMention,
  _, $,
  woodman) {

  

  return Sleek.extend({
    initialize: function (opt) {
      var self = this;
      var $win = $(window);

      var resize = function() {
        $('body').css({
          zoom: Math.max(50, $win.height() / 10.80) + '%'
        });
      };

      $win.resize(resize);
      resize();

      Sleek.prototype.initialize.call(this, opt, function () {
        if (self.backgroundURL) {
          self.setBackground(self.backgroundURL);
        }

        if (self.logoURL) {
          self.setLogo(self.logoURL);
        } else {
          self.setTitle(self.title);
        }
      });
    },


    /**
     * The code is specific to TV
     */
    deviceFamily: 'tv',

    setLogo: function(url) {
      $('#logo').html('<img src="' + url + '" />');
    },

    setBackground: function(url) {
      $('body').css({
        backgroundImage: 'url(' + url + ')'
      });
    },


    /**
     * Creates the toolbar UI element.
     * Overrides base function to return a Toolbar element.
     *
     * @function
     * @return {UIElement} The toolbar UI element to use
     */
    createToolbarElement: function() {
      
      var self = this;
      var toolbar = new Toolbar({
        name: 'toolbar',
        el: '#toolbar',
        template: this.templates.toolbar,
        itemOptions: {
          template: this.templates.toolbarItem
        },
        minLengthToShow: 2
      });

      toolbar.navFocus = function(origin, event) {
        
        UIList.prototype.navFocus.call(this, origin, event);

        if(!event && this.active === -1 && this.collection.length) {
          this.activate(0);
        }

        self.focused = 'toolbar';
      },

      toolbar.navRight = function() {
        
        if(self.activeSection && self.activeSection.collection.length) {
          var container = self.activeSection.view;
          if(container.view) {
            var view = container.view;

            if(view.children && view.children.list) {
              view.children.list.navFocus(self.toolbarView);
            } else {
              view.navFocus(self.toolbarView);
            }
            self.focused = 'list';
          }
        }
      };

      return toolbar;
    },


    /**
     * Retrieves the classname(s) to use to flag an item in a list
     * or the detail element that represents the item.
     *
     * Overrides base method.
     *
     * @function
     * @param {string} itemType itemType The section's output type
     */
    getClassName: function (itemType, context) {
      if (context === 'list') {
        return 'content';
      }
      else if(context === 'single') {
        return 'single content detail';
      }
      else {
        return 'content detail';
      }
    },

    /**
     * Creates additional views: photo and video overlays
     *
     * Overrides base function with TV-specific logic.
     *
     * @function
     * @param {Object} views Views of the application, to complete with
     *   additional views created by the function (keys are views IDs)
     */
    createAdditionalViews: function(views) {
      var self = this;

      // Photo overlay
      var PhotoOverlay = ImagesLoader.extend({
        initialize: function(options) {
          ImagesLoader.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navAction = this.exit;
          this.offset = options.offset;
        },

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        },

        navLeft: function() {
          var newOffset = this.offset - 1;
          if (newOffset < 0) {
            newOffset = self.activeSection.collection.length - 1;
          }

          // Search for the previous image in the feed
          // (this may not be the item right before this one if feed includes
          // mixed content)
          while ((newOffset !== this.offset) &&
            (self.activeSection.collection.at(newOffset).get('@type') !== 'ImageObject')) {
            newOffset = newOffset - 1;
            if(newOffset < 0) {
              newOffset = self.activeSection.collection.length - 1;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        },

        navRight: function() {
          var newOffset = this.offset + 1;
          if (newOffset >= self.activeSection.collection.length) {
            newOffset = 0;
          }

          // Search for the previous image in the feed
          // (this may not be the item right after this one if feed includes
          // mixed content)
          while ((newOffset !== this.offset) &&
            (self.activeSection.collection.at(newOffset).get('@type') !== 'ImageObject')) {
            newOffset = newOffset + 1;
            if (newOffset >= self.activeSection.collection.length) {
              newOffset = 0;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        }
      });

      this.photoDetail = new PhotoOverlay({
        el: '#photos-detail',
        template: this.templates.photo
      });

      this.photoDetail.render();
      this.photoDetail.hide();

      // Video overlay
      var VideoOverlay = FactoryMedia.extend({
        initialize: function(options) {
          FactoryMedia.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
        },

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        }
      });

      this.videoDetail = new VideoOverlay({
        el: '#videos-detail',
        template: this.templates.video,
        mediaOptions: {
          width: '100%',
          height: '100%',
          autoPlay: true,
          html5: true
        }
      });

      this.videoDetail.render();
      this.videoDetail.hide();
      Sleek.prototype.createAdditionalViews.call(this, views);
    },


    /**
     * Creates the element to use to represent a list of items
     * for the given section.
     *
     * Overrides base function with TV specific logic.
     *
     * @function
     * @param {Object} section Section to render
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createListElement: function(section, isSingle) {
      section = section || {};

      

      var tpl;
      switch (section.outputType) {
      case 'video':
        tpl = isSingle ? this.templates.singleVideo : this.templates.mosaic;
      case 'photo':
        if (!tpl) {
          tpl = isSingle ? this.templates.singlePhoto : this.templates.mosaic;
        }

        return new Grid({
          template: tpl,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingMoreClass: 'dataloadingmore'
        });

      default:

        return new VerticalList({
          template: this.templates.listView,
          offsetTop: 40,
          offsetBottom: 40,
          itemFactory: this.itemFactory(section),
          listItemFactory: this.listItemFactory(section),
          collection: section.collection,
          className: section.outputType + ' ' + this.getClassName(section.outputType, 'list'),
          autoLoadMore: true,
          dataLoadingMoreClass: 'dataloadingmore'
        });
      }
    },

    /**
     * Must create a list + detail view for a section.
     *
     * @param {Backbone.View} the list view
     * @param {Backbone.View} the detail view
     * @return {Backbone.View} the section viex
     */
    createListAndDetailView: function(list, detail) {
      
      var view = new SlidePanel({
        children: {
          list: list,
          detail: detail
        },
        currentChild: 'list',
        className: 'slide-panel'
      });

      return view;
    },


    /**
     * Returns a factory method used to create the right view for a list.
     *
     * Depending on the number of collections, the factory method either
     * returns an empty view, a detailed view, or a container that includes
     * a listing view and a detailed view.
     */
    viewFactory: function(section) {
      return _.bind(function(params) {
        var collection = params.collection;
        var list = null;
        var detail = null;
        var view = null;

        if (!collection || collection.length === 0) {
          
          return this.createEmptyElement(section, collection);
        }

        if (collection.length === 1) {
          if ((section.outputType === 'photo') ||
            (section.outputType === 'video')) {
            
            return this.createDetailContainer(section, true);
          }
          else {
            
            list = this.createListElement(section, true);
            detail = this.createDetailContainer(section);
            view = this.createListAndDetailView(list, detail);

            list.$el.addClass('single');
            return view;
          }
        }

        if (section.outputType === 'photo') {
          
          return this.createListElement(section);
        }

        
        list = this.createListElement(section);
        detail = this.createDetailContainer(section);
        view = this.createListAndDetailView(list, detail);

        return view;
      }, this);
    },

    showList: function(section, container) {
      Sleek.prototype.showList.call(this, section, container);

      if (this.toolbarView.items.length < this.toolbarView.minLengthToShow) {
        if(container.view) {
          var view = container.view;
          if(view.children && view.children.list) {
            
            view.children.list.navFocus();
          } else {
            
            view.navFocus();
          }
          this.focused = 'list';
        }
      }
    },

    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      var detail = null;
      var showChild = false;

      if (section.collection.length > offset) {

        switch(section.outputType) {
        case 'photo':
          
          detail = this.photoDetail;
          detail.offset = offset;
          detail.data = {
            getImageUrl: function() {
              return this.model.get('contentURL');
            }
          };
          break;
        case 'video':
          
          detail = this.videoDetail;
          detail.offset = offset;
          break;
        default:
          if(container.view.children && container.view.children.detail) {
            
            detail = container.view.children.detail;
            showChild = true;
          }
        }

        if (detail) {
          detail.setModel(section.collection.at(offset), true);
          detail.navFocus();
          if (showChild) {
            container.view.showChild('detail', 'right');
          }
          else {
            detail.show();
          }
        }
      }
    },

    /**
     * Creates the element to use to represent an item for the given section.
     *
     * Overrides base function with TV specific logic.
     *
     * @function
     * @param {Object} options Rendering options
     * @return {UIElement} The element to use. May include a detailed view.
     */
    createDetailElement: function(params, isSingle) {
      if(!params.model) {
        return new Item({});
      }
      var self = this;
      var itemType = this.convertItemType(params.model.get('@type'));

      var options = {
        template: this.templates[itemType+'Detail'],
        scroller: true,
        offsetTop: 100,
        offsetBottom: 100,
        focusSubElements: true,
        navLeft: _.bind(function() {
          if(isSingle) {
            this.toolbarView.navFocus();
            this.focused = 'toolbar';
          } else {
            window.location = '#' + params.slug;
          }
        }, this)
      };
      switch (itemType) {
      case 'video':
      case 'photo':
        return null;
      case 'sound':
        params.mediaOptions = {
          strategy: 'html5',
          autoPlay: true
        };

        return new FactoryMedia(params);

      case 'status':

        var statusView;

        mentionViews = [];

        var sectionSlug = params.slug.search('twitter');

        if(params.model.get('mentions') && sectionSlug === -1) {
          _.each(params.model.get('mentions'),function(mention) {
            var mentionView = self.createMentionView(mention);
            if(mentionView){
              mentionViews.push(mentionView);
            }
          });
          options.videoDetail = this.videoDetail;
          options.mentions = mentionViews;

          statusView = new ItemTvMention(options);

          statusView.on('enhanced', function() {


            _.each( mentionViews , _.bind(function(mentionView, i) {
              mentionView.el.className = 'attached-media';
              mentionView.render();

              // If the mentionView is an Image, it will trigger a load
              mentionView.on('load', _.bind(function() {

                this.offsetTop=+ mentionView.el.clientHeight;

              }, this));


              statusView.$('.attached-medias').append(mentionView.el);

              if(mentionView.model.get('@type') !== 'ImageObject'){
                this.offsetTop += mentionView.el.clientHeight;
              }

            }, this));
          });
        }

        return statusView;

      default:
        return new Item(options);
      }
    },

    createMentionView: function(mention) {

      var self = this;
      var model = new Backbone.Model(mention);

      switch ( mention['@type'] ) {
        case 'ImageObject':
          

          return new ImagesLoader( {
            model: model,
            template: this.templates.mentionItem,
            imageSchema: model.toJSON()
          } );

        case 'VideoObject':
          var videoImage = _.find(model.get('thumbnail'), function(image){
            return image.width == 480;
          });

          if (videoImage) {

            model.set( { "image": videoImage } );
          } else {

            model.set( { "image": _.last(model.get('thumbnail') )} );
          }

          return new ImagesLoader( {
              model: model,
              template: this.templates.mentionVideo,
              imageSchema: model.toJSON()
          } );

        default:
          if (mention.name && mention.description) {
            return new ImagesLoader( {
              model: model,
              template: this.templates.mentionItem,
              imageSchema: model.toJSON()
            } );
          } else {
            return false;
          }
      }

    },


    //
    // Creates routes
    //
    createRoutes: function(sections, views) {
      var controllers = Sleek.prototype.createRoutes.call(this, sections, views);
      var self = this;
      var toolbar = this.toolbarView;

      _.forEach(sections, function (section) {
        controllers.routes[section.slug] = section.slug;

        // List route
        controllers[section.slug] = function() {
          self.activeSection = section;
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();

          var container = self.activeSection.view;
          if (section.collection.length) {
            self.moveToList(container);
            views.showChild(section.slug);
          } else {
            views.showChild(section.slug);
            self.updateList(section, container);
          }

          toolbar.activate(self.activeSection.index);

          var view;

          if(toolbar.active === -1 || !self.activeSection.collection.length) {
            toolbar.navFocus();
            self.focused = 'toolbar';
          } else if(self.focused !== 'toolbar') {
            if(container.view) {
              view = container.view;
              if(view.children && view.children.list) {
                view.children.list.navFocus(self.toolbarView);
              } else {
                view.navFocus(self.toolbarView);
              }

              self.focused = 'list';
            }
          }
        };

        // Detail route
        controllers.routes[section.slug + '/:offset'] = section.slug + 'Detail';

        controllers[section.slug + 'Detail'] = function(offset) {
          offset = parseInt(offset, 10);
          self.activeSection = section;
          document.body.id = section.outputType;
          $('iframe, audio, video, object, embed', '#container').remove();

          views.showChild(section.slug);
          var container = self.activeSection.view;
          if (section.collection.length) {
            self.showDetail(section, container, offset);
          } else {
            self.updateDetail(section, container, offset);
          }

          self.focused = 'detail';
        };
      });

      return controllers;
    }

  });
});

/**
 * @fileoverview Simple image loader view.
 *
 * Use this view to render a spinner while an image is loaded in the
 * background. The view simply adds a "loading" class name to the view's
 * element, delegating possible transitions and spinners to CSS.
 *
 * Pass a "getImageUrl" function as an option so that the view may
 * compute the URL to be loaded in the background.
 *
 * Pass an "imageContainer" property to pass the optional selector to the
 * element that is to receive the "loading" class.
 *
 * The image URL is passed to the view's template as an "imageUrl" parameter.
 *
 * Internally, this view extends ImagesLoader to provide shortcuts to handle
 * only one image.
 */

define('joshfire-framework/ui/imageloader',[
  'joshlib!ui/imagesloader',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n'
], function (UIImagesLoader, _, i18n) {

  var UIImageLoader = UIImagesLoader.extend({

    initialize: function(options) {
      // Build the "getImages" function for the underlying ImagesLoader
      // class using getImageUrl and imageContainer.

      // Set the getImageUrl function if given as parameter,
      // look for an imageUrl on the underlying view's model otherwise
      this.getImageUrl = options.getImageUrl || function() {
        if(!this.model) return null;
        return this.model.imageUrl;
      };

      var self = this;
      options.getImages = function () {
        var $el = null;
        if (options.imageContainer) {
          $el = self.$(options.imageContainer);
        }
        if (!$el) {
          $el = self.$el;
        }
        return [{
          el: $el.get(0),
          url: self.getImageUrl()
        }];
      };

      // Call the base class constructor
      UIImagesLoader.prototype.initialize.call(this, options);
    },

    /**
     * Override default generate function to expose the imageUrl parameter
     *
     * @function
     */
    generate: function(cb) {
      if (!this.model) { cb(null, ''); return; }

      var context = {
        model:    this.model,
        obj:      this.model,
        item:     this.model ? this.model.toJSON() : {},
        imageUrl: this.getImageUrl.call(this),
        T:        i18n.getText
      };
      _.extend(context, this.data);

      cb(null, this.template(context));
    }
  });

  return UIImageLoader;
});
/*global define, Joshfire, document, window, Backbone, sf, onYouTubePlayerReady:true*/

define('sleek.samsung',[
  'sleek.custom',
  'sleek.tv',
  'joshlib!collection',
  'joshlib!uielement',
  'joshlib!ui/list',
  'joshlib!ui/toolbar',
  'joshlib!ui/cardpanel',
  'joshlib!ui/slidepanel',
  'joshlib!ui/verticallist',
  'joshlib!ui/grid',
  'joshlib!ui/item',
  'joshlib!ui/factorymedia',
  'joshlib!ui/imageloader',
  'joshlib!inputs/remote',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'require',
  'collections/samsungImageObjects'
], function (
  Sleek,
  TVSleek,
  Collection,
  UIElement,
  List,
  Toolbar,
  CardPanel,
  SlidePanel,
  VerticalList,
  Grid,
  Item,
  FactoryMedia,
  ImageLoader,
  Remote,
  _, $,
  woodman,
  ImageObjectCollection) {

  

  /**
   * The Samsung TV version derives from the default TV version.
   *
   * IMPORTANT:
   * Keeping the amount of specific code that is needed for the template to
   * run on Samsung TVs to a bare minimum is good practice. Please think twice
   * (or more!) before adding a line ot code to that file!
   */
  return TVSleek.extend({
    initialize: function (opt) {
      // Note the class extends the TV version but calls the "initialize"
      // function of the base Sleek class, because the TV version would break
      // the layout on Samsung TV (the zoom feature in particular)
      var self = this;
      Sleek.prototype.initialize.call(this, opt, function () {
        // Adds a class on the body if we're on 2011 SDK
        self.setFrameworkVersionTag();
        // Handle remote events
        self.handleSamsungRemote();

        if (self.backgroundURL) {
          self.setBackground(self.backgroundURL);
        }

        if (self.logoURL) {
          self.setLogo(self.logoURL);
        } else {
          self.setTitle(self.title);
        }
      });
    },

    // a factory method to create the collections.
    // in the samsung case we have to create a specific one for
    // image ds, in order to filter out heavy images
    // (which have a tendency to brutally murder the TV firmware.)
    createCollection: function(datasource) {
      datasource = datasource || {};
      

      if(datasource.config.outputType === 'ImageObject') {
        return new ImageObjectCollection([], {
          dataSource: datasource,
          dataSourceQuery: {}
        });
      }
      else {
        return new Collection([], {
          dataSource: datasource,
          dataSourceQuery: {}
        });
      }
    },

    /**
     * The code is specific to TV
     */
    deviceFamily: 'samsung',


    setColor: function(color, callback) {
      if(!this.colorSet) {
        this.colorSet = true;
        $('#color').remove();
        if (typeof sf !== 'undefined' && sf.core) {
          sf.core.loadCSS('css/' + this.deviceFamily + '.' + color + '.css');
          callback();
        } else {
          var style = document.getElementsByTagName('style')[0];
          var linkNode = document.createElement('link');
          linkNode.type = 'text/css';
          linkNode.rel = 'stylesheet';
          linkNode.href = 'css/' + this.deviceFamily + '.' + color + '.css';
          if (style && style.nextSibling) {
            style.parentNode.insertBefore(linkNode, style.nextSibling);
          } else {
            document.getElementsByTagName('body')[0].appendChild(linkNode);
          }
          callback();
        }
      }
    },


    /**
     * Creates additional views: photo and video overlays
     *
     * Overrides base function with TV-specific logic.
     *
     * @function
     * @param {Object} views Views of the application, to complete with
     *   additional views created by the function (keys are views IDs)
     */
    createAdditionalViews: function(views) {
      var self = this;

      // Photo overlay
      var PhotoOverlay = Item.extend({
        initialize: function(options) {
          Item.prototype.initialize.call(this, options);
          this.navUp = this.navDown = this.navAction = this.exit;
          this.offset = options.offset;
        },

        setContent: function (html) {
          if (window.widgetAPI) {
            window.widgetAPI.putInnerHTML(this.el, html);
          }
          else {
            this.el.innerHTML = html;
          }
          this.rendered = true;
        },

        hide: function () {
          Item.prototype.hide.call(this);
          $('#' + this.el.id).css({
            display: 'none'
          });
        },

        show: function() {
          Item.prototype.show.call(this);

          self.bind('back', _.bind(this.exit, this));

          $('#' + this.el.id).css({
            display: 'block',
            visibility: 'visible',
            position: 'absolute',
            width: 960,
            height: 540,
            zIndex: 99,
            top: 0,
            left: 0,
            background: '#000'
          });
        },

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        },

        navLeft: function() {
          var newOffset = this.offset - 1;
          if (newOffset < 0) {
            newOffset = self.activeSection.collection.length - 1;
          }

          // Search for the previous image in the feed
          // (this may not be the item right before this one if feed includes
          // mixed content)
          // Samsung2011 : do not put complex instructions in the loop
          // condition. Infinite-like effect.
          while (newOffset !== this.offset) {
            var newtype = self.activeSection.collection.at(newOffset).get('@type');

            if(newtype === 'ImageObject') break;
            newOffset = newOffset - 1;
            if(newOffset < 0) {
              newOffset = self.activeSection.collection.length - 1;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        },

        navRight: function() {
          var newOffset = this.offset + 1;
          if (newOffset >= self.activeSection.collection.length) {
            newOffset = 0;
          }

          // Search for the previous image in the feed
          // (this may not be the item right after this one if feed includes
          // mixed content)
          while ((newOffset !== this.offset) &&
            (self.activeSection.collection.at(newOffset).get('@type') !== 'ImageObject')) {
            newOffset = newOffset + 1;
            if (newOffset >= self.activeSection.collection.length) {
              newOffset = 0;
            }
          }

          if (newOffset !== this.offset) {
            window.location = '#' +  self.activeSection.slug + '/' + newOffset;
          }
        }
      });

      this.photoDetail = new PhotoOverlay({
        name: 'photo-overlay',
        el: '#photos-detail',
        template: this.templates.photo,
        getImageUrl: function() {
          if(this.model.get('contentURL'))
            return this.model.get('contentURL');
          else
            return self.getThumbnailUrl(this.model.toJSON());
        }
      });

      this.photoDetail.render();
      this.photoDetail.hide();

      // Video overlay
      var VideoOverlay = FactoryMedia.extend({
        initialize: function(options) {
          FactoryMedia.prototype.initialize.call(this, options);

          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
        },

        show: function() {
          FactoryMedia.prototype.show.call(this);

          $('#' + this.el.id).css({
            display: 'block',
            visibility: 'visible',
            position: 'absolute',
            width: 960,
            height: 540,
            zIndex: 99,
            top: 0,
            left: 0,
            background: '#000'
          });
          $('object, embed', '#' + this.el.id).css({
            display: 'block'
          });
        },

        hide: function() {
          FactoryMedia.prototype.hide.call(this);
          $('#' + this.el.id).css({
            display: 'none'
          });
        },

        exit: function() {
          this.hide();
          window.location = '#' + self.activeSection.slug;
        }
      });
      this.videoDetail = new VideoOverlay({
        name: 'video-overlay',
        el: '#videos-detail',
        template: this.templates.video,
        mediaOptions: {
          width: '100%',
          height: '100%',
          autoPlay: true,
          html5: true
        }
      });
      this.videoDetail.render();
      this.videoDetail.hide();



      var YoutubeOverlay = UIElement.extend({
        initialize: function(opt) {
          UIElement.prototype.initialize.call(this, opt);
          this.player = this.$(opt.playerEl)[0];
          this.navUp = this.navDown = this.navLeft = this.navRight = this.navAction = this.exit;
        },
        setModel: function(model, update) {
          this.model = model;
          if (update) {
            this.render();
          }
        },
        render: function() {
          var vId = this.model ? this.model.get('url').split('v=').pop() : '';

          if(this.playerReady && this.player && this.player.loadVideoById) {
            this.player.loadVideoById(vId);
            this.player.playVideo();
          }

          onYouTubePlayerReady = _.bind(function() {
            this.playerReady = true;
            this.player.loadVideoById(vId);
            this.player.playVideo();
          }, this);
          this.rendered = true;
        },
        show: function() {
          UIElement.prototype.show.call(this);

          self.bind('back', _.bind(this.exit, this));

          $(this.el).css({
            display: 'block',
            visibility: 'visible',
            position: 'absolute',
            width: 960,
            height: 540,
            zIndex: 99,
            top: 0,
            left: 0,
            background: '#000'
          });
        },

        hide: function() {
          self.unbind('back');
          UIElement.prototype.hide.call(this);
          $(this.el).css({
            display: 'none',
            width: 0,
            height: 0,
            overflow: 'hidden',
            top: 540,
            left: 960
          });
        },
        exit: function() {
          this.hide();
          this.player.stopVideo();
          window.location = '#' + self.activeSection.slug;
        }
      });
      this.youtubeDetail = new YoutubeOverlay({
        name: 'youtube-overlay',
        el: '#youtube-detail',
        playerEl: 'object'
      });
      this.youtubeDetail.render();
      this.youtubeDetail.hide();

      this.navHelper = new List({
        name: 'navhelper',
        el: '#navHelper',
        itemOptions: {
          template: this.templates.navhelperItem
        },
        collection: new Backbone.Collection([
          {
            className: 'exit',
            name: 'exit'
          },
          {
            className: 'back',
            name: 'return'
          },
          {
            className: 'action',
            name: 'action'
          },
          {
            className: 'navigate',
            name: 'navigate'
          }
        ])
      });
      this.navHelper.render();

      Sleek.prototype.createAdditionalViews.call(this, views);
    },


    /**
     * Displays a section item detail.
     *
     * @function
     * @param {Object} the detail section
     * @parma {Backbone.View} the section container
     */
    showDetail: function(section, container, offset) {
      var detail = null;
      var showChild = false;
      var self = this;

      if(section.collection.length > offset) {
        switch (section.outputType) {
        case 'photo':
          
          detail = this.photoDetail;
          detail.offset = offset;
          break;
        case 'video':
          
          var m = section.collection.at(offset);
          var url = m.get('url');
          if(m.get('contentURL') && m.get('contentURL')) {
            url = m.get('contentURL')[0];
          }

          if(url.indexOf('youtube') > -1) {
            detail = this.youtubeDetail;
          }
          else {
            detail = this.videoDetail;
          }
          detail.offset = offset;
          break;
        default:
          if(container.view.children && container.view.children.detail) {
            
            detail = container.view.children.detail;
            self.bind('back', function() {
              detail.navLeft();
              self.unbind('back');
            });
            // Remove objects / videos / audio (Samsung style)
            $('object, audio, video, embed, iframe', container.view.children.detail.el).remove();
            showChild = true;
          }
        }

        if (detail) {
          detail.setModel(section.collection.at(offset), true);
          detail.navFocus();
          if (showChild) {
            container.view.showChild('detail', 'right');
          }
          else {
            detail.show();
          }
        }
      }
    },


    /**
     * Returns the URL of a thumbnail of an image object.
     *
     * Overrides base function with TV specific rules.
     *
     * @function
     * @param {object} item VideoObject to parse
     * @return {string} Thumbnail URL that best match the viewport size
     */
    getThumbnailUrl: function(item, offset) {
      // Arbitrary samsung width
      return Joshfire.schemaio.utils.getThumbnailUrl(item, 240);
    },

    setFrameworkVersionTag: function() {
      if(this.is2011()) {
        $('body').addClass('sdk2011');
      }
    },

    handleSamsungRemote: function() {
      if(!this.samsungKeysBound) {
        this.remote = new Remote();
        this.remote.unbind('press:back');
        this.remote.bind('press:back', _.bind(this.goBack, this));

        this.samsungKeysBound = true;

        this.remote.bind('press:up press:down press:left press:right', function (e) {
          var el = document.getElementById('dummysamsungdiv');
          if (window.widgetAPI && window.widgetAPI.putInnerHTML) {
            window.widgetAPI.putInnerHTML(el, 'samsungsucks');
            console.log('Did put inner html');
          }
        });
      }
    },

    goBack: function(e) {
      e.preventDefault();

      var h = document.location.hash;
      h = h.split('/');
      if(h.length > 1) {
        this.trigger('back');
      } else {
        window.widgetAPI.sendReturnEvent();
      }

      return false;
    },

    is2011: function() {
      var firmware = (document.getElementById('pluginObjectNNavi').GetFirmware)?document.getElementById('pluginObjectNNavi').GetFirmware():null;
      if(typeof firmware === 'string' && firmware.indexOf('2011') > -1)
        return true;
      return false;
    },
    is2012: function() {
      var firmware = (document.getElementById('pluginObjectNNavi').GetFirmware)?document.getElementById('pluginObjectNNavi').GetFirmware():null;
      if(typeof firmware === 'string' && firmware.indexOf('2012') > -1)
        return true;
      return false;
    }
  });
});

/**
 * Adapted from the official plugin text.js
 *
 * Uses UnderscoreJS micro-templates : http://documentcloud.github.com/underscore/#template
 * @author Julien Cabanès <julien@zeeagency.com>
 * @version 0.2
 *
 * @license RequireJS text 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*jslint regexp: false, nomen: false, plusplus: false, strict: false */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false */

(function () {
  var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],

    xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,

    bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,

    buildMap = [],

    templateSettings = {
      evaluate  : /<%([\s\S]+?)%>/g,
      interpolate : /<%=([\s\S]+?)%>/g
    },

    /**
     * JavaScript micro-templating, similar to John Resig's implementation.
     * Underscore templating handles arbitrary delimiters, preserves whitespace,
     * and correctly escapes quotes within interpolated code.
     */
    template = function(str, data) {
      var c  = templateSettings;
      var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' +
        'with(obj||{}){__p.push(\'' +
        str.replace(/\\/g, '\\\\')
          .replace(/'/g, "\\'")
          .replace(c.interpolate, function(match, code) {
          return "'," + code.replace(/\\'/g, "'") + ",'";
          })
          .replace(c.evaluate || null, function(match, code) {
          return "');" + code.replace(/\\'/g, "'")
                    .replace(/[\r\n\t]/g, ' ') + "; __p.push('";
          })
          .replace(/\r/g, '')
          .replace(/\n/g, '')
          .replace(/\t/g, '')
          + "');}return __p.join('');";
      return tmpl;

      /** /
      var func = new Function('obj', tmpl);
      return data ? func(data) : func;
      /**/
    };

  define('tpl',[],function () {
    var tpl;

    var get, fs;
    if (typeof window !== "undefined" && window.navigator && window.document) {
      get = function (url, callback) {

        var xhr = tpl.createXhr();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function (evt) {
          //Do not explicitly handle errors, those should be
          //visible via console output in the browser.
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.send(null);
      };
    } else if (typeof process !== "undefined" &&
        process.versions &&
        !!process.versions.node) {
      //Using special require.nodeRequire, something added by r.js.
      fs = require.nodeRequire('fs');

      get = function (url, callback) {

        callback(fs.readFileSync(url, 'utf8'));
      };
    }
    return tpl = {
      version: '0.24.0',
      strip: function (content) {
        //Strips <?xml ...?> declarations so that external SVG and XML
        //documents can be added to a document without worry. Also, if the string
        //is an HTML document, only the part inside the body tag is returned.
        if (content) {
          content = content.replace(xmlRegExp, "");
          var matches = content.match(bodyRegExp);
          if (matches) {
            content = matches[1];
          }
        } else {
          content = "";
        }

        return content;
      },

      jsEscape: function (content) {
        return content.replace(/(['\\])/g, '\\$1')
          .replace(/[\f]/g, "\\f")
          .replace(/[\b]/g, "\\b")
          .replace(/[\n]/g, "")
          .replace(/[\t]/g, "")
          .replace(/[\r]/g, "");
      },

      createXhr: function () {
        //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
        var xhr, i, progId;
        if (typeof XMLHttpRequest !== "undefined") {
          return new XMLHttpRequest();
        } else {
          for (i = 0; i < 3; i++) {
            progId = progIds[i];
            try {
              xhr = new ActiveXObject(progId);
            } catch (e) {}

            if (xhr) {
              progIds = [progId];  // so faster next time
              break;
            }
          }
        }

        if (!xhr) {
          throw new Error("require.getXhr(): XMLHttpRequest not available");
        }

        return xhr;
      },

      get: get,

      load: function (name, req, onLoad, config) {

        //Name has format: some.module.filext!strip
        //The strip part is optional.
        //if strip is present, then that means only get the string contents
        //inside a body tag in an HTML string. For XML/SVG content it means
        //removing the <?xml ...?> declarations so the content can be inserted
        //into the current doc without problems.

        var strip = false, url, index = name.indexOf("."),
          modName = name.substring(0, index),
          ext = name.substring(index + 1, name.length);

        index = ext.indexOf("!");

        if (index !== -1) {
          //Pull off the strip arg.
          strip = ext.substring(index + 1, ext.length);
          strip = strip === "strip";
          ext = ext.substring(0, index);
        }

        //Load the tpl.
        url = 'nameToUrl' in req ? req.nameToUrl(modName, "." + ext) : req.toUrl(modName + "." + ext);

        tpl.get(url, function (content) {
          content = template(content);

          if(!config.isBuild) {
          //if(typeof window !== "undefined" && window.navigator && window.document) {
            content = new Function('obj', content);
          }
          content = strip ? tpl.strip(content) : content;

          if (config.isBuild && config.inlineText) {
            buildMap[name] = content;
          }
          onLoad(content);
        });

      },

      write: function (pluginName, moduleName, write) {
        if (moduleName in buildMap) {
          var content = tpl.jsEscape(buildMap[moduleName]);
          write("define('" + pluginName + "!" + moduleName  +
              "', function() {return function(obj) { " +
                content.replace(/(\\')/g, "'").replace(/(\\\\)/g, "\\")+
              "}});\n");
        }
      }
    };
    return function() {};
  });
//>>excludeEnd('excludeTpl')
}());
define('tpl!templates/samsung/contactIndex.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="body">', textContent ,'</div>');}return __p.join('');}});

define('tpl!templates/samsung/contactMap.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="google-map"></div>');}return __p.join('');}});

define('tpl!templates/samsung/event.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">    '); if (item.startDate && item.endDate && (item.startDate !== item.endDate)) { ; __p.push('    From ', moment(toDate(item.startDate)).format('LLLL') ,' to ', moment(toDate(item.endDate)).format('LLLL') ,'    '); } else if (item.startDate) { ; __p.push('    On ', moment(toDate(item.startDate)).format('LLLL') ,'  '); } ; __p.push('  </div>  <div class="body">    <h4>', item.name ,'</h4>    '); if(item.description) { ; __p.push('      <p class="description">', item.description ,'</p>    '); } ; __p.push('    '); if(item.location && item.location.name) { ; __p.push('      <p class="location">', item.location.name ,'</p>    '); } ; __p.push('  </div></div>');}return __p.join('');}});

define('tpl!templates/samsung/eventItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div class="item-content">      <h3>', item.name || item.description ,'</h3>    </div>    <div class="far-left">      <p>', moment(toDate(item.startDate)).calendar() ,'</p>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/listView.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div style="" class="list-container">  <div class="list-indicator"></div>  <ul style="position: absolute;" class="jflist">    ', children ,'  </ul></div><div class="loader large"><p class="s2011 spinnermessage">Loading</p></div>');}return __p.join('');}});

define('tpl!templates/samsung/mapOverlay.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p class="map-overlay">', address ,'</p>');}return __p.join('');}});

define('tpl!templates/samsung/mentionItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push(''); if( item.image ) { ; __p.push('   <img data-joshfire-autothumb="true"/>'); } ; __p.push(''); if( item.contentURL ) { ; __p.push('  <img data-joshfire-autothumb="true"/>'); } ; __p.push(''); if( item.datePublished) { ; __p.push('  <h3>',  moment(toDate(item.datePublished)).format('LLLL') ,'</h3>'); } ; __p.push(''); if( item.name && item["@type"] !== "ImageObject") { ; __p.push('  <h4>', item.name ,'</h4>'); } ; __p.push(''); if( item.description ) { ; __p.push('  <div class="article">    ', item.description ,'  </div>'); } ; __p.push(''); if( item.author ) { ; __p.push('  <span>', item.author.name ,'</span>'); } ; __p.push('');}return __p.join('');}});

define('tpl!templates/samsung/news.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">    ', item.name ,'  </div>  <div class="body">    '); if (item.datePublished || item.uploadDate || item.dateCreated) { ; __p.push('    <h4>', moment(toDate(item.datePublished || item.uploadDate || item.dateCreated)).format('LLLL') ,'</h4>    '); } ; __p.push('    '); if (item.articleBody) { ; __p.push('    ', item.articleBody ,'    '); } else if (item.description) { ; __p.push('    ', item.description ,'    '); } ; __p.push('  </div></div>');}return __p.join('');}});

define('tpl!templates/samsung/newsItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div class="item-content">      '); if (item.image && item.image.contentURL) { ; __p.push('        <span class="thumbnail" style="background-image:url(', thumbnail(200,130) ,')"></span>      '); } ; __p.push('      <h3>', item.name || item.description ,'</h3>    </div>    <div class="far-left">      <p>        '); if (item.datePublished || item.uploadDate || item.dateCreated) { ; __p.push('        ', moment(toDate(item.datePublished || item.uploadDate || item.dateCreated)).fromNow() ,'        '); } ; __p.push('      </p>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/other.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">', item.name ,'</div>  <div class="body">    '); if (imageUrl) { ; __p.push('      <div class="center"><img data-joshfire-autothumb="true" alt="" /></div>    '); } ; __p.push('    '); if (item.articleBody) { ; __p.push('    ', item.articleBody ,'    '); } else if (item.description) { ; __p.push('    ', item.description ,'    '); } ; __p.push('  </div></div>');}return __p.join('');}});

define('tpl!templates/samsung/otherItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div>      <h4>', item.name || item.description ,'</h4>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/photo.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="image" style="background-image: url(', item.contentURL ,')"></div><div class="spinner"><p class="s2011 spinnermessage">Loading</p></div>');}return __p.join('');}});

define('tpl!templates/samsung/photoItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="container">  <div class="image" data-joshfire-autothumb="true">    <a class="image-link" href="#', section.slug ,'/', offset ,'" title="', item.name ,'">&nbsp;</a>  </div>  '); if (item.name) { ; __p.push('  <div class="caption">', item.name ,'</div>  '); } ; __p.push('</div>');}return __p.join('');}});

define('tpl!templates/samsung/product.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">', item.name ,'</div>  <div class="body">    '); if (imageUrl) { ; __p.push('      <div class="center"><img data-joshfire-autothumb="true" alt="" /></div>    '); } ; __p.push('    '); if (item.articleBody) { ; __p.push('    ', item.articleBody ,'    '); } else if (item.description) { ; __p.push('    ', item.description ,'    '); } ; __p.push('    '); if (item.offers && item.offers[0] && item.offers[0].price) { ; __p.push('    <div class="offer">Price: ', (item.offers[0].priceCurrency === 'EUR') ? '€' : ((item.offers[0].priceCurrency === 'GBP') ? '₤' : '$') ,'', item.offers[0].price ,'</div>    '); } ; __p.push('  </div></div>');}return __p.join('');}});

define('tpl!templates/samsung/productItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div>      <h4>        ', item.name ,'        '); if (item.offers && item.offers[0] && item.offers[0].price) {  ; __p.push('          <span class="offer">', (item.offers[0].priceCurrency === 'EUR') ? '€' : ((item.offers[0].priceCurrency === 'GBP') ? '₤' : '$') ,'', item.offers[0].price ,'</span>        '); } ; __p.push('      </h4>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/mosaicSinglePhoto.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul class="mosaic">',children,'</ul>');}return __p.join('');}});

define('tpl!templates/samsung/sound.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">    '); if(item.thumbnail && item.thumbnail.length) { ; __p.push('    <div class="image" data-joshfire-autothumb="true"></div>    '); } ; __p.push('    <div class="title"><p>'); if (item.byArtist && item.byArtist.name) { ; __p.push(' by ', item.byArtist.name ,'    '); } else if (item.author && item.author.name) { ; __p.push(' by ', item.author.name ,''); } ; __p.push('</p></div>  </div>  <div class="body">    '); if (item.datePublished || item.uploadDate || item.dateCreated) { ; __p.push('      <h4>', moment(toDate(item.datePublished || item.uploadDate || item.dateCreated)).format('LLLL') ,'</h4>    '); } ; __p.push('    <div class="media">', media.html ,'</div>    '); if(item.description) { ; __p.push('    <p>', item.description ,'</p>    '); } ; __p.push('  </div></div>');}return __p.join('');}});

define('tpl!templates/samsung/soundItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div>      '); if (item.byArtist && item.byArtist.name) { ; __p.push('        <h3>', item.byArtist.name ,'</h3>      '); } else if (item.author && item.author.name) { ; __p.push('        <h3>', item.author.name ,'</h3>      '); } ; __p.push('      <h4>', item.name || item.description ,'</h4>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/status.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <div class="head">    <div class="image" data-joshfire-autothumb="true"></div>    <div class="title">      <p>      '); if (item.author && item.author[0] && item.author[0].name) { ; __p.push('      ', item.author[0].name ,'<br />      '); } ; __p.push('      '); if (item.datePublished || item.uploadDate || item.dateCreated) { ; __p.push('      ', moment(toDate(item.datePublished || item.uploadDate || item.dateCreated)).fromNow() ,'      '); } ; __p.push('      </p>    </div>  </div>  <p>', prettyStatus(item.name) ,'</p>  <div class="attached-medias"></div></div>');}return __p.join('');}});

define('tpl!templates/samsung/statusItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div>  <a href="#', section.slug ,'/', offset ,'">    <div class="left">      <div class="image" style="background-image: url(', thumbnail(48,48) ,')"></div>    </div>    <div class="right"><div class="item-content">      <h3>', item.name ,'</h3>    </div></div>    <div class="far-left">      <p>        '); if (item.author && item.author[0] && item.author[0].name) { ; __p.push('          ', item.author[0].name ,'<br />        '); } ; __p.push('        '); if (item.datePublished || item.uploadDate || item.dateCreated) { ; __p.push('        ', moment(toDate(item.datePublished || item.uploadDate || item.dateCreated)).fromNow() ,'        '); } ; __p.push('      </p>    </div>  </a></div>');}return __p.join('');}});

define('tpl!templates/samsung/toolbar.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="logo"></div><ul>  ', children ,'</ul><div class="highlight"></div>');}return __p.join('');}});

define('tpl!templates/samsung/toolbarItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="', item.linkURL ,'" class="', (item.name.toLowerCase() === 'contact') ? 'contact' : item.icon ,' section-', item.slug ,'">  ', item.name ,'</a>');}return __p.join('');}});

define('tpl!templates/samsung/videoItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="container">  <div class="image" data-joshfire-autothumb="true">    <a class="video-link" href="#', section.slug ,'/', offset ,'" title="', item.name ,'">&nbsp;</a>  </div>  '); if (item.name) { ; __p.push('  <div class="caption">', item.name ,'</div>  '); } ; __p.push('  <div class="spinner"><p class="s2011 spinnermessage">Loading</p></div></div>');}return __p.join('');}});

define('tpl!templates/samsung/mosaicSingleVideo.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push(''); var m = collection.at(0).toJSON() || {} ; __p.push(''); var pub = new moment(m.datePublished); ; __p.push(''); var min = m.duration.split('M')[0].split('H').pop(); min.length < 2 ? min = '0' + min : min ; __p.push(''); var sec = m.duration.split('S')[0].split('M').pop(); sec.length < 2 ? sec = '0' + sec : sec ; __p.push('<ul class="mosaic">  ', children ,'</ul><img class="playbutton" src="images/tv-play.png" width="31" height="43" /><div class="header">  <div class="thumb">    <img data-joshfire-autothumb="true">    <span class="duration">',min,':',sec,'</span>  </div>  <h1>',m.name,'</h1>  <p class="description">',m.description,'</p>  '); if(m.author && m.author.length) { ; __p.push('<a class="author">',m.author[0].name,'</a> '); } ; __p.push('  '); if(pub) { ; __p.push('  <a class="date">',pub.format('DD/MM/YYYY'),'</a>  '); } ; __p.push('</div>');}return __p.join('');}});

define('tpl!templates/samsung/navhelperItem.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li class="', item.className ,'">', item.name ,'</li>');}return __p.join('');}});

define('tpl!templates/samsung/mosaic.ejs', function() {return function(obj) { var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul class="mosaic">  ', children ,'</ul>');}return __p.join('');}});

require.config({
  paths: {
    tpl: 'vendor/tpl'
  }
});

define('app.tv.samsung',[
  'sleek.samsung',
  'joshlib!utils/onready',
  'tpl!templates/samsung/contactIndex.ejs',
  'tpl!templates/samsung/contactMap.ejs',
  'tpl!templates/samsung/event.ejs',
  'tpl!templates/samsung/eventItem.ejs',
  'tpl!templates/samsung/listView.ejs',
  'tpl!templates/samsung/mapOverlay.ejs',
  'tpl!templates/samsung/mentionItem.ejs',
  'tpl!templates/samsung/news.ejs',
  'tpl!templates/samsung/newsItem.ejs',
  'tpl!templates/samsung/other.ejs',
  'tpl!templates/samsung/otherItem.ejs',
  'tpl!templates/samsung/photo.ejs',
  'tpl!templates/samsung/photoItem.ejs',
  'tpl!templates/samsung/product.ejs',
  'tpl!templates/samsung/productItem.ejs',
  'tpl!templates/samsung/mosaicSinglePhoto.ejs',
  'tpl!templates/samsung/sound.ejs',
  'tpl!templates/samsung/soundItem.ejs',
  'tpl!templates/samsung/status.ejs',
  'tpl!templates/samsung/statusItem.ejs',
  'tpl!templates/samsung/toolbar.ejs',
  'tpl!templates/samsung/toolbarItem.ejs',
  'tpl!templates/samsung/videoItem.ejs',
  'tpl!templates/samsung/mosaicSingleVideo.ejs',
  'tpl!templates/samsung/navhelperItem.ejs',
  'tpl!templates/samsung/mosaic.ejs'
], function (
  Sleek,
  onReady,
  tplContactIndex,
  tplContactMap,
  tplEvent,
  tplEventItem,
  tplListView,
  tplMapOverlay,
  tplMentionItem,
  tplNews,
  tplNewsItem,
  tplOther,
  tplOtherItem,
  tplPhoto,
  tplPhotoItem,
  tplProduct,
  tplProductItem,
  tplSinglePhoto,
  tplSound,
  tplSoundItem,
  tplStatus,
  tplStatusItem,
  tplToolbar,
  tplToolbarItem,
  tplVideoItem,
  tplSingleVideo,
  tplNavhelperItem,
  tplMosaic
) {
  var sleek = new Sleek();
  window.app = sleek;
  onReady(function () {
    sleek.initialize({
      templates: {
        contactIndex  : tplContactIndex,
        contactMap    : tplContactMap,
        event         : tplEvent,
        eventItem     : tplEventItem,
        listView      : tplListView,
        mapOverlay    : tplMapOverlay,
        mentionItem   : tplMentionItem,
        mosaic        : tplMosaic,
        navhelperItem : tplNavhelperItem,
        news          : tplNews,
        newsItem      : tplNewsItem,
        other         : tplOther,
        otherItem     : tplOtherItem,
        photo         : tplPhoto,
        photoItem     : tplPhotoItem,
        product       : tplProduct,
        productItem   : tplProductItem,
        singlePhoto   : tplSinglePhoto,
        singleVideo   : tplSingleVideo,
        sound         : tplSound,
        soundItem     : tplSoundItem,
        status        : tplStatus,
        statusItem    : tplStatusItem,
        toolbar       : tplToolbar,
        toolbarItem   : tplToolbarItem,
        videoItem     : tplVideoItem
      }
    });
  });
});
