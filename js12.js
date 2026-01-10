// async function
// async function greet() { // returns promise
//       throw "some error";
//       return "Hello!";
// }

// greet()
// .then((result) => {
//       console.log("promise resolved with result " + result);      
// })
// .catch((error) => {
//       console.log("promise rejected with result " + error);
// })

// let demo = async () => {
//       return 5;
// };

// function getNum() {
//       return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                   let num = Math.floor(Math.random() * 10) + 1;
//                   console.log(num);
//                   resolve(num);
//             }, 1000);
//       });
// }

// async function demo() {
//       await getNum();
//       await getNum();
//       await getNum();
//       await getNum();
//       getNum();
// }      
//       demo();

// error handling
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//       return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                   let num = Math.floor(Math.random() * 5) + 1;
//                   if (num > 3) {
//                         reject("promise rejected");
//                   }

//                   h1.style.color = color;
//                   resolve(`colour changed to ${color}`);
//             }, delay);
//       });
// }

// try catch error handling
// async function demo() {
//       try {
//             await changeColor("red", 1000);
//             await changeColor("blue", 1000);
//             await changeColor("yellow", 1000);
//             await changeColor("purple", 1000);
//       } catch (error) {
//             console.log("error", error);
//       }

//       let a = 5;
//       console.log("new no", a + 3);     
// }

// json
// let jsonresponse = 
// '{"fact": "A cat can jump up to five times its own height in a single bound.","length": 65}';
// console.log(jsonresponse);//json data = string

// let validResponse = JSON.parse(jsonresponse)// js object = key value pair
// console.log(validResponse);

// let json_data = JSON.stringify(validResponse);

// api handling using fetch method that returns promise
// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//       console.log(res);
//       // console.log(res.json());// used to read response in console
//       // res.json().then((data) => { // callback method
//       //       console.log(data);
//       // })
//       return res.json();// promise chaining method
// })
// .then((data) => {
//       console.log("data1 fact: ", data.fact);
//       console.log("data1 length: ", data.length);
//       return fetch(url);
// })
// .then((res) => {
//       return res.json(); // asynchronously returns a Promise that resolves to a JS object
// })
// .then((data2) => {
//       console.log("data2 fact: ", data2.fact);
//       console.log("data2 length: ", data2.length);
// })
// .catch((err) => {
//       console.log(err);
// });

// fetch method with async and await
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//       try {
//             let res = await fetch(url);// await used to wait for asynchronous fxn 
//             let data = await res.json();
//             console.log(data.fact);

//             let res2 = await fetch(url);// await used to wait for asynchronous fxn 
//             let data2 = await res2.json();
//             console.log(data2.fact);
//       } catch (error) {
//             console.log(error);
//       }
// }

