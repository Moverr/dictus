(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-541794ae"],{"08eb":function(e,t,i){},"3cbc":function(e,t,i){"use strict";i("08eb")},bac0:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"layout"},[i("v-table",{ref:"table",class:e.viewOptions.spacing,attrs:{items:e.items,columns:e.columns,collection:e.collection,"primary-key-field":e.primaryKeyField,selection:e.selection,"sort-val":e.sortVal,"row-height":e.rowHeight,loading:e.loading,"lazy-loading":e.lazyLoading,"column-widths":e.viewOptions.widths||{},link:e.link,"use-interfaces":!0,"manual-sort-field":e.sortField},on:{sort:e.sort,widths:e.setWidths,select:function(t){return e.$emit("select",t)},"scroll-end":function(t){return e.$emit("next-page")},input:function(t){return e.$emit("input",t)}}})],1)},r=[],s=(i("4de4"),i("d81d"),i("fb6a"),i("4e82"),i("b0c0"),i("d3b7"),i("07ac"),i("ac1f"),i("5319"),i("2ca0"),i("c3ff")),l=i.n(s),o={mixins:[l.a],computed:{columns:function(){var e,t=this,i=Object.values(this.fields);return e=this.viewQuery.fields?Array.isArray(this.viewQuery.fields)?this.viewQuery.fields:this.viewQuery.fields.split(","):i.filter((function(e){return!1===e.primary_key||"0"===e.primary_key})).filter((function(e){return!0!==e.hidden_browse})).slice(0,4).map((function(e){return e.field})),e.filter((function(e){return t.fields[e]})).map((function(e){var i=t.fields[e],n=i.name;return{field:e,name:n,fieldInfo:i}}))},rowHeight:function(){return"comfortable"===this.viewOptions.spacing?48:"cozy"===this.viewOptions.spacing?40:"compact"===this.viewOptions.spacing?32:48},sortVal:function(){var e=this.viewQuery&&this.viewQuery["sort"]||this.primaryKeyField;return{asc:!e.startsWith("-"),field:e.replace("-","")}}},watch:{sortVal:function(e,t){e!==t&&(this.$refs.table.$el.scrollTop=0)}},methods:{sort:function(e){var t=(e.asc?"":"-")+e.field;this.$emit("query",{sort:t})},setWidths:function(e){this.$emit("options",{widths:e})}}},a=o,c=(i("3cbc"),i("2877")),u=Object(c["a"])(a,n,r,!1,null,"e3efc7b6",null);t["default"]=u.exports},c3ff:function(e,t){e.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}}}]);
//# sourceMappingURL=chunk-541794ae.6f2291c0.js.map