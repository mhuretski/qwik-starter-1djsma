import{G as J}from"./q-BNHWErDt.js";import{C as f,D as se,E as ie,F as L,G as oe,b as g,H as ae}from"./q-DCunmPGg.js";import{_auto_useStreamOptions as ce}from"./q-BT5fs0A7.js";import"./q-uemlvruI.js";/**
 * @license
 * @builder.io/qwik/server 1.5.4
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var le=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),ue="<sync>";function fe(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:i=>{var a;if(t){const o=T(i),c=t[o];if(!c){if(o===ue)return[o,""];if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(o))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,o){var b;const c=T(o),u=(b=globalThis.__qwik_reg_symbols)==null?void 0:b.get(c);if(u)return u;let d=String(a);d.endsWith(".js")||(d+=".js");const w=le(d);if(!(o in w))throw new Error(`Q-ERROR: missing symbol '${o}' in module '${d}'.`);return w[o]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return r(i,t)}}}async function de(n,e){const t=fe(n,e);oe(t)}var T=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n};function _(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function V(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var me='((e,t)=>{const n="__q_context__",o=window,s=new Set,a="replace",i="forEach",r="target",c="getAttribute",l="isConnected",p="qvisible",f="_qwikjson_",u=t=>e.querySelectorAll(t),b=e=>e&&"function"==typeof e.then,d=(e,t,n=t.type)=>{u("[on"+e+"\\\\:"+n+"]")[i]((o=>m(o,e,t,n)))},w=t=>{if(void 0===t[f]){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n[c]("type")){t[f]=JSON.parse(n.textContent[a](/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},y=(e,t)=>new CustomEvent(e,{detail:t}),m=async(t,o,s,i=s.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const p=t._qc_,f=p&&p.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f){const n=e[1].getFn([t,s],(()=>t[l]))(s,t),o=s.cancelBubble;b(n)&&await n,o&&s.stopPropagation()}return}const u=t[c](r);if(u){const o=t.closest("[q\\\\:container]"),i=new URL(o[c]("q:base"),e.baseURI);for(const r of u.split("\\n")){const c=new URL(r,i),p=c.hash[a](/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now();let u;const d=r.startsWith("#");if(d)u=(o.qFuncs||[])[Number.parseInt(p)];else{const e=import(c.href.split("#")[0]);w(o),u=(await e)[p]}const y=e[n];if(t[l])try{e[n]=[t,s,c],d||q("qsymbol",{symbol:p,element:t,reqTime:f});const o=u(s,t);b(o)&&await o}finally{e[n]=y}}}},q=(t,n)=>{e.dispatchEvent(y(t,n))},v=e=>e[a](/([A-Z])/g,(e=>"-"+e.toLowerCase())),h=async e=>{let t=v(e.type),n=e[r];for(d("-document",e,t);n&&n[c];){const o=m(n,"",e,t);let s=e.cancelBubble;b(o)&&await o,s=s||e.cancelBubble||n.hasAttribute("stoppropagation:"+e.type),n=e.bubbles&&!0!==s?n.parentElement:null}},g=e=>{d("-window",e,v(e.type))},_=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,q("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>q("qidle"))),s.has(p))){const e=u("[on\\\\:"+p+"]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n[r]),m(n[r],"",y(p,n)))}));e[i]((e=>t.observe(e)))}},C=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),E=t=>{for(const n of t)s.has(n)||(C(e,n,h,!0),C(o,n,g,!0),s.add(n))};if(!(n in e)){e[n]=0;const t=o.qwikevents;Array.isArray(t)&&E(t),o.qwikevents={push:(...e)=>E(e)},C(e,"readystatechange",_),_()}})(document)',pe=`(() => {
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(container.getAttribute("q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                                                url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent, !0);
                    events.add(eventName);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;function X(n={}){return n.debug?pe:me}function he(n,e,t){if(!t)return[];const r=e.prefetchStrategy,s=V(e);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return ve(n,t,s);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function ve(n,e,t){const r=[],s=n==null?void 0:n.qrls,{mapper:i,manifest:a}=e,o=new Map;if(Array.isArray(s))for(const c of s){const u=c.getHash(),d=i[u];d&&G(a,o,r,t,d[1])}return r}function G(n,e,t,r,s){const i=r+s;let a=e.get(i);if(!a){a={url:i,imports:[]},e.set(i,a);const o=n.bundles[s];if(o&&Array.isArray(o.imports))for(const c of o.imports)G(n,e,a.imports,r,c)}t.push(a)}function ye(n){if(n!=null&&n.mapping!=null&&typeof n.mapping=="object"&&n.symbols!=null&&typeof n.symbols=="object"&&n.bundles!=null&&typeof n.bundles=="object")return n}function C(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function be(n){const e={bundles:q(n).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function q(n){const e=[],t=r=>{if(Array.isArray(r))for(const s of r)e.includes(s.url)||(e.push(s.url),t(s.imports))};return t(n),e}function we(n){const e=new Map;let t=0;const r=(o,c)=>{if(Array.isArray(o))for(const u of o){const d=e.get(u.url)||0;e.set(u.url,d+1),t++,c.has(u.url)||(c.add(u.url),r(u.imports,c))}},s=new Set;for(const o of n)s.clear(),r(o.imports,s);const i=t/e.size*2,a=Array.from(e.entries());return a.sort((o,c)=>c[1]-o[1]),a.slice(0,5).filter(o=>o[1]>i).map(o=>o[0])}function ge(n,e,t){const r=_e(n==null?void 0:n.implementation),s=[];return r.prefetchEvent==="always"&&qe(s,e,t),r.linkInsert==="html-append"&&ke(s,e,r),r.linkInsert==="js-append"?Se(s,e,r,t):r.workerFetchInsert==="always"&&Ee(s,e,t),s.length>0?f(L,{children:s}):null}function qe(n,e,t){const r=we(e);for(const s of r)n.push(f("link",{rel:"modulepreload",href:s,nonce:t}));n.push(f("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:be(e)+";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function ke(n,e,t){const r=q(e),s=t.linkRel||"prefetch";for(const i of r){const a={};a.href=i,a.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(a.as="script"),n.push(f("link",a,void 0))}}function Se(n,e,t,r){const s=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(q(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${s}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${s}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=C(),i+="}"),t.workerFetchInsert==="always"&&(i+=C()),n.push(f("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:r}))}function Ee(n,e,t){let r=`const u=${JSON.stringify(q(e))};`;r+=C(),n.push(f("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:t}))}function _e(n){return{...Te,...n}}var Te={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Ce="<!DOCTYPE html>";async function Le(n,e){var F,O,j;let t=e.stream,r=0,s=0,i=0,a=0,o="",c;const u=((F=e.streaming)==null?void 0:F.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=e.containerTagName??"html",w=e.containerAttributes??{},b=t,Y=_(),Z=V(e),m=Ie(e.manifest);function I(){o&&(b.write(o),o="",r=0,i++,i===1&&(a=Y()))}function P(l){const p=l.length;r+=p,s+=p,o+=l}switch(u.strategy){case"disabled":t={write:P};break;case"direct":t=b;break;case"auto":let l=0,p=!1;const D=u.maximunChunk??0,E=u.maximunInitialChunk??0;t={write(y){y==="<!--qkssr-f-->"?p||(p=!0):y==="<!--qkssr-pu-->"?l++:y==="<!--qkssr-po-->"?l--:P(y),l===0&&(p||r>=(i===0?E:D))&&(p=!1,I())}};break}d==="html"?t.write(Ce):(t.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await de(e,m);const N=m==null?void 0:m.manifest.injections,k=N?N.map(l=>f(l.tag,l.attributes??{})):[],S=((O=e.qwikLoader)==null?void 0:O.include)??"auto";if((((j=e.qwikLoader)==null?void 0:j.position)??"bottom")==="top"&&S!=="never"){const l=X({debug:e.debug});k.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:l})),k.push(f("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const ee=_(),A=[];let R=0,x=0;await se(n,{stream:t,containerTagName:d,containerAttributes:w,serverData:e.serverData,base:Z,beforeContent:k,beforeClose:async(l,p,D,E)=>{var H,W,M,U,Q;R=ee();const y=_();c=await ie(l,p,void 0,E);const v=[];if(e.prefetchStrategy!==null){const h=he(c,e,m);if(h.length>0){const z=ge(e.prefetchStrategy,h,(H=e.serverData)==null?void 0:H.nonce);z&&v.push(z)}}const te=JSON.stringify(c.state,void 0,void 0);v.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:Pe(te),nonce:(W=e.serverData)==null?void 0:W.nonce})),c.funcs.length>0&&v.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Re(c.funcs),nonce:(M=e.serverData)==null?void 0:M.nonce}));const re=!c||c.mode!=="static",$=S==="always"||S==="auto"&&re;if($){const h=X({debug:e.debug});v.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:h,nonce:(U=e.serverData)==null?void 0:U.nonce}))}const B=Array.from(p.$events$,h=>JSON.stringify(h));if(B.length>0){const h=($?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${B.join(", ")})`;v.push(f("script",{dangerouslySetInnerHTML:h,nonce:(Q=e.serverData)==null?void 0:Q.nonce}))}return Ne(A,l),x=y(),f(L,{children:v})},manifestHash:(m==null?void 0:m.manifest.manifestHash)||"dev"}),d!=="html"&&t.write("<!--/cq-->"),I();const ne=c.resources.some(l=>l._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:m==null?void 0:m.manifest,size:s,isStatic:!ne,timing:{render:R,snapshot:x,firstFlush:a},_symbols:A}}async function K(n,e={}){const t=[],r={write(i){t.push(i)}},s=await Le(n,{base:e.base,containerAttributes:e.containerAttributes,containerTagName:e.containerTagName,locale:e.locale,manifest:e.manifest,symbolMapper:e.symbolMapper,qwikLoader:e.qwikLoader,serverData:e.serverData,prefetchStrategy:e.prefetchStrategy,stream:r});return{isStatic:s.isStatic,prefetchResources:s.prefetchResources,timing:s.timing,manifest:s.manifest,snapshotResult:s.snapshotResult,html:t.join("")}}function Ie(n){if(n){if("mapper"in n)return n;if(n=ye(n),n){const e={};return Object.entries(n.mapping).forEach(([t,r])=>{e[T(t)]=[t,r]}),{mapper:e,manifest:n}}}}var Pe=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function Ne(n,e){var t;for(const r of e){const s=(t=r.$componentQrl$)==null?void 0:t.getSymbol();s&&!n.includes(s)&&n.push(s)}}var Ae='document.currentScript.closest("[q\\\\:container]").qFuncs=';function Re(n){return Ae+`[${n.join(`,
`)}]`}const Be=({data:{slot1:n,slot2:e}})=>{const t=ce();return g(L,{children:g(ae,{children:async r=>{r.write("<div>in stream</div>");const s=t==null?void 0:t.manifest,i=await K(g(J,{children:e},1,"H1_11"),{...t,manifest:s,containerTagName:"div",qwikLoader:{include:"never"}}),[a,o]=i.html.split("INJECT_HERE"),c=await K(g(J,{children:n},1,"H1_12"),{...t,manifest:s,containerTagName:"div",qwikLoader:{include:"never"}});r.write(a+c.html+o),r.write("<div>in stream</div>")}},3,"H1_13")},1,"H1_14")};export{Be as s_sy20WwW9QcM};
