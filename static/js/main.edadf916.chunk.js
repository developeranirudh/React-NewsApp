(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},39:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(18),s=a.n(c),r=(a(29),a(30),a(19)),i=a(20),l=a(24),o=a(23),b=(a(31),a(7)),j=a(0),d=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(b.b,{className:"navbar-brand",to:"/",children:"WorldTalks"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(b.b,{className:"nav-link",to:"/business",children:"Business"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(b.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(b.b,{className:"nav-link",to:"/sport",children:"Sports"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(b.b,{className:"nav-link",to:"/technology",children:"Technology"})})]})})]})})})}}]),a}(n.Component),u=a(9),p=a.n(u),h=a(12),x=a(11);a(39);function O(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(j.jsx)("img",{src:e.imgurl,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.title}),Object(j.jsx)("p",{className:"card-text",children:e.description}),Object(j.jsx)("a",{href:e.urlnews,id:"b1s",className:"btn btn-sm btn-dark",children:"Read More"})]})]})})})}a(40),a(47);function m(){return Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("div",{class:"spinner-border text-bg-dark",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})})})}function v(e){var t=Object(n.useState)(!0),a=Object(x.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(1),i=Object(x.a)(r,2),l=i[0],o=i[1],b=Object(n.useState)([]),d=Object(x.a)(b,2),u=d[0],v=d[1],g=Object(n.useState)(""),f=Object(x.a)(g,2),y=f[0],N=f[1],w=function(){var t=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://newsapi.org/v2/top-headlines?category=".concat(e.category,"&apiKey=","3bac4428378d4e32af0a4501fc4fb812","&page=").concat(l,"&PageSize=15"));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,v(n.articles),N(n.totalResults/10),s(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){w()}),[]);var k=function(){var t=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,fetch("https://newsapi.org/v2/top-headlines?category=".concat(e.category,"&apiKey=","3bac4428378d4e32af0a4501fc4fb812","&page=").concat(l,"&PageSize=10"));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,v(n.articles),o(l-1),s(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,fetch("https://newsapi.org/v2/top-headlines?category=".concat(e.category,'&apiKey="3bac4428378d4e32af0a4501fc4fb812"&page=').concat(l,"&PageSize=10"));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,v(n.articles),o(l+1),s(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=u.map((function(e){return Object(j.jsx)(O,{imgurl:e.urlToImage?e.urlToImage:"https://cdn.pixabay.com/photo/2017/06/26/19/32/news-2444888_960_720.jpg",title:e.title?e.title.slice(0,44):"",description:e.description?e.description.slice(0,65):"",urlnews:e.url},110*Math.random())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{id:"h1",children:"Top Headlines"}),Object(j.jsx)("div",{className:"shownews",children:!0===c?Object(j.jsx)(m,{}):C}),Object(j.jsxs)("div",{className:"pagebtn",children:[Object(j.jsx)("button",{type:"button",disabled:l<=1,class:"btn btn-dark",id:"p1",onClick:k,children:"Previous"}),Object(j.jsx)("button",{type:"button",class:"btn btn-dark",disabled:!(l<y),id:"n1",onClick:S,children:"Next"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}var g=a(2);function f(){return Object(j.jsx)("div",{children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{exact:!0,path:"/",children:Object(j.jsx)(v,{category:"general"},"general")}),Object(j.jsx)(g.a,{exact:!0,path:"/business",children:Object(j.jsx)(v,{category:"business"},"business")}),Object(j.jsx)(g.a,{exact:!0,path:"/entertainment",children:Object(j.jsx)(v,{category:"entertainment"},"entertainment")}),Object(j.jsx)(g.a,{exact:!0,path:"/sport",children:Object(j.jsx)(v,{category:"sport"},"sport")}),Object(j.jsx)(g.a,{exact:!0,path:"/technology",children:Object(j.jsx)(v,{category:"technology"},"technology")})]})]})})}s.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.edadf916.chunk.js.map