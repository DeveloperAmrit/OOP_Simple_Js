// prevariables
let pnr = 1                            // just for now,  will fetch pnr from backend
let session_passanger_no = 1

//class
class RailwayForm{
    // properties
    name;
    from;
    to;
    PNR;
    spn;
    details;

    // constructor
    constructor(){
        console.log('Hello')
    }

    //methods
    fill(name,from,to){
        this.name = name
        this.from = from
        this.to = to
        this.spn = session_passanger_no

        this.details = {
            name: this.name,
            from: this.from,
            to: this.to,
            spn: this.spn
        }
        sessionStorage.setItem(`${this.spn}`,JSON.stringify(this.details))
        console.log('form filled! for'+this.name)
        session_passanger_no++;
    }

    submit(){
        this.PNR = pnr
        this.details['PNR'] = this.PNR
        localStorage.setItem(`${this.PNR}`,JSON.stringify(this.details))
        console.log('Ticket booked! for',this.details)
        pnr++;
    }

    cancel(){
        localStorage.removeItem(`${this.PNR}`)
        console.log('Ticket cancelled! for '+this.name)
    }
}

let form1 = new RailwayForm



// try cancel() from console
