class RailwayForm{
    name;
    from;
    to;

    // constructor
    constructor(name,from,to){
        console.log('Constructuing...')
        this.name = name
        this.from = from
        this.to = to
    }

    submit(){
        sessionStorage.setItem(`${this.name}`,JSON.stringify({name:this.name, from:this.from, to:this.to}))
        console.log('Ticket booked for ',this.name)
    }
    cancel(){
        sessionStorage.removeItem(`${this.name}`)
        console.log('Ticket cancelled! for ',this.name)
    }
}

let form1 = new RailwayForm("Harry","Jodhpur","Chhapra")
let form2 = new RailwayForm("Amrit","Jodhpur","Chhapra")

// Each time an object is initialized the constructor runs