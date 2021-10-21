var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,c=!1;function s(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function a(t,e){c?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const i=s(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[i]+1;const l=i+1;n[l]=t,r=Math.max(l,r)}const i=[],l=[];let c=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(i.push(e[t-1]);c>=t;c--)l.push(e[c]);c--}for(;c>=0;c--)l.push(e[c]);i.reverse(),l.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<l.length;e++){for(;n<i.length&&l[e].claim_order>=i[n].claim_order;)n++;const o=n<i.length?i[n]:null;t.insertBefore(l[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function d(t,e,n){c&&!n?a(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function f(){return h(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function y(t){l=t}function S(){const t=function(){if(!l)throw new Error("Function called outside component initialization");return l}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const $=[],x=[],_=[],w=[],C=Promise.resolve();let k=!1;function T(t){_.push(t)}let N=!1;const E=new Set;function z(){if(!N){N=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];y(e),G(e.$$)}for(y(null),$.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];E.has(e)||(E.add(e),e())}_.length=0}while($.length);for(;w.length;)w.pop()();k=!1,N=!1,E.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const H=new Set;let R;function V(t,e){t&&t.i&&(H.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),R.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function M(t,n,i,l){const{fragment:c,on_mount:s,on_destroy:a,after_update:d}=t.$$;c&&c.m(n,i),l||T((()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(T)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,C.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,i,s,a,d,p=[-1]){const h=l;y(e);const f=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let m=!1;if(f.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&O(e,t)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){c=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();r.intro&&V(e.$$.fragment),M(e,r.target,r.anchor,r.customElement),c=!1,z()}y(h)}class P{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(t){let e,n,r,i,l,c,s,h,v,y;return{c(){e=p("div"),n=p("textarea"),r=f(),i=p("button"),i.textContent="Split vertical",l=f(),c=p("button"),c.textContent="Split horizontal",s=f(),h=p("button"),h.textContent="More",g(n,"placeholder","Type your commands here. Use the buttons to the right and bottom to split panes."),g(n,"spellcheck","false"),g(n,"class","command-input svelte-1coobcd"),g(e,"class","command-holder svelte-1coobcd"),g(i,"class","split vertical svelte-1coobcd"),g(c,"class","split horizontal svelte-1coobcd"),g(h,"class","menu-button svelte-1coobcd")},m(o,u){d(o,e,u),a(e,n),b(n,t[0].content),d(o,r,u),d(o,i,u),d(o,l,u),d(o,c,u),d(o,s,u),d(o,h,u),v||(y=[m(n,"input",t[14]),m(n,"input",t[7]),m(i,"click",t[5]),m(c,"click",t[6]),m(h,"click",t[15])],v=!0)},p(t,e){1&e&&b(n,t[0].content)},d(t){t&&u(e),t&&u(r),t&&u(i),t&&u(l),t&&u(c),t&&u(s),t&&u(h),v=!1,o(y)}}}function B(t){let e,n,r,i,l,c,s,v,y,S,$,x,_,w,C,k,T,N,E,z,G,H,R,V,I,M,A,O,D,P,j,B,q,F,K,U,Y,J,Q,W,X,Z,tt,et,nt,ot,rt,it=t[3]&&L(t);return{c(){e=p("form"),n=p("div"),r=p("div"),i=p("label"),l=h("Directory"),s=f(),v=p("input"),$=f(),x=p("div"),_=p("label"),w=h("Title"),k=f(),T=p("input"),z=f(),G=p("div"),H=p("label"),R=h("Persist title"),I=f(),M=p("div"),A=p("input"),P=f(),j=p("label"),q=f(),F=p("div"),K=p("label"),U=h("Colour scheme"),J=f(),Q=p("input"),Z=f(),tt=p("div"),et=p("button"),et.textContent="OK",nt=f(),it&&it.c(),g(i,"for",c="directory-"+t[2]),g(i,"class","svelte-1coobcd"),g(v,"id",y="directory-"+t[2]),g(v,"name",S="directory-"+t[2]),g(v,"type","text"),g(v,"spellcheck","false"),g(v,"placeholder","eg. C:\\Path\\To\\Your\\App"),g(v,"class","svelte-1coobcd"),g(r,"class","form-row svelte-1coobcd"),g(_,"for",C="title-"+t[2]),g(_,"class","svelte-1coobcd"),g(T,"id",N="title-"+t[2]),g(T,"name",E="title-"+t[2]),g(T,"type","text"),g(T,"spellcheck","false"),g(T,"placeholder","eg. My awesome app"),g(T,"class","svelte-1coobcd"),g(x,"class","form-row svelte-1coobcd"),g(H,"for",V="persisttitle-"+t[2]),g(H,"class","svelte-1coobcd"),g(A,"id",O="persisttitle-"+t[2]),g(A,"name",D="persisttitle-"+t[2]),g(A,"type","checkbox"),g(A,"class","svelte-1coobcd"),g(j,"for",B="persisttitle-"+t[2]),g(j,"class","svelte-1coobcd"),g(M,"class","checkbox-container svelte-1coobcd"),g(G,"class","form-row svelte-1coobcd"),g(K,"for",Y="colourScheme-"+t[2]),g(K,"class","svelte-1coobcd"),g(Q,"id",W="colourScheme-"+t[2]),g(Q,"name",X="colourScheme-"+t[2]),g(Q,"type","text"),g(Q,"spellcheck","false"),g(Q,"placeholder","eg. Gruvbox Dark"),g(Q,"class","svelte-1coobcd"),g(F,"class","form-row svelte-1coobcd"),g(n,"class","form-content"),g(et,"type","submit"),g(et,"class","form-button svelte-1coobcd"),g(tt,"class","form-buttons svelte-1coobcd"),g(e,"class","menu-form svelte-1coobcd")},m(o,c){d(o,e,c),a(e,n),a(n,r),a(r,i),a(i,l),a(r,s),a(r,v),b(v,t[0].directory),a(n,$),a(n,x),a(x,_),a(_,w),a(x,k),a(x,T),b(T,t[0].title),a(n,z),a(n,G),a(G,H),a(H,R),a(G,I),a(G,M),a(M,A),A.checked=t[0].persistTitle,a(M,P),a(M,j),a(n,q),a(n,F),a(F,K),a(K,U),a(F,J),a(F,Q),b(Q,t[0].colourScheme),a(e,Z),a(e,tt),a(tt,et),a(tt,nt),it&&it.m(tt,null),ot||(rt=[m(v,"input",t[9]),m(v,"input",t[7]),m(T,"input",t[10]),m(T,"input",t[7]),m(A,"change",t[11]),m(A,"change",t[7]),m(Q,"input",t[12]),m(Q,"input",t[7]),m(e,"submit",t[13])],ot=!0)},p(t,e){4&e&&c!==(c="directory-"+t[2])&&g(i,"for",c),4&e&&y!==(y="directory-"+t[2])&&g(v,"id",y),4&e&&S!==(S="directory-"+t[2])&&g(v,"name",S),1&e&&v.value!==t[0].directory&&b(v,t[0].directory),4&e&&C!==(C="title-"+t[2])&&g(_,"for",C),4&e&&N!==(N="title-"+t[2])&&g(T,"id",N),4&e&&E!==(E="title-"+t[2])&&g(T,"name",E),1&e&&T.value!==t[0].title&&b(T,t[0].title),4&e&&V!==(V="persisttitle-"+t[2])&&g(H,"for",V),4&e&&O!==(O="persisttitle-"+t[2])&&g(A,"id",O),4&e&&D!==(D="persisttitle-"+t[2])&&g(A,"name",D),1&e&&(A.checked=t[0].persistTitle),4&e&&B!==(B="persisttitle-"+t[2])&&g(j,"for",B),4&e&&Y!==(Y="colourScheme-"+t[2])&&g(K,"for",Y),4&e&&W!==(W="colourScheme-"+t[2])&&g(Q,"id",W),4&e&&X!==(X="colourScheme-"+t[2])&&g(Q,"name",X),1&e&&Q.value!==t[0].colourScheme&&b(Q,t[0].colourScheme),t[3]?it?it.p(t,e):(it=L(t),it.c(),it.m(tt,null)):it&&(it.d(1),it=null)},d(t){t&&u(e),it&&it.d(),ot=!1,o(rt)}}}function L(e){let n,o,r;return{c(){n=p("button"),n.textContent="Remove",g(n,"type","button"),g(n,"class","form-button remove svelte-1coobcd")},m(t,i){d(t,n,i),o||(r=m(n,"click",e[8]),o=!0)},p:t,d(t){t&&u(n),o=!1,r()}}}function q(e){let n;function o(t,e){return t[4]?B:j}let r=o(e),i=r(e);return{c(){n=p("div"),i.c(),g(n,"class","pane svelte-1coobcd"),g(n,"style",e[1])},m(t,e){d(t,n,e),i.m(n,null)},p(t,[e]){r===(r=o(t))&&i?i.p(t,e):(i.d(1),i=r(t),i&&(i.c(),i.m(n,null))),2&e&&g(n,"style",t[1])},i:t,o:t,d(t){t&&u(n),i.d()}}}function F(t,e,n){let{pane:o}=e,{style:r}=e,{index:i}=e,{canRemove:l}=e;const c=S();let s=!1;return t.$$set=t=>{"pane"in t&&n(0,o=t.pane),"style"in t&&n(1,r=t.style),"index"in t&&n(2,i=t.index),"canRemove"in t&&n(3,l=t.canRemove)},[o,r,i,l,s,()=>c("splitVertical"),()=>c("splitHorizontal"),()=>c("input"),()=>{n(4,s=!1),c("remove")},function(){o.directory=this.value,n(0,o)},function(){o.title=this.value,n(0,o)},function(){o.persistTitle=this.checked,n(0,o)},function(){o.colourScheme=this.value,n(0,o)},t=>{n(4,s=!1),t.preventDefault()},function(){o.content=this.value,n(0,o)},()=>n(4,s=!0)]}class K extends P{constructor(t){super(),D(this,t,F,q,i,{pane:0,style:1,index:2,canRemove:3})}}var U;!function(t){t[t.Horizontal=0]="Horizontal",t[t.Vertical=1]="Vertical"}(U||(U={}));class Y{constructor(t){this._treeNodeStore=t}getCommand(){return"wt "+this.printNode(this._treeNodeStore.getRootNode()).trim()}printNode(t){let e="",n="";switch(t.parentSplit){case U.Horizontal:e="sp -H ",n="`; mf up ";break;case U.Vertical:e="sp -V ",n="`; mf left "}const o=null!==t.directory&&void 0!==t.directory&&t.directory.trim().length?`-d "${t.directory}" `:"",r=null!==t.title&&void 0!==t.title&&t.title.trim().length,i=r?`--title "${t.title}" `:"",l=r?t.persistTitle?"--suppressApplicationTitle ":"--useApplicationTitle":"",c=null!==t.tabColour&&void 0!==t.tabColour&&t.tabColour.trim().length?`--tabColor ${t.tabColour} `:"",s=null!==t.colourScheme&&void 0!==t.colourScheme&&t.colourScheme.trim().length?`--colorScheme "${t.colourScheme}" `:"",a=null!==t.content&&void 0!==t.content&&t.content.trim().length?`powershell -NoExit "${t.content}" `:"",d=t.children.map((t=>this.printNode(t)));return e+o+i+l+s+c+a+(d.length?"`; "+d.join("`; "):"")+n}}class J{constructor(t){this._treeNodeStore=t}getGridColumns(){const t=Math.max(...this._treeNodeStore.nodes.map((t=>this._treeNodeStore.getStepsTo(t,U.Vertical))));return Math.pow(2,t)}getGridRows(){const t=Math.max(...this._treeNodeStore.nodes.map((t=>this._treeNodeStore.getStepsTo(t,U.Horizontal))));return Math.pow(2,t)}getIndex(t,e){if(!t.parent)return 0;const n=this.getIndex(t.parent,e);return t.parentSplit===e?n+this.getSpanInternal(t.parent,t,e):n}getSpan(t,e){return this.getSpanInternal(t,null,e)}getSpanInternal(t,e,n){const o=t.parent?this.getSpanInternal(t.parent,t,n):n===U.Horizontal?this.getGridRows():this.getGridColumns(),r=(e?t.children.slice(0,t.children.indexOf(e)+1):t.children).filter((t=>t.parentSplit===n));return o/Math.pow(2,r.length)}}class Q{constructor(){this.persistTitle=!0,this.children=[]}get rightDepth(){return this.parent?this.parent.rightDepth+(this.parentSplit===U.Vertical?1:0):0}get downDepth(){return this.parent?this.parent.downDepth+(this.parentSplit===U.Horizontal?1:0):0}}class W{constructor(){this.nodes=[new Q]}split(t,e){const n=new Q;n.parentSplit=e,n.parent=t,t.children.push(n),this.nodes.push(n)}remove(t){if(1===this.nodes.length&&this.nodes[0]===t)throw new Error("Cannot remove final node in store");const e=t.children[t.children.length-1],n=t.parent?t.parent.children.indexOf(t):-1;e&&(n>=0&&(t.parent.children[n]=e),e.parent=t.parent,e.parentSplit=t.parentSplit,e.children=[...t.children.filter((t=>t!==e)),...e.children],e.children.forEach((t=>t.parent=e))),n>=0&&t.parent.children.splice(n,1),this.nodes.splice(this.nodes.indexOf(t),1)}getStepsTo(t,e){return t.parent?this.getStepsTo(t.parent,e)+t.parent.children.filter((n=>n.parentSplit===e||n===t)).indexOf(t)+(t.parentSplit===e?1:0):0}getPriorSiblings(t,e){var n,o,r,i,l;return null!==(l=null===(o=null===(n=null==t?void 0:t.parent)||void 0===n?void 0:n.children)||void 0===o?void 0:o.slice(0,null===(i=null===(r=null==t?void 0:t.parent)||void 0===r?void 0:r.children)||void 0===i?void 0:i.indexOf(t)).filter((t=>t.parentSplit===e)))&&void 0!==l?l:[]}getRootNode(){return this.nodes.filter((t=>!t.parent))[0]}}class X{constructor(t,e){this._gridService=t,this._commandService=e}getContainerGridStyles(t){return`grid-template-columns: repeat(${this._gridService.getGridColumns()}, 1fr); grid-template-rows: repeat(${this._gridService.getGridRows()}, 1fr);`}getPaneGridStyles(t,e){return`grid-column: ${this._gridService.getIndex(t,U.Vertical)+1} / span ${this._gridService.getSpan(t,U.Vertical)}; grid-row: ${this._gridService.getIndex(t,U.Horizontal)+1} / span ${this._gridService.getSpan(t,U.Horizontal)};`}getCommandText(t){return this._commandService.getCommand()}}function Z(t,e,n){const o=t.slice();return o[12]=e[n],o[14]=n,o}function tt(t){let e,n;return e=new K({props:{pane:t[12],canRemove:t[3],index:t[14],style:t[4].getPaneGridStyles(t[12],t[1])}}),e.$on("input",t[6]),e.$on("splitHorizontal",(function(){return t[7](t[12])})),e.$on("splitVertical",(function(){return t[8](t[12])})),e.$on("remove",(function(){return t[9](t[12])})),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){M(e,t,o),n=!0},p(n,o){t=n;const r={};1&o&&(r.pane=t[12]),8&o&&(r.canRemove=t[3]),3&o&&(r.style=t[4].getPaneGridStyles(t[12],t[1])),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function et(t){let e,n,r,i,l,c,s,b,y,S,$,x,_=t[4].getCommandText(t[1])+"",w=t[2]?"Copied!":"Copy",C=t[0].nodes,k=[];for(let e=0;e<C.length;e+=1)k[e]=tt(Z(t,C,e));const T=t=>I(k[t],1,1,(()=>{k[t]=null}));return{c(){e=p("header"),e.innerHTML='<h1 class="title svelte-1inx30n">layowt</h1> \n\t<a class="github-link svelte-1inx30n" href="https://github.com/josh-yates/layowt" target="_blank">View GitHub repository</a>',n=f(),r=p("main");for(let t=0;t<k.length;t+=1)k[t].c();l=f(),c=p("p"),s=h(_),b=p("button"),y=h(w),g(e,"class","svelte-1inx30n"),g(r,"style",i=t[4].getContainerGridStyles(t[1])),g(r,"class","svelte-1inx30n"),g(b,"class","copy-button svelte-1inx30n"),g(c,"class","command svelte-1inx30n")},m(o,i){d(o,e,i),d(o,n,i),d(o,r,i);for(let t=0;t<k.length;t+=1)k[t].m(r,null);d(o,l,i),d(o,c,i),a(c,s),a(c,b),a(b,y),S=!0,$||(x=m(b,"click",t[5]),$=!0)},p(t,[e]){if(27&e){let n;for(C=t[0].nodes,n=0;n<C.length;n+=1){const o=Z(t,C,n);k[n]?(k[n].p(o,e),V(k[n],1)):(k[n]=tt(o),k[n].c(),V(k[n],1),k[n].m(r,null))}for(R={r:0,c:[],p:R},n=C.length;n<k.length;n+=1)T(n);R.r||o(R.c),R=R.p}(!S||2&e&&i!==(i=t[4].getContainerGridStyles(t[1])))&&g(r,"style",i),(!S||2&e)&&_!==(_=t[4].getCommandText(t[1])+"")&&v(s,_),(!S||4&e)&&w!==(w=t[2]?"Copied!":"Copy")&&v(y,w)},i(t){if(!S){for(let t=0;t<C.length;t+=1)V(k[t]);S=!0}},o(t){k=k.filter(Boolean);for(let t=0;t<k.length;t+=1)I(k[t]);S=!1},d(t){t&&u(e),t&&u(n),t&&u(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),t&&u(l),t&&u(c),$=!1,x()}}}function nt(t,e,n){let o,r;const i=new W,l=new J(i),c=new Y(i),s=new X(l,c);let a=!1;return t.$$.update=()=>{3&t.$$.dirty&&n(3,r=!!o&&1!==i.nodes.length)},n(1,o={}),[i,o,a,r,s,()=>{const t=s.getCommandText(null);navigator.clipboard.writeText(t),n(2,a=!0),window.setTimeout((()=>n(2,a=!1)),2e3)},()=>n(1,o={}),t=>{i.split(t,U.Horizontal),n(1,o={})},t=>{i.split(t,U.Vertical),n(1,o={})},t=>{i.remove(t),n(1,o={}),n(0,i)}]}return new class extends P{constructor(t){super(),D(this,t,nt,et,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
