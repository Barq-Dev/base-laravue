"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[846],{80846:(a,t,e)=>{e.r(t),e.d(t,{default:()=>m});var l=e(47130);const o={props:["form"],components:{VFileInput:e(66421).Z}};var r=e(51900);const n=(0,r.Z)(o,(function(){var a=this,t=a._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{outlined:"",label:"Nama"},model:{value:a.form.nama,callback:function(t){a.$set(a.form,"nama",t)},expression:"form.nama"}})],1),a._v(" "),t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{outlined:"",label:"NIK"},model:{value:a.form.nik,callback:function(t){a.$set(a.form,"nik",t)},expression:"form.nik"}})],1),a._v(" "),t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[t("v-textarea",{attrs:{outlined:"",label:"Alamat"},model:{value:a.form.alamat,callback:function(t){a.$set(a.form,"alamat",t)},expression:"form.alamat"}})],1),a._v(" "),t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[t("VFileInput",{attrs:{form:a.form,label:"Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,s={components:{DataTable:l.Z,ModulForm:n},data:function(){return{moduleName:"Pelanggan",headers:[{text:"Nama",value:"nama"},{text:"NIK",value:"nik"},{text:"Alamat",value:"alamat"},{text:"Actions",value:"actions",sortable:!1}]}}};const m=(0,r.Z)(s,(function(){var a=this,t=a._self._c;return t("v-card",{attrs:{elevation:"2"}},[t("DataTable",{attrs:{moduleName:a.moduleName,headers:a.headers,formData:!0},scopedSlots:a._u([{key:"modal-form",fn:function(a){var e=a.editedItem;return[t("ModulForm",{attrs:{form:e}})]}}])})],1)}),[],!1,null,null,null).exports}}]);