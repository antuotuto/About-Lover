webpackJsonp([6],[,,,,,,,,,,,function(t,n,e){"use strict";function s(t,n){return new RegExp("(^|\\s)"+n+"(\\s|$)").test(t.className)}function i(t,n){if(!s(t,n)){var e=t.className.split(" ");e.push(n),t.className=e.join(" ")}}function r(t,n,e){return e?t.setAttribute("data-"+n,e):t.getAttribute("data-"+n)}function a(t){return!1!==c&&("standard"===c?t:c+t.charAt(0).toUpperCase()+t.substr(1))}n.c=i,n.b=r,n.a=a;var o=document.createElement("div").style,c=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var n in t)if(void 0!==o[t[n]])return n;return!1}()},,,,,,function(t,n,e){"use strict";e.d(n,"a",function(){return s}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return o}),e.d(n,"f",function(){return c}),e.d(n,"g",function(){return u});var s="SET_SINGER",i="SET_PLAYING_STATE",r="SET_FULL_SCREEN",a="SET_PLAYLIST",o="SET_SEQUENCE_LIST",c="SET_PLAY_MODE",u="SET_CURRENT_INDEX"},,,,function(t,n,e){"use strict";var s=e(2),i=e(100),r=function(t){e.e(1).then(e.bind(null,106)).then(function(n){t(n)})},a=function(t){e.e(2).then(e.bind(null,109)).then(function(n){t(n)})},o=function(t){e.e(4).then(e.bind(null,105)).then(function(n){t(n)})},c=function(t){e.e(3).then(e.bind(null,107)).then(function(n){t(n)})},u=function(t){e.e(0).then(e.bind(null,108)).then(function(n){t(n)})};s.a.use(i.a),n.a=new i.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:r},{path:"/rank",name:"rank",component:o},{path:"/singer",component:a,children:[{path:":id",component:u}]},{path:"/search",name:"search",component:c}]})},function(t,n,e){"use strict";var s=e(2),i=e(15),r=e(52),a=e(53),o=e(55),c=e(54),u=e(102),l=e.n(u);s.a.use(i.c);var d="production"!==e.i({NODE_ENV:"production"}).NOOE_ENV;n.a=new i.c.Store({actions:r,getters:a,state:o.a,mutations:c.a,strict:d,plugins:d?[l()()]:[]})},function(t,n){},,function(t,n){t.exports="data:image/png;base64,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"},,function(t,n,e){e(76);var s=e(0)(e(46),e(98),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(95),i=e.n(s),r=e(94),a=e.n(r);n.default={name:"app",components:{Tab:i.a,Player:a.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(11),i=e.i(s.a)("transform");n.default={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.touch.initiated){var n=t.touches[0].pageX-this.touch.startX,e=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+n));this._offset(e)}},progressTouchEnd:function(){this.touch.initiated=!1,this._triggerPercent()},progressClick:function(t){var n=this.$refs.progressBar.getBoundingClientRect(),e=t.pageX-n.left;this._offset(e),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,n=this.$refs.progress.clientWidth/t;this.$emit("percentChange",n)},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[i]="translate3d("+t+"px,0,0)"}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var n=this.$refs.progressBar.clientWidth-16,e=t*n;this._offset(e)}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(37),i=e.n(s),r=e(69),a=e.n(r),o=e(93),c=e.n(o),u=e(11),l=e(15),d=e.i(u.a)("transform");e.i(u.a)("transitionDuration");n.default={data:function(){return{songReady:!1,currentTime:0}},computed:i()({cdCls:function(){return this.playing?"play":"play pause"},playIcon:function(){return this.playing?"icon-pause":"icon-play"},miniIcon:function(){return this.playing?"icon-pause-mini":"icon-play-mini"},disableCls:function(){return this.songReady?"":"disable"},percent:function(){return this.currentTime/this.currentSong.duration}},e.i(l.a)(["fullScreen","playlist","currentSong","playing","currentIndex"])),methods:i()({back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlaying:function(){this.songReady&&this.setPlayingState(!this.playing)},next:function(){if(this.songReady){var t=this.currentIndex+1;t===this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},prev:function(){if(this.songReady){var t=this.currentIndex-1;-1===t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying(),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){this.songReady=!0},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return((t|=0)/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=t.toString().length;e<n;)t="0"+t,e++;return t},onProgressBarChange:function(t){var n=this.currentSong.duration*t;this.$refs.audio.currentTime=n,this.playing||this.togglePlaying(),this.currentLyric&&this.currentLyric.seek(1e3*n)},enter:function(t,n){var e=this._getPosAndScale(),s=e.x,i=e.y,r=e.scale,o={0:{transform:"translate3d("+s+"px,"+i+"px,0) scale("+r+")"},60:{transform:"translate3d(0,0,0) scale(1.1)"},100:{transform:"translate3d(0,0,0) scale(1)"}};a.a.registerAnimation({name:"move",animation:o,presets:{duration:400,easing:"linear"}}),a.a.runAnimation(this.$refs.cdWrapper,"move",n)},afterEnter:function(){a.a.unregisterAnimation("move"),this.$refs.cdWrapper.style.animation=""},leave:function(t,n){this.$refs.cdWrapper.style.transition="all 0.4s";var e=this._getPosAndScale(),s=e.x,i=e.y,r=e.scale;this.$refs.cdWrapper.style[d]="translate3d("+s+"px,"+i+"px,0) scale("+r+")",this.$refs.cdWrapper.addEventListener("transitionend",n)},afterLeave:function(){this.$refs.cdWrapper.style.transition="",this.$refs.cdWrapper.style[d]=""},_getPosAndScale:function(){var t=.8*window.innerWidth,n=40/t;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-t/2-30,scale:n}}},e.i(l.b)({setFullScreen:"SET_FULL_SCREEN",setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX"})),created:function(){},watch:{currentSong:function(){var t=this;this.$nextTick(function(){t.$refs.audio.play()})},playing:function(t){var n=this.$refs.audio;this.$nextTick(function(){t?n.play():n.pause()})}},components:{ProgressBar:c.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";e.d(n,"a",function(){return s});var s={sequence:0,loop:1,random:2}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(2),i=e(27),r=e.n(i),a=e(21),o=e(24),c=e.n(o),u=e(26),l=e.n(u),d=e(22),p=e(23);e.n(p);s.a.config.productionTip=!1,c.a.attach(document.body),s.a.use(l.a,{loading:e(25)}),new s.a({el:"#app",router:a.a,store:d.a,template:"<App/>",components:{App:r.a}})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"selectPlay",function(){return i});var s=e(17),i=function(t,n){var e=t.commit,i=(t.state,n.list),r=n.index;e(s.e,i),e(s.d,i),e(s.g,r),e(s.c,!0),e(s.b,!0)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"singer",function(){return s}),e.d(n,"playing",function(){return i}),e.d(n,"fullScreen",function(){return r}),e.d(n,"playlist",function(){return a}),e.d(n,"sequenceList",function(){return o}),e.d(n,"mode",function(){return c}),e.d(n,"currentIndex",function(){return u}),e.d(n,"currentSong",function(){return l});var s=function(t){return t.singer},i=function(t){return t.playing},r=function(t){return t.fullScreen},a=function(t){return t.playlist},o=function(t){return t.sequenceList},c=function(t){return t.mode},u=function(t){return t.currentIndex},l=function(t){return t.playlist[t.currentIndex]||{}}},function(t,n,e){"use strict";var s,i=e(56),r=e.n(i),a=e(17),o=(s={},r()(s,a.a,function(t,n){t.singer=n}),r()(s,a.b,function(t,n){t.playing=n}),r()(s,a.c,function(t,n){t.fullScreen=n}),r()(s,a.d,function(t,n){t.playlist=n}),r()(s,a.e,function(t,n){t.sequenceList=n}),r()(s,a.f,function(t,n){t.mode=n}),r()(s,a.g,function(t,n){t.currentIndex=n}),s);n.a=o},function(t,n,e){"use strict";var s=e(50),i={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:s.a.sequence,currentIndex:-1};n.a=i},,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,,,,,,,,,,,,,function(t,n,e){e(74);var s=e(0)(e(47),e(96),"data-v-1baeb9d8",null);t.exports=s.exports},function(t,n,e){e(77);var s=e(0)(e(48),e(99),"data-v-ab2a96ce",null);t.exports=s.exports},function(t,n,e){e(75);var s=e(0)(e(49),e(97),"data-v-328e5736",null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[e("div",{staticClass:"bar-inner"},[e("div",{ref:"progress",staticClass:"progress"}),t._v(" "),e("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(n){n.preventDefault(),t.progressTouchStart(n)},touchmove:function(n){n.preventDefault(),t.progressTouchMove(n)},touchend:t.progressTouchEnd}},[e("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"tab-link"},[t._v("排行\n    ")])]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("tab"),t._v(" "),e("keep-alive",[e("router-view")],1),t._v(" "),e("player")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length>0"}],staticClass:"player"},[e("transition",{attrs:{name:"normal"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[e("div",{staticClass:"background"},[e("img",{attrs:{width:"100%",height:"100%",src:t.currentSong.image}})]),t._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),e("h2",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),e("div",{staticClass:"middle"},[e("div",{ref:"middleL",staticClass:"middle-l"},[e("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[e("div",{staticClass:"cd",class:t.cdCls},[e("img",{staticClass:"image",attrs:{src:t.currentSong.image}})])]),t._v(" "),e("div",{staticClass:"playing-lyric-wrapper"},[e("div",{staticClass:"playing-lyric"})])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"dot-wrapper"},[e("span",{staticClass:"dot"}),t._v(" "),e("span",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"progress-wrapper"},[e("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),e("div",{staticClass:"progress-bar-wrapper"},[e("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),e("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))])]),t._v(" "),e("div",{staticClass:"operators"},[e("div",{staticClass:"icon i-left"},[e("i")]),t._v(" "),e("div",{staticClass:"icon i-left",class:t.disableCls},[e("i",{staticClass:"icon-prev",on:{click:t.prev}})]),t._v(" "),e("div",{staticClass:"icon i-center",class:t.disableCls},[e("i",{class:t.playIcon,on:{click:t.togglePlaying}})]),t._v(" "),e("div",{staticClass:"icon i-right",class:t.disableCls},[e("i",{staticClass:"icon-next",on:{click:t.next}})]),t._v(" "),e("div",{staticClass:"icon i-right"},[e("i",{staticClass:"icon"})])])])])]),t._v(" "),e("transition",{attrs:{name:"mini"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[e("div",{staticClass:"icon"},[e("img",{class:t.cdCls,attrs:{width:"40",height:"40",src:t.currentSong.image}})]),t._v(" "),e("div",{staticClass:"text"},[e("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),e("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),e("div",{staticClass:"control"},[e("i",{staticClass:"icon-mini",class:t.miniIcon,on:{click:function(n){n.stopPropagation(),t.togglePlaying(n)}}})]),t._v(" "),e("div",{staticClass:"control"},[e("i",{staticClass:"icon-playlist"})])])]),t._v(" "),e("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{canplay:t.ready,error:t.error,timeupdate:t.updateTime}})],1)},staticRenderFns:[]}}],[51]);
//# sourceMappingURL=app.1735048b7d8673803188.js.map