"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6471],{96471:(a,e,t)=>{t.r(e),t.d(e,{default:()=>c});var n=t(47130),r=t(69074),s=t(19934),l=t(52029);const o={props:["form","dialog"],components:{BarqunDatePicker:r.Z,BarqunVSelect:s.Z,TextField:l.Z},data:function(){return{tahun_ajaran:[]}},methods:{getTahunAjaran:function(){var a=this;this.$http("tahun-ajaran",{params:{all:!0,pluck:["tahun"]}}).then((function(e){var t=e.data;return a.tahun_ajaran=t}))}},mounted:function(){this.getTahunAjaran()},watch:{dialog:function(a){a&&this.getTahunAjaran()}}};var u=t(51900);const m=(0,u.Z)(o,(function(){var a=this,e=a._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("TextField",{attrs:{name:"nama",label:"Nama",form:a.form,required:"",autofocus:""}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{type:"number",min:"0",step:"0.01",label:"Panjang"},model:{value:a.form.panjang,callback:function(e){a.$set(a.form,"panjang",e)},expression:"form.panjang"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{type:"number",min:"0",step:"0.01",label:"Lebar"},model:{value:a.form.lebar,callback:function(e){a.$set(a.form,"lebar",e)},expression:"form.lebar"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{type:"number",min:"0",step:"0.01",label:"Persentase Tingkat Kerusakan"},model:{value:a.form.persentase_kerusakan,callback:function(e){a.$set(a.form,"persentase_kerusakan",e)},expression:"form.persentase_kerusakan"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Status Kepemilikan"},model:{value:a.form.status_kepemilikan,callback:function(e){a.$set(a.form,"status_kepemilikan",e)},expression:"form.status_kepemilikan"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("v-textarea",{attrs:{label:"Keterangan"},model:{value:a.form.keterangan,callback:function(e){a.$set(a.form,"keterangan",e)},expression:"form.keterangan"}})],1)],1)],1)}),[],!1,null,null,null).exports,i={components:{DataTable:n.Z,ModulForm:m},data:function(){return{moduleName:"Prasarana",headers:[{text:"Nama",value:"nama"},{text:"Panjang",value:"panjang"},{text:"Lebar",value:"lebar"},{text:"% Kerusakan",value:"persentase_kerusakan"},{text:"Status Kepemilikan",value:"status_kepemilikan"},{text:"Keterangan",value:"keterangan"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const c=(0,u.Z)(i,(function(){var a=this,e=a._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",{attrs:{moduleName:a.moduleName,headers:a.headers,formData:!0,btnImport:"",btnExport:""},scopedSlots:a._u([{key:"modal-form",fn:function(a){var t=a.editedItem,n=a.save,r=a.dialog;return[e("ModulForm",{attrs:{form:t,dialog:r},on:{save:n}})]}}])})],1)}),[],!1,null,null,null).exports}}]);