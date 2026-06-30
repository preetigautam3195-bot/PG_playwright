import { printHash, printStar, printpercentage } from "./printLayout.js";

//function is a variable in javascript


var sum = (a, b, vaibhav) => {  //arrows function - shorted form 
    let c = a + b;
    vaibhav(c);
}    

let c = 20;
let d = 40;
sum(c, d, printpercentage);   //we called these function as high odered function where we use the function as a perameter function

//for change file into function file i have to use is code on terminal =>  cd .\functions\

var age = function (printMyAge){
    console.log("my age is 30");
}

function mltiply(a2, b2, preeti){
    let c2 = a2 * b2;
    console.log(c2);
    preeti();
}

let a2 = 50;
let b2 = 15;
mltiply(a2, b2, age);

