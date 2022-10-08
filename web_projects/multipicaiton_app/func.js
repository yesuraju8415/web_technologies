const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let score =JSON.parse(localStorage.getItem("score"));
if(!score) score = 0;
const scoreEle = document.getElementById("score");
scoreEle.innerText = `score : ${score}`;


const question = document.querySelector("#question");

question.innerHTML = `what is ${num1} multiply by ${num2}`;

const correctAnswer = num1*num2;

const form = document.getElementById("form");
const input = document.getElementById("input");
form.addEventListener("submit",()=>{
    const userAnswer = input.value;
    if(correctAnswer == userAnswer){
        score++;
        updatelocalStorage();
    }else{
        score--;
        updatelocalStorage();
    }
});

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}



