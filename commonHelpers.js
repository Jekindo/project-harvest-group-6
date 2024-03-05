import{S as w,A as y,P as g,t as p}from"./assets/vendor-5304be77.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&f(i)}).observe(document,{childList:!0,subtree:!0});function u(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(t){if(t.ep)return;t.ep=!0;const n=u(t);fetch(t.href,n)}})();const c={openMenuBtn:document.querySelector('[data-action="open-menu"]'),closeMenuBtn:document.querySelector('[data-action="close-menu"]'),menu:document.querySelector("[data-menu]")};c.openMenuBtn.addEventListener("click",l);c.closeMenuBtn.addEventListener("click",l);c.menu.addEventListener("click",h);function l(e){c.menu.classList.toggle("is-open")}function h(e){if(L(),e.target.classList.contains("js-mobile-menu-link")){l();return}}function L(){window.location.href.split("#")[1]}const r={openModalBtns:document.querySelectorAll('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector("[data-backdrop]"),modalForm:document.querySelector("[data-modal-form]")};console.log(r.openModalBtns);r.openModalBtns.forEach(e=>{e.addEventListener("click",k)});r.closeModalBtn.addEventListener("click",a);r.backdrop.addEventListener("click",b);function k(){E(),window.addEventListener("keydown",m),r.backdrop.classList.remove("is-hidden")}function a(){v(),window.removeEventListener("keydown",m),r.backdrop.classList.add("is-hidden");const e=document.body,o=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,parseInt(o||"0")*-1)}window.addEventListener("scroll",()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)});function b(e){e.currentTarget===e.target&&a()}function m(e){const o="Escape";e.code===o&&a()}function E(){const e=window.pageYOffset||document.documentElement.scrollTop,o=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(o,e)}}function v(){window.onscroll=function(){}}r.modalForm.addEventListener("focusin",e=>{e.target.classList.contains("js-input")&&(e.target.placeholder=e.target.dataset.placeholder)});r.modalForm.addEventListener("focusout",e=>{e.target.classList.contains("js-input")&&(e.target.placeholder="")});new w(".swiper",{modules:[y,g],direction:"horizontal",loop:!0,speed:750,spaceBetween:10,slidesPerView:1,autoplay:{delay:1200,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{768:{loop:!0,slidesPerView:2,spaceBetween:18},1280:{loop:!0,slidesPerView:3,spaceBetween:25}}});const d={backToTopButton:document.querySelector('button[data-action="back-to-top"]')},B=500;window.addEventListener("scroll",p(T,250));d.backToTopButton.addEventListener("click",S);function T(e){window.pageYOffset>B?O():P()}function S(e){window.scrollTo({top:-document.body.offsetHeight,behavior:"smooth"})}function O(){d.backToTopButton.classList.remove("is-hidden")}function P(){d.backToTopButton.classList.add("is-hidden")}const s={header:document.querySelector(".js-header")},M=500;window.addEventListener("scroll",p(Y,250));function Y(e){window.pageYOffset>M?q():C()}function q(){s.header.classList.add("is-fixed"),s.header.style.transform=`translateY(-${getComputedStyle(s.header).top})`}function C(){s.header.classList.remove("is-fixed"),s.header.style.transform="translateY(0)"}
//# sourceMappingURL=commonHelpers.js.map
