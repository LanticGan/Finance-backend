(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{IyzB:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),s=a.n(n),r=a("d6i3"),c=a.n(r),i=a("dCQc");t["default"]={namespace:"activities",state:{list:[]},effects:{fetchList:c.a.mark(function e(t,a){var n,s,r;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.call,s=a.put,e.next=3,n(i["g"]);case 3:return r=e.sent,e.next=6,s({type:"saveList",payload:Array.isArray(r)?r:[]});case 6:case"end":return e.stop()}},e)})},reducers:{saveList:function(e,t){return s()({},e,{list:t.payload})}}}}}]);