class Animal{
    name;
    color;
    number_of_limbs;

    constructor(name,color,number_of_limbs){
        this.name = name
        this.color = color
        this.number_of_limbs = number_of_limbs
    }
    run(){
        console.log(this.name+" is running")
    }
    shout(){
        console.log(this.name+" shouted")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name+" is eating banana")
    }
}

let m1 = new Monkey("chimpu","black",4)
m1.run()
m1.shout()
m1.eatBanana()