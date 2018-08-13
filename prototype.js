/**
 * prototypes are used to chain the properties from one 
 * object to another we bind the properties from the right side to the left side object
 */

let vehicle = {

    drive: true,
};


let car = {
    hasWheels: true,
};



car.__proto__= vehicle;

console.log(car.drive);

