// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log("Original string:", message);

function findLength(string) {
    return string.length;
}

let stringLength = findLength(message);
console.log("Length of string:", stringLength);

// Task 2: Converting Cases
let text = "Hello, World!";
console.log("Original string:", text);

function convertToUppercase(string) {
    return string.toUpperCase();
}

function convertToLowercase(string) {
    return string.toLowerCase();
}

let uppercaseString = convertToUppercase(text);
console.log("String after converting to uppercase:", uppercaseString);

let lowercaseString = convertToLowercase(text);
console.log("String after converting to lowercase:", lowercaseString);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Original string:", sentence);

function extractSubstring(string, start, end) {
    return string.substring(start, end);
}

let substring = extractSubstring(sentence, 4, 19);
console.log("Selected substring of string:", substring);

// Task 4: Splitting Strings
let words = "The quick brown fox";
console.log("Original string:", words);

function splitString(string) {
    return string.split(" ");
}

let array = splitString(words);
console.log("Array of words split by spaces:", array);