!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var i,r,f,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function O(e){return l=e,a=setTimeout(w,t),d?g(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function w(){var e=p();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?b(n,f-(e-l)):n}(e))}function S(e){return a=void 0,v&&i?g(e):(i=r=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},T.flush=function(){return void 0===a?u:S(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),h={email:"",message:""};JSON.parse(localStorage.getItem("feedback-form-state"));O.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),localStorage.removeItem("feedback-form-state"),O.reset(O)}))}();
//# sourceMappingURL=03-feedback.1a192a47.js.map
