// function is a reusable block of code that performs a specific task. It can take inputs, called parameters, and can return an output. Functions help to organize code, make it more readable, and allow for code reuse.

function wordis(name) {
    console.log("Hello " + name + "nice to meet you ");
    console.log("Hello " + name + "you are handsome ");
    console.log("Hello " + name + "new home ");
    console.log("Hello " + name + "nice to talk to you ");
    console.log("Hello " + name + "you are a good person ");
    console.log("Hello " + name + "you are a great human being ");
    console.log("Hello " + name + "love it.");

}

wordis("Siddharth");


//  sum of two numbers

function sum(a, b) {
    console.log("The sum of " + a + " and " + b + " is: " + (a + b));
    return a + b;
}

sum(3, 5);
sum(10, 20);
sum(100, 200);





// Arrow function is a shorter syntax for writing functions in JavaScript. It is often used for anonymous functions and can make the code more concise.

const funct1 = (x) => {
    console.log("I am an arrow function and my value is: ", x);
}

funct1(10);
funct1(20);
funct1(30);