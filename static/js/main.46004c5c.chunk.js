(this["webpackJsonpreact-redux-with-thunk"]=this["webpackJsonpreact-redux-with-thunk"]||[]).push([[0],{14:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(5),a=n.n(r),i=(n(14),n(3)),o=n(9),l=n(4),d=function(t){return t.activity.data},s=function(t){return t.activity.loading},j=function(t){return t.activity.error},u="FETCH_ACTIVITY_BEGIN",b="FETCH_ACTIVITY_SUCCESS",h="FETCH_ACTIVITY_FAILURE",O=function(){return function(t){return t({type:u}),fetch("https://www.boredapi.com/api/activity").then((function(t){return t.json()})).then((function(e){return t({type:b,payload:{data:e}}),console.log(e.login),e.data})).catch((function(e){t({type:h,payload:{error:e}})}))}},f=n.p+"static/media/loading.16d0e183.gif",g=n(1),p=Object(i.b)((function(t){return{data:d(t),loading:s(t),error:j(t)}}))((function(t){var e=t.dispatch;return Object(c.useEffect)((function(){e(O())}),[e]),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{style:{color:"red"},children:t.error&&"ERROR"}),Object(g.jsx)("h1",{children:"Activity"}),Object(g.jsx)("div",{className:"block__loading",children:t.loading&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:f,alt:"loading..."}),Object(g.jsx)("p",{children:"Fetching Activity, Please Wait..."})]})}),Object(g.jsx)("h1",{children:t.data&&t.data.activity}),Object(g.jsx)("button",{className:"elem__button--left",onClick:function(){e(O())},children:"New Activity"})]})})),y=n(2),v={data:{},loading:!1,error:null},x="FETCH_JOKE_BEGIN",_="FETCH_JOKE_SUCCESS",k="FETCH_JOKE_FAILURE",m="CHANGE_JOKE_TEST",E=function(){return function(t){return t({type:x}),fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart?safe-mode").then((function(t){return t.json()})).then((function(e){return t({type:_,payload:{data:e}}),console.log(e),e})).catch((function(e){t({type:k,payload:{error:e}})}))}},C={joke:{},loading:!1,error:null},T=Object(l.b)({activity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(y.a)(Object(y.a)({},t),{},{loading:!0,error:null,data:{}});case b:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,data:e.payload.data});case h:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,error:e.payload.error,data:{}});default:return t}},joke:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(y.a)(Object(y.a)({},t),{},{loading:!0,error:null,joke:{}});case _:case m:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,joke:e.payload.data});case k:return Object(y.a)(Object(y.a)({},t),{},{loading:!1,error:e.payload.error,joke:{}});default:return t}}}),F=function(t){return t.joke.joke},N=function(t){return t.joke.loading},w=function(t){return t.joke.errSelectoror},I=Object(i.b)((function(t){return{data:F(t),loading:N(t),error:w(t)}}))((function(t){var e=t.dispatch;Object(c.useEffect)((function(){e(E())}),[e]);return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{style:{color:"red"},children:t.error&&"ERROR"}),Object(g.jsx)("h1",{children:"Joke"}),Object(g.jsx)("div",{className:"block__loading",children:t.loading&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:f,alt:"loading..."}),Object(g.jsx)("p",{children:"Fetching A Joke, Please Wait..."})]})}),Object(g.jsx)("h1",{children:t.data&&t.data.setup}),Object(g.jsx)("h2",{children:t.data&&t.data.delivery}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:"elem__button--right",onClick:function(){e({type:m,payload:{data:{setup:"test",delivery:"test"}}})},children:"Test"}),Object(g.jsx)("button",{className:"elem__button--right",onClick:function(){return e(E())},children:"NewJoke"})]})]})})),A=(n(20),Object(l.c)(T,Object(l.a)(o.a)));var J=function(){return Object(g.jsx)(i.a,{store:A,children:Object(g.jsxs)("div",{className:"block__main",children:[Object(g.jsx)("div",{className:"block__left",children:Object(g.jsx)(p,{})}),Object(g.jsx)("div",{className:"block__right",children:Object(g.jsx)(I,{})})]})})};a.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(J,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.46004c5c.chunk.js.map