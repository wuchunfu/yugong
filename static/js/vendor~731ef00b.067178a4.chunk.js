(this.webpackJsonpyugong=this.webpackJsonpyugong||[]).push([[44],{1262:function(e,n,t){var i=t(1263),r=t(685),a=t(1266),o=t(1267),c=t(376),s=t(1271),l=t(1272),u={exports:{}};function g(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||g(t)})),e}u.exports=g,u.exports.default=g;var d=u.exports,h=function(){"use strict";function e(n){s(this,e),void 0===n.data&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}return l(e,[{key:"ignoreMatch",value:function(){this.isMatchIgnored=!0}}]),e}();function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function p(e){var n=Object.create(null);for(var t in e)n[t]=e[t];for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return r.forEach((function(e){for(var t in e)n[t]=e[t]})),n}var v=function(e){return!!e.kind},b=function(){"use strict";function e(n,t){s(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return l(e,[{key:"addText",value:function(e){this.buffer+=f(e)}},{key:"openNode",value:function(e){if(v(e)){var n=e.kind;n=e.sublanguage?"language-".concat(n):function(e,n){var t=n.prefix;if(e.includes(".")){var i=e.split(".");return["".concat(t).concat(i.shift())].concat(c(i.map((function(e,n){return"".concat(e).concat("_".repeat(n+1))})))).join(" ")}return"".concat(t).concat(e)}(n,{prefix:this.classPrefix}),this.span(n)}}},{key:"closeNode",value:function(e){v(e)&&(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),y=function(e){"use strict";a(t,e);var n=o(t);function t(e){var i;return s(this,t),(i=n.call(this)).options=e,i}return l(t,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new b(this,this.options).value()}},{key:"finalize",value:function(){return!0}}]),t}(function(){"use strict";function e(){s(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return l(e,[{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}},{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}}],[{key:"_walk",value:function(e,n){var t=this;return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((function(n){return t._walk(e,n)})),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!==typeof n&&n.children&&(n.children.every((function(e){return"string"===typeof e}))?n.children=[n.children.join("")]:n.children.forEach((function(n){e._collapse(n)})))}}]),e}());function m(e){return e?"string"===typeof e?e:e.source:null}function w(e){return k("(?=",e,")")}function E(e){return k("(?:",e,")*")}function x(e){return k("(?:",e,")?")}function k(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=n.map((function(e){return m(e)})).join("");return i}function _(e){var n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function O(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=_(n),r="("+(i.capture?"":"?:")+n.map((function(e){return m(e)})).join("|")+")";return r}function N(e){return new RegExp(e.toString()+"|").exec("").length-1}var S=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function M(e,n){var t=n.joinWith,i=0;return e.map((function(e){for(var n=i+=1,t=m(e),r="";t.length>0;){var a=S.exec(t);if(!a){r+=t;break}r+=t.substring(0,a.index),t=t.substring(a.index+a[0].length),"\\"===a[0][0]&&a[1]?r+="\\"+String(Number(a[1])+n):(r+=a[0],"("===a[0]&&i++)}return r})).map((function(e){return"(".concat(e,")")})).join(t)}var A="[a-zA-Z]\\w*",R="[a-zA-Z_]\\w*",j="\\b\\d+(\\.\\d+)?",I="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",T="\\b(0b[01]+)",L={begin:"\\\\[\\s\\S]",relevance:0},B={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[L]},D={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[L]},H=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=p({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});var r=O("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:k(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},P=H("//","$"),C=H("/\\*","\\*/"),U=H("#","$"),z={scope:"number",begin:j,relevance:0},K={scope:"number",begin:I,relevance:0},W={scope:"number",begin:T,relevance:0},X={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[L,{begin:/\[/,end:/\]/,relevance:0,contains:[L]}]}]},G={scope:"title",begin:A,relevance:0},Z={scope:"title",begin:R,relevance:0},F={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},$=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:A,UNDERSCORE_IDENT_RE:R,NUMBER_RE:j,C_NUMBER_RE:I,BINARY_NUMBER_RE:T,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=k(n,/.*\b/,e.binary,/\b.*/)),p({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:L,APOS_STRING_MODE:B,QUOTE_STRING_MODE:D,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:H,C_LINE_COMMENT_MODE:P,C_BLOCK_COMMENT_MODE:C,HASH_COMMENT_MODE:U,NUMBER_MODE:z,C_NUMBER_MODE:K,BINARY_NUMBER_MODE:W,REGEXP_MODE:X,TITLE_MODE:G,UNDERSCORE_TITLE_MODE:Z,METHOD_GUARD:F,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function J(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function V(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function q(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=J,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function Y(e,n){Array.isArray(e.illegal)&&(e.illegal=O.apply(void 0,c(e.illegal)))}function Q(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function ee(e,n){void 0===e.relevance&&(e.relevance=1)}var ne=function(e,n){if(e.beforeMatch){if(e.starts)throw new Error("beforeMatch cannot be used with starts");var t=Object.assign({},e);Object.keys(e).forEach((function(n){delete e[n]})),e.keywords=t.keywords,e.begin=k(t.beforeMatch,w(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch}},te=["of","and","for","in","not","or","if","then","parent","list","value"],ie="keyword";function re(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ie,i=Object.create(null);return"string"===typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(i,re(e[t],n,t))})),i;function r(e,t){n&&(t=t.map((function(e){return e.toLowerCase()}))),t.forEach((function(n){var t=n.split("|");i[t[0]]=[e,ae(t[0],t[1])]}))}}function ae(e,n){return n?Number(n):function(e){return te.includes(e.toLowerCase())}(e)?0:1}var oe={},ce=function(e){console.error(e)},se=function(e){for(var n,t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];(n=console).log.apply(n,["WARN: ".concat(e)].concat(i))},le=function(e,n){oe["".concat(e,"/").concat(n)]||(console.log("Deprecated as of ".concat(e,". ").concat(n)),oe["".concat(e,"/").concat(n)]=!0)},ue=new Error;function ge(e,n,t){for(var i=t.key,r=0,a=e[i],o={},c={},s=1;s<=n.length;s++)c[s+r]=a[s],o[s+r]=!0,r+=N(n[s-1]);e[i]=c,e[i]._emit=o,e[i]._multi=!0}function de(e){!function(e){e.scope&&"object"===typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"===typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"===typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ce("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ue;if("object"!==typeof e.beginScope||null===e.beginScope)throw ce("beginScope must be object"),ue;ge(e,e.begin,{key:"beginScope"}),e.begin=M(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ce("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ue;if("object"!==typeof e.endScope||null===e.endScope)throw ce("endScope must be object"),ue;ge(e,e.end,{key:"endScope"}),e.end=M(e.end,{joinWith:""})}}(e)}function he(e){function n(n,t){return new RegExp(m(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}var t=function(){"use strict";function e(){s(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return l(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=N(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map((function(e){return e[1]}));this.matcherRe=n(M(e,{joinWith:"|"}),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex((function(e,n){return n>0&&void 0!==e})),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}]),e}(),i=function(){"use strict";function e(){s(this,e),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return l(e,[{key:"getMatcher",value:function(e){if(this.multiRegexes[e])return this.multiRegexes[e];var n=new t;return this.rules.slice(e).forEach((function(e){var t=r(e,2),i=t[0],a=t[1];return n.addRule(i,a)})),n.compile(),this.multiRegexes[e]=n,n}},{key:"resumingScanAtSamePosition",value:function(){return 0!==this.regexIndex}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{var i=this.getMatcher(0);i.lastIndex=this.lastIndex+1,t=i.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}]),e}();if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=p(e.classNameAliases||{}),function t(r,a){var o,s=r;if(r.isCompiled)return s;[V,Q,de,ne].forEach((function(e){return e(r,a)})),e.compilerExtensions.forEach((function(e){return e(r,a)})),r.__beforeBegin=null,[q,Y,ee].forEach((function(e){return e(r,a)})),r.isCompiled=!0;var l=null;return"object"===typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=re(r.keywords,e.case_insensitive)),s.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),s.beginRe=n(s.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(s.endRe=n(s.end)),s.terminatorEnd=m(s.end)||"",r.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(s.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=(o=[]).concat.apply(o,c(r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return p(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(fe(e))return p(e,{starts:e.starts?p(e.starts):null});if(Object.isFrozen(e))return p(e);return e}("self"===e?r:e)})))),r.contains.forEach((function(e){t(e,s)})),r.starts&&t(r.starts,a),s.matcher=function(e){var n=new i;return e.contains.forEach((function(e){return n.addRule(e.begin,{rule:e,type:"begin"})})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(s),s}(e)}function fe(e){return!!e&&(e.endsWithParent||fe(e.starts))}var pe=function(e){"use strict";a(t,e);var n=o(t);function t(e,i){var r;return s(this,t),(r=n.call(this,e)).name="HTMLInjectionError",r.html=i,r}return t}(i(Error)),ve=f,be=p,ye=Symbol("nomatch"),me=function(e){var n=Object.create(null),t=Object.create(null),i=[],a=!0,o="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]},s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:y};function l(e){return s.noHighlightRe.test(e)}function u(e,n,t){var i="",r="";"object"===typeof n?(i=e,t=n.ignoreIllegals,r=n.language):(le("10.7.0","highlight(lang, code, ...args) has been deprecated."),le("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,i=n),void 0===t&&(t=!0);var a={code:i,language:r};S("before:highlight",a);var o=a.result?a.result:g(a.language,a.code,t);return o.code=a.code,S("after:highlight",o),o}function g(e,t,i,c){var l=Object.create(null);function u(){if(N.keywords){var e=0;N.keywordPatternRe.lastIndex=0;for(var n,t=N.keywordPatternRe.exec(A),i="";t;){i+=A.substring(e,t.index);var a=k.case_insensitive?t[0].toLowerCase():t[0],o=(n=a,N.keywords[n]);if(o){var c=r(o,2),s=c[0],u=c[1];if(M.addText(i),i="",l[a]=(l[a]||0)+1,l[a]<=7&&(R+=u),s.startsWith("_"))i+=t[0];else{var g=k.classNameAliases[s]||s;M.addKeyword(t[0],g)}}else i+=t[0];e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(A)}i+=A.substr(e),M.addText(i)}else M.addText(A)}function d(){null!=N.subLanguage?function(){if(""!==A){var e=null;if("string"===typeof N.subLanguage){if(!n[N.subLanguage])return void M.addText(A);e=g(N.subLanguage,A,!0,S[N.subLanguage]),S[N.subLanguage]=e._top}else e=f(A,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)}}():u(),A=""}function p(e,n){for(var t=1;void 0!==n[t];)if(e._emit[t]){var i=k.classNameAliases[e[t]]||e[t],r=n[t];i?M.addKeyword(r,i):(A=r,u(),A=""),t++}else t++}function v(e,n){return e.scope&&"string"===typeof e.scope&&M.openNode(k.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(M.addKeyword(A,k.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),A=""):e.beginScope._multi&&(p(e.beginScope,n),A="")),N=Object.create(e,{parent:{value:N}})}function b(e,n,t){var i=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){var r=new h(e);e["on:end"](n,r),r.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return b(e.parent,n,t)}function y(e){return 0===N.matcher.regexIndex?(A+=e[0],1):(T=!0,0)}function w(e){var n=e[0],i=t.substr(e.index),r=b(N,e,i);if(!r)return ye;var a=N;N.endScope&&N.endScope._wrap?(d(),M.addKeyword(n,N.endScope._wrap)):N.endScope&&N.endScope._multi?(d(),p(N.endScope,e)):a.skip?A+=n:(a.returnEnd||a.excludeEnd||(A+=n),d(),a.excludeEnd&&(A=n));do{N.scope&&M.closeNode(),N.skip||N.subLanguage||(R+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&v(r.starts,e),a.returnEnd?0:n.length}var E={};function x(n,r){var o=r&&r[0];if(A+=n,null==o)return d(),0;if("begin"===E.type&&"end"===r.type&&E.index===r.index&&""===o){if(A+=t.slice(r.index,r.index+1),!a){var c=new Error("0 width match regex (".concat(e,")"));throw c.languageName=e,c.badRule=E.rule,c}return 1}if(E=r,"begin"===r.type)return function(e){for(var n=e[0],t=e.rule,i=new h(t),r=0,a=[t.__beforeBegin,t["on:begin"]];r<a.length;r++){var o=a[r];if(o&&(o(e,i),i.isMatchIgnored))return y(n)}return t.skip?A+=n:(t.excludeBegin&&(A+=n),d(),t.returnBegin||t.excludeBegin||(A=n)),v(t,e),t.returnBegin?0:n.length}(r);if("illegal"===r.type&&!i){var s=new Error('Illegal lexeme "'+o+'" for mode "'+(N.scope||"<unnamed>")+'"');throw s.mode=N,s}if("end"===r.type){var l=w(r);if(l!==ye)return l}if("illegal"===r.type&&""===o)return 1;if(I>1e5&&I>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=o,o.length}var k=m(e);if(!k)throw ce(o.replace("{}",e)),new Error('Unknown language: "'+e+'"');var _=he(k),O="",N=c||_,S={},M=new s.__emitter(s);!function(){for(var e=[],n=N;n!==k;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((function(e){return M.openNode(e)}))}();var A="",R=0,j=0,I=0,T=!1;try{for(N.matcher.considerAll();;){I++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=j;var L=N.matcher.exec(t);if(!L)break;var B=x(t.substring(j,L.index),L);j=L.index+B}return x(t.substr(j)),M.closeAllNodes(),M.finalize(),O=M.toHTML(),{language:e,value:O,relevance:R,illegal:!1,_emitter:M,_top:N}}catch(D){if(D.message&&D.message.includes("Illegal"))return{language:e,value:ve(t),illegal:!0,relevance:0,_illegalBy:{message:D.message,index:j,context:t.slice(j-100,j+100),mode:D.mode,resultSoFar:O},_emitter:M};if(a)return{language:e,value:ve(t),illegal:!1,relevance:0,errorRaised:D,_emitter:M,_top:N};throw D}}function f(e,t){t=t||s.languages||Object.keys(n);var i=function(e){var n={value:ve(e),illegal:!1,relevance:0,_top:c,_emitter:new s.__emitter(s)};return n._emitter.addText(e),n}(e),a=t.filter(m).filter(N).map((function(n){return g(n,e,!1)}));a.unshift(i);var o=a.sort((function(e,n){if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(m(e.language).supersetOf===n.language)return 1;if(m(n.language).supersetOf===e.language)return-1}return 0})),l=r(o,2),u=l[0],d=l[1],h=u;return h.secondBest=d,h}function p(e){var n=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";var t=s.languageDetectRe.exec(n);if(t){var i=m(t[1]);return i||(se(o.replace("{}",t[1])),se("Falling back to no-highlight mode for this block.",e)),i?t[1]:"no-highlight"}return n.split(/\s+/).find((function(e){return l(e)||m(e)}))}(e);if(!l(n)){if(S("before:highlightElement",{el:e,language:n}),e.children.length>0)if(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),s.throwUnescapedHTML)throw new pe("One of your code blocks includes unescaped HTML.",e.innerHTML);var i=e.textContent,r=n?u(i,{language:n,ignoreIllegals:!0}):f(i);e.innerHTML=r.value,function(e,n,i){var r=n&&t[n]||i;e.classList.add("hljs"),e.classList.add("language-".concat(r))}(e,n,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),S("after:highlightElement",{el:e,result:r,text:i})}}var v=!1;function b(){"loading"!==document.readyState?document.querySelectorAll(s.cssSelector).forEach(p):v=!0}function m(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function _(e,n){var i=n.languageName;"string"===typeof e&&(e=[e]),e.forEach((function(e){t[e.toLowerCase()]=i}))}function N(e){var n=m(e);return n&&!n.disableAutodetect}function S(e,n){var t=e;i.forEach((function(e){e[t]&&e[t](n)}))}for(var M in"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){v&&b()}),!1),Object.assign(e,{highlight:u,highlightAuto:f,highlightAll:b,highlightElement:p,highlightBlock:function(e){return le("10.7.0","highlightBlock will be removed entirely in v12.0"),le("10.7.0","Please use highlightElement now."),p(e)},configure:function(e){s=be(s,e)},initHighlighting:function(){b(),le("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){b(),le("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){var r=null;try{r=i(e)}catch(o){if(ce("Language definition for '{}' could not be registered.".replace("{}",t)),!a)throw o;ce(o),r=c}r.name||(r.name=t),n[t]=r,r.rawDefinition=i.bind(null,e),r.aliases&&_(r.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(var i=0,r=Object.keys(t);i<r.length;i++){var a=r[i];t[a]===e&&delete t[a]}},listLanguages:function(){return Object.keys(n)},getLanguage:m,registerAliases:_,autoDetection:N,inherit:be,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=function(n){e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=function(n){e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),e.debugMode=function(){a=!1},e.safeMode=function(){a=!0},e.versionString="11.3.1",e.regex={concat:k,lookahead:w,either:O,optional:x,anyNumberOfTimes:E},$)"object"===typeof $[M]&&d($[M]);return Object.assign(e,$),e}({});e.exports=me,me.HighlightJS=me,me.default=me}}]);