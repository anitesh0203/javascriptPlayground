function check() {
    var count = 1;
    return function () {
        return count++;
    };
}

var call = check();

console.log(call());
console.log(call());
console.log(call());