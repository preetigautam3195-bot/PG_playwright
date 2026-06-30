
// In functions entire function got hoisted
//  f1();

//var a = 10  //besauce here var is defined out side the function.
f1();
 function f1(){
     a = 20;      //implicit globle variable
    console.log("preeti");
 }    // var is a globle level but function scope thats'why its run
 
 {
    console.log(a);
 }