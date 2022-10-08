const textArea = document.querySelector(".textarea");
const totalCounter = document.querySelector("#total-counter");
const remainingCounter = document.querySelector("#remianing-counter");
textArea.addEventListener("keyup",()=>{
     updateCounter();


});

function updateCounter(){
    totalCounter.innerHTML=textArea.value.length;
    remainingCounter.innerText=textArea.getAttribute('maxlength')-textArea.value.length;
}