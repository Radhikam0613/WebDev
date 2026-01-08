let num = [1,2,3,4,5,6];

// // arr.forEach( function(el) {
// //       console.log(el);
// //       }
// // );

// arr.forEach( (el) => {
//       console.log(el);
//       }
// );

// let aa = [
//       {
//             nam: "joon"
//       },{
//             nam: "jin"
//       },{
//             nam: "gi"
//       },{
//             nam: "seok"
//       }
// ]
// aa.forEach((aa) => {
//       console.log("nam" + aa.nam);
      
// })

// let hehe = aa.map((el) => {
//       return "nam" + el.nam + " rocks";      
// })

// let nums = [10,20,30,40];
// let finalVal = nums.reduce((res,el) => {
//       console.log(res);
//       return res + el; 
// });
// console.log(finalVal);

// let rem = nums.every((el) => (el % 10 == 0));
// console.log(rem);

// let minimum = nums.reduce((min,el) => {
//       if(min < el) {
//            return min;
//       } else {
//       return el;
//       }
// })
// console.log(minimum);

// function fxn(a,b = 2) {
//       return a + b;
// }

console.log("hello");
console.log(..."hello");

let newNum = [...num, "id"];
console.log(newNum);

let g = [..."hello"];

let obj = {...num};
// {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}

function bleh(...f) {
      for (let i = 0; i < f.length; i++) {
            console.log(f[i]);
                        
      }
}

function bleh2() {
      console.log(arguments);
      
}
function min(msg, ...args) {
      console.log("first param" + msg);
      return args.reduce((min, el) => {
            if (min > el) {
                  return el;
            } else {
                  return min;
            }
      });
}
// min("he",23,64,234,34);  first paramhe 23
// min(23,64,234,34);first param23 34

const std = {
      name : "riya",
      age : 12,
      username:"kr12",
      password:"12kr",
      // city:"pune"
};
let {username : user, password : secret, city: loc = "mumbai"} = std;