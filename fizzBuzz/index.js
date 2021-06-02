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
  const allNumbers = mkNumbersArray(num);
  const allWords = allNumbers.map(numberToWord);
  const line = allWords.join(" ");
  return line;
}

function InverseFizzBuzz(line) {
  const sum = (sum, numb) => sum + numb;
  const allWords = line.split(" ");
  const allNumbers = allWords.map((_, i) => i + 1);
  const total = allNumbers.reduce(sum, 0);
  return total;
}

function isDivisible(num, by) {
  return num % by === 0;
}
function numberToWord(num) {
  const by3 = isDivisible(num, 3);
  const by5 = isDivisible(num, 5);
  if (by3 && by5) return "FizzBuzz";
  if (by3) return "Fizz";
  if (by5) return "Buzz";
  return String(num);
}
function mkNumbersArray(num) {
  return [...new Array(num)].map((_,i) => i+1);
}

expect(mkNumbersArray(0)).toEqual([]);
expect(mkNumbersArray(1)).toEqual([1]);
expect(mkNumbersArray(4)).toEqual([1,2,3,4]);
expect(isDivisible(10, 5)).toBe(true);
expect(isDivisible(10, 3)).toBe(false);
expect(isDivisible(1, 1)).toBe(true);
expect(numberToWord(1)).toBe("1");
expect(numberToWord(2)).toBe("2");
expect(numberToWord(3)).toBe("Fizz");
expect(numberToWord(4)).toBe("4");
expect(numberToWord(5)).toBe("Buzz");
expect(numberToWord(6)).toBe("Fizz");
expect(numberToWord(7)).toBe("7");
expect(numberToWord(10)).toBe("Buzz");
expect(FizzBuzz(16)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16");
expect(InverseFizzBuzz("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16")).toBe(136);
expect(InverseFizzBuzz("1 2 Fizz 4 Buzz Fizz 7 8")).toBe(36);

