let scrollUp = document.querySelector(".scrollUp");

window.addEventListener('scroll', checkheight);

function checkheight(){
    if(window.scrollY > 150){
        scrollUp.style.display = "block"
    }
    else{
        scrollUp.style.display = "none"
    }
}
scrollUp.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



let navLinkEls = document.querySelectorAll(".nav-link-item");
let windowPathname = window.location.pathname;

navLinkEls.forEach((navLinkEl)=>{
    console.log(navLinkEl.href)
    if(navLinkEl.href.includes(windowPathname)){
        navLinkEl.classList.add("active")
    }
})