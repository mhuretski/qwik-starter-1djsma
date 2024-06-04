import{G as V}from"./q-P5T2aeCW.js";import{C as f,D as oe,E as se,F as C,G as ie,b as q,H as ae}from"./q-CKEJRHkM.js";import{_auto_useStreamOptions as ce}from"./q-8GClzU1N.js";import"./q-uemlvruI.js";/**
 * @license
 * @builder.io/qwik/server 1.5.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var le=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),ue="<sync>";function fe(n,e){const t=e==null?void 0:e.mapper,r=n.symbolMapper?n.symbolMapper:s=>{var a;if(t){const i=T(s),c=t[i];if(!c){if(i===ue)return[i,""];if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(i))return[s,"_"];console.error("Cannot resolve symbol",s,"in",t)}return c}};return{isServer:!0,async importSymbol(s,a,i){var y;const c=T(i),u=(y=globalThis.__qwik_reg_symbols)==null?void 0:y.get(c);if(u)return u;let p=String(a);p.endsWith(".js")||(p+=".js");const w=le(p);if(!(i in w))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${p}'.`);return w[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(a=>{setTimeout(()=>{a(s())})}),chunkForSymbol(s){return r(s,t)}}}async function pe(n,e){const t=fe(n,e);ie(t)}var T=n=>{const e=n.lastIndexOf("_");return e>-1?n.slice(e+1):n};function S(){if(typeof performance>"u")return()=>0;const n=performance.now();return()=>(performance.now()-n)/1e6}function K(n){let e=n.base;return typeof n.base=="function"&&(e=n.base(n)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var de='(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,s)=>{for(var a in s||(s={}))n.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&o(e,a,s[a]);return e};((e,t)=>{const n="__q_context__",r=window,o=new Set,a="replace",i="forEach",c="target",l="getAttribute",f="isConnected",p="qvisible",b="_qwikjson_",u=t=>e.querySelectorAll(t),y=e=>e&&"function"==typeof e.then,d=(e,t,n=t.type)=>{u("[on"+e+"\\\\:"+n+"]")[i]((r=>q(r,e,t,n)))},m=t=>{if(void 0===t[b]){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n[l]("type")){t[b]=JSON.parse(n.textContent[a](/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},h=(e,t)=>new CustomEvent(e,{detail:t}),q=async(t,r,o,i=o.type)=>{const c="on"+r+":"+i;t.hasAttribute("preventdefault:"+i)&&o.preventDefault();const p=t._qc_,b=p&&p.li.filter((e=>e[0]===c));if(b&&b.length>0){for(const e of b){const n=e[1].getFn([t,o],(()=>t[f]))(o,t),r=o.cancelBubble;y(n)&&await n,r&&o.stopPropagation()}return}const u=t[l](c);if(u){const r=t.closest("[q\\\\:container]"),i=r[l]("q:base"),c=r[l]("q:version")||"unknown",p=r[l]("q:manifest-hash")||"dev",b=new URL(i,e.baseURI);for(const l of u.split("\\n")){const u=new URL(l,b),d=u.href,h=u.hash[a](/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let v,g,E;const _=l.startsWith("#"),k={qBase:i,qManifest:p,qVersion:c,href:d,symbol:h,element:t,reqTime:q};if(_)v=(r.qFuncs||[])[Number.parseInt(h)],v||(g="sync",E=Error("sync handler error for symbol: "+h));else{const e=u.href.split("#")[0];try{const t=import(e);m(r),v=(await t)[h]}catch(e){g="async",E=e}}if(!v){w("qerror",s({importError:g,error:E},k));break}const C=e[n];if(t[f])try{e[n]=[t,o,u],_||w("qsymbol",s({},k));const r=v(o,t);y(r)&&await r}catch(e){w("qerror",s({error:e},k))}finally{e[n]=C}}}},w=(t,n)=>{e.dispatchEvent(h(t,n))},v=e=>e[a](/([A-Z])/g,(e=>"-"+e.toLowerCase())),g=async e=>{let t=v(e.type),n=e[c];for(d("-document",e,t);n&&n[l];){const r=q(n,"",e,t);let o=e.cancelBubble;y(r)&&await r,o=o||e.cancelBubble||n.hasAttribute("stoppropagation:"+e.type),n=e.bubbles&&!0!==o?n.parentElement:null}},E=e=>{d("-window",e,v(e.type))},_=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,w("qinit"),(null!=(n=r.requestIdleCallback)?n:r.setTimeout).bind(r)((()=>w("qidle"))),o.has(p))){const e=u("[on\\\\:"+p+"]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n[c]),q(n[c],"",h(p,n)))}));e[i]((e=>t.observe(e)))}},k=(e,t,n,r=!1)=>e.addEventListener(t,n,{capture:r,passive:!1}),C=t=>{for(const n of t)o.has(n)||(k(e,n,g,!0),k(r,n,E,!0),o.add(n))};if(!(n in e)){e[n]=0;const t=r.qwikevents;Array.isArray(t)&&C(t),r.qwikevents={push:(...e)=>C(e)},k(e,"readystatechange",_),_()}})(document)})()',me=`(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
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
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                        } catch (err) {
                            importError = "async";
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
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
})()`;function J(n={}){return n.debug?me:de}function he(n,e,t){if(!t)return[];const r=e.prefetchStrategy,o=K(e);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return be(n,t,o);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:t.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function be(n,e,t){const r=[],o=n==null?void 0:n.qrls,{mapper:s,manifest:a}=e,i=new Map;if(Array.isArray(o))for(const c of o){const u=c.getHash(),p=s[u];p&&G(a,i,r,t,p[1])}return r}function G(n,e,t,r,o){const s=r+o;let a=e.get(s);if(!a){a={url:s,imports:[]},e.set(s,a);const i=n.bundles[o];if(i&&Array.isArray(i.imports))for(const c of i.imports)G(n,e,a.imports,r,c)}t.push(a)}function ve(n){if(n!=null&&n.mapping!=null&&typeof n.mapping=="object"&&n.symbols!=null&&typeof n.symbols=="object"&&n.bundles!=null&&typeof n.bundles=="object")return n}function P(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function ye(n){const e={bundles:g(n).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function g(n){const e=[],t=r=>{if(Array.isArray(r))for(const o of r)e.includes(o.url)||(e.push(o.url),t(o.imports))};return t(n),e}function we(n){const e=new Map;let t=0;const r=(i,c)=>{if(Array.isArray(i))for(const u of i){const p=e.get(u.url)||0;e.set(u.url,p+1),t++,c.has(u.url)||(c.add(u.url),r(u.imports,c))}},o=new Set;for(const i of n)o.clear(),r(i.imports,o);const s=t/e.size*2,a=Array.from(e.entries());return a.sort((i,c)=>c[1]-i[1]),a.slice(0,5).filter(i=>i[1]>s).map(i=>i[0])}function qe(n,e,t){const r=Se(n==null?void 0:n.implementation),o=[];return r.prefetchEvent==="always"&&ge(o,e,t),r.linkInsert==="html-append"&&ke(o,e,r),r.linkInsert==="js-append"?_e(o,e,r,t):r.workerFetchInsert==="always"&&Ee(o,e,t),o.length>0?f(C,{children:o}):null}function ge(n,e,t){const r=we(e);for(const o of r)n.push(f("link",{rel:"modulepreload",href:o,nonce:t}));n.push(f("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:ye(e)+";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function ke(n,e,t){const r=g(e),o=t.linkRel||"prefetch";for(const s of r){const a={};a.href=s,a.rel=o,(o==="prefetch"||o==="preload")&&s.endsWith(".js")&&(a.as="script"),n.push(f("link",a,void 0))}}function _e(n,e,t,r){const o=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(g(e))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${o}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=P(),s+="}"),t.workerFetchInsert==="always"&&(s+=P()),n.push(f("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:s,nonce:r}))}function Ee(n,e,t){let r=`const u=${JSON.stringify(g(e))};`;r+=P(),n.push(f("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:t}))}function Se(n){return{...Te,...n}}var Te={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Pe="<!DOCTYPE html>";async function Ce(n,e){var j,x,D;let t=e.stream,r=0,o=0,s=0,a=0,i="",c;const u=((j=e.streaming)==null?void 0:j.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},p=e.containerTagName??"html",w=e.containerAttributes??{},y=t,Y=S(),Z=K(e),d=Le(e.manifest);function L(){i&&(y.write(i),i="",r=0,s++,s===1&&(a=Y()))}function I(l){const m=l.length;r+=m,o+=m,i+=l}switch(u.strategy){case"disabled":t={write:I};break;case"direct":t=y;break;case"auto":let l=0,m=!1;const F=u.maximunChunk??0,E=u.maximunInitialChunk??0;t={write(v){v==="<!--qkssr-f-->"?m||(m=!0):v==="<!--qkssr-pu-->"?l++:v==="<!--qkssr-po-->"?l--:I(v),l===0&&(m||r>=(s===0?E:F))&&(m=!1,L())}};break}p==="html"?t.write(Pe):(t.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await pe(e,d);const N=d==null?void 0:d.manifest.injections,k=N?N.map(l=>f(l.tag,l.attributes??{})):[],_=((x=e.qwikLoader)==null?void 0:x.include)??"auto";if((((D=e.qwikLoader)==null?void 0:D.position)??"bottom")==="top"&&_!=="never"){const l=J({debug:e.debug});k.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:l})),k.push(f("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const ee=S(),O=[];let A=0,R=0;await oe(n,{stream:t,containerTagName:p,containerAttributes:w,serverData:e.serverData,base:Z,beforeContent:k,beforeClose:async(l,m,F,E)=>{var H,M,W,U,Q;A=ee();const v=S();c=await se(l,m,void 0,E);const b=[];if(e.prefetchStrategy!==null){const h=he(c,e,d);if(h.length>0){const z=qe(e.prefetchStrategy,h,(H=e.serverData)==null?void 0:H.nonce);z&&b.push(z)}}const te=JSON.stringify(c.state,void 0,void 0);b.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:Ie(te),nonce:(M=e.serverData)==null?void 0:M.nonce})),c.funcs.length>0&&b.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ae(c.funcs),nonce:(W=e.serverData)==null?void 0:W.nonce}));const re=!c||c.mode!=="static",B=_==="always"||_==="auto"&&re;if(B){const h=J({debug:e.debug});b.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:h,nonce:(U=e.serverData)==null?void 0:U.nonce}))}const $=Array.from(m.$events$,h=>JSON.stringify(h));if($.length>0){const h=(B?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${$.join(", ")})`;b.push(f("script",{dangerouslySetInnerHTML:h,nonce:(Q=e.serverData)==null?void 0:Q.nonce}))}return Ne(O,l),R=v(),f(C,{children:b})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"}),p!=="html"&&t.write("<!--/cq-->"),L();const ne=c.resources.some(l=>l._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:s,manifest:d==null?void 0:d.manifest,size:o,isStatic:!ne,timing:{render:A,snapshot:R,firstFlush:a},_symbols:O}}async function X(n,e={}){const t=[],r={write(s){t.push(s)}},o=await Ce(n,{base:e.base,containerAttributes:e.containerAttributes,containerTagName:e.containerTagName,locale:e.locale,manifest:e.manifest,symbolMapper:e.symbolMapper,qwikLoader:e.qwikLoader,serverData:e.serverData,prefetchStrategy:e.prefetchStrategy,stream:r});return{isStatic:o.isStatic,prefetchResources:o.prefetchResources,timing:o.timing,manifest:o.manifest,snapshotResult:o.snapshotResult,html:t.join("")}}function Le(n){if(n){if("mapper"in n)return n;if(n=ve(n),n){const e={};return Object.entries(n.mapping).forEach(([t,r])=>{e[T(t)]=[t,r]}),{mapper:e,manifest:n}}}}var Ie=n=>n.replace(/<(\/?script)/gi,"\\x3C$1");function Ne(n,e){var t;for(const r of e){const o=(t=r.$componentQrl$)==null?void 0:t.getSymbol();o&&!n.includes(o)&&n.push(o)}}var Oe='document.currentScript.closest("[q\\\\:container]").qFuncs=';function Ae(n){return Oe+`[${n.join(`,
`)}]`}const $e=({data:{slot1:n,slot2:e}})=>{const t=ce();return q(C,{children:q(ae,{children:async r=>{r.write("<div>in stream</div>");const o=t==null?void 0:t.manifest,s=await X(q(V,{children:e},1,"H1_11"),{...t,manifest:o,containerTagName:"div",qwikLoader:{include:"never"}}),[a,i]=s.html.split("INJECT_HERE"),c=await X(q(V,{children:n},1,"H1_12"),{...t,manifest:o,containerTagName:"div",qwikLoader:{include:"never"}});r.write(a+c.html+i),r.write("<div>in stream</div>")}},3,"H1_13")},1,"H1_14")};export{$e as s_sy20WwW9QcM};
