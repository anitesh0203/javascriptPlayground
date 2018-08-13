// this in general 


function callMe(){
   //  console.log(this);

}

callMe(); // prints the window object


// this demo

let obj ={

    name : 'anitesh',
    caller: function () {
        console.log('this is the user ', this.name);
    }
};
/*
When parentheses () are called on the Reference Type, they receive the full information about the object and its method, and can set the right this (=user in this case).
*/
let holder = obj.caller; // undefined because the caller function doesnt have the obj refrence 
holder ();

// curious case of the arrow function 

let tester = {
name: 'scrooge',
check : function () {

    test =() => {
        name: 'chip';

        console.log('Inner call',this.name); // call goes this context outside 
    };
    test();
}


};

tester.check();

// the golden rules is KEEP . CLOSER TO THE () as the call gets transformed to the function 