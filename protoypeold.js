/**
 * this is the methods for prototype chaining 
 * of the objects linking them 
 */

var autobots = {
    transform :true,
};

var optimus = {
    type : 'truck',
};

optimus.prototype = autobots;

console.log(optimus.prototype.transform);

/**
 * 
 * REACH VIA PROTOTYPES not directly
 */