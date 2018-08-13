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

/**
 * whenever we create prototype from one master which is inherited by two childs 
 * the child will have the static copy i.e modifying the one will have side effects on the
 * other as well 
 */

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple


  /**
   * fixing the above problem 
   */

   hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach= [food];
    }
  };
  
   speedy = {
    __proto__: hamster
  };
  
   lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

/**
 * here it works correctly , the reason it doesnot work above is because 
 * of the array.push method
 */


  var hero ={
      fight : true ,
  };

  var batman = {

    __proto__:hero,
    fly: true,
  }


  var superman = {
      __proto__:hero,
      dance: false
  }

superman.fight = false;

console.log('batman superhero ',batman.fight);
console.log('superman superhero ',superman.fight);
