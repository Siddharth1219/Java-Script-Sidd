console.log("I am Siddharth Yadav");







// For Loop Tutorial it is used to run a block of code for a specific number of times.

let a = 0;

for (i = 0; i < 100; i++) {
    console.log(a + i);
}







// For in  Loop   it is used to iterate over the properties of an object.

let obj = {
    name: "Siddharth",
    role: "Full Stack Developer",
    company: "Turing.com"
}

for (const key in obj) {

    const element = obj[key];

    console.log(key, element);
}






// For of Loop   it is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

for (const c of "Siddharth") {
    console.log(c);
}







//  While Loop Tutorial it is used to run a block of code as long as a specified condition is true.


let b = 7;
while (b < 10) {
    console.log(b);
    b++;
}






// Do While Loop Tutorial it is used to run a block of code once, and then repeat the loop as long as a specified condition is true.

let t = 14;
do {
    console.log(t);
    t++;
} while (t < 10);