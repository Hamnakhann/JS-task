//Q:1 Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

function reverseArray(arr) {
    return arr.slice().reverse(); 
}
let array5 = [1, 2, 3, 4, 5];
let reversedArray5 = reverseArray(array5);
console.log("Reversed array of 5 numbers:", reversedArray5);

let arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let reversedArrayLarge = reverseArray(arrayLarge);
console.log("Reversed array of 10 numbers:", reversedArrayLarge);

//Q:2 Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan,
// it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

function removeNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
}
const numbers = [1, -3, 5, -2, 0, 7, -1];
const positiveNumbers = removeNegativeNumbers(numbers);

console.log(positiveNumbers); // Output: [1, 5, 0, 7]

//Q:3 Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset.
// If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. 

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count; 
}
let exampleString = "Hello, World!";
console.log("Original string:", exampleString);
console.log("Number of vowels:", countVowels(exampleString));


//Q:4 Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly. */

function isPalindrome(str) {
    let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar"));                        // Output: true
console.log(isPalindrome("Hello, World!"));                  // Output: false
console.log(isPalindrome("No 'x' in Nixon"));                // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?"));  // Output: true


//Q:5Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.

function isInRange(a, b) { 
    let lowerLimit = 50;
    let upperLimit = 99;
    return (a >= lowerLimit && a <= upperLimit) || (b >= lowerLimit && b <= upperLimit);
}

// Example usage:
console.log(isInRange(45, 60));  // Output: true (60 is within the range)
console.log(isInRange(50, 49));  // Output: true (50 is within the range)
console.log(isInRange(100, 200)); // Output: false (neither is within the range)
console.log(isInRange(75, 85));  // Output: true (75 and 85 are within the range)
