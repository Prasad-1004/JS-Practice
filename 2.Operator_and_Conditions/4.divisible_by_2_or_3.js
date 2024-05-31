
const prompt = require("prompt-sync")();

let a = prompt("Enter a number: ");
if(a%2==0 || a%3==0){
    console.log("it is divisible by 2 or 3")
}
else{
    console.log("It is not divisible by 2 or 3")
}