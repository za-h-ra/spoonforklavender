(this["webpackJsonpspoon-fork-lavender"]=this["webpackJsonpspoon-fork-lavender"]||[]).push([[0],{32:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/Logo-Black.42b4e107.png"},37:function(e,a,t){e.exports=t.p+"static/media/Logo-White-2.066e44da.png"},38:function(e,a,t){e.exports=t.p+"static/media/pasta.33504058.jpg"},39:function(e,a,t){e.exports=t(69)},44:function(e,a,t){},68:function(e,a,t){e.exports=t.p+"static/media/SquidInk.f604886a.jpg"},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(34),s=t.n(c),l=(t(44),t(14)),o=t.n(l),i=t(17),m=t(15),u=t(2),p=t(18),d=t.n(p),h=t(9),E=t(10),g=t(7),f=(t(32),t(13));function N(e){var a=e.restaurants;return r.a.createElement("div",{className:"restaurant-list"},a&&a.businesses.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("div",{className:"restaurant-top"},r.a.createElement("a",{className:"restaurant-url",href:e.url},r.a.createElement("h1",{className:"r-name"},e.name)),r.a.createElement("img",{src:e.image_url,alt:"",className:"restaurant-image"}),r.a.createElement("p",null,e.categories[0].title," ",r.a.createElement("br",null)," ",e.price)),r.a.createElement("div",{className:"restaurant-details"},r.a.createElement("h2",{className:"r-title"},"Address"),r.a.createElement("p",null,e.location.address1,r.a.createElement("br",null)," ",e.location.city,", ",e.location.state," ",e.location.zip_code),r.a.createElement("h2",{className:"r-title"},"Phone Number"),r.a.createElement("p",null,e.display_phone),r.a.createElement("h2",{className:"r-title"},"Rating"),r.a.createElement("p",null,e.rating," based on ",e.review_count," reviews"))))})))}h.b.add(f.a,g.d,g.c);var b=t(11);function v(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{APPID:"e0efd61dc4f0bfeaa09cb1ce99da618e",units:"imperial",q:"New York City"}});case 2:a=e.sent,c(a.data),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"weather-data"},r.a.createElement("main",{className:"weather-card"},r.a.createElement("div",{className:"weather-box"},r.a.createElement("p",{className:"weather-temp"},Math.floor(t.main.temp)," ",r.a.createElement(E.a,{icon:g.e})),r.a.createElement("p",{className:"weather-city"},t.name,", ",t.sys.country)))))}var w=t(35),y=t.n(w);function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"res-grid"},[{name:"Sant Ambroeus",image:"https://s3-media0.fl.yelpcdn.com/bphoto/QHTZerF78qHNZIGWvJ_FKQ/o.jpg",address:"265 Lafayette St, New York, NY 10012",phone:"(212) 966-2770",text:"SoHo outpost of a small chain of cafes offering modern Milanese cuisine, bar bites & Italian wines.",rating:"4.7/5",price:"$$$",category:"Italian"},{name:"Thai Villa",image:"https://fastly.4sqi.net/img/general/width960/453334238_TEYDlHSRYRakLCvzwG-6sfh365mPkAer31TF6TqYPyU.jpg",address:"5 E 19th St, New York, NY 10003",phone:"(212) 802-9999",text:"Traditional & unique Thai fare served in a stylish space with dark-wood accents & ornate fixtures.",rating:"4.6/5",price:"$$",category:"Thai"},{name:"Jin Ramen",image:"https://s3-media0.fl.yelpcdn.com/bphoto/EYdQp3BV0_Yr5ycN_F5AqQ/o.jpg",address:"462 Amsterdam Ave, New York, NY 10024",phone:"(646) 657-0755",text:"A variety of ramens, including vegetarian broths, plus rice bowls, pork buns, beer & sake.",rating:"4.8/5",price:"$$",category:"Japanese"},{name:"Manhatta",image:"https://s3-media0.fl.yelpcdn.com/bphoto/7YNz7VdcidNG16-3NbZMVw/o.jpg",address:"28 Liberty St 60th floor, New York, NY 10005",phone:"(212) 230-5788",text:"Set on the 60th floor, this ritzy, high-end restaurant features New American cuisine & city views.",rating:"4.5/5",price:"$$$",category:"American"},{name:"St. Mazie",image:"https://s3-media0.fl.yelpcdn.com/bphoto/YY4QLThvWbsZNwwSvUezkQ/o.jpg",address:"345 Grand St, Brooklyn, NY 11211",phone:"(718) 384-4808",text:"Funky bar with frequent live music, an outdoor area & a downstairs restaurant with a compact menu.",rating:"4.7/5",price:"$$",category:"Comfort Food"},{name:"Carbone",image:"https://s3-media0.fl.yelpcdn.com/bphoto/3LQCRaoFnJXQjQY6p1nxgQ/o.jpg",address:"181 Thompson St, New York, NY 10012",phone:"(212) 254-3000",text:"High-end takes on red-sauce fare await at this A-lister Italian restaurant in a retro-glam space.",rating:"5/5",price:"$$$",category:"Italian"},{name:"Xixa",image:"https://s3-media0.fl.yelpcdn.com/bphoto/hcxeMNmjsUcsQxeBVlE6Ew/o.jpg",address:"241 S 4th St, Brooklyn, NY 11211",phone:"(718) 388-8860",text:"Swanky space serving innovative, upscale takes on Mexican fare paired with a selection of mezcals.",rating:"4.5/5",price:"$$$",category:"Mexican"}].map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"res-card"},r.a.createElement("h1",{className:"card-title"},e.name),r.a.createElement("img",{className:"card-image",src:e.image}),r.a.createElement("p",null,e.category),r.a.createElement("p",null,e.price),r.a.createElement("p",null,e.text),r.a.createElement("h2",{className:"card-heading"},"Address"),r.a.createElement("p",null,e.address),r.a.createElement("h2",{className:"card-heading"},"Phone Number"),r.a.createElement("p",null,e.phone),r.a.createElement("h2",{className:"card-heading"},"Rating"),r.a.createElement("p",null,e.rating)))}))))}function x(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"weather-container"},r.a.createElement(v,null)),r.a.createElement("div",{className:"inner-width"},r.a.createElement(b.b,{to:"/"},r.a.createElement("img",{src:y.a,className:"header-logo"}))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement(b.b,{to:"/"},"Home"),r.a.createElement(b.b,{to:"./FavRestaurants"},"Restaurants"),r.a.createElement("a",{href:"https://www.opentable.com/"},"Reserve")))))}var Y=t(37),j=t.n(Y);function F(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"social-buttons"},r.a.createElement("a",{href:"#"},r.a.createElement(E.a,{className:"social-icons",icon:["fab","facebook-f"]})),r.a.createElement("a",{href:"#"},r.a.createElement(E.a,{className:"social-icons",icon:["fab","instagram"]})),r.a.createElement("a",{href:"#"},r.a.createElement(E.a,{className:"social-icons",icon:["fab","twitter"]})),r.a.createElement("a",{href:"#"},r.a.createElement(E.a,{className:"social-icons",icon:["fab","linkedin-in"]}))))}function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"left-column"},r.a.createElement("img",{src:j.a,className:"logo"}),r.a.createElement(F,null),r.a.createElement("p",{className:"copyright-text"},r.a.createElement(E.a,{className:"copyright-icon",icon:g.a})," ","2020 Built with love by Zahra Khan. ",r.a.createElement("br",null)," Powered by Yelp Fusion.")),r.a.createElement("div",{className:"right-column"},r.a.createElement("h2",null,"Our Newsletter"),r.a.createElement("div",{className:"border"}),r.a.createElement("p",null,"Enter Your Email to learn more about your favorite NYC spots!"),r.a.createElement("form",{action:"",className:"newsletter-form"},r.a.createElement("input",{type:"text",className:"news-text-box",placeholder:"Enter Your Email"}),r.a.createElement("input",{type:"submit",className:"news-button",value:"submit"})))))}h.b.add(f.a),h.b.add(f.a,g.a,g.b);var $=t(38),A=t.n($);t(68);h.b.add(g.d);var L=Object(u.e)((function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],s=t[1],l=Object(n.useState)(""),p=Object(m.a)(l,2),h=p[0],f=p[1],b=function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=New_York_City&categories=",a),{headers:{Authorization:"Bearer ".concat("pM35Y7AzDSbQy3vIzO4RbtdYEtGvAP1T1lV9nuFdu1I3gccitW_7bAMhX-VVLdVtLhkhQZRTjn9o0XzpFgcVYzNun-bqFEwPb9NLAPFOLofWjFHl791MVVL29iP6XnYx")},params:{categories:{category:c}}}).then((function(e){f(e.data),console.log(e.data)})).catch((function(e){console.log("Error")}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement("img",{className:"main-image",src:A.a}),r.a.createElement("h1",{className:"main-title"},"Discover your favorite cuisine ",r.a.createElement("br",null)," in New York City"),r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{className:"restaurant-search",onSubmit:function(a){a.preventDefault(),b(c),e.history.push("/restaurants"),s("")}},r.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search",value:c,onChange:function(e){e.preventDefault(),s(e.target.value.toLowerCase())}}),r.a.createElement("button",{className:"search-button",type:"submit"},r.a.createElement(E.a,{icon:g.d,className:"search-icon"}))))),r.a.createElement("div",null,r.a.createElement(u.a,{path:"/restaurants"},r.a.createElement(N,{restaurants:h})),r.a.createElement(u.a,{path:"/FavRestaurants"},r.a.createElement(k,null)),r.a.createElement(S,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.8402afb9.chunk.js.map