!function(){"use strict";function e(e,t){const n=document.querySelector(e),o=document.getElementsByTagName("video")[t],c=document.querySelector(".wind_tint_btn");function l(e,t){".btn_video0"!=e&&0!=+t||c.classList.toggle("display_none"),n.classList.toggle("display_none"),o.paused?o.play():o.pause()}n.addEventListener("click",(function(){l(e,t)}),!1),o.addEventListener("click",(function(){l(e,t)}),!1)}e(".btn_video0",0),e(".btn_video1",1),function(){const e=document.querySelector(".modal"),t=document.querySelectorAll(".book_now");for(let n of t)n.addEventListener("click",(()=>{e.style.display="block"}));window.onclick=function(t){t.target==e&&(e.style.display="none")}}(),function(){const e=document.querySelector(".left"),t=document.querySelector(".right"),n=document.querySelector(".gallery_img");let o=0;e.addEventListener("click",(()=>{--o,o<=0?(o=0,n.style.transform="translateX(0)"):n.style.transform=`translateX(-${10*o}%)`})),t.addEventListener("click",(()=>{++o,10*o>90?(o=0,n.style.transform="translateX(0)"):n.style.transform=`translateX(-${10*o}%)`}))}()}();