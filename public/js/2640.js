"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2640],{92640:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var a=o(47130);const l={props:["form"],components:{BarqunVSelect:o(19934).Z}};var s=o(51900);const n=(0,s.Z)(l,(function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[t("v-text-field",{attrs:{label:"Kategori"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("save")}},model:{value:e.form.kategori,callback:function(t){e.$set(e.form,"kategori",t)},expression:"form.kategori"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[t("v-text-field",{attrs:{label:"Nama"},model:{value:e.form.nama,callback:function(t){e.$set(e.form,"nama",t)},expression:"form.nama"}})],1),e._v(" "),t("v-col",{attrs:{cols:"6",sm:"12",md:"4"}},[t("BarqunVSelect",{attrs:{name:"type",form:e.form,items:["free-text","selectbox","checkbox","multi-option"],label:"Input Type",required:""}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},["free-text"!=e.form.type?t("v-combobox",{attrs:{label:"Options",dense:"",clearable:"","small-chips":"",multiple:"","deletable-chips":""},model:{value:e.form.options,callback:function(t){e.$set(e.form,"options",t)},expression:"form.options"}}):e._e()],1)],1)],1)}),[],!1,null,null,null).exports,r={components:{DataTable:a.Z,ModulForm:n},data:function(){return{moduleName:"Sanitasi",slots:["options"],headers:[{text:"Kategori",value:"kategori"},{text:"Nama",value:"nama"},{text:"Type",value:"type"},{text:"Option",value:"options"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}};const m=(0,s.Z)(r,(function(){var e=this,t=e._self._c;return t("v-card",{attrs:{elevation:"2"}},[t("DataTable",{attrs:{moduleName:e.moduleName,headers:e.headers,formData:!0,slots:e.slots},scopedSlots:e._u([{key:"modal-form",fn:function(e){var o=e.editedItem,a=e.save;return[t("ModulForm",{attrs:{form:o},on:{save:a}})]}},{key:"options",fn:function(t){var o=t.item;return[e._v("\n     "+e._s(o.options)+"\n   ")]}}])})],1)}),[],!1,null,null,null).exports}}]);