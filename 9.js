class Animal{
    constructor(name){
        this.name = name
        console.log(`${this.name} is an Animal`)
    }
}

class Monkey extends Animal{
    jump(){
        console.log(`${this.name} is jumping`)
    }
}

let a = new Animal('Sonia')
let b = new Monkey('Chimpu')

// object is an instance of class

// instanceOf keyword tells wheter an object belongs to a class or not 
// if an object belongs to the child then it also belongs to the parent

// replace "belongs to" with "is an instance of" in above 2 lines and read again.

console.log(a instanceof Animal)

console.log(b instanceof Monkey)
console.log(b instanceof Animal)