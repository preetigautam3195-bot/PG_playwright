
// Array -> an array is a data structure used to store multiple values in a single variable.

//let student1_maths = 78;
//let student_science = 89;
//let student_arts = 90;

//collection 

//let marks1 = [ 78, 89, 90 ];
// index -     0.  1.  2.
//console.log(marks1);
//console.log(marks1[5]);
//marks1[1] = 100;
//marks1[4] = 100;
//console.log(marks1);
// how aaray save these values
// array saves values in index , that entity will start with 0

//let student1_maths = 98;
//let student1_chemistry = 64;
//let student1_physics = 84;
//let student1_bio = 78;

//let marks = [98, 64, 84, 78];
//marks[14] = 96;
//console.log(marks.length);

// <-Funtion of array->

//1. Push -> add the element in the last in array
//2, Unshift -> aad element in the starting in array  
//3. Pop -> eliminate the last element in array
//4. Shift -> eliminate the element from start in array
//5. slice ->
//6. splice -> where we can remove/add element in middle of array
// splice has 3 parameter {which index, how many element you want to delete, adding element}

//let arr = [10, 20, 30];
//arr.push(40);    // [10, 20, 30, 40]
//arr.unshift(60); // [60, 10, 20, 30, 40]
//arr.push(10);    // [60, 10, 20, 30, 40, 10]
//arr.shift();     // [10, 20, 30, 40, 10]
//arr.pop();       // [10. 20, 30, 40]
//arr.push(5);     // [10, 20, 30, 40, 5]
//arr.pop();       //[10, 20 , 30, 40]
//console.log(arr);

//let arr = [10];
//arr.pop();       // []
//arr.push(40);    // [40]
//arr.unshift(10); // [10, 40]
//arr.push("preeti"); //[10, 40, "preeti"]
//arr.pop();          // [10, 40]
//arr.shift();        //[40]
//arr.push("learner");  //[40, learner ]
//console.log(arr);

let arr = [10, 20, 30, 40, 50, 60, 70,];
//arr.splice(2,1,56,67,90,100)
//console.log(arr);
//console.log(arr.slice(2,4));

// slice will never make any impact on original array
//console.table(arr);

// for (let a of arr){
//     console.log(a);
// }

// let arr1 = [1, 10, 11, 13, 89, 4, 5];
// arr1.sort();
// // convert these number into string
// // 1, 10, 11, 13, 89, 4, 5, - string
// // 1, 10, 11, 13, 4, 5, 89
// // 1, 4, 5, 10, 11, 13, 89, - number
// console.log(arr1);

// let a1 = [10, 20];
// let a2 = [10, 20, 30];
// let a3 = [10, 40, 80, 100];

// let a4 = [a1, a2, a3];   // a4 is array of aaray // 2 Dimentional arrays

// //console.log(a4[1][2]);

// // excel sheet is the 2D array example.
 
// for(let a of a4){     // for loop -> iterating(do something over again and repeatedly), so altimetly it will give 1D array in return.
//     console.log(a);
// }


let b1 = [20, 9, 3];
let b2 = [70, 40, 5];
let b3 = [80, 50, 1, 60]
let b4 = [10, 8, 30, 6, 7];

let b5 = [b1, b2, b3, b4];
//console.log(b5[3][2]);
for(let b of b5){
    console.log(b);
}
