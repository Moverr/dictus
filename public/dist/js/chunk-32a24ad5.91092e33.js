(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32a24ad5"],{"39ba":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n("9ab4"),a=n("750b"),r=u.__importDefault(n("e164")),i=n("9923").i18n;t.default=(0,a.createComponent)({props:{value:{type:String,default:null},options:{type:Object,required:!0}},setup:function(e){var t=(0,a.computed)((function(){if(!e.value)return"--";var t=new Date(e.value);return e.options.showRelative?(0,r.default)(t).value:i.d(t,"long")}));return{displayValue:t}}})},"532e":function(e,t,n){"use strict";n.r(t);var u=n("f93a"),a=n("92b3");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var i=n("2877"),o=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"92b3":function(e,t,n){"use strict";n.r(t);var u=n("39ba"),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=a.a},e164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n("9ab4"),a=n("750b"),r=u.__importDefault(n("1556"));function i(e,t){var n;void 0===t&&(t=6e4);var u={addSuffix:!0},i=(0,a.ref)((0,r.default)(e,new Date,u));return 0!==t&&((0,a.onMounted)((function(){n=setInterval((function(){i.value=(0,r.default)(e,new Date,u)}),t)})),(0,a.onUnmounted)((function(){clearInterval(n)}))),i}t.default=i},f93a:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a}));var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.displayValue))])},a=[]}}]);
//# sourceMappingURL=chunk-32a24ad5.91092e33.js.map