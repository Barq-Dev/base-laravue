"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5357],{75357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(47130);const r={props:["form"],components:{TextField:a(52029).Z},data:function(){return{}}};var s=a(51900);const l=(0,s.Z)(r,(function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[t("TextField",{ref:"firstInput",attrs:{name:"nama",label:"Nama Jenis Surat",form:e.form,required:"",autofocus:""}})],1),e._v(" "),t("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[t("v-text-field",{attrs:{label:"Kode"},model:{value:e.form.kode,callback:function(t){e.$set(e.form,"kode",t)},expression:"form.kode"}})],1),e._v(" "),t("v-col",{staticClass:"mt-12",attrs:{cols:"12",sm:"12",md:"12"}},[t("v-textarea",{attrs:{height:"50",label:"Keterangan"},model:{value:e.form.keterangan,callback:function(t){e.$set(e.form,"keterangan",t)},expression:"form.keterangan"}})],1)],1)],1)}),[],!1,null,null,null).exports,n={components:{DataTable:o.Z,ModulForm:l},data:function(){return{moduleName:"Jenis Surat",slots:[],headers:[{text:"Nama",value:"nama"},{text:"Kode",value:"kode"},{text:"Keterangan",value:"keterangan"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const u=(0,s.Z)(n,(function(){var e=this,t=e._self._c;return t("v-card",{attrs:{elevation:"2"}},[t("DataTable",{attrs:{moduleName:e.moduleName,headers:e.headers,formData:!0,slots:e.slots,hasFilter:""},scopedSlots:e._u([{key:"modal-form",fn:function(e){var a=e.editedItem,o=e.save;return[t("ModulForm",{attrs:{form:a},on:{save:o}})]}}])})],1)}),[],!1,null,null,null).exports}}]);