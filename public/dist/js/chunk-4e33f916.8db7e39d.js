(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e33f916"],{"31d9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n("9ab4"),r=n("750b"),a=u.__importDefault(n("e164")),i=n("9923").i18n;t.default=(0,r.createComponent)({props:{value:{type:String,default:null},options:{type:Object,required:!0}},setup:function(e){var t=(0,r.computed)((function(){if(!e.value)return"--";var t=new Date(e.value);return e.options.showRelative?(0,a.default)(t).value:i.d(t,"long")+" GMT"}));return{displayValue:t}}})},"46d8":function(e,t,n){"use strict";n.r(t);var u=n("5177"),r=n("4b67");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);var i=n("2877"),o=Object(i["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"4b67":function(e,t,n){"use strict";n.r(t);var u=n("31d9"),r=n.n(u);for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);t["default"]=r.a},5177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return r}));var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.displayValue))])},r=[]},e164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n("9ab4"),r=n("750b"),a=u.__importDefault(n("1556"));function i(e,t){var n;void 0===t&&(t=6e4);var u={addSuffix:!0},i=(0,r.ref)((0,a.default)(e,new Date,u));return 0!==t&&((0,r.onMounted)((function(){n=setInterval((function(){i.value=(0,a.default)(e,new Date,u)}),t)})),(0,r.onUnmounted)((function(){clearInterval(n)}))),i}t.default=i}}]);
//# sourceMappingURL=chunk-4e33f916.8db7e39d.js.map