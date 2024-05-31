const prompt = require("prompt-sync")();
let a = prompt("What is your age : ");
if(a>10 && a<20){
    console.log("allowed");
}
else {
    console.log("Not allowed");
}