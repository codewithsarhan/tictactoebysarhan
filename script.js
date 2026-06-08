let clickBTnBoxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
let resetButton1 = document.querySelector("#resetButton");
let startButton1 = document.querySelector("#startButton");

let winingpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

let resetbtn = () => {

turnO = true ;
msgContainer.classList.add("hide");
enabledBoxes();

}

clickBTnBoxes.forEach((myClickBtn) => {
  myClickBtn.addEventListener("click", () => {
    console.log("You Click Btn");

    if (turnO) {
      myClickBtn.innerText = "O";
      myClickBtn.style.fontSize = "50px";
      myClickBtn.style.color = "blue"
      turnO = false;
    } else {
      myClickBtn.innerText = "X";
      myClickBtn.style.fontSize = "50px";
      myClickBtn.style.color = "red"
      turnO = true;
    }

    myClickBtn.disabled = true;
    chechwinner();
  });
});


let disabledbox = () => {
  for (let boxes of clickBTnBoxes) {
    boxes.disabled = true;

  }
};
let enabledBoxes = () => {
  for (let boxes of clickBTnBoxes) {
    boxes.disabled = false;
boxes.innerText = "" ;

  }
};

let winnerChecker = (winner) => {
  msg.innerText = `${winner} is Winner`;
  msg.style.fontSize = "50px";
  msg.style.fontFamily = "arial";
  msg.style.color = "green";
  msgContainer.classList.remove("hide");
  disabledbox();
};

let chechwinner = () => {
  for (let pattern of winingpattern) {
    let pos1val = clickBTnBoxes[pattern[0]].innerText;
    let pos2val = clickBTnBoxes[pattern[1]].innerText;
    let pos3val = clickBTnBoxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner");

        winnerChecker(pos1val);
      }
    }
  }
};


resetButton1.addEventListener ("click" , resetbtn);
startButton1.addEventListener ("click" , resetbtn) ;