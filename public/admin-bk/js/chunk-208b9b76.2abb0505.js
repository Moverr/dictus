(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-208b9b76"],{"6ded":function(t,e,a){"use strict";a("a198")},"8db27":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},a198:function(t,e,a){},a2c4:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userInfo?a("div",{staticClass:"user-updated"},["name"!==t.options.display?a("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===t.options.display?t.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"avatar",attrs:{"x-small":""}},[t.src?a("img",{attrs:{src:t.src}}):a("v-icon",{attrs:{name:"person",small:""}})],1):t._e(),"avatar"!==t.options.display?a("span",{staticClass:"name"},[t._v(" "+t._s(t.displayValue)+" ")]):t._e(),a("v-icon",{attrs:{name:"account_box",color:"--input-icon-color"}})],1):t.newItem?a("v-input",{attrs:{readonly:!0,placeholder:t.$t("interfaces.user.updated-you"),"icon-right":"account_box"}}):a("v-input",{attrs:{readonly:!0,placeholder:t.$t("interfaces.user-updated.unknown"),"icon-right":"account_box"}})},n=[],s=a("0122"),r=a("8db27"),u=a.n(r),i={mixins:[u.a],computed:{userInfo:function(){return this.value?"object"===Object(s["a"])(this.value)?this.value.first_name?this.value:this.$store.state.users[this.value.id]:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}},o=i,p=(a("6ded"),a("2877")),d=Object(p["a"])(o,l,n,!1,null,"13288a88",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-208b9b76.2abb0505.js.map