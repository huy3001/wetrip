(globalThis.blocksyJsonP=globalThis.blocksyJsonP||[]).push([[62],{62:function(e,t,n){"use strict";n.r(t),n.d(t,{handleClick:function(){return O},mount:function(){return k}});var o=n(891);const r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);var c=function(e){r?(0,o.clearAllBodyScrollLocks)():(document.body.style.overflow="",document.body.style.removeProperty("--scrollbar-width"))},i=n(601),a=n.n(i);const l=function(e){if(!e)return;const t=e.querySelector(".ct-toggle-dropdown-mobile");e.classList.contains("dropdown-active")?(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label",ct_localizations.expand_submenu),function(e,t){const n=e.querySelector("ul");requestAnimationFrame((function(){const e=n.getBoundingClientRect().height;n.style.height=`${e}px`,n.classList.add("is-animating"),requestAnimationFrame((function(){n.style.height="0px",s(n,(function(){n.classList.remove("is-animating"),n.removeAttribute("style"),t()}))}))}))}(e,(function(){e.classList.toggle("dropdown-active"),[...e.querySelectorAll(".menu-item-has-children.dropdown-active, .page_item_has_children.dropdown-active")].map((function(e){return e.classList.remove("dropdown-active")}))}))):(t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label",ct_localizations.collapse_submenu),[...e.parentNode.children].map((function(e){return e.classList.contains("dropdown-active")&&l(e)})),e.classList.toggle("dropdown-active"),function(e){const t=e.querySelector("ul");requestAnimationFrame((function(){const e=t.getBoundingClientRect().height;t.style.height="0px",t.classList.add("is-animating"),requestAnimationFrame((function(){t.style.height=`${e}px`,s(t,(function(){t.classList.remove("is-animating"),t.removeAttribute("style")}))}))}))}(e))};function s(e,t){const n=function(o){o.target===e&&(e.removeEventListener("transitionend",n),t())};e.addEventListener("transitionend",n)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"];let p=null;const v=function(e){if(!p)return;const t=[...p.querySelectorAll(m.join(","))],n=t[0],o=t[t.length-1];"Tab"!==e.key&&9!==e.keyCode||(t.includes(document.activeElement)||(n.focus(),e.preventDefault()),e.shiftKey?document.activeElement===n&&(o.focus(),e.preventDefault()):document.activeElement===o&&(n.focus(),e.preventDefault()))},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=d({focusOnMount:!0},t),p&&p!==e)return;const n=e.querySelectorAll(m.join(","));0!==n.length&&(p=e,document.addEventListener("keydown",v),t.focusOnMount&&setTimeout((function(){n[0].focus()}),200))},y=function(e){e.removeEventListener("keydown",v),p=null},h=function(){return window.ctFrontend&&window.ctFrontend.focusLockManager||(window.ctFrontend=window.ctFrontend||{},window.ctFrontend.focusLockManager={focusLockOn:g,focusLockOff:y}),window.ctFrontend.focusLockManager};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=w({onClose:function(){},container:null},e),t=w({closeInstant:!1},t),!document.body.hasAttribute("data-panel"))return e.container.classList.remove("active"),void e.onClose();[...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`),...document.querySelectorAll(`[href*="${e.container.id}"]`)].map((function(e,t){e.setAttribute("aria-expanded","false"),setTimeout((function(){0===t&&e.focus()}),50)})),e.container.classList.remove("active"),t.closeInstant?(document.body.removeAttribute("data-panel"),a().trigger("ct:modal:closed",e.container),c(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content"))):(document.body.dataset.panel="out",e.container.addEventListener("transitionend",(function(){setTimeout((function(){document.body.removeAttribute("data-panel"),a().trigger("ct:modal:closed",e.container),c(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content")),h().focusLockOff(e.container.querySelector(".ct-panel-content").parentNode)}),300)}),{once:!0})),window.removeEventListener("click",e.handleWindowClick,{capture:!0}),e.container.removeEventListener("click",e.handleContainerClick),e.onClose()},O=function(e,t){e&&e.preventDefault&&e.preventDefault(),t=w({onClose:function(){},container:null,focus:!1,clickOutside:!0,isModal:!1,computeScrollContainer:null,closeWhenLinkInside:!1,handleContainerClick:function(e){let n=e.target.closest(".ct-panel-content"),o=[...t.container.querySelectorAll(".ct-panel-content")].indexOf(e.target)>-1;t.isModal&&!o&&n||!t.isModal&&(o||n)||e.target.closest('[class*="select2-container"]')||window.getSelection().toString().length>0||document.body.hasAttribute("data-panel")&&L(t)},handleWindowClick:function(e){t.container.contains(e.target)||e.target===document.body||event.target.closest('[class*="select2-container"]')||document.body.hasAttribute("data-panel")&&L(t)}},t),function(e){e=w({onClose:function(){},container:null,focus:!0},e),[...document.querySelectorAll(`[data-toggle-panel*="${e.container.id}"]`),...document.querySelectorAll(`[href*="${e.container.id}"]`)].map((function(e){e.setAttribute("aria-expanded","true")})),e.focus&&setTimeout((function(){e.container.querySelector("input")&&e.container.querySelector("input").focus()}),200),e.container.querySelector(".ct-panel-content")&&e.container.querySelector(".ct-panel-content").addEventListener("click",(function(t){Array.from(e.container.querySelectorAll("select")).map((function(e){return e.selectr&&e.selectr.events.dismiss(t)}))})),e.clickOutside&&e.container.querySelector(".ct-panel-content")&&e.container.addEventListener("click",e.handleContainerClick);const t=function(n){const{keyCode:o,target:r}=n;27===o&&(n.preventDefault(),document.body.hasAttribute("data-panel")&&L(e),document.removeEventListener("keyup",t))};document.addEventListener("keyup",t);let n=e.container&&e.container.querySelector(".ct-toggle-close");n&&(n.addEventListener("click",(function(t){t.preventDefault(),L(e)}),{once:!0}),n.hasEnterListener||(n.hasEnterListener=!0,n.addEventListener("keyup",(function(t){13==t.keyCode&&(t.preventDefault(),L(e))})))),(e.computeScrollContainer||e.container.querySelector(".ct-panel-content"))&&(function(e){if(r)e&&(0,o.disableBodyScroll)(e,{allowTouchMove:function(e){return!!e.closest(".select2-container")}});else{let e=window.innerWidth-document.documentElement.clientWidth;e>0&&document.body.style.setProperty("--scrollbar-width",`${e}px`),document.body.style.overflow="hidden"}}(e.computeScrollContainer?e.computeScrollContainer():e.container.querySelector(".ct-panel-content")),setTimeout((function(){h().focusLockOn(e.container.querySelector(".ct-panel-content").parentNode,{focusOnMount:!e.focus})}))),window.addEventListener("click",e.handleWindowClick,{capture:!0}),a().trigger("ct:modal:opened",e.container),[...e.container.querySelectorAll(".ct-toggle-dropdown-mobile")].map((function(e){!function(e){if(e.hasListener)return;e.hasListener=!0;let t=e.previousElementSibling.getAttribute("href");t&&"#"!==t||e.previousElementSibling.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),l(e.closest(".menu-item-has-children, .page_item_has_children"))})),e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),l(e.closest(".menu-item-has-children, .page_item_has_children"))}))}(e)}))}(t),t.closeWhenLinkInside&&(t.container.hasListener||(t.container.hasListener=!0,t.container.addEventListener("click",(function(e){if(!e.target)return;let n=e.target;e.target.closest("a")&&(n=e.target.closest("a")),n.closest(".ct-panel").classList.contains("active")&&n.matches("a")&&(n.classList.contains("ct-overlay-skip")||(n.closest('nav[data-id*="menu"]')||n.closest('[data-id*="text"]')||n.closest('[data-id*="button"]')||n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account")||n.closest(".widget_nav_menu"))&&(L(t,{closeInstant:"#"!==n.getAttribute("href")[0]}),setTimeout((function(){(n.matches(".ct-offcanvas-trigger")||n.matches(".ct-header-account"))&&n.click()}),500)))}))))};a().on("ct:offcanvas:force-close",(function(e){return L(e)}));const k=function(e,t){let{event:n,focus:o=!1}=t;O(n,{isModal:!0,container:document.querySelector(e.dataset.togglePanel||e.hash),clickOutside:!0,focus:o})}},891:function(e,t){var n,o;n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function r(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function c(e){var t=e||window.event;return!!r(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function i(){setTimeout((function(){void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),l=[],s=!1,u=-1,d=void 0,f=void 0;e.disableBodyScroll=function(e,o){if(a){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!l.some((function(t){return t.targetElement===e}))){var i={targetElement:e,options:o||{}};l=[].concat(t(l),[i]),e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,i,a;1===t.targetTouches.length&&(o=e,a=(n=t).targetTouches[0].clientY-u,r(n.target)||(o&&0===o.scrollTop&&0<a||(i=o)&&i.scrollHeight-i.scrollTop<=i.clientHeight&&a<0?c(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",c,n?{passive:!1}:void 0),s=!0)}}else{p=o,setTimeout((function(){if(void 0===f){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(f=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:o||{}};l=[].concat(t(l),[m])}var p},e.clearAllBodyScrollLocks=function(){a?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),s=!1),l=[],u=-1):(i(),l=[])},e.enableBodyScroll=function(e){if(a){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,l=l.filter((function(t){return t.targetElement!==e})),s&&0===l.length&&(document.removeEventListener("touchmove",c,n?{passive:!1}:void 0),s=!1)}else(l=l.filter((function(t){return t.targetElement!==e}))).length||i()}},void 0===(o=n.apply(t,[t]))||(e.exports=o)}}]);
//# sourceMappingURL=62.7cfe07a1af9a1e3196a5.js.map