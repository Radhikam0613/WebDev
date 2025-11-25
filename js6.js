let calc = {
      add : function(a,b) {
            return a + b;
      },
      sub : function(a,b) {
            return a - b;
      },
      mul : function(a,b) {
            return a * b;
      }
}
let calc2 = {
      add2(a,b) {
            return a + b;
      },
      sub2(a,b) {
            return a - b;
      },
      mul2(a,b) {
            return a * b;
      }
}

const sum = (a,b) =>  a + b;

const cube = (a) =>  a * a * a;

// console.log("Hi");
// setTimeout( () => {
//       console.log("how r u?")
// }, 3000);
// console.log("I am hehe");

// let id = setInterval( () => {
//       console.log("A");
// },2000);

// console.log(id);
// clearInterval(id); use to stop setInterval used in console directly 


// const std = {
//       nam: "joon",
//       kim: this, // global scope for std
//       getnam: function() {
//             console.log(this);
//             return this.nam; // scope is std 
//       },
//       getmarks: () => {
//             console.log(this); // parents scope which is global
//             return this.nam;
//       },
//       getInfo1: function() {
//             setTimeout(() => { 
//                   // here also window obj only calls setTimeout but this ka calling obj goes for parent fxn
//                   console.log(this); // object scope i.e std
//             }, 2000);
//       },
//       getInfo2: function() {
//             setTimeout(function () {
//                   console.log(this); // calling obj of setTimeout i.e window
//             }, 2000);
//       }
// }

// const arrw = n => n * n;

// function wer() {
//        setInterval(() => {
//             console.log("Hello World");
//       }, 2000);
// }

let id = setInterval(() => {
      console.log("Hello World");
}, 2000);

setTimeout(() => {
      clearInterval(id);
}, 10000);