// { "framework": "Weex" } 

!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=29)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"})},setBundleUrl:function(e,t){var o=e,n="",i="",r=void 0,a=o.indexOf("your_current_IP")>=0||o.indexOf("file://assets/")>=0,s=o.indexOf("file:///")>=0&&o.indexOf("WeexDemo.app")>0;if(a)r="file://assets/dist";else if(s)r=o.substring(0,o.lastIndexOf("/")+1);else{var l=/\/\/([^\/]+?)\//.exec(o),c=/\/\/[^\/]+\/([^\/\s]+)\//.exec(o);l&&l.length>=2&&(n=l[1]),c&&c.length>=2&&(i=c[1]),r="http://"+n+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?r+(i?i+"/":""):"web"===i||"dist"===i?"./index.html?page=/dist/":"./index.html?page=")+t},getUrlSearch:function(e,t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(o);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}};t.default=n},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"]},[o("div",{class:["toolbar",e.isipx?"t-ipx":""]},[o("div",{staticClass:["left"]},[o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.back}},[e._v("")]),o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.close}},[e._v("")])]),o("text",{staticClass:["tlt"]}),o("div",{staticClass:["right"]},[o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.reload}},[e._v("")])])]),o("div",{class:["webview-box",e.isipx?"web-ipx":""]},[o("web",{ref:"wv",staticClass:["webview"],attrs:{src:e.url},on:{error:e.error}})])])},staticRenderFns:[]},e.exports.render._withStripped=!0},29:function(e,t,o){var n,i,r=[];r.push(o(9)),n=o(8);var a=o(10);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=n=n.default),"function"==typeof i&&(i=i.options),i.__file="/Users/yuqirong/Documents/yuqirong/learn/关于Weex/yanxuan-weex-demo/src/page/webview.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-6766af5c",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=n,e.exports.el="true",new Vue(e.exports)},8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=weex.requireModule("navigator"),a=weex.requireModule("webview");t.default={components:{},data:function(){return{url0:"http://m.you.163.com"}},created:function(e){i.default.initIconFont(),this.url=i.default.getUrlSearch(weex.config.bundleUrl,"weburl")||this.url0},computed:{isipx:function(){return weex&&("iPhone10,3"===weex.config.env.deviceModel||"iPhone10,6"===weex.config.env.deviceModel)}},methods:{back:function(e){a.goBack(this.$refs.wv)},close:function(e){r.pop({animated:"true"})},reload:function(e){a.reload(this.$refs.wv)},error:function(e){}}}},9:function(e,t){e.exports={wrapper:{position:"absolute",left:0,right:0,bottom:0,top:0},iconfont:{fontFamily:"iconfont"},toolbar:{position:"fixed",top:0,left:0,right:0,height:"114",paddingTop:"44",backgroundColor:"#fafafa",opacity:.99,zIndex:101,flexWrap:"nowrap",flexDirection:"row",justifyContent:"space-around",borderBottomWidth:"1",borderBottomColor:"#d9d9d9"},"t-ipx":{height:"154",paddingTop:"84"},tlt:{flex:1,fontSize:"36",paddingTop:"10",color:"#333333",textAlign:"center"},left:{height:"68",width:"150",paddingTop:"10",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",paddingLeft:"20"},right:{height:"68",width:"150",paddingTop:"10",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-end",paddingRight:"20"},btnTxt:{fontSize:"40",width:"70",color:"#666666",textAlign:"center"},"webview-box":{position:"absolute",top:"114",left:0,right:0,bottom:0},"web-ipx":{top:"154"},webview:{position:"absolute",top:0,left:0,right:0,bottom:0}}}});