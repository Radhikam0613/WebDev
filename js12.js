// async function greet() {
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

function getNum() {
      return 5;
}

function demo() {
      getNum();
}