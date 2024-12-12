const score=400
const balance = new Number(100)
console.log(balance)
console.log(score)
console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));
function randomIntWithoutPlusOne(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomIntWithoutPlusOne(10, 20)); // Possible outputs: 10 to 19
