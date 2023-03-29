// Iteration 1: Names and Input
const hacker1 = "Hector";
const hacker2 = "Francieli";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driver = hacker1;
const navigator = hacker2;

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters.`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driver.length} characters!.`
  );
}

// Iteration 3: Loops
// 3.1
let changedName = "";

for (let letter of driver) {
  changedName += letter.toUpperCase() + " ";
}

console.log(changedName);

// 3.2
let reversedName = "";

for (let i = navigator.length - 1; i >= 0; i--) {
  reversedName += navigator[i];
}

console.log(reversedName);

// 3.3
function findLongestName(firstName, secondName) {
  let longestName = "";
  if (firstName.length > secondName.length) {
    longestName = firstName;
  } else {
    longestName = secondName;
  }
  return longestName;
}

let longestName = findLongestName(driver, navigator);

for (let i = 0; i < longestName.length; i++) {
  if (driver === navigator) {
    console.log(`What?! You both have the same name?`);
    break;
  } else if (driver[i] > navigator[i]) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  } else {
    console.log(`The driver's name goes first.`);
    break;
  }
}

// BONUS TIME

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in vulputate sem. Pellentesque aliquet dictum quam, eget fermentum mauris condimentum at. Integer condimentum porta enim ut scelerisque. Donec eu ligula non lorem facilisis auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus convallis ante sit amet vehicula lacinia. Praesent vehicula elit at urna tincidunt suscipit. Mauris eu ligula nisi. Integer sed efficitur justo. Sed non diam eu ipsum rhoncus dignissim pellentesque maximus dolor. Sed aliquam egestas massa, sit amet ultricies tellus. Fusce in volutpat leo. Donec nisi erat, egestas eget mauris id, vehicula faucibus mauris. Nunc efficitur sodales pretium. Suspendisse volutpat molestie odio sit amet tristique. Proin augue arcu, aliquam sed leo vel, mattis eleifend enim. Maecenas id lacus tempus, molestie augue ut, viverra lectus.`;

let test1 = "One two three.";
let test2 = "etOne tetwo et Et thre et";

function countWords(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || i === string.length - 1) {
      counter++;
    }
  }
  return counter;
}

const numOfWords = countWords(longText);
const numOfWordsTest = countWords(test1);

console.log(numOfWords);
console.log(numOfWordsTest);

function findCountWord(word, string) {
  let counter = 0;
  let arrString = string.split(" ");
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] === word) {
      counter++;
    }
  }
  return counter;
}

console.log(findCountWord("et", test2));
console.log(findCountWord("et", longText));

// Bonus 2
let phraseToCheck1 = "stack cats";
let phraseToCheck2 = "Amor, Roma";
let phraseToCheck3 = "Here comes the sun";
let phraseToCheck4 = `Was it a car or a cat I saw?" and "No 'x' in Nixon`;

let palindrome = "";

function isPalindrome(string) {
  let newString = string.toLowerCase();
  let palindrome = "";
  for (let i = newString.length - 1; i > 0; i--) {
    palindrome += newString[i];
  }
  if (newString === palindrome) {
    console.log(`"${string}" is a Palindrome.`);
  } else {
    console.log(`"${string}"" is not a Palindrome.`);
  }
}

console.log(isPalindrome(phraseToCheck1));
console.log(isPalindrome(phraseToCheck2));
console.log(isPalindrome(phraseToCheck3));
console.log(isPalindrome(phraseToCheck4));
