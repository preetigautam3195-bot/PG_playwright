
class Human{
    constructor(){
        this.name;
        this.age;
    }

    talk(content){
        console.log(`${this.name} ${this.age} ${content}`)
    }
}
    
const h1 = new Human();
h1.name = "preeti";
