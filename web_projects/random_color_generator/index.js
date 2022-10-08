const container = document.querySelector(".container");

for(let i=0;i<31;i++){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");
colorContainers.forEach((colorContainer)=>{
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    colorContainer.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    colorContainer.innerText = `rgb(${color1},${color2},${color3})`;
})