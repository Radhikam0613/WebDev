// js single threaded asynchronous and browser handles setTimeout

// function changeColor(color, delay, nextColorChange) {
//       setTimeout(() => {
//             h1.style.color = color;
//             if(nextColorChange) nextColorChange();
//       }, delay);
// }

// changeColor("red",1000, () => {// nesting of callbacks = callback hell
//       changeColor("blue",1000, () => {
//             changeColor("green", 1000)
//       });
// });

// setTimeout(() => {
//       h1.style.color= "red";
// }, 1000);

// setTimeout(() => {
//       h1.style.color= "blue";
// }, 2000);

// setTimeout(() => {
//       h1.style.color= "green";
// }, 3000);

// callback hell
// function saveToDb(data, success, failure) {
//       let internetSpeed = Math.floor(Math.random() * 10) + 1;
//       if (internetSpeed > 4) {
//             success();
//       } else {
//             failure();
//       }
// }

// saveToDb("radhika",
//       () => {
//             console.log("data saved");
//             saveToDb("mankar", 
//                   () => {
//                         console.log("success");
//                   },
//                   () => {
//                         console.log("failure");
//                   }
//             )
//       },
//       () => {
//             console.log("Weak connection");
//       }
// );

// promises
// function saveToDb(data) {
//       return new Promise((resolve, reject) => {
//             let internetSpeed = Math.floor(Math.random() * 10) + 1;
//             if (internetSpeed > 4) {
//                   resolve("success: data saved");
//             } else {
//                   reject("Failure: weak connection");
//             }
//       });
// }

// saveToDb("Radhika")
// .then((result) => {// reeult is result of if condition in Promise definition
//       console.log("data1 saved. Promise was resolved");
//       console.log("result of promise " + result);
//       return saveToDb("Mankar");
// })
// .then((result) => {
//       console.log("data2 saved");
//       console.log("result of promise " + result);
//       return saveToDb("Nagpur");
// })
// .then((result) => {
//       console.log("data3 saved");
//       console.log("result of promise " + result);
// })
// .catch((error) => {
//       console.log("promise was rejected");
//       console.log("error of promise " + error);
// })

h1 = document.querySelector("h1");
function changeColor(color, delay) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  h1.style.color = color;
                  resolve("colour changed");
            }, delay);
      });
}

changeColor("purple", 1000)
.then(() => {
      console.log("purple color completed");
      return changeColor("red", 1000);
})
.then(() => {
      console.log("red colour completed");
      return changeColor("blue", 1000);
})
.then(() => {
      console.log("blue colour completed");
})
.catch(() => {
      console.log("less possibility not needed");
})
