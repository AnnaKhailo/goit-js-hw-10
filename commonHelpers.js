import"./assets/styles-ef8b03cf.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");let a,s;e.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s<Date.now()?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0,e.classList.remove("is-active-btn")):(e.disabled=!1,e.classList.add("is-active-btn"))}};l("#datetime-picker",b);e.addEventListener("click",()=>{a=setInterval(()=>{const t=s-Date.now(),o=p(t);h.textContent=n(o.days),f.textContent=n(o.hours),y.textContent=n(o.minutes),v.textContent=n(o.seconds),t<1e3&&(clearInterval(a),r.disabled=!1)},1e3),e.disabled=!0,e.classList.remove("is-active-btn"),r.disabled=!0});function n(t){return t.toString().padStart(2,"0")}function p(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
