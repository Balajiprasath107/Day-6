class uber{
    constructor(distance){
        this.distance = distance
    }
    getPrice(){
        console.log(`Cost of travel Rs.${this.distance*60}.\nThank you for choosing us.`)
    }
}
//charge-> rs.60 per km 
const customer1 = new uber(10)
customer1.getPrice()
