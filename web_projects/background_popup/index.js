const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const popUpContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click",()=>{
     container.classList.add("active");
     popUpContainer.classList.remove("active");
});

closeIcon.addEventListener("click",()=>{
    container.classList.remove("active");
    popUpContainer.classList.add("active");
});