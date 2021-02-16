//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.


let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

let arr = ['hello', 'world', 123, 'orange'];

arr.reverse()
console.log(arr);

//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.

function reverseCharacters(str){
      var splitString = str.split(""); 
      return splitString;
}
reverseCharacters("hello");
//b) Within the function, split the string into an array, then reverse the array.
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
const reversed = array1.reverse();
console.log('reversed:', reversed);
//c) Use join to create the reversed string and return that string from the function.

function reverseString(str) {
 
    var splitString = str.split(""); // var splitString = 
    var reverseArray = splitString.reverse(); // var 
    var joinArray = reverseArray.join(""); // var 
    return joinArray; // "olleh"
}
 
reverseString("hello");
//d) Below the function, define and initialize a variable to hold a string.
//e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.

console.log(reverseCharacters('shweta'));
//f) Use method chaining to reduce the lines of code within the function.
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")


function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(1234));

//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.


//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. R(eturn the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.


