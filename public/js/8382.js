"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8382],{48382:(a,e,t)=>{t.r(e),t.d(e,{default:()=>i});var n=t(47130);const l={props:["form"],components:{BarqunDatePicker:t(69074).Z},data:function(){return{mbs:[{key:"Iya",value:"Iya"},{key:"Tidak",value:"Tidak"}],memungut_iuran:[{key:"Iya",value:"Iya"},{key:"Tidak",value:"Tidak"}]}}};var s=t(51900);const o=(0,s.Z)(l,(function(){var a=this,e=a._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{autofocus:"",label:"SK Pendirian Sekolah"},model:{value:a.form.sk_pendirian,callback:function(e){a.$set(a.form,"sk_pendirian",e)},expression:"form.sk_pendirian"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("BarqunDatePicker",{attrs:{label:"Tanggal SK Pendirian",picker:"YEAR",field:"sk_tgl_pendirian",form:a.form}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"SK Izin Operasional"},model:{value:a.form.sk_izin_operasional,callback:function(e){a.$set(a.form,"sk_izin_operasional",e)},expression:"form.sk_izin_operasional"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("BarqunDatePicker",{attrs:{label:"Tanggal SK Izin Operasional",picker:"YEAR",field:"sk_tgl_izin_operasional",form:a.form}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Nama Bank"},model:{value:a.form.nama_bank,callback:function(e){a.$set(a.form,"nama_bank",e)},expression:"form.nama_bank"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Nomor Rekening"},model:{value:a.form.no_rek,callback:function(e){a.$set(a.form,"no_rek",e)},expression:"form.no_rek"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Cabang KCP/Unit"},model:{value:a.form.cabang_kcp,callback:function(e){a.$set(a.form,"cabang_kcp",e)},expression:"form.cabang_kcp"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Rekening Atas Nama"},model:{value:a.form.an_rek,callback:function(e){a.$set(a.form,"an_rek",e)},expression:"form.an_rek"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Nama Wajib Pajak"},model:{value:a.form.an_wajib_pajak,callback:function(e){a.$set(a.form,"an_wajib_pajak",e)},expression:"form.an_wajib_pajak"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"NPWP",type:"number"},model:{value:a.form.npwp,callback:function(e){a.$set(a.form,"npwp",e)},expression:"form.npwp"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Kebutuhan Khusu Dilayani",type:"number"},model:{value:a.form.kebutuhan_khusus_dilayani,callback:function(e){a.$set(a.form,"kebutuhan_khusus_dilayani",e)},expression:"form.kebutuhan_khusus_dilayani"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{attrs:{label:"Nominal/Siswa",type:"number"},model:{value:a.form.nominal,callback:function(e){a.$set(a.form,"nominal",e)},expression:"form.nominal"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-select",{attrs:{items:a.mbs,"item-value":"value","item-text":"key",label:"MBS",required:""},model:{value:a.form.mbs,callback:function(e){a.$set(a.form,"mbs",e)},expression:"form.mbs"}})],1),a._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-select",{attrs:{items:a.memungut_iuran,"item-value":"value","item-text":"key",label:"Memungut Iuran",required:""},model:{value:a.form.memungut_iuran,callback:function(e){a.$set(a.form,"memungut_iuran",e)},expression:"form.memungut_iuran"}})],1)],1)],1)}),[],!1,null,null,null).exports,r={components:{DataTable:n.Z,ModulForm:o},data:function(){return{moduleName:"Data Pelengkap",slots:["skTglPendirian","skTglOperasional"],headers:[{text:"SK Pendirian",value:"sk_pendirian"},{text:"Tanggal SK Pendirian",value:"skTglPendirian"},{text:"Status Kepemilikan",value:"status_kepemilikan"},{text:"SK Izin Operasional",value:"sk_izin_operasional"},{text:"Tanggal SK Izin Operasional",value:"skTglOperasional"},{text:"Nama Bank",value:"nama_bank"},{text:"Rekening AN",value:"an_rek"},{text:"Nominal/Siswa",value:"nominal"},{text:"Nama Wajib Pajak",value:"an_wajib_pajak"},{text:"NPWP",value:"npwp"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const i=(0,s.Z)(r,(function(){var a=this,e=a._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",{attrs:{moduleName:a.moduleName,headers:a.headers,formData:!0,slots:a.slots},scopedSlots:a._u([{key:"modal-form",fn:function(a){var t=a.editedItem,n=a.save;return[e("ModulForm",{attrs:{form:t},on:{save:n}})]}},{key:"skTglPendirian",fn:function(e){var t=e.item;return[a._v("\n      "+a._s(a.$moment(t.sk_tgl_pendirian).format("DD-MM-Y"))+"\n    ")]}},{key:"skTglOperasional",fn:function(e){var t=e.item;return[a._v("\n      "+a._s(a.$moment(t.sk_tgl_izin_operasional).format("DD-MM-Y"))+"\n    ")]}}])})],1)}),[],!1,null,null,null).exports}}]);