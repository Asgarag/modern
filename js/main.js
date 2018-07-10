/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

$(".header__button").click(function() {
    $(".menu__list").toggleClass("menu__list--active");
});
$(".menu__close").click(function() {
    $(".menu__list").removeClass("menu__list--active");
});

/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&(console.log("update called"),this.update())},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){
    this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

$(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["",""],
    responsiveClass: true,
    responsive:{
        0:{
            items: 1
        },
        500:{
            items: 2
        },
        900:{
            items: 4
        }
    }
});

$(".header__contacts-button").click(function () {
    $("#subscription").addClass('modal--active');
    return false;
});

$(".subscription__button").click(function () {
    $(".modal").removeClass('modal--active');
    $("#callback").addClass('modal--active');
    return false;
});

$(".modal__close").click(function () {
    $(".modal").removeClass('modal--active');
});

$(".modal").on('click',function(event) {
    if ($(this).is(event.target)) {
        $(".modal").removeClass('modal--active');
    }
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
        /*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
        (function (root, factory) {
            if (typeof define === 'function' && define.amd) {
                define(factory);
            } else if (typeof exports === 'object') {
                module.exports = factory();
            } else {
                root.PhotoSwipe = factory();
            }
        })(this, function () {

            'use strict';
            var PhotoSwipe = function(template, UiClass, items, options){

                /*>>framework-bridge*/
                /**
                 *
                 * Set of generic functions used by gallery.
                 *
                 * You're free to modify anything here as long as functionality is kept.
                 *
                 */
                var framework = {
                    features: null,
                    bind: function(target, type, listener, unbind) {
                        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
                        type = type.split(' ');
                        for(var i = 0; i < type.length; i++) {
                            if(type[i]) {
                                target[methodName]( type[i], listener, false);
                            }
                        }
                    },
                    isArray: function(obj) {
                        return (obj instanceof Array);
                    },
                    createEl: function(classes, tag) {
                        var el = document.createElement(tag || 'div');
                        if(classes) {
                            el.className = classes;
                        }
                        return el;
                    },
                    getScrollY: function() {
                        var yOffset = window.pageYOffset;
                        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
                    },
                    unbind: function(target, type, listener) {
                        framework.bind(target,type,listener,true);
                    },
                    removeClass: function(el, className) {
                        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                    },
                    addClass: function(el, className) {
                        if( !framework.hasClass(el,className) ) {
                            el.className += (el.className ? ' ' : '') + className;
                        }
                    },
                    hasClass: function(el, className) {
                        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
                    },
                    getChildByClass: function(parentEl, childClassName) {
                        var node = parentEl.firstChild;
                        while(node) {
                            if( framework.hasClass(node, childClassName) ) {
                                return node;
                            }
                            node = node.nextSibling;
                        }
                    },
                    arraySearch: function(array, value, key) {
                        var i = array.length;
                        while(i--) {
                            if(array[i][key] === value) {
                                return i;
                            }
                        }
                        return -1;
                    },
                    extend: function(o1, o2, preventOverwrite) {
                        for (var prop in o2) {
                            if (o2.hasOwnProperty(prop)) {
                                if(preventOverwrite && o1.hasOwnProperty(prop)) {
                                    continue;
                                }
                                o1[prop] = o2[prop];
                            }
                        }
                    },
                    easing: {
                        sine: {
                            out: function(k) {
                                return Math.sin(k * (Math.PI / 2));
                            },
                            inOut: function(k) {
                                return - (Math.cos(Math.PI * k) - 1) / 2;
                            }
                        },
                        cubic: {
                            out: function(k) {
                                return --k * k * k + 1;
                            }
                        }
                        /*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
                    },

                    /**
                     *
                     * @return {object}
                     *
                     * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
                     *
                     */
                    detectFeatures: function() {
                        if(framework.features) {
                            return framework.features;
                        }
                        var helperEl = framework.createEl(),
                            helperStyle = helperEl.style,
                            vendor = '',
                            features = {};

                        // IE8 and below
                        features.oldIE = document.all && !document.addEventListener;

                        features.touch = 'ontouchstart' in window;

                        if(window.requestAnimationFrame) {
                            features.raf = window.requestAnimationFrame;
                            features.caf = window.cancelAnimationFrame;
                        }

                        features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

                        // fix false-positive detection of old Android in new IE
                        // (IE11 ua string contains "Android 4.0")

                        if(!features.pointerEvent) {

                            var ua = navigator.userAgent;

                            // Detect if device is iPhone or iPod and if it's older than iOS 8
                            // http://stackoverflow.com/a/14223920
                            //
                            // This detection is made because of buggy top/bottom toolbars
                            // that don't trigger window.resize event.
                            // For more info refer to _isFixedPosition variable in core.js

                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                                if(v && v.length > 0) {
                                    v = parseInt(v[1], 10);
                                    if(v >= 1 && v < 8 ) {
                                        features.isOldIOSPhone = true;
                                    }
                                }
                            }

                            // Detect old Android (before KitKat)
                            // due to bugs related to position:fixed
                            // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

                            var match = ua.match(/Android\s([0-9\.]*)/);
                            var androidversion =  match ? match[1] : 0;
                            androidversion = parseFloat(androidversion);
                            if(androidversion >= 1 ) {
                                if(androidversion < 4.4) {
                                    features.isOldAndroid = true; // for fixed position bug & performance
                                }
                                features.androidVersion = androidversion; // for touchend bug
                            }
                            features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

                            // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
                        }

                        var styleChecks = ['transform', 'perspective', 'animationName'],
                            vendors = ['', 'webkit','Moz','ms','O'],
                            styleCheckItem,
                            styleName;

                        for(var i = 0; i < 4; i++) {
                            vendor = vendors[i];

                            for(var a = 0; a < 3; a++) {
                                styleCheckItem = styleChecks[a];

                                // uppercase first letter of property name, if vendor is present
                                styleName = vendor + (vendor ?
                                    styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                                    styleCheckItem);

                                if(!features[styleCheckItem] && styleName in helperStyle ) {
                                    features[styleCheckItem] = styleName;
                                }
                            }

                            if(vendor && !features.raf) {
                                vendor = vendor.toLowerCase();
                                features.raf = window[vendor+'RequestAnimationFrame'];
                                if(features.raf) {
                                    features.caf = window[vendor+'CancelAnimationFrame'] ||
                                        window[vendor+'CancelRequestAnimationFrame'];
                                }
                            }
                        }

                        if(!features.raf) {
                            var lastTime = 0;
                            features.raf = function(fn) {
                                var currTime = new Date().getTime();
                                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                                var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
                                lastTime = currTime + timeToCall;
                                return id;
                            };
                            features.caf = function(id) { clearTimeout(id); };
                        }

                        // Detect SVG support
                        features.svg = !!document.createElementNS &&
                            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

                        framework.features = features;

                        return features;
                    }
                };

                framework.detectFeatures();

// Override addEventListener for old versions of IE
                if(framework.features.oldIE) {

                    framework.bind = function(target, type, listener, unbind) {

                        type = type.split(' ');

                        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
                            evName,
                            _handleEv = function() {
                                listener.handleEvent.call(listener);
                            };

                        for(var i = 0; i < type.length; i++) {
                            evName = type[i];
                            if(evName) {

                                if(typeof listener === 'object' && listener.handleEvent) {
                                    if(!unbind) {
                                        listener['oldIE' + evName] = _handleEv;
                                    } else {
                                        if(!listener['oldIE' + evName]) {
                                            return false;
                                        }
                                    }

                                    target[methodName]( 'on' + evName, listener['oldIE' + evName]);
                                } else {
                                    target[methodName]( 'on' + evName, listener);
                                }

                            }
                        }
                    };

                }

                /*>>framework-bridge*/

                /*>>core*/
//function(template, UiClass, items, options)

                var self = this;

                /**
                 * Static vars, don't change unless you know what you're doing.
                 */
                var DOUBLE_TAP_RADIUS = 25,
                    NUM_HOLDERS = 3;

                /**
                 * Options
                 */
                var _options = {
                    allowPanToNext:true,
                    spacing: 0.12,
                    bgOpacity: 1,
                    mouseUsed: false,
                    loop: true,
                    pinchToClose: true,
                    closeOnScroll: true,
                    closeOnVerticalDrag: true,
                    verticalDragRange: 0.75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: false,
                    focus: true,
                    escKey: true,
                    arrowKeys: true,
                    mainScrollEndFriction: 0.35,
                    panEndFriction: 0.35,
                    isClickableElement: function(el) {
                        return el.tagName === 'A';
                    },
                    getDoubleTapZoom: function(isMouseClick, item) {
                        if(isMouseClick) {
                            return 1;
                        } else {
                            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
                        }
                    },
                    maxSpreadZoom: 1.33,
                    modal: true,

                    // not fully implemented yet
                    scaleMode: 'fit'
                };
                framework.extend(_options, options);


                /**
                 * Private helper variables & functions
                 */

                var _getEmptyPoint = function() {
                    return {x:0,y:0};
                };

                var _isOpen,
                    _isDestroying,
                    _closedByScroll,
                    _currentItemIndex,
                    _containerStyle,
                    _containerShiftIndex,
                    _currPanDist = _getEmptyPoint(),
                    _startPanOffset = _getEmptyPoint(),
                    _panOffset = _getEmptyPoint(),
                    _upMoveEvents, // drag move, drag end & drag cancel events array
                    _downEvents, // drag start events array
                    _globalEventHandlers,
                    _viewportSize = {},
                    _currZoomLevel,
                    _startZoomLevel,
                    _translatePrefix,
                    _translateSufix,
                    _updateSizeInterval,
                    _itemsNeedUpdate,
                    _currPositionIndex = 0,
                    _offset = {},
                    _slideSize = _getEmptyPoint(), // size of slide area, including spacing
                    _itemHolders,
                    _prevItemIndex,
                    _indexDiff = 0, // difference of indexes since last content update
                    _dragStartEvent,
                    _dragMoveEvent,
                    _dragEndEvent,
                    _dragCancelEvent,
                    _transformKey,
                    _pointerEventEnabled,
                    _isFixedPosition = true,
                    _likelyTouchDevice,
                    _modules = [],
                    _requestAF,
                    _cancelAF,
                    _initalClassName,
                    _initalWindowScrollY,
                    _oldIE,
                    _currentWindowScrollY,
                    _features,
                    _windowVisibleSize = {},
                    _renderMaxResolution = false,

                    // Registers PhotoSWipe module (History, Controller ...)
                    _registerModule = function(name, module) {
                        framework.extend(self, module.publicMethods);
                        _modules.push(name);
                    },

                    _getLoopedId = function(index) {
                        var numSlides = _getNumItems();
                        if(index > numSlides - 1) {
                            return index - numSlides;
                        } else  if(index < 0) {
                            return numSlides + index;
                        }
                        return index;
                    },

                    // Micro bind/trigger
                    _listeners = {},
                    _listen = function(name, fn) {
                        if(!_listeners[name]) {
                            _listeners[name] = [];
                        }
                        return _listeners[name].push(fn);
                    },
                    _shout = function(name) {
                        var listeners = _listeners[name];

                        if(listeners) {
                            var args = Array.prototype.slice.call(arguments);
                            args.shift();

                            for(var i = 0; i < listeners.length; i++) {
                                listeners[i].apply(self, args);
                            }
                        }
                    },

                    _getCurrentTime = function() {
                        return new Date().getTime();
                    },
                    _applyBgOpacity = function(opacity) {
                        _bgOpacity = opacity;
                        self.bg.style.opacity = opacity * _options.bgOpacity;
                    },

                    _applyZoomTransform = function(styleObj,x,y,zoom,item) {
                        if(!_renderMaxResolution || (item && item !== self.currItem) ) {
                            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
                        }

                        styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
                    },
                    _applyCurrentZoomPan = function( allowRenderResolution ) {
                        if(_currZoomElementStyle) {

                            if(allowRenderResolution) {
                                if(_currZoomLevel > self.currItem.fitRatio) {
                                    if(!_renderMaxResolution) {
                                        _setImageSize(self.currItem, false, true);
                                        _renderMaxResolution = true;
                                    }
                                } else {
                                    if(_renderMaxResolution) {
                                        _setImageSize(self.currItem);
                                        _renderMaxResolution = false;
                                    }
                                }
                            }


                            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
                        }
                    },
                    _applyZoomPanToItem = function(item) {
                        if(item.container) {

                            _applyZoomTransform(item.container.style,
                                item.initialPosition.x,
                                item.initialPosition.y,
                                item.initialZoomLevel,
                                item);
                        }
                    },
                    _setTranslateX = function(x, elStyle) {
                        elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
                    },
                    _moveMainScroll = function(x, dragging) {

                        if(!_options.loop && dragging) {
                            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                                delta = Math.round(x - _mainScrollPos.x);

                            if( (newSlideIndexOffset < 0 && delta > 0) ||
                                (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
                                x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
                            }
                        }

                        _mainScrollPos.x = x;
                        _setTranslateX(x, _containerStyle);
                    },
                    _calculatePanOffset = function(axis, zoomLevel) {
                        var m = _midZoomPoint[axis] - _offset[axis];
                        return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
                    },

                    _equalizePoints = function(p1, p2) {
                        p1.x = p2.x;
                        p1.y = p2.y;
                        if(p2.id) {
                            p1.id = p2.id;
                        }
                    },
                    _roundPoint = function(p) {
                        p.x = Math.round(p.x);
                        p.y = Math.round(p.y);
                    },

                    _mouseMoveTimeout = null,
                    _onFirstMouseMove = function() {
                        // Wait until mouse move event is fired at least twice during 100ms
                        // We do this, because some mobile browsers trigger it on touchstart
                        if(_mouseMoveTimeout ) {
                            framework.unbind(document, 'mousemove', _onFirstMouseMove);
                            framework.addClass(template, 'pswp--has_mouse');
                            _options.mouseUsed = true;
                            _shout('mouseUsed');
                        }
                        _mouseMoveTimeout = setTimeout(function() {
                            _mouseMoveTimeout = null;
                        }, 100);
                    },

                    _bindEvents = function() {
                        framework.bind(document, 'keydown', self);

                        if(_features.transform) {
                            // don't bind click event in browsers that don't support transform (mostly IE8)
                            framework.bind(self.scrollWrap, 'click', self);
                        }


                        if(!_options.mouseUsed) {
                            framework.bind(document, 'mousemove', _onFirstMouseMove);
                        }

                        framework.bind(window, 'resize scroll', self);

                        _shout('bindEvents');
                    },

                    _unbindEvents = function() {
                        framework.unbind(window, 'resize', self);
                        framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
                        framework.unbind(document, 'keydown', self);
                        framework.unbind(document, 'mousemove', _onFirstMouseMove);

                        if(_features.transform) {
                            framework.unbind(self.scrollWrap, 'click', self);
                        }

                        if(_isDragging) {
                            framework.unbind(window, _upMoveEvents, self);
                        }

                        _shout('unbindEvents');
                    },

                    _calculatePanBounds = function(zoomLevel, update) {
                        var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
                        if(update) {
                            _currPanBounds = bounds;
                        }
                        return bounds;
                    },

                    _getMinZoomLevel = function(item) {
                        if(!item) {
                            item = self.currItem;
                        }
                        return item.initialZoomLevel;
                    },
                    _getMaxZoomLevel = function(item) {
                        if(!item) {
                            item = self.currItem;
                        }
                        return item.w > 0 ? _options.maxSpreadZoom : 1;
                    },

                    // Return true if offset is out of the bounds
                    _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
                        if(destZoomLevel === self.currItem.initialZoomLevel) {
                            destPanOffset[axis] = self.currItem.initialPosition[axis];
                            return true;
                        } else {
                            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

                            if(destPanOffset[axis] > destPanBounds.min[axis]) {
                                destPanOffset[axis] = destPanBounds.min[axis];
                                return true;
                            } else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
                                destPanOffset[axis] = destPanBounds.max[axis];
                                return true;
                            }
                        }
                        return false;
                    },

                    _setupTransforms = function() {

                        if(_transformKey) {
                            // setup 3d transforms
                            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
                            _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
                            _translateSufix = _features.perspective ? ', 0px)' : ')';
                            return;
                        }

                        // Override zoom/pan/move functions in case old browser is used (most likely IE)
                        // (so they use left/top/width/height, instead of CSS transform)

                        _transformKey = 'left';
                        framework.addClass(template, 'pswp--ie');

                        _setTranslateX = function(x, elStyle) {
                            elStyle.left = x + 'px';
                        };
                        _applyZoomPanToItem = function(item) {

                            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                s = item.container.style,
                                w = zoomRatio * item.w,
                                h = zoomRatio * item.h;

                            s.width = w + 'px';
                            s.height = h + 'px';
                            s.left = item.initialPosition.x + 'px';
                            s.top = item.initialPosition.y + 'px';

                        };
                        _applyCurrentZoomPan = function() {
                            if(_currZoomElementStyle) {

                                var s = _currZoomElementStyle,
                                    item = self.currItem,
                                    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                                    w = zoomRatio * item.w,
                                    h = zoomRatio * item.h;

                                s.width = w + 'px';
                                s.height = h + 'px';


                                s.left = _panOffset.x + 'px';
                                s.top = _panOffset.y + 'px';
                            }

                        };
                    },

                    _onKeyDown = function(e) {
                        var keydownAction = '';
                        if(_options.escKey && e.keyCode === 27) {
                            keydownAction = 'close';
                        } else if(_options.arrowKeys) {
                            if(e.keyCode === 37) {
                                keydownAction = 'prev';
                            } else if(e.keyCode === 39) {
                                keydownAction = 'next';
                            }
                        }

                        if(keydownAction) {
                            // don't do anything if special key pressed to prevent from overriding default browser actions
                            // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                            if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
                                if(e.preventDefault) {
                                    e.preventDefault();
                                } else {
                                    e.returnValue = false;
                                }
                                self[keydownAction]();
                            }
                        }
                    },

                    _onGlobalClick = function(e) {
                        if(!e) {
                            return;
                        }

                        // don't allow click event to pass through when triggering after drag or some other gesture
                        if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    },

                    _updatePageScrollOffset = function() {
                        self.setScrollOffset(0, framework.getScrollY());
                    };







