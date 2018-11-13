function hehe(name, callback) {
    callback(name);

    console.log('hello',name);

}

hehe('anitesh',function(name){
   console.log('I am a callback', name);
});