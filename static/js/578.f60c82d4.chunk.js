"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{5578:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(2982),a=e(885),c=e(184),u=function(t){var n=t.cast,e=n.id,r=n.name,a=n.character,u=n.profile_path,s="https://image.tmdb.org/t/p/w500".concat(u);return u||(s="https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"),(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:"".concat(s),alt:"cast: ".concat(r),width:"150"}),(0,c.jsx)("p",{children:r}),(0,c.jsx)("p",{children:a})]},e)},s=e(2791),o=e(7689),i=e(2690),p=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],p=n[1],f=(0,o.UO)().id;return(0,s.useEffect)((function(){(0,i.IQ)(f).then((function(t){p((0,r.Z)(t))}))}),[f]),(0,c.jsx)("ul",{children:e.length>0&&e.map((function(t){return(0,c.jsx)(u,{cast:t},t.id)}))})}},2690:function(t,n,e){e.d(n,{IQ:function(){return d},Jh:function(){return h},XT:function(){return i},fh:function(){return p},z1:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),o="api_key=9dfb13779fa5e86c42f825ab68b431d4";s().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"?").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?".concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/credits?").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(n,"/reviews?").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=578.f60c82d4.chunk.js.map