function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(h,t),c?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function h(){var e=g();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?b(e):(o=i=void 0,a)}function O(){var e=g(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");const S={email:"",message:""},j=JSON.parse(localStorage.getItem("feedback-form-state"));j&&(S.email=j.email,S.message=j.message,b.querySelector('[name="email"]').value=S.email,b.querySelector('[name="message"]').value=S.message),console.log(localStorage),b.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),localStorage.removeItem("feedback-form-state"),b.reset()}));
//# sourceMappingURL=03-feedback.ed617481.js.map
