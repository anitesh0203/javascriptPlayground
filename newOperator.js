// If return is called with object, then it is returned instead of this.
// If return is called with a primitive, it’s ignored.

let obj = new Person ('Hero');

function Person (value) {
    this.name = value,
    this.cage ='free'
}

console.log(obj);