console.log("This is a string tutorial");

let a = "Siddharth Yadav";
console.log(a[0]); // Accessing the first character of the string
console.log(a[1]); // Accessing the second character of the string
console.log(a[2]); // Accessing the third character of the string
console.log(a[3]); // Accessing the fourth character of the string  
console.log(a[4]); // Accessing the fifth character of the string  
console.log(a[5]); // Accessing the sixth character of the string

console.log(a[40]); // Accessing the 41st character of the string (which does not exist, so it will return undefined)

console.log(a.length); // Getting the length of the string



// literlas (``) is used to manipulate the string and include variables in it. It is also called template literals.

let real_name = "Siddharth Yadav";
let fake_name = "Rohan";

console.log(`His name is ${real_name} but his fake name is ${fake_name}`); // Using template literals to include variables in a string



// escape sequences are used to include special characters in a string. For example, if you want to include a new line in a string, you can use the escape sequence \n.

let b = "Siddharth";
console.log(b.toUpperCase()); // Converting the string to uppercase
console.log(b.toLowerCase()); // Converting the string to lowercase

let c = "   Siddharth Yadav   ";
console.log(c.trim()); // Removing the whitespace from the beginning and end of the string

let d = "Siddharth Yadav";
console.log(d.replace("Siddharth", "Rohan")); // Replacing a part of the string with another string

let e = "Siddharth Yadav";
console.log(e.includes("Yadav")); // Checking if the string includes a certain substring

let f = "Siddharth Yadav";
console.log(f.indexOf("Yadav")); // Getting the index of a certain substring in the string

let g = "Siddharth Yadav";
console.log(g.slice(0, 5)); // Slicing the string from index 0 to index 9 (not including index 9)

let h = "Siddharth Yadav";
console.log(h.split(" ")); // Splitting the string into an array of substrings based on a certain delimiter (in this case, a space)

let i = "Siddharth Yadav";
console.log(i.charAt(0)); // Getting the character at a certain index in the string

let j = "Siddharth Yadav";
console.log(j.charCodeAt(0)); // Getting the Unicode value of the character at a certain index in the string

let k = "Siddharth Yadav";
console.log(k.concat(" is a good boy")); // Concatenating two strings together

let l = "Siddharth Yadav";
console.log(l.startsWith("Siddharth")); // Checking if the string starts with a certain substring

let m = "Siddharth Yadav";
console.log(m.endsWith("Yadav")); // Checking if the string ends with a certain substring

let n = "Siddharth Yadav";
console.log(n.repeat(3)); // Repeating the string a certain number of times

let o = "Siddharth Yadav";
console.log(o.search("Yadav")); // Searching for a certain substring in the string and returning its index

let p = "Siddharth Yadav";
console.log(p.match(/Yadav/)); // Matching a certain substring in the string using a regular expression

let q = "Siddharth Yadav";
console.log(q.replace(/Yadav/g, "Rohan")); // Replacing all occurrences of a certain substring in the string using a regular expression

let r = "Siddharth Yadav";
console.log(r.localeCompare("Rohan")); // Comparing two strings based on their Unicode values