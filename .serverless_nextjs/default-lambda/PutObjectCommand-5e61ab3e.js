"use strict";var e=require("./index-4d1c10fe.js");require("./lazy-json-37175b28.js"),require("./httpRequest-79d7914f.js"),require("./default-handler-1d169422.js"),require("./prerender-manifest.json"),require("./manifest.json"),require("./routes-manifest.json"),require("stream"),require("zlib"),require("http"),require("perf_hooks"),require("buffer"),require("util"),require("crypto");class r extends e.Command{constructor(e){super(),this.input=e}resolveMiddleware(r,t,i){this.middlewareStack.use(e.getSerdePlugin(t,this.serialize,this.deserialize)),this.middlewareStack.use(e.getSsecPlugin(t)),this.middlewareStack.use(e.getBucketEndpointPlugin(t));const s=r.concat(this.middlewareStack),{logger:u}=t,n={logger:u,clientName:"S3Client",commandName:"PutObjectCommand",inputFilterSensitiveLog:e.PutObjectRequest.filterSensitiveLog,outputFilterSensitiveLog:e.PutObjectOutput.filterSensitiveLog},{requestHandler:a}=t;return s.resolve((e=>a.handle(e.request,i||{})),n)}serialize(r,t){return e.serializeAws_restXmlPutObjectCommand(r,t)}deserialize(r,t){return e.deserializeAws_restXmlPutObjectCommand(r,t)}}exports.PutObjectCommand=r;