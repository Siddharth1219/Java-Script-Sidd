let arr = [3, 5, 3, 9, 56, 33, 54];




// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element *2);

// }
// console.log(newArr);





// map in array

let newArr = arr.map((e) => {
    return e ** 2;
})
console.log(newArr);





// filter: 

let newArr2 = arr.filter((e) => {
    return e > 10;
})
console.log(newArr2);



// reduce method:

let arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);



// array from:

let myArr = Array.from("harry");
console.log(myArr);