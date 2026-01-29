// es6 js method
// import { sum } from "./modulebackend1.js";
// import { package_fxn } from "package_name";
// console.log(sum(1,6));

// common js met hod
const figlet = require("figlet");

figlet("Radhika Mankar", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});