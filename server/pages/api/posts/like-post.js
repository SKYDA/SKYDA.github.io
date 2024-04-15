"use strict";(()=>{var e={};e.id=282,e.ids=[282],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},2667:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},1893:(e,t,n)=>{n.r(t),n.d(t,{config:()=>d,default:()=>l,routeModule:()=>c});var s={};n.r(s),n.d(s,{default:()=>u});var o=n(2376),i=n(2367),a=n(2667),r=n(6995);let u=async function(e,t){if("POST"===e.method){let n;let{slug:s}=e.body;if(!s||""===s.trim()){t.status(422).json({message:"Invalid input."});return}try{n=await (0,r.Tq)()}catch(e){t.status(500).json({message:"Connecting to the database failed!"});return}try{let e=await (0,r.x0)(n,"post-likes",{slug:s});e?await (0,r.gU)(n,"post-likes",{slug:s},e.likes):await (0,r.qi)(n,"post-likes",{slug:s,likes:1})}catch(e){t.status(500).json({message:"Inserting data failed!"});return}n.close(),t.status(201).json({message:"like added"})}},l=(0,a.l)(s,"default"),d=(0,a.l)(s,"config"),c=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/posts/like-post",pathname:"/api/posts/like-post",bundlePath:"",filename:""},userland:s})},6995:(e,t,n)=>{n.d(t,{Tq:()=>o,x0:()=>r,qi:()=>i,gU:()=>a});let s=require("mongodb");async function o(){let e=`mongodb+srv://${process.env.NEXT_PUBLIC_mongodb_username}:${process.env.NEXT_PUBLIC_mongodb_password}@${process.env.NEXT_PUBLIC_mongodb_clustername}.jlgq3.mongodb.net/${process.env.NEXT_PUBLIC_mongodb_database}?retryWrites=true&w=majority`;return await s.MongoClient.connect(e)}async function i(e,t,n){let s=e.db();return await s.collection(t).insertOne(n)}async function a(e,t,n,s){let o=e.db();return await o.collection(t).updateOne(n,{$set:{likes:s+1}})}async function r(e,t,n){let s=e.db();return await s.collection(t).findOne(n,{projection:{likes:1}})}},2367:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},2376:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=1893);module.exports=n})();