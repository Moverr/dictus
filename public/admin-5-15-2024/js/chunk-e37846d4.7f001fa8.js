(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e37846d4"],{5669:function(t,e,n){"use strict";n("7091")},7091:function(t,e,n){},"70bf":function(t,e,n){"use strict";n("fb5a")},"8db27":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},e9c4:function(t,e,n){var a=n("23e7"),l=n("d066"),u=n("d039"),r=l("JSON","stringify"),i=/[\uD800-\uDFFF]/g,o=/^[\uD800-\uDBFF]$/,d=/^[\uDC00-\uDFFF]$/,c=function(t,e,n){var a=n.charAt(e-1),l=n.charAt(e+1);return o.test(t)&&!d.test(l)||d.test(t)&&!o.test(a)?"\\u"+t.charCodeAt(0).toString(16):t},f=u((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&a({target:"JSON",stat:!0,forced:f},{stringify:function(t,e,n){var a=r.apply(null,arguments);return"string"==typeof a?a.replace(i,c):a}})},ee37:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"readonly-map"},[n("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.location,expression:"location"}],class:t.value?"":"empty",attrs:{name:"place"}})],1)},l=[],u=(n("99af"),n("e9c4"),n("b64b"),n("8db27")),r=n.n(u),i={name:"ReadonlyMap",mixins:[r.a],computed:{location:function(){var t="";if(this.value){var e=JSON.parse(JSON.stringify(this.value));t='\n        <table class="map-value-tooltip">\n          <tr>\n            <td>Latitude</td>\n            <td>'.concat(e.lat,"</td>\n          </tr>\n          <tr>\n            <td>Longitude</td>\n            <td>").concat(e.lng,"</td>\n          </tr>\n        </table>")}else t=this.$t("interfaces.map.no_location");return t}}},o=i,d=(n("5669"),n("70bf"),n("2877")),c=Object(d["a"])(o,a,l,!1,null,"04c97e5e",null);e["default"]=c.exports},fb5a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-e37846d4.7f001fa8.js.map