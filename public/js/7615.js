"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7615],{90789:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(99682);const l={props:["form"],name:"FileSelector",components:{TiptapVuetify:o.CL},data:function(){return{images:[],extensions:[o.Ay,o.V6,o.rU,o.v6,o.Re,o.Tx,o.HC,o.DY,o.GS,o.Ee,[o.X6,{options:{levels:[1,2,3]}}],o.d8,o.EK,o.bo,o.nv,o.U1],contents:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n    "}},methods:{input:function(){this.$emit("input",this.contents)},onInit:function(){this.form.content&&(this.content=this.form.content)},selectImage:function(t){this.$emit("select-file",t)}}};const a=(0,n(51900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),t._l(t.images,(function(e,o){return n("v-img",{key:"img-"+o,staticClass:"ma-2 selectable",attrs:{alt:e.alt,src:e.src,multiple:""},on:{click:function(n){return t.selectImage(e)}}})}))],2)}),[],!1,null,null,null).exports},97615:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(80001),l=n(6225),a=n(90789);const i={props:["form"],components:{VFileInput:l.Z,Editor:a.Z},data:function(){return{}}};var s=n(51900);const r=(0,s.Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[n("v-text-field",{attrs:{label:"Title",autofocus:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Tagline 1",autofocus:""},model:{value:t.form.tagline1,callback:function(e){t.$set(t.form,"tagline1",e)},expression:"form.tagline1"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{label:"Tagline 2",autofocus:""},model:{value:t.form.tagline2,callback:function(e){t.$set(t.form,"tagline2",e)},expression:"form.tagline2"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[n("Editor",{attrs:{form:t.form,placeholder:"Write something …"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[n("VFileInput",{attrs:{form:t.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,c={components:{DataTable:o.Z,ModulForm:r},data:function(){return{pic:"",dialog:!1,moduleName:"About",slots:["image"],headers:[{text:"Foto",value:"image"},{text:"Titles",value:"title"},{text:"Tagline 1",value:"tagline1"},{text:"Tagline 2",value:"tagline2"},{text:"About",value:"short_about"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},methods:{openPic:function(t){this.dialog=!0,this.pic=t},cancel:function(){this.dialog=!1}}};const u=(0,s.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"2"}},[n("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,formData:!0,slots:t.slots},scopedSlots:t._u([{key:"modal-form",fn:function(t){var e=t.editedItem;return[n("ModulForm",{attrs:{form:e}})]}},{key:"image",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{icon:""}},[n("v-list-item-avatar",[n("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-img",{attrs:{src:t.pic,alt:"",contain:""}})],1)],1),t._v(" "),n("img",{attrs:{width:"90",src:o.image_link,alt:"Foto",contain:""},on:{click:function(e){return t.openPic(o.image_link)}}})],1)],1)]}}])})],1)}),[],!1,null,null,null).exports}}]);