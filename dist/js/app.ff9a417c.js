(function(t){function e(e){for(var a,r,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2b255803":"f6e7f4be","chunk-1b1a4f00":"b986f3f9","chunk-0f93e12d":"64650942","chunk-14e21408":"c1188265","chunk-7df4bf1c":"5482186c","chunk-93e19c06":"8d6e4dde","chunk-2c8c86de":"afff0158"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2b255803":1,"chunk-1b1a4f00":1,"chunk-0f93e12d":1,"chunk-14e21408":1,"chunk-7df4bf1c":1,"chunk-93e19c06":1,"chunk-2c8c86de":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2b255803":"59f1f086","chunk-1b1a4f00":"884e372e","chunk-0f93e12d":"9145bd5c","chunk-14e21408":"67c602b8","chunk-7df4bf1c":"dc589b6e","chunk-93e19c06":"6bf0af8e","chunk-2c8c86de":"f8a4c252"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var o=i[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===a||u===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){o=l[c],u=o.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=c);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(t),u=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}i[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mall/dist/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"19ca":function(t,e,n){"use strict";var a=n("49f8"),r=n.n(a);r.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"32f6":function(t,e,n){"use strict";var a=n("a807"),r=n.n(a);r.a},4897:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[t._v(t._s(t.message))])])},r=[],i={name:"Toast",data:function(){return{isShow:!1,message:"我是弹窗"}}},c=i,o=(n("ce6e"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"8a5fba04",null);s.options.__file="Toast.vue";e["a"]=s.exports},"49f8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tab-bar",[a("tab-bar-item",{attrs:{path:"/home"}},[a("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-active-icon",src:n("b508"),alt:""},slot:"item-active-icon"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),a("tab-bar-item",{attrs:{path:"/category"}},[a("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-active-icon",src:n("a5ef"),alt:""},slot:"item-active-icon"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),a("tab-bar-item",{attrs:{path:"/cart"}},[a("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-active-icon",src:n("c3f8"),alt:""},slot:"item-active-icon"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),a("tab-bar-item",{attrs:{path:"/profile"}},[a("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-active-icon",src:n("d151"),alt:""},slot:"item-active-icon"}),a("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar"},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,p=(n("32f6"),n("2877")),m=Object(p["a"])(f,s,u,!1,null,"7f768dc2",null);m.options.__file="TabBar.vue";var d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",{staticClass:"item-active-icon"},[t._t("item-active-icon")],2):n("div",{staticClass:"item-icon"},[t._t("item-icon")],2),n("div",{staticClass:"item-text",style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("a481"),{name:"TabBarItem",props:{path:{type:String,required:!0},activeColor:{type:String,default:"#ff5777"}},methods:{itemClick:function(){this.$router.replace(this.path)}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}}}),g=b,k=(n("19ca"),Object(p["a"])(g,h,v,!1,null,"f8b3d5fe",null));k.options.__file="TabBarItem.vue";var _=k.exports,y={name:"MainTabBar",components:{TabBar:d,TabBarItem:_}},x=y,w=(n("9683"),Object(p["a"])(x,c,o,!1,null,"11aa426a",null));w.options.__file="MainTabBar.vue";var T=w.exports,O={name:"app",components:{MainTabBar:T}},j=O,S=(n("034f"),Object(p["a"])(j,r,i,!1,null,null,null));S.options.__file="App.vue";var C=S.exports,E=n("8c4f"),P=function(){return Promise.all([n.e("chunk-2b255803"),n.e("chunk-1b1a4f00"),n.e("chunk-14e21408")]).then(n.bind(null,"b3d7"))},B=function(){return Promise.all([n.e("chunk-2b255803"),n.e("chunk-1b1a4f00"),n.e("chunk-7df4bf1c")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-2b255803"),n.e("chunk-93e19c06")]).then(n.bind(null,"c228"))},L=function(){return n.e("chunk-2c8c86de").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-2b255803"),n.e("chunk-1b1a4f00"),n.e("chunk-0f93e12d")]).then(n.bind(null,"6ab7"))};a["a"].use(E["a"]);var M,N=new E["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:B},{path:"/cart",component:$},{path:"/profile",component:L},{path:"/detail",component:A}]}),q=N,I=n("2f62"),J=n("ade3"),D="add_to_cart",z="increment_count",F=(M={},Object(J["a"])(M,D,function(t,e){t.cartList.push(e)}),Object(J["a"])(M,z,function(t,e){t.cartList[e].count+=1}),M),G=F,H={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}},K=H,Q=(n("7514"),{addToCart:function(t,e){var n=t.state,a=t.commit;return new Promise(function(t){var r=n.cartList.find(function(t){return t.iid===e.iid});if(r){var i=n.cartList.indexOf(r);a(z,i)}else e.count=1,e.checked=!0,a(D,e);t()})}}),R=Q;a["a"].use(I["a"]);var U={cartList:[]},V=new I["a"].Store({state:U,mutations:G,getters:K,actions:R}),W=V,X=n("4897"),Y={};function Z(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)}Y.install=function(t){var e=t.extend(X["a"]);e.prototype.close=function(){this.isShow=!1,this.$el.addEventListener("transitionend",Z)},t.prototype.$toast=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el);var a=t.duration||2500;n.message=t.message,n.isShow=!0,setTimeout(function(){n.close()},a)}};var tt=Y,et=n("283e"),nt=n.n(et);a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],a["a"].use(tt),a["a"].use(nt.a,{loading:n("bc5e")}),new a["a"]({render:function(t){return t(C)},router:q,store:W}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"64a9":function(t,e,n){},"73aa":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},9683:function(t,e,n){"use strict";var a=n("73aa"),r=n.n(a);r.a},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},a807:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.1dbcbfa1.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},c863:function(t,e,n){},ce6e:function(t,e,n){"use strict";var a=n("c863"),r=n.n(a);r.a},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.ff9a417c.js.map