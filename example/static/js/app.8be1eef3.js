(function(e){function t(t){for(var r,o,s=t[0],u=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23be":function(e,t,n){},"3a99":function(e,t,n){},"3f37":function(e,t,n){"use strict";var r=n("7d23"),i=n.n(r);i.a},"50a3":function(e,t,n){"use strict";var r=n("3a99"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=(n("23be"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),a=[],o={name:"app",data:function(){return{isLoading:!0}},computed:{}},s=o,u=(n("7c55"),n("2877")),l=Object(u["a"])(s,i,a,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page home"},[n("div",{staticClass:"test"},[n("rx-group",{ref:"group",attrs:{title:"Test"}},[n("rx-input",{attrs:{label:"姓名",placeholder:"请输入用户名"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),n("rx-input",{attrs:{label:"身份证",placeholder:"请输入用户名",required:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("rx-input",{attrs:{label:"手机号",placeholder:"请输入手机号",required:"",isType:"phone",max:11},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("rx-input",{attrs:{label:"验证码",placeholder:"请输入验证码",required:"",isType:e.isOneTwoThree,min:3,max:3},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}},[n("img",{staticStyle:{padding:"5px"},attrs:{slot:"right",src:"https://ws1.sinaimg.cn/large/005O2C54gy1fzf7lrosi8j304n02174i.jpg",alt:""},slot:"right"})])],1),n("div",{staticClass:"btn-box"},[n("button",{staticClass:"rx-button",on:{click:e.handleSubmit}},[e._v("验证")])])],1)])},f=[],h=(n("96cf"),n("3b8d")),v=(n("7f7f"),n("ac6a"),n("a4bb")),m=n.n(v),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"alert"}},[e.isShow?[n("div",{staticClass:"rx-toast",class:[e.type,e.size,e.position],style:"width:"+e.width},[n("span",[e._v(e._s(e.message))])])]:e._e()],2)},b=[],y={data:function(){return{isShow:!1,message:"",type:"",size:"small",position:"middle",isMask:!1,delay:3e3,isIcon:!1,width:"auto"}},watch:{isShow:function(e){var t,n=this;e?t=setTimeout(function(){n.isShow=!1},this.delay):clearTimeout(t)}}},x=y,_=(n("3f37"),Object(u["a"])(x,g,b,!1,null,null,null));_.options.__file="toast.vue";var w,V=_.exports;function $(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){e&&m()(e).map(function(n){var r=e[n];void 0!==r&&(t[0][n]=r)})}),t[0]}var T=r["a"].extend(V),S=function(){w=new T({el:document.createElement("div")}),document.body.appendChild(w.$el)},C=function(e){"string"===typeof e&&(e={message:e}),S(),$(w,S.$data,e),w.isShow=!0};["success","error","info","warning"].forEach(function(e){C[e]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"middle";return C({message:t,type:e,position:n})}});var O=C,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rx-group"},[n("div",{staticClass:"rx-group__title"},[e._v("\n    "+e._s(e.title)+"\n    "),e._t("title")],2),n("div",{staticClass:"rx-group__content"},[e._t("default")],2)])},j=[],I=n("795b"),P=n.n(I),M=(n("6762"),n("2fdb"),new r["a"]),q={name:"rx-group",props:{title:{type:String,default:""}},data:function(){return{fields:[],errors:[]}},computed:{},created:function(){var e=this;M.$on("addInput",function(t){e.fields.includes(t)||e.findParentId(t)!==e._uid||e.fields.push(t)}),M.$on("removeInput",function(t){var n=e.fields.indexOf(t);-1!==n&&e.fields.splice(n,1)})},beforeDestroy:function(){this.fields=[],this.errors=[]},methods:{validate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.callback,r=void 0===n?function(){}:n,i=t.scroller,a=void 0===i?"body":i,o=!0,s=0;return new P.a(function(t){e.fields.length||(t(o),r(o,0)),e.fields.map(function(n){e.validInput(n),"function"===typeof r&&++s===e.fields.length&&(o=!e.errors.length,e.errors.length&&(e.scrollerToChild(a,e.errors[0].$el),e.errors[0].focus(),e.errors=[]),t(o),r(o,n))})})},scrollerToChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",t=arguments.length>1?arguments[1]:void 0;e=document.querySelector(e);var n=this.$el.offsetTop+t.offsetTop-t.offsetTop;e.scrollTop=n},validInput:function(e){e.blur();var t=this.errors.indexOf(e);e.valid?e.valid&&t>=0&&this.errors.splice(t,1):this.errors.push(e)},reset:function(){this.fields.forEach(function(e){e.reset()})},findParentId:function(e){return!!e.$parent&&(e.$parent.$options._componentTag===this.$options._componentTag?e.$parent._uid:this.findParentId(e.$parent))}}},E=q,N=(n("50a3"),Object(u["a"])(E,k,j,!1,null,null,null));N.options.__file="group.vue";var A=N.exports;A.install=function(e){e.component(A.name,A)};var F=A,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rx-input",class:{required:e.required,"has-error":!e.valid}},[n("div",{staticClass:"rx-input__title"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.$slots.left,expression:"$slots.left"}],staticClass:"rx-input__title--left"},[e._t("left")],2),n("div",{staticClass:"rx-input__title--label"},[n("label",{attrs:{for:e.inputId}},[e._v(e._s(e.label))])])]),n("div",{staticClass:"rx-input__body"},["checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",attrs:{id:e.inputId,placeholder:e.placeholder,maxlength:e.max,name:e.name,type:"checkbox"},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{input:e.change,change:function(t){var n=e.currentValue,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&(e.currentValue=n.concat([a])):o>-1&&(e.currentValue=n.slice(0,o).concat(n.slice(o+1)))}else e.currentValue=i}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",attrs:{id:e.inputId,placeholder:e.placeholder,maxlength:e.max,name:e.name,type:"radio"},domProps:{checked:e._q(e.currentValue,null)},on:{input:e.change,change:function(t){e.currentValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],ref:"input",attrs:{id:e.inputId,placeholder:e.placeholder,maxlength:e.max,name:e.name,type:e.type},domProps:{value:e.currentValue},on:{input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.change]}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$slots["right"],expression:"$slots['right']"}],staticClass:"rx-input__right"},[e._t("right")],2),n("div",{staticClass:"error-message"},[e._v("\n    "+e._s(e.errorMessage)+"\n  ")])])},B=[],D=(n("c5f6"),n("6b54"),n("386d"),n("a481"),n("3b2b"),n("4917"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;e>11&&(e=11);var t=Math.random().toString(36).substr(2);return t.substr(0,e)}),J=/^[1][3,4,5,7,8,9][0-9]{9}$/,L=/^[A-Za-z0-9]+$/,R=function(e,t){var n={phone:function(e){return{valid:J.test(e),message:"请输入正确的手机号"}},noChinese:function(e){return{valid:L.test(e),message:"请输入数字或字母"}}};return n[e](t)},G={name:"rx-input",props:{label:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},max:{type:Number,default:1e3},min:{type:Number,default:0},required:{type:Boolean,default:!1},name:{type:String,default:""},value:[String,Number],isType:[Function,String]},data:function(){return{currentValue:null,isFocus:!1,valid:!0,errorMessage:null,inputId:D(5)}},mounted:function(){this.currentValue=this.value,M.$emit("addInput",this)},beforeDestroy:function(){M.$emit("removeInput",this)},watch:{currentValue:function(e){this.$emit("input",e)},value:function(e){this.currentValue=e}},methods:{reset:function(){this.currentValue="",this.valid=!0},focus:function(){this.$refs.input.focus(),this.isFocus=!0,this.$emit("onFocus",this.currentValue)},blur:function(){this.$refs.input.blur(),this.isFocus=!1,this.onValid(),this.$emit("onBlur",this.currentValue)},change:function(){this.onValid(),this.$emit("onChange",this.currentValue)},enter:function(){this.$emit("enter",this.currentValue)},onValid:function(){if(this.required&&!this.currentValue)return this.valid=!1,this.errorMessage="".concat(this.label,"不能为空"),!1;if(this.min&&this.currentValue.length<this.min)return this.valid=!1,this.errorMessage="字符长度不能小于".concat(this.min,"个"),!1;if(this.valid=!0,this.isType){var e=null;e="string"===typeof this.isType?R(this.isType,this.currentValue):this.isType(this.currentValue),this.valid=e.valid,this.errorMessage=e.message}}}},H=G,Z=(n("7d34"),Object(u["a"])(H,z,B,!1,null,null,null));Z.options.__file="input.vue";var K=Z.exports;K.install=function(e){e.component(K.name,K)};var Q=K,U=[F,Q],W=function e(t){e.installed||U.map(function(e){t.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&W(window.Vue);var X={name:"home",props:{},data:function(){return{value:"",value3:"",value2:"",phone:"",isOneTwoThree:function(e){return{valid:"123"===e,message:"请输入123"}}}},methods:{handleSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.group.validate();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return",!1);case 5:this.toast("校验通过");case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},components:{rxGroup:F,rxInput:Q}},Y=X,ee=(n("de16"),Object(u["a"])(Y,p,f,!1,null,null,null));ee.options.__file="Home.vue";var te=ee.exports;r["a"].use(d["a"]);var ne=new d["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:te,meta:{title:"首页"}}]}),re=n("2f62"),ie={loading:!1},ae=ie,oe={},se=oe,ue={changeLoading:function(e,t){e.loading=t}},le=ue,ce={state:ae,actions:se,mutations:le};r["a"].use(re["a"]);var de=new re["a"].Store({modules:{public:ce}}),pe={methods:{toast:O}},fe=pe;r["a"].mixin(fe),r["a"].config.productionTip=!1,new r["a"]({router:ne,store:de,render:function(e){return e(c)}}).$mount("#app")},"5c48":function(e,t,n){},6294:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),i=n.n(r);i.a},"7d23":function(e,t,n){},"7d34":function(e,t,n){"use strict";var r=n("6294"),i=n.n(r);i.a},de16:function(e,t,n){"use strict";var r=n("f3e7"),i=n.n(r);i.a},f3e7:function(e,t,n){}});