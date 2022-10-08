const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll("img");
let timeOut;

let currentImg = 1;

next.addEventListener("click",()=>{
         currentImg++;
         clearTimeout(timeOut);
         updateImg();
});
updateImg();
function updateImg(){
    if(currentImg>imgs.length) currentImg=1;
    if(currentImg<1) currentImg=(imgs.length);
    imgContainer.style.transform = `translateX(-${(currentImg-1)*500}px)`;
    timeOut = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000);
}

prev.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
});