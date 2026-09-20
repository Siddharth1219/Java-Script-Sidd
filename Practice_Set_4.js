a = "Har";
console.log(a.length); // Getting the length of the string

console.log(a.startsWith("H"));

console.log(a.endsWith("r"));

console.log(a.includes("a"));
console.log(a.includes("b"));

console.log(a.toLowerCase());


b = "Please give Rs 1000";
console.log(b.slice(15, 19)); // Slicing the string from index 15 to index 19 (not including index 19)

console.log(b.replace("1000", "5000")); // Replacing a part of the string with another string

console.log(b.split(" ")); // Splitting the string into an array of substrings based on a certain delimiter (in this case, a space)