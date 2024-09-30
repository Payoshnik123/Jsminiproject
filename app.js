let gameSeq=[];
let userSeq=[];

//let btn = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

//let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
     console.log("game started");             
});

/*function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx= Math.floor(Math.random() * 3);
    let randColor= btn[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    btnFlash(randBtn); 
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function btnPress(){
    console.log("btn was pressed");
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}*/

