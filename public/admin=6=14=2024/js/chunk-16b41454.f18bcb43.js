(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16b41454"],{"8db27":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},"9f1f":function(e,t,l){},b6e0:function(e,t,l){"use strict";l("9f1f")},f835:function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("select",{staticClass:"select",attrs:{id:e.name,disabled:e.readonly,size:e.options.size,multiple:""},on:{change:function(t){return e.updateValue(t.target.options)}}},[e.options.placeholder?l("option",{attrs:{value:"",disabled:e.required}},[e._v(" "+e._s(e.options.placeholder)+" ")]):e._e(),e._l(e.choices,(function(t,n){return l("option",{key:n,domProps:{value:n,selected:e.value&&e.value.includes(n)}},[e._v(" "+e._s(t)+" ")])}))],2)},i=[],u=(l("4de4"),l("a630"),l("a15b"),l("d81d"),l("b64b"),l("d3b7"),l("3ca3"),l("8db27")),o=l.n(u),a={mixins:[o.a],computed:{choices:function(){var e=this.options.choices;return e?("string"===typeof this.options.choices&&(e=JSON.parse(this.options.choices)),e):{}}},methods:{updateValue:function(e){var t=Array.from(e).filter((function(e){return e.selected&&Boolean(e.value)})).map((function(e){return e.value})).join();t&&this.options.wrapWithDelimiter&&(t=",".concat(t,",")),t=t.split(","),this.$emit("input",t)}}},r=a,s=(l("b6e0"),l("2877")),c=Object(s["a"])(r,n,i,!1,null,"d8f2c9d2",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-16b41454.f18bcb43.js.map