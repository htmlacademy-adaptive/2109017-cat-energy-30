var a=document.querySelector(".main-nav"),n=document.querySelector(".main-nav__toggle");a.classList.remove("main-nav--nojs");n.addEventListener("click",()=>{a.classList.contains("main-nav--closed")?(a.classList.remove("main-nav--closed"),a.classList.add("main-nav--opened")):(a.classList.add("main-nav--closed"),a.classList.remove("main-nav--opened"))});
