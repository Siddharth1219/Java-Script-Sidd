// alert("Hello, Siddharth World!");

// console.log("Code is running.....");


// var name = prompt("What is your name?");




console.log("This is 2nd basics file for js");

var a =5;
var b = 33;
var c = " Siddarth"
console.log(a+b - 4 +c );

console.log(typeof a, typeof b, typeof c); // typeof is used to check the type of variable



const a1 = 6; // const is used to declare a constant variable which cannot be changed later
// a1 = a1 +3; // this will give an error because a1 is a constant variable and cannot be changed



//use let in modern js instead of var because var is function scoped and let is block scoped

let ab= 10;
ab = ab + 5; // this is valid because ab is declared using let and can be changed later

console.log(ab); // this will print 15 because ab is changed to 15




{
    let  a = 20; // this a is different from the a declared outside the block
    console.log(a); // this will print 20
}




//null is a special value that represents the absence of a value or a null reference. It is an assignment value that can be assigned to a variable as a representation of no value.
//number is a data type that represents numeric values. It can be an integer or a floating-point number. In JavaScript, numbers are represented using the Number type, which can handle both integers and floating-point numbers.
//string is a data type that represents a sequence of characters. It can be enclosed in single quotes, double quotes, or backticks. In JavaScript, strings are represented using the String type, which provides various methods for manipulating and working with strings.
//symbol is a data type that represents a unique identifier. It is often used as a key for object properties to avoid name collisions. Symbols are created using the Symbol() function and are guaranteed to be unique, even if they have the same description.
//undefined is a special value that represents the absence of a value or an uninitialized variable. It is the default value of variables that have not been assigned a value. In JavaScript, undefined is a primitive type and can be used to check if a variable has been assigned a value or not.
//boolean is a data type that represents a logical value, which can be either true or false. It is often used in conditional statements and logical operations. In JavaScript, boolean values are represented using the Boolean type, which can be created using the Boolean() function or by using the true and false keywords.
//bigint is a data type that represents integers with arbitrary precision. It can be used to represent very large integers that cannot be represented using the Number type. In JavaScript, bigints are created by appending the letter 'n' to the end of an integer literal or by using the BigInt() function.




let x = "Harry bhai";
let y = 5;
let z = 3.55;
let p = null;
let q = undefined;
let r = Symbol("I am a nice symbol");
let s = true;

console.log(x, y, z, p, q, r, s);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r, typeof s);



// object is a data type that represents a collection of key-value pairs. It can be used to store and organize data in a structured way. In JavaScript, objects are created using the Object type, which provides various methods for manipulating and working with objects.

let marks = {
    harry: 90,
    shubham: 80,
    siddharth: 70
}

console.log(marks);
console.log(typeof marks);


//questio 1st question is a create a variable of type string and add a number to it. Show the output and its type.
var siddharth = "I am a good boy";
console.log(siddharth + 5);

// question 2nd use typeof operator to find the type of the variable in question 1
console.log(typeof siddharth );

// question 3rd create a const object in js. Can you change it to hold a number later? Try doing it.
const student = {
    name: "Siddharth",
    age: 20,
    isStudying: true
};
console.log(student.age); // this will print 20 because we are accessing the age property of the student object
console.log(student.name); // this will print "Siddharth" because we are accessing the name property of the student object

student.age = 21; // this is valid because student is an object and we can change the properties of an object even if it is declared using const

console.log(student.age); // this will print 21 because we changed the age property of the student object


// question 4th  try to add a new property to the const object created in question 3. Can you do it? Try doing it.
student.city = "New York"; // this is valid because student is an object and we can add new properties to an object even if it is declared using const

console.log(student); // this will print "New York" because we added a new property city to the student object

// question 5 write a js  program to create a word meaning dictionary of 5 words

const dictionary = {
    appriciate: "to recognize the full worth of",
    benevolent: "well meaning and kindly",
    candid: "truthful and straightforward; frank",
    diligent: "having or showing care and conscientiousness in one's work or duties",
    eloquent: "fluent or persuasive in speaking or writing"
};

console.log(dictionary);