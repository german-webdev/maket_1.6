!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i,r,o,d;n(1);function s(){var e=!1;return function(){if(window.innerWidth<=767){if(!e){e=!0;new Swiper(".brands__grid",{direction:"horizontal",width:320,slidesPerView:1.25,speed:300,cssMode:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}else e&&(swiper.destroy(),e=!1)}}function a(){var e=!1;return function(){if(window.innerWidth<=767){if(!e){e=!0;new Swiper(".kinds__grid",{direction:"horizontal",width:320,slidesPerView:1.25,speed:300,cssMode:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}else e&&(swiper.destroy(),e=!1)}}function l(){var e=!1;return function(){if(window.innerWidth<=767){if(!e){e=!0;new Swiper(".price__grid",{direction:"horizontal",width:320,spaceBetween:16,slidesPerView:1.215,speed:300,cssMode:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}else e&&(swiper.destroy(),e=!1)}}s(),a(),l(),i=document.querySelector(".brands__list"),r=document.getElementsByClassName("button-more"),o=document.querySelectorAll(".button-more__arrow"),d=document.getElementsByClassName("button-more__content")[1],r[1].addEventListener("click",(function(){"Показать все"===d.textContent?(window.setTimeout((function(){d.textContent="Скрыть",o.classList.add("button__arrow--rotate")}),200),i.classList.remove("brands__list--hidden")):(window.setTimeout((function(){d.textContent="Показать все",o.classList.remove("button__arrow--rotate")}),100),i.classList.add("brands__list--hidden"),i.scrollTo(0,0))})),console.log("Works!"),window.addEventListener("resize",l()),window.addEventListener("load",l()),window.addEventListener("resize",s()),window.addEventListener("load",s()),window.addEventListener("resize",a()),window.addEventListener("load",a())}]);
//# sourceMappingURL=bundle.js.map