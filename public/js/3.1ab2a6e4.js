(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{8041:function(t,a,s){"use strict";var e=s("cb9a"),c=s.n(e);c.a},"8b24":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{attrs:{padding:""}},[t.summary?s("div",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6",staticStyle:{color:"#34495e"}},[t._v("\n      Activity Summary\n    ")]),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Registered Patients")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v(t._s(t.summary.noOfPatients))])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Charge Revenue")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦"+t._s(t._f("moneyFormat")(t.summary.totalCharge)))])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Amount cleared")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦"+t._s(t._f("moneyFormat")(t.summary.amountCleared)))])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Amount Uncleared")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦"+t._s(t._f("moneyFormat")(t.summary.amountUncleared)))])])])],1)],1),s("div",{staticClass:"col-12 q-pb-md q-pt-sm"},[s("q-separator",{attrs:{inset:""}})],1)]):s("div",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6",staticStyle:{color:"#34495e"}},[t._v("\n      Activity Summary\n    ")]),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Registered Patients")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("0")])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Charge Revenue")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦0")])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Amount cleared")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦0")])])])],1)],1),s("div",{staticClass:"col-md-3 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[t._v("Total Amount Uncleared")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center"},[s("h5",[t._v("₦0")])])])],1)],1),s("div",{staticClass:"col-12 q-pb-md q-pt-sm"},[s("q-separator",{attrs:{inset:""}})],1)]),t.summary?s("div",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6",staticStyle:{color:"#34495e"}},[t._v("\n      Section Summary\n    ")]),t._l(t.summary.data,(function(a,e){return s("div",{key:e,staticClass:"col-md-4 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6"},[t._v(t._s(a.name)+" Section Revenues")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Total Charges: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.totalCharge)))])]),s("br"),s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Amount Cleared: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.amountCleared)))])]),s("br"),s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Amount Uncleared: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.amountUncleared)))])]),s("br")])],1)],1)}))],2):s("div",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6",staticStyle:{color:"#34495e"}},[t._v("\n      Section Summary\n    ")]),t._l(t.noData,(function(a,e){return s("div",{key:e,staticClass:"col-md-4 q-pa-sm"},[s("q-card",{staticClass:"bg-secondary text-white"},[s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"col-12 text-center text-h6"},[t._v(t._s(a.name)+" Section Revenues")])]),s("q-card-section",{staticClass:"row"},[s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Total Charges: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.totalCharge)))])]),s("br"),s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Amount Cleared: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.amountCleared)))])]),s("br"),s("span",{staticClass:"q-py-md col-12 text-center"},[t._v("Amount Uncleared: "),s("span",{staticClass:"text-bold"},[t._v("₦"+t._s(t._f("moneyFormat")(a.amountUncleared)))])]),s("br")])],1)],1)}))],2)])},c=[],n=(s("5319"),s("ded3")),o=s.n(n),r=s("2f62"),l={name:"PageIndex",data(){return{noData:[{name:"Orthopaedic",totalCharge:0,amountUncleared:0,amountCleared:0},{name:"Gynecology",totalCharge:0,amountUncleared:0,amountCleared:0},{name:"Pediatrics",totalCharge:0,amountUncleared:0,amountCleared:0}]}},filters:{moneyFormat(t){const a=t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return a}},computed:o()({},Object(r["c"])("summary",["summary"]))},i=l,d=(s("8041"),s("2877")),m=s("9989"),C=s("f09f"),p=s("a370"),v=s("eb85"),_=s("eebe"),u=s.n(_),q=Object(d["a"])(i,e,c,!1,null,null,null);a["default"]=q.exports;u()(q,"components",{QPage:m["a"],QCard:C["a"],QCardSection:p["a"],QSeparator:v["a"]})},cb9a:function(t,a,s){}}]);