let door ={
    door:'big ddor for me'
};

let window = {
    window: 'big window for me'
};

class Parent {
    
}

Object.assign(Parent.prototype,door,window);

var instance = new Parent();

console.log(instance.window);

/**
 * this is the example where we can chain the prototype to the
 * Class so that all the insatnces have the properties which are assigned
 * to the the object
 */