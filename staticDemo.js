class Game {
    constructor(count) {
        this.count= count;
    }
     static returnStaticCounter() {
         this.count+= 1;
    }
}

let obj = new Game(2);

console.log(obj.count);
Game.returnStaticCounter();
console.log(obj.count);

/**
 * 
 * this is the example where the count is maintained at the
 * Global level is maintained which is isolated from object Instance
 */
