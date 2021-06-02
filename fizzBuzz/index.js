// Have the function FizzBuzz(num) take the num parameter being passed and return all the numbers from 1 to num separated by spaces, 
// but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz", 
// and every number that is divisible by both 3 and 5 with the word "FizzBuzz". 

// For example: if num is 16, then your program should return the string:
// "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". 
// The input will be within the range 1 - 50.

// FizzBuzz(num: number): string

// Then implement the inverse way, where the resulting string is parsed, but converted into the sum of all the numbers from 1 to num
// execute npm start on your terminal from the current directory

const expect = require("expect");

function FizzBuzz(num) {

}

function InverseFizzBuzz(line) {

}


expect(FizzBuzz(16)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16");
expect(InverseFizzBuzz("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16")).toBe(136);
expect(InverseFizzBuzz("1 2 Fizz 4 Buzz Fizz 7 8")).toBe(36);

