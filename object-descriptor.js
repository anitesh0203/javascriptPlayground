/**
 * getitsownproperty is used to get the 3 property the object has 
 * writable - u can write changes to that object
 * configurable - u can modify delete 
 * and enumrable - u can access list the value 
 */

let man = {
    name :'anitesh',
    color: 'black',
};

console.log(Object.getOwnPropertyDescriptor(man,'name'));

/**
 * object.defineProperty is used to define a new property on the object 
 * for new properties need to explicitly list what's true
 * configurable is one way 
 */
Object.defineProperty(man,'address', {
    value:'aryan',
    enumerable: true,
    configurable: true,
});
man.address = "nadiya"; // wont chage 

console.log(man);

delete man.address;
console.log(man)