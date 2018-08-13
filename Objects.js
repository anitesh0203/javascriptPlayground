// ways of declaring the objects 

let obj = new Object(); // using constructor 

let anotherObj = {}; // object literal

//using delete operator 

let test = { 
    name : 'anitesh',
    class: 'executive'
};

delete test.name;

console.log(test);

// computed properties [ ]
key ="book";
test[key]="5"; // doesnt woek 

test.newKey = "new value";
console.log(test);
console.log("book" in test);
//console.log(test.hasItsOwnProperty("book"));

// const can be changed sinec the refernce remains the same 

const a ={ 
    name :'anitesh'
};

a.name = 'ravi';

// but changing it another object changes the game 

let b ={} ;
// a=b;
console.log(a);


/***
 * cloning the object is the strategy to make the new entire new object 
 * which means the refrence should not be the same
 */

 let master = {
     name :'bruce',
     type :'batman' 
 };

 let slave = {} ;

 for (let key in master )
 {
     slave[key] = master[key];// only this type of method will work not .
 }
 console.log(slave);

 // using object.assign method 

 let sister = {
    name :'hehe',
    type :'haha' 
};

let brother = Object.assign({},sister);

console.log(sister== brother,brother);


