(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c0c223"],{"17cd":function(e,t,n){"use strict";n("6579")},6579:function(e,t,n){},"8db27":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},db31:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0===Object.keys(e.interfaceOptions).length?n("v-notice",[e._v(" "+e._s(e.$t("interface_has_no_options"))+" ")]):e.interfaceOptions?n("v-sheet",[n("form",{on:{submit:function(e){e.preventDefault()}}},e._l(e.interfaceOptions,(function(t,i){return n("div",{key:i,staticClass:"options"},[n("label",{attrs:{for:i}},[e._v(e._s(t.name))]),n("v-ext-input",{attrs:{id:t.interface,name:i,type:t.type,length:t.length,readonly:t.readonly,required:t.required,loading:t.loading,options:t.options,value:(e.value||{})[i],fields:e.interfaceOptions,values:e.val},on:{input:function(t){return e.stageValue(i,t)}}}),n("p",{staticClass:"note",domProps:{innerHTML:e._s(e.$helpers.snarkdown(t.comment||""))}})],1)})),0)]):n("v-notice",[e._v(" "+e._s(e.$t("select_interface"))+" ")])},a=[],l=n("fc11"),r=(n("d3b7"),n("ddb0"),n("8db27")),u=n.n(r),o=n("2ef0"),s={name:"InterfaceOptions",mixins:[u.a],computed:{interfaceName:function(){var e=this.options.interfaceField;if(e)return this.values[e]},interfaceOptions:function(){if(this.interfaceName)return this.$store.state.extensions.interfaces[this.interfaceName].options},val:function(){return Array.isArray(this.value)?{}:this.value}},methods:{stageValue:function(e,t){var n=Object(o["clone"])(this.value||{}),i=Object(o["merge"])(n,Object(l["a"])({},e,t));this.$emit("input",i)}}},c=s,f=(n("17cd"),n("2877")),p=Object(f["a"])(c,i,a,!1,null,"2a01c07c",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-34c0c223.0ed35770.js.map