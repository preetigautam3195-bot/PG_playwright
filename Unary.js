
// increment and decrement operator
// Increment operator -> increase the value by 1
// a++ -> post increment , first assignment , then increment
// ++a -> pre increment , first increment then assignment

//let a = 10;
//a = a + 1;
//a = a + 5;
//console.log(a++);
//console.log(++a);

//console.log always print assigned value
// let a = 10;
 //let b = ++a + a++;
        //11 + 11
// let b = a++ + ++a + a++ + a++ + ++a; 
//let b = a++ + ++a + ++a + a-- + a-- + ++a
    //   10 + 12 + 13 + 13 + 12 + 12
    //  10 + 12 + 12 + 13 + 15

// console.log("a" , a);
// console.log("b" , b);

let a = 30;
let b = a++ + a++ + ++a + a++ + ++a + --a + a-- + ++a + a-- + ++a + --a + a-- + ++a + ++a + a++ + --a;
      // 30 + 31 + 33 + 33 + 35 + 34 + 34 + 36 + 35 + 37 + 36 + 36 + 38 + 39 + 39 + 38 =>  
console.log(b);



