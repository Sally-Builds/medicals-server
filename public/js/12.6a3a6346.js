(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{ed7e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-form",{on:{submit:t.submitPatient}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center q-pb-md"},[a("span",{staticClass:"text-h4",staticStyle:{color:"#34495e"}},[t._v("Edit Patient Information")]),a("br"),a("q-separator")],1),a("div",{staticClass:"col-12 text-center",staticStyle:{color:"#34495e"}},[a("span",{staticClass:"text-h6"},[t._v("Personal Information")]),a("br"),a("q-separator")],1),a("div",{staticClass:"col-10"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"first name",dense:"",outlined:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.firstName,callback:function(e){t.$set(t.data,"firstName",e)},expression:"data.firstName"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"middle name",dense:"",outlined:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.middleName,callback:function(e){t.$set(t.data,"middleName",e)},expression:"data.middleName"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"last name",dense:"",outlined:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.lastName,callback:function(e){t.$set(t.data,"lastName",e)},expression:"data.lastName"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{prefix:"+234",label:"mobile no",dense:"",outlined:"",mask:"(##) #### ####",rules:[function(t){return!!t||"Field is required"},function(t){return 14===t.length||"Mobile number not complete"}],"lazy-rules":""},model:{value:t.data.mobile,callback:function(e){t.$set(t.data,"mobile",e)},expression:"data.mobile"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"email address",dense:"",outlined:"",type:"email",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{outlined:"",dense:"",label:"Date of Birth",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD"},model:{value:t.data.dateOfBirth,callback:function(e){t.$set(t.data,"dateOfBirth",e)},expression:"data.dateOfBirth"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.data.dateOfBirth,callback:function(e){t.$set(t.data,"dateOfBirth",e)},expression:"data.dateOfBirth"}})],1),a("div",{staticClass:"col-8 q-pa-sm"},[a("q-input",{attrs:{label:"Home address",outlined:""},model:{value:t.data.address,callback:function(e){t.$set(t.data,"address",e)},expression:"data.address"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-file",{attrs:{label:"Upload patient Photo",outlined:"",dense:"",rules:[function(t){return!!t||"Field is required"}]},on:{input:t.addPatient},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}]),model:{value:t.data.photo,callback:function(e){t.$set(t.data,"photo",e)},expression:"data.photo"}})],1),a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-h6",staticStyle:{color:"#34495e"}},[t._v("Medical Records")]),a("br"),a("q-separator")],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-select",{attrs:{label:"Patients blood group",dense:"",outlined:"",options:["A+","A-","B+","O+","O-","AB+","AB-"],rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.bloodGroup,callback:function(e){t.$set(t.data,"bloodGroup",e)},expression:"data.bloodGroup"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-select",{attrs:{label:"Patients Genotype",dense:"",outlined:"",options:["AA","AS","SS"],rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.genotype,callback:function(e){t.$set(t.data,"genotype",e)},expression:"data.genotype"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"patients eye color",dense:"",outlined:"",type:"text",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.eyeColor,callback:function(e){t.$set(t.data,"eyeColor",e)},expression:"data.eyeColor"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-toggle",{attrs:{label:"Hiv "+t.data.hivStatus,"false-value":"negative","true-value":"positive",color:"negative"===t.data.hivStatus?"positive":"negative","keep-color":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.hivStatus,callback:function(e){t.$set(t.data,"hivStatus",e)},expression:"data.hivStatus"}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-toggle",{attrs:{label:t.data.gender,"false-value":"male","true-value":"female",color:"male"===t.data.gender?"accent":"blue","keep-color":"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.data.gender,callback:function(e){t.$set(t.data,"gender",e)},expression:"data.gender"}})],1)])]),a("div",{staticClass:"col-2 text-left"},[a("q-avatar",{attrs:{rounded:"",size:"200px"}},[t.img?a("img",{attrs:{src:t.img}}):t._e(),t.data.photo&&!t.img?a("img",{attrs:{src:"/images/users/"+t.data.photo.name}}):t._e()])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-h6",staticStyle:{color:"#34495e"}},[t._v("Emergency Contacts")]),a("br"),a("q-separator")],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"first name",dense:"",outlined:""}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"middle name",dense:"",outlined:""}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"last name",dense:"",outlined:""}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"mobile no",dense:"",outlined:""}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"email address",dense:"",outlined:""}})],1),a("div",{staticClass:"col-4 q-pa-sm"},[a("q-input",{attrs:{label:"Home address",dense:"",outlined:""}})],1)]),a("div",{staticClass:"row q-py-md"},[a("div",{staticClass:"col-12 text-center"},[a("q-btn",{attrs:{label:"update",color:"primary",type:"submit"}})],1),a("div",{staticClass:"col-12 q-py-md"},[a("q-separator")],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-h6",staticStyle:{color:"#34495e"}},[t._v("Billings History")])]),t.getPatient&&t.getPatient.sections.length>0?a("div",{staticClass:"col-12"},[a("q-markup-table",{staticStyle:{"max-height":"80vh"}},[a("thead",{staticClass:"bg-secondary text-white"},[a("tr",[a("th",{staticClass:"text-left"},[t._v("\n              S/N\n            ")]),a("th",{staticClass:"text-left"},[t._v("\n              Section\n            ")]),a("th",{staticClass:"text-center"},[t._v("\n              Date\n            ")]),a("th",{staticClass:"text-right"},[t._v("\n              Total Charged\n            ")]),a("th",{staticClass:"text-right"},[t._v("\n              Amount Cleared\n            ")]),a("th",{staticClass:"text-right"},[t._v("\n              Amount Uncleared\n            ")])])]),t.getPatient?a("tbody",{staticClass:"bg-grey-4"},t._l(t.getPatient.sections,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(s+1)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.name)+"\n            ")]),a("td",{staticClass:"text-center"},[t._v("\n              "+t._s(e.date)+"\n            ")]),a("td",{staticClass:"text-right"},[t._v("\n              "+t._s(e.totalCharge)+"\n            ")]),a("td",{staticClass:"text-right"},[t._v("\n              "+t._s(e.amountCleared)+" "),a("span",[a("q-btn",{attrs:{icon:"edit",flat:"",color:"accent"},on:{click:function(a){t.dialog=!0,t.sectionId=e.id,t.sectionIndex=s}}})],1)]),a("td",{staticClass:"text-right"},[t._v("\n              "+t._s(e.amountUncleared)+"\n            ")])])})),0):t._e()])],1):t._e(),a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-bold",staticStyle:{color:"#34495e"}},[t._v("No Bill yet? click\n      ")]),a("q-btn",{attrs:{label:"Here",color:"primary",flat:""}}),a("span",{staticClass:"text-bold",staticStyle:{color:"#34495e"}},[t._v("to create bill\n      ")])],1)]),a("q-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("q-card",[a("q-card-section",{staticClass:"row text-center"},[a("div",{staticClass:"text-h6 col-12 text-center"},[t._v("\n          Amount Patient Cleared\n        ")])]),a("q-separator",{staticClass:"q-mb-lg"}),a("q-card-section",{staticClass:"q-pt-none"},[a("q-form",{on:{submit:t.clearAmount}},[a("q-input",{staticClass:"q-mb-sm",attrs:{rounded:"",outlined:"",label:"Amount cleared",type:"number",rules:[function(t){return!!t||"Field is required"},function(e){return 1*e<=1*t.getPatient.sections[t.sectionIndex].totalCharge||"You cant clear more than you owe"}],"lazy-rules":"",dense:""},model:{value:t.amountCleared,callback:function(e){t.amountCleared=t._n(e)},expression:"amountCleared"}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{label:"amount cleared",type:"submit",color:"primary"}})],1)],1)],1)],1)],1)],1)},i=[],l=(a("ddb0"),a("2b3d"),a("ded3")),n=a.n(l),o=a("2f62"),r={data(){return{data:{dateOfBirth:"",bloodGroup:"A+",hivStatus:"negative",gender:"male",photo:null,genotype:"",firstName:"",lastName:"",middleName:"",address:"",eyeColor:"",mobile:"",email:"",emergencyContactFirstName:"",emergencyContactMiddleName:"",emergencyContactLastName:"",emergencyContactAddress:"",emergencyContactMobile:"",emergencyContactEmail:""},img:"",dialog:!1,amountCleared:"",sectionId:"",sectionIndex:""}},computed:n()({},Object(o["c"])("patients",["getPatient"])),mounted(){this.getPatient?this.setValues(this.getPatient):this.fetchPatient(this.$route.params.id).then((()=>{this.setValues(this.getPatient)}))},methods:n()(n()(n()({},Object(o["b"])("patients",["editPatient","fetchPatient"])),Object(o["b"])("sections",["editAmountCleared"])),{},{addPatient(){const t=URL.createObjectURL(this.data.photo);this.img=t},setValues(t){for(const e in t){let a=t[e];"photo"===e&&(a=new File([""],t[e])),this.data[e]=a}},submitPatient(){this.editPatient({formData:this.data,original:this.getPatient.photo,id:this.$route.params.id})},clearAmount(){this.editAmountCleared({sectionId:this.sectionId,amountCleared:this.amountCleared,patientId:this.getPatient.id}).then((()=>{this.dialog=!1,this.amountCleared=""})).catch((()=>{}))}})},d=r,c=a("2877"),u=a("9989"),m=a("0378"),p=a("eb85"),b=a("27f9"),v=a("0016"),C=a("7cbe"),h=a("52ee"),f=a("9c40"),q=a("7d53"),g=a("ddd8"),x=a("9564"),y=a("cb32"),_=a("2bb1"),k=a("24e8"),P=a("f09f"),S=a("a370"),A=a("4b7e"),w=a("7f67"),N=a("eebe"),F=a.n(N),Q=Object(c["a"])(d,s,i,!1,null,null,null);e["default"]=Q.exports;F()(Q,"components",{QPage:u["a"],QForm:m["a"],QSeparator:p["a"],QInput:b["a"],QIcon:v["a"],QPopupProxy:C["a"],QDate:h["a"],QBtn:f["a"],QFile:q["a"],QSelect:g["a"],QToggle:x["a"],QAvatar:y["a"],QMarkupTable:_["a"],QDialog:k["a"],QCard:P["a"],QCardSection:S["a"],QCardActions:A["a"]}),F()(Q,"directives",{ClosePopup:w["a"]})}}]);