"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9239],{9239:(t,a,n)=>{n.r(a),n.d(a,{default:()=>S});var e=n(47130),r=n(69074),i=n(19934),s=n(66421),o=n(52029),l=n(20629);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function p(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function v(t,a,n){return(a=function(t){var a=function(t,a){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,a||"default");if("object"!==_(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===_(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}const m={props:["form","dialog"],components:{BarqunDatePicker:r.Z,BarqunVSelect:i.Z,TextField:o.Z,VFileInput:s.Z},data:function(){return{penyidik:{},item:{tahanan:{}},loading:!1,searching:!1}},mounted:function(){this.penyidik=this._.isObject(this.form.penyidik)?this.form.penyidik:{},this.form.resor=this.form.resor||this.user.meta&&this.user.meta.resor},methods:{selectedData:function(t){t.id&&(this.$set(this.form,"id",t.id),this.$set(this.form,"penahanan",t.penahanan),this.$set(this.form,"nama",t.nama),this.$set(this.form,"tempat_lahir",t.tempat_lahir),this.$set(this.form,"tgl_lahir",t.tgl_lahir),this.$set(this.form,"agama",t.agama),this.$set(this.form,"jekel",t.jekel),this.$set(this.form,"pekerjaan",t.pekerjaan),this.$set(this.form,"alamat",t.alamat),this.$set(this.form,"foto",t.foto))},handleFileUpload:function(t){this.form["file_"+t]=this.$refs[t].getFiles().length?this.$refs[t].getFiles()[0].file:null},getFiles:function(t){return this.form.id&&this.form[t]?["/storage/uploads/foto/"+this.form[t]]:""},download:function(){var t=this;this.loading=!0,setTimeout((function(){window.open("http://sitanti.test/storage/uploads/files/".concat(t.form.sprin_penahanan_file),"_blank"),t.loading=!1}),1e3)}},computed:function(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){v(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}({},(0,l.rn)("auth",["user"])),watch:{"form.id":function(){this.penyidik=this._.isObject(this.form.penyidik)?this.form.penyidik:{},this.form.resor=this.form.resor||this.user.meta&&this.user.meta.resor},penyidik:{deep:!0,handler:function(t){this.form.penyidik=t}}}};var c=n(51900);const d=(0,c.Z)(m,(function(){var t=this,a=t._self._c;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" DATA UMUM")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"2"}},[a("file-pond",{ref:"foto",attrs:{"label-idle":"Foto","accepted-file-types":"image/jpeg, image/png",files:t.getFiles("foto"),allowDownloadByUrl:!0},on:{updatefiles:function(a){return t.handleFileUpload("foto")}}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"10"}},[t.searching?a("BarqunVSelect",{attrs:{autocomplete:"",name:"tahanan",form:t.item,itemValue:"id",itemText:"nama",label:"Nama",url:"tahanan?with=penahanan",required:"",clearable:"","hide-details":"","return-object":""},on:{input:t.selectedData},scopedSlots:t._u([{key:"item",fn:function(n){var e=n.item;return[a("v-list-item-avatar",[a("img",{attrs:{src:e.foto_link}})]),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v("\n              "+t._s(e.nama)+"\n            ")]),t._v(" "),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.pasal_dilanggar)}})],1)]}}],null,!1,1414775507)},[a("v-btn",{attrs:{slot:"append-outer",icon:"",small:""},on:{click:function(a){t.searching=!1}},slot:"append-outer"},[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-checkbox-marked")])],1)],1):a("TextField",{ref:"firstInput",attrs:{name:"nama",label:"Nama",form:t.form,required:"",autofocus:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,r=n.attrs;return[a("v-btn",t._g(t._b({staticClass:"rounded-xl",attrs:{color:"amber",small:""},on:{click:function(a){t.searching=!0}}},"v-btn",r,!1),e),[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-magnify")])],1)]}}])},[t._v(" "),a("span",[t._v("Cari/Pilih Tahanan Lama")])])]},proxy:!0}])})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("TextField",{attrs:{name:"tempat_lahir",label:"Tempat Lahir",form:t.form,required:""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal Lahir",picker:"YEAR",field:"tgl_lahir",form:t.form,required:""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("BarqunVSelect",{attrs:{name:"agama",form:t.form,items:["Islam","Protestan","Katolik","Hindu","Budha","Konghucu"],itemValue:"value",itemText:"key",label:"Agama",required:"",clearable:"","hide-details":""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("BarqunVSelect",{attrs:{name:"jekel",form:t.form,items:["Laki-laki","Perempuan"],itemValue:"value",itemText:"key",label:"Jenis Kelamin",required:"",clearable:""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Pekerjaan"},model:{value:t.form.pekerjaan,callback:function(a){t.$set(t.form,"pekerjaan",a)},expression:"form.pekerjaan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-textarea",{attrs:{outlined:"",height:"50",rules:[function(t){return!!t||"Required."}],error:!1},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n          Alamat\n          "),a("span",{staticClass:"red--text"},[a("strong",[t._v(" *")])])]},proxy:!0}]),model:{value:t.form.alamat,callback:function(a){t.$set(t.form,"alamat",a)},expression:"form.alamat"}})],1),t._v(" "),t.form.id?[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" RIWAYAT PENAHANAN")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Tgl")]),t._v(" "),a("th",[t._v("Sprin Penahanan")]),t._v(" "),a("th",[t._v("Pasal")]),t._v(" "),a("th",[t._v("SATKER")]),t._v(" "),a("th",[t._v("Resor")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[t._l(t.form.penahanan,(function(n,e){return a("tr",{key:e},[a("td",[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v(t._s(t.$moment(n.tgl_sprin_penahanan).format("DD/MM/YYYY")))]),t._v(" "),a("td",[t._v(t._s(n.sprin_penahanan))]),t._v(" "),a("td",[t._v(t._s(n.pasal_dilanggar))]),t._v(" "),a("td",[t._v(t._s(n.satker))]),t._v(" "),a("td",[t._v(t._s(n.resor))]),t._v(" "),a("td",[a("v-btn",{attrs:{small:"",icon:"",elevation:"",color:"info"}},[a("v-icon",[t._v("mdi-eye")])],1)],1)])})),t._v(" "),t.form.penahanan.length?t._e():a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"7"}},[a("span",[t._v("Tidak ada data riwayat")])])])],2)]},proxy:!0}],null,!1,4143635379)}),t._v(" "),a("v-divider")],1)]:t._e(),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" PENYIDIK")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Nama Penyidik"},model:{value:t.penyidik.nama,callback:function(a){t.$set(t.penyidik,"nama",a)},expression:"penyidik.nama"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"No HP"},model:{value:t.penyidik.no_hp,callback:function(a){t.$set(t.penyidik,"no_hp",a)},expression:"penyidik.no_hp"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" DATA PENAHANAN")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Pasal Dilanggar"},model:{value:t.form.pasal_dilanggar,callback:function(a){t.$set(t.form,"pasal_dilanggar",a)},expression:"form.pasal_dilanggar"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("v-text-field",{attrs:{label:"SATKER"},model:{value:t.form.satker,callback:function(a){t.$set(t.form,"satker",a)},expression:"form.satker"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("BarqunVSelect",{attrs:{name:"resor",form:t.form,items:["Berau","Kutai Barat","Kutai Kartanegara","Kutai Timur","Paser","Penajam Paser Utara","Balikpapan","Bontang","Samarinda"],readonly:!t.userRole("admin"),label:"RESOR",clearable:"","hide-details":""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[a("BarqunVSelect",{attrs:{autocomplete:"",name:"tempat_penahanan_id",form:t.form,url:"tempat-tahanan",itemValue:"id",itemText:"nama",label:"Tempat Penahanan",required:""}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("v-text-field",{attrs:{label:"SP Penahanan"},model:{value:t.form.sprin_penahanan,callback:function(a){t.$set(t.form,"sprin_penahanan",a)},expression:"form.sprin_penahanan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal",picker:"YEAR",field:"tgl_sprin_penahanan",form:t.form}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Jenis Perkara"},model:{value:t.form.perkara,callback:function(a){t.$set(t.form,"perkara",a)},expression:"form.perkara"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("VFileInput",{attrs:{form:t.form,name:"file_sprin_penahanan_file",dense:"",label:"File Upload"}})],1),t._v(" "),t.form.sprin_penahanan_file?a("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var e=n.on,r=n.attrs;return[a("v-btn",t._g(t._b({attrs:{loading:t.loading,outlined:"",color:"success",dark:""},on:{click:t.download}},"v-btn",r,!1),e),[a("v-icon",[t._v("mdi-file-document")]),t._v(" SP Penahanan\n          ")],1)]}}],null,!1,3246940844)},[t._v(" "),a("span",[t._v("Download File")])])],1):t._e(),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" PERPANJANGAN ")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Perpanjangan 1"},model:{value:t.form.perpanjangan_penahanan,callback:function(a){t.$set(t.form,"perpanjangan_penahanan",a)},expression:"form.perpanjangan_penahanan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal",picker:"YEAR",field:"tgl_perpanjangan_penahanan",form:t.form}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Perpanjangan 2"},model:{value:t.form.perpanjangan_penahanan_dua,callback:function(a){t.$set(t.form,"perpanjangan_penahanan_dua",a)},expression:"form.perpanjangan_penahanan_dua"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal",picker:"YEAR",field:"tgl_perpanjangan_penahanan_dua",form:t.form}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Perpanjangan 3"},model:{value:t.form.perpanjangan_penahanan_tiga,callback:function(a){t.$set(t.form,"perpanjangan_penahanan_tiga",a)},expression:"form.perpanjangan_penahanan_tiga"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal",picker:"YEAR",field:"tgl_perpanjangan_penahanan_tiga",form:t.form}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("label",{attrs:{for:""}},[a("b",[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-box")]),t._v(" PENGELUARAN ")],1)])]),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-text-field",{attrs:{label:"SP Pengeluaran Tahanan"},model:{value:t.form.sprin_pengeluaran_tahanan,callback:function(a){t.$set(t.form,"sprin_pengeluaran_tahanan",a)},expression:"form.sprin_pengeluaran_tahanan"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("BarqunDatePicker",{attrs:{label:"Tanggal",picker:"YEAR",field:"tgl_sprin_pengeluaran_tahanan",form:t.form}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("BarqunVSelect",{attrs:{name:"opsi_pengeluaran_tahanan",form:t.form,items:["Tahap 2","Pembataran","Penanguhan","SP 3"],label:"Pengeluaran",clearable:"","hide-details":""}})],1)],2)],1)}),[],!1,null,null,null).exports;function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?f(Object(n),!0).forEach((function(a){g(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function g(t,a,n){return(a=function(t){var a=function(t,a){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,a||"default");if("object"!==u(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===u(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}const b={props:["id"],data:function(){return{}},mounted:function(){this.load()},computed:h(h({},(0,l.rn)("base",["loading","item"])),{},{filteredItem:function(){return this._.difference(Object.keys(this.item),["id","satuan_id","created_by","tempat_penahanan_id","tempat_lahir","tgl_lahir","created_at","foto","foto_link","penyidik","status","tanggal","updated_at","jekel","ttl","status_penahanan","satker","pasal_dilanggar","tempat","pekerjaan","alamat","sprin_penahanan","perpanjangan_penahanan","perpanjangan_penahanan_dua","perpanjangan_penahanan_tiga","sprin_pengeluaran_tahanan","opsi_pengeluaran_tahanan","masa_tahanan","riwayat_penahanan","sprin_penahanan_file","tgl_sprin_penahanan","tgl_perpanjangan_penahanan","tgl_perpanjangan_penahanan_dua","tgl_perpanjangan_penahanan_tiga","tgl_sprin_pengeluaran_tahanan"])},itemAfter:function(){return{nama:{jenis_kelamin:this.item.jekel,tempat_tgl_lahir:this.item.ttl},agama:{pekerjaan:this.item.pekerjaan,alamat:this.item.alamat}}}}),watch:{id:function(){this.load()}},methods:h(h({},(0,l.nv)("base",["getData"])),{},{action:function(t,a){this.$emit("action",{type:t,data:a})},load:function(){this.getData({customUrl:"tahanan",id:this.id||this.$route.params.id,params:{with:["tempat"]}})}})};const y=(0,c.Z)(b,(function(){var t=this,a=t._self._c;return a("div",[a("v-card",{attrs:{loading:t.loading}},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" Detail Tahanan ")]),t._v(" "),a("v-divider"),t._v(" "),t.$vuetify.breakpoint.mobile?a("v-row",{staticClass:"mx-auto mt-2"},[a("v-img-preview",{attrs:{src:t.item.foto_link,width:"100%"}}),t._v(" "),a("v-col",{staticClass:"text-button",attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-thick")]),t._v("\n        Data Diri\n        "),a("v-divider")],1),t._v(" "),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",sm:"12"}},t._l(t.filteredItem,(function(n){return a("span",{key:n},[a("span",{staticClass:"text-overline text-weight-bold"},[t._v("\n            "+t._s(t._.startCase(n))+"\n          ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v(t._s(t.item[n]||"-"))]),t._v(" "),a("v-divider"),t._v(" "),t.itemAfter[n]?t._l(t.itemAfter[n],(function(n,e){return a("span",{key:e},[a("span",{staticClass:"text-overline text-weight-bold"},[t._v("\n                "+t._s(t._.startCase(e))+"\n              ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v(t._s(t.item[e]||"-"))]),t._v(" "),a("v-divider")],1)})):t._e()],2)})),0),t._v(" "),a("v-col",{staticClass:"text-button",attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-thick")]),t._v("\n        Data Penahanan\n        "),a("v-divider")],1),t._v(" "),a("v-col",{staticClass:"pt-0",attrs:{cols:"12",sm:"12"}},[a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" Pasal dilanggar ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v(t._s(t.item.pasal_dilanggar||"-"))]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" Tempat Penahanan ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.tempat&&t.item.tempat.nama||"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SP Penahanan ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.sprin_penahanan)+"\n          "+t._s(t.item.tgl_sprin_penahanan?"(".concat(t.$moment(t.item.tgl_sprin_penahanan).format("D/M/Y"),")"):"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SATKER ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.satker)+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" Nama Penyidik ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.penyidik&&t.item.penyidik.nama)+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" No Hp ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.penyidik&&t.item.penyidik.no_hp)+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SP Perpanjangan ")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.perpanjangan_penahanan)+"\n          "+t._s(t.item.tgl_perpanjangan_penahanan?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan).format("D/M/Y"),")"):"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SP Perpanjangan 2")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.perpanjangan_penahanan_dua)+"\n          "+t._s(t.item.tgl_perpanjangan_penahanan_dua?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan_dua).format("D/M/Y"),")"):"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SP Perpanjangan 3")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.perpanjangan_penahanan_tiga)+"\n          "+t._s(t.item.tgl_perpanjangan_penahanan_tiga?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan_tiga).format("D/M/Y"),")"):"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" SP Pengeluaran")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.sprin_pengeluaran_tahanan)+"\n          "+t._s(t.item.tgl_sprin_pengeluaran_tahanan?"(".concat(t.$moment(t.item.tgl_sprin_pengeluaran_tahanan).format("D/M/Y"),")"):"-")+"\n        ")]),t._v(" "),a("v-divider"),t._v(" "),a("span",{staticClass:"text-overline text-weight-bold"},[t._v(" Opsi Pengeluaran")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text-caption"},[t._v("\n          "+t._s(t.item.opsi_pengeluaran_tahanan)+"\n        ")]),t._v(" "),a("v-divider")],1)],1):a("div",[a("v-col",{staticClass:"text-lg-button ml-3",attrs:{cols:"12",lg:"12",sm:"12"}},[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-thick")]),t._v("\n        Data Diri\n        "),a("v-divider")],1),t._v(" "),a("v-row",{staticClass:"px-3"},[a("v-col",{staticClass:"pl-3",attrs:{cols:"12",lg:"4",sm:"12"}},[a("v-img-preview",{attrs:{src:t.item.foto_link,width:"100%"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",lg:"8",sm:"12"}},[a("v-simple-table",{staticClass:"p-0 ml-4",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[t._l(t.filteredItem,(function(n){return[a("tr",[a("td",{attrs:{width:"10"}},[t._v(t._s(t._.startCase(n)))]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item[n]))])]),t._v(" "),t.itemAfter[n]?t._l(t.itemAfter[n],(function(e,r){return a("tr",{key:r},[a("td",{attrs:{width:"10"}},[t._v(t._s(t._.startCase(r)))]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.itemAfter[n][r]))])])})):t._e()]}))],2)]},proxy:!0}])})],1)],1),t._v(" "),a("v-col",{staticClass:"text-lg-button ml-3",attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-arrow-right-thick")]),t._v("\n        Data Penahanan\n        "),a("v-divider")],1),t._v(" "),a("v-simple-table",{staticClass:"p-0 ml-4",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{attrs:{width:"10"}},[t._v("Pasal dilanggar")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.pasal_dilanggar))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("Tempat Penahanan")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.tempat&&t.item.tempat.nama))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SP Penahanan")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.item.sprin_penahanan)+"\n                "+t._s(t.item.tgl_sprin_penahanan?"(".concat(t.$moment(t.item.tgl_sprin_penahanan).format("D/M/Y"),")"):"-")+"\n              ")])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SATKER")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.satker))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("Nama Penyidik")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.penyidik&&t.item.penyidik.nama))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("No Hp")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.penyidik&&t.item.penyidik.no_hp))])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SP Perpanjangan")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.item.perpanjangan_penahanan)+"\n                "+t._s(t.item.tgl_perpanjangan_penahanan?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan).format("D/M/Y"),")"):"-")+"\n              ")])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SP Perpanjangan 2")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.item.perpanjangan_penahanan_dua)+"\n                "+t._s(t.item.tgl_perpanjangan_penahanan_dua?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan_dua).format("D/M/Y"),")"):"-")+"\n              ")])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SP Perpanjangan 3")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.item.perpanjangan_penahanan_tiga)+"\n                "+t._s(t.item.tgl_perpanjangan_penahanan_tiga?"(".concat(t.$moment(t.item.tgl_perpanjangan_penahanan_tiga).format("D/M/Y"),")"):"-")+"\n              ")])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("SP Pengeluaran")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v("\n                "+t._s(t.item.sprin_pengeluaran_tahanan)+"\n                "+t._s(t.item.tgl_sprin_pengeluaran_tahanan?"(".concat(t.$moment(t.item.tgl_sprin_pengeluaran_tahanan).format("D/M/Y"),")"):"-")+"\n              ")])]),t._v(" "),a("tr",[a("td",{attrs:{width:"10"}},[t._v("Opsi Pengeluaran")]),t._v(" "),a("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),a("td",[t._v(t._s(t.item.opsi_pengeluaran_tahanan))])])])]},proxy:!0}])})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"warning"},on:{click:function(a){return t.action("edit",t.item)}}},[a("v-icon",[t._v("mdi-pencil")]),t._v("\n        Edit\n      ")],1),t._v(" "),a("v-btn",{attrs:{color:"red",dark:""},on:{click:function(a){return t.action("delete",t.item)}}},[a("v-icon",[t._v("delete")]),t._v("\n        Delete\n      ")],1)],1)],1)],1)}),[],!1,null,null,null).exports;function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function P(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?j(Object(n),!0).forEach((function(a){x(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function x(t,a,n){return(a=function(t){var a=function(t,a){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,a||"default");if("object"!==k(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===k(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}const w={components:{DataTable:e.Z,ModulForm:d,ModulShow:y},data:function(){return{tab:null,datatable:{moduleName:"Tahanan",formData:!0,btnExport:!0,btnShow:!0,clickable:!0,responsive:{avatar:"foto_link",title:"nama",headline:"ttl",sub_headline:"jekel",subtitle:"pekerjaan"},params:{with:["tempat","creator","penahanan"],tempat_penahanan_id:null,isOut:null},headers:[{text:"Foto",value:"foto",slot:!0,width:10},{text:"Data Diri",value:"nama",width:"80%",slot:!0},{text:"Perkara",value:"perkara"},{text:"Pasal Dilanggar",value:"pasal_dilanggar",slot:!0},{text:"SPRIN Penahanan",value:"sprin_penahanan",slot:!0},{text:"Perpanjangan Penahanan",value:"perpanjangan_penahanan",slot:!0},{text:"SPRIN Pengeluaran Penahanan",value:"sprin_pengeluaran_tahanan",slot:!0},{text:"Tempat Penahanan",value:"tempat.nama",slot:!0},{text:"Actions",value:"actions",align:"center",sortable:!1}]}}},methods:{onFilter:function(){this.datatable.params.isOut=this.tab,this.$refs.table&&this.$refs.table.load()}},computed:P(P({},(0,l.rn)("base",["loading"])),{},{filteredPasal:function(){return this.pasal_dilanggar}})};const S=(0,c.Z)(w,(function(){var t=this,a=t._self._c;return a("v-card",{attrs:{elevation:"2",loading:t.loading}},[a("v-tabs",{attrs:{"background-color":"red lighten-2",dark:"","slider-color":"yellow"},on:{change:t.onFilter},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-google-classroom ")]),t._v("\n      Tahanan\n    ")],1),t._v(" "),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-exit-run ")]),t._v("\n      Tahanan Keluar\n    ")],1)],1),t._v(" "),a("DataTable",t._b({ref:"table",attrs:{hasFilter:""},scopedSlots:t._u([{key:"filter",fn:function(n){var e=n.load,r=n.params;return[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-select",{attrs:{dense:"",items:["Laki-laki","Perempuan"],label:"Jenis Kelamin",clearable:""},on:{input:e},model:{value:r.jekel,callback:function(a){t.$set(r,"jekel",a)},expression:"params.jekel"}})],1)],1)]}},{key:"modal-form",fn:function(t){var n=t.editedItem,e=t.save,r=t.dialog;return[a("ModulForm",{attrs:{form:n,dialog:r},on:{save:e}})]}},{key:"modal-show",fn:function(n){var e=n.editedItem,r=n.action;return[e.id?a("ModulShow",{attrs:{id:e.id},on:{action:r}}):t._e()]}},{key:"list-item-action",fn:function(n){var e=n.item;return[a("v-list-item-action-text",{domProps:{textContent:t._s(t._.truncate(e.pasal_dilanggar))}})]}},{key:"pasal_dilanggar",fn:function(a){var n=a.item;return[t._v("\n      "+t._s(t._.truncate(n.pasal_dilanggar))+"\n    ")]}},{key:"foto",fn:function(t){var n=t.item;return[a("v-btn",{attrs:{icon:""}},[a("v-list-item-avatar",[a("v-img-preview",{attrs:{width:"90",src:n.foto_link,alt:"Foto"}})],1)],1)]}},{key:"sprin_penahanan",fn:function(n){var e=n.item;return[a("b",[t._v(" "+t._s(e.sprin_penahanan))]),t._v(" "),a("div",{staticClass:"text-caption"},[t._v("\n        "+t._s(e.tgl_sprin_penahanan&&t.$moment(e.tgl_sprin_penahanan).format("DD-MM-Y"))+"\n      ")])]}},{key:"perpanjangan_penahanan",fn:function(n){var e=n.item;return[a("b",[t._v(" "+t._s(e.perpanjangan_penahanan))]),t._v(" "),a("div",{staticClass:"text-caption"},[t._v("\n        "+t._s(e.tgl_perpanjangan_penahanan&&t.$moment(e.tgl_perpanjangan_penahanan).format("DD-MM-Y"))+"\n      ")])]}},{key:"sprin_pengeluaran_tahanan",fn:function(n){var e=n.item;return[a("b",[t._v(" "+t._s(e.sprin_pengeluaran_tahanan))]),t._v(" "),a("div",{staticClass:"text-caption"},[t._v("\n        "+t._s(e.tgl_sprin_pengeluaran_tahanan&&t.$moment(e.tgl_sprin_pengeluaran_tahanan).format("DD-MM-Y"))+"\n      ")])]}},{key:"nama",fn:function(n){var e=n.item;return[a("div",{staticClass:"text-caption"},[a("b",[t._v("\n          "+t._s(e.nama)+"\n        ")]),t._v(" "),a("br"),t._v("\n        "+t._s(e.ttl)+" — "+t._s(e.jekel)+"\n      ")]),t._v(" "),a("div",{staticClass:"text-caption"},[t._v("Pekerjaan : "+t._s(e.pekerjaan))])]}}])},"DataTable",t.datatable,!1))],1)}),[],!1,null,null,null).exports}}]);