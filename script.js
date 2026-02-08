let boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContener = document.querySelector(".msg-contener");
let msg = document.querySelector("#msg");

let turn0 =true;    // plaerO and plaerX
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turn0 =true;
    count = 0; 
    enableboxes();
    msgContener.classList.add("hide");
};

 

boxes.forEach((Box) => {
    Box.addEventListener("click", () =>{
        
        if(turn0){  
         Box.innerText ="O";
         Box.classList.add("player1");
         turn0 = false;
        
        }
        else{
            Box.innerText = "X";
            Box.classList.add("player2");

            turn0 = true;
        }
     

    let isWinner = cheakWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    
    }
    
}
)
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContener.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
    for(let Box of boxes){
        Box.disabled = true;            // not click after winner is found
    }
};

const enableboxes = () => {
    for(let Box of boxes){
        Box.disabled = false;
        Box.innerText ="";
    }
};
 


const showWinner = (win) => {
    msg.innerText = `Congratulations, Winner is  ${win}`;
    msgContener.classList.remove("hide");
    disableBoxes();                            // disabled here to call
}

const cheakWinner =() => {
    for(patten of winPatterns){                                  // chreak the  winning patten  if any follow or not 
        
        let pos1val = boxes[patten[0]].innerText;
        let pos2val = boxes[patten[1]].innerText;
        let pos3val = boxes[patten[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !="")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                 
             showWinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);