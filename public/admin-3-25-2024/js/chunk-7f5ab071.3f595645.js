(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f5ab071"],{1489:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",{staticClass:"type-label",class:{required:"__none__"===t.viewOptions.date},attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.datetime"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.datetime||"__none__",options:t.datetimeOptions,icon:"access_time"},on:{input:function(e){return t.setOption("datetime",e)}}}),n("label",{staticClass:"type-label",class:{required:"__none__"===t.viewOptions.datetime},attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.date"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.date||"__none__",options:t.dateOptions,icon:"today"},on:{input:function(e){return t.setOption("date",e)}}}),n("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.time"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.time||"__none__",options:t.timeOptions,icon:"schedule"},on:{input:function(e){return t.setOption("time",e)}}}),n("label",{staticClass:"type-label required",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.title"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.title||"__none__",options:t.textOptions,icon:"title"},on:{input:function(e){return t.setOption("title",e)}}}),n("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(" "+t._s(t.$t("layouts.calendar.color"))+" ")]),n("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.color||"__none__",options:t.colorOptions,icon:"color_lens"},on:{input:function(e){return t.setOption("color",e)}}})],1)},s=[],a=n("fc11"),o=n("f3f3"),l=(n("b0c0"),n("c3ff")),c=n.n(l),r=n("2ef0"),u={mixins:[c.a],data:function(){return{sortList:null}},computed:{textOptions:function(){var t=Object(r["mapValues"])(this.fields,(function(t){return"string"==t.type||"integer"==t.type?t.name:null}));return Object(r["pickBy"])(t,r["identity"])},dateOptions:function(){var t=Object(o["a"])({__none__:"(".concat(this.$t("dont_show"),")")},Object(r["mapValues"])(this.fields,(function(t){return"date"==t.type?t.name:null})));return Object(r["pickBy"])(t,r["identity"])},datetimeOptions:function(){var t=Object(o["a"])({__none__:"(".concat(this.$t("dont_show"),")")},Object(r["mapValues"])(this.fields,(function(t){return"datetime"==t.type?t.name:null})));return Object(r["pickBy"])(t,r["identity"])},timeOptions:function(){var t=Object(o["a"])({__none__:"(".concat(this.$t("dont_show"),")")},Object(r["mapValues"])(this.fields,(function(t){return"time"==t.type?t.name:null})));return Object(r["pickBy"])(t,r["identity"])},colorOptions:function(){var t=Object(o["a"])({__none__:"(".concat(this.$t("dont_show"),")")},Object(r["mapValues"])(this.fields,(function(t){return"string"==t.type?t.name:null})));return Object(r["pickBy"])(t,r["identity"])}},methods:{setOption:function(t,e){this.$emit("options",Object(o["a"])(Object(o["a"])({},this.viewOptions),{},Object(a["a"])({},t,e)))}}},p=u,d=(n("d585"),n("2877")),_=Object(d["a"])(p,i,s,!1,null,"3ed13022",null);e["default"]=_.exports},"4b3b":function(t,e,n){},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}},d585:function(t,e,n){"use strict";n("4b3b")}}]);
//# sourceMappingURL=chunk-7f5ab071.3f595645.js.map