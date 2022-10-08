const imgContainer = document.querySelector(".img-container");
const btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
    
    addNewImage();
})

function addNewImage(){
    for(let i=0;i<6;i++){
    const img = document.createElement("img");
    img.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*10000)}`;
    imgContainer.appendChild(img);
   }
}