

// a = 10
// b = 20
// console.log(a);
// console.log(b);

// let = 10
//{
    //{
      //let a = 10
    //}
  //{
       //let b = 20
  //}
//}
// console.log(a); // showing error because of block scope of let variable

// console.log(add(10,20));

// function add(a,b){
  //return a+b;
//]

// TDZ - temporal dead zone -> if we try to access a variable before its declaration then it will show error
// hosting - the process of moving the declaration of variables and functions to the top of their scope before code execution.
// let and const - they are not hoisted to the top of their scope but they are in TDZ untill they are declared. if we try to access them befor declaration then it will show error.
// console.log(add(10,20));
// let , const - temporal dead zone

// console.log(a);
// var a = 10;

//let b = 30;
//{
    //{
       //let b = 10;
      //console.log(b);
     //}
     //}
      //console.log(b);
      //let b = 40
      //console.log(b);
    //}
//}

let a = 10;
var b = 20;

{
  let a = 30;
  var b = 40;
  const c = 50;
  d = 60;
 console.log("1:", a, b, c, d);
}

console.log("2:", a, b);

{
// console.log("3:", d); --showing erroe beacuase of tdz of let variable d
 let d = 70;
  console.log("4:", d);
} 

 console.log("5:", d);