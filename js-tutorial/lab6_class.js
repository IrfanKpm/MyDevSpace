


class Person{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }
    sayMyname(){
        return this.fName + " " + this.lName;
    }
}

let p1 = new Person("Bruce","Wayne");

console.log(p1.sayMyname())