VAR keyword : the var key word should be less used its more power ful and the scope is at two levels 
        1. function 
        2. Global 
        i.e a function () {
            {
                var a=1;
            }
            console.log();
        }

Also the variables are hoisted if they are declared as var.

GLOBAL OBJECT : In a browser it is named “window”, for Node.JS it is “global”, for other environments it may have another name.

var user = "Global";

function sayHi() {
  var user = "Local";

  alert(window.user); // Global
}

sayHi();


*********************************************************************
The "new Function" syntax
let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)

has access to global lexical enviroment

