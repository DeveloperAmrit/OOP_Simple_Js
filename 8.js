// (1) works even WITHOUT get and set 

class Animal{
    constructor(name){
        this.name = name
    }
    run(){
        console.log(`${this.name} is running`)
    }
}
let a = new Animal('Tricky')
// getting
console.log(a.name)

// setting
a.name = 'Sonia'
console.log(a.name)

// (2) get and set

class Robot{
    constructor(model){
        this._model = model
    }
    charging(){
        console.log(`${this._model} is charging`)
    }

    //get ↓ this is now the name of property, change actual property name to _name
    get model(){
        return this._model 
    }

    //set
    set model(model){
        this._model = model
    }
}

let b = new Robot('Jarvis')
console.log(b.model)

b.model = 'Rajni'
console.log(b.model)