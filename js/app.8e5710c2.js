(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0a340c11"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c4a":function(t,e,a){"use strict";a("4262")},4262:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["default"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",{attrs:{transition:"slide-x-transition"}},["login"!==t.$route.name?a("v-toolbar",[a("v-toolbar-side-icon",{attrs:{"hidden-md-and-up":""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v(t._s(t.$appName))]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:"",to:"/"}},[a("v-icon",[t._v("home")]),t._v(" Inicio")],1),a("v-btn",{attrs:{flat:"",to:"/sales"}},[a("v-icon",[t._v("shopping_cart")]),t._v(" Venta")],1),a("v-btn",{attrs:{flat:"",to:"/clients"}},[a("v-icon",[t._v("person")]),t._v(" Clientes")],1),a("v-btn",{attrs:{flat:"",to:"/products"}},[a("v-icon",[t._v("inbox")]),t._v(" Productos")],1),a("v-btn",{attrs:{flat:"",to:"/reports"}},[a("v-icon",[t._v("graphic_eq")]),t._v(" Reportes")],1)],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:"",to:"/login"}},[a("v-icon",[t._v("exit_to_app")]),t._v(" Salir")],1)],1)],1):t._e(),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pa-1"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"/192.png"}})]),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(t.$appName))])],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._l(t.items,(function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.href}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),a("router-view")],1)],1)},i=[],s={name:"App",watch:{$route:function(t,e){this.checkLogin()}},created:function(){this.checkLogin()},data:function(){return{drawer:null,items:[{title:"Inicio",icon:"home",href:"/"},{title:"Venta",icon:"shopping_cart",href:"/sales"},{title:"Clientes",icon:"person",href:"/clients"},{title:"Productos",icon:"inbox",href:"/products"},{title:"Reportes",icon:"graphic_eq",href:"/reports"},{title:"Salir",icon:"exit_to_app",href:"/login"}]}},methods:{checkLogin:function(){if("/login"!=this.$route.path){var t=this.$storage.get("user");t||(console.log("Invalid login"),this.$router.push("/login"))}}}},c=s,l=a("2877"),d=a("6544"),u=a.n(d),v=a("7496"),p=a("8336"),f=a("549c"),h=a("ce7e"),m=a("132d"),_=a("8860"),b=a("ba95"),g=a("40fe"),x=a("c954"),y=a("5d23"),k=a("f774"),$=a("9910"),V=a("71d9"),w=a("2a7f"),C=a("706c"),S=Object(l["a"])(c,o,i,!1,null,null,null),D=S.exports;u()(S,{VApp:v["a"],VBtn:p["a"],VContent:f["a"],VDivider:h["a"],VIcon:m["a"],VList:_["a"],VListTile:b["a"],VListTileAction:g["a"],VListTileAvatar:x["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VNavigationDrawer:k["a"],VSpacer:$["a"],VToolbar:V["a"],VToolbarItems:w["a"],VToolbarSideIcon:C["a"],VToolbarTitle:w["b"]});var T=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},B=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Bienvenido a "+t._s(t.$appName)+"\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        Cree clientes, productos, registre ventas y genere reportes\n      ")])])],1)],1)},O=[],q={data:function(){return{}}},A=q,j=a("a523"),L=a("0e8f"),I=a("adda"),F=a("a722"),z=Object(l["a"])(A,E,O,!1,null,null,null),N=z.exports;u()(z,{VContainer:j["a"],VFlex:L["a"],VImg:I["a"],VLayout:F["a"]});var M={components:{HelloWorld:N}},Y=M,Q=Object(l["a"])(Y,P,B,!1,null,null,null),R=Q.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"action"},[a("v-container",{attrs:{bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v(t._s(this.title)+" - "+t._s(t.$appName))]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Usuario",type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[t._v(">")]),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Contraseña",id:"password",type:"password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doLogin()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.doLogin}},[t._v("Entrar")])],1)],1)],1)],1)],1)],1)},U=[],H=a("bc3a"),J=a.n(H),W={name:"Login",data:function(){return{title:"Iniciar sesion",user:{},username:"",password:""}},methods:{doLogin:function(){var t=this;this.$http.post("".concat(this.$apiBase,"/auth"),{username:this.username,password:this.password}).then((function(e){e.data&&e.data.data&&e.data.data.token?(t.user=e.data.data,t.$toasted.success("Ingreso correcto!"),t.$storage.set("user",e.data.data),t.$router.push("/")):console.log("Error al ingresar")})).catch((function(e){console.log("Error ingresando..."),t.$toasted.error("Uusario y/o contraseñas invalidos")}))}}},K=W,X=(a("0c4a"),a("b0af")),Z=a("99d9"),tt=a("4bd4"),et=a("2677"),at=Object(l["a"])(K,G,U,!1,null,null,null),nt=at.exports;u()(at,{VBtn:p["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VContainer:j["a"],VContent:f["a"],VFlex:L["a"],VForm:tt["a"],VLayout:F["a"],VSpacer:$["a"],VTextField:et["a"],VToolbar:V["a"],VToolbarTitle:w["b"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.breadcrumb,divider:">"}}),a("h1",[t._v("Clients")]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},n),[t._v("Nuevo cliente")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Cliente")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Nombre Completo*",required:""},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Dirección*",required:""},model:{value:t.client.address,callback:function(e){t.$set(t.client,"address",e)},expression:"client.address"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Teléfono",type:"tel"},model:{value:t.client.tel,callback:function(e){t.$set(t.client,"tel",e)},expression:"client.tel"}})],1),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-select",{attrs:{items:["Persona","Tienda"],label:"Tipo*",required:""},model:{value:t.client.type,callback:function(e){t.$set(t.client,"type",e)},expression:"client.type"}})],1)],1)],1),a("small",[t._v("*indica que son requeridos")])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:function(e){t.client={},t.dialog=!1}}},[t._v("Cancelar")]),a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return t.saveClient()}}},[t._v("Guardar")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.clients},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),a("td",{},[t._v(t._s(e.item.address))]),a("td",{},[t._v(t._s(e.item.tel))]),a("td",{},[t._v(t._s(e.item.type))]),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{fab:"",dark:"",color:"warning",small:""},on:{click:function(a){return t.deleteClient(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("remove")])],1),a("v-btn",{attrs:{fab:"",dark:"",color:"cyan"},on:{click:function(a){t.client=e.item,t.dialog=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v("edit")])],1)],1)]}}])})],1)},ot=[],it={name:"Clients",created:function(){var t=this.$storage.get("user").token;this.config={headers:{Authorization:"Bearer "+t}},this.getData()},data:function(){return{breadcrumb:[{text:"Iniico",href:"/"},{text:"Clientes",disabled:!0}],client:{type:"Persona"},dialog:!1,config:{},clients:[],headers:[{text:"Nombre",value:"name"},{text:"Dirección",value:"address"},{text:"Teléfono",value:"tel"},{text:"Tipo",value:"type"},{text:""}]}},methods:{saveClient:function(){var t=this;this.dialog=!1;var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.client._id?this.$http.patch("".concat(this.$apiBase,"/client/").concat(this.client._id),this.client,a).then((function(e){t.getData(),t.$toasted.success("Cliente Actualizado con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})):this.$http.post("".concat(this.$apiBase,"/client"),this.client,a).then((function(e){t.getData(),t.$toasted.success("Cliente creado con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))},deleteClient:function(t){var e=this;console.log(t),this.$swal({title:"Estas seguro?",text:"El cliente no podra recuperarse luego de ser eliminado!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?e.$http.delete("".concat(e.$apiBase,"/client/").concat(t._id),e.config).then((function(t){e.getData(),swal("Poof! Cliente eliminado!",{icon:"success"})})).catch((function(t){e.$toasted.error("Error obteniendo los datos")})):swal("Operacion cancelada!")}))},getData:function(){var t=this,e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.$http.get("".concat(this.$apiBase,"/client"),a).then((function(e){t.clients=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))}}},st=it,ct=a("2bc5"),lt=a("12b2"),dt=a("8fea"),ut=a("169a"),vt=a("b56d"),pt=Object(l["a"])(st,rt,ot,!1,null,"7538be9c",null),ft=pt.exports;u()(pt,{VBreadcrumbs:ct["a"],VBtn:p["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:lt["a"],VContainer:j["a"],VDataTable:dt["a"],VDialog:ut["a"],VFlex:L["a"],VIcon:m["a"],VLayout:F["a"],VSelect:vt["a"],VSpacer:$["a"],VTextField:et["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.breadcrumb,divider:">"}}),a("h1",[t._v("Productos")]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},n),[t._v("Nuevo producto")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Producto")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Producto/Servicio*",required:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Precio de Compra*",required:"",type:"number"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Precio de venta*",required:"",type:"number"},model:{value:t.product.sale_price,callback:function(e){t.$set(t.product,"sale_price",e)},expression:"product.sale_price"}})],1)],1)],1),a("small",[t._v("*indica que son requeridos")])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:function(e){t.product={},t.dialog=!1}}},[t._v("Cancelar")]),a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return t.saveProduct()}}},[t._v("Guardar")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.products},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),a("td",{},[t._v(t._s(e.item.price))]),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{fab:"",dark:"",color:"warning",small:""},on:{click:function(a){return t.deleteProduct(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("remove")])],1),a("v-btn",{attrs:{fab:"",dark:"",color:"cyan"},on:{click:function(a){t.product=e.item,t.dialog=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v("edit")])],1)],1)]}}])})],1)},mt=[],_t={name:"Products",created:function(){var t=this.$storage.get("user").token;this.config={headers:{Authorization:"Bearer "+t}},this.getData()},data:function(){return{breadcrumb:[{text:"Iniico",href:"/"},{text:"Productos",disabled:!0}],product:{},dialog:!1,config:{},products:[],headers:[{text:"Nombre",value:"name"},{text:"Precio",value:"price"},{text:""}]}},methods:{saveProduct:function(){var t=this;this.dialog=!1;var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.product._id?this.$http.patch("".concat(this.$apiBase,"/product/").concat(this.product._id),this.product,a).then((function(e){t.getData(),t.$toasted.success("Producto Actualizado con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})):this.$http.post("".concat(this.$apiBase,"/product"),this.product,a).then((function(e){t.getData(),t.$toasted.success("Producto creado con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))},deleteProduct:function(t){var e=this;console.log(t),this.$swal({title:"Estas seguro?",text:"El producto no podra recuperarse luego de ser eliminado!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?e.$http.delete("".concat(e.$apiBase,"/product/").concat(t._id),e.config).then((function(t){e.getData(),swal("Poof! Producto eliminado!",{icon:"success"})})).catch((function(t){e.$toasted.error("Error obteniendo los datos")})):swal("Operacion cancelada!")}))},getData:function(){var t=this;this.product={};var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.$http.get("".concat(this.$apiBase,"/product"),a).then((function(e){t.products=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))}}},bt=_t,gt=Object(l["a"])(bt,ht,mt,!1,null,"fc79bcf6",null),xt=gt.exports;u()(gt,{VBreadcrumbs:ct["a"],VBtn:p["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:lt["a"],VContainer:j["a"],VDataTable:dt["a"],VDialog:ut["a"],VFlex:L["a"],VIcon:m["a"],VLayout:F["a"],VSpacer:$["a"],VTextField:et["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.breadcrumb,divider:">"}}),a("h1",[t._v("Ventas")]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},n),[t._v("Nuevo Venta")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Venta")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-select",{attrs:{hint:""+t.sale.client,items:t.clients,"item-text":"name","item-value":"_id",label:"Cliente","persistent-hint":"","return-object":"","single-line":""},on:{change:function(e){return t.setSaleClient()}},model:{value:t.sale_client,callback:function(e){t.sale_client=e},expression:"sale_client"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{hint:""+t.sale.product,items:t.products,"item-text":"name","item-value":"_id",label:"Producto","persistent-hint":"","return-object":"","single-line":""},on:{change:function(e){return t.setSaleProduct()}},model:{value:t.sale_product,callback:function(e){t.sale_product=e},expression:"sale_product"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Precio de venta*",required:"",type:"number"},model:{value:t.sale.sale_price,callback:function(e){t.$set(t.sale,"sale_price",e)},expression:"sale.sale_price"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Cantidad*",required:"",type:"number"},model:{value:t.sale.qty,callback:function(e){t.$set(t.sale,"qty",e)},expression:"sale.qty"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha de venta","prepend-icon":"event",readonly:""},model:{value:t.sale.date,callback:function(e){t.$set(t.sale,"date",e)},expression:"sale.date"}},n))]}}]),model:{value:t.date_menu,callback:function(e){t.date_menu=e},expression:"date_menu"}},[a("v-date-picker",{on:{input:function(e){t.date_menu=!1}},model:{value:t.sale.date,callback:function(e){t.$set(t.sale,"date",e)},expression:"sale.date"}})],1)],1)],1)],1),a("small",[t._v("*indica que son requeridos")])],1),a("v-card-actions",[a("v-btn",{attrs:{color:"red darken-1",flat:""},on:{click:function(e){t.sale={},t.dialog=!1}}},[t._v("Cancelar")]),a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return t.saveSale()}}},[t._v("Guardar")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.sales},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(t.formatDate(e.item.date)))]),a("td",[t._v(t._s(t.clients.find((function(t){return t._id==e.item.client})).name))]),a("td",[t._v(t._s(t.products.find((function(t){return t._id==e.item.product})).name))]),a("td",{},[t._v(t._s(e.item.qty))]),a("td",{},[t._v("Q "+t._s(e.item.sale_price))]),a("td",{},[t._v("Q "+t._s(e.item.sale_price*e.item.qty))]),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{fab:"",dark:"",color:"warning",small:""},on:{click:function(a){return t.deleteSale(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("remove")])],1),a("v-btn",{attrs:{fab:"",dark:"",color:"cyan"},on:{click:function(a){return t.modifySale(e.item)}}},[a("v-icon",{attrs:{dark:""}},[t._v("edit")])],1)],1)]}}])})],1)},kt=[],$t=(a("7514"),a("28a5"),a("768b")),Vt={name:"Sales",created:function(){var t=this.$storage.get("user").token;this.config={headers:{Authorization:"Bearer "+t}},this.getData()},data:function(){return{date_menu:!1,breadcrumb:[{text:"Iniico",href:"/"},{text:"Ventas",disabled:!0}],sale_client:!1,sale_product:!1,sale:{qty:1,date:(new Date).toISOString().slice(0,10)},dialog:!1,config:{},sales:[],products:[],clients:[],headers:[{text:"Fecha",value:"date"},{text:"Cliente",value:"client"},{text:"Producto",value:"product"},{text:"Cant",value:"qty"},{text:"Precio",value:"price"},{text:"Total",value:"total"},{text:""}]}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object($t["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"/").concat(r,"/").concat(n)},setSaleClient:function(){this.sale.client=this.sale_client._id},modifySale:function(t){this.sale=t,this.sale_product=this.products.find((function(e){return e._id=t.product})),this.sale_client=this.clients.find((function(e){return e._id==t.client})),this.dialog=!0},setSaleProduct:function(){console.log(this.sale_product),this.sale.product=this.sale_product._id,this.sale.price=this.sale_product.price,this.sale.sale_price=this.sale_product.sale_price},saveSale:function(){var t=this;this.dialog=!1;var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.sale._id?this.$http.patch("".concat(this.$apiBase,"/sale/").concat(this.sale._id),this.sale,a).then((function(e){t.getData(),t.$toasted.success("Venta Actualizado con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})):this.$http.post("".concat(this.$apiBase,"/sale"),this.sale,a).then((function(e){t.getData(),t.$toasted.success("Venta creada con éxito")})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))},deleteSale:function(t){var e=this;console.log(t),this.$swal({title:"Estas seguro?",text:"Esta venta será anulada!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(a){a?e.$http.delete("".concat(e.$apiBase,"/sale/").concat(t._id),e.config).then((function(t){e.getData(),swal("Poof! Venta anulada!",{icon:"success"})})).catch((function(t){e.$toasted.error("Error obteniendo los datos")})):swal("Operacion cancelada!")}))},getData:function(){var t=this;this.sale={qty:1,date:(new Date).toISOString().slice(0,10)};var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.$http.get("".concat(this.$apiBase,"/product"),a).then((function(e){t.products=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})),this.$http.get("".concat(this.$apiBase,"/client"),a).then((function(e){t.clients=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})),this.$http.get("".concat(this.$apiBase,"/sale"),a).then((function(e){t.sales=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))}}},wt=Vt,Ct=a("2e4b"),St=a("e449"),Dt=Object(l["a"])(wt,yt,kt,!1,null,"3320b288",null),Tt=Dt.exports;u()(Dt,{VBreadcrumbs:ct["a"],VBtn:p["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:lt["a"],VContainer:j["a"],VDataTable:dt["a"],VDatePicker:Ct["a"],VDialog:ut["a"],VFlex:L["a"],VIcon:m["a"],VLayout:F["a"],VMenu:St["a"],VSelect:vt["a"],VSpacer:$["a"],VTextField:et["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.breadcrumb,divider:">"}}),a("h1",[t._v("Reporte de ventas")]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",lg4:"","offset-lg1":""}},[a("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Date",hint:"DD/MM/YYYY",readonly:"","prepend-icon":"event"},model:{value:t.date_start_formated,callback:function(e){t.date_start_formated=e},expression:"date_start_formated"}},n))]}}]),model:{value:t.date_menu_start,callback:function(e){t.date_menu_start=e},expression:"date_menu_start"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1)],1),a("v-flex",{attrs:{xs12:"",lg4:"","offset-lg1":""}},[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Fecha Final",hint:"DD/MM/YYYY","prepend-icon":"event",readonly:""},model:{value:t.date_end_formated,callback:function(e){t.date_end_formated=e},expression:"date_end_formated"}},n))]}}]),model:{value:t.date_menu_end,callback:function(e){t.date_menu_end=e},expression:"date_menu_end"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}})],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.sales},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(t.formatDate(e.item.date)))]),a("td",[t._v(t._s(t.clients.find((function(t){return t._id==e.item.client})).name))]),a("td",[t._v(t._s(t.products.find((function(t){return t._id==e.item.product})).name))]),a("td",{},[t._v(t._s(e.item.qty))]),a("td",{},[t._v("Q "+t._s(e.item.sale_price))]),a("td",{},[t._v("Q "+t._s(e.item.sale_price*e.item.qty))])]}}])})],1),a("br"),a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("Totales de venta de "+t._s(t.date_start_formated)+" a "+t._s(t.date_end_formated))]),a("v-list",[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s("Total de venta: ")}})],1),a("v-list-tile-avatar",[t._v("\n              Q. "+t._s(t.total_sale)+"\n            ")])],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s("Total de costos: ")}})],1),a("v-list-tile-avatar",[t._v("\n              Q. "+t._s(t.total_price)+"\n            ")])],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s("Total garrafones: ")}})],1),a("v-list-tile-avatar",[t._v("\n              "+t._s(t.total_qty)+"\n            ")])],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s("Ganancia: ")}})],1),a("v-list-tile-avatar",[t._v("\n              Q. "+t._s(t.total_sale-t.total_price)+"\n            ")])],1)],1)],1)])],1)],1)],1)],1)},Bt=[];a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("f576");function Et(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Ot(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function Ot(t,e){if(t){if("string"===typeof t)return qt(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?qt(t,e):void 0}}function qt(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var At={name:"Reports",watch:{date_start:function(t){this.date_start_formated=this.formatDate(this.date_start),this.getData()},date_end:function(t){this.date_end_formated=this.formatDate(this.date_end),this.getData()},sales:function(){var t,e=0,a=0,n=0,r=Et(this.sales);try{for(r.s();!(t=r.n()).done;){var o=t.value;e+=parseFloat(o.qty)*parseFloat(o.price),a+=parseFloat(o.qty)*parseFloat(o.sale_price),n+=parseFloat(o.qty)}}catch(i){r.e(i)}finally{r.f()}this.total_sale=a,this.total_price=e,this.total_qty=n}},created:function(){this.date_start_formated=this.formatDate((new Date).toISOString().substr(0,10)),this.date_end_formated=this.formatDate((new Date).toISOString().substr(0,10));var t=this.$storage.get("user").token;this.config={headers:{Authorization:"Bearer "+t}},this.getData()},data:function(){return{total_sale:0,total_qty:0,total_price:0,date_menu:!1,date_menu_start:!1,date_menu_end:!1,breadcrumb:[{text:"Iniico",href:"/"},{text:"Reportes",disabled:!0}],date_start:(new Date).toISOString().substr(0,10),date_start_formated:!1,date_end:(new Date).toISOString().substr(0,10),date_end_formated:!1,dialog:!1,config:{},sales:[],products:[],clients:[],headers:[{text:"Fecha",value:"date"},{text:"Cliente",value:"client"},{text:"Producto",value:"product"},{text:"Cant",value:"qty"},{text:"Precio",value:"price"},{text:"Total",value:"total"}]}},methods:{formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object($t["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"/").concat(r,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object($t["a"])(e,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0"))},setSaleClient:function(){this.sale.client=this.sale_client._id},setSaleProduct:function(){console.log(this.sale_product),this.sale.product=this.sale_product._id,this.sale.price=this.sale_product.price,this.sale.sale_price=this.sale_product.sale_price},getData:function(){var t=this;this.sale={qty:1,date:(new Date).toISOString().slice(0,10)};var e=this.$storage.get("user").token,a={headers:{Authorization:"Bearer "+e}};this.$http.get("".concat(this.$apiBase,"/product"),a).then((function(e){t.products=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})),this.$http.get("".concat(this.$apiBase,"/client"),a).then((function(e){t.clients=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")})),this.$http.get("".concat(this.$apiBase,"/sale/").concat(this.date_start,"/").concat(this.date_end),a).then((function(e){t.sales=e.data.data})).catch((function(e){t.$toasted.error("Error obteniendo los datos")}))}}},jt=At,Lt=Object(l["a"])(jt,Pt,Bt,!1,null,"68b5f6b1",null),It=Lt.exports;u()(Lt,{VBreadcrumbs:ct["a"],VCard:X["a"],VCardTitle:lt["a"],VDataTable:dt["a"],VDatePicker:Ct["a"],VFlex:L["a"],VLayout:F["a"],VList:_["a"],VListTile:b["a"],VListTileAvatar:x["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VMenu:St["a"],VTextField:et["a"]}),n["default"].use(T["a"]);var Ft=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:R},{path:"/login",name:"login",component:nt},{path:"/clients",name:"clients",component:ft},{path:"/products",name:"products",component:xt},{path:"/sales",name:"sales",component:Tt},{path:"/reports",name:"reports",component:It},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),zt=a("2f62");n["default"].use(zt["a"]);var Nt=new zt["a"].Store({state:{},mutations:{},actions:{}}),Mt=a("a65d"),Yt=a.n(Mt),Qt=a("99d1"),Rt=a("ce5b"),Gt=a.n(Rt),Ut=a("14ba"),Ht=a.n(Ut),Jt=a("9483");Object(Jt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d1e7"),a("5363");n["default"].use(Gt.a,{iconfont:"mdi"}),n["default"].prototype.$http=J.a,n["default"].prototype.$appName="AwaPura",n["default"].prototype.$apiBase="https://awapura.herokuapp.com",n["default"].config.productionTip=!1,n["default"].use(Yt.a,{closeOnSwipe:!0,duration:3e3}),n["default"].use(Qt["a"],{prefix:"app_",driver:"local",ttl:864e5}),n["default"].use(Ht.a),new n["default"]({router:Ft,store:Nt,render:function(t){return t(D)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.8e5710c2.js.map