// function dice () {
//       const val = Math.floor(Math.random() * 6) + 1;
//       console.log(`num of dice is ${val}`);
// }
// dice();
// dice();

// function table(num) {
//       // for (let i = 1; i <= 10; i++) {
//       //       console.log(`${num} * ${i} = ${num*i}`);
            
//       // }
//       for (let i = num; i < num*10; i += num) {
//             console.log(i);            
//       }
// }
// table(4);

// function sum(n) {
//       let sumof = 0;
//      for (let i = 0; i <= n; i++) {
//            sumof += i;
//      }
//      return sumof;
// }
// console.log(sum(4));

// let str = ["a","b","c","d"];
// function conCa (str) {
//       let cstr = "";
//       for (let i = 0; i < str.length; i++) {
//             cstr += str[i]; 
//       }
//       return cstr;
// }
// console.log(conCa(str));

//HIGHER ORDER FUNCTIONS
// function outerFxn () {
//       let x = 5, y =2;
//       function innerFxn () {
//             console.log(x + y);
//       }
//       innerFxn();
// }

// outerFxn();

// let greet = "Hello";
// function changeGreet() {
//       let greet = "Namaste";
//       console.log(greet);
//       function innerGreet() {
//             console.log(greet);
//       }
// }
// console.log(greet);
// changeGreet();

// let odd = function(n) {
//       console.log( n % 2 != 0 )
// }
// let even =  function(n) {
//       console.log( n % 2 == 0 )
// }

// function oddoreven(req) {
//       if (req == "odd") {
//             return odd;
//       } else if (req == "even") {
//             return even;
//       } else {
//             console.log("wrong");
//       }
// }
// let req = "even";
