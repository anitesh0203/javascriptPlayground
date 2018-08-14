let animal ={
    eats: true
};

let rabbit = {
    bites: true
};


rabbit.__proto__= animal;

console.log(Object.getPrototypeOf(rabbit));
Object.setPrototypeOf(rabbit,{});

console.log(Object.getPrototypeOf(rabbit));

Object.setPrototypeOf(rabbit, animal);

console.log(Object.getPrototypeOf(rabbit));

/***
 * set and get prototype are used to assign/remove prototype
 * to the objects 
 */