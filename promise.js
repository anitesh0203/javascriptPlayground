let promise = new Promise(function(resolve,reject){
     resolve();
    //reject();
});


promise.catch( function(error) {
    console.log('iam in then');
});


promise.then(function() {
    reason();
}).catch(function(data) {
    console.log('error has occured',data);
});

function reason() {
    console.log('iam the reason');
}