(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14e21408"],{"022a":function(t,e,n){"use strict";var i=n("59a9"),r=n.n(i);r.a},1296:function(t,e,n){"use strict";var i=n("ce5f"),r=n.n(i);r.a},"15a4":function(t,e,n){"use strict";var i=n("17a3"),r=n.n(i);r.a},"17a3":function(t,e,n){},"39f3":function(t,e,n){},"59a9":function(t,e,n){},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.794b6628.jpg"},"9bd0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,function(e,i){return n("div",{staticClass:"tab-control-item",class:{active:t.currentIndex===i},on:{click:function(e){t.itemClick(i)}}},[n("span",[t._v(t._s(e))])])}))},r=[],s={name:"TabControl",props:{titles:{type:Array,default:function(){return["流行","新款","精选"]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},a=s,o=(n("c98e"),n("2877")),c=Object(o["a"])(a,i,r,!1,null,"64c72d4c",null);c.options.__file="TabControl.vue";e["a"]=c.exports},"9e8c":function(t,e,n){},a5f7:function(t,e,n){"use strict";var i=n("39f3"),r=n.n(i);r.a},b14c:function(t,e,n){"use strict";var i=n("b884"),r=n.n(i);r.a},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav"},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.showTabControl,expression:"showTabControl"}],ref:"topTab",staticClass:"tab-control",on:{tabClick:t.tabClick}}),n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0,data:[t.showGoodsList]},on:{pullingUp:t.loadMore,scroll:t.contentScroll}},[n("home-swiper",{ref:"hSwiper",attrs:{banners:t.banners},on:{swiperLoaded:t.swiperLoaded}}),n("recommend-view",{attrs:{recommends:t.recommends}}),n("feature-view"),n("tab-control",{ref:"contentTab",staticClass:"tab-control",on:{tabClick:t.tabClick}}),n("goods-list",{attrs:{goods:t.showGoodsList}})],1),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.showBackTop,expression:"showBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},r=[];function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return s(t)||a(t)||o()}n("cadf"),n("551c"),n("097d");var l=n("a7ac"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.banners.length?n("swiper",{ref:"swiper"},t._l(t.banners,function(e,i){return n("swiper-item",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoaded}})])])})):t._e()},d=[],h=n("dc2c"),f={name:"HomeSwiper",props:{banners:{type:Array,required:!0}},data:function(){return{isLoaded:!1}},components:{Swiper:h["a"],SwiperItem:h["b"]},methods:{startTimer:function(){this.$refs.swiper&&this.$refs.swiper.startTimer()},stopTimer:function(){this.$refs.swiper&&this.$refs.swiper.stopTimer()},imageLoaded:function(){this.isLoaded||(this.$emit("swiperLoaded"),this.isLoaded=!0)}}},m=f,p=(n("022a"),n("2877")),v=Object(p["a"])(m,u,d,!1,null,"c18c4fa4",null);v.options.__file="HomeSwiper.vue";var b=v.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.recommends,function(e){return n("div",{staticClass:"recommend-item"},[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image,alt:""}}),n("span",[t._v(t._s(e.title))])])])}))},_=[],g={name:"RecommendView",props:{recommends:{type:Array,required:!0}}},T=g,y=(n("a5f7"),Object(p["a"])(T,w,_,!1,null,"2146fc1c",null));y.options.__file="RecommendView.vue";var C=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"feature"},[i("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[i("img",{attrs:{src:n("5cbe"),alt:""}})])])}],k={name:"FeatureView"},$=k,S=(n("da83"),Object(p["a"])($,x,I,!1,null,"74ce088a",null));S.options.__file="FeatureView.vue";var O=S.exports,j=n("9bd0"),L=n("6d71"),E=n("5d17"),D=n("a137");function W(){return Object(D["a"])({url:"/home/multidata"})}function N(t,e){return Object(D["a"])({url:"/home/data",params:{type:t,page:e}})}var A=n("b95e"),P=n("eecb"),B={name:"Home",components:{NavBar:l["a"],HomeSwiper:b,RecommendView:C,FeatureView:O,TabControl:j["a"],GoodsList:L["a"],Scroll:E["a"]},mixins:[P["a"]],data:function(){return{banners:[],recommends:[],goods:{pop:{page:1,list:[]},new:{page:1,list:[]},sell:{page:1,list:[]}},currentType:A["b"],showTabControl:!1,tabOffsetTop:0,saveY:0}},computed:{showGoodsList:function(){return this.goods[this.currentType].list}},created:function(){var t=this;this._getMultiData(),this._getProductData(A["b"]),this._getProductData(A["a"]),this._getProductData(A["c"]),this.$bus.$on("imgLoad",function(){t.$refs.scroll.refresh()})},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.scrollY},methods:{_getMultiData:function(){var t=this;W().then(function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list})},_getProductData:function(t){var e=this,n=this.goods[t].page;N(t,n).then(function(n){var i,r=n.data.list;(i=e.goods[t].list).push.apply(i,c(r)),e.goods[t].page+=1,e.$refs.scroll.finishedPullUp()})},tabClick:function(t){switch(t){case 0:this.currentType=A["b"];break;case 1:this.currentType=A["a"];break;case 2:this.currentType=A["c"];break}this.$refs.contentTab.currentIndex=t,this.$refs.topTab.currentIndex=t},loadMore:function(){this._getProductData(this.currentType)},contentScroll:function(t){this.showBackTop=t.y<=-A["d"],this.showTabControl=t.y<=-this.tabOffsetTop},swiperLoaded:function(){this.tabOffsetTop=this.$refs.contentTab.$el.offsetTop}}},M=B,R=(n("1296"),Object(p["a"])(M,i,r,!1,null,"2c5db9b8",null));R.options.__file="Home.vue";e["default"]=R.exports},b884:function(t,e,n){},c220:function(t,e,n){},c98e:function(t,e,n){"use strict";var i=n("c220"),r=n.n(i);r.a},ce5f:function(t,e,n){},da83:function(t,e,n){"use strict";var i=n("9e8c"),r=n.n(i);r.a},dc2c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})})):t._e()],2)],2)},r=[],s=(n("c5f6"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout(function(){t.handleDom(),t.startTimer()},100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval(function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)},this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout(function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)},this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=s,o=(n("15a4"),n("2877")),c=Object(o["a"])(a,i,r,!1,null,"69349c3b",null);c.options.__file="Swiper.vue";var l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],h={name:"Slide"},f=h,m=(n("b14c"),Object(o["a"])(f,u,d,!1,null,"4935a4a7",null));m.options.__file="SwiperItem.vue";var p=m.exports;n.d(e,"a",function(){return l}),n.d(e,"b",function(){return p})}}]);
//# sourceMappingURL=chunk-14e21408.c1188265.js.map