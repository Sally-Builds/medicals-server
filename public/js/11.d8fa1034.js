(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"1fa5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 q-pa-sm"},[s("q-input",{attrs:{rounded:"",outlined:"",label:"Search",type:"text",dense:"",hint:"Search patients using thier card no"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("span",{staticClass:"text-h6",staticStyle:{color:"#34495e"}},[t._v("Patients List")])]),s("div",{staticClass:"col-12"},[s("q-markup-table",{staticStyle:{"max-height":"80vh"}},[s("thead",{staticClass:"bg-secondary text-white"},[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n              S/N\n            ")]),s("th",{staticClass:"text-left"},[t._v("\n              Patient Number\n            ")]),s("th",{staticClass:"text-center"},[t._v("\n              First Name\n            ")]),s("th",{staticClass:"text-right"},[t._v("\n              Last Name\n            ")]),s("th",{staticClass:"text-right"},[t._v("\n              Age\n            ")])])]),t.getPatients?s("tbody",{staticClass:"bg-grey-4"},t._l(t.getPatients,(function(e,a){return s("tr",{key:a,staticStyle:{cursor:"pointer"},on:{click:function(s){return t.editPatient(e.id)}}},[s("td",{staticClass:"text-left"},[t._v("\n              "+t._s(a+1)+"\n            ")]),s("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.patientNo)+"\n            ")]),s("td",{staticClass:"text-center"},[t._v("\n              "+t._s(e.firstName)+"\n            ")]),s("td",{staticClass:"text-right"},[t._v("\n              "+t._s(e.lastName)+"\n            ")]),s("td",{staticClass:"text-right"},[t._v("\n              "+t._s(t._f("getAge")(e.dateOfBirth))+"\n            ")])])})),0):t._e()])],1)])])},i=[],n=s("ded3"),c=s.n(n),r=s("2f62"),l={computed:c()(c()(c()({},Object(r["c"])("patients",["getPatients"])),Object(r["d"])("patients",["searchPatientList"])),{},{search:{get(){return this.searchPatientList},set(t){return this.setPatientListSearch(t)}}}),mounted(){this.fetchAllPatients()},methods:c()(c()({},Object(r["b"])("patients",["fetchAllPatients","paramsId","setPatientListSearch"])),{},{editPatient(t){this.paramsId(t),this.$router.push("/patients/edit/"+t)}}),filters:{getAge(t){let e=new Date(t).getFullYear();return e=(new Date).getFullYear()-e,e}}},h=l,d=s("2877"),o=s("9989"),u=s("27f9"),p=s("2bb1"),g=s("eebe"),_=s.n(g),f=Object(d["a"])(h,a,i,!1,null,null,null);e["default"]=f.exports;_()(f,"components",{QPage:o["a"],QInput:u["a"],QMarkupTable:p["a"]})}}]);