var nb=Object.defineProperty;var rb=(t,e,n)=>e in t?nb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ib=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Fd=(t,e,n)=>(rb(t,typeof e!="symbol"?e+"":e,n),n);var DW=ib((bt,xt)=>{function sb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Up(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ob(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var lw={exports:{}},kc={},uw={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),ab=Symbol.for("react.portal"),lb=Symbol.for("react.fragment"),ub=Symbol.for("react.strict_mode"),cb=Symbol.for("react.profiler"),db=Symbol.for("react.provider"),fb=Symbol.for("react.context"),hb=Symbol.for("react.forward_ref"),pb=Symbol.for("react.suspense"),mb=Symbol.for("react.memo"),gb=Symbol.for("react.lazy"),yv=Symbol.iterator;function vb(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dw=Object.assign,fw={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=fw,this.updater=n||cw}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hw(){}hw.prototype=Hs.prototype;function zp(t,e,n){this.props=t,this.context=e,this.refs=fw,this.updater=n||cw}var Wp=zp.prototype=new hw;Wp.constructor=zp;dw(Wp,Hs.prototype);Wp.isPureReactComponent=!0;var _v=Array.isArray,pw=Object.prototype.hasOwnProperty,Bp={current:null},mw={key:!0,ref:!0,__self:!0,__source:!0};function gw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pw.call(e,r)&&!mw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:Bp.current}}function yb(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function _b(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wv=/\/+/g;function $d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_b(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case ab:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$d(o,0):r,_v(i)?(n="",t!=null&&(n=t.replace(wv,"$&/")+"/"),Fl(i,e,n,"",function(u){return u})):i!=null&&(Vp(i)&&(i=yb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_v(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$d(s,a);o+=Fl(s,e,n,l,i)}else if(l=vb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$d(s,a++),o+=Fl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},$l={transition:null},Eb={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Bp};X.Children={map:cl,forEach:function(t,e,n){cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cl(t,function(){e++}),e},toArray:function(t){return cl(t,function(e){return e})||[]},only:function(t){if(!Vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Hs;X.Fragment=lb;X.Profiler=cb;X.PureComponent=zp;X.StrictMode=ub;X.Suspense=pb;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eb;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pw.call(e,l)&&!mw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:fb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:db,_context:t},t.Consumer=t};X.createElement=gw;X.createFactory=function(t){var e=gw.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:hb,render:t}};X.isValidElement=Vp;X.lazy=function(t){return{$$typeof:gb,_payload:{_status:-1,_result:t},_init:wb}};X.memo=function(t,e){return{$$typeof:mb,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return ut.current.useCallback(t,e)};X.useContext=function(t){return ut.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};X.useEffect=function(t,e){return ut.current.useEffect(t,e)};X.useId=function(){return ut.current.useId()};X.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ut.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};X.useRef=function(t){return ut.current.useRef(t)};X.useState=function(t){return ut.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ut.current.useTransition()};X.version="18.2.0";uw.exports=X;var S=uw.exports;const ze=Up(S),Wf=sb({__proto__:null,default:ze},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb=S,Cb=Symbol.for("react.element"),Tb=Symbol.for("react.fragment"),Ib=Object.prototype.hasOwnProperty,bb=Sb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xb={key:!0,ref:!0,__self:!0,__source:!0};function vw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ib.call(e,r)&&!xb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Cb,type:t,key:s,ref:o,props:i,_owner:bb.current}}kc.Fragment=Tb;kc.jsx=vw;kc.jsxs=vw;lw.exports=kc;var y=lw.exports,Bf={},yw={exports:{}},Dt={},_w={exports:{}},ww={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,N){var M=k.length;k.push(N);e:for(;0<M;){var U=M-1>>>1,G=k[U];if(0<i(G,N))k[U]=N,k[M]=G,M=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var N=k[0],M=k.pop();if(M!==N){k[0]=M;e:for(var U=0,G=k.length,De=G>>>1;U<De;){var xe=2*(U+1)-1,Ve=k[xe],Me=xe+1,st=k[Me];if(0>i(Ve,M))Me<G&&0>i(st,Ve)?(k[U]=st,k[Me]=M,U=Me):(k[U]=Ve,k[xe]=M,U=xe);else if(Me<G&&0>i(st,M))k[U]=st,k[Me]=M,U=Me;else break e}}return N}function i(k,N){var M=k.sortIndex-N.sortIndex;return M!==0?M:k.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,g=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=k)r(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(u)}}function E(k){if(_=!1,v(k),!g)if(n(l)!==null)g=!0,se(I);else{var N=n(u);N!==null&&x(E,N.startTime-k)}}function I(k,N){g=!1,_&&(_=!1,h(R),R=-1),p=!0;var M=f;try{for(v(N),c=n(l);c!==null&&(!(c.expirationTime>N)||k&&!be());){var U=c.callback;if(typeof U=="function"){c.callback=null,f=c.priorityLevel;var G=U(c.expirationTime<=N);N=t.unstable_now(),typeof G=="function"?c.callback=G:c===n(l)&&r(l),v(N)}else r(l);c=n(l)}if(c!==null)var De=!0;else{var xe=n(u);xe!==null&&x(E,xe.startTime-N),De=!1}return De}finally{c=null,f=M,p=!1}}var T=!1,C=null,R=-1,F=5,L=-1;function be(){return!(t.unstable_now()-L<F)}function Qe(){if(C!==null){var k=t.unstable_now();L=k;var N=!0;try{N=C(!0,k)}finally{N?ye():(T=!1,C=null)}}else T=!1}var ye;if(typeof m=="function")ye=function(){m(Qe)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,W=$.port2;$.port1.onmessage=Qe,ye=function(){W.postMessage(null)}}else ye=function(){w(Qe,0)};function se(k){C=k,T||(T=!0,ye())}function x(k,N){R=w(function(){k(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,se(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var M=f;f=N;try{return k()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,N){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var M=f;f=k;try{return N()}finally{f=M}},t.unstable_scheduleCallback=function(k,N,M){var U=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?U+M:U):M=U,k){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=M+G,k={id:d++,callback:N,priorityLevel:k,startTime:M,expirationTime:G,sortIndex:-1},M>U?(k.sortIndex=M,e(u,k),n(l)===null&&k===n(u)&&(_?(h(R),R=-1):_=!0,x(E,M-U))):(k.sortIndex=G,e(l,k),g||p||(g=!0,se(I))),k},t.unstable_shouldYield=be,t.unstable_wrapCallback=function(k){var N=f;return function(){var M=f;f=N;try{return k.apply(this,arguments)}finally{f=M}}}})(ww);_w.exports=ww;var kb=_w.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=S,Rt=kb;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sw=new Set,Qo={};function Mi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Qo[t]=e,t=0;t<e.length;t++)Sw.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,Pb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ev={},Sv={};function Ob(t){return Vf.call(Sv,t)?!0:Vf.call(Ev,t)?!1:Pb.test(t)?Sv[t]=!0:(Ev[t]=!0,!1)}function Rb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nb(t,e,n,r){if(e===null||typeof e>"u"||Rb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hp,Gp);Ye[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hp,Gp);Ye[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hp,Gp);Ye[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kp(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nb(e,n,i,r)&&(n=null),r||i===null?Ob(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),qp=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),Cw=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),Yp=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Iw=Symbol.for("react.offscreen"),Cv=Symbol.iterator;function lo(t){return t===null||typeof t!="object"?null:(t=Cv&&t[Cv]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Ud;function So(t){if(Ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ud=e&&e[1]||""}return`
`+Ud+t}var zd=!1;function Wd(t,e){if(!t||zd)return"";zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function Ab(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Wd(t.type,!1),t;case 11:return t=Wd(t.type.render,!1),t;case 1:return t=Wd(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Qi:return"Portal";case Hf:return"Profiler";case qp:return"StrictMode";case Gf:return"Suspense";case Kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tw:return(t.displayName||"Context")+".Consumer";case Cw:return(t._context.displayName||"Context")+".Provider";case Yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qp:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function Db(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===qp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mb(t){var e=bw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fl(t){t._valueTracker||(t._valueTracker=Mb(t))}function xw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yf(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kw(t,e){e=e.checked,e!=null&&Kp(t,"checked",e,!1)}function Qf(t,e){kw(t,e);var n=Dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xf(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Co(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function Pw(t,e){var n=Dr(e.value),r=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,Rw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lb=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){Lb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Aw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jb=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(jb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function Xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,ms=null,gs=null;function kv(t){if(t=za(t)){if(typeof rh!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Ac(e),rh(t.stateNode,t.type,e))}}function Dw(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Mw(){if(ms){var t=ms,e=gs;if(gs=ms=null,kv(t),e)for(t=0;t<e.length;t++)kv(e[t])}}function Lw(t,e){return t(e)}function jw(){}var Bd=!1;function Fw(t,e,n){if(Bd)return t(e,n);Bd=!0;try{return Lw(t,e,n)}finally{Bd=!1,(ms!==null||gs!==null)&&(jw(),Mw())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var ih=!1;if($n)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{ih=!1}function Fb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ro=!1,yu=null,_u=!1,sh=null,$b={onError:function(t){Ro=!0,yu=t}};function Ub(t,e,n,r,i,s,o,a,l){Ro=!1,yu=null,Fb.apply($b,arguments)}function zb(t,e,n,r,i,s,o,a,l){if(Ub.apply(this,arguments),Ro){if(Ro){var u=yu;Ro=!1,yu=null}else throw Error(P(198));_u||(_u=!0,sh=u)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $w(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(Li(t)!==t)throw Error(P(188))}function Wb(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pv(i),t;if(s===r)return Pv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function Uw(t){return t=Wb(t),t!==null?zw(t):null}function zw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zw(t);if(e!==null)return e;t=t.sibling}return null}var Ww=Rt.unstable_scheduleCallback,Ov=Rt.unstable_cancelCallback,Bb=Rt.unstable_shouldYield,Vb=Rt.unstable_requestPaint,Ie=Rt.unstable_now,Hb=Rt.unstable_getCurrentPriorityLevel,Jp=Rt.unstable_ImmediatePriority,Bw=Rt.unstable_UserBlockingPriority,wu=Rt.unstable_NormalPriority,Gb=Rt.unstable_LowPriority,Vw=Rt.unstable_IdlePriority,Pc=null,_n=null;function Kb(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:Qb,qb=Math.log,Yb=Math.LN2;function Qb(t){return t>>>=0,t===0?32:31-(qb(t)/Yb|0)|0}var pl=64,ml=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=To(a):(s&=o,s!==0&&(r=To(s)))}else o=n&~i,o!==0?r=To(o):s!==0&&(r=To(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function Xb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Xb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hw(){var t=pl;return pl<<=1,!(pl&4194240)&&(pl=64),t}function Vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function Zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Gw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kw,em,qw,Yw,Qw,ah=!1,gl=[],vr=null,yr=null,_r=null,Zo=new Map,ea=new Map,or=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rv(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=za(e),e!==null&&em(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tx(t,e,n,r,i){switch(e){case"focusin":return vr=co(vr,t,e,n,r,i),!0;case"dragenter":return yr=co(yr,t,e,n,r,i),!0;case"mouseover":return _r=co(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,co(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,co(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function Xw(t){var e=oi(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=$w(n),e!==null){t.blockedOn=e,Qw(t.priority,function(){qw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=za(n),e!==null&&em(e),t.blockedOn=n,!1;e.shift()}return!0}function Nv(t,e,n){Ul(t)&&n.delete(e)}function nx(){ah=!1,vr!==null&&Ul(vr)&&(vr=null),yr!==null&&Ul(yr)&&(yr=null),_r!==null&&Ul(_r)&&(_r=null),Zo.forEach(Nv),ea.forEach(Nv)}function fo(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,nx)))}function ta(t){function e(i){return fo(i,t)}if(0<gl.length){fo(gl[0],t);for(var n=1;n<gl.length;n++){var r=gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&fo(vr,t),yr!==null&&fo(yr,t),_r!==null&&fo(_r,t),Zo.forEach(e),ea.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Xw(n),n.blockedOn===null&&or.shift()}var vs=Kn.ReactCurrentBatchConfig,Su=!0;function rx(t,e,n,r){var i=re,s=vs.transition;vs.transition=null;try{re=1,tm(t,e,n,r)}finally{re=i,vs.transition=s}}function ix(t,e,n,r){var i=re,s=vs.transition;vs.transition=null;try{re=4,tm(t,e,n,r)}finally{re=i,vs.transition=s}}function tm(t,e,n,r){if(Su){var i=lh(t,e,n,r);if(i===null)ef(t,e,r,Cu,n),Rv(t,r);else if(tx(i,t,e,n,r))r.stopPropagation();else if(Rv(t,r),e&4&&-1<ex.indexOf(t)){for(;i!==null;){var s=za(i);if(s!==null&&Kw(s),s=lh(t,e,n,r),s===null&&ef(t,e,r,Cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ef(t,e,r,null,n)}}var Cu=null;function lh(t,e,n,r){if(Cu=null,t=Xp(r),t=oi(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$w(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function Jw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hb()){case Jp:return 1;case Bw:return 4;case wu:case Gb:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var hr=null,nm=null,zl=null;function Zw(){if(zl)return zl;var t,e=nm,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Av(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:Av,this.isPropagationStopped=Av,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rm=Mt(Gs),Ua=Ce({},Gs,{view:0,detail:0}),sx=Mt(Ua),Hd,Gd,ho,Oc=Ce({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Hd=t.screenX-ho.screenX,Gd=t.screenY-ho.screenY):Gd=Hd=0,ho=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Gd}}),Dv=Mt(Oc),ox=Ce({},Oc,{dataTransfer:0}),ax=Mt(ox),lx=Ce({},Ua,{relatedTarget:0}),Kd=Mt(lx),ux=Ce({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Mt(ux),dx=Ce({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fx=Mt(dx),hx=Ce({},Gs,{data:0}),Mv=Mt(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gx[t])?!!e[t]:!1}function im(){return vx}var yx=Ce({},Ua,{key:function(t){if(t.key){var e=px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=Mt(yx),wx=Ce({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lv=Mt(wx),Ex=Ce({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),Sx=Mt(Ex),Cx=Ce({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Mt(Cx),Ix=Ce({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=Mt(Ix),xx=[9,13,27,32],sm=$n&&"CompositionEvent"in window,No=null;$n&&"documentMode"in document&&(No=document.documentMode);var kx=$n&&"TextEvent"in window&&!No,eE=$n&&(!sm||No&&8<No&&11>=No),jv=" ",Fv=!1;function tE(t,e){switch(t){case"keyup":return xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function Px(t,e){switch(t){case"compositionend":return nE(e);case"keypress":return e.which!==32?null:(Fv=!0,jv);case"textInput":return t=e.data,t===jv&&Fv?null:t;default:return null}}function Ox(t,e){if(Ji)return t==="compositionend"||!sm&&tE(t,e)?(t=Zw(),zl=nm=hr=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eE&&e.locale!=="ko"?null:e.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rx[t.type]:e==="textarea"}function rE(t,e,n,r){Dw(r),e=Tu(e,"onChange"),0<e.length&&(n=new rm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,na=null;function Nx(t){pE(t,0)}function Rc(t){var e=ts(t);if(xw(e))return t}function Ax(t,e){if(t==="change")return e}var iE=!1;if($n){var qd;if($n){var Yd="oninput"in document;if(!Yd){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),Yd=typeof Uv.oninput=="function"}qd=Yd}else qd=!1;iE=qd&&(!document.documentMode||9<document.documentMode)}function zv(){Ao&&(Ao.detachEvent("onpropertychange",sE),na=Ao=null)}function sE(t){if(t.propertyName==="value"&&Rc(na)){var e=[];rE(e,na,t,Xp(t)),Fw(Nx,e)}}function Dx(t,e,n){t==="focusin"?(zv(),Ao=e,na=n,Ao.attachEvent("onpropertychange",sE)):t==="focusout"&&zv()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(na)}function Lx(t,e){if(t==="click")return Rc(e)}function jx(t,e){if(t==="input"||t==="change")return Rc(e)}function Fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:Fx;function ra(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vf.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Wv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bv(t,e){var n=Wv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wv(n)}}function oE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aE(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=aE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oE(n.ownerDocument.documentElement,n)){if(r!==null&&om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bv(n,s);var o=Bv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=$n&&"documentMode"in document&&11>=document.documentMode,Zi=null,uh=null,Do=null,ch=!1;function Vv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Zi==null||Zi!==vu(r)||(r=Zi,"selectionStart"in r&&om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&ra(Do,r)||(Do=r,r=Tu(uh,"onSelect"),0<r.length&&(e=new rm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Qd={},lE={};$n&&(lE=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Nc(t){if(Qd[t])return Qd[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lE)return Qd[t]=e[n];return t}var uE=Nc("animationend"),cE=Nc("animationiteration"),dE=Nc("animationstart"),fE=Nc("transitionend"),hE=new Map,Hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){hE.set(t,e),Mi(e,[t])}for(var Xd=0;Xd<Hv.length;Xd++){var Jd=Hv[Xd],zx=Jd.toLowerCase(),Wx=Jd[0].toUpperCase()+Jd.slice(1);Br(zx,"on"+Wx)}Br(uE,"onAnimationEnd");Br(cE,"onAnimationIteration");Br(dE,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(fE,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Gv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zb(r,e,void 0,t),t.currentTarget=null}function pE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gv(i,a,u),s=l}}}if(_u)throw t=sh,_u=!1,sh=null,t}function de(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(mE(e,t,2,!1),n.add(r))}function Zd(t,e,n){var r=0;e&&(r|=4),mE(n,t,r,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[_l]){t[_l]=!0,Sw.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||Zd(n,!1,t),Zd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,Zd("selectionchange",!1,e))}}function mE(t,e,n,r){switch(Jw(e)){case 1:var i=rx;break;case 4:i=ix;break;default:i=tm}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ef(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Fw(function(){var u=s,d=Xp(n),c=[];e:{var f=hE.get(t);if(f!==void 0){var p=rm,g=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":p=_x;break;case"focusin":g="focus",p=Kd;break;case"focusout":g="blur",p=Kd;break;case"beforeblur":case"afterblur":p=Kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sx;break;case uE:case cE:case dE:p=cx;break;case fE:p=Tx;break;case"scroll":p=sx;break;case"wheel":p=bx;break;case"copy":case"cut":case"paste":p=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lv}var _=(e&4)!==0,w=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var m=u,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,h!==null&&(E=Jo(m,h),E!=null&&_.push(sa(m,E,v)))),w)break;m=m.return}0<_.length&&(f=new p(f,g,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==nh&&(g=n.relatedTarget||n.fromElement)&&(oi(g)||g[Un]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?oi(g):null,g!==null&&(w=Li(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Dv,E="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Lv,E="onPointerLeave",h="onPointerEnter",m="pointer"),w=p==null?f:ts(p),v=g==null?f:ts(g),f=new _(E,m+"leave",p,n,d),f.target=w,f.relatedTarget=v,E=null,oi(d)===u&&(_=new _(h,m+"enter",g,n,d),_.target=v,_.relatedTarget=w,E=_),w=E,p&&g)t:{for(_=p,h=g,m=0,v=_;v;v=Hi(v))m++;for(v=0,E=h;E;E=Hi(E))v++;for(;0<m-v;)_=Hi(_),m--;for(;0<v-m;)h=Hi(h),v--;for(;m--;){if(_===h||h!==null&&_===h.alternate)break t;_=Hi(_),h=Hi(h)}_=null}else _=null;p!==null&&Kv(c,f,p,_,!1),g!==null&&w!==null&&Kv(c,w,g,_,!0)}}e:{if(f=u?ts(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var I=Ax;else if($v(f))if(iE)I=jx;else{I=Mx;var T=Dx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Lx);if(I&&(I=I(t,u))){rE(c,I,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Xf(f,"number",f.value)}switch(T=u?ts(u):window,t){case"focusin":($v(T)||T.contentEditable==="true")&&(Zi=T,uh=u,Do=null);break;case"focusout":Do=uh=Zi=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,Vv(c,n,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":Vv(c,n,d)}var C;if(sm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ji?tE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(eE&&n.locale!=="ko"&&(Ji||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ji&&(C=Zw()):(hr=d,nm="value"in hr?hr.value:hr.textContent,Ji=!0)),T=Tu(u,R),0<T.length&&(R=new Mv(R,t,null,n,d),c.push({event:R,listeners:T}),C?R.data=C:(C=nE(n),C!==null&&(R.data=C)))),(C=kx?Px(t,n):Ox(t,n))&&(u=Tu(u,"onBeforeInput"),0<u.length&&(d=new Mv("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}pE(c,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Jo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Jo(n,s),l!=null&&o.unshift(sa(n,l,a))):i||(l=Jo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Vx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function qv(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(Hx,"")}function wl(t,e,n){if(e=qv(e),qv(t)!==e&&n)throw Error(P(425))}function Iu(){}var dh=null,fh=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(t){return Yv.resolve(null).then(t).catch(qx)}:ph;function qx(t){setTimeout(function(){throw t})}function tf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),yn="__reactFiber$"+Ks,oa="__reactProps$"+Ks,Un="__reactContainer$"+Ks,mh="__reactEvents$"+Ks,Yx="__reactListeners$"+Ks,Qx="__reactHandles$"+Ks;function oi(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qv(t);t!==null;){if(n=t[yn])return n;t=Qv(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[yn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Ac(t){return t[oa]||null}var gh=[],ns=-1;function Vr(t){return{current:t}}function ge(t){0>ns||(t.current=gh[ns],gh[ns]=null,ns--)}function ce(t,e){ns++,gh[ns]=t.current,t.current=e}var Mr={},rt=Vr(Mr),mt=Vr(!1),wi=Mr;function Is(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function bu(){ge(mt),ge(rt)}function Xv(t,e,n){if(rt.current!==Mr)throw Error(P(168));ce(rt,e),ce(mt,n)}function gE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,Db(t)||"Unknown",i));return Ce({},n,r)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,wi=rt.current,ce(rt,t),ce(mt,mt.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=gE(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,ge(mt),ge(rt),ce(rt,t)):ge(mt),ce(mt,n)}var Rn=null,Dc=!1,nf=!1;function vE(t){Rn===null?Rn=[t]:Rn.push(t)}function Xx(t){Dc=!0,vE(t)}function Hr(){if(!nf&&Rn!==null){nf=!0;var t=0,e=re;try{var n=Rn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Dc=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),Ww(Jp,Hr),i}finally{re=e,nf=!1}}return null}var rs=[],is=0,ku=null,Pu=0,Ut=[],zt=0,Ei=null,Nn=1,An="";function Jr(t,e){rs[is++]=Pu,rs[is++]=ku,ku=t,Pu=e}function yE(t,e,n){Ut[zt++]=Nn,Ut[zt++]=An,Ut[zt++]=Ei,Ei=t;var r=Nn;t=An;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-nn(e)+i|n<<i|r,An=s+t}else Nn=1<<s|n<<i|r,An=t}function am(t){t.return!==null&&(Jr(t,1),yE(t,1,0))}function lm(t){for(;t===ku;)ku=rs[--is],rs[is]=null,Pu=rs[--is],rs[is]=null;for(;t===Ei;)Ei=Ut[--zt],Ut[zt]=null,An=Ut[--zt],Ut[zt]=null,Nn=Ut[--zt],Ut[zt]=null}var kt=null,Ct=null,ve=!1,Xt=null;function _E(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Ct=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:Nn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Ct=null,!0):!1;default:return!1}}function vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yh(t){if(ve){var e=Ct;if(e){var n=e;if(!Zv(t,e)){if(vh(t))throw Error(P(418));e=wr(n.nextSibling);var r=kt;e&&Zv(t,e)?_E(r,n):(t.flags=t.flags&-4097|2,ve=!1,kt=t)}}else{if(vh(t))throw Error(P(418));t.flags=t.flags&-4097|2,ve=!1,kt=t}}}function ey(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function El(t){if(t!==kt)return!1;if(!ve)return ey(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=Ct)){if(vh(t))throw wE(),Error(P(418));for(;e;)_E(t,e),e=wr(e.nextSibling)}if(ey(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=kt?wr(t.stateNode.nextSibling):null;return!0}function wE(){for(var t=Ct;t;)t=wr(t.nextSibling)}function bs(){Ct=kt=null,ve=!1}function um(t){Xt===null?Xt=[t]:Xt.push(t)}var Jx=Kn.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ou=Vr(null),Ru=null,ss=null,cm=null;function dm(){cm=ss=Ru=null}function fm(t){var e=Ou.current;ge(Ou),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Ru=t,cm=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(cm!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Ru===null)throw Error(P(308));ss=t,Ru.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var ai=null;function hm(t){ai===null?ai=[t]:ai.push(t)}function EE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hm(e)):(n.next=i.next,i.next=n),e.interleaved=n,zn(t,r)}function zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function pm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function SE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,zn(t,n)}return i=r.interleaved,i===null?(e.next=e,hm(r)):(e.next=i.next,i.next=e),r.interleaved=e,zn(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}function ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){c=g.call(p,c,f);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,c,f):g,f==null)break e;c=Ce({},c,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=c}}function ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var CE=new Ew.Component().refs;function wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Cr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(rn(e,t,i,r),Bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Cr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(rn(e,t,i,r),Bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=Cr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(rn(e,t,r,n),Bl(e,t,r))}};function ry(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function TE(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=gt(e)?wi:rt.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=CE,pm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=gt(e)?wi:rt.current,i.context=Is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===CE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function IE(t){function e(h,m){if(t){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Tr(h,m),h.index=0,h.sibling=null,h}function s(h,m,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,E){return m===null||m.tag!==6?(m=cf(v,h.mode,E),m.return=h,m):(m=i(m,v),m.return=h,m)}function l(h,m,v,E){var I=v.type;return I===Xi?d(h,m,v.props.children,E,v.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ir&&sy(I)===m.type)?(E=i(m,v.props),E.ref=po(h,m,v),E.return=h,E):(E=Yl(v.type,v.key,v.props,null,h.mode,E),E.ref=po(h,m,v),E.return=h,E)}function u(h,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=df(v,h.mode,E),m.return=h,m):(m=i(m,v.children||[]),m.return=h,m)}function d(h,m,v,E,I){return m===null||m.tag!==7?(m=hi(v,h.mode,E,I),m.return=h,m):(m=i(m,v),m.return=h,m)}function c(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=cf(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dl:return v=Yl(m.type,m.key,m.props,null,h.mode,v),v.ref=po(h,null,m),v.return=h,v;case Qi:return m=df(m,h.mode,v),m.return=h,m;case ir:var E=m._init;return c(h,E(m._payload),v)}if(Co(m)||lo(m))return m=hi(m,h.mode,v,null),m.return=h,m;Sl(h,m)}return null}function f(h,m,v,E){var I=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(h,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:return v.key===I?l(h,m,v,E):null;case Qi:return v.key===I?u(h,m,v,E):null;case ir:return I=v._init,f(h,m,I(v._payload),E)}if(Co(v)||lo(v))return I!==null?null:d(h,m,v,E,null);Sl(h,v)}return null}function p(h,m,v,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(v)||null,a(m,h,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case dl:return h=h.get(E.key===null?v:E.key)||null,l(m,h,E,I);case Qi:return h=h.get(E.key===null?v:E.key)||null,u(m,h,E,I);case ir:var T=E._init;return p(h,m,v,T(E._payload),I)}if(Co(E)||lo(E))return h=h.get(v)||null,d(m,h,E,I,null);Sl(m,E)}return null}function g(h,m,v,E){for(var I=null,T=null,C=m,R=m=0,F=null;C!==null&&R<v.length;R++){C.index>R?(F=C,C=null):F=C.sibling;var L=f(h,C,v[R],E);if(L===null){C===null&&(C=F);break}t&&C&&L.alternate===null&&e(h,C),m=s(L,m,R),T===null?I=L:T.sibling=L,T=L,C=F}if(R===v.length)return n(h,C),ve&&Jr(h,R),I;if(C===null){for(;R<v.length;R++)C=c(h,v[R],E),C!==null&&(m=s(C,m,R),T===null?I=C:T.sibling=C,T=C);return ve&&Jr(h,R),I}for(C=r(h,C);R<v.length;R++)F=p(C,h,R,v[R],E),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?R:F.key),m=s(F,m,R),T===null?I=F:T.sibling=F,T=F);return t&&C.forEach(function(be){return e(h,be)}),ve&&Jr(h,R),I}function _(h,m,v,E){var I=lo(v);if(typeof I!="function")throw Error(P(150));if(v=I.call(v),v==null)throw Error(P(151));for(var T=I=null,C=m,R=m=0,F=null,L=v.next();C!==null&&!L.done;R++,L=v.next()){C.index>R?(F=C,C=null):F=C.sibling;var be=f(h,C,L.value,E);if(be===null){C===null&&(C=F);break}t&&C&&be.alternate===null&&e(h,C),m=s(be,m,R),T===null?I=be:T.sibling=be,T=be,C=F}if(L.done)return n(h,C),ve&&Jr(h,R),I;if(C===null){for(;!L.done;R++,L=v.next())L=c(h,L.value,E),L!==null&&(m=s(L,m,R),T===null?I=L:T.sibling=L,T=L);return ve&&Jr(h,R),I}for(C=r(h,C);!L.done;R++,L=v.next())L=p(C,h,R,L.value,E),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?R:L.key),m=s(L,m,R),T===null?I=L:T.sibling=L,T=L);return t&&C.forEach(function(Qe){return e(h,Qe)}),ve&&Jr(h,R),I}function w(h,m,v,E){if(typeof v=="object"&&v!==null&&v.type===Xi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case dl:e:{for(var I=v.key,T=m;T!==null;){if(T.key===I){if(I=v.type,I===Xi){if(T.tag===7){n(h,T.sibling),m=i(T,v.props.children),m.return=h,h=m;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ir&&sy(I)===T.type){n(h,T.sibling),m=i(T,v.props),m.ref=po(h,T,v),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}v.type===Xi?(m=hi(v.props.children,h.mode,E,v.key),m.return=h,h=m):(E=Yl(v.type,v.key,v.props,null,h.mode,E),E.ref=po(h,m,v),E.return=h,h=E)}return o(h);case Qi:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=i(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=df(v,h.mode,E),m.return=h,h=m}return o(h);case ir:return T=v._init,w(h,m,T(v._payload),E)}if(Co(v))return g(h,m,v,E);if(lo(v))return _(h,m,v,E);Sl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,v),m.return=h,h=m):(n(h,m),m=cf(v,h.mode,E),m.return=h,h=m),o(h)):n(h,m)}return w}var xs=IE(!0),bE=IE(!1),Wa={},wn=Vr(Wa),aa=Vr(Wa),la=Vr(Wa);function li(t){if(t===Wa)throw Error(P(174));return t}function mm(t,e){switch(ce(la,e),ce(aa,t),ce(wn,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zf(e,t)}ge(wn),ce(wn,e)}function ks(){ge(wn),ge(aa),ge(la)}function xE(t){li(la.current);var e=li(wn.current),n=Zf(e,t.type);e!==n&&(ce(aa,t),ce(wn,n))}function gm(t){aa.current===t&&(ge(wn),ge(aa))}var _e=Vr(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rf=[];function vm(){for(var t=0;t<rf.length;t++)rf[t]._workInProgressVersionPrimary=null;rf.length=0}var Vl=Kn.ReactCurrentDispatcher,sf=Kn.ReactCurrentBatchConfig,Si=0,Ee=null,Oe=null,Fe=null,Du=!1,Mo=!1,ua=0,Zx=0;function Xe(){throw Error(P(321))}function ym(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function _m(t,e,n,r,i,s){if(Si=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?rk:ik,t=n(r,i),Mo){s=0;do{if(Mo=!1,ua=0,25<=s)throw Error(P(301));s+=1,Fe=Oe=null,e.updateQueue=null,Vl.current=sk,t=n(r,i)}while(Mo)}if(Vl.current=Mu,e=Oe!==null&&Oe.next!==null,Si=0,Fe=Oe=Ee=null,Du=!1,e)throw Error(P(300));return t}function wm(){var t=ua!==0;return ua=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Ht(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(P(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function ca(t,e){return typeof e=="function"?e(t):e}function of(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Si&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,Ee.lanes|=d,Ci|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function af(t){var e=Ht(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kE(){}function PE(t,e){var n=Ee,r=Ht(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Em(NE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,da(9,RE.bind(null,n,r,i,e),void 0,null),We===null)throw Error(P(349));Si&30||OE(n,e,i)}return i}function OE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function RE(t,e,n,r){e.value=n,e.getSnapshot=r,AE(e)&&DE(t)}function NE(t,e,n){return n(function(){AE(e)&&DE(t)})}function AE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function DE(t){var e=zn(t,1);e!==null&&rn(e,t,1,-1)}function oy(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=nk.bind(null,Ee,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ME(){return Ht().memoizedState}function Hl(t,e,n,r){var i=gn();Ee.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ym(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=da(1|e,n,s,r)}function ay(t,e){return Hl(8390656,8,t,e)}function Em(t,e){return Lc(2048,8,t,e)}function LE(t,e){return Lc(4,2,t,e)}function jE(t,e){return Lc(4,4,t,e)}function FE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $E(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,FE.bind(null,e,t),n)}function Sm(){}function UE(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zE(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WE(t,e,n){return Si&21?(un(n,e)||(n=Hw(),Ee.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function ek(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=sf.transition;sf.transition={};try{t(!1),e()}finally{re=n,sf.transition=r}}function BE(){return Ht().memoizedState}function tk(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VE(t))HE(e,n);else if(n=EE(t,e,n,r),n!==null){var i=lt();rn(n,t,r,i),GE(n,e,r)}}function nk(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VE(t))HE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,hm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=EE(t,e,i,r),n!==null&&(i=lt(),rn(n,t,r,i),GE(n,e,r))}}function VE(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function HE(t,e){Mo=Du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function GE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}var Mu={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},rk={readContext:Vt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:ay,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,FE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tk.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:oy,useDebugValue:Sm,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=oy(!1),e=t[0];return t=ek.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=gn();if(ve){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),We===null)throw Error(P(349));Si&30||OE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ay(NE.bind(null,r,s,t),[t]),r.flags|=2048,da(9,RE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=We.identifierPrefix;if(ve){var n=An,r=Nn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ik={readContext:Vt,useCallback:UE,useContext:Vt,useEffect:Em,useImperativeHandle:$E,useInsertionEffect:LE,useLayoutEffect:jE,useMemo:zE,useReducer:of,useRef:ME,useState:function(){return of(ca)},useDebugValue:Sm,useDeferredValue:function(t){var e=Ht();return WE(e,Oe.memoizedState,t)},useTransition:function(){var t=of(ca)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:kE,useSyncExternalStore:PE,useId:BE,unstable_isNewReconciler:!1},sk={readContext:Vt,useCallback:UE,useContext:Vt,useEffect:Em,useImperativeHandle:$E,useInsertionEffect:LE,useLayoutEffect:jE,useMemo:zE,useReducer:af,useRef:ME,useState:function(){return af(ca)},useDebugValue:Sm,useDeferredValue:function(t){var e=Ht();return Oe===null?e.memoizedState=t:WE(e,Oe.memoizedState,t)},useTransition:function(){var t=af(ca)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:kE,useSyncExternalStore:PE,useId:BE,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=Ab(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ok=typeof WeakMap=="function"?WeakMap:Map;function KE(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ju||(ju=!0,Nh=r),Sh(t,e)},n}function qE(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ok;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wk.bind(null,t,e,n),e.then(t,t))}function uy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var ak=Kn.ReactCurrentOwner,ht=!1;function ot(t,e,n,r){e.child=t===null?bE(e,null,n,r):xs(e,t.child,n,r)}function dy(t,e,n,r,i){n=n.render;var s=e.ref;return ys(e,i),r=_m(t,e,n,r,s,i),n=wm(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(ve&&n&&am(e),e.flags|=1,ot(t,e,r,i),e.child)}function fy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Om(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,YE(t,e,s,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function YE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return Ch(t,e,n,r,i)}function QE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(as,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(as,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(as,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(as,St),St|=r;return ot(t,e,i,n),e.child}function XE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ch(t,e,n,r,i){var s=gt(n)?wi:rt.current;return s=Is(e,s),ys(e,i),n=_m(t,e,n,r,s,i),r=wm(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(ve&&r&&am(e),e.flags|=1,ot(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(gt(n)){var s=!0;xu(e)}else s=!1;if(ys(e,i),e.stateNode===null)Gl(t,e),TE(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=gt(n)?wi:rt.current,u=Is(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&iy(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,Nu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||mt.current||sr?(typeof d=="function"&&(wh(e,n,d,r),l=e.memoizedState),(a=sr||ry(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,SE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=gt(n)?wi:rt.current,l=Is(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&iy(e,o,r,l),sr=!1,f=e.memoizedState,o.state=f,Nu(e,r,o,i);var g=e.memoizedState;a!==c||f!==g||mt.current||sr?(typeof p=="function"&&(wh(e,n,p,r),g=e.memoizedState),(u=sr||ry(e,n,u,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,s,i)}function Th(t,e,n,r,i,s){XE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),Wn(t,e,s);r=e.stateNode,ak.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):ot(t,e,a,s),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function JE(t){var e=t.stateNode;e.pendingContext?Xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xv(t,e.context,!1),mm(t,e.containerInfo)}function py(t,e,n,r,i){return bs(),um(i),e.flags|=256,ot(t,e,n,r),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZE(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bh(n),e.memoizedState=Ih,t):Cm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cm(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&um(r),xs(e,t.child,null,n),t=Cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lf(Error(P(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=lf(s,r,void 0),Cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,zn(t,i),rn(r,t,i,-1))}return Pm(),r=lf(Error(P(421))),Cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ek.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=wr(i.nextSibling),kt=e,ve=!0,Xt=null,t!==null&&(Ut[zt++]=Nn,Ut[zt++]=An,Ut[zt++]=Ei,Nn=t.id,An=t.overflow,Ei=e),e=Cm(e,r.children),e.flags|=4096,e)}function my(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function uf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&my(t,n,e);else if(t.tag===19)my(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uf(e,!0,n,null,s);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uk(t,e,n){switch(e.tag){case 3:JE(e),bs();break;case 5:xE(e);break;case 1:gt(e.type)&&xu(e);break;case 4:mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?ZE(t,e,n):(ce(_e,_e.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,QE(t,e,n)}return Wn(t,e,n)}var tS,xh,nS,rS;tS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};nS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(wn.current);var s=null;switch(n){case"input":i=Yf(t,i),r=Yf(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Jf(t,i),r=Jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Iu)}eh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rS=function(t,e,n,r){n!==r&&(e.flags|=4)};function mo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ck(t,e,n){var r=e.pendingProps;switch(lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&bu(),Je(e),null;case 3:return r=e.stateNode,ks(),ge(mt),ge(rt),vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Mh(Xt),Xt=null))),xh(t,e),Je(e),null;case 5:gm(e);var i=li(la.current);if(n=e.type,t!==null&&e.stateNode!=null)nS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Je(e),null}if(t=li(wn.current),El(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)de(Io[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Tv(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":bv(r,s),de("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(r.textContent,a,t),i=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":fl(r),Iv(r,s,!0);break;case"textarea":fl(r),xv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[oa]=r,tS(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)de(Io[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Tv(t,r),i=Yf(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),de("invalid",t);break;case"textarea":bv(t,r),i=Jf(t,r),de("invalid",t);break;default:i=r}eh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Aw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Kp(t,s,l,o))}switch(n){case"input":fl(t),Iv(t,r,!1);break;case"textarea":fl(t),xv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)rS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=li(la.current),li(wn.current),El(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Ct!==null&&e.mode&1&&!(e.flags&128))wE(),bs(),e.flags|=98560,s=!1;else if(s=El(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[yn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Xt!==null&&(Mh(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ae===0&&(Ae=3):Pm())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ks(),xh(t,e),t===null&&ia(e.stateNode.containerInfo),Je(e),null;case 10:return fm(e.type._context),Je(e),null;case 17:return gt(e.type)&&bu(),Je(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mo(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Os&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Je(e),null}else 2*Ie()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,r=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return km(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function dk(t,e){switch(lm(e),e.tag){case 1:return gt(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),ge(mt),ge(rt),vm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gm(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return ks(),null;case 10:return fm(e.type._context),null;case 22:case 23:return km(),null;case 24:return null;default:return null}}var Tl=!1,et=!1,fk=typeof WeakSet=="function"?WeakSet:Set,D=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var gy=!1;function hk(t,e){if(dh=Su,t=aE(),om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:t,selectionRange:n},Su=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,w=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:qt(e.type,_),w);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Te(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return g=gy,gy=!1,g}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iS(t){var e=t.alternate;e!==null&&(t.alternate=null,iS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[oa],delete e[mh],delete e[Yx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sS(t){return t.tag===5||t.tag===3||t.tag===4}function vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Iu));else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Ge=null,Qt=!1;function tr(t,e,n){for(n=n.child;n!==null;)oS(t,e,n),n=n.sibling}function oS(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:et||os(n,e);case 6:var r=Ge,i=Qt;Ge=null,tr(t,e,n),Ge=r,Qt=i,Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Qt?(t=Ge,n=n.stateNode,t.nodeType===8?tf(t.parentNode,n):t.nodeType===1&&tf(t,n),ta(t)):tf(Ge,n.stateNode));break;case 4:r=Ge,i=Qt,Ge=n.stateNode.containerInfo,Qt=!0,tr(t,e,n),Ge=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!et&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,tr(t,e,n),et=r):tr(t,e,n);break;default:tr(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fk),e.forEach(function(r){var i=Sk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Qt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Qt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(Ge===null)throw Error(P(160));oS(s,o,i),Ge=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aS(e,t),e=e.sibling}function aS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),mn(t),r&4){try{Lo(3,t,t.return),jc(3,t)}catch(_){Te(t,t.return,_)}try{Lo(5,t,t.return)}catch(_){Te(t,t.return,_)}}break;case 1:Kt(e,t),mn(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(Kt(e,t),mn(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{Xo(i,"")}catch(_){Te(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kw(i,s),th(a,o);var u=th(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Aw(i,c):d==="dangerouslySetInnerHTML"?Rw(i,c):d==="children"?Xo(i,c):Kp(i,d,c,u)}switch(a){case"input":Qf(i,s);break;case"textarea":Pw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ps(i,!!s.multiple,s.defaultValue,!0):ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(_){Te(t,t.return,_)}}break;case 6:if(Kt(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Te(t,t.return,_)}}break;case 3:if(Kt(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(_){Te(t,t.return,_)}break;case 4:Kt(e,t),mn(t);break;case 13:Kt(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=Ie())),r&4&&yy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||d,Kt(e,t),et=u):Kt(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(D=t,d=t.child;d!==null;){for(c=D=d;D!==null;){switch(f=D,p=f.child,f.tag){case 0:case 11:case 14:case 15:Lo(4,f,f.return);break;case 1:os(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Te(r,n,_)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){wy(c);continue}}p!==null?(p.return=f,D=p):wy(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nw("display",o))}catch(_){Te(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){Te(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Kt(e,t),mn(t),r&4&&yy(t);break;case 21:break;default:Kt(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sS(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xo(i,""),r.flags&=-33);var s=vy(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vy(t);Oh(t,a,o);break;default:throw Error(P(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pk(t,e,n){D=t,lS(t)}function lS(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=Tl;var u=et;if(Tl=o,(et=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Ey(i):l!==null?(l.return=o,D=l):Ey(i);for(;s!==null;)D=s,lS(s),s=s.sibling;D=i,Tl=a,et=u}_y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):_y(t)}}function _y(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ny(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ta(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}et||e.flags&512&&Ph(e)}catch(f){Te(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function wy(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Ey(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Te(e,i,l)}}var s=e.return;try{Ph(e)}catch(l){Te(e,s,l)}break;case 5:var o=e.return;try{Ph(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var mk=Math.ceil,Lu=Kn.ReactCurrentDispatcher,Tm=Kn.ReactCurrentOwner,Bt=Kn.ReactCurrentBatchConfig,Z=0,We=null,Pe=null,qe=0,St=0,as=Vr(0),Ae=0,fa=null,Ci=0,Fc=0,Im=0,jo=null,ft=null,bm=0,Os=1/0,Pn=null,ju=!1,Nh=null,Sr=null,Il=!1,pr=null,Fu=0,Fo=0,Ah=null,Kl=-1,ql=0;function lt(){return Z&6?Ie():Kl!==-1?Kl:Kl=Ie()}function Cr(t){return t.mode&1?Z&2&&qe!==0?qe&-qe:Jx.transition!==null?(ql===0&&(ql=Hw()),ql):(t=re,t!==0||(t=window.event,t=t===void 0?16:Jw(t.type)),t):1}function rn(t,e,n,r){if(50<Fo)throw Fo=0,Ah=null,Error(P(185));$a(t,n,r),(!(Z&2)||t!==We)&&(t===We&&(!(Z&2)&&(Fc|=n),Ae===4&&ar(t,qe)),vt(t,r),n===1&&Z===0&&!(e.mode&1)&&(Os=Ie()+500,Dc&&Hr()))}function vt(t,e){var n=t.callbackNode;Jb(t,e);var r=Eu(t,t===We?qe:0);if(r===0)n!==null&&Ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ov(n),e===1)t.tag===0?Xx(Sy.bind(null,t)):vE(Sy.bind(null,t)),Kx(function(){!(Z&6)&&Hr()}),n=null;else{switch(Gw(r)){case 1:n=Jp;break;case 4:n=Bw;break;case 16:n=wu;break;case 536870912:n=Vw;break;default:n=wu}n=gS(n,uS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uS(t,e){if(Kl=-1,ql=0,Z&6)throw Error(P(327));var n=t.callbackNode;if(_s()&&t.callbackNode!==n)return null;var r=Eu(t,t===We?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=Z;Z|=2;var s=dS();(We!==t||qe!==e)&&(Pn=null,Os=Ie()+500,fi(t,e));do try{yk();break}catch(a){cS(t,a)}while(!0);dm(),Lu.current=s,Z=i,Pe!==null?e=0:(We=null,qe=0,e=Ae)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=fa,fi(t,0),ar(t,r),vt(t,Ie()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!gk(i)&&(e=$u(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=fa,fi(t,0),ar(t,r),vt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Zr(t,ft,Pn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=bm+500-Ie(),10<e)){if(Eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(Zr.bind(null,t,ft,Pn),e);break}Zr(t,ft,Pn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mk(r/1960))-r,10<r){t.timeoutHandle=ph(Zr.bind(null,t,ft,Pn),r);break}Zr(t,ft,Pn);break;case 5:Zr(t,ft,Pn);break;default:throw Error(P(329))}}}return vt(t,Ie()),t.callbackNode===n?uS.bind(null,t):null}function Dh(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(fi(t,e).flags|=256),t=$u(t,e),t!==2&&(e=ft,ft=n,e!==null&&Mh(e)),t}function Mh(t){ft===null?ft=t:ft.push.apply(ft,t)}function gk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Im,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Sy(t){if(Z&6)throw Error(P(327));_s();var e=Eu(t,0);if(!(e&1))return vt(t,Ie()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=fa,fi(t,0),ar(t,e),vt(t,Ie()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,ft,Pn),vt(t,Ie()),null}function xm(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Os=Ie()+500,Dc&&Hr())}}function Ti(t){pr!==null&&pr.tag===0&&!(Z&6)&&_s();var e=Z;Z|=1;var n=Bt.transition,r=re;try{if(Bt.transition=null,re=1,t)return t()}finally{re=r,Bt.transition=n,Z=e,!(Z&6)&&Hr()}}function km(){St=as.current,ge(as)}function fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gx(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bu();break;case 3:ks(),ge(mt),ge(rt),vm();break;case 5:gm(r);break;case 4:ks();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:fm(r.type._context);break;case 22:case 23:km()}n=n.return}if(We=t,Pe=t=Tr(t.current,null),qe=St=e,Ae=0,fa=null,Im=Fc=Ci=0,ft=jo=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function cS(t,e){do{var n=Pe;try{if(dm(),Vl.current=Mu,Du){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Du=!1}if(Si=0,Fe=Oe=Ee=null,Mo=!1,ua=0,Tm.current=null,n===null||n.return===null){Ae=1,fa=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=uy(o);if(p!==null){p.flags&=-257,cy(p,o,a,s,e),p.mode&1&&ly(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){ly(s,u,e),Pm();break e}l=Error(P(426))}}else if(ve&&a.mode&1){var w=uy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),cy(w,o,a,s,e),um(Ps(l,a));break e}}s=l=Ps(l,a),Ae!==4&&(Ae=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=KE(s,l,e);ty(s,h);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sr===null||!Sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=qE(s,a,e);ty(s,E);break e}}s=s.return}while(s!==null)}hS(n)}catch(I){e=I,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function dS(){var t=Lu.current;return Lu.current=Mu,t===null?Mu:t}function Pm(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),We===null||!(Ci&268435455)&&!(Fc&268435455)||ar(We,qe)}function $u(t,e){var n=Z;Z|=2;var r=dS();(We!==t||qe!==e)&&(Pn=null,fi(t,e));do try{vk();break}catch(i){cS(t,i)}while(!0);if(dm(),Z=n,Lu.current=r,Pe!==null)throw Error(P(261));return We=null,qe=0,Ae}function vk(){for(;Pe!==null;)fS(Pe)}function yk(){for(;Pe!==null&&!Bb();)fS(Pe)}function fS(t){var e=mS(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?hS(t):Pe=e,Tm.current=null}function hS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dk(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,Pe=null;return}}else if(n=ck(n,e,St),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Ae===0&&(Ae=5)}function Zr(t,e,n){var r=re,i=Bt.transition;try{Bt.transition=null,re=1,_k(t,e,n,r)}finally{Bt.transition=i,re=r}return null}function _k(t,e,n,r){do _s();while(pr!==null);if(Z&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zb(t,s),t===We&&(Pe=We=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,gS(wu,function(){return _s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=re;re=1;var a=Z;Z|=4,Tm.current=null,hk(t,n),aS(n,t),$x(fh),Su=!!dh,fh=dh=null,t.current=n,pk(n),Vb(),Z=a,re=o,Bt.transition=s}else t.current=n;if(Il&&(Il=!1,pr=t,Fu=i),s=t.pendingLanes,s===0&&(Sr=null),Kb(n.stateNode),vt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ju)throw ju=!1,t=Nh,Nh=null,t;return Fu&1&&t.tag!==0&&_s(),s=t.pendingLanes,s&1?t===Ah?Fo++:(Fo=0,Ah=t):Fo=0,Hr(),null}function _s(){if(pr!==null){var t=Gw(Fu),e=Bt.transition,n=re;try{if(Bt.transition=null,re=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Fu=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Lo(8,d,s)}var c=d.child;if(c!==null)c.return=d,D=c;else for(;D!==null;){d=D;var f=d.sibling,p=d.return;if(iS(d),d===u){D=null;break}if(f!==null){f.return=p,D=f;break}D=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,D=h;break e}D=s.return}}var m=t.current;for(D=m;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=m;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(I){Te(a,a.return,I)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(Z=i,Hr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{re=n,Bt.transition=e}}return!1}function Cy(t,e,n){e=Ps(n,e),e=KE(t,e,1),t=Er(t,e,1),e=lt(),t!==null&&($a(t,1,e),vt(t,e))}function Te(t,e,n){if(t.tag===3)Cy(t,t,n);else for(;e!==null;){if(e.tag===3){Cy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Ps(n,t),t=qE(e,t,1),e=Er(e,t,1),t=lt(),e!==null&&($a(e,1,t),vt(e,t));break}}e=e.return}}function wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(qe&n)===n&&(Ae===4||Ae===3&&(qe&130023424)===qe&&500>Ie()-bm?fi(t,0):Im|=n),vt(t,e)}function pS(t,e){e===0&&(t.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var n=lt();t=zn(t,e),t!==null&&($a(t,e,n),vt(t,n))}function Ek(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pS(t,n)}function Sk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),pS(t,n)}var mS;mS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,uk(t,e,n);ht=!!(t.flags&131072)}else ht=!1,ve&&e.flags&1048576&&yE(e,Pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gl(t,e),t=e.pendingProps;var i=Is(e,rt.current);ys(e,n),i=_m(null,e,r,t,i,n);var s=wm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pm(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=Th(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&am(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Tk(r),t=qt(r,t),i){case 0:e=Ch(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=dy(null,e,r,t,n);break e;case 14:e=fy(null,e,r,qt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ch(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),hy(t,e,r,i,n);case 3:e:{if(JE(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,SE(t,e),Nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(P(423)),e),e=py(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(P(424)),e),e=py(t,e,r,n,i);break e}else for(Ct=wr(e.stateNode.containerInfo.firstChild),kt=e,ve=!0,Xt=null,n=bE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=Wn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return xE(e),t===null&&yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:s!==null&&hh(r,s)&&(e.flags|=32),XE(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&yh(e),null;case 13:return ZE(t,e,n);case 4:return mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),dy(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Ou,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!mt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ys(e,n),i=Vt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),fy(t,e,r,i,n);case 15:return YE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Gl(t,e),e.tag=1,gt(r)?(t=!0,xu(e)):t=!1,ys(e,n),TE(e,r,i),Eh(e,r,i,n),Th(null,e,r,!0,t,n);case 19:return eS(t,e,n);case 22:return QE(t,e,n)}throw Error(P(156,e.tag))};function gS(t,e){return Ww(t,e)}function Ck(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new Ck(t,e,n,r)}function Om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tk(t){if(typeof t=="function")return Om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yp)return 11;if(t===Qp)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Om(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return hi(n.children,i,s,e);case qp:o=8,i|=8;break;case Hf:return t=Wt(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Gf:return t=Wt(13,n,e,i),t.elementType=Gf,t.lanes=s,t;case Kf:return t=Wt(19,n,e,i),t.elementType=Kf,t.lanes=s,t;case Iw:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cw:o=10;break e;case Tw:o=9;break e;case Yp:o=11;break e;case Qp:o=14;break e;case ir:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hi(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=Iw,t.lanes=n,t.stateNode={isHidden:!1},t}function cf(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function df(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vd(0),this.expirationTimes=Vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rm(t,e,n,r,i,s,o,a,l){return t=new Ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pm(s),t}function bk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vS(t){if(!t)return Mr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(gt(n))return gE(t,n,e)}return e}function yS(t,e,n,r,i,s,o,a,l){return t=Rm(n,r,!0,t,i,s,o,a,l),t.context=vS(null),n=t.current,r=lt(),i=Cr(n),s=jn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,$a(t,i,r),vt(t,r),t}function Uc(t,e,n,r){var i=e.current,s=lt(),o=Cr(i);return n=vS(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(rn(t,i,o,s),Bl(t,i,o)),o}function Uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nm(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function xk(){return null}var _S=typeof reportError=="function"?reportError:function(t){console.error(t)};function Am(t){this._internalRoot=t}zc.prototype.render=Am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Uc(t,e,null,null)};zc.prototype.unmount=Am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ti(function(){Uc(null,t,null,null)}),e[Un]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Xw(t)}};function Dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function kk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Uu(o);s.call(u)}}var o=yS(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[Un]=o.current,ia(t.nodeType===8?t.parentNode:t),Ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Uu(l);a.call(u)}}var l=Rm(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=l,t[Un]=l.current,ia(t.nodeType===8?t.parentNode:t),Ti(function(){Uc(e,l,n,r)}),l}function Bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Uu(o);a.call(l)}}Uc(e,o,t,i)}else o=kk(n,e,t,i,r);return Uu(o)}Kw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Zp(e,n|1),vt(e,Ie()),!(Z&6)&&(Os=Ie()+500,Hr()))}break;case 13:Ti(function(){var r=zn(t,1);if(r!==null){var i=lt();rn(r,t,1,i)}}),Nm(t,1)}};em=function(t){if(t.tag===13){var e=zn(t,134217728);if(e!==null){var n=lt();rn(e,t,134217728,n)}Nm(t,134217728)}};qw=function(t){if(t.tag===13){var e=Cr(t),n=zn(t,e);if(n!==null){var r=lt();rn(n,t,e,r)}Nm(t,e)}};Yw=function(){return re};Qw=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};rh=function(t,e,n){switch(e){case"input":if(Qf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ac(r);if(!i)throw Error(P(90));xw(r),Qf(r,i)}}}break;case"textarea":Pw(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Lw=xm;jw=Ti;var Pk={usingClientEntryPoint:!1,Events:[za,ts,Ac,Dw,Mw,xm]},go={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ok={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uw(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Pc=bl.inject(Ok),_n=bl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pk;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dm(e))throw Error(P(200));return bk(t,e,null,n)};Dt.createRoot=function(t,e){if(!Dm(t))throw Error(P(299));var n=!1,r="",i=_S;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rm(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,ia(t.nodeType===8?t.parentNode:t),new Am(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=Uw(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Ti(t)};Dt.hydrate=function(t,e,n){if(!Wc(e))throw Error(P(200));return Bc(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Dm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_S;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yS(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};Dt.render=function(t,e,n){if(!Wc(e))throw Error(P(200));return Bc(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Wc(t))throw Error(P(40));return t._reactRootContainer?(Ti(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Dt.unstable_batchedUpdates=xm;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Bc(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function wS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wS)}catch(t){console.error(t)}}wS(),yw.exports=Dt;var ES=yw.exports,by=ES;Bf.createRoot=by.createRoot,Bf.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const xy="popstate";function Rk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Lh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zu(i)}return Ak(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Nk(){return Math.random().toString(36).substr(2,8)}function ky(t,e){return{usr:t.state,key:t.key,idx:e}}function Lh(t,e,n,r){return n===void 0&&(n=null),ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qs(e):e,{state:n,key:e&&e.key||r||Nk()})}function zu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ak(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ha({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=mr.Pop;let w=d(),h=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:h})}function f(w,h){a=mr.Push;let m=Lh(_.location,w,h);n&&n(m,w),u=d()+1;let v=ky(m,u),E=_.createHref(m);try{o.pushState(v,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,h){a=mr.Replace;let m=Lh(_.location,w,h);n&&n(m,w),u=d();let v=ky(m,u),E=_.createHref(m);o.replaceState(v,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function g(w){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:zu(w);return Se(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xy,c),l=w,()=>{i.removeEventListener(xy,c),l=null}},createHref(w){return e(i,w)},createURL:g,encodeLocation(w){let h=g(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(w){return o.go(w)}};return _}var Py;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Py||(Py={}));function Dk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qs(e):e,i=pa(r.pathname||"/",n);if(i==null)return null;let s=SS(t);Mk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Vk(s[a],Gk(i));return o}function SS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ir([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),SS(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Wk(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of CS(s.path))i(s,o,l)}),e}function CS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Mk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Bk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lk=/^:\w+$/,jk=3,Fk=2,$k=1,Uk=10,zk=-2,Oy=t=>t==="*";function Wk(t,e){let n=t.split("/"),r=n.length;return n.some(Oy)&&(r+=zk),e&&(r+=Fk),n.filter(i=>!Oy(i)).reduce((i,s)=>i+(Lk.test(s)?jk:s===""?$k:Uk),r)}function Bk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Vk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=jh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Ir([i,d.pathname]),pathnameBase:Xk(Ir([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Ir([i,d.pathnameBase]))}return s}function jh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Hk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[c];return p&&!g?u[f]=void 0:u[f]=Kk(g||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Hk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Gk(t){try{return decodeURI(t)}catch(e){return Mm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kk(t,e){try{return decodeURIComponent(t)}catch(n){return Mm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function pa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qs(t):t;return{pathname:n?n.startsWith("/")?n:Yk(n,e):e,search:Jk(r),hash:Zk(i)}}function Yk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ff(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lm(t,e){let n=Qk(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qs(t):(i=ha({},t),Se(!i.pathname||!i.pathname.includes("?"),ff("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),ff("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),ff("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=qk(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),Xk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Jk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Zk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const TS=["post","put","patch","delete"];new Set(TS);const tP=["get",...TS];new Set(tP);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ma.apply(this,arguments)}const Vc=S.createContext(null),IS=S.createContext(null),qn=S.createContext(null),Hc=S.createContext(null),Yn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),bS=S.createContext(null);function nP(t,e){let{relative:n}=e===void 0?{}:e;Ys()||Se(!1);let{basename:r,navigator:i}=S.useContext(qn),{hash:s,pathname:o,search:a}=Gc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ys(){return S.useContext(Hc)!=null}function Qs(){return Ys()||Se(!1),S.useContext(Hc).location}function xS(t){S.useContext(qn).static||S.useLayoutEffect(t)}function kS(){let{isDataRoute:t}=S.useContext(Yn);return t?vP():rP()}function rP(){Ys()||Se(!1);let t=S.useContext(Vc),{basename:e,future:n,navigator:r}=S.useContext(qn),{matches:i}=S.useContext(Yn),{pathname:s}=Qs(),o=JSON.stringify(Lm(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return xS(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=jm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ir([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const iP=S.createContext(null);function sP(t){let e=S.useContext(Yn).outlet;return e&&S.createElement(iP.Provider,{value:t},e)}function Gc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(qn),{matches:i}=S.useContext(Yn),{pathname:s}=Qs(),o=JSON.stringify(Lm(i,r.v7_relativeSplatPath));return S.useMemo(()=>jm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function oP(t,e){return aP(t,e)}function aP(t,e,n,r){Ys()||Se(!1);let{navigator:i}=S.useContext(qn),{matches:s}=S.useContext(Yn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Qs(),d;if(e){var c;let w=typeof e=="string"?qs(e):e;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||Se(!1),d=w}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",g=Dk(t,{pathname:p}),_=fP(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?S.createElement(Hc.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mr.Pop}},_):_}function lP(){let t=gP(),e=eP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const uP=S.createElement(lP,null);class cP extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Yn.Provider,{value:this.props.routeContext},S.createElement(bS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dP(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Yn.Provider,{value:e},r)}function fP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,g=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,g=!1,_=null,w=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||uP,l&&(u<0&&f===0?(yP("route-fallback",!1),g=!0,w=null):u===f&&(g=!0,w=c.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,f+1)),m=()=>{let v;return p?v=_:g?v=w:c.route.Component?v=S.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,S.createElement(dP,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?S.createElement(cP,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var PS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(PS||{}),Wu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Wu||{});function hP(t){let e=S.useContext(Vc);return e||Se(!1),e}function pP(t){let e=S.useContext(IS);return e||Se(!1),e}function mP(t){let e=S.useContext(Yn);return e||Se(!1),e}function OS(t){let e=mP(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function gP(){var t;let e=S.useContext(bS),n=pP(Wu.UseRouteError),r=OS(Wu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function vP(){let{router:t}=hP(PS.UseNavigateStable),e=OS(Wu.UseNavigateStable),n=S.useRef(!1);return xS(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ma({fromRouteId:e},s)))},[t,e])}const Ry={};function yP(t,e,n){!e&&!Ry[t]&&(Ry[t]=!0)}function _P(t){let{to:e,replace:n,state:r,relative:i}=t;Ys()||Se(!1);let{future:s,static:o}=S.useContext(qn),{matches:a}=S.useContext(Yn),{pathname:l}=Qs(),u=kS(),d=jm(e,Lm(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function wP(t){return sP(t.context)}function Yi(t){Se(!1)}function EP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:a}=t;Ys()&&Se(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ma({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=qs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:g="default"}=r,_=S.useMemo(()=>{let w=pa(d,l);return w==null?null:{location:{pathname:w,search:c,hash:f,state:p,key:g},navigationType:i}},[l,d,c,f,p,g,i]);return _==null?null:S.createElement(qn.Provider,{value:u},S.createElement(Hc.Provider,{children:n,value:_}))}function SP(t){let{children:e,location:n}=t;return oP(Fh(e),n)}new Promise(()=>{});function Fh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Fh(r.props.children,s));return}r.type!==Yi&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bu.apply(this,arguments)}function RS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TP(t,e){return t.button===0&&(!e||e==="_self")&&!CP(t)}const IP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xP=S.createContext({isTransitioning:!1}),kP="startTransition",Ny=Wf[kP];function PP(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=Rk({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Ny?Ny(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(EP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const OP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NS=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=RS(e,IP),{basename:p}=S.useContext(qn),g,_=!1;if(typeof u=="string"&&RP.test(u)&&(g=u,OP))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),I=pa(E.pathname,p);E.origin===v.origin&&I!=null?u=I+E.search+E.hash:_=!0}catch{}let w=nP(u,{relative:i}),h=DP(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function m(v){r&&r(v),v.defaultPrevented||h(v)}return S.createElement("a",Bu({},f,{href:g||w,onClick:_||s?r:m,ref:n,target:l}))}),NP=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=RS(e,bP),f=Gc(l,{relative:c.relative}),p=Qs(),g=S.useContext(IS),{navigator:_}=S.useContext(qn),w=g!=null&&MP(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,m=p.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(m=m.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase());const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let I=m===h||!o&&m.startsWith(h)&&m.charAt(E)==="/",T=v!=null&&(v===h||!o&&v.startsWith(h)&&v.charAt(h.length)==="/"),C={isActive:I,isPending:T,isTransitioning:w},R=I?r:void 0,F;typeof s=="function"?F=s(C):F=[s,I?"active":null,T?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(C):a;return S.createElement(NS,Bu({},c,{"aria-current":R,className:F,ref:n,style:L,to:l,unstable_viewTransition:u}),typeof d=="function"?d(C):d)});var $h;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($h||($h={}));var Ay;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ay||(Ay={}));function AP(t){let e=S.useContext(Vc);return e||Se(!1),e}function DP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=kS(),u=Qs(),d=Gc(t,{relative:o});return S.useCallback(c=>{if(TP(c,n)){c.preventDefault();let f=r!==void 0?r:zu(u)===zu(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function MP(t,e){e===void 0&&(e={});let n=S.useContext(xP);n==null&&Se(!1);let{basename:r}=AP($h.useViewTransitionState),i=Gc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=pa(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=pa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jh(i.pathname,o)!=null||jh(i.pathname,s)!=null}var nt=function(){return nt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},nt.apply(this,arguments)};function ga(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var fe="-ms-",$o="-moz-",te="-webkit-",AS="comm",Kc="rule",Fm="decl",LP="@import",DS="@keyframes",jP="@layer",MS=Math.abs,$m=String.fromCharCode,Uh=Object.assign;function FP(t,e){return $e(t,0)^45?(((e<<2^$e(t,0))<<2^$e(t,1))<<2^$e(t,2))<<2^$e(t,3):0}function LS(t){return t.trim()}function On(t,e){return(t=e.exec(t))?t[0]:t}function K(t,e,n){return t.replace(e,n)}function Ql(t,e,n){return t.indexOf(e,n)}function $e(t,e){return t.charCodeAt(e)|0}function Rs(t,e,n){return t.slice(e,n)}function vn(t){return t.length}function jS(t){return t.length}function bo(t,e){return e.push(t),t}function $P(t,e){return t.map(e).join("")}function Dy(t,e){return t.filter(function(n){return!On(n,e)})}var qc=1,Ns=1,FS=0,Gt=0,ke=0,Xs="";function Yc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:qc,column:Ns,length:o,return:"",siblings:a}}function rr(t,e){return Uh(Yc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Gi(t){for(;t.root;)t=rr(t.root,{children:[t]});bo(t,t.siblings)}function UP(){return ke}function zP(){return ke=Gt>0?$e(Xs,--Gt):0,Ns--,ke===10&&(Ns=1,qc--),ke}function sn(){return ke=Gt<FS?$e(Xs,Gt++):0,Ns++,ke===10&&(Ns=1,qc++),ke}function pi(){return $e(Xs,Gt)}function Xl(){return Gt}function Qc(t,e){return Rs(Xs,t,e)}function zh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function WP(t){return qc=Ns=1,FS=vn(Xs=t),Gt=0,[]}function BP(t){return Xs="",t}function hf(t){return LS(Qc(Gt-1,Wh(t===91?t+2:t===40?t+1:t)))}function VP(t){for(;(ke=pi())&&ke<33;)sn();return zh(t)>2||zh(ke)>3?"":" "}function HP(t,e){for(;--e&&sn()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return Qc(t,Xl()+(e<6&&pi()==32&&sn()==32))}function Wh(t){for(;sn();)switch(ke){case t:return Gt;case 34:case 39:t!==34&&t!==39&&Wh(ke);break;case 40:t===41&&Wh(t);break;case 92:sn();break}return Gt}function GP(t,e){for(;sn()&&t+ke!==57;)if(t+ke===84&&pi()===47)break;return"/*"+Qc(e,Gt-1)+"*"+$m(t===47?t:sn())}function KP(t){for(;!zh(pi());)sn();return Qc(t,Gt)}function qP(t){return BP(Jl("",null,null,null,[""],t=WP(t),0,[0],t))}function Jl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,g=0,_=1,w=1,h=1,m=0,v="",E=i,I=s,T=r,C=v;w;)switch(g=m,m=sn()){case 40:if(g!=108&&$e(C,c-1)==58){Ql(C+=K(hf(m),"&","&\f"),"&\f",MS(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:C+=hf(m);break;case 9:case 10:case 13:case 32:C+=VP(g);break;case 92:C+=HP(Xl()-1,7);continue;case 47:switch(pi()){case 42:case 47:bo(YP(GP(sn(),Xl()),e,n,l),l);break;default:C+="/"}break;case 123*_:a[u++]=vn(C)*h;case 125*_:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+d:h==-1&&(C=K(C,/\f/g,"")),p>0&&vn(C)-c&&bo(p>32?Ly(C+";",r,n,c-1,l):Ly(K(C," ","")+";",r,n,c-2,l),l);break;case 59:C+=";";default:if(bo(T=My(C,e,n,u,d,i,a,v,E=[],I=[],c,s),s),m===123)if(d===0)Jl(C,e,T,T,E,s,c,a,I);else switch(f===99&&$e(C,3)===110?100:f){case 100:case 108:case 109:case 115:Jl(t,T,T,r&&bo(My(t,T,T,0,0,i,a,v,i,E=[],c,I),I),i,I,c,a,r?E:I);break;default:Jl(C,T,T,T,[""],I,0,a,I)}}u=d=p=0,_=h=1,v=C="",c=o;break;case 58:c=1+vn(C),p=g;default:if(_<1){if(m==123)--_;else if(m==125&&_++==0&&zP()==125)continue}switch(C+=$m(m),m*_){case 38:h=d>0?1:(C+="\f",-1);break;case 44:a[u++]=(vn(C)-1)*h,h=1;break;case 64:pi()===45&&(C+=hf(sn())),f=pi(),d=c=vn(v=C+=KP(Xl())),m++;break;case 45:g===45&&vn(C)==2&&(_=0)}}return s}function My(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],g=jS(p),_=0,w=0,h=0;_<r;++_)for(var m=0,v=Rs(t,f+1,f=MS(w=o[_])),E=t;m<g;++m)(E=LS(w>0?p[m]+" "+v:K(v,/&\f/g,p[m])))&&(l[h++]=E);return Yc(t,e,n,i===0?Kc:a,l,u,d,c)}function YP(t,e,n,r){return Yc(t,e,n,AS,$m(UP()),Rs(t,2,-2),0,r)}function Ly(t,e,n,r,i){return Yc(t,e,n,Fm,Rs(t,0,r),Rs(t,r+1,-1),r,i)}function $S(t,e,n){switch(FP(t,e)){case 5103:return te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+t+t;case 4789:return $o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return te+t+$o+t+fe+t+t;case 5936:switch($e(t,e+11)){case 114:return te+t+fe+K(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return te+t+fe+K(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return te+t+fe+K(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return te+t+fe+t+t;case 6165:return te+t+fe+"flex-"+t+t;case 5187:return te+t+K(t,/(\w+).+(:[^]+)/,te+"box-$1$2"+fe+"flex-$1$2")+t;case 5443:return te+t+fe+"flex-item-"+K(t,/flex-|-self/g,"")+(On(t,/flex-|baseline/)?"":fe+"grid-row-"+K(t,/flex-|-self/g,""))+t;case 4675:return te+t+fe+"flex-line-pack"+K(t,/align-content|flex-|-self/g,"")+t;case 5548:return te+t+fe+K(t,"shrink","negative")+t;case 5292:return te+t+fe+K(t,"basis","preferred-size")+t;case 6060:return te+"box-"+K(t,"-grow","")+te+t+fe+K(t,"grow","positive")+t;case 4554:return te+K(t,/([^-])(transform)/g,"$1"+te+"$2")+t;case 6187:return K(K(K(t,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),t,"")+t;case 5495:case 3959:return K(t,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return K(K(t,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+t+t;case 4200:if(!On(t,/flex-|baseline/))return fe+"grid-column-align"+Rs(t,e)+t;break;case 2592:case 3360:return fe+K(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,On(r.props,/grid-\w+-end/)})?~Ql(t+(n=n[e].value),"span",0)?t:fe+K(t,"-start","")+t+fe+"grid-row-span:"+(~Ql(n,"span",0)?On(n,/\d+/):+On(n,/\d+/)-+On(t,/\d+/))+";":fe+K(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return On(r.props,/grid-\w+-start/)})?t:fe+K(K(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return K(t,/(.+)-inline(.+)/,te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(vn(t)-1-e>6)switch($e(t,e+1)){case 109:if($e(t,e+4)!==45)break;case 102:return K(t,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+$o+($e(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ql(t,"stretch",0)?$S(K(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return K(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return fe+i+":"+s+u+(o?fe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if($e(t,e+6)===121)return K(t,":",":"+te)+t;break;case 6444:switch($e(t,$e(t,14)===45?18:11)){case 120:return K(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+($e(t,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+fe+"$2box$3")+t;case 100:return K(t,":",":"+fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(t,"scroll-","scroll-snap-")+t}return t}function Vu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function QP(t,e,n,r){switch(t.type){case jP:if(t.children.length)break;case LP:case Fm:return t.return=t.return||t.value;case AS:return"";case DS:return t.return=t.value+"{"+Vu(t.children,r)+"}";case Kc:if(!vn(t.value=t.props.join(",")))return""}return vn(n=Vu(t.children,r))?t.return=t.value+"{"+n+"}":""}function XP(t){var e=jS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function JP(t){return function(e){e.root||(e=e.return)&&t(e)}}function ZP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Fm:t.return=$S(t.value,t.length,n);return;case DS:return Vu([rr(t,{value:K(t.value,"@","@"+te)})],r);case Kc:if(t.length)return $P(n=t.props,function(i){switch(On(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(rr(t,{props:[K(i,/:(read-\w+)/,":"+$o+"$1")]})),Gi(rr(t,{props:[i]})),Uh(t,{props:Dy(n,r)});break;case"::placeholder":Gi(rr(t,{props:[K(i,/:(plac\w+)/,":"+te+"input-$1")]})),Gi(rr(t,{props:[K(i,/:(plac\w+)/,":"+$o+"$1")]})),Gi(rr(t,{props:[K(i,/:(plac\w+)/,fe+"input-$1")]})),Gi(rr(t,{props:[i]})),Uh(t,{props:Dy(n,r)});break}return""})}}var eO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},As=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",US="active",zS="data-styled-version",Xc="6.1.6",Um=`/*!sc*/
`,zm=typeof window<"u"&&"HTMLElement"in window,tO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),nO={},Jc=Object.freeze([]),Ds=Object.freeze({});function WS(t,e,n){return n===void 0&&(n=Ds),t.theme!==n.theme&&t.theme||e||n.theme}var BS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iO=/(^-|-$)/g;function jy(t){return t.replace(rO,"-").replace(iO,"")}var sO=/(a)(d)/gi,xl=52,Fy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Bh(t){var e,n="";for(e=Math.abs(t);e>xl;e=e/xl|0)n=Fy(e%xl)+n;return(Fy(e%xl)+n).replace(sO,"$1-$2")}var pf,VS=5381,ls=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},HS=function(t){return ls(VS,t)};function GS(t){return Bh(HS(t)>>>0)}function oO(t){return t.displayName||t.name||"Component"}function mf(t){return typeof t=="string"&&!0}var KS=typeof Symbol=="function"&&Symbol.for,qS=KS?Symbol.for("react.memo"):60115,aO=KS?Symbol.for("react.forward_ref"):60112,lO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cO=((pf={})[aO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pf[qS]=YS,pf);function $y(t){return("type"in(e=t)&&e.type.$$typeof)===qS?YS:"$$typeof"in t?cO[t.$$typeof]:lO;var e}var dO=Object.defineProperty,fO=Object.getOwnPropertyNames,Uy=Object.getOwnPropertySymbols,hO=Object.getOwnPropertyDescriptor,pO=Object.getPrototypeOf,zy=Object.prototype;function QS(t,e,n){if(typeof e!="string"){if(zy){var r=pO(e);r&&r!==zy&&QS(t,r,n)}var i=fO(e);Uy&&(i=i.concat(Uy(e)));for(var s=$y(t),o=$y(e),a=0;a<i.length;++a){var l=i[a];if(!(l in uO||n&&n[l]||o&&l in o||s&&l in s)){var u=hO(e,l);try{dO(t,l,u)}catch{}}}}return t}function Ms(t){return typeof t=="function"}function Wm(t){return typeof t=="object"&&"styledComponentId"in t}function ui(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Vh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function va(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Hh(t,e,n){if(n===void 0&&(n=!1),!n&&!va(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Hh(t[r],e[r]);else if(va(e))for(var r in e)t[r]=Hh(t[r],e[r]);return t}function Bm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ba(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var mO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ba(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Um);return n},t}(),Zl=new Map,Hu=new Map,eu=1,kl=function(t){if(Zl.has(t))return Zl.get(t);for(;Hu.has(eu);)eu++;var e=eu++;return Zl.set(t,e),Hu.set(e,t),e},gO=function(t,e){eu=e+1,Zl.set(t,e),Hu.set(e,t)},vO="style[".concat(As,"][").concat(zS,'="').concat(Xc,'"]'),yO=new RegExp("^".concat(As,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_O=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},wO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Um),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(yO);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(gO(d,u),_O(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function EO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var XS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(As,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(As,US),r.setAttribute(zS,Xc);var o=EO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},SO=function(){function t(e){this.element=XS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ba(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),CO=function(){function t(e){this.element=XS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),TO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Wy=zm,IO={isServer:!zm,useCSSOMInjection:!tO},Gu=function(){function t(e,n,r){e===void 0&&(e=Ds),n===void 0&&(n={});var i=this;this.options=nt(nt({},IO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&zm&&Wy&&(Wy=!1,function(s){for(var o=document.querySelectorAll(vO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(As)!==US&&(wO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Bm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(h){return Hu.get(h)}(c);if(f===void 0)return"continue";var p=s.names.get(f),g=o.getGroup(c);if(p===void 0||g.length===0)return"continue";var _="".concat(As,".g").concat(c,'[id="').concat(f,'"]'),w="";p!==void 0&&p.forEach(function(h){h.length>0&&(w+="".concat(h,","))}),l+="".concat(g).concat(_,'{content:"').concat(w,'"}').concat(Um)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return kl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(nt(nt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TO(i):r?new SO(i):new CO(i)}(this.options),new mO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(kl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(kl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(kl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),bO=/&/g,xO=/^\s*\/\/.*$/gm;function JS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=JS(n.children,e)),n})}function kO(t){var e,n,r,i=t===void 0?Ds:t,s=i.options,o=s===void 0?Ds:s,a=i.plugins,l=a===void 0?Jc:a,u=function(f,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Kc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(bO,n).replace(r,u))}),o.prefix&&d.push(ZP),d.push(QP);var c=function(f,p,g,_){p===void 0&&(p=""),g===void 0&&(g=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(xO,""),h=qP(g||p?"".concat(g," ").concat(p," { ").concat(w," }"):w);o.namespace&&(h=JS(h,o.namespace));var m=[];return Vu(h,XP(d.concat(JP(function(v){return m.push(v)})))),m};return c.hash=l.length?l.reduce(function(f,p){return p.name||Ba(15),ls(f,p.name)},VS).toString():"",c}var PO=new Gu,Gh=kO(),ZS=ze.createContext({shouldForwardProp:void 0,styleSheet:PO,stylis:Gh});ZS.Consumer;ze.createContext(void 0);function Kh(){return S.useContext(ZS)}var OO=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Gh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Bm(this,function(){throw Ba(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gh),this.name+e.hash},t}(),RO=function(t){return t>="A"&&t<="Z"};function By(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;RO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var e1=function(t){return t==null||t===!1||t===""},t1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!e1(s)&&(Array.isArray(s)&&s.isCss||Ms(s)?r.push("".concat(By(i),":"),s,";"):va(s)?r.push.apply(r,ga(ga(["".concat(i," {")],t1(s),!1),["}"],!1)):r.push("".concat(By(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in eO||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function br(t,e,n,r){if(e1(t))return[];if(Wm(t))return[".".concat(t.styledComponentId)];if(Ms(t)){if(!Ms(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return br(i,e,n,r)}var s;return t instanceof OO?n?(t.inject(n,r),[t.getName(r)]):[t]:va(t)?t1(t):Array.isArray(t)?Array.prototype.concat.apply(Jc,t.map(function(o){return br(o,e,n,r)})):[t.toString()]}function n1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ms(n)&&!Wm(n))return!1}return!0}var NO=HS(Xc),AO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&n1(e),this.componentId=n,this.baseHash=ls(NO,n),this.baseStyle=r,Gu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ui(i,this.staticRulesId);else{var s=Vh(br(this.rules,e,n,r)),o=Bh(ls(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ui(i,o),this.staticRulesId=o}else{for(var l=ls(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Vh(br(c,e,n,r));l=ls(l,f+d),u+=f}}if(u){var p=Bh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ui(i,p)}}return i},t}(),Vm=ze.createContext(void 0);Vm.Consumer;var gf={};function DO(t,e,n){var r=Wm(t),i=t,s=!mf(t),o=e.attrs,a=o===void 0?Jc:o,l=e.componentId,u=l===void 0?function(E,I){var T=typeof E!="string"?"sc":jy(E);gf[T]=(gf[T]||0)+1;var C="".concat(T,"-").concat(GS(Xc+T+gf[T]));return I?"".concat(I,"-").concat(C):C}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(E){return mf(E)?"styled.".concat(E):"Styled(".concat(oO(E),")")}(t):d,f=e.displayName&&e.componentId?"".concat(jy(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;g=function(E,I){return _(E,I)&&w(E,I)}}else g=_}var h=new AO(n,f,r?i.componentStyle:void 0);function m(E,I){return function(T,C,R){var F=T.attrs,L=T.componentStyle,be=T.defaultProps,Qe=T.foldedComponentIds,ye=T.styledComponentId,$=T.target,W=ze.useContext(Vm),se=Kh(),x=T.shouldForwardProp||se.shouldForwardProp,k=WS(C,W,be)||Ds,N=function(Ve,Me,st){for(var Zn,hn=nt(nt({},Me),{className:void 0,theme:st}),Vi=0;Vi<Ve.length;Vi+=1){var er=Ms(Zn=Ve[Vi])?Zn(hn):Zn;for(var pn in er)hn[pn]=pn==="className"?ui(hn[pn],er[pn]):pn==="style"?nt(nt({},hn[pn]),er[pn]):er[pn]}return Me.className&&(hn.className=ui(hn.className,Me.className)),hn}(F,C,k),M=N.as||$,U={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===k||(G==="forwardedAs"?U.as=N.forwardedAs:x&&!x(G,M)||(U[G]=N[G]));var De=function(Ve,Me){var st=Kh(),Zn=Ve.generateAndInjectStyles(Me,st.styleSheet,st.stylis);return Zn}(L,N),xe=ui(Qe,ye);return De&&(xe+=" "+De),N.className&&(xe+=" "+N.className),U[mf(M)&&!BS.has(M)?"class":"className"]=xe,U.ref=R,S.createElement(M,U)}(v,E,I)}m.displayName=c;var v=ze.forwardRef(m);return v.attrs=p,v.componentStyle=h,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?ui(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(I){for(var T=[],C=1;C<arguments.length;C++)T[C-1]=arguments[C];for(var R=0,F=T;R<F.length;R++)Hh(I,F[R],!0);return I}({},i.defaultProps,E):E}}),Bm(v,function(){return".".concat(v.styledComponentId)}),s&&QS(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Vy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Hy=function(t){return Object.assign(t,{isCss:!0})};function r1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ms(t)||va(t))return Hy(br(Vy(Jc,ga([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?br(r):Hy(br(Vy(r,e)))}function qh(t,e,n){if(n===void 0&&(n=Ds),!e)throw Ba(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,r1.apply(void 0,ga([i],s,!1)))};return r.attrs=function(i){return qh(t,e,nt(nt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qh(t,e,nt(nt({},n),i))},r}var i1=function(t){return qh(DO,t)},Lt=i1;BS.forEach(function(t){Lt[t]=i1(t)});var MO=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=n1(e),Gu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Vh(br(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Gu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function LO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=r1.apply(void 0,ga([t],e,!1)),i="sc-global-".concat(GS(JSON.stringify(r))),s=new MO(r,i),o=function(l){var u=Kh(),d=ze.useContext(Vm),c=ze.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),ze.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,f){if(s.isStatic)s.renderStyles(l,nO,d,f);else{var p=nt(nt({},u),{theme:WS(u,c,o.defaultProps)});s.renderStyles(l,p,d,f)}}return ze.memo(o)}const jO=Lt.nav`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 16px;
  font-weight: 400;
  a {
    color: inherit;
  }
`,FO=({children:t})=>y.jsx(jO,{children:t}),$O=Lt(NS)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: inherit;
  gap: 8px;
  p {
    font-size: 20px;
  }
`,UO="/learnlingo/images/logo.svg",zO=()=>y.jsxs($O,{to:"/",children:[y.jsx("img",{src:UO,alt:"Your SVG"}),y.jsx("p",{children:"LearnLingo"})]}),WO=Lt.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 0;
  }
`,BO="/learnlingo/images/login-icon.svg",VO=Lt.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 10px;
  .login-button,
  .register-button {
    width: 150px;
    height: 48px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 16px;
    font-weight: 700;
  }

  .login-button {
    display: inherit;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    background-color: rgba(28, 28, 28, 0);
    border: none;
  }
  .register-button {
    background-color: var(--primary-text-color);
    color: #fff;
    border-radius: 12px;
    border: none;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    margin-top: 0;
  }
`;var Yh={exports:{}},Ii={},s1={exports:{}},HO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GO=HO,KO=GO;function o1(){}function a1(){}a1.resetWarningCache=o1;var qO=function(){function t(r,i,s,o,a,l){if(l!==KO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a1,resetWarningCache:o1};return n.PropTypes=n,n};s1.exports=qO();var l1=s1.exports,Qh={exports:{}},dn={},Xh={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function s(c,f){return f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function o(c){var f=c.offsetWidth<=0&&c.offsetHeight<=0;if(f&&!c.innerHTML)return!0;try{var p=window.getComputedStyle(c),g=p.getPropertyValue("display");return f?g!==r&&s(c,p):g===n}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var f=c,p=c.getRootNode&&c.getRootNode();f&&f!==document.body;){if(p&&f===p&&(f=p.host.parentNode),o(f))return!1;f=f.parentNode}return!0}function l(c,f){var p=c.nodeName.toLowerCase(),g=i.test(p)&&!c.disabled||p==="a"&&c.href||f;return g&&a(c)}function u(c){var f=c.getAttribute("tabindex");f===null&&(f=void 0);var p=isNaN(f);return(p||f>=0)&&l(c,!p)}function d(c){var f=[].slice.call(c.querySelectorAll("*"),0).reduce(function(p,g){return p.concat(g.shadowRoot?d(g.shadowRoot):[g])},[]);return f.filter(u)}t.exports=e.default})(Xh,Xh.exports);var u1=Xh.exports;Object.defineProperty(dn,"__esModule",{value:!0});dn.resetState=JO;dn.log=ZO;dn.handleBlur=ya;dn.handleFocus=_a;dn.markForFocusLater=eR;dn.returnFocus=tR;dn.popWithoutFocus=nR;dn.setupScopedFocus=rR;dn.teardownScopedFocus=iR;var YO=u1,QO=XO(YO);function XO(t){return t&&t.__esModule?t:{default:t}}var Ls=[],us=null,Jh=!1;function JO(){Ls=[]}function ZO(){}function ya(){Jh=!0}function _a(){if(Jh){if(Jh=!1,!us)return;setTimeout(function(){if(!us.contains(document.activeElement)){var t=(0,QO.default)(us)[0]||us;t.focus()}},0)}}function eR(){Ls.push(document.activeElement)}function tR(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{Ls.length!==0&&(e=Ls.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function nR(){Ls.length>0&&Ls.pop()}function rR(t){us=t,window.addEventListener?(window.addEventListener("blur",ya,!1),document.addEventListener("focus",_a,!0)):(window.attachEvent("onBlur",ya),document.attachEvent("onFocus",_a))}function iR(){us=null,window.addEventListener?(window.removeEventListener("blur",ya),document.removeEventListener("focus",_a)):(window.detachEvent("onBlur",ya),document.detachEvent("onFocus",_a))}var Zh={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=u1,r=i(n);function i(a){return a&&a.__esModule?a:{default:a}}function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?s(a.activeElement.shadowRoot):a.activeElement}function o(a,l){var u=(0,r.default)(a);if(!u.length){l.preventDefault();return}var d=void 0,c=l.shiftKey,f=u[0],p=u[u.length-1],g=s();if(a===g){if(!c)return;d=p}if(p===g&&!c&&(d=f),f===g&&c&&(d=p),d){l.preventDefault(),d.focus();return}var _=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),w=_!=null&&_[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(w){var h=u.indexOf(g);if(h>-1&&(h+=c?-1:1),d=u[h],typeof d>"u"){l.preventDefault(),d=c?p:f,d.focus();return}l.preventDefault(),d.focus()}}t.exports=e.default})(Zh,Zh.exports);var sR=Zh.exports,fn={},oR=function(){},aR=oR,on={},c1={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(c1);var lR=c1.exports;Object.defineProperty(on,"__esModule",{value:!0});on.canUseDOM=on.SafeNodeList=on.SafeHTMLCollection=void 0;var uR=lR,cR=dR(uR);function dR(t){return t&&t.__esModule?t:{default:t}}var Zc=cR.default,fR=Zc.canUseDOM?window.HTMLElement:{};on.SafeHTMLCollection=Zc.canUseDOM?window.HTMLCollection:{};on.SafeNodeList=Zc.canUseDOM?window.NodeList:{};on.canUseDOM=Zc.canUseDOM;on.default=fR;Object.defineProperty(fn,"__esModule",{value:!0});fn.resetState=vR;fn.log=yR;fn.assertNodeList=d1;fn.setElement=_R;fn.validateElement=Hm;fn.hide=wR;fn.show=ER;fn.documentNotReadyOrSSRTesting=SR;var hR=aR,pR=gR(hR),mR=on;function gR(t){return t&&t.__esModule?t:{default:t}}var $t=null;function vR(){$t&&($t.removeAttribute?$t.removeAttribute("aria-hidden"):$t.length!=null?$t.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll($t).forEach(function(t){return t.removeAttribute("aria-hidden")})),$t=null}function yR(){}function d1(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function _R(t){var e=t;if(typeof e=="string"&&mR.canUseDOM){var n=document.querySelectorAll(e);d1(n,e),e=n}return $t=e||$t,$t}function Hm(t){var e=t||$t;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,pR.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function wR(t){var e=!0,n=!1,r=void 0;try{for(var i=Hm(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function ER(t){var e=!0,n=!1,r=void 0;try{for(var i=Hm(t)[Symbol.iterator](),s;!(e=(s=i.next()).done);e=!0){var o=s.value;o.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!e&&i.return&&i.return()}finally{if(n)throw r}}}function SR(){$t=null}var Js={};Object.defineProperty(Js,"__esModule",{value:!0});Js.resetState=CR;Js.log=TR;var Uo={},zo={};function Gy(t,e){t.classList.remove(e)}function CR(){var t=document.getElementsByTagName("html")[0];for(var e in Uo)Gy(t,Uo[e]);var n=document.body;for(var r in zo)Gy(n,zo[r]);Uo={},zo={}}function TR(){}var IR=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},bR=function(e,n){return e[n]&&(e[n]-=1),n},xR=function(e,n,r){r.forEach(function(i){IR(n,i),e.add(i)})},kR=function(e,n,r){r.forEach(function(i){bR(n,i),n[i]===0&&e.remove(i)})};Js.add=function(e,n){return xR(e.classList,e.nodeName.toLowerCase()=="html"?Uo:zo,n.split(" "))};Js.remove=function(e,n){return kR(e.classList,e.nodeName.toLowerCase()=="html"?Uo:zo,n.split(" "))};var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});Zs.log=OR;Zs.resetState=RR;function PR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var f1=function t(){var e=this;PR(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var r=e.openInstances.indexOf(n);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(r){return r(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Ku=new f1;function OR(){console.log("portalOpenInstances ----------"),console.log(Ku.openInstances.length),Ku.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function RR(){Ku=new f1}Zs.default=Ku;var Gm={};Object.defineProperty(Gm,"__esModule",{value:!0});Gm.resetState=MR;Gm.log=LR;var NR=Zs,AR=DR(NR);function DR(t){return t&&t.__esModule?t:{default:t}}var Ze=void 0,Yt=void 0,mi=[];function MR(){for(var t=[Ze,Yt],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}Ze=Yt=null,mi=[]}function LR(){console.log("bodyTrap ----------"),console.log(mi.length);for(var t=[Ze,Yt],e=0;e<t.length;e++){var n=t[e],r=n||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ky(){mi.length!==0&&mi[mi.length-1].focusContent()}function jR(t,e){!Ze&&!Yt&&(Ze=document.createElement("div"),Ze.setAttribute("data-react-modal-body-trap",""),Ze.style.position="absolute",Ze.style.opacity="0",Ze.setAttribute("tabindex","0"),Ze.addEventListener("focus",Ky),Yt=Ze.cloneNode(),Yt.addEventListener("focus",Ky)),mi=e,mi.length>0?(document.body.firstChild!==Ze&&document.body.insertBefore(Ze,document.body.firstChild),document.body.lastChild!==Yt&&document.body.appendChild(Yt)):(Ze.parentElement&&Ze.parentElement.removeChild(Ze),Yt.parentElement&&Yt.parentElement.removeChild(Yt))}AR.default.subscribe(jR);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function($){for(var W=1;W<arguments.length;W++){var se=arguments[W];for(var x in se)Object.prototype.hasOwnProperty.call(se,x)&&($[x]=se[x])}return $},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function($){return typeof $}:function($){return $&&typeof Symbol=="function"&&$.constructor===Symbol&&$!==Symbol.prototype?"symbol":typeof $},i=function(){function $(W,se){for(var x=0;x<se.length;x++){var k=se[x];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(W,k.key,k)}}return function(W,se,x){return se&&$(W.prototype,se),x&&$(W,x),W}}(),s=S,o=l1,a=I(o),l=dn,u=E(l),d=sR,c=I(d),f=fn,p=E(f),g=Js,_=E(g),w=on,h=I(w),m=Zs,v=I(m);function E($){if($&&$.__esModule)return $;var W={};if($!=null)for(var se in $)Object.prototype.hasOwnProperty.call($,se)&&(W[se]=$[se]);return W.default=$,W}function I($){return $&&$.__esModule?$:{default:$}}function T($,W){if(!($ instanceof W))throw new TypeError("Cannot call a class as a function")}function C($,W){if(!$)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W&&(typeof W=="object"||typeof W=="function")?W:$}function R($,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof W);$.prototype=Object.create(W&&W.prototype,{constructor:{value:$,enumerable:!1,writable:!0,configurable:!0}}),W&&(Object.setPrototypeOf?Object.setPrototypeOf($,W):$.__proto__=W)}var F={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},L=function(W){return W.code==="Tab"||W.keyCode===9},be=function(W){return W.code==="Escape"||W.keyCode===27},Qe=0,ye=function($){R(W,$);function W(se){T(this,W);var x=C(this,(W.__proto__||Object.getPrototypeOf(W)).call(this,se));return x.setOverlayRef=function(k){x.overlay=k,x.props.overlayRef&&x.props.overlayRef(k)},x.setContentRef=function(k){x.content=k,x.props.contentRef&&x.props.contentRef(k)},x.afterClose=function(){var k=x.props,N=k.appElement,M=k.ariaHideApp,U=k.htmlOpenClassName,G=k.bodyOpenClassName,De=k.parentSelector,xe=De&&De().ownerDocument||document;G&&_.remove(xe.body,G),U&&_.remove(xe.getElementsByTagName("html")[0],U),M&&Qe>0&&(Qe-=1,Qe===0&&p.show(N)),x.props.shouldFocusAfterRender&&(x.props.shouldReturnFocusAfterClose?(u.returnFocus(x.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),x.props.onAfterClose&&x.props.onAfterClose(),v.default.deregister(x)},x.open=function(){x.beforeOpen(),x.state.afterOpen&&x.state.beforeClose?(clearTimeout(x.closeTimer),x.setState({beforeClose:!1})):(x.props.shouldFocusAfterRender&&(u.setupScopedFocus(x.node),u.markForFocusLater()),x.setState({isOpen:!0},function(){x.openAnimationFrame=requestAnimationFrame(function(){x.setState({afterOpen:!0}),x.props.isOpen&&x.props.onAfterOpen&&x.props.onAfterOpen({overlayEl:x.overlay,contentEl:x.content})})}))},x.close=function(){x.props.closeTimeoutMS>0?x.closeWithTimeout():x.closeWithoutTimeout()},x.focusContent=function(){return x.content&&!x.contentHasFocus()&&x.content.focus({preventScroll:!0})},x.closeWithTimeout=function(){var k=Date.now()+x.props.closeTimeoutMS;x.setState({beforeClose:!0,closesAt:k},function(){x.closeTimer=setTimeout(x.closeWithoutTimeout,x.state.closesAt-Date.now())})},x.closeWithoutTimeout=function(){x.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},x.afterClose)},x.handleKeyDown=function(k){L(k)&&(0,c.default)(x.content,k),x.props.shouldCloseOnEsc&&be(k)&&(k.stopPropagation(),x.requestClose(k))},x.handleOverlayOnClick=function(k){x.shouldClose===null&&(x.shouldClose=!0),x.shouldClose&&x.props.shouldCloseOnOverlayClick&&(x.ownerHandlesClose()?x.requestClose(k):x.focusContent()),x.shouldClose=null},x.handleContentOnMouseUp=function(){x.shouldClose=!1},x.handleOverlayOnMouseDown=function(k){!x.props.shouldCloseOnOverlayClick&&k.target==x.overlay&&k.preventDefault()},x.handleContentOnClick=function(){x.shouldClose=!1},x.handleContentOnMouseDown=function(){x.shouldClose=!1},x.requestClose=function(k){return x.ownerHandlesClose()&&x.props.onRequestClose(k)},x.ownerHandlesClose=function(){return x.props.onRequestClose},x.shouldBeClosed=function(){return!x.state.isOpen&&!x.state.beforeClose},x.contentHasFocus=function(){return document.activeElement===x.content||x.content.contains(document.activeElement)},x.buildClassName=function(k,N){var M=(typeof N>"u"?"undefined":r(N))==="object"?N:{base:F[k],afterOpen:F[k]+"--after-open",beforeClose:F[k]+"--before-close"},U=M.base;return x.state.afterOpen&&(U=U+" "+M.afterOpen),x.state.beforeClose&&(U=U+" "+M.beforeClose),typeof N=="string"&&N?U+" "+N:U},x.attributesFromObject=function(k,N){return Object.keys(N).reduce(function(M,U){return M[k+"-"+U]=N[U],M},{})},x.state={afterOpen:!1,beforeClose:!1},x.shouldClose=null,x.moveFromContentToOverlay=null,x}return i(W,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(x,k){this.props.isOpen&&!x.isOpen?this.open():!this.props.isOpen&&x.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!k.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var x=this.props,k=x.appElement,N=x.ariaHideApp,M=x.htmlOpenClassName,U=x.bodyOpenClassName,G=x.parentSelector,De=G&&G().ownerDocument||document;U&&_.add(De.body,U),M&&_.add(De.getElementsByTagName("html")[0],M),N&&(Qe+=1,p.hide(k)),v.default.register(this)}},{key:"render",value:function(){var x=this.props,k=x.id,N=x.className,M=x.overlayClassName,U=x.defaultStyles,G=x.children,De=N?{}:U.content,xe=M?{}:U.overlay;if(this.shouldBeClosed())return null;var Ve={ref:this.setOverlayRef,className:this.buildClassName("overlay",M),style:n({},xe,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Me=n({id:k,ref:this.setContentRef,style:n({},De,this.props.style.content),className:this.buildClassName("content",N),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),st=this.props.contentElement(Me,G);return this.props.overlayElement(Ve,st)}}]),W}(s.Component);ye.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ye.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(h.default),a.default.instanceOf(w.SafeHTMLCollection),a.default.instanceOf(w.SafeNodeList),a.default.arrayOf(a.default.instanceOf(h.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=ye,t.exports=e.default})(Qh,Qh.exports);var FR=Qh.exports;function h1(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function p1(t){function e(n){var r=this.constructor.getDerivedStateFromProps(t,n);return r??null}this.setState(e.bind(this))}function m1(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}h1.__suppressDeprecationWarning=!0;p1.__suppressDeprecationWarning=!0;m1.__suppressDeprecationWarning=!0;function $R(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,r=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||r!==null||i!==null){var s=t.displayName||t.name,o=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+s+" uses "+o+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=h1,e.componentWillReceiveProps=p1),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=m1;var a=e.componentDidUpdate;e.componentDidUpdate=function(u,d,c){var f=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:c;a.call(this,u,d,f)}}return t}const UR=Object.freeze(Object.defineProperty({__proto__:null,polyfill:$R},Symbol.toStringTag,{value:"Module"})),zR=ob(UR);Object.defineProperty(Ii,"__esModule",{value:!0});Ii.bodyOpenClassName=Ii.portalClassName=void 0;var qy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},WR=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g1=S,qu=Va(g1),BR=ES,Yu=Va(BR),VR=l1,H=Va(VR),HR=FR,Yy=Va(HR),GR=fn,KR=YR(GR),gr=on,Qy=Va(gr),qR=zR;function YR(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function Va(t){return t&&t.__esModule?t:{default:t}}function QR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xy(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function XR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var JR=Ii.portalClassName="ReactModalPortal",ZR=Ii.bodyOpenClassName="ReactModal__Body--open",ei=gr.canUseDOM&&Yu.default.createPortal!==void 0,Jy=function(e){return document.createElement(e)},Zy=function(){return ei?Yu.default.createPortal:Yu.default.unstable_renderSubtreeIntoContainer};function Pl(t){return t()}var Ha=function(t){XR(e,t);function e(){var n,r,i,s;QR(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(r=(i=Xy(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),i),i.removePortal=function(){!ei&&Yu.default.unmountComponentAtNode(i.node);var u=Pl(i.props.parentSelector);u&&u.contains(i.node)?u.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(u){i.portal=u},i.renderPortal=function(u){var d=Zy(),c=d(i,qu.default.createElement(Yy.default,qy({defaultStyles:e.defaultStyles},u)),i.node);i.portalRef(c)},r),Xy(i,s)}return WR(e,[{key:"componentDidMount",value:function(){if(gr.canUseDOM){ei||(this.node=Jy("div")),this.node.className=this.props.portalClassName;var r=Pl(this.props.parentSelector);r.appendChild(this.node),!ei&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var i=Pl(r.parentSelector),s=Pl(this.props.parentSelector);return{prevParent:i,nextParent:s}}},{key:"componentDidUpdate",value:function(r,i,s){if(gr.canUseDOM){var o=this.props,a=o.isOpen,l=o.portalClassName;r.portalClassName!==l&&(this.node.className=l);var u=s.prevParent,d=s.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!r.isOpen&&!a)&&!ei&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!gr.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,i=Date.now(),s=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||i+this.props.closeTimeoutMS);s?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,s-i)):this.removePortal()}}},{key:"render",value:function(){if(!gr.canUseDOM||!ei)return null;!this.node&&ei&&(this.node=Jy("div"));var r=Zy();return r(qu.default.createElement(Yy.default,qy({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){KR.setElement(r)}}]),e}(g1.Component);Ha.propTypes={isOpen:H.default.bool.isRequired,style:H.default.shape({content:H.default.object,overlay:H.default.object}),portalClassName:H.default.string,bodyOpenClassName:H.default.string,htmlOpenClassName:H.default.string,className:H.default.oneOfType([H.default.string,H.default.shape({base:H.default.string.isRequired,afterOpen:H.default.string.isRequired,beforeClose:H.default.string.isRequired})]),overlayClassName:H.default.oneOfType([H.default.string,H.default.shape({base:H.default.string.isRequired,afterOpen:H.default.string.isRequired,beforeClose:H.default.string.isRequired})]),appElement:H.default.oneOfType([H.default.instanceOf(Qy.default),H.default.instanceOf(gr.SafeHTMLCollection),H.default.instanceOf(gr.SafeNodeList),H.default.arrayOf(H.default.instanceOf(Qy.default))]),onAfterOpen:H.default.func,onRequestClose:H.default.func,closeTimeoutMS:H.default.number,ariaHideApp:H.default.bool,shouldFocusAfterRender:H.default.bool,shouldCloseOnOverlayClick:H.default.bool,shouldReturnFocusAfterClose:H.default.bool,preventScroll:H.default.bool,parentSelector:H.default.func,aria:H.default.object,data:H.default.object,role:H.default.string,contentLabel:H.default.string,shouldCloseOnEsc:H.default.bool,overlayRef:H.default.func,contentRef:H.default.func,id:H.default.string,overlayElement:H.default.func,contentElement:H.default.func};Ha.defaultProps={isOpen:!1,portalClassName:JR,bodyOpenClassName:ZR,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return qu.default.createElement("div",e,n)},contentElement:function(e,n){return qu.default.createElement("div",e,n)}};Ha.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,qR.polyfill)(Ha);Ii.default=Ha;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Ii,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}e.default=r.default,t.exports=e.default})(Yh,Yh.exports);var eN=Yh.exports;const Ga=Up(eN),tN=Lt.div`
  .close-button {
    position: absolute;
    padding: 0;
    width: 32px;
    height: 32px;
    top: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 18px;
  }
`;var nN=function(e){return rN(e)&&!iN(e)};function rN(t){return!!t&&typeof t=="object"}function iN(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||aN(t)}var sN=typeof Symbol=="function"&&Symbol.for,oN=sN?Symbol.for("react.element"):60103;function aN(t){return t.$$typeof===oN}function lN(t){return Array.isArray(t)?[]:{}}function Qu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?wa(lN(t),t,e):t}function uN(t,e,n){return t.concat(e).map(function(r){return Qu(r,n)})}function cN(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Qu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Qu(e[i],n):r[i]=wa(t[i],e[i],n)}),r}function wa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||uN,n.isMergeableObject=n.isMergeableObject||nN;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):cN(t,e,n):Qu(e,n)}wa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return wa(r,i,n)},{})};var ep=wa,v1=typeof global=="object"&&global&&global.Object===Object&&global,dN=typeof self=="object"&&self&&self.Object===Object&&self,Tn=v1||dN||Function("return this")(),Lr=Tn.Symbol,y1=Object.prototype,fN=y1.hasOwnProperty,hN=y1.toString,vo=Lr?Lr.toStringTag:void 0;function pN(t){var e=fN.call(t,vo),n=t[vo];try{t[vo]=void 0;var r=!0}catch{}var i=hN.call(t);return r&&(e?t[vo]=n:delete t[vo]),i}var mN=Object.prototype,gN=mN.toString;function vN(t){return gN.call(t)}var yN="[object Null]",_N="[object Undefined]",e_=Lr?Lr.toStringTag:void 0;function ji(t){return t==null?t===void 0?_N:yN:e_&&e_ in Object(t)?pN(t):vN(t)}function _1(t,e){return function(n){return t(e(n))}}var Km=_1(Object.getPrototypeOf,Object);function Fi(t){return t!=null&&typeof t=="object"}var wN="[object Object]",EN=Function.prototype,SN=Object.prototype,w1=EN.toString,CN=SN.hasOwnProperty,TN=w1.call(Object);function t_(t){if(!Fi(t)||ji(t)!=wN)return!1;var e=Km(t);if(e===null)return!0;var n=CN.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&w1.call(n)==TN}var n_=Array.isArray,r_=Object.keys,IN=Object.prototype.hasOwnProperty,bN=typeof Element<"u";function tp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=n_(t),r=n_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!tp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=r_(t);if(s=c.length,s!==r_(e).length)return!1;for(i=s;i--!==0;)if(!IN.call(e,c[i]))return!1;if(bN&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!tp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var xN=function(e,n){try{return tp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const ti=Up(xN);function kN(){this.__data__=[],this.size=0}function E1(t,e){return t===e||t!==t&&e!==e}function ed(t,e){for(var n=t.length;n--;)if(E1(t[n][0],e))return n;return-1}var PN=Array.prototype,ON=PN.splice;function RN(t){var e=this.__data__,n=ed(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ON.call(e,n,1),--this.size,!0}function NN(t){var e=this.__data__,n=ed(e,t);return n<0?void 0:e[n][1]}function AN(t){return ed(this.__data__,t)>-1}function DN(t,e){var n=this.__data__,r=ed(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Qn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qn.prototype.clear=kN;Qn.prototype.delete=RN;Qn.prototype.get=NN;Qn.prototype.has=AN;Qn.prototype.set=DN;function MN(){this.__data__=new Qn,this.size=0}function LN(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function jN(t){return this.__data__.get(t)}function FN(t){return this.__data__.has(t)}function Ka(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var $N="[object AsyncFunction]",UN="[object Function]",zN="[object GeneratorFunction]",WN="[object Proxy]";function S1(t){if(!Ka(t))return!1;var e=ji(t);return e==UN||e==zN||e==$N||e==WN}var vf=Tn["__core-js_shared__"],i_=function(){var t=/[^.]+$/.exec(vf&&vf.keys&&vf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function BN(t){return!!i_&&i_ in t}var VN=Function.prototype,HN=VN.toString;function $i(t){if(t!=null){try{return HN.call(t)}catch{}try{return t+""}catch{}}return""}var GN=/[\\^$.*+?()[\]{}|]/g,KN=/^\[object .+?Constructor\]$/,qN=Function.prototype,YN=Object.prototype,QN=qN.toString,XN=YN.hasOwnProperty,JN=RegExp("^"+QN.call(XN).replace(GN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ZN(t){if(!Ka(t)||BN(t))return!1;var e=S1(t)?JN:KN;return e.test($i(t))}function eA(t,e){return t==null?void 0:t[e]}function Ui(t,e){var n=eA(t,e);return ZN(n)?n:void 0}var Ea=Ui(Tn,"Map"),Sa=Ui(Object,"create");function tA(){this.__data__=Sa?Sa(null):{},this.size=0}function nA(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var rA="__lodash_hash_undefined__",iA=Object.prototype,sA=iA.hasOwnProperty;function oA(t){var e=this.__data__;if(Sa){var n=e[t];return n===rA?void 0:n}return sA.call(e,t)?e[t]:void 0}var aA=Object.prototype,lA=aA.hasOwnProperty;function uA(t){var e=this.__data__;return Sa?e[t]!==void 0:lA.call(e,t)}var cA="__lodash_hash_undefined__";function dA(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Sa&&e===void 0?cA:e,this}function bi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bi.prototype.clear=tA;bi.prototype.delete=nA;bi.prototype.get=oA;bi.prototype.has=uA;bi.prototype.set=dA;function fA(){this.size=0,this.__data__={hash:new bi,map:new(Ea||Qn),string:new bi}}function hA(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function td(t,e){var n=t.__data__;return hA(e)?n[typeof e=="string"?"string":"hash"]:n.map}function pA(t){var e=td(this,t).delete(t);return this.size-=e?1:0,e}function mA(t){return td(this,t).get(t)}function gA(t){return td(this,t).has(t)}function vA(t,e){var n=td(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Gr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gr.prototype.clear=fA;Gr.prototype.delete=pA;Gr.prototype.get=mA;Gr.prototype.has=gA;Gr.prototype.set=vA;var yA=200;function _A(t,e){var n=this.__data__;if(n instanceof Qn){var r=n.__data__;if(!Ea||r.length<yA-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Gr(r)}return n.set(t,e),this.size=n.size,this}function eo(t){var e=this.__data__=new Qn(t);this.size=e.size}eo.prototype.clear=MN;eo.prototype.delete=LN;eo.prototype.get=jN;eo.prototype.has=FN;eo.prototype.set=_A;function wA(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var s_=function(){try{var t=Ui(Object,"defineProperty");return t({},"",{}),t}catch{}}();function C1(t,e,n){e=="__proto__"&&s_?s_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var EA=Object.prototype,SA=EA.hasOwnProperty;function T1(t,e,n){var r=t[e];(!(SA.call(t,e)&&E1(r,n))||n===void 0&&!(e in t))&&C1(t,e,n)}function nd(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?C1(n,a,l):T1(n,a,l)}return n}function CA(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var TA="[object Arguments]";function o_(t){return Fi(t)&&ji(t)==TA}var I1=Object.prototype,IA=I1.hasOwnProperty,bA=I1.propertyIsEnumerable,xA=o_(function(){return arguments}())?o_:function(t){return Fi(t)&&IA.call(t,"callee")&&!bA.call(t,"callee")},qa=Array.isArray;function kA(){return!1}var b1=typeof bt=="object"&&bt&&!bt.nodeType&&bt,a_=b1&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,PA=a_&&a_.exports===b1,l_=PA?Tn.Buffer:void 0,OA=l_?l_.isBuffer:void 0,x1=OA||kA,RA=9007199254740991,NA=/^(?:0|[1-9]\d*)$/;function AA(t,e){var n=typeof t;return e=e??RA,!!e&&(n=="number"||n!="symbol"&&NA.test(t))&&t>-1&&t%1==0&&t<e}var DA=9007199254740991;function k1(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=DA}var MA="[object Arguments]",LA="[object Array]",jA="[object Boolean]",FA="[object Date]",$A="[object Error]",UA="[object Function]",zA="[object Map]",WA="[object Number]",BA="[object Object]",VA="[object RegExp]",HA="[object Set]",GA="[object String]",KA="[object WeakMap]",qA="[object ArrayBuffer]",YA="[object DataView]",QA="[object Float32Array]",XA="[object Float64Array]",JA="[object Int8Array]",ZA="[object Int16Array]",eD="[object Int32Array]",tD="[object Uint8Array]",nD="[object Uint8ClampedArray]",rD="[object Uint16Array]",iD="[object Uint32Array]",he={};he[QA]=he[XA]=he[JA]=he[ZA]=he[eD]=he[tD]=he[nD]=he[rD]=he[iD]=!0;he[MA]=he[LA]=he[qA]=he[jA]=he[YA]=he[FA]=he[$A]=he[UA]=he[zA]=he[WA]=he[BA]=he[VA]=he[HA]=he[GA]=he[KA]=!1;function sD(t){return Fi(t)&&k1(t.length)&&!!he[ji(t)]}function qm(t){return function(e){return t(e)}}var P1=typeof bt=="object"&&bt&&!bt.nodeType&&bt,Wo=P1&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,oD=Wo&&Wo.exports===P1,yf=oD&&v1.process,js=function(){try{var t=Wo&&Wo.require&&Wo.require("util").types;return t||yf&&yf.binding&&yf.binding("util")}catch{}}(),u_=js&&js.isTypedArray,aD=u_?qm(u_):sD,lD=Object.prototype,uD=lD.hasOwnProperty;function O1(t,e){var n=qa(t),r=!n&&xA(t),i=!n&&!r&&x1(t),s=!n&&!r&&!i&&aD(t),o=n||r||i||s,a=o?CA(t.length,String):[],l=a.length;for(var u in t)(e||uD.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||AA(u,l)))&&a.push(u);return a}var cD=Object.prototype;function Ym(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||cD;return t===n}var dD=_1(Object.keys,Object),fD=Object.prototype,hD=fD.hasOwnProperty;function pD(t){if(!Ym(t))return dD(t);var e=[];for(var n in Object(t))hD.call(t,n)&&n!="constructor"&&e.push(n);return e}function R1(t){return t!=null&&k1(t.length)&&!S1(t)}function Qm(t){return R1(t)?O1(t):pD(t)}function mD(t,e){return t&&nd(e,Qm(e),t)}function gD(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var vD=Object.prototype,yD=vD.hasOwnProperty;function _D(t){if(!Ka(t))return gD(t);var e=Ym(t),n=[];for(var r in t)r=="constructor"&&(e||!yD.call(t,r))||n.push(r);return n}function Xm(t){return R1(t)?O1(t,!0):_D(t)}function wD(t,e){return t&&nd(e,Xm(e),t)}var N1=typeof bt=="object"&&bt&&!bt.nodeType&&bt,c_=N1&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,ED=c_&&c_.exports===N1,d_=ED?Tn.Buffer:void 0,f_=d_?d_.allocUnsafe:void 0;function SD(t,e){if(e)return t.slice();var n=t.length,r=f_?f_(n):new t.constructor(n);return t.copy(r),r}function A1(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function CD(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function D1(){return[]}var TD=Object.prototype,ID=TD.propertyIsEnumerable,h_=Object.getOwnPropertySymbols,Jm=h_?function(t){return t==null?[]:(t=Object(t),CD(h_(t),function(e){return ID.call(t,e)}))}:D1;function bD(t,e){return nd(t,Jm(t),e)}function M1(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var xD=Object.getOwnPropertySymbols,L1=xD?function(t){for(var e=[];t;)M1(e,Jm(t)),t=Km(t);return e}:D1;function kD(t,e){return nd(t,L1(t),e)}function j1(t,e,n){var r=e(t);return qa(t)?r:M1(r,n(t))}function PD(t){return j1(t,Qm,Jm)}function OD(t){return j1(t,Xm,L1)}var np=Ui(Tn,"DataView"),rp=Ui(Tn,"Promise"),ip=Ui(Tn,"Set"),sp=Ui(Tn,"WeakMap"),p_="[object Map]",RD="[object Object]",m_="[object Promise]",g_="[object Set]",v_="[object WeakMap]",y_="[object DataView]",ND=$i(np),AD=$i(Ea),DD=$i(rp),MD=$i(ip),LD=$i(sp),ni=ji;(np&&ni(new np(new ArrayBuffer(1)))!=y_||Ea&&ni(new Ea)!=p_||rp&&ni(rp.resolve())!=m_||ip&&ni(new ip)!=g_||sp&&ni(new sp)!=v_)&&(ni=function(t){var e=ji(t),n=e==RD?t.constructor:void 0,r=n?$i(n):"";if(r)switch(r){case ND:return y_;case AD:return p_;case DD:return m_;case MD:return g_;case LD:return v_}return e});const Zm=ni;var jD=Object.prototype,FD=jD.hasOwnProperty;function $D(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&FD.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var __=Tn.Uint8Array;function eg(t){var e=new t.constructor(t.byteLength);return new __(e).set(new __(t)),e}function UD(t,e){var n=e?eg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var zD=/\w*$/;function WD(t){var e=new t.constructor(t.source,zD.exec(t));return e.lastIndex=t.lastIndex,e}var w_=Lr?Lr.prototype:void 0,E_=w_?w_.valueOf:void 0;function BD(t){return E_?Object(E_.call(t)):{}}function VD(t,e){var n=e?eg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var HD="[object Boolean]",GD="[object Date]",KD="[object Map]",qD="[object Number]",YD="[object RegExp]",QD="[object Set]",XD="[object String]",JD="[object Symbol]",ZD="[object ArrayBuffer]",eM="[object DataView]",tM="[object Float32Array]",nM="[object Float64Array]",rM="[object Int8Array]",iM="[object Int16Array]",sM="[object Int32Array]",oM="[object Uint8Array]",aM="[object Uint8ClampedArray]",lM="[object Uint16Array]",uM="[object Uint32Array]";function cM(t,e,n){var r=t.constructor;switch(e){case ZD:return eg(t);case HD:case GD:return new r(+t);case eM:return UD(t,n);case tM:case nM:case rM:case iM:case sM:case oM:case aM:case lM:case uM:return VD(t,n);case KD:return new r;case qD:case XD:return new r(t);case YD:return WD(t);case QD:return new r;case JD:return BD(t)}}var S_=Object.create,dM=function(){function t(){}return function(e){if(!Ka(e))return{};if(S_)return S_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function fM(t){return typeof t.constructor=="function"&&!Ym(t)?dM(Km(t)):{}}var hM="[object Map]";function pM(t){return Fi(t)&&Zm(t)==hM}var C_=js&&js.isMap,mM=C_?qm(C_):pM,gM="[object Set]";function vM(t){return Fi(t)&&Zm(t)==gM}var T_=js&&js.isSet,yM=T_?qm(T_):vM,_M=1,wM=2,EM=4,F1="[object Arguments]",SM="[object Array]",CM="[object Boolean]",TM="[object Date]",IM="[object Error]",$1="[object Function]",bM="[object GeneratorFunction]",xM="[object Map]",kM="[object Number]",U1="[object Object]",PM="[object RegExp]",OM="[object Set]",RM="[object String]",NM="[object Symbol]",AM="[object WeakMap]",DM="[object ArrayBuffer]",MM="[object DataView]",LM="[object Float32Array]",jM="[object Float64Array]",FM="[object Int8Array]",$M="[object Int16Array]",UM="[object Int32Array]",zM="[object Uint8Array]",WM="[object Uint8ClampedArray]",BM="[object Uint16Array]",VM="[object Uint32Array]",le={};le[F1]=le[SM]=le[DM]=le[MM]=le[CM]=le[TM]=le[LM]=le[jM]=le[FM]=le[$M]=le[UM]=le[xM]=le[kM]=le[U1]=le[PM]=le[OM]=le[RM]=le[NM]=le[zM]=le[WM]=le[BM]=le[VM]=!0;le[IM]=le[$1]=le[AM]=!1;function tu(t,e,n,r,i,s){var o,a=e&_M,l=e&wM,u=e&EM;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Ka(t))return t;var d=qa(t);if(d){if(o=$D(t),!a)return A1(t,o)}else{var c=Zm(t),f=c==$1||c==bM;if(x1(t))return SD(t,a);if(c==U1||c==F1||f&&!i){if(o=l||f?{}:fM(t),!a)return l?kD(t,wD(o,t)):bD(t,mD(o,t))}else{if(!le[c])return i?t:{};o=cM(t,c,a)}}s||(s=new eo);var p=s.get(t);if(p)return p;s.set(t,o),yM(t)?t.forEach(function(w){o.add(tu(w,e,n,w,t,s))}):mM(t)&&t.forEach(function(w,h){o.set(h,tu(w,e,n,h,t,s))});var g=u?l?OD:PD:l?Xm:Qm,_=d?void 0:g(t);return wA(_||t,function(w,h){_&&(h=w,w=t[h]),T1(o,h,tu(w,e,n,h,t,s))}),o}var HM=4;function I_(t){return tu(t,HM)}function z1(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var GM="[object Symbol]";function tg(t){return typeof t=="symbol"||Fi(t)&&ji(t)==GM}var KM="Expected a function";function ng(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(KM);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(ng.Cache||Gr),n}ng.Cache=Gr;var qM=500;function YM(t){var e=ng(t,function(r){return n.size===qM&&n.clear(),r}),n=e.cache;return e}var QM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,XM=/\\(\\)?/g,JM=YM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(QM,function(n,r,i,s){e.push(i?s.replace(XM,"$1"):r||n)}),e});const ZM=JM;var eL=1/0;function tL(t){if(typeof t=="string"||tg(t))return t;var e=t+"";return e=="0"&&1/t==-eL?"-0":e}var nL=1/0,b_=Lr?Lr.prototype:void 0,x_=b_?b_.toString:void 0;function W1(t){if(typeof t=="string")return t;if(qa(t))return z1(t,W1)+"";if(tg(t))return x_?x_.call(t):"";var e=t+"";return e=="0"&&1/t==-nL?"-0":e}function rL(t){return t==null?"":W1(t)}function B1(t){return qa(t)?z1(t,tL):tg(t)?[t]:A1(ZM(rL(t)))}var V1={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,rg=Be?Symbol.for("react.element"):60103,ig=Be?Symbol.for("react.portal"):60106,rd=Be?Symbol.for("react.fragment"):60107,id=Be?Symbol.for("react.strict_mode"):60108,sd=Be?Symbol.for("react.profiler"):60114,od=Be?Symbol.for("react.provider"):60109,ad=Be?Symbol.for("react.context"):60110,sg=Be?Symbol.for("react.async_mode"):60111,ld=Be?Symbol.for("react.concurrent_mode"):60111,ud=Be?Symbol.for("react.forward_ref"):60112,cd=Be?Symbol.for("react.suspense"):60113,iL=Be?Symbol.for("react.suspense_list"):60120,dd=Be?Symbol.for("react.memo"):60115,fd=Be?Symbol.for("react.lazy"):60116,sL=Be?Symbol.for("react.block"):60121,oL=Be?Symbol.for("react.fundamental"):60117,aL=Be?Symbol.for("react.responder"):60118,lL=Be?Symbol.for("react.scope"):60119;function jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case rg:switch(t=t.type,t){case sg:case ld:case rd:case sd:case id:case cd:return t;default:switch(t=t&&t.$$typeof,t){case ad:case ud:case fd:case dd:case od:return t;default:return e}}case ig:return e}}}function H1(t){return jt(t)===ld}ie.AsyncMode=sg;ie.ConcurrentMode=ld;ie.ContextConsumer=ad;ie.ContextProvider=od;ie.Element=rg;ie.ForwardRef=ud;ie.Fragment=rd;ie.Lazy=fd;ie.Memo=dd;ie.Portal=ig;ie.Profiler=sd;ie.StrictMode=id;ie.Suspense=cd;ie.isAsyncMode=function(t){return H1(t)||jt(t)===sg};ie.isConcurrentMode=H1;ie.isContextConsumer=function(t){return jt(t)===ad};ie.isContextProvider=function(t){return jt(t)===od};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===rg};ie.isForwardRef=function(t){return jt(t)===ud};ie.isFragment=function(t){return jt(t)===rd};ie.isLazy=function(t){return jt(t)===fd};ie.isMemo=function(t){return jt(t)===dd};ie.isPortal=function(t){return jt(t)===ig};ie.isProfiler=function(t){return jt(t)===sd};ie.isStrictMode=function(t){return jt(t)===id};ie.isSuspense=function(t){return jt(t)===cd};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rd||t===ld||t===sd||t===id||t===cd||t===iL||typeof t=="object"&&t!==null&&(t.$$typeof===fd||t.$$typeof===dd||t.$$typeof===od||t.$$typeof===ad||t.$$typeof===ud||t.$$typeof===oL||t.$$typeof===aL||t.$$typeof===lL||t.$$typeof===sL)};ie.typeOf=jt;V1.exports=ie;var uL=V1.exports,G1=uL,cL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dL={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K1={};K1[G1.ForwardRef]=cL;K1[G1.Memo]=dL;function pe(){return pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pe.apply(this,arguments)}function cs(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var hd=S.createContext(void 0);hd.displayName="FormikContext";var fL=hd.Provider;hd.Consumer;function q1(){var t=S.useContext(hd);return t}var Et=function(e){return typeof e=="function"},pd=function(e){return e!==null&&typeof e=="object"},hL=function(e){return String(Math.floor(Number(e)))===e},_f=function(e){return Object.prototype.toString.call(e)==="[object String]"},pL=function(e){return S.Children.count(e)===0},wf=function(e){return pd(e)&&Et(e.then)};function _t(t,e,n,r){r===void 0&&(r=0);for(var i=B1(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function gi(t,e,n){for(var r=I_(t),i=r,s=0,o=B1(e);s<o.length-1;s++){var a=o[s],l=_t(t,o.slice(0,s+1));if(l&&(pd(l)||Array.isArray(l)))i=i[a]=I_(l);else{var u=o[s+1];i=i[a]=hL(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function Y1(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];pd(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},Y1(a,e,n,r[o])):r[o]=e}return r}function mL(t,e){switch(e.type){case"SET_VALUES":return pe({},t,{values:e.payload});case"SET_TOUCHED":return pe({},t,{touched:e.payload});case"SET_ERRORS":return ti(t.errors,e.payload)?t:pe({},t,{errors:e.payload});case"SET_STATUS":return pe({},t,{status:e.payload});case"SET_ISSUBMITTING":return pe({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return pe({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return pe({},t,{values:gi(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return pe({},t,{touched:gi(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return pe({},t,{errors:gi(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return pe({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return pe({},t,{touched:Y1(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return pe({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return pe({},t,{isSubmitting:!1});default:return t}}var Xr={},Ol={};function Q1(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=cs(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=pe({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=S.useRef(f.initialValues),g=S.useRef(f.initialErrors||Xr),_=S.useRef(f.initialTouched||Ol),w=S.useRef(f.initialStatus),h=S.useRef(!1),m=S.useRef({});S.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var v=S.useState(0),E=v[1],I=S.useRef({values:f.initialValues,errors:f.initialErrors||Xr,touched:f.initialTouched||Ol,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=I.current,C=S.useCallback(function(b){var A=I.current;I.current=mL(A,b),A!==I.current&&E(function(j){return j+1})},[]),R=S.useCallback(function(b,A){return new Promise(function(j,z){var q=f.validate(b,A);q==null?j(Xr):wf(q)?q.then(function(ne){j(ne||Xr)},function(ne){z(ne)}):j(q)})},[f.validate]),F=S.useCallback(function(b,A){var j=f.validationSchema,z=Et(j)?j(A):j,q=A&&z.validateAt?z.validateAt(A,b):vL(b,z);return new Promise(function(ne,Le){q.then(function(){ne(Xr)},function(bn){bn.name==="ValidationError"?ne(gL(bn)):Le(bn)})})},[f.validationSchema]),L=S.useCallback(function(b,A){return new Promise(function(j){return j(m.current[b].validate(A))})},[]),be=S.useCallback(function(b){var A=Object.keys(m.current).filter(function(z){return Et(m.current[z].validate)}),j=A.length>0?A.map(function(z){return L(z,_t(b,z))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(j).then(function(z){return z.reduce(function(q,ne,Le){return ne==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ne&&(q=gi(q,A[Le],ne)),q},{})})},[L]),Qe=S.useCallback(function(b){return Promise.all([be(b),f.validationSchema?F(b):{},f.validate?R(b):{}]).then(function(A){var j=A[0],z=A[1],q=A[2],ne=ep.all([j,z,q],{arrayMerge:yL});return ne})},[f.validate,f.validationSchema,be,R,F]),ye=Ft(function(b){return b===void 0&&(b=T.values),C({type:"SET_ISVALIDATING",payload:!0}),Qe(b).then(function(A){return h.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:A})),A})});S.useEffect(function(){o&&h.current===!0&&ti(p.current,f.initialValues)&&ye(p.current)},[o,ye]);var $=S.useCallback(function(b){var A=b&&b.values?b.values:p.current,j=b&&b.errors?b.errors:g.current?g.current:f.initialErrors||{},z=b&&b.touched?b.touched:_.current?_.current:f.initialTouched||{},q=b&&b.status?b.status:w.current?w.current:f.initialStatus;p.current=A,g.current=j,_.current=z,w.current=q;var ne=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!b&&!!b.isSubmitting,errors:j,touched:z,status:q,values:A,isValidating:!!b&&!!b.isValidating,submitCount:b&&b.submitCount&&typeof b.submitCount=="number"?b.submitCount:0}})};if(f.onReset){var Le=f.onReset(T.values,gv);wf(Le)?Le.then(ne):ne()}else ne()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);S.useEffect(function(){h.current===!0&&!ti(p.current,f.initialValues)&&u&&(p.current=f.initialValues,$(),o&&ye(p.current))},[u,f.initialValues,$,o,ye]),S.useEffect(function(){u&&h.current===!0&&!ti(g.current,f.initialErrors)&&(g.current=f.initialErrors||Xr,C({type:"SET_ERRORS",payload:f.initialErrors||Xr}))},[u,f.initialErrors]),S.useEffect(function(){u&&h.current===!0&&!ti(_.current,f.initialTouched)&&(_.current=f.initialTouched||Ol,C({type:"SET_TOUCHED",payload:f.initialTouched||Ol}))},[u,f.initialTouched]),S.useEffect(function(){u&&h.current===!0&&!ti(w.current,f.initialStatus)&&(w.current=f.initialStatus,C({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var W=Ft(function(b){if(m.current[b]&&Et(m.current[b].validate)){var A=_t(T.values,b),j=m.current[b].validate(A);return wf(j)?(C({type:"SET_ISVALIDATING",payload:!0}),j.then(function(z){return z}).then(function(z){C({type:"SET_FIELD_ERROR",payload:{field:b,value:z}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:b,value:j}}),Promise.resolve(j))}else if(f.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),F(T.values,b).then(function(z){return z}).then(function(z){C({type:"SET_FIELD_ERROR",payload:{field:b,value:_t(z,b)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),se=S.useCallback(function(b,A){var j=A.validate;m.current[b]={validate:j}},[]),x=S.useCallback(function(b){delete m.current[b]},[]),k=Ft(function(b,A){C({type:"SET_TOUCHED",payload:b});var j=A===void 0?i:A;return j?ye(T.values):Promise.resolve()}),N=S.useCallback(function(b){C({type:"SET_ERRORS",payload:b})},[]),M=Ft(function(b,A){var j=Et(b)?b(T.values):b;C({type:"SET_VALUES",payload:j});var z=A===void 0?n:A;return z?ye(j):Promise.resolve()}),U=S.useCallback(function(b,A){C({type:"SET_FIELD_ERROR",payload:{field:b,value:A}})},[]),G=Ft(function(b,A,j){C({type:"SET_FIELD_VALUE",payload:{field:b,value:A}});var z=j===void 0?n:j;return z?ye(gi(T.values,b,A)):Promise.resolve()}),De=S.useCallback(function(b,A){var j=A,z=b,q;if(!_f(b)){b.persist&&b.persist();var ne=b.target?b.target:b.currentTarget,Le=ne.type,bn=ne.name,Ld=ne.id,jd=ne.value,eb=ne.checked,MW=ne.outerHTML,vv=ne.options,tb=ne.multiple;j=A||bn||Ld,z=/number|range/.test(Le)?(q=parseFloat(jd),isNaN(q)?"":q):/checkbox/.test(Le)?wL(_t(T.values,j),eb,jd):vv&&tb?_L(vv):jd}j&&G(j,z)},[G,T.values]),xe=Ft(function(b){if(_f(b))return function(A){return De(A,b)};De(b)}),Ve=Ft(function(b,A,j){A===void 0&&(A=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:b,value:A}});var z=j===void 0?i:j;return z?ye(T.values):Promise.resolve()}),Me=S.useCallback(function(b,A){b.persist&&b.persist();var j=b.target,z=j.name,q=j.id,ne=j.outerHTML,Le=A||z||q;Ve(Le,!0)},[Ve]),st=Ft(function(b){if(_f(b))return function(A){return Me(A,b)};Me(b)}),Zn=S.useCallback(function(b){Et(b)?C({type:"SET_FORMIK_STATE",payload:b}):C({type:"SET_FORMIK_STATE",payload:function(){return b}})},[]),hn=S.useCallback(function(b){C({type:"SET_STATUS",payload:b})},[]),Vi=S.useCallback(function(b){C({type:"SET_ISSUBMITTING",payload:b})},[]),er=Ft(function(){return C({type:"SUBMIT_ATTEMPT"}),ye().then(function(b){var A=b instanceof Error,j=!A&&Object.keys(b).length===0;if(j){var z;try{if(z=KI(),z===void 0)return}catch(q){throw q}return Promise.resolve(z).then(function(q){return h.current&&C({type:"SUBMIT_SUCCESS"}),q}).catch(function(q){if(h.current)throw C({type:"SUBMIT_FAILURE"}),q})}else if(h.current&&(C({type:"SUBMIT_FAILURE"}),A))throw b})}),pn=Ft(function(b){b&&b.preventDefault&&Et(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Et(b.stopPropagation)&&b.stopPropagation(),er().catch(function(A){console.warn("Warning: An unhandled error was caught from submitForm()",A)})}),gv={resetForm:$,validateForm:ye,validateField:W,setErrors:N,setFieldError:U,setFieldTouched:Ve,setFieldValue:G,setStatus:hn,setSubmitting:Vi,setTouched:k,setValues:M,setFormikState:Zn,submitForm:er},KI=Ft(function(){return d(T.values,gv)}),qI=Ft(function(b){b&&b.preventDefault&&Et(b.preventDefault)&&b.preventDefault(),b&&b.stopPropagation&&Et(b.stopPropagation)&&b.stopPropagation(),$()}),YI=S.useCallback(function(b){return{value:_t(T.values,b),error:_t(T.errors,b),touched:!!_t(T.touched,b),initialValue:_t(p.current,b),initialTouched:!!_t(_.current,b),initialError:_t(g.current,b)}},[T.errors,T.touched,T.values]),QI=S.useCallback(function(b){return{setValue:function(j,z){return G(b,j,z)},setTouched:function(j,z){return Ve(b,j,z)},setError:function(j){return U(b,j)}}},[G,Ve,U]),XI=S.useCallback(function(b){var A=pd(b),j=A?b.name:b,z=_t(T.values,j),q={name:j,value:z,onChange:xe,onBlur:st};if(A){var ne=b.type,Le=b.value,bn=b.as,Ld=b.multiple;ne==="checkbox"?Le===void 0?q.checked=!!z:(q.checked=!!(Array.isArray(z)&&~z.indexOf(Le)),q.value=Le):ne==="radio"?(q.checked=z===Le,q.value=Le):bn==="select"&&Ld&&(q.value=q.value||[],q.multiple=!0)}return q},[st,xe,T.values]),Md=S.useMemo(function(){return!ti(p.current,T.values)},[p.current,T.values]),JI=S.useMemo(function(){return typeof a<"u"?Md?T.errors&&Object.keys(T.errors).length===0:a!==!1&&Et(a)?a(f):a:T.errors&&Object.keys(T.errors).length===0},[a,Md,T.errors,f]),ZI=pe({},T,{initialValues:p.current,initialErrors:g.current,initialTouched:_.current,initialStatus:w.current,handleBlur:st,handleChange:xe,handleReset:qI,handleSubmit:pn,resetForm:$,setErrors:N,setFormikState:Zn,setFieldTouched:Ve,setFieldValue:G,setFieldError:U,setStatus:hn,setSubmitting:Vi,setTouched:k,setValues:M,submitForm:er,validateForm:ye,validateField:W,isValid:JI,dirty:Md,unregisterField:x,registerField:se,getFieldProps:XI,getFieldMeta:YI,getFieldHelpers:QI,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return ZI}function X1(t){var e=Q1(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return S.useImperativeHandle(s,function(){return e}),S.createElement(fL,{value:e},n?S.createElement(n,e):i?i(e):r?Et(r)?r(e):pL(r)?null:S.Children.only(r):null)}function gL(t){var e={};if(t.inner){if(t.inner.length===0)return gi(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;_t(e,o.path)||(e=gi(e,o.path,o.message))}}return e}function vL(t,e,n,r){n===void 0&&(n=!1);var i=op(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function op(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||t_(i)?op(i):i!==""?i:void 0}):t_(t[r])?e[r]=op(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function yL(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?ep(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=ep(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function _L(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function wL(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var EL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?S.useLayoutEffect:S.useEffect;function Ft(t){var e=S.useRef(t);return EL(function(){e.current=t}),S.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function Bo(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=cs(t,["validate","name","render","children","as","component","className"]),u=q1(),d=cs(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;S.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(pe({name:n},l)),g=d.getFieldMeta(n),_={field:p,form:d};if(r)return r(pe({},_,{meta:g}));if(Et(i))return i(pe({},_,{meta:g}));if(o){if(typeof o=="string"){var w=l.innerRef,h=cs(l,["innerRef"]);return S.createElement(o,pe({ref:w},p,h,{className:a}),i)}return S.createElement(o,pe({field:p,form:d},l,{className:a}),i)}var m=s||"input";if(typeof m=="string"){var v=l.innerRef,E=cs(l,["innerRef"]);return S.createElement(m,pe({ref:v},p,E,{className:a}),i)}return S.createElement(m,pe({},p,l,{className:a}),i)}var og=S.forwardRef(function(t,e){var n=t.action,r=cs(t,["action"]),i=n??"#",s=q1(),o=s.handleReset,a=s.handleSubmit;return S.createElement("form",pe({onSubmit:a,ref:e,onReset:o,action:i},r))});og.displayName="Form";const ag={content:{position:"relative",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"80vw",paddingTop:44,paddingBottom:44,borderRadius:30,maxWidth:570}};var J1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k_=ze.createContext&&ze.createContext(J1),SL=["attr","size","title"];function CL(t,e){if(t==null)return{};var n=TL(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function TL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}function P_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ju(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P_(Object(n),!0).forEach(function(r){IL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function IL(t,e,n){return e=bL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bL(t){var e=xL(t,"string");return typeof e=="symbol"?e:String(e)}function xL(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Z1(t){return t&&t.map((e,n)=>ze.createElement(e.tag,Ju({key:n},e.attr),Z1(e.child)))}function lg(t){return e=>ze.createElement(kL,Xu({attr:Ju({},t.attr)},e),Z1(t.child))}function kL(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=CL(t,SL),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ze.createElement("svg",Xu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ju(Ju({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ze.createElement("title",null,s),t.children)};return k_!==void 0?ze.createElement(k_.Consumer,null,n=>e(n)):e(J1)}function ug(t){return lg({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}function eC(t){return lg({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(t)}function tC(t){return lg({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(t)}var nC={exports:{}},rC={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=S;function PL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var OL=typeof Object.is=="function"?Object.is:PL,RL=Ya.useSyncExternalStore,NL=Ya.useRef,AL=Ya.useEffect,DL=Ya.useMemo,ML=Ya.useDebugValue;rC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=NL(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=DL(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return c=g}return c=p}if(g=c,OL(d,p))return g;var _=r(p);return i!==void 0&&i(g,_)?g:(d=p,c=_)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=RL(t,s[0],s[1]);return AL(function(){o.hasValue=!0,o.value=a},[a]),ML(a),a};nC.exports=rC;var LL=nC.exports,Tt="default"in Wf?ze:Wf,O_=Symbol.for("react-redux-context"),R_=typeof globalThis<"u"?globalThis:{};function jL(){if(!Tt.createContext)return{};const t=R_[O_]??(R_[O_]=new Map);let e=t.get(Tt.createContext);return e||(e=Tt.createContext(null),t.set(Tt.createContext,e)),e}var jr=jL(),FL=()=>{throw new Error("uSES not initialized!")};function cg(t=jr){return function(){return Tt.useContext(t)}}var iC=cg(),sC=FL,$L=t=>{sC=t},UL=(t,e)=>t===e;function zL(t=jr){const e=t===jr?iC:cg(t),n=(r,i={})=>{const{equalityFn:s=UL,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Tt.useRef(!0);const f=Tt.useCallback({[r.name](g){return r(g)}}[r.name],[r,d,o.stabilityCheck]),p=sC(l.addNestedSub,a.getState,u||a.getState,f,s);return Tt.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var Pt=zL();function WL(t){t()}function BL(){let t=null,e=null;return{clear(){t=null,e=null},notify(){WL(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var N_={notify(){},get:()=>[]};function VL(t,e){let n,r=N_,i=0,s=!1;function o(_){d();const w=r.subscribe(_);let h=!1;return()=>{h||(h=!0,w(),c())}}function a(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=BL())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=N_)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const g={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return g}var HL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GL=HL?Tt.useLayoutEffect:Tt.useEffect;function KL({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Tt.useMemo(()=>{const u=VL(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Tt.useMemo(()=>t.getState(),[t]);GL(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||jr;return Tt.createElement(l.Provider,{value:o},n)}var qL=KL;function oC(t=jr){const e=t===jr?iC:cg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var YL=oC();function QL(t=jr){const e=t===jr?YL:oC(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var to=QL();$L(LL.useSyncExternalStoreWithSelector);var aC={},Fs={};Object.defineProperty(Fs,"__esModule",{value:!0});Fs.cssValue=Fs.parseLengthAndUnit=void 0;var XL={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function lC(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return XL[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}Fs.parseLengthAndUnit=lC;function JL(t){var e=lC(t);return"".concat(e.value).concat(e.unit)}Fs.cssValue=JL;var md={};Object.defineProperty(md,"__esModule",{value:!0});md.createAnimation=void 0;var ZL=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r};md.createAnimation=ZL;var Zu=Cn&&Cn.__assign||function(){return Zu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Zu.apply(this,arguments)},ej=Cn&&Cn.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),tj=Cn&&Cn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),nj=Cn&&Cn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&ej(e,t,n);return tj(e,t),e},rj=Cn&&Cn.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(aC,"__esModule",{value:!0});var Ki=nj(S),Ef=Fs,A_=md;function ij(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,d=u===void 0?15:u,c=t.margin,f=c===void 0?2:c,p=rj(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),g=Zu({display:"inherit"},l),_=(0,A_.createAnimation)("RiseLoader",`0% {transform: scale(1.1)}
    25% {transform: translateY(-`.concat(d,`px)}
    50% {transform: scale(0.4)}
    75% {transform: translateY(`).concat(d,`px)}
    100% {transform: translateY(0) scale(1.0)}`),"even"),w=(0,A_.createAnimation)("RiseLoader",`0% {transform: scale(0.4)}
    25% {transform: translateY(`.concat(d,`px)}
    50% {transform: scale(1.1)}
    75% {transform: translateY(`).concat(-d,`px)}
    100% {transform: translateY(0) scale(0.75)}`),"odd"),h=function(m){return{backgroundColor:i,width:(0,Ef.cssValue)(d),height:(0,Ef.cssValue)(d),margin:(0,Ef.cssValue)(f),borderRadius:"100%",display:"inline-block",animation:"".concat(m%2===0?_:w," ").concat(1/o,"s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)"),animationFillMode:"both"}};return n?Ki.createElement("span",Zu({style:g},p),Ki.createElement("span",{style:h(1)}),Ki.createElement("span",{style:h(2)}),Ki.createElement("span",{style:h(3)}),Ki.createElement("span",{style:h(4)}),Ki.createElement("span",{style:h(5)})):null}var sj=aC.default=ij;const oj={display:"block",margin:"0 auto",borderColor:"red"},gd=()=>y.jsx(sj,{color:"#8a28df",cssOverride:oj,size:45,"aria-label":"Loading Spinner","data-testid":"loader"});function He(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var aj=typeof Symbol=="function"&&Symbol.observable||"@@observable",D_=aj,Sf=()=>Math.random().toString(36).substring(7).split("").join("."),lj={INIT:`@@redux/INIT${Sf()}`,REPLACE:`@@redux/REPLACE${Sf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Sf()}`},ec=lj;function dg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function fg(t,e,n){if(typeof t!="function")throw new Error(He(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(He(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(He(1));return n(fg)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,h)=>{o.set(h,w)}))}function d(){if(l)throw new Error(He(3));return i}function c(w){if(typeof w!="function")throw new Error(He(4));if(l)throw new Error(He(5));let h=!0;u();const m=a++;return o.set(m,w),function(){if(h){if(l)throw new Error(He(6));h=!1,u(),o.delete(m),s=null}}}function f(w){if(!dg(w))throw new Error(He(7));if(typeof w.type>"u")throw new Error(He(8));if(typeof w.type!="string")throw new Error(He(17));if(l)throw new Error(He(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(m=>{m()}),w}function p(w){if(typeof w!="function")throw new Error(He(10));r=w,f({type:ec.REPLACE})}function g(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(He(11));function m(){const E=h;E.next&&E.next(d())}return m(),{unsubscribe:w(m)}},[D_](){return this}}}return f({type:ec.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[D_]:g}}function uj(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:ec.INIT})>"u")throw new Error(He(12));if(typeof n(void 0,{type:ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(He(13))})}function uC(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{uj(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(He(14));u[c]=g,l=l||g!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function tc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function cj(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(He(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=tc(...a)(i.dispatch),{...i,dispatch:s}}}function dj(t){return dg(t)&&"type"in t&&typeof t.type=="string"}var cC=Symbol.for("immer-nothing"),M_=Symbol.for("immer-draftable"),Nt=Symbol.for("immer-state");function Jt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var $s=Object.getPrototypeOf;function Fr(t){return!!t&&!!t[Nt]}function Bn(t){var e;return t?dC(t)||Array.isArray(t)||!!t[M_]||!!((e=t.constructor)!=null&&e[M_])||yd(t)||_d(t):!1}var fj=Object.prototype.constructor.toString();function dC(t){if(!t||typeof t!="object")return!1;const e=$s(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===fj}function Ca(t,e){vd(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function vd(t){const e=t[Nt];return e?e.type_:Array.isArray(t)?1:yd(t)?2:_d(t)?3:0}function ap(t,e){return vd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function fC(t,e,n){const r=vd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function hj(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function yd(t){return t instanceof Map}function _d(t){return t instanceof Set}function ri(t){return t.copy_||t.base_}function lp(t,e){if(yd(t))return new Map(t);if(_d(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&dC(t))return $s(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[Nt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create($s(t),n)}function hg(t,e=!1){return wd(t)||Fr(t)||!Bn(t)||(vd(t)>1&&(t.set=t.add=t.clear=t.delete=pj),Object.freeze(t),e&&Ca(t,(n,r)=>hg(r,!0))),t}function pj(){Jt(2)}function wd(t){return Object.isFrozen(t)}var mj={};function xi(t){const e=mj[t];return e||Jt(0,t),e}var Ta;function hC(){return Ta}function gj(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function L_(t,e){e&&(xi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function up(t){cp(t),t.drafts_.forEach(vj),t.drafts_=null}function cp(t){t===Ta&&(Ta=t.parent_)}function j_(t){return Ta=gj(Ta,t)}function vj(t){const e=t[Nt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function F_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Nt].modified_&&(up(e),Jt(4)),Bn(t)&&(t=nc(e,t),e.parent_||rc(e,t)),e.patches_&&xi("Patches").generateReplacementPatches_(n[Nt].base_,t,e.patches_,e.inversePatches_)):t=nc(e,n,[]),up(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==cC?t:void 0}function nc(t,e,n){if(wd(e))return e;const r=e[Nt];if(!r)return Ca(e,(i,s)=>$_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return rc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Ca(s,(a,l)=>$_(t,r,i,a,l,n,o)),rc(t,i,!1),n&&t.patches_&&xi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function $_(t,e,n,r,i,s,o){if(Fr(i)){const a=s&&e&&e.type_!==3&&!ap(e.assigned_,r)?s.concat(r):void 0,l=nc(t,i,a);if(fC(n,r,l),Fr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Bn(i)&&!wd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;nc(t,i),(!e||!e.scope_.parent_)&&rc(t,i)}}function rc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&hg(e,n)}function yj(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:hC(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=pg;n&&(i=[r],s=Ia);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var pg={get(t,e){if(e===Nt)return t;const n=ri(t);if(!ap(n,e))return _j(t,n,e);const r=n[e];return t.finalized_||!Bn(r)?r:r===Cf(t.base_,e)?(Tf(t),t.copy_[e]=fp(r,t)):r},has(t,e){return e in ri(t)},ownKeys(t){return Reflect.ownKeys(ri(t))},set(t,e,n){const r=pC(ri(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Cf(ri(t),e),s=i==null?void 0:i[Nt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(hj(n,i)&&(n!==void 0||ap(t.base_,e)))return!0;Tf(t),dp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Cf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Tf(t),dp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ri(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Jt(11)},getPrototypeOf(t){return $s(t.base_)},setPrototypeOf(){Jt(12)}},Ia={};Ca(pg,(t,e)=>{Ia[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Ia.deleteProperty=function(t,e){return Ia.set.call(this,t,e,void 0)};Ia.set=function(t,e,n){return pg.set.call(this,t[0],e,n,t[0])};function Cf(t,e){const n=t[Nt];return(n?ri(n):t)[e]}function _j(t,e,n){var i;const r=pC(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function pC(t,e){if(!(e in t))return;let n=$s(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=$s(n)}}function dp(t){t.modified_||(t.modified_=!0,t.parent_&&dp(t.parent_))}function Tf(t){t.copy_||(t.copy_=lp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var wj=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Jt(6),r!==void 0&&typeof r!="function"&&Jt(7);let i;if(Bn(e)){const s=j_(this),o=fp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?up(s):cp(s)}return L_(s,r),F_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===cC&&(i=void 0),this.autoFreeze_&&hg(i,!0),r){const s=[],o=[];xi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Jt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Bn(t)||Jt(8),Fr(t)&&(t=mC(t));const e=j_(this),n=fp(t,void 0);return n[Nt].isManual_=!0,cp(e),n}finishDraft(t,e){const n=t&&t[Nt];(!n||!n.isManual_)&&Jt(9);const{scope_:r}=n;return L_(r,e),F_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=xi("Patches").applyPatches_;return Fr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function fp(t,e){const n=yd(t)?xi("MapSet").proxyMap_(t,e):_d(t)?xi("MapSet").proxySet_(t,e):yj(t,e);return(e?e.scope_:hC()).drafts_.push(n),n}function mC(t){return Fr(t)||Jt(10,t),gC(t)}function gC(t){if(!Bn(t)||wd(t))return t;const e=t[Nt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=lp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=lp(t,!0);return Ca(n,(r,i)=>{fC(n,r,gC(i))}),e&&(e.finalized_=!1),n}var At=new wj,vC=At.produce;At.produceWithPatches.bind(At);At.setAutoFreeze.bind(At);At.setUseStrictShallowCopy.bind(At);At.applyPatches.bind(At);At.createDraft.bind(At);At.finishDraft.bind(At);function Ej(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function Sj(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function Cj(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var U_=t=>Array.isArray(t)?t:[t];function Tj(t){const e=Array.isArray(t[0])?t[0]:t;return Cj(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function Ij(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var bj=class{constructor(t){this.value=t}deref(){return this.value}},xj=typeof WeakRef<"u"?WeakRef:bj,kj=0,z_=1;function Rl(){return{s:kj,v:void 0,o:null,p:null}}function mg(t,e={}){let n=Rl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const g=arguments[f];if(typeof g=="function"||typeof g=="object"&&g!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const w=_.get(g);w===void 0?(a=Rl(),_.set(g,a)):a=w}else{let _=a.p;_===null&&(a.p=_=new Map);const w=_.get(g);w===void 0?(a=Rl(),_.set(g,a)):a=w}}const u=a;let d;if(a.s===z_?d=a.v:(d=t.apply(null,arguments),s++),u.s=z_,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new xj(d):d}return u.v=d,d}return o.clearCache=()=>{n=Rl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function yC(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),Ej(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=mg,argsMemoizeOptions:g=[],devModeChecks:_={}}=d,w=U_(f),h=U_(g),m=Tj(i),v=c(function(){return s++,u.apply(null,arguments)},...w),E=p(function(){o++;const T=Ij(m,arguments);return a=v.apply(null,T),a},...h);return Object.assign(E,{resultFunc:u,memoizedResultFunc:v,dependencies:m,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var Pj=yC(mg),Oj=Object.assign((t,e=Pj)=>{Sj(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>Oj});function _C(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var Rj=_C(),Nj=_C,Aj=(...t)=>{const e=yC(...t);return(...n)=>{const r=e(...n),i=(s,...o)=>r(Fr(s)?mC(s):s,...o);return Object.assign(i,r),i}};Aj(mg);var Dj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?tc:tc.apply(null,arguments)},Mj=t=>t&&typeof t.match=="function";function xr(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(an(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>dj(r)&&r.type===t,n}var wC=class xo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,xo.prototype)}static get[Symbol.species](){return xo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new xo(...e[0].concat(this)):new xo(...e.concat(this))}};function W_(t){return Bn(t)?vC(t,()=>{}):t}function B_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(an(10));const r=n.insert(e,t);return t.set(e,r),r}function Lj(t){return typeof t=="boolean"}var jj=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new wC;return n&&(Lj(n)?o.push(Rj):o.push(Nj(n.extraArgument))),o},Fj="RTK_autoBatch",EC=t=>e=>{setTimeout(e,t)},$j=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:EC(10),Uj=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?$j:t.type==="callback"?t.queueNotification:EC(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[Fj]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},zj=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new wC(t);return r&&i.push(Uj(typeof r=="object"?r:void 0)),i},Wj=!0;function Bj(t){const e=jj(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(dg(n))a=uC(n);else throw new Error(an(1));let l;typeof r=="function"?l=r(e):l=e();let u=tc;i&&(u=Dj({trace:!Wj,...typeof i=="object"&&i}));const d=cj(...l),c=zj(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return fg(a,s,p)}function SC(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(an(28));if(a in e)throw new Error(an(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function Vj(t){return typeof t=="function"}function Hj(t,e){let[n,r,i]=SC(e),s;if(Vj(t))s=()=>W_(t());else{const a=W_(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Fr(d)){const p=c(d,l);return p===void 0?d:p}else{if(Bn(d))return vC(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(an(9))}return f}}return d},a)}return o.getInitialState=s,o}var Gj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Kj=(t=21)=>{let e="",n=t;for(;n--;)e+=Gj[Math.random()*64|0];return e},qj=(t,e)=>Mj(t)?t.match(e):t(e);function Yj(...t){return e=>t.some(n=>qj(n,e))}var Qj=["name","message","stack","code"],If=class{constructor(t,e){Fd(this,"_type");this.payload=t,this.meta=e}},V_=class{constructor(t,e){Fd(this,"_type");this.payload=t,this.meta=e}},Xj=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of Qj)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Ed=(()=>{function t(e,n,r){const i=xr(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=xr(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=xr(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||Xj)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):Kj(),p=new AbortController;let g;function _(h){g=h,p.abort()}const w=async function(){var v,E;let h;try{let I=(v=r==null?void 0:r.condition)==null?void 0:v.call(r,l,{getState:d,extra:c});if(Zj(I)&&(I=await I),I===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((C,R)=>p.signal.addEventListener("abort",()=>R({name:"AbortError",message:g||"Aborted"})));u(s(f,l,(E=r==null?void 0:r.getPendingMeta)==null?void 0:E.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([T,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:_,rejectWithValue:(C,R)=>new If(C,R),fulfillWithValue:(C,R)=>new V_(C,R)})).then(C=>{if(C instanceof If)throw C;return C instanceof V_?i(C.payload,f,l,C.meta):i(C,f,l)})])}catch(I){h=I instanceof If?o(null,f,l,I.payload,I.meta):o(I,f,l)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(w,{abort:_,requestId:f,arg:l,unwrap(){return w.then(Jj)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:Yj(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function Jj(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Zj(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var eF=Symbol.for("rtk-slice-createasyncthunk");function tF(t,e){return`${t}/${e}`}function nF({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[eF];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(an(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(iF()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(w,h){const m=typeof w=="string"?w:w.type;if(!m)throw new Error(an(12));if(m in u.sliceCaseReducersByType)throw new Error(an(13));return u.sliceCaseReducersByType[m]=h,d},addMatcher(w,h){return u.sliceMatchers.push({matcher:w,reducer:h}),d},exposeAction(w,h){return u.actionCreators[w]=h,d},exposeCaseReducer(w,h){return u.sliceCaseReducersByName[w]=h,d}};l.forEach(w=>{const h=a[w],m={reducerName:w,type:tF(s,w),createNotation:typeof i.reducers=="function"};oF(h)?lF(m,h,d,e):sF(m,h,d)});function c(){const[w={},h=[],m=void 0]=typeof i.extraReducers=="function"?SC(i.extraReducers):[i.extraReducers],v={...w,...u.sliceCaseReducersByType};return Hj(i.initialState,E=>{for(let I in v)E.addCase(I,v[I]);for(let I of u.sliceMatchers)E.addMatcher(I.matcher,I.reducer);for(let I of h)E.addMatcher(I.matcher,I.reducer);m&&E.addDefaultCase(m)})}const f=w=>w,p=new WeakMap;let g;const _={name:s,reducerPath:o,reducer(w,h){return g||(g=c()),g(w,h)},actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState(){return g||(g=c()),g.getInitialState()},getSelectors(w=f){const h=B_(p,this,{insert:()=>new WeakMap});return B_(h,w,{insert:()=>{const m={};for(const[v,E]of Object.entries(i.selectors??{}))m[v]=rF(this,E,w,this!==_);return m}})},selectSlice(w){let h=w[this.reducerPath];return typeof h>"u"&&this!==_&&(h=this.getInitialState()),h},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(w,{reducerPath:h,...m}={}){const v=h??this.reducerPath;return w.inject({reducerPath:v,reducer:this.reducer},m),{...this,reducerPath:v}}};return _}}function rF(t,e,n,r){function i(s,...o){let a=n.call(t,s);return typeof a>"u"&&r&&(a=t.getInitialState()),e(a,...o)}return i.unwrapped=e,i}var gg=nF();function iF(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function sF({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!aF(r))throw new Error(an(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?xr(t,o):xr(t))}function oF(t){return t._reducerDefinitionType==="asyncThunk"}function aF(t){return t._reducerDefinitionType==="reducerWithPrepare"}function lF({type:t,reducerName:e},n,r,i){if(!i)throw new Error(an(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Nl,pending:a||Nl,rejected:l||Nl,settled:u||Nl})}function Nl(){}var vg="listenerMiddleware";xr(`${vg}/add`);xr(`${vg}/removeAll`);xr(`${vg}/remove`);function an(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var H_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw no(e)},no=function(t){return new Error("Firebase Database ("+CC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uF=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uF(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new cF;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const g=u<<6&192|c;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IC=function(t){const e=TC(t);return yg.encodeByteArray(e,!0)},ic=function(t){return IC(t).replace(/\./g,"")},sc=function(t){try{return yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(t){return bC(void 0,t)}function bC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fF(n)||(t[n]=bC(t[n],e[n]));return t}function fF(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=()=>hF().__FIREBASE_DEFAULTS__,mF=()=>{if(typeof process>"u"||typeof H_>"u")return;const t=H_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gF=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},_g=()=>{try{return pF()||mF()||gF()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xC=t=>{var e,n;return(n=(e=_g())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vF=t=>{const e=xC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kC=()=>{var t;return(t=_g())===null||t===void 0?void 0:t.config},PC=t=>{var e;return(e=_g())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yF(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function _F(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wF(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RC(){return CC.NODE_ADMIN===!0}function EF(){try{return typeof indexedDB=="object"}catch{return!1}}function SF(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CF="FirebaseError";class Kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CF,Object.setPrototypeOf(this,Kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TF(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kr(i,a,r)}}function TF(t,e){return t.replace(IF,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IF=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ba(sc(s[0])||""),n=ba(sc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},bF=function(t){const e=NC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xF=function(t){const e=NC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(G_(s)&&G_(o)){if(!ac(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function G_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PF(t,e){const n=new OF(t,e);return n.subscribe.bind(n)}class OF{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RF(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RF(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}function AC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t&&t._delegate?t._delegate:t}class ki{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MF(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DF(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DF(t){return t===ii?void 0:t}function MF(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AF(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const jF={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},FF=oe.INFO,$F={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},UF=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$F[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sg{constructor(e){this.name=e,this._logLevel=FF,this._logHandler=UF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jF[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const zF=(t,e)=>e.some(n=>t instanceof n);let K_,q_;function WF(){return K_||(K_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BF(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DC=new WeakMap,pp=new WeakMap,MC=new WeakMap,xf=new WeakMap,Cg=new WeakMap;function VF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&DC.set(n,t)}).catch(()=>{}),Cg.set(e,t),e}function HF(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GF(t){mp=t(mp)}function KF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kf(this),e,...n);return MC.set(r,e.sort?e.sort():[e]),kr(r)}:BF().includes(t)?function(...e){return t.apply(kf(this),e),kr(DC.get(this))}:function(...e){return kr(t.apply(kf(this),e))}}function qF(t){return typeof t=="function"?KF(t):(t instanceof IDBTransaction&&HF(t),zF(t,WF())?new Proxy(t,mp):t)}function kr(t){if(t instanceof IDBRequest)return VF(t);if(xf.has(t))return xf.get(t);const e=qF(t);return e!==t&&(xf.set(t,e),Cg.set(e,t)),e}const kf=t=>Cg.get(t);function YF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QF=["get","getKey","getAll","getAllKeys","count"],XF=["put","add","delete","clear"],Pf=new Map;function Y_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pf.get(e))return Pf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pf.set(e,s),s}GF(t=>({...t,get:(e,n,r)=>Y_(e,n)||t.get(e,n,r),has:(e,n)=>!!Y_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",Q_="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Sg("@firebase/app"),e2="@firebase/app-compat",t2="@firebase/analytics-compat",n2="@firebase/analytics",r2="@firebase/app-check-compat",i2="@firebase/app-check",s2="@firebase/auth",o2="@firebase/auth-compat",a2="@firebase/database",l2="@firebase/database-compat",u2="@firebase/functions",c2="@firebase/functions-compat",d2="@firebase/installations",f2="@firebase/installations-compat",h2="@firebase/messaging",p2="@firebase/messaging-compat",m2="@firebase/performance",g2="@firebase/performance-compat",v2="@firebase/remote-config",y2="@firebase/remote-config-compat",_2="@firebase/storage",w2="@firebase/storage-compat",E2="@firebase/firestore",S2="@firebase/firestore-compat",C2="firebase",T2="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="[DEFAULT]",I2={[gp]:"fire-core",[e2]:"fire-core-compat",[n2]:"fire-analytics",[t2]:"fire-analytics-compat",[i2]:"fire-app-check",[r2]:"fire-app-check-compat",[s2]:"fire-auth",[o2]:"fire-auth-compat",[a2]:"fire-rtdb",[l2]:"fire-rtdb-compat",[u2]:"fire-fn",[c2]:"fire-fn-compat",[d2]:"fire-iid",[f2]:"fire-iid-compat",[h2]:"fire-fcm",[p2]:"fire-fcm-compat",[m2]:"fire-perf",[g2]:"fire-perf-compat",[v2]:"fire-rc",[y2]:"fire-rc-compat",[_2]:"fire-gcs",[w2]:"fire-gcs-compat",[E2]:"fire-fst",[S2]:"fire-fst-compat","fire-js":"fire-js",[C2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,yp=new Map;function b2(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(yp.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,t);for(const n of lc.values())b2(n,t);return!0}function Tg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new Qa("app","Firebase",x2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=T2;function LC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=kC()),!n)throw Pr.create("no-options");const s=lc.get(i);if(s){if(ac(n,s.options)&&ac(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new LF(i);for(const l of yp.values())o.addComponent(l);const a=new k2(n,r,o);return lc.set(i,a),a}function jC(t=vp){const e=lc.get(t);if(!e&&t===vp&&kC())return LC();if(!e)throw Pr.create("no-app",{appName:t});return e}function Or(t,e,n){var r;let i=(r=I2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}zs(new ki(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="firebase-heartbeat-database",O2=1,xa="firebase-heartbeat-store";let Of=null;function FC(){return Of||(Of=YF(P2,O2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xa)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Of}async function R2(t){try{return await(await FC()).transaction(xa).objectStore(xa).get($C(t))}catch(e){if(e instanceof Kr)Pi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function X_(t,e){try{const r=(await FC()).transaction(xa,"readwrite");await r.objectStore(xa).put(e,$C(t)),await r.done}catch(n){if(n instanceof Kr)Pi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function $C(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=1024,A2=30*24*60*60*1e3;class D2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=J_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=A2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J_(),{heartbeatsToSend:r,unsentEntries:i}=M2(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function J_(){return new Date().toISOString().substring(0,10)}function M2(t,e=N2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Z_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EF()?SF().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await R2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Z_(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){zs(new ki("platform-logger",e=>new JF(e),"PRIVATE")),zs(new ki("heartbeat",e=>new D2(e),"PRIVATE")),Or(gp,Q_,t),Or(gp,Q_,"esm2017"),Or("fire-js","")}j2("");function Ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F2=UC,zC=new Qa("auth","Firebase",UC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Sg("@firebase/auth");function $2(t,...e){uc.logLevel<=oe.WARN&&uc.warn(`Auth (${io}): ${t}`,...e)}function nu(t,...e){uc.logLevel<=oe.ERROR&&uc.error(`Auth (${io}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw bg(t,...e)}function En(t,...e){return bg(t,...e)}function U2(t,e,n){const r=Object.assign(Object.assign({},F2()),{[e]:n});return new Qa("auth","Firebase",r).create(e,{appName:t.name})}function bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zC.create(t,...e)}function V(t,e,...n){if(!t)throw bg(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nu(e),new Error(e)}function Vn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function z2(){return e0()==="http:"||e0()==="https:"}function e0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z2()||_F()||"connection"in navigator)?navigator.onLine:!0}function B2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Eg()||OC()}get(){return W2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=new Xa(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return BC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WC.fetch()(VC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function BC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},V2),e);try{const i=new K2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw U2(t,d,u);cn(t,d)}}catch(i){if(i instanceof Kr)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function Ja(t,e,n,r,i={}){const s=await Xn(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xg(t.config,i):`${t.config.apiScheme}://${i}`}function G2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),H2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}function t0(t){return t!==void 0&&t.enterprise!==void 0}class q2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return G2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Y2(t,e){return Xn(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function X2(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function J2(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=kg(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(Rf(i.auth_time)),issuedAtTime:Vo(Rf(i.iat)),expirationTime:Vo(Rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rf(t){return Number(t)*1e3}function kg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nu("JWT malformed, contained fewer than 3 sections"),null;try{const i=sc(n);return i?JSON.parse(i):(nu("Failed to decode base64 JWT payload"),null)}catch(i){return nu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Z2(t){const e=kg(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kr&&e$(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function e$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ws(t,X2(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?i$(s.providerUserInfo):[],a=r$(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HC(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function n$(t){const e=dt(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r$(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function i$(t){return t.map(e=>{var{providerId:n}=e,r=Ig(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s$(t,e){const n=await BC(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o$(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await s$(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ka;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ka,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new t$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ws(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return J2(this,e)}reload(){return n$(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ws(this,Q2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:E,isAnonymous:I,providerData:T,stsTokenManager:C}=n;V(v&&C,e,"internal-error");const R=ka.fromJSON(this.name,C);V(typeof v=="string",e,"internal-error"),nr(c,e.name),nr(f,e.name),V(typeof E=="boolean",e,"internal-error"),V(typeof I=="boolean",e,"internal-error"),nr(p,e.name),nr(g,e.name),nr(_,e.name),nr(w,e.name),nr(h,e.name),nr(m,e.name);const F=new vi({uid:v,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:I,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:R,createdAt:h,lastLoginAt:m});return T&&Array.isArray(T)&&(F.providerData=T.map(L=>Object.assign({},L))),w&&(F._redirectEventId=w),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new ka;i.updateFromServerResponse(n);const s=new vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new Map;function Mn(t){Vn(t instanceof Function,"Expected a class definition");let e=n0.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,n0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GC.type="NONE";const r0=GC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ru(this.userKey,i.apiKey,s),this.fullPersistenceKey=ru("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Mn(r0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mn(r0);const o=ru(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=vi._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ws(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XC(e))return"Blackberry";if(JC(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||qC(e))&&!e.includes("edge/"))return"Chrome";if(QC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KC(t=it()){return/firefox\//i.test(t)}function Pg(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qC(t=it()){return/crios\//i.test(t)}function YC(t=it()){return/iemobile/i.test(t)}function QC(t=it()){return/android/i.test(t)}function XC(t=it()){return/blackberry/i.test(t)}function JC(t=it()){return/webos/i.test(t)}function Cd(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a$(t=it()){var e;return Cd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l$(){return wF()&&document.documentMode===10}function ZC(t=it()){return Cd(t)||QC(t)||JC(t)||XC(t)||/windows phone/i.test(t)||YC(t)}function u$(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e=[]){let n;switch(t){case"Browser":n=i0(it());break;case"Worker":n=`${i0(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d$(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f$=6;class h${constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f$,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s0(this),this.idTokenSubscription=new s0(this),this.beforeStateQueue=new c$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d$(this),n=new h$(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await o$(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return dt(t)}class s0{constructor(e){this.auth=e,this.observer=null,this.addObserver=PF(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",m$().appendChild(r)})}function g$(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const v$="https://www.google.com/recaptcha/enterprise.js?render=",y$="recaptcha-enterprise",_$="NO_RECAPTCHA";class w${constructor(e){this.type=y$,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Y2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new q2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;t0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&t0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tT(v$+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function o0(t,e,n,r=!1){const i=new w$(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await o0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await o0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E$(t,e){const n=Tg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ac(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function S$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C$(t,e,n){const r=zi(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nT(e),{host:o,port:a}=T$(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||I$()}function nT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function T$(t){const e=nT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:a0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:a0(o)}}}function a0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function b$(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x$(t,e){return Ja(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k$(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function P$(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Og{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wp(e,n,"signInWithPassword",x$);case"emailLink":return k$(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wp(e,r,"signUpPassword",b$);case"emailLink":return P$(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Ja(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$="http://localhost";class Oi extends Og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ig(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:O$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N$(t){const e=ko(Po(t)).link,n=e?ko(Po(e)).deep_link_id:null,r=ko(Po(t)).deep_link_id;return(r?ko(Po(r)).link:null)||r||n||e||t}class Rg{constructor(e){var n,r,i,s,o,a;const l=ko(Po(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=R$((i=l.mode)!==null&&i!==void 0?i:null);V(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=N$(e);try{return new Rg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rg.parseLink(n);return V(r,"argument-error"),Pa._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends rT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Za{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Za{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Za{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A$(t,e){return Ja(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vi._fromIdTokenResponse(e,r,i),o=l0(r);return new Ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=l0(r);return new Ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function l0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Kr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dc(e,n,r,i)}}function iT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,s,e,r):s})}async function D$(t,e,n=!1){const r=await Ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M$(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ws(t,iT(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=kg(s.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(t,e,n=!1){const r="signIn",i=await iT(t,r,e),s=await Ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function L$(t,e){return sT(zi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(t){const e=zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j$(t,e,n){const r=zi(t),o=await wp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",A$).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oT(t),l}),a=await Ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function F$(t,e,n){return L$(dt(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $$(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ws(r,$$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function U$(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function z$(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function W$(t){return dt(t).signOut()}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B$(){const t=it();return Pg(t)||Cd(t)}const V$=1e3,H$=10;class uT extends lT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B$()&&u$(),this.fallbackToPolling=ZC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);l$()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,H$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},V$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uT.type="LOCAL";const G$=uT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends lT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cT.type="SESSION";const dT=cT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await K$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ng("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function Y$(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function Q$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J$(){return fT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebaseLocalStorageDb",Z$=1,hc="firebaseLocalStorage",pT="fbase_key";class el{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Id(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function e3(){const t=indexedDB.deleteDatabase(hT);return new el(t).toPromise()}function Ep(){const t=indexedDB.open(hT,Z$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:pT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await e3(),e(await Ep()))})})}async function u0(t,e,n){const r=Id(t,!0).put({[pT]:e,value:n});return new el(r).toPromise()}async function t3(t,e){const n=Id(t,!1).get(e),r=await new el(n).toPromise();return r===void 0?null:r.value}function c0(t,e){const n=Id(t,!0).delete(e);return new el(n).toPromise()}const n3=800,r3=3;class mT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>r3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(J$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q$(),!this.activeServiceWorker)return;this.sender=new q$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ep();return await u0(e,fc,"1"),await c0(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>u0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>t3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>c0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Id(i,!1).getAll();return new el(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mT.type="LOCAL";const i3=mT;new Xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(t,e){return e?Mn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends Og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o3(t){return sT(t.auth,new Ag(t),t.bypassAuthState)}function a3(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),M$(n,new Ag(t),t.bypassAuthState)}async function l3(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),D$(n,new Ag(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o3;case"linkViaPopup":case"linkViaRedirect":return l3;case"reauthViaPopup":case"reauthViaRedirect":return a3;default:cn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3=new Xa(2e3,1e4);class ds extends gT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u3.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3="pendingRedirect",iu=new Map;class d3 extends gT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=iu.get(this.auth._key());if(!e){try{const r=await f3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}iu.set(this.auth._key(),e)}return this.bypassAuthState||iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f3(t,e){const n=m3(e),r=p3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function h3(t,e){iu.set(t._key(),e)}function p3(t){return Mn(t._redirectPersistence)}function m3(t){return ru(c3,t.config.apiKey,t.name)}async function g3(t,e,n=!1){const r=zi(t),i=s3(r,e),o=await new d3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3=10*60*1e3;class y3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v3&&this.cachedEventUids.clear(),this.cachedEventUids.has(d0(e))}saveEventToCache(e){this.cachedEventUids.add(d0(e)),this.lastProcessedEventTime=Date.now()}}function d0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S3=/^https?/;async function C3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w3(t);for(const n of e)try{if(T3(n))return}catch{}cn(t,"unauthorized-domain")}function T3(t){const e=_p(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!S3.test(n))return!1;if(E3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3=new Xa(3e4,6e4);function f0(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b3(t){return new Promise((e,n)=>{var r,i,s;function o(){f0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f0(),n(En(t,"network-request-failed"))},timeout:I3.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=g$("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},tT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw su=null,e})}let su=null;function x3(t){return su=su||b3(t),su}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3=new Xa(5e3,15e3),P3="__/auth/iframe",O3="emulator/auth/iframe",R3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A3(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xg(e,O3):`https://${t.config.authDomain}/${P3}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=N3.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function D3(t){const e=await x3(t),n=Sn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:A3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R3,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},k3.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L3=500,j3=600,F3="_blank",$3="http://localhost";class h0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U3(t,e,n,r=L3,i=j3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},M3),{width:r.toString(),height:i.toString(),top:s,left:o}),u=it().toLowerCase();n&&(a=qC(u)?F3:n),KC(u)&&(e=e||$3,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(a$(u)&&a!=="_self")return z3(e||"",a),new h0(null);const c=window.open(e||"",a,d);V(c,t,"popup-blocked");try{c.focus()}catch{}return new h0(c)}function z3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W3="__/auth/handler",B3="emulator/auth/handler",V3=encodeURIComponent("fac");async function p0(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof rT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Za){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${V3}=${encodeURIComponent(l)}`:"";return`${H3(t)}?${ro(a).slice(1)}${u}`}function H3({config:t}){return t.emulator?xg(t,B3):`https://${t.authDomain}/${W3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="webStorageSupport";class G3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dT,this._completeRedirectFn=g3,this._overrideRedirectResult=h3}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await p0(e,n,r,_p(),i);return U3(e,o,Ng())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await p0(e,n,r,_p(),i);return Y$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D3(e),r=new y3(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nf,{type:Nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nf];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZC()||Pg()||Cd()}}const K3=G3;var m0="@firebase/auth",g0="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Q3(t){zs(new ki("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eT(t)},u=new p$(r,i,s,l);return S$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new ki("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new q3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(m0,g0,Y3(t)),Or(m0,g0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=5*60,J3=PC("authIdTokenMaxAge")||X3;let v0=null;const Z3=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>J3)return;const i=n==null?void 0:n.token;v0!==i&&(v0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eU(t=jC()){const e=Tg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E$(t,{popupRedirectResolver:K3,persistence:[i3,G$,dT]}),r=PC("authTokenSyncURL");if(r){const s=Z3(r);z$(n,s,()=>s(n.currentUser)),U$(n,o=>s(o))}const i=xC("auth");return i&&C$(n,`http://${i}`),n}Q3("Browser");var tU="firebase",nU="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or(tU,nU,"app");var y0={};const _0="@firebase/database",w0="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yT="";function rU(t){yT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iU(e)}}catch{}return new sU},ci=_T("localStorage"),Sp=_T("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Sg("@firebase/database"),oU=function(){let t=1;return function(){return t++}}(),wT=function(t){const e=NF(t),n=new kF;n.update(e);const r=n.digest();return yg.encodeByteArray(r)},tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=tl.apply(null,r):typeof r=="object"?e+=Re(r):e+=r,e+=" "}return e};let yi=null,E0=!0;const aU=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ss.logLevel=oe.VERBOSE,yi=Ss.log.bind(Ss),e&&Sp.set("logging_enabled",!0)):typeof t=="function"?yi=t:(yi=null,Sp.remove("logging_enabled"))},tt=function(...t){if(E0===!0&&(E0=!1,yi===null&&Sp.get("logging_enabled")===!0&&aU(!0)),yi){const e=tl.apply(null,t);yi(e)}},nl=function(t){return function(...e){tt(t,...e)}},Cp=function(...t){const e="FIREBASE INTERNAL ERROR: "+tl(...t);Ss.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${tl(...t)}`;throw Ss.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+tl(...t);Ss.warn(e)},lU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},uU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ni="[MIN_NAME]",$r="[MAX_NAME]",oo=function(t,e){if(t===e)return 0;if(t===Ni||e===$r)return-1;if(e===Ni||t===$r)return 1;{const n=S0(t),r=S0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cU=function(t,e){return t===e?0:t<e?-1:1},yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},Mg=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Re(e[r]),n+=":",n+=Mg(t[e[r]]);return n+="}",n},ET=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ST=function(t){O(!Dg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},dU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const pU=new RegExp("^-?(0*)\\d{1,10}$"),mU=-2147483648,gU=2147483647,S0=function(t){if(pU.test(t)){const e=Number(t);if(e>=mU&&e<=gU)return e}return null},rl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},vU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ho=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="5",CT="v",TT="s",IT="r",bT="f",xT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kT="ls",PT="p",Tp="ac",OT="websocket",RT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ci.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ci.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function AT(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===OT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===RT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wU(t)&&(n.ns=t.namespace);const i=[];return yt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(){this.counters_={}}incrementCounter(e,n=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dF(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={},Df={};function jg(t){const e=t.toString();return Af[e]||(Af[e]=new EU),Af[e]}function SU(t,e){const n=t.toString();return Df[n]||(Df[n]=e()),Df[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&rl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="start",TU="close",IU="pLPCommand",bU="pRTLPCB",DT="id",MT="pw",LT="ser",xU="cb",kU="seg",PU="ts",OU="d",RU="dframe",jT=1870,FT=30,NU=jT-FT,AU=25e3,DU=3e4;class fs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=nl(e),this.stats_=jg(n),this.urlFn=l=>(this.appCheckToken&&(l[Tp]=this.appCheckToken),AT(n,RT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new CU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DU)),uU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fg((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===C0)this.id=a,this.password=l;else if(o===TU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[C0]="t",r[LT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[CT]=Lg,this.transportSessionId&&(r[TT]=this.transportSessionId),this.lastSessionId&&(r[kT]=this.lastSessionId),this.applicationId&&(r[PT]=this.applicationId),this.appCheckToken&&(r[Tp]=this.appCheckToken),typeof location<"u"&&location.hostname&&xT.test(location.hostname)&&(r[IT]=bT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fs.forceAllow_=!0}static forceDisallow(){fs.forceDisallow_=!0}static isAvailable(){return fs.forceAllow_?!0:!fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dU()&&!fU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=IC(n),i=ET(r,NU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[RU]="t",r[DT]=e,r[MT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=oU(),window[IU+this.uniqueCallbackIdentifier]=e,window[bU+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){tt("frame writing exception"),a.stack&&tt(a.stack),tt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||tt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[DT]=this.myID,e[MT]=this.myPW,e[LT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FT+r.length<=jT;){const o=this.pendingSegs.shift();r=r+"&"+kU+i+"="+o.seg+"&"+PU+i+"="+o.ts+"&"+OU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(AU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MU=16384,LU=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=nl(this.connId),this.stats_=jg(n),this.connURL=Zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[CT]=Lg,typeof location<"u"&&location.hostname&&xT.test(location.hostname)&&(o[IT]=bT),n&&(o[TT]=n),r&&(o[kT]=r),i&&(o[Tp]=i),s&&(o[PT]=s),AT(e,OT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ci.set("previous_websocket_failure",!0);try{let r;RC(),this.mySock=new pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&pc!==null&&!Zt.forceDisallow_}static previouslyFailed(){return ci.isInMemoryStorage||ci.get("previous_websocket_failure")===!0}markConnectionHealthy(){ci.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ET(n,MU);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fs,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Zt&&Zt.isAvailable();let r=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const i=this.transports_=[];for(const s of Oa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Oa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jU=6e4,FU=5e3,$U=10*1024,UU=100*1024,Mf="t",T0="d",zU="s",I0="r",WU="e",b0="o",x0="a",k0="n",P0="p",BU="h";class VU{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=nl("c:"+this.id+":"),this.transportManager_=new Oa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ho(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$U?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mf in e){const n=e[Mf];n===x0?this.upgradeIfSecondaryHealthy_():n===I0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===b0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:P0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:x0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:k0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=yo("t",e),r=yo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=yo(Mf,e);if(T0 in e){const r=e[T0];if(n===BU){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===k0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===zU?this.onConnectionShutdown_(r):n===I0?this.onReset_(r):n===WU?Cp("Server Error: "+r):n===b0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lg!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ho(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ho(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:P0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ci.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends UT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=32,R0=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new ae("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ur(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function zT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function WT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function BT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=J(t),r=J(e);if(n===null)return e;if(n===r)return at(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function VT(t,e){if(Ur(t)!==Ur(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function en(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ur(t)>Ur(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class GU{constructor(e,n){this.errorPrefix_=n,this.parts_=WT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sd(this.parts_[r]);HT(this)}}function KU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sd(e),HT(t)}function qU(t){const e=t.parts_.pop();t.byteLength_-=Sd(e),t.parts_.length>0&&(t.byteLength_-=1)}function HT(t){if(t.byteLength_>R0)throw new Error(t.errorPrefix_+"has a key path longer than "+R0+" bytes ("+t.byteLength_+").");if(t.parts_.length>O0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O0+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g extends UT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $g}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=1e3,YU=60*5*1e3,N0=30*1e3,QU=1.3,XU=3e4,JU="server_kill",A0=3;class Fn extends $T{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_o,this.maxReconnectDelay_=YU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!RC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$g.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Re(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new wg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&In(e,"w")){const r=Us(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xF(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=N0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bF(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cp("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XU&&(this.reconnectDelay_=_o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?tt("getToken() completed but was canceled"):(tt("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new VU(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ot(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(JU)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ot(c),l())}}}interrupt(e){tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hp(this.interruptReasons_)&&(this.reconnectDelay_=_o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Mg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=A0&&(this.reconnectDelay_=N0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=A0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yT.replace(/\./g,"-")]=1,Eg()?e["framework.cordova"]=1:OC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return hp(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Y(Ni,e),i=new Y(Ni,n);return this.compare(r,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl;class GT extends bd{static get __EMPTY_NODE(){return Dl}static set __EMPTY_NODE(e){Dl=e}compare(e,n){return oo(e.name,n.name)}isDefinedOn(e){throw no("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y($r,Dl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Dl)}toString(){return".key"}}const Rr=new GT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??pt.EMPTY_NODE,this.right=s??pt.EMPTY_NODE}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class ZU{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ml(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new ZU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t,e){return oo(t.name,e.name)}function Ug(t,e){return oo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ip;function t4(t){Ip=t}const KT=function(t){return typeof t=="number"?"number:"+ST(t):"string:"+t},qT=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else O(t===Ip||t.isEmpty(),"priority of unexpected type.");O(t===Ip||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D0;class je{constructor(e,n=je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qT(this.priorityNode_)}static set __childrenNodeConstructor(e){D0=e}static get __childrenNodeConstructor(){return D0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:J(e)===".priority"?this.priorityNode_:je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=J(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+KT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ST(this.value_):e+=this.value_,this.lazyHash_=wT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof je.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=je.VALUE_TYPE_ORDER.indexOf(n),s=je.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YT,QT;function n4(t){YT=t}function r4(t){QT=t}class i4 extends bd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y($r,new je("[PRIORITY-POST]",QT))}makePost(e,n){const r=YT(e);return new Y(n,new je("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new i4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=Math.log(2);class o4{constructor(e){const n=s=>parseInt(Math.log(s)/s4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Ue(f,c.node,Ue.BLACK,null,null);{const p=parseInt(d/2,10)+l,g=i(l,p),_=i(p+1,u);return c=t[p],f=n?n(c):c,new Ue(f,c.node,Ue.BLACK,g,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(g,_){const w=c-g,h=c;c-=g;const m=i(w+1,h),v=t[w],E=n?n(v):v;p(new Ue(E,v.node,_,null,m))},p=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));_?f(w,Ue.BLACK):(f(w,Ue.BLACK),f(w,Ue.RED))}return d},o=new o4(t.length),a=s(o);return new pt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;const qi={};class Ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(qi&&we,"ChildrenNode.ts has not been loaded"),Lf=Lf||new Ln({".priority":qi},{".priority":we}),Lf}get(e){const n=Us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Y.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=gc(r,e.getCompare()):a=qi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ln(d,u)}addToIndexes(e,n){const r=oc(this.indexes_,(i,s)=>{const o=Us(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===qi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),gc(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=oc(this.indexes_,i=>{if(i===qi)return i;{const s=n.get(e.name);return s?i.remove(new Y(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qT(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wo||(wo=new B(new pt(Ug),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wo}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wo:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Y(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wo:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=J(e);if(r===null)return n;{O(J(e)!==".priority"||Ur(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+KT(this.getPriority().val())+":"),this.forEachChild(we,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Y(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===il?-1:0}withIndex(e){if(e===Rr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(we),i=n.getIterator(we);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class a4 extends B{constructor(){super(new pt(Ug),B.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const il=new a4;Object.defineProperties(Y,{MIN:{value:new Y(Ni,B.EMPTY_NODE)},MAX:{value:new Y($r,il)}});GT.__EMPTY_NODE=B.EMPTY_NODE;je.__childrenNodeConstructor=B;t4(il);r4(il);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=!0;function Ke(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new je(n,Ke(e))}if(!(t instanceof Array)&&l4){const n=[];let r=!1;if(yt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=gc(n,e4,o=>o.name,Ug);if(r){const o=gc(n,we.getCompare());return new B(s,Ke(e),new Ln({".priority":o},{".priority":we}))}else return new B(s,Ke(e),Ln.Default)}else{let n=B.EMPTY_NODE;return yt(t,(r,i)=>{if(In(t,r)&&r.substring(0,1)!=="."){const s=Ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ke(e))}}n4(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends bd{constructor(e){super(),this.indexPath_=e,O(!Q(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?oo(e.name,n.name):s}makePost(e,n){const r=Ke(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,il);return new Y($r,e)}toString(){return WT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4 extends bd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?oo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const r=Ke(e);return new Y(n,r)}toString(){return".value"}}const JT=new u4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){return{type:"value",snapshotNode:t}}function Bs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ra(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Na(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function c4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ra(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Bs(n,r)):o.trackChildChange(Na(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ra(i,s))}),n.isLeafNode()||n.forEachChild(we,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Na(i,s,o))}else r.trackChildChange(Bs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.indexedFilter_=new zg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Aa.getStartPost_(e),this.endPost_=Aa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Y(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,a)=>{s.matches(new Y(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Y(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new Y(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Na(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ra(n,c));const _=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Bs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ra(u.name,u.node)),s.trackChildChange(Bs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ni}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new Wg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function f4(t){return t.loadsAllData()?new zg(t.getIndex()):t.hasLimit()?new d4(t):new Aa(t)}function h4(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function p4(t,e){const n=t.copy();return n.index_=e,n}function M0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===we?n="$priority":t.index_===JT?n="$value":t.index_===Rr?n="$key":(O(t.index_ instanceof XT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Re(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Re(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Re(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function L0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends $T{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=nl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vc.getListenId_(e,r),a={};this.listens_[o]=a;const l=M0(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Us(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=M0(e._queryParams),r=e._path.toString(),i=new wg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ba(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return{value:null,children:new Map}}function eI(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=J(e);t.children.has(r)||t.children.set(r,yc());const i=t.children.get(r);e=ue(e),eI(i,e,n)}}function bp(t,e,n){t.value!==null?n(e,t.value):g4(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);bp(i,s,n)})}function g4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=10*1e3,y4=30*1e3,_4=5*60*1e3;class w4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new v4(e);const r=j0+(y4-j0)*Math.random();Ho(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yt(e,(i,s)=>{s>0&&In(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ho(this.reportStats_.bind(this),Math.floor(Math.random()*2*_4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function tI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=tn.ACK_USER_WRITE,this.source=tI()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new _c(ee(),n,this.revert)}}else return O(J(this.path)===e,"operationForChild called for unrelated child."),new _c(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.source=e,this.path=n,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Da(this.source,ee()):new Da(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=tn.OVERWRITE}operationForChild(e){return Q(this.path)?new Ai(this.source,ee(),this.snap.getImmediateChild(e)):new Ai(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=tn.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Ai(this.source,ee(),n.value):new Ma(this.source,ee(),n)}else return O(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ma(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function S4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(c4(o.childName,o.snapshotNode))}),Eo(t,i,"child_removed",e,r,n),Eo(t,i,"child_added",e,r,n),Eo(t,i,"child_moved",s,r,n),Eo(t,i,"child_changed",e,r,n),Eo(t,i,"value",e,r,n),i}function Eo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>T4(t,a,l)),o.forEach(a=>{const l=C4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function C4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function T4(t,e,n){if(e.childName==null||n.childName==null)throw no("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){return{eventCache:t,serverCache:e}}function Go(t,e,n,r){return xd(new zr(e,n,r),t.serverCache)}function nI(t,e,n,r){return xd(t.eventCache,new zr(e,n,r))}function wc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf;const I4=()=>(jf||(jf=new pt(cU)),jf);class me{constructor(e,n=I4()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return yt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Q(e))return null;{const r=J(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Ne(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=J(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new me(null)}}set(e,n){if(Q(e))return new me(n,this.children);{const r=J(e),s=(this.children.get(r)||new me(null)).set(ue(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=J(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=J(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(Q(e))return n;{const r=J(e),s=(this.children.get(r)||new me(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=J(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=J(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Ne(n,i),r):new me(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new me(null))}}function Ko(t,e,n){if(Q(e))return new ln(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=at(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function F0(t,e,n){let r=t;return yt(n,(i,s)=>{r=Ko(r,Ne(e,i),s)}),r}function $0(t,e){if(Q(e))return ln.empty();{const n=t.writeTree_.setTree(e,new me(null));return new ln(n)}}function xp(t,e){return Wi(t,e)!=null}function Wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function U0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(r,i)=>{e.push(new Y(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Y(r,i.value))}),e}function Nr(t,e){if(Q(e))return t;{const n=Wi(t,e);return n!=null?new ln(new me(n)):new ln(t.writeTree_.subtree(e))}}function kp(t){return t.writeTree_.isEmpty()}function Vs(t,e){return rI(ee(),t.writeTree_,e)}function rI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rI(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){return aI(e,t)}function b4(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ko(t.visibleWrites,e,n)),t.lastWriteId=r}function x4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function k4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&P4(a,r.path)?i=!1:en(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return O4(t),!0;if(r.snap)t.visibleWrites=$0(t.visibleWrites,r.path);else{const a=r.children;yt(a,l=>{t.visibleWrites=$0(t.visibleWrites,Ne(r.path,l))})}return!0}else return!1}function P4(t,e){if(t.snap)return en(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&en(Ne(t.path,n),e))return!0;return!1}function O4(t){t.visibleWrites=iI(t.allWrites,R4,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function R4(t){return t.visible}function iI(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)en(n,o)?(a=at(n,o),r=Ko(r,a,s.snap)):en(o,n)&&(a=at(o,n),r=Ko(r,ee(),s.snap.getChild(a)));else if(s.children){if(en(n,o))a=at(n,o),r=F0(r,a,s.children);else if(en(o,n))if(a=at(o,n),Q(a))r=F0(r,ee(),s.children);else{const l=Us(s.children,J(a));if(l){const u=l.getChild(ue(a));r=Ko(r,ee(),u)}}}else throw no("WriteRecord should have .snap or .children")}}return r}function sI(t,e,n,r,i){if(!r&&!i){const s=Wi(t.visibleWrites,e);if(s!=null)return s;{const o=Nr(t.visibleWrites,e);if(kp(o))return n;if(n==null&&!xp(o,ee()))return null;{const a=n||B.EMPTY_NODE;return Vs(o,a)}}}else{const s=Nr(t.visibleWrites,e);if(!i&&kp(s))return n;if(!i&&n==null&&!xp(s,ee()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(en(u.path,e)||en(e,u.path))},a=iI(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Vs(a,l)}}}function N4(t,e,n){let r=B.EMPTY_NODE;const i=Wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(we,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nr(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=Vs(Nr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),U0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nr(t.visibleWrites,e);return U0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function A4(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(xp(t.visibleWrites,s))return null;{const o=Nr(t.visibleWrites,s);return kp(o)?i.getChild(n):Vs(o,i.getChild(n))}}function D4(t,e,n,r){const i=Ne(e,n),s=Wi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,i);return Vs(o,r.getNode().getImmediateChild(n))}else return null}function M4(t,e){return Wi(t.visibleWrites,e)}function L4(t,e,n,r,i,s,o){let a;const l=Nr(t.visibleWrites,e),u=Wi(l,ee());if(u!=null)a=u;else if(n!=null)a=Vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function j4(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function Ec(t,e,n,r){return sI(t.writeTree,t.treePath,e,n,r)}function Hg(t,e){return N4(t.writeTree,t.treePath,e)}function z0(t,e,n,r){return A4(t.writeTree,t.treePath,e,n,r)}function Sc(t,e){return M4(t.writeTree,Ne(t.treePath,e))}function F4(t,e,n,r,i,s){return L4(t.writeTree,t.treePath,e,n,r,i,s)}function Gg(t,e,n){return D4(t.writeTree,t.treePath,e,n)}function oI(t,e){return aI(Ne(t.treePath,e),t.writeTree)}function aI(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Na(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ra(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Bs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Na(r,e.snapshotNode,i.oldSnap));else throw no("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const lI=new U4;class Kg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Di(this.viewCache_),s=F4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z4(t){return{filter:t}}function W4(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function B4(t,e,n,r,i){const s=new $4;let o,a;if(n.type===tn.OVERWRITE){const u=n;u.source.fromUser?o=Pp(t,e,u.path,u.snap,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=Cc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===tn.MERGE){const u=n;u.source.fromUser?o=H4(t,e,u.path,u.children,r,i,s):(O(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Op(t,e,u.path,u.children,r,i,a,s))}else if(n.type===tn.ACK_USER_WRITE){const u=n;u.revert?o=q4(t,e,u.path,r,i,s):o=G4(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===tn.LISTEN_COMPLETE)o=K4(t,e,n.path,r,s);else throw no("Unknown operation type: "+n.type);const l=s.getChanges();return V4(e,o,l),{viewCache:o,changes:l}}function V4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=wc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ZT(wc(e)))}}function uI(t,e,n,r,i,s){const o=e.eventCache;if(Sc(r,n)!=null)return e;{let a,l;if(Q(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Di(e),d=u instanceof B?u:B.EMPTY_NODE,c=Hg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ec(r,Di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=J(n);if(u===".priority"){O(Ur(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=z0(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ue(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=z0(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Gg(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Go(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Cc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=J(n);if(!l.isCompleteForPath(n)&&Ur(n)>1)return e;const g=ue(n),w=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=d.updatePriority(l.getNode(),w):u=d.updateChild(l.getNode(),p,w,g,lI,null)}const c=nI(e,u,l.isFullyInitialized()||Q(n),d.filtersNodes()),f=new Kg(i,c,s);return uI(t,c,n,i,f,a)}function Pp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Kg(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Go(e,u,!0,t.filter.filtersNodes());else{const c=J(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Go(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ue(n),p=a.getNode().getImmediateChild(c);let g;if(Q(f))g=r;else{const _=d.getCompleteChild(c);_!=null?zT(f)===".priority"&&_.getChild(BT(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=B.EMPTY_NODE}if(p.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),c,g,f,d,o);l=Go(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function W0(t,e){return t.eventCache.isCompleteForChild(e)}function H4(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Ne(n,l);W0(e,J(d))&&(a=Pp(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Ne(n,l);W0(e,J(d))||(a=Pp(t,a,d,u,i,s,o))}),a}function B0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Op(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Q(n)?u=r:u=new me(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),g=B0(t,p,f);l=Cc(t,l,new ae(c),g,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const g=e.serverCache.getNode().getImmediateChild(c),_=B0(t,g,f);l=Cc(t,l,new ae(c),_,i,s,o,a)}}),l}function G4(t,e,n,r,i,s,o){if(Sc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Q(n)){let u=new me(null);return l.getNode().forEachChild(Rr,(d,c)=>{u=u.set(new ae(d),c)}),Op(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((d,c)=>{const f=Ne(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Op(t,e,n,u,i,s,a,o)}}function K4(t,e,n,r,i){const s=e.serverCache,o=nI(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return uI(t,o,n,r,lI,i)}function q4(t,e,n,r,i,s){let o;if(Sc(r,n)!=null)return e;{const a=new Kg(r,e,i),l=e.eventCache.getNode();let u;if(Q(n)||J(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ec(r,Di(e));else{const c=e.serverCache.getNode();O(c instanceof B,"serverChildren would be complete if leaf node"),d=Hg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=J(n);let c=Gg(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ue(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,B.EMPTY_NODE,ue(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ec(r,Di(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Sc(r,ee())!=null,Go(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zg(r.getIndex()),s=f4(r);this.processor_=z4(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),d=new zr(l,o.isFullyInitialized(),i.filtersNodes()),c=new zr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=xd(c,d),this.eventGenerator_=new E4(this.query_)}get query(){return this.query_}}function Q4(t){return t.viewCache_.serverCache.getNode()}function X4(t){return wc(t.viewCache_)}function J4(t,e){const n=Di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function V0(t){return t.eventRegistrations_.length===0}function Z4(t,e){t.eventRegistrations_.push(e)}function H0(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function G0(t,e,n,r){e.type===tn.MERGE&&e.source.queryId!==null&&(O(Di(t.viewCache_),"We should always have a full cache before handling merges"),O(wc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=B4(t.processor_,i,e,n,r);return W4(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,cI(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ez(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{r.push(Bs(s,o))}),n.isFullyInitialized()&&r.push(ZT(n.getNode())),cI(t,r,n.getNode(),e)}function cI(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return S4(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;class dI{constructor(){this.views=new Map}}function tz(t){O(!Tc,"__referenceConstructor has already been defined"),Tc=t}function nz(){return O(Tc,"Reference.ts has not been loaded"),Tc}function rz(t){return t.views.size===0}function qg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),G0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(G0(o,e,n,r));return s}}function fI(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ec(n,i?r:null),l=!1;a?l=!0:r instanceof B?(a=Hg(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=xd(new zr(a,l,!1),new zr(r,i,!1));return new Y4(e,u)}return o}function iz(t,e,n,r,i,s){const o=fI(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Z4(o,n),ez(o,n)}function sz(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Wr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(H0(u,n,r)),V0(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(H0(l,n,r)),V0(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wr(t)&&s.push(new(nz())(e._repo,e._path)),{removed:s,events:o}}function hI(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ar(t,e){let n=null;for(const r of t.views.values())n=n||J4(r,e);return n}function pI(t,e){if(e._queryParams.loadsAllData())return Pd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function mI(t,e){return pI(t,e)!=null}function Wr(t){return Pd(t)!=null}function Pd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;function oz(t){O(!Ic,"__referenceConstructor has already been defined"),Ic=t}function az(){return O(Ic,"Reference.ts has not been loaded"),Ic}let lz=1;class K0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=j4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uz(t,e,n,r,i){return b4(t.pendingWriteTree_,e,n,r,i),i?ol(t,new Ai(tI(),e,n)):[]}function hs(t,e,n=!1){const r=x4(t.pendingWriteTree_,e);if(k4(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ee(),!0):yt(r.children,o=>{s=s.set(new ae(o),!0)}),ol(t,new _c(r.path,s,n))}else return[]}function sl(t,e,n){return ol(t,new Ai(Bg(),e,n))}function cz(t,e,n){const r=me.fromObject(n);return ol(t,new Ma(Bg(),e,r))}function dz(t,e){return ol(t,new Da(Bg(),e))}function fz(t,e,n){const r=Yg(t,n);if(r){const i=Qg(r),s=i.path,o=i.queryId,a=at(s,e),l=new Da(Vg(o),a);return Xg(t,s,l)}else return[]}function gI(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||mI(o,e))){const l=sz(o,e,n,r);rz(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>Wr(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=gz(f);for(let g=0;g<p.length;++g){const _=p[g],w=_.query,h=EI(t,_);t.listenProvider_.startListening(qo(w),La(t,w),h.hashFn,h.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(qo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Od(f));t.listenProvider_.stopListening(qo(f),p)}))}vz(t,u)}return a}function vI(t,e,n,r){const i=Yg(t,r);if(i!=null){const s=Qg(i),o=s.path,a=s.queryId,l=at(o,e),u=new Ai(Vg(a),l,n);return Xg(t,o,u)}else return[]}function hz(t,e,n,r){const i=Yg(t,r);if(i){const s=Qg(i),o=s.path,a=s.queryId,l=at(o,e),u=me.fromObject(n),d=new Ma(Vg(a),l,u);return Xg(t,o,d)}else return[]}function pz(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=at(f,i);s=s||Ar(p,g),o=o||Wr(p)});let a=t.syncPointTree_.get(i);a?(o=o||Wr(a),s=s||Ar(a,ee())):(a=new dI,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=Ar(g,ee());_&&(s=s.updateImmediateChild(p,_))}));const u=mI(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Od(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=yz();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=kd(t.pendingWriteTree_,i);let c=iz(a,e,n,d,s,l);if(!u&&!o&&!r){const f=pI(a,e);c=c.concat(_z(t,e,f))}return c}function yI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),u=Ar(a,l);if(u)return u});return sI(i,e,s,n,!0)}function mz(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=at(u,n);r=r||Ar(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Ar(i,ee()):(i=new dI,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new zr(r,!0,!1):null,a=kd(t.pendingWriteTree_,e._path),l=fI(i,e,a,s?o.getNode():B.EMPTY_NODE,s);return X4(l)}function ol(t,e){return _I(e,t.syncPointTree_,null,kd(t.pendingWriteTree_,ee()))}function _I(t,e,n,r){if(Q(t.path))return wI(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=Ar(i,ee()));let s=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=oI(r,o);s=s.concat(_I(a,l,u,d))}return i&&(s=s.concat(qg(i,t,r,n))),s}}function wI(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=Ar(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=oI(r,o),d=t.operationForChild(o);d&&(s=s.concat(wI(d,a,l,u)))}),i&&(s=s.concat(qg(i,t,r,n))),s}function EI(t,e){const n=e.query,r=La(t,n);return{hashFn:()=>(Q4(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?fz(t,n._path,r):dz(t,n._path);{const s=hU(i,n);return gI(t,n,null,s)}}}}function La(t,e){const n=Od(e);return t.queryToTagMap.get(n)}function Od(t){return t._path.toString()+"$"+t._queryIdentifier}function Yg(t,e){return t.tagToQueryMap.get(e)}function Qg(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function Xg(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=kd(t.pendingWriteTree_,e);return qg(r,n,i,null)}function gz(t){return t.fold((e,n,r)=>{if(n&&Wr(n))return[Pd(n)];{let i=[];return n&&(i=hI(n)),yt(r,(s,o)=>{i=i.concat(o)}),i}})}function qo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(az())(t._repo,t._path):t}function vz(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Od(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function yz(){return lz++}function _z(t,e,n){const r=e._path,i=La(t,e),s=EI(t,n),o=t.listenProvider_.startListening(qo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!Q(u)&&d&&Wr(d))return[Pd(d).query];{let f=[];return d&&(f=f.concat(hI(d).map(p=>p.query))),yt(c,(p,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(qo(d),La(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jg(n)}node(){return this.node_}}class Zg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Zg(this.syncTree_,n)}node(){return yI(this.syncTree_,this.path_)}}const wz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},q0=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ez(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Sz(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ez=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},Sz=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Cz=function(t,e,n,r){return ev(e,new Zg(n,t),r)},Tz=function(t,e,n){return ev(t,new Jg(e),n)};function ev(t,e,n){const r=t.getPriority().val(),i=q0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=q0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new je(a,Ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new je(i))),o.forEachChild(we,(a,l)=>{const u=ev(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nv(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=J(n);for(;i!==null;){const s=Us(r.node.children,i)||{children:{},childCount:0};r=new tv(i,r,s),n=ue(n),i=J(n)}return r}function ao(t){return t.node.value}function SI(t,e){t.node.value=e,Rp(t)}function CI(t){return t.node.childCount>0}function Iz(t){return ao(t)===void 0&&!CI(t)}function Rd(t,e){yt(t.node.children,(n,r)=>{e(new tv(n,t,r))})}function TI(t,e,n,r){n&&!r&&e(t),Rd(t,i=>{TI(i,e,!0,r)}),n&&r&&e(t)}function bz(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function al(t){return new ae(t.parent===null?t.name:al(t.parent)+"/"+t.name)}function Rp(t){t.parent!==null&&xz(t.parent,t.name,t)}function xz(t,e,n){const r=Iz(n),i=In(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Rp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kz=/[\[\].#$\/\u0000-\u001F\u007F]/,Pz=/[\[\].#$\u0000-\u001F\u007F]/,Ff=10*1024*1024,II=function(t){return typeof t=="string"&&t.length!==0&&!kz.test(t)},bI=function(t){return typeof t=="string"&&t.length!==0&&!Pz.test(t)},Oz=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bI(t)},Y0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Dg(t)||t&&typeof t=="object"&&In(t,".sv")},xI=function(t,e,n){const r=n instanceof ae?new GU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(r));if(typeof e=="function")throw new Error(t+"contains a function "+si(r)+" with contents = "+e.toString());if(Dg(e))throw new Error(t+"contains "+e.toString()+" "+si(r));if(typeof e=="string"&&e.length>Ff/3&&Sd(e)>Ff)throw new Error(t+"contains a string greater than "+Ff+" utf8 bytes "+si(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!II(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);KU(r,o),xI(t,a,r),qU(r)}),i&&s)throw new Error(t+' contains ".value" child '+si(r)+" in addition to actual children.")}},kI=function(t,e,n,r){if(!(r&&n===void 0)&&!bI(n))throw new Error(AC(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rz=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kI(t,e,n,r)},Nz=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!II(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Oz(n))throw new Error(AC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Az{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dz(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!VT(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yr(t,e,n){Dz(t,n),Mz(t,r=>en(r,e)||en(e,r))}function Mz(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Lz(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Lz(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yi&&tt("event: "+n.toString()),rl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz="repo_interrupt",Fz=25;class $z{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Az,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yc(),this.transactionQueueTree_=new tv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uz(t,e,n){if(t.stats_=jg(t.repoInfo_),t.forceRestClient_||vU())t.server_=new vc(t.repoInfo_,(r,i,s,o)=>{Q0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>X0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{Q0(t,r,i,s,o)},r=>{X0(t,r)},r=>{Wz(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=SU(t.repoInfo_,()=>new w4(t.stats_,t.server_)),t.infoData_=new m4,t.infoSyncTree_=new K0({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=sl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rv(t,"connected",!1),t.serverSyncTree_=new K0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Yr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function zz(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function PI(t){return wz({timestamp:zz(t)})}function Q0(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=oc(n,u=>Ke(u));o=hz(t.serverSyncTree_,s,l,i)}else{const l=Ke(n);o=vI(t.serverSyncTree_,s,l,i)}else if(r){const l=oc(n,u=>Ke(u));o=cz(t.serverSyncTree_,s,l)}else{const l=Ke(n);o=sl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ov(t,s)),Yr(t.eventQueue_,a,o)}function X0(t,e){rv(t,"connected",e),e===!1&&Hz(t)}function Wz(t,e){yt(e,(n,r)=>{rv(t,n,r)})}function rv(t,e,n){const r=new ae("/.info/"+e),i=Ke(n);t.infoData_.updateSnapshot(r,i);const s=sl(t.infoSyncTree_,r,i);Yr(t.eventQueue_,r,s)}function Bz(t){return t.nextWriteId_++}function Vz(t,e,n){const r=mz(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ke(i).withIndex(e._queryParams.getIndex());pz(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=sl(t.serverSyncTree_,e._path,s);else{const a=La(t.serverSyncTree_,e);o=vI(t.serverSyncTree_,e._path,s,a)}return Yr(t.eventQueue_,e._path,o),gI(t.serverSyncTree_,e,n,null,!0),s},i=>(iv(t,"get for query "+Re(e)+" failed: "+i),Promise.reject(new Error(i))))}function Hz(t){iv(t,"onDisconnectEvents");const e=PI(t),n=yc();bp(t.onDisconnect_,ee(),(i,s)=>{const o=Cz(i,s,t.serverSyncTree_,e);eI(n,i,o)});let r=[];bp(n,ee(),(i,s)=>{r=r.concat(sl(t.serverSyncTree_,i,s));const o=Yz(t,i);ov(t,o)}),t.onDisconnect_=yc(),Yr(t.eventQueue_,ee(),r)}function Gz(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jz)}function iv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),tt(n,...e)}function OI(t,e,n){return yI(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function sv(t,e=t.transactionQueueTree_){if(e||Nd(t,e),ao(e)){const n=NI(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Kz(t,al(e),n)}else CI(e)&&Rd(e,n=>{sv(t,n)})}function Kz(t,e,n){const r=n.map(u=>u.currentWriteId),i=OI(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];O(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=at(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{iv(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(hs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Nd(t,nv(t.transactionQueueTree_,e)),sv(t,t.transactionQueueTree_),Yr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)rl(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ot("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ov(t,e)}},o)}function ov(t,e){const n=RI(t,e),r=al(n),i=NI(t,n);return qz(t,i,r),r}function qz(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=at(n,l.path);let d=!1,c;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(hs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Fz)d=!0,c="maxretry",i=i.concat(hs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=OI(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){xI("transaction failed: Data returned ",p,l.path);let g=Ke(p);typeof p=="object"&&p!=null&&In(p,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,h=PI(t),m=Tz(g,f,h);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=m,l.currentWriteId=Bz(t),o.splice(o.indexOf(w),1),i=i.concat(uz(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(hs(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat(hs(t.serverSyncTree_,l.currentWriteId,!0))}Yr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Nd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)rl(r[a]);sv(t,t.transactionQueueTree_)}function RI(t,e){let n,r=t.transactionQueueTree_;for(n=J(e);n!==null&&ao(r)===void 0;)r=nv(r,n),e=ue(e),n=J(e);return r}function NI(t,e){const n=[];return AI(t,e,n),n.sort((r,i)=>r.order-i.order),n}function AI(t,e,n){const r=ao(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rd(e,i=>{AI(t,i,n)})}function Nd(t,e){const n=ao(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,SI(e,n.length>0?n:void 0)}Rd(e,r=>{Nd(t,r)})}function Yz(t,e){const n=al(RI(t,e)),r=nv(t.transactionQueueTree_,e);return bz(r,i=>{$f(t,i)}),$f(t,r),TI(r,i=>{$f(t,i)}),n}function $f(t,e){const n=ao(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?SI(e,void 0):n.length=s+1,Yr(t.eventQueue_,al(e),i);for(let o=0;o<r.length;o++)rl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qz(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Xz(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const J0=function(t,e){const n=Jz(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new NT(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},Jz=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Qz(t.substring(d,c)));const f=Xz(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zz{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class e6{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:zT(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=L0(this._queryParams),n=Mg(e);return n==="{}"?"default":n}get _queryObject(){return L0(this._queryParams)}isEqual(e){if(e=dt(e),!(e instanceof ll))return!1;const n=this._repo===e._repo,r=VT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+HU(this._path)}}function n6(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function r6(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Rr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Ni)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==$r)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===we){if(e!=null&&!Y0(e)||n!=null&&!Y0(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof XT||t.getIndex()===JT,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Jn extends ll{constructor(e,n){super(e,n,new Wg,!1)}get parent(){const e=BT(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ja{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=Np(this.ref,e);return new ja(this._node.getChild(n),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ja(i,Np(this.ref,r),we)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function i6(t,e){return t=dt(t),t._checkNotDeleted("ref"),e!==void 0?Np(t._root,e):t._root}function Np(t,e){return t=dt(t),J(t._path)===null?Rz("child","path",e,!1):kI("child","path",e,!1),new Jn(t._repo,Ne(t._path,e))}function s6(t){t=dt(t);const e=new t6(()=>{}),n=new av(e);return Vz(t._repo,t,n).then(r=>new ja(r,new Jn(t._repo,t._path),t._queryParams.getIndex()))}class av{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Zz("value",this,new ja(e.snapshotNode,new Jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new e6(this,e,n):null}matches(e){return e instanceof av?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class DI{}class o6 extends DI{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ll(e._repo,e._path,h4(e._queryParams,this._limit),e._orderByCalled)}}function a6(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new o6(t)}class l6 extends DI{_apply(e){n6(e,"orderByKey");const n=p4(e._queryParams,Rr);return r6(n),new ll(e._repo,e._path,n,!0)}}function u6(){return new l6}function c6(t,...e){let n=dt(t);for(const r of e)n=r._apply(n);return n}tz(Jn);oz(Jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6="FIREBASE_DATABASE_EMULATOR_HOST",Ap={};let f6=!1;function h6(t,e,n,r){t.repoInfo_=new NT(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function p6(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),tt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=J0(s,i),a=o.repoInfo,l,u;typeof process<"u"&&y0&&(u=y0[d6]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=J0(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Cs(Cs.OWNER):new _U(t.name,t.options,e);Nz("Invalid Firebase Database URL",o),Q(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=g6(a,t,d,new yU(t.name,n));return new v6(c,t)}function m6(t,e){const n=Ap[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Gz(t),delete n[t.key]}function g6(t,e,n,r){let i=Ap[e.name];i||(i={},Ap[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $z(t,f6,n,r),i[t.toURLString()]=s,s}class v6{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(m6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function y6(t=jC(),e){const n=Tg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vF("database");r&&_6(n,...r)}return n}function _6(t,e,n,r={}){t=dt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Cs(Cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:yF(r.mockUserToken,t.app.options.projectId);s=new Cs(o)}h6(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w6(t){rU(io),zs(new ki("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return p6(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Or(_0,w0,t),Or(_0,w0,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};w6();const E6="AIzaSyBBDsYAXCB7-4CF-jLeKJ_AbxLO83ZOJD4",S6={apiKey:E6,authDomain:"learnlingo-72230.firebaseapp.com",databaseURL:"https://learnlingo-72230-default-rtdb.europe-west1.firebasedatabase.app",projectId:"learnlingo-72230",storageBucket:"learnlingo-72230.appspot.com",messagingSenderId:"906284379815",appId:"1:906284379815:web:fd7daa72f7080b1c113582",limit:5},MI=LC(S6),_i=eU(MI),C6=y6(MI),ou=Ed("userAuth/registerUser",async(t,e)=>{try{const n=await j$(_i,t.email,t.password,t.name);await aT(_i.currentUser,{displayName:t.name});const{uid:r,displayName:i,email:s}=_i.currentUser;return{uid:r,displayName:i,email:s}}catch(n){return e.rejectWithValue(n.message)}}),au=Ed("userAuth/loginUser",async(t,e)=>{try{const n=await F$(_i,t.email,t.password);await aT(_i.currentUser,{displayName:t.name});const{uid:r,displayName:i,email:s}=_i.currentUser;return{uid:r,displayName:i,email:s}}catch(n){return e.rejectWithValue(n.message)}}),lu=Ed("userAuth/logoutUser",async(t,e)=>{try{const n=await W$(_i)}catch(n){return e.rejectWithValue(n.message)}});Ga.setAppElement(document.getElementById("root"));const T6=({isOpen:t,close:e,onRequestClose:n})=>{const r=Pt(l=>l.loading),[i,s]=S.useState(!1),o=()=>{s(!i)},a=to();return r?y.jsx(gd,{}):y.jsx(Ga,{isOpen:t,style:ag,onRequestClose:n,children:y.jsxs(tN,{children:[y.jsx("button",{onClick:e,className:"close-button",children:y.jsx(ug,{style:{width:"100%",height:"100%"}})}),y.jsx("h3",{children:"Registration"}),y.jsx("p",{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"}),y.jsx(X1,{initialValues:{email:"",password:"",name:""},onSubmit:l=>{a(ou(l)).then(()=>{})},children:()=>y.jsxs(og,{children:[y.jsx("label",{htmlFor:"name",children:y.jsx(Bo,{type:"text",name:"name",placeholder:"Name",className:"form-field"})}),y.jsx("label",{htmlFor:"email",children:y.jsx(Bo,{type:"email",name:"email",placeholder:"Email",className:"form-field"})}),y.jsxs("label",{htmlFor:"password",style:{position:"relative"},children:[y.jsx(Bo,{type:i?"text":"password",name:"password",placeholder:"Password",className:"form-field"}),y.jsx("button",{type:"button",className:"eye-icon",onClick:o,children:i?y.jsx(tC,{className:"icon"}):y.jsx(eC,{className:"icon"})})]}),y.jsx("button",{type:"submit",className:"submit-form-button",children:"Sign up"})]})})]})})},I6=Lt.div`
  .close-button {
    position: absolute;
    padding: 0;
    width: 32px;
    height: 32px;
    top: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 18px;
  }
`;Ga.setAppElement(document.getElementById("root"));const b6=({isOpen:t,close:e,onRequestClose:n})=>{const r=Pt(l=>l.loading),[i,s]=S.useState(!1),o=()=>{s(!i)},a=to();return r?y.jsx(gd,{}):y.jsx(Ga,{isOpen:t,style:ag,onRequestClose:n,children:y.jsxs(I6,{children:[y.jsx("button",{onClick:e,className:"close-button",children:y.jsx(ug,{style:{width:"100%",height:"100%"}})}),y.jsx("h3",{children:"Login"}),y.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),y.jsx(X1,{initialValues:{email:"",password:""},onSubmit:l=>{a(au(l)).then(()=>{})},children:()=>y.jsxs(og,{children:[y.jsx("label",{htmlFor:"email",children:y.jsx(Bo,{type:"email",name:"email",placeholder:"Email",className:"form-field"})}),y.jsxs("label",{htmlFor:"password",style:{position:"relative"},children:[y.jsx(Bo,{type:i?"text":"password",name:"password",placeholder:"Password",className:"form-field"}),y.jsx("button",{type:"button",className:"eye-icon",onClick:o,children:i?y.jsx(tC,{className:"icon"}):y.jsx(eC,{className:"icon"})})]}),y.jsx("button",{type:"submit",className:"submit-form-button",children:"Log in"})]})})]})})},x6=()=>{const[t,e]=S.useState(!1),[n,r]=S.useState(!1);function i(o){return o=="reg"?e(!0):r(!0)}function s(){r(!1),e(!1)}return y.jsxs(y.Fragment,{children:[y.jsxs(VO,{children:[y.jsxs("button",{className:"login-button",id:"log",onClick:o=>{i(o.target.id)},children:[y.jsx("img",{src:BO,alt:"",width:20,height:20}),"Log in"]}),y.jsx("button",{className:"register-button",id:"reg",onClick:()=>{i(event.target.id)},children:"Registration"})]}),y.jsx(T6,{isOpen:t,onRequestClose:s,close:s}),y.jsx(b6,{isOpen:n,onRequestClose:s,close:s})]})},k6=()=>{const t=Pt(e=>e.userAuth.user.name);return y.jsx(y.Fragment,{children:t&&t})},P6=()=>{const t=Pt(n=>n.loading),e=to();return t?y.jsx(gd,{}):y.jsx(y.Fragment,{children:y.jsx("button",{onClick:()=>{e(lu())},children:"Logout"})})},Uf=Lt(NP)`
  color: inherit;

  &.active {
    color: var(--secondary-color);
  }
`,O6=()=>{const t=Pt(e=>e.userAuth.user.name);return y.jsxs(WO,{children:[y.jsx(zO,{}),y.jsxs(FO,{children:[y.jsx(Uf,{to:"/",children:"Home"}),y.jsx(Uf,{to:"/teachers",children:"Teachers"}),y.jsx(Uf,{to:"/favorites",children:"Favorites"})]}),t?y.jsxs("div",{className:"userInDiv",children:[y.jsx(k6,{}),y.jsx(P6,{})]}):y.jsx(x6,{})]})},R6=Lt.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`,N6=()=>y.jsxs(R6,{children:[y.jsx(O6,{}),y.jsx(wP,{})]}),A6=Lt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  padding: 20px;
  font-weight: 400;
  background-color: #fff;
  text-align: center;
  .header {
    background-color: #f8f8f8;
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 20px 15px;
  }
  .header span {
    font-style: italic;
    background-color: #fbe9ba;
  }
  .header h1 {
    max-width: 548px;
    margin: 0 auto;
  }
  .header p {
    font-size: 15px;
  }
  img {
    max-width: 100%;
  }
  .advantages {
    border: 1.5px dashed var(--secondary-color);
    border-radius: 30px;
    padding: 20px 20px;
  }
  .start-button {
    display: block;
    margin: 0 auto;
    padding: 16px 40px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    &:hover {
      background-color: var(--secondary-hover-color);
    }
  }
  .adv-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    p {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      column-gap: 5px;
      font-size: 14px;
      font-weight: 400;
    }
    .num {
      font-size: 28px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .hero-wrapper {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    .header {
      padding: 40px 30px;
      h1 {
        font-size: 36px;
      }
    }
    .header p {
      font-size: 16px;
      max-width: 590px;
      margin: 30px auto;
    }
    .advantages {
      .adv-content {
        flex-direction: row;
        justify-content: space-around;
      }
      .adv-descr {
        max-width: 95px;
      }
    }
    .start-button {
      padding: 16px 55px;
    }
  }
  @media screen and (min-width: 1200px) {
    .hero-wrapper {
      display: flex;
      flex-direction: row;
      column-gap: 30px;
      justify-content: center;
    }
    .header {
      padding: 80px 50px;
      margin-bottom: 0;
      h1 {
        font-size: 48px;
        text-align: left;
      }
      p {
        font-size: 18px;
        text-align: left;
      }
    }
    .header-img img {
      height: 100%;
    }
  }
  @media screen and (min-width: 1440px) {
    .hero-wrapper {
      display: flex;
      flex-direction: row;
    }
    .header-img {
      width: 568px;
    }
    .advantages {
      .adv-content {
        flex-direction: row;
      }
    }
  }
`,D6=()=>y.jsxs(A6,{children:[y.jsxs("div",{className:"hero-wrapper",children:[y.jsxs("section",{className:"header",children:[y.jsxs("h1",{children:["Unlock your potential with the best ",y.jsx("span",{children:"language"})," tutors"]}),y.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),y.jsx("button",{className:"start-button",type:"button",children:"Get started"})]}),y.jsx("section",{className:"header-img",children:y.jsx("img",{src:"images/block.jpg",alt:"main-image"})})]}),y.jsx("section",{className:"advantages",children:y.jsxs("section",{className:"adv-content",children:[y.jsx("div",{className:"adv-elem",children:y.jsxs("p",{children:[y.jsx("span",{className:"num",children:"32,000 +"})," ",y.jsx("span",{className:"adv-descr",children:"Experienced tutors"})]})}),y.jsx("div",{className:"adv-elem",children:y.jsxs("p",{children:[y.jsx("span",{className:"num",children:"300,000 +"}),y.jsx("span",{className:"adv-descr",children:"5-star tutor reviews"})]})}),y.jsx("div",{className:"adv-elem",children:y.jsxs("p",{children:[y.jsx("span",{className:"num",children:"120 +"}),y.jsx("span",{className:"adv-descr",children:"Subjects taught"})]})}),y.jsx("div",{className:"adv-elem",children:y.jsxs("p",{children:[y.jsx("span",{className:"num",children:"200 +"}),y.jsx("span",{className:"adv-descr",children:"Tutor nationalities"})]})})]})})]}),M6=i6(C6,"teachers/"),Yo=Ed("teachers/getTeachers",async(t,e)=>{try{let n=c6(M6,u6(),a6(t));const r=await s6(n);if(r.exists())return r.val();console.log("No data available")}catch(n){return e.rejectWithValue(n.message)}});var di=256,LI=[],Z0=256,Ll;for(;di--;)LI[di]=(di+256).toString(16).substring(1);function bc(t){var e=0,n=t||11;if(!Ll||di+n>Z0*2)for(Ll="",di=0;e<Z0;e++)Ll+=LI[Math.random()*256|0];return Ll.substring(di,di+++n)}const L6="/learnlingo/images/heart.svg",j6="/learnlingo/images/liked-heart.svg",F6=Lt.div`
  position: relative;
  margin-bottom: 32px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 5px;
  .heart-button {
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: rgba(0, 0, 0, 0);
  }
  .description {
    position: absolute;
    top: 60px;
    right: 10px;
  }

  .exp {
    font-weight: 400;
  }
  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #fbe9ba;
  }
  .avatar {
    border-radius: 50%;
  }
  .price-span {
    color: var(--price-color);
  }
  .grey-span {
    color: #8a8a89;
  }
  .loaded-block:nth-child() {
    margin-bottom: 23px;
  }
  .category-list {
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .category-list li {
    display: block;
    padding: 8px 12px;
    border-radius: 35px;
    border: 1px solid rgba(18, 20, 23, 0.2);
    font-size: 14px;
    font-weight: 500;
  }
  .category-list li:first-child {
    background-color: var(--secondary-color);
    border: none;
  }
  .bookBotton {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
  @media screen and (min-width: 800px) {
    padding: 24px;
    .description {
      top: 30px;
      right: 90px;
      display: flex;
      flex-direction: row;
    }
    .description li:not(:last-child)::after {
      content: " |";
      color: rgba(18, 20, 23, 0.2);
    }
  }
`,$6="/learnlingo/images/book-open.svg",ew="/learnlingo/images/star.svg",U6=()=>"https://xsgames.co/randomusers/avatar.php?g=female",z6=Lt.div`
  outline: 1px solid tomato;
  padding: 20px;
  position: relative;
  padding: 20px;
  .close-button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  h3 {
    font-size: 40px;
  }
  .descr {
    font-weight: 400;
  }
  .teacher {
    column-gap: 14px;
    align-items: center;
    p {
      margin: 0;
    }
  }
  .teacher-descr {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #8a8a89;
  }
  .teacher-name {
    font-size: 16px;
    font-weight: 500;
  }
  #my-radio-group {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .group {
    margin-bottom: 40px;
    row-gap: 16px;
  }
  .text-inputs {
    row-gap: 8px;
    margin-bottom: 40px;
  }
  .input-field {
    position: relative;
  }
  .input-field label {
    position: absolute;
    font-weight: 400;
    font-size: 16px;
    top: 16px;
    left: 18px;
  }
  .input-field input {
    width: 100%;
    height: 54px;
    padding: 16px 18px;
    border-radius: 15px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
  .input-field input:focus + label {
    display: none !important;
  }
  .submit-button {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
  .radio-input {
    /* position: absolute; */
    padding-left: 1.9em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-weight: 400;
    font-size: 16px;
  }
  .radio-span {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-left: -1.9em;
    background-image: url("../../../public/images/void-check.svg");
  }
  .radio-input:checked + .radio-span {
    background-image: url("../../../public/images/fill-check.svg");
  }
`,W6=({close:t,isOpen:e,name:n,surname:r,img:i})=>{const s=Q1({initialValues:{kindOfLesson:"",name:"",email:"",phone:""},onSubmit:o=>{console.log(o)}});return y.jsx(Ga,{style:ag,onRequestClose:t,isOpen:e,children:y.jsxs(z6,{children:[y.jsx("button",{onClick:t,className:"close-button",children:y.jsx(ug,{style:{width:"100%",height:"100%"}})}),y.jsx("h3",{children:"Book trial lesson"}),y.jsx("p",{className:"descr",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),y.jsxs("div",{className:"teacher flex row",children:[y.jsx("img",{src:i,alt:"teacher",style:{width:"44px",height:"44px",borderRadius:"100px"}}),y.jsxs("div",{children:[y.jsx("p",{className:"teacher-descr",children:"Your teacher"}),y.jsxs("p",{className:"teacher-name",children:[n," ",r]})]})]}),y.jsxs("form",{onSubmit:s.handleSubmit,children:[y.jsx("div",{id:"my-radio-group",children:"What is your main reason for learning English?"}),y.jsxs("div",{className:"group flex column",role:"group","aria-labelledby":"my-radio-group",onChange:s.handleChange,value:s.values.name,children:[y.jsxs("label",{children:[y.jsx("input",{className:"radio-input",type:"radio",name:"kindOfLesson",value:"Career and business"}),y.jsx("span",{className:"radio-span"}),"Career and business"]}),y.jsxs("label",{children:[y.jsx("input",{className:"radio-input",type:"radio",name:"kindOfLesson",value:"Lesson for kids"}),y.jsx("span",{className:"radio-span"}),"Lesson for kids"]}),y.jsxs("label",{children:[y.jsx("input",{className:"radio-input",type:"radio",name:"kindOfLesson",value:"Living abroad"}),y.jsx("span",{className:"radio-span"}),"Living abroad"]}),y.jsxs("label",{children:[y.jsx("input",{className:"radio-input",type:"radio",name:"kindOfLesson",value:" Exams and coursework"}),y.jsx("span",{className:"radio-span"}),"Exams and coursework"]}),y.jsxs("label",{children:[y.jsx("input",{className:"radio-input",type:"radio",name:"kindOfLesson",value:"ulture, travel or hobby"}),y.jsx("span",{className:"radio-span"}),"Culture, travel or hobby"]})]}),y.jsxs("div",{className:"text-inputs flex column",children:[y.jsxs("div",{className:"input-field",children:[y.jsx("input",{id:"name",name:"name",type:"text",onChange:s.handleChange,value:s.values.name}),!s.values.name&&y.jsx("label",{htmlFor:"name",children:"First Name"})]}),y.jsxs("div",{className:"input-field",children:[y.jsx("input",{id:"email",name:"email",type:"email",onChange:s.handleChange,value:s.values.email}),!s.values.email&&y.jsx("label",{htmlFor:"email",children:"Email Address"})]}),y.jsxs("div",{className:"input-field",children:[y.jsx("input",{id:"phone",name:"phone",type:"phone",onChange:s.handleChange,value:s.values.phone}),!s.values.phone&&y.jsx("label",{htmlFor:"phone",children:"phone"})]})]}),y.jsx("button",{className:"submit-button",type:"submit",children:"Submit"})]})]})})},B6={favorites:[],loading:!1},jI=gg({name:"favorites",initialState:B6,reducers:{addToFavotites(t,{payload:e}){t.favorites.push(e)},removeFromFavorites(t,{payload:e}){t.favorites=t.favorites.filter(n=>n!==e)}}}),{addToFavotites:V6,removeFromFavorites:H6}=jI.actions,G6=jI.reducer;let K6={data:""},q6=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||K6,Y6=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Q6=/\/\*[^]*?\*\/|  +/g,tw=/\n+/g,fr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?fr(o,s):s+"{"+fr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=fr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=fr.p?fr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},FI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+FI(t[n]);return e}return t},X6=(t,e,n,r,i)=>{let s=FI(t),o=xn[s]||(xn[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!xn[o]){let l=s!==t?t:(u=>{let d,c,f=[{}];for(;d=Y6.exec(u.replace(Q6,""));)d[4]?f.shift():d[3]?(c=d[3].replace(tw," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(tw," ").trim();return f[0]})(t);xn[o]=fr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(xn[o],e,r,a),o},J6=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":fr(a,""):a===!1?"":a}return r+i+(o??"")},"");function Ad(t){let e=this||{},n=t.call?t(e.p):t;return X6(n.unshift?n.raw?J6(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,q6(e.target),e.g,e.o,e.k)}let $I,Dp,Mp;Ad.bind({g:1});let Gn=Ad.bind({k:1});function Z6(t,e,n,r){fr.p=e,$I=t,Dp=n,Mp=r}function Qr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Dp&&Dp()},a),n.o=/ *go\d+/.test(l),a.className=Ad.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Mp&&u[0]&&Mp(a),$I(u,a)}return e?e(i):i}}var e5=t=>typeof t=="function",xc=(t,e)=>e5(t)?t(e):t,t5=(()=>{let t=0;return()=>(++t).toString()})(),UI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),n5=20,uu=new Map,r5=1e3,nw=t=>{if(uu.has(t))return;let e=setTimeout(()=>{uu.delete(t),Bi({type:4,toastId:t})},r5);uu.set(t,e)},i5=t=>{let e=uu.get(t);e&&clearTimeout(e)},Lp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n5)};case 1:return e.toast.id&&i5(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?Lp(t,{type:1,toast:n}):Lp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?nw(r):t.toasts.forEach(s=>{nw(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},cu=[],du={toasts:[],pausedAt:void 0},Bi=t=>{du=Lp(du,t),cu.forEach(e=>{e(du)})},s5={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},o5=(t={})=>{let[e,n]=S.useState(du);S.useEffect(()=>(cu.push(n),()=>{let i=cu.indexOf(n);i>-1&&cu.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||s5[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},a5=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||t5()}),ul=t=>(e,n)=>{let r=a5(e,t,n);return Bi({type:2,toast:r}),r.id},It=(t,e)=>ul("blank")(t,e);It.error=ul("error");It.success=ul("success");It.loading=ul("loading");It.custom=ul("custom");It.dismiss=t=>{Bi({type:3,toastId:t})};It.remove=t=>Bi({type:4,toastId:t});It.promise=(t,e,n)=>{let r=It.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(It.success(xc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{It.error(xc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var l5=(t,e)=>{Bi({type:1,toast:{id:t,height:e}})},u5=()=>{Bi({type:5,time:Date.now()})},c5=t=>{let{toasts:e,pausedAt:n}=o5(t);S.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&It.dismiss(a.id);return}return setTimeout(()=>It.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=S.useCallback(()=>{n&&Bi({type:6,time:Date.now()})},[n]),i=S.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),c=d.findIndex(p=>p.id===s.id),f=d.filter((p,g)=>g<c&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[f+1]:[0,f]).reduce((p,g)=>p+(g.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:l5,startPause:u5,endPause:r,calculateOffset:i}}},d5=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,f5=Gn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,h5=Gn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,p5=Qr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${d5} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${f5} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${h5} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,m5=Gn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,g5=Qr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${m5} 1s linear infinite;
`,v5=Gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,y5=Gn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_5=Qr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v5} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${y5} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,w5=Qr("div")`
  position: absolute;
`,E5=Qr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,S5=Gn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,C5=Qr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${S5} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,T5=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?S.createElement(C5,null,e):e:n==="blank"?null:S.createElement(E5,null,S.createElement(g5,{...r}),n!=="loading"&&S.createElement(w5,null,n==="error"?S.createElement(p5,{...r}):S.createElement(_5,{...r})))},I5=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,b5=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,x5="0%{opacity:0;} 100%{opacity:1;}",k5="0%{opacity:1;} 100%{opacity:0;}",P5=Qr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,O5=Qr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,R5=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=UI()?[x5,k5]:[I5(n),b5(n)];return{animation:e?`${Gn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Gn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},N5=S.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?R5(t.position||e||"top-center",t.visible):{opacity:0},s=S.createElement(T5,{toast:t}),o=S.createElement(O5,{...t.ariaProps},xc(t.message,t));return S.createElement(P5,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):S.createElement(S.Fragment,null,s,o))});Z6(S.createElement);var A5=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=S.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return S.createElement("div",{ref:s,className:e,style:n},i)},D5=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:UI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},M5=Ad`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,jl=16,L5=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=c5(n);return S.createElement("div",{style:{position:"fixed",zIndex:9999,top:jl,left:jl,right:jl,bottom:jl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||e,c=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=D5(d,c);return S.createElement(A5,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?M5:"",style:f},u.type==="custom"?xc(u.message,u):i?i(u):S.createElement(N5,{toast:u,position:d}))}))},j5=It;const zI=({data:t})=>{const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=to(),o=Pt(L=>L.favorites.favorites),a=Pt(L=>L.userAuth.isLoggedIn),l=()=>j5.error("Register or login to add to favorites!");function u(){i(!0)}function d(){i(!1)}const{avatar_url:c,conditions:f,experience:p,languages:g,lesson_info:_,lessons_done:w,levels:h,name:m,price_per_hour:v,rating:E,reviews:I,surname:T,id:C}=t,R=o.includes(C),F=()=>a?s(R?H6(C):V6(C)):l();return y.jsxs(y.Fragment,{children:[y.jsxs(F6,{children:[y.jsx("button",{className:"heart-button",type:"button",onClick:F,children:R&&a?y.jsx("img",{src:j6,alt:"liked heart",width:26,height:26}):y.jsx("img",{src:L6,alt:"heart",width:26,height:26})}),y.jsx("div",{className:"avatar-container",children:y.jsx("img",{className:"avatar",src:c,width:96,alt:""})}),y.jsxs("div",{children:[y.jsx("p",{className:"grey-span",children:"languages"}),y.jsxs("p",{children:[m," ",T]})]}),y.jsxs("ul",{className:"description",children:[y.jsxs("li",{children:[y.jsx("img",{src:$6,alt:"book icon"})," Lessons online"]}),y.jsxs("li",{children:["Lessons done: ",w]}),y.jsxs("li",{children:[y.jsx("img",{src:ew,alt:"rating icon"})," Rating: ",E]}),y.jsxs("li",{children:["Price / 1 hour:",y.jsxs("span",{className:"price-span",children:["$",v]})]})]}),y.jsxs("ul",{children:[y.jsxs("li",{children:[y.jsx("span",{className:"grey-span",children:"Speaks:"}),g.map(L=>` ${L}, `)]}),y.jsxs("li",{children:[y.jsx("span",{className:"grey-span",children:"Lesson Info:"})," ",_]}),y.jsxs("li",{children:[y.jsx("span",{className:"grey-span",children:"Conditions:"})," ",f]})]}),e?y.jsxs("div",{className:"loaded-block",children:[y.jsx("p",{className:"exp",children:p}),I.map(({reviewer_name:L,reviewer_rating:be,comment:Qe})=>y.jsxs("div",{style:{marginBottom:"10px"},children:[y.jsxs("div",{className:"flex row",style:{marginBottom:"16px",columnGap:"10px",alignItems:"center"},children:[y.jsx("img",{style:{width:"44px",borderRadius:"50%"},src:U6(),alt:"user avatar"}),y.jsxs("div",{className:"flex column",style:{flexWrap:"wrap"},children:[L,y.jsxs("div",{children:[y.jsx("img",{src:ew,alt:"rating icon",style:{marginRight:"5px"}}),be,",0"]})]})]}),Qe]},bc()))]}):y.jsx("button",{style:{textDecoration:"underline",background:"rgba(0, 0, 0, 0)",fontWeight:"500",marginTop:"16px"},type:"button",onClick:()=>{n(!0)},children:"Read more"}),y.jsx("ul",{className:"category-list flex row",children:h.map(L=>y.jsx("li",{children:L},bc()))}),y.jsx("button",{type:"button",className:"bookBotton",onClick:()=>{u()},children:"Book trial lesson"})]}),r&&y.jsx(W6,{isOpen:r,close:d,name:m,surname:T,img:c}),y.jsx(L5,{})]})},WI=Lt.div`
  padding-bottom: 20px;
  background-color: #eeeeee;
  padding: 20px;
  .loadMoreButton {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    margin: 0 auto;
    display: block;
    width: fit-content;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
`,F5=()=>{const e=Pt(a=>a.getTeachers.loading),n=Pt(a=>a.getTeachers.teachers),r=to(),[i,s]=S.useState(8);if(S.useLayoutEffect(()=>{r(Yo(i))},[i]),e)return y.jsx(gd,{});const o=()=>{s(a=>a+8)};return y.jsxs(WI,{children:[y.jsx("ul",{children:n==null?void 0:n.map(a=>y.jsx("li",{children:y.jsx(zI,{data:a})},bc()))}),y.jsx("button",{type:"button",className:"loadMoreButton",onClick:o,children:"Load more"})]})},$5=()=>{const[e,n]=S.useState(8),r=to(),i=Pt(u=>u.getTeachers.teachers),s=Pt(u=>u.favorites.favorites),o=Pt(u=>u.favorites.loading);if(S.useEffect(()=>{r(Yo(e))},[e]),o)return y.jsx(Loader,{});const a=i==null?void 0:i.filter(u=>s.includes(u.id)),l=()=>{n(u=>u+8)};return y.jsx(y.Fragment,{children:!a||a.length===0?y.jsx("h1",{children:"Favorite list is empty"}):y.jsxs(WI,{children:[y.jsx("ul",{children:a==null?void 0:a.map(u=>y.jsx("li",{children:y.jsx(zI,{data:u})},bc()))}),y.jsx("button",{type:"button",className:"loadMoreButton",onClick:l,children:"Load more"})]})})},U5=()=>y.jsxs(y.Fragment,{children:["NotFound page",y.jsx("img",{src:"images/404.jpg",alt:"notfound img",width:900})]}),z5=({children:t})=>Pt(n=>n.userAuth.isLoggedIn)?t:(alert("You are not register!"),y.jsx(_P,{to:"/teachers",replace:!0})),W5=()=>y.jsx("div",{children:y.jsx(SP,{children:y.jsxs(Yi,{path:"/",element:y.jsx(N6,{}),children:[y.jsx(Yi,{index:!0,element:y.jsx(D6,{})}),y.jsx(Yi,{path:"/teachers",element:y.jsx(F5,{})}),y.jsx(Yi,{path:"/favorites",element:y.jsx(z5,{children:y.jsx($5,{})})}),y.jsx(Yi,{path:"*",element:y.jsx(U5,{})})]})})}),B5=LO`
  body {
    font-family: var(--font);
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 16px;
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    button {
      border: none
    }
    a {
      text-decoration: none;
    }
    button:hover {
      cursor: pointer;
    }
    .form-field {
      height: 54px;
      padding: 16px 18px;
      width: 100%;
      border: 1px solid var(--accent-color);
      border-radius: 12px;
    }
    .eye-icon {
      top: 17px;
      right: 18px;
      position: absolute;
      width: 20px;
      height: 20px;
      padding: 0;
      background-color: rgba(0, 0, 0, 0);
    }
    .eye-icon > .icon {
      width: 100%;
      height: 100%;
    }
    .submit-form-button {
      background-color: var(--secondary-color);
      border-radius: 12px;
      height: 60px;
      font-size: 18px;
      font-weight: 700;
      &:is(:hover, :focus) {
        background-color: var(--secondary-hover-color);
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .flex {
      display: flex;
    }
    .row {
    flex-direction: row;
    }
    .column {
     flex-direction: column;
    }
  }



`,V5={user:{name:null,email:null,uid:null},isLoggedIn:!1,loading:!1},H5=gg({name:"userAuth",initialState:V5,reducers:{},extraReducers:t=>{t.addCase(ou.pending,(e,n)=>{e.loading=!0}).addCase(lu.pending,(e,n)=>{e.loading=!0}).addCase(au.pending,(e,n)=>{e.loading=!0}).addCase(ou.fulfilled,(e,n)=>{e.user.email=n.payload.email,e.user.name=n.payload.displayName,e.user.uid=n.payload.uid,e.isLoggedIn=!0,e.loading=!1}).addCase(au.fulfilled,(e,n)=>{e.user.email=n.payload.email,e.user.name=n.payload.displayName,e.user.uid=n.payload.uid,e.isLoggedIn=!0,e.loading=!1}).addCase(lu.fulfilled,(e,n)=>{e.user={name:null,email:null,uid:null},e.isLoggedIn=!1,e.loading=!1}).addCase(ou.rejected,(e,n)=>{e.loading=!1,e.error=n.payload}).addCase(au.rejected,(e,n)=>{e.loading=!1,e.error=n.payload}).addCase(lu.rejected,(e,n)=>{e.loading=!1,e.error=n.payload})}}),{reducer:G5}=H5;var lv={},uv={};uv.__esModule=!0;uv.default=Y5;function fu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fu=function(n){return typeof n}:fu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fu(t)}function zf(){}var K5={getItem:zf,setItem:zf,removeItem:zf};function q5(t){if((typeof self>"u"?"undefined":fu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function Y5(t){var e="".concat(t,"Storage");return q5(e)?self[e]:K5}lv.__esModule=!0;lv.default=J5;var Q5=X5(uv);function X5(t){return t&&t.__esModule?t:{default:t}}function J5(t){var e=(0,Q5.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var BI=void 0,Z5=eW(lv);function eW(t){return t&&t.__esModule?t:{default:t}}var tW=(0,Z5.default)("local");BI=tW;var cv="persist:",dv="persist/FLUSH",Dd="persist/REHYDRATE",fv="persist/PAUSE",hv="persist/PERSIST",pv="persist/PURGE",mv="persist/REGISTER",nW=-1;function hu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hu=function(n){return typeof n}:hu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},hu(t)}function rw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function rW(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rw(n,!0).forEach(function(r){iW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sW(t,e,n,r){r.debug;var i=rW({},n);return t&&hu(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function oW(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:cv).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(I){return I}:typeof t.serialize=="function"?a=t.serialize:a=aW;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,g=function(I){Object.keys(I).forEach(function(T){h(T)&&u[T]!==I[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){I[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),f===null&&(f=setInterval(_,i)),u=I};function _(){if(c.length===0){f&&clearInterval(f),f=null;return}var E=c.shift(),I=r.reduce(function(T,C){return C.in(T,E,u)},u[E]);if(I!==void 0)try{d[E]=a(I)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete d[E];c.length===0&&w()}function w(){Object.keys(d).forEach(function(E){u[E]===void 0&&delete d[E]}),p=o.setItem(s,a(d)).catch(m)}function h(E){return!(n&&n.indexOf(E)===-1&&E!=="_persist"||e&&e.indexOf(E)!==-1)}function m(E){l&&l(E)}var v=function(){for(;c.length!==0;)_();return p||Promise.resolve()};return{update:g,flush:v}}function aW(t){return JSON.stringify(t)}function lW(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:cv).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=uW,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function uW(t){return JSON.parse(t)}function cW(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:cv).concat(t.key);return e.removeItem(n,dW)}function dW(t){}function iw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iw(n,!0).forEach(function(r){fW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hW(t,e){if(t==null)return{};var n=pW(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function pW(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var mW=5e3;function gW(t,e){var n=t.version!==void 0?t.version:nW;t.debug;var r=t.stateReconciler===void 0?sW:t.stateReconciler,i=t.getStoredState||lW,s=t.timeout!==void 0?t.timeout:mW,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,g=hW(f,["_persist"]),_=g;if(c.type===hv){var w=!1,h=function(R,F){w||(c.rehydrate(t.key,R,F),w=!0)};if(s&&setTimeout(function(){!w&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=oW(t)),p)return kn({},e(_,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(C){var R=t.migrate||function(F,L){return Promise.resolve(F)};R(C,n).then(function(F){h(F)},function(F){h(void 0,F)})},function(C){h(void 0,C)}),kn({},e(_,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===pv)return a=!0,c.result(cW(t)),kn({},e(_,c),{_persist:p});if(c.type===dv)return c.result(o&&o.flush()),kn({},e(_,c),{_persist:p});if(c.type===fv)l=!0;else if(c.type===Dd){if(a)return kn({},_,{_persist:kn({},p,{rehydrated:!0})});if(c.key===t.key){var m=e(_,c),v=c.payload,E=r!==!1&&v!==void 0?r(v,d,m,t):m,I=kn({},E,{_persist:kn({},p,{rehydrated:!0})});return u(I)}}}if(!p)return e(d,c);var T=e(_,c);return T===_?d:u(kn({},T,{_persist:p}))}}function sw(t){return _W(t)||yW(t)||vW()}function vW(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function yW(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function _W(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function ow(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function jp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ow(n,!0).forEach(function(r){wW(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ow(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wW(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var VI={registry:[],bootstrapped:!1},EW=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:VI,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case mv:return jp({},e,{registry:[].concat(sw(e.registry),[n.key])});case Dd:var r=e.registry.indexOf(n.key),i=sw(e.registry);return i.splice(r,1),jp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function SW(t,e,n){var r=n||!1,i=fg(EW,VI,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:mv,key:u})},o=function(u,d,c){var f={type:Dd,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=jp({},i,{purge:function(){var u=[];return t.dispatch({type:pv,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:dv,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:fv})},persist:function(){t.dispatch({type:hv,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const CW={teachers:[],loading:!1},TW=gg({name:"getTeachers",initialState:CW,reducers:{},extraReducers:t=>{t.addCase(Yo.pending,(e,n)=>{e.loading=!0,e.teachers=n.payload}).addCase(Yo.fulfilled,(e,n)=>{e.loading=!1,e.teachers=n.payload}).addCase(Yo.rejected,(e,n)=>{e.loading=!1,e.error=n.payload})}}),{reducer:IW}=TW,bW={key:"root",storage:BI,blacklist:["getTeachers"]},xW=uC({userAuth:G5,getTeachers:IW,favorites:G6}),kW=gW(bW,xW),HI=Bj({reducer:kW,middleware:t=>t({serializableCheck:{ignoredActions:[dv,Dd,fv,hv,pv,mv]}})}),PW=SW(HI);function pu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pu=function(n){return typeof n}:pu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pu(t)}function OW(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function aw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function RW(t,e,n){return e&&aw(t.prototype,e),n&&aw(t,n),t}function NW(t,e){return e&&(pu(e)==="object"||typeof e=="function")?e:mu(t)}function Fp(t){return Fp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Fp(t)}function mu(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function AW(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$p(t,e)}function $p(t,e){return $p=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$p(t,e)}function gu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var GI=function(t){AW(e,t);function e(){var n,r;OW(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=NW(this,(n=Fp(e)).call.apply(n,[this].concat(s))),gu(mu(r),"state",{bootstrapped:!1}),gu(mu(r),"_unsubscribe",void 0),gu(mu(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return RW(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(S.PureComponent);gu(GI,"defaultProps",{children:null,loading:null});Bf.createRoot(document.getElementById("root")).render(y.jsxs(y.Fragment,{children:[y.jsx(qL,{store:HI,children:y.jsx(GI,{loading:null,persistor:PW,children:y.jsx(PP,{children:y.jsx(W5,{})})})}),y.jsx(B5,{})]}))});export default DW();
