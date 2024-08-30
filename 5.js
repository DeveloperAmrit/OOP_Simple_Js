class Employee{
    eid;
    salary;
    position;
    login(){
        console.log('Employee has logged in')
    }
    logout(){
        console.log('Employee has logged out')
    }
    requestLeave(days){
        console.log(`Employee has been granted a leave of ${days} days`)
    }
}

class Programmer extends Employee{
    requestCoffee(coffees){
        console.log(`Employee has requested ${coffees} coffees`)
    }

    //Overriding
    requestLeave(days){
        if(confirm('Do you want one day extra leave?')){
            console.log(`Employee has been granted a leave of ${days+1} days`)
        }
        else{
            console.log(`Employee has been granted a leave of ${days} days`)        // --> Why we are copying and pasting ?
        }
    }

    // Super() is used to prevent copying as were doing in line 27     BETTER WAY
    requestLeave(days){
        if(confirm('Do you want one day extra leave?')){
            console.log(`Employee has been granted a leave of ${days+1} days`)
        }
        else{
            super.requestLeave(days)
        }
    }
}

let amrit = new Programmer()
amrit.login()
amrit.requestCoffee(1)
amrit.requestLeave(2)

// NOTES :

// all properties of parent and self are accessible with this.
// all functions of parent are accessible with super
// all functions of self are accessible with this

// if constrcutor of self is not present it moves to constructor of parent
// if propert or function of self is not present it moves to that of parent