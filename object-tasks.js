

function Accumulator (input) {
    this.value = input,
    this.read = () => {
            this.value+= this.value;
    }    

}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values