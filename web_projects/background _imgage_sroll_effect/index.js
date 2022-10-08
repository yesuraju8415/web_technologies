const bgImg = document.querySelector(".bg-img");
window.addEventListener("scroll",()=>{
    updateImg();
});

function updateImg(){
    bgImg.style.opacity = 1-window.pageYOffset/900;
    bgImg.style.backgroundSize = 120 - pageYOffset /12 + "%";
}

