"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1329],{71329:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var l=a(47130),n=a(69074),o=a(19934),r=a(52029),i=a(66421);const s={props:["form","dialog"],components:{BarqunDatePicker:n.Z,BarqunVSelect:o.Z,TextField:r.Z,VFileInput:i.Z},data:function(){return{}}};var c=a(51900);const d=(0,c.Z)(s,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("TextField",{attrs:{name:"nama",label:"Nama",form:t.form,required:"",autofocus:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("VFileInput",{attrs:{form:t.form,name:"file_dokumen",dense:"",label:"File Upload"}})],1)],1)],1)}),[],!1,null,null,null).exports,u={components:{DataTable:l.Z,ModulForm:d},data:function(){return{dialog:!1,srcFile:null,datatable:{moduleName:"Pedoman Kerja",formData:!0,headers:[{text:"#",value:"num",width:"8%",cellClass:"font-weight-black"},{text:"File",value:"file",width:"8%",slot:!0},{text:"Nama",value:"nama",width:"100%",cellClass:"text-button"},{text:"Diupload pada",value:"created_at",cellClass:"text-caption",slot:!0},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}},methods:{preview:function(t){this.dialog=!0,this.srcFile=t.dokumen_link}}};const m=(0,c.Z)(u,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",t._b({scopedSlots:t._u([{key:"modal-form",fn:function(t){var a=t.editedItem,l=t.save,n=t.dialog;return[e("ModulForm",{attrs:{form:a,dialog:n},on:{save:l}})]}},{key:"file",fn:function(a){var l=a.item;return[l.dokumen?e("v-btn",{attrs:{small:"",icon:""},on:{click:function(e){return t.preview(l)}}},[e("v-icon",{attrs:{color:"amber"}},[t._v(" mdi-file-document ")])],1):t._e()]}},{key:"created_at",fn:function(e){var a=e.item;return[t._v("\n      "+t._s(t.$moment(a.created_at).format("DD/MM/YYYY (HH:mm)"))+"\n    ")]}}])},"DataTable",t.datatable,!1)),t._v(" "),e("v-dialog",{attrs:{scrollable:"","max-width":"1000px","max-height":"750px",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",{attrs:{elevation:"8"}},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" Pedoman Kerja ")]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"text-center"},[e("embed",{attrs:{width:"100%",height:"750px",type:"application/pdf",src:t.srcFile}})]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);