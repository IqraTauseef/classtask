// 1.Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success
// function num(array) {
    
// }
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1)
// let reversedArr1 = arr1.reverse()
// console.log("Original Array:", arr1);
// console.log("Reversed Array:", reversedArr1);
// num();

// 2.Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

// function negativeNum(num){
//     let userInput = prompt('Enter The Any Negative Number')
//     let x=[1,2,3,4,5,6,7,8,9,10]
//     let filterArr = math.ceil(x)
//     console.log(filterArr)
// }
// negativeNum(); 

//3. Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.
// function countVowels(vowel) {
   
//     vowel = vowel.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let char of vowel) {
       
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// const inputString = "Hello World";
// console.log("Number of vowels:", countVowels(inputString)); 
// countVowels();

// 9.Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

function smallestRoundNumberNotLessThan(value) {
    if (value % 10 === 0) {
        return value; 
    } else {
        let nextRoundNumber = value;
        while (nextRoundNumber % 10 !== 0) {
            nextRoundNumber++;
        }
        return nextRoundNumber;
    }
}
let givenValue = 592;
let result = smallestRoundNumberNotLessThan(givenValue);
console.log(`The smallest round number not less than ${givenValue} is ${result}`);
smallestRoundNumberNotLessThan();

// 10 Write a JavaScript program to find the index of an array item in a for loop.

// function findIndex(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i; 
//         }
//     }
//     return -1; 
// }
// let arr = [1, 5, 7, 9, 12];
// let itemToFind = 7;

// let index = findIndex(arr, itemToFind);
// if (index !== -1) {
//     console.log(`Index of ${itemToFind} in the array is: ${index}`);
// } else {
//     console.log(`${itemToFind} is not found in the array.`);
// findIndex()

// 4.Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly

// function isPalindrome(str) {
   
//     str = str.toLowerCase().replace(/[\W_]/g, '');

   
//     if (str.length <= 1) {
//         return true;
//     }
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("kayak"));   // true
// console.log(isPalindrome("A man, a plan, a canal, Panama"));   // true
// isPalindrome()