
class human{

    static country = "India";
    static count = 0;
    constructor(){
        this.name;
        this.age;
        human.count = human.count + 1
    }

    talk(content){
        console.log(`${this.name} [${this.age}] : ${content}`);
    }
    happybirthday(){
        this.age = this.age +1;
    }
}

console.log(human.country);

const h1 = new human();
h1.name = "preeti";
h1.age = 30;
console.log(h1.country);     //we can't wright this type...it shoud be always class.variable because we cannot call the static level variable with object. it should be alwayd static.class
const h2 = new human();
h2.name = "granth";
h2.age = 4;

const h3 = new human();
h3.name = "tanvi";
h3.age = 32;

const h4 = new human();
h4.name = "meena";
h4.age = 53;
 
h1.talk("hello everyone");
h2.talk("how are you");
h3.talk("i am great");
h3.happybirthday();
h4.talk("i am happy");
h3.talk("today is my birthday");
h2.talk("today is my birthday");

console.log(human.count);