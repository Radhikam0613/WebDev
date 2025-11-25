// let todo = [];

// let req = prompt("enter request");

// while (true) {
//       if (req == "quit") {
//             console.log("quitting...");
//             break;
//       }
//       if (req == "list") {
//             for(task of todo){
//                   console.log(task);
//             }
//       } else if (req == "add") {
//             let task = prompt("enter task to add");
//             todo.push(task); 
//             console.log("added");
//       } else if (req == "delete") {
//             let idx = prompt("enter task idx");
//             todo.splice(idx,1);
//             console.log("deleted");
//       } else {
//             console.log("wrong request");
//       }
//       req = prompt("enter request");
// }

// let student = {
//       names : "s",
//       age : 23,
//       marks : {
//             his : 99,
//             civ : 88,
//             geo : 11,
//             eco : 99
//       }
// };

// let objinarr = [
//       {
//             nam : "joon",
//             seok : "jin"
//       },
//       {
//             min : "yoongi",
//             tae : "hyung"
//       }
// ]
// console.log(objinarr[1].min);
// // to generate random no b/w 1 to 10 (+1 because random() excludes 1 from 0 to 1 range)
// let random = Math.floor(Math.random() * 10) + 1;
// // to generate random no b/w 1 to 100
// let random2 = Math.floor(Math.random() * 100) + 1;
// console.log(random2);
// // to generate random no b/w 21 to 25
// let random3 = Math.floor(Math.random() * 5) + 21;
// // Math.floor(Math.random() * 5) gives 0,1,2,3,4

// const max = prompt("Enter max num");
// let enter = prompt("Guess num");
// const rand = Math.floor((Math.random() * max) + 1);
// while (true) {
//       if(enter == "quit") break;
//       if (rand == enter) {
//       console.log(`won it was ${rand}`);
//       break;
//       } else if (enter < rand) {
//             enter = prompt("guess smaller than the num")
//       } else if (enter > rand) {
//             enter = prompt("guess larger than the num")
//       } else {
//       enter = prompt("Wrong! Guess num again");
//       }
// }