// Micro animation engine
                var _animations = {},
                    _numAnimations = 0,
                    _stopAnimation = function(name) {
                        if(_animations[name]) {
                            if(_animations[name].raf) {
                                _cancelAF( _animations[name].raf );
                            }
                            _numAnimations--;
                            delete _animations[name];
                        }
                    },
                    _registerStartAnimation = function(name) {
                        if(_animations[name]) {
                            _stopAnimation(name);
                        }
                        if(!_animations[name]) {
                            _numAnimations++;
                            _animations[name] = {};
                        }
                    },
                    _stopAllAnimations = function() {
                        for (var prop in _animations) {

                            if( _animations.hasOwnProperty( prop ) ) {
                                _stopAnimation(prop);
                            }

                        }
                    },
                    _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
                        var startAnimTime = _getCurrentTime(), t;
                        _registerStartAnimation(name);

                        var animloop = function(){
                            if ( _animations[name] ) {

                                t = _getCurrentTime() - startAnimTime; // time diff
                                //b - beginning (start prop)
                                //d - anim duration

                                if ( t >= d ) {
                                    _stopAnimation(name);
                                    onUpdate(endProp);
                                    if(onComplete) {
                                        onComplete();
                                    }
                                    return;
                                }
                                onUpdate( (endProp - b) * easingFn(t/d) + b );

                                _animations[name].raf = _requestAF(animloop);
                            }
                        };
                        animloop();
                    };



                var publicMethods = {

                    // make a few local variables and functions public
                    shout: _shout,
                    listen: _listen,
                    viewportSize: _viewportSize,
                    options: _options,

                    isMainScrollAnimating: function() {
                        return _mainScrollAnimating;
                    },
                    getZoomLevel: function() {
                        return _currZoomLevel;
                    },
                    getCurrentIndex: function() {
                        return _currentItemIndex;
                    },
                    isDragging: function() {
                        return _isDragging;
                    },
                    isZooming: function() {
                        return _isZooming;
                    },
                    setScrollOffset: function(x,y) {
                        _offset.x = x;
                        _currentWindowScrollY = _offset.y = y;
                        _shout('updateScrollOffset', _offset);
                    },
                    applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
                        _panOffset.x = panX;
                        _panOffset.y = panY;
                        _currZoomLevel = zoomLevel;
                        _applyCurrentZoomPan( allowRenderResolution );
                    },

                    init: function() {

                        if(_isOpen || _isDestroying) {
                            return;
                        }

                        var i;

                        self.framework = framework; // basic functionality
                        self.template = template; // root DOM element of PhotoSwipe
                        self.bg = framework.getChildByClass(template, 'pswp__bg');

                        _initalClassName = template.className;
                        _isOpen = true;

                        _features = framework.detectFeatures();
                        _requestAF = _features.raf;
                        _cancelAF = _features.caf;
                        _transformKey = _features.transform;
                        _oldIE = _features.oldIE;

                        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
                        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

                        _containerStyle = self.container.style; // for fast access

                        // Objects that hold slides (there are only 3 in DOM)
                        self.itemHolders = _itemHolders = [
                            {el:self.container.children[0] , wrap:0, index: -1},
                            {el:self.container.children[1] , wrap:0, index: -1},
                            {el:self.container.children[2] , wrap:0, index: -1}
                        ];

                        // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
                        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

                        _setupTransforms();

                        // Setup global events
                        _globalEventHandlers = {
                            resize: self.updateSize,
                            scroll: _updatePageScrollOffset,
                            keydown: _onKeyDown,
                            click: _onGlobalClick
                        };

                        // disable show/hide effects on old browsers that don't support CSS animations or transforms,
                        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
                        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
                        if(!_features.animationName || !_features.transform || oldPhone) {
                            _options.showAnimationDuration = _options.hideAnimationDuration = 0;
                        }

                        // init modules
                        for(i = 0; i < _modules.length; i++) {
                            self['init' + _modules[i]]();
                        }

                        // init
                        if(UiClass) {
                            var ui = self.ui = new UiClass(self, framework);
                            ui.init();
                        }

                        _shout('firstUpdate');
                        _currentItemIndex = _currentItemIndex || _options.index || 0;
                        // validate index
                        if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
                            _currentItemIndex = 0;
                        }
                        self.currItem = _getItemAt( _currentItemIndex );


                        if(_features.isOldIOSPhone || _features.isOldAndroid) {
                            _isFixedPosition = false;
                        }

                        template.setAttribute('aria-hidden', 'false');
                        if(_options.modal) {
                            if(!_isFixedPosition) {
                                template.style.position = 'absolute';
                                template.style.top = framework.getScrollY() + 'px';
                            } else {
                                template.style.position = 'fixed';
                            }
                        }

                        if(_currentWindowScrollY === undefined) {
                            _shout('initialLayout');
                            _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
                        }

                        // add classes to root element of PhotoSwipe
                        var rootClasses = 'pswp--open ';
                        if(_options.mainClass) {
                            rootClasses += _options.mainClass + ' ';
                        }
                        if(_options.showHideOpacity) {
                            rootClasses += 'pswp--animate_opacity ';
                        }
                        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
                        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
                        rootClasses += _features.svg ? ' pswp--svg' : '';
                        framework.addClass(template, rootClasses);

                        self.updateSize();

                        // initial update
                        _containerShiftIndex = -1;
                        _indexDiff = null;
                        for(i = 0; i < NUM_HOLDERS; i++) {
                            _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
                        }

                        if(!_oldIE) {
                            framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
                        }

                        _listen('initialZoomInEnd', function() {
                            self.setContent(_itemHolders[0], _currentItemIndex-1);
                            self.setContent(_itemHolders[2], _currentItemIndex+1);

                            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

                            if(_options.focus) {
                                // focus causes layout,
                                // which causes lag during the animation,
                                // that's why we delay it untill the initial zoom transition ends
                                template.focus();
                            }


                            _bindEvents();
                        });

                        // set content for center slide (first time)
                        self.setContent(_itemHolders[1], _currentItemIndex);

                        self.updateCurrItem();

                        _shout('afterInit');

                        if(!_isFixedPosition) {

                            // On all versions of iOS lower than 8.0, we check size of viewport every second.
                            //
                            // This is done to detect when Safari top & bottom bars appear,
                            // as this action doesn't trigger any events (like resize).
                            //
                            // On iOS8 they fixed this.
                            //
                            // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

                            _updateSizeInterval = setInterval(function() {
                                if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
                                    self.updateSize();
                                }
                            }, 1000);
                        }

                        framework.addClass(template, 'pswp--visible');
                    },

                    // Close the gallery, then destroy it
                    close: function() {
                        if(!_isOpen) {
                            return;
                        }

                        _isOpen = false;
                        _isDestroying = true;
                        _shout('close');
                        _unbindEvents();

                        _showOrHide(self.currItem, null, true, self.destroy);
                    },

                    // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
                    destroy: function() {
                        _shout('destroy');

                        if(_showOrHideTimeout) {
                            clearTimeout(_showOrHideTimeout);
                        }

                        template.setAttribute('aria-hidden', 'true');
                        template.className = _initalClassName;

                        if(_updateSizeInterval) {
                            clearInterval(_updateSizeInterval);
                        }

                        framework.unbind(self.scrollWrap, _downEvents, self);

                        // we unbind scroll event at the end, as closing animation may depend on it
                        framework.unbind(window, 'scroll', self);

                        _stopDragUpdateLoop();

                        _stopAllAnimations();

                        _listeners = null;
                    },

                    /**
                     * Pan image to position
                     * @param {Number} x
                     * @param {Number} y
                     * @param {Boolean} force Will ignore bounds if set to true.
                     */
                    panTo: function(x,y,force) {
                        if(!force) {
                            if(x > _currPanBounds.min.x) {
                                x = _currPanBounds.min.x;
                            } else if(x < _currPanBounds.max.x) {
                                x = _currPanBounds.max.x;
                            }

                            if(y > _currPanBounds.min.y) {
                                y = _currPanBounds.min.y;
                            } else if(y < _currPanBounds.max.y) {
                                y = _currPanBounds.max.y;
                            }
                        }

                        _panOffset.x = x;
                        _panOffset.y = y;
                        _applyCurrentZoomPan();
                    },

                    handleEvent: function (e) {
                        e = e || window.event;
                        if(_globalEventHandlers[e.type]) {
                            _globalEventHandlers[e.type](e);
                        }
                    },


                    goTo: function(index) {

                        index = _getLoopedId(index);

                        var diff = index - _currentItemIndex;
                        _indexDiff = diff;

                        _currentItemIndex = index;
                        self.currItem = _getItemAt( _currentItemIndex );
                        _currPositionIndex -= diff;

                        _moveMainScroll(_slideSize.x * _currPositionIndex);


                        _stopAllAnimations();
                        _mainScrollAnimating = false;

                        self.updateCurrItem();
                    },
                    next: function() {
                        self.goTo( _currentItemIndex + 1);
                    },
                    prev: function() {
                        self.goTo( _currentItemIndex - 1);
                    },

                    // update current zoom/pan objects
                    updateCurrZoomItem: function(emulateSetContent) {
                        if(emulateSetContent) {
                            _shout('beforeChange', 0);
                        }

                        // itemHolder[1] is middle (current) item
                        if(_itemHolders[1].el.children.length) {
                            var zoomElement = _itemHolders[1].el.children[0];
                            if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
                                _currZoomElementStyle = zoomElement.style;
                            } else {
                                _currZoomElementStyle = null;
                            }
                        } else {
                            _currZoomElementStyle = null;
                        }

                        _currPanBounds = self.currItem.bounds;
                        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

                        _panOffset.x = _currPanBounds.center.x;
                        _panOffset.y = _currPanBounds.center.y;

                        if(emulateSetContent) {
                            _shout('afterChange');
                        }
                    },


                    invalidateCurrItems: function() {
                        _itemsNeedUpdate = true;
                        for(var i = 0; i < NUM_HOLDERS; i++) {
                            if( _itemHolders[i].item ) {
                                _itemHolders[i].item.needsUpdate = true;
                            }
                        }
                    },

                    updateCurrItem: function(beforeAnimation) {

                        if(_indexDiff === 0) {
                            return;
                        }

                        var diffAbs = Math.abs(_indexDiff),
                            tempHolder;

                        if(beforeAnimation && diffAbs < 2) {
                            return;
                        }


                        self.currItem = _getItemAt( _currentItemIndex );
                        _renderMaxResolution = false;

                        _shout('beforeChange', _indexDiff);

                        if(diffAbs >= NUM_HOLDERS) {
                            _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
                            diffAbs = NUM_HOLDERS;
                        }
                        for(var i = 0; i < diffAbs; i++) {
                            if(_indexDiff > 0) {
                                tempHolder = _itemHolders.shift();
                                _itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

                                _containerShiftIndex++;
                                _setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
                                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
                            } else {
                                tempHolder = _itemHolders.pop();
                                _itemHolders.unshift( tempHolder ); // move last to first

                                _containerShiftIndex--;
                                _setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
                                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
                            }

                        }

                        // reset zoom/pan on previous item
                        if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

                            var prevItem = _getItemAt(_prevItemIndex);
                            if(prevItem.initialZoomLevel !== _currZoomLevel) {
                                _calculateItemSize(prevItem , _viewportSize );
                                _setImageSize(prevItem);
                                _applyZoomPanToItem( prevItem );
                            }

                        }

                        // reset diff after update
                        _indexDiff = 0;

                        self.updateCurrZoomItem();

                        _prevItemIndex = _currentItemIndex;

                        _shout('afterChange');

                    },



                    updateSize: function(force) {

                        if(!_isFixedPosition && _options.modal) {
                            var windowScrollY = framework.getScrollY();
                            if(_currentWindowScrollY !== windowScrollY) {
                                template.style.top = windowScrollY + 'px';
                                _currentWindowScrollY = windowScrollY;
                            }
                            if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                                return;
                            }
                            _windowVisibleSize.x = window.innerWidth;
                            _windowVisibleSize.y = window.innerHeight;

                            //template.style.width = _windowVisibleSize.x + 'px';
                            template.style.height = _windowVisibleSize.y + 'px';
                        }



                        _viewportSize.x = self.scrollWrap.clientWidth;
                        _viewportSize.y = self.scrollWrap.clientHeight;

                        _updatePageScrollOffset();

                        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
                        _slideSize.y = _viewportSize.y;

                        _moveMainScroll(_slideSize.x * _currPositionIndex);

                        _shout('beforeResize'); // even may be used for example to switch image sources


                        // don't re-calculate size on inital size update
                        if(_containerShiftIndex !== undefined) {

                            var holder,
                                item,
                                hIndex;

                            for(var i = 0; i < NUM_HOLDERS; i++) {
                                holder = _itemHolders[i];
                                _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

                                hIndex = _currentItemIndex+i-1;

                                if(_options.loop && _getNumItems() > 2) {
                                    hIndex = _getLoopedId(hIndex);
                                }

                                // update zoom level on items and refresh source (if needsUpdate)
                                item = _getItemAt( hIndex );

                                // re-render gallery item if `needsUpdate`,
                                // or doesn't have `bounds` (entirely new slide object)
                                if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

                                    self.cleanSlide( item );

                                    self.setContent( holder, hIndex );

                                    // if "center" slide
                                    if(i === 1) {
                                        self.currItem = item;
                                        self.updateCurrZoomItem(true);
                                    }

                                    item.needsUpdate = false;

                                } else if(holder.index === -1 && hIndex >= 0) {
                                    // add content first time
                                    self.setContent( holder, hIndex );
                                }
                                if(item && item.container) {
                                    _calculateItemSize(item, _viewportSize);
                                    _setImageSize(item);
                                    _applyZoomPanToItem( item );
                                }

                            }
                            _itemsNeedUpdate = false;
                        }

                        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                        _currPanBounds = self.currItem.bounds;

                        if(_currPanBounds) {
                            _panOffset.x = _currPanBounds.center.x;
                            _panOffset.y = _currPanBounds.center.y;
                            _applyCurrentZoomPan( true );
                        }

                        _shout('resize');
                    },

                    // Zoom current item to
                    zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
                        /*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

                        if(centerPoint) {
                            _startZoomLevel = _currZoomLevel;
                            _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
                            _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
                            _equalizePoints(_startPanOffset, _panOffset);
                        }

                        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
                            destPanOffset = {};

                        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
                        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

                        var initialZoomLevel = _currZoomLevel;
                        var initialPanOffset = {
                            x: _panOffset.x,
                            y: _panOffset.y
                        };

                        _roundPoint(destPanOffset);

                        var onUpdate = function(now) {
                            if(now === 1) {
                                _currZoomLevel = destZoomLevel;
                                _panOffset.x = destPanOffset.x;
                                _panOffset.y = destPanOffset.y;
                            } else {
                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
                            }

                            if(updateFn) {
                                updateFn(now);
                            }

                            _applyCurrentZoomPan( now === 1 );
                        };

                        if(speed) {
                            _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
                        } else {
                            onUpdate(1);
                        }
                    }


                };


                /*>>core*/

                /*>>gestures*/
                /**
                 * Mouse/touch/pointer event handlers.
                 *
                 * separated from @core.js for readability
                 */

                var MIN_SWIPE_DISTANCE = 30,
                    DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

                var _gestureStartTime,
                    _gestureCheckSpeedTime,

                    // pool of objects that are used during dragging of zooming
                    p = {}, // first point
                    p2 = {}, // second point (for zoom gesture)
                    delta = {},
                    _currPoint = {},
                    _startPoint = {},
                    _currPointers = [],
                    _startMainScrollPos = {},
                    _releaseAnimData,
                    _posPoints = [], // array of points during dragging, used to determine type of gesture
                    _tempPoint = {},

                    _isZoomingIn,
                    _verticalDragInitiated,
                    _oldAndroidTouchEndTimeout,
                    _currZoomedItemIndex = 0,
                    _centerPoint = _getEmptyPoint(),
                    _lastReleaseTime = 0,
                    _isDragging, // at least one pointer is down
                    _isMultitouch, // at least two _pointers are down
                    _zoomStarted, // zoom level changed during zoom gesture
                    _moved,
                    _dragAnimFrame,
                    _mainScrollShifted,
                    _currentPoints, // array of current touch points
                    _isZooming,
                    _currPointsDistance,
                    _startPointsDistance,
                    _currPanBounds,
                    _mainScrollPos = _getEmptyPoint(),
                    _currZoomElementStyle,
                    _mainScrollAnimating, // true, if animation after swipe gesture is running
                    _midZoomPoint = _getEmptyPoint(),
                    _currCenterPoint = _getEmptyPoint(),
                    _direction,
                    _isFirstMove,
                    _opacityChanged,
                    _bgOpacity,
                    _wasOverInitialZoom,

                    _isEqualPoints = function(p1, p2) {
                        return p1.x === p2.x && p1.y === p2.y;
                    },
                    _isNearbyPoints = function(touch0, touch1) {
                        return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
                    },
                    _calculatePointsDistance = function(p1, p2) {
                        _tempPoint.x = Math.abs( p1.x - p2.x );
                        _tempPoint.y = Math.abs( p1.y - p2.y );
                        return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
                    },
                    _stopDragUpdateLoop = function() {
                        if(_dragAnimFrame) {
                            _cancelAF(_dragAnimFrame);
                            _dragAnimFrame = null;
                        }
                    },
                    _dragUpdateLoop = function() {
                        if(_isDragging) {
                            _dragAnimFrame = _requestAF(_dragUpdateLoop);
                            _renderMovement();
                        }
                    },
                    _canPan = function() {
                        return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
                    },

                    // find the closest parent DOM element
                    _closestElement = function(el, fn) {
                        if(!el || el === document) {
                            return false;
                        }

                        // don't search elements above pswp__scroll-wrap
                        if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
                            return false;
                        }

                        if( fn(el) ) {
                            return el;
                        }

                        return _closestElement(el.parentNode, fn);
                    },

                    _preventObj = {},
                    _preventDefaultEventBehaviour = function(e, isDown) {
                        _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

                        _shout('preventDragEvent', e, isDown, _preventObj);
                        return _preventObj.prevent;

                    },
                    _convertTouchToPoint = function(touch, p) {
                        p.x = touch.pageX;
                        p.y = touch.pageY;
                        p.id = touch.identifier;
                        return p;
                    },
                    _findCenterOfPoints = function(p1, p2, pCenter) {
                        pCenter.x = (p1.x + p2.x) * 0.5;
                        pCenter.y = (p1.y + p2.y) * 0.5;
                    },
                    _pushPosPoint = function(time, x, y) {
                        if(time - _gestureCheckSpeedTime > 50) {
                            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
                            o.x = x;
                            o.y = y;
                            _posPoints.push(o);
                            _gestureCheckSpeedTime = time;
                        }
                    },

                    _calculateVerticalDragOpacityRatio = function() {
                        var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
                        return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
                    },


                    // points pool, reused during touch events
                    _ePoint1 = {},
                    _ePoint2 = {},
                    _tempPointsArr = [],
                    _tempCounter,
                    _getTouchPoints = function(e) {
                        // clean up previous points, without recreating array
                        while(_tempPointsArr.length > 0) {
                            _tempPointsArr.pop();
                        }

                        if(!_pointerEventEnabled) {
                            if(e.type.indexOf('touch') > -1) {

                                if(e.touches && e.touches.length > 0) {
                                    _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                                    if(e.touches.length > 1) {
                                        _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                                    }
                                }

                            } else {
                                _ePoint1.x = e.pageX;
                                _ePoint1.y = e.pageY;
                                _ePoint1.id = '';
                                _tempPointsArr[0] = _ePoint1;//_ePoint1;
                            }
                        } else {
                            _tempCounter = 0;
                            // we can use forEach, as pointer events are supported only in modern browsers
                            _currPointers.forEach(function(p) {
                                if(_tempCounter === 0) {
                                    _tempPointsArr[0] = p;
                                } else if(_tempCounter === 1) {
                                    _tempPointsArr[1] = p;
                                }
                                _tempCounter++;

                            });
                        }
                        return _tempPointsArr;
                    },

                    _panOrMoveMainScroll = function(axis, delta) {

                        var panFriction,
                            overDiff = 0,
                            newOffset = _panOffset[axis] + delta[axis],
                            startOverDiff,
                            dir = delta[axis] > 0,
                            newMainScrollPosition = _mainScrollPos.x + delta.x,
                            mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
                            newPanPos,
                            newMainScrollPos;

                        // calculate fdistance over the bounds and friction
                        if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
                            panFriction = _options.panEndFriction;
                            // Linear increasing of friction, so at 1/4 of viewport it's at max value.
                            // Looks not as nice as was expected. Left for history.
                            // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
                        } else {
                            panFriction = 1;
                        }

                        newOffset = _panOffset[axis] + delta[axis] * panFriction;

                        // move main scroll or start panning
                        if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


                            if(!_currZoomElementStyle) {

                                newMainScrollPos = newMainScrollPosition;

                            } else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {

                                if(dir) {
                                    if(newOffset > _currPanBounds.min[axis]) {
                                        panFriction = _options.panEndFriction;
                                        overDiff = _currPanBounds.min[axis] - newOffset;
                                        startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                                    }

                                    // drag right
                                    if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
                                        newMainScrollPos = newMainScrollPosition;
                                        if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                                            newMainScrollPos = _startMainScrollPos.x;
                                        }
                                    } else {
                                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                            newPanPos = newOffset;
                                        }

                                    }

                                } else {

                                    if(newOffset < _currPanBounds.max[axis] ) {
                                        panFriction =_options.panEndFriction;
                                        overDiff = newOffset - _currPanBounds.max[axis];
                                        startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                                    }

                                    if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
                                        newMainScrollPos = newMainScrollPosition;

                                        if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                                            newMainScrollPos = _startMainScrollPos.x;
                                        }

                                    } else {
                                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                            newPanPos = newOffset;
                                        }
                                    }

                                }


                                //
                            }

                            if(axis === 'x') {

                                if(newMainScrollPos !== undefined) {
                                    _moveMainScroll(newMainScrollPos, true);
                                    if(newMainScrollPos === _startMainScrollPos.x) {
                                        _mainScrollShifted = false;
                                    } else {
                                        _mainScrollShifted = true;
                                    }
                                }

                                if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                                    if(newPanPos !== undefined) {
                                        _panOffset.x = newPanPos;
                                    } else if(!_mainScrollShifted) {
                                        _panOffset.x += delta.x * panFriction;
                                    }
                                }

                                return newMainScrollPos !== undefined;
                            }

                        }

                        if(!_mainScrollAnimating) {

                            if(!_mainScrollShifted) {
                                if(_currZoomLevel > self.currItem.fitRatio) {
                                    _panOffset[axis] += delta[axis] * panFriction;

                                }
                            }


                        }

                    },

                    // Pointerdown/touchstart/mousedown handler
                    _onDragStart = function(e) {

                        // Allow dragging only via left mouse button.
                        // As this handler is not added in IE8 - we ignore e.which
                        //
                        // http://www.quirksmode.org/js/events_properties.html
                        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
                        if(e.type === 'mousedown' && e.button > 0  ) {
                            return;
                        }

                        if(_initialZoomRunning) {
                            e.preventDefault();
                            return;
                        }

                        if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
                            return;
                        }

                        if(_preventDefaultEventBehaviour(e, true)) {
                            e.preventDefault();
                        }



                        _shout('pointerDown');

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                            if(pointerIndex < 0) {
                                pointerIndex = _currPointers.length;
                            }
                            _currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
                        }



                        var startPointsList = _getTouchPoints(e),
                            numPoints = startPointsList.length;

                        _currentPoints = null;

                        _stopAllAnimations();

                        // init drag
                        if(!_isDragging || numPoints === 1) {



                            _isDragging = _isFirstMove = true;
                            framework.bind(window, _upMoveEvents, self);

                            _isZoomingIn =
                                _wasOverInitialZoom =
                                    _opacityChanged =
                                        _verticalDragInitiated =
                                            _mainScrollShifted =
                                                _moved =
                                                    _isMultitouch =
                                                        _zoomStarted = false;

                            _direction = null;

                            _shout('firstTouchStart', startPointsList);

                            _equalizePoints(_startPanOffset, _panOffset);

                            _currPanDist.x = _currPanDist.y = 0;
                            _equalizePoints(_currPoint, startPointsList[0]);
                            _equalizePoints(_startPoint, _currPoint);

                            //_equalizePoints(_startMainScrollPos, _mainScrollPos);
                            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;

                            _posPoints = [{
                                x: _currPoint.x,
                                y: _currPoint.y
                            }];

                            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

                            //_mainScrollAnimationEnd(true);
                            _calculatePanBounds( _currZoomLevel, true );

                            // Start rendering
                            _stopDragUpdateLoop();
                            _dragUpdateLoop();

                        }

                        // init zoom
                        if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
                            _startZoomLevel = _currZoomLevel;
                            _zoomStarted = false; // true if zoom changed at least once

                            _isZooming = _isMultitouch = true;
                            _currPanDist.y = _currPanDist.x = 0;

                            _equalizePoints(_startPanOffset, _panOffset);

                            _equalizePoints(p, startPointsList[0]);
                            _equalizePoints(p2, startPointsList[1]);

                            _findCenterOfPoints(p, p2, _currCenterPoint);

                            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
                            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
                            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
                        }


                    },

                    // Pointermove/touchmove/mousemove handler
                    _onDragMove = function(e) {

                        e.preventDefault();

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                            if(pointerIndex > -1) {
                                var p = _currPointers[pointerIndex];
                                p.x = e.pageX;
                                p.y = e.pageY;
                            }
                        }

                        if(_isDragging) {
                            var touchesList = _getTouchPoints(e);
                            if(!_direction && !_moved && !_isZooming) {

                                if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                                    // if main scroll position is shifted – direction is always horizontal
                                    _direction = 'h';
                                } else {
                                    var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                                    // check the direction of movement
                                    if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                                        _direction = diff > 0 ? 'h' : 'v';
                                        _currentPoints = touchesList;
                                    }
                                }

                            } else {
                                _currentPoints = touchesList;
                            }
                        }
                    },
                    //
                    _renderMovement =  function() {

                        if(!_currentPoints) {
                            return;
                        }

                        var numPoints = _currentPoints.length;

                        if(numPoints === 0) {
                            return;
                        }

                        _equalizePoints(p, _currentPoints[0]);

                        delta.x = p.x - _currPoint.x;
                        delta.y = p.y - _currPoint.y;

                        if(_isZooming && numPoints > 1) {
                            // Handle behaviour for more than 1 point

                            _currPoint.x = p.x;
                            _currPoint.y = p.y;

                            // check if one of two points changed
                            if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
                                return;
                            }

                            _equalizePoints(p2, _currentPoints[1]);


                            if(!_zoomStarted) {
                                _zoomStarted = true;
                                _shout('zoomGestureStarted');
                            }

                            // Distance between two points
                            var pointsDistance = _calculatePointsDistance(p,p2);

                            var zoomLevel = _calculateZoomLevel(pointsDistance);

                            // slightly over the of initial zoom level
                            if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                                _wasOverInitialZoom = true;
                            }

                            // Apply the friction if zoom level is out of the bounds
                            var zoomFriction = 1,
                                minZoomLevel = _getMinZoomLevel(),
                                maxZoomLevel = _getMaxZoomLevel();

                            if ( zoomLevel < minZoomLevel ) {

                                if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                                    // fade out background if zooming out
                                    var minusDiff = minZoomLevel - zoomLevel;
                                    var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                                    _applyBgOpacity(percent);
                                    _shout('onPinchClose', percent);
                                    _opacityChanged = true;
                                } else {
                                    zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                                    if(zoomFriction > 1) {
                                        zoomFriction = 1;
                                    }
                                    zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                                }

                            } else if ( zoomLevel > maxZoomLevel ) {
                                // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                                zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
                                if(zoomFriction > 1) {
                                    zoomFriction = 1;
                                }
                                zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
                            }

                            if(zoomFriction < 0) {
                                zoomFriction = 0;
                            }

                            // distance between touch points after friction is applied
                            _currPointsDistance = pointsDistance;

                            // _centerPoint - The point in the middle of two pointers
                            _findCenterOfPoints(p, p2, _centerPoint);

                            // paning with two pointers pressed
                            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
                            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
                            _equalizePoints(_currCenterPoint, _centerPoint);

                            _panOffset.x = _calculatePanOffset('x', zoomLevel);
                            _panOffset.y = _calculatePanOffset('y', zoomLevel);

                            _isZoomingIn = zoomLevel > _currZoomLevel;
                            _currZoomLevel = zoomLevel;
                            _applyCurrentZoomPan();

                        } else {

                            // handle behaviour for one point (dragging or panning)

                            if(!_direction) {
                                return;
                            }

                            if(_isFirstMove) {
                                _isFirstMove = false;

                                // subtract drag distance that was used during the detection direction

                                if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                                    delta.x -= _currentPoints[0].x - _startPoint.x;
                                }

                                if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                                    delta.y -= _currentPoints[0].y - _startPoint.y;
                                }
                            }

                            _currPoint.x = p.x;
                            _currPoint.y = p.y;

                            // do nothing if pointers position hasn't changed
                            if(delta.x === 0 && delta.y === 0) {
                                return;
                            }

                            if(_direction === 'v' && _options.closeOnVerticalDrag) {
                                if(!_canPan()) {
                                    _currPanDist.y += delta.y;
                                    _panOffset.y += delta.y;

                                    var opacityRatio = _calculateVerticalDragOpacityRatio();

                                    _verticalDragInitiated = true;
                                    _shout('onVerticalDrag', opacityRatio);

                                    _applyBgOpacity(opacityRatio);
                                    _applyCurrentZoomPan();
                                    return ;
                                }
                            }

                            _pushPosPoint(_getCurrentTime(), p.x, p.y);

                            _moved = true;
                            _currPanBounds = self.currItem.bounds;

                            var mainScrollChanged = _panOrMoveMainScroll('x', delta);
                            if(!mainScrollChanged) {
                                _panOrMoveMainScroll('y', delta);

                                _roundPoint(_panOffset);
                                _applyCurrentZoomPan();
                            }

                        }

                    },

                    // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
                    _onDragRelease = function(e) {

                        if(_features.isOldAndroid ) {

                            if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                                return;
                            }

                            // on Android (v4.1, 4.2, 4.3 & possibly older)
                            // ghost mousedown/up event isn't preventable via e.preventDefault,
                            // which causes fake mousedown event
                            // so we block mousedown/up for 600ms
                            if( e.type.indexOf('touch') > -1 ) {
                                clearTimeout(_oldAndroidTouchEndTimeout);
                                _oldAndroidTouchEndTimeout = setTimeout(function() {
                                    _oldAndroidTouchEndTimeout = 0;
                                }, 600);
                            }

                        }

                        _shout('pointerUp');

                        if(_preventDefaultEventBehaviour(e, false)) {
                            e.preventDefault();
                        }

                        var releasePoint;

                        if(_pointerEventEnabled) {
                            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

                            if(pointerIndex > -1) {
                                releasePoint = _currPointers.splice(pointerIndex, 1)[0];

                                if(navigator.pointerEnabled) {
                                    releasePoint.type = e.pointerType || 'mouse';
                                } else {
                                    var MSPOINTER_TYPES = {
                                        4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                                        2: 'touch', // event.MSPOINTER_TYPE_TOUCH
                                        3: 'pen' // event.MSPOINTER_TYPE_PEN
                                    };
                                    releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                                    if(!releasePoint.type) {
                                        releasePoint.type = e.pointerType || 'mouse';
                                    }
                                }

                            }
                        }

                        var touchList = _getTouchPoints(e),
                            gestureType,
                            numPoints = touchList.length;

                        if(e.type === 'mouseup') {
                            numPoints = 0;
                        }

                        // Do nothing if there were 3 touch points or more
                        if(numPoints === 2) {
                            _currentPoints = null;
                            return true;
                        }

                        // if second pointer released
                        if(numPoints === 1) {
                            _equalizePoints(_startPoint, touchList[0]);
                        }


                        // pointer hasn't moved, send "tap release" point
                        if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
                            if(!releasePoint) {
                                if(e.type === 'mouseup') {
                                    releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
                                } else if(e.changedTouches && e.changedTouches[0]) {
                                    releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
                                }
                            }

                            _shout('touchRelease', e, releasePoint);
                        }

                        // Difference in time between releasing of two last touch points (zoom gesture)
                        var releaseTimeDiff = -1;

                        // Gesture completed, no pointers left
                        if(numPoints === 0) {
                            _isDragging = false;
                            framework.unbind(window, _upMoveEvents, self);

                            _stopDragUpdateLoop();

                            if(_isZooming) {
                                // Two points released at the same time
                                releaseTimeDiff = 0;
                            } else if(_lastReleaseTime !== -1) {
                                releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
                            }
                        }
                        _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

                        if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
                            gestureType = 'zoom';
                        } else {
                            gestureType = 'swipe';
                        }

                        if(_isZooming && numPoints < 2) {
                            _isZooming = false;

                            // Only second point released
                            if(numPoints === 1) {
                                gestureType = 'zoomPointerUp';
                            }
                            _shout('zoomGestureEnded');
                        }

                        _currentPoints = null;
                        if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
                            // nothing to animate
                            return;
                        }

                        _stopAllAnimations();


                        if(!_releaseAnimData) {
                            _releaseAnimData = _initDragReleaseAnimationData();
                        }

                        _releaseAnimData.calculateSwipeSpeed('x');


                        if(_verticalDragInitiated) {

                            var opacityRatio = _calculateVerticalDragOpacityRatio();

                            if(opacityRatio < _options.verticalDragRange) {
                                self.close();
                            } else {
                                var initalPanY = _panOffset.y,
                                    initialBgOpacity = _bgOpacity;

                                _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

                                    _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                                    _applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
                                    _applyCurrentZoomPan();
                                });

                                _shout('onVerticalDrag', 1);
                            }

                            return;
                        }


                        // main scroll
                        if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
                            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
                            if(itemChanged) {
                                return;
                            }
                            gestureType = 'zoomPointerUp';
                        }

                        // prevent zoom/pan animation when main scroll animation runs
                        if(_mainScrollAnimating) {
                            return;
                        }

                        // Complete simple zoom gesture (reset zoom level if it's out of the bounds)
                        if(gestureType !== 'swipe') {
                            _completeZoomGesture();
                            return;
                        }

                        // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
                        if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
                            _completePanGesture(_releaseAnimData);
                        }
                    },


                    // Returns object with data about gesture
                    // It's created only once and then reused
                    _initDragReleaseAnimationData  = function() {
                        // temp local vars
                        var lastFlickDuration,
                            tempReleasePos;

                        // s = this
                        var s = {
                            lastFlickOffset: {},
                            lastFlickDist: {},
                            lastFlickSpeed: {},
                            slowDownRatio:  {},
                            slowDownRatioReverse:  {},
                            speedDecelerationRatio:  {},
                            speedDecelerationRatioAbs:  {},
                            distanceOffset:  {},
                            backAnimDestination: {},
                            backAnimStarted: {},
                            calculateSwipeSpeed: function(axis) {


                                if( _posPoints.length > 1) {
                                    lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                                    tempReleasePos = _posPoints[_posPoints.length-2][axis];
                                } else {
                                    lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                                    tempReleasePos = _startPoint[axis];
                                }
                                s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                                s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                                if(s.lastFlickDist[axis] > 20) {
                                    s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                                } else {
                                    s.lastFlickSpeed[axis] = 0;
                                }
                                if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
                                    s.lastFlickSpeed[axis] = 0;
                                }

                                s.slowDownRatio[axis] = 0.95;
                                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                s.speedDecelerationRatio[axis] = 1;
                            },

                            calculateOverBoundsAnimOffset: function(axis, speed) {
                                if(!s.backAnimStarted[axis]) {

                                    if(_panOffset[axis] > _currPanBounds.min[axis]) {
                                        s.backAnimDestination[axis] = _currPanBounds.min[axis];

                                    } else if(_panOffset[axis] < _currPanBounds.max[axis]) {
                                        s.backAnimDestination[axis] = _currPanBounds.max[axis];
                                    }

                                    if(s.backAnimDestination[axis] !== undefined) {
                                        s.slowDownRatio[axis] = 0.7;
                                        s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                        if(s.speedDecelerationRatioAbs[axis] < 0.05) {

                                            s.lastFlickSpeed[axis] = 0;
                                            s.backAnimStarted[axis] = true;

                                            _animateProp('bounceZoomPan'+axis,_panOffset[axis],
                                                s.backAnimDestination[axis],
                                                speed || 300,
                                                framework.easing.sine.out,
                                                function(pos) {
                                                    _panOffset[axis] = pos;
                                                    _applyCurrentZoomPan();
                                                }
                                            );

                                        }
                                    }
                                }
                            },

                            // Reduces the speed by slowDownRatio (per 10ms)
                            calculateAnimOffset: function(axis) {
                                if(!s.backAnimStarted[axis]) {
                                    s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                        s.slowDownRatioReverse[axis] -
                                        s.slowDownRatioReverse[axis] * s.timeDiff / 10);

                                    s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                                    s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                                    _panOffset[axis] += s.distanceOffset[axis];

                                }
                            },

                            panAnimLoop: function() {
                                if ( _animations.zoomPan ) {
                                    _animations.zoomPan.raf = _requestAF(s.panAnimLoop);

                                    s.now = _getCurrentTime();
                                    s.timeDiff = s.now - s.lastNow;
                                    s.lastNow = s.now;

                                    s.calculateAnimOffset('x');
                                    s.calculateAnimOffset('y');

                                    _applyCurrentZoomPan();

                                    s.calculateOverBoundsAnimOffset('x');
                                    s.calculateOverBoundsAnimOffset('y');


                                    if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

                                        // round pan position
                                        _panOffset.x = Math.round(_panOffset.x);
                                        _panOffset.y = Math.round(_panOffset.y);
                                        _applyCurrentZoomPan();

                                        _stopAnimation('zoomPan');
                                        return;
                                    }
                                }

                            }
                        };
                        return s;
                    },

                    _completePanGesture = function(animData) {
                        // calculate swipe speed for Y axis (paanning)
                        animData.calculateSwipeSpeed('y');

                        _currPanBounds = self.currItem.bounds;

                        animData.backAnimDestination = {};
                        animData.backAnimStarted = {};

                        // Avoid acceleration animation if speed is too low
                        if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
                            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

                            // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
                            animData.calculateOverBoundsAnimOffset('x');
                            animData.calculateOverBoundsAnimOffset('y');
                            return true;
                        }

                        // Animation loop that controls the acceleration after pan gesture ends
                        _registerStartAnimation('zoomPan');
                        animData.lastNow = _getCurrentTime();
                        animData.panAnimLoop();
                    },


                    _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
                        var itemChanged;
                        if(!_mainScrollAnimating) {
                            _currZoomedItemIndex = _currentItemIndex;
                        }



                        var itemsDiff;

                        if(gestureType === 'swipe') {
                            var totalShiftDist = _currPoint.x - _startPoint.x,
                                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

                            // if container is shifted for more than MIN_SWIPE_DISTANCE,
                            // and last flick gesture was in right direction
                            if(totalShiftDist > MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
                                // go to prev item
                                itemsDiff = -1;
                            } else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
                                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
                                // go to next item
                                itemsDiff = 1;
                            }
                        }

                        var nextCircle;

                        if(itemsDiff) {

                            _currentItemIndex += itemsDiff;

                            if(_currentItemIndex < 0) {
                                _currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
                                nextCircle = true;
                            } else if(_currentItemIndex >= _getNumItems()) {
                                _currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
                                nextCircle = true;
                            }

                            if(!nextCircle || _options.loop) {
                                _indexDiff += itemsDiff;
                                _currPositionIndex -= itemsDiff;
                                itemChanged = true;
                            }



                        }

                        var animateToX = _slideSize.x * _currPositionIndex;
                        var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
                        var finishAnimDuration;


                        if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
                            // "return to current" duration, e.g. when dragging from slide 0 to -1
                            finishAnimDuration = 333;
                        } else {
                            finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                                animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                                333;

                            finishAnimDuration = Math.min(finishAnimDuration, 400);
                            finishAnimDuration = Math.max(finishAnimDuration, 250);
                        }

                        if(_currZoomedItemIndex === _currentItemIndex) {
                            itemChanged = false;
                        }

                        _mainScrollAnimating = true;

                        _shout('mainScrollAnimStart');

                        _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
                            _moveMainScroll,
                            function() {
                                _stopAllAnimations();
                                _mainScrollAnimating = false;
                                _currZoomedItemIndex = -1;

                                if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                                    self.updateCurrItem();
                                }

                                _shout('mainScrollAnimComplete');
                            }
                        );

                        if(itemChanged) {
                            self.updateCurrItem(true);
                        }

                        return itemChanged;
                    },

                    _calculateZoomLevel = function(touchesDistance) {
                        return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
                    },

                    // Resets zoom if it's out of bounds
                    _completeZoomGesture = function() {
                        var destZoomLevel = _currZoomLevel,
                            minZoomLevel = _getMinZoomLevel(),
                            maxZoomLevel = _getMaxZoomLevel();

                        if ( _currZoomLevel < minZoomLevel ) {
                            destZoomLevel = minZoomLevel;
                        } else if ( _currZoomLevel > maxZoomLevel ) {
                            destZoomLevel = maxZoomLevel;
                        }

                        var destOpacity = 1,
                            onUpdate,
                            initialOpacity = _bgOpacity;

                        if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
                            //_closedByScroll = true;
                            self.close();
                            return true;
                        }

                        if(_opacityChanged) {
                            onUpdate = function(now) {
                                _applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
                            };
                        }

                        self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
                        return true;
                    };


                _registerModule('Gestures', {
                    publicMethods: {

                        initGestures: function() {

                            // helper function that builds touch/pointer/mouse events
                            var addEventNames = function(pref, down, move, up, cancel) {
                                _dragStartEvent = pref + down;
                                _dragMoveEvent = pref + move;
                                _dragEndEvent = pref + up;
                                if(cancel) {
                                    _dragCancelEvent = pref + cancel;
                                } else {
                                    _dragCancelEvent = '';
                                }
                            };

                            _pointerEventEnabled = _features.pointerEvent;
                            if(_pointerEventEnabled && _features.touch) {
                                // we don't need touch events, if browser supports pointer events
                                _features.touch = false;
                            }

                            if(_pointerEventEnabled) {
                                if(navigator.pointerEnabled) {
                                    addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                                } else {
                                    // IE10 pointer events are case-sensitive
                                    addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                                }
                            } else if(_features.touch) {
                                addEventNames('touch', 'start', 'move', 'end', 'cancel');
                                _likelyTouchDevice = true;
                            } else {
                                addEventNames('mouse', 'down', 'move', 'up');
                            }

                            _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
                            _downEvents = _dragStartEvent;

                            if(_pointerEventEnabled && !_likelyTouchDevice) {
                                _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
                            }
                            // make variable public
                            self.likelyTouchDevice = _likelyTouchDevice;

                            _globalEventHandlers[_dragStartEvent] = _onDragStart;
                            _globalEventHandlers[_dragMoveEvent] = _onDragMove;
                            _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

                            if(_dragCancelEvent) {
                                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
                            }

                            // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
                            if(_features.touch) {
                                _downEvents += ' mousedown';
                                _upMoveEvents += ' mousemove mouseup';
                                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
                            }

                            if(!_likelyTouchDevice) {
                                // don't allow pan to next slide from zoomed state on Desktop
                                _options.allowPanToNext = false;
                            }
                        }

                    }
                });


                /*>>gestures*/

                /*>>show-hide-transition*/
                /**
                 * show-hide-transition.js:
                 *
                 * Manages initial opening or closing transition.
                 *
                 * If you're not planning to use transition for gallery at all,
                 * you may set options hideAnimationDuration and showAnimationDuration to 0,
                 * and just delete startAnimation function.
                 *
                 */


                var _showOrHideTimeout,
                    _showOrHide = function(item, img, out, completeFn) {

                        if(_showOrHideTimeout) {
                            clearTimeout(_showOrHideTimeout);
                        }

                        _initialZoomRunning = true;
                        _initialContentSet = true;

                        // dimensions of small thumbnail {x:,y:,w:}.
                        // Height is optional, as calculated based on large image.
                        var thumbBounds;
                        if(item.initialLayout) {
                            thumbBounds = item.initialLayout;
                            item.initialLayout = null;
                        } else {
                            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                        }

                        var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

                        var onComplete = function() {
                            _stopAnimation('initialZoom');
                            if(!out) {
                                _applyBgOpacity(1);
                                if(img) {
                                    img.style.display = 'block';
                                }
                                framework.addClass(template, 'pswp--animated-in');
                                _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
                            } else {
                                self.template.removeAttribute('style');
                                self.bg.removeAttribute('style');
                            }

                            if(completeFn) {
                                completeFn();
                            }
                            _initialZoomRunning = false;
                        };

                        // if bounds aren't provided, just open gallery without animation
                        if(!duration || !thumbBounds || thumbBounds.x === undefined) {

                            _shout('initialZoom' + (out ? 'Out' : 'In') );

                            _currZoomLevel = item.initialZoomLevel;
                            _equalizePoints(_panOffset,  item.initialPosition );
                            _applyCurrentZoomPan();

                            template.style.opacity = out ? 0 : 1;
                            _applyBgOpacity(1);

                            if(duration) {
                                setTimeout(function() {
                                    onComplete();
                                }, duration);
                            } else {
                                onComplete();
                            }

                            return;
                        }

                        var startAnimation = function() {
                            var closeWithRaf = _closedByScroll,
                                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

                            // apply hw-acceleration to image
                            if(item.miniImg) {
                                item.miniImg.style.webkitBackfaceVisibility = 'hidden';
                            }

                            if(!out) {
                                _currZoomLevel = thumbBounds.w / item.w;
                                _panOffset.x = thumbBounds.x;
                                _panOffset.y = thumbBounds.y - _initalWindowScrollY;

                                self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                                _applyCurrentZoomPan();
                            }

                            _registerStartAnimation('initialZoom');

                            if(out && !closeWithRaf) {
                                framework.removeClass(template, 'pswp--animated-in');
                            }

                            if(fadeEverything) {
                                if(out) {
                                    framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
                                } else {
                                    setTimeout(function() {
                                        framework.addClass(template, 'pswp--animate_opacity');
                                    }, 30);
                                }
                            }

                            _showOrHideTimeout = setTimeout(function() {

                                _shout('initialZoom' + (out ? 'Out' : 'In') );


                                if(!out) {

                                    // "in" animation always uses CSS transitions (instead of rAF).
                                    // CSS transition work faster here,
                                    // as developer may also want to animate other things,
                                    // like ui on top of sliding area, which can be animated just via CSS

                                    _currZoomLevel = item.initialZoomLevel;
                                    _equalizePoints(_panOffset,  item.initialPosition );
                                    _applyCurrentZoomPan();
                                    _applyBgOpacity(1);

                                    if(fadeEverything) {
                                        template.style.opacity = 1;
                                    } else {
                                        _applyBgOpacity(1);
                                    }

                                    _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                                } else {

                                    // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                                    var destZoomLevel = thumbBounds.w / item.w,
                                        initialPanOffset = {
                                            x: _panOffset.x,
                                            y: _panOffset.y
                                        },
                                        initialZoomLevel = _currZoomLevel,
                                        initalBgOpacity = _bgOpacity,
                                        onUpdate = function(now) {

                                            if(now === 1) {
                                                _currZoomLevel = destZoomLevel;
                                                _panOffset.x = thumbBounds.x;
                                                _panOffset.y = thumbBounds.y  - _currentWindowScrollY;
                                            } else {
                                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                                            }

                                            _applyCurrentZoomPan();
                                            if(fadeEverything) {
                                                template.style.opacity = 1 - now;
                                            } else {
                                                _applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
                                            }
                                        };

                                    if(closeWithRaf) {
                                        _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                                    } else {
                                        onUpdate(1);
                                        _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                                    }
                                }

                            }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                            // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                            // Which avoids lag at the beginning of scale transition.
                        };
                        startAnimation();


                    };

                /*>>show-hide-transition*/

                /*>>items-controller*/
                /**
                 *
                 * Controller manages gallery items, their dimensions, and their content.
                 *
                 */

                var _items,
                    _tempPanAreaSize = {},
                    _imagesToAppendPool = [],
                    _initialContentSet,
                    _initialZoomRunning,
                    _controllerDefaultOptions = {
                        index: 0,
                        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                        forceProgressiveLoading: false,
                        preload: [1,1],
                        getNumItemsFn: function() {
                            return _items.length;
                        }
                    };


                var _getItemAt,
                    _getNumItems,
                    _initialIsLoop,
                    _getZeroBounds = function() {
                        return {
                            center:{x:0,y:0},
                            max:{x:0,y:0},
                            min:{x:0,y:0}
                        };
                    },
                    _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
                        var bounds = item.bounds;

                        // position of element when it's centered
                        bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
                        bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

                        // maximum pan position
                        bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                            Math.round(_tempPanAreaSize.x - realPanElementW) :
                            bounds.center.x;

                        bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                            Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                            bounds.center.y;

                        // minimum pan position
                        bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
                        bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
                    },
                    _calculateItemSize = function(item, viewportSize, zoomLevel) {

                        if (item.src && !item.loadError) {
                            var isInitial = !zoomLevel;

                            if(isInitial) {
                                if(!item.vGap) {
                                    item.vGap = {top:0,bottom:0};
                                }
                                // allows overriding vertical margin for individual items
                                _shout('parseVerticalMargin', item);
                            }


                            _tempPanAreaSize.x = viewportSize.x;
                            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

                            if (isInitial) {
                                var hRatio = _tempPanAreaSize.x / item.w;
                                var vRatio = _tempPanAreaSize.y / item.h;

                                item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                                //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

                                var scaleMode = _options.scaleMode;

                                if (scaleMode === 'orig') {
                                    zoomLevel = 1;
                                } else if (scaleMode === 'fit') {
                                    zoomLevel = item.fitRatio;
                                }

                                if (zoomLevel > 1) {
                                    zoomLevel = 1;
                                }

                                item.initialZoomLevel = zoomLevel;

                                if(!item.bounds) {
                                    // reuse bounds object
                                    item.bounds = _getZeroBounds();
                                }
                            }

                            if(!zoomLevel) {
                                return;
                            }

                            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

                            if (isInitial && zoomLevel === item.initialZoomLevel) {
                                item.initialPosition = item.bounds.center;
                            }

                            return item.bounds;
                        } else {
                            item.w = item.h = 0;
                            item.initialZoomLevel = item.fitRatio = 1;
                            item.bounds = _getZeroBounds();
                            item.initialPosition = item.bounds.center;

                            // if it's not image, we return zero bounds (content is not zoomable)
                            return item.bounds;
                        }

                    },




                    _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


                        if(item.loadError) {
                            return;
                        }

                        if(img) {

                            item.imageAppended = true;
                            _setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );

                            baseDiv.appendChild(img);

                            if(keepPlaceholder) {
                                setTimeout(function() {
                                    if(item && item.loaded && item.placeholder) {
                                        item.placeholder.style.display = 'none';
                                        item.placeholder = null;
                                    }
                                }, 500);
                            }
                        }
                    },



                    _preloadImage = function(item) {
                        item.loading = true;
                        item.loaded = false;
                        var img = item.img = framework.createEl('pswp__img', 'img');
                        var onComplete = function() {
                            item.loading = false;
                            item.loaded = true;

                            if(item.loadComplete) {
                                item.loadComplete(item);
                            } else {
                                item.img = null; // no need to store image object
                            }
                            img.onload = img.onerror = null;
                            img = null;
                        };
                        img.onload = onComplete;
                        img.onerror = function() {
                            item.loadError = true;
                            onComplete();
                        };

                        img.src = item.src;// + '?a=' + Math.random();

                        return img;
                    },
                    _checkForError = function(item, cleanUp) {
                        if(item.src && item.loadError && item.container) {

                            if(cleanUp) {
                                item.container.innerHTML = '';
                            }

                            item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
                            return true;

                        }
                    },
                    _setImageSize = function(item, img, maxRes) {
                        if(!item.src) {
                            return;
                        }

                        if(!img) {
                            img = item.container.lastChild;
                        }

                        var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
                            h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

                        if(item.placeholder && !item.loaded) {
                            item.placeholder.style.width = w + 'px';
                            item.placeholder.style.height = h + 'px';
                        }

                        img.style.width = w + 'px';
                        img.style.height = h + 'px';
                    },
                    _appendImagesPool = function() {

                        if(_imagesToAppendPool.length) {
                            var poolItem;

                            for(var i = 0; i < _imagesToAppendPool.length; i++) {
                                poolItem = _imagesToAppendPool[i];
                                if( poolItem.holder.index === poolItem.index ) {
                                    _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                                }
                            }
                            _imagesToAppendPool = [];
                        }
                    };



                _registerModule('Controller', {

                    publicMethods: {

                        lazyLoadItem: function(index) {
                            index = _getLoopedId(index);
                            var item = _getItemAt(index);

                            if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                                return;
                            }

                            _shout('gettingData', index, item);

                            if (!item.src) {
                                return;
                            }

                            _preloadImage(item);
                        },
                        initController: function() {
                            framework.extend(_options, _controllerDefaultOptions, true);
                            self.items = _items = items;
                            _getItemAt = self.getItemAt;
                            _getNumItems = _options.getNumItemsFn; //self.getNumItems;



                            _initialIsLoop = _options.loop;
                            if(_getNumItems() < 3) {
                                _options.loop = false; // disable loop if less then 3 items
                            }

                            _listen('beforeChange', function(diff) {

                                var p = _options.preload,
                                    isNext = diff === null ? true : (diff >= 0),
                                    preloadBefore = Math.min(p[0], _getNumItems() ),
                                    preloadAfter = Math.min(p[1], _getNumItems() ),
                                    i;


                                for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                                    self.lazyLoadItem(_currentItemIndex+i);
                                }
                                for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                                    self.lazyLoadItem(_currentItemIndex-i);
                                }
                            });

                            _listen('initialLayout', function() {
                                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                            });

                            _listen('mainScrollAnimComplete', _appendImagesPool);
                            _listen('initialZoomInEnd', _appendImagesPool);



                            _listen('destroy', function() {
                                var item;
                                for(var i = 0; i < _items.length; i++) {
                                    item = _items[i];
                                    // remove reference to DOM elements, for GC
                                    if(item.container) {
                                        item.container = null;
                                    }
                                    if(item.placeholder) {
                                        item.placeholder = null;
                                    }
                                    if(item.img) {
                                        item.img = null;
                                    }
                                    if(item.preloader) {
                                        item.preloader = null;
                                    }
                                    if(item.loadError) {
                                        item.loaded = item.loadError = false;
                                    }
                                }
                                _imagesToAppendPool = null;
                            });
                        },


                        getItemAt: function(index) {
                            if (index >= 0) {
                                return _items[index] !== undefined ? _items[index] : false;
                            }
                            return false;
                        },

                        allowProgressiveImg: function() {
                            // 1. Progressive image loading isn't working on webkit/blink
                            //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
                            //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
                            //
                            // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
                            //    That's why it's disabled on touch devices (mainly because of swipe transition)
                            //
                            // 3. Progressive image loading sometimes doesn't work in IE (up to 11).

                            // Don't allow progressive loading on non-large touch devices
                            return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
                            // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
                        },

                        setContent: function(holder, index) {

                            if(_options.loop) {
                                index = _getLoopedId(index);
                            }

                            var prevItem = self.getItemAt(holder.index);
                            if(prevItem) {
                                prevItem.container = null;
                            }

                            var item = self.getItemAt(index),
                                img;

                            if(!item) {
                                holder.el.innerHTML = '';
                                return;
                            }

                            // allow to override data
                            _shout('gettingData', index, item);

                            holder.index = index;
                            holder.item = item;

                            // base container DIV is created only once for each of 3 holders
                            var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



                            if(!item.src && item.html) {
                                if(item.html.tagName) {
                                    baseDiv.appendChild(item.html);
                                } else {
                                    baseDiv.innerHTML = item.html;
                                }
                            }

                            _checkForError(item);

                            _calculateItemSize(item, _viewportSize);

                            if(item.src && !item.loadError && !item.loaded) {

                                item.loadComplete = function(item) {

                                    // gallery closed before image finished loading
                                    if(!_isOpen) {
                                        return;
                                    }

                                    // check if holder hasn't changed while image was loading
                                    if(holder && holder.index === index ) {
                                        if( _checkForError(item, true) ) {
                                            item.loadComplete = item.img = null;
                                            _calculateItemSize(item, _viewportSize);
                                            _applyZoomPanToItem(item);

                                            if(holder.index === _currentItemIndex) {
                                                // recalculate dimensions
                                                self.updateCurrZoomItem();
                                            }
                                            return;
                                        }
                                        if( !item.imageAppended ) {
                                            if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
                                                _imagesToAppendPool.push({
                                                    item:item,
                                                    baseDiv:baseDiv,
                                                    img:item.img,
                                                    index:index,
                                                    holder:holder,
                                                    clearPlaceholder:true
                                                });
                                            } else {
                                                _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                                            }
                                        } else {
                                            // remove preloader & mini-img
                                            if(!_initialZoomRunning && item.placeholder) {
                                                item.placeholder.style.display = 'none';
                                                item.placeholder = null;
                                            }
                                        }
                                    }

                                    item.loadComplete = null;
                                    item.img = null; // no need to store image element after it's added

                                    _shout('imageLoadComplete', index, item);
                                };

                                if(framework.features.transform) {

                                    var placeholderClassName = 'pswp__img pswp__img--placeholder';
                                    placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

                                    var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                                    if(item.msrc) {
                                        placeholder.src = item.msrc;
                                    }

                                    _setImageSize(item, placeholder);

                                    baseDiv.appendChild(placeholder);
                                    item.placeholder = placeholder;

                                }




                                if(!item.loading) {
                                    _preloadImage(item);
                                }


                                if( self.allowProgressiveImg() ) {
                                    // just append image
                                    if(!_initialContentSet && _features.transform) {
                                        _imagesToAppendPool.push({
                                            item:item,
                                            baseDiv:baseDiv,
                                            img:item.img,
                                            index:index,
                                            holder:holder
                                        });
                                    } else {
                                        _appendImage(index, item, baseDiv, item.img, true, true);
                                    }
                                }

                            } else if(item.src && !item.loadError) {
                                // image object is created every time, due to bugs of image loading & delay when switching images
                                img = framework.createEl('pswp__img', 'img');
                                img.style.opacity = 1;
                                img.src = item.src;
                                _setImageSize(item, img);
                                _appendImage(index, item, baseDiv, img, true);
                            }


                            if(!_initialContentSet && index === _currentItemIndex) {
                                _currZoomElementStyle = baseDiv.style;
                                _showOrHide(item, (img ||item.img) );
                            } else {
                                _applyZoomPanToItem(item);
                            }

                            holder.el.innerHTML = '';
                            holder.el.appendChild(baseDiv);
                        },

                        cleanSlide: function( item ) {
                            if(item.img ) {
                                item.img.onload = item.img.onerror = null;
                            }
                            item.loaded = item.loading = item.img = item.imageAppended = false;
                        }

                    }
                });

                /*>>items-controller*/

                /*>>tap*/
                /**
                 * tap.js:
                 *
                 * Displatches tap and double-tap events.
                 *
                 */

                var tapTimer,
                    tapReleasePoint = {},
                    _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
                        var e = document.createEvent( 'CustomEvent' ),
                            eDetail = {
                                origEvent:origEvent,
                                target:origEvent.target,
                                releasePoint: releasePoint,
                                pointerType:pointerType || 'touch'
                            };

                        e.initCustomEvent( 'pswpTap', true, true, eDetail );
                        origEvent.target.dispatchEvent(e);
                    };

                _registerModule('Tap', {
                    publicMethods: {
                        initTap: function() {
                            _listen('firstTouchStart', self.onTapStart);
                            _listen('touchRelease', self.onTapRelease);
                            _listen('destroy', function() {
                                tapReleasePoint = {};
                                tapTimer = null;
                            });
                        },
                        onTapStart: function(touchList) {
                            if(touchList.length > 1) {
                                clearTimeout(tapTimer);
                                tapTimer = null;
                            }
                        },
                        onTapRelease: function(e, releasePoint) {
                            if(!releasePoint) {
                                return;
                            }

                            if(!_moved && !_isMultitouch && !_numAnimations) {
                                var p0 = releasePoint;
                                if(tapTimer) {
                                    clearTimeout(tapTimer);
                                    tapTimer = null;

                                    // Check if taped on the same place
                                    if ( _isNearbyPoints(p0, tapReleasePoint) ) {
                                        _shout('doubleTap', p0);
                                        return;
                                    }
                                }

                                if(releasePoint.type === 'mouse') {
                                    _dispatchTapEvent(e, releasePoint, 'mouse');
                                    return;
                                }

                                var clickedTagName = e.target.tagName.toUpperCase();
                                // avoid double tap delay on buttons and elements that have class pswp__single-tap
                                if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
                                    _dispatchTapEvent(e, releasePoint);
                                    return;
                                }

                                _equalizePoints(tapReleasePoint, p0);

                                tapTimer = setTimeout(function() {
                                    _dispatchTapEvent(e, releasePoint);
                                    tapTimer = null;
                                }, 300);
                            }
                        }
                    }
                });

                /*>>tap*/

                /*>>desktop-zoom*/
                /**
                 *
                 * desktop-zoom.js:
                 *
                 * - Binds mousewheel event for paning zoomed image.
                 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
                 *   (which are used for cursors and zoom icon)
                 * - Adds toggleDesktopZoom function.
                 *
                 */

                var _wheelDelta;

                _registerModule('DesktopZoom', {

                    publicMethods: {

                        initDesktopZoom: function() {

                            if(_oldIE) {
                                // no zoom for old IE (<=8)
                                return;
                            }

                            if(_likelyTouchDevice) {
                                // if detected hardware touch support, we wait until mouse is used,
                                // and only then apply desktop-zoom features
                                _listen('mouseUsed', function() {
                                    self.setupDesktopZoom();
                                });
                            } else {
                                self.setupDesktopZoom(true);
                            }

                        },

                        setupDesktopZoom: function(onInit) {

                            _wheelDelta = {};

                            var events = 'wheel mousewheel DOMMouseScroll';

                            _listen('bindEvents', function() {
                                framework.bind(template, events,  self.handleMouseWheel);
                            });

                            _listen('unbindEvents', function() {
                                if(_wheelDelta) {
                                    framework.unbind(template, events, self.handleMouseWheel);
                                }
                            });

                            self.mouseZoomedIn = false;

                            var hasDraggingClass,
                                updateZoomable = function() {
                                    if(self.mouseZoomedIn) {
                                        framework.removeClass(template, 'pswp--zoomed-in');
                                        self.mouseZoomedIn = false;
                                    }
                                    if(_currZoomLevel < 1) {
                                        framework.addClass(template, 'pswp--zoom-allowed');
                                    } else {
                                        framework.removeClass(template, 'pswp--zoom-allowed');
                                    }
                                    removeDraggingClass();
                                },
                                removeDraggingClass = function() {
                                    if(hasDraggingClass) {
                                        framework.removeClass(template, 'pswp--dragging');
                                        hasDraggingClass = false;
                                    }
                                };

                            _listen('resize' , updateZoomable);
                            _listen('afterChange' , updateZoomable);
                            _listen('pointerDown', function() {
                                if(self.mouseZoomedIn) {
                                    hasDraggingClass = true;
                                    framework.addClass(template, 'pswp--dragging');
                                }
                            });
                            _listen('pointerUp', removeDraggingClass);

                            if(!onInit) {
                                updateZoomable();
                            }

                        },

                        handleMouseWheel: function(e) {

                            if(_currZoomLevel <= self.currItem.fitRatio) {
                                if( _options.modal ) {

                                    if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                                        e.preventDefault();
                                    } else if(_transformKey && Math.abs(e.deltaY) > 2) {
                                        // close PhotoSwipe
                                        // if browser supports transforms & scroll changed enough
                                        _closedByScroll = true;
                                        self.close();
                                    }

                                }
                                return true;
                            }

                            // allow just one event to fire
                            e.stopPropagation();

                            // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
                            _wheelDelta.x = 0;

                            if('deltaX' in e) {
                                if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                                    // 18 - average line height
                                    _wheelDelta.x = e.deltaX * 18;
                                    _wheelDelta.y = e.deltaY * 18;
                                } else {
                                    _wheelDelta.x = e.deltaX;
                                    _wheelDelta.y = e.deltaY;
                                }
                            } else if('wheelDelta' in e) {
                                if(e.wheelDeltaX) {
                                    _wheelDelta.x = -0.16 * e.wheelDeltaX;
                                }
                                if(e.wheelDeltaY) {
                                    _wheelDelta.y = -0.16 * e.wheelDeltaY;
                                } else {
                                    _wheelDelta.y = -0.16 * e.wheelDelta;
                                }
                            } else if('detail' in e) {
                                _wheelDelta.y = e.detail;
                            } else {
                                return;
                            }

                            _calculatePanBounds(_currZoomLevel, true);

                            var newPanX = _panOffset.x - _wheelDelta.x,
                                newPanY = _panOffset.y - _wheelDelta.y;

                            // only prevent scrolling in nonmodal mode when not at edges
                            if (_options.modal ||
                                (
                                    newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                                    newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                                ) ) {
                                e.preventDefault();
                            }

                            self.panTo(newPanX, newPanY);
                        },

                        toggleDesktopZoom: function(centerPoint) {
                            centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

                            var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
                            var zoomOut = _currZoomLevel === doubleTapZoomLevel;

                            self.mouseZoomedIn = !zoomOut;

                            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                            framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                        }

                    }
                });


                /*>>desktop-zoom*/

                /*>>history*/
                /**
                 *
                 * history.js:
                 *
                 * - Back button to close gallery.
                 *
                 * - Unique URL for each slide: example.com/&pid=1&gid=3
                 *   (where PID is picture index, and GID and gallery index)
                 *
                 * - Switch URL when slides change.
                 *
                 */


                var _historyDefaultOptions = {
                    history: true,
                    galleryUID: 1
                };

                var _historyUpdateTimeout,
                    _hashChangeTimeout,
                    _hashAnimCheckTimeout,
                    _hashChangedByScript,
                    _hashChangedByHistory,
                    _hashReseted,
                    _initialHash,
                    _historyChanged,
                    _closedFromURL,
                    _urlChangedOnce,
                    _windowLoc,

                    _supportsPushState,

                    _getHash = function() {
                        return _windowLoc.hash.substring(1);
                    },
                    _cleanHistoryTimeouts = function() {

                        if(_historyUpdateTimeout) {
                            clearTimeout(_historyUpdateTimeout);
                        }

                        if(_hashAnimCheckTimeout) {
                            clearTimeout(_hashAnimCheckTimeout);
                        }
                    },

                    // pid - Picture index
                    // gid - Gallery index
                    _parseItemIndexFromURL = function() {
                        var hash = _getHash(),
                            params = {};

                        if(hash.length < 5) { // pid=1
                            return params;
                        }

                        var i, vars = hash.split('&');
                        for (i = 0; i < vars.length; i++) {
                            if(!vars[i]) {
                                continue;
                            }
                            var pair = vars[i].split('=');
                            if(pair.length < 2) {
                                continue;
                            }
                            params[pair[0]] = pair[1];
                        }
                        if(_options.galleryPIDs) {
                            // detect custom pid in hash and search for it among the items collection
                            var searchfor = params.pid;
                            params.pid = 0; // if custom pid cannot be found, fallback to the first item
                            for(i = 0; i < _items.length; i++) {
                                if(_items[i].pid === searchfor) {
                                    params.pid = i;
                                    break;
                                }
                            }
                        } else {
                            params.pid = parseInt(params.pid,10)-1;
                        }
                        if( params.pid < 0 ) {
                            params.pid = 0;
                        }
                        return params;
                    },
                    _updateHash = function() {

                        if(_hashAnimCheckTimeout) {
                            clearTimeout(_hashAnimCheckTimeout);
                        }


                        if(_numAnimations || _isDragging) {
                            // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
                            // that's why we update hash only when no animations running
                            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
                            return;
                        }

                        if(_hashChangedByScript) {
                            clearTimeout(_hashChangeTimeout);
                        } else {
                            _hashChangedByScript = true;
                        }


                        var pid = (_currentItemIndex + 1);
                        var item = _getItemAt( _currentItemIndex );
                        if(item.hasOwnProperty('pid')) {
                            // carry forward any custom pid assigned to the item
                            pid = item.pid;
                        }
                        var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

                        if(!_historyChanged) {
                            if(_windowLoc.hash.indexOf(newHash) === -1) {
                                _urlChangedOnce = true;
                            }
                            // first time - add new hisory record, then just replace
                        }

                        var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

                        if( _supportsPushState ) {

                            if('#' + newHash !== window.location.hash) {
                                history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
                            }

                        } else {
                            if(_historyChanged) {
                                _windowLoc.replace( newURL );
                            } else {
                                _windowLoc.hash = newHash;
                            }
                        }



                        _historyChanged = true;
                        _hashChangeTimeout = setTimeout(function() {
                            _hashChangedByScript = false;
                        }, 60);
                    };





                _registerModule('History', {



                    publicMethods: {
                        initHistory: function() {

                            framework.extend(_options, _historyDefaultOptions, true);

                            if( !_options.history ) {
                                return;
                            }


                            _windowLoc = window.location;
                            _urlChangedOnce = false;
                            _closedFromURL = false;
                            _historyChanged = false;
                            _initialHash = _getHash();
                            _supportsPushState = ('pushState' in history);


                            if(_initialHash.indexOf('gid=') > -1) {
                                _initialHash = _initialHash.split('&gid=')[0];
                                _initialHash = _initialHash.split('?gid=')[0];
                            }


                            _listen('afterChange', self.updateURL);
                            _listen('unbindEvents', function() {
                                framework.unbind(window, 'hashchange', self.onHashChange);
                            });


                            var returnToOriginal = function() {
                                _hashReseted = true;
                                if(!_closedFromURL) {

                                    if(_urlChangedOnce) {
                                        history.back();
                                    } else {

                                        if(_initialHash) {
                                            _windowLoc.hash = _initialHash;
                                        } else {
                                            if (_supportsPushState) {

                                                // remove hash from url without refreshing it or scrolling to top
                                                history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
                                            } else {
                                                _windowLoc.hash = '';
                                            }
                                        }
                                    }

                                }

                                _cleanHistoryTimeouts();
                            };


                            _listen('unbindEvents', function() {
                                if(_closedByScroll) {
                                    // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                                    // this is done to keep the scroll position
                                    returnToOriginal();
                                }
                            });
                            _listen('destroy', function() {
                                if(!_hashReseted) {
                                    returnToOriginal();
                                }
                            });
                            _listen('firstUpdate', function() {
                                _currentItemIndex = _parseItemIndexFromURL().pid;
                            });




                            var index = _initialHash.indexOf('pid=');
                            if(index > -1) {
                                _initialHash = _initialHash.substring(0, index);
                                if(_initialHash.slice(-1) === '&') {
                                    _initialHash = _initialHash.slice(0, -1);
                                }
                            }


                            setTimeout(function() {
                                if(_isOpen) { // hasn't destroyed yet
                                    framework.bind(window, 'hashchange', self.onHashChange);
                                }
                            }, 40);

                        },
                        onHashChange: function() {

                            if(_getHash() === _initialHash) {

                                _closedFromURL = true;
                                self.close();
                                return;
                            }
                            if(!_hashChangedByScript) {

                                _hashChangedByHistory = true;
                                self.goTo( _parseItemIndexFromURL().pid );
                                _hashChangedByHistory = false;
                            }

                        },
                        updateURL: function() {

                            // Delay the update of URL, to avoid lag during transition,
                            // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

                            _cleanHistoryTimeouts();


                            if(_hashChangedByHistory) {
                                return;
                            }

                            if(!_historyChanged) {
                                _updateHash(); // first time
                            } else {
                                _historyUpdateTimeout = setTimeout(_updateHash, 800);
                            }
                        }

                    }
                });


                /*>>history*/
                framework.extend(self, publicMethods); };
            return PhotoSwipe;
        });
    },{}],2:[function(require,module,exports){
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PhotoSwipe = exports.default = undefined;

        var _photoswipe = require('photoswipe');

        var _photoswipe2 = _interopRequireDefault(_photoswipe);

        var _photoswipeUiDefault = require('./libs/photoswipe-ui-default');

        var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        function PhotoSwipeMounter($) {
            var $defaultGallery = $('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>').appendTo('body'),
                uid = 1;

            function getImgs($gallery) {
                var slideSelector = getOptions($gallery).slideSelector;

                return $gallery.find(slideSelector).map(function (index) {
                    var $img = $(this).data('index', index),
                        tagName = this.tagName.toUpperCase();

                    if (tagName === 'A') {
                        if (this.hash) {
                            $img = $(this.hash);
                        } else {
                            $img = $img.find('img').eq(0);
                            $img.data('original-src', this.href);
                        }
                    } else if (tagName !== 'IMG') {
                        $img = $img.find('img');
                    }

                    return $img[0];
                });
            }

            function getThumbBoundsFn($imgs) {
                return function _getThumbBoundsFn(index) {
                    var $img = $imgs.eq(index),
                        imgOffset = $img.offset(),
                        imgWidth = $img[0].width;

                    return { x: imgOffset.left, y: imgOffset.top, w: imgWidth };
                };
            }

            function getWH(wh, $img) {
                var d = $.Deferred(),
                    wh_value = $img.data('original-src-' + wh),
                    original_src = decodeURI($img.data('original-src') || $img.attr('src')),
                    matches = original_src.match(/(\d+)[*×x](\d+)/);

                if (wh_value) {
                    d.resolve(wh_value);
                } else if (matches !== null) {
                    d.resolve(matches[wh === 'width' ? 1 : 2]);
                } else {
                    $('<img>').on('load', function () {
                        d.resolve(this[wh]);
                    }).attr('src', $img.attr('src'));
                }

                return d.promise();
            }

            function getHeight($img) {
                return getWH('height', $img);
            }

            function getWidth($img) {
                return getWH('width', $img);
            }

            function getImgSize($img) {
                return $.when(getWidth($img), getHeight($img));
            }

            function getImgInfo() {
                var $img = $(this),
                    original_src = $img.data('original-src') || $img.attr('src'),
                    d = $.Deferred();

                if (this.tagName !== 'IMG') {
                    d.resolve({
                        html: this.innerHTML
                    });
                } else {
                    getImgSize($img).done(function (w, h) {
                        var src = $img.attr('src'),
                            title,
                            caption_classname,
                            $figcaption;

                        function get_caption($elem, selector) {
                            var $parent = $elem.parent(),
                                $caption_element;

                            if (!$parent.length) {
                                return undefined;
                            }

                            $caption_element = $parent.find(selector);
                            if ($caption_element.length) {
                                return $caption_element.html();
                            }

                            return get_caption($parent, selector);
                        }

                        // try to find the slide title from :
                        // (in order)
                        //
                        // 1. `data-caption-class` (a class-name that indicates the element containing the caption)
                        // 2. `figcaption` element (the `figcaption` that resides inside a `figure` which contains the slide `img` element)
                        // 3. `alt` attribute (the `alt` attribute of the slide `img` element)

                        if (caption_classname = $img.data('caption-class')) {
                            title = get_caption($img, '.' + caption_classname);
                        } else if (($figcaption = $img.closest('figure').find('figcaption')) && $figcaption.length) {
                            title = $figcaption.html();
                        } else {
                            title = $img.attr('alt');
                        }

                        d.resolve({
                            w: w,
                            h: h,
                            src: original_src,
                            msrc: src,
                            title: title
                        });
                    });
                }

                return d.promise();
            }

            function getImgInfoArray($imgs) {
                var imgInfoArray = $imgs.map(getImgInfo).get(),
                    d = $.Deferred();

                $.when.apply($, imgInfoArray).done(function () {
                    var imgInfoArray = Array.prototype.slice.call(arguments);
                    d.resolve(imgInfoArray);
                });

                return d.promise();
            }

            function getOptions($gallery) {
                return $gallery.data('photoswipeOptions');
            }

            function addUID($gallery) {
                if (!$gallery.data('pswp-uid')) {
                    $gallery.data('pswp-uid', uid++);
                }
            }

            function openPhotoSwipe(index, $gallery, $imgs, imgInfoArray) {
                var options = $.extend(getOptions($gallery).globalOptions, { index: index, getThumbBoundsFn: getThumbBoundsFn($imgs), galleryUID: $gallery.data('pswp-uid') }),
                    photoSwipe = new _photoswipe2.default($defaultGallery[0], _photoswipeUiDefault2.default, imgInfoArray, options);

                $.each(getOptions($gallery).events, function (eventName, eventHandler) {
                    photoSwipe.listen(eventName, eventHandler);
                });

                photoSwipe.init();
            }

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            function photoswipeParseHash() {
                var hash = window.location.hash.substring(1),
                    params = {};

                if (hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = parseInt(pair[1], 10);
                }

                return params;
            }

            function openFromURL($galleries) {
                // Parse URL and open gallery if it contains #&pid=3&gid=1
                var hashData = photoswipeParseHash();
                if (hashData.pid && hashData.gid) {
                    (function () {
                        var $gallery = $galleries[hashData.gid - 1],
                            pid = hashData.pid - 1,
                            $imgs = getImgs($gallery),
                            imgInfoArrayPromise = getImgInfoArray($imgs);

                        imgInfoArrayPromise.done(function (imgInfoArray) {
                            openPhotoSwipe(pid, $gallery, $imgs, imgInfoArray);
                        });
                    })();
                }
            }

            function addClickHandler($gallery, $imgs, imgInfoArray) {
                $gallery.on('click.photoswipe', getOptions($gallery).slideSelector, function (e) {
                    e.preventDefault();
                    openPhotoSwipe($(this).data('index'), $gallery, $imgs, imgInfoArray);
                });
            }

            function removeClickHandler($gallery) {
                $gallery.off('click.photoswipe');
            }

            function update($gallery) {
                var $imgs = getImgs($gallery),
                    imgInfoArrayPromise = getImgInfoArray($imgs);

                imgInfoArrayPromise.done(function (imgInfoArray) {
                    removeClickHandler($gallery);
                    addClickHandler($gallery, $imgs, imgInfoArray);
                });
            }

            $.fn.photoSwipe = function () {
                var slideSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'img';
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                var defaultOptions = {
                        bgOpacity: 0.973,
                        showHideOpacity: true
                    },
                    globalOptions = $.extend(defaultOptions, options);

                // Initialize each gallery
                var $galleries = [],
                    isUpdate = slideSelector === 'update';

                this.each(function () {
                    if (isUpdate) {
                        update($(this));
                        return;
                    }

                    var $gallery = $(this).data('photoswipeOptions', { slideSelector: slideSelector, globalOptions: globalOptions, events: events }),
                        // save options
                        $imgs = getImgs($gallery),
                        imgInfoArrayPromise = getImgInfoArray($imgs);

                    addUID($gallery);
                    $galleries.push($gallery);

                    imgInfoArrayPromise.done(function (imgInfoArray) {
                        addClickHandler($gallery, $imgs, imgInfoArray);
                    });
                });

                if (!isUpdate) {
                    openFromURL($galleries);
                }

                return this;
            };

            // Attach original PhotoSwipe to $.fn.photoSwipe
            $.fn.photoSwipe.PhotoSwipe = _photoswipe2.default;
        }


        PhotoSwipeMounter(jQuery);


        exports.default = PhotoSwipeMounter;
        exports.PhotoSwipe = _photoswipe2.default;

    },{"./libs/photoswipe-ui-default":3,"photoswipe":1}],3:[function(require,module,exports){
        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        /*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
        /**
         *
         * UI on top of main sliding area (caption, arrows, close button, etc.).
         * Built just using public methods/properties of PhotoSwipe.
         *
         */
        (function (root, factory) {
            if (typeof define === 'function' && define.amd) {
                define(factory);
            } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
                module.exports = factory();
            } else {
                root.PhotoSwipeUI_Default = factory();
            }
        })(undefined, function () {

            'use strict';

            var PhotoSwipeUI_Default = function PhotoSwipeUI_Default(pswp, framework) {

                var ui = this;
                var _overlayUIUpdated = false,
                    _controlsVisible = true,
                    _fullscrenAPI,
                    _controls,
                    _captionContainer,
                    _fakeCaptionContainer,
                    _indexIndicator,
                    _shareButton,
                    _shareModal,
                    _shareModalHidden = true,
                    _initalCloseOnScrollValue,
                    _isIdle,
                    _listen,
                    _loadingIndicator,
                    _loadingIndicatorHidden,
                    _loadingIndicatorTimeout,
                    _galleryHasOneSlide,
                    _options,
                    _defaultUIOptions = {
                        barsSize: { top: 44, bottom: 'auto' },
                        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
                        timeToIdle: 4000,
                        timeToIdleOutside: 1000,
                        loadingIndicatorDelay: 1000, // 2s

                        addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl /*, isFake */) {
                            if (!item.title) {
                                captionEl.children[0].innerHTML = '';
                                return false;
                            }
                            captionEl.children[0].innerHTML = item.title;
                            return true;
                        },

                        closeEl: true,
                        captionEl: true,
                        fullscreenEl: true,
                        zoomEl: true,
                        shareEl: true,
                        counterEl: true,
                        arrowEl: true,
                        preloaderEl: true,

                        tapToClose: false,
                        tapToToggleControls: true,

                        clickToCloseNonZoomable: true,

                        shareButtons: [{ id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}' }, { id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}' }, { id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/' + '?url={{url}}&media={{image_url}}&description={{text}}' }, { id: 'download', label: 'Download image', url: '{{raw_image_url}}', download: true }],
                        getImageURLForShare: function getImageURLForShare() /* shareButtonData */{
                            return pswp.currItem.src || '';
                        },
                        getPageURLForShare: function getPageURLForShare() /* shareButtonData */{
                            return window.location.href;
                        },
                        getTextForShare: function getTextForShare() /* shareButtonData */{
                            return pswp.currItem.title || '';
                        },

                        indexIndicatorSep: ' / ',
                        fitControlsWidth: 1200

                    },
                    _blockControlsTap,
                    _blockControlsTapTimeout;

                var _onControlsTap = function _onControlsTap(e) {
                        if (_blockControlsTap) {
                            return true;
                        }

                        e = e || window.event;

                        if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
                            // reset idle timer
                            _onIdleMouseMove();
                        }

                        var target = e.target || e.srcElement,
                            uiElement,
                            clickedClass = target.getAttribute('class') || '',
                            found;

                        for (var i = 0; i < _uiElements.length; i++) {
                            uiElement = _uiElements[i];
                            if (uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name) > -1) {
                                uiElement.onTap();
                                found = true;
                            }
                        }

                        if (found) {
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            _blockControlsTap = true;

                            // Some versions of Android don't prevent ghost click event
                            // when preventDefault() was called on touchstart and/or touchend.
                            //
                            // This happens on v4.3, 4.2, 4.1,
                            // older versions strangely work correctly,
                            // but just in case we add delay on all of them)
                            var tapDelay = framework.features.isOldAndroid ? 600 : 30;
                            _blockControlsTapTimeout = setTimeout(function () {
                                _blockControlsTap = false;
                            }, tapDelay);
                        }
                    },
                    _fitControlsInViewport = function _fitControlsInViewport() {
                        return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
                    },
                    _togglePswpClass = function _togglePswpClass(el, cName, add) {
                        framework[(add ? 'add' : 'remove') + 'Class'](el, 'pswp__' + cName);
                    },


                    // add class when there is just one item in the gallery
                    // (by default it hides left/right arrows and 1ofX counter)
                    _countNumItems = function _countNumItems() {
                        var hasOneSlide = _options.getNumItemsFn() === 1;

                        if (hasOneSlide !== _galleryHasOneSlide) {
                            _togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
                            _galleryHasOneSlide = hasOneSlide;
                        }
                    },
                    _toggleShareModalClass = function _toggleShareModalClass() {
                        _togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
                    },
                    _toggleShareModal = function _toggleShareModal() {

                        _shareModalHidden = !_shareModalHidden;

                        if (!_shareModalHidden) {
                            _toggleShareModalClass();
                            setTimeout(function () {
                                if (!_shareModalHidden) {
                                    framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
                                }
                            }, 30);
                        } else {
                            framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
                            setTimeout(function () {
                                if (_shareModalHidden) {
                                    _toggleShareModalClass();
                                }
                            }, 300);
                        }

                        if (!_shareModalHidden) {
                            _updateShareURLs();
                        }
                        return false;
                    },
                    _openWindowPopup = function _openWindowPopup(e) {
                        e = e || window.event;
                        var target = e.target || e.srcElement;

                        pswp.shout('shareLinkClick', e, target);

                        if (!target.href) {
                            return false;
                        }

                        if (target.hasAttribute('download')) {
                            return true;
                        }

                        window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,' + 'location=yes,width=550,height=420,top=100,left=' + (window.screen ? Math.round(screen.width / 2 - 275) : 100));

                        if (!_shareModalHidden) {
                            _toggleShareModal();
                        }

                        return false;
                    },
                    _updateShareURLs = function _updateShareURLs() {
                        var shareButtonOut = '',
                            shareButtonData,
                            shareURL,
                            image_url,
                            page_url,
                            share_text;

                        for (var i = 0; i < _options.shareButtons.length; i++) {
                            shareButtonData = _options.shareButtons[i];

                            image_url = _options.getImageURLForShare(shareButtonData);
                            page_url = _options.getPageURLForShare(shareButtonData);
                            share_text = _options.getTextForShare(shareButtonData);

                            shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url)).replace('{{image_url}}', encodeURIComponent(image_url)).replace('{{raw_image_url}}', image_url).replace('{{text}}', encodeURIComponent(share_text));

                            shareButtonOut += '<a href="' + shareURL + '" target="_blank" ' + 'class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? 'download' : '') + '>' + shareButtonData.label + '</a>';

                            if (_options.parseShareButtonOut) {
                                shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
                            }
                        }
                        _shareModal.children[0].innerHTML = shareButtonOut;
                        _shareModal.children[0].onclick = _openWindowPopup;
                    },
                    _hasCloseClass = function _hasCloseClass(target) {
                        for (var i = 0; i < _options.closeElClasses.length; i++) {
                            if (framework.hasClass(target, 'pswp__' + _options.closeElClasses[i])) {
                                return true;
                            }
                        }
                    },
                    _idleInterval,
                    _idleTimer,
                    _idleIncrement = 0,
                    _onIdleMouseMove = function _onIdleMouseMove() {
                        clearTimeout(_idleTimer);
                        _idleIncrement = 0;
                        if (_isIdle) {
                            ui.setIdle(false);
                        }
                    },
                    _onMouseLeaveWindow = function _onMouseLeaveWindow(e) {
                        e = e ? e : window.event;
                        var from = e.relatedTarget || e.toElement;
                        if (!from || from.nodeName === 'HTML') {
                            clearTimeout(_idleTimer);
                            _idleTimer = setTimeout(function () {
                                ui.setIdle(true);
                            }, _options.timeToIdleOutside);
                        }
                    },
                    _setupFullscreenAPI = function _setupFullscreenAPI() {
                        if (_options.fullscreenEl && !framework.features.isOldAndroid) {
                            if (!_fullscrenAPI) {
                                _fullscrenAPI = ui.getFullscreenAPI();
                            }
                            if (_fullscrenAPI) {
                                framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                                ui.updateFullscreen();
                                framework.addClass(pswp.template, 'pswp--supports-fs');
                            } else {
                                framework.removeClass(pswp.template, 'pswp--supports-fs');
                            }
                        }
                    },
                    _setupLoadingIndicator = function _setupLoadingIndicator() {
                        // Setup loading indicator
                        if (_options.preloaderEl) {

                            _toggleLoadingIndicator(true);

                            _listen('beforeChange', function () {

                                clearTimeout(_loadingIndicatorTimeout);

                                // display loading indicator with delay
                                _loadingIndicatorTimeout = setTimeout(function () {

                                    if (pswp.currItem && pswp.currItem.loading) {

                                        if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                                            // show preloader if progressive loading is not enabled,
                                            // or image width is not defined yet (because of slow connection)
                                            _toggleLoadingIndicator(false);
                                            // items-controller.js function allowProgressiveImg
                                        }
                                    } else {
                                        _toggleLoadingIndicator(true); // hide preloader
                                    }
                                }, _options.loadingIndicatorDelay);
                            });
                            _listen('imageLoadComplete', function (index, item) {
                                if (pswp.currItem === item) {
                                    _toggleLoadingIndicator(true);
                                }
                            });
                        }
                    },
                    _toggleLoadingIndicator = function _toggleLoadingIndicator(hide) {
                        if (_loadingIndicatorHidden !== hide) {
                            _togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
                            _loadingIndicatorHidden = hide;
                        }
                    },
                    _applyNavBarGaps = function _applyNavBarGaps(item) {
                        var gap = item.vGap;

                        if (_fitControlsInViewport()) {

                            var bars = _options.barsSize;
                            if (_options.captionEl && bars.bottom === 'auto') {
                                if (!_fakeCaptionContainer) {
                                    _fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
                                    _fakeCaptionContainer.appendChild(framework.createEl('pswp__caption__center'));
                                    _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
                                    framework.addClass(_controls, 'pswp__ui--fit');
                                }
                                if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {

                                    var captionSize = _fakeCaptionContainer.clientHeight;
                                    gap.bottom = parseInt(captionSize, 10) || 44;
                                } else {
                                    gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
                                }
                            } else {
                                gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
                            }

                            // height of top bar is static, no need to calculate it
                            gap.top = bars.top;
                        } else {
                            gap.top = gap.bottom = 0;
                        }
                    },
                    _setupIdle = function _setupIdle() {
                        // Hide controls when mouse is used
                        if (_options.timeToIdle) {
                            _listen('mouseUsed', function () {

                                framework.bind(document, 'mousemove', _onIdleMouseMove);
                                framework.bind(document, 'mouseout', _onMouseLeaveWindow);

                                _idleInterval = setInterval(function () {
                                    _idleIncrement++;
                                    if (_idleIncrement === 2) {
                                        ui.setIdle(true);
                                    }
                                }, _options.timeToIdle / 2);
                            });
                        }
                    },
                    _setupHidingControlsDuringGestures = function _setupHidingControlsDuringGestures() {

                        // Hide controls on vertical drag
                        _listen('onVerticalDrag', function (now) {
                            if (_controlsVisible && now < 0.95) {
                                ui.hideControls();
                            } else if (!_controlsVisible && now >= 0.95) {
                                ui.showControls();
                            }
                        });

                        // Hide controls when pinching to close
                        var pinchControlsHidden;
                        _listen('onPinchClose', function (now) {
                            if (_controlsVisible && now < 0.9) {
                                ui.hideControls();
                                pinchControlsHidden = true;
                            } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
                                ui.showControls();
                            }
                        });

                        _listen('zoomGestureEnded', function () {
                            pinchControlsHidden = false;
                            if (pinchControlsHidden && !_controlsVisible) {
                                ui.showControls();
                            }
                        });
                    };

                var _uiElements = [{
                    name: 'caption',
                    option: 'captionEl',
                    onInit: function onInit(el) {
                        _captionContainer = el;
                    }
                }, {
                    name: 'share-modal',
                    option: 'shareEl',
                    onInit: function onInit(el) {
                        _shareModal = el;
                    },
                    onTap: function onTap() {
                        _toggleShareModal();
                    }
                }, {
                    name: 'button--share',
                    option: 'shareEl',
                    onInit: function onInit(el) {
                        _shareButton = el;
                    },
                    onTap: function onTap() {
                        _toggleShareModal();
                    }
                }, {
                    name: 'button--zoom',
                    option: 'zoomEl',
                    onTap: pswp.toggleDesktopZoom
                }, {
                    name: 'counter',
                    option: 'counterEl',
                    onInit: function onInit(el) {
                        _indexIndicator = el;
                    }
                }, {
                    name: 'button--close',
                    option: 'closeEl',
                    onTap: pswp.close
                }, {
                    name: 'button--arrow--left',
                    option: 'arrowEl',
                    onTap: pswp.prev
                }, {
                    name: 'button--arrow--right',
                    option: 'arrowEl',
                    onTap: pswp.next
                }, {
                    name: 'button--fs',
                    option: 'fullscreenEl',
                    onTap: function onTap() {
                        if (_fullscrenAPI.isFullscreen()) {
                            _fullscrenAPI.exit();
                        } else {
                            _fullscrenAPI.enter();
                        }
                    }
                }, {
                    name: 'preloader',
                    option: 'preloaderEl',
                    onInit: function onInit(el) {
                        _loadingIndicator = el;
                    }
                }];

                var _setupUIElements = function _setupUIElements() {
                    var item, classAttr, uiElement;

                    var loopThroughChildElements = function loopThroughChildElements(sChildren) {
                        if (!sChildren) {
                            return;
                        }

                        var l = sChildren.length;
                        for (var i = 0; i < l; i++) {
                            item = sChildren[i];
                            classAttr = item.className;

                            for (var a = 0; a < _uiElements.length; a++) {
                                uiElement = _uiElements[a];

                                if (classAttr.indexOf('pswp__' + uiElement.name) > -1) {

                                    if (_options[uiElement.option]) {
                                        // if element is not disabled from options

                                        framework.removeClass(item, 'pswp__element--disabled');
                                        if (uiElement.onInit) {
                                            uiElement.onInit(item);
                                        }

                                        //item.style.display = 'block';
                                    } else {
                                        framework.addClass(item, 'pswp__element--disabled');
                                        //item.style.display = 'none';
                                    }
                                }
                            }
                        }
                    };
                    loopThroughChildElements(_controls.children);

                    var topBar = framework.getChildByClass(_controls, 'pswp__top-bar');
                    if (topBar) {
                        loopThroughChildElements(topBar.children);
                    }
                };

                ui.init = function () {

                    // extend options
                    framework.extend(pswp.options, _defaultUIOptions, true);

                    // create local link for fast access
                    _options = pswp.options;

                    // find pswp__ui element
                    _controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

                    // create local link
                    _listen = pswp.listen;

                    _setupHidingControlsDuringGestures();

                    // update controls when slides change
                    _listen('beforeChange', ui.update);

                    // toggle zoom on double-tap
                    _listen('doubleTap', function (point) {
                        var initialZoomLevel = pswp.currItem.initialZoomLevel;
                        if (pswp.getZoomLevel() !== initialZoomLevel) {
                            pswp.zoomTo(initialZoomLevel, point, 333);
                        } else {
                            pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
                        }
                    });

                    // Allow text selection in caption
                    _listen('preventDragEvent', function (e, isDown, preventObj) {
                        var t = e.target || e.srcElement;
                        if (t && t.getAttribute('class') && e.type.indexOf('mouse') > -1 && (t.getAttribute('class').indexOf('__caption') > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
                            preventObj.prevent = false;
                        }
                    });

                    // bind events for UI
                    _listen('bindEvents', function () {
                        framework.bind(_controls, 'pswpTap click', _onControlsTap);
                        framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

                        if (!pswp.likelyTouchDevice) {
                            framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
                        }
                    });

                    // unbind events for UI
                    _listen('unbindEvents', function () {
                        if (!_shareModalHidden) {
                            _toggleShareModal();
                        }

                        if (_idleInterval) {
                            clearInterval(_idleInterval);
                        }
                        framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
                        framework.unbind(document, 'mousemove', _onIdleMouseMove);
                        framework.unbind(_controls, 'pswpTap click', _onControlsTap);
                        framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
                        framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

                        if (_fullscrenAPI) {
                            framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
                            if (_fullscrenAPI.isFullscreen()) {
                                _options.hideAnimationDuration = 0;
                                _fullscrenAPI.exit();
                            }
                            _fullscrenAPI = null;
                        }
                    });

                    // clean up things when gallery is destroyed
                    _listen('destroy', function () {
                        if (_options.captionEl) {
                            if (_fakeCaptionContainer) {
                                _controls.removeChild(_fakeCaptionContainer);
                            }
                            framework.removeClass(_captionContainer, 'pswp__caption--empty');
                        }

                        if (_shareModal) {
                            _shareModal.children[0].onclick = null;
                        }
                        framework.removeClass(_controls, 'pswp__ui--over-close');
                        framework.addClass(_controls, 'pswp__ui--hidden');
                        ui.setIdle(false);
                    });

                    if (!_options.showAnimationDuration) {
                        framework.removeClass(_controls, 'pswp__ui--hidden');
                    }
                    _listen('initialZoomIn', function () {
                        if (_options.showAnimationDuration) {
                            framework.removeClass(_controls, 'pswp__ui--hidden');
                        }
                    });
                    _listen('initialZoomOut', function () {
                        framework.addClass(_controls, 'pswp__ui--hidden');
                    });

                    _listen('parseVerticalMargin', _applyNavBarGaps);

                    _setupUIElements();

                    if (_options.shareEl && _shareButton && _shareModal) {
                        _shareModalHidden = true;
                    }

                    _countNumItems();

                    _setupIdle();

                    _setupFullscreenAPI();

                    _setupLoadingIndicator();
                };

                ui.setIdle = function (isIdle) {
                    _isIdle = isIdle;
                    _togglePswpClass(_controls, 'ui--idle', isIdle);
                };

                ui.update = function () {
                    // Don't update UI if it's hidden
                    if (_controlsVisible && pswp.currItem) {

                        ui.updateIndexIndicator();

                        if (_options.captionEl) {
                            _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

                            _togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
                        }

                        _overlayUIUpdated = true;
                    } else {
                        _overlayUIUpdated = false;
                    }

                    if (!_shareModalHidden) {
                        _toggleShareModal();
                    }

                    _countNumItems();
                };

                ui.updateFullscreen = function (e) {

                    if (e) {
                        // some browsers change window scroll position during the fullscreen
                        // so PhotoSwipe updates it just in case
                        setTimeout(function () {
                            pswp.setScrollOffset(0, framework.getScrollY());
                        }, 50);
                    }

                    // toogle pswp--fs class on root element
                    framework[(_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class'](pswp.template, 'pswp--fs');
                };

                ui.updateIndexIndicator = function () {
                    if (_options.counterEl) {
                        _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
                    }
                };

                ui.onGlobalTap = function (e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;

                    if (_blockControlsTap) {
                        return;
                    }

                    if (e.detail && e.detail.pointerType === 'mouse') {

                        // close gallery if clicked outside of the image
                        if (_hasCloseClass(target)) {
                            pswp.close();
                            return;
                        }

                        if (framework.hasClass(target, 'pswp__img')) {
                            if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
                                if (_options.clickToCloseNonZoomable) {
                                    pswp.close();
                                }
                            } else {
                                pswp.toggleDesktopZoom(e.detail.releasePoint);
                            }
                        }
                    } else {

                        // tap anywhere (except buttons) to toggle visibility of controls
                        if (_options.tapToToggleControls) {
                            if (_controlsVisible) {
                                ui.hideControls();
                            } else {
                                ui.showControls();
                            }
                        }

                        // tap to close gallery
                        if (_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target))) {
                            pswp.close();
                            return;
                        }
                    }
                };
                ui.onMouseOver = function (e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;

                    // add class when mouse is over an element that should close the gallery
                    _togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
                };

                ui.hideControls = function () {
                    framework.addClass(_controls, 'pswp__ui--hidden');
                    _controlsVisible = false;
                };

                ui.showControls = function () {
                    _controlsVisible = true;
                    if (!_overlayUIUpdated) {
                        ui.update();
                    }
                    framework.removeClass(_controls, 'pswp__ui--hidden');
                };

                ui.supportsFullscreen = function () {
                    var d = document;
                    return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
                };

                ui.getFullscreenAPI = function () {
                    var dE = document.documentElement,
                        api,
                        tF = 'fullscreenchange';

                    if (dE.requestFullscreen) {
                        api = {
                            enterK: 'requestFullscreen',
                            exitK: 'exitFullscreen',
                            elementK: 'fullscreenElement',
                            eventK: tF
                        };
                    } else if (dE.mozRequestFullScreen) {
                        api = {
                            enterK: 'mozRequestFullScreen',
                            exitK: 'mozCancelFullScreen',
                            elementK: 'mozFullScreenElement',
                            eventK: 'moz' + tF
                        };
                    } else if (dE.webkitRequestFullscreen) {
                        api = {
                            enterK: 'webkitRequestFullscreen',
                            exitK: 'webkitExitFullscreen',
                            elementK: 'webkitFullscreenElement',
                            eventK: 'webkit' + tF
                        };
                    } else if (dE.msRequestFullscreen) {
                        api = {
                            enterK: 'msRequestFullscreen',
                            exitK: 'msExitFullscreen',
                            elementK: 'msFullscreenElement',
                            eventK: 'MSFullscreenChange'
                        };
                    }

                    if (api) {
                        api.enter = function () {
                            // disable close-on-scroll in fullscreen
                            _initalCloseOnScrollValue = _options.closeOnScroll;
                            _options.closeOnScroll = false;

                            if (this.enterK === 'webkitRequestFullscreen') {
                                pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                            } else {
                                return pswp.template[this.enterK]();
                            }
                        };
                        api.exit = function () {
                            _options.closeOnScroll = _initalCloseOnScrollValue;

                            return document[this.exitK]();
                        };
                        api.isFullscreen = function () {
                            return document[this.elementK];
                        };
                    }

                    return api;
                };
            };
            return PhotoSwipeUI_Default;
        });

    },{}]},{},[2]);

