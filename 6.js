/**
 * If you donot make constructor, JS automatically makes a constructor
 * If that class extends some class it is like this
constructor(...args){
    super(...args)
}

 */

class Employee{
    constructor(name){
        this.name = name
        console.log(`${this.name} Employee is here`)
    }
}

class Programmer extends Employee{
    constructor(name,lang){
        
        // have to call super and must be called above any this. // otherwise will give error.
        super(name)

        // now write/ any thing extra that you want
        this.lang = lang
        console.log(`${this.name} knows ${this.lang}`)
    }
}

let alok = new Programmer('Alok','C#')

// strict rules for child class constrcutor

// if not defined -> will run constructor of parent
// if defined -> must have super and above any this.