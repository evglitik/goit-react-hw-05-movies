"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{7851:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(6731),a=e(184),u=function(n){var t=n.name,e=n.id,u=n.state;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e),state:u,children:t})})},c=e(7689),s=function(n){var t=n.movies,e=(0,c.TH)();return(0,a.jsx)("ul",{children:t.map((function(n){return(0,a.jsx)(u,{id:n.id,name:n.title,state:{from:e}},n.id)}))})}},9544:function(n,t,e){e.r(t);var r=e(2982),a=e(885),u=e(7851),c=e(2791),s=e(2690),i=e(2240),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],f=t[1];return(0,c.useEffect)((function(){(0,s.XT)().then((function(n){f((function(t){return(0,r.Z)(n)}))})).catch((function(n){return console.log(n)}))}),[]),(0,o.jsxs)(i.x,{as:"main",p:"10px",children:[(0,o.jsx)("h3",{children:"Trend list"}),(0,o.jsx)(u.Z,{movies:e})]})}},2690:function(n,t,e){e.d(t,{IQ:function(){return d},Jh:function(){return v},XT:function(){return o},fh:function(){return f},z1:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c),i="api_key=9dfb13779fa5e86c42f825ab68b431d4";s().defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("trending/movie/day?".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(t,"?").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("search/movie?".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(t,"/credits?").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(t,"/reviews?").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.38a2ab8b.chunk.js.map