var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(h,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=i}function h(){var e=m();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-u);return g?d(n,i-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:O(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");document.querySelector('[name="email"]'),document.querySelector('[name="message"]');b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback - form - state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(y),localStorage.removeItem("feedback - form - state"),y={}}));let y={};!function(){if(localStorage.getItem("feedback - form - state")){const e=JSON.parse(localStorage.getItem("feedback - form - state"));Object.entries(e).forEach((([e,t])=>{y[e]=t,b.elements[e].value=t}))}}();
//# sourceMappingURL=03-feedback.5cf5584f.js.map
