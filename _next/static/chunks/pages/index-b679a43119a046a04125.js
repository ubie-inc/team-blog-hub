_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),s=n("YFqc"),a=n.n(s),o=n("4ier"),u=n("fneu"),c=n("l07G"),l=n("szSY"),h=r.a.createElement,m=function(){return h("div",{className:"scrollable-members"},c.a.map((function(t,e){return h(a.a,{key:"scrollable-member-".concat(e),href:Object(l.d)(t.id),passHref:!0},h("a",{className:"scrollable-member__link"},h("span",{className:"scrollable-member__image"},h("img",{src:t.avatarSrc,alt:t.nickname,className:"scrollable-member__img",width:80,height:80})),h("span",{className:"scrollable-member__nickname"},t.nickname),h("span",{className:"scrollable-member__real-name"},t.realName)))})))},d=n("qhaX"),f=n("Mmls"),$=n("AAbX"),p=r.a.createElement;e.default=function(){return p(r.a.Fragment,null,p(f.a,{title:u.a.siteMeta.title,description:u.a.siteMeta.description,path:"/",removeSiteNameFromTitle:!0}),p("section",{className:"home-hero"},p($.a,null,p("h1",{className:"home-hero__title"},u.a.siteMeta.title),!!u.a.siteMeta.description&&p("p",{className:"home-hero__description"},u.a.siteMeta.description))),p("section",{className:"home-members"},p($.a,null,p("div",{className:"home-section-title-container"},p("h2",{className:"home-section-title"},"Members"),p(a.a,{href:"/members"},p("a",{className:"home-section-link"},"See Details \u2192"))),p("div",{className:"home-members-container"},p($.b,null,p(m,null))))),p("section",{className:"home-posts"},p($.a,null,p("div",{className:"home-section-title-container"},p("h2",{className:"home-section-title"},"Articles")),p("div",{className:"home-posts-container"},p(d.a,{items:o})))))}},QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=r;var s=function(e,i,s,a){for(var o,u,c,l=s.$locale().relativeTime||r,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,d=0;d<m;d+=1){var f=h[d];f.d&&(o=a?n(e).diff(s,f.d,!0):s.diff(e,f.d,!0));var $=(t.rounding||Math.round)(Math.abs(o));if(c=o>0,$<=f.r||!f.r){$<=1&&d>0&&(f=h[d-1]);var p=l[f.l];u="string"==typeof p?p.replace("%d",$):p($,i,f.l,c);break}}return i?u:(c?l.future:l.past).replace("%s",u)};i.to=function(t,e){return s(t,e,this,!0)},i.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}}()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+d(i,2,"0")+":"+d(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:s,d:r,D:c,h:i,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",p={};p[$]=m;var v=function(t){return t instanceof g},_=function(t,e,n){var i;if(!t)return $;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var r=t.name;p[r]=t,i=r}return!n&&i&&($=i),i||!n&&$},M=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},y=f;y.l=_,y.i=v,y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var g=function(){function m(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var d=m.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return y},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return M(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<M(t)},d.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var l=this,h=!!y.u(o)||o,m=y.p(t),d=function(t,e){var n=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(r)},f=function(t,e){return y.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},$=this.$W,p=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(m){case u:return h?d(1,0):d(31,11);case a:return h?d(1,p):d(0,p+1);case s:var M=this.$locale().weekStart||0,g=($<M?$+7:$)-M;return d(h?v-g:v+(6-g),p);case r:case c:return f(_+"Hours",0);case i:return f(_+"Minutes",1);case n:return f(_+"Seconds",2);case e:return f(_+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var l,h=y.p(s),m="set"+(this.$u?"UTC":""),d=(l={},l[r]=m+"Date",l[c]=m+"Date",l[a]=m+"Month",l[u]=m+"FullYear",l[i]=m+"Hours",l[n]=m+"Minutes",l[e]=m+"Seconds",l[t]=m+"Milliseconds",l)[h],f=h===r?this.$D+(o-this.$W):o;if(h===a||h===u){var $=this.clone().set(c,1);$.$d[d](f),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[y.p(t)]()},d.add=function(t,o){var c,l=this;t=Number(t);var h=y.p(o),m=function(e){var n=M(l);return y.w(n.date(n.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===r)return m(1);if(h===s)return m(7);var d=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,f=this.$d.getTime()+t*d;return y.w(f,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},m=function(t){return y.s(s%12||12,t,"0")},d=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:y.s(s,2,"0"),h:m(1),hh:m(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||f[t]||i.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,l){var h,m=y.p(c),d=M(t),f=6e4*(d.utcOffset()-this.utcOffset()),$=this-d,p=y.m(this,d);return p=(h={},h[u]=p/12,h[a]=p,h[o]=p/3,h[s]=($-f)/6048e5,h[r]=($-f)/864e5,h[i]=$/36e5,h[n]=$/6e4,h[e]=$/1e3,h)[m]||$,l?p:y.a(p)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return p[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=_(t,e,!0);return i&&(n.$L=i),n},d.clone=function(){return y.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},m}(),N=g.prototype;return M.prototype=N,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){N[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t(e,g,M),M},M.locale=_,M.isDayjs=v,M.unix=function(t){return M(1e3*t)},M.en=p[$],M.Ls=p,M}()},qhaX:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("q1tI"),r=n.n(i),s=n("YFqc"),a=n.n(s),o=n("Wgwc"),u=n.n(o),c=n("QgiU"),l=n.n(c),h=n("szSY"),m=r.a.createElement;u.a.extend(l.a);var d=function(t){var e=t.item,n=e.authorName,i=e.title,r=e.isoDate,s=e.link,o=e.dateMiliSeconds,c=Object(h.c)(n);if(!c)return null;var l=Object(h.b)(s);return m("article",{className:"post-link"},m(a.a,{href:Object(h.d)(c.id),passHref:!0},m("a",{className:"post-link__author"},m("img",{src:c.avatarSrc,className:"post-link__author-img",width:35,height:35}),m("div",{className:"post-link__author-name"},m("div",{className:"post-link__author-name"},c.nickname),m("time",{dateTime:r,className:"post-link__date"},u()(r).fromNow())))),m("a",{href:s,className:"post-link__main-link"},m("h2",{className:"post-link__title"},i),l&&m("div",{className:"post-link__site"},m("img",{src:Object(h.a)(l),width:14,height:14,className:"post-link__site-favicon"}),l)),o&&o>Date.now()-2592e5&&m("div",{className:"post-link__new-label"},"NEW"))},f=function(t){var e,n=Object(i.useState)(32),s=n[0],a=n[1],o=(null===(e=t.items)||void 0===e?void 0:e.length)||0,u=o-s>0;return o?m(r.a.Fragment,null,m("div",{className:"post-list"},t.items.slice(0,s).map((function(t,e){return m(d,{key:"post-item-".concat(e),item:t})}))),u&&m("div",{className:"post-list-load"},m("button",{onClick:function(){return a(s+32)},className:"post-list-load__button"},"LOAD MORE"))):m("div",{className:"post-list-empty"},"No posts yet")}}},[["/EDR",0,2,1,3]]]);