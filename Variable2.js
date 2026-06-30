// a = 1=;
// b = a;
//console.log(b);

// a = 10 
// {}
   // b = a;
   //onsole.log(b);
//}

c = 10
{                                  
    {
        d = 10
    }
    {
        d = c;
        console.log(d);
    }
}//console.log(d);

// globle implicit - globle, redecliration
// var - globle + function, redecliration

// let - blocked scope, variable, in the same scope we cannot redeclear
//const - blocked scope, constant, in the same scope we cannot redeclear

 // if parent is having any var and implicit globle, then child block can have let variable
 // if parent is having let variable, then child block can not have var


a = 10 
//{
  //{
      //let b = 10;
    
  //}
   //{}
      //console.log(b);
   //}
//}

{
    {
         var b = 10;
    
    }
   {
        console.log(b);
   }
}   

x = 100
{
    var v = 100
    {
        y = x
        console.log(y);
    }
    {
        z = y
        console.log(z);
        z = v;
        console.log(z);

    }
}

//if here i type var v = 100 in the parent blcok
// and in child blocl i type let y = x then i can run the code without any error because var is globle and let is a block


// if here i type let v = 100 in the parent block
// and in child block i type var y = x then i will get an error because let is block scope and var is globle scope ande cannot access the variable ecleared without var in the parent block
