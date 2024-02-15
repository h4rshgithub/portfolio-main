

let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

//family

tablinks[1].addEventListener("click" ,function(){

        tablinks[0].classList.remove("active-link");
        tabcontents[0].classList.remove("active-tab");
        tablinks[2].classList.remove("active-link");
        tabcontents[2].classList.remove("active-tab");

        tablinks[1].classList.add("active-link");
        tabcontents[1].classList.add("active-tab");


});

//p-info

tablinks[0].addEventListener("click" ,function(){

    tablinks[1].classList.remove("active-link");
    tabcontents[1].classList.remove("active-tab");
    tablinks[2].classList.remove("active-link");
    tabcontents[2].classList.remove("active-tab");

    tablinks[0].classList.add("active-link");
    tabcontents[0].classList.add("active-tab");


});


tablinks[2].addEventListener("click" ,function(){

    tablinks[0].classList.remove("active-link");
    tabcontents[0].classList.remove("active-tab");
    tablinks[1].classList.remove("active-link");
    tabcontents[1].classList.remove("active-tab");

    tablinks[2].classList.add("active-link");
    tabcontents[2].classList.add("active-tab");


});


//nav

const navicon = document.querySelectorAll("nav .fa-solid");
const swap = document.querySelector("#close");

navicon[1].addEventListener("click" ,function(){
    
    swap.style.right="0"
   

});

navicon[0].addEventListener("click" ,function(){
    
    swap.style.right="-200px"

});





