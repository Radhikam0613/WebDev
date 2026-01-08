// let smallImg = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImg.length; i++) {
//       console.dir(smallImg[i].src);      
// }

// for (let i = 0; i < smallImg.length; i++) {
//       smallImg[i].src = "assets/spiderman_img.png";
//       console.log(`value of img no ${i} is changed`);
            
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));

// let links = document.querySelectorAll(".box a");

// // for (let i = 0; i < links.length; i++) {
// //       links[i].computedStyleMap.color = "purple";      
// // }

// for (const link of links) {
//       link.style.color = "purple";
// }

let para1 = document.createElement('p');
para1.innerText="Hi";
document.querySelector("body").append(para1);
para1.classList.add("ques");

let para2 = document.createElement('h3');
para2.innerText="blue";
document.querySelector("body").append(para2);
para2.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');

div.appendChild(h1,para);
div.classList.add("bord");
h1.innerHTML = "in a div";
para.innerHTML = "me too";

document.querySelector("body").append(div);
