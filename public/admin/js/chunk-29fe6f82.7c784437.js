(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29fe6f82"],{"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},"8df3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interface-toggle-icon"},[n("input",{attrs:{id:t.randomID,type:"checkbox",disabled:t.readonly},on:{change:function(e){return t.updateValue(e.target.checked)}}}),n("label",{style:{color:"var(--"+t.colorChange+")"},attrs:{for:t.randomID}},[n("v-icon",{attrs:{name:t.icon}}),n("span",[t._v(t._s(t.textChange))])],1)])},l=[],a=n("8db2"),o=n.n(a),u=n("8dee"),r=n.n(u),c={name:"InterfaceToggleIcon",mixins:[o.a],computed:{icon:function(){return this.value?this.options.iconActive:this.options.iconInactive},colorChange:function(){return this.value?this.options.colorActive:this.options.colorInactive},textChange:function(){return this.value?this.options.textActive:this.options.textInactive},randomID:function(){return r.a.generate()}},methods:{updateValue:function(t){this.$emit("input",t)}}},d=c,s=(n("f065"),n("2877")),f=Object(s["a"])(d,i,l,!1,null,"5662b074",null);e["default"]=f.exports},de5f:function(t,e,n){},f065:function(t,e,n){"use strict";var i=n("de5f"),l=n.n(i);l.a}}]);
//# sourceMappingURL=chunk-29fe6f82.7c784437.js.map