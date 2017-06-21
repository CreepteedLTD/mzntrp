/*! scroll-scope.js 0.1.0, MIT
 https://github.com/Eiskis/scroll-scope
 */
jQuery&&!function(e){"use strict";var t=function(t){var n=this;n.mainContainer=null,n.selector=null,n.settings=e.extend({elements:"[data-scroll-scope]",forcedElements:'[data-scroll-scope="force"]',events:"DOMMouseScroll mousewheel scroll touchstart touchmove"},t&&(t.elements||t.forcedElements||t.events)?t:{}),n.getTargetedElements=function(){return n.mainContainer.find(n.selector)},n.getSelector=function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&e[n].length&&t.push(e[n]);return t.length?t.join(", "):null},n.normalizeJqueryObject=function(t){return t?t instanceof jQuery?t:e(t):null},n.killScrolling=function(e,t){return t||"touchmove"!==e.type&&"touchstart"!==e.type?(e.preventDefault(),e.stopPropagation(),e.returnValue=!1,!1):void 0},n.onScroll=function(t){if(t.isLegitScroll)return!0;var o=e(this),l=n.settings.forcedElements&&o.is(n.settings.forcedElements),r=this.scrollHeight,i=o.outerHeight(),s=r-i-this.scrollTop;if(i>=r)return l&&"touchstart"!==t.type?n.killScrolling(t,l):!0;var c=t.originalEvent.wheelDelta;l&&"undefined"==typeof c&&"touchstart"===t.type&&(this.scrollTop<=0?o.scrollTop(1):0>=s&&o.scrollTop(r-i-1));var u=c>0;return!u&&-c>s?(o.scrollTop(this.scrollHeight),n.killScrolling(t,l)):u&&c>this.scrollTop?(o.scrollTop(0),n.killScrolling(t,l)):(t.isLegitScroll=!0,!0)},n.unbind=function(){return n.mainContainer&&n.mainContainer.off(n.settings.events,n.selector,n.onScroll),n},n.bind=function(e){return e=n.normalizeJqueryObject(e),e&&n.unbind(),n.mainContainer=e,n.mainContainer.on(n.settings.events,n.selector,n.onScroll),n},n.settings.elements=n.getSelector([n.settings.elements]),n.settings.forcedElements=n.getSelector([n.settings.forcedElements]),n.selector=n.getSelector([n.settings.elements,n.settings.forcedElements])};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:(window.ScrollScope=t,function(e){e.fn.scrollScope=function(e){var n=new t(e);return n.bind(this),n.mainContainer}}(e))}(jQuery);