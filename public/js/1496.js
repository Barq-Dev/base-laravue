"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1496],{31496:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(47130),n=a(19934),o=a(20629);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const c={props:["form","dialog"],components:{BarqunVSelect:n.Z},data:function(){return{sanitasis:[],value_type:"",items:[],values:{}}},computed:i(i({},(0,o.rn)("base",["errors"])),(0,o.rn)("auth",["user"])),methods:i(i({},(0,o.OI)("base",["DEL_ERRORS"])),{},{inputType:function(e){var t=this;this.form.sanitasi_id=e.id,"checkbox"==e.type&&(this.values=[]),"multi-option"==e.type&&(this.values={},e.options.forEach((function(e){_.bindKey(t.values,e)}))),this.value_type=e.type,this.items=e.options}}),mounted:function(){var e=this;this.$http("sanitasi",{params:{all:!0}}).then((function(t){var a=t.data;return e.sanitasis=a}))},watch:{values:function(e){this.form.values=e},dialog:function(e){this.value_type="",this.items=[],this.values={}}}};var m=a(51900);const v=(0,m.Z)(c,(function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[t("v-autocomplete",{attrs:{items:e.sanitasis,"item-value":"id","item-text":"nama",label:"Nama",clearable:"","return-object":""},on:{input:e.inputType},model:{value:e.form.sanitasi_id,callback:function(t){e.$set(e.form,"sanitasi_id",t)},expression:"form.sanitasi_id"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},["selectbox"==e.value_type?t("BarqunVSelect",{attrs:{name:"value",form:e.form,items:e.items,label:"Value",required:""}}):"checkbox"==e.value_type?e._l(e.items,(function(a,r){return[t("v-checkbox",{key:r,attrs:{label:a,value:a},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}})]})):"multi-option"==e.value_type?e._l(e.items,(function(a,r){return[t("v-text-field",{key:r,attrs:{name:"name",label:a},model:{value:e.values[a],callback:function(t){e.$set(e.values,a,t)},expression:"values[i]"}})]})):t("v-textarea",{attrs:{placeholder:"Value",label:"Value","no-resize":"",rows:"1",clearable:""},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],2)],1)],1)}),[],!1,null,null,null).exports,f={components:{DataTable:r.Z,ModulForm:v},data:function(){return{moduleName:"Sanitasi Sekolah",params:{with:["sanitasi"]},slots:["value"],headers:[{text:"Nama",value:"sanitasi.nama"},{text:"Value",value:"value"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const p=(0,m.Z)(f,(function(){var e=this,t=e._self._c;return t("v-card",{attrs:{elevation:"2"}},[t("DataTable",{attrs:{moduleName:e.moduleName,headers:e.headers,formData:!0,params:e.params,slots:e.slots},scopedSlots:e._u([{key:"modal-form",fn:function(e){var a=e.editedItem,r=e.save,n=e.dialog;return[t("ModulForm",{attrs:{form:a,dialog:n},on:{save:r}})]}},{key:"value",fn:function(t){var a=t.item;return[e._v("\n     "+e._s(a.value||a.values)+"\n   ")]}}])})],1)}),[],!1,null,null,null).exports}}]);