"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3315],{53315:(a,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(80001),l=t(8093),n=t(39922),o=t(36553);const s={props:["form","dialog"],components:{BarqunDatePicker:l.Z,BarqunVSelect:n.Z,TextField:o.Z},data:function(){return{tahun_ajaran:[]}}};var i=t(51900);const u=(0,i.Z)(s,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[t("TextField",{attrs:{name:"nama",label:"Nama Barang",form:a.form,required:"",autofocus:""}})],1),a._v(" "),t("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[t("BarqunVSelect",{attrs:{name:"klasifikasi_barang",form:a.form,items:["Bergerak","Tidak Bergerak","Uang","Surat Berharga"],itemValue:"value",itemText:"key",label:"Klasifikasi Barang",required:"",clearable:""}})],1),a._v(" "),t("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[t("BarqunVSelect",{attrs:{name:"kategori_barang",form:a.form,items:["Padat","Cair"],itemValue:"value",itemText:"key",label:"Kategori Barang",required:"",clearable:""}})],1)],1)],1)}),[],!1,null,null,null).exports,m={components:{DataTable:r.Z,ModulForm:u},data:function(){return{datatable:{moduleName:"JenisBarang",formData:!0,headers:[{text:"Nama Barang",value:"nama"},{text:"Klasifikasi Barang",value:"klasifikasi_barang"},{text:"Kategori Barang",value:"kategori_barang"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}}};const c=(0,i.Z)(m,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-card",{attrs:{elevation:"2"}},[t("DataTable",a._b({scopedSlots:a._u([{key:"modal-form",fn:function(a){var e=a.editedItem,r=a.save,l=a.dialog;return[t("ModulForm",{attrs:{form:e,dialog:l},on:{save:r}})]}}])},"DataTable",a.datatable,!1))],1)}),[],!1,null,null,null).exports}}]);