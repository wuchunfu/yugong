(this.webpackJsonpyugong=this.webpackJsonpyugong||[]).push([[20],{1130:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===r.Tag||e.type===r.Script||e.type===r.Style},t.Root=r.Root,t.Text=r.Text,t.Directive=r.Directive,t.Comment=r.Comment,t.Script=r.Script,t.Style=r.Style,t.Tag=r.Tag,t.CDATA=r.CDATA,t.Doctype=r.Doctype},807:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var o=n(1130),c=new Map([[o.ElementType.Tag,1],[o.ElementType.Script,1],[o.ElementType.Style,1],[o.ElementType.Directive,1],[o.ElementType.Text,3],[o.ElementType.CDATA,4],[o.ElementType.Comment,8],[o.ElementType.Root,9]]),u=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e;return null!==(e=c.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),x(this,e)},e}();t.Node=u;var a=function(e){function t(t,n){var r=e.call(this,t)||this;return r.data=n,r}return r(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(u);t.DataNode=a;var l=function(e){function t(t){return e.call(this,o.ElementType.Text,t)||this}return r(t,e),t}(a);t.Text=l;var s=function(e){function t(t){return e.call(this,o.ElementType.Comment,t)||this}return r(t,e),t}(a);t.Comment=s;var p=function(e){function t(t,n){var r=e.call(this,o.ElementType.Directive,n)||this;return r.name=t,r}return r(t,e),t}(a);t.ProcessingInstruction=p;var f=function(e){function t(t,n){var r=e.call(this,t)||this;return r.children=n,r}return r(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(u);t.NodeWithChildren=f;var y=function(e){function t(t){return e.call(this,o.ElementType.Root,t)||this}return r(t,e),t}(f);t.Document=y;var m=function(e){function t(t,n,r,i){void 0===r&&(r=[]),void 0===i&&(i="script"===t?o.ElementType.Script:"style"===t?o.ElementType.Style:o.ElementType.Tag);var c=e.call(this,i,r)||this;return c.name=t,c.attribs=n,c}return r(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(f);function d(e){return(0,o.isTag)(e)}function h(e){return e.type===o.ElementType.CDATA}function v(e){return e.type===o.ElementType.Text}function b(e){return e.type===o.ElementType.Comment}function T(e){return e.type===o.ElementType.Directive}function g(e){return e.type===o.ElementType.Root}function x(e,t){var n;if(void 0===t&&(t=!1),v(e))n=new l(e.data);else if(b(e))n=new s(e.data);else if(d(e)){var r=t?E(e.children):[],c=new m(e.name,i({},e.attribs),r);r.forEach((function(e){return e.parent=c})),e["x-attribsNamespace"]&&(c["x-attribsNamespace"]=i({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(c["x-attribsPrefix"]=i({},e["x-attribsPrefix"])),n=c}else if(h(e)){r=t?E(e.children):[];var u=new f(o.ElementType.CDATA,r);r.forEach((function(e){return e.parent=u})),n=u}else if(g(e)){r=t?E(e.children):[];var a=new y(r);r.forEach((function(e){return e.parent=a})),e["x-mode"]&&(a["x-mode"]=e["x-mode"]),n=a}else{if(!T(e))throw new Error("Not implemented yet: "+e.type);var x=new p(e.name,e.data);null!=e["x-name"]&&(x["x-name"]=e["x-name"],x["x-publicId"]=e["x-publicId"],x["x-systemId"]=e["x-systemId"]),n=x}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,n}function E(e){for(var t=e.map((function(e){return x(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=m,t.isTag=d,t.isCDATA=h,t.isText=v,t.isComment=b,t.isDirective=T,t.isDocument=g,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=x}}]);