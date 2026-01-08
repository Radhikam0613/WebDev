// let btns = document.querySelectorAll("button");
// btn.onclick = function () {
//       alert("button!");
      
// }

// for (const btn of btns) {
      // btn.onclick = sayHello;
      // btn.onmouseenter = function () {
      //       console.log("button entered");
      // }
      // btn.addEventListener("click",sayHello);
//       btn.addEventListener("dblclick",sayName);
// }

// function sayHello() {
//       alert("Helkklo");
// }

// function sayName() {
//             console.log("button entered");
//       }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//       let h3 = document.querySelector("h3");
//       let rncl = getRandomColour();
//       h3.innerText = rncl;
      
//       let div = document.querySelector("div");
//       div.style.backgroundColor = rncl;

//       console.log("updated");
      
// });

// function getRandomColour() {
//       let red = Math.floor(Math.random()*255);
//       let green = Math.floor(Math.random()*255);
//       let blue = Math.floor(Math.random()*255);
//       let color = `rgb(${red}, ${green}, ${blue})`;
//       return color;
// };

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//       console.log("Para was clicked");      
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//       console.log("mouse inside box");
// });

// let btn = document.querySelector("button");

// function changeColour() {
//       console.log(this.innerText);
//       this.style.color = "purple";
// }

// btn.addEventListener("click", changeColour);

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//       console.log("code = ", event.code);
//       if (event.code == "ArrowUp") {
//             console.log("forward");
//       } else if (event.code == "ArrowDown") {
//             console.log("backward");
//       } else if (event.code == "ArrowLeft") {
//             console.log("left");
//       } else if(event.code == "ArrowRight") {
//             console.log("right");
//       }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//       event.preventDefault();

//       // let inp = document.querySelector("input");
//       // console.dir(inp);
//       // console.log(inp.value);

//       // let user = document.querySelector("#user");
//       // let pass = document.querySelector("#pass");
//       let user = this.elements[0];
//       let pass = this.elements[1];
//       console.log(user.value);
//       console.log(pass.value);
// })

// let inp = document.querySelector("#text");
// let p = document.querySelector("p")
// inp.addEventListener("input", function () {
//       console.log(inp.value);
//       p.innerText = inp.value;
// })

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function () {
      console.log("div was clicked");    
});

ul.addEventListener("click", function(event) {
      event.stopPropagation();
      console.log("ul was clicked");
});

for (li of lis) {
      li.addEventListener("click", function(event) {
            event.stopPropagation();
            console.log("li was clicked");
      });
}