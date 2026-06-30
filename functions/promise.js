
// fulfilled (resolve, success) - then
// rejected (reject, failure) - catch
// pending

let p1 = new Promise((resolve, reject) => {
    console.log("hello i am a promise");;
    reject("i am your failure msg");
});

p1.then((msg) => {
    console.log("then block ---- "+msg);
}).catch((err) =>{
    console.log("catch block ---- "+err);
}).finally(() => {
    console.log("i will execute anyway");
});