var Bobby = {
    name :'Bobby'
};

var Patti = {
    name: 'Patti'
};

function display (type) {
    console.log(this.name,type);
}

display.call(Bobby,'VIP');
display.call(Patti,'Local');


/***
 * func.call(context, ...args); // pass an array as list with spread operator
   func.apply(context, args);   // is same as using apply
 */