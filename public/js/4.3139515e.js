(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"12dd":function(t,s,a){},"88a5":function(t,s,a){"use strict";var e=a("12dd"),n=a.n(e);n.a},f1f5:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{attrs:{padding:""}},[t.printSector?a("div",[a("div",{ref:"content"},[a("div",{staticClass:"row bg-primary"},[a("div",{staticClass:"col-12 text-center q-pb-md",staticStyle:{height:"60px"}},[a("span",{staticClass:"text-h5 text-white"},[a("q-avatar",[a("q-img",{attrs:{src:"https://s.clipartkey.com/mpngs/s/208-2082166_medical-college-of-wisconsin-physician-medicine-clinic-medical.png"}})],1),t._v("\n            Caritas Specialist Hospital\n          ")],1)])]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-h5",staticStyle:{color:"#34495e"}},[t._v("Medical Invoice")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-left"},[a("div",[a("span",{staticClass:"text-h5",staticStyle:{color:"#34495e"}},[t._v("Patient Information")]),a("br")]),a("div",{staticClass:"q-pa-sm"},[a("span",[t._v("Name: "+t._s(t.printSector.firstName)+" "+t._s(t.printSector.middleName)+" "+t._s(t.printSector.lastName))]),a("br")])])]),a("div",{staticClass:"row"},[a("q-separator")],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-markup-table",{staticClass:"table",staticStyle:{width:"600px"}},[a("thead",{staticClass:"bg-secondary text-white"},[a("tr",[a("th",{staticClass:"bg-primary",attrs:{colspan:"5"}},[t._v("\n                  Consultancy Form\n                ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                  S/N\n                ")]),a("th",{staticClass:"text-left"},[t._v("\n                  Name\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Amount\n                ")])])]),a("tbody",{staticClass:"bg-grey-4"},t._l(t.printSector.sectors,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(e+1)+"\n                ")]),a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(s.name)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  ₦"+t._s(s.consultancyForm)+"\n                ")])])})),0)])],1),a("div",{staticClass:"col-12"},[a("q-markup-table",{staticClass:"table",staticStyle:{"max-height":"80vh",width:"600px"}},[a("thead",{staticClass:"bg-secondary text-white"},[a("tr",[a("th",{staticClass:"bg-primary",attrs:{colspan:"5"}},[t._v("\n                  Med Time\n                ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                  S/N\n                ")]),a("th",{staticClass:"text-left"},[t._v("\n                  Name\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Med Tariff\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Time Spent\n                ")])])]),a("tbody",{staticClass:"bg-grey-4"},t._l(t.printSector.sectors,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"text-left"},[t._v("\n                  1\n                ")]),a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(s.name)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  ₦"+t._s(s.medTime.medTariff)+"/min\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(s.medTime.timeSpent)+" hrs\n                ")])])})),0)])],1),a("div",{staticClass:"col-12"},[a("q-markup-table",{staticClass:"table",staticStyle:{"max-height":"80vh",width:"600px"}},[a("thead",{staticClass:"bg-secondary text-white"},[a("tr",[a("th",{staticClass:"bg-primary",attrs:{colspan:"5"}},[t._v("\n                  Lab Test\n                ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                  S/N\n                ")]),a("th",{staticClass:"text-left"},[t._v("\n                  Name\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Lab Tariff\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  no of test\n                ")])])]),a("tbody",{staticClass:"bg-grey-4"},t._l(t.printSector.sectors,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"text-left"},[t._v("\n                  1\n                ")]),a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(s.name)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  ₦"+t._s(s.labTest.labTariff)+"/test\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(s.labTest.noOfTests)+"\n                ")])])})),0)])],1),a("div",{staticClass:"col-12"},[a("q-markup-table",{staticClass:"table",staticStyle:{"max-height":"80vh",width:"600px"}},[a("thead",{staticClass:"bg-secondary text-white"},[a("tr",[a("th",{staticClass:"bg-primary",attrs:{colspan:"5"}},[t._v("\n                  Drugs\n                ")])]),a("tr",[a("th",{staticClass:"text-left"},[t._v("\n                  S/N\n                ")]),a("th",{staticClass:"text-left"},[t._v("\n                  Drug Section\n                ")]),a("th",{staticClass:"text-left"},[t._v("\n                  Drug name\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Price\n                ")]),a("th",{staticClass:"text-center"},[t._v("\n                  Quantity\n                ")])])]),t._l(t.printSector.sectors,(function(s,e){return a("tbody",{key:e,staticClass:"bg-grey-4"},t._l(s.drugs,(function(e,n){return a("tr",{key:n},[a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(n+1)+"\n                ")]),a("td",{staticClass:"text-left"},[t._v("\n                  "+t._s(s.name)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  ₦"+t._s(e.price)+"\n                ")]),a("td",{staticClass:"text-center"},[t._v("\n                  "+t._s(e.qty)+"\n                ")])])})),0)}))],2)],1)]),a("div",{staticClass:"row q-pa-md"},[a("div",{staticClass:"col-12 text-center"},[a("span",{staticClass:"text-bold",staticStyle:{color:"#34495e"}},[t._v("Total Charge: ₦"+t._s(t._f("moneyFormat")(t.totalCharge)))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("span",{staticStyle:{color:"#34495e"}},[t._v("Click Download below if document does not download in "+t._s(t.countdown)+"s")])]),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[0===t.countdown?a("div",{staticClass:"col-3"},[a("q-btn",{attrs:{label:"Download",color:"primary"},on:{click:t.print}})],1):t._e()]),a("div",{staticClass:"col-3"},[a("q-btn",{attrs:{label:"Home",color:"primary",flat:"",to:"/home"}})],1)],1)]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h6",{staticStyle:{color:"#34495e"}},[t._v("\n        No Bill to Print\n      ")])])])])},n=[],i=(a("fb6a"),a("5319"),a("ded3")),c=a.n(i),l=a("2f62"),r=a("8baf"),o=a("70b0"),d=a.n(o),v={filters:{moneyFormat(t){const s=t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return s}},data(){return{totalCharge:0,countdown:10}},computed:c()({},Object(l["c"])("sections",["printSector"])),mounted(){this.printSector&&(this.printSector.sectors.forEach((t=>{this.totalCharge+=t.totalCharge})),this.countdownTimer(),this.print())},methods:{print(){d.a.toPng(this.$refs.content).then((function(t){var s=new Image;s.src=t;const a=new r["a"]({orientation:"portrait",format:[432,792]});a.addImage(s,"JPEG",15,40);const e=new Date,n="medicalBill_"+e.getFullYear()+("0"+(e.getMonth()+1)).slice(-2)+("0"+e.getDate()).slice(-2)+("0"+e.getHours()).slice(-2)+("0"+e.getMinutes()).slice(-2)+("0"+e.getSeconds()).slice(-2)+".pdf";a.save(n)})).catch((function(t){this.$q.notify("error occured: "+t)}))},countdownTimer(){this.countdown>0&&setTimeout((()=>{this.countdown-=1,this.countdownTimer()}),1e3)}}},C=v,m=(a("88a5"),a("2877")),h=a("9989"),_=a("cb32"),p=a("068f"),f=a("eb85"),u=a("2bb1"),x=a("9c40"),b=a("eebe"),g=a.n(b),y=Object(m["a"])(C,e,n,!1,null,null,null);s["default"]=y.exports;g()(y,"components",{QPage:h["a"],QAvatar:_["a"],QImg:p["a"],QSeparator:f["a"],QMarkupTable:u["a"],QBtn:x["a"]})}}]);