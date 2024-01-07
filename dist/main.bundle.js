(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,':root {\n  /* color palette */\n  --federal-blue: #031a6b;\n  --prussian-blue: #033860;\n  --cerulean: #087ca7;\n  --polynesian-blue: #004385;\n  --aero: #05b2dc;\n  --white: #ffffff;\n}\n\nhtml {\n  font-family: "Roboto", sans-serif;\n  /* Font-weights:\n       -Light: 300\n       -Regular: 400\n       -Bold: 700 */\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1em;\n  background-color: var(--white);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.searchBox,\n.searchButton {\n  padding: 0.5em;\n  margin: 0;\n  border-style: none;\n}\n\n.searchBox {\n  border: solid 1px var(--cerulean);\n}\n\n.searchButton {\n  background-color: var(--prussian-blue);\n  color: white;\n  cursor: pointer;\n}\n\n.logoContainer {\n  width: 8em;\n}\n\n.logoContainer img {\n  width: 100%;\n}\n\n.currentWeatherSection {\n  padding: 3em;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: 75%;\n  margin: auto;\n}\n\n.currentWeatherTicket {\n  padding: 2em;\n  background-color: white;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 2em;\n}\n\n.currentWeatherTicket h3 {\n  font-size: 2.5em;\n}\n\n.currentWeatherTicket h6 {\n  font-size: 1em;\n  font-weight: 300;\n}\n\n.currentWeatherTicket h1 {\n  font-size: 3em;\n  color: var(--prussian-blue);\n  font-weight: 700;\n}\n\n.currentWeatherDetails {\n  color: var(--prussian-blue);\n}\n\n.conditionImageContainer {\n  width: 18em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.conditionImageContainer img {\n  width: 60%;\n}\n\n.maxMin {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.max,\n.min {\n  color: white;\n  padding: 0.5em;\n  border-radius: 0.5em;\n}\n\n.max {\n  background-color: var(--prussian-blue);\n  margin-left: 1em;\n}\n\n.min {\n  background-color: var(--cerulean);\n}\n\n.currentWeatherDetails {\n  min-width: 20em;\n  max-width: 30em;\n  width: 30%;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  height: fit-content;\n}\n\n.currentWeatherDetails div {\n  padding: 1em;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 0.3em;\n  display: flex;\n  align-items: center;\n}\n\n.currentWeatherDetails div img {\n  width: 1.4em;\n  margin-right: 0.5em;\n}\n\n.hourlyWeatherSection {\n  display: flex;\n  overflow-y: hidden;\n  color: white;\n  background-color: var(--cerulean);\n  margin-top: 2em;\n}\n\n.hourWeatherHolder {\n  display: flex;\n  flex-direction: column;\n  margin: 2em;\n  align-items: center;\n  padding: 2em;\n  border-radius: 1em;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.timeConditionImageHolder {\n  width: 8em;\n}\n\n.timeConditionImageHolder img {\n  width: 100%;\n}\n\n.dailyWeatherSection {\n  margin-top: 3.5em;\n  margin-bottom: 2.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.dayWeatherHolder {\n  display: flex;\n  width: 70%;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  padding: 1em;\n  margin-bottom: 1em;\n}\n\n.dayConditionImageHolder {\n  width: 4em;\n}\n\n.dayConditionImageHolder img {\n  width: 100%;\n}\n\n.detailHolder {\n  display: flex;\n  flex-direction: column;\n  width: 3em;\n  align-items: center;\n}\n\n.detailHolder img {\n  width: 2em;\n  margin-bottom: 0.5em;\n}\n\n.dayName {\n  width: 6.5em;\n}\n\n.minMax2 {\n  flex-direction: column;\n  align-items: center;\n}\n\n.minMax2 .min,\n.minMax2 .max {\n  border-radius: 0;\n  padding: 0.2em;\n  width: 4em;\n  text-align: center;\n  margin: 0;\n}\n\n.minMax2 .min {\n  margin-bottom: 0.5em;\n}\n\n.loadingScreen {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.loadingScreen img {\n  width: 10%;\n  object-fit: contain;\n  aspect-ratio: 1/1;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var m=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=i(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var d=r(n,i),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),m=t.n(u),p=t(426),f={};function h(n){return function(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}(n).getDay()}f.styleTagTransform=m(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=t.p+"0b85501947099b739629.png",v=t.p+"e1c6eeb66bc8245d1427.png",y=t.p+"bf37eef186b2bb5b9984.png",b=t.p+"451ac0ed43f51af38006.png",x=t.p+"0e042fd52d87d293569a.png",w=t.p+"20e7d4a7d2e24dbce16d.png",_=t.p+"ccc3211023da1b0301fa.png",$=t.p+"5a01bbd7ed097b8f6efa.png",S=t.p+"b45acf0adc44e2dfd124.png",C=t.p+"bca196e780566c0c2ce5.png",M=t.p+"bd05459d6ad7a45c74b7.png",H=t.p+"43992d742148ce641e8e.png",W=t.p+"eb6ff707b4d71ae75341.png",j=t.p+"5ad5faae29cf399afbc6.jpg";function k(n){return 1114==n||1117==n||n>=1204&&n<=1225||1237==n||1279==n||1282==n?x:1150==n||1153==n||1168==n||1171==n||n>=1180&&n<=1201||n>=1240&&n<=1255||n>=1261&&n<=1264||n>=1273&&n<=1276?b:1009==n||1135==n||1147==n?v:n>=1006&&n<=1009||n>=1063&&n<=1072?g:1003==n?y:1e3==n?w:1087==n?_:void 0}let T=new class{constructor(n,e,t){this.location=n,this.current=e,this.forecast=t}setLocation(n){this.location=n}setCurrent(n){this.current=n}setForecast(n){this.forecast=n}};function E(n){!function(){let n=document.querySelector(".master");for(;n.firstChild;)n.removeChild(n.firstChild)}(),function(n){!function(n){let e=k(n.current.condition_code);document.querySelector(".master").innerHTML+=`<div class="currentWeatherSection">\n    <div class="currentWeatherTicket">\n        <h3>${n.location.name}</h3>\n        <h6>${n.current.condition}</h6>\n        </br>\n        <div class="conditionImageContainer">\n            <img src="${e}" alt="${n.current.condition}">\n        </div>\n        </br>\n        <h1>${n.current.temp_c}&deg;C</h1>\n        <h6>Feels like ${n.current.feelslike_c}&deg;C</h6>\n        </br>\n        </br>\n        <div class="maxMin">\n            <div class="min">L: ${n.current.mintemp_c}&deg;C</div>\n            <div class="max">H: ${n.current.maxtemp_c}&deg;C</div>\n        </div>\n    </div>\n    <div class="currentWeatherDetails">\n        <div>\n          <img src="${H}" alt="Humidity">\n          <p>Humidity: ${n.current.humidity}%</p>\n        </div>\n        <div>\n          <img src="${W}" alt="Precipitation">\n          <p>Precipitation: ${n.current.precip_mm} mm</p>\n        </div>\n        <div>\n          <img src="${j}" alt="Pressure">\n          <p>Pressure: ${n.current.pressure_mb} mb</p>\n        </div>\n        <div>\n          <img src="${C}" alt="UV">\n          <p>UV: ${n.current.uv}</p>\n        </div>\n        <div>\n          <img src="${M}" alt="Wind Speed">\n          <p>Wind speed: ${n.current.wind_kph} km/h</p>\n        </div>\n        <div>\n          <img src="${S}" alt="Sunrise">\n          <p>Sunrise: ${n.current.sunrise}</p>\n        </div>\n        <div>\n          <img src="${$}" alt="Sunset">\n          <p>Sunset: ${n.current.sunset}</p>\n        </div>\n    </div>\n</div>`}(n),function(n){let e=document.createElement("div");e.className="hourlyWeatherSection",document.querySelector(".master").appendChild(e),n.current.hourly.forEach((n=>{let t=k(n.condition_code);e.innerHTML+=`<div class="hourWeatherHolder">\n      <h3>${n.time}</h3>\n      <div class="timeConditionImageHolder">\n        <img src="${t}" alt="${n.condition}">\n      </div>\n      <h1>${n.temp_c}&deg;C</h1>\n    </div>\n    `}))}(n),function(n){let e=document.createElement("div");e.className="dailyWeatherSection",document.querySelector(".master").appendChild(e),n.forecast.forEach((n=>{let t=k(n.condition_code);e.innerHTML+=`<div class="dayWeatherHolder">\n      <div class="dayName"><h3>${n.day}</h3></div>\n      <div class="dayConditionImageHolder">\n        <img src="${t}" alt="${n.condition}">\n      </div>\n      <div class="detailHolder">\n        <img src="${H}" alt="Humidity">\n        <h6>${n.avghumidity}%</h6>\n      </div>\n      <div class="detailHolder">\n        <img src="${W}" alt="Precipitation">\n        <h6>${n.totalprecip_mm}mm</h6>\n      </div>\n      <div class="minMax minMax2">\n        <div class="min">L: ${n.mintemp_c}&deg;C</div>\n        <div class="max">H: ${n.maxtemp_c}&deg;C</div>\n      </div>\n    </div>`}))}(n)}(n)}function I(n){(async function(n){return new Promise(((e,t)=>{fetch(`http://api.weatherapi.com/v1/forecast.json?key=0cf899136a814fb3a74213616240401&q=${n}&days=14`,{mode:"cors"}).then((n=>n.json())).then((n=>{e(n)})).catch((n=>{t(n)}))}))})(n).then((n=>{n.error?console.log(n.error.message):(function(n){let e={};e.name=n.name,e.country=n.country,T.setLocation(e)}(n.location),function(n,e){let t={};t.condition=n.condition.text,t.condition_code=n.condition.code,t.temp_c=Math.round(n.temp_c),t.feelslike_c=Math.round(n.feelslike_c),t.humidity=n.humidity,t.precip_mm=n.precip_mm,t.pressure_mb=n.pressure_mb,t.uv=n.uv,t.wind_kph=n.wind_kph,t.sunrise=e.forecastday[0].astro.sunrise,t.sunset=e.forecastday[0].astro.sunset,t.maxtemp_c=Math.round(e.forecastday[0].day.maxtemp_c),t.mintemp_c=Math.round(e.forecastday[0].day.mintemp_c),t.hourly=[],e.forecastday[0].hour.forEach((n=>{let e={};e.time=n.time.split(" ")[1],e.precip_mm=n.precip_mm,e.condition=n.condition.text,e.condition_code=n.condition.code,e.temp_c=Math.round(n.temp_c),t.hourly.push(e),e=[]})),T.setCurrent(t)}(n.current,n.forecast),function(n){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let t=[],r={};for(let i=1;i<n.forecastday.length;i++)r.date=n.forecastday[i].date,r.day=e[h(r.date)],r.condition=n.forecastday[i].day.condition.text,r.condition_code=n.forecastday[i].day.condition.code,r.totalprecip_mm=n.forecastday[i].day.totalprecip_mm,r.avghumidity=n.forecastday[i].day.avghumidity,r.mintemp_c=Math.round(n.forecastday[i].day.mintemp_c),r.maxtemp_c=Math.round(n.forecastday[i].day.maxtemp_c),t.push(r),r={};T.setForecast(t)}(n.forecast),E(T))})).catch((n=>{console.log(n)}))}window.onload=()=>{(async function(){return new Promise(((n,e)=>{if(!("geolocation"in navigator))return console.log("Geolocation is not supported by this browser."),n("London");navigator.geolocation.getCurrentPosition((e=>{const t=e.coords.latitude,r=e.coords.longitude;n(`${t},${r}`)}),(e=>{e.code===e.PERMISSION_DENIED?console.log("User denied the premission to access location."):console.log("Error getting geolocation:",e.message),n("London")}))}))})().then((n=>{I(n)}))};let L=document.querySelector(".searchButton"),N=document.querySelector(".searchBox");L.addEventListener("click",(()=>{let n=N.value;N.value="",I(n)}))})()})();