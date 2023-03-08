"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3537],{1823:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(23645),s=r.n(a)()((function(t){return t[1]}));s.push([t.id,".clickable:hover{cursor:pointer}",""]);const i=s},70131:(t,e,r)=>{r.d(e,{Z:()=>l});const a={props:["items"],data:function(){return{search:"",loading:!1,selection:[]}},methods:{reserve:function(t){this.$router.push({path:"peminjaman-buku",query:{buku_id:t.id}})}},computed:{filteredData:function(){var t=this;return this.search?this.items.filter((function(e){return e.title.toLowerCase().includes(t.search)})):this.items}}};var s=r(93379),i=r.n(s),n=r(1823),o={insert:"head",singleton:!1};i()(n.Z,o);n.Z.locals;const l=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"mx-2"},[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-text-field",{staticClass:"mr-2",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),t.filteredData.length?r("v-row",{staticClass:"ma-2"},t._l(t.filteredData,(function(e,a){return r("v-col",{key:a,attrs:{cols:"12",sm:"12",md:"3"}},[r("v-card",{attrs:{loading:t.loading}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),r("v-img",{staticClass:"clickable",attrs:{height:"250",src:e.image_link},on:{click:function(r){return t.$emit("click",e)}}}),t._v(" "),r("v-card-title",{class:{subheading:t.$vuetify.breakpoint.xs}},[t._v(t._s(e.title))]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("div",{staticClass:"text-subtitle-1"},[t._v("\n              "+t._s(e.author)+" • "+t._s(e.tahun)+" • "+t._s(e.penerbit)+"\n            ")])]),t._v(" "),r("div",{staticClass:"my-4 text-subtitle-1"},[e.tags&&e.tags.length?t._l(e.tags,(function(e,a){return r("span",{key:a,staticClass:"grey--text"},[t._v("#"+t._s(e)+",\n              ")])})):r("span",{staticClass:"grey--text"},[t._v(" #no-tags")])],2)],1),t._v(" "),r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"white--text",attrs:{disabled:!e.stock,depressed:"",small:"",color:"green"},on:{click:function(r){return t.reserve(e)}}},[r("v-icon",[t._v("shopping_bag")]),t._v("\n            Pinjam\n          ")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,i=a.attrs;return[r("v-chip",t._g(t._b({attrs:{color:e.stock?"info":"warning",small:""}},"v-chip",i,!1),s),[t._v("\n                "+t._s(e.stock||0)+"\n                "),r("v-icon",{attrs:{small:"",right:""}},[t._v("book")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(e.stock?"Tersedia "+e.stock+" buku":"Buku Kosong"))])])],1)],2)],1)})),1):r("div",{staticClass:"text-center mt-2"},[r("img",{attrs:{width:"500",src:"/images/empty.png"}}),t._v(" "),r("h3",{staticClass:"mb-3 grey--text"},[t._v("Tidak ada data")])]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("v-container",{staticClass:"max-width"},[r("v-pagination",{staticClass:"my-4",attrs:{length:t.$store.state.base.options.last_page},model:{value:t.$store.state.base.options.current_page,callback:function(e){t.$set(t.$store.state.base.options,"current_page",e)},expression:"$store.state.base.options.current_page"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},83537:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var a=r(80001),s=r(20629),i=r(8093),n=r(39922);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={props:["form","dialog"],components:{BarqunDatePicker:i.Z,BarqunVSelect:n.Z},data:function(){return{tahun_ajaran:[]}},methods:l(l({},(0,s.OI)("base",["CLEAR_ERRORS"])),{},{handleFileUpload:function(t){this.form["file_"+t]=this.$refs[t].getFiles().length?this.$refs[t].getFiles()[0].file:null},getFiles:function(t){return this.form.id&&this.form[t]?["/storage/uploads/foto/"+this.form[t]]:""}}),mounted:function(){},watch:{dialog:function(t){t?(this.CLEAR_ERRORS(),this.getTahunAjaran()):this.$store.dispatch("auth/auth")}},computed:l({},(0,s.rn)("base",["errors"]))};var d=r(51900);const m=(0,d.Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._.isEmpty(t.errors)?t._e():r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-alert",{attrs:{border:"top",color:"red lighten-2",dark:""}},[r("ul",t._l(t.errors,(function(e){return r("li",{key:e[0]},[t._v(t._s(e[0]))])})),0)])],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"2",sm:"12",md:"2"}},[r("file-pond",{ref:"image",attrs:{"label-idle":"Drop files here or browse","accepted-file-types":"image/jpeg, image/png",files:t.getFiles("image"),allowDownloadByUrl:!0},on:{updatefiles:function(e){return t.handleFileUpload("image")}}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"10"}},[r("v-text-field",{attrs:{label:"Judul"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Kode"},model:{value:t.form.kode,callback:function(e){t.$set(t.form,"kode",e)},expression:"form.kode"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Penulis"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Penerbit"},model:{value:t.form.penerbit,callback:function(e){t.$set(t.form,"penerbit",e)},expression:"form.penerbit"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Tahun"},model:{value:t.form.tahun,callback:function(e){t.$set(t.form,"tahun",e)},expression:"form.tahun"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{type:"number",min:"0",label:"Stock"},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("BarqunVSelect",{attrs:{combobox:"",multiple:"",clearable:"","small-chips":"",name:"tags",form:t.form,url:"buku",label:"Tags",params:{pluck:["tags"]}}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-textarea",{attrs:{label:"Deskripsi"},model:{value:t.form.deskripsi,callback:function(e){t.$set(t.form,"deskripsi",e)},expression:"form.deskripsi"}})],1)],1)],1)}),[],!1,null,null,null).exports;function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const b={props:["id"],data:function(){return{search:"",headers:[]}},mounted:function(){this.load()},computed:f(f({},(0,s.rn)("base",["loading","item"])),{},{filteredItem:function(){return this._.difference(Object.keys(this.item),["id","deskripsi","image","image_link","peminjaman","created_at","updated_at"])}}),watch:{id:function(){this.load()}},methods:f(f({},(0,s.nv)("base",["getData"])),{},{load:function(){this.getData({customUrl:"buku",id:this.id||this.$route.params.id,params:{with:["peminjaman.pesertaDidik"]}})}})};const g=(0,d.Z)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{loading:t.loading}},[r("v-card-title",{staticClass:"sticky blue white--text",attrs:{"primary-title":""}},[t._v("\n      Detail Buku\n      "),r("v-spacer")],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pa-5"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("v-img",{attrs:{width:"400",src:t.item.image_link}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[r("v-card-title",{staticClass:"blue white--text",attrs:{"primary-title":""}},[t._v("\n            Data Buku\n          ")]),t._v(" "),t._.isEmpty(t.item)?t._e():r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",t._l(t.filteredItem,(function(e,a){return r("tr",{key:a},[r("td",{attrs:{width:"10"}},[t._v(t._s(t._.startCase(e)))]),t._v(" "),r("td",{attrs:{width:"10"}},[t._v(":")]),t._v(" "),r("td",[t._v(t._s(t.item[e]))])])})),0)]},proxy:!0}],null,!1,3052676482)})],1),t._v(" "),t.item.deskripsi?r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("h3",[t._v("Deskipsi :")]),t._v(" "),r("p",{attrs:{align:"justify"}},[t._v(t._s(t.item.deskripsi))])]):t._e()],1)],1)],1)],1)}),[],!1,null,null,null).exports;function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const y={data:function(){return{item:{},dialog:!1}},components:{CardGrid:r(70131).Z,ModulShow:g},created:function(){this.$store.commit("base/SET_MODULE_NAME","Buku"),this.getData({params:{sisa_stock:!0}})},computed:_({},(0,s.rn)("base",["items"])),methods:_(_({},(0,s.nv)("base",["getData"])),{},{clicked:function(t){this.item=t,this.dialog=!0}})};const O=(0,d.Z)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CardGrid",{attrs:{items:t.items},on:{click:t.clicked}}),t._v(" "),r("v-dialog",{attrs:{"max-width":"80%",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.item.id?r("ModulShow",{attrs:{id:t.item.id}}):t._e()],1)],1)}),[],!1,null,null,null).exports,w={components:{DataTable:a.Z,ModulForm:m,ModulShow:g,GridList:O},data:function(){return{dialog:!1,pic:null,tab:null,datatable:{ref:"table",btnShow:!0,clickable:!0,formData:!0,moduleName:"Buku",slots:["status","image"],headers:[{text:"#",value:"num"},{text:"",value:"image"},{text:"Judul",value:"title"},{text:"Penulis/Pengarang",value:"author"},{text:"#Tags",value:"tags"},{text:"Actions",value:"actions",align:"center",sortable:!1}],params:{sortby:"status"}}}},methods:{gridItemClicked:function(t){console.log(this.$refs.table,t)},openPic:function(t){this.dialog=!0,this.pic=t},cancel:function(){this.dialog=!1}}};const x=(0,d.Z)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"2"}},[r("v-tabs",{attrs:{"background-color":"red lighten-2",dark:"","slider-color":"yellow"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-view-grid ")]),t._v("\n      Daftar\n    ")],1),t._v(" "),r("v-tab",[r("v-icon",{attrs:{left:""}},[t._v(" mdi-table ")]),t._v("\n      Table\n    ")],1)],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("GridList",{on:{click:t.gridItemClicked}})],1)],1)],1),t._v(" "),t.tab?r("v-tab-item",[r("DataTable",t._b({scopedSlots:t._u([{key:"modal-form",fn:function(t){var e=t.editedItem,a=t.save,s=t.dialog;return[r("ModulForm",{attrs:{form:e,dialog:s},on:{save:a}})]}},{key:"modal-show",fn:function(e){var a=e.editedItem;return[a.id?r("ModulShow",{attrs:{id:a.id}}):t._e()]}},{key:"image",fn:function(e){var a=e.item;return[r("v-btn",{attrs:{icon:""}},[r("v-list-item-avatar",[r("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-img",{attrs:{src:t.pic,alt:"",contain:""}})],1)],1),t._v(" "),r("img",{attrs:{width:"90",src:a.image_link,alt:"image",contain:""},on:{click:function(e){return t.openPic(a.image_link)}}})],1)],1)]}},{key:"status",fn:function(e){var a=e.item;return[r("v-btn",{attrs:{rounded:"","x-small":"",color:"Aktif"==a.status?"success":"blue-grey",dark:""}},["Tidak Aktif"==a.status?r("v-icon",{attrs:{dark:"",left:""}},[t._v("\n              mdi-minus-circle\n            ")]):t._e(),t._v("\n            "+t._s(a.status)+"\n            "),"Aktif"==a.status?r("v-icon",{attrs:{dark:"",right:""}},[t._v("\n              mdi-checkbox-marked-circle\n            ")]):t._e()],1)]}}],null,!1,302211920)},"DataTable",t.datatable,!1))],1):t._e()],1)],1)}),[],!1,null,null,null).exports}}]);