// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
console.log("Original list of fruits:", fruits);

function addFruit(fruits, newFruit) {
    fruits.push(newFruit);
    console.log(`${newFruit} added successfully!`);
}

addFruit(fruits, 'kiwi');
console.log("List of fruits after adding an element:", fruits);

function removeFruit(fruits) {
    let fruitToRemove = fruits.pop();
    console.log(`${fruitToRemove} removed successfully!`);
}

removeFruit(fruits);
console.log("List of fruits after removing an element:", fruits);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
console.log("Original list of numbers:", numbers);

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}

let sortedNumbers = sortNumbers(numbers);
console.log("List of numbers after sorting:", sortedNumbers);

// Task 3: Applying Array Methods
function doubleNumbers(numbers) {
    return numbers.map((number) => 2 * number);
}

let doubledNumbers = doubleNumbers(numbers);
console.log("List of numbers after doubling:", doubledNumbers);

function filterNumbers(numbers) {
    return numbers.filter((number) => number % 2 == 0);
}

let filteredNumbers = filterNumbers(numbers);
console.log("List of numbers after filtering even elements:", filteredNumbers);

function calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}

let sumOfNumbers = calculateSum(numbers);
console.log("Sum of numbers:", sumOfNumbers);
