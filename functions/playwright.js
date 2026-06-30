
function click(element){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve(element + " clicked");
        }, 4000);
    });
    return p1;
}
function enterData(element, testdata){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve(element + " with " + testdata + " entered");
        }, 2000);
    });
    return p1;
}

// step 1 - cleck on sign in botton
// step 2 -enter username in username box
// step 3enter password in password box
// step 4 - click on login botton

// promises - i'll for sure give you one result
// fulfilled, rejected, pending

// await - I am pausing execution untill this method will not return me a promise
// await - function must return promise, if function not returning a promise.
// what evry that function return it will be enclosed in a promise object.
// await always use inside a function. that must be async in nature


async function testcase1(){
    await click("sign in button");
    await enterData("username", "preeti");
    await enterData("password", "password1");
    await click("login button");
}

// interview ques.- why we use wait in every step in playwright
// can we use await without async - NOOOOOO

click("sign in button").then((msg)=> {
    console.log(msg);
    return enterData("username", "preeti");
}).then((msg) => {
    console.log(msg);
    return enterData("password", "password1");
}).then((msg) => {
    console.log(msg);
    return click("login button");
}).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.error("Error : " + err);
});    