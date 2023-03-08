"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3990],{53990:(t,e,o)=>{o.r(e),o.d(e,{default:()=>d});var r=o(47130),n=o(66421),a=o(20629);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){c(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e,o){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const u={props:["form"],components:{VFileInput:n.Z},data:function(){return{position:[]}},computed:s(s({},(0,a.rn)("base",["errors"])),(0,a.rn)("auth",["user"])),methods:s({},(0,a.OI)("base",["DEL_ERRORS"])),mounted:function(){var t=this;this.$http("teams/distinct/position").then((function(e){var o=e.data;return t.position=o}))}};var m=o(51900);const f=(0,m.Z)(u,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Nama",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-combobox",{attrs:{items:t.position,"item-value":"id","item-text":"name",label:"Posisi",clearable:"","small-chips":"",error:t.errors.position,"error-messages":t.errors.position},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("save")},input:function(e){return t.DEL_ERRORS("position")}},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"No HP",type:"number"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("v-textarea",{attrs:{height:"50",label:"Alamat"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("VFileInput",{attrs:{form:t.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,p={components:{DataTable:r.Z,ModulForm:f},data:function(){return{pic:"",dialog:!1,moduleName:"Teams",slots:["image"],headers:[{text:"Foto",value:"image"},{text:"Nama Tim",value:"name"},{text:"Posisi",value:"position"},{text:"Nomor HP",value:"phone"},{text:"Email",value:"email"},{text:"Alamat",value:"address"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},methods:{openPic:function(t){this.dialog=!0,this.pic=t},cancel:function(){this.dialog=!1}}};const d=(0,m.Z)(p,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,formData:!0,slots:t.slots},scopedSlots:t._u([{key:"modal-form",fn:function(t){var o=t.editedItem;return[e("ModulForm",{attrs:{form:o}})]}},{key:"image",fn:function(o){var r=o.item;return[e("v-btn",{attrs:{icon:""}},[e("v-list-item-avatar",[e("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-img",{attrs:{src:t.pic,alt:"",contain:""}})],1)],1),t._v(" "),e("img",{attrs:{width:"90",src:r.image_link,alt:"Foto",contain:""},on:{click:function(e){return t.openPic(r.image_link)}}})],1)],1)]}}])})],1)}),[],!1,null,null,null).exports}}]);