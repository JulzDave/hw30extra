(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),i=(n(23),n(5)),s=n(6),o=n(8),u=n(7),h=n(9),p=(n(13),n(33)),m=n(34),b=n(10),d=n.n(b),f=n(11),v=n(12),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={species:"",name:"",age:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Insert new pet to database"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter Species",name:"species",value:this.state.species,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter pet name",name:"name",value:this.state.name,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter pet age",name:"age",value:this.state.age,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",onClick:this.fetcher.bind(this),value:"Submit pet"}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"fetcher",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/newpet",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={species:"",name:"",age:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Find a pet in the database"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter Species",name:"species",value:this.state.species,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",onClick:this.fetcher.bind(this),value:"Submit pet"}))}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"fetcher",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/findpet",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allPets:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{path:"/newpet",component:E}),r.a.createElement(E,null),r.a.createElement(y,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.81c57ca9.chunk.js.map