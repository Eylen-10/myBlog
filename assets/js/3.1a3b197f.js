(window.webpackJsonp=window.webpackJsonp||[]).push([[3,25],{248:function(t,e){t.exports=function(t){return null==t}},250:function(t,e,a){},251:function(t,e,a){},252:function(t,e,a){},257:function(t,e,a){},259:function(t,e,a){"use strict";a(250)},260:function(t,e,a){},261:function(t,e,a){"use strict";a(251)},262:function(t,e,a){var i=a(12),s=a(5),n=a(11);t.exports=function(t){return"string"==typeof t||!s(t)&&n(t)&&"[object String]"==i(t)}},263:function(t,e,a){"use strict";a(252)},264:function(t,e,a){},268:function(t,e,a){"use strict";a.r(e);var i=a(248),s=a.n(i),n=a(242),r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:i="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,a,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,i,s){if(/bitbucket.org/.test(e)){return e.replace(n.a,"")+"/src"+`/${i}/`+(a?a.replace(n.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n.a,"")+"/-/edit"+`/${i}/`+(a?a.replace(n.a,"")+"/":"")+s}return(n.i.test(e)?e:"https://github.com/"+e).replace(n.a,"")+"/edit"+`/${i}/`+(a?a.replace(n.a,"")+"/":"")+s}}},o=(a(261),a(10)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},269:function(t,e,a){"use strict";a.r(e);a(91);var i=a(242),s=a(262),n=a.n(s),r=a(248),o=a.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(c.PREV,this)},next(){return u(c.NEXT,this)}}};const c={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:a,$route:s,$site:r,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:d}=t,h=u(e),p=d(a),f=o()(p)?h:p;return!1===f?void 0:n()(f)?Object(i.l)(r.pages,f,s.path):c(a,l)}function d(t,e,a){const i=[];!function t(e,a){for(let i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],a):a.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const s=i[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[e+a]}}var h=l,p=(a(263),a(10)),f=Object(p.a)(h,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},271:function(t,e,a){"use strict";a.r(e);a(259);var i=a(10),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=s.exports},277:function(t,e,a){"use strict";a(257)},278:function(t,e,a){"use strict";a(260)},279:function(t,e,a){"use strict";a(264)},289:function(t,e,a){"use strict";a.r(e);var i=a(288),s=a(271),n=a(267);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var o={name:"Navbar",components:{SidebarButton:s.default,NavLinks:n.default,SearchBox:i.a,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},l=(a(278),a(10)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=c.exports},290:function(t,e,a){"use strict";a.r(e);var i={name:"Home",components:{NavLink:a(244).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(a(277),a(10)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);e.default=n.exports},291:function(t,e,a){"use strict";a.r(e);var i=a(268),s=a(269),n={components:{PageEdit:i.default,PageNav:s.default},props:["sidebarItems"]},r=(a(279),a(10)),o=Object(r.a)(n,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},358:function(t,e,a){"use strict";a.r(e);var i=a(290),s=a(289),n=a(291),r=a(351),o=a(242),l={name:"Layout",components:{Home:i.default,Page:n.default,Sidebar:r.default,Navbar:s.default},data:()=>({isSidebarOpen:!1}),computed:{pageDir(){var t;return null===(t=Object(o.j)(this.$page)[0])||void 0===t?void 0:t.children},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(o.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{isActive:o.e,toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=a(10),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("div",{staticClass:"sidebar article-directories"},[t.pageDir.length?e("h3",{staticClass:"header"},[t._v("目录")]):t._e(),t._v(" "),t._l(t.pageDir,(function(a){return e("RouterLink",{key:a.charIndex,staticClass:"dir-item",class:{active:t.isActive(t.$route,a.path)},attrs:{to:a.path}},[e("span",[t._v(t._s(a.title))])])}))],2)],1)}),[],!1,null,null,null);e.default=u.exports}}]);