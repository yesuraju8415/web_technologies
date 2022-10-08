const input = document.querySelector(".input");
const body = document.querySelector("body");
console.log(!(input.checked));

input.addEventListener("input",()=>{updateBody();});

function updateBody(){
    if(input.checked){
        body.style.backgroundColor="black";
    }else{
        body.style.backgroundColor="white";
    }
}