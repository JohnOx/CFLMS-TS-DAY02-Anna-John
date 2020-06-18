/* var menu = "fries";

    $('#result').text(menu); */


    /* Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. 
    Once the user clicks on some vehicle show its details and possibility to view the price.

    Create a Parent Class called Vehicles
    Define properties and methods for the super Class
    Consider the inheritance concept
    Define 2 other Child classes and name them Motor and Truck
    Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the 
    user clicks on the button "show price" *use your dummy custom formula) */

    let arr_vehicle = [];


    class Vehicles {
        brand;
        type;
        price;
        km_left;
        fuel_type;
        year;
    
    constructor(brand,type,price,km_left,fuel_type,year){
        this.brand = brand;
        this.type = type;
        this.price = price;
        this.km_left = km_left;
        this.fuel_type = fuel_type;
        this.year = year;

        arr_vehicle.push(this);
    }

    

    getVehicle() {
        return `This Vehicle is a ${this.brand}: type ${this.type}`;
    }

    showPrice() {
        return `This vehicle costs: ${this.price} euros.`
    }

    

    calcPrice() {
                let newPrice = +this.price-(this.price/this.km_left)*this.year/2020*this.fuel_type;
                console.log(newPrice);
    }

}
    
let car = new Vehicles("mercedes", "e220", 10000, 100,0.5,2000);

// console.log(car.calcPrice());

let car2 = new Vehicles("alfa romeo", "bello", 30000, 6000,0.9,2014);
let car3 = new Vehicles("vw", "passat", 1000, 1000,0.4,1990);
let car4 = new Vehicles("fiat", "500", 100000, 10500,0.1,2010);
console.table(arr_vehicle);

for(let i=0; i<arr_vehicle.length; i++) {
    document.getElementsByClassName('dropdown-item'[i]);
}














    /* let newVehicle1 = new Vehicles ("Mercedes","E220");

    $('#result').text(newVehicle1.getVehicle()); */

    /* class spaceShip extends Vehicles {
        fly;

        constructor(brand,type,fly) {
            super(brand,type);
            this.fly = fly;
        }

        specialAbility() {
            return `${super.getVehicle()} and I can ${this.fly}`;
        }
    }

    let Vehicle2 = new spaceShip("Enterprise","Spaceship","superfast");
    $('#result').text(Vehicle2.specialAbility()); */