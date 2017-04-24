//console.log("this is main js");
console.log("Before Second");
a=require("./second.js");

console.log("Value of a from 2nd js = " + a.first + " and " + a.second);

console.log("After Second");
require("./third.js")