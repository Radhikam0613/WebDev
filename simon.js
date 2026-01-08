let gameseq = [];
let userseq = [];

let btns = ["colour1","colour2", "colour3", "colour4"];

let started = false;
let level = 0;
let highest = localStorage.getItem("highestScore") || 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
h3.innerHTML = `Highest Score: ${highest}`;

document.addEventListener("keypress", function() {
      if (started == false) {
            console.log("Game started");
            started = true;

            levelUp();
      }
});

function btnFlash(btn) {
      btn.classList.add("flash");
      setTimeout(function() {
            btn.classList.remove("flash");
      }, 250);
}

function userFlash(btn) {
      btn.classList.add("userFlash");
      setTimeout(function() {
            btn.classList.remove("userFlash");
      }, 250);
}

function levelUp() {
      userseq = [];
      level++;
      h2.innerText = `Level ${level}`;
      
      let rdmIdx = Math.floor(Math.random() * 3);
      let rdmClr = btns[rdmIdx];
      let rdmBtn = document.querySelector(`.${rdmClr}`); // "." used to select class name
      // console.log(rdmIdx,rdmClr,rdmBtn);
      
      gameseq.push(rdmClr);
      btnFlash(rdmBtn);      
}

function highestScore() {
      if (highest < level) {
            highest = level;
            localStorage.setItem("highestScore", highest);
      }
      h3.innerHTML = `Highest Score: ${highest}`;
}

function btnPress() {
      let btn = this;
      userFlash(btn);

      userClr = btn.getAttribute("id");
      userseq.push(userClr);

      checkAns(userseq.length - 1);
}

function checkAns(idx) {
      if (userseq[idx] == gameseq[idx]) {
            if (userseq.length == gameseq.length) {
                  setTimeout(levelUp,1000);
            }
      } else {
            highestScore();
            h2.innerHTML = `Game over!<br> Your score was ${level} <br>Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                  document.querySelector("body").style.backgroundColor = "white";
            }, 100);
            reset();
      }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
      btn.addEventListener("click", btnPress);
}

function reset() {
      started = false;
      gameseq = [];
      userseq = [];
      level = 0;
}