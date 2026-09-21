let arr = [1, 2, 4, 6, 8, 0];
// index - 0, 1, 2, 3, 4, 5


console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);


arr[3] = 10; //index 3 value is changed to 10
console.log(arr);


console.log(typeof arr); //object


// Array Methods are used to manipulate the array elements

let str = [1, 4, 23, 55, 667, 343, 66, 44];


// 1. to string() - converts array to string
console.log(str.toString());


// 2. join() - joins the array elements with a specified separator
console.log(str.join(" and "));
console.log(str.join(" * "));
console.log(str.join(" - "));


// 3. pop() - removes the last element from the array and returns it
console.log(str.pop());
console.log(str);


// 4. push() - adds a new element to the end of the array and returns the new length of the array
console.log(str.push(100, "harry"));
console.log(str);

// 5. shift() - removes the first element from the array and returns it
console.log(str.shift());
console.log(str);

// 6. unshift() - adds a new element to the beginning of the array and returns the new length of the array
console.log(str.unshift(99, 88));
console.log(str);

// 7. delete - deletes the specified index from the array
delete str[0];
console.log(str);

// 8. concat() - merges two or more arrays and returns a new array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// 9. splice() - adds/removes elements from the array
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(2, 0, "a", "b"); // adds "a" and "b" at index 2
console.log(arr4);
arr4.splice(2, 2); // removes 2 elements starting from index 2
console.log(arr4);

// 10. slice() - returns a shallow copy of a portion of an array into a new array object
let arr5 = [1, 2, 3, 4, 5];
let newArr = arr5.slice(1, 4); // returns elements from index 1 to index 3
console.log(newArr);
console.log(arr5); // original array remains unchanged

// 11. sort() - sorts the elements of an array in place and returns the sorted array
let arr6 = [3, 1, 4, 2, 5];
arr6.sort();
console.log(arr6); // sorts in ascending order

// 12. reverse() - reverses the elements of an array in place and returns the reversed array
arr6.reverse();
console.log(arr6); // reverses the sorted array

// 13. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(arr6.indexOf(4)); // returns index of element 4
console.log(arr6.indexOf(10)); // returns -1 as 10 is not present

// 14. includes() - determines whether an array includes a certain value among its entries, returning true or false
console.log(arr6.includes(3)); // returns true
console.log(arr6.includes(10)); // returns false

// 15. find() - returns the value of the first element in the array that satisfies the provided testing function
let found = arr6.find(element => element > 3);
console.log(found); // returns 4

// 16. filter() - creates a new array with all elements that pass the test implemented by the provided function
let filtered = arr6.filter(element => element > 3);
console.log(filtered); // returns [4, 5]

// 17. map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let mapped = arr6.map(element => element * 2);
console.log(mapped); // returns [6, 8, 10]

// 18. reduce() - executes a reducer function on each element of the array, resulting in a single output value
let sum = arr6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // returns 15