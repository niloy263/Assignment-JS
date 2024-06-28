                // 1 //

function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(5, 4));


                // 2 //


function isEven(n) {
    return n % 2 === 0 ;
}
console.log(isEven(4));
console.log(isEven(5));


                // 3 //


function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([10,22,13,14,5]));


                // 4 //


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Niloy"));  


                // 5 //


function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5]));

                // 6 //


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

                // 7 //


function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2])); 


                // 8 //


function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); 
