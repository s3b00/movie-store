(this["webpackJsonpmovie-store"]=this["webpackJsonpmovie-store"]||[]).push([[0],{66:function(e,t,c){"use strict";c.r(t);var a,n=c(2),r=c(19),l=c.n(r),s=c(15),i=c(14),o=c(6),d=c(1),j=function(){return Object(d.jsx)("h1",{children:"Hi! Im Ilya, 19 y.o. Thanks for visiting this page."})},b=s.c,u=function(){var e=b((function(e){return e.movie})).error;return Object(d.jsxs)("div",{className:"h-100 d-flex align-items-center flex-column",children:[e?Object(d.jsx)("p",{children:e}):Object(d.jsx)("span",{}),Object(d.jsx)("h1",{children:"\u0422\u0443\u0442 \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442 :\u0441"})]})},O=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light p-2",children:[Object(d.jsx)(i.b,{to:"/movie-store/",children:Object(d.jsx)("a",{className:"navbar-brand",href:"/#",children:"MovieStore"})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(i.b,{to:"/movie-store/",children:Object(d.jsx)("a",{className:"nav-link",href:"/#",children:"Main page"})})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{to:"/about_me",children:Object(d.jsx)("a",{className:"nav-link",href:"/#",children:"About me"})})})]})})]})})},v=function(e){var t=e.card;return Object(d.jsxs)("div",{className:"card mb-2",style:{width:"220px"},children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)(i.b,{to:"/movie/".concat(t.imdbID),children:Object(d.jsx)("img",{src:t.Poster,className:"img-fluid p-1",alt:"."})})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.Title}),Object(d.jsxs)("div",{className:"card-text d-flex flex-column justify-content-between",children:[Object(d.jsxs)("small",{children:["\u0422\u0438\u043f \u0444\u0438\u043b\u044c\u043c\u0430:"," ",t.Type]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("small",{children:["\u0413\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430:"," ",t.Year]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("small",{children:["imdbID:"," ",t.imdbID]})," ",Object(d.jsx)("br",{})]})]})]},t.imdbID)},m=function(){var e=b((function(e){return e.movies})),t=e.movies,c=e.error;return e.loading?Object(d.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f.."}):c?Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:c})}):Object(d.jsx)("div",{className:"d-flex justify-content-between flex-wrap m-auto",children:t.map((function(e){return Object(d.jsx)(v,{card:e},e.imdbID)}))})};!function(e){e.FETCH_MOVIE="FETCH_MOVIE",e.FETCH_MOVIE_SUCCESS="FETCH_MOVIE_SUCCESS",e.FETCH_MOVIE_ERROR="FETCH_MOVIE_ERROR",e.SET_MOVIE="SET_MOVIE",e.FETCH_MOVIE_REQUESTED="FETCH_MOVIE_REQUESTED"}(a||(a={}));var h,p=function(e){var t=e.match,c=b((function(e){return e.movie})),r=c.movie,l=c.error,i=c.loading,o=Object(s.b)();return Object(n.useEffect)((function(){o({type:a.FETCH_MOVIE_REQUESTED,payload:"i=".concat(t.params.imdbID)})}),[o,t.params.imdbID]),l?Object(d.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041e\u0448\u0438\u0431\u043a\u0430:"," ",l]}):i?Object(d.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435!"}):Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)("img",{src:null===r||void 0===r?void 0:r.Poster,alt:null===r||void 0===r?void 0:r.Title})}),Object(d.jsxs)("div",{className:"col-9",children:[Object(d.jsx)("h1",{children:null===r||void 0===r?void 0:r.Title}),Object(d.jsxs)("small",{children:["\u0421\u0442\u0440\u0430\u043d\u0430:"," ",null===r||void 0===r?void 0:r.Country]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("small",{children:["imdbRating:"," ",null===r||void 0===r?void 0:r.imdbRating]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["\u0416\u0430\u043d\u0440:"," ",null===r||void 0===r?void 0:r.Genre]}),Object(d.jsxs)("p",{children:["\u0410\u043a\u0442\u0435\u0440\u044b:"," ",null===r||void 0===r?void 0:r.Actors]}),Object(d.jsxs)("p",{children:["\u0421\u0431\u043e\u0440\u044b:"," ",null===r||void 0===r?void 0:r.BoxOffice]}),Object(d.jsxs)("p",{children:["\u0412\u044b\u0445\u043e\u0434 \u043d\u0430 DVD:"," ",null===r||void 0===r?void 0:r.DVD]}),Object(d.jsxs)("p",{children:["\u0420\u0435\u0436\u0438\u0441\u0435\u0440:"," ",null===r||void 0===r?void 0:r.Director]}),Object(d.jsxs)("p",{children:["\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0441\u0442:"," ",null===r||void 0===r?void 0:r.Writer]}),Object(d.jsxs)("p",{children:["\u042f\u0437\u044b\u043a:"," ",null===r||void 0===r?void 0:r.Language]}),Object(d.jsxs)("p",{children:["\u041c\u0435\u0442\u0430\u0441\u043a\u043e\u0440:"," ",null===r||void 0===r?void 0:r.Metascore]}),Object(d.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"," ",null===r||void 0===r?void 0:r.Plot]}),Object(d.jsxs)("p",{children:["\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c:"," ",null===r||void 0===r?void 0:r.Production]}),Object(d.jsxs)("p",{children:["Website:"," ",null===r||void 0===r?void 0:r.Website]}),Object(d.jsxs)("p",{children:["\u0422\u0438\u043f:"," ",null===r||void 0===r?void 0:r.Type]}),Object(d.jsxs)("p",{children:["\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430:"," ",null===r||void 0===r?void 0:r.Runtime]})]})]})]})},x=c(23);!function(e){e.FETCH_MOVIES="FETCH_MOVIES",e.FETCH_MOVIES_SUCCESS="FETCH_MOVIES_SUCCESS",e.FETCH_MOVIES_ERROR="FETCH_MOVIES_ERROR",e.SET_MOVIES="SET_MOVIES",e.MOVIES_FETCH_REQUESTED="MOVIES_FETCH_REQUESTED"}(h||(h={}));var E=function(){var e,t=Object(n.useState)(""),c=Object(x.a)(t,2),a=c[0],r=c[1],l=Object(n.useState)(""),i=Object(x.a)(l,2),o=i[0],j=i[1],u=Object(n.useState)("Short"),O=Object(x.a)(u,2),v=O[0],m=O[1],p=b((function(e){return e.movies})).movies,E=Object(s.b)();!function(e){e.Year="Year",e.Title="Title",e.Type="Type"}(e||(e={}));var f=function(e){E({type:h.SET_MOVIES,payload:p.sort((function(t,c){return t[e]>c[e]?1:t[e]<c[e]?-1:0}))})};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{className:"row mb-3",children:[Object(d.jsxs)("div",{className:"col-12 col-md-4",children:[Object(d.jsx)("label",{className:"visually-hidden",htmlFor:"titleInput",children:"Title"}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"titleInput",placeholder:"Title",onChange:function(e){var t=e.target;r(t.value)},value:a})})]}),Object(d.jsxs)("div",{className:"col-12 col-md-3",children:[Object(d.jsx)("label",{className:"visually-hidden",htmlFor:"yearInput",children:"Year"}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",id:"yearInput",placeholder:"Year",onChange:function(e){var t=e.target;j(t.value)},value:o})})]}),Object(d.jsxs)("div",{className:"col-12 col-md-3",children:[Object(d.jsx)("label",{className:"visually-hidden",htmlFor:"plotInput",children:"Plot"}),Object(d.jsxs)("select",{className:"form-select",id:"plotInput",onChange:function(e){var t=e.target;m(t.value)},children:[Object(d.jsx)("option",{value:"short",children:"Short"}),Object(d.jsx)("option",{value:"full",children:"Full"})]})]}),Object(d.jsx)("div",{className:"col-12 col-md-2",children:Object(d.jsx)("button",{type:"button",className:"btn btn-primary col-12",onClick:function(){E({type:h.MOVIES_FETCH_REQUESTED,payload:"s=".concat(a,"&y=").concat(o,"&plot=").concat(v)})},children:"Search"})})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{type:"radio",name:"type",value:"title",className:"form-check-input",id:"titleRB",onChange:function(){return f(e.Title)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"nameRB",children:"Title"})]}),Object(d.jsxs)("div",{className:"form-check ",children:[Object(d.jsx)("input",{type:"radio",name:"type",value:"year",className:"form-check-input",id:"yearRB",onChange:function(){return f(e.Year)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"abvRB",children:"Year"})]}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{type:"radio",name:"type",value:"type",className:"form-check-input",id:"typeRB",onChange:function(){return f(e.Year)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"attRB",children:"Type"})]})]})]})},f=function(){var e=b((function(e){return e.movies})).movies;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)(E,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/movie-store/",component:e.length?m:u}),Object(d.jsx)(o.a,{path:"/about_me",component:j}),Object(d.jsx)(o.a,{path:"/movie/:imdbID",component:p})]})]})]})},S=c(16),T=c(36),_=c(13),y=c.n(_),C=c(22),g=c.n(C),I=c(12),N="http://www.omdbapi.com/?apikey=".concat("a0e1fa4a","&"),R=y.a.mark(F),M=y.a.mark(V);function F(e){var t;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(I.b)({type:a.FETCH_MOVIE});case 2:return c.prev=2,c.next=5,Object(I.a)((function(){return g()({method:"GET",url:N+e.payload})}));case 5:return t=c.sent,c.next=8,Object(I.b)((r=t.data,{type:a.FETCH_MOVIE_SUCCESS,payload:r}));case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(2),Object(I.b)((n=c.t0.message,{type:a.FETCH_MOVIE_ERROR,payload:n}));case 13:case"end":return c.stop()}var n,r}),R,null,[[2,10]])}function V(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(a.FETCH_MOVIE_REQUESTED,F);case 2:case"end":return e.stop()}}),M)}var H=y.a.mark(w),k=y.a.mark(D);function w(e){var t,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(I.b)({type:h.FETCH_MOVIES});case 2:return a.prev=2,a.next=5,Object(I.a)((function(){return g()({method:"GET",url:N+e.payload})}));case 5:if("False"!==(t=a.sent).data.Response){a.next=8;break}throw new Error(t.data.Error);case 8:return c=t.data.Search,a.next=11,Object(I.b)((r=c,{type:h.FETCH_MOVIES_SUCCESS,payload:r}));case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(2),a.next=17,Object(I.b)((n=a.t0.message,{type:h.FETCH_MOVIES_ERROR,payload:n}));case 17:case"end":return a.stop()}var n,r}),H,null,[[2,13]])}function D(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(h.MOVIES_FETCH_REQUESTED,w);case 2:case"end":return e.stop()}}),k)}var U={movie:null,loading:!1,error:null},B={movies:[],loading:!1,error:null},Q=Object(S.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.FETCH_MOVIES:return{loading:!0,error:null,movies:[]};case h.FETCH_MOVIES_SUCCESS:return{loading:!1,error:null,movies:t.payload};case h.FETCH_MOVIES_ERROR:return{loading:!1,error:t.payload,movies:[]};case h.SET_MOVIES:return{loading:!1,error:null,movies:t.payload};default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_MOVIE:return{loading:!0,error:null,movie:null};case a.FETCH_MOVIE_SUCCESS:return{loading:!1,error:null,movie:t.payload};case a.FETCH_MOVIE_ERROR:return{loading:!1,error:t.payload,movie:null};default:return e}}}),Y=Object(T.a)(),P=Object(S.d)(Q,Object(S.a)(Y));Y.run(D),Y.run(V),l.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(s.a,{store:P,children:Object(d.jsx)(f,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.78b5a9de.chunk.js.map