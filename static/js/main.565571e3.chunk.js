(this.webpackJsonpdexstats=this.webpackJsonpdexstats||[]).push([[0],{19:function(e,a,t){e.exports=t(38)},25:function(e,a,t){},26:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),o=t(17),s=t(1),i=t(3),m=(Object(i.a)(),t(7));t(24),t(25);function u(e){var a=Object(n.useState)("uniswap"),t=Object(m.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){"Kyber"===e.name?r("Kyber Network"):"zrx"===e.name?r("0x Protocol"):r(e.name)}),[]),c.a.createElement("div",{id:"one",className:"exchange",onClick:function(){return window.location.href="/#exchange/"+e.name.toLowerCase()}},c.a.createElement("div",{className:"nameAndIcon"},c.a.createElement("img",{id:e.name,className:"icon",src:e.src,alt:"exchange icon"}),c.a.createElement("div",{className:"name"},l)),c.a.createElement("div",{id:"volume2",className:"volume"},"24hr volume",c.a.createElement("p",{className:"amount"},"$420,678,000")),c.a.createElement("div",{id:"liquidity2",className:"liquidity"},"Total liquidity",c.a.createElement("p",{className:"amount"},"$200 M")))}var d=t(6);t(26);function g(){var e=Object(n.useState)("largeHeader"),a=Object(m.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){document.getElementById("container").setAttribute("style","display:none"),document.addEventListener("scroll",(function(){var e=window.scrollY<10?"largeHeader":"smallHeader";l(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"homeOuter"},c.a.createElement("div",{className:t},c.a.createElement("div",{className:"headerCenter"},c.a.createElement("div",{className:"title"},"dexstats.io"),c.a.createElement("div",{className:"slogan"},"Decentralized exchange statistics"),c.a.createElement("div",{className:"volumeTotal"},"24hr volume",c.a.createElement("div",{className:"vol"},"$455,332,091")),c.a.createElement("div",{className:"liquidityTotal"},"Total liquidity",c.a.createElement("div",{className:"liq"},"$2.8 B")))),c.a.createElement("div",{className:"exchanges"},d.map((function(e){return c.a.createElement(u,{name:e.name,src:e.logo})})),c.a.createElement("div",{className:"footer"},c.a.createElement("a",{id:"terms",className:"footerEl",onClick:function(){return window.location.href="/about"}},"about"),c.a.createElement("a",{id:"copyright",className:"footerEl",onClick:function(){return window.location.href="/copyright"}},"copyright"),c.a.createElement("a",{id:"api",className:"footerEl",onClick:function(){return window.location.href="/data"}},"data")))))}var E=t(11);t(29);function b(){return Object(n.useEffect)((function(){!function(){var e=["2019-08-09","2019-08-10","2019-08-11","2019-08-12","2019-08-13","2019-08-14"],a=(new Date(e[0]),new Date(e[e.length-1]),new Date(e[0]));a.setDate(a.getDate()-10);var t=new Date(e[e.length-1]);t.setDate(t.getDate()+10);var n=document.getElementById("myChart").getContext("2d");new E.Chart(n,{type:"line",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}()})),null}t(31);function v(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){switch(document.getElementById("container").setAttribute("style","display:block"),e.match.params.exchange){case"uniswap":r("Uniswap"),u(d[0].logo);break;case"kyber":r("Kyber"),u(d[1].logo);break;case"zrx":r("0x Protocol"),u(d[2].logo);break;case"bancor":r("Bancor"),u(d[3].logo);break;case"curve":r("Curve Finance"),u(d[4].logo);break;case"tokenlon":r("Tokenlon"),u(d[5].logo);break;default:window.location.href="/"}})),c.a.createElement("div",null,c.a.createElement("div",{className:"exchangePage"},c.a.createElement("div",{className:"center"},c.a.createElement("div",{className:"exchangePageHeader"},c.a.createElement("div",{className:"nameNIcon"},c.a.createElement("img",{id:l+"Page",className:"mainIcon",src:i,alt:"icon"}),c.a.createElement("div",{className:"exchangeTitle"},l)),c.a.createElement("div",{className:"volumeLabel"},"24hr Volume",c.a.createElement("p",{className:"amount"},"$332,000,000")),c.a.createElement("div",{className:"liquidityLabel"},"Total Liquidity",c.a.createElement("p",{className:"amount"},"$1.92 B"))))),c.a.createElement(b,null))}t(32);function p(){return Object(n.useEffect)((function(){document.getElementById("container").setAttribute("style","display:none")}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"aboutPage"},c.a.createElement("div",{className:"largeHeader"},c.a.createElement("div",{className:"headerCenter"},c.a.createElement("div",{className:"title"},"About"),c.a.createElement("div",{className:"subTitle"},"Dexstats.io"),c.a.createElement("div",{className:"volumeTotal"},"24hr volume",c.a.createElement("div",{className:"vol"},"$455,332,091")),c.a.createElement("div",{className:"liquidityTotal"},"Total liquidity",c.a.createElement("div",{className:"liq"},"$2.8 B")))),c.a.createElement("div",{className:"aboutCenter"},c.a.createElement("p",null,"Dexstats is here to provide you with the most accurate and up to date decentralized cryptocurrency exchange statistics."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",null,"Our website is made possible with data from the Dexstats ",c.a.createElement("a",{href:"/data"},"api"),"."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"titleAPI"},"Dexstats API"),c.a.createElement("br",null),c.a.createElement("br",null))))}var h=function(){return c.a.createElement(o.a,{basename:"/"},c.a.createElement("div",null,c.a.createElement(s.a,{exact:!0,path:"/",component:g}),c.a.createElement(s.a,{path:"/exchange/:exchange",component:v}),c.a.createElement(s.a,{exact:!0,path:"/about",component:p})))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"name":"Uniswap","logo":"https://research.binance.com/static/images/projects/uniswap/logo.png"},{"name":"Kyber","logo":"https://assets.coingecko.com/coins/images/947/large/kyber-logo.png?1547034806"},{"name":"zrx","logo":"https://assets.coingecko.com/coins/images/863/large/0x.png?1547034672"},{"name":"Bancor","logo":"https://www.worldcryptoindex.com/wp-content/uploads/2018/06/bancor-logo.jpg"},{"name":"Curve","logo":"https://assets.coingecko.com/coins/images/12124/large/Curve.png?1597369484"},{"name":"Tokenlon","logo":"https://assets.coingecko.com/markets/images/516/large/Tokenlon_1_4x.png?1583380072"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.565571e3.chunk.js.map