"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7243],{47243:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});const a={components:{BarqunDatePicker:s(69074).Z},data:function(){return{loading:!1,form:{},filter:"",selectedItem:1,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}]}},methods:{process:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),1500)}}};const l=(0,s(51900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2 p-2",attrs:{cols:"12",sm:"3"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e("v-list",{attrs:{shaped:""}},[e("v-subheader",[t._v("REPORTS")]),t._v(" "),e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(s,a){return e("v-list-item",{key:a},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(s.text)}})],1)],1)})),1)],1)],1)],1),t._v(" "),e("v-col",{staticClass:"pa-2 p-2",attrs:{cols:"12",sm:"9"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[e("v-form",[e("v-container",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-select",{attrs:{clearable:"",label:"Filter",items:["Date","Range Date","Before Date","After Date","Month","Year"]},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"3"}},[e("BarqunDatePicker",{attrs:{form:t.form.date,label:"Range Date"==t.filter?"Date From":"Date"}})],1),t._v(" "),"Range Date"==t.filter?e("v-col",{attrs:{cols:"12",md:"3"}},[e("BarqunDatePicker",{attrs:{form:t.form.dateTo,label:"Date To"}})],1):t._e(),t._v(" "),e("v-col",{staticClass:"pt-3 pl-2",attrs:{cols:"12",md:"2"}},[e("v-btn",{attrs:{color:"success",loading:t.loading},on:{click:t.process}},[t._v("Process")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);