"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9882],{37503:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(28689);const l={props:["form"],name:"FileSelector",components:{TiptapVuetify:o.CL},data:function(){return{images:[],extensions:[o.Ay,o.V6,o.rU,o.v6,o.Re,o.Tx,o.HC,o.DY,o.GS,o.Ee,[o.X6,{options:{levels:[1,2,3]}}],o.d8,o.EK,o.bo,o.nv,o.U1],contents:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n    "}},methods:{input:function(){this.$emit("input",this.contents)},onInit:function(){this.form.content&&(this.content=this.form.content)},selectImage:function(t){this.$emit("select-file",t)}}};const a=(0,n(51900).Z)(l,(function(){var t=this,e=t._self._c;return e("div",[e("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),t._l(t.images,(function(n,o){return e("v-img",{key:"img-"+o,staticClass:"ma-2 selectable",attrs:{alt:n.alt,src:n.src,multiple:""},on:{click:function(e){return t.selectImage(n)}}})}))],2)}),[],!1,null,null,null).exports},69882:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(47130),l=n(66421),a=n(37503);const i={props:["form"],components:{VFileInput:l.Z,Editor:a.Z},data:function(){return{}}};var s=n(51900);const r=(0,s.Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("v-text-field",{attrs:{label:"Title",autofocus:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Tagline 1",autofocus:""},model:{value:t.form.tagline1,callback:function(e){t.$set(t.form,"tagline1",e)},expression:"form.tagline1"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{label:"Tagline 2",autofocus:""},model:{value:t.form.tagline2,callback:function(e){t.$set(t.form,"tagline2",e)},expression:"form.tagline2"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("Editor",{attrs:{form:t.form,placeholder:"Write something …"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[e("VFileInput",{attrs:{form:t.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,c={components:{DataTable:o.Z,ModulForm:r},data:function(){return{pic:"",dialog:!1,moduleName:"About",slots:["image"],headers:[{text:"Foto",value:"image"},{text:"Titles",value:"title"},{text:"Tagline 1",value:"tagline1"},{text:"Tagline 2",value:"tagline2"},{text:"About",value:"short_about"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},methods:{openPic:function(t){this.dialog=!0,this.pic=t},cancel:function(){this.dialog=!1}}};const u=(0,s.Z)(c,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{elevation:"2"}},[e("DataTable",{attrs:{moduleName:t.moduleName,headers:t.headers,formData:!0,slots:t.slots},scopedSlots:t._u([{key:"modal-form",fn:function(t){var n=t.editedItem;return[e("ModulForm",{attrs:{form:n}})]}},{key:"image",fn:function(n){var o=n.item;return[e("v-btn",{attrs:{icon:""}},[e("v-list-item-avatar",[e("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-img",{attrs:{src:t.pic,alt:"",contain:""}})],1)],1),t._v(" "),e("img",{attrs:{width:"90",src:o.image_link,alt:"Foto",contain:""},on:{click:function(e){return t.openPic(o.image_link)}}})],1)],1)]}}])})],1)}),[],!1,null,null,null).exports}}]);