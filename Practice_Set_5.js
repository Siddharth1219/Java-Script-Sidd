let arr = [1, 2, 3, 4, 5];

// Function to calculate the sum of elements in the array
function calculateSum(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(calculateSum(arr));


// use array methods to calculate the sum of elements in the array by input take userSelect: