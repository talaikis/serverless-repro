"use strict";var e=require("buffer"),r=require("stream"),t=require("util");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=f(e),n=f(r),u=f(t);const{PassThrough:o}=n.default;const{constants:c}=a.default,{promisify:s}=u.default,d=s(n.default.pipeline);class i extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}}async function l(e,r){if(!e)throw new Error("Expected a stream");r={maxBuffer:1/0,...r};const{maxBuffer:t}=r,f=(e=>{e={...e};const{array:r}=e;let{encoding:t}=e;const f="buffer"===t;let a=!1;r?a=!(t||f):t=t||"utf8",f&&(t=null);const n=new o({objectMode:a});t&&n.setEncoding(t);let u=0;const c=[];return n.on("data",(e=>{c.push(e),a?u=c.length:u+=e.length})),n.getBufferedValue=()=>r?c:f?Buffer.concat(c,u):c.join(""),n.getBufferedLength=()=>u,n})(r);return await new Promise(((r,a)=>{const n=e=>{e&&f.getBufferedLength()<=c.MAX_LENGTH&&(e.bufferedData=f.getBufferedValue()),a(e)};(async()=>{try{await d(e,f),r()}catch(e){n(e)}})(),f.on("data",(()=>{f.getBufferedLength()>t&&n(new i)}))})),f.getBufferedValue()}var g=l,B=(e,r)=>l(e,{...r,encoding:"buffer"}),b=(e,r)=>l(e,{...r,array:!0}),h=i;g.buffer=B,g.array=b,g.MaxBufferError=h;var x=Object.freeze(Object.assign(Object.create(null),g,{default:g,buffer:B,array:b,MaxBufferError:h}));exports.index=x;
