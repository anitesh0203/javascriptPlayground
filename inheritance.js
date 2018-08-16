/**
 * inheritance uses the parent methods
 * Arrow functions have no super
 */

class Building {
    constructor(type) {
        this.type = type;
    }
    printBuilding() {
        return this.type;
    }
}

class Hospital extends Building{
}

var newBuilding = new Hospital("this is a hospital");

console.log(newBuilding.printBuilding());

/**
 * in the inheriting class use super in the constructor 
 */


 class Hotel extends Building {
     constructor(name) {
         super(name);
     }

     printBuilding() {
         return "this is in Hotel class"+this.type;
     }
 }

 var  newHotel = new Hotel("this is a hotel");
 console.log(newHotel.printBuilding());

 /**
  * Please note that built-in classes don’t have such static [[Prototype]] reference. 
  * For instance, Object has Object.defineProperty, Object.keys and so on, but Array, 
  * Date etc do not inherit them.
  */