$(".certificates__grid").photoSwipe();

/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map

if ($(".page").width() >= 720) {
    $(".animate__fadeinup").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated fadeInUp",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated fadeInUp",
        offset: 100
    });

    $(".animate__fadeinleft").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated fadeInLeft",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated fadeInLeft",
        offset: 100
    });

    $(".animate__fadeinright").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated fadeInRight",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated fadeInRight",
        offset: 100,
        callbackFunction: function(elem) {
            $(elem).parent().addClass("animate__overflow-hidden");
            setTimeout( function() {
                $(elem).parent().removeClass("animate__overflow-hidden");
            }, 2000);
        }
    });

    $(".animate__slideinleft").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated slideInLeft",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated slideInLeft",
        offset: 100
    });

    $(".animate__slideinright").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated slideInRight",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated slideInRight",
        offset: 100,
        callbackFunction: function(elem) {
            $(elem).parent().addClass("animate__overflow-hidden");
            setTimeout( function() {
                $(elem).parent().removeClass("animate__overflow-hidden");
            }, 2000);
        }
    });

    $(".animate__slideinup").addClass("animate__hidden").viewportChecker({
        classToAdd: "animated slideInUp",
        classToRemove: "animate__hidden",
        removeClassAfterAnimation: "animated slideInUp",
        offset: 100
    });
}
