(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26b552e9"],{"32cb":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-repeater"},[i("draggable",{staticClass:"row-container",class:{dragging:e.dragging},attrs:{handle:".drag-handle"},on:{start:function(t){e.dragging=!0},end:e.endDrag},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}},e._l(e.rows,(function(t,n){return i("repeater-row",{key:t.__key,attrs:{row:t,fields:e.repeaterFields,inline:e.inline,template:e.options.template,duplicable:e.options.duplicable,open:e.open===n,placeholder:e.options.placeholder},on:{open:function(t){return e.toggleOpen(n)},input:function(t){return e.updateRow(n,t)},remove:function(t){return e.removeRow(n)},duplicate:function(t){return e.duplicateRow(n)}}})})),1),e.addButtonVisible?i("div",{staticClass:"add-new",on:{click:e.addRow}},[i("v-icon",{attrs:{name:"add",color:"--input-icon-color"}}),e._v(" "+e._s(e.options.createItemText)+" ")],1):e._e()],1)},l=[],o=i("fc11"),r=i("d0ff"),s=i("f3f3"),a=(i("99af"),i("caad"),i("d81d"),i("a434"),i("b64b"),i("d3b7"),i("07ac"),i("159b"),i("8db27")),u=i.n(a),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-sheet",{ref:"interfaceRoot",staticClass:"repeater-row"},[i("div",{staticClass:"header"},[i("div",{staticClass:"drag-handle"},[i("v-icon",{attrs:{name:"drag_handle"}})],1),i("div",{staticClass:"content",class:{"two-up":e.inline&&2===e.fields.length}},[e.inline?e._l(e.fields,(function(t){return i("v-ext-input",{key:t.field,attrs:{id:t.interface||"text-input",name:t.field,required:t.required,readonly:t.readonly,options:t.options,type:t.type,datatype:t.datatype,value:e.row[t.field],fields:e.fields,values:e.row,length:t.length,width:t.width},on:{input:function(i){return e.$emit("input",{field:t.field,value:i})}}})})):i("button",{class:e.showPlaceholder?"placeholder":"preview",attrs:{type:"button"},on:{click:function(t){return e.$emit("open")}}},[e._v(" "+e._s(e.showPlaceholder?e.placeholder:e.displayValue)+" ")])],2),e.duplicable?i("v-contextual-menu",{staticClass:"more-options",attrs:{placement:"bottom-end",options:e.rowOptions},on:{click:e.rowOptionsClicked}}):i("button",{attrs:{type:"button"},on:{click:function(t){return e.$emit("remove")}}},[i("v-icon",{staticClass:"remove",attrs:{name:"delete_outline"}})],1)],1),!1===e.inline?i("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"body"},[i("v-form",{attrs:{"full-width":"",fields:e.fields,values:e.row,"new-item":e.newItem},on:{"stage-value":function(t){return e.$emit("input",t)}}})],1):e._e()])},d=[],p=i("1581"),f={name:"RepeaterRow",props:{row:{type:Object,required:!0},fields:{type:Array,required:!0},inline:{type:Boolean,default:!1},template:{type:String,default:null},duplicable:{type:Boolean,default:!1},open:{type:Boolean,default:!1},placeholder:{type:String,required:!0}},computed:{newItem:function(){return!0===this.row.newItem},displayValue:function(){if(!this.template)return this.row[this.fields[0].field];var e=this.$helpers.micromustache.render(this.template,this.row);return e},showPlaceholder:function(){var e=this,t=[this.fields[0].field];this.template&&(t=Object(p["a"])(this.template));var i=t.every((function(t){var i;return null!==e.row[t]&&(null===(i=e.row[t])||void 0===i?void 0:i.length)>0}));return!1===i},rowOptions:function(){return[{text:this.$t("delete"),icon:"delete_outline"},{text:this.$t("duplicate"),icon:"control_point_duplicate"}]}},methods:{rowOptionsClicked:function(e){switch(e){case 0:this.$emit("remove");break;case 1:this.$emit("duplicate");break;default:}}}},h=f,w=(i("9fa5"),i("2877")),m=Object(w["a"])(h,c,d,!1,null,"c79d5056",null),v=m.exports,y=i("8dee"),b=i.n(y),g=i("2ef0"),O={name:"Repeater",components:{RepeaterRow:v},mixins:[u.a],data:function(){return{rows:[],dragging:!1,open:null}},computed:{inline:function(){return!(this.repeaterFields.length>2)&&(1===this.repeaterFields.length||!1!==["full","fill"].includes(this.width)&&this.repeaterFields.every((function(e){return"half"===e.width})))},addButtonVisible:function(){return!this.options.limit||0===this.options.limit||this.rows.length<this.options.limit},repeaterFields:function(){var e=this;return Array.isArray(this.options.fields)?this.options.fields:Object.keys(this.options.fields).map((function(t){return Object(s["a"])(Object(s["a"])({},e.options.fields[t]),{},{field:t})}))}},created:function(){this.setRows()},methods:{addRow:function(){this.rows=[].concat(Object(r["a"])(this.rows),[this.getNewRow()]),this.open=this.rows.length-1,this.emitValue()},updateRow:function(e,t){var i=t.field,n=t.value,l=Object(g["clone"])(this.rows),r=l[e],a=Object(s["a"])(Object(s["a"])({},r),{},Object(o["a"])({},i,n));l[e]=a,this.rows=l,this.emitValue()},removeRow:function(e){var t=Object(g["clone"])(this.rows);t.splice(e,1),this.rows=t,this.emitValue()},duplicateRow:function(e){var t=Object(g["clone"])(this.rows),i=Object(g["clone"])(this.rows[e]);t.splice(e+1,0,i),this.rows=t,this.emitValue()},emitValue:function(){var e=Object(g["clone"])(this.rows).map((function(e){return delete e.__key,e}));if(0===e.length)return this.$emit("input",null);"object"===this.options.structure?this.$emit("input",Object(g["keyBy"])(e,this.options.structure_key)):this.$emit("input",e)},getNewRow:function(){var e={__key:b.a.generate(),newItem:!0};return this.repeaterFields.forEach((function(t){e[t.field]=t.default})),e},setRows:function(){if(null!==this.value)if(Array.isArray(this.value))this.rows=this.value;else if("string"===typeof this.value)try{this.rows=JSON.parse(this.value)}catch(e){console.warn("Invalid JSON passed to repeater")}else this.rows=Object.values(this.value);else this.rows=[]},endDrag:function(){this.dragging=!1,this.emitValue()},toggleOpen:function(e){this.open===e?this.open=null:this.open=e}}},_=O,j=(i("7944"),Object(w["a"])(_,n,l,!1,null,"518346e1",null));t["default"]=j.exports},7944:function(e,t,i){"use strict";i("cfc2")},"8db27":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},"9fa5":function(e,t,i){"use strict";i("d9e4")},cfc2:function(e,t,i){},d9e4:function(e,t,i){}}]);
//# sourceMappingURL=chunk-26b552e9.6b8f979a.js.map