class Animal{
    constructor(){
        console.log(this.capatalize('hello'))
        // console.log(this.splitter('hello')) has different syntax
        console.log(Animal.splitter('hello'))
    }
    capatalize(text){
        return text.toUpperCase()
    }
    static splitter(text){
        return text.split('')
    }
}
let Monkey = new Animal

// (1) A function of a class is associated to its objects (Monkey.) and not the class (Animal.)

// let a = Animal.capatalize('small') cannot do this
let b = Monkey.capatalize('small')


// (2) A static function is associated to its class (Animal.) and not objects (Moneky.)

let c = Animal.splitter('Amrit')
// let d = Monkey.splitter('Amrit') cannot do this

console.log(a,b)

// NOTE THAT BOTH METHODS CAN BE USED WITHIN THE CLASS