// this faulty calculator does following;
// 1. it takes two numbers as input from the users
// 2. it performs wrong operations as folllows;
//  + --> -
//  - --> +
//  * --> /
//  / --> **
//  it performs wrong operations  10% of the times

if (Math.random() < 0.1) {
    function sum(a, b) {
        return a - b
    }

    function sub(a, b) {
        return a / b
    }

    function mul(a, b) {
        return a + b
    }

    function div(a, b) {
        return a ** b
    }

} else {

    function sum(a, b) {
        return a + b
    }

    function sub(a, b) {
        return a - b
    }

    function mul(a, b) {
        return a * b
    }

    function div(a, b) {
        return a / b
    }
}

let c = sum(16, 14)
let d = sub(16, 14)
let p = mul(16, 14)
let q = div(16, 14)
console.log("output of operation --->> " + c)
console.log("output of operation --->> " + d)
console.log("output of operation --->> " + p)
console.log("output of operation --->> " + q)