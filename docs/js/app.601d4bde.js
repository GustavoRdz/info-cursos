(function(t){function e(e){for(var o,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0b4e9b9a"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/info-cursos/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"bg-green-100 fixed w-full",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/FisicaII"}},[t._v("Fisica II")]),t._v(" | "),n("router-link",{attrs:{to:"/FisicaIV"}},[t._v("Física IV")]),t._v(" | "),n("router-link",{attrs:{to:"/LabFisicaIV"}},[t._v("Lab. Física IV")]),t._v(" | "),n("router-link",{attrs:{to:"/mecatronicaComputacional"}},[t._v("Mecatronica computacional")]),t._v(" | "),n("router-link",{attrs:{to:"/mecatronicaComputacionalLab"}},[t._v("Mecatronica computacional Lab")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view",{staticClass:"container py-32"})],1)},a=[],i=(n("6113"),n("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,"6881d273",null),s=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto w-1/3"},[n("h1",{staticClass:"text-3xl"},[t._v("Bienvenido")]),t._v(" Aqui encontrara información sobre los cursos impartidos por Gustavo Rodriguez M. en la FIME-UANL."),n("br"),n("br"),t._v(" Utilice la barra de menu arriba para ir a la informacion del curso. ")])}],m={name:"Home",components:{}},d=m,b=Object(i["a"])(d,p,f,!1,null,null,null),v=b.exports;o["a"].use(l["a"]);var h=[{path:"/",name:"Home",component:v},{path:"/fisicaii",name:"FisicaII",component:function(){return n.e("about").then(n.bind(null,"ddbd"))}},{path:"/fisicaiv",name:"FisicaIV",component:function(){return n.e("about").then(n.bind(null,"efef"))}},{path:"/labfisicaiv",name:"LabFisicaIV",component:function(){return n.e("about").then(n.bind(null,"7ff3"))}},{path:"/mecatronicaComputacional",name:"MecatronicaComputacional",component:function(){return n.e("about").then(n.bind(null,"59c3"))}},{path:"/mecatronicaComputacionalLab",name:"MecatronicaComputacionalLab",component:function(){return n.e("about").then(n.bind(null,"49c8"))}},{path:"./about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",name:"Home",component:v}],_=new l["a"]({mode:"history",base:"/info-cursos/",routes:h}),y=_,g=n("2f62");o["a"].use(g["a"]);var w=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("b972");o["a"].config.productionTip=!1,new o["a"]({router:y,store:w,render:function(t){return t(s)}}).$mount("#app")},6113:function(t,e,n){"use strict";n("c093")},c093:function(t,e,n){}});
//# sourceMappingURL=app.601d4bde.js.map