"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[190],{30190:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(80001),o=r(6225),a=r(20629);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c={props:["form"],components:{VFileInput:o.Z},data:function(){return{status:[{key:"Active",value:"Active"},{key:"Non Active",value:"Non Active"}]}},computed:l(l({},(0,a.rn)("base",["errors"])),(0,a.rn)("auth",["user"])),methods:l({},(0,a.OI)("base",["DEL_ERRORS"]))};var u=r(51900);const m=(0,u.Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-select",{attrs:{items:e.status,"item-value":"value","item-text":"key",label:"Posisi",required:"",error:e.errors.status,"error-messages":e.errors.status},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("save")},input:function(t){return e.DEL_ERRORS("status")}},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[r("VFileInput",{attrs:{form:e.form,label:"File Foto"}})],1)],1)],1)}),[],!1,null,null,null).exports,f={components:{DataTable:n.Z,ModulForm:m},data:function(){return{pic:"",dialog:!1,moduleName:"Slider",slots:["image"],headers:[{text:"Image",value:"image"},{text:"Status",value:"status"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},methods:{openPic:function(e){this.dialog=!0,this.pic=e},cancel:function(){this.dialog=!1}}};const d=(0,u.Z)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{elevation:"2"}},[r("DataTable",{attrs:{moduleName:e.moduleName,headers:e.headers,formData:!0,slots:e.slots},scopedSlots:e._u([{key:"modal-form",fn:function(e){var t=e.editedItem;return[r("ModulForm",{attrs:{form:t}})]}},{key:"image",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{icon:""}},[r("v-list-item-avatar",[r("v-dialog",{attrs:{"max-width":"30%"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancel.apply(null,arguments)}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-img",{attrs:{src:e.pic,alt:"",contain:""}})],1)],1),e._v(" "),r("img",{attrs:{width:"90",src:n.image_link,alt:"Foto",contain:""},on:{click:function(t){return e.openPic(n.image_link)}}})],1)],1)]}}])})],1)}),[],!1,null,null,null).exports}}]);