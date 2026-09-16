console.log("Hello I'm Siddharth Yadav");

let age = 38;
if (age > 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}


let ageWithoutGrace = 15;
let grace = 3;

console.log(ageWithoutGrace + grace);
console.log(ageWithoutGrace - grace);
console.log(ageWithoutGrace * grace);
console.log(ageWithoutGrace / grace);
console.log(ageWithoutGrace ** grace); // exponentiationis used to calculate the power of a number like 2^3 = 8
console.log(ageWithoutGrace % grace);
console.log(ageWithoutGrace--);
console.log(ageWithoutGrace++);

if ((ageWithoutGrace + grace) > 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}



//**************Assignment Operators */


let x = 5;
let y = 10;

console.log(x = y);
console.log(x = x + y);
console.log(x = x - y);
console.log(x = x * y);
console.log(x = x / y);
console.log(x = x ** y);
console.log(x = x % y);



//**************Logical Operators */

let a = 5;
let b = 10;

console.log(a > 0 && b > 0); // true
console.log(a > 0 || b < 0); // true
console.log(!(a > 0)); // false
console.log(a != b); // true





//comparison operators

let age2 = 20;
let age3 = 18;
let age4 = 20;

console.log(age2 == age3); // false
console.log(age2 === age3); // false
console.log(age2 === age4); // true used to check the value and type of the variable
console.log(age2 != age3); // true
console.log(age2 > age3); // true
console.log(age2 < age3); // false
console.log(age2 >= age3); // true
console.log(age2 <= age3); // false






//if-else-if statement

let marks = 85;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else {
    console.log("F");
}



//tertiary operator

let marks2 = 55;

let result = (marks2 >= 90) ? "A+" :
    (marks2 >= 80) ? "A" :
    (marks2 >= 70) ? "B" :
    (marks2 >= 60) ? "C" :
    (marks2 >= 50) ? "D" : "F";

console.log(result);