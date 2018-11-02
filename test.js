class Car {
    constructor(name, make) {
        this.name = name;
        this.make = make;
    }
}

// var car = new Car('Ford',2004);
// var sportsCar = new Car('Mustang',2008);

// console.log(car.name, car.make);



// function Bike(name, make) {
//     this.name = name;
//     this.make= make;
// }

// var bike = new Bike ('yamaha', 2018);
// console.log(bike.name, bike.make);


// function Plane(name, make) {

//     return { 'name' : name, 'make': make };
// }

// var plane = Plane('Jaguar',2019);
// console.log(plane.name, plane.make);

// // adding prototype to all 

// // first one 

// Car.prototype.engine;
// car.engine = "100x";
// sportsCar.engine = "10000hp";
// console.log(car.engine);
// console.log(sportsCar.engine);

// function testClosure() {
//     let count =1;

//     return function () {
//         return count++;
//     };
// }

// let now = new testClosure();

// console.log(now());
// console.log(now());
// console.log(now());


// console.log();

class Bus extends Car {
    constructor(name,value) {
        super(name,value);
    }
}

let  bus = new Bus('BMW',2004);

console.log(bus.name);
