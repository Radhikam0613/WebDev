// basics
// console.log("World");
// let a = 10, b = 5;
// // let output = "The sum is" + (a + b);
// let output = `The sum is ${a + b}`;
// console.log(output);
// let age = 22;
// if(age >= 18) {
//       console.log("you can vote and drive");
// }

// alerts and prompts
// console.error("error");
// console.warn("Warning");
// alert("Danger");
// let fname = prompt("Enter name");
// alert(fname); 

// string methods
// let r = "          sfv        ";
// console.log(r);
// console.log(r.trim());
// console.log(r); 
// console.log(r.indexOf("s"));
// console.log(r.indexOf("q"));

// method chaining
// let msg = "        hello     ";
// let newMsg = msg.trim();
// console.log("after trim" , newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after upperCase" , newMsg);

// array n their methods
// let msg = "        ApnaCollege     ";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);
// console.log(newMsg.slice(4).replace("L","i").replace("L","i"));
// let arr = ['he','ha','hi','ha'];
// console.log(arr);
// arr.push('hoho');
// arr.push('hohoho');
// arr.pop();
// arr.unshift("hahaha");
// arr.unshift("haha");// adds ele at start
// arr.shift(); // removes n return fitst ele from start
// console.log(arr);
// console.log(arr.slice(-2));

//loops
// for(let i=1; i<=15; i += 2){
//       console.log(i);
// }
// for(let i=2; i<=10; i += 2){
//       console.log(i);
// }

// let n = prompt("write num");
// n = parseInt(n);
// for( let i = n; i <= n*10; i += n) {
//       console.log(i);
// }

// for (let i = 0; i <=3;i++) {
//       console.log("outer loop");
//       for (let j = 0; j <=3; j++) {
//             console.log(j);
            
//       }
// }
// let i =5
// while (i <=10) {
//       console.log(i);
//       i++;
// }

// for loop
// let favMovie = "avatar";
// let user = prompt("Guess movie");

//while loop
// while (user != favMovie) {
//       if (user != "quit") {
//             console.log("you quit");
//             break; 
//       }
//       user = prompt("wrong!Try again");
// }
// if (user == favMovie) {
//       console.log("congrats");
// }

// break
// let i = 1;
// while(i <= 6) {
//       if(i == 3) break;
//       console.log(i);
//       i++;
// }

// nested loops with nested arrays
// let arr = [[1,2,3],[4,5,6]];
// for (let i = 0; i < arr.length; i++) {
//       console.log(i, arr[i],arr[i].length)
//       for (let j = 0; j < arr[i].length; j++) {
//                   console.log(`j = ${j}, ${arr[i][j]}`)
//       }      
// }
let std = [["e",13],["f",34],["t",66]];
// for (let i = 0; i < std.length; i++) {
//       console.log(`info of ${i+1}`);
//       for (let j = 0; j < std[i].length; j++) {
//             console.log(std[i][j]);
            
//       }
      
// }

for (students of std) {
      for(names of students){
                  console.log(names);
      }
}