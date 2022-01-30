var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s=!1;function c(t,e,n,l){for(;t<e;){const o=t+(e-t>>1);n(o)<=l?t=o+1:e=o}return t}function a(t,e){s?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const r=c(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;l[t]=n[r]+1;const i=r+1;n[i]=t,o=Math.max(i,o)}const r=[],i=[];let s=e.length-1;for(let t=n[o]+1;0!=t;t=l[t-1]){for(r.push(e[t-1]);s>=t;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);r.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<r.length&&i[e].claim_order>=r[n].claim_order;)n++;const l=n<r.length?r[n]:null;t.insertBefore(i[e],l)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){s&&!n?a(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function g(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function S(t){i=t}function w(){const t=function(){if(!i)throw new Error("Function called outside component initialization");return i}();return(e,n)=>{const l=t.$$.callbacks[e];if(l){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);l.slice().forEach((e=>{e.call(t,o)}))}}}const k=[],$=[],x=[],_=[],C=Promise.resolve();let E=!1;function O(t){x.push(t)}let T=!1;const N=new Set;function R(){if(!T){T=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];S(e),P(e.$$)}for(S(null),k.length=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];N.has(e)||(N.add(e),e())}x.length=0}while(k.length);for(;_.length;)_.pop()();E=!1,T=!1,N.clear()}}function P(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const j=new Set;let I;function z(){I={r:0,c:[],p:I}}function G(){I.r||l(I.c),I=I.p}function H(t,e){t&&t.i&&(j.delete(t),t.i(e))}function L(t,e,n,l){if(t&&t.o){if(j.has(t))return;j.add(t),I.c.push((()=>{j.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function A(t,n,r,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,r),i||O((()=>{const n=c.map(e).filter(o);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(O)}function M(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(k.push(t),E||(E=!0,C.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,r,c,a,u,h=[-1]){const p=i;S(e);const f=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:o.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let m=!1;if(f.ctx=r?r(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),m&&V(e,t)),n})):[],f.update(),m=!0,l(f.before_update),f.fragment=!!c&&c(f.ctx),o.target){if(o.hydrate){s=!0;const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();o.intro&&H(e.$$.fragment),A(e,o.target,o.anchor,o.customElement),s=!1,R()}S(p)}class F{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){let e,n,o,r,i,s,c,h,f,b;return{c(){e=p("div"),n=p("textarea"),o=m(),r=p("button"),r.textContent="Split vertical",i=m(),s=p("button"),s.textContent="Split horizontal",c=m(),h=p("button"),h.textContent="More",v(n,"placeholder","Type your commands here. Use the buttons to the right and bottom to split panes."),v(n,"spellcheck","false"),v(n,"class","command-input svelte-70sh02"),v(e,"class","command-holder svelte-70sh02"),v(r,"class","split vertical svelte-70sh02"),v(s,"class","split horizontal svelte-70sh02"),v(h,"class","menu-button svelte-70sh02")},m(l,d){u(l,e,d),a(e,n),y(n,t[0].content),u(l,o,d),u(l,r,d),u(l,i,d),u(l,s,d),u(l,c,d),u(l,h,d),f||(b=[g(n,"input",t[15]),g(n,"input",t[7]),g(r,"click",t[5]),g(s,"click",t[6]),g(h,"click",t[16])],f=!0)},p(t,e){1&e&&y(n,t[0].content)},d(t){t&&d(e),t&&d(o),t&&d(r),t&&d(i),t&&d(s),t&&d(c),t&&d(h),f=!1,l(b)}}}function B(t){let e,n,o,r,i,s,c,h,b,S,w,k,$,x,_,C,E,O,T,N,R,P,j,I,z,G,H,L,A,M,V,D,F,J,B,Y,q,K,Q,W,X,Z,tt,et,nt,lt,ot,rt,it,st,ct,at,ut,dt,ht,pt,ft,mt,gt,vt,bt,yt,St,wt=t[3]&&U(t);return{c(){e=p("form"),n=p("div"),o=p("div"),r=p("label"),i=f("Directory"),c=m(),h=p("input"),w=m(),k=p("div"),$=p("label"),x=f("Title"),C=m(),E=p("input"),N=m(),R=p("div"),P=p("label"),j=f("Persist title"),z=m(),G=p("div"),H=p("input"),M=m(),V=p("label"),F=m(),J=p("div"),B=p("label"),Y=f("Colour scheme"),K=m(),Q=p("input"),Z=m(),tt=p("details"),et=p("summary"),et.textContent="Advanced settings",nt=m(),lt=p("div"),ot=p("label"),rt=f("Clone on split"),st=m(),ct=p("div"),at=p("input"),ht=m(),pt=p("label"),mt=m(),gt=p("div"),vt=p("button"),vt.textContent="OK",bt=m(),wt&&wt.c(),v(r,"for",s="directory-"+t[2]),v(r,"class","svelte-70sh02"),v(h,"id",b="directory-"+t[2]),v(h,"name",S="directory-"+t[2]),v(h,"type","text"),v(h,"spellcheck","false"),v(h,"placeholder","eg. C:\\Path\\To\\Your\\App"),v(h,"class","svelte-70sh02"),v(o,"class","form-row svelte-70sh02"),v($,"for",_="title-"+t[2]),v($,"class","svelte-70sh02"),v(E,"id",O="title-"+t[2]),v(E,"name",T="title-"+t[2]),v(E,"type","text"),v(E,"spellcheck","false"),v(E,"placeholder","eg. My awesome app"),v(E,"class","svelte-70sh02"),v(k,"class","form-row svelte-70sh02"),v(P,"for",I="persisttitle-"+t[2]),v(P,"class","svelte-70sh02"),v(H,"id",L="persisttitle-"+t[2]),v(H,"name",A="persisttitle-"+t[2]),v(H,"type","checkbox"),v(H,"class","svelte-70sh02"),v(V,"for",D="persisttitle-"+t[2]),v(V,"class","svelte-70sh02"),v(G,"class","checkbox-container svelte-70sh02"),v(R,"class","form-row svelte-70sh02"),v(B,"for",q="colourScheme-"+t[2]),v(B,"class","svelte-70sh02"),v(Q,"id",W="colourScheme-"+t[2]),v(Q,"name",X="colourScheme-"+t[2]),v(Q,"type","text"),v(Q,"spellcheck","false"),v(Q,"placeholder","eg. Gruvbox Dark"),v(Q,"class","svelte-70sh02"),v(J,"class","form-row svelte-70sh02"),v(et,"class","svelte-70sh02"),v(ot,"for",it="cloneOnSplit-"+t[2]),v(ot,"class","svelte-70sh02"),v(at,"id",ut="cloneOnSplit-"+t[2]),v(at,"name",dt="cloneOnSplit-"+t[2]),v(at,"type","checkbox"),v(at,"class","svelte-70sh02"),v(pt,"for",ft="cloneOnSplit-"+t[2]),v(pt,"class","svelte-70sh02"),v(ct,"class","checkbox-container svelte-70sh02"),v(lt,"class","form-row svelte-70sh02"),v(tt,"class","form-row advanced-settings svelte-70sh02"),v(n,"class","form-content"),v(vt,"type","submit"),v(vt,"class","form-button svelte-70sh02"),v(gt,"class","form-buttons svelte-70sh02"),v(e,"class","menu-form svelte-70sh02")},m(l,s){u(l,e,s),a(e,n),a(n,o),a(o,r),a(r,i),a(o,c),a(o,h),y(h,t[0].directory),a(n,w),a(n,k),a(k,$),a($,x),a(k,C),a(k,E),y(E,t[0].title),a(n,N),a(n,R),a(R,P),a(P,j),a(R,z),a(R,G),a(G,H),H.checked=t[0].persistTitle,a(G,M),a(G,V),a(n,F),a(n,J),a(J,B),a(B,Y),a(J,K),a(J,Q),y(Q,t[0].colourScheme),a(n,Z),a(n,tt),a(tt,et),a(tt,nt),a(tt,lt),a(lt,ot),a(ot,rt),a(lt,st),a(lt,ct),a(ct,at),at.checked=t[0].cloneOnSplit,a(ct,ht),a(ct,pt),a(e,mt),a(e,gt),a(gt,vt),a(gt,bt),wt&&wt.m(gt,null),yt||(St=[g(h,"input",t[9]),g(h,"input",t[7]),g(E,"input",t[10]),g(E,"input",t[7]),g(H,"change",t[11]),g(H,"change",t[7]),g(Q,"input",t[12]),g(Q,"input",t[7]),g(at,"change",t[13]),g(at,"change",t[7]),g(e,"submit",t[14])],yt=!0)},p(t,e){4&e&&s!==(s="directory-"+t[2])&&v(r,"for",s),4&e&&b!==(b="directory-"+t[2])&&v(h,"id",b),4&e&&S!==(S="directory-"+t[2])&&v(h,"name",S),1&e&&h.value!==t[0].directory&&y(h,t[0].directory),4&e&&_!==(_="title-"+t[2])&&v($,"for",_),4&e&&O!==(O="title-"+t[2])&&v(E,"id",O),4&e&&T!==(T="title-"+t[2])&&v(E,"name",T),1&e&&E.value!==t[0].title&&y(E,t[0].title),4&e&&I!==(I="persisttitle-"+t[2])&&v(P,"for",I),4&e&&L!==(L="persisttitle-"+t[2])&&v(H,"id",L),4&e&&A!==(A="persisttitle-"+t[2])&&v(H,"name",A),1&e&&(H.checked=t[0].persistTitle),4&e&&D!==(D="persisttitle-"+t[2])&&v(V,"for",D),4&e&&q!==(q="colourScheme-"+t[2])&&v(B,"for",q),4&e&&W!==(W="colourScheme-"+t[2])&&v(Q,"id",W),4&e&&X!==(X="colourScheme-"+t[2])&&v(Q,"name",X),1&e&&Q.value!==t[0].colourScheme&&y(Q,t[0].colourScheme),4&e&&it!==(it="cloneOnSplit-"+t[2])&&v(ot,"for",it),4&e&&ut!==(ut="cloneOnSplit-"+t[2])&&v(at,"id",ut),4&e&&dt!==(dt="cloneOnSplit-"+t[2])&&v(at,"name",dt),1&e&&(at.checked=t[0].cloneOnSplit),4&e&&ft!==(ft="cloneOnSplit-"+t[2])&&v(pt,"for",ft),t[3]?wt?wt.p(t,e):(wt=U(t),wt.c(),wt.m(gt,null)):wt&&(wt.d(1),wt=null)},d(t){t&&d(e),wt&&wt.d(),yt=!1,l(St)}}}function U(e){let n,l,o;return{c(){n=p("button"),n.textContent="Remove",v(n,"type","button"),v(n,"class","form-button remove svelte-70sh02")},m(t,r){u(t,n,r),l||(o=g(n,"click",e[8]),l=!0)},p:t,d(t){t&&d(n),l=!1,o()}}}function Y(e){let n;function l(t,e){return t[4]?B:J}let o=l(e),r=o(e);return{c(){n=p("div"),r.c(),v(n,"class","pane svelte-70sh02"),v(n,"style",e[1])},m(t,e){u(t,n,e),r.m(n,null)},p(t,[e]){o===(o=l(t))&&r?r.p(t,e):(r.d(1),r=o(t),r&&(r.c(),r.m(n,null))),2&e&&v(n,"style",t[1])},i:t,o:t,d(t){t&&d(n),r.d()}}}function q(t,e,n){let{pane:l}=e,{style:o}=e,{index:r}=e,{canRemove:i}=e;const s=w();let c=!1;return t.$$set=t=>{"pane"in t&&n(0,l=t.pane),"style"in t&&n(1,o=t.style),"index"in t&&n(2,r=t.index),"canRemove"in t&&n(3,i=t.canRemove)},[l,o,r,i,c,()=>s("splitVertical"),()=>s("splitHorizontal"),()=>s("input"),()=>{n(4,c=!1),s("remove")},function(){l.directory=this.value,n(0,l)},function(){l.title=this.value,n(0,l)},function(){l.persistTitle=this.checked,n(0,l)},function(){l.colourScheme=this.value,n(0,l)},function(){l.cloneOnSplit=this.checked,n(0,l)},t=>{n(4,c=!1),t.preventDefault()},function(){l.content=this.value,n(0,l)},()=>n(4,c=!0)]}class K extends F{constructor(t){super(),D(this,t,q,Y,r,{pane:0,style:1,index:2,canRemove:3})}}var Q;!function(t){t[t.Horizontal=0]="Horizontal",t[t.Vertical=1]="Vertical"}(Q||(Q={}));class W{constructor(t){this.tab=t,this.persistTitle=!0,this.cloneOnSplit=!1,this.children=[]}get rightDepth(){return this.parent?this.parent.rightDepth+(this.parentSplit===Q.Vertical?1:0):0}get downDepth(){return this.parent?this.parent.downDepth+(this.parentSplit===Q.Horizontal?1:0):0}}class X{constructor(t){this.layout=t,this.panes=[new W(this)],this.title="New tab"}}class Z{constructor(){this.tabs=[new X(this)]}}class tt{cloneLayout(t){const e=new Z;return t.title&&(e.title=t.title+" (clone)"),e.tabs=t.tabs.map((t=>{const n=this.cloneTab(t);return n.layout=e,n})),e}cloneTab(t){const e=new X(t.layout);return e.title=t.title,e.panes=t.panes.map((t=>{const n=this.clonePane(t);return n.tab=e,n.parentSplit=t.parentSplit,n})),e.panes.forEach(((n,l)=>{const o=t.panes[l];n.parent=o.parent?e.panes[t.panes.indexOf(o.parent)]:null,n.children=o.children.map((e=>t.panes.indexOf(e))).map((t=>e.panes[t]))})),e}clonePane(t){const e=new W(t.tab);return e.cloneOnSplit=t.cloneOnSplit,e.colourScheme=t.colourScheme,e.content=t.content,e.directory=t.directory,e.persistTitle=t.persistTitle,e.title=t.title,e}}class et{constructor(t){this._paneService=t}getCommand(t){return"wt "+t.tabs.map((t=>this.printNode(this._paneService.getRootNode(t)).trim())).join(" `; new-tab ")+(t.tabs.length>1?" `; ft -t 0":"")}printNode(t){let e="",n="";switch(t.parentSplit){case Q.Horizontal:e="sp -H ",n="`; mf up ";break;case Q.Vertical:e="sp -V ",n="`; mf left "}const l=null!==t.directory&&void 0!==t.directory&&t.directory.trim().length?`-d "${t.directory}" `:"",o=null!==t.title&&void 0!==t.title&&t.title.trim().length,r=o?`--title "${t.title}" `:"",i=o?t.persistTitle?"--suppressApplicationTitle ":"--useApplicationTitle":"",s=null!==t.tabColour&&void 0!==t.tabColour&&t.tabColour.trim().length?`--tabColor ${t.tabColour} `:"",c=null!==t.colourScheme&&void 0!==t.colourScheme&&t.colourScheme.trim().length?`--colorScheme "${t.colourScheme}" `:"",a=null!==t.content&&void 0!==t.content&&t.content.trim().length?`powershell -NoExit "${t.content}" `:"",u=t.children.map((t=>this.printNode(t)));return e+l+r+i+c+s+a+(u.length?"`; "+u.join("`; "):"")+n}}class nt{constructor(t){this._paneService=t}getGridColumns(t){const e=Math.max(...t.panes.map((t=>this._paneService.getStepsTo(t,Q.Vertical))));return Math.pow(2,e)}getGridRows(t){const e=Math.max(...t.panes.map((t=>this._paneService.getStepsTo(t,Q.Horizontal))));return Math.pow(2,e)}getIndex(t,e){if(!t.parent)return 0;const n=this.getIndex(t.parent,e);return t.parentSplit===e?n+this.getSpanInternal(t.parent,t,e):n}getSpan(t,e){return this.getSpanInternal(t,null,e)}getSpanInternal(t,e,n){const l=t.parent?this.getSpanInternal(t.parent,t,n):n===Q.Horizontal?this.getGridRows(t.tab):this.getGridColumns(t.tab),o=(e?t.children.slice(0,t.children.indexOf(e)+1):t.children).filter((t=>t.parentSplit===n));return l/Math.pow(2,o.length)}}class lt{constructor(t,e,n){this.onSuccess=t,this.onError=e,this.jsonService=n,this._fileReader=new FileReader,this._fileReader.onloadend=t=>this.onFileRead(),this._fileReader.onerror=t=>this.onError("Something went wrong while reading the file.")}import(t){this._fileReader.readAsText(t)}onFileRead(){try{const t=this._fileReader.result,e=this.jsonService.jsonToLayouts(t);this.onSuccess(e)}catch(t){this.onError("Something went wrong while parsing the file.")}}}class ot{constructor(t){this._paneService=t}layoutsToJSON(t){if(!t||!t.length)return null;const e=t.map((t=>{const e=new Z;return e.title=t.title,e.tabs=t.tabs.map((t=>{const e=new X(null);e.title=t.title;const n=this._paneService.getRootNode(t);return e.panes=[this.mapPaneForSaving(n)],e})),e}));return JSON.stringify(e)}jsonToLayouts(t){if(!t)return[];const e=JSON.parse(t);return e.forEach((t=>t.tabs.forEach((e=>{e.layout=t,this.hydratePane(e.panes[0],null),e.panes=this.collectPanes(e.panes[0]),e.panes.forEach((t=>t.tab=e))})))),e}hydratePane(t,e){t.parent=e,t.children.forEach((e=>this.hydratePane(e,t)))}collectPanes(t){return[t,...[].concat.apply([],t.children.map((t=>this.collectPanes(t))))]}mapPaneForSaving(t){const e=new W(null);return e.title=t.title,e.tabColour=t.tabColour,e.colourScheme=t.colourScheme,e.content=t.content,e.directory=t.directory,e.parentSplit=t.parentSplit,e.children=t.children.map((t=>this.mapPaneForSaving(t))),e}}class rt{constructor(t){this._jsonService=t}saveLayouts(t){if(!t||!t.length)return;const e=this._jsonService.layoutsToJSON(t);window.localStorage.setItem("layouts",e)}retrieveLayouts(){let t=[new Z];const e=window.localStorage.getItem("layouts");e&&(t=this._jsonService.jsonToLayouts(e));const n=window.localStorage.getItem("layout");if(n){const e=JSON.parse(n);e.tabs.forEach((t=>{t.layout=e,this._jsonService.hydratePane(t.panes[0],null),t.panes=this._jsonService.collectPanes(t.panes[0]),t.panes.forEach((e=>e.tab=t))})),t=[e,...t],localStorage.removeItem("layout")}return t}}class it{constructor(t){this._cloningService=t}split(t,e){const n=t.cloneOnSplit?this._cloningService.clonePane(t):new W(t.tab);n.parentSplit=e,n.parent=t,t.children.push(n),t.tab.panes.push(n)}remove(t){if(1===t.tab.panes.length&&t.tab.panes[0]===t)throw new Error("Cannot remove final node in store");const e=t.children[t.children.length-1],n=t.parent?t.parent.children.indexOf(t):-1;e?(n>=0&&(t.parent.children[n]=e),e.parent=t.parent,e.parentSplit=t.parentSplit,e.children=[...t.children.filter((t=>t!==e)),...e.children],e.children.forEach((t=>t.parent=e))):n>=0&&t.parent.children.splice(n,1),t.tab.panes.splice(t.tab.panes.indexOf(t),1)}getStepsTo(t,e){return t.parent?this.getStepsTo(t.parent,e)+t.parent.children.filter((n=>n.parentSplit===e||n===t)).indexOf(t)+(t.parentSplit===e?1:0):0}getPriorSiblings(t,e){var n,l,o,r,i;return null!==(i=null===(l=null===(n=null==t?void 0:t.parent)||void 0===n?void 0:n.children)||void 0===l?void 0:l.slice(0,null===(r=null===(o=null==t?void 0:t.parent)||void 0===o?void 0:o.children)||void 0===r?void 0:r.indexOf(t)).filter((t=>t.parentSplit===e)))&&void 0!==i?i:[]}getRootNode(t){return t.panes.filter((t=>!t.parent))[0]}}class st{add(t){t.tabs.push(new X(t))}remove(t){if(1===t.layout.tabs.length&&t.layout.tabs[0]===t)throw new Error("Cannot remove final tab in store");t.layout.tabs.splice(t.layout.tabs.indexOf(t),1)}}class ct{constructor(t,e){this._gridService=t,this._commandService=e}getContainerGridStyles(t,e){return`grid-template-columns: repeat(${this._gridService.getGridColumns(t)}, 1fr); grid-template-rows: repeat(${this._gridService.getGridRows(t)}, 1fr);`}getPaneGridStyles(t,e){return`grid-column: ${this._gridService.getIndex(t,Q.Vertical)+1} / span ${this._gridService.getSpan(t,Q.Vertical)}; grid-row: ${this._gridService.getIndex(t,Q.Horizontal)+1} / span ${this._gridService.getSpan(t,Q.Horizontal)};`}getCommandText(t,e){return this._commandService.getCommand(t)}}function at(t,e,n){const l=t.slice();return l[43]=e[n],l[42]=n,l}function ut(t,e,n){const l=t.slice();return l[45]=e[n],l[42]=n,l}function dt(t,e,n){const l=t.slice();return l[40]=e[n],l[41]=e,l[42]=n,l}function ht(t){let e,n,o,r,i;return{c(){e=p("input"),n=m(),o=p("button"),o.textContent="More",v(e,"id","layout-title"),v(e,"name","layout-title"),v(e,"type","text"),v(e,"spellcheck","false"),v(e,"placeholder","No title"),v(e,"class","svelte-u9km1d"),v(o,"id","more-layouts"),v(o,"class","svelte-u9km1d")},m(l,s){u(l,e,s),y(e,t[1].title),u(l,n,s),u(l,o,s),r||(i=[g(e,"input",t[16]),g(e,"input",t[17]),g(o,"click",t[18])],r=!0)},p(t,n){2&n[0]&&e.value!==t[1].title&&y(e,t[1].title)},d(t){t&&d(e),t&&d(n),t&&d(o),r=!1,l(i)}}}function pt(t){let e,n,o,r,i,s,c,y,S,w,k,$,x,_,C,E,O,T=t[12].getCommandText(t[1],t[3])+"",N=t[5]?"Copied!":"Copy",R=t[1].tabs,P=[];for(let e=0;e<R.length;e+=1)P[e]=mt(ut(t,R,e));let j=t[8]&&gt(t),I=t[2].panes,A=[];for(let e=0;e<I.length;e+=1)A[e]=vt(at(t,I,e));const M=t=>L(A[t],1,1,(()=>{A[t]=null}));return{c(){e=p("aside");for(let t=0;t<P.length;t+=1)P[t].c();n=m(),o=p("button"),o.textContent="Clone",r=m(),j&&j.c(),i=m(),s=p("button"),s.textContent="Add",c=m(),y=p("main");for(let t=0;t<A.length;t+=1)A[t].c();w=m(),k=p("p"),$=f(T),x=p("button"),_=f(N),v(o,"class","tab clone svelte-u9km1d"),v(s,"class","tab add svelte-u9km1d"),v(e,"class","tabs svelte-u9km1d"),v(y,"style",S=t[12].getContainerGridStyles(t[2],t[3])),v(y,"class","svelte-u9km1d"),v(x,"class","copy-button svelte-u9km1d"),v(k,"class","command svelte-u9km1d")},m(l,d){u(l,e,d);for(let t=0;t<P.length;t+=1)P[t].m(e,null);a(e,n),a(e,o),a(e,r),j&&j.m(e,null),a(e,i),a(e,s),u(l,c,d),u(l,y,d);for(let t=0;t<A.length;t+=1)A[t].m(y,null);u(l,w,d),u(l,k,d),a(k,$),a(k,x),a(x,_),C=!0,E||(O=[g(o,"click",t[29]),g(s,"click",t[31]),g(x,"click",t[14])],E=!0)},p(t,l){if(6&l[0]){let o;for(R=t[1].tabs,o=0;o<R.length;o+=1){const r=ut(t,R,o);P[o]?P[o].p(r,l):(P[o]=mt(r),P[o].c(),P[o].m(e,n))}for(;o<P.length;o+=1)P[o].d(1);P.length=R.length}if(t[8]?j?j.p(t,l):(j=gt(t),j.c(),j.m(e,i)):j&&(j.d(1),j=null),5260&l[0]){let e;for(I=t[2].panes,e=0;e<I.length;e+=1){const n=at(t,I,e);A[e]?(A[e].p(n,l),H(A[e],1)):(A[e]=vt(n),A[e].c(),H(A[e],1),A[e].m(y,null))}for(z(),e=I.length;e<A.length;e+=1)M(e);G()}(!C||12&l[0]&&S!==(S=t[12].getContainerGridStyles(t[2],t[3])))&&v(y,"style",S),(!C||10&l[0])&&T!==(T=t[12].getCommandText(t[1],t[3])+"")&&b($,T),(!C||32&l[0])&&N!==(N=t[5]?"Copied!":"Copy")&&b(_,N)},i(t){if(!C){for(let t=0;t<I.length;t+=1)H(A[t]);C=!0}},o(t){A=A.filter(Boolean);for(let t=0;t<A.length;t+=1)L(A[t]);C=!1},d(t){t&&d(e),h(P,t),j&&j.d(),t&&d(c),t&&d(y),h(A,t),t&&d(w),t&&d(k),E=!1,l(O)}}}function ft(e){let n,o,r,i,s,c,b,y,S,w,k,$,x,_,C,E,O=e[0].filter(_t).length>1,T=1===e[0].filter(xt).length,N=e[0].filter($t).length,R=e[0],P=[];for(let t=0;t<R.length;t+=1)P[t]=bt(dt(e,R,t));let j=O&&yt(e),I=T&&St(e),z=N&&wt(e);return{c(){n=p("main"),o=p("h2"),o.textContent="Your layowts",r=m(),i=p("ul");for(let t=0;t<P.length;t+=1)P[t].c();s=m(),c=p("div"),b=p("button"),b.textContent="New layowt",y=m(),S=p("label"),w=p("input"),k=f("\n\t\t\t\tImport"),$=m(),j&&j.c(),x=m(),I&&I.c(),_=m(),z&&z.c(),v(o,"class","svelte-u9km1d"),v(i,"class","svelte-u9km1d"),v(b,"class","svelte-u9km1d"),w.disabled=e[6],v(w,"type","file"),v(w,"accept",".layowt"),v(w,"class","svelte-u9km1d"),v(S,"class","svelte-u9km1d"),v(c,"class","layout-buttons svelte-u9km1d"),v(n,"class","layout-listing svelte-u9km1d")},m(t,l){u(t,n,l),a(n,o),a(n,r),a(n,i);for(let t=0;t<P.length;t+=1)P[t].m(i,null);a(n,s),a(n,c),a(c,b),a(c,y),a(c,S),a(S,w),a(S,k),a(c,$),j&&j.m(c,null),a(c,x),I&&I.m(c,null),a(c,_),z&&z.m(c,null),C||(E=[g(b,"click",e[22]),g(w,"change",e[23])],C=!0)},p(t,e){if(31&e[0]){let n;for(R=t[0],n=0;n<R.length;n+=1){const l=dt(t,R,n);P[n]?P[n].p(l,e):(P[n]=bt(l),P[n].c(),P[n].m(i,null))}for(;n<P.length;n+=1)P[n].d(1);P.length=R.length}64&e[0]&&(w.disabled=t[6]),1&e[0]&&(O=t[0].filter(_t).length>1),O?j?j.p(t,e):(j=yt(t),j.c(),j.m(c,x)):j&&(j.d(1),j=null),1&e[0]&&(T=1===t[0].filter(xt).length),T?I?I.p(t,e):(I=St(t),I.c(),I.m(c,_)):I&&(I.d(1),I=null),1&e[0]&&(N=t[0].filter($t).length),N?z?z.p(t,e):(z=wt(t),z.c(),z.m(c,null)):z&&(z.d(1),z=null)},i:t,o:t,d(t){t&&d(n),h(P,t),j&&j.d(),I&&I.d(),z&&z.d(),C=!1,l(E)}}}function mt(t){let e,n,l,o,r,i,s=`${t[45].title} (${t[42]})`;function c(){return t[28](t[45])}return{c(){e=p("button"),n=f(s),v(e,"title",l=`${t[45].title} (${t[42]})`),v(e,"class","tab svelte-u9km1d"),v(e,"data-selected",o=t[2]===t[45])},m(t,l){u(t,e,l),a(e,n),r||(i=g(e,"click",c),r=!0)},p(r,i){t=r,2&i[0]&&s!==(s=`${t[45].title} (${t[42]})`)&&b(n,s),2&i[0]&&l!==(l=`${t[45].title} (${t[42]})`)&&v(e,"title",l),6&i[0]&&o!==(o=t[2]===t[45])&&v(e,"data-selected",o)},d(t){t&&d(e),r=!1,i()}}}function gt(e){let n,l,o;return{c(){n=p("button"),n.textContent="Remove",v(n,"class","tab remove svelte-u9km1d")},m(t,r){u(t,n,r),l||(o=g(n,"click",e[30]),l=!0)},p:t,d(t){t&&d(n),l=!1,o()}}}function vt(t){let e,n;return e=new K({props:{pane:t[43],canRemove:t[7],index:t[42],style:t[12].getPaneGridStyles(t[43],t[3])}}),e.$on("input",t[32]),e.$on("splitHorizontal",(function(){return t[33](t[43])})),e.$on("splitVertical",(function(){return t[34](t[43])})),e.$on("remove",(function(){return t[35](t[43])})),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,l){A(e,t,l),n=!0},p(n,l){t=n;const o={};4&l[0]&&(o.pane=t[43]),128&l[0]&&(o.canRemove=t[7]),12&l[0]&&(o.style=t[12].getPaneGridStyles(t[43],t[3])),e.$set(o)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function bt(t){let e,n,o,r,i,s,c,h,y,S,w,k,$,x,_,C,E=(t[40].title?t[40].title:"No title")+"";function O(){return t[19](t[40])}function T(){t[20].call(s,t[41],t[42])}return{c(){e=p("li"),n=p("button"),o=f(E),r=m(),i=p("div"),s=p("input"),y=m(),S=p("label"),$=m(),v(n,"class","layout-open svelte-u9km1d"),v(s,"id",c="layowtSelect-"+t[42]),v(s,"name",h="layowtSelect-"+t[42]),v(s,"type","checkbox"),v(s,"class","svelte-u9km1d"),v(S,"for",w="layowtSelect-"+t[42]),v(S,"class","svelte-u9km1d"),v(i,"class","checkbox-container svelte-u9km1d"),v(i,"data-checked",k=t[40].selected),v(e,"data-no-title",x=!t[40].title),v(e,"class","svelte-u9km1d")},m(l,c){u(l,e,c),a(e,n),a(n,o),a(e,r),a(e,i),a(i,s),s.checked=t[40].selected,a(i,y),a(i,S),a(e,$),_||(C=[g(n,"click",O),g(s,"change",T),g(s,"change",t[21])],_=!0)},p(n,l){t=n,1&l[0]&&E!==(E=(t[40].title?t[40].title:"No title")+"")&&b(o,E),1&l[0]&&(s.checked=t[40].selected),1&l[0]&&k!==(k=t[40].selected)&&v(i,"data-checked",k),1&l[0]&&x!==(x=!t[40].title)&&v(e,"data-no-title",x)},d(t){t&&d(e),_=!1,l(C)}}}function yt(e){let n,l,o;return{c(){n=p("button"),n.textContent="Merge",v(n,"class","svelte-u9km1d")},m(t,r){u(t,n,r),l||(o=g(n,"click",e[24]),l=!0)},p:t,d(t){t&&d(n),l=!1,o()}}}function St(e){let n,l,o;return{c(){n=p("button"),n.textContent="Export",v(n,"class","svelte-u9km1d")},m(t,r){u(t,n,r),l||(o=g(n,"click",e[25]),l=!0)},p:t,d(t){t&&d(n),l=!1,o()}}}function wt(e){let n,o,r,i,s;return{c(){n=p("button"),n.textContent="Clone",o=m(),r=p("button"),r.textContent="Remove",v(n,"class","svelte-u9km1d"),v(r,"class","svelte-u9km1d")},m(t,l){u(t,n,l),u(t,o,l),u(t,r,l),i||(s=[g(n,"click",e[26]),g(r,"click",e[27])],i=!0)},p:t,d(t){t&&d(n),t&&d(o),t&&d(r),i=!1,l(s)}}}function kt(t){let e,n,l,o,r,i,s,c,h,g,b,y,S=!t[4]&&ht(t);const w=[ft,pt],k=[];function $(t,e){return t[4]?0:1}return h=$(t),g=k[h]=w[h](t),{c(){e=p("header"),n=p("h1"),n.textContent="layowt",l=m(),S&&S.c(),o=m(),r=p("a"),i=f("View GitHub repository"),c=m(),g.c(),b=f(""),v(n,"class","title svelte-u9km1d"),v(r,"class","github-link svelte-u9km1d"),v(r,"data-with-title",s=!t[4]),v(r,"href","https://github.com/josh-yates/layowt"),v(r,"target","_blank"),v(e,"class","svelte-u9km1d")},m(t,s){u(t,e,s),a(e,n),a(e,l),S&&S.m(e,null),a(e,o),a(e,r),a(r,i),u(t,c,s),k[h].m(t,s),u(t,b,s),y=!0},p(t,n){t[4]?S&&(S.d(1),S=null):S?S.p(t,n):(S=ht(t),S.c(),S.m(e,o)),(!y||16&n[0]&&s!==(s=!t[4]))&&v(r,"data-with-title",s);let l=h;h=$(t),h===l?k[h].p(t,n):(z(),L(k[l],1,1,(()=>{k[l]=null})),G(),g=k[h],g?g.p(t,n):(g=k[h]=w[h](t),g.c()),H(g,1),g.m(b.parentNode,b))},i(t){y||(H(g),y=!0)},o(t){L(g),y=!1},d(t){t&&d(e),S&&S.d(),t&&d(c),k[h].d(t),t&&d(b)}}}const $t=t=>t.selected,xt=t=>t.selected,_t=t=>t.selected;function Ct(t,e,n){let l,o,r,i,s;const c=new tt,a=new it(c),u=new nt(a),d=new st,h=new et(a),p=new ct(u,h),f=new ot(a),m=new rt(f),g=new lt((t=>{t.forEach((t=>v.push(t))),n(0,v),n(3,r={}),n(6,o=!1)}),(t=>{alert(t),n(6,o=!1)}),f);let v=m.retrieveLayouts(),b=v[0],y=b.tabs[0],S=!1;const w=t=>{const e=t.target;e.files.length&&(n(6,o=!0),g.import(e.files[0]))};return t.$$.update=()=>{17&t.$$.dirty[0]&&(l||(v.forEach((t=>t.selected=!1)),n(3,r={}))),12&t.$$.dirty[0]&&n(7,i=!!r&&1!==y.panes.length),10&t.$$.dirty[0]&&n(8,s=!!r&&1!==b.tabs.length),9&t.$$.dirty[0]&&m.saveLayouts(v)},n(4,l=!1),n(6,o=!1),n(3,r={}),[v,b,y,r,l,S,o,i,s,c,a,d,p,f,()=>{const t=p.getCommandText(b,null);navigator.clipboard.writeText(t),n(5,S=!0),window.setTimeout((()=>n(5,S=!1)),2e3)},w,function(){b.title=this.value,n(1,b)},()=>n(3,r={}),()=>n(4,l=!0),t=>{n(1,b=t),n(1,b),n(2,y=b.tabs[0]),n(4,l=!1)},function(t,e){t[e].selected=this.checked,n(0,v)},()=>n(3,r={}),()=>{const t=new Z;v.push(t),n(3,r),n(4,l),n(0,v),n(1,b=t),n(1,b),n(2,y=b.tabs[0]),n(4,l=!1)},t=>w(t),()=>{const t=v.filter((t=>t.selected)),e=t.shift();t.forEach((t=>{t.tabs.forEach((t=>t.layout=e)),e.tabs.push(...t.tabs),v.splice(v.indexOf(t),1)})),e.title=[e.title,...t.map((t=>t.title))].filter((t=>!!t)).join(" / "),v.forEach((t=>t.selected=!1)),n(3,r={}),n(0,v)},()=>{const t=v.filter((t=>t.selected))[0],e=f.layoutsToJSON([t]),n=new Blob([e],{type:"application/json"}),l=URL.createObjectURL(n),o=document.createElement("a");o.download=`${t.title?.trim().length?t.title.trim():"Untitled"}.layowt`,o.href=l,o.click(),o.remove()},()=>{const t=v.filter((t=>t.selected));v.push(...t.map((t=>c.cloneLayout(t)))),v.forEach((t=>t.selected=!1)),n(3,r={}),n(0,v)},()=>{v.filter((t=>t.selected)).forEach((t=>v.splice(v.indexOf(t),1))),n(3,r={}),v.length||(v.push(new Z),n(1,b=v[0]),n(2,y=b.tabs[0]),n(4,l=!1)),n(0,v)},t=>n(2,y=t),()=>{const t=c.cloneTab(y);b.tabs.push(t),n(2,y=t),n(3,r={}),n(1,b)},()=>{const t=b.tabs.indexOf(y);d.remove(y),n(3,r={});const e=b.tabs[Math.min(t,b.tabs.length-1)];n(2,y=e),n(1,b),n(2,y)},()=>{d.add(b),n(3,r={}),n(1,b),n(2,y=b.tabs[b.tabs.length-1])},()=>n(3,r={}),t=>{a.split(t,Q.Horizontal),n(3,r={})},t=>{a.split(t,Q.Vertical),n(3,r={})},t=>{a.remove(t),n(3,r={}),n(2,y)}]}return new class extends F{constructor(t){super(),D(this,t,Ct,kt,r,{},[-1,-1])}}({target:document.body,props:{}})}();
