(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d541dba"],{"0bec":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.tooltipContents,expression:"tooltipContents",modifiers:{right:!0}}],attrs:{name:"code"}})},u=[],r=(n("e9c4"),n("8db27")),i=n.n(r),a={mixins:[i.a],computed:{tooltipContents:function(){return'<pre style="font-family: var(--family-monospace);">'.concat(JSON.stringify(this.value,null,4),"</pre>")}}},o=a,d=n("2877"),p=Object(d["a"])(o,l,u,!1,null,null,null);e["default"]=p.exports},"8db27":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},e9c4:function(t,e,n){var l=n("23e7"),u=n("d066"),r=n("d039"),i=u("JSON","stringify"),a=/[\uD800-\uDFFF]/g,o=/^[\uD800-\uDBFF]$/,d=/^[\uDC00-\uDFFF]$/,p=function(t,e,n){var l=n.charAt(e-1),u=n.charAt(e+1);return o.test(t)&&!d.test(u)||d.test(t)&&!o.test(l)?"\\u"+t.charCodeAt(0).toString(16):t},f=r((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&l({target:"JSON",stat:!0,forced:f},{stringify:function(t,e,n){var l=i.apply(null,arguments);return"string"==typeof l?l.replace(a,p):l}})}}]);
//# sourceMappingURL=chunk-2d541dba.620351f8.js.map