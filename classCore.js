/**
 * using the keyword Class for the creation 
 * of objects 
 */

 class Person {
     constructor(name) {
         this.name = name;
     }
      returnName() {
         return this.name;
     }
 }

 // Unlike a regular function, a class constructor can’t be called without new:

 var man = new Person('anitesh');

 console.log(man.name);
 