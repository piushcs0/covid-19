(this.webpackJsonpcorona_update=this.webpackJsonpcorona_update||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),u=a(2),i=a.n(u),s=a(4),l=a(15),d=a(16),h=a(18),m=a(17),v=a(3),p=a.n(v),f=(a(42),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:0,recovered:0,death:0,country:[""]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://covid19.mathdro.id/api");case 2:return t=e.sent,e.next=5,p.a.get("https://covid19.mathdro.id/api/countries");case 5:a=e.sent,n=a.data,r=[],n.countries.map((function(e){r.push(e.name)})),this.setState({confirmed:t.data.confirmed.value,recovered:t.data.recovered.value,death:t.data.deaths.value,country:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderCountryOption",value:function(){return this.state.country.map((function(e,t){return r.a.createElement("option",{key:t},e)}))}},{key:"myFunction",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://covid19.mathdro.id/api/countries/".concat(t.target.value));case 2:a=e.sent,this.setState({confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,death:a.data.deaths.value});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"mainDiv"},r.a.createElement("h1",null,"Corona update"),r.a.createElement("select",{id:"muSelect",onChange:this.myFunction.bind(this)},r.a.createElement("option",null,"country"),this.renderCountryOption()),r.a.createElement("div",{className:"dataClass"},r.a.createElement("div",{className:"confirmed"},r.a.createElement("h3",null,"total confirmed case"),r.a.createElement("h4",null,this.state.confirmed)),r.a.createElement("div",null,r.a.createElement("h3",null,"total recovered case"),r.a.createElement("h4",null,this.state.recovered)),r.a.createElement("div",null,r.a.createElement("h3",null,"total death case"),r.a.createElement("h4",null,this.state.death))))}}]),a}(r.a.Component));o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.26b4eb13.chunk.js.map