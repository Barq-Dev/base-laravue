"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2424],{12424:(t,a,e)=>{e.r(a),e.d(a,{default:()=>m});var o=e(47130);const l={props:["form"],components:{VFileInput:e(66421).Z}};var n=e(51900);const s=(0,n.Z)(l,(function(){var t=this,a=t._self._c;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Nama"},model:{value:t.form.nama,callback:function(a){t.$set(t.form,"nama",a)},expression:"form.nama"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"NIK"},model:{value:t.form.nik,callback:function(a){t.$set(t.form,"nik",a)},expression:"form.nik"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Jabatan"},model:{value:t.form.jabatan,callback:function(a){t.$set(t.form,"jabatan",a)},expression:"form.jabatan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-text-field",{attrs:{label:"Pendidikan"},model:{value:t.form.pendidikan,callback:function(a){t.$set(t.form,"pendidikan",a)},expression:"form.pendidikan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("VFileInput",{attrs:{form:t.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,r={components:{DataTable:o.Z,ModulForm:s},data:function(){return{moduleName:"Petugas",slots:["foto"],headers:[{text:"Foto",value:"foto",sortable:!1},{text:"Nama",value:"nama"},{text:"NIK",value:"nik"},{text:"Jabatan",value:"jabatan"},{text:"Pendidikan",value:"pendidikan"},{text:"Actions",value:"actions",sortable:!1}]}}};const m=(0,n.Z)(r,(function(){var t=this,a=t._self._c;return a("v-card",{attrs:{elevation:"2"}},[a("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,slots:t.slots,formData:!0},scopedSlots:t._u([{key:"modal-form",fn:function(t){var e=t.editedItem;return[a("ModulForm",{attrs:{form:e}})]}},{key:"foto",fn:function(t){var e=t.item;return[a("img",{attrs:{width:"50",src:"/storage/uploads/foto/".concat(e.foto),alt:"Fotomu"}})]}}])})],1)}),[],!1,null,null,null).exports}}]);